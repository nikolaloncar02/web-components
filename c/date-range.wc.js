var lt=Object.defineProperty,rt=(e,l,t)=>l in e?lt(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t,nt=(e,l,t)=>(rt(e,typeof l!="symbol"?l+"":l,t),t);import{c as at,S as st,i as ot,f as _,s as it,a as ct,b as j,e as f,t as Z,l as ut,d as i,K as ge,m as X,g as E,h as c,L as ae,o as O,J as N,u as ee,n as ce,j as J,r as se,k as dt,p as K,G as re,N as mt,q as ne,Y as oe,I as gt}from"./svelte.js";import"./index2.js";import{c as ht}from"./clickOutside.js";import{f as ue,a as ie}from"./dateFormatter.js";function vt(e){ct(e,"svelte-1e2lgth",`.field.svelte-1e2lgth.svelte-1e2lgth{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-align:left;width:100%;height:3rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 0.75rem;gap:0.75rem;background-color:transparent;border:1px solid var(--border-primary);-webkit-border-radius:0.25rem;-moz-border-radius:0.25rem;border-radius:0.25rem}.field.svelte-1e2lgth.svelte-1e2lgth:hover{border-color:var(--primary-color)}.field.active.svelte-1e2lgth.svelte-1e2lgth{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-color:var(--primary-color)}.field.active.svelte-1e2lgth .field-icon.svelte-1e2lgth{color:var(--primary-color);fill:var(--primary-color)}.field.borderTop.svelte-1e2lgth.svelte-1e2lgth{border-top-color:var(--primary-color);border-top-left-radius:0;border-top-right-radius:0}.field.borderBottom.svelte-1e2lgth.svelte-1e2lgth{border-bottom-color:var(--primary-color);border-bottom-left-radius:0;border-bottom-right-radius:0}.field-input.svelte-1e2lgth.svelte-1e2lgth{-webkit-box-flex:1;-webkit-flex:auto;-moz-box-flex:1;-ms-flex:auto;flex:auto;width:10rem;font-size:1rem;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;border:none;outline:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background-color:transparent}.field-input-padding.svelte-1e2lgth.svelte-1e2lgth{padding:1rem 0 0 0}.field-label.svelte-1e2lgth.svelte-1e2lgth{position:absolute;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);font-size:1rem;-webkit-transition:transform 0.3s,
            top 0.3s,
            font-size 0.3s;-o-transition:transform 0.3s,
            top 0.3s,
            font-size 0.3s;-moz-transition:transform 0.3s,
            top 0.3s,
            font-size 0.3s;transition:transform 0.3s,
            top 0.3s,
            font-size 0.3s}.field-label.move.svelte-1e2lgth.svelte-1e2lgth{top:0.25rem;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);font-size:0.75rem}.field-icon.svelte-1e2lgth.svelte-1e2lgth{width:1rem;height:1rem;fill:var(--text-primary);transition:0.3s}.overlay.svelte-1e2lgth.svelte-1e2lgth{z-index:100;position:fixed;top:0;left:0;right:0;bottom:0}.menu.svelte-1e2lgth.svelte-1e2lgth{z-index:100;position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-width:312px;max-height:385px;width:100%;padding:1rem;overflow-y:auto;-webkit-border-bottom-left-radius:0.25rem;-moz-border-radius-bottomleft:0.25rem;border-bottom-left-radius:0.25rem;-webkit-border-bottom-right-radius:0.25rem;-moz-border-radius-bottomright:0.25rem;border-bottom-right-radius:0.25rem;-webkit-box-shadow:0 6px 9px rgba(0, 0, 0, 0.16);-moz-box-shadow:0 6px 9px rgba(0, 0, 0, 0.16);box-shadow:0 6px 9px rgba(0, 0, 0, 0.16);background-color:var(--background-primary)}.menu-month.svelte-1e2lgth.svelte-1e2lgth{position:absolute;top:0;left:0;width:100%;height:100%;padding:1rem;background-color:var(--background-primary)}.menu-month-grid.svelte-1e2lgth.svelte-1e2lgth{display:grid;gap:0.75rem;grid-template-columns:repeat(3, minmax(0, 1fr))}.menu-month-grid-cell.svelte-1e2lgth button.svelte-1e2lgth{width:100%;border-radius:999px;padding:0.25rem 0.75rem}.menu-month-grid-cell.svelte-1e2lgth button.active.svelte-1e2lgth,.menu-month-grid-cell.svelte-1e2lgth button.svelte-1e2lgth:hover{background-color:var(--primary-color);color:var(--text-on-primary)}.menu-year.svelte-1e2lgth.svelte-1e2lgth{position:absolute;top:0;left:0;width:100%;height:100%;padding:1rem;display:flex;flex-direction:column;background-color:var(--background-primary)}.menu-nav.svelte-1e2lgth.svelte-1e2lgth,.menu-month-nav.svelte-1e2lgth.svelte-1e2lgth,.menu-year-nav.svelte-1e2lgth.svelte-1e2lgth{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;gap:0.5rem}.menu-year-nav-buttons.svelte-1e2lgth.svelte-1e2lgth,.menu-month-nav-buttons.svelte-1e2lgth.svelte-1e2lgth,.menu-nav-buttons.svelte-1e2lgth.svelte-1e2lgth{display:flex}.menu-year-nav-buttons.svelte-1e2lgth button.svelte-1e2lgth,.menu-month-nav-buttons.svelte-1e2lgth button.svelte-1e2lgth,.menu-nav-buttons.svelte-1e2lgth button.svelte-1e2lgth{display:flex;justify-content:center;align-items:center;width:2.5rem;height:2.5rem;padding:0;border-radius:50%}.menu-year-nav-buttons.svelte-1e2lgth button.svelte-1e2lgth:hover,.menu-month-nav-buttons.svelte-1e2lgth button.svelte-1e2lgth:hover,.menu-nav-buttons.svelte-1e2lgth button.svelte-1e2lgth:hover{background-color:var(--background-secondary)}.menu-year-row.svelte-1e2lgth.svelte-1e2lgth{display:flex;align-items:center;justify-content:space-around;flex:1 1 0;gap:0.25rem}.menu-year-row-cell.svelte-1e2lgth.svelte-1e2lgth{flex:1 1 0;padding:0.25rem;border-radius:999px}.menu-year-row-cell.svelte-1e2lgth.svelte-1e2lgth:hover,.menu-year-row-cell.active.svelte-1e2lgth.svelte-1e2lgth{background-color:var(--primary-color);color:var(--text-on-primary)}.menu-nav-date.svelte-1e2lgth.svelte-1e2lgth,.menu-month-nav-date.svelte-1e2lgth.svelte-1e2lgth,.menu-year-nav-date.svelte-1e2lgth.svelte-1e2lgth{display:flex;align-items:center;gap:0.75rem;text-align:left;padding:0.5rem 0.75rem;border-radius:0.25rem}.menu-nav-date.svelte-1e2lgth.svelte-1e2lgth:hover,.menu-month-nav-date.svelte-1e2lgth.svelte-1e2lgth:hover,.menu-year-nav-date.svelte-1e2lgth.svelte-1e2lgth:hover{background-color:var(--background-secondary)}.table.svelte-1e2lgth.svelte-1e2lgth{display:table;width:max-content}.table-cell.svelte-1e2lgth.svelte-1e2lgth{display:table-cell;width:40px;height:40px;max-width:40px;line-height:40px;text-align:center;padding:0}.table-cell.svelte-1e2lgth button.svelte-1e2lgth{width:100%;height:100%;border-radius:50%}.table-cell.svelte-1e2lgth button.svelte-1e2lgth:hover{background-color:var(--background-secondary)}.table-cell.svelte-1e2lgth button.gray.svelte-1e2lgth{opacity:0.5}.table-cell.svelte-1e2lgth button.active.svelte-1e2lgth{background-color:var(--primary-color);color:var(--text-on-primary);opacity:1}`)}function he(e,l,t){const r=e.slice();return r[59]=l[t],r[61]=t,r}function ve(e,l,t){const r=e.slice();return r[62]=l[t],r}function pe(e,l,t){const r=e.slice();return r[65]=l[t],r}function be(e,l,t){const r=e.slice();return r[62]=l[t],r}function fe(e,l,t){const r=e.slice();return r[70]=l[t],r}function ye(e,l,t){const r=e.slice();return r[73]=l[t],r}function $e(e){let l;return{c(){l=f("div"),i(l,"class","label")},m(t,r){E(t,l,r),l.innerHTML=e[3]},p(t,r){r[0]&8&&(l.innerHTML=t[3])},d(t){t&&J(l)}}}function we(e){let l;return{c(){l=f("span"),i(l,"class","field-label svelte-1e2lgth"),X(l,"move",e[17]||e[13])},m(t,r){E(t,l,r),l.innerHTML=e[3]},p(t,r){r[0]&8&&(l.innerHTML=t[3]),r[0]&139264&&X(l,"move",t[17]||t[13])},d(t){t&&J(l)}}}function xe(e){let l,t,r,n,o=e[22][e[11]]+"",v,s,g,L,w,T,C,y,k,F,I,D,q,m,h,$,a,d,Y,x,A=K(e[21]),V=[];for(let p=0;p<A.length;p+=1)V[p]=ke(ye(e,A,p));let R=K(e[16]),H=[];for(let p=0;p<R.length;p+=1)H[p]=Ie(be(e,R,p));let M=e[18]&&Ve(e),z=e[19]&&Le(e);return{c(){l=f("div"),t=f("div"),r=f("button"),n=f("p"),v=Z(o),s=Z(", "),g=Z(e[10]),L=j(),w=re("svg"),T=re("path"),C=j(),y=f("div"),k=f("button"),k.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg>',F=j(),I=f("button"),I.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg>',D=j(),q=f("div"),m=f("div");for(let p=0;p<V.length;p+=1)V[p].c();h=j(),$=f("div");for(let p=0;p<H.length;p+=1)H[p].c();a=j(),M&&M.c(),d=j(),z&&z.c(),i(T,"d","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"),i(w,"xmlns","http://www.w3.org/2000/svg"),i(w,"height","1em"),i(w,"viewBox","0 0 512 512"),i(r,"type","button"),i(r,"class","menu-nav-date svelte-1e2lgth"),i(k,"type","button"),i(k,"class","svelte-1e2lgth"),i(I,"type","button"),i(I,"class","svelte-1e2lgth"),i(y,"class","menu-nav-buttons svelte-1e2lgth"),i(t,"class","menu-nav svelte-1e2lgth"),i(m,"class","table svelte-1e2lgth"),i($,"class","table svelte-1e2lgth"),i(l,"class","menu svelte-1e2lgth"),i(l,"style",e[15])},m(p,W){E(p,l,W),c(l,t),c(t,r),c(r,n),c(n,v),c(n,s),c(n,g),c(r,L),c(r,w),c(w,T),c(t,C),c(t,y),c(y,k),c(y,F),c(y,I),c(l,D),c(l,q),c(q,m);for(let b=0;b<V.length;b+=1)V[b]&&V[b].m(m,null);c(q,h),c(q,$);for(let b=0;b<H.length;b+=1)H[b]&&H[b].m($,null);c(l,a),M&&M.m(l,null),c(l,d),z&&z.m(l,null),Y||(x=[O(r,"click",N(e[42])),O(k,"click",N(e[43])),O(I,"click",N(e[44])),mt(ht.call(null,l)),O(l,"click_outside",e[54])],Y=!0)},p(p,W){if(W[0]&2048&&o!==(o=p[22][p[11]]+"")&&ee(v,o),W[0]&1024&&ee(g,p[10]),W[0]&2097152){A=K(p[21]);let b;for(b=0;b<A.length;b+=1){const Q=ye(p,A,b);V[b]?V[b].p(Q,W):(V[b]=ke(Q),V[b].c(),V[b].m(m,null))}for(;b<V.length;b+=1)V[b].d(1);V.length=A.length}if(W[0]&16843235){R=K(p[16]);let b;for(b=0;b<R.length;b+=1){const Q=be(p,R,b);H[b]?H[b].p(Q,W):(H[b]=Ie(Q),H[b].c(),H[b].m($,null))}for(;b<H.length;b+=1)H[b].d(1);H.length=R.length}p[18]?M?M.p(p,W):(M=Ve(p),M.c(),M.m(l,d)):M&&(M.d(1),M=null),p[19]?z?z.p(p,W):(z=Le(p),z.c(),z.m(l,null)):z&&(z.d(1),z=null),W[0]&32768&&i(l,"style",p[15])},d(p){p&&J(l),ne(V,p),ne(H,p),M&&M.d(),z&&z.d(),Y=!1,se(x)}}}function ke(e){let l;return{c(){l=f("div"),l.textContent=`${e[73]} `,i(l,"class","table-cell svelte-1e2lgth")},m(t,r){E(t,l,r)},p:ce,d(t){t&&J(l)}}}function Fe(e){let l,t,r=e[70].day+"",n,o,v;function s(){return e[45](e[70])}return{c(){l=f("div"),t=f("button"),n=Z(r),i(t,"type","button"),i(t,"class","svelte-1e2lgth"),X(t,"gray",e[70].gray),X(t,"active",e[8]?parseInt(e[0].split("-").join(""),10)<=parseInt(`${e[70].year}${e[70].month+1<10?"0":""}${e[70].month+1}${e[70].day<10?"0":""}${e[70].day}`,10)&&parseInt(e[1].split("-").join(""),10)>=parseInt(`${e[70].year}${e[70].month+1<10?"0":""}${e[70].month+1}${e[70].day<10?"0":""}${e[70].day}`,10):e[7]==e[70].day&&e[6]==e[70].month&&e[5]==e[70].year),i(l,"class","table-cell svelte-1e2lgth")},m(g,L){E(g,l,L),c(l,t),c(t,n),o||(v=O(t,"click",N(s)),o=!0)},p(g,L){e=g,L[0]&65536&&r!==(r=e[70].day+"")&&ee(n,r),L[0]&65536&&X(t,"gray",e[70].gray),L[0]&66019&&X(t,"active",e[8]?parseInt(e[0].split("-").join(""),10)<=parseInt(`${e[70].year}${e[70].month+1<10?"0":""}${e[70].month+1}${e[70].day<10?"0":""}${e[70].day}`,10)&&parseInt(e[1].split("-").join(""),10)>=parseInt(`${e[70].year}${e[70].month+1<10?"0":""}${e[70].month+1}${e[70].day<10?"0":""}${e[70].day}`,10):e[7]==e[70].day&&e[6]==e[70].month&&e[5]==e[70].year)},d(g){g&&J(l),o=!1,v()}}}function Ie(e){let l,t,r=K(e[62]),n=[];for(let o=0;o<r.length;o+=1)n[o]=Fe(fe(e,r,o));return{c(){l=f("div");for(let o=0;o<n.length;o+=1)n[o].c();t=j(),i(l,"class","table-row")},m(o,v){E(o,l,v);for(let s=0;s<n.length;s+=1)n[s]&&n[s].m(l,null);c(l,t)},p(o,v){if(v[0]&16843235){r=K(o[62]);let s;for(s=0;s<r.length;s+=1){const g=fe(o,r,s);n[s]?n[s].p(g,v):(n[s]=Fe(g),n[s].c(),n[s].m(l,t))}for(;s<n.length;s+=1)n[s].d(1);n.length=r.length}},d(o){o&&J(l),ne(n,o)}}}function Ve(e){let l,t,r,n,o=e[20][0][0]+"",v,s,g=e[20][e[20].length-1][e[20][e[20].length-1].length-1]+"",L,w,T,C,y,k,F,I,D,q,m,h,$=K(e[20]),a=[];for(let d=0;d<$.length;d+=1)a[d]=ze(ve(e,$,d));return{c(){l=f("div"),t=f("div"),r=f("button"),n=f("p"),v=Z(o),s=Z(" - "),L=Z(g),w=j(),T=re("svg"),C=re("path"),y=j(),k=f("div"),F=f("button"),F.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg>',I=j(),D=f("button"),D.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg>',q=j();for(let d=0;d<a.length;d+=1)a[d].c();i(C,"d","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"),i(T,"xmlns","http://www.w3.org/2000/svg"),i(T,"height","1em"),i(T,"viewBox","0 0 512 512"),i(r,"type","button"),i(r,"class","menu-year-nav-date svelte-1e2lgth"),i(F,"type","button"),i(F,"class","svelte-1e2lgth"),i(D,"type","button"),i(D,"class","svelte-1e2lgth"),i(k,"class","menu-year-nav-buttons svelte-1e2lgth"),i(t,"class","menu-year-nav svelte-1e2lgth"),i(l,"class","menu-year svelte-1e2lgth")},m(d,Y){E(d,l,Y),c(l,t),c(t,r),c(r,n),c(n,v),c(n,s),c(n,L),c(r,w),c(r,T),c(T,C),c(t,y),c(t,k),c(k,F),c(k,I),c(k,D),c(l,q);for(let x=0;x<a.length;x+=1)a[x]&&a[x].m(l,null);m||(h=[O(r,"click",oe(e[46])),O(F,"click",N(e[47])),O(D,"click",N(e[48]))],m=!0)},p(d,Y){if(Y[0]&1048576&&o!==(o=d[20][0][0]+"")&&ee(v,o),Y[0]&1048576&&g!==(g=d[20][d[20].length-1][d[20][d[20].length-1].length-1]+"")&&ee(L,g),Y[0]&1836320){$=K(d[20]);let x;for(x=0;x<$.length;x+=1){const A=ve(d,$,x);a[x]?a[x].p(A,Y):(a[x]=ze(A),a[x].c(),a[x].m(l,null))}for(;x<a.length;x+=1)a[x].d(1);a.length=$.length}},d(d){d&&J(l),ne(a,d),m=!1,se(h)}}}function Me(e){let l,t=e[65]+"",r,n,o;function v(){return e[49](e[65])}return{c(){l=f("button"),r=Z(t),i(l,"type","button"),i(l,"class","menu-year-row-cell svelte-1e2lgth"),X(l,"active",e[8]?e[5]<=e[65]&&e[8]>=e[65]:e[5]==e[65])},m(s,g){E(s,l,g),c(l,r),n||(o=O(l,"click",oe(N(v))),n=!0)},p(s,g){e=s,g[0]&1048576&&t!==(t=e[65]+"")&&ee(r,t),g[0]&1048864&&X(l,"active",e[8]?e[5]<=e[65]&&e[8]>=e[65]:e[5]==e[65])},d(s){s&&J(l),n=!1,o()}}}function ze(e){let l,t,r=K(e[62]),n=[];for(let o=0;o<r.length;o+=1)n[o]=Me(pe(e,r,o));return{c(){l=f("div");for(let o=0;o<n.length;o+=1)n[o].c();t=j(),i(l,"class","menu-year-row svelte-1e2lgth")},m(o,v){E(o,l,v);for(let s=0;s<n.length;s+=1)n[s]&&n[s].m(l,null);c(l,t)},p(o,v){if(v[0]&1836320){r=K(o[62]);let s;for(s=0;s<r.length;s+=1){const g=pe(o,r,s);n[s]?n[s].p(g,v):(n[s]=Me(g),n[s].c(),n[s].m(l,t))}for(;s<n.length;s+=1)n[s].d(1);n.length=r.length}},d(o){o&&J(l),ne(n,o)}}}function Le(e){let l,t,r,n,o,v,s,g,L,w,T,C,y,k,F,I,D,q=K(e[22]),m=[];for(let h=0;h<q.length;h+=1)m[h]=Te(he(e,q,h));return{c(){l=f("div"),t=f("div"),r=f("button"),n=f("p"),o=Z(e[10]),v=j(),s=re("svg"),g=re("path"),L=j(),w=f("div"),T=f("button"),T.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg>',C=j(),y=f("button"),y.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg>',k=j(),F=f("div");for(let h=0;h<m.length;h+=1)m[h].c();i(g,"d","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"),i(s,"xmlns","http://www.w3.org/2000/svg"),i(s,"height","1em"),i(s,"viewBox","0 0 512 512"),i(r,"type","button"),i(r,"class","menu-month-nav-date svelte-1e2lgth"),i(T,"type","button"),i(T,"class","svelte-1e2lgth"),i(y,"type","button"),i(y,"class","svelte-1e2lgth"),i(w,"class","menu-month-nav-buttons svelte-1e2lgth"),i(t,"class","menu-month-nav svelte-1e2lgth"),i(F,"class","menu-month-grid svelte-1e2lgth"),i(l,"class","menu-month svelte-1e2lgth")},m(h,$){E(h,l,$),c(l,t),c(t,r),c(r,n),c(n,o),c(r,v),c(r,s),c(s,g),c(t,L),c(t,w),c(w,T),c(w,C),c(w,y),c(l,k),c(l,F);for(let a=0;a<m.length;a+=1)m[a]&&m[a].m(F,null);I||(D=[O(r,"click",oe(e[50])),O(T,"click",N(e[51])),O(y,"click",N(e[52]))],I=!0)},p(h,$){if($[0]&1024&&ee(o,h[10]),$[0]&4722528){q=K(h[22]);let a;for(a=0;a<q.length;a+=1){const d=he(h,q,a);m[a]?m[a].p(d,$):(m[a]=Te(d),m[a].c(),m[a].m(F,null))}for(;a<m.length;a+=1)m[a].d(1);m.length=q.length}},d(h){h&&J(l),ne(m,h),I=!1,se(D)}}}function Te(e){let l,t,r,n,o;function v(){return e[53](e[61])}return{c(){l=f("div"),t=f("button"),t.textContent=`${e[59]}`,r=j(),i(t,"type","button"),i(t,"class","svelte-1e2lgth"),X(t,"active",e[9]?parseInt(`${e[5]}${e[6]+1<10?"0":""}${e[6]+1}`,10)<=parseInt(`${e[10]}${e[61]+1<10?"0":""}${e[61]+1}`,10)&&parseInt(`${e[8]}${e[9]+1<10?"0":""}${e[9]+1}`,10)>=parseInt(`${e[10]}${e[61]+1<10?"0":""}${e[61]+1}`,10):e[6]==e[61]&&e[10]==e[5]),i(l,"class","menu-month-grid-cell svelte-1e2lgth")},m(s,g){E(s,l,g),c(l,t),c(l,r),n||(o=O(t,"click",oe(v)),n=!0)},p(s,g){e=s,g[0]&1888&&X(t,"active",e[9]?parseInt(`${e[5]}${e[6]+1<10?"0":""}${e[6]+1}`,10)<=parseInt(`${e[10]}${e[61]+1<10?"0":""}${e[61]+1}`,10)&&parseInt(`${e[8]}${e[9]+1<10?"0":""}${e[9]+1}`,10)>=parseInt(`${e[10]}${e[61]+1<10?"0":""}${e[61]+1}`,10):e[6]==e[61]&&e[10]==e[5])},d(s){s&&J(l),n=!1,o()}}}function pt(e){let l,t,r,n,o,v,s,g,L,w,T,C,y,k,F,I,D,q,m=e[3]&&e[4]=="outside"&&$e(e),h=e[3]&&e[4]=="inside"&&we(e),$=e[17]&&xe(e);return{c(){m&&m.c(),l=j(),t=f("button"),h&&h.c(),r=j(),n=f("p"),o=Z(e[13]),s=j(),g=f("span"),g.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"></path></svg>',L=j(),w=f("input"),C=j(),y=f("input"),F=j(),$&&$.c(),I=ut(),i(n,"class",v=ge(`field-input ${e[4]=="outside"||!e[3]?"":"field-input-padding"}`)+" svelte-1e2lgth"),i(g,"class","field-icon svelte-1e2lgth"),i(t,"type","button"),i(t,"class","field svelte-1e2lgth"),X(t,"active",e[17]),X(t,"borderBottom",ft),X(t,"borderTop",bt),i(w,"type","date"),i(w,"name",T=`${e[2]}-from`),w.hidden=!0,i(y,"type","date"),i(y,"name",k=`${e[2]}-to`),y.hidden=!0},m(a,d){m&&m.m(a,d),E(a,l,d),E(a,t,d),h&&h.m(t,null),c(t,r),c(t,n),c(n,o),c(t,s),c(t,g),e[39](t),E(a,L,d),E(a,w,d),ae(w,e[0]),E(a,C,d),E(a,y,d),ae(y,e[1]),E(a,F,d),$&&$.m(a,d),E(a,I,d),D||(q=[O(t,"click",N(e[23])),O(w,"input",e[40]),O(y,"input",e[41])],D=!0)},p(a,d){a[3]&&a[4]=="outside"?m?m.p(a,d):(m=$e(a),m.c(),m.m(l.parentNode,l)):m&&(m.d(1),m=null),a[3]&&a[4]=="inside"?h?h.p(a,d):(h=we(a),h.c(),h.m(t,r)):h&&(h.d(1),h=null),d[0]&8192&&ee(o,a[13]),d[0]&24&&v!==(v=ge(`field-input ${a[4]=="outside"||!a[3]?"":"field-input-padding"}`)+" svelte-1e2lgth")&&i(n,"class",v),d[0]&131072&&X(t,"active",a[17]),d[0]&4&&T!==(T=`${a[2]}-from`)&&i(w,"name",T),d[0]&1&&ae(w,a[0]),d[0]&4&&k!==(k=`${a[2]}-to`)&&i(y,"name",k),d[0]&2&&ae(y,a[1]),a[17]?$?$.p(a,d):($=xe(a),$.c(),$.m(I.parentNode,I)):$&&($.d(1),$=null)},i:ce,o:ce,d(a){a&&(J(l),J(t),J(L),J(w),J(C),J(y),J(F),J(I)),m&&m.d(a),h&&h.d(),e[39](null),$&&$.d(a),D=!1,se(q)}}}let bt=!1,ft=!1;function yt(e,l,t){let r,{attachedInternals:n}=l,{value:o=""}=l,{firstInternalValue:v=""}=l,{secondInternalValue:s=""}=l,{required:g=!1}=l,{requiredValidationMessage:L=""}=l,{name:w=""}=l,{label:T=""}=l,{labelType:C="inside"}=l,{separator:y=" to "}=l,{displayFormat:k="normal"}=l,{displayFormatFunction:F=u=>u.toDateString()}=l,{returnFormat:I="js"}=l,{returnFormatFunction:D=u=>u.valueOf()}=l,q=!0,m=new Date,h=new Date,$="",a,d,Y=null,x,A,V=null,R,H,M=new Date(Date.now()).getFullYear(),z=new Date(Date.now()).getMonth(),p,W=!1,b=!1,Q=!1,je=["S","M","T","W","T","F","S"],He=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],te=0;const qe=()=>Y&&V?ie(m,I,D)+y+ie(h,I,D):"",de=dt(),Be=()=>n.reportValidity(),Ye=u=>{const B=Array.from(Array(24).keys()).map(S=>S+2e3+u*4*6);return Array.from(Array(6).keys()).map(S=>B.slice(S*4,(S+1)*4))},Ae=(u,B)=>{const S=40-new Date(B,u,40).getDate(),G=40-new Date(B,u-1,40).getDate(),le=new Date(B,u).getDay(),tt=6*7-S-le;let P=[];return P=[...P,Array.from(Array(le).keys()).map(U=>G-U).toReversed().map(U=>({day:U,month:u-1,year:B,gray:!0}))],P=[...P,Array.from(Array(S).keys()).map(U=>({day:U+1,month:u,year:B,gray:!1}))],P=[...P,Array.from(Array(tt).keys()).map(U=>({day:U+1,month:u+1,year:B,gray:!0}))],P=P.flat(),P=Array.from(Array(6).keys()).map(U=>P.slice(U*7,(U+1)*7)),P};function Se(u){if(u&&u.target&&u.target.closest(".menu"))return;const B=a.getBoundingClientRect(),S=window.innerHeight-B.bottom,G=385;let le="";S<G?le=`
        bottom: ${window.innerHeight-B.top-window.scrollY}px;
        left: ${B.left}px;
      `:le=`
        top: ${B.bottom+window.scrollY}px;
        left: ${B.left}px;
      `,t(15,d=le),t(17,W=!W)}function me(u){const{day:B,month:S,year:G}=u;q?(t(7,A=B),t(5,Y=G),t(6,x=S),t(8,V=null),q=!1):(parseInt(v.split("-").join(""),10)>parseInt(`${G}${S+1<10?"0":""}${S+1}${B<10?"0":""}${B}`,10)?(t(38,H=A),t(8,V=Y),t(9,R=x),t(7,A=B),t(5,Y=G),t(6,x=S)):(t(38,H=B),t(8,V=G),t(9,R=S)),q=!0)}function Ee(u){gt[u?"unshift":"push"](()=>{a=u,t(14,a)})}function Je(){v=this.value,t(0,v),t(5,Y),t(6,x),t(7,A),t(36,m),t(30,k),t(31,F),t(29,y),t(27,g),t(25,n),t(28,L),t(26,o),t(9,R),t(8,V)}function Ce(){s=this.value,t(1,s),t(8,V),t(9,R),t(38,H),t(36,m),t(30,k),t(31,F),t(29,y),t(37,h),t(32,I),t(33,D),t(25,n),t(26,o),t(27,g),t(28,L),t(5,Y),t(6,x),t(7,A),t(0,v)}const Re=()=>t(18,b=!0),We=()=>t(11,z=z-1),Oe=()=>t(11,z=z+1),_e=u=>{me(u)},Xe=()=>t(18,b=!1),Ge=()=>t(12,te--,te),Ke=()=>t(12,te++,te),Pe=u=>{t(10,M=u),t(18,b=!1),t(19,Q=!0)},Qe=()=>{t(19,Q=!1)},Ue=()=>t(10,M=M-1),Ze=()=>t(10,M=M+1),Ne=u=>{t(11,z=u),t(19,Q=!1)},et=()=>t(17,W=!1);return e.$$set=u=>{"attachedInternals"in u&&t(25,n=u.attachedInternals),"value"in u&&t(26,o=u.value),"firstInternalValue"in u&&t(0,v=u.firstInternalValue),"secondInternalValue"in u&&t(1,s=u.secondInternalValue),"required"in u&&t(27,g=u.required),"requiredValidationMessage"in u&&t(28,L=u.requiredValidationMessage),"name"in u&&t(2,w=u.name),"label"in u&&t(3,T=u.label),"labelType"in u&&t(4,C=u.labelType),"separator"in u&&t(29,y=u.separator),"displayFormat"in u&&t(30,k=u.displayFormat),"displayFormatFunction"in u&&t(31,F=u.displayFormatFunction),"returnFormat"in u&&t(32,I=u.returnFormat),"returnFormatFunction"in u&&t(33,D=u.returnFormatFunction)},e.$$.update=()=>{if(e.$$.dirty[0]&1040188160)if(o){const[u,B]=o.split(y),S=new Date(u),G=new Date(B);t(5,Y=S.getFullYear()),t(6,x=S.getMonth()),t(7,A=S.getDate()),t(8,V=G.getFullYear()),t(9,R=G.getMonth()),t(38,H=G.getDate()),t(11,z=R),t(10,M=V),n.setValidity({})}else g&&n.setValidity({valueMissing:!0},L||"Date is required.");if(e.$$.dirty[0]&3072&&(z==12?(t(11,z=0),t(10,M++,M)):z==-1&&(t(11,z=11),t(10,M--,M))),e.$$.dirty[0]&4096&&t(20,r=Ye(te)),e.$$.dirty[0]&3072&&t(16,p=Ae(z,M)),e.$$.dirty[0]&2046820577|e.$$.dirty[1]&33&&Y&&(t(0,v=`${Y}-${x+1<10?"0":""}${x+1}-${A<10?"0":""}${A}`),t(36,m=new Date(v)),t(13,$=ue(m,k,F)+y),g&&n.setValidity({customError:!0},L||"Date is required."),de("value",{value:""})),e.$$.dirty[0]&1644167938|e.$$.dirty[1]&231&&V){t(1,s=`${V}-${R+1<10?"0":""}${R+1}-${H<10?"0":""}${H}`),t(37,h=new Date(s)),t(13,$=ue(m,k,F)+y+ue(h,k,F));const u=ie(m,I,D)+y+ie(h,I,D);n.setValidity({}),n.setFormValue(u),de("value",{value:u})}},[v,s,w,T,C,Y,x,A,V,R,M,z,te,$,a,d,p,W,b,Q,r,je,He,Se,me,n,o,g,L,y,k,F,I,D,qe,Be,m,h,H,Ee,Je,Ce,Re,We,Oe,_e,Xe,Ge,Ke,Pe,Qe,Ue,Ze,Ne,et]}class De extends st{constructor(l){super(),ot(this,l,yt,pt,it,{attachedInternals:25,value:26,firstInternalValue:0,secondInternalValue:1,required:27,requiredValidationMessage:28,name:2,label:3,labelType:4,separator:29,displayFormat:30,displayFormatFunction:31,returnFormat:32,returnFormatFunction:33,getValue:34,reportValidity:35},vt,[-1,-1,-1])}get attachedInternals(){return this.$$.ctx[25]}set attachedInternals(l){this.$$set({attachedInternals:l}),_()}get value(){return this.$$.ctx[26]}set value(l){this.$$set({value:l}),_()}get firstInternalValue(){return this.$$.ctx[0]}set firstInternalValue(l){this.$$set({firstInternalValue:l}),_()}get secondInternalValue(){return this.$$.ctx[1]}set secondInternalValue(l){this.$$set({secondInternalValue:l}),_()}get required(){return this.$$.ctx[27]}set required(l){this.$$set({required:l}),_()}get requiredValidationMessage(){return this.$$.ctx[28]}set requiredValidationMessage(l){this.$$set({requiredValidationMessage:l}),_()}get name(){return this.$$.ctx[2]}set name(l){this.$$set({name:l}),_()}get label(){return this.$$.ctx[3]}set label(l){this.$$set({label:l}),_()}get labelType(){return this.$$.ctx[4]}set labelType(l){this.$$set({labelType:l}),_()}get separator(){return this.$$.ctx[29]}set separator(l){this.$$set({separator:l}),_()}get displayFormat(){return this.$$.ctx[30]}set displayFormat(l){this.$$set({displayFormat:l}),_()}get displayFormatFunction(){return this.$$.ctx[31]}set displayFormatFunction(l){this.$$set({displayFormatFunction:l}),_()}get returnFormat(){return this.$$.ctx[32]}set returnFormat(l){this.$$set({returnFormat:l}),_()}get returnFormatFunction(){return this.$$.ctx[33]}set returnFormatFunction(l){this.$$set({returnFormatFunction:l}),_()}get getValue(){return this.$$.ctx[34]}get reportValidity(){return this.$$.ctx[35]}}try{customElements.define("jp-date-range",at(De,{attachedInternals:{},value:{},firstInternalValue:{},secondInternalValue:{},required:{type:"Boolean"},requiredValidationMessage:{},name:{},label:{},labelType:{},separator:{},displayFormat:{},displayFormatFunction:{},returnFormat:{},returnFormatFunction:{}},[],["getValue","reportValidity"],!1,e=>{var l;return l=class extends e{constructor(){super(),this.attachedInternals=this.attachInternals()}},nt(l,"formAssociated",!0),l}));}catch{};export{De as default};
