var te=Object.defineProperty,ie=(t,e,i)=>e in t?te(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,se=(t,e,i)=>(ie(t,typeof e!="symbol"?e+"":e,i),i);import{c as le,S as ne,i as oe,f as C,s as re,a as ae,e as g,b as V,E as _,d as s,t as E,g as S,h as m,I as D,o as w,J as G,n as U,j as Y,K as J,k as de,L as K,M as ce,G as me}from"./svelte.js";import"./index2.js";import{c as ue}from"./clickOutside.js";function pe(t){ae(t,"svelte-11dimjo",`.field.svelte-11dimjo.svelte-11dimjo{position:relative;display:flex;flex-direction:row-reverse;align-items:center;text-align:left;width:100%;height:3rem;padding-right:0.75rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;gap:0.75rem;background-color:var(--background-primary);border:1px solid var(--border-primary);border-radius:0.25rem}.field.svelte-11dimjo.svelte-11dimjo:focus-within{border-color:var(--primary-color);box-shadow:inset 0 0 0 1px var(--primary-color)}.field-label.svelte-11dimjo.svelte-11dimjo{position:absolute;top:50%;left:0.75rem;transform:translateY(-50%);font-size:1rem;transition:transform 0.3s,
      top 0.3s,
      font-size 0.3s}.field-label.move.svelte-11dimjo.svelte-11dimjo{top:0.25rem;transform:translateY(0);font-size:0.75rem}.field-input.svelte-11dimjo.svelte-11dimjo{flex:auto;width:10rem;height:100%;font-size:1rem;white-space:nowrap;background:transparent;overflow:hidden;text-overflow:ellipsis;padding:1rem 0 0 0;border:none;outline:none;border-radius:0}.field-upload.svelte-11dimjo.svelte-11dimjo{z-index:1;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:0;opacity:0;cursor:pointer}.field-upload-container.svelte-11dimjo.svelte-11dimjo{position:relative;display:flex;padding:0 0.75rem;height:100%;overflow:hidden;flex:1}.field-icons.svelte-11dimjo.svelte-11dimjo{z-index:1;position:relative;display:flex;align-items:center;gap:0.375rem}.field-icon.svelte-11dimjo.svelte-11dimjo{display:flex;justify-content:center;align-items:center;width:2rem;height:2rem;border-radius:50%;cursor:pointer}.field-icon.svelte-11dimjo.svelte-11dimjo:hover{background:var(--background-tertiary)}.field-icon.hidden.svelte-11dimjo.svelte-11dimjo{display:none}.field-icon-upload.svelte-11dimjo.svelte-11dimjo{position:relative;cursor:pointer}.field-icon.svelte-11dimjo button.svelte-11dimjo{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.preview-button.svelte-11dimjo.svelte-11dimjo{position:relative}.preview.svelte-11dimjo.svelte-11dimjo{z-index:1;position:absolute;bottom:100%;right:0;max-width:400px;width:auto;background-color:var(--background-primary);border-radius:0.5rem;box-shadow:0 3px 12px 3px rgba(0, 0, 0, 0.16)}`)}function O(t){let e,i,d,h,n;return{c(){e=g("img"),s(e,"class","preview svelte-11dimjo"),s(e,"style",t[5]),K(e.src,i=t[8]?t[9]:t[0])||s(e,"src",i),s(e,"alt","preview"),e.hidden=d=!t[0]&&!t[9]},m(r,a){S(r,e,a),h||(n=[ce(ue.call(null,e)),w(e,"click_outside",t[20])],h=!0)},p(r,a){a&32&&s(e,"style",r[5]),a&769&&!K(e.src,i=r[8]?r[9]:r[0])&&s(e,"src",i),a&513&&d!==(d=!r[0]&&!r[9])&&(e.hidden=d)},d(r){r&&Y(e),h=!1,J(n)}}}function q(t){let e,i,d,h;return{c(){e=g("div"),i=g("button"),i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg>',s(i,"class","svelte-11dimjo"),s(e,"class","field-icon svelte-11dimjo")},m(n,r){S(n,e,r),m(e,i),d||(h=w(i,"click",G(t[21])),d=!0)},p:U,d(n){n&&Y(e),d=!1,h()}}}function ve(t){let e,i,d,h,n,r,a,z,j,x,b,k,$,I,f,M,B,R,F,H,c,T,A,u=t[10]&&O(t),p=(t[9]||t[0]||t[8])&&q(t);return{c(){e=g("div"),i=g("div"),d=g("span"),h=V(),n=g("div"),r=g("label"),a=g("input"),x=V(),b=_("svg"),k=_("path"),I=V(),f=g("div"),M=g("button"),M.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>',B=V(),u&&u.c(),R=V(),p&&p.c(),F=V(),H=g("span"),c=g("input"),s(d,"class","field-label svelte-11dimjo"),E(d,"move",t[7]||t[0]),s(a,"type","file"),s(a,"id",z=`${t[3]}`),s(a,"class","field-upload svelte-11dimjo"),s(a,"accept",j=t[4]&&t[4].acceptedFiles||"image/png, image/jpeg"),s(k,"d","M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"),s(b,"xmlns","http://www.w3.org/2000/svg"),s(b,"height","1rem"),s(b,"viewBox","0 0 512 512"),s(r,"for",$=`${t[3]}`),s(r,"class","field-icon field-icon-upload svelte-11dimjo"),s(M,"class","svelte-11dimjo"),s(f,"class","field-icon preview-button svelte-11dimjo"),E(f,"hidden",!t[8]&&!t[0]),s(n,"class","field-icons svelte-11dimjo"),s(c,"class","field-input svelte-11dimjo"),s(c,"type","text"),s(c,"name",t[3]),s(c,"id",t[2]),c.disabled=t[8],s(H,"class","field-upload-container svelte-11dimjo"),s(i,"class","field svelte-11dimjo")},m(o,v){S(o,e,v),m(e,i),m(i,d),d.innerHTML=t[1],m(i,h),m(i,n),m(n,r),m(r,a),m(r,x),m(r,b),m(b,k),m(n,I),m(n,f),m(f,M),m(f,B),u&&u.m(f,null),m(n,R),p&&p.m(n,null),m(i,F),m(i,H),m(H,c),D(c,t[0]),t[25](i),T||(A=[w(a,"change",t[16]),w(a,"focus",t[17]),w(a,"blur",t[18]),w(M,"click",G(t[19])),w(c,"focus",t[22]),w(c,"blur",t[23]),w(c,"input",t[24])],T=!0)},p(o,[v]){v&2&&(d.innerHTML=o[1]),v&129&&E(d,"move",o[7]||o[0]),v&8&&z!==(z=`${o[3]}`)&&s(a,"id",z),v&16&&j!==(j=o[4]&&o[4].acceptedFiles||"image/png, image/jpeg")&&s(a,"accept",j),v&8&&$!==($=`${o[3]}`)&&s(r,"for",$),o[10]?u?u.p(o,v):(u=O(o),u.c(),u.m(f,null)):u&&(u.d(1),u=null),v&257&&E(f,"hidden",!o[8]&&!o[0]),o[9]||o[0]||o[8]?p?p.p(o,v):(p=q(o),p.c(),p.m(n,null)):p&&(p.d(1),p=null),v&8&&s(c,"name",o[3]),v&4&&s(c,"id",o[2]),v&256&&(c.disabled=o[8]),v&1&&c.value!==o[0]&&D(c,o[0])},i:U,o:U,d(o){o&&Y(e),u&&u.d(),p&&p.d(),t[25](null),T=!1,J(A)}}}function he(t,e,i){let{label:d="Upload a file"}=e,{attachedInternals:h}=e,{value:n=""}=e,{id:r=""}=e,{name:a=""}=e,z,j,x=!1,b=!1,k="",$=null,I=!1,{service:f}=e;const M=()=>n,B=de();async function R(l){if(b)try{i(0,n=await f.uploadFile($,l))}catch(L){console.log(L)}return n}async function F(l){i(8,b=!0),i(0,n=l.target.value),$=l.target.files[0];const L=await c($);i(9,k=L)}function H(){const l=j.getBoundingClientRect(),L=window.innerHeight-l.bottom,P=300;let y="";L<P?y=`
            bottom: ${window.innerHeight-l.top}px;
            right: ${l.left}px;
        `:y=`
            top: ${l.bottom}px;
            right: ${l.left}px;
        `,i(5,z=y),i(10,I=!I)}const c=l=>new Promise((L,P)=>{const y=new FileReader;y.readAsDataURL(l),y.onload=()=>L(y.result),y.onerror=ee=>P(ee)}),T=l=>{F(l)},A=()=>i(7,x=!0),u=()=>i(7,x=!1),p=()=>H(),o=()=>i(10,I=!1),v=()=>{i(8,b=!1),i(9,k=""),i(0,n="")},Q=()=>i(7,x=!0),W=()=>i(7,x=!1);function X(){n=this.value,i(0,n)}function Z(l){me[l?"unshift":"push"](()=>{j=l,i(6,j)})}return t.$$set=l=>{"label"in l&&i(1,d=l.label),"attachedInternals"in l&&i(13,h=l.attachedInternals),"value"in l&&i(0,n=l.value),"id"in l&&i(2,r=l.id),"name"in l&&i(3,a=l.name),"service"in l&&i(4,f=l.service)},t.$$.update=()=>{t.$$.dirty&8193&&(h.checkValidity(),h.setFormValue(n),B("value",{value:n}))},[n,d,r,a,f,z,j,x,b,k,I,F,H,h,M,R,T,A,u,p,o,v,Q,W,X,Z]}class N extends ne{constructor(e){super(),oe(this,e,he,ve,re,{label:1,attachedInternals:13,value:0,id:2,name:3,service:4,getValue:14,save:15},pe)}get label(){return this.$$.ctx[1]}set label(e){this.$$set({label:e}),C()}get attachedInternals(){return this.$$.ctx[13]}set attachedInternals(e){this.$$set({attachedInternals:e}),C()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),C()}get id(){return this.$$.ctx[2]}set id(e){this.$$set({id:e}),C()}get name(){return this.$$.ctx[3]}set name(e){this.$$set({name:e}),C()}get service(){return this.$$.ctx[4]}set service(e){this.$$set({service:e}),C()}get getValue(){return this.$$.ctx[14]}get save(){return this.$$.ctx[15]}}try{customElements.define("jp-image-upload",le(N,{label:{},attachedInternals:{},value:{},id:{},name:{},service:{}},[],["getValue","save"],!1,t=>{var e;return e=class extends t{constructor(){super(),this.attachedInternals=this.attachInternals()}},se(e,"formAssociated",!0),e}));}catch{};export{N as default};
