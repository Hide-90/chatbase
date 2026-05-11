> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Custom Action

## Create Custom Action

This action allows you to instruct the AI agent to provide any information that's included in the response of the API you use.

### Action Types

When creating a custom action, you select a **type** that determines how the action behaves:

| Type                        | Description                                                                                                                                                                                                             |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Server**                  | Calls an external API and returns the response to the agent. The agent uses the response data in its reply.                                                                                                             |
| **Server with UI (Widget)** | Calls an external API, then displays a [widget](/developer-guides/widgets/overview) inline in the chat with the response data. Use this to show rich, interactive UI after fetching data.                               |
| **Client**                  | Executes code in the user's browser via the [JavaScript embed script](/developer-guides/client-side-custom-actions). Useful for accessing browser APIs and frontend context.                                            |
| **Widget only (UI only)**   | Displays a [widget](/developer-guides/widgets/overview) inline in the chat without calling an API. The agent populates the widget from the conversation context. Use this for forms, info cards, and interactive menus. |

<Info>
  **Server with UI** and **Widget only** actions let you attach a widget to the action. You can create and manage widgets directly from the action's configuration page. See the [Widgets documentation](/developer-guides/widgets/overview) for details on building widgets.
</Info>

### General

* Action Name: This is a descriptive name for this action. This will help the AI agent know when to use it.
* When to use: This is the area of instructions that should be provided as a detailed description explaining when the AI agent should use this action and API. It's recommended to include examples of the data this action provides and customer queries it helps answer.
* All custom action requests must send a **JSON body**, and all custom action responses must be **JSON-formatted**.
* You should click on the Save and Continue button after completing the above configuration.

### API

* Collect data inputs from user: Here you should add the list of  information the AI agent needs from the user to perform the action.
  * Name: Name of the data input.
  * Type: Type of the data input.
  * Description: A small sentence that describes to the AI agent the data input that it's expecting to use in the API.

<Frame>
  <img src="https://mintcdn.com/chatbase/DIWSTyTSabxfVW3B/user-guides/chatbot/images/actions/actions-13.png?fit=max&auto=format&n=DIWSTyTSabxfVW3B&q=85&s=9a3ed68a5d01a32c06059648dbc1a7fc" alt="Chatbase Embed Code Example" width="1568" height="444" data-path="user-guides/chatbot/images/actions/actions-13.png" />
</Frame>

* API request: The API endpoint that should be called by the AI Agent to retrieve data or to send updates. You can include data inputs (variables) collected from the user in the URL or the request body.
  * Method: Choose the method that the API should use.
  * HTTPS URL: The URL of the API that the AI agent should use to retrieve the needed information.
  * Add variable: This button should be used when you want to add a variable that depends on the user's input.

<Frame>
  <img src="https://mintcdn.com/chatbase/DIWSTyTSabxfVW3B/user-guides/chatbot/images/actions/actions-14.png?fit=max&auto=format&n=DIWSTyTSabxfVW3B&q=85&s=26b96a050e4b3a977ae42e3d68c32186" alt="Chatbase Embed Code Example" width="1568" height="356" data-path="user-guides/chatbot/images/actions/actions-14.png" />
</Frame>

When the URL is added, the parameters, Headers and Body of the API should be added automatically.

* Parameters: These are key-value pairs sent as part of the API request URL to provide input data or filter the response.
* Headers: Metadata sent along with the API request to provide information about the request or client.
* Body: The data sent as part of the request, typically for GET, POST, PUT, DELETE methods. The body should be **JSON-formatted**.

You should click on the Save and Continue button after completing the above configuration.

### Test Response

* Live response: Test with live data from the API to make sure it is configured correctly.
* Example response: Use example JSON data if the API is not ready.
* You should click on the Save and Continue button after completing the above configuration.

### Data Access

* Full data access: Allow the AI agent to access all available information from the API's response, ensuring comprehensive responses based on complete data.
* Limited data access: Limit the information the AI agent can access, providing more controlled and specific replies while protecting sensitive data.
* You should click on the Save and Continue button after completing the above configuration.

> **Notes:**
>
> 1. The maximum response size is 20KB. Anything exceeding that will return an error.
> 2. The returned response must be JSON-formatted.

## Use Cases

### Upgrade Subscription

In this example, we use an Upgrade Subscription to allow the user to ask from the AI agent to upgrade their subscription to the premium plan.

In the General section, we added Update\_Subscription as the name of the action. We provided the "When to use" information for the AI agent to use this API whenever the user wants to upgrade the subscription.

<Frame>
  <img src="https://mintcdn.com/chatbase/fuaTVXjARv0sH-Me/user-guides/chatbot/images/actions/general-upgrade.png?fit=max&auto=format&n=fuaTVXjARv0sH-Me&q=85&s=2533ad2137dacdcd2ac6faaa8e319fe0" alt="Chatbase Embed Code Example" width="1630" height="1318" data-path="user-guides/chatbot/images/actions/general-upgrade.png" />
</Frame>

In the API section, we added the API used to retrieve the subscription. We added the status of the plan and new plan requested, and the description of the input as follows: Active or canceledif they want to upgrade to premium, send 'active'.

<Frame>
  <img src="https://mintcdn.com/chatbase/fuaTVXjARv0sH-Me/user-guides/chatbot/images/actions/api-upgrade.png?fit=max&auto=format&n=fuaTVXjARv0sH-Me&q=85&s=880a1551ca3ea7d7a9fcff72c2946d23" alt="Chatbase Embed Code Example" width="1554" height="830" data-path="user-guides/chatbot/images/actions/api-upgrade.png" />
</Frame>

