import{c as p,S as m,i as $,f,s as v,a as h,x as w,e as g,d as E,g as y,y as j,z as x,A,B as b,C as q,j as B,w as C}from"./svelte.js";import"./index2.js";function S(i){h(i,"svelte-1n1t62s",".accordion.svelte-1n1t62s{width:100%;margin:1rem 0;border-radius:50%}")}function z(i){let s,l;const o=i[2].default,e=w(o,i,i[1],null);return{c(){s=g("div"),e&&e.c(),E(s,"class","accordion svelte-1n1t62s")},m(t,n){y(t,s,n),e&&e.m(s,null),l=!0},p(t,[n]){e&&e.p&&(!l||n&2)&&j(e,o,t,t[1],l?A(o,t[1],n,null):x(t[1]),null)},i(t){l||(b(e,t),l=!0)},o(t){q(e,t),l=!1},d(t){t&&B(s),e&&e.d(t)}}}function L(i,s,l){let{$$slots:o={},$$scope:e}=s,{multiple:t=!1}=s,n=[];function d(a,u){if(!t){const c=n[u].title;window.dispatchEvent(new CustomEvent("request-close",{detail:c}))}}return C(()=>{n=Array.from(document.querySelectorAll("jp-bellow")),n.forEach((a,u)=>{a.addEventListener("toggle",c=>d(c,u))})}),i.$$set=a=>{"multiple"in a&&l(0,t=a.multiple),"$$scope"in a&&l(1,e=a.$$scope)},[t,e,o]}class r extends m{constructor(s){super(),$(this,s,L,z,v,{multiple:0},S)}get multiple(){return this.$$.ctx[0]}set multiple(s){this.$$set({multiple:s}),f()}}try{customElements.define("jp-accordion",p(r,{multiple:{type:"Boolean"}},["default"],[],!0));}catch{};export{r as default};