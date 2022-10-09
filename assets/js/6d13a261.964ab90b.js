"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[6639],{75533:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),s=(a(67294),a(3905));const i={id:"decompose-diacritical-marks",title:"Decompose Diacritial Marks",pagination_label:"Decompose Diacritial Marks",sidebar_label:"Decompose Diacritial Marks",sidebar_class_name:"decomposeDiacriticalMarks",keywords:["transforms","operations","decompose","diacritical","marks"],description:"Clean or standardize symbols used within language.",slug:"/docs/transforms/operations/decompose-diacritical-marks",tags:["Transforms","Transform Operations"]},n=void 0,o={unversionedId:"docs/identity-now/transforms/operations/decompose-diacritical-marks",id:"docs/identity-now/transforms/operations/decompose-diacritical-marks",title:"Decompose Diacritial Marks",description:"Clean or standardize symbols used within language.",source:"@site/products/idn/docs/identity-now/transforms/operations/decompose-diacritical-marks.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/decompose-diacritical-marks",permalink:"/idn/docs/transforms/operations/decompose-diacritical-marks",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/decompose-diacritical-marks.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"Jordan Violet",lastUpdatedAt:1665277322,formattedLastUpdatedAt:"Oct 9, 2022",frontMatter:{id:"decompose-diacritical-marks",title:"Decompose Diacritial Marks",pagination_label:"Decompose Diacritial Marks",sidebar_label:"Decompose Diacritial Marks",sidebar_class_name:"decomposeDiacriticalMarks",keywords:["transforms","operations","decompose","diacritical","marks"],description:"Clean or standardize symbols used within language.",slug:"/docs/transforms/operations/decompose-diacritical-marks",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Date Math",permalink:"/idn/docs/transforms/operations/date-math"},next:{title:"E.164 Phone",permalink:"/idn/docs/transforms/operations/e164-phone"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"Use the decompose diacritical marks transform to clean or standardize symbols\nused within language to inform the reader how to say or pronounce a letter.\nThese symbols are often incompatible with downstream applications and must be\nstandardized to another character set such as ASCII."),(0,s.kt)("p",null,"The following are examples of diacritical marks:"),(0,s.kt)("blockquote",null,(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"\u0100"),(0,s.kt)("li",{parentName:"ul"},"\u0108"),(0,s.kt)("li",{parentName:"ul"},"\u0147"),(0,s.kt)("li",{parentName:"ul"},"\u0174"))),(0,s.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,s.kt)("p",null,"The transform for decompose diacritical marks requires only the transform's\n",(0,s.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"name")," attributes:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "decomposeDiacriticalMarks",\n  "name": "Decompose Diacritical Marks Transform"\n}\n')),(0,s.kt)("h2",{id:"attributes"},"Attributes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Required Attributes")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,s.kt)("inlineCode",{parentName:"li"},"decomposeDiacriticalMarks"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents\nthe name of the transform as it will appear in the UI's dropdown menus."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,s.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether\nthe transform logic should be reevaluated every evening as part of the\nidentity refresh process."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the\ninput data passed into the transform logic. If no input is provided, the\ntransform takes its input from the source and attribute combination\nconfigured with the UI.")))),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "\u0100ric"\nOutput: "Aric"\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "decomposeDiacriticalMarks",\n  "name": "Test Decompose Diacritical Marks Transform"\n}\n')),(0,s.kt)("hr",null),(0,s.kt)("p",null,"\xa0"),(0,s.kt)("p",null,'This transform takes the user\'s "LastName" attribute from the "HR Source" and\nreplaces any diacritical marks with ASCII-compatible values.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "Dub\xe7ek"\nOutput: "Dubcek"\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "LastName"\n      },\n      "type": "accountAttribute"\n    }\n  },\n  "type": "decomposeDiacriticalMarks",\n  "name": "Decompose Diacritical Marks Transform"\n}\n')))}c.isMDXComponent=!0}}]);