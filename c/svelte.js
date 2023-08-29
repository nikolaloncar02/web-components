var it=Object.defineProperty,ct=(t,n,e)=>n in t?it(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,$=(t,n,e)=>(ct(t,typeof n!="symbol"?n+"":n,e),e);function x(){}function ut(t,n){for(const e in n)t[e]=n[e];return t}function at(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function X(t){return t()}function Y(){return Object.create(null)}function v(t){t.forEach(X)}function q(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let O;function ht(t,n){return t===n?!0:(O||(O=document.createElement("a")),O.href=n,t===O.href)}function $t(t){return Object.keys(t).length===0}function ft(t,n,e,o){if(t){const s=Z(t,n,e,o);return t[0](s)}}function Z(t,n,e,o){return t[1]&&o?ut(e.ctx.slice(),t[1](o(n))):e.ctx}function dt(t,n,e,o){if(t[2]&&o){const s=t[2](o(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const r=[],i=Math.max(n.dirty.length,s.length);for(let c=0;c<i;c+=1)r[c]=n.dirty[c]|s[c];return r}return n.dirty|s}return n.dirty}function pt(t,n,e,o,s,r){if(s){const i=Z(n,e,o,r);t.p(i,s)}}function bt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function mt(t){return t&&q(t.destroy)?t.destroy:x}function tt(t,n){t.appendChild(n)}function gt(t,n,e){const o=yt(t);if(!o.getElementById(n)){const s=j("style");s.id=n,s.textContent=e,vt(o,s)}}function yt(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function vt(t,n){return tt(t.head||t,n),n.sheet}function z(t,n,e){t.insertBefore(n,e||null)}function P(t){t.parentNode&&t.parentNode.removeChild(t)}function _t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function j(t){return document.createElement(t)}function nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function Et(){return F(" ")}function kt(){return F("")}function wt(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function xt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function Nt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function et(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function At(t){let n;return{p(...e){n=e,n.forEach(o=>t.push(o))},r(){n.forEach(e=>t.splice(t.indexOf(e),1))}}}function Lt(t){return Array.from(t.childNodes)}function Ot(t,n){n=""+n,t.data!==n&&(t.data=n)}function Pt(t,n){t.value=n??""}function jt(t,n,e,o){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}function Mt(t,n,e){t.classList.toggle(n,!!e)}function Ct(t,n,{bubbles:e=!1,cancelable:o=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:o})}class Tt{constructor(n=!1){$(this,"is_svg",!1),$(this,"e"),$(this,"n"),$(this,"t"),$(this,"a"),this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,o=null){this.e||(this.is_svg?this.e=nt(e.nodeName):this.e=j(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(o)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)z(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(P)}}function St(t){const n={};return t.childNodes.forEach(e=>{n[e.slot||"default"]=!0}),n}let N;function y(t){N=t}function M(){if(!N)throw new Error("Function called outside component initialization");return N}function Bt(t){M().$$.on_mount.push(t)}function Dt(t){M().$$.on_destroy.push(t)}function Ht(){const t=M();return(n,e,{cancelable:o=!1}={})=>{const s=t.$$.callbacks[n];if(s){const r=Ct(n,e,{cancelable:o});return s.slice().forEach(i=>{i.call(t,r)}),!r.defaultPrevented}return!0}}function Rt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(o=>o.call(this,n))}const E=[],I=[];let k=[];const ot=[],Jt=Promise.resolve();let G=!1;function qt(){G||(G=!0,Jt.then(C))}function K(t){k.push(t)}const Q=new Set;let w=0;function C(){if(w!==0)return;const t=N;do{try{for(;w<E.length;){const n=E[w];w++,y(n),zt(n.$$)}}catch(n){throw E.length=0,w=0,n}for(y(null),E.length=0,w=0;I.length;)I.pop()();for(let n=0;n<k.length;n+=1){const e=k[n];Q.has(e)||(Q.add(e),e())}k.length=0}while(E.length);for(;ot.length;)ot.pop()();G=!1,Q.clear(),y(t)}function zt(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(K)}}function Ft(t){const n=[],e=[];k.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),k=n}const T=new Set;let _;function It(){_={r:0,c:[],p:_}}function Gt(){_.r||v(_.c),_=_.p}function S(t,n){t&&t.i&&(T.delete(t),t.i(n))}function st(t,n,e,o){if(t&&t.o){if(T.has(t))return;T.add(t),_.c.push(()=>{T.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}else o&&o()}function Kt(t,n){const e=n.token={};function o(s,r,i,c){if(n.token!==e)return;n.resolved=c;let a=n.ctx;i!==void 0&&(a=a.slice(),a[i]=c);const u=s&&(n.current=s)(a);let g=!1;n.block&&(n.blocks?n.blocks.forEach((f,h)=>{h!==r&&f&&(It(),st(f,1,1,()=>{n.blocks[h]===f&&(n.blocks[h]=null)}),Gt())}):n.block.d(1),u.c(),S(u,1),u.m(n.mount(),n.anchor),g=!0),n.block=u,n.blocks&&(n.blocks[r]=u),g&&C()}if(at(t)){const s=M();if(t.then(r=>{y(s),o(n.then,1,n.value,r),y(null)},r=>{if(y(s),o(n.catch,2,n.error,r),y(null),!n.hasCatch)throw r}),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}}function Qt(t,n,e){const o=n.slice(),{resolved:s}=t;t.current===t.then&&(o[t.value]=s),t.current===t.catch&&(o[t.error]=s),t.block.p(o,e)}function Ut(t){return t?.length!==void 0?t:Array.from(t)}function Vt(t,n){t.d(1),n.delete(t.key)}function Wt(t,n,e,o,s,r,i,c,a,u,g,f){let h=t.length,p=r.length,d=h;const D={};for(;d--;)D[t[d].key]=d;const A=[],H=new Map,R=new Map,U=[];for(d=p;d--;){const l=f(s,r,d),b=e(l);let m=i.get(b);m?o&&U.push(()=>m.p(l,n)):(m=u(b,l),m.c()),H.set(b,A[d]=m),b in D&&R.set(b,Math.abs(d-D[b]))}const V=new Set,W=new Set;function J(l){S(l,1),l.m(c,g),i.set(l.key,l),g=l.first,p--}for(;h&&p;){const l=A[p-1],b=t[h-1],m=l.key,L=b.key;l===b?(g=l.first,h--,p--):H.has(L)?!i.has(m)||V.has(m)?J(l):W.has(L)?h--:R.get(m)>R.get(L)?(W.add(m),J(l)):(V.add(L),h--):(a(b,i),h--)}for(;h--;){const l=t[h];H.has(l.key)||a(l,i)}for(;p;)J(A[p-1]);return v(U),A}function Xt(t,n,e){const{fragment:o,after_update:s}=t.$$;o&&o.m(n,e),K(()=>{const r=t.$$.on_mount.map(X).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),s.forEach(K)}function Yt(t,n){const e=t.$$;e.fragment!==null&&(Ft(e.after_update),v(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Zt(t,n){t.$$.dirty[0]===-1&&(E.push(t),qt(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function tn(t,n,e,o,s,r,i,c=[-1]){const a=N;y(t);const u=t.$$={fragment:null,ctx:[],props:r,update:x,not_equal:s,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(a?a.$$.context:[])),callbacks:Y(),dirty:c,skip_bound:!1,root:n.target||a.$$.root};i&&i(u.root);let g=!1;if(u.ctx=e?e(t,n.props||{},(f,h,...p)=>{const d=p.length?p[0]:h;return u.ctx&&s(u.ctx[f],u.ctx[f]=d)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](d),g&&Zt(t,f)),h}):[],u.update(),g=!0,v(u.before_update),u.fragment=o?o(u.ctx):!1,n.target){if(n.hydrate){const f=Lt(n.target);u.fragment&&u.fragment.l(f),f.forEach(P)}else u.fragment&&u.fragment.c();n.intro&&S(t.$$.fragment),Xt(t,n.target,n.anchor),C()}y(a)}let rt;typeof HTMLElement=="function"&&(rt=class extends HTMLElement{constructor(t,n,e){super(),$(this,"$$ctor"),$(this,"$$s"),$(this,"$$c"),$(this,"$$cn",!1),$(this,"$$d",{}),$(this,"$$r",!1),$(this,"$$p_d",{}),$(this,"$$l",{}),$(this,"$$l_u",new Map),this.$$ctor=t,this.$$s=n,e&&this.attachShadow({mode:"open"})}addEventListener(t,n,e){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(n),this.$$c){const o=this.$$c.$on(t,n);this.$$l_u.set(n,o)}super.addEventListener(t,n,e)}removeEventListener(t,n,e){if(super.removeEventListener(t,n,e),this.$$c){const o=this.$$l_u.get(n);o&&(o(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(s){return()=>{let r;return{c:function(){r=j("slot"),s!=="default"&&et(r,"name",s)},m:function(i,c){z(i,r,c)},d:function(i){i&&P(r)}}}};if(await Promise.resolve(),!this.$$cn)return;const n={},e=St(this);for(const s of this.$$s)s in e&&(n[s]=[t(s)]);for(const s of this.attributes){const r=this.$$g_p(s.name);r in this.$$d||(this.$$d[r]=B(r,s.value,this.$$p_d,"toProp"))}this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const o=()=>{this.$$r=!0;for(const s in this.$$p_d)if(this.$$d[s]=this.$$c.$$.ctx[this.$$c.$$.props[s]],this.$$p_d[s].reflect){const r=B(s,this.$$d[s],this.$$p_d,"toAttribute");r==null?this.removeAttribute(s):this.setAttribute(this.$$p_d[s].attribute||s,r)}this.$$r=!1};this.$$c.$$.after_update.push(o),o();for(const s in this.$$l)for(const r of this.$$l[s]){const i=this.$$c.$on(s,r);this.$$l_u.set(r,i)}this.$$l={}}}attributeChangedCallback(t,n,e){var o;this.$$r||(t=this.$$g_p(t),this.$$d[t]=B(t,e,this.$$p_d,"toProp"),(o=this.$$c)==null||o.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(n=>this.$$p_d[n].attribute===t||!this.$$p_d[n].attribute&&n.toLowerCase()===t)||t}});function B(t,n,e,o){var s;const r=(s=e[t])==null?void 0:s.type;if(n=r==="Boolean"&&typeof n!="boolean"?n!=null:n,!o||!e[t])return n;if(o==="toAttribute")switch(r){case"Object":case"Array":return n==null?null:JSON.stringify(n);case"Boolean":return n?"":null;case"Number":return n??null;default:return n}else switch(r){case"Object":case"Array":return n&&JSON.parse(n);case"Boolean":return n;case"Number":return n!=null?+n:n;default:return n}}function nn(t,n,e,o,s,r){let i=class extends rt{constructor(){super(t,e,s),this.$$p_d=n}static get observedAttributes(){return Object.keys(n).map(c=>(n[c].attribute||c).toLowerCase())}};return Object.keys(n).forEach(c=>{Object.defineProperty(i.prototype,c,{get(){return this.$$c&&c in this.$$c?this.$$c[c]:this.$$d[c]},set(a){var u;a=B(c,a,n),this.$$d[c]=a,(u=this.$$c)==null||u.$set({[c]:a})}})}),o.forEach(c=>{Object.defineProperty(i.prototype,c,{get(){var a;return(a=this.$$c)==null?void 0:a[c]}})}),r&&(i=r(i)),t.element=i,i}class en{constructor(){$(this,"$$"),$(this,"$$set")}$destroy(){Yt(this,1),this.$destroy=x}$on(n,e){if(!q(e))return x;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const s=o.indexOf(e);s!==-1&&o.splice(s,1)}}$set(n){this.$$set&&!$t(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const on="4";export{dt as A,S as B,st as C,Rt as D,nt as E,jt as F,I as G,Tt as H,ht as I,mt as J,v as K,Dt as L,xt as M,Pt as N,Nt as O,Wt as P,Vt as Q,At as R,en as S,on as T,gt as a,Et as b,nn as c,et as d,j as e,C as f,z as g,tt as h,tn as i,P as j,Ht as k,Ut as l,_t as m,x as n,wt as o,kt as p,F as q,Ot as r,lt as s,Mt as t,Kt as u,Qt as v,Bt as w,ft as x,pt as y,bt as z};