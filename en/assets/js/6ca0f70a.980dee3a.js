"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[3298],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(r),m=o,b=s["".concat(u,".").concat(m)]||s[m]||f[m]||i;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1246:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return p},toc:function(){return f},default:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={slug:"react-fiber",title:"React fiber & reconciliation",date:new Date("2021-04-04T00:00:00.000Z"),cover:"../images/react-fiber-cover.jpeg",tags:["react"]},u="React reconciliation",l={permalink:"/en/blog/react-fiber",editUrl:"https://github.com/kooku-dev/kooku-dev.github.io/edit/main/blog/react-fiber.md",source:"@site/blog/react-fiber.md",title:"React fiber & reconciliation",description:'Reconciliation\uc740 React\uc758 "\ube44\uad50(diffing)" \uc54c\uace0\ub9ac\uc998\uc785\ub2c8\ub2e4. \uc774 \ube44\uad50 \uc54c\uace0\ub9ac\uc998 \ub355\ubd84\uc5d0 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uac31\uc2e0\uc774 \uc608\uce21 \uac00\ub2a5\ud574\uc9c0\uba74\uc11c\ub3c4 \uace0\uc131\ub2a5 \uc571\uc774\ub77c\uace0 \ubd88\ub7ec\ub3c4 \uc190\uc0c9\uc5c6\uc744 \ub9cc\ud07c \ucda9\ubd84\ud788 \ube60\ub978 \uc571\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4',date:"2021-04-04T00:00:00.000Z",formattedDate:"April 4, 2021",tags:[{label:"react",permalink:"/en/blog/tags/react"}],readingTime:12.485,truncated:!0,authors:[],prevItem:{title:"Resource Priority",permalink:"/en/blog/resource-priority"},nextItem:{title:"Third-party JavaScript performance",permalink:"/en/blog/third-party-javascript-performance-with-script-async-defer"}},p={authorsImageUrls:[]},f=[],s={toc:f};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Reconciliation\uc740 React\uc758 "\ube44\uad50(diffing)" \uc54c\uace0\ub9ac\uc998\uc785\ub2c8\ub2e4. \uc774 \ube44\uad50 \uc54c\uace0\ub9ac\uc998 \ub355\ubd84\uc5d0 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uac31\uc2e0\uc774 \uc608\uce21 \uac00\ub2a5\ud574\uc9c0\uba74\uc11c\ub3c4 \uace0\uc131\ub2a5 \uc571\uc774\ub77c\uace0 \ubd88\ub7ec\ub3c4 \uc190\uc0c9\uc5c6\uc744 \ub9cc\ud07c \ucda9\ubd84\ud788 \ube60\ub978 \uc571\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4'))}m.isMDXComponent=!0}}]);