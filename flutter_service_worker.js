'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c30b4ccafa34c0df7204d0ef99323730",
"version.json": "72344395a8d534f7b51deb3278a119f5",
"index.html": "67ec40c447e0f00850ff07d772f03c3b",
"/": "67ec40c447e0f00850ff07d772f03c3b",
"main.dart.js": "7782b2407b60c72d4b81e60c09173a54",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "462ee3726f1b98c74ee0d99f1e570b00",
"razorpay_subscription.html": "07ad09fdfc199d0e074c900b65aa2c83",
"icons/Icon-192.png": "b80064a9f29205a3e5d2d0ca28e31f78",
"icons/Icon-maskable-192.png": "b80064a9f29205a3e5d2d0ca28e31f78",
"icons/Icon-maskable-512.png": "ace74f989e1521f80ac7c7cb88d047b1",
"icons/Icon-512.png": "ace74f989e1521f80ac7c7cb88d047b1",
"manifest.json": "482e42c6db3cac609f4e6e851ddb2e9f",
"assets/AssetManifest.json": "e5eca7eeeb420202b525985038b8f8fd",
"assets/NOTICES": "4a661aca67ae898683e62c197d337ee5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "7618fc8d3fd4e48fee37a5f687b233e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3a78329bb0eb79242dcd17afd59fa000",
"assets/fonts/MaterialIcons-Regular.otf": "fb8eb53188735317afeaf1b1979f95ea",
"assets/assets/item1.png": "d8c533c1f7569eb5284548e8a18328d1",
"assets/assets/item0.png": "8bd4f1f6dda2fdb888290da7921de7c4",
"assets/assets/item2_10.png": "07bddbb996191d95cdbdee43bad186df",
"assets/assets/item2.png": "42f7b6be91c76ee2fcee8dfbf9d7e52c",
"assets/assets/item3.png": "65d9bc388f46679f566feeb655829dea",
"assets/assets/offer.png": "02a19e1c8b504d2ce2057085e404720b",
"assets/assets/item4.png": "225ae69ded53bbcd63ea51fc8a2d6981",
"assets/assets/item5.png": "20871b127e8e3523d44e0c830fa09461",
"assets/assets/item2_9.png": "0a1e3a78ab9d94bda6190daa1a4fac47",
"assets/assets/item2_8.png": "5ebcc537681db6eb30baa539de4d7c5b",
"assets/assets/person.png": "8e3f92982acd367ac47a8bfd190ae4ee",
"assets/assets/rectangle_cut.png": "a7c2b943fd62ab081ffa0552330a5f60",
"assets/assets/item2_3.png": "a34400cf8d89abc4c0e4770cb354db90",
"assets/assets/item4_5.png": "cfc2069a069f933bd9405fdccebe14b6",
"assets/assets/logo_main.png": "233db6330cac93d97f10ecf86f4ea6f4",
"assets/assets/item4_4.png": "84d07434117d4052472772c720aaf283",
"assets/assets/item2_2.png": "d82f29349db7344eaea450947cbfaa3e",
"assets/assets/videos/reel0.mp4": "4d1f2b1560a4921a6b8ba9ab1c3a3691",
"assets/assets/videos/reel1.mp4": "d4576b13eeb217400c57cad56733ad70",
"assets/assets/item2_0.png": "b205b03f0a04c1e93432c2682e3d65ad",
"assets/assets/item2_1.png": "f1b89ba19066871d46952a606bef3bca",
"assets/assets/item2_5.png": "ac7ee67d8ca9e6df0a32426e3b06346a",
"assets/assets/item4_3.png": "3a119c74132390079786a6c8aba8aafa",
"assets/assets/bg1.png": "74453331aa93757ae769138e046586f4",
"assets/assets/icons/shapes_bottom.png": "936e3c99b76a204d84a2df00ab8d2c1e",
"assets/assets/icons/blue_star.png": "05e8c304efc7e9eb86ffd97a1cecc243",
"assets/assets/icons/noua_nail_logo.png": "66484d9ff2274fe74c4eb1921315df1b",
"assets/assets/icons/flexibility.png": "30824f02d452ca9508b67efe0c96c652",
"assets/assets/icons/white_logo.png": "b175215f4d8f291dc2929f650918f2e5",
"assets/assets/icons/offer.png": "6d9c94cce419fd747708e467d982791b",
"assets/assets/icons/semi_circle.png": "fe6253fe7d92285bb8f58eb567e71f41",
"assets/assets/icons/orange_curve_h.png": "8e54e7b704d3d57e2138638cdd8c193e",
"assets/assets/icons/flower2.png": "794765274f36afc89605e5ef85d4b53d",
"assets/assets/icons/instagram.png": "fe11d1359c28ca88d55d0f5f5151b081",
"assets/assets/icons/files.png": "d55af760d5f972661ce17f55aed17ff5",
"assets/assets/icons/nauvab_logo.png": "de49ad0c4e0c7d9f4b9eee453a7ed771",
"assets/assets/icons/circle_arrow.png": "1f03bcbd35127eec7940e071da21d1f6",
"assets/assets/icons/thumbs_up.png": "e4f53750ef12066e2cd7bb802ac71a37",
"assets/assets/icons/hindraj_logo.png": "b3015b03b1c4affd30a05a3d80fac53d",
"assets/assets/icons/manvi_daga_logo.png": "72b5cfe94e077d9740aa0a128bab4547",
"assets/assets/icons/circles.png": "57d5087390e0236d30dbc664065ebba7",
"assets/assets/icons/press_button.png": "8e3b2f095602e9ddff667ebd9edd5706",
"assets/assets/icons/behance.png": "ead9d6dc2dcf58843ddb7b9bc33d7bee",
"assets/assets/icons/high_quality.png": "b0e5924fda1d17fbc48644b91ee79721",
"assets/assets/icons/item4_2.png": "f0cbe232a8f901d694ffe7670c9e1157",
"assets/assets/icons/linkedin.png": "c8ecb958ffdd218a1738b0e08f3c3a2b",
"assets/assets/icons/money.png": "7471303892945549de35378853c7fca2",
"assets/assets/icons/flower.png": "0eca4d585def70189b25bb0498a8f114",
"assets/assets/icons/diamond.png": "9094e9364de128974067b89697eb8fba",
"assets/assets/icons/mk_logo.png": "c74bb23fa68e763453aef16c43aac09e",
"assets/assets/icons/kiaar_logo.png": "6bb5f24f335a86dfd6b9aa844db9bc0c",
"assets/assets/icons/mood_board.png": "224a84f4848ee62811b66da4daa5e205",
"assets/assets/icons/star.png": "f0b6c9b7db8b35586fde62460aa82d65",
"assets/assets/icons/sober_logo.png": "581dc6211e598545e45ef50bd15a757b",
"assets/assets/icons/fast_service.png": "3e7ea1d8a00b4d11c7c932b3235547a3",
"assets/assets/icons/2.png": "b8d4b107c7e43dfccd5b445ede854537",
"assets/assets/icons/3.png": "33ffadb1a16d54be09024b59671c169e",
"assets/assets/icons/orange_curve_v.png": "7b08dd59ec9fff4dd86e8f9a66433511",
"assets/assets/icons/1.png": "00a410fcc614279ee2d48cadb0291643",
"assets/assets/icons/cecil_logo.png": "dc766d2eaf2456779ca1db7096ea378d",
"assets/assets/icons/0.png": "f0546064c2eb8ea8321f4eeeff434281",
"assets/assets/icons/the_wouff_logo.png": "996942109a95cf5d1b4fdee1ac4af07f",
"assets/assets/item4_2.png": "f0cbe232a8f901d694ffe7670c9e1157",
"assets/assets/item2_4.png": "419975b175347536b50de90edd16864c",
"assets/assets/item2_6.png": "a0461d88c750174f6deead9f5a6c5952",
"assets/assets/item4_0.png": "e943118d8f15f03169fa1969f46e119d",
"assets/assets/item4_1.png": "5a7f1bc942188dfddd9716f59af5d403",
"assets/assets/item2_7.png": "c67be67a6c1adb90fe1de5a7214d5ba7",
"assets/assets/semi_circle1.png": "0f87107f28453f88af91fda6f33713d7",
"assets/assets/item3_0.png": "ad8a1a78695c1c011371b6f607e6248e",
"assets/assets/semi_circle_h1.png": "6eea5782551a4478148f4fde8533e096",
"assets/assets/item3_1.png": "90826b612c9991afb6ab06601dd59676",
"assets/assets/semi_circle2.png": "e611a6992dfc0d171e085ec4c27f1bed",
"assets/assets/image4.png": "a0fb5c384e1504c9b2c0b67cc1705585",
"assets/assets/semi_circle_h2.png": "dacf3b892bb8593098e0b5441d04b1ba",
"assets/assets/semi_circle_h3.png": "55c37a5f70c9c126f74cdb80e1bbe3b2",
"assets/assets/image1.png": "ac03e4ddbddfa902aefa34418124ef82",
"assets/assets/image0.png": "8ee38d58736d9f6a0957bf52683f68aa",
"assets/assets/item2.jpeg": "f85b4695f56b821b61ffb47b13a1dab4",
"assets/assets/image2.png": "701ca507f869f588eae89c724520025a",
"assets/assets/semi_circle_h4.png": "a92669dc36f5d1d486c1d3bea4e50586",
"assets/assets/semi_circle_h5.png": "5a5981c4838941686eba34c0f8aa7cfb",
"assets/assets/image3.png": "cc580ae1b42e20c12dc5383ba6b4ee62",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
