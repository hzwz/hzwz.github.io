"use strict";(self.webpackChunkmeoo_space=self.webpackChunkmeoo_space||[]).push([[2682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},i),{},{components:n})):r.createElement(f,l({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"TS \u4e2d module \u548c namespace",slug:"ts-module-namespace",sidebar_position:2},l=void 0,p={unversionedId:"notes/TypeScript/module-namespace",id:"notes/TypeScript/module-namespace",title:"TS \u4e2d module \u548c namespace",description:"\u6a21\u5757\u548c\u540d\u79f0\u7a7a\u95f4\uff0c\u5b9e\u9645\u7528\u8d77\u6765\u6ca1\u4ec0\u4e48\u533a\u522b\uff0c\u4f46\u662f\u6982\u5ff5\u4e0a\u6709\u4e9b\u4e0d\u540c\u3002",source:"@site/docs/notes/TypeScript/module-namespace.md",sourceDirName:"notes/TypeScript",slug:"/notes/TypeScript/ts-module-namespace",permalink:"/docs/notes/TypeScript/ts-module-namespace",draft:!1,editUrl:"https://github.com/hzwz/hzwz.github.io/tree/main/docs/notes/TypeScript/module-namespace.md",tags:[],version:"current",lastUpdatedBy:"ATOMIC",sidebarPosition:2,frontMatter:{title:"TS \u4e2d module \u548c namespace",slug:"ts-module-namespace",sidebar_position:2},sidebar:"notes",previous:{title:"\u4ece JavaScript \u5230 TypeScript",permalink:"/docs/notes/TypeScript/js-to-ts"},next:{title:"TS \u4e2d Declare \u7684\u4f5c\u7528",permalink:"/docs/notes/TypeScript/declare"}},c={},s=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],i={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6a21\u5757\u548c\u540d\u79f0\u7a7a\u95f4\uff0c\u5b9e\u9645\u7528\u8d77\u6765\u6ca1\u4ec0\u4e48\u533a\u522b\uff0c\u4f46\u662f\u6982\u5ff5\u4e0a\u6709\u4e9b\u4e0d\u540c\u3002"),(0,a.kt)("p",null,"\u6a21\u5757\u7684\u8bbe\u8ba1\u7406\u5ff5\u662f\u5206\u5272\u548c\u7ec4\u7ec7\u4ee3\u7801\u6587\u4ef6\uff0c\u4e00\u4e2a\u6587\u4ef6\u5c31\u662f\u4e00\u4e2amodule\u3002\u5728\u4e00\u4e2a\u6587\u4ef6\u4e2d\u8bbf\u95ee\u53e6\u4e00\u4e2a\u6587\u4ef6\u5fc5\u987b\u8981\u52a0\u8f7d\uff08import\u6216\u8005require\uff09\u5b83\u3002"),(0,a.kt)("p",null,"\u5f15\u7528TS\u5b98\u7f51\u7684\u4e00\u53e5\u8bdd\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"It\u2019s important to note that in TypeScript 1.5, the nomenclature has changed. \u201cInternal modules\u201d are now \u201cnamespaces\u201d. \u201cExternal modules\u201d are now simply \u201cmodules\u201d")),(0,a.kt)("p",null,"\u81ea TS 1.5 \u4ee5\u540e\uff0cnamespace \u53ef\u4ee5\u770b\u4f5c\u662f\u5185\u90e8\u6a21\u5757\uff0cmodules \u5c31\u662f\u5b83\u539f\u672c\u7684\u610f\u601d\uff08\u5916\u90e8\u6a21\u5757\uff09\u3002\u547d\u540d\u7a7a\u95f4\u987e\u540d\u601d\u4e49\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7a7a\u95f4\uff0c\u5728\u8fd9\u91cc\u9762\u5b9a\u4e49\u7684\u53d8\u91cf\u3001\u63a5\u53e3\u3001\u51fd\u6570\u7b49\uff0c\u4e0e\u5176\u4ed6\u7a7a\u95f4\u9694\u79bb\uff0c\u4e5f\u5c31\u662f\u8bf4\u4ed6\u4eec\u7684\u540d\u79f0\u76f8\u540c\u4e5f\u4e0d\u4f1a\u4e92\u76f8\u5f71\u54cd\uff0c\u5c31\u50cf Java \u4e2d\u7684\u5305\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'/// <reference path = "..." />'),"\uff0c\u8fd9\u4e2a\u6307\u4ee4\u4f1a\u5f15\u5165\u8981\u52a0\u8f7d\u7684ts\u6587\u4ef6\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u4f7f\u7528\u5176\u4e2d\u7684\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u8fd9\u4e9b\u4ee3\u7801\uff0c\u5728\u4e0d\u540c\u6587\u4ef6\u91cc\u5171\u540c\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u79f0\u7a7a\u95f4 Card\uff0c\u8be5\u540d\u79f0\u7a7a\u95f4\u4e0b\u66b4\u9732\u4e86\u51e0\u4e2a\u7c7b\uff0c\u5206\u522b\u662f Circle, Triangle, Square\u3002\u5e76\u5728\u540d\u79f0\u7a7a\u95f4\u4e4b\u5916\uff0c\u5b9a\u4e49\u4e86\u4e00\u4e2a Drawable \u63a5\u53e3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/// <reference path = \"./Shape.ts\" />\n\n// Circle.ts\nnamespace Card {\n  export class Circle implements Drawable {\n    type = 'Circle';\n    constructor(){\n      \n    }\n    draw() {\n      console.log('Draw Circle.');\n    }\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Shape.ts\ninterface Drawable {\n  draw(); // \u5b9a\u4e49\u62bd\u8c61 draw \u65b9\u6cd5\n}\n\nnamespace Card {\n  export class Triangle implements Drawable {\n    // \u5b9e\u73b0 draw \u65b9\u6cd5\n    draw() {\n      console.log('Draw Triangle.');\n    }\n  }\n  export class Square implements Drawable {\n    draw() {\n      console.log('Draw Square.');\n    }\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'/// <reference path="./Circle.ts" />\n/// <reference path="./Shape.ts" />\n\n// Test.ts\nfunction testCircle(shape: Card.Circle) {\n  shape.draw();\n}\n\nfunction testTriangle(shape: Card.Triangle) {\n  shape.draw();\n}\n\nfunction testSquare(shape: Card.Square) {\n  shape.draw();\n}\n\ntestCircle(new Card.Circle());\n')))}u.isMDXComponent=!0}}]);