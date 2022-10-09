"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[96647],{98646:(t,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var e=i(87462),s=(i(67294),i(3905));const o={id:"linting",title:"Linting",pagination_label:"Linting",sidebar_label:"Linting",sidebar_position:4,sidebar_class_name:"linting",keywords:["connectivity","connectors","linting"],description:"Automatically check your connector source code for programmatic and stylistic errors.",slug:"/docs/saas-connectivity/in-depth/linting",tags:["Connectivity"]},a=void 0,r={unversionedId:"docs/identity-now/saas-connectivity/in-depth/linting",id:"docs/identity-now/saas-connectivity/in-depth/linting",title:"Linting",description:"Automatically check your connector source code for programmatic and stylistic errors.",source:"@site/products/idn/docs/identity-now/saas-connectivity/in-depth/linting.md",sourceDirName:"docs/identity-now/saas-connectivity/in-depth",slug:"/docs/saas-connectivity/in-depth/linting",permalink:"/idn/docs/saas-connectivity/in-depth/linting",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/in-depth/linting.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"}],version:"current",lastUpdatedBy:"Jordan Violet",lastUpdatedAt:1665277322,formattedLastUpdatedAt:"Oct 9, 2022",sidebarPosition:4,frontMatter:{id:"linting",title:"Linting",pagination_label:"Linting",sidebar_label:"Linting",sidebar_position:4,sidebar_class_name:"linting",keywords:["connectivity","connectors","linting"],description:"Automatically check your connector source code for programmatic and stylistic errors.",slug:"/docs/saas-connectivity/in-depth/linting",tags:["Connectivity"]},sidebar:"idnDocs",previous:{title:"Error Handling",permalink:"/idn/docs/saas-connectivity/in-depth/error-handling"},next:{title:"Logging",permalink:"/idn/docs/saas-connectivity/in-depth/logging"}},c={},l=[],d={toc:l};function p(t){let{components:n,...i}=t;return(0,s.kt)("wrapper",(0,e.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"To add linting to your project, simply install the linter using NPM:"),(0,s.kt)("p",null,"`",(0,s.kt)("inlineCode",{parentName:"p"},"npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin")),(0,s.kt)("p",null,"Then add the ",(0,s.kt)("inlineCode",{parentName:"p"},".eslintrc.yml")," file on the project root:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'env:\n  browser: true\n  es2021: true\nextends:\n  - eslint:recommended\n  - plugin:@typescript-eslint/recommended\nparser: "@typescript-eslint/parser"\nparserOptions:\n  ecmaVersion: latest\n  sourceType: module\nplugins:\n  - "@typescript-eslint"\nrules: {}\n')))}p.isMDXComponent=!0}}]);