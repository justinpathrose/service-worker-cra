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

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      console.log('Skip Waiting message received from client at service worker')
      self.skipWaiting()
      self.clients.claim()
      self.clients
        .matchAll()
        .then(clients => {
          clients.forEach(client => client.postMessage({ type: 'RELOAD_PAGE' }))
        })
        .catch(err => console.log('Error sending message to clients'))
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
    "revision": "ad1afd7e26621a92acd58ac026afcfec"
  },
  {
    "url": "other.jpg",
    "revision": "7c858c1e9e6c971cc360141e92fc918e"
  },
  {
    "url": "precache-manifest.caab93a9df0ae670e2e3493ba86b2f42.js",
    "revision": "caab93a9df0ae670e2e3493ba86b2f42"
  },
  {
    "url": "service-worker.js",
    "revision": "a7199e4a43f7346d54a51c97dff8a4cf"
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
    "url": "static/js/main.7d8e46e8.chunk.js",
    "revision": "628c70eafa4df7f90b4024991f533c7f"
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
