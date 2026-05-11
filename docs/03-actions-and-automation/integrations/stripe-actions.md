> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Stripe Actions

> Automate billing and subscription management with powerful Stripe actions

## Overview

Stripe Actions enable your AI agent to seamlessly handle customer billing inquiries, subscription management, and account updates directly within the chat interface. These actions provide secure, real-time access to customer payment information, streamlining support operations and enhancing customer experience.

<Info>
  **Prerequisites Required**: Before using Stripe Actions, you must:

  1. [Set up Stripe integration](/user-guides/integrations/stripe) with your Chatbase account
  2. Configure [identity verification](/developer-guides/identity-verification) for secure customer authentication
  3. Set up [contacts](/user-guides/chatbot/contacts/contacts-overview) with valid `stripe_account` fields for each customer
</Info>

## How Stripe Actions Work

Stripe Actions leverage Chatbase's identity verification system to securely access customer-specific data. Here's the workflow:

1. **User Authentication**: Customers must be identified using `window.chatbase("identify", {...})` with their unique user ID
2. **Contact Matching**: The system matches the authenticated user ID to a contact record containing their Stripe account id.
3. **Secure Data Access**: Actions retrieve only the data associated with the authenticated customer's Stripe account
4. **Real-time Responses**: AI agent provides immediate answers using live Stripe data

<Warning>
  **Environment Limitations**: Stripe Actions will not function in:

  * Chatbase Playground environment
  * Action Preview mode
  * Compare features

  Testing this action should be done in your actual website environment. Embed the [JavaScript script](/developer-guides/javascript-embed) in your website and test the action.
</Warning>

## Available Stripe Actions

### 1. Get Subscription Information

Retrieve and display customer subscription details including current plan, status, billing cycle, and pricing information.

<Card title="Best for:" icon="credit-card">
  Answering questions about current subscription status, plan details, renewal dates, and subscription history.
</Card>

**Common Use Cases:**

* "What's my current plan?"
* "When does my subscription renew?"
* "How much am I paying monthly?"
* "Is my subscription active?"

#### Setup Instructions

<Steps>
  <Step title="Create the Action">
    Navigate to **Actions** → **Create Action** and select **Stripe Get Subscription Info**.

    <Frame>
      <img src="https://mintcdn.com/chatbase/rsUPJArEUUJiVCBF/user-guides/chatbot/images/actions/stripe/stripe-action-get-subscription.png?fit=max&auto=format&n=rsUPJArEUUJiVCBF&q=85&s=1cfc74e2d3d69e1d8784b58df7586d41" alt="Selecting get subscription action from Stripe options" width="1471" height="794" data-path="user-guides/chatbot/images/actions/stripe/stripe-action-get-subscription.png" />
    </Frame>
  </Step>

  <Step title="Configure Action Details">
    **Action Name:** Enter a unique name for the action.

    **When to use:** Provide detailed instructions for when the AI should use this action.
  </Step>

  <Step title="Save and Enable">
    Click **Save** and toggle the action to **Enabled** to make it available to your AI agent.

    <Frame>
      <img width="300" height="500" src="https://mintcdn.com/chatbase/rsUPJArEUUJiVCBF/user-guides/chatbot/images/actions/stripe/get-subscriptions-action-result.png?fit=max&auto=format&n=rsUPJArEUUJiVCBF&q=85&s=272d24f4696d1718c661e01a8d4e8e96" alt="Configuring get subscription action with name and usage instructions" data-path="user-guides/chatbot/images/actions/stripe/get-subscriptions-action-result.png" />
    </Frame>

    <Check>
      Test the action in the embedded widget to ensure it correctly retrieves subscription data for authenticated users.
    </Check>
  </Step>
</Steps>

### 2. Get Invoice History

Retrieve and display customer invoice history, payment details, and billing records.

<Card title="Best for:" icon="receipt">
  Providing access to billing history, payment confirmations, invoice downloads, and payment troubleshooting.
</Card>

**Common Use Cases:**

* "Show me my recent invoices"
* "Was my payment processed?"
* "Can you provide my billing history?"

#### Setup Instructions

