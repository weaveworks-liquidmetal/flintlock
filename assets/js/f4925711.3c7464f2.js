"use strict";(self.webpackChunkuserdocs=self.webpackChunkuserdocs||[]).push([[778],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=o(a),d=r,g=k["".concat(m,".").concat(d)]||k[d]||s[d]||l;return a?n.createElement(g,i(i({ref:e},u),{},{components:a})):n.createElement(g,i({ref:e},u))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5455:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return o},toc:function(){return u},default:function(){return k}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={},m="Protocol Documentation",o={unversionedId:"grpc/services/microvm/v1alpha1/proto",id:"grpc/services/microvm/v1alpha1/proto",title:"Protocol Documentation",description:"Table of Contents",source:"@site/docs/grpc/services/microvm/v1alpha1/proto.md",sourceDirName:"grpc/services/microvm/v1alpha1",slug:"/grpc/services/microvm/v1alpha1/proto",permalink:"/docs/grpc/services/microvm/v1alpha1/proto",editUrl:"https://github.com/weaveworks/flintlock/edit/main/userdocs/docs/grpc/services/microvm/v1alpha1/proto.md",tags:[],version:"current",frontMatter:{},sidebar:"protoSidebar",previous:{title:"Protocol Documentation",permalink:"/docs/grpc/types/proto"}},u=[{value:"Table of Contents",id:"table-of-contents",children:[],level:2},{value:"services/microvm/v1alpha1/microvms.proto",id:"servicesmicrovmv1alpha1microvmsproto",children:[{value:"CreateMicroVMRequest",id:"createmicrovmrequest",children:[],level:3},{value:"CreateMicroVMRequest.MetadataEntry",id:"createmicrovmrequestmetadataentry",children:[],level:3},{value:"CreateMicroVMResponse",id:"createmicrovmresponse",children:[],level:3},{value:"DeleteMicroVMRequest",id:"deletemicrovmrequest",children:[],level:3},{value:"GetMicroVMRequest",id:"getmicrovmrequest",children:[],level:3},{value:"GetMicroVMResponse",id:"getmicrovmresponse",children:[],level:3},{value:"ListMessage",id:"listmessage",children:[],level:3},{value:"ListMicroVMsRequest",id:"listmicrovmsrequest",children:[],level:3},{value:"ListMicroVMsResponse",id:"listmicrovmsresponse",children:[],level:3},{value:"MicroVM",id:"microvm",children:[],level:3}],level:2},{value:"Scalar Value Types",id:"scalar-value-types",children:[],level:2}],s={toc:u};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"protocol-documentation"},"Protocol Documentation"),(0,l.kt)("a",{name:"top"}),(0,l.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#services/microvm/v1alpha1/microvms.proto"},"services/microvm/v1alpha1/microvms.proto")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#microvm.services.api.v1alpha1.CreateMicroVMRequest"},"CreateMicroVMRequest"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#microvm.services.api.v1alpha1.CreateMicroVMRequest.MetadataEntry"},"CreateMicroVMRequest.MetadataEntry"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#microvm.services.api.v1alpha1.CreateMicroVMResponse"},"CreateMicroVMResponse"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#microvm.services.api.v1alpha1.DeleteMicroVMRequest"},"DeleteMicroVMRequest"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#microvm.services.api.v1alpha1.GetMicroVMRequest"},"GetMicroVMRequest"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#microvm.services.api.v1alpha1.GetMicroVMResponse"},"GetMicroVMResponse"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#microvm.services.api.v1alpha1.ListMessage"},"ListMessage"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#microvm.services.api.v1alpha1.ListMicroVMsRequest"},"ListMicroVMsRequest"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#microvm.services.api.v1alpha1.ListMicroVMsResponse"},"ListMicroVMsResponse"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#microvm.services.api.v1alpha1.MicroVM"},"MicroVM"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#scalar-value-types"},"Scalar Value Types")))),(0,l.kt)("a",{name:"services/microvm/v1alpha1/microvms.proto"}),(0,l.kt)("p",{align:"right"},(0,l.kt)("a",{href:"#top"},"Top")),(0,l.kt)("h2",{id:"servicesmicrovmv1alpha1microvmsproto"},"services/microvm/v1alpha1/microvms.proto"),(0,l.kt)("a",{name:"microvm.services.api.v1alpha1.CreateMicroVMRequest"}),(0,l.kt)("h3",{id:"createmicrovmrequest"},"CreateMicroVMRequest"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"microvm"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#flintlock.types.MicroVMSpec"},"flintlock.types.MicroVMSpec")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metadata"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#microvm.services.api.v1alpha1.CreateMicroVMRequest.MetadataEntry"},"CreateMicroVMRequest.MetadataEntry")),(0,l.kt)("td",{parentName:"tr",align:null},"repeated"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("a",{name:"microvm.services.api.v1alpha1.CreateMicroVMRequest.MetadataEntry"}),(0,l.kt)("h3",{id:"createmicrovmrequestmetadataentry"},"CreateMicroVMRequest.MetadataEntry"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#string"},"string")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#google.protobuf.Any"},"google.protobuf.Any")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("a",{name:"microvm.services.api.v1alpha1.CreateMicroVMResponse"}),(0,l.kt)("h3",{id:"createmicrovmresponse"},"CreateMicroVMResponse"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"microvm"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#flintlock.types.MicroVM"},"flintlock.types.MicroVM")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("a",{name:"microvm.services.api.v1alpha1.DeleteMicroVMRequest"}),(0,l.kt)("h3",{id:"deletemicrovmrequest"},"DeleteMicroVMRequest"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uid"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#string"},"string")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("a",{name:"microvm.services.api.v1alpha1.GetMicroVMRequest"}),(0,l.kt)("h3",{id:"getmicrovmrequest"},"GetMicroVMRequest"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uid"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#string"},"string")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("a",{name:"microvm.services.api.v1alpha1.GetMicroVMResponse"}),(0,l.kt)("h3",{id:"getmicrovmresponse"},"GetMicroVMResponse"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"microvm"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#flintlock.types.MicroVM"},"flintlock.types.MicroVM")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("a",{name:"microvm.services.api.v1alpha1.ListMessage"}),(0,l.kt)("h3",{id:"listmessage"},"ListMessage"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"microvm"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#flintlock.types.MicroVM"},"flintlock.types.MicroVM")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("a",{name:"microvm.services.api.v1alpha1.ListMicroVMsRequest"}),(0,l.kt)("h3",{id:"listmicrovmsrequest"},"ListMicroVMsRequest"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#string"},"string")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("a",{name:"microvm.services.api.v1alpha1.ListMicroVMsResponse"}),(0,l.kt)("h3",{id:"listmicrovmsresponse"},"ListMicroVMsResponse"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"microvm"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#flintlock.types.MicroVM"},"flintlock.types.MicroVM")),(0,l.kt)("td",{parentName:"tr",align:null},"repeated"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("a",{name:"microvm.services.api.v1alpha1.MicroVM"}),(0,l.kt)("h3",{id:"microvm"},"MicroVM"),(0,l.kt)("p",null,"MicroVM providers a service to create and manage the lifecycle of microvms."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Request Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Response Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CreateMicroVM"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#microvm.services.api.v1alpha1.CreateMicroVMRequest"},"CreateMicroVMRequest")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#microvm.services.api.v1alpha1.CreateMicroVMResponse"},"CreateMicroVMResponse")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DeleteMicroVM"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#microvm.services.api.v1alpha1.DeleteMicroVMRequest"},"DeleteMicroVMRequest")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#google.protobuf.Empty"},".google.protobuf.Empty")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GetMicroVM"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#microvm.services.api.v1alpha1.GetMicroVMRequest"},"GetMicroVMRequest")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#microvm.services.api.v1alpha1.GetMicroVMResponse"},"GetMicroVMResponse")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ListMicroVMs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#microvm.services.api.v1alpha1.ListMicroVMsRequest"},"ListMicroVMsRequest")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#microvm.services.api.v1alpha1.ListMicroVMsResponse"},"ListMicroVMsResponse")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ListMicroVMsStream"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#microvm.services.api.v1alpha1.ListMicroVMsRequest"},"ListMicroVMsRequest")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#microvm.services.api.v1alpha1.ListMessage"},"ListMessage")," stream"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"scalar-value-types"},"Scalar Value Types"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},".proto Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"C++"),(0,l.kt)("th",{parentName:"tr",align:null},"Java"),(0,l.kt)("th",{parentName:"tr",align:null},"Python"),(0,l.kt)("th",{parentName:"tr",align:null},"Go"),(0,l.kt)("th",{parentName:"tr",align:null},"C#"),(0,l.kt)("th",{parentName:"tr",align:null},"PHP"),(0,l.kt)("th",{parentName:"tr",align:null},"Ruby"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"double"})," double"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"float64"),(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Float")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"float"})," float"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"float32"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Float")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"int32"})," int32"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses variable-length encoding. Inefficient for encoding negative numbers \u2013 if your field is likely to have negative values, use sint32 instead."),(0,l.kt)("td",{parentName:"tr",align:null},"int32"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"int32"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Bignum or Fixnum (as required)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"int64"})," int64"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses variable-length encoding. Inefficient for encoding negative numbers \u2013 if your field is likely to have negative values, use sint64 instead."),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"int/long"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"integer/string"),(0,l.kt)("td",{parentName:"tr",align:null},"Bignum")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"uint32"})," uint32"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses variable-length encoding."),(0,l.kt)("td",{parentName:"tr",align:null},"uint32"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"int/long"),(0,l.kt)("td",{parentName:"tr",align:null},"uint32"),(0,l.kt)("td",{parentName:"tr",align:null},"uint"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Bignum or Fixnum (as required)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"uint64"})," uint64"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses variable-length encoding."),(0,l.kt)("td",{parentName:"tr",align:null},"uint64"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"int/long"),(0,l.kt)("td",{parentName:"tr",align:null},"uint64"),(0,l.kt)("td",{parentName:"tr",align:null},"ulong"),(0,l.kt)("td",{parentName:"tr",align:null},"integer/string"),(0,l.kt)("td",{parentName:"tr",align:null},"Bignum or Fixnum (as required)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"sint32"})," sint32"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s."),(0,l.kt)("td",{parentName:"tr",align:null},"int32"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"int32"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Bignum or Fixnum (as required)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"sint64"})," sint64"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s."),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"int/long"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"integer/string"),(0,l.kt)("td",{parentName:"tr",align:null},"Bignum")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"fixed32"})," fixed32"),(0,l.kt)("td",{parentName:"tr",align:null},"Always four bytes. More efficient than uint32 if values are often greater than 2^28."),(0,l.kt)("td",{parentName:"tr",align:null},"uint32"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"uint32"),(0,l.kt)("td",{parentName:"tr",align:null},"uint"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Bignum or Fixnum (as required)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"fixed64"})," fixed64"),(0,l.kt)("td",{parentName:"tr",align:null},"Always eight bytes. More efficient than uint64 if values are often greater than 2^56."),(0,l.kt)("td",{parentName:"tr",align:null},"uint64"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"int/long"),(0,l.kt)("td",{parentName:"tr",align:null},"uint64"),(0,l.kt)("td",{parentName:"tr",align:null},"ulong"),(0,l.kt)("td",{parentName:"tr",align:null},"integer/string"),(0,l.kt)("td",{parentName:"tr",align:null},"Bignum")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"sfixed32"})," sfixed32"),(0,l.kt)("td",{parentName:"tr",align:null},"Always four bytes."),(0,l.kt)("td",{parentName:"tr",align:null},"int32"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"int32"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Bignum or Fixnum (as required)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"sfixed64"})," sfixed64"),(0,l.kt)("td",{parentName:"tr",align:null},"Always eight bytes."),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"int/long"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"integer/string"),(0,l.kt)("td",{parentName:"tr",align:null},"Bignum")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"bool"})," bool"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"TrueClass/FalseClass")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"string"})," string"),(0,l.kt)("td",{parentName:"tr",align:null},"A string must always contain UTF-8 encoded or 7-bit ASCII text."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"str/unicode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"String (UTF-8)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"bytes"})," bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"May contain any arbitrary sequence of bytes."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ByteString"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"[]byte"),(0,l.kt)("td",{parentName:"tr",align:null},"ByteString"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"String (ASCII-8BIT)")))))}k.isMDXComponent=!0}}]);