"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8649],{7047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>x});var s=n(5893),i=n(1151);const l={},r="File list",d={id:"Form fields/file-list",title:"File list",description:"Description",source:"@site/docs/Form fields/file-list.md",sourceDirName:"Form fields",slug:"/Form fields/file-list",permalink:"/web-components/docs/Form fields/file-list",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Date Picker",permalink:"/web-components/docs/Form fields/datepicker"},next:{title:"File upload",permalink:"/web-components/docs/Form fields/file-upload"}},c={},x=[{value:"Description",id:"description",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"<code>FileService</code>",id:"fileservice",level:4},{value:"Properties",id:"properties",level:5},{value:"Slots",id:"slots",level:3},{value:"Methods",id:"methods",level:3},{value:"Events",id:"events",level:3},{value:"Demo",id:"demo",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"file-list",children:"File list"}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"<jp-file-list>"})," is a component with functionality of ",(0,s.jsx)(t.code,{children:'<input multiple type="file">'}),", but also supports initial value in form of urls."]}),"\n",(0,s.jsx)(t.h3,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Required"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"value"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.code,{children:"string"})," (list of urls separated by comma)"]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"initial value"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"label"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.code,{children:"string"})," (HTML)"]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"displayed above the field"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"id"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"unique identifier"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"name"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"name of the form control"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"service"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"#fileservice",children:(0,s.jsx)(t.code,{children:"FileService"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"file service"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"sortable"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"enables/disables drag and drop sort"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"maxfiles"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"maximum number of files allowed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"maxfilesValidationMessage"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"validation message for when component does not satisfy maxfiles"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"minfiles"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"minimum number of files allowed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"minfilesValidationMessage"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"validation message for when component does not satisfy minfiles"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"validationMessages"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.code,{children:"{[type]: string}"})," where ",(0,s.jsx)(t.code,{children:"type"})," is ",(0,s.jsx)(t.code,{children:"string"})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"compact way of writing validation messages in a single attribute"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsx)(t.h4,{id:"fileservice",children:(0,s.jsx)(t.code,{children:"FileService"})}),"\n",(0,s.jsx)(t.p,{children:"Defines the accepted file types and provides a method to upload a file."}),"\n",(0,s.jsx)(t.h5,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Name"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Required"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Type"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"acceptedFiles"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"defines acceptable file types"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"maxSize"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"max file size in bytes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"uploadFile"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"(file: any, id?: string) => Promise<string>"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["uploads a file and returns a promise ",(0,s.jsx)("br",{})," which is a string that represents a link to the file location"]})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h3,{id:"slots",children:"Slots"}),"\n",(0,s.jsx)(t.p,{children:"This component does not have any slots."}),"\n",(0,s.jsx)(t.h3,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"reportValidity"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"triggers reportValidity"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"save"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"async function that saves files and adds urls to value"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"value"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"triggers when files change"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"removed"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"triggers when saved file is removed and contains information about url"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"change"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"triggers when new files are added and contains information about unsaved files"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"rejected"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"triggers when added file is not accepted because it does not satisfy some service criteria"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"demo",children:"Demo"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:"<jp-file-list>\n</jp-file-list>\n"})})]})}function o(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var s=n(7294);const i={},l=s.createContext(i);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);