function w(){}function j(t,n){for(const e in n)t[e]=n[e];return t}function v(t){return t()}function A(){return Object.create(null)}function E(t){t.forEach(v)}function B(t){return typeof t=="function"}function D(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function F(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function P(t){return Object.keys(t).length===0}function m(t,...n){if(t==null){for(const r of n)r(void 0);return w}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function S(t){let n;return m(t,e=>n=e)(),n}function U(t,n,e){t.$$.on_destroy.push(m(n,e))}function C(t,n,e,r){if(t){const o=x(t,n,e,r);return t[0](o)}}function x(t,n,e,r){return t[1]&&r?j(e.ctx.slice(),t[1](r(n))):e.ctx}function G(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const l=[],_=Math.max(n.dirty.length,o.length);for(let s=0;s<_;s+=1)l[s]=n.dirty[s]|o[s];return l}return n.dirty|o}return n.dirty}function H(t,n,e,r,o,l){if(o){const _=x(n,e,r,l);t.p(_,o)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}let f;function h(t){f=t}function g(){if(!f)throw new Error("Function called outside component initialization");return f}function J(t){g().$$.on_mount.push(t)}function K(t){g().$$.after_update.push(t)}function L(t){g().$$.on_destroy.push(t)}const a=[],b=[];let c=[];const y=[],k=Promise.resolve();let p=!1;function q(){p||(p=!0,k.then(z))}function N(){return q(),k}function O(t){c.push(t)}const d=new Set;let u=0;function z(){if(u!==0)return;const t=f;do{try{for(;u<a.length;){const n=a[u];u++,h(n),M(n.$$)}}catch(n){throw a.length=0,u=0,n}for(h(null),a.length=0,u=0;b.length;)b.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];d.has(e)||(d.add(e),e())}c.length=0}while(a.length);for(;y.length;)y.pop()();p=!1,d.clear(),h(t)}function M(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function Q(t){const n=[],e=[];c.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),c=n}export{j as A,F as B,G as a,U as b,C as c,m as d,K as e,b as f,I as g,A as h,B as i,z as j,P as k,O as l,Q as m,w as n,J as o,f as p,h as q,E as r,D as s,N as t,H as u,v,a as w,q as x,S as y,L as z};
