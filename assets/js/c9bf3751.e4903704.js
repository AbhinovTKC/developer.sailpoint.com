"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[9555],{50150:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=a(87462),i=(a(67294),a(3905)),o=(a(92272),a(65488)),l=a(85162);const s={id:"identity-now-beta-api",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'IdentityNow Beta API' (identity-now-beta-api)"},r=void 0,u={unversionedId:"api/beta/identity-now-beta-api",id:"api/beta/identity-now-beta-api",title:"identity-now-beta-api",description:"Version: 3.1.0-beta",source:"@site/products/idn/api/beta/identity-now-beta-api.info.mdx",sourceDirName:"api/beta",slug:"/api/beta/identity-now-beta-api",permalink:"/idn/api/beta/identity-now-beta-api",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'IdentityNow Beta API' (identity-now-beta-api)",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"identity-now-beta-api",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'IdentityNow Beta API' (identity-now-beta-api)"},sidebar:"openApiSidebar",previous:{title:"Beta APIs",permalink:"/idn/api/beta"},next:{title:"Access Profiles",permalink:"/idn/api/beta/access-profiles"}},p={},c=[],d={toc:c};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 3.1.0-beta"),(0,i.kt)("h1",{id:"identitynow-beta-api"},"IdentityNow Beta API"),(0,i.kt)("p",null,"Use these APIs to interact with the IdentityNow platform to achieve repeatable, automated processes with greater scalability. These APIs are in beta and are subject to change. We encourage you to join the SailPoint Developer Community forum at ",(0,i.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/discuss"},"https://developer.sailpoint.com/discuss")," to connect with other developers using our APIs."),(0,i.kt)("div",{style:{marginBottom:"2rem"}},(0,i.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{label:"OAuth 2.0",value:"oauth2",mdxType:"TabItem"},(0,i.kt)("p",null,"OAuth2 Bearer token (JWT). See ",(0,i.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/api/authentication"},"IdentityNow REST API Authentication")," for more information."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Directions for generating a ",(0,i.kt)("a",{parentName:"li",href:"https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens"},"personal access token")),(0,i.kt)("li",{parentName:"ul"},"Directions using ",(0,i.kt)("a",{parentName:"li",href:"https://developer.sailpoint.com/idn/api/authentication#client-credentials-grant-flow"},"client credentials flow")),(0,i.kt)("li",{parentName:"ul"},"Directions for using ",(0,i.kt)("a",{parentName:"li",href:"https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow"},"authorization code flow"))),(0,i.kt)("p",null,"Which authentication method should I choose?  See our ",(0,i.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/api/authentication#which-oauth-20-grant-flow-should-i-use"},"guide")),(0,i.kt)("p",null,"Learn more about how to find your ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenUrl")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"authorizationUrl")," ",(0,i.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/api/authentication#find-your-tenants-oauth-details"},"in our docs")),(0,i.kt)("div",null,(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Security Scheme Type:"),(0,i.kt)("td",null,"oauth2")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"clientCredentials OAuth Flow:"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Token URL: https://tenant.api.identitynow.com/oauth/token"),(0,i.kt)("span",null,"Scopes:"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"sp:scopes:default: default scope"),(0,i.kt)("li",null,"sp:scopes:all: access to all scopes")))),(0,i.kt)("tr",null,(0,i.kt)("th",null,"authorizationCode OAuth Flow:"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Token URL: https://tenant.api.identitynow.com/oauth/token"),(0,i.kt)("p",null,"Authorization URL: https://tenant.identitynow.com/oauth/authorize"),(0,i.kt)("span",null,"Scopes:"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"sp:scopes:default: default scope"),(0,i.kt)("li",null,"sp:scopes:all: access to all scopes")))))))))),(0,i.kt)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,i.kt)("h3",{style:{marginBottom:"0.25rem"}},"Contact"),(0,i.kt)("span",null,"Developer Relations: "),(0,i.kt)("span",null,"URL: ",(0,i.kt)("a",{href:"https://developer.sailpoint.com/discuss/api-help"},"https://developer.sailpoint.com/discuss/api-help"))),(0,i.kt)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,i.kt)("h3",{style:{marginBottom:"0.25rem"}},"Terms of Service"),(0,i.kt)("a",{href:"https://developer.sailpoint.com/discuss/tos"},"https://developer.sailpoint.com/discuss/tos")),(0,i.kt)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,i.kt)("h3",{style:{marginBottom:"0.25rem"}},"License"),(0,i.kt)("a",{href:"https://opensource.org/licenses/MIT"},"MIT")))}m.isMDXComponent=!0},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),i=a(67294),o=a(86010),l=a(72389),s=a(67392),r=a(7094),u=a(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,a;const{lazy:l,block:d,defaultValue:m,values:h,groupId:b,className:k}=e,v=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,s.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)?t:v[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,r.U)(),[I,T]=(0,i.useState)(y),B=[],{blockElementScrollPositionUntilNextRender:A}=(0,u.o5)();if(null!=b){const e=w[b];null!=e&&e!==I&&f.some((t=>t.value===e))&&T(e)}const _=e=>{const t=e.currentTarget,a=B.indexOf(t),n=f[a].value;n!==I&&(A(t),T(n),null!=b&&N(b,String(n)))},D=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=B.indexOf(e.currentTarget)+1;a=null!=(n=B[t])?n:B[0];break}case"ArrowLeft":{var i;const t=B.indexOf(e.currentTarget)-1;a=null!=(i=B[t])?i:B[B.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},k)},f.map((e=>{let{value:t,label:a,attributes:l}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>B.push(e),onKeyDown:D,onFocus:_,onClick:_},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":I===t})}),null!=a?a:t)}))),l?(0,i.cloneElement)(v.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function m(e){const t=(0,l.Z)();return i.createElement(d,(0,n.Z)({key:String(t)},e))}},92272:(e,t,a)=>{a(67294)}}]);