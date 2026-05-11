> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Salesforce Actions

> Create support tickets and connect users to live agents in Salesforce when your AI agent needs to escalate customer issues

## Overview

Salesforce Actions enable your AI agent to seamlessly create support tickets (cases) and connect users to live support agents directly within the chat interface. These actions provide a smooth escalation path when the AI agent cannot resolve customer issues, ensuring users receive the appropriate level of support based on urgency and complexity.

<Info>
  Before using Salesforce actions, you must [set up Salesforce integration](/user-guides/integrations/salesforce) with your Chatbase account
</Info>

## Available Salesforce Actions

### 1. Create Ticket

Create a support ticket (case) in Salesforce when the AI agent cannot solve the user's problem and the issue does not require immediate assistance. This action allows users to receive follow-up support without needing real-time interaction.

<Card title="Best for:" icon="ticket">
  Handling non-urgent issues that can be resolved through asynchronous support, tracking customer inquiries, and ensuring all support requests are logged in Salesforce for proper follow-up.
</Card>

**Common Use Cases:**

* "The chatbot couldn't answer my question about billing"
* "I want to report a bug I found"
* "Can someone follow up with me about this issue?"

#### Setup Instructions

<Steps>
  <Step title="Create the Action">
    Navigate to **Actions** → **Create Action** and select **Create ticket**.
  </Step>

  <Step title="Configure Action Details">
    **Action name:** Enter a unique name for the action.

    **Ticket platform:** Choose Salesforce

    **When to use:** Provide detailed instructions for when the AI should use this action. For example:

    * Use this action when you cannot answer the user's question or solve their problem
    * Use this action when the user explicitly requests to create a ticket or case
    * Use this action for non-urgent issues that don't require immediate human assistance
    * Do not use this action if the user needs immediate help or expresses urgency
  </Step>

  <Step title="Save and Enable">
    Click **Save** and toggle the action to **Enabled** to make it available to your AI agent.
  </Step>
</Steps>

### 2. Live Chat

Connect the user to a real human support agent in Salesforce when the chatbot cannot solve the user's problems and the issue requires immediate resolution. This action enables real-time support escalation for urgent matters.

<Card title="Best for:" icon="headset">
  Handling urgent issues that require immediate human assistance, complex problems that need real-time troubleshooting, and situations where customers express frustration or need instant resolution.
</Card>

**Common Use Cases:**

* "I need to speak to a human right now"
* "This is urgent and I need immediate help"
* "The chatbot isn't helping me, connect me to support"
* "I have a critical issue that needs to be resolved immediately"

#### Setup Instructions

