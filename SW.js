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

  self.addEventListener('message', function(event) {
    console.log('in service worker message, do skip waiting')
    if (event.data.action === 'skipWaiting') {
      self.skipWaiting()
    }
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
    "revision": "c52b07a62da64f511451aa04d3bf30e2"
  },
  {
    "url": "other.jpg",
    "revision": "7c858c1e9e6c971cc360141e92fc918e"
  },
  {
    "url": "precache-manifest.cccec2888051e77d232b1367c65fa2af.js",
    "revision": "cccec2888051e77d232b1367c65fa2af"
  },
  {
    "url": "service-worker.js",
    "revision": "cc824ff4ede21086b9a293aa321ce539"
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
    "url": "static/js/main.463b9fdb.chunk.js",
    "revision": "a6fad60455a08b93f3cd63052a9f3964"
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
