"use strict";(self.webpackChunkuserdocs=self.webpackChunkuserdocs||[]).push([[364],{4738:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905));const i={title:"Configure the network"},o="Configure the network",l={unversionedId:"getting-started/network",id:"getting-started/network",title:"Configure the network",description:"If you are using a wired connection, you can skip this and jump straight to the",source:"@site/docs/getting-started/network.md",sourceDirName:"getting-started",slug:"/getting-started/network",permalink:"/docs/getting-started/network",draft:!1,editUrl:"https://github.com/liquidmetal-dev/flintlock/edit/main/userdocs/docs/getting-started/network.md",tags:[],version:"current",frontMatter:{title:"Configure the network"},sidebar:"gettingStartedSidebar",previous:{title:"Environment setup",permalink:"/docs/getting-started/setup"},next:{title:"Containerd",permalink:"/docs/getting-started/containerd"}},s={},c=[{value:"Install packages and start <code>libvirtd</code>",id:"install-packages-and-start-libvirtd",level:2},{value:"Create kvm network",id:"create-kvm-network",level:2},{value:"Create and connect tap device",id:"create-and-connect-tap-device",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configure-the-network"},"Configure the network"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you are using a wired connection, you can skip this and jump straight to the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/containerd"},'"Containerd"')," section."),(0,a.kt)("p",{parentName:"admonition"},"With a wired connection, ",(0,a.kt)("inlineCode",{parentName:"p"},"flintlock")," will be able to create ",(0,a.kt)("inlineCode",{parentName:"p"},"macvtap")," devices for\nits MicroVMs. This needs to be enabled in your kernel: check with ",(0,a.kt)("inlineCode",{parentName:"p"},"modprobe macvlan"),".\nIf this returns non-zero, either install the extra headers or config, or continue\nwith this page to use ",(0,a.kt)("inlineCode",{parentName:"p"},"tap")," interfaces instead.")),(0,a.kt)("p",null,"If your machine is not on ethernet right now, you will need to set up a local bridge (virtual router)."),(0,a.kt)("p",null,"We recommend using a dedicated network to avoid interference from other kvm machines\nor things like IP or MAC address conflict."),(0,a.kt)("h2",{id:"install-packages-and-start-libvirtd"},"Install packages and start ",(0,a.kt)("inlineCode",{parentName:"h2"},"libvirtd")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install qemu qemu-kvm libvirt-clients libvirt-daemon-system virtinst bridge-utils\n\nsudo systemctl enable libvirtd\nsudo systemctl start libvirtd\n")),(0,a.kt)("h2",{id:"create-kvm-network"},"Create kvm network"),(0,a.kt)("p",null,"Create a file with the network config. Feel free to change the IP range if it\nconflicts with any existing network config you have:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"BRIDGE=flbr0\ncat << EOF >flintlock-net.xml\n<network>\n  <name>flintlock</name>\n  <forward mode='nat'>\n    <nat>\n      <port start='1024' end='65535'/>\n    </nat>\n  </forward>\n  <bridge name=\"$BRIDGE\" stp='on' delay='0'/>\n  <ip address='192.168.100.1' netmask='255.255.255.0'>\n    <dhcp>\n      <range start='192.168.100.10' end='192.168.100.254'/>\n    </dhcp>\n  </ip>\n</network>\nEOF\n")),(0,a.kt)("p",null,"Define and start the new network:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo virsh net-define flintlock.xml\nsudo virsh net-start flintlock\n")),(0,a.kt)("p",null,"If you wish, you can also set it to autostart on boot:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo virsh net-autostart flintlock\n")),(0,a.kt)("p",null,"You should see the network in the network list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"virsh net-list\n Name       State    Autostart   Persistent\n---------------------------------------------\n default    active   yes         yes\n flintlock   active   yes         yes\n")),(0,a.kt)("h2",{id:"create-and-connect-tap-device"},"Create and connect tap device"),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"tap")," (port) from the bridge to your machine's default interface."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"TAPNAME=tap0\n\nsudo ip tuntap add ${TAPNAME} mode tap\nsudo ip link set ${TAPNAME} master ${BRIDGE} up\n")),(0,a.kt)("p",null,"Check with ",(0,a.kt)("inlineCode",{parentName:"p"},"ip link ls"),"."),(0,a.kt)("p",null,"When MicroVMs are created, they will come up in this virtual network and will\nrequest an IP from the DHCP server configured in the network file above.\nYou will be able to check the DHCP leases with ",(0,a.kt)("inlineCode",{parentName:"p"},"virsh"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo virsh net-dhcp-leases default\n")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);