---
sidebar_label: Routes
sidebar_position: 2
---
# Customizing routes

When the standard `edit` & `create` routes doesn't fit the needs of your record models, it
is possible to customize route patterns as described here.

Customizing this is especially useful, if you want to share a single form
template (and React application) across multiple types of records. In that case,
your record routes would need to look more like `/records/<record_type>/<pid_value>/edit` rather than just `/records/<pid_value>/edit`.

## UI Resource config

Update `routes` in your UI ResourceConfig class to match the desired route pattern, e.g.:

```python
class MyUIResourceConfig(RecordsUIResourceConfig):
    url_prefix = '/myrecords/'
    routes = {
        "create": "/<record_type>/custom/_new",
        "edit": "/<record_type>/custom/<pid_value>/edit",
    }
```

Here we introduced a new URL parameter `record_type` to the route pattern. If similar API routes (`/api/myrecords/<record_type>...`) is
used for `myrecords` model, we need to make some further adjustments using form config service components (see [Customizing form config](./form-config)).
