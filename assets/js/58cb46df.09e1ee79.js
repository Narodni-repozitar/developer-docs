"use strict";(self.webpackChunknrp_tech_docs=self.webpackChunknrp_tech_docs||[]).push([[198],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="Overview",l={unversionedId:"technology/invenio/customize-ui/forms/overview",id:"technology/invenio/customize-ui/forms/overview",title:"Overview",description:"OARepo UI library",source:"@site/docs/technology/invenio/customize-ui/forms/overview.md",sourceDirName:"technology/invenio/customize-ui/forms",slug:"/technology/invenio/customize-ui/forms/overview",permalink:"/developer-docs/docs/technology/invenio/customize-ui/forms/overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/technology/invenio/customize-ui/forms/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Forms",permalink:"/developer-docs/docs/technology/invenio/customize-ui/forms/"},next:{title:"Routes",permalink:"/developer-docs/docs/technology/invenio/customize-ui/forms/routes"}},s={},p=[{value:"OARepo UI library",id:"oarepo-ui-library",level:2},{value:"UI routes",id:"ui-routes",level:3},{value:"Form config",id:"form-config",level:3},{value:"UI resource views",id:"ui-resource-views",level:3},{value:"Jinja templates",id:"jinja-templates",level:3},{value:"React hooks &amp; utils",id:"react-hooks--utils",level:3},{value:"createFormAppInit",id:"createformappinit",level:4},{value:"useFormConfig",id:"useformconfig",level:4},{value:"useOnSubmit",id:"useonsubmit",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("h2",{id:"oarepo-ui-library"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/oarepo/oarepo-ui"},"OARepo UI")," library"),(0,o.kt)("p",null,"To use and customize forms in your repository site, you will need have this python package in your project dependencies and\nextend the features provided by that library in your own UI app."),(0,o.kt)("p",null,"This library provides the following basic support for forms."),(0,o.kt)("h3",{id:"ui-routes"},"UI routes"),(0,o.kt)("p",null,"Two form-related routes are provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordsUIResourceConfig"),". One for creation of new records and one for editing existing records."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class RecordsUIResourceConfig(UIResourceConfig):\n    routes = {\n        "create": "/_new",\n        "edit": "/<pid_value>/edit",\n        #...\n    }\n    #...\n')),(0,o.kt)("h3",{id:"form-config"},"Form config"),(0,o.kt)("p",null,"UI resource config class provides an extensible ",(0,o.kt)("inlineCode",{parentName:"p"},"form_config")," function,\nresponsible for generation of React Form app runtime configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class RecordsUIResourceConfig:\n    def form_config(self, identity=None, **kwargs):\n    #...\n")),(0,o.kt)("p",null,"The default config structure looks like this, but can be further customized in multiple ways described\nin ",(0,o.kt)("a",{parentName:"p",href:"./form-config"},"Customizing form config"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"dict(\n    custom_fields=dict(),\n    createUrl='/api/records/'\n    **kwargs,\n)\n\n")),(0,o.kt)("h3",{id:"ui-resource-views"},"UI resource views"),(0,o.kt)("p",null,"Resource views for both form contexts (",(0,o.kt)("inlineCode",{parentName:"p"},"create")," vs. ",(0,o.kt)("inlineCode",{parentName:"p"},"edit"),") are very similar. It generates\nform config, determines which layout template to render, invokes all registered resource ",(0,o.kt)("inlineCode",{parentName:"p"},"components"),",\nthat implements ",(0,o.kt)("inlineCode",{parentName:"p"},"before_ui_create")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"before_ui_edit"),", and finally renders the template with the\nfollowing Jinja context."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    @login_required\n    @request_read_args\n    @request_view_args\n    def create|edit(self):\n        #...\n        form_config = self.config.form_config(\n            identity=g.identity,\n            updateUrl=record.links.get("self", None)\n        )\n\n        self.run_components(\n            "before_ui_create|edit",\n            layout=layout,\n            resource=self,\n            record=record,\n            data=record,\n            form_config=form_config,\n            args=resource_requestctx.args,\n            view_args=resource_requestctx.view_args,\n            identity=g.identity,\n            extra_context=extra_context,\n        )\n        template_def = self.get_template_def("create|edit")\n        template = current_oarepo_ui.get_template(\n            template_def["layout"], template_def.get("blocks", {})\n        )\n\n        return render_template(\n            template,\n            record=record,\n            data=record,\n            ui=record.get("ui", record),\n            ui_config=self.config,\n            ui_resource=self,\n            layout=layout,\n            component_key="create|edit",\n            form_config=form_config,\n            extra_context=extra_context,\n')),(0,o.kt)("p",null,"The only major difference is, that for ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," context, an ",(0,o.kt)("inlineCode",{parentName:"p"},"empty_record"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"empty_record = self.empty_record(resource_requestctx)\n")),(0,o.kt)("p",null,"is being used as ",(0,o.kt)("inlineCode",{parentName:"p"},"record")," data. This function creates an empty record according\nto its metadata structure, with all its values left blank."),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," context, both raw ",(0,o.kt)("inlineCode",{parentName:"p"},"record")," metadata ",(0,o.kt)("strong",{parentName:"p"},"and")," ",(0,o.kt)("inlineCode",{parentName:"p"},"ui")," serialized record\nrepresentation is passed to form template context."),(0,o.kt)("h3",{id:"jinja-templates"},"Jinja templates"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"routes")," from above are tied via Flask Blueprint with ",(0,o.kt)("inlineCode",{parentName:"p"},"resource views")," (and ",(0,o.kt)("inlineCode",{parentName:"p"},"templates"),"), that renders the base ",(0,o.kt)("inlineCode",{parentName:"p"},"form.html")," Jinja2 template."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\nclass RecordsUIResourceConfig(UIResourceConfig):\n    templates = {\n        "create": {"layout": "oarepo_ui/form.html"},\n        "edit": {"layout": "oarepo_ui/form.html"},\n        #...\n    }\n    #...\n}\n')),(0,o.kt)("p",null,"This template provides a basic mount point for React form apps, and multiple hidden inputs,\nfeeding backend form configuration to the React form apps."),(0,o.kt)("p",null,"A condensed version with just the extensibility-point block definitions looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'{% extends config.BASE_TEMPLATE %}\n\n{%- block javascript %}\n{{ super() }}\n{# {{ webpack[\'your-formapp-entrypoint-here.js\'] }} #}\n{%- endblock javascript -%}\n\n{%- if form_config.createUrl %}\n  {%- set title = _("New item") %}\n{% elif record.title %}\n  {%- set title = _("Edit item ") + record.title %}\n{%- endif %}\n\n{%- block page_body %}\n    {%- block form_main_content %}\n        <input id="record" type="hidden" name="record" value=\'{{data | tojson }}\' />\n        <input type="hidden" name="form-config" value=\'{{form_config | tojson }}\' />\n        <input id="record-permissions" type="hidden" name="record-permissions" value=\'{{permissions | tojson }}\' />\n        <input id="links" type="hidden" name="links" value=\'{{links | tojson }}\' />\n        <div id="form-app"></div>\n    {%- endblock form_main_content -%}\n{% endblock page_body %}\n')),(0,o.kt)("p",null,"As you can see here, this template cannot be used on its own. You will need to extend this template in your ui app and\ninject atleast some ",(0,o.kt)("inlineCode",{parentName:"p"},"your-formapp-entrypoint-here.js")," JS entrypoint handling your React Form app to the ",(0,o.kt)("inlineCode",{parentName:"p"},"javascript")," block."),(0,o.kt)("h3",{id:"react-hooks--utils"},"React hooks & utils"),(0,o.kt)("p",null,"This library provides utilities and React hooks to help you with creating your own React form application."),(0,o.kt)("h4",{id:"createformappinit"},"createFormAppInit"),(0,o.kt)("p",null,"A form application initialization function, that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reads & parses hidden inputs from the Jinja template."),(0,o.kt)("li",{parentName:"ul"},"Loads any overridden React components passed as ",(0,o.kt)("inlineCode",{parentName:"li"},"defaultComponents")," (see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/indico/react-overridable"},"react-overridable"),")."),(0,o.kt)("li",{parentName:"ul"},"Creates a React Context Provider ",(0,o.kt)("inlineCode",{parentName:"li"},"FormConfigProvider")," with config values from hidden inputs."),(0,o.kt)("li",{parentName:"ul"},"Finds an element with ",(0,o.kt)("inlineCode",{parentName:"li"},"id=form-app")," in the Jinja template."),(0,o.kt)("li",{parentName:"ul"},"Renders a root Form app layout component given by overridable id ",(0,o.kt)("inlineCode",{parentName:"li"},"FormApp.layout"),", wrapped in ",(0,o.kt)("inlineCode",{parentName:"li"},"FormConfigProvider")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ContainerComponent"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"createFormAppInit(\n  defaultComponents,\n  autoInit = true,\n  ContainerComponent = React.Fragment\n)\n")),(0,o.kt)("h4",{id:"useformconfig"},"useFormConfig"),(0,o.kt)("p",null,"A React hook used to access ",(0,o.kt)("inlineCode",{parentName:"p"},"FormConfigProvider")," context in ",(0,o.kt)("inlineCode",{parentName:"p"},"FormApp.layout")," and any of its children components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const { record, formConfig, recordPermissions, links } = useFormConfig();\n")),(0,o.kt)("h4",{id:"useonsubmit"},"useOnSubmit"),(0,o.kt)("p",null,"Used for handling Formik form submission."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'export const useOnSubmit = ({\n    apiUrl,   // Target URL for apiClient to make requests to\n    context = submitContextType.create,   // Submission context, e.g. "create", "update"...\n    apiClient = OARepoDepositApiClient,   // API client implementation instance\n    onBeforeSubmit = () => { },   // Callback (or array of) functions, called before submit request\n    onSubmitSuccess = () => { },  // Callback (or array of) functions, called on successful submit request\n    onSubmitError = () => { }     // Callback (or array of) functions, called when submit request failed\n}) => { onSubmit, submitError }\n')))}d.isMDXComponent=!0}}]);