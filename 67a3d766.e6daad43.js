(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,O=p["".concat(l,".").concat(u)]||p[u]||j[u]||i;return n?r.a.createElement(O,b(b({ref:t},c),{},{components:n})):r.a.createElement(O,b({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(128)),l={title:"Hint API"},b={unversionedId:"hints/api",id:"hints/api",isDocsHomePage:!1,title:"Hint API",description:"introJs(\\[targetElm\\])",source:"@site/docs/hints/api.md",slug:"/hints/api",permalink:"/docs/hints/api",editUrl:"https://github.com/usablica/introjs-website/edit/master/docs/hints/api.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1606561642,sidebar:"someSidebar",previous:{title:"Intro options",permalink:"/docs/intro/options"},next:{title:"Hints HTML Attributes",permalink:"/docs/hints/attributes"}},o=[{value:"introJs([targetElm])",id:"introjstargetelm",children:[]},{value:"introJs.setOption(option, value)",id:"introjssetoptionoption-value",children:[]},{value:"introJs.setOptions(options)",id:"introjssetoptionsoptions",children:[]},{value:"introJs.refresh()",id:"introjsrefresh",children:[]},{value:"introJs.addHints()",id:"introjsaddhints",children:[]},{value:"introJs.showHint(hintId)",id:"introjsshowhinthintid",children:[]},{value:"introJs.showHints()",id:"introjsshowhints",children:[]},{value:"introJs.hideHint(stepId)",id:"introjshidehintstepid",children:[]},{value:"introJs.showHintDialog(stepId)",id:"introjsshowhintdialogstepid",children:[]},{value:"introJs.hideHints()",id:"introjshidehints",children:[]},{value:"introJs.onhintclick(providedCallback)",id:"introjsonhintclickprovidedcallback",children:[]},{value:"introJs.onhintsadded(providedCallback)",id:"introjsonhintsaddedprovidedcallback",children:[]},{value:"introJs.onhintclose(providedCallback)",id:"introjsonhintcloseprovidedcallback",children:[]}],c={rightToc:o};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introjstargetelm"},"introJs(","[","targetElm","]",")"),Object(i.b)("p",null,"Creating an introJs object."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Available since"),": v0.1.0"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"targetElm : String (optional) - Should be defined to start introduction for specific element, for example: ",Object(i.b)("inlineCode",{parentName:"li"},"#intro-farm"),".")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"introJs object.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"introJs() //without selector, start introduction for whole page\nintroJs(\"#intro-farm\") //start introduction for element id='intro-farm'\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"introjssetoptionoption-value"},"introJs.setOption(option, value)"),Object(i.b)("p",null,"Set a single option to introJs object."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Available since"),": v0.3.0"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"option: String - Option key name."),Object(i.b)("li",{parentName:"ul"},"value: String/Number - Value of the option.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"introJs object.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'introJs().setOption("skipLabel", "Exit");\n')),Object(i.b)("hr",null),Object(i.b)("h2",{id:"introjssetoptionsoptions"},"introJs.setOptions(options)"),Object(i.b)("p",null,"Set a group of options to the introJs object."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Available since"),": v0.3.0"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"options : Object Object that contains option keys with values.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"introJs object.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"introJs().setOptions({ 'skipLabel': 'Exit', 'tooltipPosition': 'right' });\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"introjsrefresh"},"introJs.refresh()"),Object(i.b)("p",null,"To refresh and order layers manually. This function rearranges all hints as well."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Available since"),": v0.5.0 "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Last update"),": v2.1.0"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," - introJs object."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")," "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"introJs().refresh();\n")),Object(i.b)("hr",null),Object(i.b)("p",null,"Show a specific hint."),Object(i.b)("h2",{id:"introjsaddhints"},"introJs.addHints()"),Object(i.b)("p",null,"To add available hints to the page (using ",Object(i.b)("inlineCode",{parentName:"p"},"data-hint")," or JSON)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Available since"),": v2.0"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," - introJs object."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")," "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"introJs().addHints();\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"introjsshowhinthintid"},"introJs.showHint(hintId)"),Object(i.b)("p",null,"Show the hint with given ",Object(i.b)("inlineCode",{parentName:"p"},"hintId"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Available since"),": v2.4.0"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")," "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"introJs().showHint(1);\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"introjsshowhints"},"introJs.showHints()"),Object(i.b)("p",null,"Show all hints."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Available since"),": v2.4.0"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"introJs().showHints();\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"introjshidehintstepid"},"introJs.hideHint(stepId)"),Object(i.b)("p",null,"Hides the hint with given ",Object(i.b)("inlineCode",{parentName:"p"},"stepId"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"stepId")," is an ",Object(i.b)("inlineCode",{parentName:"p"},"integer")," and it\u2019s the value of ",Object(i.b)("inlineCode",{parentName:"p"},"data-step")," attribute on the hint element."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Available since"),": v2.1"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," - introJs object."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")," "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"introJs().hideHint(0); //you should pass the id of the hint (the `data-step` attribute).\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"introjsshowhintdialogstepid"},"introJs.showHintDialog(stepId)"),Object(i.b)("p",null,"Shows the popup dialog next to the hint with given ",Object(i.b)("inlineCode",{parentName:"p"},"stepId"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"stepId")," is an ",Object(i.b)("inlineCode",{parentName:"p"},"integer")," and it\u2019s the value of ",Object(i.b)("inlineCode",{parentName:"p"},"data-step")," attribute on the hint element."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Available since"),": v2.6"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," - introJs object."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")," "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"introJs().showHintDialog(0); //you should pass the id of the hint (the `data-step` attribute).\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"introjshidehints"},"introJs.hideHints()"),Object(i.b)("p",null,"Hides all hints on the page."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Available since"),": v2.2"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," - introJs object."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")," "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"introJs().hideHints();\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"introjsonhintclickprovidedcallback"},"introJs.onhintclick(providedCallback)"),Object(i.b)("p",null,"Invokes given function when user clicks on one of hints."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Available since"),": v2.0"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")," - providedCallback : Function"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," - introJs object."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")," "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'introJs().onhintclick(function() { \n  alert("hint clicked"); \n});\n')),Object(i.b)("hr",null),Object(i.b)("h2",{id:"introjsonhintsaddedprovidedcallback"},"introJs.onhintsadded(providedCallback)"),Object(i.b)("p",null,"Invokes given callback function after adding and rendering all hints."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Available since"),": v2.0"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")," - providedCallback : Function"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," - introJs object."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")," "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'introJs().onhintsadded(function() { \n  alert("all hints were added"); \n});\n')),Object(i.b)("hr",null),Object(i.b)("h2",{id:"introjsonhintcloseprovidedcallback"},"introJs.onhintclose(providedCallback)"),Object(i.b)("p",null,"Set callback for when a single hint removes from page (e.g. when user clicks on \u201cGot it\u201d button)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Available since"),": v2.0"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")," - providedCallback : Function"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," - introJs object."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")," "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'introJs().onhintclose(function() { \n  alert("hint closed"); \n});\n')))}s.isMDXComponent=!0}}]);