'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "c88f7e0303e0cb8d6cdf0ae4f078c77c",
"index.html": "60106c8b83bbf8d08059113ba2cffa59",
"/": "60106c8b83bbf8d08059113ba2cffa59",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "50b1f7e0816ce86896836c46bfa8f3fd",
"assets/assets/images/svgs/search.svg.vec": "d62ee4d786ce9e04589e1f9d55fc3aa9",
"assets/assets/images/svgs/home_filled.svg.vec": "11fdcc4098d25f0f5374797c89238b94",
"assets/assets/images/svgs/home.svg.vec": "617a96baa41be4f58ef7641e83ba2d1b",
"assets/assets/images/svgs/cards.svg.vec": "fb39db8a961d4424397182fdc8a7e081",
"assets/assets/images/svgs/cart_filled.svg.vec": "c8a9c734a10a9c5daf86478154739556",
"assets/assets/images/svgs/heart.svg.vec": "b419dfed71a0e960702d6e0aa348c2c6",
"assets/assets/images/svgs/wallet.svg.vec": "53d5a80f60ed7ba62c064618d2910d5f",
"assets/assets/images/svgs/brush.svg.vec": "8d66796cea3eb2695dbb38ebf5d91527",
"assets/assets/images/svgs/heart_filled.svg.vec": "1d328e019e800d496f489e9f3a090791",
"assets/assets/images/svgs/profile_filled.svg.vec": "7c34ac7605f631f437cc00a66bd64f7d",
"assets/assets/images/svgs/profile.svg.vec": "c4136afed328d8b6e71b1b043ab9cf81",
"assets/assets/images/svgs/cart.svg.vec": "dafedf2c6ffa1ed72b46424bd3b9a82c",
"assets/assets/images/svgs/star.svg.vec": "eb9b03658870164067176071472687f0",
"assets/assets/images/svgs/setting.svg.vec": "3dd57e2929db7b7d5addeb59d46b3547",
"assets/assets/images/svgs/back.svg.vec": "839e4089ff0e5986c07c7a324285e00c",
"assets/assets/images/svgs/unsave.svg.vec": "24d0a9213885673a0f45f64697f1f3f6",
"assets/assets/fonts/encode_sans/EncodeSans-ExtraLight.ttf": "bfe8eb8f0f40f83e61ccb23090d92b10",
"assets/assets/fonts/encode_sans/EncodeSans-Black.ttf": "abed43a1b837cca92f90a440f3ab4171",
"assets/assets/fonts/encode_sans/EncodeSans-Bold.ttf": "45d5168962e2e0df461690130c279e93",
"assets/assets/fonts/encode_sans/EncodeSans-Thin.ttf": "8caac0713270deb118c0bb88052f5904",
"assets/assets/fonts/encode_sans/EncodeSans-Regular.ttf": "4ba3d8a808d9261be48cb262de3f76f5",
"assets/assets/fonts/encode_sans/EncodeSans-Light.ttf": "f9913319935921eb276e94bd409670a1",
"assets/assets/fonts/encode_sans/EncodeSans-SemiBold.ttf": "bfa9f3d2b167bbd7328417bcc4742ee7",
"assets/assets/fonts/encode_sans/EncodeSans-ExtraBold.ttf": "52333a89834cb210f88f84acca42753e",
"assets/assets/fonts/encode_sans/EncodeSans-Medium.ttf": "f57cb8d8afcd649f6984219f306666fa",
"assets/fonts/MaterialIcons-Regular.otf": "dda050ef5049f7a508c78d022c3ee424",
"assets/NOTICES": "6b7cc97f80d622985b927e6bf0c7cbc1",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/FontManifest.json": "29556d861bc642f89e66880803b3ac75",
"assets/AssetManifest.bin": "e4d59caa53e302be97d246dee59abda5",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "e6275706d6fd5f79c0ae99b9f58e5606",
"version.json": "98bd2ff17f21a9ea424bc7c6c03e7808",
"main.dart.js": "eacd40cebfef883dc75ec1b19007e19a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
