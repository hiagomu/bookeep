if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const r=e=>s(e,c),d={module:{uri:c},exports:n,require:r};i[c]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(t(...e),n)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Uimtew53KBQRxJM1J8Cmi/_buildManifest.js",revision:"e31ed336eeab5bdf67877e3ccba2bdfe"},{url:"/_next/static/Uimtew53KBQRxJM1J8Cmi/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-4ce89a6f374b2f4c.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/12-84f2c8f8b75e385f.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/1bfc9850-a6dd1101c4555ab5.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/216-9e336766daec38f3.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/251.0655f25bc4f928c0.js",revision:"0655f25bc4f928c0"},{url:"/_next/static/chunks/252f366e-1b42a566e89199cd.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/274.d26713faebf2314c.js",revision:"d26713faebf2314c"},{url:"/_next/static/chunks/300-afadc3c31b9c0801.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/347-6e074fe9960c32f8.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/435-077e9308d078d6ca.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/459-70a0d0f2fdca36bd.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/617.b7e74b27cacdc6d2.js",revision:"b7e74b27cacdc6d2"},{url:"/_next/static/chunks/785-60ab2a5a41df6d11.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/78e521c3-bac506b856c1c8e8.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/95b64a6e-028d995ab3b09871.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/ae51ba48-0c7908aeb38f1999.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/app/head-c18786859035b5cc.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/app/layout-fe08cea16808f6ec.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/app/page-674abeeeb3827099.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/app/post/%5Bslug%5D/page-7972ac1a21ffd8cd.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/app/profile/%5Bslug%5D/page-42c8440380203aea.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/app/review/page-c0b04ed28d06a6ad.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/d64684d8-f201c19dea90cd52.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/main-app-1760427bd6b4caf0.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/main-bfd43d846320dbd9.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/pages/_app-5841ab2cb3aa228d.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/pages/_error-91a854d9c9cfa29b.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-7d0b6b2244b48df3.js",revision:"Uimtew53KBQRxJM1J8Cmi"},{url:"/_next/static/css/1b1cf59279a9b628.css",revision:"1b1cf59279a9b628"},{url:"/_next/static/css/1b1e89bd0d918a66.css",revision:"1b1e89bd0d918a66"},{url:"/_next/static/css/65c8b724b88ca66a.css",revision:"65c8b724b88ca66a"},{url:"/_next/static/css/7ac0167843088ad6.css",revision:"7ac0167843088ad6"},{url:"/_next/static/media/10939feefdad71be.woff2",revision:"72b3ae37567ee5efdf2254b657c36ba9"},{url:"/_next/static/media/20b8b8f6f47c1e10.woff2",revision:"7def222d1a45cb1cb7d8c3ae675dbdcc"},{url:"/_next/static/media/2c91708671b37a8b.woff2",revision:"5808d1b0c3a511815cbe3f566c9b0e24"},{url:"/_next/static/media/370d1cc320ec5619.woff2",revision:"a6ff41d10fa89e7f8fec937c243d7428"},{url:"/_next/static/media/3828f203592f7603.woff2",revision:"e9fd398a43c9e51f9ee14e757eaf95d9"},{url:"/_next/static/media/591327bf3b62a611.woff2",revision:"0ed299a4bb5262e17e2145783b2c18f1"},{url:"/_next/static/media/7777133e901cd5ed.p.woff2",revision:"a09f2fccfee35b7247b08a1a266f0328"},{url:"/_next/static/media/839135d04a097cea.woff2",revision:"79e6e81d255edac7e8627c7e16baccf5"},{url:"/_next/static/media/87c72f23c47212b9.woff2",revision:"790d0c8dbcd491d29d58f1369c199d40"},{url:"/_next/static/media/916d3686010a8de2.p.woff2",revision:"9212f6f9860f9fc6c69b02fedf6db8c3"},{url:"/_next/static/media/9a881e2ac07d406b.p.woff2",revision:"25b0e113ca7cce3770d542736db26368"},{url:"/_next/static/media/b60fc9d2d030b5e6.woff2",revision:"68abb62ac9254f94e38e508ee2061c7c"},{url:"/_next/static/media/b89f66ecdb077e7f.p.woff2",revision:"12bb96876fc38b93380a6cc76267bd0b"},{url:"/_next/static/media/c92ff110d0ef9b86.woff2",revision:"5c9d4e296e6b27bdc0f9e6355fea368c"},{url:"/_next/static/media/d869208648ca5469.p.woff2",revision:"72993dddf88a63e8f226656f7de88e57"},{url:"/_next/static/media/dc9ab78c2735f6b0.woff2",revision:"90b0ebbdf04ea023653ea1364c598160"},{url:"/_next/static/media/default_user.c1d1a307.png",revision:"1a817a95a42d8c43031378d122a05ffe"},{url:"/_next/static/media/f93b79c1ea023ab6.woff2",revision:"96b6d54684daa94742f7bfd72a981213"},{url:"/_next/static/media/logo.cbc19948.png",revision:"6a1dccc77d8d1fdd4e9d790b61a4eb4a"},{url:"/_next/static/media/no_review.d03bb98f.svg",revision:"9f9ad50373e1ac230bb5aa3a97d41cc9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:i})=>{if(!e)return!1;const s=i.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e,sameOrigin:i})=>!!i&&!e.pathname.startsWith("/api/")),new e.NetworkFirst({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
