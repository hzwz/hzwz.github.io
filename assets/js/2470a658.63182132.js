"use strict";(self.webpackChunkmeoo_space=self.webpackChunkmeoo_space||[]).push([[8731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),y=l(n),f=o,m=y["".concat(i,".").concat(f)]||y[f]||u[f]||p;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,c=new Array(p);c[0]=y;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<p;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>p,metadata:()=>a,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const p={title:"\u539f\u578b\u6a21\u5f0f (Prototype)",slug:"prototype",sidebar_position:5},c=void 0,a={unversionedId:"notes/pattern/prototype",id:"notes/pattern/prototype",title:"\u539f\u578b\u6a21\u5f0f (Prototype)",description:"\u539f\u578b\u6a21\u5f0f\u662f\u4e00\u79cd\u521b\u5efa\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u4f7f\u4f60\u80fd\u591f\u590d\u5236\u5df2\u6709\u5bf9\u8c61\uff0c\u800c\u53c8\u65e0\u9700\u4f7f\u4ee3\u7801\u4f9d\u8d56\u5b83\u4eec\u6240\u5c5e\u7684\u7c7b\u3002",source:"@site/docs/notes/pattern/prototype.md",sourceDirName:"notes/pattern",slug:"/notes/pattern/prototype",permalink:"/docs/notes/pattern/prototype",draft:!1,editUrl:"https://github.com/hzwz/hzwz.github.io/tree/main/docs/notes/pattern/prototype.md",tags:[],version:"current",lastUpdatedBy:"ICE",sidebarPosition:5,frontMatter:{title:"\u539f\u578b\u6a21\u5f0f (Prototype)",slug:"prototype",sidebar_position:5},sidebar:"notes",previous:{title:"\u751f\u6210\u5668\u6a21\u5f0f (Builder)",permalink:"/docs/notes/pattern/builder"},next:{title:"\u9002\u914d\u5668\u6a21\u5f0f (Adapter)",permalink:"/docs/notes/pattern/adapter"}},i={},l=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u539f\u578b\u6a21\u5f0f\u662f\u4e00\u79cd\u521b\u5efa\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u4f7f\u4f60\u80fd\u591f\u590d\u5236\u5df2\u6709\u5bf9\u8c61\uff0c\u800c\u53c8\u65e0\u9700\u4f7f\u4ee3\u7801\u4f9d\u8d56\u5b83\u4eec\u6240\u5c5e\u7684\u7c7b\u3002"),(0,o.kt)("p",null,"\u5b83\u5c06\u514b\u9686\u8fc7\u7a0b\u59d4\u6d3e\u7ed9\u88ab\u514b\u9686\u7684\u5b9e\u9645\u5bf9\u8c61\uff0c\u8fd9\u6837\u53ef\u4ee5\u89e3\u51b3\u4e00\u4e9b\u79c1\u6709\u53d8\u91cf\u65e0\u6cd5\u88ab\u5916\u90e8\u8bbf\u95ee\u5c31\u65e0\u6cd5\u5728\u5916\u90e8\u590d\u5236\u7684\u95ee\u9898\uff0c\u8ba9\u81ea\u8eab\u63d0\u4f9b\u514b\u9686\u65b9\u6cd5\u6765\u590d\u5236\u81ea\u5df1\uff0c\u7279\u5f81\u662f\u4e00\u4e2a\u7c7b\u5305\u542b ",(0,o.kt)("inlineCode",{parentName:"p"},"clone")," \u6216\u8005 ",(0,o.kt)("inlineCode",{parentName:"p"},"copy")," \u51fd\u6570\uff0c\u6765\u590d\u5236\u4e00\u4efd\u81ea\u8eab\u5bf9\u8c61\u3002"),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a Prototype \u7c7b\uff0c\u91cc\u9762\u6709 clone \u51fd\u6570\uff0c\u4f1a\u590d\u5236\u4e00\u4efd\u81ea\u8eab\u5bf9\u8c61\u5e76\u8fd4\u56de\u3002\u4e00\u822c\u4e5f\u53ef\u4ee5\uff0c\u5b9a\u4e49\u4e00\u4e2a Cloneable \u63a5\u53e3\uff0c\u63a5\u53e3\u91cc\u4ec5\u5305\u542b\u4e00\u4e2a clone \u51fd\u6570\u7684\u5b9a\u4e49\uff0c\u8ba9\u5176\u4ed6\u7c7b\u6765\u5b9e\u73b0\u8fd9\u4e2a\u63a5\u53e3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class Prototype {\n  public primitive: any;\n  public component: object | null = null;\n  public circularReference: ComponentWithBackReference | null = null;\n\n  /**\n   * \u50cf\u5b9e\u73b0\u4e00\u4e2a\u6df1\u62f7\u8d1d\uff0c\u628a\u81ea\u8eab\u7684\u6210\u5458\u53d8\u91cf\u90fd\u7ed9\u62f7\u8d1d\u4e00\u904d\uff0c\u8003\u8651\u57fa\u672c\u7c7b\u578b\u3001\u5f15\u7528\u7c7b\u578b\u3001\n   * \u5faa\u73af\u5f15\u7528\u7684\u60c5\u51b5\u3001\u65e5\u671f\u7c7b\u578b\u3001\u6b63\u5219\u5bf9\u8c61\u7b49\u7b49\n   */\n  public clone(): this {\n    const clone = Object.create(this);\n    // \u5047\u8bbe component \u5bf9\u8c61\u53ea\u6709\u4e00\u5c42\uff0c\u53ef\u4ee5\u8fd9\u6837\u62f7\u8d1d\n    clone.component = Object.create(this.component);\n    // \u5904\u7406\u5faa\u73af\u5f15\u7528\uff0c\u5148\u7528\u6269\u5c55\u8fd0\u7b97\u7b26\u628a\u57fa\u672c\u7c7b\u578b\u7684\u6210\u5458\u590d\u5236\u51fa\u6765\uff0c\u518d\u5355\u72ec\u5904\u7406 prototype\n    clone.circularReference = {\n      ...this.circularReference,\n      prototype: { ...this },\n    };\n    return clone;\n  }\n}\n\n// \u5faa\u73af\u5f15\u7528\u7684\u7c7b\uff0cprototype \u91cc\u6709\u5b83\uff0c\u5b83\u91cc\u9762\u6709 prototype\nclass ComponentWithBackReference {\n  public prototype: Prototype;\n\n  constructor(proto: Prototype) {\n    this.prototype = proto;\n  }\n}\n\n")))}u.isMDXComponent=!0}}]);