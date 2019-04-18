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
    "revision": "87b444342c1e70463d83496dd201aa3c"
  },
  {
    "url": "other.jpg",
    "revision": "7c858c1e9e6c971cc360141e92fc918e"
  },
  {
    "url": "precache-manifest.ced493f28f59dbd787dbcbd22fee5f1c.js",
    "revision": "ced493f28f59dbd787dbcbd22fee5f1c"
  },
  {
    "url": "service-worker.js",
    "revision": "850de8a7cd1508e2368ac6de9fcc552c"
  },
  {
    "url": "static/css/main.f0c4ce84.chunk.css",
    "revision": "a2cd8c556356352647c948604b997e17"
  },
  {
    "url": "static/js/2.65aa1cca.chunk.js",
    "revision": "9d8ca240b9c16bb11084b0499f71068d"
  },
  {
    "url": "static/js/main.78f3454c.chunk.js",
    "revision": "7548fbb3374a507815da9c5599e492bd"
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
