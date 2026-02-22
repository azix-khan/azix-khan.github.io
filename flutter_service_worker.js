'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ecc623296d80b2a84d252acd7268ac4c",
"assets/AssetManifest.bin.json": "c4ca41702cfd45bfb4061d6bc1798721",
"assets/AssetManifest.json": "3cd552e82dad46f750df57ffadf9221b",
"assets/assets/apps/bata.png": "5fb3127f456cd437df7bdc5fc2647464",
"assets/assets/apps/linguamanta-logo.jpg": "6480a003aa09c5a308ed8cd64ec108a3",
"assets/assets/apps/linguamanta.png": "4a70a3d334dd7b964838a1ba3f993fa7",
"assets/assets/apps/not-much-logo.png": "87b5532cfc07344c0fa1e7d228813f46",
"assets/assets/apps/not-much.png": "e47eaf4bc6495466555a70be1fa29ae3",
"assets/assets/apps/tax-corp-logo.png": "55675591e1da46380fe8e343e68a247a",
"assets/assets/apps/tax-corp.png": "b959d8326984fa3aa347c4b02374910a",
"assets/assets/apps/together-logo.png": "8a821331c5def1fc199202af618f9d69",
"assets/assets/apps/together.png": "f20cb15529160b9e9dec2002f84a8642",
"assets/assets/apps/together1.png": "e10ddd4f6048992e727d473e62726a69",
"assets/assets/apps/tourism-pakistan-logo.jpg": "ed27a4b3c106bf66b397e8ca9e5b1a34",
"assets/assets/apps/tourism-pakistan.jpg": "0e99c16045c48b47bd51f520f96a14f0",
"assets/assets/apps/tradex.png": "62571b86270eaf29b425fa3d84e240f4",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/photos/black-white.png": "724841ca2dc3589d86ce304d7d0ef08c",
"assets/assets/photos/color-light.png": "7fd7aa141e6c226b74ed5533f0c99896",
"assets/assets/photos/colored.png": "f5125d349d58cdfac902763654824e82",
"assets/assets/photos/mobile.png": "27725bd3334e44ca8d6b2b22a7f96bb4",
"assets/assets/projects/covid.png": "39d6f264f51ddc3d12060b75e4e12a68",
"assets/assets/projects/covidB.png": "f7cc0d2aadaa5f7bb2ab2b4c969c0f05",
"assets/assets/projects/easytransfer.png": "590a3206db49eb10329854a37ddafe11",
"assets/assets/projects/linkedin.png": "3576a8de8fe8ee0ac5d854d8bccbbbf4",
"assets/assets/projects/linkedinB.png": "c2246d688f61019bf497c46cef0e3967",
"assets/assets/projects/multiroleapp.png": "cc363a35599f6f97f6b3e381b7d770e6",
"assets/assets/projects/mytasks.png": "8ee49459e10ac102762ab50bc2ee7385",
"assets/assets/projects/mytasksB.png": "0361fcc5f8f915b4ab25db9ded5b9ca0",
"assets/assets/projects/newsapp.png": "129b40d36631ffe0bdd8d04843148cab",
"assets/assets/projects/newsappB.png": "91e71b58754ad1556b0ae8159114557f",
"assets/assets/projects/selfevalution.png": "685c4fbeeda6ae7ddf9fddcbc4084f0c",
"assets/assets/projects/signup.png": "c178541e3bdacf9c4aca284f076203bf",
"assets/assets/projects/threads.png": "0a46ef1b798a9285041decd4f6cf5bb3",
"assets/assets/projects/todoapp.png": "40cb7a7bc488b0389ab916095d8af7b3",
"assets/assets/projects/todoappB.png": "b0442a549863916cf895a1ff6eb29068",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/eurowings.png": "0d9be0a0329f89bac8900d5eef288864",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/ios-desktop.png": "80db3045fec69dfe56eda733aecd46a4",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/work/autop.jpg": "c44401d84dd50c3982177d082ec3c204",
"assets/assets/work/autop.png": "87d22af7486189697769c754e675e38a",
"assets/assets/work/cusit.png": "2f7bd1c6a006c97d9cae7bd9e3301ad0",
"assets/assets/work/encoder.png": "4ba8bfb608ddaa393aaa5109d2189960",
"assets/assets/work/extendztech.jpg": "4ad7ecb2b3c79f596e27ae01ac7031c3",
"assets/assets/work/freelancer.png": "748a26eac4c1b4fb2fcef2f1a0977521",
"assets/assets/work/growintern.png": "5ebd21402aa1956828f7aecb93cca813",
"assets/assets/work/internee.jpg": "b52d50b2163cc6b30f88a25e149528a6",
"assets/assets/work/tt.jpg": "8b663cd745bad1e65632f194f06d2b49",
"assets/assets/work/ttt.jpg": "d245af018c1b695890f70a407cd602f6",
"assets/data.json": "d8ac3d77560f5d01644da9feefa7376a",
"assets/FontManifest.json": "8344d41786f0f7089b897e98efe41924",
"assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/fonts/MaterialIcons-Regular.otf": "cfd4ed0c3ea42fd5a1db3b876dcc0304",
"assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/NOTICES": "b64e1c459f5bbc61df51cda6df6c5127",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "719cd3356de84b6280d8dc87014f5c97",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "df86a1976d76bd04cf3fcaf5add2dd0f",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "a63565fc319a1502df6c6a2c3de01c0d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "8061f5b30064ce3e2f37afb04c0fbe24",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "88778560135f25629052c5ef736ff057",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c4deeae6121d4cff16dd926d71ad3298",
"/": "c4deeae6121d4cff16dd926d71ad3298",
"main.dart.js": "de9906ca46b0e92cdc0fb47a8088bb3e",
"manifest.json": "a04f73279b7db0f77956cc2b3b489d65",
"version.json": "48345a1c142d52f3e9f1bcad806aa487"};
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
