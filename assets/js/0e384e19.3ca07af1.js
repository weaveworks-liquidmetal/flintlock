"use strict";(self.webpackChunkuserdocs=self.webpackChunkuserdocs||[]).push([[671],{1164:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var n=r(3117),i=(r(7294),r(3905));const o={title:"Introduction"},a="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"What is flintlock?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/liquidmetal-dev/flintlock/edit/main/userdocs/docs/intro.md",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"gettingStartedSidebar",next:{title:"Getting Started",permalink:"/docs/category/getting-started"}},c={},u=[{value:"What is flintlock?",id:"what-is-flintlock",level:2},{value:"Features",id:"features",level:2},{value:"Liquid Metal",id:"liquid-metal",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("admonition",{title:"site under construction",type:"warning"}),(0,i.kt)("h2",{id:"what-is-flintlock"},"What is flintlock?"),(0,i.kt)("p",null,"Flintlock is a service for creating and managing the lifecycle of microVMs on a\nhost machine. Initially we will be supporting ",(0,i.kt)("a",{parentName:"p",href:"https://firecracker-microvm.github.io/"},"Firecracker"),",\nwith an aim to default to ",(0,i.kt)("a",{parentName:"p",href:"https://www.cloudhypervisor.org/"},"Cloud Hypervisor")," in the future."),(0,i.kt)("p",null,"The primary use case for flintlock is to create microVMs on a bare-metal host\nwhere the microVMs will be used as nodes in a virtualized Kubernetes cluster.\nIt is an essential part of ",(0,i.kt)("a",{parentName:"p",href:"https://www.weave.works/blog/multi-cluster-kubernetes-on-microvms-for-bare-metal"},"Liquid Metal")," and will ultimately be\ndriven by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/liquidmetal-dev/cluster-api-provider-microvm"},"Cluster API Provider Microvm"),"."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"Using API requests (via ",(0,i.kt)("a",{parentName:"p",href:"https://buf.build/liquidmetal-dev/flintlock"},"gRPC")," or ",(0,i.kt)("a",{href:"/flintlock-api",target:"_blank"},"HTTP"),"):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create, update, delete microVMs using Firecracker"),(0,i.kt)("li",{parentName:"ul"},"Manage the lifecycle of microVMs (i.e. start, stop, pause)"),(0,i.kt)("li",{parentName:"ul"},"Configure microVM metadata via cloud-init, ignition etc"),(0,i.kt)("li",{parentName:"ul"},"Use OCI images for microVM volumes, kernel and initrd"),(0,i.kt)("li",{parentName:"ul"},"(coming soon) Use CNI to configure the network for the microVMs")),(0,i.kt)("h2",{id:"liquid-metal"},"Liquid Metal"),(0,i.kt)("p",null,"To learn more about using Flintlock MicroVMs in a Kubernetes cluster, check\nout the ",(0,i.kt)("a",{parentName:"p",href:"https://www.liquidmetal.dev"},"official Liquid Metal docs"),"."))}p.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=i,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);