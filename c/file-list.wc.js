var de=Object.defineProperty,ce=(s,e,t)=>e in s?de(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,ge=(s,e,t)=>(ce(s,typeof e!="symbol"?e+"":e,t),t);import{c as fe,S as ve,i as me,f as M,s as pe,a as ue,e as w,b as I,d as o,t as R,g as b,I as U,o as j,H as Y,n as F,j as x,J as G,k as he,w as we,G as be,l as J,m as xe,q as P,h,F as ye,r as K,E as D,K as N}from"./svelte.js";import"./index2.js";function $e(s){ue(s,"svelte-w00gbd",`.dropzone.svelte-w00gbd.svelte-w00gbd{position:relative;background-color:#f4f4f4;width:750px;height:500px;border:1px dashed #e6510030}.fullBorder.svelte-w00gbd.svelte-w00gbd{border:1px dashed var(--primary-color)}.info.svelte-w00gbd.svelte-w00gbd{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.info.svelte-w00gbd a.svelte-w00gbd{color:var(--primary-color);cursor:pointer}.info.svelte-w00gbd a.svelte-w00gbd:hover{text-decoration:underline}.files.svelte-w00gbd.svelte-w00gbd{height:100%;display:flex;flex-wrap:wrap;overflow:auto}.add-more.svelte-w00gbd.svelte-w00gbd{position:absolute;display:flex;justify-content:center;align-items:center;cursor:pointer;width:40px;height:40px;right:-20px;bottom:-20px;border-radius:50%;background-color:var(--primary-color);fill:var(--text-on-primary)}.add-more.svelte-w00gbd svg.svelte-w00gbd{height:60%}.file.svelte-w00gbd.svelte-w00gbd{position:relative;display:flex;flex-direction:column;align-items:center;width:23%;margin:0 1%}.file-name.svelte-w00gbd.svelte-w00gbd{width:100%;text-align:left;font-size:12px;font-weight:500;line-height:1.3;margin-bottom:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.file-info.svelte-w00gbd.svelte-w00gbd{width:100%;padding:0 5% 0 0;display:flex;justify-content:space-between;color:#757575;font-size:11px;font-weight:400}.file-remove.svelte-w00gbd.svelte-w00gbd{cursor:pointer;position:absolute;right:0;top:0}.file-icon.svelte-w00gbd.svelte-w00gbd{display:flex;justify-content:center;align-items:center;margin:10px 0;width:150px;height:150px;overflow:hidden;background-color:var(--primary-color);fill:var(--text-on-primary)}.file-icon.svelte-w00gbd img.svelte-w00gbd{object-fit:cover;min-width:100%;min-height:100%}.file-icon.svelte-w00gbd svg.svelte-w00gbd{height:50%}.loader.svelte-w00gbd.svelte-w00gbd{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.spinner.svelte-w00gbd.svelte-w00gbd{width:150px;height:150px;border-radius:50%;border:9px solid var(--primary-color);animation:svelte-w00gbd-spinner-bulqg1 0.8s infinite linear alternate,
      svelte-w00gbd-spinner-oaa3wk 1.6s infinite linear}@keyframes svelte-w00gbd-spinner-bulqg1{0%{clip-path:polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%)}12.5%{clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%)}25%{clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%)}50%{clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)}62.5%{clip-path:polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)}75%{clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%)}100%{clip-path:polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%)}}@keyframes svelte-w00gbd-spinner-oaa3wk{0%{transform:scaleY(1) rotate(0deg)}49.99%{transform:scaleY(1) rotate(135deg)}50%{transform:scaleY(-1) rotate(0deg)}100%{transform:scaleY(-1) rotate(-135deg)}}`)}function _(s,e,t){const a=s.slice();return a[34]=e[t],a[36]=t,a}function Ve(s){let e,t,a,l,v,g=J(s[4]),d=[];for(let r=0;r<g.length;r+=1)d[r]=Q(_(s,g,r));return{c(){e=w("div");for(let r=0;r<d.length;r+=1)d[r].c();t=I(),a=w("button"),a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" class="svelte-w00gbd"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg>',o(e,"class","files svelte-w00gbd"),o(a,"class","add-more svelte-w00gbd")},m(r,p){b(r,e,p);for(let c=0;c<d.length;c+=1)d[c]&&d[c].m(e,null);b(r,t,p),b(r,a,p),l||(v=j(a,"click",Y(s[25])),l=!0)},p(r,p){if(p[0]&272){g=J(r[4]);let c;for(c=0;c<g.length;c+=1){const u=_(r,g,c);d[c]?d[c].p(u,p):(d[c]=Q(u),d[c].c(),d[c].m(e,null))}for(;c<d.length;c+=1)d[c].d(1);d.length=g.length}},d(r){r&&(x(e),x(t),x(a)),xe(d,r),l=!1,v()}}}function Me(s){let e,t,a,l,v,g,d;return{c(){e=w("div"),t=w("div"),a=P("Drop files here or "),l=w("a"),l.textContent="browse files",o(l,"class","svelte-w00gbd"),o(e,"class","info svelte-w00gbd"),e.hidden=v=s[4].length!=0},m(r,p){b(r,e,p),h(e,t),h(t,a),h(t,l),g||(d=j(l,"click",s[23]),g=!0)},p(r,p){p[0]&16&&v!==(v=r[4].length!=0)&&(e.hidden=v)},d(r){r&&x(e),g=!1,d()}}}function ze(s){let e,t,a;return{c(){e=w("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path></svg> <div>Drop your files here</div>',o(e,"class","info svelte-w00gbd")},m(l,v){b(l,e,v),t||(a=[j(e,"dragleave",s[20]),j(e,"dragend",s[21]),j(e,"drop",Y(s[22]))],t=!0)},p:F,d(l){l&&x(e),t=!1,G(a)}}}function ke(s){let e;return{c(){e=w("div"),e.innerHTML='<div class="spinner svelte-w00gbd"></div>',o(e,"class","loader svelte-w00gbd")},m(t,a){b(t,e,a)},p:F,d(t){t&&x(e)}}}function He(s){let e,t;return{c(){e=D("svg"),t=D("path"),o(t,"d","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"height","1em"),o(e,"viewBox","0 0 384 512"),o(e,"class","svelte-w00gbd")},m(a,l){b(a,e,l),h(e,t)},p:F,d(a){a&&x(e)}}}function je(s){let e,t;return{c(){e=D("svg"),t=D("path"),o(t,"d","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"height","1em"),o(e,"viewBox","0 0 640 512"),o(e,"class","svelte-w00gbd")},m(a,l){b(a,e,l),h(e,t)},p:F,d(a){a&&x(e)}}}function Le(s){let e,t,a;return{c(){e=w("img"),N(e.src,t=s[34].src)||o(e,"src",t),o(e,"alt",a=s[34].name),o(e,"class","svelte-w00gbd")},m(l,v){b(l,e,v)},p(l,v){v[0]&16&&!N(e.src,t=l[34].src)&&o(e,"src",t),v[0]&16&&a!==(a=l[34].name)&&o(e,"alt",a)},d(l){l&&x(e)}}}function Q(s){let e,t,a,l,v,g,d=s[34].name+"",r,p,c,u,f=(s[34].size||"")+"",n,L,z,V=s[34].saved?"saved":"",T,C,k,A;function E(){return s[24](s[36])}function S($,H){return $[34].src?Le:$[34].external?je:He}let B=S(s),y=B(s);return{c(){e=w("div"),t=w("button"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg>',a=I(),l=w("div"),y.c(),v=I(),g=w("div"),r=P(d),p=I(),c=w("div"),u=w("span"),n=P(f),L=I(),z=w("span"),T=P(V),C=I(),o(t,"class","file-remove svelte-w00gbd"),o(l,"class","file-icon svelte-w00gbd"),o(g,"class","file-name svelte-w00gbd"),ye(z,"color","rgb(26 151 26)"),o(c,"class","file-info svelte-w00gbd"),o(e,"class","file svelte-w00gbd")},m($,H){b($,e,H),h(e,t),h(e,a),h(e,l),y.m(l,null),h(e,v),h(e,g),h(g,r),h(e,p),h(e,c),h(c,u),h(u,n),h(c,L),h(c,z),h(z,T),h(e,C),k||(A=j(t,"click",Y(E)),k=!0)},p($,H){s=$,B===(B=S(s))&&y?y.p(s,H):(y.d(1),y=B(s),y&&(y.c(),y.m(l,null))),H[0]&16&&d!==(d=s[34].name+"")&&K(r,d),H[0]&16&&f!==(f=(s[34].size||"")+"")&&K(n,f),H[0]&16&&V!==(V=s[34].saved?"saved":"")&&K(T,V)},d($){$&&x(e),y.d(),k=!1,A()}}}function Ie(s){let e,t,a,l,v,g,d,r;function p(f,n){return f[6]?ke:f[7]?ze:f[4].length==0?Me:Ve}let c=p(s),u=c(s);return{c(){e=w("div"),u.c(),t=I(),a=w("input"),v=I(),g=w("input"),o(e,"class","dropzone svelte-w00gbd"),R(e,"fullBorder",s[7]),o(a,"type","file"),a.multiple=!0,o(a,"accept",l=s[3]&&s[3].acceptedFiles),a.hidden=!0,o(g,"type","text"),o(g,"id",s[1]),o(g,"name",s[2]),g.hidden=!0},m(f,n){b(f,e,n),u.m(e,null),b(f,t,n),b(f,a,n),s[27](a),b(f,v,n),b(f,g,n),U(g,s[0]),d||(r=[j(e,"dragover",Y(s[26])),j(a,"change",s[28]),j(g,"input",s[29])],d=!0)},p(f,n){c===(c=p(f))&&u?u.p(f,n):(u.d(1),u=c(f),u&&(u.c(),u.m(e,null))),n[0]&128&&R(e,"fullBorder",f[7]),n[0]&8&&l!==(l=f[3]&&f[3].acceptedFiles)&&o(a,"accept",l),n[0]&2&&o(g,"id",f[1]),n[0]&4&&o(g,"name",f[2]),n[0]&1&&g.value!==f[0]&&U(g,f[0])},i:F,o:F,d(f){f&&(x(e),x(t),x(a),x(v),x(g)),u.d(),s[27](null),d=!1,G(r)}}}function Be(s,e,t){let{attachedInternals:a}=e,{value:l=""}=e,{id:v=""}=e,{name:g=""}=e,{service:d}=e,{maxfiles:r=null}=e,{minfiles:p=null}=e,{maxfilesValidationMessage:c}=e,{minfilesValidationMessage:u}=e,{validationMessages:f={}}=e,n=[],L,z=!0,V=!1;const T=()=>l,C=()=>a.reportValidity(),k=he();async function A(){t(6,z=!0);try{await Promise.allSettled(n.map(async i=>{if(!i.saved){const m=await d.uploadFile(i.file);i.saved=!0,i.url=m}})),t(4,n),t(0,l=n.filter(i=>i.saved).map(i=>i.url).join(","))}catch(i){console.log(i)}finally{t(6,z=!1)}}function E(i){n[i].saved&&k("removed",{url:n[i].url}),n.splice(i,1),t(4,n),t(0,l=n.filter(m=>m.saved).map(m=>m.url).join(","))}function S(i){i.target.files.length&&(t(4,n=n.concat($(Array.from(i.target.files)))),k("change",{unsaved:n.filter(m=>!m.saved).length}))}function B(i){i.dataTransfer.files.length&&(t(4,n=n.concat($(Array.from(i.dataTransfer.files)))),t(7,V=!1),k("change",{unsaved:n.filter(m=>!m.saved).length}))}const y=i=>{if(i<1024)return`${i} bytes`;if(i>=1024&&i<1048576)return`${(i/1024).toFixed(1)} KB`;if(i>=1048576)return`${(i/1048576).toFixed(1)} MB`},$=i=>i.filter(m=>d&&d.maxSize?(k("rejected",{file:m.name,code:"maxSize"}),m.size<d.maxSize):!0).map(m=>{let q={name:m.name,size:y(m.size),file:m,saved:!1};return m.type.split("/")[0]==="image"&&(q.src=URL.createObjectURL(m)),q}),H=(i,m)=>new File([i],m);we(async()=>{if(l){const i=l.split(",");await Promise.allSettled(i.map(async m=>{const q=await fetch(m),O=H(q.blob(),m);let oe={name:O.name,size:"",file:O,saved:!0,url:m,external:!0};n.push(oe)})),t(4,n)}t(6,z=!1)});const X=()=>t(7,V=!1),Z=()=>t(7,V=!1),ee=i=>B(i),te=()=>L.click(),ie=i=>E(i),se=()=>L.click(),ae=()=>t(7,V=!0);function le(i){be[i?"unshift":"push"](()=>{L=i,t(5,L)})}const ne=i=>S(i);function re(){l=this.value,t(0,l)}return s.$$set=i=>{"attachedInternals"in i&&t(11,a=i.attachedInternals),"value"in i&&t(0,l=i.value),"id"in i&&t(1,v=i.id),"name"in i&&t(2,g=i.name),"service"in i&&t(3,d=i.service),"maxfiles"in i&&t(12,r=i.maxfiles),"minfiles"in i&&t(13,p=i.minfiles),"maxfilesValidationMessage"in i&&t(14,c=i.maxfilesValidationMessage),"minfilesValidationMessage"in i&&t(15,u=i.minfilesValidationMessage),"validationMessages"in i&&t(16,f=i.validationMessages)},s.$$.update=()=>{s.$$.dirty[0]&129041&&(p&&n.length<p?a.setValidity({customError:!0},u||f.minfiles||"Not enough files."):r&&n.length>r?a.setValidity({customError:!0},c||f.maxfiles||"Too many files."):a.setValidity({}),a.checkValidity(),a.setFormValue(l),k("value",{value:l}))},[l,v,g,d,n,L,z,V,E,S,B,a,r,p,c,u,f,T,C,A,X,Z,ee,te,ie,se,ae,le,ne,re]}class W extends ve{constructor(e){super(),me(this,e,Be,Ie,pe,{attachedInternals:11,value:0,id:1,name:2,service:3,maxfiles:12,minfiles:13,maxfilesValidationMessage:14,minfilesValidationMessage:15,validationMessages:16,getValue:17,reportValidity:18,save:19},$e,[-1,-1])}get attachedInternals(){return this.$$.ctx[11]}set attachedInternals(e){this.$$set({attachedInternals:e}),M()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),M()}get id(){return this.$$.ctx[1]}set id(e){this.$$set({id:e}),M()}get name(){return this.$$.ctx[2]}set name(e){this.$$set({name:e}),M()}get service(){return this.$$.ctx[3]}set service(e){this.$$set({service:e}),M()}get maxfiles(){return this.$$.ctx[12]}set maxfiles(e){this.$$set({maxfiles:e}),M()}get minfiles(){return this.$$.ctx[13]}set minfiles(e){this.$$set({minfiles:e}),M()}get maxfilesValidationMessage(){return this.$$.ctx[14]}set maxfilesValidationMessage(e){this.$$set({maxfilesValidationMessage:e}),M()}get minfilesValidationMessage(){return this.$$.ctx[15]}set minfilesValidationMessage(e){this.$$set({minfilesValidationMessage:e}),M()}get validationMessages(){return this.$$.ctx[16]}set validationMessages(e){this.$$set({validationMessages:e}),M()}get getValue(){return this.$$.ctx[17]}get reportValidity(){return this.$$.ctx[18]}get save(){return this.$$.ctx[19]}}try{customElements.define("jp-file-list",fe(W,{attachedInternals:{},value:{},id:{},name:{},service:{},maxfiles:{},minfiles:{},maxfilesValidationMessage:{},minfilesValidationMessage:{},validationMessages:{}},[],["getValue","reportValidity","save"],!1,s=>{var e;return e=class extends s{constructor(){super(),this.attachedInternals=this.attachInternals()}},ge(e,"formAssociated",!0),e}));}catch{};export{W as default};
