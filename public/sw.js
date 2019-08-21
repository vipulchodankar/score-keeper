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
    "revision": "0a27a4163254fc8fce870c8cc3a3f94f"
  },
  {
    "url": "css/style.css",
    "revision": "666e4fe0c034223bc6e90c4b4beba7ef"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "76ef53fa5a560f02905a782c429ec158"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "76ef53fa5a560f02905a782c429ec158"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "76ef53fa5a560f02905a782c429ec158"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "76ef53fa5a560f02905a782c429ec158"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "76ef53fa5a560f02905a782c429ec158"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "76ef53fa5a560f02905a782c429ec158"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "b7a970a05372549788945946aa10ec7e"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "7ba247de892e88e3143954569ef7ee12"
  },
  {
    "url": "index.html",
    "revision": "07c9b5a7fbc3f00a31e8eecf55827fc7"
  },
  {
    "url": "js/scorekeeper.js",
    "revision": "3e9f8846f34134be5ad0347f5afc6bc4"
  },
  {
    "url": "manifest.json",
    "revision": "a3905904a9f8c44b4ce81b2505f35bf2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
