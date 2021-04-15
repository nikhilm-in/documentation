(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(227)),i={title:"Google Assistant",sidebar_label:"Google Assistant"},c={unversionedId:"documentation/channelConfiguration/google-assistant",id:"documentation/channelConfiguration/google-assistant",isDocsHomePage:!1,title:"Google Assistant",description:"How to Use",source:"@site/docs/documentation/channelConfiguration/google-assistant.md",slug:"/documentation/channelConfiguration/google-assistant",permalink:"/docs/documentation/channelConfiguration/google-assistant",version:"current",sidebar_label:"Google Assistant",sidebar:"documentation",previous:{title:"Alexa",permalink:"/docs/documentation/channelConfiguration/alexa"},next:{title:"Google Hangouts",permalink:"/docs/documentation/channelConfiguration/hangouts"}},l=[{value:"How to Use",id:"how-to-use",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installing the CLI",id:"installing-the-cli",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"how-to-use"},"How to Use"),Object(a.b)("p",null,"Replace BOT_ID and PROJECT_ID with applicable botId and projectId "),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Visit Actions Console and login. "),Object(a.b)("li",{parentName:"ol"},"Create a Project ")),Object(a.b)("p",null,"Turn AdBlocker Off in case the popup doesn\u2019t appear.\nGive a project name. It takes a couple of minutes to create a project and go to the next screen Choose assistant SDK. The Screen should be somewhat similar to the below photo. "),Object(a.b)("p",null,"Copy the command shown in pop up which is displayed after clicking on assistant SDK"),Object(a.b)("p",null,"Agree to the Terms and Conditions and continue / Click Ok. "),Object(a.b)("h2",{id:"installing-the-cli"},"Installing the CLI"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Please choose your OS and install from google developers.\nMake an empty folder and copy the gactions CLI into it. To be sure it has execution permissions run chmod +x ./gactions Make a file action.json in the directory and copy the following contents. Do not forget to replace BOT_ID with your botId. ")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'{ \n"actions": [ \n { \n "name": "MAIN", \n "intent": { \n "name": "actions.intent.MAIN" \n }, \n "fulfillment": { \n "conversationName": "ym" \n } \n } \n ], \n"conversations": { \n "ym": { \n "name": "ym", \n "url": "https://app.yellowmessenger.com/integrations/googleAssistant/BOT_ID",  "fulfillmentApiVersion": 2 \n } \n } \n} \n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Paste the command you copied in the previous step. replace PACKAGE_NAME with action.json ( eg., gactions update -- action_package action.json --project gabot-4581e) ")),Object(a.b)("p",null,"In case if you have missed your project name. You can find it in overview -> settings or in the home screen"),Object(a.b)("p",null,"Follow along the CLI prompts to finish successfully deploying the bot. "),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Further reading The guide to building/porting a bot for Google Assistant")))}u.isMDXComponent=!0},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);