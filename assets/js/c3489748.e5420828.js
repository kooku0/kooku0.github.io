"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[388],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),p=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,k=s["".concat(d,".").concat(u)]||s[u]||m[u]||a;return n?o.createElement(k,l(l({ref:t},c),{},{components:n})):o.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(97605),r=(n(59496),n(49613));const a={title:"DOMContentLoaded vs onLoad",date:new Date("2021-04-11T00:00:00.000Z"),cover:"",tags:["web"]},l=void 0,i={permalink:"/blog/domcontentloaded-vs-onload",editUrl:"https://github.com/kooku0/kooku0.github.io/edit/main/blog/domcontentloaded-vs-onload.md",source:"@site/blog/domcontentloaded-vs-onload.md",title:"DOMContentLoaded vs onLoad",description:"Overview",date:"2021-04-11T00:00:00.000Z",formattedDate:"2021\ub144 4\uc6d4 11\uc77c",tags:[{label:"web",permalink:"/blog/tags/web"}],readingTime:3.53,hasTruncateMarker:!0,authors:[],frontMatter:{title:"DOMContentLoaded vs onLoad",date:"2021-04-11T00:00:00.000Z",cover:"",tags:["web"]},prevItem:{title:"React v17",permalink:"/blog/react-v17"},nextItem:{title:"Render-Blocking CSS",permalink:"/blog/render-blocking-css"}},d={authorsImageUrls:[]},p=[{value:"Overview",id:"overview",level:2},{value:"Docs",id:"docs",level:2},{value:"async &amp; defer",id:"async--defer",level:2},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:2},{value:"Reference",id:"reference",level:2}],c={toc:p},s="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"script \ud0dc\uadf8\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," \uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"defer"),"\uc5d0 \ub300\ud574\uc11c \uacf5\ubd80\ud558\ub358 \uc911 ",(0,r.kt)("inlineCode",{parentName:"p"},"DOMContentLoaded"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," \uc774\ubca4\ud2b8\uc5d0 \ub300\ud574\uc11c \uc54c\uac8c\ub418\uc5c8\uace0 \ub450 \uc774\ubca4\ud2b8\uc5d0 \ub300\ud574 \uc815\ub9ac\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"docs"},"Docs"),(0,r.kt)("p",null,"\uacf5\uc2dd\ubb38\uc11c\uc5d0\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ub9d0\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"DOMContentLoaded")," \uc774\ubca4\ud2b8\ub294 \ucd08\uae30 HTML \ubb38\uc11c\ub97c \uc644\uc804\ud788 \ubd88\ub7ec\uc624\uace0 \ubd84\uc11d\ud588\uc744 \ub54c \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \uc2a4\ud0c0\uc77c \uc2dc\ud2b8, \uc774\ubbf8\uc9c0, \ud558\uc704 \ud504\ub808\uc784\uc758 \ub85c\ub529\uc740 \uae30\ub2e4\ub9ac\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ko/docs/Web/API/Window/DOMContentLoaded_event"},"DOMContentLoaded :: MOZ")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"load")," \uc774\ubca4\ud2b8\ub294 \ub9ac\uc18c\uc2a4\uc640 \uadf8\uac83\uc5d0 \uc758\uc874\ud558\ub294 \ub9ac\uc18c\uc2a4\ub4e4\uc758 \ub85c\ub529\uc774 \uc644\ub8cc\ub418\uba74 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ko/docs/Web/API/Window/load_event"},"load :: MOZ"))),(0,r.kt)("p",null,"Chrome dev tool\uc5d0\uc11c \uce21\uc815\ud574\ubcf4\uba74 ","`","DOMContentLoaded","`","\uac00 stylesheet\uc640 img\ub4f1\uc758 \ub9ac\uc18c\uc2a4\uc640\ub294 \uc0c1\uad00\uc5c6\ub2e4\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(10061).Z,width:"2388",height:"638"})),(0,r.kt)("h2",{id:"async--defer"},"async & defer"),(0,r.kt)("p",null,"script \ud0dc\uadf8 ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," \uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"defer")," \ub294 \uc5b8\uc81c script\uac00 \uc5b8\uc81c \uc2e4\ud589\ub418\ub294\uc9c0\uc5d0 \ub530\ub77c\uc11c \uad6c\ubd84\uc774 \ub429\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"async"),"\uc758 \uacbd\uc6b0 script\uac00 \ub85c\ub4dc\ub418\uba74 \ubc14\ub85c \uc218\ud589\uc774 \ub418\ub294 \ubc18\uba74(dom parsing\uc744 block\ud560 \uc218 \uc788\ub2e4.) ",(0,r.kt)("inlineCode",{parentName:"p"},"defer"),"\ub294 script\uac00 \ub85c\ub4dc \ub418\uace0, dom parsing\uc774 \ub05d\ub09c \ud6c4\uc5d0 \uc2e4\ud589\uc774 \ub418\ub294 \ucc28\uc774\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("br",null),"\n\uc774 \ucc28\uc774\uc810\ub9d0\uace0\ub3c4 \ub2e4\ub978 \ucc28\uc774\uc810\uc774 \uc788\ub294\ub370, ",(0,r.kt)("inlineCode",{parentName:"p"},"async"),"\uc758 \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"window.load")," \uc774\ubca4\ud2b8\uac00 \uc2e4\ud589\ub418\uae30 \uc804\uc5d0 script\uc758 \uc2e4\ud589\uc744 \ubcf4\uc7a5\ud558\uace0, ",(0,r.kt)("inlineCode",{parentName:"p"},"defer"),"\uc758 \uacbd\uc6b0\uc5d0\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"domContentLoaded")," \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud558\uae30 \uc804\uc5d0 script\ub97c \uc2e4\ud589\ud558\ub294 \uac83\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n\n    <script defer src="./defer.js"><\/script>\n    <script async src="./async.js"><\/script>\n    <script src="./sample.js"><\/script>\n    <link\n      rel="stylesheet"\n      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/css/bootstrap.min.css"\n    />\n    <script>\n      console.log("in head");\n      window.addEventListener("DOMContentLoaded", function () {\n        console.log("DOMContentLoaded is loaded");\n      });\n\n      window.onload = function () {\n        console.log("window is loaded");\n      };\n    <\/script>\n    <title>React App</title>\n  </head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id="root"></div>\n    <script>\n      console.log("end of body");\n    <\/script>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uacb0\uacfc\uac00 \ucf58\uc194\uc5d0 \ucc0d\ud614\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"async\nin sample\nin head\nend of body\ndefer\nDOMContentLoaded is loaded\nwindow is loaded\n")),(0,r.kt)("h2",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,r.kt)("p",null,"\uc804\ud1b5\uc801\uc778 \uc131\ub2a5 \uce21\uc815 \ubc29\uc2dd\uc740 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \uc774\ubca4\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \uc6f9 \ud398\uc774\uc9c0\uac00 \ub85c\ub529\ub420 \ub54c DOMContentLoaded, load \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud558\uba70, \uac01 \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud558\ub294 \uc2dc\uc810\uc73c\ub85c \uc131\ub2a5\uc744 \uce21\uc815\ud558\uac8c \ub418\ub294\ub370, DOMContentlLoaded \uc774\ubca4\ud2b8, load \uc774\ubca4\ud2b8 \ubc1c\uc0dd \uc2dc\uc810\uc774 \ube60\ub97c\uc218\ub85d, \uadf8\ub9ac\uace0 \ub450 \uc774\ubca4\ud2b8 \ubc1c\uc0dd \uad6c\uac04\uc758 \ud3ed\uc774 \uc881\uc744\uc218\ub85d \uc131\ub2a5\uc774 \uc88b\ub2e4\uace0 \ub9d0\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud558\uc9c0\ub9cc \ud604\uc7ac\ub294 DOMContentLoaded or load \uac00 user\uac00 screen\uc5d0\uc11c \uc2e4\uc81c\ub85c \ubcf4\ub294 \uac83\uacfc \ucc28\uc774\uac00 \uc788\uae30\uc5d0 FCP(First Contentful Paint)\ub85c \uc131\ub2a5\uc744 \uce21\uc815\ud569\ub2c8\ub2e4. FCP\ub294 \uc774\uc9c0\uac00 \ucc98\uc74c \ub85c\ub4dc\ub418\uae30 \uc2dc\uc791\ud55c \uc2dc\uc810\uc744 \uae30\uc900\uc73c\ub85c \ubdf0\ud3ec\ud2b8 \ub0b4\uc5d0 \uac00\uc7a5 \ud070 \uc774\ubbf8\uc9c0 \ub610\ub294 \ud14d\uc2a4\ud2b8 \ube14\ub85d\uc758 \ub80c\ub354\ub9c1 \uc2dc\uac04\uc744 \uce21\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp"},"\uc8fc\uc694 \ub80c\ub354\ub9c1 \uacbd\ub85c \uc131\ub2a5 \ubd84\uc11d :: developers.google.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event"},"DOMContentLoaded :: MOZ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ui.toast.com/fe-guide/ko_PERFORMANCE"},"\uc131\ub2a5 \ucd5c\uc801\ud654 :: TOAST UI"))))}m.isMDXComponent=!0},10061:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/domcontentload-a57322746455809f8ee26c0934fcbaa8.png"}}]);