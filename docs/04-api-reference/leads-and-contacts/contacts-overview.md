> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Contacts Overview

> Learn how to use contacts to enable personalized, secure interactions between your users and AI agents.

Contacts allow you to store and manage user data that your AI agent can access during conversations, enabling personalized interactions while maintaining security and privacy.

## How contacts work

Contacts bridge the gap between anonymous visitors and identified users in your system. When users interact with your agent, you can link their session to stored contact data to provide personalized experiences.

<Info>
  Unlike anonymous visitors, contacts represent users who are authenticated and identified within your business system.
</Info>

### The identification process

<Steps>
  <Step title="Create contacts">
    Upload user data to Chatbase using the [Contacts API](/api-reference/contacts/create-contacts-for-a-chatbot) or manage them through the dashboard.

    <Note>
      **Recommended:** Use [JWT identity verification](/developer-guides/identity-verification#method-1%3A-jwt-recommended) to automatically create and update contacts when users interact with your agent. This eliminates the need for separate API calls.
    </Note>
  </Step>

  <Step title="Verify user identity">
    When users interact with your agent, use [identity verification](/developer-guides/identity-verification) to securely link them to their contact data.

    <Note>
      The `user_id` from your verification must match the `external_id` of a contact for the data to be accessible.
    </Note>
  </Step>

  <Step title="Enable personalized interactions">
    Once linked, your agent can access contact data to provide personalized responses and perform actions on behalf of the user.
  </Step>
</Steps>

## Key benefits

<CardGroup cols={2}>
  <Card title="Secure data storage" icon="shield-check">
    User data is encrypted and access-controlled, ensuring privacy and compliance.
  </Card>

  <Card title="Personalized conversations" icon="user">
    Agents can reference user-specific information to provide tailored responses.
  </Card>

  <Card title="Actions integration" icon="bolt">
    Contact data powers actions, enabling agents to perform user-specific operations such as [Stripe actions](/user-guides/chatbot/actions/stripe-action).
  </Card>

  <Card title="Data synchronization" icon="arrows-rotate">
    Keep Chatbase contacts in sync with your external systems and databases.
  </Card>
</CardGroup>

## Next steps

<CardGroup cols={2}>
  <Card title="Getting Started" icon="rocket" href="/user-guides/chatbot/contacts/getting-started">
    Learn how to get started with contacts.
  </Card>

  <Card title="Identity Verification" icon="key" href="/developer-guides/identity-verification">
    Implement secure user identification to link sessions with contact data.
  </Card>
</CardGroup>
