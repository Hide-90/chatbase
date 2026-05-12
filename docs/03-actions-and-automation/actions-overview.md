> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Overview

> AI actions are a set of functions or tasks that your AI agent can trigger or execute during a conversation with users. These actions enhance the conversational experience, improve efficiency, and allow the AI agent to go beyond just responding to queries. Some of these actions may include performing specific tasks, gathering information, providing insights, or even integrating with other systems.

A **Custom Action** allows users to extend the functionality of their AI agent by executing a custom code or integrating with other systems. This is useful for triggering specific backend processes, such as processing payments, handling unique queries, or fetching data from external sources.

<Frame>
  <img src="https://mintcdn.com/chatbase/N6zzL0T2KpFP05Ed/user-guides/chatbot/images/actions/available-ai-actions.png?fit=max&auto=format&n=N6zzL0T2KpFP05Ed&q=85&s=10f1646b718c07d9d32227466cebe65c" alt="Available AI Actions" width="742" height="1079" data-path="user-guides/chatbot/images/actions/available-ai-actions.png" />
</Frame>

**Example:**

An AI agent could use a custom action to check the user's record status by querying a backend system and returning the response ("You have a premium account").

**Best Suited For:**

* Advanced use cases requiring custom code execution
* Integration with third-party systems (e.g., internal databases, payment systems)
* Custom workflows where standard actions are insufficient

***

**Stripe Actions** enable your AI agent to access and display billing information directly from your Stripe account. These actions allow customers to retrieve their subscription details, invoice history, manage billing addresses, and handle subscription changes through the chat interface.

<Info>
  Before using Stripe actions, you must first integrate your Stripe account with Chatbase. [Learn how to set up the Stripe integration](/user-guides/integrations/stripe).
</Info>

**Available Stripe Actions:**

* **Get Invoices** - Retrieve and display customer invoices from Stripe
* **Get Subscriptions** - Show current subscription details and status
* **Change Billing Address** - Allow customers to update their billing information
* **Manage Subscriptions** - Enable subscription updates, cancellations, or new subscriptions

**Example:**

A customer asks, "What's my current subscription status?" The AI agent retrieves their subscription details from Stripe and displays their plan, billing cycle, and next payment date.

**Best Suited For:**

* SaaS businesses with subscription models
* E-commerce platforms with recurring billing
* Customer support automation for billing inquiries
* Self-service customer portals for account management

***

The **Slack Action** enables your AI agent to send messages to Slack channels or direct messages. It is ideal for automating workflows that involve workspace notifications or collaboration within Slack.

**Example:**

When a user mentions a topic during a conversation with the AI agent, a Slack message is automatically sent to a channel of your choice to notify you that the topic has been mentioned.

**Best Suited For:**

* Team collaboration tools (e.g., notifying Slack channels about new leads, support tickets)
* Automated internal communication workflows
* Real-time alerts for customer support or sales workspaces

***

A **Custom Button Action** allows you to create custom buttons within the AI agent interface, enabling users to locate other pages easily.

**Example:**

After providing information on product categories, the AI agent displays buttons like "Browse Products" or "View Details," which redirects your users to the respective pages.

**Best Suited For:**

* E-commerce and product recommendation systems
* Scenarios where you want users to take action directly in the chat interface (e.g., selecting options, completing forms)
* Quick decision-making processes with predefined responses

***

The **Calendly Action** integrates the AI agent with Calendly, a scheduling platform, or you can connect to your **Cal.com account.** The actions allow users to view available time slots and schedule appointments directly through the AI agent.

**Example:**

A user asks, "When can I book a call?" The AI agent shows available time slots pulled from your Calendly/Cal account, and the user can book directly through the chat.

**Best Suited For:**

* Appointment booking and calendar synchronization
* Service providers offering consultations or meetings (e.g., coaching, sales calls)
* Businesses with regular meeting requirements needing automated scheduling

***

The **Web Search Action** allows the AI agent to perform web searches in real-time to provide answers that are outside of its pre-trained knowledge base. It can retrieve up-to-date information, helping the bot answer questions about current events, trending topics, or less common queries.

**Example:**

If a user asks, "What is the weather in New York today?", the AI agent uses the web search action to pull up the latest weather details from a search engine or API.

**Best Suited For:**

* Answering questions with dynamic or real-time data (e.g., weather, news, stock prices)
* When the AI agent needs to answer uncommon or specific queries that aren't in its knowledge base
* Content-driven platforms that require the latest information

***

The **Collect Leads Action** enables the AI agent to gather user information (e.g., name, email, phone number) and automatically store it as a lead on the dashboard. This action is vital for capturing potential customers during interactions.

**Example:**

The AI agent prompts your users with a form asking for their details after an interaction about a product or service.

**Best Suited For:**

* Lead generation for sales and marketing workspaces
* E-commerce businesses looking to capture customer information
* Businesses seeking to automate and streamline the lead nurturing process

***

The **Escalate to human Action** enables your AI agent to automatically create a ticket on behalf of your user with a summary of their conversation. This action can help you allow your users to escalate their requests to a human through your preferred CRM, including **Zendesk**, **Salesforce**, **Intercom**, **Freshdesk**, and **Zohodesk**.

**Example:**

Your AI agent automatically creates a ticket with a summary of the issue or request, directed to your integrated CRM, when the user is requesting human support or your AI agent is failing to resolve thier issue.

**Best Suited For:**

* CRM-focused systems
* Involving a human in the loop via email without allowing direct Live Chat
* Scenarios where you want users to escalate issues and requests directly to a human

***

These actions provide extensive customization, real-time functionality, and powerful integrations that enhance the AI agent capabilities, making them more dynamic and useful for businesses in various sectors.
