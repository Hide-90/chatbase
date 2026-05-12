> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Form Inputs

> Form and input components for collecting user data — Form, Input, Textarea, Select, DatePicker, Checkbox, and RadioGroup.

## Common Form Input Props

`Input`, `Textarea`, `Select`, `DatePicker`, `Checkbox`, and `RadioGroup` all share the following props for handling form data and interaction.

| Prop             | Type    | Default | Description                                                                                                     |
| ---------------- | ------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `name`           | string  | —       | Field name used as the key in form submission data.                                                             |
| `required`       | boolean | `false` | Whether the field must be filled before the form can be submitted.                                              |
| `disabled`       | boolean | `false` | Disables the input, preventing user interaction.                                                                |
| `onChangeAction` | action  | —       | Function to run when the value changes. Available on `Select`, `DatePicker`, `Checkbox`, and `RadioGroup` only. |

<Info>
  The `name` prop on a form input automatically creates a variable in the widget's data. For example, an `<Input name="email" />` creates an `email` variable that you can reference elsewhere in the widget using `{email}`, use in template tokens as `{{email}}`, or check in state conditions.
</Info>

<Tip>
  Make sure each `name` is unique within a `Form` to avoid collisions.
</Tip>

***

## Form

A container that groups input components and handles submission. Wrap your inputs inside a `Form` to collect their values together when the user submits.

```jsx theme={null}
<Form onSubmitAction={{ functionName: "submitForm" }}>
  <Input name="email" placeholder="Enter your email" required />
  <Button label="Submit" submit />
</Form>
```

### Props

