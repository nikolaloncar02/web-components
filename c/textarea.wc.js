var D=Object.defineProperty,J=(t,e,a)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,N=(t,e,a)=>(J(t,typeof e!="symbol"?e+"":e,a),a);import{c as Q,S as R,i as U,f as h,s as W,a as X,e as b,b as L,d as r,t as u,g as k,h as y,I as j,o as q,n as B,j as E,K as Y,k as Z,G as _}from"./svelte.js";import"./index2.js";function ee(t){X(t,"svelte-189amh6",`.has-hint.svelte-189amh6.svelte-189amh6{position:relative;margin-bottom:1.25rem}.field.svelte-189amh6.svelte-189amh6{position:relative;display:flex;justify-content:space-between;align-items:center;text-align:left;width:100%;min-height:2rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:1px 0.75rem;gap:0.75rem;background-color:var(--background-primary);border:1px solid var(--border-primary);border-radius:0.25rem}.field.required.svelte-189amh6 .field-label.svelte-189amh6::after{content:' *'}.field.disabled.svelte-189amh6.svelte-189amh6{pointer-events:none;opacity:0.5}.field.svelte-189amh6.svelte-189amh6:focus-within{border-color:var(--primary-color);box-shadow:inset 0 0 0 1px var(--primary-color)}.field-label.svelte-189amh6.svelte-189amh6{position:absolute;top:1.25rem;font-size:1rem;transition:transform 0.3s,
      top 0.3s,
      font-size 0.3s}.field-label.move.svelte-189amh6.svelte-189amh6{top:0.25rem;font-size:0.75rem}.field-label.move.svelte-189amh6+.field-input.svelte-189amh6::-moz-placeholder{opacity:1}.field-label.move.svelte-189amh6+.field-input.svelte-189amh6::placeholder{opacity:1}.field-input.svelte-189amh6.svelte-189amh6{flex:auto;width:10rem;font-size:1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:1.5rem 0 0 0;padding:0 0 0.25rem 0;line-height:1.375rem;border:none;outline:none;border-radius:0}.field-input.svelte-189amh6.svelte-189amh6::-moz-placeholder{opacity:0;-moz-transition:opacity 0.3s;transition:opacity 0.3s}.field-input.svelte-189amh6.svelte-189amh6::placeholder{opacity:0;transition:opacity 0.3s}.field-hint.svelte-189amh6.svelte-189amh6{position:absolute;top:100%;left:0;width:100%;height:1.25rem;line-height:1.25rem;font-size:0.75rem;padding:0 0.75rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--text-secondary)}.field-hint.svelte-189amh6.svelte-189amh6:hover{z-index:255;overflow:unset}`)}function H(t){let e;return{c(){e=b("span"),r(e,"class","field-hint svelte-189amh6")},m(a,o){k(a,e,o),e.innerHTML=t[4]},p(a,o){o&16&&(e.innerHTML=a[4])},d(a){a&&E(e)}}}function te(t){let e,a,o,$,i,c,g,x,v,f,d=t[4]&&H(t);return{c(){e=b("div"),a=b("label"),o=b("span"),$=L(),i=b("textarea"),x=L(),d&&d.c(),r(o,"class","field-label svelte-189amh6"),u(o,"move",t[1]||t[0]),r(i,"class","field-input svelte-189amh6"),r(i,"aria-hidden",c=t[5]||t[10]),r(i,"tabindex",g=t[5]||t[10]?-1:0),i.disabled=t[5],r(i,"placeholder",t[7]),i.required=t[9],i.readOnly=t[10],r(i,"id",t[2]),r(i,"name",t[6]),r(i,"minlength",t[11]),r(i,"maxlength",t[12]),r(i,"rows",t[8]),r(a,"class","field svelte-189amh6"),u(a,"disabled",t[5]||t[10]),u(a,"required",t[9]),r(e,"class","svelte-189amh6"),u(e,"has-hint",t[4])},m(n,l){k(n,e,l),y(e,a),y(a,o),o.innerHTML=t[3],y(a,$),y(a,i),j(i,t[0]),t[22](i),y(e,x),d&&d.m(e,null),v||(f=[q(i,"input",t[21]),q(i,"focus",t[23]),q(i,"blur",t[24])],v=!0)},p(n,[l]){l&8&&(o.innerHTML=n[3]),l&3&&u(o,"move",n[1]||n[0]),l&1056&&c!==(c=n[5]||n[10])&&r(i,"aria-hidden",c),l&1056&&g!==(g=n[5]||n[10]?-1:0)&&r(i,"tabindex",g),l&32&&(i.disabled=n[5]),l&128&&r(i,"placeholder",n[7]),l&512&&(i.required=n[9]),l&1024&&(i.readOnly=n[10]),l&4&&r(i,"id",n[2]),l&64&&r(i,"name",n[6]),l&2048&&r(i,"minlength",n[11]),l&4096&&r(i,"maxlength",n[12]),l&256&&r(i,"rows",n[8]),l&1&&j(i,n[0]),l&1056&&u(a,"disabled",n[5]||n[10]),l&512&&u(a,"required",n[9]),n[4]?d?d.p(n,l):(d=H(n),d.c(),d.m(e,null)):d&&(d.d(1),d=null),l&16&&u(e,"has-hint",n[4])},i:B,o:B,d(n){n&&E(e),t[22](null),d&&d.d(),v=!1,Y(f)}}}function ae(t,e,a){let{attachedInternals:o}=e,{id:$=null}=e,{value:i=""}=e,{label:c="Label"}=e,{hint:g=""}=e,{disabled:x=!1}=e,{name:v=null}=e,{placeholder:f=""}=e,{inputFocused:d=!1}=e,{rows:n=4}=e,{required:l=!1}=e,{readonly:I=!1}=e,{minlength:z=null}=e,{maxlength:F=null}=e;const O=()=>i;let{validationMessages:m={}}=e,{requiredValidationMessage:M}=e,{minlengthValidationMessage:V}=e,{maxlengthValidationMessage:w}=e;const S=Z();let p;const A=()=>{o.reportValidity()};function G(){i=this.value,a(0,i)}function K(s){_[s?"unshift":"push"](()=>{p=s,a(13,p)})}const P=()=>a(1,d=!0),C=()=>a(1,d=!1);return t.$$set=s=>{"attachedInternals"in s&&a(14,o=s.attachedInternals),"id"in s&&a(2,$=s.id),"value"in s&&a(0,i=s.value),"label"in s&&a(3,c=s.label),"hint"in s&&a(4,g=s.hint),"disabled"in s&&a(5,x=s.disabled),"name"in s&&a(6,v=s.name),"placeholder"in s&&a(7,f=s.placeholder),"inputFocused"in s&&a(1,d=s.inputFocused),"rows"in s&&a(8,n=s.rows),"required"in s&&a(9,l=s.required),"readonly"in s&&a(10,I=s.readonly),"minlength"in s&&a(11,z=s.minlength),"maxlength"in s&&a(12,F=s.maxlength),"validationMessages"in s&&a(16,m=s.validationMessages),"requiredValidationMessage"in s&&a(17,M=s.requiredValidationMessage),"minlengthValidationMessage"in s&&a(18,V=s.minlengthValidationMessage),"maxlengthValidationMessage"in s&&a(19,w=s.maxlengthValidationMessage)},t.$$.update=()=>{t.$$.dirty&1007617&&(o.checkValidity(),p&&(p.validity.tooShort?(V||m.minlength)&&o.setValidity({customError:!0},V||m.minlength):p.validity.tooLong?(w||m.maxlength)&&o.setValidity({customError:!0},w||m.maxlength):p.validity.valueMissing&&(M||m.required)&&o.setValidity({customError:!0},M||m.required)),o.setFormValue(i),S("value",{value:i}))},[i,d,$,c,g,x,v,f,n,l,I,z,F,p,o,O,m,M,V,w,A,G,K,P,C]}class T extends R{constructor(e){super(),U(this,e,ae,te,W,{attachedInternals:14,id:2,value:0,label:3,hint:4,disabled:5,name:6,placeholder:7,inputFocused:1,rows:8,required:9,readonly:10,minlength:11,maxlength:12,getValue:15,validationMessages:16,requiredValidationMessage:17,minlengthValidationMessage:18,maxlengthValidationMessage:19,reportValidity:20},ee)}get attachedInternals(){return this.$$.ctx[14]}set attachedInternals(e){this.$$set({attachedInternals:e}),h()}get id(){return this.$$.ctx[2]}set id(e){this.$$set({id:e}),h()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),h()}get label(){return this.$$.ctx[3]}set label(e){this.$$set({label:e}),h()}get hint(){return this.$$.ctx[4]}set hint(e){this.$$set({hint:e}),h()}get disabled(){return this.$$.ctx[5]}set disabled(e){this.$$set({disabled:e}),h()}get name(){return this.$$.ctx[6]}set name(e){this.$$set({name:e}),h()}get placeholder(){return this.$$.ctx[7]}set placeholder(e){this.$$set({placeholder:e}),h()}get inputFocused(){return this.$$.ctx[1]}set inputFocused(e){this.$$set({inputFocused:e}),h()}get rows(){return this.$$.ctx[8]}set rows(e){this.$$set({rows:e}),h()}get required(){return this.$$.ctx[9]}set required(e){this.$$set({required:e}),h()}get readonly(){return this.$$.ctx[10]}set readonly(e){this.$$set({readonly:e}),h()}get minlength(){return this.$$.ctx[11]}set minlength(e){this.$$set({minlength:e}),h()}get maxlength(){return this.$$.ctx[12]}set maxlength(e){this.$$set({maxlength:e}),h()}get getValue(){return this.$$.ctx[15]}get validationMessages(){return this.$$.ctx[16]}set validationMessages(e){this.$$set({validationMessages:e}),h()}get requiredValidationMessage(){return this.$$.ctx[17]}set requiredValidationMessage(e){this.$$set({requiredValidationMessage:e}),h()}get minlengthValidationMessage(){return this.$$.ctx[18]}set minlengthValidationMessage(e){this.$$set({minlengthValidationMessage:e}),h()}get maxlengthValidationMessage(){return this.$$.ctx[19]}set maxlengthValidationMessage(e){this.$$set({maxlengthValidationMessage:e}),h()}get reportValidity(){return this.$$.ctx[20]}}customElements.define("jp-textarea",Q(T,{attachedInternals:{},id:{},value:{},label:{},hint:{},disabled:{type:"Boolean"},name:{},placeholder:{},inputFocused:{type:"Boolean"},rows:{},required:{type:"Boolean"},readonly:{type:"Boolean"},minlength:{},maxlength:{},validationMessages:{},requiredValidationMessage:{},minlengthValidationMessage:{},maxlengthValidationMessage:{}},[],["getValue","reportValidity"],!1,t=>{var e;return e=class extends t{constructor(){super(),this.attachedInternals=this.attachInternals()}},N(e,"formAssociated",!0),e}));export{T as default};
