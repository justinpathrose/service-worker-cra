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
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js'
)

if (workbox) {
  console.log(`Workbox is loaded`)
  workbox.core.setCacheNameDetails({
    prefix: 'service-worker',
    suffix: 'V0',
    precache: 'PreCache',
  })

  /**
   * The workboxSW.precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precaching.suppressWarnings()
  workbox.precaching.precacheAndRoute([
  {
    "url": "cat.jpg",
    "revision": "c46f532449298c55b373384ad06f1272"
  },
  {
    "url": "dog.jpg",
    "revision": "f261979046201e8cdd61c169dded07cf"
  },
  {
    "url": "icon.png",
    "revision": "494b86e9d534028c4b233550341a67f1"
  },
  {
    "url": "index.html",
    "revision": "6913106ab4dc600fe0de8d43c3d21034"
  },
  {
    "url": "other.jpg",
    "revision": "7c858c1e9e6c971cc360141e92fc918e"
  },
  {
    "url": "precache-manifest.3a02f5e6a55d54b159df8b8ec8b684b3.js",
    "revision": "3a02f5e6a55d54b159df8b8ec8b684b3"
  },
  {
    "url": "service-worker.js",
    "revision": "b3a092a52b8abe8e541983748136a3ee"
  },
  {
    "url": "static/css/main.90d16be2.chunk.css",
    "revision": "67b5372d42299dd447883bd300e7359b"
  },
  {
    "url": "static/js/2.65aa1cca.chunk.js",
    "revision": "9d8ca240b9c16bb11084b0499f71068d"
  },
  {
    "url": "static/js/main.8be172dd.chunk.js",
    "revision": "1f21173733fedb7a886e0cea15877315"
  },
  {
    "url": "static/js/runtime~main.f550a33c.js",
    "revision": "e95bacdbdcbb3656587117e720cb5434"
  }
], {
    cleanUrls: false,
    cleanupOutdatedCaches: true,
  })
  workbox.routing.registerNavigationRoute('/index.html', {
    blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
  })
} else {
  console.log(`Workbox didn't load`)
}
