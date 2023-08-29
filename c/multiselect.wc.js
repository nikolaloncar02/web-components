var le=Object.defineProperty,re=(l,e,t)=>e in l?le(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,ne=(l,e,t)=>(re(l,typeof e!="symbol"?e+"":e,t),t);import{c as ae,S as oe,i as ie,f as y,s as ce,a as de,e as q,b as E,q as O,E as M,p as ue,d as u,t as A,g as V,h as b,N as K,o as B,M as N,r as C,n as P,j as D,K as U,k as me,w as pe,l as Y,O as ve,P as fe,G,Q as be}from"./svelte.js";import"./index2.js";function he(l){de(l,"svelte-1ks9e6j",".overlay.svelte-1ks9e6j.svelte-1ks9e6j{z-index:100;position:fixed;top:0;left:0;right:0;bottom:0}.select.svelte-1ks9e6j.svelte-1ks9e6j{position:relative;display:flex;justify-content:space-between;align-items:center;text-align:left;width:100%;height:3rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:0 .75rem;gap:.75rem;background-color:var(--background-primary);border:1px solid var(--border-primary);border-radius:.25rem}.select.svelte-1ks9e6j.svelte-1ks9e6j:focus{outline:none;border-color:var(--primary-color);box-shadow:inset 0 0 0 1px var(--primary-color)}.select.toggled.svelte-1ks9e6j.svelte-1ks9e6j{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-color:var(--primary-color);box-shadow:inset 0 -2px 1px -1px var(--primary-color)}.select.svelte-1ks9e6j:disabled .select-label.svelte-1ks9e6j,.select.svelte-1ks9e6j:disabled .select-arrow.svelte-1ks9e6j{opacity:.33}.select-label.svelte-1ks9e6j.svelte-1ks9e6j{position:absolute;top:50%;transform:translateY(-50%);transition:.3s}.select-label.move.svelte-1ks9e6j.svelte-1ks9e6j{top:.25rem;transform:translateY(0);font-size:.75rem}input:required+.select.svelte-1ks9e6j .select-label.svelte-1ks9e6j::after{content:' *'}input.svelte-1ks9e6j:required:invalid+.select.svelte-1ks9e6j{border-color:var(--danger-color)}.select-option.svelte-1ks9e6j.svelte-1ks9e6j{flex:auto;width:10rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-top:1rem}.select-arrow.svelte-1ks9e6j.svelte-1ks9e6j{width:1rem;height:1rem;min-width:1rem;min-height:1rem;transition:.3s}.select-arrow.rotate.svelte-1ks9e6j.svelte-1ks9e6j{transform:rotate(-180deg)}.menu.svelte-1ks9e6j.svelte-1ks9e6j{position:absolute;display:flex;flex-direction:column;max-height:20rem;overflow-y:auto;border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem;box-shadow:0 6px 9px rgba(0,0,0,.16);background-color:var(--background-primary)}.menu-button.svelte-1ks9e6j.svelte-1ks9e6j{display:flex;justify-content:space-between;align-items:center;gap:.75rem;padding:.75rem;text-align:left;outline:none;transition:.3s}.menu-button.selected.svelte-1ks9e6j.svelte-1ks9e6j{background-color:var(--background-tertiary);color:var(--primary-color);fill:var(--primary-color)}.menu-button.svelte-1ks9e6j.svelte-1ks9e6j:hover,.menu-button.svelte-1ks9e6j.svelte-1ks9e6j:focus{background-color:var(--background-secondary)}")}function J(l,e,t){const n=l.slice();return n[24]=e[t],n[25]=e,n[26]=t,n}function Q(l){let e,t,n=[],a=new Map,p,o,g=Y(l[0]);const k=r=>r[24];for(let r=0;r<g.length;r+=1){let m=J(l,g,r),i=k(m);a.set(i,n[r]=F(i,m))}return{c(){e=q("div"),t=q("div");for(let r=0;r<n.length;r+=1)n[r].c();u(t,"class","menu svelte-1ks9e6j"),u(t,"style",l[9]),u(e,"class","overlay svelte-1ks9e6j"),u(e,"tabindex","-1"),u(e,"role","dialog")},m(r,m){V(r,e,m),b(e,t);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(t,null);p||(o=[B(e,"click",ve(l[11])),B(e,"keydown",l[12])],p=!0)},p(r,m){m&1025&&(g=Y(r[0]),n=fe(n,m,k,1,r,g,a,t,be,F,null,J)),m&512&&u(t,"style",r[9])},d(r){r&&D(e);for(let m=0;m<n.length;m+=1)n[m].d();p=!1,U(o)}}}function R(l){let e,t;return{c(){e=M("svg"),t=M("path"),u(t,"d","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"width","1rem"),u(e,"height","1rem"),u(e,"viewBox","0 0 448 512")},m(n,a){V(n,e,a),b(e,t)},d(n){n&&D(e)}}}function F(l,e){let t,n,a=e[24].label+"",p,o,g,k=e[26],r,m,i=e[24].selected&&R();const I=()=>e[19](t,k),x=()=>e[19](null,k);function j(){return e[20](e[24],e[25],e[26])}return{key:l,first:null,c(){t=q("button"),n=q("span"),p=O(a),o=E(),i&&i.c(),g=E(),u(t,"class","menu-button svelte-1ks9e6j"),A(t,"selected",e[24].selected),this.first=t},m(h,w){V(h,t,w),b(t,n),b(n,p),b(t,o),i&&i.m(t,null),b(t,g),I(),r||(m=B(t,"click",N(j)),r=!0)},p(h,w){e=h,w&1&&a!==(a=e[24].label+"")&&C(p,a),e[24].selected?i||(i=R(),i.c(),i.m(t,g)):i&&(i.d(1),i=null),k!==e[26]&&(x(),k=e[26],I()),w&1&&A(t,"selected",e[24].selected)},d(h){h&&D(t),i&&i.d(),x(),r=!1,m()}}}function ge(l){let e,t,n,a,p,o=(l[6]||"Select an option")+"",g,k,r,m=(l[1]||"")+"",i,I,x,j,h,w,$,z,f=l[7]&&Q(l);return{c(){e=q("div"),t=q("input"),n=E(),a=q("button"),p=q("span"),g=O(o),k=E(),r=q("span"),i=O(m),I=E(),x=M("svg"),j=M("path"),h=E(),f&&f.c(),w=ue(),u(t,"id",l[4]),u(t,"name",l[5]),t.required=l[3],t.hidden=!0,u(t,"class","svelte-1ks9e6j"),u(p,"class","select-label svelte-1ks9e6j"),A(p,"move",l[1]||l[7]),u(r,"class","select-option svelte-1ks9e6j"),u(j,"d","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"),u(x,"xmlns","http://www.w3.org/2000/svg"),u(x,"viewBox","0 0 320 512"),u(x,"class","select-arrow svelte-1ks9e6j"),A(x,"rotate",l[7]),u(a,"class","select svelte-1ks9e6j"),a.disabled=l[2],A(a,"toggled",l[7])},m(d,v){V(d,e,v),b(e,t),K(t,l[1]),b(e,n),b(e,a),b(a,p),b(p,g),b(a,k),b(a,r),b(r,i),b(a,I),b(a,x),b(x,j),l[18](a),V(d,h,v),f&&f.m(d,v),V(d,w,v),$||(z=[B(t,"input",l[17]),B(a,"click",N(l[11])),B(a,"keydown",l[12])],$=!0)},p(d,[v]){v&16&&u(t,"id",d[4]),v&32&&u(t,"name",d[5]),v&8&&(t.required=d[3]),v&2&&t.value!==d[1]&&K(t,d[1]),v&64&&o!==(o=(d[6]||"Select an option")+"")&&C(g,o),v&130&&A(p,"move",d[1]||d[7]),v&2&&m!==(m=(d[1]||"")+"")&&C(i,m),v&128&&A(x,"rotate",d[7]),v&4&&(a.disabled=d[2]),v&128&&A(a,"toggled",d[7]),d[7]?f?f.p(d,v):(f=Q(d),f.c(),f.m(w.parentNode,w)):f&&(f.d(1),f=null)},i:P,o:P,d(d){d&&(D(e),D(h),D(w)),l[18](null),f&&f.d(d),$=!1,U(z)}}}function ke(l,e,t){let{attachedInternals:n}=e,{minSelects:a=0}=e,{maxSelects:p=null}=e,{options:o=[]}=e,{disabled:g=!1}=e,{required:k=!1}=e,{value:r=""}=e,{id:m=null}=e,{name:i=null}=e,{label:I="Label"}=e;const x=()=>o.filter(s=>s.selected).map(s=>s.label);let j=!1,h,w,$=[],z="",f;const d=me();function v(s){if(s&&s.target&&s.target.closest(".menu"))return;const c=h.getBoundingClientRect(),S=window.innerHeight-c.bottom,L=160;let T="";S<L?T=`
            min-width: ${c.width}px;
            bottom: ${window.innerHeight-c.top}px;
            left: ${c.left}px;
        `:T=`
            min-width: ${c.width}px;
            top: ${c.bottom}px;
            left: ${c.left}px;
        `,t(9,w=T),t(7,j=!j),j&&setTimeout(()=>{const H=r?o.indexOf(r):0;$[H].focus()},1),j||setTimeout(()=>{h.focus()},10)}function X(s){const c=$.findIndex(L=>L===document.activeElement);let S;if(j){if(s.key==="Escape"){v(),h.focus();return}const L=s.key==="Home"||s.key==="ArrowUp"&&s.metaKey,T=s.key==="End"||s.key==="ArrowDown"&&s.metaKey;if(L){s.preventDefault(),$[0].focus();return}if(T){s.preventDefault(),$[o.length-1].focus();return}if(["ArrowDown","ArrowUp"].includes(s.key)&&(s.preventDefault(),s.key==="ArrowDown"?c<o.length-1?S=c+1:S=c:c>0?S=c-1:S=c,$[S].focus()),/^[a-z\d]$/i.test(s.key)){clearTimeout(f),z+=s.key;const H=o.findIndex(se=>se.toLowerCase().includes(z.toLowerCase()));H!==-1&&$[H].focus(),f=setTimeout(()=>{z=""},500)}}}pe(()=>{typeof o=="string"&&t(0,o=JSON.parse(o)),p||t(13,p=o.length)});function Z(){r=this.value,t(1,r),t(0,o),t(15,a),t(14,n),t(13,p)}function _(s){G[s?"unshift":"push"](()=>{h=s,t(8,h)})}function ee(s,c){G[s?"unshift":"push"](()=>{$[c]=s,t(10,$)})}const te=(s,c,S)=>t(0,c[S].selected=!s.selected,o);return l.$$set=s=>{"attachedInternals"in s&&t(14,n=s.attachedInternals),"minSelects"in s&&t(15,a=s.minSelects),"maxSelects"in s&&t(13,p=s.maxSelects),"options"in s&&t(0,o=s.options),"disabled"in s&&t(2,g=s.disabled),"required"in s&&t(3,k=s.required),"value"in s&&t(1,r=s.value),"id"in s&&t(4,m=s.id),"name"in s&&t(5,i=s.name),"label"in s&&t(6,I=s.label)},l.$$.update=()=>{if(l.$$.dirty&57345&&Array.isArray(o)){const s=o.filter(c=>c.selected).length;s<a?n.setValidity({customError:!0},"Below limit checks."):s>p?n.setValidity({customError:!0},"Above limit checks."):n.setValidity({}),n.checkValidity(),t(1,r=o.filter(c=>c.selected).map(c=>c.label).join(",")),d("value",o.filter(c=>c.selected).map(c=>c.label))}},[o,r,g,k,m,i,I,j,h,w,$,v,X,p,n,a,x,Z,_,ee,te]}class W extends oe{constructor(e){super(),ie(this,e,ke,ge,ce,{attachedInternals:14,minSelects:15,maxSelects:13,options:0,disabled:2,required:3,value:1,id:4,name:5,label:6,getValue:16},he)}get attachedInternals(){return this.$$.ctx[14]}set attachedInternals(e){this.$$set({attachedInternals:e}),y()}get minSelects(){return this.$$.ctx[15]}set minSelects(e){this.$$set({minSelects:e}),y()}get maxSelects(){return this.$$.ctx[13]}set maxSelects(e){this.$$set({maxSelects:e}),y()}get options(){return this.$$.ctx[0]}set options(e){this.$$set({options:e}),y()}get disabled(){return this.$$.ctx[2]}set disabled(e){this.$$set({disabled:e}),y()}get required(){return this.$$.ctx[3]}set required(e){this.$$set({required:e}),y()}get value(){return this.$$.ctx[1]}set value(e){this.$$set({value:e}),y()}get id(){return this.$$.ctx[4]}set id(e){this.$$set({id:e}),y()}get name(){return this.$$.ctx[5]}set name(e){this.$$set({name:e}),y()}get label(){return this.$$.ctx[6]}set label(e){this.$$set({label:e}),y()}get getValue(){return this.$$.ctx[16]}}customElements.define("jp-multiselect",ae(W,{attachedInternals:{},minSelects:{},maxSelects:{},options:{},disabled:{type:"Boolean"},required:{type:"Boolean"},value:{},id:{},name:{},label:{}},[],["getValue"],!1,l=>{var e;return e=class extends l{constructor(){super(),this.attachedInternals=this.attachInternals()}},ne(e,"formAssociated",!0),e}));export{W as default};