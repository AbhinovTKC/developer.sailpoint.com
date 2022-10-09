"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[50300],{4029:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>h,toc:()=>g});var a=i(87462),n=(i(67294),i(3905)),s=i(26389),r=i(94891),l=i(74933),o=i(47507),m=i(24310),p=i(63303),d=(i(75035),i(85162));const c={id:"get-entitlement-by-id",sidebar_label:"Returns an Entitlement resource based on id.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getEntitlementById",tags:["Entitlements"],description:"The Entitlement resource with matching id is returned.<br /><br />\nAttributes to include in the response can be specified with the attributes query parameter. <br /><br />\nAttributes to exclude from the response can be specified with the excludedAttributes query parameter. <br /><br />\n",parameters:[{name:"entitlementId",in:"path",schema:{type:"string",example:"c0a8019c802d1e5a81802eb2b57e020f"},description:"id of Entitlement resource.",required:!0},{in:"query",name:"attributes",schema:{type:"string",example:"application"},description:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned."},{in:"query",name:"excludedAttributes",schema:{type:"string",example:"name, application"},description:"A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**"}],responses:{200:{description:"Returns a single Entitlement resource based on the id.",content:{"application/json":{schema:{properties:{id:{description:"Unique identifier of the Entitlement.",type:"string",example:"7f00000180281df7818028bfb7d204c1"},descriptions:{description:"A list of localized descriptions of the Entitlement.",type:"object",properties:{locale:{description:"The locale associated with this Entitlement description.",type:"string",example:"en_US"},value:{description:"The description in localized form.",type:"string",example:"<strong>**Employee Database**</strong> <em>target friendly description</em>"}}},displayableName:{description:"Displayable name of the Entitlement.",type:"string",example:"a2a"},type:{description:"Type of the Entitlement.",type:"string",example:"group"},application:{description:"The corresponding Application object of the Entitlement.",type:"array",items:{properties:{value:{description:"The Application associated with the Entitlement.",type:"string",example:"7f00000180281df7818028bfed100826"},$ref:{description:"The URI of the SCIM resource representating the Entitlement application.",type:"string",example:"http://localhost:8080/identityiq/scim/v2/Applications/7f00000180281df7818028bfed100826"},displayName:{description:"The name of the Entitlement Application. OPTIONAL and READ-ONLY.",type:"string",example:"SAP"}}}},owner:{description:"The owner of the Entitlement.",type:"array",items:{properties:{value:{description:"The id of the SCIM resource representing the Entitlement Owner.",type:"string",example:"7f00000180281df7818028bfab930361"},$ref:{description:"The URI of the SCIM resource representing the Entitlement Owner.",type:"string",example:"http://localhost:8080/identityiq/scim/v2/Users/7f00000180281df7818028bfab930361"},displayName:{description:"The displayName of the Entitlement Owner. OPTIONAL and READ-ONLY.",type:"string",example:"Mary Johnson"}}}},requestable:{description:"Flag to indicate this entitlement is requestable.",type:"boolean",example:!0},aggregated:{description:"Flag to indicate this entitlement has been aggregated.",type:"boolean",example:!0},attribute:{description:"Attribute of the Entitlement.",type:"string",example:"memberOf"},value:{description:"Attribute value of the Entitlement.",type:"string",example:"CN=a2a,OU=HierarchicalGroups,OU=DemoData,DC=test,DC=sailpoint,DC=com"},lastRefresh:{description:"The DateTime when the Entitlement was refreshed.",format:"date-time",type:"string",example:"2022-04-14T10:48:01.907-05:00"},lastTargetAggregation:{description:"The date aggregation was last targeted of the Entitlement.",type:"string",format:"date-time",example:"2022-04-14T10:48:01.907-05:00"},classifications:{description:"Classifications of this Entitlement.",type:"object",required:["classification"],properties:{source:{description:"The source of the ObjectClassification.",type:"string",example:"UI"},effective:{description:"Flag indicating this is an effective Classification.",type:"boolean",example:!1},classification:{description:"Classification of this object.",type:"object",properties:{name:{description:"The name of the Classification.",type:"string",example:"ClassificationA"},displayName:{description:"The displayName of the Classification.",type:"string",example:"ClassA"},origin:{description:"The origin of the Classification.",type:"string",example:"FAM Aggregation"},type:{description:"The type of the Classification.",type:"string",example:"Aggregation"}}}}},meta:{type:"object",properties:{created:{description:"DateTime when the Entitlement was created.",type:"string",format:"date-time",example:"2022-04-05T15:52:30.090-05:00"},location:{description:"URL to the Entitlement.",type:"string",example:"http://localhost:8080/identityiq/scim/v2/Entitlements/c0a8019c7ffa186e817ffb80170a0195"},lastModified:{description:"DateTime of Entitlement last modification.",type:"string",format:"date-time",example:"2022-04-05T15:52:30.119-05:00"},version:{description:"Entitlement version.",type:"string",example:'"W"1649191950119"'},resourceType:{description:"Resource type of the metadata subject.",type:"string",example:"Entitlement"}}},schemas:{type:"array",example:["urn:ietf:params:scim:schemas:sailpoint:1.0:Entitlement"]},entitleAuth:{description:"This is an Extended Attribute from Managed Attribute used to describe the authorization level of an Entitlement.",type:"string",example:"None"},entDate:{description:"This is an Extended Attribute from Managed Attribute. The Entitlement DateTime.",type:"string",format:"date-time",example:"2022-04-14T10:44:54.738-05:00"},active:{description:"This is an Extended Attribute from Managed Attribute. Describes if an Entitlement is active.",type:"boolean",example:!1},rank:{description:"This is an Extended Attribute from Managed Attribute.",type:"integer",example:3},rule:{description:"This is an Extended Attribute from Managed Attribute. Used to specify a Rule object for the Entitlement.",type:"string",example:"APLogin-Contractors-Rule"},reviewer:{description:"This is an Extended Attribute from Managed Attribute. The Identity that reviewed the Entitlement.",type:"object",properties:{displayName:{description:"Display name of the Entitlement reviewer.",type:"string",example:"Caroline Lee"},value:{description:"id of the Entitlement reviewer.",type:"string",example:"c0b4568a4fe7458c434ee77f2fad267c"},$ref:{description:"URI reference of the Entitlement reviewer resource.",type:"string",example:"http://localhost:8080/identityiq/scim/v2/Users/c0b4568a4fe7458c434ee77f2fad267c"}}},emails:{description:"This is an Extended Attribute from Managed Attribute. Used to specify the Entitlement owner email.",type:"string",example:"clee@demoexample.com"}}}}}}},method:"get",path:"/Entitlements/{entitlementId}",servers:[{url:"http://localhost:8080/identityiq/scim/v2",description:"IdentityIQ SCIM server basepath and path to API."}],security:[{basicAuth:[]}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},info:{description:"IdentityIQ REST Endpoint Interface Documentation for SCIM\n\n# Authentication\n\n\x3c!-- ReDoc-Inject: <security-definitions> --\x3e",version:"8.3",title:"IdentityIQ SCIM REST API"},postman:{name:"Returns an Entitlement resource based on id.",description:{content:"The Entitlement resource with matching id is returned.<br /><br />\nAttributes to include in the response can be specified with the attributes query parameter. <br /><br />\nAttributes to exclude from the response can be specified with the excludedAttributes query parameter. <br /><br />\n",type:"text/plain"},url:{path:["Entitlements",":entitlementId"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned.",type:"text/plain"},key:"attributes",value:""},{disabled:!1,description:{content:"A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**",type:"text/plain"},key:"excludedAttributes",value:""}],variable:[{disabled:!1,description:{content:"(Required) id of Entitlement resource.",type:"text/plain"},type:"any",value:"",key:"entitlementId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"iiq/api/identity-iq-scim-rest-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns an Entitlement resource based on id.' (get-entitlement-by-id)"},u=void 0,h={unversionedId:"api/get-entitlement-by-id",id:"api/get-entitlement-by-id",title:"get-entitlement-by-id",description:"Returns an Entitlement resource based on id.",source:"@site/products/iiq/api/get-entitlement-by-id.api.mdx",sourceDirName:"api",slug:"/api/get-entitlement-by-id",permalink:"/iiq/api/get-entitlement-by-id",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns an Entitlement resource based on id.' (get-entitlement-by-id)",tags:[],version:"current",frontMatter:{id:"get-entitlement-by-id",sidebar_label:"Returns an Entitlement resource based on id.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getEntitlementById",tags:["Entitlements"],description:"The Entitlement resource with matching id is returned.<br /><br />\nAttributes to include in the response can be specified with the attributes query parameter. <br /><br />\nAttributes to exclude from the response can be specified with the excludedAttributes query parameter. <br /><br />\n",parameters:[{name:"entitlementId",in:"path",schema:{type:"string",example:"c0a8019c802d1e5a81802eb2b57e020f"},description:"id of Entitlement resource.",required:!0},{in:"query",name:"attributes",schema:{type:"string",example:"application"},description:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned."},{in:"query",name:"excludedAttributes",schema:{type:"string",example:"name, application"},description:"A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**"}],responses:{200:{description:"Returns a single Entitlement resource based on the id.",content:{"application/json":{schema:{properties:{id:{description:"Unique identifier of the Entitlement.",type:"string",example:"7f00000180281df7818028bfb7d204c1"},descriptions:{description:"A list of localized descriptions of the Entitlement.",type:"object",properties:{locale:{description:"The locale associated with this Entitlement description.",type:"string",example:"en_US"},value:{description:"The description in localized form.",type:"string",example:"<strong>**Employee Database**</strong> <em>target friendly description</em>"}}},displayableName:{description:"Displayable name of the Entitlement.",type:"string",example:"a2a"},type:{description:"Type of the Entitlement.",type:"string",example:"group"},application:{description:"The corresponding Application object of the Entitlement.",type:"array",items:{properties:{value:{description:"The Application associated with the Entitlement.",type:"string",example:"7f00000180281df7818028bfed100826"},$ref:{description:"The URI of the SCIM resource representating the Entitlement application.",type:"string",example:"http://localhost:8080/identityiq/scim/v2/Applications/7f00000180281df7818028bfed100826"},displayName:{description:"The name of the Entitlement Application. OPTIONAL and READ-ONLY.",type:"string",example:"SAP"}}}},owner:{description:"The owner of the Entitlement.",type:"array",items:{properties:{value:{description:"The id of the SCIM resource representing the Entitlement Owner.",type:"string",example:"7f00000180281df7818028bfab930361"},$ref:{description:"The URI of the SCIM resource representing the Entitlement Owner.",type:"string",example:"http://localhost:8080/identityiq/scim/v2/Users/7f00000180281df7818028bfab930361"},displayName:{description:"The displayName of the Entitlement Owner. OPTIONAL and READ-ONLY.",type:"string",example:"Mary Johnson"}}}},requestable:{description:"Flag to indicate this entitlement is requestable.",type:"boolean",example:!0},aggregated:{description:"Flag to indicate this entitlement has been aggregated.",type:"boolean",example:!0},attribute:{description:"Attribute of the Entitlement.",type:"string",example:"memberOf"},value:{description:"Attribute value of the Entitlement.",type:"string",example:"CN=a2a,OU=HierarchicalGroups,OU=DemoData,DC=test,DC=sailpoint,DC=com"},lastRefresh:{description:"The DateTime when the Entitlement was refreshed.",format:"date-time",type:"string",example:"2022-04-14T10:48:01.907-05:00"},lastTargetAggregation:{description:"The date aggregation was last targeted of the Entitlement.",type:"string",format:"date-time",example:"2022-04-14T10:48:01.907-05:00"},classifications:{description:"Classifications of this Entitlement.",type:"object",required:["classification"],properties:{source:{description:"The source of the ObjectClassification.",type:"string",example:"UI"},effective:{description:"Flag indicating this is an effective Classification.",type:"boolean",example:!1},classification:{description:"Classification of this object.",type:"object",properties:{name:{description:"The name of the Classification.",type:"string",example:"ClassificationA"},displayName:{description:"The displayName of the Classification.",type:"string",example:"ClassA"},origin:{description:"The origin of the Classification.",type:"string",example:"FAM Aggregation"},type:{description:"The type of the Classification.",type:"string",example:"Aggregation"}}}}},meta:{type:"object",properties:{created:{description:"DateTime when the Entitlement was created.",type:"string",format:"date-time",example:"2022-04-05T15:52:30.090-05:00"},location:{description:"URL to the Entitlement.",type:"string",example:"http://localhost:8080/identityiq/scim/v2/Entitlements/c0a8019c7ffa186e817ffb80170a0195"},lastModified:{description:"DateTime of Entitlement last modification.",type:"string",format:"date-time",example:"2022-04-05T15:52:30.119-05:00"},version:{description:"Entitlement version.",type:"string",example:'"W"1649191950119"'},resourceType:{description:"Resource type of the metadata subject.",type:"string",example:"Entitlement"}}},schemas:{type:"array",example:["urn:ietf:params:scim:schemas:sailpoint:1.0:Entitlement"]},entitleAuth:{description:"This is an Extended Attribute from Managed Attribute used to describe the authorization level of an Entitlement.",type:"string",example:"None"},entDate:{description:"This is an Extended Attribute from Managed Attribute. The Entitlement DateTime.",type:"string",format:"date-time",example:"2022-04-14T10:44:54.738-05:00"},active:{description:"This is an Extended Attribute from Managed Attribute. Describes if an Entitlement is active.",type:"boolean",example:!1},rank:{description:"This is an Extended Attribute from Managed Attribute.",type:"integer",example:3},rule:{description:"This is an Extended Attribute from Managed Attribute. Used to specify a Rule object for the Entitlement.",type:"string",example:"APLogin-Contractors-Rule"},reviewer:{description:"This is an Extended Attribute from Managed Attribute. The Identity that reviewed the Entitlement.",type:"object",properties:{displayName:{description:"Display name of the Entitlement reviewer.",type:"string",example:"Caroline Lee"},value:{description:"id of the Entitlement reviewer.",type:"string",example:"c0b4568a4fe7458c434ee77f2fad267c"},$ref:{description:"URI reference of the Entitlement reviewer resource.",type:"string",example:"http://localhost:8080/identityiq/scim/v2/Users/c0b4568a4fe7458c434ee77f2fad267c"}}},emails:{description:"This is an Extended Attribute from Managed Attribute. Used to specify the Entitlement owner email.",type:"string",example:"clee@demoexample.com"}}}}}}},method:"get",path:"/Entitlements/{entitlementId}",servers:[{url:"http://localhost:8080/identityiq/scim/v2",description:"IdentityIQ SCIM server basepath and path to API."}],security:[{basicAuth:[]}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},info:{description:"IdentityIQ REST Endpoint Interface Documentation for SCIM\n\n# Authentication\n\n\x3c!-- ReDoc-Inject: <security-definitions> --\x3e",version:"8.3",title:"IdentityIQ SCIM REST API"},postman:{name:"Returns an Entitlement resource based on id.",description:{content:"The Entitlement resource with matching id is returned.<br /><br />\nAttributes to include in the response can be specified with the attributes query parameter. <br /><br />\nAttributes to exclude from the response can be specified with the excludedAttributes query parameter. <br /><br />\n",type:"text/plain"},url:{path:["Entitlements",":entitlementId"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned.",type:"text/plain"},key:"attributes",value:""},{disabled:!1,description:{content:"A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**",type:"text/plain"},key:"excludedAttributes",value:""}],variable:[{disabled:!1,description:{content:"(Required) id of Entitlement resource.",type:"text/plain"},type:"any",value:"",key:"entitlementId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"iiq/api/identity-iq-scim-rest-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns an Entitlement resource based on id.' (get-entitlement-by-id)"},sidebar:"iiqOpenApiSidebar",previous:{title:"Returns all Entitlement resources.",permalink:"/iiq/api/get-entitlements"},next:{title:"LaunchedWorkflows",permalink:"/iiq/api/launched-workflows"}},f={},g=[{value:"Returns an Entitlement resource based on id.",id:"returns-an-entitlement-resource-based-on-id",level:2}],b={toc:g};function y(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"returns-an-entitlement-resource-based-on-id"},"Returns an Entitlement resource based on id."),(0,n.kt)("p",null,"The Entitlement resource with matching id is returned.","<","br /",">","<","br /",">","\nAttributes to include in the response can be specified with the attributes query parameter. ","<","br /",">","<","br /",">","\nAttributes to exclude from the response can be specified with the excludedAttributes query parameter. ","<","br /",">","<","br /",">"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(l.Z,{className:"paramsItem",param:{name:"entitlementId",in:"path",schema:{type:"string",example:"c0a8019c802d1e5a81802eb2b57e020f"},description:"id of Entitlement resource.",required:!0},mdxType:"ParamsItem"})))),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(l.Z,{className:"paramsItem",param:{in:"query",name:"attributes",schema:{type:"string",example:"application"},description:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned."},mdxType:"ParamsItem"}),(0,n.kt)(l.Z,{className:"paramsItem",param:{in:"query",name:"excludedAttributes",schema:{type:"string",example:"name, application"},description:"A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**"},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Returns a single Entitlement resource based on the id.")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(p.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"Unique identifier of the Entitlement.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"descriptions"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"A list of localized descriptions of the Entitlement.")),(0,n.kt)(m.Z,{collapsible:!1,name:"locale",required:!1,schemaDescription:"The locale associated with this Entitlement description.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"The description in localized form.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{collapsible:!1,name:"displayableName",required:!1,schemaDescription:"Displayable name of the Entitlement.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:"Type of the Entitlement.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"application"),(0,n.kt)("span",{style:{opacity:"0.6"}}," undefined[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"The corresponding Application object of the Entitlement.")),(0,n.kt)(m.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"The Application associated with the Entitlement.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"$ref",required:!1,schemaDescription:"The URI of the SCIM resource representating the Entitlement application.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"displayName",required:!1,schemaDescription:"The name of the Entitlement Application. OPTIONAL and READ-ONLY.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"owner"),(0,n.kt)("span",{style:{opacity:"0.6"}}," undefined[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"The owner of the Entitlement.")),(0,n.kt)(m.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"The id of the SCIM resource representing the Entitlement Owner.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"$ref",required:!1,schemaDescription:"The URI of the SCIM resource representing the Entitlement Owner.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"displayName",required:!1,schemaDescription:"The displayName of the Entitlement Owner. OPTIONAL and READ-ONLY.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{collapsible:!1,name:"requestable",required:!1,schemaDescription:"Flag to indicate this entitlement is requestable.",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"aggregated",required:!1,schemaDescription:"Flag to indicate this entitlement has been aggregated.",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"attribute",required:!1,schemaDescription:"Attribute of the Entitlement.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"Attribute value of the Entitlement.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"lastRefresh",required:!1,schemaDescription:"The DateTime when the Entitlement was refreshed.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"lastTargetAggregation",required:!1,schemaDescription:"The date aggregation was last targeted of the Entitlement.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"classifications"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Classifications of this Entitlement.")),(0,n.kt)(m.Z,{collapsible:!1,name:"source",required:!1,schemaDescription:"The source of the ObjectClassification.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"effective",required:!1,schemaDescription:"Flag indicating this is an effective Classification.",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"classification"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Classification of this object.")),(0,n.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"The name of the Classification.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"displayName",required:!1,schemaDescription:"The displayName of the Classification.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"origin",required:!1,schemaDescription:"The origin of the Classification.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:"The type of the Classification.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"meta"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"created",required:!1,schemaDescription:"DateTime when the Entitlement was created.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"location",required:!1,schemaDescription:"URL to the Entitlement.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"lastModified",required:!1,schemaDescription:"DateTime of Entitlement last modification.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"version",required:!1,schemaDescription:"Entitlement version.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"resourceType",required:!1,schemaDescription:"Resource type of the metadata subject.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{collapsible:!1,name:"schemas",required:!1,schemaDescription:void 0,schemaName:"array",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"entitleAuth",required:!1,schemaDescription:"This is an Extended Attribute from Managed Attribute used to describe the authorization level of an Entitlement.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"entDate",required:!1,schemaDescription:"This is an Extended Attribute from Managed Attribute. The Entitlement DateTime.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"active",required:!1,schemaDescription:"This is an Extended Attribute from Managed Attribute. Describes if an Entitlement is active.",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"rank",required:!1,schemaDescription:"This is an Extended Attribute from Managed Attribute.",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"rule",required:!1,schemaDescription:"This is an Extended Attribute from Managed Attribute. Used to specify a Rule object for the Entitlement.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"reviewer"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"This is an Extended Attribute from Managed Attribute. The Identity that reviewed the Entitlement.")),(0,n.kt)(m.Z,{collapsible:!1,name:"displayName",required:!1,schemaDescription:"Display name of the Entitlement reviewer.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"id of the Entitlement reviewer.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"$ref",required:!1,schemaDescription:"URI reference of the Entitlement reviewer resource.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{collapsible:!1,name:"emails",required:!1,schemaDescription:"This is an Extended Attribute from Managed Attribute. Used to specify the Entitlement owner email.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "id": "string",\n  "descriptions": {\n    "locale": "string",\n    "value": "string"\n  },\n  "displayableName": "string",\n  "type": "string",\n  "application": [\n    {\n      "value": "string",\n      "$ref": "string",\n      "displayName": "string"\n    }\n  ],\n  "owner": [\n    {\n      "value": "string",\n      "$ref": "string",\n      "displayName": "string"\n    }\n  ],\n  "requestable": true,\n  "aggregated": true,\n  "attribute": "string",\n  "value": "string",\n  "lastRefresh": "2022-10-09",\n  "lastTargetAggregation": "2022-10-09",\n  "classifications": {\n    "source": "string",\n    "effective": true,\n    "classification": {\n      "name": "string",\n      "displayName": "string",\n      "origin": "string",\n      "type": "string"\n    }\n  },\n  "meta": {\n    "created": "2022-10-09",\n    "location": "string",\n    "lastModified": "2022-10-09",\n    "version": "string",\n    "resourceType": "string"\n  },\n  "schemas": [\n    null\n  ],\n  "entitleAuth": "string",\n  "entDate": "2022-10-09",\n  "active": true,\n  "rank": 0,\n  "rule": "string",\n  "reviewer": {\n    "displayName": "string",\n    "value": "string",\n    "$ref": "string"\n  },\n  "emails": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}y.isMDXComponent=!0}}]);