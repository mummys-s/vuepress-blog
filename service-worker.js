/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0fc53d41f5a60a1647cf4dd6cf7967df"
  },
  {
    "url": "assets/css/0.styles.81887141.css",
    "revision": "c47ce1fed069ef8861b2721ab9bd32e5"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "665227220dd35ef0a603d538ac1660a7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6eaee56a.js",
    "revision": "dc780378052f482b176e61630d7051cb"
  },
  {
    "url": "assets/js/11.dcdceed1.js",
    "revision": "00347b5c6e3d6d709e84bd80e40ddb44"
  },
  {
    "url": "assets/js/12.9a57f63b.js",
    "revision": "171fa26bd864aeec43a1ee71f4d3fdd3"
  },
  {
    "url": "assets/js/13.aba7d96f.js",
    "revision": "ae809c9e5b9f0faf3da2fc62d2ab59cf"
  },
  {
    "url": "assets/js/14.29364fef.js",
    "revision": "83f4953bdb9ad547440d28af96611b56"
  },
  {
    "url": "assets/js/15.0ae738a7.js",
    "revision": "466b261b129cbfed78a60feb4be3b019"
  },
  {
    "url": "assets/js/16.1ee7c1e8.js",
    "revision": "72997d0cdc769163378894ad2d54fdb7"
  },
  {
    "url": "assets/js/17.1fe2d112.js",
    "revision": "361d8a06401fbb2b014a149af17b4269"
  },
  {
    "url": "assets/js/18.2cf2cb0a.js",
    "revision": "88fe5746b8e21b1b458f8e41f51f9d3d"
  },
  {
    "url": "assets/js/19.fa4ec028.js",
    "revision": "dac513343550caa8a78e0b89355ca241"
  },
  {
    "url": "assets/js/2.651acf07.js",
    "revision": "9cc64a678749daac0ae782567f794022"
  },
  {
    "url": "assets/js/20.1152c5b1.js",
    "revision": "ffc5cceaae69093ce9ae5c01f95192e8"
  },
  {
    "url": "assets/js/21.229ca596.js",
    "revision": "d89ce6baec169fb9f56d7748bf6dbb85"
  },
  {
    "url": "assets/js/22.411bea08.js",
    "revision": "5b59d1ccb82e53566d417627bb953f59"
  },
  {
    "url": "assets/js/3.d639642c.js",
    "revision": "f45113516a922f2ce51b19b58d3e1fed"
  },
  {
    "url": "assets/js/4.34553110.js",
    "revision": "e9ca2a3a1366d919a9088189373b0448"
  },
  {
    "url": "assets/js/5.c35c6b2c.js",
    "revision": "50d579ae5eff62b33cc5b446cf3d3315"
  },
  {
    "url": "assets/js/6.c392d1a9.js",
    "revision": "c9f03c265fa15549fda5dff2c7ba2610"
  },
  {
    "url": "assets/js/7.e470270d.js",
    "revision": "298b684516c96b12b7132c453b204272"
  },
  {
    "url": "assets/js/8.907bd618.js",
    "revision": "20b59d4d71df8f78bb282a703b4cca1c"
  },
  {
    "url": "assets/js/9.679c3651.js",
    "revision": "ef6d9fc3b8581df1bc8776a097949ed6"
  },
  {
    "url": "assets/js/app.986d95e2.js",
    "revision": "614850414302c78d990d48ad95187010"
  },
  {
    "url": "code.png",
    "revision": "0fc9bdb93600d34773279acc7fa34be5"
  },
  {
    "url": "front-end/conclusion/JsArray.html",
    "revision": "81a7f9e9db50135b234d54c68e125833"
  },
  {
    "url": "front-end/conclusion/question.html",
    "revision": "14db87f318d27a7a14717e895e4900d4"
  },
  {
    "url": "front-end/conclusion/way.html",
    "revision": "4573b9e9717f2672158e9bd51e7a334e"
  },
  {
    "url": "front-end/react/react.html",
    "revision": "afd86fc8bb5e54281e6e5e5acd21e8b4"
  },
  {
    "url": "front-end/react/reactComponent.html",
    "revision": "b4c48302d462055d8b7faa37ec184fe9"
  },
  {
    "url": "front-end/react/reactIntroduction.html",
    "revision": "db576724b3d0202f9b1a1d9cc5d7e08e"
  },
  {
    "url": "front-end/react/reactLifecycle.html",
    "revision": "1345e4cfe0cf157898ec11ad634747e2"
  },
  {
    "url": "front-end/react/reactRouter5.html",
    "revision": "9ddabee24930c07c06a3ef0fceba479f"
  },
  {
    "url": "front-end/react/reactRouter6.html",
    "revision": "4c5e02ab287529ba62795585aef4439f"
  },
  {
    "url": "front-end/react/reactRouter6Detail.html",
    "revision": "1d53e5e9f5959974d7f7a33ec7787b25"
  },
  {
    "url": "front-end/react/reactScafflod.html",
    "revision": "04fafd3763663c2ac70f9417812a015b"
  },
  {
    "url": "front-end/vue/vue3.html",
    "revision": "12f3ab0e88020976bf1c6b13b7edfa2a"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "49023cfbe1a69ffc3e441dbc32e89da3"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "a1a3e3273aff82c52610b89895155474"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "6116ab0c48c86babf8be400f31f51491"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "9a803a92223dc102dcd52931585bf87d"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "3d0d179effc80ea7aeef862bba9df783"
  },
  {
    "url": "introduce/index.html",
    "revision": "51a00fcafdffb9705fcccfe7c6088a94"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
