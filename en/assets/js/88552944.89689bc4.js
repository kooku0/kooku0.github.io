"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[6506],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(n),s=o,m=f["".concat(l,".").concat(s)]||f[s]||d[s]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9869:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905));const a={title:"DOMContentLoaded vs onLoad",date:new Date("2021-04-11T00:00:00.000Z"),cover:"",tags:["web"]},i=void 0,c={permalink:"/en/blog/domcontentloaded-vs-onload",editUrl:"https://github.com/kooku0/kooku0.github.io/edit/main/blog/domcontentloaded-vs-onload.md",source:"@site/blog/domcontentloaded-vs-onload.md",title:"DOMContentLoaded vs onLoad",description:"Overview",date:"2021-04-11T00:00:00.000Z",formattedDate:"April 11, 2021",tags:[{label:"web",permalink:"/en/blog/tags/web"}],readingTime:3.53,hasTruncateMarker:!0,authors:[],frontMatter:{title:"DOMContentLoaded vs onLoad",date:"2021-04-11T00:00:00.000Z",cover:"",tags:["web"]},prevItem:{title:"React v17",permalink:"/en/blog/react-v17"},nextItem:{title:"Render-Blocking CSS",permalink:"/en/blog/render-blocking-css"}},l={authorsImageUrls:[]},u=[{value:"Overview",id:"overview",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"script \ud0dc\uadf8\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," \uc640 ",(0,o.kt)("inlineCode",{parentName:"p"},"defer"),"\uc5d0 \ub300\ud574\uc11c \uacf5\ubd80\ud558\ub358 \uc911 ",(0,o.kt)("inlineCode",{parentName:"p"},"DOMContentLoaded"),"\uc640 ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," \uc774\ubca4\ud2b8\uc5d0 \ub300\ud574\uc11c \uc54c\uac8c\ub418\uc5c8\uace0 \ub450 \uc774\ubca4\ud2b8\uc5d0 \ub300\ud574 \uc815\ub9ac\ud558\uc600\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);