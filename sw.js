if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const f=e=>n(e,o),l={module:{uri:o},exports:d,require:f};i[o]=Promise.all(s.map((e=>l[e]||f(e)))).then((e=>(r(...e),d)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"1723c7918778674b33ce6575631b8947"},{url:"assets/index-C-ERK700.js",revision:null},{url:"assets/index-lmhOfKNx.css",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"favicon.ico",revision:"73f695ee2b9268e64b65bdf9b89adcbf"},{url:"favicon.svg",revision:"71dcfd191507c31dc79efe3341dfa3b9"},{url:"Icon.svg",revision:"2c71f29915bf80935ec7539ed4fddb33"},{url:"index.html",revision:"c2b0e6a391b684bae12bbc7aae259e5b"},{url:"maskable-icon-512x512.png",revision:"2c19f9b7dd455260b0065b0ee93de73b"},{url:"pwa-192x192.png",revision:"3304d970f534f540365376dd53cfb2e2"},{url:"pwa-512x512.png",revision:"af1de7449a147db1836059ad6f5f7d99"},{url:"pwa-64x64.png",revision:"226623edb344ce378c627bb7b66f7fed"},{url:"manifest.webmanifest",revision:"5e5947448a22396be921ac587bab2ba2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
