var y=Object.defineProperty,k=(s,e,t)=>e in s?y(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,q=(s,e,t)=>(k(s,typeof e!="symbol"?e+"":e,t),t);import{c as A,S as C,i as E,f as d,s as F,a as G,b,e as v,d as c,g as h,h as f,n as g,j as $,k as M,w as N,q as S,r as z,G as B}from"./svelte.js";import"./index2.js";function D(s){G(s,"svelte-lrj1fn",".code-editor.svelte-lrj1fn{border:1px solid var(--border-primary);border-radius:.25rem}")}function x(s){let e,t;return{c(){e=v("span"),t=S(s[1])},m(r,u){h(r,e,u),f(e,t)},p(r,u){u&2&&z(t,r[1])},d(r){r&&$(e)}}}function H(s){let e,t,r,u,o,n=s[1]&&x(s);return{c(){n&&n.c(),e=b(),t=v("div"),r=v("div"),u=b(),o=v("textarea"),c(t,"class","code-editor svelte-lrj1fn"),c(o,"name",s[2]),c(o,"id",s[3]),o.value=s[0],o.hidden=!0},m(a,l){n&&n.m(a,l),h(a,e,l),h(a,t,l),f(t,r),s[8](r),h(a,u,l),h(a,o,l)},p(a,[l]){a[1]?n?n.p(a,l):(n=x(a),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),l&4&&c(o,"name",a[2]),l&8&&c(o,"id",a[3]),l&1&&(o.value=a[0])},i:g,o:g,d(a){a&&($(e),$(t),$(u),$(o)),n&&n.d(a),s[8](null)}}}function J(s,e,t){let{attachedInternals:r}=e,{label:u=""}=e,{name:o=null}=e,{id:n=null}=e,{value:a=""}=e,{options:l={}}=e,m,p;const V=()=>a,j=M();N(()=>{p=new window.CodeMirror(m,l),p.setValue(a),p.on("change",i=>{t(0,a=p.getValue()),r.checkValidity(),r.setFormValue(a),j("value",{value:a})})});function w(i){B[i?"unshift":"push"](()=>{m=i,t(4,m)})}return s.$$set=i=>{"attachedInternals"in i&&t(5,r=i.attachedInternals),"label"in i&&t(1,u=i.label),"name"in i&&t(2,o=i.name),"id"in i&&t(3,n=i.id),"value"in i&&t(0,a=i.value),"options"in i&&t(6,l=i.options)},[a,u,o,n,m,r,l,V,w]}class I extends C{constructor(e){super(),E(this,e,J,H,F,{attachedInternals:5,label:1,name:2,id:3,value:0,options:6,getValue:7},D)}get attachedInternals(){return this.$$.ctx[5]}set attachedInternals(e){this.$$set({attachedInternals:e}),d()}get label(){return this.$$.ctx[1]}set label(e){this.$$set({label:e}),d()}get name(){return this.$$.ctx[2]}set name(e){this.$$set({name:e}),d()}get id(){return this.$$.ctx[3]}set id(e){this.$$set({id:e}),d()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),d()}get options(){return this.$$.ctx[6]}set options(e){this.$$set({options:e}),d()}get getValue(){return this.$$.ctx[7]}}customElements.define("jp-code-editor",A(I,{attachedInternals:{},label:{},name:{},id:{},value:{},options:{}},[],["getValue"],!1,s=>{var e;return e=class extends s{constructor(){super(),this.attachedInternals=this.attachInternals()}},q(e,"formAssociated",!0),e}));export{I as default};
