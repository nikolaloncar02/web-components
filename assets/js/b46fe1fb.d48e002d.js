"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Carousel",l={unversionedId:"carousel",id:"carousel",title:"Carousel",description:"Description",source:"@site/docs/carousel.md",sourceDirName:".",slug:"/carousel",permalink:"/web-components/docs/carousel",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Button",permalink:"/web-components/docs/button"},next:{title:"Confirm",permalink:"/web-components/docs/confirm"}},s={},c=[{value:"Description",id:"description",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Slots",id:"slots",level:3},{value:"Methods",id:"methods",level:3},{value:"Events",id:"events",level:3},{value:"Demo",id:"demo",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"carousel"},"Carousel"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<jp-carousel>")," is a component with the functionality of creating an interactive image carousel."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"th"},"Name")),(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"th"},"Required")),(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"th"},"Type")),(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"images"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"Array<{src: string, alt?: string}>")),(0,a.kt)("td",{parentName:"tr",align:"center"},"stores an image collection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"imagesPerSlide"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"center"},"number of images shown on a slide")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"enablePagination"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"center"},"determines if pagination is enabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"sliderBar"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"center"},"determines visability of a slider bar")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"autoSlide"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"center"},"determines if automatic slide is enabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"interval"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"center"},"time interval between slides in miliseconds")))),(0,a.kt)("h3",{id:"slots"},"Slots"),(0,a.kt)("p",null,"This component does not have any slots."),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("p",null,"This component does not have any methods."),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)("p",null,"This component does not have any events. "),(0,a.kt)("h3",{id:"demo"},"Demo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<jp-carousel images=\'[{"src": "https://picsum.photos/200/300"}, {"src": "https://picsum.photos/200/200"}, {"src": "https://picsum.photos/300/300"}]\'>\n</jp-carousel>\n')))}m.isMDXComponent=!0}}]);