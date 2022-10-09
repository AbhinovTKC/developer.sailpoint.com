"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[78740],{81429:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=i(87462),r=(i(67294),i(3905));const a={id:"identity-attribute",title:"Identity Attribute",pagination_label:"Identity Attribute",sidebar_label:"Identity Attribute",sidebar_class_name:"identityAttribute",keywords:["transforms","operations","identity","attribute"],description:"Get a user's identity attribute's value.",slug:"/docs/transforms/operations/identity-attribute",tags:["Transforms","Transform Operations"]},s=void 0,o={unversionedId:"docs/identity-now/transforms/operations/identity-attribute",id:"docs/identity-now/transforms/operations/identity-attribute",title:"Identity Attribute",description:"Get a user's identity attribute's value.",source:"@site/products/idn/docs/identity-now/transforms/operations/identity-attribute.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/identity-attribute",permalink:"/idn/docs/transforms/operations/identity-attribute",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/identity-attribute.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"Jordan Violet",lastUpdatedAt:1665277322,formattedLastUpdatedAt:"Oct 9, 2022",frontMatter:{id:"identity-attribute",title:"Identity Attribute",pagination_label:"Identity Attribute",sidebar_label:"Identity Attribute",sidebar_class_name:"identityAttribute",keywords:["transforms","operations","identity","attribute"],description:"Get a user's identity attribute's value.",slug:"/docs/transforms/operations/identity-attribute",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Get Reference Identity Attribute",permalink:"/idn/docs/transforms/operations/get-reference-identity-attribute"},next:{title:"Index Of",permalink:"/idn/docs/transforms/operations/index-of"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],d={toc:u};function p(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Use the identity attribute transform to get the value of a user's identity\nattribute. This transform is often useful within a source's account create or\ndisable profile."),(0,r.kt)("admonition",{title:"Other Considerations",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"This transform is ",(0,r.kt)("strong",{parentName:"li"},"not")," intended for use within an another identity profile\nattribute's calculation. Identity attribute calculations are multi-threaded\nprocesses, and there is no guarantee that a specific attribute has current\ndata, or even exists, at the time of calculation within any given transform.\n",(0,r.kt)("em",{parentName:"li"},"Referencing identity attributes within another identity attribute's\ncalculation can lead to identity exceptions.")))),(0,r.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,r.kt)("p",null,"The transform for identity attributes requires the desired identity attribute's\nsystem ",(0,r.kt)("inlineCode",{parentName:"p"},"name,")," along with the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," attributes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "name": "email"\n  },\n  "type": "identityAttribute",\n  "name": "Identity Attribute Transform"\n}\n')),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Required Attributes")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"identityAttribute"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents\nthe name of the transform as it will appear in the UI's dropdown menus."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"attributes.name")," - The system (camel-cased) name of the identity\nattribute to bring in."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether\nthe transform logic should be reevaluated every evening as part of the\nidentity refresh process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the\ninput data passed into the transform logic. If no input is provided, the\ntransform takes its input from the source and attribute combination\nconfigured with the UI.")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"This transform returns a user's SailPoint User Name attribute."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "name": "uid"\n  },\n  "type": "identityAttribute",\n  "name": "Identity Attribute Transform"\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,"This transform returns a user's Employee Number attribute."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "name": "identificationNumber"\n  },\n  "type": "identityAttribute",\n  "name": "Identity Attribute Transform"\n}\n')))}p.isMDXComponent=!0}}]);