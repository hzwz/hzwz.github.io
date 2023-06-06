"use strict";(self.webpackChunkmeoo_space=self.webpackChunkmeoo_space||[]).push([[1976],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),b=i(r),f=o,m=b["".concat(c,".").concat(f)]||b[f]||s[f]||l;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=b;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var i=2;i<l;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},9974:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const l={title:"\u5173\u4e8e\u84dd\u7259\u7684\u95ee\u9898",slug:"/bluetooth"},a=void 0,u={unversionedId:"hackfun/arch/bluetooth",id:"hackfun/arch/bluetooth",title:"\u5173\u4e8e\u84dd\u7259\u7684\u95ee\u9898",description:"\u5728 ArchLinux \u4e2d\u5982\u4f55\u4f7f\u7528\u84dd\u7259\u8033\u673a\u5982\u4f55\u8fde\u63a5\u5230\u7535\u8111\u770b\u89c6\u9891\u3001\u542c\u6b4c\u3002",source:"@site/docs/hackfun/arch/bluetooth.md",sourceDirName:"hackfun/arch",slug:"/bluetooth",permalink:"/docs/bluetooth",draft:!1,editUrl:"https://github.com/hzwz/hzwz.github.io/tree/main/docs/hackfun/arch/bluetooth.md",tags:[],version:"current",lastUpdatedBy:"ATOMIC",frontMatter:{title:"\u5173\u4e8e\u84dd\u7259\u7684\u95ee\u9898",slug:"/bluetooth"},sidebar:"hackfun",previous:{title:"\u7b14\u8bb0\u672c\u98ce\u6247\u901f\u5ea6\u7ba1\u7406",permalink:"/docs/fan-speed-control"}},c={},i=[],p={toc:i};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728 ArchLinux \u4e2d\u5982\u4f55\u4f7f\u7528\u84dd\u7259\u8033\u673a\u5982\u4f55\u8fde\u63a5\u5230\u7535\u8111\u770b\u89c6\u9891\u3001\u542c\u6b4c\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88c5 bluez\uff0c\u8fd9\u4e2a\u8f6f\u4ef6\u5305\u63d0\u4f9b\u84dd\u7259\u534f\u8bae\u6808\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88c5 bluez-utils\uff0c\u8fd9\u4e2a\u8f6f\u4ef6\u5305\u63d0\u4f9b bluetoothctl \u5b9e\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u7528\u84dd\u7259\u9a71\u52a8\u662f btusb \u5185\u6838\u6a21\u5757\u3002\u68c0\u67e5\u6a21\u5757\u662f\u5426\u5df2\u52a0\u8f7d\u3002\u5982\u679c\u8fd8\u6ca1\u6709\uff0c\u5148\u52a0\u8f7d\u6a21\u5757\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u542f\u52a8/\u542f\u7528 bluetooth.service\u3002")),(0,o.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yay -S bluez bluez-utils # \u5b89\u88c5bluez\u548cbluez-utils\n\nlsmod | grep btusb #\u68c0\u67e5\u6a21\u5757\u662f\u5426\u52a0\u8f7d\n\nmodprobe btusb #\u52a0\u8f7d\u6a21\u5757\n\nsystemctl enable bluetooth #\u5f00\u673a\u81ea\u542f\u52a8\u84dd\u7259\u670d\u52a1\n")),(0,o.kt)("p",null,"\u901a\u5e38\u8fd9\u6837\u5c31\u53ef\u4ee5\u4e86\uff0c\u4f46\u662f\u5982\u679c\u8fde\u4e0d\u4e0a\u53bb\uff0c\u5c1d\u8bd5\u5b89\u88c5 pulseaudio-bluetooth\uff0c\u5b8c\u6210\u540e\u91cd\u542f\uff0c\u5373\u53ef\u8fde\u4e0a\u3002"))}s.isMDXComponent=!0}}]);