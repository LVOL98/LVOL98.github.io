import{M as d,C as u,_ as p,a as r,f as k,l as j,b as x,c as f}from"./q-c3a507be.js";const et=f("qc-c"),nt=f("qc-ic"),H=f("qc-h"),V=f("qc-l"),M=f("qc-n"),B=d(u(()=>p(()=>import("./q-bf64f405.js"),["build/q-bf64f405.js","build/q-c3a507be.js","build/q-1251914f.css"]),"s_nd8yk3KO22c")),I=new WeakMap,st=async(t,e,s,n)=>{if(Array.isArray(t))for(const o of t){const c=o[0].exec(n);if(c){const a=o[1],S=z(o[2],c),A=o[4],E=new Array(a.length),h=[],O=N(e,n);let v;return a.forEach((l,U)=>{C(l,h,W=>E[U]=W,s)}),C(O,h,l=>v=l==null?void 0:l.default,s),h.length>0&&await Promise.all(h),[S,E,v,A]}}return null},C=(t,e,s,n)=>{if(typeof t=="function"){const o=I.get(t);if(o)s(o);else{const c=t();typeof c.then=="function"?e.push(c.then(a=>{n!==!1&&I.set(t,a),s(a)})):c&&s(c)}}},N=(t,e)=>{if(t){const s=t.find(n=>n[0]===e||e.startsWith(n[0]+(e.endsWith("/")?"":"/")));if(s)return s[1]}},z=(t,e)=>{const s={};if(t)for(let n=0;n<t.length;n++)s[t[n]]=e?e[n+1]:"";return s},ot=(t,e,s)=>{const n=Q(),o={data:t?t.body:null,head:n,...e};for(let c=s.length-1;c>=0;c--){const a=s[c]&&s[c].head;a&&(typeof a=="function"?P(n,a(o)):typeof a=="object"&&P(n,a))}return o.head},P=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),y(t.meta,e.meta),y(t.links,e.links),y(t.styles,e.styles)},y=(t,e)=>{if(Array.isArray(e))for(const s of e){if(typeof s.key=="string"){const n=t.findIndex(o=>o.key===s.key);if(n>-1){t[n]=s;continue}}t.push(s)}},Q=()=>({title:"",meta:[],links:[],styles:[],frontmatter:{}}),ct=()=>k(H),at=()=>k(V),rt=()=>k(M),it=()=>j(x("qwikcity")),m=t=>t.pathname+t.search+t.hash,i=(t,e)=>new URL(t,e.href),w=(t,e)=>t.origin===e.origin,q=(t,e)=>t.pathname+t.search===e.pathname+e.search,Y=(t,e)=>t.pathname===e.pathname,R=(t,e)=>w(t,e)&&!q(t,e),G=t=>t+(t.endsWith("/")?"":"/")+"q-data.json",lt=(t,e)=>{const s=t.href;if(typeof s=="string"&&s.trim()!==""&&typeof t.target!="string")try{const n=i(s,e),o=i("",e);if(w(n,o))return m(n)}catch(n){console.error(n)}return null},ft=(t,e,s)=>{if(t.prefetch&&e){const n=i(e,s);if(!Y(n,i("",s)))return n+""}return null},ht=(t,e)=>{const s=t.location,n=i(e.path,s);R(s,n)&&(D(t,s,n),t.history.pushState("","",m(n))),t[b]||(t[b]=1,t.addEventListener("popstate",()=>{const o=t.location,c=i(e.path,o);R(o,c)&&(D(t,c,o),e.path=m(o))}))},D=async(t,e,s)=>{const n=t.document,o=s.hash;if(q(e,s))e.hash!==o&&(await g(),o?L(n,o):t.scrollTo(0,0));else if(o)for(let c=0;c<24&&(await g(),!L(n,o));c++);else await g(),t.scrollTo(0,0)},g=()=>new Promise(t=>setTimeout(t,12)),L=(t,e)=>{const s=e.slice(1),n=t.getElementById(s);return n&&n.scrollIntoView(),n},T=t=>{typeof document<"u"&&document.dispatchEvent(new CustomEvent("qprefetch",{detail:t}))},b=Symbol(),J=async t=>{const e=new URL(t).pathname,s=G(e);T({links:[e]});const n=await fetch(s),o=n.headers.get("content-type")||"";if(n.ok&&o.includes("json")){const c=await n.json();return T({bundles:c.prefetch,links:[e]}),c}},K=d(u(()=>p(()=>import("./q-3e79e0c6.js"),["build/q-3e79e0c6.js","build/q-c3a507be.js","build/q-1251914f.css"]),"s_z1nvHyEppoI"));u(()=>p(()=>import("./q-f41f8644.js"),["build/q-f41f8644.js","build/q-c3a507be.js","build/q-1251914f.css"]),"s_mYsiJcA4IBc");const dt=(t,e)=>{var n;const s=(n=t==null?void 0:t.dataset)==null?void 0:n.prefetch;s&&(_||(_=window.innerWidth),(!e||e&&_<520)&&J(s))};let _=0;const Z='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',F=()=>r("script",{dangerouslySetInnerHTML:Z}),X=d(u(()=>p(()=>import("./q-c8e60806.js"),["build/q-c8e60806.js","build/q-c3a507be.js","build/q-1251914f.css"]),"s_VkTVgkSdmLs")),$=()=>r(K,{children:[r("head",{children:[r("meta",{charSet:"utf-8"}),r(X,{})]}),r("body",{lang:"en",children:[r(B,{}),r(F,{})]})]}),ut=Object.freeze(Object.defineProperty({__proto__:null,s_H1DCWNWGDs0:$},Symbol.toStringTag,{value:"Module"}));export{nt as C,H as D,V as R,J as a,Q as b,ht as c,et as d,M as e,rt as f,at as g,lt as h,ft as i,ct as j,ut as k,st as l,dt as p,ot as r,m as t,it as u};
