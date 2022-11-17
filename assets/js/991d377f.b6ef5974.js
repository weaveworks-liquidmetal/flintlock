"use strict";(self.webpackChunkuserdocs=self.webpackChunkuserdocs||[]).push([[561],{8305:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return m}});var r=n(3117),a=(n(7294),n(3905));const i={title:"MicroVM images"},l=void 0,o={unversionedId:"guides/images",id:"guides/images",title:"MicroVM images",description:"MicroVMs receive kernel binaries and Operating System volumes from container images.",source:"@site/docs/guides/images.md",sourceDirName:"guides",slug:"/guides/images",permalink:"/flintlock/docs/guides/images",draft:!1,editUrl:"https://github.com/weaveworks-liquidmetal/flintlock/edit/main/userdocs/docs/guides/images.md",tags:[],version:"current",frontMatter:{title:"MicroVM images"},sidebar:"gettingStartedSidebar",previous:{title:"Using the service",permalink:"/flintlock/docs/getting-started/usage"},next:{title:"Metrics exporter",permalink:"/flintlock/docs/guides/metrics"}},u={},m=[{value:"Supported images",id:"supported-images",level:2},{value:"Experimental images",id:"experimental-images",level:2},{value:"Build your own",id:"build-your-own",level:2},{value:"Setup",id:"setup",level:3},{value:"Building a volume container image",id:"building-a-volume-container-image",level:3},{value:"Building a Kernel/Initrd container image",id:"building-a-kernelinitrd-container-image",level:3}],s={toc:m};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"MicroVMs receive kernel binaries and Operating System volumes from container images.\nThis means that users can easily create and publish their own on Dockerhub."),(0,a.kt)("p",null,"Compatible images are published as part of the ",(0,a.kt)("a",{parentName:"p",href:"https://weaveworks-liquidmetal.github.io/site/"},"Liquid Metal")," project."),(0,a.kt)("h2",{id:"supported-images"},"Supported images"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kernel"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ghcr.io/weaveworks-liquidmetal/flintlock-kernel:5.10.77")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ghcr.io/weaveworks-liquidmetal/flintlock-kernel:4.19.215"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OS"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The tags here refer to the version of Kubernetes."),"\n",(0,a.kt)("em",{parentName:"p"},"The base OS is Ubuntu ",(0,a.kt)("inlineCode",{parentName:"em"},"20.04"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ghcr.io/weaveworks-liquidmetal/capmvm-kubernetes:1.23.5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ghcr.io/weaveworks-liquidmetal/capmvm-kubernetes:1.22.8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ghcr.io/weaveworks-liquidmetal/capmvm-kubernetes:1.22.3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ghcr.io/weaveworks-liquidmetal/capmvm-kubernetes:1.21.8"))),(0,a.kt)("h2",{id:"experimental-images"},"Experimental images"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"These images are not guaranteed to work.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kernel"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ghcr.io/weaveworks-liquidmetal/flintlock-kernel-arm:5.10.77")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ghcr.io/weaveworks-liquidmetal/flintlock-kernel-arm:4.19.215"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OS"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ghcr.io/weaveworks-liquidmetal/capmvm-kubernetes-arm:1.23.5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ghcr.io/weaveworks-liquidmetal/capmvm-kubernetes-arm:1.22.8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ghcr.io/weaveworks-liquidmetal/capmvm-kubernetes-arm:1.22.3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ghcr.io/weaveworks-liquidmetal/capmvm-kubernetes-arm:1.21.8"))),(0,a.kt)("h2",{id:"build-your-own"},"Build your own"),(0,a.kt)("p",null,"You can build your own images and supply them in your CreateMicroVM requests."),(0,a.kt)("p",null,"Our image builder can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/weaveworks-liquidmetal/image-builder"},"here")," if you would like to use it as a base."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"firecracker")," only documents support for ",(0,a.kt)("inlineCode",{parentName:"p"},"5.10")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"4.19")," kernels.")),(0,a.kt)("p",null,"If you'd prefer more bare-bone images, here are some broken down steps for creating\nimages for volumes, kernels and ",(0,a.kt)("inlineCode",{parentName:"p"},"initrd"),"."),(0,a.kt)("h3",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Run the following command to download the Ubuntu Server cloud images:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./hack/scripts/download_cloudimages.sh\n")),(0,a.kt)("p",null,"This downloads the Ubuntu Server Cloud Image files and and processes them.\nThe downloaded files and processed files will be available in ",(0,a.kt)("inlineCode",{parentName:"p"},"out/images")," by default.\nThere are a number of flags that can be used for custimization:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Flag"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-o/--output"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the output folder to use. Defaults to ",(0,a.kt)("inlineCode",{parentName:"td"},"./out"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-v/--version"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the ubuntu version to download. Defaults to ",(0,a.kt)("inlineCode",{parentName:"td"},"bionic"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-s/--image-size"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the size of the root fs to create. Defaluts to ",(0,a.kt)("inlineCode",{parentName:"td"},"10G"),".")))),(0,a.kt)("p",null,"The processed files (i.e. root filesystem, uncompressed kernel, initrd) can be used directly with Firecracker without flintlock."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"As an alternative using the download script you can use ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.debian.org/Debootstrap"},"debootstrap"),"\nby running ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo debootstrap bionic ./out/images/mount > /dev/null"),".\nThe commands in the following sections may need to be adapted.")),(0,a.kt)("h3",{id:"building-a-volume-container-image"},"Building a volume container image"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following to mount the downloaded and processed root filesystem:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p out/images/mount\nsudo mount -o loop out/images/bionic/bionic.rootfs ./out/images/mount\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following to create the container image (replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"myorg/ubuntu-bionic-volume:v0.0.1")," with your required container image name/tag):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo tar -C ./out/images/mount -c . | docker import - myorg/ubuntu-bionic-volume:v0.0.1\ndocker push myorg/ubuntu-bionic-volume:v0.0.1\n")))),(0,a.kt)("h3",{id:"building-a-kernelinitrd-container-image"},"Building a Kernel/Initrd container image"),(0,a.kt)("p",null,"We recommend using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/firecracker-microvm/firecracker/tree/main/resources/guest_configs"},"Firecracker's kernel config")," if you are building anew."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a Dockerfile that adds the uncompressed kernel and initrd. For example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM scratch\n\nCOPY vmlinux initrd-generic /\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use docker build and then push"))))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(n),c=a,k=d["".concat(u,".").concat(c)]||d[c]||p[c]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);