import{c as A,S as C,i as D,f as S,s as G,a as J,l as L,e as b,b as j,d as v,F as T,g as P,h as $,o as k,n as I,j as B,m as H,K as O,w as Q,N as R,L as z,t as X}from"./svelte.js";import"./index2.js";function U(l){J(l,"svelte-sbfveu",`@import 'packages/demo/src/app.postcss';.slider.svelte-sbfveu{--slider-max-width:600px
    }.slider-container.svelte-sbfveu{position:relative;overflow:hidden;width:100%;max-width:var(--slider-max-width);margin:0 auto}.slider-images.svelte-sbfveu{display:flex;transition:transform 0.3s}.slider-image.svelte-sbfveu{width:calc(100% / var(--images-per-slide));flex-shrink:0;-o-object-fit:cover;object-fit:cover}.prev.svelte-sbfveu,.next.svelte-sbfveu{position:absolute;top:50%;transform:translateY(-50%);display:flex;justify-content:center;align-items:center;border-radius:50%;width:2rem;height:2rem;background:rgba(0, 0, 0, 0.5);color:white;fill:white;border:none;cursor:pointer;transition:.3s}.prev.svelte-sbfveu:hover,.next.svelte-sbfveu:hover{background-color:rgba(0,0,0,.75)}.prev.svelte-sbfveu{left:10px}.next.svelte-sbfveu{right:10px}.slider-bar.svelte-sbfveu{position:relative;max-width:var(--slider-max-width);margin:0 auto;width:100%;height:4px;background-color:var(--border-primary)}.slider-bar-bg.svelte-sbfveu{position:absolute;top:50%;transform:translateY(-50%);background-color:var(--primary-color);height:8px;transition:.3s}.pagination.svelte-sbfveu{display:flex;justify-content:center;gap:.75rem;margin-top:2rem}.pagination-button.svelte-sbfveu{position:relative;width:.875rem;height:.875rem;border:2px solid var(--border-primary);border-radius:50%;transition:.3s}.pagination-button.svelte-sbfveu:hover{background-color:var(--background-secondary)}.pagination-button.active.svelte-sbfveu{border-color:var(--primary-color);background-color:var(--primary-color)}`)}function Y(l,e,t){const s=l.slice();return s[12]=e[t],s[14]=t,s}function E(l,e,t){const s=l.slice();return s[15]=e[t],s}function F(l){let e,t,s;return{c(){e=b("img"),v(e,"class","slider-image svelte-sbfveu"),z(e.src,t=l[15].src)||v(e,"src",t),v(e,"alt",s=l[15].alt)},m(r,n){P(r,e,n)},p(r,n){n&1&&!z(e.src,t=r[15].src)&&v(e,"src",t),n&1&&s!==(s=r[15].alt)&&v(e,"alt",s)},d(r){r&&B(e)}}}function K(l){let e,t,s;return{c(){e=b("div"),t=b("div"),v(t,"class","slider-bar-bg svelte-sbfveu"),v(t,"style",s=`width: calc(calc(${l[4]} + ${l[1]}) / ${l[0].length} * 100%);`),v(e,"class","slider-bar svelte-sbfveu")},m(r,n){P(r,e,n),$(e,t)},p(r,n){n&19&&s!==(s=`width: calc(calc(${r[4]} + ${r[1]}) / ${r[0].length} * 100%);`)&&v(t,"style",s)},d(r){r&&B(e)}}}function N(l){let e,t=L(l[0]),s=[];for(let r=0;r<t.length;r+=1)s[r]=_(Y(l,t,r));return{c(){e=b("div");for(let r=0;r<s.length;r+=1)s[r].c();v(e,"class","pagination svelte-sbfveu")},m(r,n){P(r,e,n);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null)},p(r,n){if(n&17){t=L(r[0]);let a;for(a=0;a<t.length;a+=1){const m=Y(r,t,a);s[a]?s[a].p(m,n):(s[a]=_(m),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=t.length}},d(r){r&&B(e),H(s,r)}}}function _(l){let e,t,s;function r(){return l[10](l[14])}return{c(){e=b("button"),e.innerHTML="",v(e,"class","pagination-button svelte-sbfveu"),X(e,"active",l[4]===l[14])},m(n,a){P(n,e,a),t||(s=k(e,"click",r),t=!0)},p(n,a){l=n,a&16&&X(e,"active",l[4]===l[14])},d(n){n&&B(e),t=!1,s()}}}function V(l){let e,t,s,r,n,a,m,f,g,h,p,y,x=L(l[0]),d=[];for(let o=0;o<x.length;o+=1)d[o]=F(E(l,x,o));let i=l[3]&&K(l),c=l[2]&&N(l);return{c(){e=b("div"),t=b("div"),s=b("div");for(let o=0;o<d.length;o+=1)d[o].c();n=j(),a=b("button"),a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg>',m=j(),f=b("button"),f.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>',g=j(),i&&i.c(),h=j(),c&&c.c(),v(s,"class","slider-images svelte-sbfveu"),v(s,"style",r=`transform: translateX(-${l[4]*(100/l[1])}%);`),v(a,"class","prev svelte-sbfveu"),v(f,"class","next svelte-sbfveu"),v(t,"class","slider-container svelte-sbfveu"),T(t,"--images-per-slide",l[1]),v(e,"class","flex flex-col slider svelte-sbfveu")},m(o,w){P(o,e,w),$(e,t),$(t,s);for(let u=0;u<d.length;u+=1)d[u]&&d[u].m(s,null);$(t,n),$(t,a),$(t,m),$(t,f),$(e,g),i&&i.m(e,null),$(e,h),c&&c.m(e,null),p||(y=[k(a,"click",l[6]),k(f,"click",l[5])],p=!0)},p(o,[w]){if(w&1){x=L(o[0]);let u;for(u=0;u<x.length;u+=1){const M=E(o,x,u);d[u]?d[u].p(M,w):(d[u]=F(M),d[u].c(),d[u].m(s,null))}for(;u<d.length;u+=1)d[u].d(1);d.length=x.length}w&18&&r!==(r=`transform: translateX(-${o[4]*(100/o[1])}%);`)&&v(s,"style",r),w&2&&T(t,"--images-per-slide",o[1]),o[3]?i?i.p(o,w):(i=K(o),i.c(),i.m(e,h)):i&&(i.d(1),i=null),o[2]?c?c.p(o,w):(c=N(o),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},i:I,o:I,d(o){o&&B(e),H(d,o),i&&i.d(),c&&c.d(),p=!1,O(y)}}}function W(l,e,t){let{images:s=[]}=e,{imagesPerSlide:r=1}=e,{enablePagination:n=!1}=e,{sliderBar:a=!1}=e,{autoSlide:m=!1}=e,{interval:f=3e3}=e,g=0,h=!0,p;function y(){if(!h)return;h=!1;let i=g+r,c=s.length-i;c<r&&c!==0?t(4,g=s.length-r):c===0?t(4,g=0):r%1!==0?t(4,g=i-(r-1)):t(4,g=i),setTimeout(()=>{h=!0},300)}function x(){h&&(h=!1,g===r?t(4,g=0):g<=0?t(4,g=s.length-r):t(4,g-=r),setTimeout(()=>{h=!0},300))}Q(()=>{m&&t(9,p=setInterval(y,f))}),R(()=>{clearInterval(p)});const d=i=>t(4,g=i);return l.$$set=i=>{"images"in i&&t(0,s=i.images),"imagesPerSlide"in i&&t(1,r=i.imagesPerSlide),"enablePagination"in i&&t(2,n=i.enablePagination),"sliderBar"in i&&t(3,a=i.sliderBar),"autoSlide"in i&&t(7,m=i.autoSlide),"interval"in i&&t(8,f=i.interval)},l.$$.update=()=>{l.$$.dirty&896&&(m?t(9,p=setInterval(y,f)):clearInterval(p))},[s,r,n,a,g,y,x,m,f,p,d]}class q extends C{constructor(e){super(),D(this,e,W,V,G,{images:0,imagesPerSlide:1,enablePagination:2,sliderBar:3,autoSlide:7,interval:8},U)}get images(){return this.$$.ctx[0]}set images(e){this.$$set({images:e}),S()}get imagesPerSlide(){return this.$$.ctx[1]}set imagesPerSlide(e){this.$$set({imagesPerSlide:e}),S()}get enablePagination(){return this.$$.ctx[2]}set enablePagination(e){this.$$set({enablePagination:e}),S()}get sliderBar(){return this.$$.ctx[3]}set sliderBar(e){this.$$set({sliderBar:e}),S()}get autoSlide(){return this.$$.ctx[7]}set autoSlide(e){this.$$set({autoSlide:e}),S()}get interval(){return this.$$.ctx[8]}set interval(e){this.$$set({interval:e}),S()}}try{customElements.define("jp-image-gallery",A(q,{images:{},imagesPerSlide:{},enablePagination:{type:"Boolean"},sliderBar:{type:"Boolean"},autoSlide:{type:"Boolean"},interval:{}},[],[],!1));}catch{};export{q as default};
