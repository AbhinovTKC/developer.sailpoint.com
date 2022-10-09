"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[12712],{18752:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var t=i(87462),o=(i(67294),i(3905));const s={id:"debugging",title:"Debugging",pagination_label:"Debugging",sidebar_label:"Debugging",sidebar_position:2,sidebar_class_name:"debugging",keywords:["connectivity","connectors","debugging"],description:"An easy way to debug locally is to use console.log() to print debug information to your console.",slug:"/docs/saas-connectivity/in-depth/debugging",tags:["Connectivity"]},a=void 0,c={unversionedId:"docs/identity-now/saas-connectivity/in-depth/debugging",id:"docs/identity-now/saas-connectivity/in-depth/debugging",title:"Debugging",description:"An easy way to debug locally is to use console.log() to print debug information to your console.",source:"@site/products/idn/docs/identity-now/saas-connectivity/in-depth/debugging.md",sourceDirName:"docs/identity-now/saas-connectivity/in-depth",slug:"/docs/saas-connectivity/in-depth/debugging",permalink:"/idn/docs/saas-connectivity/in-depth/debugging",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/in-depth/debugging.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"}],version:"current",lastUpdatedBy:"Jordan Violet",lastUpdatedAt:1665277322,formattedLastUpdatedAt:"Oct 9, 2022",sidebarPosition:2,frontMatter:{id:"debugging",title:"Debugging",pagination_label:"Debugging",sidebar_label:"Debugging",sidebar_position:2,sidebar_class_name:"debugging",keywords:["connectivity","connectors","debugging"],description:"An easy way to debug locally is to use console.log() to print debug information to your console.",slug:"/docs/saas-connectivity/in-depth/debugging",tags:["Connectivity"]},sidebar:"idnDocs",previous:{title:"API Calls",permalink:"/idn/docs/saas-connectivity/in-depth/api-calls"},next:{title:"Error Handling",permalink:"/idn/docs/saas-connectivity/in-depth/error-handling"}},d={},r=[{value:"Debug locally",id:"debug-locally",level:2},{value:"Debug in VS Code",id:"debug-in-vs-code",level:2},{value:"Debug through the javascript debug terminal",id:"debug-through-the-javascript-debug-terminal",level:3},{value:"Debug through the VS Code Debug configuration",id:"debug-through-the-vs-code-debug-configuration",level:3},{value:"Debug in IdentityNow",id:"debug-in-identitynow",level:2}],u={toc:r};function l(n){let{components:e,...s}=n;return(0,o.kt)("wrapper",(0,t.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"debug-locally"},"Debug locally"),(0,o.kt)("p",null,"An easy way to debug locally is to use ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log()")," to print debug\ninformation to your console. You can add ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log()")," statements anywhere,\nand the messages they print can contain static text or variables. For example,\nto see the contents of an input object when you are invoking the\n",(0,o.kt)("inlineCode",{parentName:"p"},"stdAccountCreate")," command, you can craft the following debug logic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'export const connector = async () => {\n  return createConnector().stdAccountCreate(\n    async (\n      context: Context,\n      input: StdAccountCreateInput,\n      res: Response<StdAccountCreateOutput>\n    ) => {\n      // Print the contents of input to the console.  Must use\n      // JSON.stringify() to print the contents of an object.\n      console.log(\n        `Input received for account create: ${JSON.stringify(input)}`\n      );\n      if (!input.attributes.id) {\n        throw new ConnectorError("identity cannot be null");\n      }\n      const user = await airtable.createAccount(input);\n      logger.info(user, "created user in Airtable");\n      res.send(user.toStdAccountCreateOutput());\n    }\n  );\n};\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"console.log()")," statements work anywhere, and they work when you deploy your\nconnector to IDN. However, these statements can create clutter in your code. You\nwill often have to clean up debug statements once you are done."),(0,o.kt)("p",null,"If your IDE supports debugging JavaScript, then your IDE\u2019s built-in debugger can\nbe a powerful and easy way to debug your code."),(0,o.kt)("h2",{id:"debug-in-vs-code"},"Debug in VS Code"),(0,o.kt)("h3",{id:"debug-through-the-javascript-debug-terminal"},"Debug through the javascript debug terminal"),(0,o.kt)("p",null,"In VS Code, open a javascript debug terminal window and run the npm run dev\ncommand."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev")),(0,o.kt)("p",null,"Now you can set breakpoints in your typescript files in VS Code:\n",(0,o.kt)("img",{alt:"debugging 1",src:i(66551).Z,width:"948",height:"542"})),(0,o.kt)("h3",{id:"debug-through-the-vs-code-debug-configuration"},"Debug through the VS Code Debug configuration"),(0,o.kt)("p",null,"To simplify the debugging process, you can consolidate the debugging steps into\na VS Code launch configuration. The following snippet is an example of how you\nwould do so:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Launch.json:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // Use IntelliSense to learn about possible attributes.\n  // Hover to view descriptions of existing attributes.\n  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Launch Program via NPM",\n      "request": "launch",\n      "runtimeArgs": ["run-script", "dev"],\n      "windows": {\n        "runtimeExecutable": "npm.cmd"\n      },\n      "linux": {\n        "runtimeExecutable": "npm"\n      },\n      "skipFiles": ["<node_internals>/**"],\n      "type": "node"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"With these configurations set, you can run the debugger by selecting the options\nshown in the following image:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"debugging 2",src:i(26377).Z,width:"427",height:"198"})),(0,o.kt)("h2",{id:"debug-in-identitynow"},"Debug in IdentityNow"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"sp conn logs")," command to gain insight into how your connector\nis performing while running in IDN. See the section on logging for more\ninformation."))}l.isMDXComponent=!0},66551:(n,e,i)=>{i.d(e,{Z:()=>t});const t=i.p+"assets/images/debugging1-52cde774c92d8bb9f28d6554187c03ce.png"},26377:(n,e,i)=>{i.d(e,{Z:()=>t});const t="data:image/png;base64,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"}}]);