> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Widgets Overview

> Build interactive UI components that your AI agent can display inline during conversations — forms, cards, tables, charts, and more.

## What are Widgets?

Widgets are interactive UI components that your AI agent can display inline during conversations. Instead of responding with plain text, the agent renders rich elements — forms, cards, tables, charts, buttons, and more — directly in the chat.

This lets your agent collect structured input, present data visually, and trigger actions, all without leaving the conversation.

## What You Can Do with Widgets

<CardGroup cols={2}>
  <Card title="Collect Structured Input" icon="input-text">
    Build forms with text inputs, dropdowns, date pickers, checkboxes, and other controls to gather data from users.
  </Card>

  <Card title="Display Rich Content" icon="table-layout">
    Show cards, tables, charts, images, and Markdown-formatted text to present information clearly.
  </Card>

  <Card title="Trigger Actions" icon="bolt">
    Connect buttons and form submissions to API calls, chat messages, URL navigation, or data updates.
  </Card>

  <Card title="React to User Input" icon="arrows-split-up-and-left">
    Use conditions to show, hide, or switch views based on the current values in the widget.
  </Card>

  <Card title="Import and Export" icon="file-import">
    Share widgets across agents and teams by exporting and importing `.widget` files.
  </Card>

  <Card title="AI-Assisted Building" icon="wand-magic-sparkles">
    Generate widgets from natural language descriptions or start from pre-built templates.
  </Card>
</CardGroup>

## Key Concepts

Understanding these core concepts will help you build and configure widgets effectively.

| Concept             | Description                                                                          |
| ------------------- | ------------------------------------------------------------------------------------ |
| **Code**            | The visual layout of the widget, written using a built-in component library.         |
| **Schema**          | Defines the data fields the widget expects from the agent and their types.           |
| **Default Example** | Initial values for all fields when the widget first renders.                         |
| **Named Examples**  | Saved data presets for previewing different scenarios in the builder.                |
| **Functions**       | Actions attached to interactive elements that define what happens on interaction.    |
| **States**          | Named wrappers whose visibility is controlled by conditions based on current values. |

<Info>
  The **Schema** is how the agent knows what data to pass into the widget. Each field in the schema maps to a variable you can reference in the widget code.
</Info>

## Connecting Widgets to Actions

Widgets are always attached to an **action**. You create and manage widgets from within the [Custom Action](/user-guides/chatbot/actions/custom-action) configuration page.

When creating a custom action, select the **Server with UI (Widget)** or **Widget only (UI only)** action type to attach a widget. The action type determines how data flows into the widget. There are two types:

<Tabs>
  <Tab title="Widget-Only Actions">
    These actions have **no API URL** configured. The widget receives data directly from the action's input fields.

    You can either sync inputs with the widget schema automatically or define them manually.

    **Best suited for:**

    * Forms that collect user input
    * Informational cards and menus
    * Interactive elements that don't need external data
  </Tab>

  <Tab title="Server Actions with Widgets">
    These actions have an **API URL** configured. The action calls your API first, then displays the widget using the response data.

    **Best suited for:**

    * Data lookups (order status, account details)
    * Live data displays (inventory, analytics)
    * Multi-step workflows that depend on server-side logic
  </Tab>
</Tabs>

### Data Flow for Server Actions

<Steps>
  <Step title="Agent triggers the action">
    The AI agent decides to trigger the action and provides the required input data.
  </Step>

  <Step title="Action calls the API">
    The action sends a request to your configured API URL with the input data.
  </Step>

  <Step title="API returns a response">
    Your server processes the request and returns a JSON response.
  </Step>

  <Step title="Response is merged with action input">
    The API response is combined with the original action input data. If both contain the same field, the API response takes priority.
  </Step>

  <Step title="Widget renders with combined data">
    The widget receives the merged data and renders the UI accordingly.
  </Step>
</Steps>

## Where Widget Data Comes From

When a widget renders, its data can come from multiple sources. Higher-priority sources override lower ones.

| Priority    | Source              | Description                                            |
| ----------- | ------------------- | ------------------------------------------------------ |
| 1 (lowest)  | **Default example** | The widget's default values defined in the builder.    |
| 2           | **Action input**    | Data from the action's configured input fields.        |
| 3 (highest) | **API response**    | Data returned from the API call (server actions only). |

<Note>
  If a field is present in both the action input and the API response, the API response value wins. Default example values are only used when no other source provides the field.
</Note>

## AI Response Transform

Sometimes the data returned by your API doesn't match the widget's schema exactly. The **AI Response Transform** uses AI to automatically map the API response fields to the widget's expected schema.

<Tip>
  The AI Response Transform is especially useful when you're connecting to third-party APIs where you don't control the response format, or when your API returns nested or differently-named fields that need to be flattened into the widget schema.
</Tip>

## Import and Export

You can share widgets between agents, teams, or projects using `.widget` files.

<AccordionGroup>
  <Accordion title="Exporting a Widget">
    1. Open the widget in the builder.
    2. Click the **more options** menu (three dots) in the top-right corner.
    3. Select **Export** to download the widget as a `.widget` file.

    The exported file contains the widget's code, schema, default example, named examples, functions, and states.
  </Accordion>

  <Accordion title="Importing a Widget">
    1. Navigate to the **Widgets** list page.
    2. Click the **Import** button.
    3. Upload a `.widget` file from your computer.

    The imported widget will appear in your widgets list and can be attached to any action.
  </Accordion>
</AccordionGroup>

<Warning>
  Imported widgets do not include action configurations. After importing, you'll need to attach the widget to an action and configure the data flow.
</Warning>
