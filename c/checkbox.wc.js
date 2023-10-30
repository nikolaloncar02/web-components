var A=Object.defineProperty,j=(n,e,t)=>e in n?A(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,E=(n,e,t)=>(j(n,typeof e!="symbol"?e+"":e,t),t);import{c as O,S as q,i as B,f as u,s as H,l as b,e as M,d as p,g as x,n as S,j as f,m as J,k as N,w as P,b as y,h as v,o as _,q as z,r as C,p as D,H as F}from"./svelte.js";import"./index2.js";function k(n,e,t){const a=n.slice();return a[11]=e[t],a[12]=e,a[13]=t,a}function G(n){let e=n[11].value+"",t;return{c(){t=z(e)},m(a,s){x(a,t,s)},p(a,s){s&1&&e!==(e=a[11].value+"")&&C(t,e)},d(a){a&&f(t)}}}function K(n){let e,t=n[11].label+"",a;return{c(){e=new F(!1),a=D(),e.a=a},m(s,c){e.m(t,s,c),x(s,a,c)},p(s,c){c&1&&t!==(t=s[11].label+"")&&e.p(t)},d(s){s&&(f(a),e.d())}}}function I(n){let e,t,a,s,c,l,d,m,h;function V(){n[9].call(t,n[12],n[13])}function $(i,o){return i[11].label?K:G}let g=$(n),r=g(n);return{c(){e=M("label"),t=M("input"),c=y(),r.c(),l=y(),p(t,"type","checkbox"),p(t,"name",a=n[11].value),t.disabled=s=n[11].disabled,p(e,"class",d="flex items-center gap-2 "+(n[11].disabled?"opacity-50":""))},m(i,o){x(i,e,o),v(e,t),t.checked=n[11].checked,v(e,c),r.m(e,null),v(e,l),m||(h=_(t,"change",V),m=!0)},p(i,o){n=i,o&1&&a!==(a=n[11].value)&&p(t,"name",a),o&1&&s!==(s=n[11].disabled)&&(t.disabled=s),o&1&&(t.checked=n[11].checked),g===(g=$(n))&&r?r.p(n,o):(r.d(1),r=g(n),r&&(r.c(),r.m(e,l))),o&1&&d!==(d="flex items-center gap-2 "+(n[11].disabled?"opacity-50":""))&&p(e,"class",d)},d(i){i&&f(e),r.d(),m=!1,h()}}}function L(n){let e,t=b(n[0]),a=[];for(let s=0;s<t.length;s+=1)a[s]=I(k(n,t,s));return{c(){e=M("div");for(let s=0;s<a.length;s+=1)a[s].c();p(e,"class","flex flex-col gap-2")},m(s,c){x(s,e,c);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(e,null)},p(s,[c]){if(c&1){t=b(s[0]);let l;for(l=0;l<t.length;l+=1){const d=k(s,t,l);a[l]?a[l].p(d,c):(a[l]=I(d),a[l].c(),a[l].m(e,null))}for(;l<a.length;l+=1)a[l].d(1);a.length=t.length}},i:S,o:S,d(s){s&&f(e),J(a,s)}}}function Q(n,e,t){let{attachedInternals:a}=e,{options:s=[]}=e,{minSelects:c=0}=e,{maxSelects:l=null}=e,{minselectsValidationMessage:d}=e,{maxselectsValidationMessage:m}=e,{validationMessages:h={}}=e;const V=()=>s.filter(i=>i.checked).map(i=>i.value),$=N(),g=()=>{a.reportValidity()};P(()=>{typeof s=="string"&&t(0,s=JSON.parse(s)),t(1,l=s.length)});function r(i,o){i[o].checked=this.checked,t(0,s)}return n.$$set=i=>{"attachedInternals"in i&&t(2,a=i.attachedInternals),"options"in i&&t(0,s=i.options),"minSelects"in i&&t(3,c=i.minSelects),"maxSelects"in i&&t(1,l=i.maxSelects),"minselectsValidationMessage"in i&&t(4,d=i.minselectsValidationMessage),"maxselectsValidationMessage"in i&&t(5,m=i.maxselectsValidationMessage),"validationMessages"in i&&t(6,h=i.validationMessages)},n.$$.update=()=>{if(n.$$.dirty&127&&Array.isArray(s)){const i=s.filter(o=>o.checked).length;i<c?a.setValidity({customError:!0},d||h.minselects||"Below limit checks."):i>l?a.setValidity({customError:!0},m||h.maxselects||"Above limit checks."):a.setValidity({}),$("value",s.filter(o=>o.checked).map(o=>o.value))}},[s,l,a,c,d,m,h,V,g,r]}class w extends q{constructor(e){super(),B(this,e,Q,L,H,{attachedInternals:2,options:0,minSelects:3,maxSelects:1,minselectsValidationMessage:4,maxselectsValidationMessage:5,validationMessages:6,getValue:7,reportValidity:8})}get attachedInternals(){return this.$$.ctx[2]}set attachedInternals(e){this.$$set({attachedInternals:e}),u()}get options(){return this.$$.ctx[0]}set options(e){this.$$set({options:e}),u()}get minSelects(){return this.$$.ctx[3]}set minSelects(e){this.$$set({minSelects:e}),u()}get maxSelects(){return this.$$.ctx[1]}set maxSelects(e){this.$$set({maxSelects:e}),u()}get minselectsValidationMessage(){return this.$$.ctx[4]}set minselectsValidationMessage(e){this.$$set({minselectsValidationMessage:e}),u()}get maxselectsValidationMessage(){return this.$$.ctx[5]}set maxselectsValidationMessage(e){this.$$set({maxselectsValidationMessage:e}),u()}get validationMessages(){return this.$$.ctx[6]}set validationMessages(e){this.$$set({validationMessages:e}),u()}get getValue(){return this.$$.ctx[7]}get reportValidity(){return this.$$.ctx[8]}}try{customElements.define("jp-checkbox",O(w,{attachedInternals:{},options:{},minSelects:{},maxSelects:{},minselectsValidationMessage:{},maxselectsValidationMessage:{},validationMessages:{}},[],["getValue","reportValidity"],!1,n=>{var e;return e=class extends n{constructor(){super(),this.attachedInternals=this.attachInternals()}},E(e,"formAssociated",!0),e}));}catch{};export{w as default};
