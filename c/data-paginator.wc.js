import{c as ce,S as re,i as pe,f as M,s as oe,a as de,l as Z,e as f,q as m,b as h,E as u,d as l,U as he,g as ee,h as n,V as te,o as R,r as _,Q as ue,n as se,j as ae,J as be,k as $e,w as we,I as ne,R as ve,W as xe}from"./svelte.js";import"./index2.js";function fe(t){de(t,"svelte-dswsqg",".paginator.svelte-dswsqg{font-size:1rem}select.svelte-dswsqg{height:32px}button.svelte-dswsqg{width:32px;height:32px;background:none;border:none;border-radius:50%;cursor:pointer;transition:.3s}button.svelte-dswsqg:disabled{opacity:.5;pointer-events:none}button.svelte-dswsqg:not(:disabled):hover{background:rgba(0,0,0,.08)}")}function ie(t,e,s){const p=t.slice();return p[15]=e[s],p}function ge(t,e){let s,p=e[15]+"",g,i;return{key:t,first:null,c(){s=f("option"),g=m(p),s.__value=i=e[15],ne(s,s.__value),this.first=s},m(o,d){ee(o,s,d),n(s,g)},p(o,d){e=o,d&8&&p!==(p=e[15]+"")&&_(g,p),d&8&&i!==(i=e[15])&&(s.__value=i,ne(s,s.__value))},d(o){o&&ae(s)}}}function me(t){let e,s,p,g,i=[],o=new Map,d,b=t[0]*t[10]+1+"",P,y,z=(t[0]+1)*t[10]+"",k,E,O,B,j,J,r,L,V,C,K,$,S,W,D,N,w,q,A,H,T,v,I,F,Q,G,X,U=Z(t[3]);const Y=a=>a[15];for(let a=0;a<U.length;a+=1){let c=ie(t,U,a),x=Y(c);o.set(x,i[a]=ge(x,c))}return{c(){e=f("div"),s=m(t[5]),p=h(),g=f("select");for(let a=0;a<i.length;a+=1)i[a].c();d=h(),P=m(b),y=m(" - "),k=m(z),E=h(),O=m(t[4]),B=h(),j=m(t[2]),J=h(),r=f("button"),L=u("svg"),V=u("path"),K=h(),$=f("button"),S=u("svg"),W=u("path"),N=h(),w=f("button"),q=u("svg"),A=u("path"),T=h(),v=f("button"),I=u("svg"),F=u("path"),l(g,"class","svelte-dswsqg"),t[1]===void 0&&he(()=>t[12].call(g)),l(V,"d","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"),l(L,"xmlns","http://www.w3.org/2000/svg"),l(L,"height","1em"),l(L,"viewBox","0 0 512 512"),r.disabled=C=!t[0],l(r,"class","svelte-dswsqg"),l(W,"d","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"),l(S,"xmlns","http://www.w3.org/2000/svg"),l(S,"height","1em"),l(S,"viewBox","0 0 448 512"),$.disabled=D=!t[0],l($,"class","svelte-dswsqg"),l(A,"d","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"),l(q,"xmlns","http://www.w3.org/2000/svg"),l(q,"height","1em"),l(q,"viewBox","0 0 448 512"),w.disabled=H=t[0]==Math.ceil(t[2]/t[1])-1,l(w,"class","svelte-dswsqg"),l(F,"d","M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"),l(I,"xmlns","http://www.w3.org/2000/svg"),l(I,"height","1em"),l(I,"viewBox","0 0 512 512"),v.disabled=Q=t[0]==Math.ceil(t[2]/t[1])-1,l(v,"class","svelte-dswsqg"),l(e,"class","paginator svelte-dswsqg")},m(a,c){ee(a,e,c),n(e,s),n(e,p),n(e,g);for(let x=0;x<i.length;x+=1)i[x]&&i[x].m(g,null);te(g,t[1],!0),n(e,d),n(e,P),n(e,y),n(e,k),n(e,E),n(e,O),n(e,B),n(e,j),n(e,J),n(e,r),n(r,L),n(L,V),n(e,K),n(e,$),n($,S),n(S,W),n(e,N),n(e,w),n(w,q),n(q,A),n(e,T),n(e,v),n(v,I),n(I,F),G||(X=[R(g,"change",t[12]),R(g,"change",t[13]),R(r,"click",t[9]),R($,"click",t[7]),R(w,"click",t[6]),R(v,"click",t[8])],G=!0)},p(a,[c]){c&32&&_(s,a[5]),c&8&&(U=Z(a[3]),i=ue(i,c,Y,1,a,U,o,g,ve,ge,null,ie)),c&10&&te(g,a[1]),c&1025&&b!==(b=a[0]*a[10]+1+"")&&_(P,b),c&1025&&z!==(z=(a[0]+1)*a[10]+"")&&_(k,z),c&16&&_(O,a[4]),c&4&&_(j,a[2]),c&1&&C!==(C=!a[0])&&(r.disabled=C),c&1&&D!==(D=!a[0])&&($.disabled=D),c&15&&H!==(H=a[0]==Math.ceil(a[2]/a[1])-1)&&(w.disabled=H),c&15&&Q!==(Q=a[0]==Math.ceil(a[2]/a[1])-1)&&(v.disabled=Q)},i:se,o:se,d(a){a&&ae(e);for(let c=0;c<i.length;c+=1)i[c].d();G=!1,be(X)}}}function Pe(t,e,s){let{length:p=50}=e,{pageIndex:g=0}=e,{pageSize:i=10}=e,o=1,{pageSizeOptions:d=[5,10,25]}=e,{getRangeLabel:b="of"}=e,{itemsPerPageLabel:P="Items per page"}=e;const y=$e();function z(){s(0,g+=1)}function k(){s(0,g-=1)}function E(){s(0,g=Math.ceil(p/o)-1)}function O(){s(0,g=0)}we(()=>{d.includes(i)&&s(10,o=i)});function B(){s(0,g=Math.floor(g*(o/i))),s(10,o=i)}function j(){i=xe(this),s(1,i),s(3,d)}const J=()=>B();return t.$$set=r=>{"length"in r&&s(2,p=r.length),"pageIndex"in r&&s(0,g=r.pageIndex),"pageSize"in r&&s(1,i=r.pageSize),"pageSizeOptions"in r&&s(3,d=r.pageSizeOptions),"getRangeLabel"in r&&s(4,b=r.getRangeLabel),"itemsPerPageLabel"in r&&s(5,P=r.itemsPerPageLabel)},t.$$.update=()=>{t.$$.dirty&7&&y("change",{pageIndex:g,pageSize:i,length:p})},[g,i,p,d,b,P,z,k,E,O,o,B,j,J]}class le extends re{constructor(e){super(),pe(this,e,Pe,me,oe,{length:2,pageIndex:0,pageSize:1,pageSizeOptions:3,getRangeLabel:4,itemsPerPageLabel:5,nextPage:6,prevPage:7,lastPage:8,firstPage:9},fe)}get length(){return this.$$.ctx[2]}set length(e){this.$$set({length:e}),M()}get pageIndex(){return this.$$.ctx[0]}set pageIndex(e){this.$$set({pageIndex:e}),M()}get pageSize(){return this.$$.ctx[1]}set pageSize(e){this.$$set({pageSize:e}),M()}get pageSizeOptions(){return this.$$.ctx[3]}set pageSizeOptions(e){this.$$set({pageSizeOptions:e}),M()}get getRangeLabel(){return this.$$.ctx[4]}set getRangeLabel(e){this.$$set({getRangeLabel:e}),M()}get itemsPerPageLabel(){return this.$$.ctx[5]}set itemsPerPageLabel(e){this.$$set({itemsPerPageLabel:e}),M()}get nextPage(){return this.$$.ctx[6]}get prevPage(){return this.$$.ctx[7]}get lastPage(){return this.$$.ctx[8]}get firstPage(){return this.$$.ctx[9]}}try{customElements.define("jp-data-paginator",ce(le,{length:{},pageIndex:{},pageSize:{},pageSizeOptions:{},getRangeLabel:{},itemsPerPageLabel:{}},[],["nextPage","prevPage","lastPage","firstPage"],!1));}catch{};export{le as default};
