"use strict";(self.webpackChunkuserdocs=self.webpackChunkuserdocs||[]).push([[961],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),g=a,d=f["".concat(s,".").concat(g)]||f[g]||p[g]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2494:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={},s="Use Vagrant",u={unversionedId:"getting-started/extras/use-vagrant",id:"getting-started/extras/use-vagrant",title:"Use Vagrant",description:"You can use Vagrant:",source:"@site/docs/getting-started/extras/use-vagrant.md",sourceDirName:"getting-started/extras",slug:"/getting-started/extras/use-vagrant",permalink:"/docs/getting-started/extras/use-vagrant",editUrl:"https://github.com/weaveworks/flintlock/edit/main/userdocs/docs/getting-started/extras/use-vagrant.md",tags:[],version:"current",frontMatter:{},sidebar:"gettingStartedSidebar",previous:{title:"Start metrics exporter",permalink:"/docs/getting-started/extras/metrics"},next:{title:"Flintlockd fails to start",permalink:"/docs/getting-started/troubleshooting/failed-to-reconcile-vmid"}},l=[],p={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-vagrant"},"Use Vagrant"),(0,o.kt)("p",null,"You can use Vagrant:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vagrant up\n")),(0,o.kt)("p",null,"It will create a new pre-configured machine ready to use.\nRun the rest of the instructions on this page on that machine."))}f.isMDXComponent=!0}}]);