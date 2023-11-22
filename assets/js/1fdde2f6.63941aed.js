"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[887],{4434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var s=n(5893),r=n(1151);const l={},i="Async Table",d={id:"async-table",title:"Async Table",description:"Description",source:"@site/docs/async-table.md",sourceDirName:".",slug:"/async-table",permalink:"/web-components/docs/async-table",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Alert",permalink:"/web-components/docs/alert"},next:{title:"Button",permalink:"/web-components/docs/button"}},c={},h=[{value:"Description",id:"description",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"<code>TableHeader</code>",id:"tableheader",level:4},{value:"Properties",id:"properties",level:5},{value:"TablePipe",id:"tablepipe",level:4},{value:"<code>TableSort</code>",id:"tablesort",level:4},{value:"Properties",id:"properties-1",level:5},{value:"<code>TableService</code>",id:"tableservice",level:4},{value:"Properties",id:"properties-2",level:5},{value:"Slots",id:"slots",level:3},{value:"Methods",id:"methods",level:3},{value:"Events",id:"events",level:3}];function x(e){const t={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"async-table",children:"Async Table"}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"<jp-async-table>"})," is a table component that loads its data asynchronously."]}),"\n",(0,s.jsx)(t.h3,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Name"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Required"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Type"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"headers"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"#tableheader",children:(0,s.jsx)(t.code,{children:"TableHeader[]"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"column names"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"sort"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"#tablesort",children:(0,s.jsx)(t.code,{children:"TableSort"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"current sorting state of the table"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"service"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"#tableservice",children:(0,s.jsx)(t.code,{children:"TableService"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"table data service"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsx)(t.h4,{id:"tableheader",children:(0,s.jsx)(t.code,{children:"TableHeader"})}),"\n",(0,s.jsx)(t.p,{children:"Defines the structure of a table header."}),"\n",(0,s.jsx)(t.h5,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Name"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Required"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Type"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"label"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"title for the table header"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"key"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"used for identifying the corresponding data field"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"sortable"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"determines if the table column is sortable"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"sortMethod"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"function"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["used for custom sorting with ascending ( ",(0,s.jsx)(t.em,{children:"'asc'"})," ) or descending ( ",(0,s.jsx)(t.em,{children:"'desc'"})," ) direction"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"pipes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"#tablepipe",children:(0,s.jsx)(t.code,{children:"TablePipe"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"used for transforming table data"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"fallback"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"any"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"optional value used as a replacement if the specific value isn't available"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h4,{id:"tablepipe",children:"TablePipe"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"value"})," (required, type: ",(0,s.jsx)(t.code,{children:"any"}),") - represents a data element"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"row"})," (type: ",(0,s.jsx)(t.code,{children:"any"}),") - reference to the entire data row"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"index"})," (type: ",(0,s.jsx)(t.code,{children:"number"}),") - numerical position in the table"]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h4,{id:"tablesort",children:(0,s.jsx)(t.code,{children:"TableSort"})}),"\n",(0,s.jsx)(t.p,{children:"Defines the sorting configuration of data."}),"\n",(0,s.jsx)(t.h5,{id:"properties-1",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Name"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Required"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Type"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"key"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"used for describing the data field by which items are sorted"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"direction"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.code,{children:"asc"})," or ",(0,s.jsx)(t.code,{children:"desc"})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"determines if the sorting order is ascendant or descendant"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h4,{id:"tableservice",children:(0,s.jsx)(t.code,{children:"TableService"})}),"\n",(0,s.jsx)(t.p,{children:"Defines methods for fetching and loading more table data."}),"\n",(0,s.jsx)(t.h5,{id:"properties-2",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Name"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Type"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"get"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"function"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"retrieves data with optional sorting and returns a promise containing data rows"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"loadMore"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"function"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"loads additional data with optional sorting and returns a promise containing rows of data"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h3,{id:"slots",children:"Slots"}),"\n",(0,s.jsx)(t.p,{children:"This component does not have any slots."}),"\n",(0,s.jsx)(t.h3,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(t.p,{children:"This component does not have any methods."}),"\n",(0,s.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"rowClick"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"triggers when a row is clicked"}),"\n"]}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var s=n(7294);const r={},l=s.createContext(r);function i(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);