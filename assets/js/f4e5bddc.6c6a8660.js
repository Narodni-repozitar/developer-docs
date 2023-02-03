"use strict";(self.webpackChunknrp_tech_docs=self.webpackChunknrp_tech_docs||[]).push([[802],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return t?o.createElement(m,a(a({ref:n},p),{},{components:t})):o.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(7462),i=(t(7294),t(3905));const r={sidebar_position:1},a="Create a new project",l={unversionedId:"technology/invenio/nrp-toolchain/create-project",id:"technology/invenio/nrp-toolchain/create-project",title:"Create a new project",description:"Check the dependencies",source:"@site/docs/technology/invenio/nrp-toolchain/create-project.md",sourceDirName:"technology/invenio/nrp-toolchain",slug:"/technology/invenio/nrp-toolchain/create-project",permalink:"/developer-docs/docs/technology/invenio/nrp-toolchain/create-project",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/technology/invenio/nrp-toolchain/create-project.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"NRP toolchain",permalink:"/developer-docs/docs/technology/invenio/nrp-toolchain/"},next:{title:"Test-run the repository",permalink:"/developer-docs/docs/technology/invenio/nrp-toolchain/run-repository"}},s={},c=[{value:"Check the dependencies",id:"check-the-dependencies",level:2},{value:"Download and run the installation script",id:"download-and-run-the-installation-script",level:2},{value:"Advanced usage",id:"advanced-usage",level:2},{value:"Command-line options",id:"command-line-options",level:3},{value:"Cookiecutter versions",id:"cookiecutter-versions",level:3},{value:"Invenio-cli version",id:"invenio-cli-version",level:3}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-a-new-project"},"Create a new project"),(0,i.kt)("h2",{id:"check-the-dependencies"},"Check the dependencies"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/developer-docs/docs/technology/invenio/ecosystem"},"Once again make sure you have all the dependencies installed"),". This will save you a lot of headaches later on."),(0,i.kt)("h2",{id:"download-and-run-the-installation-script"},"Download and run the installation script"),(0,i.kt)("p",null,"To create a new repository, go to oarepo-cli github repository and download the initialization script\n",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/oarepo/oarepo-cli/v11.0/nrp-installer.sh"},(0,i.kt)("inlineCode",{parentName:"a"},"nrp-installer.sh")," - https://github.com/oarepo/oarepo-cli/blob/v11.0/nrp-installer.sh"),".\nInspect its content (it is always good to inspect files before running them) and invoke it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bash nrp-installer.sh my-repository\n")),(0,i.kt)("p",null,"This command will ask you a couple of questions (if unsure, use the defaults) and will create ",(0,i.kt)("inlineCode",{parentName:"p"},"my-repository")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-directory"},"my-repository\n   oarepo.yaml\n   nrp-cli\n   invenio-cli\n\n   sites\n      my-repository-site\n   locals  (might be missing and created later)\n   models  (might be missing and created later)\n   ui      (might be missing and created later)\n")),(0,i.kt)("p",null,"You can save the oarepo.yaml file and use it later for a repeatable installation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Files/directories"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nrp-cli")," is the command that will scaffold other parts and help you with using them in your repository"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"invenio-cli")," is the normal invenio command-line tool, just pre-installed for you"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sites")," is a directory where you will have your invenio instances. The installer generates one for you. Within the instance you can add/remove python modules, configure skin and repository parameters and perform repository management tasks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"locals")," is a directory where you can store your local libraries installed into the site. These might include, for example, metadata extraction code, specialized validations, connectors to external applications and services. Use this directory if you want to add more functionality but you do not want to build it (yet) into separate python packages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"models")," is a directory containing all the code to build an API server. Here you will find all the resources, services, records, marshmallow schemas, json schemas, permissions, opensearch index definitions and other parts. ",(0,i.kt)("inlineCode",{parentName:"li"},"nrp-cli")," can generate these files for you - see below"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ui")," is a directory where user interface for the models will be stored. Using ",(0,i.kt)("inlineCode",{parentName:"li"},"nrp-cli")," you can generate an initial user interface from a model.")),(0,i.kt)("h2",{id:"advanced-usage"},"Advanced usage"),(0,i.kt)("h3",{id:"command-line-options"},"Command-line options"),(0,i.kt)("p",null,"The following options are supported in nrp-installer.sh:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-p <python_bin>")," - specify your own path to a python binary. Please note that only Cpython 3.9 is officially supported, CONDA and other python versions are not supported."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-b <client-version>")," - use this version of client tools from pypi repository. The default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"11.*"))),(0,i.kt)("h3",{id:"cookiecutter-versions"},"Cookiecutter versions"),(0,i.kt)("p",null,"Versions of cookiecutter packages can be modified via environment variables: ",(0,i.kt)("inlineCode",{parentName:"p"},"OAREPO_SITE_COOKIECUTTER_VERSION"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"OAREPO_MODEL_COOKIECUTTER_VERSION"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"OAREPO_UI_COOKIECUTTER_VERSION"),". Possible values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"release"),": Use the current release. This is the default option"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maintrunk"),": Use the maintrunk version of the respective cookiecutter"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<local_path>"),": Use the cookiecutter version installed locally on that path")),(0,i.kt)("h3",{id:"invenio-cli-version"},"Invenio-cli version"),(0,i.kt)("p",null,"Invenio-cli version is pinned inside the installer. In cases when the locked version\nis old and a new one works, use ",(0,i.kt)("inlineCode",{parentName:"p"},"INVENIO_CLI_VERSION=1.0.xx")," environment variable.\nCurrently the version is pinned to 1.0.16 due to rdm-related bug (#343)."))}d.isMDXComponent=!0}}]);