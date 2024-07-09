"use strict";(self.webpackChunkuserdocs=self.webpackChunkuserdocs||[]).push([[103],{562:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s}});var r=n(3117),a=(n(7294),n(3905));const l={title:"Using the service"},i=void 0,o={unversionedId:"getting-started/usage",id:"getting-started/usage",title:"Using the service",description:"We recommend using one of the following tools to send requests to the Flintlock server.",source:"@site/docs/getting-started/usage.md",sourceDirName:"getting-started",slug:"/getting-started/usage",permalink:"/flintlock/docs/getting-started/usage",draft:!1,editUrl:"https://github.com/liquidmetal-dev/flintlock/edit/main/userdocs/docs/getting-started/usage.md",tags:[],version:"current",frontMatter:{title:"Using the service"},sidebar:"gettingStartedSidebar",previous:{title:"Flintlock",permalink:"/flintlock/docs/getting-started/flintlock"},next:{title:"MicroVM images",permalink:"/flintlock/docs/guides/images"}},p={},s=[{value:"hammertime",id:"hammertime",level:2},{value:"Example",id:"example",level:3},{value:"fl",id:"fl",level:2},{value:"Example",id:"example-1",level:3},{value:"grpc-client-cli",id:"grpc-client-cli",level:2},{value:"Example",id:"example-2",level:3},{value:"BloomRPC",id:"bloomrpc",level:2},{value:"Import",id:"import",level:3},{value:"Example",id:"example-3",level:3}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We recommend using one of the following tools to send requests to the Flintlock server.\nThere are GUI and CLI options."),(0,a.kt)("h2",{id:"hammertime"},"hammertime"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/warehouse-13/hammertime"},"hammertime")," is a simple tool which gives a nice wrapper around what is essentially\na ",(0,a.kt)("inlineCode",{parentName:"p"},"curl"),". Use this if you need no bells and whistles and would rather manipulate your\nown ",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"hammertime create -a 192.168.1.66:9090 -n my-microvm -ns my-namespace\n\nhammertime get -a 192.168.1.66:9090 -i <UUID>\n\nhammertime create -a 192.168.1.66:9090 -f spec.json\n\nhammertime delete -a 192.168.1.66:9090 --all\n")),(0,a.kt)("h2",{id:"fl"},"fl"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/liquidmetal-dev/fl"},"fl")," aims to provide a fuller user experience, with formatted output and some\nextra features for handling your MicroVMs."),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"coming soon...")),(0,a.kt)("h2",{id:"grpc-client-cli"},"grpc-client-cli"),(0,a.kt)("p",null,"For the most bare-bones experience, use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fullstorydev/grpcurl"},"grpcurl")," and the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/liquidmetal-dev/flintlock/blob/main/hack/scripts/send.sh"},(0,a.kt)("inlineCode",{parentName:"a"},"./hack/scripts/send.sh"))," script."),(0,a.kt)("h3",{id:"example-2"},"Example"),(0,a.kt)("p",null,"To create a MicroVM:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./hack/scripts/send.sh \\\n  --method CreateMicroVM\n")),(0,a.kt)("h2",{id:"bloomrpc"},"BloomRPC"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/uw-labs/bloomrpc"},"BloomRPC")," is a GUI tool to test gRPC endpoints."),(0,a.kt)("h3",{id:"import"},"Import"),(0,a.kt)("p",null,"To import Flintlock protos into the Bloom GUI:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Import Paths")," on the left-hand menu bar and add ",(0,a.kt)("inlineCode",{parentName:"li"},"<absolute-repo-path>/api")," to the list"),(0,a.kt)("li",{parentName:"ol"},"Click the import ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," button and select ",(0,a.kt)("inlineCode",{parentName:"li"},"flintlock/api/services/microvm/v1alpha1/microvms.proto"))),(0,a.kt)("p",null,"All available endpoints will be visible in a nice tree view."),(0,a.kt)("h3",{id:"example-3"},"Example"),(0,a.kt)("p",null,"To create a MircoVM, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateMicroVM")," endpoint in the left-hand menu.\nReplace the sample request JSON in the left editor panel with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/liquidmetal-dev/flintlock/blob/main/hack/scripts/payload/CreateMicroVM.json"},"this\nexample"),". Click the green ",(0,a.kt)("inlineCode",{parentName:"p"},">")," in the centre of the\nscreen. The response should come immediately."),(0,a.kt)("p",null,"In the terminal where you started the Flintlock server, you should see in the\nlogs that the MircoVM has started."),(0,a.kt)("p",null,"To delete the MircoVM, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"DeleteMicroVM")," endpoint in the left-hand\nmenu. Replace the sample request JSON in the left editor panel with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/liquidmetal-dev/flintlock/blob/main/hack/scripts/payload/DeleteMicroVM.json"},"this\nexample"),". Take care to ensure the values match those\nof the MicroVM you created earlier. Click the green ",(0,a.kt)("inlineCode",{parentName:"p"},">")," in the centre of the\nscreen. The response should come immediately."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: there are example payloads for other endpoints, but not all are\nimplemented at present.")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);