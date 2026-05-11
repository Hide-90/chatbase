> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Webflow

## Step 1: Sign Into Your Chatbase Account and Set Up Your Chatbot

1. Sign up for a free Chatbase account if you don't already have one.

2. Log into your Chatbase account and navigate to the bot creation page.

3. Provide training data for your new bot by uploading sources like text snippets, documents, website content, or Q\&A pairs.

4. Train and test your bot in Chatbase until it responds accurately to queries.

<Info>
  New to Chatbase? Check out [Your First Agent](/user-guides/quick-start/your-first-agent) to get started with the embed script first.
</Info>

## Step 2: Copy Your AI Agent Embed Code

Once you've set up and tested your Chatbase bot, you'll need the embed code to display the bot widget on your website. To do this:

1\. Go to the [dashboard](https://www.chatbase.co/dashboard/) of your Chatbase account.

2\. You should see a list of agents, click the agent you wish to integrate into your Webflow website. You should be taken to the agent's preview page.

<Frame>
  <img src="https://mintlify.s3.us-west-1.amazonaws.com/chatbase/user-guides/integrations/images/Integrations/dasbhoard-step.png" alt="Dashboard" />
</Frame>

3\. On the agent preview page, click on the **Deploy** tab.

<Frame>
  <img src="https://mintlify.s3.us-west-1.amazonaws.com/chatbase/user-guides/integrations/images/Integrations/deploy-step.png" alt="Deploy" />
</Frame>

4\. A new page should come up. Click on **Manage** for the Chat Widget.

<Frame>
  <img src="https://mintlify.s3.us-west-1.amazonaws.com/chatbase/user-guides/integrations/images/Integrations/chatwidget-manage.png" alt="Chat Widget [Manage]" />
</Frame>

5\. Click on **Embed** and select the **Iframe** embed type. Scroll down and Click **Copy** to copy the provided HTML code.

<Frame>
  <img src="https://mintlify.s3.us-west-1.amazonaws.com/chatbase/user-guides/integrations/images/Integrations/Embed-iframe.png" alt="Copy Iframe" />
</Frame>

## Step 3: Set Up a Container to Display Your Chatbot Widget 

Before adding the embed code to your Webflow site, you will need to create a container to display the widget. This will ensure that the widget is displayed in the correct place on your website and doesn't extend the entire width of the page.

1\. To create a container, on Webflow, log into your Webflow account and go to your dashboard.

2\. On your Webflow dashboard, you'll find a list of all your website projects, hover on the website you want to add the agent to and click on **Open Designer**.

<Frame>
  <img src="https://mintcdn.com/chatbase/kU-6NVMb2BBkym9H/user-guides/integrations/images/webflow/webflow-4.png?fit=max&auto=format&n=kU-6NVMb2BBkym9H&q=85&s=cd6378ed137ad41c072812736e9a0e82" alt="image" width="1895" height="787" data-path="user-guides/integrations/images/webflow/webflow-4.png" />
</Frame>

3\. On the designer page, click on the file icon (**Pages**) on the top left corner of the webflow site designer and select the page you want to embed the agent.

<Frame>
  <img src="https://mintcdn.com/chatbase/kU-6NVMb2BBkym9H/user-guides/integrations/images/webflow/webflow-5.png?fit=max&auto=format&n=kU-6NVMb2BBkym9H&q=85&s=2bcbb416bad4a995b5595fac62753347" alt="image" width="1916" height="870" data-path="user-guides/integrations/images/webflow/webflow-5.png" />
</Frame>

4\. Once you've selected the page, click the Plus button (**Add elements**) on the top left corner of the designer screen, and a list of available elements should come up.

5\. Drag the **Section** element to the portion of the page you want to embed your agent.

6\. Drag a **Container** element unto the **Section.**

7\. Drag a **Div** element unto the Container element and set the size of the Div element to ensure that the bot will be contained within the Div and does not span the entire width of the page.

<Frame>
  <img src="https://mintcdn.com/chatbase/kU-6NVMb2BBkym9H/user-guides/integrations/images/webflow/webflow-6.png?fit=max&auto=format&n=kU-6NVMb2BBkym9H&q=85&s=82b2a65aca954e3040343cf01da17de3" alt="image" width="1556" height="850" data-path="user-guides/integrations/images/webflow/webflow-6.png" />
</Frame>

8\. Now, scroll down down the list of elements and drag the **Embed** element unto the Div you added on the Webflow canvas.

<Frame>
  <img src="https://mintcdn.com/chatbase/kU-6NVMb2BBkym9H/user-guides/integrations/images/webflow/webflow-7.png?fit=max&auto=format&n=kU-6NVMb2BBkym9H&q=85&s=3239e49fdeb4063522786801ac3bc4e7" alt="image" width="1547" height="887" data-path="user-guides/integrations/images/webflow/webflow-7.png" />
</Frame>

9\. Select and double-click the Embed element to reveal the HTML Embed code editor.

10\. Paste the Chatbase agent embed code from Step 2 above and click **Save & Close**.

<Frame>
  <img src="https://mintcdn.com/chatbase/kU-6NVMb2BBkym9H/user-guides/integrations/images/webflow/webflow-8.png?fit=max&auto=format&n=kU-6NVMb2BBkym9H&q=85&s=ea961278dcc7156a6a4515b970e1e3ae" alt="image" width="1593" height="888" data-path="user-guides/integrations/images/webflow/webflow-8.png" />
</Frame>

If all goes well, you should see a preview of the agent on the live preview of your Webflow website right inside the designer.

<Frame>
  <img src="https://mintcdn.com/chatbase/kU-6NVMb2BBkym9H/user-guides/integrations/images/webflow/webflow-9.png?fit=max&auto=format&n=kU-6NVMb2BBkym9H&q=85&s=2ef514e68cf1b721cd392ee18fd63b81" alt="image" width="684" height="685" data-path="user-guides/integrations/images/webflow/webflow-9.png" />
</Frame>

After completing these steps, your agent should be ready to serve your website visitors!

If you are having difficulties with managing the dimension of your Embed and agent element, it is a common problem. Webflow components take a bit of getting used to. You can follow this [official Webflow documentation on the Embed element](https://university.webflow.com/lesson/custom-code-embed?topics=elements) to learn more about embedding a third-party tool like Chatbase agent on a Webflow website.

> **Note:** You can customize the appearance and colors of your bot on your Chatbase dashboard. To do this, go to your **dashboard**, choose a bot, click the **Settings** tab on the top of the page, and then click **Chat Interface** on the left sidebar to reveal the agent customization options.
