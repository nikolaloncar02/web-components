var be=Object.defineProperty,ge=(i,e,t)=>e in i?be(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,fe=(i,e,t)=>(ge(i,typeof e!="symbol"?e+"":e,t),t);import{c as xe,S as he,i as we,f as $,s as ye,a as $e,e as S,b as D,q as N,E as U,p as ke,d as u,t as j,g as L,h as x,I as R,o as T,H as F,r as P,n as W,j as B,J as X,k as Ve,w as Me,l as Z,O as ze,P as qe,Q as Ie,G as ee}from"./svelte.js";import"./index2.js";function Se(i){$e(i,"svelte-1vni2gp",".has-hint.svelte-1vni2gp.svelte-1vni2gp{position:relative;margin-bottom:1.25rem}.overlay.svelte-1vni2gp.svelte-1vni2gp{z-index:100;position:fixed;top:0;left:0;right:0;bottom:0}.select.svelte-1vni2gp.svelte-1vni2gp{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-align:left;width:100%;height:3rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 .75rem;gap:.75rem;background-color:var(--background-primary);border:1px solid var(--border-primary);-webkit-border-radius:.25rem;-moz-border-radius:.25rem;border-radius:.25rem}.select.svelte-1vni2gp.svelte-1vni2gp:focus{outline:none;border-color:var(--primary-color);-webkit-box-shadow:inset 0 0 0 1px var(--primary-color);-moz-box-shadow:inset 0 0 0 1px var(--primary-color);box-shadow:inset 0 0 0 1px var(--primary-color)}.select.toggled.svelte-1vni2gp.svelte-1vni2gp{-webkit-border-bottom-left-radius:0;-moz-border-radius-bottomleft:0;border-bottom-left-radius:0;-webkit-border-bottom-right-radius:0;-moz-border-radius-bottomright:0;border-bottom-right-radius:0;border-bottom-color:var(--primary-color);-webkit-box-shadow:inset 0 -2px 1px -1px var(--primary-color);-moz-box-shadow:inset 0 -2px 1px -1px var(--primary-color);box-shadow:inset 0 -2px 1px -1px var(--primary-color)}.select.svelte-1vni2gp.svelte-1vni2gp:disabled{opacity:.5}.select-label.svelte-1vni2gp.svelte-1vni2gp{position:absolute;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:.3s;-o-transition:.3s;-moz-transition:.3s;transition:.3s}.select-label.move.svelte-1vni2gp.svelte-1vni2gp{top:.25rem;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);font-size:.75rem}input:required+.select.svelte-1vni2gp .select-label.svelte-1vni2gp::after{content:' *'}input.svelte-1vni2gp:required:invalid+.select.svelte-1vni2gp{border-color:var(--danger-color)}.select-option.svelte-1vni2gp.svelte-1vni2gp{-webkit-box-flex:1;-webkit-flex:auto;-moz-box-flex:1;-ms-flex:auto;flex:auto;width:10rem;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;padding-top:1rem}.select-arrow.svelte-1vni2gp.svelte-1vni2gp{width:1rem;height:1rem;min-width:1rem;min-height:1rem;-webkit-transition:.3s;-o-transition:.3s;-moz-transition:.3s;transition:.3s}.select-arrow.rotate.svelte-1vni2gp.svelte-1vni2gp{-webkit-transform:rotate(-180deg);-moz-transform:rotate(-180deg);-ms-transform:rotate(-180deg);-o-transform:rotate(-180deg);transform:rotate(-180deg)}.select-hint.svelte-1vni2gp.svelte-1vni2gp{position:absolute;top:100%;left:0;width:100%;height:1.25rem;line-height:1.25rem;font-size:.75rem;padding:0 .75rem;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;color:var(--text-secondary)}.select-hint.svelte-1vni2gp.svelte-1vni2gp:hover{z-index:255;overflow:unset}.menu.svelte-1vni2gp.svelte-1vni2gp{position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:300px;overflow-y:auto;-webkit-border-bottom-left-radius:.25rem;-moz-border-radius-bottomleft:.25rem;border-bottom-left-radius:.25rem;-webkit-border-bottom-right-radius:.25rem;-moz-border-radius-bottomright:.25rem;border-bottom-right-radius:.25rem;-webkit-box-shadow:0 6px 9px rgba(0,0,0,.16);-moz-box-shadow:0 6px 9px rgba(0,0,0,.16);box-shadow:0 6px 9px rgba(0,0,0,.16);background-color:var(--background-primary)}.menu-button.svelte-1vni2gp.svelte-1vni2gp{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:.75rem;padding:.75rem;text-align:left;outline:none;-webkit-transition:.3s;-o-transition:.3s;-moz-transition:.3s;transition:.3s}.menu-button.selected.svelte-1vni2gp.svelte-1vni2gp{background-color:var(--background-tertiary);color:var(--primary-color);fill:var(--primary-color)}.menu-button.svelte-1vni2gp.svelte-1vni2gp:disabled{opacity:.33}.menu-button.svelte-1vni2gp.svelte-1vni2gp:not(:disabled):hover,.menu-button.svelte-1vni2gp.svelte-1vni2gp:focus{background-color:var(--background-secondary)}")}function te(i,e,t){const l=i.slice();return l[34]=e[t],l[35]=e,l[36]=t,l}function se(i){let e;return{c(){e=S("span"),u(e,"class","select-hint svelte-1vni2gp")},m(t,l){L(t,e,l),e.innerHTML=i[4]},p(t,l){l[0]&16&&(e.innerHTML=t[4])},d(t){t&&B(e)}}}function ie(i){let e,t,l=[],d=new Map,p,n,k=Z(i[0]);const V=o=>o[34];for(let o=0;o<k.length;o+=1){let c=te(i,k,o),g=V(c);d.set(g,l[o]=ae(g,c))}return{c(){e=S("div"),t=S("div");for(let o=0;o<l.length;o+=1)l[o].c();u(t,"class","menu svelte-1vni2gp"),u(t,"style",i[10]),u(e,"class","overlay svelte-1vni2gp"),u(e,"tabindex","-1"),u(e,"role","dialog")},m(o,c){L(o,e,c),x(e,t);for(let g=0;g<l.length;g+=1)l[g]&&l[g].m(t,null);p||(n=[T(e,"click",ze(i[13])),T(e,"keydown",i[14])],p=!0)},p(o,c){c[0]&2049&&(k=Z(o[0]),l=qe(l,c,V,1,o,k,d,t,Ie,ae,null,te)),c[0]&1024&&u(t,"style",o[10])},d(o){o&&B(e);for(let c=0;c<l.length;c+=1)l[c].d();p=!1,X(n)}}}function ne(i){let e,t;return{c(){e=U("svg"),t=U("path"),u(t,"d","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"width","1rem"),u(e,"height","1rem"),u(e,"viewBox","0 0 448 512")},m(l,d){L(l,e,d),x(e,t)},d(l){l&&B(e)}}}function ae(i,e){let t,l,d=(e[34].label?e[34].label:e[34].value)+"",p,n,k,V,o=e[36],c,g,f=e[34].selected&&ne();const M=()=>e[27](t,o),E=()=>e[27](null,o);function H(){return e[28](e[34],e[35],e[36])}return{key:i,first:null,c(){t=S("button"),l=S("span"),p=N(d),n=D(),f&&f.c(),k=D(),u(t,"class","menu-button svelte-1vni2gp"),t.disabled=V=e[34].disabled,j(t,"selected",e[34].selected),this.first=t},m(w,y){L(w,t,y),x(t,l),x(l,p),x(t,n),f&&f.m(t,null),x(t,k),M(),c||(g=T(t,"click",F(H)),c=!0)},p(w,y){e=w,y[0]&1&&d!==(d=(e[34].label?e[34].label:e[34].value)+"")&&P(p,d),e[34].selected?f||(f=ne(),f.c(),f.m(t,k)):f&&(f.d(1),f=null),y[0]&1&&V!==(V=e[34].disabled)&&(t.disabled=V),o!==e[36]&&(E(),o=e[36],M()),y[0]&1&&j(t,"selected",e[34].selected)},d(w){w&&B(t),f&&f.d(),E(),c=!1,g()}}}function je(i){let e,t,l,d,p,n=(i[7]||"Select an option")+"",k,V,o,c=(i[12]||"")+"",g,f,M,E,H,w,y,Y,A,h=i[4]&&se(i),v=i[8]&&ie(i);return{c(){e=S("div"),t=S("input"),l=D(),d=S("button"),p=S("span"),k=N(n),V=D(),o=S("span"),g=N(c),f=D(),M=U("svg"),E=U("path"),H=D(),h&&h.c(),w=D(),v&&v.c(),y=ke(),u(t,"id",i[5]),u(t,"name",i[6]),t.required=i[3],t.hidden=!0,u(t,"class","svelte-1vni2gp"),u(p,"class","select-label svelte-1vni2gp"),j(p,"move",i[1]||i[8]),u(o,"class","select-option svelte-1vni2gp"),u(E,"d","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"),u(M,"xmlns","http://www.w3.org/2000/svg"),u(M,"viewBox","0 0 320 512"),u(M,"class","select-arrow svelte-1vni2gp"),j(M,"rotate",i[8]),u(d,"class","select svelte-1vni2gp"),d.disabled=i[2],j(d,"toggled",i[8]),u(e,"class","svelte-1vni2gp"),j(e,"has-hint",i[4])},m(r,b){L(r,e,b),x(e,t),R(t,i[1]),x(e,l),x(e,d),x(d,p),x(p,k),x(d,V),x(d,o),x(o,g),x(d,f),x(d,M),x(M,E),i[26](d),x(e,H),h&&h.m(e,null),L(r,w,b),v&&v.m(r,b),L(r,y,b),Y||(A=[T(t,"input",i[25]),T(d,"click",F(i[13])),T(d,"keydown",i[14])],Y=!0)},p(r,b){b[0]&32&&u(t,"id",r[5]),b[0]&64&&u(t,"name",r[6]),b[0]&8&&(t.required=r[3]),b[0]&2&&t.value!==r[1]&&R(t,r[1]),b[0]&128&&n!==(n=(r[7]||"Select an option")+"")&&P(k,n),b[0]&258&&j(p,"move",r[1]||r[8]),b[0]&4096&&c!==(c=(r[12]||"")+"")&&P(g,c),b[0]&256&&j(M,"rotate",r[8]),b[0]&4&&(d.disabled=r[2]),b[0]&256&&j(d,"toggled",r[8]),r[4]?h?h.p(r,b):(h=se(r),h.c(),h.m(e,null)):h&&(h.d(1),h=null),b[0]&16&&j(e,"has-hint",r[4]),r[8]?v?v.p(r,b):(v=ie(r),v.c(),v.m(y.parentNode,y)):v&&(v.d(1),v=null)},i:W,o:W,d(r){r&&(B(e),B(w),B(y)),i[26](null),h&&h.d(),v&&v.d(r),Y=!1,X(A)}}}function Ee(i,e,t){let{attachedInternals:l}=e,{minSelects:d=0}=e,{maxSelects:p=null}=e,{options:n=[]}=e,{disabled:k=!1}=e,{required:V=!1}=e,{hint:o=""}=e,{value:c}=e,{internalValue:g=""}=e,{id:f=""}=e,{name:M=""}=e,{label:E="Label"}=e;const H=()=>n.filter(s=>s.selected).map(s=>s.value);let{validationMessages:w={}}=e,{requiredValidationMessage:y}=e,{minselectsValidationMessage:Y}=e,{maxselectsValidationMessage:A}=e,h=!1,v=!1,r,b,I=[],J="",G,Q;const re=Ve(),oe=()=>{l.reportValidity()};function _(s){if(s&&s.target&&s.target.closest(".menu"))return;const a=r.getBoundingClientRect(),m=window.innerHeight-a.bottom,C=300;let O="";m<C?O=`
            min-width: ${a.width}px;
            bottom: ${window.innerHeight-a.top}px;
            left: ${a.left}px;
        `:O=`
            min-width: ${a.width}px;
            top: ${a.bottom}px;
            left: ${a.left}px;
        `,t(10,b=O),t(8,v=!v),setTimeout(v?()=>{const q=n.findIndex(z=>!z.disabled);q!==-1&&I[q].focus()}:()=>{h?r.nextElementSibling.focus():r.focus()},10)}function K(s,a){if(a==="next"){for(let m=s+1;m<n.length;m++)if(!n[m].disabled)return m}else if(a==="previous"){for(let m=s-1;m>=0;m--)if(!n[m].disabled)return m}return s}function de(s){const a=I.findIndex(C=>C===document.activeElement);let m;if(v){if(s.key==="Escape"){_(),r.focus();return}const C=s.key==="Home"||s.key==="ArrowUp"&&s.metaKey,O=s.key==="End"||s.key==="ArrowDown"&&s.metaKey;if(C){s.preventDefault();const q=n.findIndex(z=>!z.disabled);q!==-1&&I[q].focus();return}if(O){s.preventDefault();const q=n.slice().reverse().findIndex(ve=>!ve.disabled),z=q!==-1?n.length-1-q:-1;z!==-1&&I[z].focus();return}if(["ArrowDown","ArrowUp"].includes(s.key)&&(s.preventDefault(),s.key==="ArrowUp"?m=K(a,"previous"):m=K(a,"next"),I[m].focus()),s.key==="Tab"){if(s.preventDefault(),h=!0,s.shiftKey){if(m=K(a,"previous"),a===m){_(),r.focus();return}}else if(m=K(a,"next"),a===m){_(),r.focus();return}I[m].focus()}if(/^[a-z\d]$/i.test(s.key)){clearTimeout(G),J+=s.key;const q=n.map(z=>z.label?z.label:z.value).findIndex(z=>z.toLowerCase().includes(J.toLowerCase()));q!==-1&&I[q].focus(),G=setTimeout(()=>{J=""},500)}}}Me(()=>{typeof n=="string"&&t(0,n=JSON.parse(n)),p||t(15,p=n.length),t(0,n=n.map(s=>(s.selected==null&&(s.selected=!1),s))),c&&(typeof c=="string"?c.split(",").forEach(s=>{t(0,n[n.findIndex(a=>a.value==s)].selected=!0,n)}):c.forEach(s=>{t(0,n[n.findIndex(a=>a.value==s)].selected=!0,n)}))});function ce(){g=this.value,t(1,g),t(0,n),t(3,V),t(16,l),t(21,y),t(20,w),t(17,d),t(22,Y),t(15,p),t(23,A)}function ue(s){ee[s?"unshift":"push"](()=>{r=s,t(9,r)})}function me(s,a){ee[s?"unshift":"push"](()=>{I[a]=s,t(11,I)})}const pe=(s,a,m)=>t(0,a[m].selected=!s.selected,n);return i.$$set=s=>{"attachedInternals"in s&&t(16,l=s.attachedInternals),"minSelects"in s&&t(17,d=s.minSelects),"maxSelects"in s&&t(15,p=s.maxSelects),"options"in s&&t(0,n=s.options),"disabled"in s&&t(2,k=s.disabled),"required"in s&&t(3,V=s.required),"hint"in s&&t(4,o=s.hint),"value"in s&&t(18,c=s.value),"internalValue"in s&&t(1,g=s.internalValue),"id"in s&&t(5,f=s.id),"name"in s&&t(6,M=s.name),"label"in s&&t(7,E=s.label),"validationMessages"in s&&t(20,w=s.validationMessages),"requiredValidationMessage"in s&&t(21,y=s.requiredValidationMessage),"minselectsValidationMessage"in s&&t(22,Y=s.minselectsValidationMessage),"maxselectsValidationMessage"in s&&t(23,A=s.maxselectsValidationMessage)},i.$$.update=()=>{if(i.$$.dirty[0]&15958025&&Array.isArray(n)){const s=n.filter(a=>a.selected).length;s==0&&V?l.setValidity({customError:!0},y||w.required||"At least one item needs to be checked."):s<d?l.setValidity({customError:!0},Y||w.minselects||"Below limit checks."):s>p?l.setValidity({customError:!0},A||w.maxselects||"Above limit checks."):l.setValidity({}),l.checkValidity(),t(1,g=n.filter(a=>a.selected).map(a=>a.value).join(",")),t(12,Q=n.filter(a=>a.selected).map(a=>a.label?a.label:a.value)),re("value",n.filter(a=>a.selected).map(a=>a.value))}i.$$.dirty[0]&256&&(v?document.documentElement.style.overflowY="hidden":document.documentElement.style.overflowY="")},[n,g,k,V,o,f,M,E,v,r,b,I,Q,_,de,p,l,d,c,H,w,y,Y,A,oe,ce,ue,me,pe]}class le extends he{constructor(e){super(),we(this,e,Ee,je,ye,{attachedInternals:16,minSelects:17,maxSelects:15,options:0,disabled:2,required:3,hint:4,value:18,internalValue:1,id:5,name:6,label:7,getValue:19,validationMessages:20,requiredValidationMessage:21,minselectsValidationMessage:22,maxselectsValidationMessage:23,reportValidity:24},Se,[-1,-1])}get attachedInternals(){return this.$$.ctx[16]}set attachedInternals(e){this.$$set({attachedInternals:e}),$()}get minSelects(){return this.$$.ctx[17]}set minSelects(e){this.$$set({minSelects:e}),$()}get maxSelects(){return this.$$.ctx[15]}set maxSelects(e){this.$$set({maxSelects:e}),$()}get options(){return this.$$.ctx[0]}set options(e){this.$$set({options:e}),$()}get disabled(){return this.$$.ctx[2]}set disabled(e){this.$$set({disabled:e}),$()}get required(){return this.$$.ctx[3]}set required(e){this.$$set({required:e}),$()}get hint(){return this.$$.ctx[4]}set hint(e){this.$$set({hint:e}),$()}get value(){return this.$$.ctx[18]}set value(e){this.$$set({value:e}),$()}get internalValue(){return this.$$.ctx[1]}set internalValue(e){this.$$set({internalValue:e}),$()}get id(){return this.$$.ctx[5]}set id(e){this.$$set({id:e}),$()}get name(){return this.$$.ctx[6]}set name(e){this.$$set({name:e}),$()}get label(){return this.$$.ctx[7]}set label(e){this.$$set({label:e}),$()}get getValue(){return this.$$.ctx[19]}get validationMessages(){return this.$$.ctx[20]}set validationMessages(e){this.$$set({validationMessages:e}),$()}get requiredValidationMessage(){return this.$$.ctx[21]}set requiredValidationMessage(e){this.$$set({requiredValidationMessage:e}),$()}get minselectsValidationMessage(){return this.$$.ctx[22]}set minselectsValidationMessage(e){this.$$set({minselectsValidationMessage:e}),$()}get maxselectsValidationMessage(){return this.$$.ctx[23]}set maxselectsValidationMessage(e){this.$$set({maxselectsValidationMessage:e}),$()}get reportValidity(){return this.$$.ctx[24]}}try{customElements.define("jp-multiselect",xe(le,{attachedInternals:{},minSelects:{},maxSelects:{},options:{},disabled:{type:"Boolean"},required:{type:"Boolean"},hint:{},value:{},internalValue:{},id:{},name:{},label:{},validationMessages:{},requiredValidationMessage:{},minselectsValidationMessage:{},maxselectsValidationMessage:{}},[],["getValue","reportValidity"],!1,i=>{var e;return e=class extends i{constructor(){super(),this.attachedInternals=this.attachInternals()}},fe(e,"formAssociated",!0),e}));}catch{};export{le as default};
