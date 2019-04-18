const workboxBuild = require('workbox-build')

// NOTE: This should be run *AFTER* all your assets are built
const buildSW = () => {
  // This will return a Promise
  return workboxBuild
    .injectManifest({
      swSrc: 'src/service-worker.js',
      swDest: 'build/SW.js',
      globDirectory: 'build',
      globPatterns: ['**/*.{js,css,html,png,jpg}'],
    })
    .then(({ count, size, warnings }) => {
      // Optionally, log any warnings and details.
      warnings.forEach(console.warn)
      console.log(`${count} files will be precached, totaling ${size} bytes.`)
    })
}

buildSW()
