import{n as H,_,l as b,b as L,u as r,d as i,e as x,C as M,a as k,g as A,h as I}from"./q-c3a507be.js";import{h as te}from"./q-c3a507be.js";import{l as O,a as Q,r as j,c as z,u as K,t as N,b as T,d as S,C as U,D as q,R as V,e as W}from"./q-9a7ddd91.js";const B=!1,F=!0,G=async({track:t})=>{const[o,a,n,c,e,s]=H(),{routes:u,menus:f,cacheModules:v}=await _(()=>import("./q-61c4de47.js"),["build/q-61c4de47.js","build/q-c3a507be.js","build/q-1251914f.css"]),w=t(s,"path"),l=new URL(w,e.href),h=l.pathname,g=O(u,f,v,h),C=B?c.response:Q(l.href),p=await g;if(p){const[E,y,R]=p,d=y,P=d[d.length-1];e.href=l.href,e.pathname=h,e.params={...E},e.query=Object.fromEntries(l.searchParams.entries()),o.headings=P.headings,o.menu=R,a.contents=b(d);const D=await C,m=j(D,e,d);n.links=m.links,n.meta=m.meta,n.styles=m.styles,n.title=m.title,F&&z(window,s)}},J=()=>{const t=K();if(!(t!=null&&t.params))throw new Error("Missing Qwik City Env Data");const o=L("url");if(!o)throw new Error("Missing Qwik URL Env Data");const a=new URL(o),n=r({href:a.href,pathname:a.pathname,query:Object.fromEntries(a.searchParams.entries()),params:t.params}),c=r({path:N(a)}),e=r(T),s=r({headings:void 0,menu:void 0}),u=r({contents:void 0});return i(S,s),i(U,u),i(q,e),i(V,n),i(W,c),x(M(()=>_(()=>Promise.resolve().then(()=>X),void 0),"s_AaAlzKH0KlQ",[s,u,e,t,n,c])),k(A,{})},X=Object.freeze(Object.defineProperty({__proto__:null,s_AaAlzKH0KlQ:G,s_z1nvHyEppoI:J,_hW:I},Symbol.toStringTag,{value:"Module"}));export{te as _hW,G as s_AaAlzKH0KlQ,J as s_z1nvHyEppoI};
