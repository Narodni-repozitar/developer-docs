---
sidebar_label: Templates
sidebar_position: 4
---
# Customizing templates

To customize or completely override the Jinja template used for rendering `edit` or `create` form,
you will need to specify it in the `templates` variable of your UI Resource config class. You can
even specify a different layout template for each of `edit` and `create` forms.

## UI Resource config

```python
class MyUIResourceConfig(RecordsUIResourceConfig):
    templates = {
        "create": {"layout": "my_app_ui/cool_form.html"},
        "edit": {"layout": "my_app_ui/cool_form.html"},
    }
```

Both `create` and `edit` keys above refers to the routes defined in [Customizing Routes](./routes).

## Jinja templates

Your custom Jinja template files must be placed on a path according to what you put into the UI Resource config.
Relative paths are looked up under `your_app_package/templates/` folder. For the example above, you will need to put
your template file under the `your_app_package/templates/my_app_ui/cool_form.html` path in order to be picked up.

You will most likely want to atleast include your own JS assets, containing your React form application, because
the default `form.html` template from `oarepo-ui` doesn't provide any. You can do so like this:

```jinja
{% extends "oarepo_ui/form.html" %}

{%- block javascript %}
    {{ super() }}
    {{ webpack['my_app_ui_forms.js'] }}
{%- endblock %}
```