<Steps>
  <Step title="Create the Action">
    Select **Stripe Get Invoices** from the action creation dialog.

    <Frame>
      <img src="https://mintcdn.com/chatbase/rsUPJArEUUJiVCBF/user-guides/chatbot/images/actions/stripe/stripe-action-get-invoices.png?fit=max&auto=format&n=rsUPJArEUUJiVCBF&q=85&s=7ac3bad5fd1a6a1968f9655e498d5544" alt="Selecting get invoices action from Stripe options" width="1472" height="797" data-path="user-guides/chatbot/images/actions/stripe/stripe-action-get-invoices.png" />
    </Frame>
  </Step>

  <Step title="Configure Action Details">
    **Action Name:** Enter a unique name for the action.

    **When to use:** Provide detailed instructions for when the AI should use this action.
  </Step>

  <Step title="Save and Test">
    Save the configuration and test with a sample customer request in the embedded widget.

    <Frame>
      <img width="300" height="500" src="https://mintcdn.com/chatbase/rsUPJArEUUJiVCBF/user-guides/chatbot/images/actions/stripe/get-invoices-action-result.png?fit=max&auto=format&n=rsUPJArEUUJiVCBF&q=85&s=1d3c131bb3a4284a35a7e762580727b4" alt="Configuring get invoices action with detailed usage instructions" data-path="user-guides/chatbot/images/actions/stripe/get-invoices-action-result.png" />
    </Frame>
  </Step>
</Steps>

### 3. Manage Subscriptions

Comprehensive subscription management including plan changes, upgrades, downgrades, and cancellations.

<Card title="Best for:" icon="credit-card">
  Complete subscription lifecycle management, plan changes, adding payment methods and cancellation handling.
</Card>

**Common Use Cases:**

* "I want to upgrade my plan"
* "Upgrade my plan to the pro"
* "I need to cancel my subscription"
* "What plans are available?"

#### Setup Instructions

<Steps>
  <Step title="Create the Action">
    Select **Stripe** → **Manage Subscriptions** from the Stripe action options.
  </Step>

  <Step title="Configure Subscription Options">
    **Action Name:** Enter a unique name for the action.

    **When to use:** Provide detailed instructions for when the AI should use this action.

    <Frame>
      <img src="https://mintcdn.com/chatbase/rsUPJArEUUJiVCBF/user-guides/chatbot/images/actions/stripe/stripe-action-manage-subscription.png?fit=max&auto=format&n=rsUPJArEUUJiVCBF&q=85&s=e5c05fbf0adc738fa231a32e95ffb336" alt="Configuring subscription management action with comprehensive options" width="1472" height="797" data-path="user-guides/chatbot/images/actions/stripe/stripe-action-manage-subscription.png" />
    </Frame>
  </Step>

  <Step title="Define Available Plans">
    Configure which subscription plans and options are available for customers to choose from:

    <Tabs>
      <Tab title="Plan Configuration">
        Set up available plans with their behavior.

        <Frame>
          <img src="https://mintcdn.com/chatbase/rsUPJArEUUJiVCBF/user-guides/chatbot/images/actions/stripe/stripe-action-manage-subscription-plans-config.png?fit=max&auto=format&n=rsUPJArEUUJiVCBF&q=85&s=1e81a5acde7651e42cd03751e42400fb" alt="Configuring available subscription plans and options" width="2940" height="1594" data-path="user-guides/chatbot/images/actions/stripe/stripe-action-manage-subscription-plans-config.png" />
        </Frame>
      </Tab>

      <Tab title="Cancellation Settings">
        Configure cancellation policies and refund handling.

        <Frame>
          <img src="https://mintcdn.com/chatbase/rsUPJArEUUJiVCBF/user-guides/chatbot/images/actions/stripe/stripe-action-manage-subscription-cancel-config.png?fit=max&auto=format&n=rsUPJArEUUJiVCBF&q=85&s=3d18a760aeb74e20fbedf9435a80f51c" alt="Configuring available subscription plans and options" width="2940" height="1596" data-path="user-guides/chatbot/images/actions/stripe/stripe-action-manage-subscription-cancel-config.png" />
        </Frame>
      </Tab>
    </Tabs>
  </Step>

  <Step title="Test All Scenarios">
    Thoroughly test various subscription management scenarios:

    <AccordionGroup>
      <Accordion title="Upgrade Testing">
        Test upgrading from basic to premium plans with proper proration calculations.
      </Accordion>

      <Accordion title="Downgrade Testing">
        Verify downgrades work correctly with appropriate billing adjustments.
      </Accordion>

      <Accordion title="Cancellation Flow">
        Test the complete cancellation process.
      </Accordion>
    </AccordionGroup>

    <Frame>
      <img src="https://mintcdn.com/chatbase/rsUPJArEUUJiVCBF/user-guides/chatbot/images/actions/stripe/stripe-manage-subscription-result.gif?s=d516c4f147cee6dd0aecd33d21de1cc2" alt="Testing subscription management action with comprehensive options" width="400" height="733" data-path="user-guides/chatbot/images/actions/stripe/stripe-manage-subscription-result.gif" />
    </Frame>

    <Check>
      All subscription changes should be immediately reflected in both Stripe and the customer experience.
    </Check>
  </Step>
