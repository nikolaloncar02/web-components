"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[714],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="Select",l={unversionedId:"Form fields/select",id:"Form fields/select",title:"Select",description:"Description",source:"@site/docs/Form fields/select.md",sourceDirName:"Form fields",slug:"/Form fields/select",permalink:"/web-components/Form fields/select",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Radio",permalink:"/web-components/Form fields/radio"},next:{title:"Alert",permalink:"/web-components/alert"}},p={},c=[{value:"Description",id:"description",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Slots",id:"slots",level:3},{value:"Methods",id:"methods",level:3},{value:"Events",id:"events",level:3},{value:"Demo",id:"demo",level:3}],s={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"select"},"Select"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<jp-select>")," is a form component with ",(0,a.kt)("inlineCode",{parentName:"p"},"<select>")," functionality."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"th"},"Name")),(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"th"},"Type")),(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"options"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"Array<string>")),(0,a.kt)("td",{parentName:"tr",align:"center"},"select options")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"disabled"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"center"},"determines if a selection is disabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"required"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"center"},"determines if a selection is required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"value"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"center"},"currently selected option")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"id"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"center"},"unique identifier")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"name"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"required")," for native form submission")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"label"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"center"},"shows at the top of a selection")))),(0,a.kt)("h3",{id:"slots"},"Slots"),(0,a.kt)("p",null,"This component does not have any slots."),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("p",null,"This component does not have any methods."),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"triggers when item is selected")))),(0,a.kt)("h3",{id:"demo"},"Demo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<form>\n  <jp-select options=\'["aaa", "bbb", "ccc"]\'>\n  </jp-select>\n</form>\n')))}m.isMDXComponent=!0}}]);