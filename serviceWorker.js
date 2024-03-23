"use strict";

const CACHE_NAME = "e-commerce-v3";
const assets = [
  "/",
  "/index.html",
  "/src/Assets/Images/favicon.png",
  "/assets/Poppins-Regular-CTKNfV9P.ttf",
  "/assets/Poppins-Bold-qTAUjFF7.ttf",
  "/assets/Poppins-SemiBold-B_fPDAUb.ttf",
  "/assets/Inter-SemiBold-XVCL1Lno.ttf",
  "/Poppins-Medium-Cxde2ZoM.ttf",
  "/assets/Inter-Bold-zdiomvYZ.ttf",
];

async function caching() {
  const cache = await caches.open(CACHE_NAME);
  cache.addAll(assets);
}

async function respondFetch(request) {
  const cacheResponse = await caches.match(request);
  const networkResponse = fetch(request.url).then((networkRes) => {
    return caches.open(CACHE_NAME).then((cache) => {
      const skipPutResInCache = networkRes.url.includes("chrome-extension");
      if (skipPutResInCache) return networkRes;
      cache.put(request, networkRes.clone());
      return networkRes;
    });
  });

  return cacheResponse || networkResponse;
}

function updateLatestCache() {
  caches.keys().then((keys) => {
    return Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    );
  });
}

self.addEventListener("install", (event) => {
  event.waitUntil(caching());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(updateLatestCache());
});

self.addEventListener("fetch", async (event) => {
  event.respondWith(respondFetch(event.request));
});
