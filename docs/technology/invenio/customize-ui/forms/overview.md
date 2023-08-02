---
sidebar_position: 1
---
# Overview

## [OARepo UI](https://github.com/oarepo/oarepo-ui) library

To use and customize forms in your repository site, you will need have this python package in your project dependencies and
extend the features provided by that library in your own UI app.

This library provides the following basic support for forms.

### UI routes

Two form-related routes are provided by `RecordsUIResourceConfig`. One for creation of new records and one for editing existing records.

```python
class RecordsUIResourceConfig(UIResourceConfig):
    routes = {
        "create": "/_new",
        "edit": "/<pid_value>/edit",
        #...
    }
    #...
```

### Form config

UI resource config class provides an extensible `form_config` function,
responsible for generation of React Form app runtime configuration.

```python
class RecordsUIResourceConfig:
    def form_config(self, identity=None, **kwargs):
    #...
```

The default config structure looks like this, but can be further customized in multiple ways described
in `#FIXME: reference to form config section`

```python
dict(
    current_locale='...',
    locales=[
        {"value": '...', "text": '...'}
        {"value": '...', "text": '...'}
        {"value": '...', "text": '...'}
    ],
    default_locale='...',
    languages=dict(
        common=[...],
        all=[...]
    ),
    links=dict(),
    custom_fields=dict(),
    createUrl='/api/records/'
    **kwargs,
)

```

### UI resource views

Resource views for both form contexts (`create` vs. `edit`) are very similar. It generates
form config, determines which layout template to render, invokes all registered resource `components`,
that implements `before_ui_create` or `before_ui_edit`, and finally renders the template with the
following Jinja context.

```python
    @login_required
    @request_read_args
    @request_view_args
    def create|edit(self):
        #...
        form_config = self.config.form_config(
            identity=g.identity,
            updateUrl=record.links.get("self", None)
        )

        self.run_components(
            "before_ui_create|edit",
            layout=layout,
            resource=self,
            record=record,
            data=record,
            form_config=form_config,
            args=resource_requestctx.args,
            view_args=resource_requestctx.view_args,
            identity=g.identity,
            extra_context=extra_context,
        )
        template_def = self.get_template_def("create|edit")
        template = current_oarepo_ui.get_template(
            template_def["layout"], template_def.get("blocks", {})
        )

        return render_template(
            template,
            record=record,
            data=record,
            ui=record.get("ui", record),
            ui_config=self.config,
            ui_resource=self,
            layout=layout,
            component_key="create|edit",
            form_config=form_config,
            extra_context=extra_context,
```

The only major difference is, that for `create` context, an `empty_record`:

```python
empty_record = self.empty_record(resource_requestctx)
```

is being used as `record` data. This function creates an empty record according
to its metadata structure, with all its values left blank.

In `edit` context, both raw `record` metadata **and** `ui` serialized record
representation is passed to form template context.

### Jinja templates

The `routes` from above are tied via Flask Blueprint with `resource views` (and `templates`), that renders the base `form.html` Jinja2 template.

```python

class RecordsUIResourceConfig(UIResourceConfig):
    templates = {
        "create": {"layout": "oarepo_ui/form.html"},
        "edit": {"layout": "oarepo_ui/form.html"},
        #...
    }
    #...
}
```

This template provides a basic mount point for React form apps, and multiple hidden inputs,
feeding backend form configuration to the React form apps.

A condensed version with just the extensibility-point block definitions looks like this:

```python
{% extends config.BASE_TEMPLATE %}

{%- block javascript %}
{{ super() }}
{# {{ webpack['your-formapp-entrypoint-here.js'] }} #}
{%- endblock javascript -%}

{%- if form_config.createUrl %}
  {%- set title = _("New item") %}
{% elif record.title %}
  {%- set title = _("Edit item ") + record.title %}
{%- endif %}

{%- block page_body %}
    {%- block form_main_content %}
        <input id="record" type="hidden" name="record" value='{{data | tojson }}' />
        <input type="hidden" name="form-config" value='{{form_config | tojson }}' />
        <input id="record-permissions" type="hidden" name="record-permissions" value='{{permissions | tojson }}' />
        <div id="form-app"></div>
    {%- endblock form_main_content -%}
{% endblock page_body %}
```

As you can see here, this template cannot be used on its own. You will need to extend this template in your ui app and
inject atleast some `your-formapp-entrypoint-here.js` JS entrypoint handling your React Form app to the `javascript` block.

### React hooks & utils

This library provides utilities and React hooks to help you with creating your own React form application.

#### createFormAppInit

A form application initialization function, that:

- Reads & parses hidden inputs from the Jinja template.
- Loads any overridden React components passed as `defaultComponents` (see [react-overridable](https://github.com/indico/react-overridable)).
- Creates a React Context Provider `FormConfigProvider` with config values from hidden inputs.
- Finds an element with `id=form-app` in the Jinja template.
- Renders a root Form app layout component given by overridable id `FormApp.layout`, wrapped in `FormConfigProvider` and `ContainerComponent`.

```jsx
createFormAppInit(
  defaultComponents,
  autoInit = true,
  ContainerComponent = React.Fragment
)
```

#### useFormConfig

A React hook used to access `FormConfigProvider` context in `FormApp.layout` and any of its children components.

```jsx
const { record, formConfig, recordPermissions } = useFormConfig();
```
