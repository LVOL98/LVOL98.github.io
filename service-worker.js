/* Qwik Service Worker */
const appBundles=[["q-11345f9f.js",[27]],["q-18c2ba9e.js",[27]],["q-1d4e3858.js",[]],["q-2377069c.js",[25,27],["AaAlzKH0KlQ","z1nvHyEppoI"]],["q-25935cef.js",[27]],["q-311ad898.js",[25,27],["nd8yk3KO22c"]],["q-31fa934f.js",[25,27],["hnjgsKzLBow","kUnjeesoBsc"]],["q-47363407.js",[13,25,27,29],["jcGuB0jzJPA"]],["q-514698a6.js",[27],["b8ZwRSp41kE","I0O2GGnUJd4"]],["q-56dcd3cb.js",[27]],["q-5d61e9c2.js",[27,31],["0T5Wt0KXY8Q","USHQYhRQTrM"]],["q-5f43eb6b.js",[13,25,27],["IyPT50v1a7g"]],["q-623ab27b.js",[27]],["q-62d68b98.js",[27]],["q-64b2fa4e.js",[27],["1F0igO8Fjts","C3ORbqR0Cc4","qVrsGyezKw4"]],["q-65db8d0d.js",[27]],["q-699108d6.js",[27]],["q-6a469193.js",[27],["c1z6q2id8HY"]],["q-6c47d9ed.js",[27]],["q-7ced0a18.js",[27,29],["6Q7k0rGbdfo"]],["q-7e9dcec7.js",[27],["qQceZbtLrN0"]],["q-888c9e69.js",[27],["BE1hF2Pw9l0","y9blzKaITCg"]],["q-8d4b83cd.js",[13,25,27],["Bl3bECrvffs"]],["q-8f2b9dbb.js",[25,27],["5X3PT0IpDNQ","iXNLXrvUJrw","SpT8Gdr7qPE","tYYYq1u40FQ"]],["q-8f4a53e1.js",[27]],["q-8fc49b2c.js",[27],["H1DCWNWGDs0"]],["q-969391c3.js",[27,31],["0AZD2ZGjhts"]],["q-9965cf1c.js",[]],["q-a0a09512.js",[27],["2w9saxBvDcg","GzGBMH8CTcE","ozFeZnfnAVo","vvN0m4akO8c"]],["q-a4f0a858.js",[]],["q-bb92a2ba.js",[27],["a0nBubIIWWY","IOeCWCVMsYo"]],["q-c0db55aa.js",[27]],["q-cb802eff.js",[25,27,29],["qcouw0U1coA","r0zwZgqMF24","WMyIlGjastc"]],["q-d5ace5ee.js",[25,27],["VkTVgkSdmLs"]],["q-ee074fc7.js",[27]],["q-f132e76d.js",[27]],["q-f24f7236.js",[25,27],["hA9UPaY8sNQ","mYsiJcA4IBc","skxgNVWVOT8","uVE5iM9H73c"]]];
const libraryBundleIds=[15];
const linkBundles=[[/^\/$/,[12,17,34,10]],[/^\/contact\/?$/,[12,17,16,8]],[/^\/cv\/?$/,[12,17,18,20]],[/^\/projects\/?$/,[12,17,24,26]],[/^\/projects\/hikers_app\/?$/,[12,17,1,11]],[/^\/projects\/intrashare\/?$/,[12,17,0,22]],[/^\/projects\/site\/?$/,[12,17,35,7]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
