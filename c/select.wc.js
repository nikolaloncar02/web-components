var ne=Object.defineProperty,ae=(s,e,t)=>e in s?ne(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,re=(s,e,t)=>(ae(s,typeof e!="symbol"?e+"":e,t),t);import{c as le,S as ie,i as oe,f as M,s as ce,a as me,e as q,b as A,q as C,E as K,p as de,d as c,t as I,g as B,h,N as P,o as H,M as U,r as N,n as Y,j as E,K as _,k as ue,w as ve,l as G,P as pe,Q as he,G as J}from"./svelte.js";import"./index2.js";function ye(s){me(s,"svelte-1cymn4a",".has-hint.svelte-1cymn4a.svelte-1cymn4a{position:relative;margin-bottom:1.25rem}.overlay.svelte-1cymn4a.svelte-1cymn4a{z-index:100;position:fixed;top:0;left:0;right:0;bottom:0}.select.svelte-1cymn4a.svelte-1cymn4a{position:relative;display:flex;justify-content:space-between;align-items:center;text-align:left;width:100%;height:3rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:0 .75rem;gap:.75rem;background-color:var(--background-primary);border:1px solid var(--border-primary);border-radius:.25rem}.select.svelte-1cymn4a.svelte-1cymn4a:focus{outline:none;border-color:var(--primary-color);box-shadow:inset 0 0 0 1px var(--primary-color)}.select.toggled.svelte-1cymn4a.svelte-1cymn4a{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-color:var(--primary-color);box-shadow:inset 0 -2px 1px -1px var(--primary-color)}.select.svelte-1cymn4a:disabled .select-label.svelte-1cymn4a,.select.svelte-1cymn4a:disabled .select-arrow.svelte-1cymn4a{opacity:.33}.select-label.svelte-1cymn4a.svelte-1cymn4a{position:absolute;top:50%;transform:translateY(-50%);transition:transform .3s, top .3s, font-size .3s}.select-label.move.svelte-1cymn4a.svelte-1cymn4a{top:.25rem;transform:translateY(0);font-size:.75rem}input:required+.select.svelte-1cymn4a .select-label.svelte-1cymn4a::after{content:' *'}input.svelte-1cymn4a:required:invalid+.select.svelte-1cymn4a{border-color:var(--danger-color)}.select-option.svelte-1cymn4a.svelte-1cymn4a{flex:auto;width:10rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-top:1rem}.select-arrow.svelte-1cymn4a.svelte-1cymn4a{width:1rem;height:1rem;min-width:1rem;min-height:1rem;transition:transform .3s}.select-arrow.rotate.svelte-1cymn4a.svelte-1cymn4a{transform:rotate(-180deg)}.select-hint.svelte-1cymn4a.svelte-1cymn4a{position:absolute;top:100%;left:0;width:100%;height:1.25rem;line-height:1.25rem;font-size:.75rem;padding:0 .75rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--text-secondary)}.select-hint.svelte-1cymn4a.svelte-1cymn4a:hover{z-index:255;overflow:unset}.menu.svelte-1cymn4a.svelte-1cymn4a{position:absolute;display:flex;flex-direction:column;max-height:20rem;overflow-y:auto;border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem;box-shadow:0 6px 9px rgba(0,0,0,.16);background-color:var(--background-primary)}.menu-button.svelte-1cymn4a.svelte-1cymn4a{display:flex;justify-content:space-between;align-items:center;gap:.75rem;padding:.75rem;text-align:left;outline:none;transition:background-color .3s, color .3s, fill .3s}.menu-button.selected.svelte-1cymn4a.svelte-1cymn4a{background-color:var(--background-tertiary);color:var(--primary-color);fill:var(--primary-color)}.menu-button.svelte-1cymn4a.svelte-1cymn4a:hover,.menu-button.svelte-1cymn4a.svelte-1cymn4a:focus{background-color:var(--background-secondary)}")}function Q(s,e,t){const r=s.slice();return r[23]=e[t],r[24]=e,r[25]=t,r}function R(s){let e;return{c(){e=q("span"),c(e,"class","select-hint svelte-1cymn4a")},m(t,r){B(t,e,r),e.innerHTML=s[4]},p(t,r){r&16&&(e.innerHTML=t[4])},d(t){t&&E(e)}}}function F(s){let e,t,r=[],a=new Map,y,w,g=G(s[1]);const d=l=>l[23];for(let l=0;l<g.length;l+=1){let m=Q(s,g,l),o=d(m);a.set(o,r[l]=X(o,m))}return{c(){e=q("div"),t=q("div");for(let l=0;l<r.length;l+=1)r[l].c();c(t,"class","menu svelte-1cymn4a"),c(t,"style",s[10]),c(e,"class","overlay svelte-1cymn4a"),c(e,"tabindex","-1"),c(e,"role","dialog")},m(l,m){B(l,e,m),h(e,t);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(t,null);y||(w=[H(e,"click",s[12]),H(e,"keydown",s[13])],y=!0)},p(l,m){m&2051&&(g=G(l[1]),r=pe(r,m,d,1,l,g,a,t,he,X,null,Q)),m&1024&&c(t,"style",l[10])},d(l){l&&E(e);for(let m=0;m<r.length;m+=1)r[m].d();y=!1,_(w)}}}function W(s){let e,t;return{c(){e=K("svg"),t=K("path"),c(t,"d","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"width","1rem"),c(e,"height","1rem"),c(e,"viewBox","0 0 448 512")},m(r,a){B(r,e,a),h(e,t)},d(r){r&&E(e)}}}function X(s,e){let t,r,a=e[23]+"",y,w,g,d=e[25],l,m,o=e[0]===e[23]&&W();const D=()=>e[18](t,d),v=()=>e[18](null,d);function x(){return e[19](e[23])}return{key:s,first:null,c(){t=q("button"),r=q("span"),y=C(a),w=A(),o&&o.c(),g=A(),c(t,"class","menu-button svelte-1cymn4a"),I(t,"selected",e[0]===e[23]),this.first=t},m($,p){B($,t,p),h(t,r),h(r,y),h(t,w),o&&o.m(t,null),h(t,g),D(),l||(m=H(t,"click",U(x)),l=!0)},p($,p){e=$,p&2&&a!==(a=e[23]+"")&&N(y,a),e[0]===e[23]?o||(o=W(),o.c(),o.m(t,g)):o&&(o.d(1),o=null),d!==e[25]&&(v(),d=e[25],D()),p&3&&I(t,"selected",e[0]===e[23])},d($){$&&E(t),o&&o.d(),v(),l=!1,m()}}}function fe(s){let e,t,r,a,y,w=(s[7]||"Select an option")+"",g,d,l,m=(s[0]||"")+"",o,D,v,x,$,p,z,T,S,f=s[4]&&R(s),b=s[8]&&F(s);return{c(){e=q("div"),t=q("input"),r=A(),a=q("button"),y=q("span"),g=C(w),d=A(),l=q("span"),o=C(m),D=A(),v=K("svg"),x=K("path"),$=A(),f&&f.c(),p=A(),b&&b.c(),z=de(),c(t,"id",s[5]),c(t,"name",s[6]),t.required=s[3],t.hidden=!0,c(t,"class","svelte-1cymn4a"),c(y,"class","select-label svelte-1cymn4a"),I(y,"move",s[0]||s[8]),c(l,"class","select-option svelte-1cymn4a"),c(x,"d","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"),c(v,"xmlns","http://www.w3.org/2000/svg"),c(v,"viewBox","0 0 320 512"),c(v,"class","select-arrow svelte-1cymn4a"),I(v,"rotate",s[8]),c(a,"class","select svelte-1cymn4a"),a.disabled=s[2],I(a,"toggled",s[8]),c(e,"class","svelte-1cymn4a"),I(e,"has-hint",s[4])},m(i,u){B(i,e,u),h(e,t),P(t,s[0]),h(e,r),h(e,a),h(a,y),h(y,g),h(a,d),h(a,l),h(l,o),h(a,D),h(a,v),h(v,x),s[17](a),h(e,$),f&&f.m(e,null),B(i,p,u),b&&b.m(i,u),B(i,z,u),T||(S=[H(t,"input",s[16]),H(a,"click",U(s[12])),H(a,"keydown",s[13])],T=!0)},p(i,[u]){u&32&&c(t,"id",i[5]),u&64&&c(t,"name",i[6]),u&8&&(t.required=i[3]),u&1&&t.value!==i[0]&&P(t,i[0]),u&128&&w!==(w=(i[7]||"Select an option")+"")&&N(g,w),u&257&&I(y,"move",i[0]||i[8]),u&1&&m!==(m=(i[0]||"")+"")&&N(o,m),u&256&&I(v,"rotate",i[8]),u&4&&(a.disabled=i[2]),u&256&&I(a,"toggled",i[8]),i[4]?f?f.p(i,u):(f=R(i),f.c(),f.m(e,null)):f&&(f.d(1),f=null),u&16&&I(e,"has-hint",i[4]),i[8]?b?b.p(i,u):(b=F(i),b.c(),b.m(z.parentNode,z)):b&&(b.d(1),b=null)},i:Y,o:Y,d(i){i&&(E(e),E(p),E(z)),s[17](null),f&&f.d(),b&&b.d(i),T=!1,_(S)}}}function be(s,e,t){let{attachedInternals:r}=e,{options:a=[]}=e,{disabled:y=!1}=e,{required:w=!1}=e,{hint:g=""}=e,{value:d=""}=e,{id:l=""}=e,{name:m=""}=e,{label:o="Label"}=e;const D=()=>d;let v=!1,x,$,p=[],z="",T;const S=ue();function f(){const n=x.getBoundingClientRect(),k=window.innerHeight-n.bottom,L=160;let j="";k<L?j=`
            min-width: ${n.width}px;
            bottom: ${window.innerHeight-n.top}px;
            left: ${n.left}px;
        `:j=`
            min-width: ${n.width}px;
            top: ${n.bottom}px;
            left: ${n.left}px;
        `,t(10,$=j),t(8,v=!v),v&&setTimeout(()=>{const V=d?a.indexOf(d):0;p[V].focus()},1),v||setTimeout(()=>{x.focus()},10)}function b(n){const k=p.findIndex(j=>j===document.activeElement);let L;if(v){if(n.key==="Escape"){f(),x.focus();return}const j=n.key==="Home"||n.key==="ArrowUp"&&n.metaKey,V=n.key==="End"||n.key==="ArrowDown"&&n.metaKey;if(j){n.preventDefault(),p[0].focus();return}if(V){n.preventDefault(),p[a.length-1].focus();return}if(["ArrowDown","ArrowUp"].includes(n.key)&&(n.preventDefault(),n.key==="ArrowDown"?k<a.length-1?L=k+1:L=k:k>0?L=k-1:L=k,p[L].focus()),/^[a-z\d]$/i.test(n.key)){clearTimeout(T),z+=n.key;const O=a.findIndex(se=>se.toLowerCase().includes(z.toLowerCase()));O!==-1&&p[O].focus(),T=setTimeout(()=>{z=""},500)}}}ve(()=>{typeof a=="string"&&t(1,a=JSON.parse(a))});function i(){d=this.value,t(0,d)}function u(n){J[n?"unshift":"push"](()=>{x=n,t(9,x)})}function ee(n,k){J[n?"unshift":"push"](()=>{p[k]=n,t(11,p)})}const te=n=>t(0,d=n);return s.$$set=n=>{"attachedInternals"in n&&t(14,r=n.attachedInternals),"options"in n&&t(1,a=n.options),"disabled"in n&&t(2,y=n.disabled),"required"in n&&t(3,w=n.required),"hint"in n&&t(4,g=n.hint),"value"in n&&t(0,d=n.value),"id"in n&&t(5,l=n.id),"name"in n&&t(6,m=n.name),"label"in n&&t(7,o=n.label)},s.$$.update=()=>{s.$$.dirty&16385&&(r.checkValidity(),S("value",d))},[d,a,y,w,g,l,m,o,v,x,$,p,f,b,r,D,i,u,ee,te]}class Z extends ie{constructor(e){super(),oe(this,e,be,fe,ce,{attachedInternals:14,options:1,disabled:2,required:3,hint:4,value:0,id:5,name:6,label:7,getValue:15},ye)}get attachedInternals(){return this.$$.ctx[14]}set attachedInternals(e){this.$$set({attachedInternals:e}),M()}get options(){return this.$$.ctx[1]}set options(e){this.$$set({options:e}),M()}get disabled(){return this.$$.ctx[2]}set disabled(e){this.$$set({disabled:e}),M()}get required(){return this.$$.ctx[3]}set required(e){this.$$set({required:e}),M()}get hint(){return this.$$.ctx[4]}set hint(e){this.$$set({hint:e}),M()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),M()}get id(){return this.$$.ctx[5]}set id(e){this.$$set({id:e}),M()}get name(){return this.$$.ctx[6]}set name(e){this.$$set({name:e}),M()}get label(){return this.$$.ctx[7]}set label(e){this.$$set({label:e}),M()}get getValue(){return this.$$.ctx[15]}}customElements.define("jp-select",le(Z,{attachedInternals:{},options:{},disabled:{type:"Boolean"},required:{type:"Boolean"},hint:{},value:{},id:{},name:{},label:{}},[],["getValue"],!1,s=>{var e;return e=class extends s{constructor(){super(),this.attachedInternals=this.attachInternals()}},re(e,"formAssociated",!0),e}));export{Z as default};
