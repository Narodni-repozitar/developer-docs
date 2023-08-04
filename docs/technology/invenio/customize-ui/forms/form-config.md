---
sidebar_label: Form config
sidebar_position: 3
---

# Customizing form config

You can stitch together multiple backend-generated form configuration pieces
by registering ServiceComponent classes in your UIResourceConfig class
like this:

```python
from oarepo_ui.resources import BabelComponent
from oarepo_vocabularies.ui.resources.components import DepositVocabularyOptionsComponent


class MyAppUIResourceConfig(RecordsUIResourceConfig):
    components = [BabelComponent, DepositVocabularyOptionsComponent]
```

In the example above, each class adds some block of config values,
`BabelComponent` enriches `formConfig` with locale-related values of:

```python
current_locale='...',
locales=[
    {"value": '...', "text": '...'},
    {"value": '...', "text": '...'},
    {"value": '...', "text": '...'}
],
default_locale='...',
```

and `DepositVocabularyOptionsComponent` will further add settings & dumped options for
any Vocabularies you might have installed, configured & imported.

```python
vocabularies={
    languages: [
        {"value": '...', "text": '...'},
        {"value": '...', "text": '...'}
    ],
    institutions: [
        {"value": '...', "text": '...'},
        {"value": '...', "text": '...'}
    ]
}
```

## Custom form config components

You can also create your own form config component class, with the following function signature:

```python
class DepositVocabularyOptionsComponent(ServiceComponent):
    def form_config(
        self,
        *,
        form_config,
        resource,
        record,
        view_args,
        identity,
        layout,
        data,
        args,
        ui_links,
        extra_context,
        **kwargs
    ):
```
