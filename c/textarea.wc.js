var D=Object.defineProperty,K=(t,e,i)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,N=(t,e,i)=>(K(t,typeof e!="symbol"?e+"":e,i),i);import{c as Q,S as R,i as U,f as u,s as W,a as X,e as x,b as F,d as r,t as c,g as j,h as y,I as L,o as z,n as B,j as E,J as Y,k as Z,G as _}from"./svelte.js";import"./index2.js";function ee(t){X(t,"svelte-689tue",`.has-hint.svelte-689tue.svelte-689tue{position:relative;margin-bottom:1.25rem}.field.svelte-689tue.svelte-689tue{font-size:0.75rem;line-height:1rem;position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-align:left;width:100%;min-height:2rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:1px 0.75rem;gap:0.75rem;background-color:var(--background-primary);border:1px solid var(--border-primary);-webkit-border-radius:0.25rem;-moz-border-radius:0.25rem;border-radius:0.25rem}.field.required.svelte-689tue .field-label.svelte-689tue::after{content:' *'}.field.disabled.svelte-689tue.svelte-689tue{pointer-events:none;opacity:0.5}.field.svelte-689tue.svelte-689tue:focus-within{border-color:var(--primary-color);-webkit-box-shadow:inset 0 0 0 1px var(--primary-color);-moz-box-shadow:inset 0 0 0 1px var(--primary-color);box-shadow:inset 0 0 0 1px var(--primary-color)}.field-label.svelte-689tue.svelte-689tue{position:absolute;top:1.25rem;font-size:1rem;-webkit-transition:transform 0.3s,
      top 0.3s,
      font-size 0.3s;-o-transition:transform 0.3s,
      top 0.3s,
      font-size 0.3s;-moz-transition:transform 0.3s,
      top 0.3s,
      font-size 0.3s;transition:transform 0.3s,
      top 0.3s,
      font-size 0.3s}.field-label.move.svelte-689tue.svelte-689tue{top:0.25rem;font-size:0.75rem}.field-label.move.svelte-689tue+.field-input.svelte-689tue:-moz-placeholder{opacity:1}.field-label.move.svelte-689tue+.field-input.svelte-689tue::-moz-placeholder{opacity:1}.field-label.move.svelte-689tue+.field-input.svelte-689tue:-ms-input-placeholder{opacity:1}.field-label.move.svelte-689tue+.field-input.svelte-689tue::-ms-input-placeholder{opacity:1}.field-label.move.svelte-689tue+.field-input.svelte-689tue::placeholder{opacity:1}.field-input.svelte-689tue.svelte-689tue{-webkit-box-flex:1;-webkit-flex:auto;-moz-box-flex:1;-ms-flex:auto;flex:auto;width:10rem;font-size:1rem;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;margin:1.5rem 0 0 0;padding:0 0 0.25rem 0;line-height:1.375rem;border:none;outline:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.field-input.svelte-689tue.svelte-689tue:-moz-placeholder{opacity:0;-moz-transition:opacity 0.3s;transition:opacity 0.3s}.field-input.svelte-689tue.svelte-689tue::-moz-placeholder{opacity:0;-moz-transition:opacity 0.3s;transition:opacity 0.3s}.field-input.svelte-689tue.svelte-689tue:-ms-input-placeholder{opacity:0;-ms-transition:opacity 0.3s;transition:opacity 0.3s}.field-input.svelte-689tue.svelte-689tue::-ms-input-placeholder{opacity:0;-ms-transition:opacity 0.3s;transition:opacity 0.3s}.field-input.svelte-689tue.svelte-689tue::placeholder{opacity:0;-webkit-transition:opacity 0.3s;-o-transition:opacity 0.3s;-moz-transition:opacity 0.3s;transition:opacity 0.3s}.field-hint.svelte-689tue.svelte-689tue{position:absolute;top:100%;left:0;width:100%;height:1.25rem;line-height:1.25rem;font-size:0.75rem;padding:0 0.75rem;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;color:var(--text-secondary)}.field-hint.svelte-689tue.svelte-689tue:hover{z-index:255;overflow:unset}`)}function H(t){let e;return{c(){e=x("span"),r(e,"class","field-hint svelte-689tue")},m(i,o){j(i,e,o),e.innerHTML=t[4]},p(i,o){o&16&&(e.innerHTML=i[4])},d(i){i&&E(e)}}}function te(t){let e,i,o,b,s,m,p,f,v,$,d=t[4]&&H(t);return{c(){e=x("div"),i=x("label"),o=x("span"),b=F(),s=x("textarea"),f=F(),d&&d.c(),r(o,"class","field-label svelte-689tue"),c(o,"move",t[1]||t[0]),r(s,"class","field-input svelte-689tue"),r(s,"aria-hidden",m=t[5]||t[10]),r(s,"tabindex",p=t[5]||t[10]?-1:0),s.disabled=t[5],r(s,"placeholder",t[7]),s.required=t[9],s.readOnly=t[10],r(s,"id",t[2]),r(s,"name",t[6]),r(s,"minlength",t[11]),r(s,"maxlength",t[12]),r(s,"rows",t[8]),r(i,"class","field svelte-689tue"),c(i,"disabled",t[5]||t[10]),c(i,"required",t[9]),r(e,"class","svelte-689tue"),c(e,"has-hint",t[4])},m(a,n){j(a,e,n),y(e,i),y(i,o),o.innerHTML=t[3],y(i,b),y(i,s),L(s,t[0]),t[22](s),y(e,f),d&&d.m(e,null),v||($=[z(s,"input",t[21]),z(s,"focus",t[23]),z(s,"blur",t[24])],v=!0)},p(a,[n]){n&8&&(o.innerHTML=a[3]),n&3&&c(o,"move",a[1]||a[0]),n&1056&&m!==(m=a[5]||a[10])&&r(s,"aria-hidden",m),n&1056&&p!==(p=a[5]||a[10]?-1:0)&&r(s,"tabindex",p),n&32&&(s.disabled=a[5]),n&128&&r(s,"placeholder",a[7]),n&512&&(s.required=a[9]),n&1024&&(s.readOnly=a[10]),n&4&&r(s,"id",a[2]),n&64&&r(s,"name",a[6]),n&2048&&r(s,"minlength",a[11]),n&4096&&r(s,"maxlength",a[12]),n&256&&r(s,"rows",a[8]),n&1&&L(s,a[0]),n&1056&&c(i,"disabled",a[5]||a[10]),n&512&&c(i,"required",a[9]),a[4]?d?d.p(a,n):(d=H(a),d.c(),d.m(e,null)):d&&(d.d(1),d=null),n&16&&c(e,"has-hint",a[4])},i:B,o:B,d(a){a&&E(e),t[22](null),d&&d.d(),v=!1,Y($)}}}function ie(t,e,i){let{attachedInternals:o}=e,{id:b=null}=e,{value:s=""}=e,{label:m="Label"}=e,{hint:p=""}=e,{disabled:f=!1}=e,{name:v=null}=e,{placeholder:$=""}=e,{inputFocused:d=!1}=e,{rows:a=4}=e,{required:n=!1}=e,{readonly:q=!1}=e,{minlength:k=null}=e,{maxlength:I=null}=e;const O=()=>s;let{validationMessages:h={}}=e,{requiredValidationMessage:w}=e,{minlengthValidationMessage:M}=e,{maxlengthValidationMessage:V}=e;const S=Z();let g;const A=()=>{o.reportValidity()};function G(){s=this.value,i(0,s)}function J(l){_[l?"unshift":"push"](()=>{g=l,i(13,g)})}const P=()=>i(1,d=!0),C=()=>i(1,d=!1);return t.$$set=l=>{"attachedInternals"in l&&i(14,o=l.attachedInternals),"id"in l&&i(2,b=l.id),"value"in l&&i(0,s=l.value),"label"in l&&i(3,m=l.label),"hint"in l&&i(4,p=l.hint),"disabled"in l&&i(5,f=l.disabled),"name"in l&&i(6,v=l.name),"placeholder"in l&&i(7,$=l.placeholder),"inputFocused"in l&&i(1,d=l.inputFocused),"rows"in l&&i(8,a=l.rows),"required"in l&&i(9,n=l.required),"readonly"in l&&i(10,q=l.readonly),"minlength"in l&&i(11,k=l.minlength),"maxlength"in l&&i(12,I=l.maxlength),"validationMessages"in l&&i(16,h=l.validationMessages),"requiredValidationMessage"in l&&i(17,w=l.requiredValidationMessage),"minlengthValidationMessage"in l&&i(18,M=l.minlengthValidationMessage),"maxlengthValidationMessage"in l&&i(19,V=l.maxlengthValidationMessage)},t.$$.update=()=>{t.$$.dirty&1007617&&(o.checkValidity(),g&&(g.validity.tooShort?(M||h.minlength)&&o.setValidity({customError:!0},M||h.minlength):g.validity.tooLong?(V||h.maxlength)&&o.setValidity({customError:!0},V||h.maxlength):g.validity.valueMissing&&(w||h.required)&&o.setValidity({customError:!0},w||h.required)),o.setFormValue(s),S("value",{value:s}))},[s,d,b,m,p,f,v,$,a,n,q,k,I,g,o,O,h,w,M,V,A,G,J,P,C]}class T extends R{constructor(e){super(),U(this,e,ie,te,W,{attachedInternals:14,id:2,value:0,label:3,hint:4,disabled:5,name:6,placeholder:7,inputFocused:1,rows:8,required:9,readonly:10,minlength:11,maxlength:12,getValue:15,validationMessages:16,requiredValidationMessage:17,minlengthValidationMessage:18,maxlengthValidationMessage:19,reportValidity:20},ee)}get attachedInternals(){return this.$$.ctx[14]}set attachedInternals(e){this.$$set({attachedInternals:e}),u()}get id(){return this.$$.ctx[2]}set id(e){this.$$set({id:e}),u()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),u()}get label(){return this.$$.ctx[3]}set label(e){this.$$set({label:e}),u()}get hint(){return this.$$.ctx[4]}set hint(e){this.$$set({hint:e}),u()}get disabled(){return this.$$.ctx[5]}set disabled(e){this.$$set({disabled:e}),u()}get name(){return this.$$.ctx[6]}set name(e){this.$$set({name:e}),u()}get placeholder(){return this.$$.ctx[7]}set placeholder(e){this.$$set({placeholder:e}),u()}get inputFocused(){return this.$$.ctx[1]}set inputFocused(e){this.$$set({inputFocused:e}),u()}get rows(){return this.$$.ctx[8]}set rows(e){this.$$set({rows:e}),u()}get required(){return this.$$.ctx[9]}set required(e){this.$$set({required:e}),u()}get readonly(){return this.$$.ctx[10]}set readonly(e){this.$$set({readonly:e}),u()}get minlength(){return this.$$.ctx[11]}set minlength(e){this.$$set({minlength:e}),u()}get maxlength(){return this.$$.ctx[12]}set maxlength(e){this.$$set({maxlength:e}),u()}get getValue(){return this.$$.ctx[15]}get validationMessages(){return this.$$.ctx[16]}set validationMessages(e){this.$$set({validationMessages:e}),u()}get requiredValidationMessage(){return this.$$.ctx[17]}set requiredValidationMessage(e){this.$$set({requiredValidationMessage:e}),u()}get minlengthValidationMessage(){return this.$$.ctx[18]}set minlengthValidationMessage(e){this.$$set({minlengthValidationMessage:e}),u()}get maxlengthValidationMessage(){return this.$$.ctx[19]}set maxlengthValidationMessage(e){this.$$set({maxlengthValidationMessage:e}),u()}get reportValidity(){return this.$$.ctx[20]}}try{customElements.define("jp-textarea",Q(T,{attachedInternals:{},id:{},value:{},label:{},hint:{},disabled:{type:"Boolean"},name:{},placeholder:{},inputFocused:{type:"Boolean"},rows:{},required:{type:"Boolean"},readonly:{type:"Boolean"},minlength:{},maxlength:{},validationMessages:{},requiredValidationMessage:{},minlengthValidationMessage:{},maxlengthValidationMessage:{}},[],["getValue","reportValidity"],!1,t=>{var e;return e=class extends t{constructor(){super(),this.attachedInternals=this.attachInternals()}},N(e,"formAssociated",!0),e}));}catch{};export{T as default};
