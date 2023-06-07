"use strict";(self.webpackChunkmeoo_space=self.webpackChunkmeoo_space||[]).push([[8592],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6123:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const l={title:"TS \u4e2d Declare \u7684\u4f5c\u7528",slug:"declare",sidebar_position:3},o=void 0,c={unversionedId:"notes/TypeScript/declare",id:"notes/TypeScript/declare",title:"TS \u4e2d Declare \u7684\u4f5c\u7528",description:"\u5728\u5f88\u591a\u9879\u76ee\u91cc\u53ef\u4ee5\u770b\u5230 .d.ts \u8fd9\u6837\u7684\u6587\u4ef6\uff0c\u5728\u8fd9\u91cc\u9762\u6709\u65f6\u4f1a\u6709\u5f88\u591a declare \u51fa\u73b0\u3002\u5b83\u7684\u4f5c\u7528\u662f\uff0c\u58f0\u660e\u4e00\u4e2a\u6a21\u5757\u3001\u53d8\u91cf\u3001\u7c7b\u578b...*",source:"@site/docs/notes/TypeScript/declare.md",sourceDirName:"notes/TypeScript",slug:"/notes/TypeScript/declare",permalink:"/docs/notes/TypeScript/declare",draft:!1,editUrl:"https://github.com/hzwz/hzwz.github.io/tree/main/docs/notes/TypeScript/declare.md",tags:[],version:"current",lastUpdatedBy:"ICE",sidebarPosition:3,frontMatter:{title:"TS \u4e2d Declare \u7684\u4f5c\u7528",slug:"declare",sidebar_position:3},sidebar:"notes",previous:{title:"TS \u4e2d module \u548c namespace",permalink:"/docs/notes/TypeScript/ts-module-namespace"},next:{title:"\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/docs/category/\u8bbe\u8ba1\u6a21\u5f0f"}},i={},s=[{value:"\u58f0\u660e\u540d\u79f0\u7a7a\u95f4\uff08\u6a21\u5757\uff09",id:"\u58f0\u660e\u540d\u79f0\u7a7a\u95f4\u6a21\u5757",level:2},{value:"\u58f0\u660e\u53d8\u91cf",id:"\u58f0\u660e\u53d8\u91cf",level:2},{value:"\u58f0\u660e\u5e26\u5c5e\u6027\u7684\u5bf9\u8c61",id:"\u58f0\u660e\u5e26\u5c5e\u6027\u7684\u5bf9\u8c61",level:2},{value:"\u91cd\u8f7d\u51fd\u6570\u7b7e\u540d",id:"\u91cd\u8f7d\u51fd\u6570\u7b7e\u540d",level:2},{value:"\u58f0\u660e\u7c7b",id:"\u58f0\u660e\u7c7b",level:2},{value:"\u7ec4\u7ec7\u7c7b\u578b",id:"\u7ec4\u7ec7\u7c7b\u578b",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u5f88\u591a\u9879\u76ee\u91cc\u53ef\u4ee5\u770b\u5230 *.d.ts \u8fd9\u6837\u7684\u6587\u4ef6\uff0c\u5728\u8fd9\u91cc\u9762\u6709\u65f6\u4f1a\u6709\u5f88\u591a ",(0,a.kt)("inlineCode",{parentName:"p"},"declare")," \u51fa\u73b0\u3002",(0,a.kt)("strong",{parentName:"p"},"\u5b83\u7684\u4f5c\u7528\u662f\uff0c\u58f0\u660e\u4e00\u4e2a\u6a21\u5757\u3001\u53d8\u91cf\u3001\u7c7b\u578b...")),(0,a.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u4e00\u4e9b\u5e93\u4e0d\u63d0\u4f9b\u7c7b\u578b\u58f0\u660e\uff0c\u4f7f\u7528\u5b83\u7684\u65f6\u5019\u5c31\u4f1a\u5f88\u8ff7\u832b\uff0c\u6ca1\u6709\u4ee3\u7801\u63d0\u793a\u3002\u6709\u65f6\u5019\uff0c\u4f7f\u7528\u67d0\u4e2aSDK\uff0c\u5982\u679c\u4e0d\u53bb\u58f0\u660e\u4e00\u4e0b\u5b83\uff0c\u4f1a\u62a5\u9519\u8bf4 \u201c\u627e\u4e0d\u5230\u540d\u79f0xxx\u201d \uff0c\u8fd9\u65f6\u5019\u5c31\u9700\u8981\u6211\u4eec\u81ea\u5df1\u53bb\u58f0\u660e\u4e00\u4e0b\u5b83\u3002 "),(0,a.kt)("p",null,"\u53ef\u4ee5\u76f4\u63a5\u5728\u4f7f\u7528\u5b83\u7684ts\u6587\u4ef6\u91cc\u58f0\u660e\uff0c\u4e5f\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"*.d.ts")," \u91cc\u8fdb\u884c\u5168\u5c40\u8303\u56f4\u7684\u58f0\u660e\u3002"),(0,a.kt)("h2",{id:"\u58f0\u660e\u540d\u79f0\u7a7a\u95f4\u6a21\u5757"},"\u58f0\u660e\u540d\u79f0\u7a7a\u95f4\uff08\u6a21\u5757\uff09"),(0,a.kt)("p",null,"\u67d0\u4e2a\u516c\u53f8\u5b9e\u73b0\u4e86\u4e00\u4e2a\u5e93\uff0c\u53eb BOS3D\uff0c\u9879\u76ee\u4e2d\u8981\u4f7f\u7528\u8fd9\u4e2a\u5e93\uff0c\u4e14\u5df2\u7ecf\u628a\u4ed6\u6302\u5230\u4e86 window \u5bf9\u8c61\u4e0a\uff0c\u6211\u4eec\u5728\u9879\u76ee\u91cc\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"BOS3D.Version")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"new BOS3D.Viewer()"),"\uff0c\u4f46\u662f\u5728TS\u5199\u7684\u9879\u76ee\u4e2d\uff0c\u4f1a\u63d0\u793a\u627e\u4e0d\u5230\u540d\u79f0BOS3D\uff0c\u8fd9\u65f6\u5019\u9700\u8981\u81ea\u5df1\u7b80\u8981\u5730\u58f0\u660e\u4e00\u4e0b\u8fd9\u4e2a\u4e1c\u897f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"declare namespace BOS3D {\n  var MODE: 'prod' | 'dev' | 'test';\n  const Version = 4;\n\n  class Viewer {\n    constructor();\n  }\n}\n\nnew BOS3D.Viewer(); // \u53ef\u4ee5\u4f7f\u7528\u4e86\nBOS3D.Version; // 4\n")),(0,a.kt)("p",null,"\u7ecf\u8fc7\u7b80\u5355\u7684\u58f0\u660e\u4e4b\u540e\uff0c\u5c31\u4e0d\u62a5\u9519\u4e86\uff0c\u4e5f\u6709\u7b80\u5355\u7684\u63d0\u793a\u4e86\u3002"),(0,a.kt)("h2",{id:"\u58f0\u660e\u53d8\u91cf"},"\u58f0\u660e\u53d8\u91cf"),(0,a.kt)("p",null,"\u4f7f\u7528 declare \u6765\u58f0\u660e\u53d8\u91cf\uff0c\u53ef\u4ee5\u7528 var, const, let \u5173\u952e\u5b57\u6765\u5b8c\u6210\u58f0\u660e\u3002\u5982\u679c\u60f3\u8981\u5b9a\u4e49\u53ea\u8bfb\u7684\u53d8\u91cf\uff0c\u5c31\u7528 const\u3002\u5982\u679c\u60f3\u8981\u53d8\u91cf\u662f\u5757\u7ea7\u4f5c\u7528\u57df\uff0c\u5c31\u7528 let\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"declare var age: number;\ndeclare const year: number;\ndeclare let month: number;\n")),(0,a.kt)("h2",{id:"\u58f0\u660e\u5e26\u5c5e\u6027\u7684\u5bf9\u8c61"},"\u58f0\u660e\u5e26\u5c5e\u6027\u7684\u5bf9\u8c61"),(0,a.kt)("p",null,"\u5047\u5982\u6709\u4e00\u4e2a myLib \u5168\u5c40\u53d8\u91cf\uff0c\u91cc\u9762\u6709\u4e00\u4e2a makeGreeting \u51fd\u6570\uff0c\u548c\u4e00\u4e2a numberOfGreetings \u5c5e\u6027\u6765\u50a8\u5b58\u95ee\u5019\u6b21\u6570\u3002\u5e94\u8be5\u8fd9\u6837\u6765\u5b9a\u4e49\u58f0\u660e\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"declare namespace myLib {\n  function makeGreeting(s: string): string;\n  let numberOfGreetings: number;\n}\n")),(0,a.kt)("h2",{id:"\u91cd\u8f7d\u51fd\u6570\u7b7e\u540d"},"\u91cd\u8f7d\u51fd\u6570\u7b7e\u540d"),(0,a.kt)("p",null,"\u8fd9\u79cd\u573a\u666f\uff0c\u5728\u7f16\u8bd1\u5668\u4e0d\u77e5\u9053\u51fd\u6570\u5b9a\u4e49\u5728\u54ea\u91cc\u65f6\uff0c\u544a\u8bc9\u7f16\u8bd1\u5668\u8be5\u51fd\u6570\u662f\u600e\u6837\u5b9a\u4e49\u7684\u7c7b\u578b\u7b7e\u540d\uff0c\u800c\u4e0d\u662f\u5728\u81ea\u5df1\u5b9e\u73b0\u51fd\u6570\u7b7e\u540d\u91cd\u8f7d\u65f6\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u6b63\u786e\u7528\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// \u4f7f\u7528\u4e86\u67d0\u4e9b\u672a\u77e5\u5e93\uff0c\u627e\u4e0d\u5230\u51fd\u6570\u5b9a\u4e49\uff0c\u6ca1\u6709\u4ee3\u7801\u63d0\u793a\uff1b\u8fd9\u6837\u6765\u81ea\u5df1\u5b9a\u4e49\u4e00\u4e0b\uff0c\u65b9\u4fbf\u5f00\u53d1\uff1b\ndeclare function getPerson(s: string): object;\ndeclare function getPerson(n: number): object;\n")),(0,a.kt)("p",null,"\u9519\u8bef\u7528\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"declare function getPerson(s: string): object;\ndeclare function getPerson(n: number): object;\nfunction getPerson(arg: string | number): object {\n  // ...\n}\n")),(0,a.kt)("p",null,"\u5982\u679c\u81ea\u5df1\u5b9e\u73b0\u51fd\u6570\u7b7e\u540d\u91cd\u8f7d\uff0c\u76f4\u63a5 function \u8fde\u4e32\u4e0b\u6765\u3002\u4e0d\u7528 declare\uff0c\u5b83\u7684\u4f5c\u7528\u53ea\u662f\u544a\u8bc9\u7f16\u8bd1\u5668\u4e1c\u897f\u662f\u600e\u4e48\u5b9a\u4e49\u7684\uff0c\u548c\u5b9e\u73b0\u6beb\u65e0\u5173\u7cfb\u3002"),(0,a.kt)("h2",{id:"\u58f0\u660e\u7c7b"},"\u58f0\u660e\u7c7b"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"declare class")," \u6765\u63cf\u8ff0\u4e00\u4e2a\u7c7b\uff0c\u6216\u8005\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},"\u4f3c\u7c7b")," \u7684\u5bf9\u8c61\uff0c\u7c7b\u53ef\u4ee5\u5b9a\u4e49\u5c5e\u6027\u6216\u8005\u65b9\u6cd5\uff0c\u4e5f\u5305\u62ec\u6784\u9020\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'declare class Greeter {\n  constructor(greeting: string);\n  greeting: string;\n  showGreeting(): void;\n}\n\nconst myGreeter = new Greeter("hello, world");\nmyGreeter.greeting = "howdy";\nmyGreeter.showGreeting();\n\nclass SpecialGreeter extends Greeter {\n  constructor() {\n    super("Very special greetings");\n  }\n}\n')),(0,a.kt)("p",null,"\u8fd9\u662f\u5b9a\u4e49\u7c7b\u578b\uff01\uff01\u4e0d\u662f\u5b9e\u73b0\uff0c\u8fd0\u884c\u80af\u5b9a\u4f1a\u62a5\u9519\uff01\u53ea\u662f\u65b9\u4fbf\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u6709\u4ee3\u7801\u63d0\u793a\u3002"),(0,a.kt)("h2",{id:"\u7ec4\u7ec7\u7c7b\u578b"},"\u7ec4\u7ec7\u7c7b\u578b"),(0,a.kt)("p",null,"\u7528\u540d\u79f0\u7a7a\u95f4 ",(0,a.kt)("inlineCode",{parentName:"p"},"namespace"),"  \u628a\u7c7b\u578b\u7ed9\u7ec4\u7ec7\u8d77\u6765\uff0c\u66f4\u89c4\u8303\u7ba1\u7406\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"declare namespace GreetingLib {\n  interface LogOptions {\n    verbose?: boolean;\n  }\n  interface AlertOptions {\n    modal: boolean;\n    title?: string;\n    color?: string;\n  }\n}\n\n// \u53ef\u4ee5\u5d4c\u5957\u5b9a\u4e49\u540d\u79f0\u7a7a\u95f4\uff0c\u4e5f\u53ef\u4ee5\u8fd9\u6837\u901a\u8fc7 xxx.xx \u5b9a\u4e49\u5185\u5d4c\u7684\u540d\u79f0\u7a7a\u95f4\ndeclare namespace GreetingLib.Options {\n  interface Log {\n    verbose?: boolean;\n  }\n  interface Alert {\n    modal: boolean;\n    title?: string;\n    color?: string;\n  }\n}\n\nfunction exportLog(arg: GreetingLib.Options.Log) {\n  //...\n}\n")))}u.isMDXComponent=!0}}]);