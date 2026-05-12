> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Twilio (Phone)

Integrating Twilio with Chatbase allows your AI agent to handle inbound phone calls. Your AI agent will answer calls using its configured voice, personality, and data sources.

In just a few minutes, you can connect your Twilio account, import your phone numbers, and assign them to your agent.

<Info>
  Make sure the phone channel is supported on your plan. Check the [pricing page](https://www.chatbase.co/pricing) for details. You will also need a [Twilio account](https://www.twilio.com/try-twilio) with at least one phone number to get started.
</Info>

## Before you start

* You need a Twilio account. If you don't have one, [sign up for Twilio](https://www.twilio.com/try-twilio).
* You need at least one phone number purchased in your Twilio account.
* Your Twilio **Account SID** and **Auth Token** are available on your [Twilio Console dashboard](https://console.twilio.com/).
* Make sure your Chatbase agent is set up with the voice settings you want callers to hear. You can configure voice, language, and greeting under your agent's **Settings > Voice** tab.

## Step 1: Connect your Twilio account

1\. Navigate to your [Chatbase dashboard](https://www.chatbase.co/dashboard/) and select the agent you want to enable phone calls for.

2\. Go to **Settings > Integrations** in the left sidebar.

3\. Find the **Twilio** card and click **Connect**.

4\. Enter your **Account SID** and **Auth Token** from the [Twilio Console](https://console.twilio.com/).

* **Account SID** starts with `AC` followed by 32 characters (e.g., `ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`).
* **Auth Token** is a 32-character string.

5\. Click **Connect Twilio**.

Chatbase will validate your credentials against the Twilio API. Once connected, your Account SID will be displayed in a read-only field.

<Info>
  Your Twilio credentials are encrypted before being stored. Chatbase never displays your Auth Token after the initial connection. Each agent has its own Twilio connection — you can use the same or different Twilio accounts for different agents.
</Info>

## Step 2: Import phone numbers

Once your Twilio account is connected to this agent, you can import your phone numbers.

1\. On the same Twilio integration page, click **Import from Twilio**.

2\. A dialog will show all available phone numbers from your Twilio account.

3\. Select the numbers you want to import. For each number, you can optionally set a **friendly name** to help you identify it later (e.g., "Sales line" or "Support US").

4\. Click **Import selected**.

Chatbase will automatically configure a SIP trunk on your Twilio account and register each number for call routing. Imported numbers will appear in the phone numbers table with their status shown as **Inactive** until you enable them from the Deploy page.

<Info>
  Each phone number can only be imported to one agent at a time. Numbers that are already imported will appear grayed out in the import dialog.
</Info>

## Step 3: Enable a phone number

After importing, you need to enable the number to start receiving calls.

1\. Navigate to your agent's **Deploy** page.

2\. Find the **Phone** channel card and click **Setup** (or **Manage** if you have already enabled numbers).

3\. Click **Assign number**.

4\. Select one or more numbers from the list of imported numbers.

5\. Click **Assign selected**.

The enabled numbers will appear as cards on the page showing the phone number, a green **Active** badge, and the friendly name if one was set. Your agent is now ready to receive calls on those numbers.

## How calls work

Once a phone number is enabled for an agent:

* **Inbound calls** to that number are automatically routed to the assigned agent.
* The agent uses its configured **voice settings** (voice provider, model, and language) to speak with the caller.
* The agent greets the caller with the **first message** defined in its voice settings.
* The conversation follows the agent's instructions, knowledge base, and actions, just like a chat conversation.
* Each call creates a conversation entry visible in your agent's **Activity > Chat logs** with the source marked as **Phone**.

## Managing phone numbers

### Disable a number

1\. Go to your agent's **Deploy** page and click **Manage** on the Phone channel card.

2\. Click the menu icon on the number card and select **Unassign**.

The number will stop receiving calls but remains imported to this agent. You can re-enable it at any time from the same page.

### Remove a number from the agent

1\. Go to your agent's **Settings > Integrations** and click **Manage** on the Twilio card.

2\. In the phone numbers table, click the menu icon next to the number and select **Remove**.

The number will be removed from this agent but will remain in your Twilio account. You can import it again at any time.

### Disconnect Twilio

1\. Go to your agent's **Settings > Integrations** and click **Manage** on the Twilio card.

2\. Click **Disconnect** in the danger zone at the bottom.

<Info>
  Disconnecting Twilio from an agent will remove all imported phone numbers and delete the SIP trunk from your Twilio account. This action cannot be undone. Your phone numbers will remain in your Twilio account, but you will need to reconnect and re-import them if you want to use them again with this agent.
</Info>
