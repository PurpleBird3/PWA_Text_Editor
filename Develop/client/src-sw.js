// REFERENCE EXAMPLES FROM FOLDER 19 (28 mini project) etc...
// MY COMMENTS IN ALL CAPS


// **** NOT SURE ABOUT THE FIRST COSNT BELOW??? TRY REMOVING THE offlineFallback FROM THE CODE BELOW AND SEE IF IT STILL WORKS
// const {warmStrategyCache } = require('workbox-recipes');
// *** USE StaleWhileRevalidate FROM WORKBOX STRATEGY???
// https://developer.chrome.com/docs/workbox/reference/workbox-strategies/#type-StaleWhileRevalidate
// const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');

// *** UNSURE HOW TO USE offlinieFallback
const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

// warmStrategyCache HELPER FUNCTION WILL FETCH A URL AND CACHE.
warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

// offlineFallback HELPER FUNCTION RETURNS A FALLBACK RESPONSE WHEN A ROUTE MATCHES.
offlineFallback({
  pageFallback: '/index.html',
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching
// registerRoute();

// COMMENTED OUT TO KEEP ORIGINAL, PASTED IT ON LINE 38 AND STARTED THERE
registerRoute(
  // ***** ??? DEFINE THE CALL BACK FUNCTION THAT WILL FILER THE REQUESTS TO CACHE ('style', 'script', 'worker')
  ({ request }) => ['style', 'script', 'worker'].includes(request.destination),

  // ***** ??? use new StaleWhileRevalidate() STRATEGY TO CACHE THE REQUESTS
  // The strategy will respond with the cached version if available, otherwise wait for the network response.
  // https://developer.chrome.com/docs/workbox/reference/workbox-strategies/#type-StaleWhileRevalidate

  // new StaleWhileRevalidate({
  //   // Name of the cache storage.
  //   cacheName: 'asset-cache',
  //   plugins: [
  //     // This plugin will cache responses with these headers to a maximum-age of 30 days
  //     new CacheableResponsePlugin({
  //       statuses: [0, 200],
  //     }),

  // ***** CacheFirst STRATEGY
  new CacheFirst({
    // NAME OF THE CACHE NAME
    cacheName: 'asset-cache',
    plugins: [
      // THIS WILL CACHE RESPONSES FOR A MAX AGE OF 30 DAYS 
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      // THIS PLUGIN WILL DELETE ANYTHING IN THE CACHE THAT IS OLDER THAN 30 DAYS 
      new ExpirationPlugin({
        // **** IS THERE A maxEntries NEEDED HERE????
        maxEntries: 30,

        // DEFINE THE MAX AGE OF THE CACHE (30 DAYS = 30 (DAYS) * 24 (HOURS), 60 (MINUTES), 60 (SECONDS)).
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
);
