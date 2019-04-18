function register() {
  if ('serviceWorker' in navigator) {
    // Delay the service worker registration until the page has loaded to avoid performance
    // degradation caused by precaching requests for first time visit.
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('SW.js')
        .then(registration => {
          console.log(
            'Service worker registration successful, scope is: ',
            registration.scope
          )
          // fired when SW.js changes
          document.getElementById('service-worker-update').onclick = () => {
            registration.update()
          }
          registration.onupdatefound = () => {
            // when updatefound event is triggered, registration.installing is set
            const installingWorker = registration.installing

            installingWorker.onstatechange = () => {
              switch (installingWorker.state) {
                case 'installed':
                  if (navigator.serviceWorker.controller) {
                    // At this point, the old content will have been purged and the fresh content will
                    // have been added to the cache.
                    // It's the perfect time to display a "New content is available; please refresh."
                    // message in the page's interface.
                    console.log('New or updated content is available.')
                  } else {
                    // At this point, everything has been precached.
                    // It's the perfect time to display a "Content is cached for offline use." message.
                    console.log('Content is now available offline!')
                  }
                  break
                case 'redundant':
                  console.error(
                    'The installing service worker became redundant.'
                  )
                  break
                default:
                  break
              }
            }
          }
        })
        .catch(error =>
          console.log('Error during service worker registration:', error)
        )
    })
  }
}

export default {
  register,
}
