'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "55f9633068f2299f824318aa4008b5e4",
".git/config": "6332dd11fb7b9aa6af7d51b8c47a1f0d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "04fa88b2a98b8cbe66b57110e3193c72",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9fb0fa601325c0fad7ae2bb9e4bbb4a5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "445111f97a40de80b7d3e1656146165b",
".git/logs/refs/heads/master": "445111f97a40de80b7d3e1656146165b",
".git/logs/refs/remotes/origin/HEAD": "34b6a8775f060ff8d124da894f6cca23",
".git/logs/refs/remotes/origin/master": "0215179eb8e800788840022b03ddeee4",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/63c40c5661d067b488b99c6405a8120a6c1975": "306197ec3c007b62e8106aa9611197d9",
".git/objects/14/c4f734768fd7c62458b7347ec2a4f7555c9b59": "3e13d151595d5e05e940acb56556d6a9",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/5b11ac3bb893457ac07c29215a4247832165da": "69e3979a95b6abaa63f789835bb59d7e",
".git/objects/1f/eecf581d75ea726605f6865e960c3121a93b7a": "7d2a72cd3a38c4a0b23291ee56ae0918",
".git/objects/24/297a9d31a07a8fbe91155e0f5c2be0d31dc4b1": "8872a9b73324e7944791b22b9a46a81e",
".git/objects/27/0a8a124e5c2e3429293dbef01dff6cf275a71f": "4ba4d0c5d5c0b487921af1cb59df074b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2e/ee52482c63b4f18e198cb5328cf0698eccce05": "ab2d1589227b4b0e81d9d975263fbab2",
".git/objects/30/9023b3a8f1ca22935753f0c391c3e52e49bac1": "c08f722e18a962c4c02cc7048cd3a7ad",
".git/objects/33/4f7364f57a3edb015020d4314e641cf282ec61": "1fa375b83a0457c0c6acb38c1129375b",
".git/objects/3a/df54590f7188eb170ae2aeff352b739f46201d": "11380a048dea4ae55f6f7f5947d9ff63",
".git/objects/3d/9f981ca146f26cf161e46c4d58b0fdb9a8818e": "aba676925008627f8f46ebb10fd79ec2",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/ca0bc022c98a845b07549e3c6a36c46365c947": "3b91461a96d7ac6c07bac873bca24033",
".git/objects/43/b933481e200621d2cf008453f9c2a4dfa85626": "45184ed753acb6e70a2da63413c20b97",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/ee11a726b0eade437cb87e123b71fa98925355": "53ff10ec19a96826603a613ab1a1561f",
".git/objects/48/f324e77a5d55975e911984f5c4aeba0a2542f2": "c783a0fa726bf336893239c2423f1dcb",
".git/objects/70/ee68cd2d59cf67e5c525a66eb663d95ccc69b3": "6dc5e7e5dc7e68ecc9edbb9110f97eed",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/52811d0e8c4ca57fba5b0cebf26d4a4dfefeaa": "71ff5e9025ae9e1cd6ca6bfb8cae6d16",
".git/objects/7b/15fb313e863a7d7b5c139e8b5c2f3214238797": "dcde74b39baec1dd3a966b1a4de609f5",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/81/c7af2031a3270c0fb726e65932f3486ab6466d": "95fc982f7b72efb5e9c8598064adbaaa",
".git/objects/85/ed03ceacad2aa8cb514dc109200dc67cd31841": "f4931ec54274ed84b22405d025c23d42",
".git/objects/87/ebe7f31d6204a64dd93e08412cf60d45dbba34": "6719663c87ae4929f9354912c65d2c79",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e8b5919219294d341faf61ba4618b956232f0e": "757cc008174219aa825c47433a3cc338",
".git/objects/8c/c0864b5d0d667b67b4b74267f88ec79ae7d46e": "8a256d804fedfcb4d273942928e86ae8",
".git/objects/8c/efc8a679d9eff9e91888902025f992d18076d1": "ddaf14283539825a149a7cd2bc0a6da6",
".git/objects/8d/80cb2cf126a3aaf5376b8dff2d94ae8f051062": "f8aa9e94d41972e51ea3a2e7e1d5f63a",
".git/objects/90/684b505b82fa0ee78c5a458285fa3b103aa34b": "83abbecf854ca69ba270a4ff1c638926",
".git/objects/90/d4ef7a47a8c2e4ae8e6844dd28d70af0bcf9bc": "a011881c2f731fabe22c6e77e6dfcacf",
".git/objects/96/9daf34704cb858bb43cf4832416bebdb45c024": "e4368e7eea474baaf3f384d9b4ed2cdb",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9b/63c09dcdf5600bd7ed8f8eb942e845c8c68702": "38e882fc75d091a830c2665807591a30",
".git/objects/9c/0acef14feaadf2f3442af0d74062d07b9654ea": "ab818f2a41d42f3976c2af3fade0ba4b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/75252df9213287d83f84006b268e6a9412d991": "2210db1e067c5aad99b881990edffc76",
".git/objects/ad/084c885a7dea380b90f91ea2321188cf266864": "fe7b4fd842024bb5d967795595911dd8",
".git/objects/ad/baa07a2b8e0bed805f6af9638904c92baa7c4c": "09e535f1a154e174328a56f0191d9ab7",
".git/objects/b2/c28422f9052c6eb73e8fd41507b68e3111eeeb": "b80d98eb0db25545881460fad01b356b",
".git/objects/b6/0d2d3dd183cf0ea5e9b68f5ff041a911f2387e": "35135e82df39a2781ca22f7f930eb9a6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/631ad76f314e1170954d4d4abff938119262e7": "79a814c695b24e780aa0faee366339f9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c6/485115a904750441359a1ddf43854b0a9243d8": "285072cfa89ba6259439941900db7fa0",
".git/objects/c8/12cbeabc56e185d44fbee40d17a05c5c497c1f": "492c9c5d671ded3c23462afb80247193",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d3/9b844732ad508dd9dcf7deba30913cf5cc1e1f": "67eefcbe8f4fbaab58be79948e2c7d7f",
".git/objects/d4/2333b738b50fc9ae0da1056927ea44bc282410": "d8c358cc7253a764a5b0b4ce8aee2082",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/4330c04b2ef0f4cc5ebee0d9c44882eaf29fef": "70033cf149d920b41ad37124673be765",
".git/objects/dd/45c6c8a2654498428a40767b06545fd9da6491": "2083bfe003a3632b6d4549bb0122eb73",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/62897d37efcc842fede06ade22ec9cdcb0cc89": "63919e380c47cd3db0894956ef59f589",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e4/5bc5194cff1038dca1d6f56c34b6ee8c15009c": "e5b89e0cacabbf10eb21a3a0be626dc5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/bca88edf8b9221921b7b7f24f0c917a9ac9e0f": "11939679f1ace01316819a2a01b780b6",
".git/objects/e9/0f49d0b660ae92d0268e280ceaa25fbcc627e9": "56fbd35ddb84ef92fbf769d0625c1af0",
".git/objects/ea/12a606b33da9bffd9a50ad009b1e04d293736c": "51325aba4d347eef225f09b89fb44b4f",
".git/objects/eb/6e6d9e9c1cf0f1584fe2ab1f734986bc72938c": "1f91c47fd9d09bdd44e58621a63ff72a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/master": "8ec05b21ff0195ebfc836d82b6df7454",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "8ec05b21ff0195ebfc836d82b6df7454",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "c94ae7128d5338dcc165078fed454792",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "4a0f7399ab3568b6e0a235ec75904fa1",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e9ae6f464443a4a3ce4035271da8a609",
"/": "e9ae6f464443a4a3ce4035271da8a609",
"main.dart.js": "3c3f6cf4d1397a42e7581f76165bd97f",
"manifest.json": "a44a974fbfbdf8214f6d08de966fc456",
"version.json": "ef0f50efccbf932ea8d6f00852c2108f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
