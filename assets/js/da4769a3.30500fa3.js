"use strict";(self.webpackChunknrp_tech_docs=self.webpackChunknrp_tech_docs||[]).push([[110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},o="Relations",i={unversionedId:"technology/invenio/nrp-toolchain/plugins/relations",id:"technology/invenio/nrp-toolchain/plugins/relations",title:"Relations",description:"This plugin adds support for generating relations either between multiple models (for example, from a dataset to an article), or intra-model relation (model defines a list of chemical compounds and a measurement defined later in the model references one of the compounds).",source:"@site/docs/technology/invenio/nrp-toolchain/plugins/relations.md",sourceDirName:"technology/invenio/nrp-toolchain/plugins",slug:"/technology/invenio/nrp-toolchain/plugins/relations",permalink:"/developer-docs/docs/technology/invenio/nrp-toolchain/plugins/relations",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/technology/invenio/nrp-toolchain/plugins/relations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"I18N values",permalink:"/developer-docs/docs/technology/invenio/nrp-toolchain/plugins/i18n"},next:{title:"tests",permalink:"/developer-docs/docs/technology/invenio/nrp-toolchain/plugins/tests"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Relations to another model",id:"relations-to-another-model",level:3},{value:"Model",id:"model",level:4},{value:"Compilation",id:"compilation",level:4},{value:"Sample doc",id:"sample-doc",level:4},{value:"Specifying fields to copy",id:"specifying-fields-to-copy",level:3},{value:"Omitting the internal <code>metadata</code> wrapper",id:"omitting-the-internal-metadata-wrapper",level:3},{value:"Internal references",id:"internal-references",level:3},{value:"Referencing custom fields",id:"referencing-custom-fields",level:3},{value:"How does it work?",id:"how-does-it-work",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"relations"},"Relations"),(0,r.kt)("p",null,"This plugin adds support for generating relations either between multiple models (for example, from a dataset to an article), or intra-model relation (model defines a list of chemical compounds and a measurement defined later in the model references one of the compounds)."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install oarepo-model-builder oarepo-model-builder-relations\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"relations-to-another-model"},"Relations to another model"),(0,r.kt)("h4",{id:"model"},"Model"),(0,r.kt)("p",null,"Add the following snippet to your model file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# article model\nmodel:\n    properties:\n        metadata:\n            properties:\n                title: fulltext\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# dataset model\nmodel:\n    properties:\n        metadata:\n            title: fulltext\n            author: keyword\n            article:\n                type: relation\n                model: article\n")),(0,r.kt)("h4",{id:"compilation"},"Compilation"),(0,r.kt)("p",null,"Now compile the article model with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oarepo-compile-model article.yaml --output-dir articles\n")),(0,r.kt)("p",null,"and then compile the dataset model with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oarepo-compile-model dataset.yaml --output-dir datasets --include article=articles/article/models/model.json\n")),(0,r.kt)("h4",{id:"sample-doc"},"Sample doc"),(0,r.kt)("p",null,"Suppose that you have the following article already stored in repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "abcde-ghijk",\n    "metadata": {\n        "title": "Test Article",\n        "author": "John Smith"\n    }\n}\n')),(0,r.kt)("p",null,"If you store the following dataset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "title": "Test Dataset",\n        "article": {\n            "id": "abcde-ghijk"\n        }\n    }\n}\n')),(0,r.kt)("p",null,"and get it from the repository, you'll get:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "title": "Test Dataset",\n        "article": {\n            "id": "abcde-ghijk",\n            "metadata": {\n                "title": "Test Article"\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,'Note that the "title" property has been copied from the article.'),(0,r.kt)("h3",{id:"specifying-fields-to-copy"},"Specifying fields to copy"),(0,r.kt)("p",null,"You can specify which fields should be copied with ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," attribute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"article:\n    type: relation\n    model: article\n    keys: [id, metadata.title, metadata.author]\n")),(0,r.kt)("p",null,"You should always include the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field."),(0,r.kt)("h3",{id:"omitting-the-internal-metadata-wrapper"},"Omitting the internal ",(0,r.kt)("inlineCode",{parentName:"h3"},"metadata")," wrapper"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"flatten: true")," inside your model to remove the internal ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata")," wrapper:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"article:\n    type: relation\n    model: article\n    flatten: true\n")),(0,r.kt)("p",null,"will give you:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "title": "Test Dataset",\n        "article": {\n            "id": "abcde-ghijk",\n            "title": "Test Article" # <-- no metadata here\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"internal-references"},"Internal references"),(0,r.kt)("p",null,"You can also reference an internal part of the model. This might be useful for example when the model schema contains m:n relationship (for example,\na list of chemical samples and measurements performed on pairs of them)."),(0,r.kt)("p",null,"Then you might have the following schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# dataset model\nmodel:\n    properties:\n        metadata:\n            samples[]:\n                type: object\n                id: sample\n                properties:\n                    id: keyword\n                    name: keyword\n\n            measurements[]:\n                type: object\n                properties:\n                    sample1:\n                        type: relation\n                        model: "#sample"\n                        keys: [id, name]\n                    sample2:\n                        type: relation\n                        model: "#sample"\n                        keys: [id, name]\n')),(0,r.kt)("p",null,"This will generate an intra-document references from ",(0,r.kt)("inlineCode",{parentName:"p"},"sample1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sample2"),"\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"samples"),". Note that you have to specify the keys as the default ",(0,r.kt)("inlineCode",{parentName:"p"},"[id, metadata.title]")," are not valid in this scenario."),(0,r.kt)("p",null,"With an input:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "samples": [\n            {\n                "id": "231",\n                "name": "sea_water_sample_231"\n            },\n            {\n                "id": "233",\n                "name": "sea_water_sample_233"\n            },\n        ],\n        "measurements": [\n            {\n                "sample1": {"id": "231"},\n                "sample2": {"id": "233"},\n            }\n        ]\n    }\n}\n')),(0,r.kt)("p",null,"you would get in your elasticsearch/REST api:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "samples": [\n            {\n                "id": "231",\n                "name": "sea_water_sample_231"\n            },\n            {\n                "id": "233",\n                "name": "sea_water_sample_233"\n            },\n        ],\n        "measurements": [\n            {\n                "sample1": {"id": "231", "name": "sea_water_sample_231"},\n                "sample2": {"id": "233", "name": "sea_water_sample_233"},\n            }\n        ]\n    }\n}\n')),(0,r.kt)("h3",{id:"referencing-custom-fields"},"Referencing custom fields"),(0,r.kt)("p",null,"You might reference even custom fields, but in this case you have to provide\nyour own schema for the field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# referred document\nmodel:\n    custom-fields:\n    - config: CF\n      element: custom_fields\n    properties:\n        metadata:\n            properties:\n                title: fulltext\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# reference\nreference:\ntype: relation\n    model: referred\n    flatten: true\n    keys: \n    - id\n    - metadata.title\n    - key: custom_fields.test   # <-- you need to specify\n      model:                    #     both key and model\n          type: keyword\n\n")),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("p",null,"On the record level, the generated ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oarepo/oarepo-model-builder-relations/blob/main/tests/referrer/referrer/records/jsonschemas/referrer-1.0.0.json"},"json schema")," will contain copied parts from the referred\nmodel."),(0,r.kt)("p",null,'The mapping for "keys" from the referred model is copied into the generated ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/oarepo/oarepo-model-builder-relations/blob/main/tests/referrer/referrer/records/mappings/os-v2/referrer/referrer-1.0.0.json"},"mapping"),". "),(0,r.kt)("p",null,"On ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oarepo/oarepo-model-builder-relations/blob/main/tests/referrer/referrer/records/api.py"},"record API"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"relations")," field and dumper extension are added. The ",(0,r.kt)("inlineCode",{parentName:"p"},"relations")," specify what is the relation's source and destination, the dumper extension will make sure that before the record is put to the search engine, relation is fetched and inserted to the appropriate position."))}m.isMDXComponent=!0}}]);