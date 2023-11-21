import{c as U,S as V,i as W,f as C,s as X,a as Y,e as f,b as H,d as w,t as T,g as p,h as g,o as E,n as k,j as h,k as Z,w as ee,l as M,m as q,p as te,q as N,r as re,u as _,v as oe}from"./svelte.js";import"./index2.js";import{g as se}from"./json-pointer.js";function ne(s){Y(s,"svelte-1bbm958",".table-card.svelte-1bbm958{background-color:var(--background-primary);-webkit-border-radius:.25rem;-moz-border-radius:.25rem;border-radius:.25rem;-webkit-box-shadow:0 3px 12px rgba(0,0,0,.16);-moz-box-shadow:0 3px 12px rgba(0,0,0,.16);box-shadow:0 3px 12px rgba(0,0,0,.16)}.table-container.svelte-1bbm958{overflow-x:auto;width:100%}table.svelte-1bbm958{width:100%}th.svelte-1bbm958,td.svelte-1bbm958{text-align:left;white-space:nowrap;font-size:.75rem;font-weight:normal;padding:.5rem;border-bottom:1px solid rgba(0,0,0,.16)}th.svelte-1bbm958{opacity:.75}.cell.svelte-1bbm958{display:block;max-width:64ch;overflow:hidden;text-overflow:ellipsis}.table-actions.svelte-1bbm958{padding:1rem}.load-button.svelte-1bbm958{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:.25rem;-moz-border-radius:.25rem;border-radius:.25rem;min-width:4rem;height:2.25rem;padding:0 1rem;background-color:var(--primary-color);color:var(--text-on-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.load-button.svelte-1bbm958:disabled{opacity:.5}.load-button.loading.svelte-1bbm958{pointer-events:none}.spinner.svelte-1bbm958{display:block;border-top:2px solid var(--text-on-primary);border-bottom:2px solid var(--text-on-primary);border-left:2px solid transparent;border-right:2px solid transparent;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;width:1rem;height:1rem;margin-right:.5rem;-webkit-animation:svelte-1bbm958-spin 1s linear infinite;-moz-animation:svelte-1bbm958-spin 1s linear infinite;-o-animation:svelte-1bbm958-spin 1s linear infinite;animation:svelte-1bbm958-spin 1s linear infinite}@-webkit-keyframes svelte-1bbm958-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes svelte-1bbm958-spin{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}100%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes svelte-1bbm958-spin{0%{-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes svelte-1bbm958-spin{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}")}function A(s,o,r){const e=s.slice();return e[13]=o[r],e[15]=r,e}function B(s,o,r){const e=s.slice();return e[16]=o[r],e}function D(s,o,r){const e=s.slice();return e[16]=o[r],e}function F(s){let o,r=M(s[1]),e=[];for(let t=0;t<r.length;t+=1)e[t]=I(D(s,r,t));return{c(){o=f("tr");for(let t=0;t<e.length;t+=1)e[t].c()},m(t,a){p(t,o,a);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(o,null)},p(t,a){if(a&67){r=M(t[1]);let n;for(n=0;n<r.length;n+=1){const l=D(t,r,n);e[n]?e[n].p(l,a):(e[n]=I(l),e[n].c(),e[n].m(o,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=r.length}},d(t){t&&h(o),q(e,t)}}}function G(s){let o,r=s[0].direction==="asc"?"\u2191":"\u2193",e;return{c(){o=f("span"),e=N(r)},m(t,a){p(t,o,a),g(o,e)},p(t,a){a&1&&r!==(r=t[0].direction==="asc"?"\u2191":"\u2193")&&re(e,r)},d(t){t&&h(o)}}}function I(s){var o;let r,e,t=s[16].label+"",a,n,l,d,m=((o=s[0])==null?void 0:o.key)===s[16].key&&G(s);function z(){return s[10](s[16])}return{c(){r=f("th"),e=f("span"),a=H(),m&&m.c(),n=H(),w(r,"class","svelte-1bbm958"),T(r,"sortable",s[16].sortable)},m(c,b){p(c,r,b),g(r,e),e.innerHTML=t,g(r,a),m&&m.m(r,null),g(r,n),l||(d=E(r,"click",z),l=!0)},p(c,b){var x;s=c,b&2&&t!==(t=s[16].label+"")&&(e.innerHTML=t),((x=s[0])==null?void 0:x.key)===s[16].key?m?m.p(s,b):(m=G(s),m.c(),m.m(r,n)):m&&(m.d(1),m=null),b&2&&T(r,"sortable",s[16].sortable)},d(c){c&&h(r),m&&m.d(),l=!1,d()}}}function J(s){let o,r=M(s[4]),e=[];for(let t=0;t<r.length;t+=1)e[t]=O(A(s,r,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();o=te()},m(t,a){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(t,a);p(t,o,a)},p(t,a){if(a&306){r=M(t[4]);let n;for(n=0;n<r.length;n+=1){const l=A(t,r,n);e[n]?e[n].p(l,a):(e[n]=O(l),e[n].c(),e[n].m(o.parentNode,o))}for(;n<e.length;n+=1)e[n].d(1);e.length=r.length}},d(t){t&&h(o),q(e,t)}}}function ae(s){return{c:k,m:k,p:k,d:k}}function le(s){let o,r=s[19]+"";return{c(){o=f("span"),w(o,"class","cell svelte-1bbm958")},m(e,t){p(e,o,t),o.innerHTML=r},p(e,t){t&18&&r!==(r=e[19]+"")&&(o.innerHTML=r)},d(e){e&&h(o)}}}function ie(s){return{c:k,m:k,p:k,d:k}}function K(s){let o,r,e,t,a={ctx:s,current:null,token:null,hasCatch:!1,pending:ie,then:le,catch:ae,value:19};_(r=s[5](s[16],s[13],s[15]),a);function n(...l){return s[11](s[13],s[15],s[16],...l)}return{c(){o=f("td"),a.block.c(),w(o,"class","svelte-1bbm958")},m(l,d){p(l,o,d),a.block.m(o,a.anchor=null),a.mount=()=>o,a.anchor=null,e||(t=E(o,"click",n),e=!0)},p(l,d){s=l,a.ctx=s,d&18&&r!==(r=s[5](s[16],s[13],s[15]))&&_(r,a)||oe(a,s,d)},d(l){l&&h(o),a.block.d(),a.token=null,a=null,e=!1,t()}}}function O(s){let o,r,e=M(s[1]),t=[];for(let a=0;a<e.length;a+=1)t[a]=K(B(s,e,a));return{c(){o=f("tr");for(let a=0;a<t.length;a+=1)t[a].c();r=H()},m(a,n){p(a,o,n);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(o,null);g(o,r)},p(a,n){if(n&306){e=M(a[1]);let l;for(l=0;l<e.length;l+=1){const d=B(a,e,l);t[l]?t[l].p(d,n):(t[l]=K(d),t[l].c(),t[l].m(o,r))}for(;l<t.length;l+=1)t[l].d(1);t.length=e.length}},d(a){a&&h(o),q(t,a)}}}function ce(s){let o;return{c(){o=N("Load More")},m(r,e){p(r,o,e)},d(r){r&&h(o)}}}function be(s){let o,r;return{c(){o=f("span"),r=N(`
        Loading`),w(o,"class","spinner svelte-1bbm958")},m(e,t){p(e,o,t),p(e,r,t)},d(e){e&&(h(o),h(r))}}}function de(s){let o,r,e,t,a,n,l,d,m,z,c=s[1]&&F(s),b=s[4]&&J(s);function x(i,u){return i[2]?be:ce}let $=x(s),v=$(s);return{c(){o=f("div"),r=f("div"),e=f("table"),c&&c.c(),t=H(),b&&b.c(),a=H(),n=f("div"),l=f("button"),v.c(),w(e,"class","svelte-1bbm958"),w(r,"class","table-container svelte-1bbm958"),w(l,"class","load-button svelte-1bbm958"),l.disabled=d=!s[3],T(l,"loading",s[2]),w(n,"class","table-actions svelte-1bbm958"),w(o,"class","table-card svelte-1bbm958")},m(i,u){p(i,o,u),g(o,r),g(r,e),c&&c.m(e,null),g(e,t),b&&b.m(e,null),g(o,a),g(o,n),g(n,l),v.m(l,null),m||(z=E(l,"click",s[7]),m=!0)},p(i,[u]){i[1]?c?c.p(i,u):(c=F(i),c.c(),c.m(e,t)):c&&(c.d(1),c=null),i[4]?b?b.p(i,u):(b=J(i),b.c(),b.m(e,null)):b&&(b.d(1),b=null),$!==($=x(i))&&(v.d(1),v=$(i),v&&(v.c(),v.m(l,null))),u&8&&d!==(d=!i[3])&&(l.disabled=d),u&4&&T(l,"loading",i[2])},i:k,o:k,d(i){i&&h(o),c&&c.d(),b&&b.d(),v.d(),m=!1,z()}}}function me(s,o,r){let{headers:e=[]}=o,{sort:t}=o,{service:a}=o,n=!0,l=!1,d=[];const m=Z();async function z(i,u,y){const{key:L,fallback:Q,pipes:S}=i;let j;try{j=se(u,L)}catch{return Q||""}if(!S)return j;for(const R of S)j=await R(j,u,y);return j}async function c(i){const{sortable:u}=i;if(!u)return;r(2,n=!0),r(0,t={key:i.key,direction:t?.key===i.key&&t.direction==="asc"?"desc":"asc"});const y=await a.get(t);r(4,d=y.rows),r(3,l=y.hasMore),r(2,n=!1)}async function b(){r(2,n=!0);const i=await a.loadMore(t);r(4,d=[...d,...i.rows]),r(3,l=i.hasMore),r(2,n=!1)}function x(i,u,y,L){m("rowClick",{row:i,index:u,header:y,originalEvent:L})}ee(async()=>{const i=await a.get(t);r(4,d=i.rows),r(3,l=i.hasMore),r(2,n=!1)});const $=i=>c(i),v=(i,u,y,L)=>x(i,u,y,L);return s.$$set=i=>{"headers"in i&&r(1,e=i.headers),"sort"in i&&r(0,t=i.sort),"service"in i&&r(9,a=i.service)},[t,e,n,l,d,z,c,b,x,a,$,v]}class P extends V{constructor(o){super(),W(this,o,me,de,X,{headers:1,sort:0,service:9},ne)}get headers(){return this.$$.ctx[1]}set headers(o){this.$$set({headers:o}),C()}get sort(){return this.$$.ctx[0]}set sort(o){this.$$set({sort:o}),C()}get service(){return this.$$.ctx[9]}set service(o){this.$$set({service:o}),C()}}try{customElements.define("jp-async-table",U(P,{headers:{},sort:{},service:{}},[],[],!1));}catch{};export{P as default};