</Steps>

### 4. Change Billing Information

Allow customers to update their billing address and other account information.

<Card title="Best for:" icon="address-card">
  Self-service billing updates, address changes and other account information updates.
</Card>

**Common Use Cases:**

* "I need to update my billing address"
* "Update my billing email address"
* "Update my billing phone number"

#### Setup Instructions

<Steps>
  <Step title="Create the Action">
    Select **Stripe** → **Change customer information** from the available Stripe actions.

    <Frame>
      <img src="https://mintcdn.com/chatbase/rsUPJArEUUJiVCBF/user-guides/chatbot/images/actions/stripe/stripe-action-change-billing.png?fit=max&auto=format&n=rsUPJArEUUJiVCBF&q=85&s=4e69f68e4b607abc04bfd50e92d30cb7" alt="Selecting change billing address action" width="2938" height="1594" data-path="user-guides/chatbot/images/actions/stripe/stripe-action-change-billing.png" />
    </Frame>
  </Step>

  <Step title="Configure Action Details">
    **Action Name:** Enter a unique name for the action.

    **When to use:**
    Provide detailed instructions for when the AI should use this action.
  </Step>

  <Step title="Test Security Measures">
    Test the action with various scenarios to ensure only authenticated users can make changes.

    <Frame>
      <img width="300" height="500" src="https://mintcdn.com/chatbase/rsUPJArEUUJiVCBF/user-guides/chatbot/images/actions/stripe/stripe-change-billing-result.png?fit=max&auto=format&n=rsUPJArEUUJiVCBF&q=85&s=0eefe8674b0c838a51aba5b7b461c566" alt="Testing change billing address action" data-path="user-guides/chatbot/images/actions/stripe/stripe-change-billing-result.png" />
    </Frame>

    <Check>
      Verify that billing information updates are reflected in both Stripe and the customer's account.
    </Check>
  </Step>
</Steps>

## Troubleshooting

<AccordionGroup>
  <Accordion title="Action Not Triggering">
    **Possible causes:**

    * Action is disabled in the dashboard
    * User is not properly authenticated
    * Contact record missing or invalid `stripe_account`
    * Insufficient "When to use" description

    **Solutions:**

    * Enable the action and verify configuration
    * Check identity verification implementation
    * Validate contact record has correct `stripe_account` field
    * Enhance action description with more specific use cases
  </Accordion>

  <Accordion title="No Data Returned">
    **Possible causes:**

    * Invalid Stripe customer ID in contact record
    * Stripe account has no subscription or invoice data
    * Stripe API permissions insufficient
    * Network connectivity issues

    **Solutions:**

    * Verify Stripe customer ID exists and is active
    * Check Stripe account has relevant data
    * Review Stripe integration permissions
    * Test Stripe API connectivity directly
  </Accordion>

  <Accordion title="Authentication Errors">
    **Possible causes:**

    * User hash validation failing
    * `external_id` doesn't match `user_id`
    * Contact record not found
    * Identity verification not called

    **Solutions:**

    * Verify hash generation matches expected format
    * Ensure `external_id` exactly matches authenticated `user_id`
    * Create contact record for the user
    * Implement proper identity verification flow
  </Accordion>
</AccordionGroup>

## Best Practices

<CardGroup cols={2}>
  <Card title="Security First" icon="shield-check">
    Always validate user identity before processing any billing-related requests. Never allow unauthenticated access to financial data.
  </Card>

  <Card title="Testing Coverage" icon="flask">
    Thoroughly test all actions with various user scenarios, edge cases, and error conditions before going live.
  </Card>
</CardGroup>
