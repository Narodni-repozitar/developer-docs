"use strict";(self.webpackChunknrp_tech_docs=self.webpackChunknrp_tech_docs||[]).push([[547],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,v=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return r?i.createElement(v,s(s({ref:t},d),{},{components:r})):i.createElement(v,s({ref:t},d))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=r(7462),n=(r(7294),r(3905));const a={sidebar_position:2},s="Invenio repository architecture",o={unversionedId:"technology/invenio/architecture",id:"technology/invenio/architecture",title:"Invenio repository architecture",description:"Internal architecture",source:"@site/docs/technology/invenio/architecture.md",sourceDirName:"technology/invenio",slug:"/technology/invenio/architecture",permalink:"/developer-docs/docs/technology/invenio/architecture",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/technology/invenio/architecture.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Required ecosystem services",permalink:"/developer-docs/docs/technology/invenio/ecosystem"},next:{title:"NRP toolchain",permalink:"/developer-docs/docs/technology/invenio/nrp-toolchain/"}},l={},c=[{value:"API Chain",id:"api-chain",level:2},{value:"Resource layer",id:"resource-layer",level:3},{value:"Service layer",id:"service-layer",level:3},{value:"Record layer",id:"record-layer",level:3},{value:"Search layer",id:"search-layer",level:3},{value:"UI Chain",id:"ui-chain",level:2},{value:"Server-side rendering",id:"server-side-rendering",level:3},{value:"Client-side rendering",id:"client-side-rendering",level:3},{value:"Invenio services",id:"invenio-services",level:2},{value:"Vocabularies",id:"vocabularies",level:3},{value:"Communities",id:"communities",level:3},{value:"Requests",id:"requests",level:3},{value:"Search and Indexing",id:"search-and-indexing",level:3},{value:"Metadata extraction",id:"metadata-extraction",level:3},{value:"DOI minting",id:"doi-minting",level:3},{value:"Infrastructure services",id:"infrastructure-services",level:2},{value:"PERUN authentication and groups",id:"perun-authentication-and-groups",level:3},{value:"S3-compatible distributed storage",id:"s3-compatible-distributed-storage",level:3},{value:"Deep archival services (LTP)",id:"deep-archival-services-ltp",level:3},{value:"Data format conversion services",id:"data-format-conversion-services",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"invenio-repository-architecture"},"Invenio repository architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Internal architecture",src:r(574).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,"Invenio server is based on the FLASK + SQLAlchemy frameworks. It consists of API and UI chains and a set of infrastructure services."),(0,n.kt)("p",null,"User request passes through front-end nginx or k8s ingress, is passed to uwsgi server and goes through Flask pipeline\nto the repository API or UI chain."),(0,n.kt)("h2",{id:"api-chain"},"API Chain"),(0,n.kt)("h3",{id:"resource-layer"},"Resource layer"),(0,n.kt)("p",null,'The chain begins with a set of classes contained in the "resources" python package. This part is responsible for:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"extract and validate the query parameters"),(0,n.kt)("li",{parentName:"ul"},"extract the payload"),(0,n.kt)("li",{parentName:"ul"},"perform content negotiation - what is the data format of the payload and what is the expected response data format")),(0,n.kt)("p",null,"If one of the steps above fails, the processing is aborted and HTTP error code returned."),(0,n.kt)("h3",{id:"service-layer"},"Service layer"),(0,n.kt)("p",null,'Service layer work with "abstract" request data which is HTTP independent. It provides the business logic layer\nof the standard 3-tier application model.'),(0,n.kt)("p",null,"On this level:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"permissions are checked"),(0,n.kt)("li",{parentName:"ul"},"syntax/semantics of the data is validated via Marshmallow framework (for example, during deposit or API upload)"),(0,n.kt)("li",{parentName:"ul"},"request is passed to the Record (for persistence) and Search layers")),(0,n.kt)("h3",{id:"record-layer"},"Record layer"),(0,n.kt)("p",null,"Record layer is responsible for the physical storage of the repository record into an external database or file storage.\nIt is responsible for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"minting persistent IDs"),(0,n.kt)("li",{parentName:"ul"},"structural validation of the metadata is performed via JSON schemas"),(0,n.kt)("li",{parentName:"ul"},"record is versioned and stored into the database")),(0,n.kt)("h3",{id:"search-layer"},"Search layer"),(0,n.kt)("p",null,"The search layer is responsible for indexing the metadata in an external opensearch/elasticsearch cluster.\nAfter indexing, this layer provides:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"metadata search and aggregations"),(0,n.kt)("li",{parentName:"ul"},"metadata retrieval - metadata are taken from the search backend, not from the primary storage backend")),(0,n.kt)("h2",{id:"ui-chain"},"UI Chain"),(0,n.kt)("p",null,"The UI chain in invenio comprises of two technologies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Server-side rendering with jinja2 templating is used for record landing ("detail") page.\nUsing statically rendered pages helps to better SEO even for non javascript-enabled crawlers (whatsapp, twitter, ...)'),(0,n.kt)("li",{parentName:"ul"},"Client-side rendering with React is used for deposit forms, search page and administration as these are usually\nnot indexed in search engines. Using client-side technology here gives better user experience and faster responses.")),(0,n.kt)("h3",{id:"server-side-rendering"},"Server-side rendering"),(0,n.kt)("p",null,"During server-side rendering, the service layer is used to get the data. This guarantees that security checks and internal\nvalidation is performed the same way as if the information were submitted/retrieved by API requests."),(0,n.kt)("h3",{id:"client-side-rendering"},"Client-side rendering"),(0,n.kt)("p",null,"Client-side rendering uses the normal API endpoints with a session and token based authentication."),(0,n.kt)("h2",{id:"invenio-services"},"Invenio services"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"TODO")),(0,n.kt)("h3",{id:"vocabularies"},"Vocabularies"),(0,n.kt)("h3",{id:"communities"},"Communities"),(0,n.kt)("h3",{id:"requests"},"Requests"),(0,n.kt)("h3",{id:"search-and-indexing"},"Search and Indexing"),(0,n.kt)("h3",{id:"metadata-extraction"},"Metadata extraction"),(0,n.kt)("h3",{id:"doi-minting"},"DOI minting"),(0,n.kt)("h2",{id:"infrastructure-services"},"Infrastructure services"),(0,n.kt)("h3",{id:"perun-authentication-and-groups"},"PERUN authentication and groups"),(0,n.kt)("h3",{id:"s3-compatible-distributed-storage"},"S3-compatible distributed storage"),(0,n.kt)("h3",{id:"deep-archival-services-ltp"},"Deep archival services (LTP)"),(0,n.kt)("h3",{id:"data-format-conversion-services"},"Data format conversion services"))}p.isMDXComponent=!0},574:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/architecture-internal-803b68a81ef97b6fe3186adf2fd681eb.png"}}]);