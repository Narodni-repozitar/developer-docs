### JinjaX

See also [JinjaX documentation](https://jinjax.scaletti.dev/).

Oarepo supports the use of components within Jinja templates using the JinjaX library.
To load a Jinja application, a JinjaX component is expected on the input. 
The relative path to the component is taken from the configuration

Components by default accept record metadata, ui definition and layout definition as parameters.
To work with parameters within components, you need to define them in the template in the way described in the JinjaX documentation.

### Examples

Example of component specification in config:

```json
templates = {
        "detail": {
            "layout": "docs_app/DetailRoot.html.jinja",
            "blocks": {
                "record_main_content": "Main",
                "record_sidebar": "Sidebar",
            },
        },
        "search": {"layout": "docs_app/search.html"},
    }
```

Example of possible contents of the DetailRoot component:

```json
{#def metadata, ui, layout #}
{% extends "oarepo_ui/detail.html" %}

{%- block head_links %}

{{ super() }}
{{ webpack['docs_app_components.js']}}
{{ webpack['docs_app_components.css']}}

{%- endblock %}
```

Based on the definition from the config, the block content is then automatically added to the component content:
```json
{% block record_main_content %}
    <Main metadata={{metadata}}></Main>
{% endblock %}
{% block record_sidebar %}
    <Sidebar metadata={{metadata}}></Sidebar>
{% endblock %}
```

Sample of possible contents of Main component:
```json
{#def metadata, ui, layout #}
<h1 style="margin-bottom: 1em">{{ metadata.title }}</h1>
<dl class="ui very basic table">
<Field label="accessibility">{{metadata.accessibility}}</Field>

```

#### JinjaX components

Within the Oarepo-ui library, basic components are defined in the `templates` folder.
