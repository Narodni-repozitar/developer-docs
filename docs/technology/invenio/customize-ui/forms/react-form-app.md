---
sidebar_label: React form application
---
# Creating React form application

In order to start creating your own Form application, we first need to make sure
we register a Webpack entrypoint in your Python UI package's `webpack.py` script.

## Webpack registration

This file has a similar role to usual `package.json`, here you specify a path
to the JS module handling form-related tasks, and any NPM dependencies it might need
to be installed.

```python
# my_app_ui/theme/webpack.py

from invenio_assets.webpack import WebpackThemeBundle

theme = WebpackThemeBundle(
    __name__,
    "assets",
    default="semantic-ui",
    themes={
        "semantic-ui": dict(
            entry={
                # ...
                "my_app_ui_forms": "./js/my_app_ui/forms/index.js",
            },
            dependencies={
                "some-cool-form-input": "^1.0.0",
            },
            #...
        )
    }
)
```

The entrypoint name `my_app_ui_forms` must correspond to what you
used in your [Jinja template](./template-context.md#jinja-templates).

## Form app initialization

Now we need to provide an `index.js` file in a path according to the
Webpack entrypoint. According to the example above, we will place it
at `/my_app_ui/theme/assets/semantic-ui/js/my_app_ui/forms/index.js`.

_Notice there are few shortcuts that Invenio makes for you when resolving Webpack entrypoints. It
automaticaly prepends the `assets` folder and the current theme of `semantic-ui` to the relative paths._

Your `index.js` might look as simple as this

```jsx
import { createFormAppInit } from "@js/oarepo_ui/forms";
import { DepositForm } from "./DepositForm"

export const overriddenComponents = {
    "FormApp.layout": DepositForm,
};

createFormAppInit(overriddenComponents);
```

As described in [Overview](./overview.md#createformappinit), this initializes form application
and provides it with any configuration and user overriden components (currenty only a layout of
a form can be overriden).

## Form app layout component

In the example above, we specified that a custom `DepositForm` component will be
used as a form app layout. Here is an example of such compnonent.

```jsx
// DepositForm.jsx
import React from "react";
import { useFormConfig, useOnSubmit, submitContextType } from "@js/oarepo_ui";
import { BaseForm } from "react-invenio-forms";
import { Container } from "semantic-ui-react";
import { MyRecordValidationSchema } from "./MyRecordValidationSchema";


export const DepositForm = () => {
  const { record, formConfig } = useFormConfig();
  const context = formConfig.createUrl? submitContextType.create : submitContextType.update
  const { onSubmit, submitError } = useOnSubmit({
    apiUrl: formConfig.createUrl || formConfig.updateUrl,
    context: context,
    onSubmitSuccess: (result) => {
      console.log('Saved!', result)
    }
    onSubmitError: (error) => {
      console.log('Submit failed!', error)
    }
  });

  return (
    <Container>
      <BaseForm
        onSubmit={onSubmit}
        formik={{
          initialValues: record,
          validationSchema: MyRecordValidationSchema,
          validateOnChange: false,
          validateOnBlur: false,
          enableReinitialize: true,
        }}
      >
        <pre>Add your deposit form fields here 👇</pre>
      </BaseForm>
    </Container>
  );
};
```

Even though this example uses [Formik](https://formik.org) for form state management and
[React-Invenio-Forms](https://github.com/inveniosoftware/react-invenio-forms) component library, you should
be able to provide your very own Form implementation here without this dependencies.
