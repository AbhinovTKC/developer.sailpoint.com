"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[57114],{58969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"webservices-after-provisioning-rule",title:"Web Services After Operation Rule",pagination_label:"Web Services After Operation Rule",sidebar_label:"Web Services After Operation Rule",sidebar_class_name:"webServicesAfterOperationRule",keywords:["cloud","rules","webservices"],description:"This rule calculates attributes after a web-service operation call.",slug:"/docs/rules/connector-rules/webservices-after-provisioning-rule",tags:["Rules"]},o=void 0,l={unversionedId:"docs/identity-now/rules/connector-rules/webservices-after-provisioning-rule",id:"docs/identity-now/rules/connector-rules/webservices-after-provisioning-rule",title:"Web Services After Operation Rule",description:"This rule calculates attributes after a web-service operation call.",source:"@site/products/idn/docs/identity-now/rules/connector-rules/web_services_after_operation_rule.md",sourceDirName:"docs/identity-now/rules/connector-rules",slug:"/docs/rules/connector-rules/webservices-after-provisioning-rule",permalink:"/idn/docs/rules/connector-rules/webservices-after-provisioning-rule",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/rules/connector-rules/web_services_after_operation_rule.md",tags:[{label:"Rules",permalink:"/idn/tags/rules"}],version:"current",lastUpdatedBy:"Jordan Violet",lastUpdatedAt:1665277322,formattedLastUpdatedAt:"Oct 9, 2022",frontMatter:{id:"webservices-after-provisioning-rule",title:"Web Services After Operation Rule",pagination_label:"Web Services After Operation Rule",sidebar_label:"Web Services After Operation Rule",sidebar_class_name:"webServicesAfterOperationRule",keywords:["cloud","rules","webservices"],description:"This rule calculates attributes after a web-service operation call.",slug:"/docs/rules/connector-rules/webservices-after-provisioning-rule",tags:["Rules"]},sidebar:"idnDocs",previous:{title:"SAP HR Provisioning Modify Rule",permalink:"/idn/docs/rules/connector-rules/sap-provisioning-modify-rule"},next:{title:"Web Services Before Operation Rule",permalink:"/idn/docs/rules/connector-rules/webservices-before-provisioning-rule"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2},{value:"Template",id:"template",level:2},{value:"Example",id:"example",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This rule calculates attributes after a web-service operation call."),(0,r.kt)("h2",{id:"execution"},"Execution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Connector Execution")," - This rule executes within the virtual appliance. It\nmay offer special abilities to perform connector-related functions, and it may\noffer managed connections to sources."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Logging")," - Logging statements are viewable within the ccg.log on the\nvirtual appliance, and they are viewable by SailPoint personnel.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rule Execution",src:n(25089).Z,width:"1525",height:"618"})),(0,r.kt)("h2",{id:"input"},"Input"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"application"),(0,r.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Application"),(0,r.kt)("td",{parentName:"tr",align:null},"Application whose data file is being processed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"processedResponseObject"),(0,r.kt)("td",{parentName:"tr",align:null},"List<Map<String, Object>>"),(0,r.kt)("td",{parentName:"tr",align:null},"List of map (account/group). The map contains a key, the identityAttribute of the application schema, and a value, all the account/group attributes (schema) passed by the connector after parsing the respective API response.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"requestEndPoint"),(0,r.kt)("td",{parentName:"tr",align:null},"sailpoint.connector.webservices.EndPoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Current request information. It contains the header, body, context url, method type, response attribute map, successful response code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"restClient"),(0,r.kt)("td",{parentName:"tr",align:null},"sailpoint.connector.webservices.WebServicesClient"),(0,r.kt)("td",{parentName:"tr",align:null},"WebServicesClient (HttpClient) object that enables the user to call the Web Services API target system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rawResponseObject"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"String object that holds the raw response returned from the target system, which can be in JSON or XML form.")))),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"updatedAccountOrGroupList"),(0,r.kt)("td",{parentName:"tr",align:null},"java.util.Map"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Map")," object returned from the After Operation Rule. It may contain any or all of the following: an updated list of account / group resource objects, identified by key ",(0,r.kt)("inlineCode",{parentName:"td"},"data"),"/ attribute values to be updated into application by the connector state map identified by key ",(0,r.kt)("inlineCode",{parentName:"td"},"connectorStateMap"),". Each resource (account/group) object is of type ",(0,r.kt)("inlineCode",{parentName:"td"},"Map"),", which contains the ",(0,r.kt)("strong",{parentName:"td"},"key-value")," pair. The ",(0,r.kt)("strong",{parentName:"td"},"key")," represents the schema attribute name, and the ",(0,r.kt)("strong",{parentName:"td"},"value")," represents the account/group attribute value.")))),(0,r.kt)("h2",{id:"template"},"Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="WebServiceAfterOperationRule">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n')),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="WebServiceAfterOperationRule">\n  <Description>This rule is used by the  Web Services connector after performing any operation like testconnection, aggregation etc.</Description>\n  <Source><![CDATA[\nimport connector.common.JsonUtil;\n    import java.util.HashMap;\n    import java.util.Map.Entry;\n    import java.util.Map;\n    import java.util.List;\n    import java.util.ArrayList;\n    import javax.net.ssl.HttpsURLConnection;\n    import java.io.BufferedReader;\n    import java.io.PrintStream;\n    import java.io.StringWriter;\n    import java.text.SimpleDateFormat;\n    import sailpoint.tools.GeneralException;\n\nMap updatedMapInfo = new HashMap();\nList list = new ArrayList();\nArrayList<String> Roles = new ArrayList<String>();\nMap response = (Map) JsonUtil.toMap(rawResponseObject);\nint RoleSize = 0;\nString newName;\nList Finallist = new ArrayList();\nList workspace = new ArrayList();\n\nlog.error("RULES response at start" + response);\nif (response.get("data") != null) {\n\n     list = (ArrayList) response.get("data");\n\n     for(int d = 0; d < list.size(); d++ ){\n\n         Map responseMap = (Map) list.get(d);\n\n         if (responseMap.get("attributes") != null) {\n            Map newmap = new HashMap();\n             Map data = (Map) responseMap.get("attributes");\n             newmap.put("firstName", data.get("firstName"));\n             newmap.put("lastName",data.get("lastName"));\n             newmap.put("displayName",data.get("displayName"));\n             newmap.put("userName",data.get("userName"));\n             newmap.put("email",data.get("email"));\n\n             if (data.get("workspaceMemberships") != null) {\n\n                 ArrayList Workspacedetail = (ArrayList) data.get("workspaceMemberships");\n\n                 for (int i = 0; i < Workspacedetail.size(); i++) {\n\n                     Map work = (Map) Workspacedetail.get(i);\n\n                     for (int w = 0; w < work.size(); w++) {\n\n                         if (work.get("workspaceName") != null) {\n\n                            workspace.add(work.get("workspaceName"));\n\n                             Roles = (ArrayList) work.get("workspaceRoles");\n\n                             for (int r = 0; r < Roles.size(); r++) {\n\n                                 if (Roles.get(r) != null) {\n                                     newName = Roles.get(r).toString() + " - " + work.get("workspaceName");\n\n                                     if(newName != null) {\n                                         Roles.set(r, newName);\n                                         newmap.put("workspaceRoles", Roles);\n\n                                     }\n\n                                 }\n                             }\n                         }\n                         break;\n                     }\n                 }\n             }\n\n             Finallist.add(newmap);\n\n         }\n    }\n\n}\nlog.error("RULES newmap at end" + newmap);\nlog.error("RULES Finallist at end" + Finallist);\n\nlog.error("RULES processedResponseObject Before is " + processedResponseObject);\n\nupdatedMapInfo.put("data", Finallist);\nlog.error("RULES updatedMapInfo is " + updatedMapInfo);\n\nreturn updatedMapInfo;\nlog.error("RULES processedResponseObject after is " + processedResponseObject);\u200b\n  ]]></Source>\n</Rule>\n')))}c.isMDXComponent=!0},25089:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connector_execution-da1c6db87e6d1b2b8d1f5398ce2f3501.png"}}]);