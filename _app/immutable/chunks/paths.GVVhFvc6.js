import{n as l,s as x,d as m,r as q,i as v}from"./scheduler.3h8e5raO.js";const c=[];function z(e,i){return{subscribe:A(e,i).subscribe}}function A(e,i=l){let r;const n=new Set;function u(t){if(x(e,t)&&(e=t,r)){const o=!c.length;for(const s of n)s[1](),c.push(s,e);if(o){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function b(t){u(t(e))}function f(t,o=l){const s=[t,o];return n.add(s),n.size===1&&(r=i(u,b)||l),t(e),()=>{n.delete(s),n.size===0&&r&&(r(),r=null)}}return{set:u,update:b,subscribe:f}}function E(e,i,r){const n=!Array.isArray(e),u=n?[e]:e;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=i.length<2;return z(r,(f,t)=>{let o=!1;const s=[];let d=0,p=l;const g=()=>{if(d)return;p();const a=i(n?s[0]:s,f,t);b?f(a):p=v(a)?a:l},k=u.map((a,_)=>m(a,w=>{s[_]=w,d&=~(1<<_),o&&g()},()=>{d|=1<<_}));return o=!0,g(),function(){q(k),p(),o=!1}})}var h;const T=((h=globalThis.__sveltekit_14d1t2x)==null?void 0:h.base)??"/outlook-deep-link";var y;const S=((y=globalThis.__sveltekit_14d1t2x)==null?void 0:y.assets)??T;export{S as a,T as b,E as d,A as w};
