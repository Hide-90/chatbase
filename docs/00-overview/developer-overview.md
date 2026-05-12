> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Developer Overview

> Welcome to the Chatbase Developer Guide! Whether you're embedding a simple chat widget or building complex integrations, this guide will help you implement AI-powered conversations in your application.

<Frame>
  <div style={{ display: 'block', margin: '40px auto', maxWidth: '200px', height: 'auto' }}>
    <img src="https://mintcdn.com/chatbase/-Fpgt9v-5BbhN1P9/logo/light.svg?fit=max&auto=format&n=-Fpgt9v-5BbhN1P9&q=85&s=146819379464b6ddd89e68cc273c43ef" alt="Chatbase Logo" style={{ width: '100%', height: 'auto' }} className="block dark:hidden" width="504" height="109" data-path="logo/light.svg" />

    <img src="https://mintcdn.com/chatbase/-Fpgt9v-5BbhN1P9/logo/dark.svg?fit=max&auto=format&n=-Fpgt9v-5BbhN1P9&q=85&s=cdc0de6907718e3a25f28190ad834cc0" alt="Chatbase Logo" style={{ width: '100%', height: 'auto' }} className="hidden dark:block" width="504" height="109" data-path="logo/dark.svg" />
  </div>
</Frame>

## Choose Your Integration Path

<CardGroup cols={2}>
  <Card title="JavaScript Embed Script" icon="js" href="/developer-guides/javascript-embed">
    Perfect for web developers who want to add a chat widget with custom behavior, event handling, and rich user experiences.
  </Card>

  <Card title="REST API Integration" icon="terminal" href="/developer-guides/api-integration">
    Ideal for backend developers building custom chat interfaces, mobile apps, or server-to-server integrations.
  </Card>

  <Card title="API v2" icon="bolt" href="/api-v2/overview">
    The latest API with structured errors, streaming via SSE, and cursor-based pagination.
  </Card>
</CardGroup>

## JavaScript Embed Integration

Perfect for web developers who want rich chat functionality with minimal complexity. The JavaScript embed script provides:

* **Simple Integration**: Add to any website with one script tag.
* **Advanced Features**: Event listeners, custom actions, and custom initial message.
* **Identity Verification**: Secure user sessions for authenticated apps and contact management.
* **Real-time Events**: React to user messages and AI responses.

<CardGroup cols={1}>
  <Card title="Complete JavaScript Embed Guide" icon="js" href="/developer-guides/javascript-embed">
    Get the full implementation guide with examples, advanced features, and best practices →
  </Card>
</CardGroup>

## REST API Integration

Ideal for backend developers who need complete control over AI conversations. The REST API provides:

* **Chat API**: Send messages and receive AI responses with streaming support
* **Agent Management**: Create, update, and configure AI agents programmatically
* **Data Access**: Retrieve conversations, leads, and analytics
* **Webhooks**: Real-time notifications for chat events

<CardGroup cols={1}>
  <Card title="Complete REST API Guide" icon="terminal" href="/developer-guides/api-integration">
    Get the full API documentation with examples, authentication, and best practices →
  </Card>
</CardGroup>

## Common Integration Patterns

<AccordionGroup>
  <Accordion title="E-commerce Support Bot">
    **Perfect for online stores**

    * **Embed Script**: Chat bubble on product pages
    * **Identity Verification**: Logged-in customer context
    * **Custom Actions**: Order lookup, returns processing
    * **API Integration**: Sync with order management system
  </Accordion>

  <Accordion title="SaaS Customer Success">
    **Help users succeed with your product**

    * **Embed Script**: Contextual help widget
    * **Event Listeners**: Track user interactions
    * **Custom Actions**: Feature tutorials, account management
  </Accordion>

  <Accordion title="Enterprise Knowledge Base">
    **Internal workspace support system**

    * **API Integration**: Custom internal dashboard
    * **Identity Verification**: Employee authentication and identification
    * **Contacts API**: Team directory integration
    * **Analytics**: Usage tracking and insights
  </Accordion>
</AccordionGroup>
