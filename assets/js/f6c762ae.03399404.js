"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3682],{9099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var s=n(5893),r=n(1151);const l={},i="Date Range",d={id:"Form fields/date-range",title:"Date Range",description:"Description",source:"@site/docs/Form fields/date-range.md",sourceDirName:"Form fields",slug:"/Form fields/date-range",permalink:"/web-components/docs/Form fields/date-range",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Color",permalink:"/web-components/docs/Form fields/color"},next:{title:"Datepicker",permalink:"/web-components/docs/Form fields/datepicker"}},c={},o=[{value:"Description",id:"description",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Slots",id:"slots",level:3},{value:"Methods",id:"methods",level:3},{value:"Events",id:"events",level:3},{value:"Demo",id:"demo",level:3}];function x(e){const t={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"date-range",children:"Date Range"}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"<jp-date-range>"})," is a field component with ",(0,s.jsx)(t.code,{children:'<input type="date">'})," from/to functionality."]}),"\n",(0,s.jsx)(t.h3,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Name"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Required"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Type"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"name"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"name of the form control"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"separator"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string between the dates"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"value"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.code,{children:"string\u02db"})," (",(0,s.jsx)(t.code,{children:"Date()"})," constructor params with separator inbetween)"]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"initial value"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"label"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"label displayed on date field"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"labelType"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.code,{children:"'outside'"})," or ",(0,s.jsx)(t.code,{children:"'inside'"})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"whether label is inside or outside of the field"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"required"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"determines if date needs to be selected"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"requiredValidationMessage"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"validation message for when component does not satisfy required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"returnFormat"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.code,{children:"custom"})," | ",(0,s.jsx)(t.code,{children:"json"})," | ",(0,s.jsx)(t.code,{children:"unix"})," | ",(0,s.jsx)(t.code,{children:"js"})," | ",(0,s.jsx)(t.code,{children:"utc"})," | ",(0,s.jsx)(t.code,{children:"iso"})," | ",(0,s.jsx)(t.code,{children:"isoDate"})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"format of exposing value (through events and methods)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"returnFormatFunction"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["if ",(0,s.jsx)(t.code,{children:"returnFormat"})," ",(0,s.jsx)("br",{})," is ",(0,s.jsx)(t.code,{children:"custom"})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"(date:Date) => any"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"custom return format function"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"displayFormat"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.code,{children:"custom"})," | ",(0,s.jsx)(t.code,{children:"normal"})," | ",(0,s.jsx)(t.code,{children:"short"})," | ",(0,s.jsx)(t.code,{children:"medium"})," | ",(0,s.jsx)(t.code,{children:"long"})," | ",(0,s.jsx)(t.code,{children:"full"})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"format of displayed date in the field"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"displayFormatFunction"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["if ",(0,s.jsx)(t.code,{children:"displayFormat"})," ",(0,s.jsx)("br",{})," is ",(0,s.jsx)(t.code,{children:"custom"})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"(date:Date) => string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"custom display format function"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"slots",children:"Slots"}),"\n",(0,s.jsx)(t.p,{children:"This component does not have any slots."}),"\n",(0,s.jsx)(t.h3,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"reportValidity"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"triggers reportValidity"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"value"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"triggers when value of the field changes"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"demo",children:"Demo"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:"<jp-date-range>\n</jp-date-range>\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var s=n(7294);const r={},l=s.createContext(r);function i(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);