<Steps>
  <Step title="Configure Salesforce Org for Live Chat">
    Set up your Salesforce org to enable messaging and live chat functionality. Complete the following configuration steps in order:

    **1. Enable Messaging Settings**

    Navigate to **Setup** in Salesforce. In the **Quick Find** box, search for "Messaging" and select **Messaging Settings**. Enable messaging by turning on the toggle.

    <Info>
      Messaging Settings must be enabled before you can create messaging channels or use Enhanced Chat features.
    </Info>

    **2. Set Up Omni-Channel**

    Configure Omni-Channel to enable intelligent routing of live chat sessions to available agents:

    1. In **Setup**, search for "Omni-Channel" in the Quick Find box
    2. Follow the Omni-Channel setup wizard to configure:
       * **Service Presence**: Set up agent presence statuses (Available, Busy, Offline)
       * **Routing Configurations**: Define how chats are routed to agents
       * **Service Channels**: Configure the chat channel for Omni-Channel routing
       * **Agent Workload**: Set the maximum number of simultaneous chats per agent

    <Info>
      For detailed Omni-Channel setup instructions, refer to the [Salesforce Omni-Channel preparation guide](https://help.salesforce.com/s/articleView?id=service.miaw_prepare_org_1.htm\&type=5).
    </Info>

    **3. Configure Enhanced Chat User Verification**

    Set up JSON Web Token (JWT) verification to securely authenticate users connecting through Chatbase:

    1. In **Setup**, search for "Enhanced Chat User Verification" in the Quick Find box
    2. Navigate to **JSON Web Keysets**
    3. Click **New** to create a new keyset
    4. Choose **Endpoint** as the type of the keyset
    5. Enter the following URL in the **Endpoint URL** field:
       ```
       https://chatbase.co/api/integrations/salesforce/keys?chatbotId=<YOUR_CHATBOT_ID>
       ```
       Replace `<YOUR_CHATBOT_ID>` with your actual Chatbase chatbot ID (found in your Chatbase dashboard)
    6. Click **Save** to store the keyset configuration

    <Tip>
      Your Chatbot ID can be found in the Chatbase dashboard URL or in the agent settings. This keyset allows Salesforce to verify JWT tokens issued by Chatbase for secure user authentication.
    </Tip>

    **4. Create a Messaging Channel**

    1. Return to the **Messaging Settings** page from step 1
    2. Click **New Channel** to create a new messaging channel
    3. Select **Enhanced Chat** as the channel type
    4. Choose **Mobile** as the deployment type
    5. Configure the routing settings based on your Omni-Channel setup from step 2
    6. Click **Save** to create the channel
    7. Select the **Add User Verification** checkbox
    8. Click **Save** again
    9. Return to the **Messaging Settings** page and open the newly created channel
    10. Scroll down to find the **User Verification Configuration** section
    11. Click **New**, select the keyset created in step 3, and enter a **Configuration Name**
    12. Ensure **Active** is selected and click **Save**

    <Warning>
      Ensure authentication is enabled on the messaging channel to maintain secure communication between Chatbase and Salesforce. Without authentication, the action will not work.
    </Warning>

    **5. Create Embedded Service Deployment**

    Create a deployment for Enhanced Chat with Custom Client configuration:

    1. In **Setup**, search for "Embedded Service Deployments" in the Quick Find box
    2. Click **New Deployment**
    3. Select **Enhanced Chat** as the service type
    4. Choose **Custom Client** as the deployment type
    5. Configure the deployment settings:
       * **Name**: Enter "Chatbase"
       * **API Name**: Enter "Chatbase"
       * **Messaging Channel**: Select the messaging channel created in step 4
    6. Click **Save** to create the deployment
    7. Click **Publish** and ensure the deployment status is set to **Active**
    8. Click **Install Code Snippet** and save the **OrganizationId**, **DeveloperName**, and **Url** fields, as you will need them later

    <Info>
      For detailed instructions on creating a Custom Client deployment, refer to the [Salesforce Enhanced Chat Custom Client deployment guide](https://help.salesforce.com/s/articleView?id=service.miaw_deployment_custom.htm\&type=5).
    </Info>

    <Check>
      After completing all steps, verify that messaging is enabled, the messaging channel is active, Omni-Channel is configured, and the deployment is ready for use. You can test the setup by initiating a test chat session.
    </Check>
  </Step>

  <Step title="Create the Action">
    Navigate to **Actions** → **Create Action** and select **Salesforce Live Chat**.
  </Step>

  <Step title="Configure Action Details">
    **When to use:** Provide detailed instructions for when the AI should use this action. For example:

    * Use this action when you cannot solve the user's problem and they need immediate assistance
    * Use this action when the user explicitly requests to speak with a human agent
    * Use this action for urgent issues that require real-time support
    * Use this action when the user expresses frustration or indicates the issue is time-sensitive
    * Do not use this action for non-urgent issues that can be handled through a support ticket

    **Salesforce Live Chat API URL:** Enter the value from the **Url** field saved in step 1, section 5 (Create Embedded Service Deployment).

    **Developer Name:** Enter the value from the **DeveloperName** field saved in step 1, section 5 (Create Embedded Service Deployment).

    **Org ID:** Enter the value from the **OrganizationId** field saved in step 1, section 5 (Create Embedded Service Deployment).
  </Step>

  <Step title="Save and Test">
    Save the configuration and test with a sample customer request in the embedded widget.

    <Check>
      Verify that live chat connections are properly established and routed to available support agents in Salesforce.
    </Check>
  </Step>
</Steps>

## Best Practices

<CardGroup cols={2}>
  <Card title="Clear Escalation Criteria" icon="arrow-up">
    Define clear criteria in the "When to use" field to help the AI agent determine when to create a ticket versus connecting to live chat. This ensures users receive the appropriate level of support.
  </Card>

  <Card title="Comprehensive Case Information" icon="file-text">
    Configure case creation to include relevant conversation context, user information, and issue details to help support agents resolve issues efficiently.
  </Card>

  <Card title="Testing Coverage" icon="flask">
    Thoroughly test all actions with various user scenarios, edge cases, and error conditions before going live. Test both urgent and non-urgent escalation paths.
  </Card>
</CardGroup>
