// REFERENCE EXAMPLES FROM FOLDER 19 (28 mini project) etc...
// MY COMMENTS IN ALL CAPS


// **** NOT SURE ABOUT THE FIRST COSNT BELOW???
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

// ??? THIS IS THE FIRST CONST FROM ABOVE THAT I'M NOT SURE ABOUT (WE WEREN"T ASKED TO DO ANYTHING WITH IT??)
warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching
// registerRoute();

// COMMENTED OUT TO KEEP ORIGINAL, PASTED IT ON LINE 38 AND STARTED THERE
registerRoute(
  // DEFINE THE CALL BACK FUNCTION THAT WILL FILER THE REQUESTS TO CACHE (JS, IMAGES, & CSS FILES)
  ({ request }) => ['style', 'image', 'script'].includes(request.destination),
  // CacheFirst STRATEGY
  new CacheFirst({
    // NAME OF THE CACHE NAME
    cacheName: 'asset-cache',
    plugins: [
      // THIS WILL CACHE RESPONSES WITH THESE HEADERS TO A MAX AGE OF 30 DAYS 
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      // THIS PLUGIN WILL DELETE ANYTHING IN THE CACHE THAT IS OLDER THAN 30 DAYS 
      new ExpirationPlugin({
        // DEFINE THE MAX AGE OF THE CACHE (30 DAYS = 30 (DAYS) * 24 (HOURS), 60 (MINUTES), 60 (SECONDS)).
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
);
