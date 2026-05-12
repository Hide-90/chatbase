> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Functions

> Configure what happens when users interact with widget elements — API calls, messages, navigation, and data updates.

Functions define the behavior behind interactive widget elements like buttons and forms. You attach a function to an element by referencing its **function name**, and the function's **type** determines what happens when a user triggers it.

## Function Types

Each function type serves a different purpose. Select the type that matches the action you want to perform.

<AccordionGroup>
  <Accordion title="Server Function">
    Makes a request to an external API. The configuration is never visible to the end user.

    | Setting               | Description                                                                                     |
    | :-------------------- | :---------------------------------------------------------------------------------------------- |
    | **URL**               | The endpoint to send the request to. Supports [template tokens](#template-tokens).              |
    | **Method**            | HTTP method: `GET`, `POST`, `PUT`, `PATCH`, or `DELETE`.                                        |
    | **Headers**           | Key-value pairs sent as request headers. Supports [template tokens](#template-tokens).          |
    | **Parameters**        | Query parameters appended to the URL. Supports [template tokens](#template-tokens).             |
    | **Body**              | Request body (for `POST`, `PUT`, `PATCH`). Supports [template tokens](#template-tokens).        |
    | **Return Fields**     | Fields to extract from the response for use in follow-up actions.                               |
    | **On Success**        | [Follow-up action](#after-a-function-runs) when the request succeeds.                           |
    | **On Failure**        | [Follow-up action](#after-a-function-runs) when the request fails.                              |
    | **Additional Inputs** | Extra data passed in at the call site in the code. See [Additional Inputs](#additional-inputs). |
  </Accordion>

  <Accordion title="Client Function">
    Sends a message to the parent webpage. This is designed for widgets embedded inside iframes that need to communicate with the host page.

    | Setting               | Description                                                                                     |
    | :-------------------- | :---------------------------------------------------------------------------------------------- |
    | **Wait for Response** | Whether to wait for a response from the parent page (up to 60 seconds).                         |
    | **Inputs**            | Key-value pairs sent in to the client side code. Supports [template tokens](#template-tokens).  |
    | **Return Fields**     | Fields to extract from the client side code's response.                                         |
    | **On Success**        | [Follow-up action](#after-a-function-runs) when the parent responds successfully.               |
    | **On Failure**        | [Follow-up action](#after-a-function-runs) when the communication fails.                        |
    | **Additional Inputs** | Extra data passed in at the call site in the code. See [Additional Inputs](#additional-inputs). |
  </Accordion>

  <Accordion title="Send Message Function">
    Sends a message into the current conversation.

    | Setting               | Description                                                                                            |
    | :-------------------- | :----------------------------------------------------------------------------------------------------- |
    | **Message Template**  | The message content. Use `{{fieldName}}` [template tokens](#template-tokens) to insert dynamic values. |
    | **Hide Message**      | When enabled, the message is sent in the background and not displayed to the user.                     |
    | **On Execute**        | [Follow-up action](#after-a-function-runs) that runs after the message is sent.                        |
    | **Additional Inputs** | Extra data passed in at the call site in the code. See [Additional Inputs](#additional-inputs).        |
  </Accordion>

  <Accordion title="Link Function">
    Opens a URL in a new browser tab.

    | Setting               | Description                                                                                     |
    | :-------------------- | :---------------------------------------------------------------------------------------------- |
    | **URL**               | The URL to open. Supports [template tokens](#template-tokens).                                  |
    | **On Execute**        | [Follow-up action](#after-a-function-runs) that runs after the link is opened.                  |
    | **Additional Inputs** | Extra data passed in at the call site in the code. See [Additional Inputs](#additional-inputs). |
  </Accordion>

  <Accordion title="Dismiss Function">
    Closes the widget. There are two ways to use this:

    1. **Directly** — Attach it to a button so the user can close the widget on click.
    2. **As a follow-up** — Use it as the follow-up action on another function (e.g., close the widget after a successful API call).

    <Note>
      Dismissal state is persisted. If a user dismisses a widget, it stays dismissed even after a page refresh.
    </Note>
  </Accordion>

  <Accordion title="Set Variables Function">
    Updates widget data values without making any external calls. Useful for storing user selections or transforming data between steps.

    | Setting               | Description                                                                                     |
    | :-------------------- | :---------------------------------------------------------------------------------------------- |
    | **Variables**         | Key-value pairs to set. Values support [template tokens](#template-tokens).                     |
    | **Additional Inputs** | Extra data passed in at the call site in the code. See [Additional Inputs](#additional-inputs). |
  </Accordion>
</AccordionGroup>

## Loading Behavior

When a function runs, you can control how the UI indicates progress.

| Value         | Behavior                                   |
| :------------ | :----------------------------------------- |
| **None**      | No loading indicator is shown.             |
| **Self**      | The triggering element displays a spinner. |
| **Container** | The entire widget shows a loading overlay. |

## Additional Inputs

Sometimes a function needs extra context that depends on where it is called. For example, you might have a list of classes, each with a "Book" button that should pass a different `classId` to the same function.

```jsx theme={null}
{classes.map((item) => (
  <Button
    label={item.name}
    onClickAction={{ functionName: "bookClass", additionalInputs: { classId: item.id } }}
  />
))}
```

Once provided, you can reference additional inputs as [template tokens](#template-tokens) anywhere the function accepts them — in the URL, headers, body, or parameters. For the example above, use `{{classId}}` to insert the value.

<Warning>
  Additional inputs are **not** variables. They only exist for the duration of the function execution. If you need to persist a value, use a **Set Variables** follow-up action to save it after the function runs.
</Warning>

## After a Function Runs

Every function supports a follow-up action that runs after it completes.

* **Server Function** and **Client Function** provide two follow-up slots: **On Success** and **On Failure**.
* **Send Message**, **Link**, **Dismiss**, and **Set Variables** functions provide a single **On Execute** slot.

Each follow-up action can do one of the following:

| Action            | Description                                                                                                                                       |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Dismiss**       | Closes the widget. The dismissal is persisted across page refreshes.                                                                              |
| **Set Variables** | Updates widget data values. For server and client function follow-ups, you can reference response data using [template tokens](#template-tokens). |

## Template Tokens

Template tokens are placeholders written as `{{fieldName}}` that get replaced with current values at runtime. You can use them in any setting that supports dynamic content, including URLs, headers, body content, messages, and variables.

<Tip>
  For follow-up actions on **Server** and **Client** functions, template tokens can also reference fields from the response data. This lets you capture API results and store them as widget variables for use elsewhere.
</Tip>

## Results

Every function produces one of two outcomes:

| Outcome     | Description                                                                                                                                                                        |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Success** | The function completed. For server and client functions, the result may include response data that can be referenced in follow-up actions via [template tokens](#template-tokens). |
| **Error**   | The function failed. The result includes an error message describing what went wrong.                                                                                              |
