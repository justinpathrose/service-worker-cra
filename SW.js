// Name of the caches used. Update the name to V2 etc when the local
// resources are updated to trigger the install event again
const preCache = 'preCache-V10'

const preCacheUrls = [
  './', // Alias for index.html
  'cat.jpg',
  'dog.jpg',
]

// install handler will take care of precaching the resources
self.addEventListener('install', event => {
  console.log('Installing service worker')
  event.waitUntil(
    caches.open(preCache).then(cache => cache.addAll(preCacheUrls))
  )
})

// activate handler takes care of cleaning up the old caches
self.addEventListener('activate', event => {
  const currentCaches = [preCache]
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        console.log(cacheNames)
        return cacheNames.filter(
          cacheName => !currentCaches.includes(cacheName)
        )
      })
      .then(cachesToDelete => {
        console.log(cachesToDelete)
        return Promise.all(
          cachesToDelete.map(cacheToDelete => {
            return caches.delete(cacheToDelete)
          })
        )
      })
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url)

  // serve cat.jpg from the cache if the request is from
  // the same-origin and the pathname is dog.jpg
  console.log('matched fetch function')
  /* if (url.origin === location.origin && url.pathname === '/dog.jpg') {
    console.log('match for dog.jpg, responding wih cat.jpg')
    event.respondWith(caches.match('/cat.jpg'))
  } */

  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response
      }
      return fetch(event.request)
    })
  )
})
