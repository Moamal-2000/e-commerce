"use strict";

const CACHE_NAME = "e-commerce-v7";
const assets = ["/", "/index.html"];

async function caching() {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(assets);
}

async function respondFetch(request) {
  const cacheResponse = await caches.match(request);

  const networkResponse = fetch(request)
    .then(async (networkRes) => {
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

async function updateCache() {
  const cache = await caches.open(CACHE_NAME);

  try {
    const response = await Promise.all(
      assets.map(async (asset) => {
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

    return response;
  } catch (error) {
    console.error("Failed to update cache:", error);
  }
}

self.addEventListener("install", (event) => event.waitUntil(caching()));
self.addEventListener("activate", (event) => event.waitUntil(updateCache()));

self.addEventListener("fetch", (event) => {
  const isGetMethod = event.request.method === "GET";

  event.respondWith(respondFetch(event.request));
  if (isGetMethod) event.waitUntil(updateCache());
});
