var ee=Object.defineProperty,te=(t,e,s)=>e in t?ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,se=(t,e,s)=>(te(t,typeof e!="symbol"?e+"":e,s),s);import{c as ie,S as le,i as oe,f as j,s as re,a as ae,e as y,b as F,E as D,d as i,t as E,g as S,h as d,I as G,o as x,J,n as U,j as Y,K,k as ne,L as O,M as ce,G as de}from"./svelte.js";import"./index2.js";import{c as pe}from"./clickOutside.js";import"./select.wc.js";function ve(t){ae(t,"svelte-18psywo",`.field.svelte-18psywo.svelte-18psywo{position:relative;display:flex;flex-direction:row-reverse;align-items:center;text-align:left;width:100%;height:3rem;padding-right:0.75rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;gap:0.75rem;background-color:var(--background-primary);border:1px solid var(--border-primary);border-radius:0.25rem}.field.svelte-18psywo.svelte-18psywo:focus-within{border-color:var(--primary-color);box-shadow:inset 0 0 0 1px var(--primary-color)}.field-label.svelte-18psywo.svelte-18psywo{position:absolute;top:50%;left:0.75rem;transform:translateY(-50%);font-size:1rem;transition:transform 0.3s,
      top 0.3s,
      font-size 0.3s}.field-label.move.svelte-18psywo.svelte-18psywo{top:0.25rem;transform:translateY(0);font-size:0.75rem}.field-input.svelte-18psywo.svelte-18psywo{flex:auto;width:10rem;height:100%;font-size:1rem;white-space:nowrap;background:transparent;overflow:hidden;text-overflow:ellipsis;padding:1rem 0 0 0;border:none;outline:none;border-radius:0}.field-upload.svelte-18psywo.svelte-18psywo{z-index:1;position:absolute;top:0;left:0;width:0;height:0;border-radius:0;opacity:0}.field-upload-container.svelte-18psywo.svelte-18psywo{position:relative;display:flex;padding:0 0.75rem;height:100%;overflow:hidden;flex:1}.field-icons.svelte-18psywo.svelte-18psywo{z-index:1;position:relative;display:flex;align-items:center;gap:0.375rem}.field-icon.svelte-18psywo.svelte-18psywo{display:flex;justify-content:center;align-items:center;width:2rem;height:2rem;border-radius:50%;cursor:pointer}.field-icon.svelte-18psywo.svelte-18psywo:hover{background:var(--background-tertiary)}.field-icon.hidden.svelte-18psywo.svelte-18psywo{display:none}.field-icon-upload.svelte-18psywo.svelte-18psywo{position:relative;cursor:pointer}.field-icon.svelte-18psywo button.svelte-18psywo{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.preview-button.svelte-18psywo.svelte-18psywo{position:relative}.preview.svelte-18psywo.svelte-18psywo{z-index:1;position:absolute;bottom:100%;right:0;max-width:400px;width:auto;background-color:var(--background-primary);border-radius:0.5rem;box-shadow:0 3px 12px 3px rgba(0, 0, 0, 0.16)}`)}function _(t){let e,s,n,w,l;return{c(){e=y("img"),i(e,"class","preview svelte-18psywo"),i(e,"style",t[5]),O(e.src,s=t[8]?t[9]:t[0])||i(e,"src",s),i(e,"alt","preview"),e.hidden=n=!t[0]&&!t[9]},m(a,m){S(a,e,m),w||(l=[ce(pe.call(null,e)),x(e,"click_outside",t[19])],w=!0)},p(a,m){m&32&&i(e,"style",a[5]),m&769&&!O(e.src,s=a[8]?a[9]:a[0])&&i(e,"src",s),m&513&&n!==(n=!a[0]&&!a[9])&&(e.hidden=n)},d(a){a&&Y(e),w=!1,K(l)}}}function q(t){let e,s,n,w;return{c(){e=y("div"),s=y("button"),s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg>',i(s,"class","svelte-18psywo"),i(e,"class","field-icon svelte-18psywo")},m(l,a){S(l,e,a),d(e,s),n||(w=x(s,"click",J(t[20])),n=!0)},p:U,d(l){l&&Y(e),n=!1,w()}}}function ue(t){let e,s,n,w,l,a,m,L,h,f,b,k,$,I,g,M,T,R,V,C,c,B,A,p=t[10]&&_(t),v=(t[9]||t[0]||t[8])&&q(t);return{c(){e=y("div"),s=y("div"),n=y("span"),w=F(),l=y("input"),L=F(),h=y("div"),f=y("label"),b=D("svg"),k=D("path"),I=F(),g=y("div"),M=y("button"),M.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>',T=F(),p&&p.c(),R=F(),v&&v.c(),V=F(),C=y("span"),c=y("input"),i(n,"class","field-label svelte-18psywo"),E(n,"move",t[7]||t[0]),i(l,"type","file"),i(l,"id",a=`${t[3]}`),i(l,"class","field-upload svelte-18psywo"),i(l,"accept",m=t[4].acceptedFiles?t[4].acceptedFiles:"image/png, image/jpeg"),i(k,"d","M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"),i(b,"xmlns","http://www.w3.org/2000/svg"),i(b,"height","1rem"),i(b,"viewBox","0 0 512 512"),i(f,"for",$=`${t[3]}`),i(f,"class","field-icon field-icon-upload svelte-18psywo"),i(M,"class","svelte-18psywo"),i(g,"class","field-icon preview-button svelte-18psywo"),E(g,"hidden",!t[8]&&!t[0]),i(h,"class","field-icons svelte-18psywo"),i(c,"class","field-input svelte-18psywo"),i(c,"type","text"),i(c,"name",t[3]),i(c,"id",t[2]),c.disabled=t[8],i(C,"class","field-upload-container svelte-18psywo"),i(s,"class","field svelte-18psywo")},m(r,u){S(r,e,u),d(e,s),d(s,n),n.innerHTML=t[1],d(s,w),d(s,l),d(s,L),d(s,h),d(h,f),d(f,b),d(b,k),d(h,I),d(h,g),d(g,M),d(g,T),p&&p.m(g,null),d(h,R),v&&v.m(h,null),d(s,V),d(s,C),d(C,c),G(c,t[0]),t[24](s),B||(A=[x(l,"change",t[16]),x(l,"focus",t[17]),x(l,"blur",t[18]),x(M,"click",J(t[12])),x(c,"focus",t[21]),x(c,"blur",t[22]),x(c,"input",t[23])],B=!0)},p(r,[u]){u&2&&(n.innerHTML=r[1]),u&129&&E(n,"move",r[7]||r[0]),u&8&&a!==(a=`${r[3]}`)&&i(l,"id",a),u&16&&m!==(m=r[4].acceptedFiles?r[4].acceptedFiles:"image/png, image/jpeg")&&i(l,"accept",m),u&8&&$!==($=`${r[3]}`)&&i(f,"for",$),r[10]?p?p.p(r,u):(p=_(r),p.c(),p.m(g,null)):p&&(p.d(1),p=null),u&257&&E(g,"hidden",!r[8]&&!r[0]),r[9]||r[0]||r[8]?v?v.p(r,u):(v=q(r),v.c(),v.m(h,null)):v&&(v.d(1),v=null),u&8&&i(c,"name",r[3]),u&4&&i(c,"id",r[2]),u&256&&(c.disabled=r[8]),u&1&&c.value!==r[0]&&G(c,r[0])},i:U,o:U,d(r){r&&Y(e),p&&p.d(),v&&v.d(),t[24](null),B=!1,K(A)}}}function we(t,e,s){let{label:n="Upload a file"}=e,{attachedInternals:w}=e,{value:l=""}=e,{id:a=""}=e,{name:m=""}=e,L,h,f=!1,b=!1,k="",$=null,I=!1,{service:g}=e;const M=()=>l,T=ne();async function R(o){if(b)try{s(0,l=await g.uploadFile($,o))}catch(H){console.log(H)}return l}async function V(o){s(8,b=!0),s(0,l=o.target.value),$=o.target.files[0];const H=await c($);s(9,k=H)}function C(){const o=h.getBoundingClientRect(),H=window.innerHeight-o.bottom,P=300;let z="";H<P?z=`
            bottom: ${window.innerHeight-o.top}px;
            right: ${o.left}px;
        `:z=`
            top: ${o.bottom}px;
            right: ${o.left}px;
        `,s(5,L=z),s(10,I=!I)}const c=o=>new Promise((H,P)=>{const z=new FileReader;z.readAsDataURL(o),z.onload=()=>H(z.result),z.onerror=Z=>P(Z)}),B=o=>{V(o)},A=()=>s(7,f=!0),p=()=>s(7,f=!1),v=()=>s(10,I=!1),r=()=>{s(8,b=!1),s(9,k=""),s(0,l="")},u=()=>s(7,f=!0),Q=()=>s(7,f=!1);function W(){l=this.value,s(0,l)}function X(o){de[o?"unshift":"push"](()=>{h=o,s(6,h)})}return t.$$set=o=>{"label"in o&&s(1,n=o.label),"attachedInternals"in o&&s(13,w=o.attachedInternals),"value"in o&&s(0,l=o.value),"id"in o&&s(2,a=o.id),"name"in o&&s(3,m=o.name),"service"in o&&s(4,g=o.service)},t.$$.update=()=>{t.$$.dirty&8193&&(w.checkValidity(),w.setFormValue(l),T("value",{value:l}))},[l,n,a,m,g,L,h,f,b,k,I,V,C,w,M,R,B,A,p,v,r,u,Q,W,X]}class N extends le{constructor(e){super(),oe(this,e,we,ue,re,{label:1,attachedInternals:13,value:0,id:2,name:3,service:4,getValue:14,save:15},ve)}get label(){return this.$$.ctx[1]}set label(e){this.$$set({label:e}),j()}get attachedInternals(){return this.$$.ctx[13]}set attachedInternals(e){this.$$set({attachedInternals:e}),j()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),j()}get id(){return this.$$.ctx[2]}set id(e){this.$$set({id:e}),j()}get name(){return this.$$.ctx[3]}set name(e){this.$$set({name:e}),j()}get service(){return this.$$.ctx[4]}set service(e){this.$$set({service:e}),j()}get getValue(){return this.$$.ctx[14]}get save(){return this.$$.ctx[15]}}try{customElements.define("jp-image-upload",ie(N,{label:{},attachedInternals:{},value:{},id:{},name:{},service:{}},[],["getValue","save"],!1,t=>{var e;return e=class extends t{constructor(){super(),this.attachedInternals=this.attachInternals()}},se(e,"formAssociated",!0),e}));}catch{};export{N as default};
