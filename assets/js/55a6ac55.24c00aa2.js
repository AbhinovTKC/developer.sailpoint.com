"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[9684],{50649:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=s(87462),n=(s(67294),s(3905)),a=s(52991),c=s(53438);const i={id:"access-requests",title:"Access Requests",description:"Access Requests",custom_edit_url:null},o=void 0,l={unversionedId:"api/v3/access-requests",id:"api/v3/access-requests",title:"Access Requests",description:"Access Requests",source:"@site/products/idn/api/v3/access-requests.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/access-requests",permalink:"/idn/api/v3/access-requests",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"access-requests",title:"Access Requests",description:"Access Requests",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get the number of access-requests-approvals",permalink:"/idn/api/v3/approval-summary"},next:{title:"Submit an Access Request",permalink:"/idn/api/v3/create-access-request"}},u={},d=[],p={toc:d};function m(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use this API to implement and customize access request functionality.\nWith this functionality in place, users can request access to applications, entitlements, or roles, and managers can request that team members' access be revoked.\nThis allows users to get access to the tools they need quickly and securely, and it allows managers to take away access to those tools. "),(0,n.kt)("p",null,"IdentityNow's Access Request service allows end users to request access that requires approval before it can be granted to users and enables qualified users to review those requests and approve or deny them."),(0,n.kt)("p",null,"In the Request Center in IdentityNow, users can view available applications, roles, and entitlements and request access to them.\nIf the requested tools requires approval, the requests appear as 'Pending' under the My Requests tab until the required approver approves, rejects, or cancels them. "),(0,n.kt)("p",null,"Users can use My Requests to track and/or cancel the requests."),(0,n.kt)("p",null,"In My Team on the IdentityNow Home, managers can submit requests to revoke their team members' access.\nThey can use the My Requests tab under Request Center to track and/or cancel the requests."),(0,n.kt)("p",null,"Refer to the following link for more information about access requests:"),(0,n.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0},52991:(e,t,s)=>{s.d(t,{Z:()=>v});var r=s(67294),n=s(86010),a=s(53438),c=s(39960),i=s(13919),o=s(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function p(e){let{href:t,children:s}=e;return r.createElement(c.Z,{href:t,className:(0,n.Z)("card padding--lg",l)},s)}function m(e){let{href:t,icon:s,title:a,description:c}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,n.Z)("text--truncate",u),title:a},s," ",a),c&&r.createElement("p",{className:(0,n.Z)("text--truncate",d),title:c},c))}function h(e){let{item:t}=e;const s=(0,a.Wl)(t);return s?r.createElement(m,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function q(e){var t;let{item:s}=e;const n=(0,i.Z)(s.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,a.xz)(null!=(t=s.docId)?t:void 0);return r.createElement(m,{href:s.href,icon:n,title:s.label,description:null==c?void 0:c.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(q,{item:t});case"category":return r.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){let{items:t,className:s}=e;return r.createElement("section",{className:(0,n.Z)("row",s)},function(e){return e.filter((e=>"category"!==e.type||!!(0,a.Wl)(e)))}(t).map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}}}]);