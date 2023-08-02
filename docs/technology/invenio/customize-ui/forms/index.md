# Forms

## Intended audience

This guide is intended for developers that need to create or customize existing deposition (record creation & edit) forms in their repository instance.

## [OARepo UI](https://github.com/oarepo/oarepo-ui) library

To use and customize forms in your repository site, you will need have this python package in your project dependencies and
extend provided features in your ui app.

This OArepo library provides the following basic support for forms.

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
    **kwargs,
)

```

### UI resource views

Resource views for both form contexts (`create` vs. `edit`) are very similar:

```python
    @login_required
    @request_read_args
    @request_view_args
    def create|edit(self):
        #...
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

is being used for form's `record` data. This function creates a record according to its metadata structure,
with all its values left blank.

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

Simplified version with just the extensibility block definitions looks like this:

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
