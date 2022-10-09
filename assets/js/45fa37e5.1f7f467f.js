"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[73708],{49022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),i=n(65488),o=n(85162);const s={id:"saas-configuration",title:"SaaS Configuration",pagination_label:"SaaS Configuration",sidebar_position:3,sidebar_class_name:"saasConfiguration",keywords:["configuration"],description:"Use SaaS Configuration APIs to import and export configurations.",slug:"/docs/saas-configuration",tags:["SaaS Configuration"]},l=void 0,p={unversionedId:"docs/identity-now/saas-configuration",id:"docs/identity-now/saas-configuration",title:"SaaS Configuration",description:"Use SaaS Configuration APIs to import and export configurations.",source:"@site/products/idn/docs/identity-now/saas-configuration.mdx",sourceDirName:"docs/identity-now",slug:"/docs/saas-configuration",permalink:"/idn/docs/saas-configuration",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-configuration.mdx",tags:[{label:"SaaS Configuration",permalink:"/idn/tags/saa-s-configuration"}],version:"current",lastUpdatedBy:"Jordan Violet",lastUpdatedAt:1665277322,formattedLastUpdatedAt:"Oct 9, 2022",sidebarPosition:3,frontMatter:{id:"saas-configuration",title:"SaaS Configuration",pagination_label:"SaaS Configuration",sidebar_position:3,sidebar_class_name:"saasConfiguration",keywords:["configuration"],description:"Use SaaS Configuration APIs to import and export configurations.",slug:"/docs/saas-configuration",tags:["SaaS Configuration"]},sidebar:"idnDocs",previous:{title:"Source Account Updated",permalink:"/idn/docs/event-triggers/triggers/source-account-updated"},next:{title:"SaaS Connectivity",permalink:"/idn/docs/saas-connectivity"}},d={},c=[{value:"Audience",id:"audience",level:2},{value:"Supported Objects",id:"supported-objects",level:2},{value:"Exporting Configurations",id:"exporting-configurations",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Process",id:"process",level:3},{value:"Importing Configurations",id:"importing-configurations",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Process",id:"process-1",level:3},{value:"API Reference Guide",id:"api-reference-guide",level:2},{value:"List Configuration Objects",id:"list-configuration-objects",level:3},{value:"Export Objects",id:"export-objects",level:3},{value:"Export Status",id:"export-status",level:3},{value:"Export Results",id:"export-results",level:3},{value:"Import Objects",id:"import-objects",level:3},{value:"Import Status",id:"import-status",level:3},{value:"Import Results",id:"import-results",level:3}],u={toc:c};function m(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is a guide about using the SailPoint SaaS Configuration APIs to import\nconfigurations into and export configurations from the SailPoint SaaS system.\nUse these APIs to get configurations in bulk in support of environmental\npromotion, go-live, or tenant-to-tenant configuration management processes and\npipelines."),(0,r.kt)("p",null,"For more details around how to manage configurations, refer to\n",(0,r.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/t5/IdentityNow-Articles/SailPoint-SaaS-Change-Management-and-Deployment-Best-Practices/ta-p/189871"},"SailPoint SaaS Change Management and Deployment Best Practices"),"."),(0,r.kt)("h2",{id:"audience"},"Audience"),(0,r.kt)("p",null,"This document is intended for technically proficient administrators,\nimplementers, integrators or even developers. No coding experience is necessary,\nbut being able to understand JSON data structures and make REST API web-service\ncalls is necessary to fully understand this guide."),(0,r.kt)("h2",{id:"supported-objects"},"Supported Objects"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Object")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Object Type")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Export")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Import")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Event Trigger Subscriptions"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TRIGGER_SUBSCRIPTION")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("img",{parentName:"td",src:"https://pf-emoji-service--cdn.us-east-1.prod.public.atl-paas.net/atlassian/check_mark_32.png",alt:":check_mark:"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("img",{parentName:"td",src:"https://pf-emoji-service--cdn.us-east-1.prod.public.atl-paas.net/atlassian/check_mark_32.png",alt:":check_mark:"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Identity Profiles"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"IDENTITY_PROFILE")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("img",{parentName:"td",src:"https://pf-emoji-service--cdn.us-east-1.prod.public.atl-paas.net/atlassian/check_mark_32.png",alt:":check_mark:"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("img",{parentName:"td",src:"https://pf-emoji-service--cdn.us-east-1.prod.public.atl-paas.net/atlassian/check_mark_32.png",alt:":check_mark:"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Rules"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"RULE")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("img",{parentName:"td",src:"https://pf-emoji-service--cdn.us-east-1.prod.public.atl-paas.net/atlassian/check_mark_32.png",alt:":check_mark:"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("img",{parentName:"td",src:"https://pf-emoji-service--cdn.us-east-1.prod.public.atl-paas.net/atlassian/check_mark_32.png",alt:":check_mark:"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Sources"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SOURCE")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("img",{parentName:"td",src:"https://pf-emoji-service--cdn.us-east-1.prod.public.atl-paas.net/atlassian/check_mark_32.png",alt:":check_mark:"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("img",{parentName:"td",src:"https://pf-emoji-service--cdn.us-east-1.prod.public.atl-paas.net/atlassian/check_mark_32.png",alt:":check_mark:"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Transforms"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TRANSFORM")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("img",{parentName:"td",src:"https://pf-emoji-service--cdn.us-east-1.prod.public.atl-paas.net/atlassian/check_mark_32.png",alt:":check_mark:"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("img",{parentName:"td",src:"https://pf-emoji-service--cdn.us-east-1.prod.public.atl-paas.net/atlassian/check_mark_32.png",alt:":check_mark:"}))))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The available supported objects are also available via REST API! See List\nConfiguration Objects in the ",(0,r.kt)("strong",{parentName:"p"},"API Reference")," section of this document.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Rule Import and Export -")," Rules can be exported from one tenant and imported\ninto another. Cloud rules have already been reviewed and installed in other\ntenants, and connector rules do not require a rule review. During the import and\nexport process, rules cannot be changed in the migration process because these\nare validated by the usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"jwsHeader")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"jwsSignature")," in the object."),(0,r.kt)("h2",{id:"exporting-configurations"},"Exporting Configurations"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You must have tenant administrator credentials (",(0,r.kt)("inlineCode",{parentName:"li"},"ORG_ADMIN"),")."),(0,r.kt)("li",{parentName:"ul"},"You must have an understanding of which objects you want to export.")),(0,r.kt)("h3",{id:"process"},"Process"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(70545).Z,width:"2068",height:"972"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Start Export")," - Start the export process by configuring a JSON payload for\nthe export options. This payload will be sent to\n",(0,r.kt)("inlineCode",{parentName:"li"},"POST /beta/sp-config/export"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Response with Export Status")," - An export status will be given in response.\nThis contains a ",(0,r.kt)("inlineCode",{parentName:"li"},"jobId")," and a ",(0,r.kt)("inlineCode",{parentName:"li"},"status")," to be used to subsequently monitor the\nprocess. Initially, this may have a status of ",(0,r.kt)("inlineCode",{parentName:"li"},"NOT_STARTED"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Get Export Status")," - Using the ",(0,r.kt)("inlineCode",{parentName:"li"},"jobId")," from the previous status, call\n",(0,r.kt)("inlineCode",{parentName:"li"},"GET /beta/sp-config/export/{id}")," where the ",(0,r.kt)("inlineCode",{parentName:"li"},"{id}")," is the ",(0,r.kt)("inlineCode",{parentName:"li"},"jobId"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Response with Export Status")," - An export status will be given in response.\nThis contains a ",(0,r.kt)("inlineCode",{parentName:"li"},"jobId")," and a ",(0,r.kt)("inlineCode",{parentName:"li"},"status")," to be used to subsequently monitor the\nprocess. After a period of time, the process ",(0,r.kt)("inlineCode",{parentName:"li"},"status")," should move to either\n",(0,r.kt)("inlineCode",{parentName:"li"},"COMPLETE")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"FAILED"),". Depending on the amount of objects being exported,\nthis could take awhile. It may be ncessary to iterate over steps 3 and 4\nuntil the status reflects a completion. If it takes too long, the export\nprocess may expire."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Get Export Results")," - Once the status is ",(0,r.kt)("inlineCode",{parentName:"li"},"COMPLETE"),", download the export\nresults by calling ",(0,r.kt)("inlineCode",{parentName:"li"},"GET /beta/sp-config/export/{id}/download")," where the\n",(0,r.kt)("inlineCode",{parentName:"li"},"{id}")," is the ",(0,r.kt)("inlineCode",{parentName:"li"},"jobId"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Response with Export Results")," - In response, the export process will\nproduce a set of JSON objects you can download as an export result set. These\nwill reflect the objects that were selected in the export options earlier.")),(0,r.kt)("h2",{id:"importing-configurations"},"Importing Configurations"),(0,r.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Need to have credentials as a tenant administrator (",(0,r.kt)("inlineCode",{parentName:"li"},"ORG_ADMIN"),")"),(0,r.kt)("li",{parentName:"ul"},"Prepare any objects to be imported into the system, as well as import options.")),(0,r.kt)("h3",{id:"process-1"},"Process"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(89190).Z,width:"2068",height:"939"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Start Import")," - Start the import process by configuring a JSON payload for\nthe import options. This will then be sent to ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /beta/sp-config/import"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Response with Import Status")," - An import status will be given in response.\nThis contains a ",(0,r.kt)("inlineCode",{parentName:"li"},"jobId")," and a ",(0,r.kt)("inlineCode",{parentName:"li"},"status")," to be used to subsequently monitor the\nprocess. Initially this might have a status of ",(0,r.kt)("inlineCode",{parentName:"li"},"NOT_STARTED"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Get Import Status")," - Using the ",(0,r.kt)("inlineCode",{parentName:"li"},"jobId")," from the previous status, call\n",(0,r.kt)("inlineCode",{parentName:"li"},"GET /beta/sp-config/import/{id}")," where the ",(0,r.kt)("inlineCode",{parentName:"li"},"{id}")," is the ",(0,r.kt)("inlineCode",{parentName:"li"},"jobId"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Response with Import Status")," - An import status will be given in response.\nThis contains a ",(0,r.kt)("inlineCode",{parentName:"li"},"jobId")," and a ",(0,r.kt)("inlineCode",{parentName:"li"},"status")," to be used to subsequently monitor the\nprocess. After a period of time, the process ",(0,r.kt)("inlineCode",{parentName:"li"},"status")," will move to either\n",(0,r.kt)("inlineCode",{parentName:"li"},"COMPLETE")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"FAILED"),". Depending on the amount of objects being imported,\nthis could take awhile. It may be necessary to iterate over steps 3 and 4\nuntil the status reflects a completion. If it takes too long, the import\nprocess may expire."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Get Import Results")," - Once the status is ",(0,r.kt)("inlineCode",{parentName:"li"},"COMPLETE"),", download the import\nresults by calling ",(0,r.kt)("inlineCode",{parentName:"li"},"GET /beta/sp-config/import/{id}/download")," where the\n",(0,r.kt)("inlineCode",{parentName:"li"},"{id}")," is the ",(0,r.kt)("inlineCode",{parentName:"li"},"jobId"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Response with Import Results")," - In response, the import process should\nproduce listing of object that successfully imported, as well as any errors,\nwarnings, or information about the import process. This result set will\nreflect the objects that were selected to be imported earlier.")),(0,r.kt)("h2",{id:"api-reference-guide"},"API Reference Guide"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"REST API End-Point")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"List Config Objects"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"GET /beta/sp-config/config-objects"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Export Objects"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"POST /beta/sp-config/export"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Export Status"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"GET /beta/sp-config/export/{id}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Export Results"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"GET /beta/sp-config/export/{id}/download"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Import Objects"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"POST /beta/sp-config/import"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Import Status"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"GET /beta/sp-config/import/{id}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Import Results"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"GET /beta/sp-config/import/{id}/download"))))),(0,r.kt)("h3",{id:"list-configuration-objects"},"List Configuration Objects"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description")),(0,r.kt)("p",null,"Lists all available objects that can be imported and exported into the system."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"GET /beta/sp-config/config-objects\nAuthorization: Bearer {token}\n"))),(0,r.kt)(o.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'200 OK\nContent-Type: application/json\n\n[\n    {\n        "objectType": "SOURCE",\n        "resolveByIdUrl": {\n            "url": "diana://v3/sources/sources/$id",\n            "query": null\n        },\n        "resolveByNameUrl": {\n            "url": "diana://v3/sources/sources/",\n            "query": {\n                "filters": "name eq \\"$name\\""\n            }\n        },\n        "exportUrl": "diana://v3/sources/sources/export",\n        "exportLimit": 10,\n        "importUrl": "diana://v3/sources/sources/import",\n        "importLimit": 10,\n        "referenceExtractors": null,\n        "signatureRequired": false\n    },\n    {\n        "objectType": "TRIGGER_SUBSCRIPTION",\n        "resolveByIdUrl": {\n            "url": "ets://trigger-subscriptions/$id",\n            "query": null\n        },\n        "resolveByNameUrl": {\n            "url": "ets://trigger-subscriptions/",\n            "query": {\n                "filters": "name eq \\"$name\\""\n            }\n        },\n        "exportUrl": "ets://trigger-subscriptions/export",\n        "exportLimit": 10,\n        "importUrl": "ets://trigger-subscriptions/import",\n        "importLimit": 10,\n        "referenceExtractors": null,\n        "signatureRequired": false\n    },\n    {\n        "objectType": "RULE",\n        "resolveByIdUrl": {\n            "url": "rms://rules/$id",\n            "query": null\n        },\n        "resolveByNameUrl": {\n            "url": "rms://rules",\n            "query": {\n                "filters": "name eq \\"$name\\""\n            }\n        },\n        "exportUrl": "rms://rules/export",\n        "exportLimit": 10,\n        "importUrl": "rms://rules/import",\n        "importLimit": 10,\n        "referenceExtractors": null,\n        "signatureRequired": true\n    },\n    {\n        "objectType": "TRANSFORM",\n        "resolveByIdUrl": {\n            "url": "trams://v3/transforms/$id",\n            "query": null\n        },\n        "resolveByNameUrl": {\n            "url": "trams://v3/transforms",\n            "query": {\n                "name": "$name"\n            }\n        },\n        "exportUrl": "trams://v3/export-transforms",\n        "exportLimit": 10,\n        "importUrl": "trams://v3/import-transforms",\n        "importLimit": 10,\n        "referenceExtractors": null,\n        "signatureRequired": false\n    }\n]\n')))),(0,r.kt)("h3",{id:"export-objects"},"Export Objects"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description")),(0,r.kt)("p",null,"Starts an export process to export selected objects from the system."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'POST /beta/sp-config/export\nAuthorization: Bearer {token}\nContent-Type: application/json\n\n{\n  "description": "Export from Neil\'s SailPoint tenant",\n  "excludeTypes": [\n    "TRIGGER_SUBSCRIPTION"\n  ],\n  "includeTypes": [\n    "SOURCE",\n    "RULE",\n    "TRANSFORM"\n  ],\n  "objectOptions": {\n    "SOURCE": {\n      "includedIds": [\n      ],\n      "includedNames": [\n        "Active Directory"\n      ]\n    },\n    "RULE": {\n      "includedIds": [\n      ],\n      "includedNames": [\n        "JDBCProvisioning Rule Adapter"\n      ]\n    },\n    "TRANSFORM": {\n      "includedIds": [\n      ],\n      "includedNames": [\n          "Calculate Display Name",\n        "Default Email",\n        "Determine Email",\n        "Account Status to Lifecycle State"\n      ]\n    }\n  }\n}\n'))),(0,r.kt)(o.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'202 Accepted\nContent-Type: application/json\n\n{\n    "jobId": "19169053-66d2-40c6-8772-9e2bf55edcf6",\n    "status": "NOT_STARTED",\n    "type": "EXPORT",\n    "message": null,\n    "description": "Export from Neil\'s SailPoint tenant",\n    "expiration": "2021-09-03T15:55:29.127Z",\n    "created": "2021-08-27T15:55:29.127Z",\n    "modified": "2021-08-27T15:55:29.127Z",\n    "completed": null\n}\n')))),(0,r.kt)("h3",{id:"export-status"},"Export Status"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description")),(0,r.kt)("p",null,"Gets the status of an export process."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"GET /beta/sp-config/export/{id}\nAuthorization: Bearer {token}\n"))),(0,r.kt)(o.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'200 OK\nContent-Type: application/json\n\n{\n    "jobId": "19169053-66d2-40c6-8772-9e2bf55edcf6",\n    "status": "COMPLETE",\n    "type": "EXPORT",\n    "message": null,\n    "description": "Export from Neil\'s SailPoint tenant",\n    "expiration": "2021-09-03T15:55:29Z",\n    "created": "2021-08-27T15:55:29.127Z",\n    "modified": "2021-08-27T15:55:37.59Z",\n    "completed": "2021-08-27T15:55:37.583Z"\n}\n')))),(0,r.kt)("h3",{id:"export-results"},"Export Results"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description")),(0,r.kt)("p",null,"Gets the results of an export process."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"GET /beta/sp-config/export/{id}/download\nAuthorization: Bearer {token}\n"))),(0,r.kt)(o.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'200 OK\nContent-Type: application/json\n\n{\n    "version": 1,\n    "timestamp": "2021-08-27T15:55:37.37883Z",\n    "tenant": "neil-test",\n    "description": "Export from Neil\'s SailPoint tenant",\n    "options": {\n        "excludeTypes": [\n            "TRIGGER_SUBSCRIPTION"\n        ],\n        "includeTypes": [\n            "SOURCE",\n            "RULE",\n            "TRANSFORM"\n        ],\n        "objectOptions": {\n            "SOURCE": {\n                "includedIds": [],\n                "includedNames": [\n                    "Active Directory"\n                ]\n            },\n            "RULE": {\n                "includedIds": [],\n                "includedNames": [\n                    "JDBCProvisioning Rule Adapter"\n                ]\n            },\n            "TRANSFORM": {\n                "includedIds": [],\n                "includedNames": [\n                    "Calculate Display Name"\n                ]\n            }\n        }\n    },\n    "objects": [{\n            "version": 1,\n            "self": {\n                "name": "Active Directory [source-101921]",\n                "id": "2c91808363dae20e0163dbef5a7d2de9",\n                "type": "SOURCE"\n            },\n            "object": {\n                "id": "2c91808363dae20e0163dbef5a7d2de9",\n                "name": "Active Directory",\n                "type": "Active Directory - Direct",\n                "connectorClass": "sailpoint.connector.ADLDAPConnector",\n                "connectorScriptName": "active-directory",\n                "description": "SailPoint Active Directory",\n                "deleteThreshold": 10.0,\n                "provisionAsCsv": false,\n                "owner": {\n                    "type": "IDENTITY",\n                    "id": "ff80818155fe8c080155fe8d925b0316",\n                    "name": "slpt.services"\n                },\n                ...\n            }\n        },\n        {\n            "version": 1,\n            "self": {\n                "name": "JDBCProvisioning Rule Adapter",\n                "id": "ff8081815bc9f6c6015bd491edbe0023",\n                "type": "RULE"\n            },\n            "object": {\n                "description": null,\n                "type": "JDBCProvision",\n                "signature": {\n                    "input": [],\n                    "output": null\n                },\n                "sourceCode": {\n                    "version": "1.0",\n                    "script": "\\n\\t  \\nimport sailpoint.services.JDBCProvisioning;\\nreturn JDBCProvisioning.provision( application, schema, connection, plan );\\n\\t"\n                },\n                "attributes": null,\n                "id": "ff8081815bc9f6c6015bd491edbe0023",\n                "name": "JDBCProvisioning Rule Adapter",\n                "created": "2017-05-04T17:46:25.086Z",\n                "modified": "2018-06-29T15:45:42.375Z"\n            },\n            "jwsHeader": "eyJhbGciOiJFUzI1NiJ9",\n            "jwsSignature": "cbvjeLOIJajrJBs1dLc60p8rJ46wYnUYyEAG1ECPn7ahIvy9G109oyjfNAGkR6eguewW2NEzP0mJcK6vOEtbfw"\n        },\n        {\n            "version": 1,\n            "self": {\n                "name": "Calculate Display Name",\n                "id": "24e5ad57-c12d-4e62-92fe-88c40b39ad6b",\n                "type": "TRANSFORM"\n            },\n            "object": {\n                "id": "24e5ad57-c12d-4e62-92fe-88c40b39ad6b",\n                "name": "Calculate Display Name",\n                "type": "trim",\n                "attributes": {\n                    "input": {\n                        "attributes": {\n                            "firstName": {\n                                "attributes": {\n                                    "name": "firstname"\n                                },\n                                "type": "identityAttribute"\n                            },\n                            "lastName": {\n                                "attributes": {\n                                    "name": "lastname"\n                                },\n                                "type": "identityAttribute"\n                            },\n                            "department": {\n                                "attributes": {\n                                    "name": "department"\n                                },\n                                "type": "identityAttribute"\n                            },\n                            "type": {\n                                "attributes": {\n                                    "name": "employeeType"\n                                },\n                                "type": "identityAttribute"\n                            },\n                            "value": "#if ( $type == \'E\' ) $lastName $firstName $department #elseif ( $type == \'H\' ) $lastName $firstName $department #elseif ( $type == \'S\' ) $lastName $firstName $department #else $lastName $firstName (Contractor) #end"\n                        },\n                        "type": "static"\n                    }\n                },\n                "internal": false\n            }\n        }\n    ]\n}\n')))),(0,r.kt)("h3",{id:"import-objects"},"Import Objects"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description")),(0,r.kt)("p",null,"Starts an import process to import selected objects into the system."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"POST /beta/sp-config/import\nAuthorization: Bearer {token}\nContent-Type: multipart/form-data\n\ndata: (File) data.json\n"))),(0,r.kt)(o.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'202 Accepted\nContent-Type: application/json\n\n{\n    "jobId": "333e8c69-2c38-4caa-9212-ba62b4f2623d",\n    "status": "NOT_STARTED",\n    "type": "IMPORT",\n    "message": null,\n    "description": null,\n    "expiration": "2021-06-11T02:59:56.569Z",\n    "created": "2021-06-04T02:59:56.569Z",\n    "modified": "2021-06-04T02:59:56.57Z",\n    "completed": null\n}\n')))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Import also has a \u201cpreview\u201d option you can use to see what an import will look\nlike without actually having to import and change your tenant. Any errors\ndiscovered during reference or resource resolution will be provided. To use\nthis, simply set query option ",(0,r.kt)("inlineCode",{parentName:"p"},"preview")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",{parentName:"admonition"},"Example: POST /beta/sp-config/import?preview=true")),(0,r.kt)("h3",{id:"import-status"},"Import Status"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description")),(0,r.kt)("p",null,"Gets the status of an import process."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"GET /beta/sp-config/import/{id}\nAuthorization: Bearer {token}\n"))),(0,r.kt)(o.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'200 OK\nContent-Type: application/json\n\n{\n    "jobId": "333e8c69-2c38-4caa-9212-ba62b4f2623d",\n    "status": "FAILED",\n    "type": "IMPORT",\n    "message": "Import halted because of errors. Download results for error details.",\n    "description": null,\n    "expiration": "2021-06-11T02:59:56Z",\n    "created": "2021-06-04T02:59:56.569Z",\n    "modified": "2021-06-04T02:59:57.568Z",\n    "completed": "2021-06-04T02:59:57.563Z"\n}\n')))),(0,r.kt)("h3",{id:"import-results"},"Import Results"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description")),(0,r.kt)("p",null,"Gets the results of an import process."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"GET /beta/sp-config/import/{id}/download\nAuthorization: Bearer {token}\n"))),(0,r.kt)(o.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'200 OK\nContent-Type: application/json\n\n{\n    "results": {\n        "TRIGGER_SUBSCRIPTION": {\n            "infos": [],\n            "warnings": [],\n            "errors": [\n                {\n                    "key": null,\n                    "text": "There was an error importing \'TRIGGER_SUBSCRIPTION\' with name \'Access Request sub\' and id \'f69b6ae7-0709-4432-becd-0a98bb802c3a\' Exception com.sailpoint.ets.exception.DuplicatedSubscriptionException",\n                    "detail": null\n                }\n            ],\n            "importedObjects": [\n                {\n                    "name": "test",\n                    "id": "4dd6fab1-1a5b-4928-a2e7-a3926f818bc7",\n                    "type": "TRIGGER_SUBSCRIPTION"\n                },\n                {\n                    "name": "test identity changed",\n                    "id": "03dae3d2-2482-4818-92c4-01b0e70e2408",\n                    "type": "TRIGGER_SUBSCRIPTION"\n                }\n            ]\n        }\n    }\n}\n')))))}m.isMDXComponent=!0},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),i=n(86010),o=n(72389),s=n(67392),l=n(7094),p=n(12466);const d="tabList__CuJ",c="tabItem_LNqP";function u(e){var t,n;const{lazy:o,block:u,defaultValue:m,values:k,groupId:g,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,s.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==y&&!N.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+N.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:T}=(0,l.U)(),[C,I]=(0,r.useState)(y),S=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=g){const e=v[g];null!=e&&e!==C&&N.some((t=>t.value===e))&&I(e)}const R=e=>{const t=e.currentTarget,n=S.indexOf(t),a=N[n].value;a!==C&&(x(t),I(a),null!=g&&T(g,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=S.indexOf(e.currentTarget)+1;n=null!=(a=S[t])?a:S[0];break}case"ArrowLeft":{var r;const t=S.indexOf(e.currentTarget)-1;n=null!=(r=S[t])?r:S[S.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},b)},N.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>S.push(e),onKeyDown:E,onFocus:R,onClick:R},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(f.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},70545:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sp-config-export-ef674385a0e05097681a45cc6d18cb7a.png"},89190:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sp-config-import-e8aeeddb08f24f78e36c5a6fda52f47a.png"}}]);