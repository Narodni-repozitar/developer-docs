"use strict";(self.webpackChunknrp_tech_docs=self.webpackChunknrp_tech_docs||[]).push([[677],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3963:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1},l="Required ecosystem services",a={unversionedId:"technology/invenio/ecosystem",id:"technology/invenio/ecosystem",title:"Required ecosystem services",description:"Overall architecture",source:"@site/docs/technology/invenio/ecosystem.md",sourceDirName:"technology/invenio",slug:"/technology/invenio/ecosystem",permalink:"/docs/technology/invenio/ecosystem",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/technology/invenio/ecosystem.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Invenio",permalink:"/docs/technology/invenio/"},next:{title:"Invenio repository architecture",permalink:"/docs/technology/invenio/architecture"}},s={},c=[{value:"Development",id:"development",level:2},{value:"Deployment",id:"deployment",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"required-ecosystem-services"},"Required ecosystem services"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Overall architecture",src:r(1566).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,"The following services are required for running the repository. In real deployment, these services\nmight be run containerized (inside docker or k8s infrastructure) or on bare metal."),(0,o.kt)("p",null,"Invenio provides sample ",(0,o.kt)("strong",{parentName:"p"},"docker-compose files")," to be used while developing the repository. "),(0,o.kt)("p",null,"To plan to run these services in k8s (either your own cluster or CESNET), please ask CESNET for\na sample configuration."),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,"The development requires Linux or MacOS. ",(0,o.kt)("strong",{parentName:"p"},"Invenio does not run on Windows.")),(0,o.kt)("p",null,"The following components are required in development:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Redis 7 - cache, user sessions"),(0,o.kt)("li",{parentName:"ul"},"Postgresql 12+ - database backend"),(0,o.kt)("li",{parentName:"ul"},"RabbitMQ - for background tasks"),(0,o.kt)("li",{parentName:"ul"},"OpenSearch 2.0+ - for indexing metadata")),(0,o.kt)("p",null,"Recommended components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PGAdmin"),(0,o.kt)("li",{parentName:"ul"},"Opensearch Dashboards"),(0,o.kt)("li",{parentName:"ul"},"Minio - S3 compatible simple storage")),(0,o.kt)("p",null,"Additionally to these docker services, you will need the following packages installed on your system:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Python (currently version 3.9 is supported)"),(0,o.kt)("li",{parentName:"ul"},"Pipenv"),(0,o.kt)("li",{parentName:"ul"},"Docker and Docker compose"),(0,o.kt)("li",{parentName:"ul"},"Node (currently version 14 is supported)"),(0,o.kt)("li",{parentName:"ul"},"NPM (currently version 6 is supported)"),(0,o.kt)("li",{parentName:"ul"},"Imagemagick"),(0,o.kt)("li",{parentName:"ul"},"Git")),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"For deployment all the above services plus:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Postgresql - cluster of postgres databases is recommended"),(0,o.kt)("li",{parentName:"ul"},"OpenSearch - cluster of opensearch engines is recommended"),(0,o.kt)("li",{parentName:"ul"},"NGINX / k8s ingress as a frontend web server")))}u.isMDXComponent=!0},1566:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/architecture-overall-f5136c35154050619137e689ec54cde7.png"}}]);