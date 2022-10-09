"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[88850],{25736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const o={id:"jdbc-provisioning-rule",title:"JDBC Provision Rule",pagination_label:"JDBC Provision Rule",sidebar_label:"JDBC Provision Rule",sidebar_class_name:"jdbcProvisionRule",keywords:["cloud","rules","jdbc"],description:"This rule performs provisioning actions from a provisioning plan provided by a supplied JDBC connection. These actions typically issue SQL commands, such as insert, update, select, and delete.",slug:"/docs/rules/connector-rules/jdbc-provisioning-rule",tags:["Rules"]},r=void 0,s={unversionedId:"docs/identity-now/rules/connector-rules/jdbc-provisioning-rule",id:"docs/identity-now/rules/connector-rules/jdbc-provisioning-rule",title:"JDBC Provision Rule",description:"This rule performs provisioning actions from a provisioning plan provided by a supplied JDBC connection. These actions typically issue SQL commands, such as insert, update, select, and delete.",source:"@site/products/idn/docs/identity-now/rules/connector-rules/jdbc_provision_rule.md",sourceDirName:"docs/identity-now/rules/connector-rules",slug:"/docs/rules/connector-rules/jdbc-provisioning-rule",permalink:"/idn/docs/rules/connector-rules/jdbc-provisioning-rule",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/rules/connector-rules/jdbc_provision_rule.md",tags:[{label:"Rules",permalink:"/idn/tags/rules"}],version:"current",lastUpdatedBy:"Jordan Violet",lastUpdatedAt:1665277322,formattedLastUpdatedAt:"Oct 9, 2022",frontMatter:{id:"jdbc-provisioning-rule",title:"JDBC Provision Rule",pagination_label:"JDBC Provision Rule",sidebar_label:"JDBC Provision Rule",sidebar_class_name:"jdbcProvisionRule",keywords:["cloud","rules","jdbc"],description:"This rule performs provisioning actions from a provisioning plan provided by a supplied JDBC connection. These actions typically issue SQL commands, such as insert, update, select, and delete.",slug:"/docs/rules/connector-rules/jdbc-provisioning-rule",tags:["Rules"]},sidebar:"idnDocs",previous:{title:"JDBC BuildMap Rule",permalink:"/idn/docs/rules/connector-rules/jdbc-buildmap-rule"},next:{title:"SAP BuildMap Rule",permalink:"/idn/docs/rules/connector-rules/sap-buildmap-rule"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2},{value:"Template",id:"template",level:2},{value:"Example",id:"example",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This rule performs provisioning actions from a provisioning plan provided by a supplied JDBC connection.\nThese actions typically issue SQL commands, such as insert, update, select, and delete."),(0,a.kt)("h2",{id:"execution"},"Execution"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Connector Execution")," - This rule executes within the virtual appliance. It\nmay offer special abilities to perform connector-related functions, and it may\noffer managed connections to sources."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Logging")," - Logging statements are viewable within the ccg.log on the\nvirtual appliance, and they are viewable by SailPoint personnel.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Rule Execution",src:n(25089).Z,width:"1525",height:"618"})),(0,a.kt)("h2",{id:"input"},"Input"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"connection"),(0,a.kt)("td",{parentName:"tr",align:null},"java.sql.Connection"),(0,a.kt)("td",{parentName:"tr",align:null},"Reference to the current SQL connection.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"plan"),(0,a.kt)("td",{parentName:"tr",align:null},"sailpoint.object.ProvisioningPlan"),(0,a.kt)("td",{parentName:"tr",align:null},"Provisioning plan containing the provisioning request(s).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"application"),(0,a.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Application"),(0,a.kt)("td",{parentName:"tr",align:null},"Attribute value for the identity attribute before the rule runs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"schema"),(0,a.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Schema"),(0,a.kt)("td",{parentName:"tr",align:null},"Reference to the schema object for the delimited file source being read.")))),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"result"),(0,a.kt)("td",{parentName:"tr",align:null},"sailpoint.object.ProvisioningResult"),(0,a.kt)("td",{parentName:"tr",align:null},"ProvisioningResult object containing the provisioning request's status (success, failure, retry, etc.).")))),(0,a.kt)("h2",{id:"template"},"Template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="JDBCProvision">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="JDBCProvision">\n  <Description>This example JDBC rule can process account creation requests, deletion requests, and modification requests that pertain to the \u201crole\u201d attribute. It logs debug messages if other account request types are submitted.</Description>\n  <Source><![CDATA[\n  import java.sql.Connection;\n  import java.sql.DriverManager;\n  import java.sql.PreparedStatement;\n  import java.sql.SQLException;\n  import java.sql.Types;\n  import java.util.List;\n  import sailpoint.api.SailPointContext;\n  import sailpoint.connector.JDBCConnector;\n  import sailpoint.object.Application;\n  import sailpoint.object.ProvisioningPlan;\n  import sailpoint.object.ProvisioningPlan.AccountRequest;\n  import sailpoint.object.ProvisioningPlan.AttributeRequest;\n  import sailpoint.object.ProvisioningPlan.PermissionRequest;\n  import sailpoint.object.ProvisioningResult;\n  import sailpoint.object.Schema;\n\n  public String getAttributeRequestValue(AccountRequest acctReq, String attribute) {\n\n    if ( acctReq != null ) {\n      AttributeRequest attrReq = acctReq.getAttributeRequest(attribute);\n      if ( attrReq != null ) {\n        return attrReq.getValue();\n      }\n    }\n    return null;\n  }\n\n  ProvisioningResult result = new ProvisioningResult();\n  PreparedStatement statement;\n\n  if ( plan != null ) {\n\n    List accounts = plan.getAccountRequests();\n    if ( ( accounts != null ) && ( accounts.size() > 0 ) ) {\n      for ( AccountRequest account : accounts ) {\n        try {\n          if ( AccountRequest.Operation.Create.equals( account.getOperation() ) ) {\n            // Ideally we should first check to see if the account already exists.\n            // As written, this just assumes it does not.\n\n            statement = connection.prepareStatement( "insert into users (login,first,last,role,status) values (?,?,?,?,?)" );\n            statement.setString ( 1, (String) account.getNativeIdentity() );\n            statement.setString ( 2, getAttributeRequestValue(account,"first") );\n            statement.setString ( 3, getAttributeRequestValue(account,"last") );\n            statement.setString ( 4, getAttributeRequestValue(account,"role") );\n            statement.setString ( 5, getAttributeRequestValue(account,"status") );\n            statement.executeUpdate();\n\n            result.setStatus( ProvisioningResult.STATUS_COMMITTED );\n\n          } else if ( AccountRequest.Operation.Modify.equals( account.getOperation() ) ) {\n\n            // Modify account request -- change role\n\n            PreparedStatement statement = connection.prepareStatement( "update users set role = ? where login = ?" );\n            statement.setString ( 2, (String) account.getNativeIdentity() );\n            if ( account != null ) {\n              AttributeRequest attrReq = account.getAttributeRequest("role");\n              if ( attrReq != null && ProvisioningPlan.Operation.Remove.equals(attrReq.getOperation()) ) {\n                statement.setNull ( 1, Types.NULL );\n                statement.executeUpdate();\n              } else {\n                statement.setString(1,attrReq.getValue());\n                statement.executeUpdate();\n              }\n            }\n            result.setStatus( ProvisioningResult.STATUS_COMMITTED );\n\n          } else if ( AccountRequest.Operation.Delete.equals( account.getOperation() ) ) {\n\n            PreparedStatement statement = connection.prepareStatement( (String) application.getAttributeValue( "account.deleteSQL" ) );\n\n            statement.setString ( 1, (String) account.getNativeIdentity() );\n            statement.executeUpdate();\n\n            result.setStatus( ProvisioningResult.STATUS_COMMITTED );\n\n          } else if ( AccountRequest.Operation.Disable.equals( account.getOperation() ) ) {\n\n            // Disable, not supported.\n\n          } else if ( AccountRequest.Operation.Enable.equals( account.getOperation() ) ) {\n\n            // Enable, not supported.\n\n          } else if ( AccountRequest.Operation.Lock.equals( account.getOperation() ) ) {\n\n            // Lock, not supported.\n\n          } else if ( AccountRequest.Operation.Unlock.equals( account.getOperation() ) ) {\n\n            // Unlock, not supported.\n\n          } else {\n            // Unknown operation!\n          }\n        }\n        catch( SQLException e ) {\n          result.setStatus( ProvisioningResult.STATUS_FAILED );\n          result.addError( e );\n        }\n        finally {\n          if(statement != null) {\n            statement.close();\n          }\n        }\n      }\n    }\n  }\n\n  return result;\n\n  ]]></Source>\n</Rule>\n')))}p.isMDXComponent=!0},25089:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/connector_execution-da1c6db87e6d1b2b8d1f5398ce2f3501.png"}}]);