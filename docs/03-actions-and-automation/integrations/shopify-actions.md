> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Shopify Actions

> Help customers browse products, track orders, manage their cart, and update their account through your AI agent

## Overview

Shopify Actions enable your AI agent to provide comprehensive e-commerce support directly within the chat interface. These actions give your agent access to your store's product catalog, order information, and customer data, allowing it to assist shoppers throughout their entire journey.

<Info>
  **Prerequisite:** Before using Shopify Actions, you must [set up the Shopify integration](/user-guides/integrations/shopify) with your Chatbase account.
</Info>

## Available Shopify Actions

### 1. Get Products

Search and display products from your Shopify catalog. Customers can browse by category, filter by criteria, search for specific items, and add products directly to their cart.

<Card title="Best for:" icon="magnifying-glass">
  Helping customers discover products, answering questions about inventory, comparing items, and facilitating add-to-cart actions.
</Card>

**Common Use Cases:**

* "Show me red dresses under \$50"
* "What laptops do you have in stock?"

<Info>
  **Note:** Adding products to the cart only works when the app is embedded in your Shopify store. It will not work in the Playground.
</Info>

#### Cart Update Events

When a customer adds a product to their cart through the chat widget, Chatbase dispatches custom DOM events so your theme can react accordingly (e.g., updating the cart icon count). The following events are fired:

```js theme={null}
document.dispatchEvent(new CustomEvent('cart:updated', { detail: { newCart } }));
document.dispatchEvent(new CustomEvent('cart-update', { detail: { newCart } }));
document.dispatchEvent(new CustomEvent('cart:update', { detail: { newCart } }));
```

You can listen to any of these events in your theme's JavaScript to keep the cart UI **in sync**:

```js theme={null}
document.addEventListener('cart:updated', (event) => {
  const cart = event.detail.newCart;
  // Update your theme's cart count, e.g.:
  document.querySelector('.cart-count').textContent = cart.item_count;
});
```

<Info>
  Multiple event names are dispatched to ensure compatibility across different Shopify themes. You only need to listen to one of them.
</Info>

#### How Product Sync Works

To sync your catalog, expand the **Products** accordion and click **Sync** or **Sync and Enable Action**. Chatbase will then retrieve all products from your Shopify store. After the initial import, Chatbase automatically listens for changes—whenever a product is added, updated, or deleted in your store, the data syncs in real time. This ensures your agent always has access to up-to-date product information. When you delete the action, Chatbase automatically removes its stored product data and stops syncing future updates.

#### Setup Instructions