`Form` accepts all [Box props](/developer-guides/widgets/components/layout#box) plus:

| Prop             | Type   | Default | Description                                                                            |
| ---------------- | ------ | ------- | -------------------------------------------------------------------------------------- |
| `onSubmitAction` | action | —       | Function to run when the form is submitted. Receives all field values keyed by `name`. |

<Info>
  Place a `Button` with the `submit` prop inside the `Form` to trigger submission. All inputs within the form will have their values collected automatically.
</Info>

***

## Input

A single-line text input for collecting short-form data like emails, names, or numbers.

```jsx theme={null}
<Input name="email" inputType="email" placeholder="you@example.com" required />
```

### Props

In addition to all [common form input props](#common-form-input-props), `Input` accepts:

| Prop                      | Type                                                                     | Default   | Description                                                                                    |
| ------------------------- | ------------------------------------------------------------------------ | --------- | ---------------------------------------------------------------------------------------------- |
| `inputType`               | `text` \| `email` \| `password` \| `number` \| `tel` \| `url`            | `text`    | The type of data the input accepts. Controls keyboard layout on mobile and browser validation. |
| `placeholder`             | string                                                                   | —         | Hint text displayed when the input is empty.                                                   |
| `defaultValue`            | string                                                                   | —         | Initial value of the input.                                                                    |
| `variant`                 | `soft` \| `outline`                                                      | `outline` | Visual style of the input.                                                                     |
| `size`                    | `3xs` \| `2xs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `2xl` \| `3xl` | `md`      | Controls the overall size of the input.                                                        |
| `gutterSize`              | `2xs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl`                            | —         | Inner horizontal padding of the input.                                                         |
| `pattern`                 | string                                                                   | —         | A regex pattern the input value must match for validation.                                     |
| `pill`                    | boolean                                                                  | `false`   | Renders the input with fully rounded corners.                                                  |
| `autoFocus`               | boolean                                                                  | `false`   | Automatically focuses the input when the widget loads.                                         |
| `autoSelect`              | boolean                                                                  | `false`   | Selects all text in the input when it receives focus.                                          |
| `allowAutofillExtensions` | boolean                                                                  | `false`   | Allows browser autofill extensions to interact with the input.                                 |

***

## Textarea

A multi-line text input for collecting longer-form content like messages or descriptions.

```jsx theme={null}
<Textarea name="message" placeholder="Type your message..." rows={4} />
```

### Props

In addition to all [common form input props](#common-form-input-props), `Textarea` accepts:

| Prop                      | Type                                                                     | Default   | Description                                                                     |
| ------------------------- | ------------------------------------------------------------------------ | --------- | ------------------------------------------------------------------------------- |
| `placeholder`             | string                                                                   | —         | Hint text displayed when the textarea is empty.                                 |
| `defaultValue`            | string                                                                   | —         | Initial value of the textarea.                                                  |
| `rows`                    | number                                                                   | —         | Number of visible text lines.                                                   |
| `autoResize`              | boolean                                                                  | `false`   | Automatically adjusts the height as the user types.                             |
| `maxRows`                 | number                                                                   | —         | Maximum number of rows the textarea can expand to when `autoResize` is enabled. |
| `variant`                 | `soft` \| `outline`                                                      | `outline` | Visual style of the textarea.                                                   |
| `size`                    | `3xs` \| `2xs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `2xl` \| `3xl` | `md`      | Controls the overall size of the textarea.                                      |
| `gutterSize`              | `2xs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl`                            | —         | Inner horizontal padding of the textarea.                                       |
| `autoFocus`               | boolean                                                                  | `false`   | Automatically focuses the textarea when the widget loads.                       |
| `autoSelect`              | boolean                                                                  | `false`   | Selects all text in the textarea when it receives focus.                        |
| `allowAutofillExtensions` | boolean                                                                  | `false`   | Allows browser autofill extensions to interact with the textarea.               |

***

## Select

A dropdown for choosing one option from a list. Supports search, clearing, and custom option descriptions.

```jsx theme={null}
<Select name="country" placeholder="Choose a country" options={countries} />
```

### Props

In addition to all [common form input props](#common-form-input-props), `Select` accepts:

| Prop           | Type                                                                     | Default   | Description                                                       |
| -------------- | ------------------------------------------------------------------------ | --------- | ----------------------------------------------------------------- |
| `options`      | `{label, value, disabled?, description?}[]`                              | —         | The list of options to display in the dropdown.                   |
| `placeholder`  | string                                                                   | —         | Hint text displayed when no option is selected.                   |
| `defaultValue` | string                                                                   | —         | The initially selected value.                                     |
| `variant`      | `soft` \| `outline` \| `ghost`                                           | `outline` | Visual style. `ghost` renders a minimal, borderless appearance.   |
| `size`         | `3xs` \| `2xs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `2xl` \| `3xl` | `md`      | Controls the overall size of the select.                          |
| `block`        | boolean                                                                  | `false`   | Makes the select stretch to fill the full width of its container. |
| `pill`         | boolean                                                                  | `false`   | Renders the select with fully rounded corners.                    |
| `clearable`    | boolean                                                                  | `false`   | Shows a clear button to reset the selection.                      |
| `searchable`   | boolean                                                                  | `false`   | Enables a search field within the dropdown to filter options.     |

<Note>
  Each option in the `options` array requires a `label` (displayed text) and a `value` (submitted data). You can optionally include `disabled` to gray out an option or `description` to show helper text below the label.
</Note>

***

## DatePicker

A calendar-based date selector rendered inside a popover. Use it for collecting dates with optional min/max constraints.

```jsx theme={null}
<DatePicker name="startDate" placeholder="Pick a date" min="2025-01-01" max="2025-12-31" />
```

### Props

In addition to all [common form input props](#common-form-input-props), `DatePicker` accepts:

| Prop           | Type                                                                     | Default   | Description                                                            |
| -------------- | ------------------------------------------------------------------------ | --------- | ---------------------------------------------------------------------- |
| `placeholder`  | string                                                                   | —         | Hint text displayed when no date is selected.                          |
| `defaultValue` | string (`yyyy-MM-dd`)                                                    | —         | The initially selected date.                                           |
| `min`          | string (`yyyy-MM-dd`)                                                    | —         | The earliest selectable date.                                          |
| `max`          | string (`yyyy-MM-dd`)                                                    | —         | The latest selectable date.                                            |
| `variant`      | `soft` \| `outline` \| `ghost`                                           | `outline` | Visual style. `ghost` shows a compact, minimal format.                 |
| `size`         | `3xs` \| `2xs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `2xl` \| `3xl` | `md`      | Controls the overall size of the date picker trigger.                  |
| `side`         | `top` \| `bottom` \| `left` \| `right`                                   | —         | Preferred side for the calendar popover to open.                       |
| `align`        | `start` \| `center` \| `end`                                             | —         | Alignment of the calendar popover relative to the trigger.             |
| `block`        | boolean                                                                  | `false`   | Makes the date picker stretch to fill the full width of its container. |
| `pill`         | boolean                                                                  | `false`   | Renders the trigger with fully rounded corners.                        |
| `clearable`    | boolean                                                                  | `false`   | Shows a clear button to reset the selected date.                       |

***

## Checkbox

A single toggle for boolean choices, rendered with an accompanying label.

```jsx theme={null}
<Checkbox name="agree" label="I agree to the terms" />
```

### Props

In addition to all [common form input props](#common-form-input-props), `Checkbox` accepts:

| Prop             | Type              | Default | Description                                |
| ---------------- | ----------------- | ------- | ------------------------------------------ |
| `label`          | string            | —       | Text displayed next to the checkbox.       |
| `defaultChecked` | boolean \| string | `false` | Whether the checkbox is initially checked. |

***

## RadioGroup

A group of radio buttons for selecting exactly one option from a set. Supports horizontal or vertical layout.

```jsx theme={null}
<RadioGroup name="plan" options={[
  { label: "Free", value: "free" },
  { label: "Pro", value: "pro" }
]} defaultValue="free" direction="col" />
```

### Props

In addition to all [common form input props](#common-form-input-props), `RadioGroup` accepts:

| Prop           | Type                          | Default | Description                                                               |
| -------------- | ----------------------------- | ------- | ------------------------------------------------------------------------- |
| `options`      | `{label, value, disabled?}[]` | —       | The list of radio options to display.                                     |
| `defaultValue` | string                        | —       | The initially selected value.                                             |
| `direction`    | `col` \| `row`                | `row`   | Controls whether options are stacked vertically or laid out horizontally. |
| `ariaLabel`    | string                        | —       | Accessible label for the radio group, used by screen readers.             |
