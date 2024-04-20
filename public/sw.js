"use strict";

// Variables
const CACHE_NAME = "e-commerce-v8";
const ASSETS = ["/", "/index.html"];

// Functions
async function cacheAssets() {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(ASSETS);
}

async function handleFetchAndCache(request) {
  const cacheResponse = await caches.match(request);

  const networkResponse = fetch(request)
    .then(async (networkRes) => {
      const shouldSkipCache = networkRes.url.includes("chrome-extension");

      if (shouldSkipCache) return networkRes;

      if (networkRes.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, networkRes.clone());
      }

      return networkRes;
    })
    .catch((err) => {
      console.error("Fetch failed:", err);
    });

  return cacheResponse || networkResponse;
}

async function updateCachedAssets() {
  const cache = await caches.open(CACHE_NAME);

  try {
    const responses = await Promise.all(
      ASSETS.map(async (asset) => {
        const fetchedResponse = await fetch(asset);

        if (fetchedResponse.ok) {
          await cache.put(asset, fetchedResponse.clone());
        }

        return fetchedResponse;
      })
    );

    const cacheKeys = await caches.keys();
    await Promise.all(
      cacheKeys
        .filter((key) => key !== CACHE_NAME)
        .map((key) => caches.delete(key))
    );

    return responses;
  } catch (error) {
    console.error("Failed to update cache:", error);
  }
}

function handleFetchEvent(event) {
  const isGetMethod = event.request.method === "GET";

  event.respondWith(handleFetchAndCache(event.request));

  if (isGetMethod) {
    event.waitUntil(updateCachedAssets());
  }
}

// Events
self.addEventListener("install", (event) => event.waitUntil(cacheAssets()));
self.addEventListener("activate", (event) =>
  event.waitUntil(updateCachedAssets())
);
self.addEventListener("fetch", handleFetchEvent);
