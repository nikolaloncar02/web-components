var X=Object.defineProperty,E=(s,e,t)=>e in s?X(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,H=(s,e,t)=>(E(s,typeof e!="symbol"?e+"":e,t),t);import{c as T,S as A,i as K,f as u,s as N,a as O,b as m,e as q,d as c,m as j,K as f,g as b,h as $,L as k,o as S,n as y,j as g,k as C,I as D}from"./svelte.js";import"./index2.js";function F(s){O(s,"svelte-eoxqjl",".switch.svelte-eoxqjl.svelte-eoxqjl{position:relative;display:inline-block}.pointer.svelte-eoxqjl.svelte-eoxqjl{cursor:pointer}.label.svelte-eoxqjl.svelte-eoxqjl{display:block;margin-bottom:4px}.large.svelte-eoxqjl.svelte-eoxqjl{width:60px;height:34px}.small.svelte-eoxqjl.svelte-eoxqjl{width:40px;height:22px}.switch.svelte-eoxqjl input.svelte-eoxqjl{opacity:0;width:0;height:0}.large.svelte-eoxqjl .slider.svelte-eoxqjl{border-radius:34px}.small.svelte-eoxqjl .slider.svelte-eoxqjl{border-radius:22px}.slider.svelte-eoxqjl.svelte-eoxqjl{position:absolute;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:0.4s;transition:0.4s}.large.svelte-eoxqjl .slider.svelte-eoxqjl:before{height:26px;width:26px;left:4px;bottom:4px}.small.svelte-eoxqjl .slider.svelte-eoxqjl:before{height:18px;width:18px;left:2px;bottom:2px}.slider.svelte-eoxqjl.svelte-eoxqjl:before{position:absolute;content:'';background-color:white;-webkit-transition:0.4s;transition:0.4s;border-radius:50%}input.svelte-eoxqjl:checked+.slider.svelte-eoxqjl{background-color:var(--primary-color)}input.svelte-eoxqjl:focus+.slider.svelte-eoxqjl{box-shadow:0 0 1px var(--primary-color)}input.svelte-eoxqjl:checked+.slider.svelte-eoxqjl:before{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%)}")}function V(s){let e,t;return{c(){e=q("span"),c(e,"class","label svelte-eoxqjl"),c(e,"style",t=`font-size: ${s[5]=="small"?"12px":"20px"}`)},m(l,n){b(l,e,n),e.innerHTML=s[3]},p(l,n){n&8&&(e.innerHTML=l[3]),n&32&&t!==(t=`font-size: ${l[5]=="small"?"12px":"20px"}`)&&c(e,"style",t)},d(l){l&&g(e)}}}function G(s){let e,t,l,n,d,h,p,x,r=s[3]&&V(s);return{c(){r&&r.c(),e=m(),t=q("label"),l=q("input"),n=m(),d=q("span"),c(l,"type","checkbox"),c(l,"name",s[2]),l.disabled=s[6],l.required=s[4],l.hidden=!0,c(l,"class","svelte-eoxqjl"),c(d,"class","slider round svelte-eoxqjl"),j(d,"pointer",!s[6]),c(t,"class",h=f("switch "+s[5])+" svelte-eoxqjl")},m(i,o){r&&r.m(i,o),b(i,e,o),b(i,t,o),$(t,l),l.checked=s[0],k(l,s[1]),s[13](l),$(t,n),$(t,d),p||(x=S(l,"change",s[12]),p=!0)},p(i,[o]){i[3]?r?r.p(i,o):(r=V(i),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),o&4&&c(l,"name",i[2]),o&64&&(l.disabled=i[6]),o&16&&(l.required=i[4]),o&1&&(l.checked=i[0]),o&2&&k(l,i[1]),o&64&&j(d,"pointer",!i[6]),o&32&&h!==(h=f("switch "+i[5])+" svelte-eoxqjl")&&c(t,"class",h)},i:y,o:y,d(i){i&&(g(e),g(t)),r&&r.d(i),s[13](null),p=!1,x()}}}function J(s,e,t){let{attachedInternals:l}=e,{name:n=""}=e,{value:d=""}=e,{label:h=null}=e,{required:p=!1}=e,{requiredValidationMessage:x=""}=e,{size:r="small"}=e,{checked:i=!1}=e,{disabled:o=!1}=e,v;const I=()=>i,M=()=>{l.reportValidity()},z=C();function B(){i=this.checked,d=this.value,t(0,i),t(1,d)}function L(a){D[a?"unshift":"push"](()=>{v=a,t(7,v)})}return s.$$set=a=>{"attachedInternals"in a&&t(8,l=a.attachedInternals),"name"in a&&t(2,n=a.name),"value"in a&&t(1,d=a.value),"label"in a&&t(3,h=a.label),"required"in a&&t(4,p=a.required),"requiredValidationMessage"in a&&t(9,x=a.requiredValidationMessage),"size"in a&&t(5,r=a.size),"checked"in a&&t(0,i=a.checked),"disabled"in a&&t(6,o=a.disabled)},s.$$.update=()=>{s.$$.dirty&897&&(l.checkValidity(),v&&v.validity.valueMissing&&x&&l.setValidity({customError:!0},x),z("value",i))},[i,d,n,h,p,r,o,v,l,x,I,M,B,L]}class w extends A{constructor(e){super(),K(this,e,J,G,N,{attachedInternals:8,name:2,value:1,label:3,required:4,requiredValidationMessage:9,size:5,checked:0,disabled:6,getValue:10,reportValidity:11},F)}get attachedInternals(){return this.$$.ctx[8]}set attachedInternals(e){this.$$set({attachedInternals:e}),u()}get name(){return this.$$.ctx[2]}set name(e){this.$$set({name:e}),u()}get value(){return this.$$.ctx[1]}set value(e){this.$$set({value:e}),u()}get label(){return this.$$.ctx[3]}set label(e){this.$$set({label:e}),u()}get required(){return this.$$.ctx[4]}set required(e){this.$$set({required:e}),u()}get requiredValidationMessage(){return this.$$.ctx[9]}set requiredValidationMessage(e){this.$$set({requiredValidationMessage:e}),u()}get size(){return this.$$.ctx[5]}set size(e){this.$$set({size:e}),u()}get checked(){return this.$$.ctx[0]}set checked(e){this.$$set({checked:e}),u()}get disabled(){return this.$$.ctx[6]}set disabled(e){this.$$set({disabled:e}),u()}get getValue(){return this.$$.ctx[10]}get reportValidity(){return this.$$.ctx[11]}}try{customElements.define("jp-toggle",T(w,{attachedInternals:{},name:{},value:{},label:{},required:{type:"Boolean"},requiredValidationMessage:{},size:{},checked:{type:"Boolean"},disabled:{type:"Boolean"}},[],["getValue","reportValidity"],!1,s=>{var e;return e=class extends s{constructor(){super(),this.attachedInternals=this.attachInternals()}},H(e,"formAssociated",!0),e}));}catch{};export{w as default};
