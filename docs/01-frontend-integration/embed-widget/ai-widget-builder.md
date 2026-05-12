> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# AI Widget Builder

> Generate widgets from natural language descriptions or pre-built templates using the AI builder.

The AI Widget Builder lets you create fully functional widgets using natural language. Describe what you want in plain English and the AI generates the code, schema, default example, and all supporting configuration for you.

No manual coding required. Just describe your widget and refine it through conversation.

## Getting Started

You have two ways to get started:

* **Use a pre-built template.** Click one of the available templates to instantly generate a widget based on a common use case.
* **Type your own description.** Enter a plain-language description of the widget you want to create (e.g., "a contact form with name, email, and message fields").

## What the AI Generates

When you submit a prompt or select a template, the AI generates a complete widget including:

* **Code** -- the full widget implementation ready to render.
* **Schema** -- the data schema that defines the widget's structure and input fields.
* **Default example** -- a pre-populated example so you can see the widget in action immediately.
* **Functions and states** -- relevant functions and UI states scaffolded for you automatically.

<Tip>
  The AI Builder handles the entire widget structure in one step. You do not need to configure code, schema, and example separately.
</Tip>

## Refining Your Widget

After the initial generation, you can send follow-up messages to refine the widget. The AI Builder works as a conversation, so you can iterate naturally.

Examples of refinement prompts:

* "Make the button blue"
* "Add a phone number field"
* "Change the heading text to Welcome Back"
* "Remove the email validation"

Each follow-up updates the widget's code, schema, and example together.

<Warning>
  **Important: Stub functions and states**

  The AI Builder creates placeholder functions and states that require manual configuration:

  * **Functions** are created as dismiss functions by default. After generation, you need to update each function's type and configuration in the **Functions** tab.
  * **States** are created with simple always-visible or always-hidden visibility. After generation, you need to configure conditional visibility rules in the **States** tab.

  Always review the Functions and States tabs after generating or refining a widget.
</Warning>

## Undo

If a generation does not meet your needs, you can restore to the previous version. This lets you experiment freely without losing your earlier work.

<Note>
  Use undo to roll back to the last known good version before trying a different prompt.
</Note>

## Live Preview

The preview panel on the right side of the builder updates in real time as the AI generates your widget. You can see changes appear as they are being written, giving you immediate visual feedback without waiting for the full generation to complete.