<Steps>
  <Step title="Navigate to Actions">
    Go to your [Chatbase dashboard](https://www.chatbase.co/dashboard/) and select the agent connected to your Shopify store. Click **Actions** at the top of the page.
  </Step>

  <Step title="Create the Action">
    Click **Create Action** and choose **Shopify show product**.
  </Step>

  <Step title="Configure Action Details">
    **Action Name:** Enter a descriptive name for the action (e.g., "Search Products").

    **When to use:** Provide clear instructions for when the AI should trigger this action. For example:

    * Use this action when the user asks about products, inventory, or availability
    * Use this action when the user wants to browse or search for items
    * Use this action when the user asks to add something to their cart

    <Frame>
      <img src="https://mintcdn.com/chatbase/Lu98Z4emH4kt6pR8/user-guides/chatbot/images/actions/shopify/shopify-get-products.png?fit=max&auto=format&n=Lu98Z4emH4kt6pR8&q=85&s=6786f05a5ec7414fc1a43b31d4c311c4" alt="Shopify Get Products" width="1414" height="1184" data-path="user-guides/chatbot/images/actions/shopify/shopify-get-products.png" />
    </Frame>
  </Step>

  <Step title="Sync Your Products">
    Expand the **Products** accordion and click **Sync** to import your catalog, or click **Sync and Enable Action** to sync and enable the action in one step. The initial sync may take a few minutes depending on your catalog size.

    <Frame>
      <img src="https://mintcdn.com/chatbase/Lu98Z4emH4kt6pR8/user-guides/chatbot/images/actions/shopify/shopify-sync-products.png?fit=max&auto=format&n=Lu98Z4emH4kt6pR8&q=85&s=4700a61334bd33687c27b14ec63409e8" alt="Shopify Sync Products" width="1408" height="662" data-path="user-guides/chatbot/images/actions/shopify/shopify-sync-products.png" />
    </Frame>
  </Step>

  <Step title="Save and Enable">
    If you clicked **Sync** in the previous step, click **Save** and ensure the action is toggled to **Enabled**.

    <Check>
      Test the action by asking your agent product-related questions to verify it returns accurate results.
    </Check>

    <Frame>
      <img src="https://mintcdn.com/chatbase/Lu98Z4emH4kt6pR8/user-guides/chatbot/images/actions/shopify/shopify-get-products-demo.gif?s=d7440c1a33ff25a81963f847c05df873" alt="Shopify Get Products in action" width="400" height="664" data-path="user-guides/chatbot/images/actions/shopify/shopify-get-products-demo.gif" />
    </Frame>
  </Step>
</Steps>

***

### 2. Get Orders

Retrieve order information for customers. Customers can check order status, view their purchase history, and get details about specific orders using various filters.

<Card title="Best for:" icon="box">
  Answering order status inquiries, providing tracking information, displaying purchase history, and helping customers find specific order details.
</Card>

**Common Use Cases:**

* "Where is my order?"
* "Show me my recent orders"
* "What's the status of order #1234?"
* "When will my package arrive?"

<Info>
  **Order status in the widget:** The widget pulls order status directly from Shopify, so it reflects the latest information Shopify has available on the order status page. Shipped orders appear as "**On its way**". To display delivery confirmation, ensure your store uses a trackable carrier (USPS, UPS, FedEx, etc.) or a third-party app that provides delivery updates to Shopify.
</Info>

#### Setup Instructions

<Steps>
  <Step title="Navigate to Actions">
    Go to your [Chatbase dashboard](https://www.chatbase.co/dashboard/) and select the agent connected to your Shopify store. Click **Actions** at the top of the page.
  </Step>

  <Step title="Create the Action">
    Click **Create Action** and choose **Shopify show order**.
  </Step>

  <Step title="Configure Action Details">
    **Action Name:** Enter a descriptive name for the action (e.g., "Order Lookup").

    **When to use:** Provide clear instructions for when the AI should trigger this action. For example:

    * Use this action when the user asks about their order status
    * Use this action when the user wants to track a shipment
    * Use this action when the user asks about their purchase history
    * Use this action when the user provides an order number

    <Frame>
      <img src="https://mintcdn.com/chatbase/Lu98Z4emH4kt6pR8/user-guides/chatbot/images/actions/shopify/shopify-get-orders.png?fit=max&auto=format&n=Lu98Z4emH4kt6pR8&q=85&s=f707249e828a678705a78ed29112c293" alt="Shopify Get Orders" width="1398" height="1164" data-path="user-guides/chatbot/images/actions/shopify/shopify-get-orders.png" />
    </Frame>
  </Step>

  <Step title="Save and Enable">
    Click **Save** and ensure the action is toggled to **Enabled**.

    <Check>
      Test the action by asking your agent about order status to verify it retrieves the correct information.
    </Check>

    <Frame>
      <img src="https://mintcdn.com/chatbase/Lu98Z4emH4kt6pR8/user-guides/chatbot/images/actions/shopify/shopify-get-orders.gif?s=0f569454a1d377ce5c5bfb083b36d507" alt="Shopify Get Orders in action" width="400" height="669" data-path="user-guides/chatbot/images/actions/shopify/shopify-get-orders.gif" />
    </Frame>

    <Info>
      **This action cannot be tested in the Action Preview on the dashboard, as it requires the user to be authenticated in order to work properly.**
    </Info>
  </Step>
</Steps>

***

### 3. Get Cart

Display the current contents of a customer's shopping cart, including items, quantities, prices, and totals.

<Card title="Best for:" icon="cart-shopping">
  Showing customers what's in their cart, displaying cart totals, and helping customers review items before checkout.
</Card>

**Common Use Cases:**

* "What's in my cart?"
* "Show me my cart total"
* "How many items are in my cart?"
* "What did I add to my cart?"

<Info>
  **Note:** Retrieving the cart only works when the app is embedded in your Shopify store. It will not work in the Playground.
</Info>

#### Setup Instructions

<Steps>
  <Step title="Navigate to Actions">
    Go to your [Chatbase dashboard](https://www.chatbase.co/dashboard/) and select the agent connected to your Shopify store. Click **Actions** at the top of the page.
  </Step>

  <Step title="Create the Action">
    Click **Create Action** and choose **Shopify get cart**.
  </Step>

  <Step title="Configure Action Details">
    **Action Name:** Enter a descriptive name for the action (e.g., "View Cart").

    **When to use:** Provide clear instructions for when the AI should trigger this action. For example:

    * Use this action when the user asks about their cart contents
    * Use this action when the user wants to see their cart total
    * Use this action when the user asks what items they've added

    <Frame>
      <img src="https://mintcdn.com/chatbase/Lu98Z4emH4kt6pR8/user-guides/chatbot/images/actions/shopify/shopify-get-cart.png?fit=max&auto=format&n=Lu98Z4emH4kt6pR8&q=85&s=24747ac9a2e69262bc6d8e3e286dde38" alt="Shopify Get Cart" width="1398" height="1176" data-path="user-guides/chatbot/images/actions/shopify/shopify-get-cart.png" />
    </Frame>
  </Step>

  <Step title="Save and Enable">
    Click **Save** and ensure the action is toggled to **Enabled**.

    <Check>
      Test the action by asking your agent to show cart contents.
    </Check>

    <Frame>
      <img src="https://mintcdn.com/chatbase/Lu98Z4emH4kt6pR8/user-guides/chatbot/images/actions/shopify/shopify-get-cart.gif?s=468d90cd051bb3f08c3fb2b633c9153e" alt="Shopify Get Cart in action" width="400" height="667" data-path="user-guides/chatbot/images/actions/shopify/shopify-get-cart.gif" />
    </Frame>

    <Info>
      **This action cannot be tested in the Action Preview on the dashboard, as it requires the user to be authenticated in order to work properly.**
    </Info>
  </Step>
</Steps>

***

### 4. Update Profile

Enable customers to modify their account profile information through the agent.

<Card title="Best for:" icon="user-pen">
  Account management, updating contact information, and helping customers keep their profile current.
</Card>

**Common Use Cases:**

* "Update my email address"
* "Change my phone number"
* "Update my account information"

#### Setup Instructions

<Steps>
  <Step title="Navigate to Actions">
    Go to your [Chatbase dashboard](https://www.chatbase.co/dashboard/) and select the agent connected to your Shopify store. Click **Actions** at the top of the page.
  </Step>

  <Step title="Create the Action">
    Click **Create Action** and choose **Shopify update profile**.
  </Step>

  <Step title="Configure Action Details">
    **Action Name:** Enter a descriptive name for the action (e.g., "Update Profile").

    **When to use:** Provide clear instructions for when the AI should trigger this action. For example:

    * Use this action when the user wants to update their profile information
    * Use this action when the user asks to change their email or phone number
    * Use this action when the user wants to modify their account details

    <Frame>
      <img src="https://mintcdn.com/chatbase/Lu98Z4emH4kt6pR8/user-guides/chatbot/images/actions/shopify/shopify-update-profile.png?fit=max&auto=format&n=Lu98Z4emH4kt6pR8&q=85&s=df5e0e1515144c406fd77d0dfdf688c7" alt="Shopify Update Profile" width="1394" height="1164" data-path="user-guides/chatbot/images/actions/shopify/shopify-update-profile.png" />
    </Frame>
  </Step>

  <Step title="Save and Enable">
    Click **Save** and ensure the action is toggled to **Enabled**.

    <Check>
      Test the action by asking your agent to update profile information.
    </Check>

    <Frame>
      <img src="https://mintcdn.com/chatbase/Lu98Z4emH4kt6pR8/user-guides/chatbot/images/actions/shopify/shopify-update-profile.gif?s=6797435effd1f05c764daf8090dfc5ba" alt="Shopify Update Profile in action" width="400" height="667" data-path="user-guides/chatbot/images/actions/shopify/shopify-update-profile.gif" />
    </Frame>

    <Info>
      **This action cannot be tested in the Action Preview on the dashboard, as it requires the user to be authenticated in order to work properly.**
    </Info>
  </Step>
</Steps>

***

### 5. Update Billing Address

Allow customers to add new billing addresses or update existing ones directly through the chat interface.

<Card title="Best for:" icon="address-card">
  Self-service address updates, helping customers correct billing information, and streamlining account management.
</Card>

**Common Use Cases:**

* "Update my billing address"
* "Change my payment address"
* "I moved and need to update my address"
* "I want to add a new address and set it as default"

#### Setup Instructions

<Steps>
  <Step title="Navigate to Actions">
    Go to your [Chatbase dashboard](https://www.chatbase.co/dashboard/) and select the agent connected to your Shopify store. Click **Actions** at the top of the page.
  </Step>

  <Step title="Create the Action">
    Click **Create Action** and choose **Shopify update address**.
  </Step>

  <Step title="Configure Action Details">
    **Action Name:** Enter a descriptive name for the action (e.g., "Update Billing Address").

    **When to use:** Provide clear instructions for when the AI should trigger this action. For example:

    * Use this action when the user wants to update their billing address
    * Use this action when the user mentions they moved or changed addresses
    * Use this action when the user asks to change their payment address

    <Frame>
      <img src="https://mintcdn.com/chatbase/Lu98Z4emH4kt6pR8/user-guides/chatbot/images/actions/shopify/shopify-update-address.png?fit=max&auto=format&n=Lu98Z4emH4kt6pR8&q=85&s=fb2ba91415315df0e7e0385c591e3f02" alt="Shopify Update Address" width="1386" height="1166" data-path="user-guides/chatbot/images/actions/shopify/shopify-update-address.png" />
    </Frame>
  </Step>

  <Step title="Save and Enable">
    Click **Save** and ensure the action is toggled to **Enabled**.

    <Check>
      Test the action by asking your agent to update a billing address.
    </Check>

    <Frame>
      <img src="https://mintcdn.com/chatbase/Lu98Z4emH4kt6pR8/user-guides/chatbot/images/actions/shopify/shopify-update-address.gif?s=2134862df46e32310feef154a520946b" alt="Shopify Update Address in action" width="400" height="664" data-path="user-guides/chatbot/images/actions/shopify/shopify-update-address.gif" />
    </Frame>

    <Info>
      **This action cannot be tested in the Action Preview on the dashboard, as it requires the user to be authenticated in order to work properly.**
    </Info>
  </Step>
</Steps>

***

## Best Practices

<CardGroup cols={2}>
  <Card title="Clear Action Triggers" icon="bullseye">
    Write specific "When to use" descriptions to help the AI agent accurately determine when to trigger each action. Include example phrases customers might use.
  </Card>

  <Card title="Test Thoroughly" icon="flask">
    Test each action with various customer queries before going live. Verify that product searches return accurate results and order lookups display correct information.
  </Card>

  <Card title="Keep Products Synced" icon="rotate">
    Monitor your product sync status regularly. If you notice discrepancies, you can manually trigger a resync from the action settings.
  </Card>

  <Card title="Combine Actions" icon="layer-group">
    Enable multiple actions together to provide a complete shopping experience. Customers often need to search products, check their cart, and track orders in the same conversation.
  </Card>
</CardGroup>