In the API request section, we added the API URL ([https://demo-rhythmbox.chatbase.fyi/api/update-subscription](https://demo-rhythmbox.chatbase.fyi/api/update-subscription)) and set the method as GET.

<Frame>
  <img src="https://mintcdn.com/chatbase/fuaTVXjARv0sH-Me/user-guides/chatbot/images/actions/request-upgrade.png?fit=max&auto=format&n=fuaTVXjARv0sH-Me&q=85&s=3c58bfdfd834d17c3fc77400133b6df8" alt="Chatbase Embed Code Example" width="1562" height="764" data-path="user-guides/chatbot/images/actions/request-upgrade.png" />
</Frame>

In the Test Response section, we tested the response of the API when we provided active and premium as a subscription upgrade example.

<Frame>
  <img src="https://mintcdn.com/chatbase/fuaTVXjARv0sH-Me/user-guides/chatbot/images/actions/test-upgrade.png?fit=max&auto=format&n=fuaTVXjARv0sH-Me&q=85&s=26615f535b77e96a7f974cd6bd399a80" alt="Chatbase Embed Code Example" width="1574" height="1266" data-path="user-guides/chatbot/images/actions/test-upgrade.png" />
</Frame>

In the Data Access section, we choose the Full Data Access option for the AI agent to access all the information from the API response.

<Frame>
  <img src="https://mintcdn.com/chatbase/Y-KB8kyKMqhKXtiO/user-guides/chatbot/images/actions/access-upgrade.png?fit=max&auto=format&n=Y-KB8kyKMqhKXtiO&q=85&s=4a309b5c4358c5bfc7f072f1aed2d01a" alt="Chatbase Embed Code Example" width="1556" height="752" data-path="user-guides/chatbot/images/actions/access-upgrade.png" />
</Frame>

Now, we're ready to ask the AI agent to upgrade or downgrade the subscription when the user user asks about in the Playground area on the left side of the page.

<Frame>
  <img src="https://mintcdn.com/chatbase/fuaTVXjARv0sH-Me/user-guides/chatbot/images/actions/upgrade-example.gif?s=7efb8fa8187a75e5c1561e23646fb88a" alt="Chatbase Embed Code Example" width="448" height="561" data-path="user-guides/chatbot/images/actions/upgrade-example.gif" />
</Frame>

### Weather API

In this example, we use a Get Weather API to provide the weather information for the cities asked by the user to the AI agent.

In the General section, we added Get\_Weather as a name of the action. We provided the When to use information for the AI agent to use this API whenever it's asked about the weather of any city.

<Frame>
  <img src="https://mintcdn.com/chatbase/DIWSTyTSabxfVW3B/user-guides/chatbot/images/actions/actions-15.png?fit=max&auto=format&n=DIWSTyTSabxfVW3B&q=85&s=a3ee91c6898fb52289b128ea35af7b3a" alt="Chatbase Embed Code Example" width="1564" height="1025" data-path="user-guides/chatbot/images/actions/actions-15.png" />
</Frame>

In the API section, we added the API used to retrieve the weather information. We added the name of the input as City, the type of the input is Text, and the description of the input as follows: The city that you want to know its weather.

<Frame>
  <img src="https://mintcdn.com/chatbase/DIWSTyTSabxfVW3B/user-guides/chatbot/images/actions/actions-16.png?fit=max&auto=format&n=DIWSTyTSabxfVW3B&q=85&s=710a09ede97b9ba13d80a9c1c8672682" alt="Chatbase Embed Code Example" width="1574" height="636" data-path="user-guides/chatbot/images/actions/actions-16.png" />
</Frame>

In the API request section, we added the API URL ([https://wttr.in/\\\\\{\\\\\{city}}?format=j1](https://wttr.in/\\\\\{\\\\\{city}}?format=j1)) and set the method as GET. The key value pair in the parameters is added automatically after entering the URL.

<Frame>
  <img src="https://mintcdn.com/chatbase/DIWSTyTSabxfVW3B/user-guides/chatbot/images/actions/actions-17.gif?s=0e33d9664181294a2a2f54f5ae912018" alt="Chatbase Embed Code Example" width="790" height="518" data-path="user-guides/chatbot/images/actions/actions-17.gif" />
</Frame>

In the Test Response section, we tested the response of the API when we provided London as a city example.

<Frame>
  <img src="https://mintcdn.com/chatbase/DIWSTyTSabxfVW3B/user-guides/chatbot/images/actions/actions-18.gif?s=2fbd85f1eae6984cb7d892737bb6ac65" alt="Chatbase Embed Code Example" width="838" height="613" data-path="user-guides/chatbot/images/actions/actions-18.gif" />
</Frame>

In the Data Access section, we choose the Full Data Access option for the AI agent to access all the information from the API response.

<Frame>
  <img src="https://mintcdn.com/chatbase/DIWSTyTSabxfVW3B/user-guides/chatbot/images/actions/actions-19.png?fit=max&auto=format&n=DIWSTyTSabxfVW3B&q=85&s=58d2e212b4e4b1809c25ea00bcc3e0ef" alt="Chatbase Embed Code Example" width="1561" height="952" data-path="user-guides/chatbot/images/actions/actions-19.png" />
</Frame>

Now, we're ready to ask the AI agent the weather of any city the user asks about in the Playground area on the left side of the page.

<Frame>
  <img src="https://mintcdn.com/chatbase/DIWSTyTSabxfVW3B/user-guides/chatbot/images/actions/actions-20.gif?s=914e089812fc8122e77d813d77a4cf40" alt="Chatbase Embed Code Example" width="573" height="450" data-path="user-guides/chatbot/images/actions/actions-20.gif" />
</Frame>
