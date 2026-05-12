> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Zapier

## Step 1: Sign Into Your Chatbase Account and Set Up Your Chatbot

1\. Sign up for a free Chatbase account.

2\. Log in and go to the bot creation page.

3\. Upload training data like text, documents, websites or Q\&A pairs.

4\. Train and test your bot until its responses meet your requirements.

Not familiar with creating a Chatbase agent? Here is a [<u>step-by-step guide to building a agent with Chatbase</u>](/user-guides/quick-start/your-first-agent).

You can automate a lot of things with Chatbase and Zapier, it all boils down to what you want to achieve and your creativity. Here are some of the things you can do when you integrate your Chatbase bot with Zapier:

**1. Draft responses to customer emails**

* Send new customer emails from your inbox to Chatbase.

* Using your company's documentation, Chatbase can draft a relevant response.

* Automatically save the AI-generated response as a draft in your email client or send it directly.

**2. Categorize and prioritize incoming support emails**

* Connect Chatbase with your email client (e.g., Gmail, Outlook).

* Chatbase can analyze the tone and content of incoming emails.

* Categorize emails as urgent, non-urgent, or by specific topics.

* Add notes or tasks to your project management tool or spreadsheet for follow-up.

**3. Add AI-generated instructions or solutions to support tickets**

* Integrate Chatbase with tools like Jira, Intercom, or Zendesk

* When a new support ticket is created, send the details to Chatbase

* Chatbase can analyze the issue using your documentation and suggest initial solutions or step-by-step instructions

* Automatically add the AI-generated response or context to the support ticket

**4. Analyze customer feedback forms**

* Integrate Chatbase with form tools like Typeform or Google Forms

* Chatbase can analyze the feedback for intent, tone, and sentiment

* Generate summaries or insights from the feedback

* Send the analysis to your support workspace via email, Slack, or a spreadsheet

There's so much you can achieve with a combination of the two apps. For this guide, we'll work you through how to set up Chatbase to collect leads and add the leads to a Google Docs file using Zapier.

## Step 2: Set Up Chatbase to Collect Leads

1\. Sign in to your Chatbase account and head to your account dashboard.

2\. Click on the agent you want to set up lead collection for .

<Frame>
  <img src="https://mintcdn.com/chatbase/JnjROJ-aB2q57UGe/user-guides/integrations/images/zapier/zapier-1.jpg?fit=max&auto=format&n=JnjROJ-aB2q57UGe&q=85&s=6e600218e1e65029c54381144b3e792c" alt="image" width="1816" height="758" data-path="user-guides/integrations/images/zapier/zapier-1.jpg" />
</Frame>

3\. Clicking on the bot should bring up the bot preview page. On the page, click on the **Setting** tab at the top of the page, and then **Leads** on the left sidebar of the page.

<Frame>
  <img src="https://mintcdn.com/chatbase/JnjROJ-aB2q57UGe/user-guides/integrations/images/zapier/zapier-2.jpg?fit=max&auto=format&n=JnjROJ-aB2q57UGe&q=85&s=470530c79800f0999a6bcdce5faae01e" alt="image" width="2358" height="1004" data-path="user-guides/integrations/images/zapier/zapier-2.jpg" />
</Frame>

4\. Toggle on the switch beside each lead form field.

5\. Click **Save** on the bottom right corner of the page to apply the changes.

<Frame>
  <img src="https://mintcdn.com/chatbase/JnjROJ-aB2q57UGe/user-guides/integrations/images/zapier/zapier-3.jpg?fit=max&auto=format&n=JnjROJ-aB2q57UGe&q=85&s=cfbf0c0ae1dbe529aa057b448495985d" alt="image" width="2408" height="1504" data-path="user-guides/integrations/images/zapier/zapier-3.jpg" />
</Frame>

Once lead collection has been set up on the Chatbase end, you can now connect the agent to Zapier.

## **Step 3: Connect Chatbase to Zapier**

This step assumes that you have an active Zapier account. Remember, the idea is to set up set up the Zapier account to receive leads from from Chatbase agent, process it and add it to a Google docs file. To do this:

#### **Step 1: Set Up a Trigger**

1\. Sign in to your Zapier account.

2\. Click on **Create** and then **Zaps** on the top left corner of the Zapier app homepage.

<Frame>
  <img src="https://mintcdn.com/chatbase/JnjROJ-aB2q57UGe/user-guides/integrations/images/zapier/zapier-4.webp?fit=max&auto=format&n=JnjROJ-aB2q57UGe&q=85&s=a1859e7e6805d0a686e450e54ac23fdb" alt="image" width="1897" height="788" data-path="user-guides/integrations/images/zapier/zapier-4.webp" />
</Frame>

3\. On the Zap editor click on **Trigger**.

<Frame>
  <img src="https://mintcdn.com/chatbase/JnjROJ-aB2q57UGe/user-guides/integrations/images/zapier/zapier-5.webp?fit=max&auto=format&n=JnjROJ-aB2q57UGe&q=85&s=58e90b7cda886a5e42c02534843d4c74" alt="image" width="1858" height="674" data-path="user-guides/integrations/images/zapier/zapier-5.webp" />
</Frame>

4\. On the pop-up menu, search for Chatbase on the search bar and click on it.

<Frame>
  <img src="https://mintcdn.com/chatbase/JnjROJ-aB2q57UGe/user-guides/integrations/images/zapier/zapier-6.webp?fit=max&auto=format&n=JnjROJ-aB2q57UGe&q=85&s=fe3c94f96afc755f04b3773849c26a7f" alt="image" width="1452" height="883" data-path="user-guides/integrations/images/zapier/zapier-6.webp" />
</Frame>

5\. Next, on the right side of the page, click on the form field labeled **Event** and select **Form Submission**.

6\. Click on **Continue.**

<Frame>
  <img src="https://mintcdn.com/chatbase/JnjROJ-aB2q57UGe/user-guides/integrations/images/zapier/zapier-7.webp?fit=max&auto=format&n=JnjROJ-aB2q57UGe&q=85&s=b9a5dc1f6d2d4b6137ac958ea5ab7c39" alt="image" width="1917" height="795" data-path="user-guides/integrations/images/zapier/zapier-7.webp" />
</Frame>

7\. To use your Chatbase account on Zapier, you'll need to give Zapier access to your Chatbase account. To do this, click on **Sign in** on the next page after you click **Continue**.

<Frame>
  <img src="https://mintcdn.com/chatbase/JnjROJ-aB2q57UGe/user-guides/integrations/images/zapier/zapier-8.webp?fit=max&auto=format&n=JnjROJ-aB2q57UGe&q=85&s=f07f72517677abcd3ede4061d2bb5edb" alt="image" width="1920" height="688" data-path="user-guides/integrations/images/zapier/zapier-8.webp" />
</Frame>

8\. An authentication page should come up, provide your Chatbase API key (and optionally a display name) and then click **Yes, Continue to Chatbase** to link your Chatbase account.

<Frame>
  <img src="https://mintcdn.com/chatbase/JnjROJ-aB2q57UGe/user-guides/integrations/images/zapier/zapier-9.webp?fit=max&auto=format&n=JnjROJ-aB2q57UGe&q=85&s=c492f8b568b5ca39131066ae091c85b3" alt="image" width="1374" height="753" data-path="user-guides/integrations/images/zapier/zapier-9.webp" />
</Frame>

***Note**: To get your API keys, head to your* [*account dashboard*](https://www.chatbase.co/dashboard/) *and click on the **Settings** tab at the top of the page. Click on **API keys** on the left sidebar and then copy out your API keys if you have one or click on Create API Key to create a new one.*

<Frame>
  <img src="https://mintcdn.com/chatbase/JnjROJ-aB2q57UGe/user-guides/integrations/images/zapier/zapier-10.jpg?fit=max&auto=format&n=JnjROJ-aB2q57UGe&q=85&s=5b32efe7a87c78902e573497422752d4" alt="image" width="2404" height="1242" data-path="user-guides/integrations/images/zapier/zapier-10.jpg" />
</Frame>

9\. Up next, click on **Continue** on the screen that comes up after authenticating your Chatbase account.

10\. On the next screen, you will be asked to provide your agent ID. Paste your agent ID in the provided input field and click **Continue**.

***Note**: To find your agent ID, head over to your* [*dashboard*](https://www.chatbase.co/dashboard/)*, click on any agent you wish to link with your Zapier account and you should find a agent ID on the agent preview page.*

11\. On the next page, click on **Test Trigger.**

<Frame>
  <img src="https://mintcdn.com/chatbase/JnjROJ-aB2q57UGe/user-guides/integrations/images/zapier/zapier-11.webp?fit=max&auto=format&n=JnjROJ-aB2q57UGe&q=85&s=35e5e5a21c8a86de2e725990342ce7ed" alt="image" width="1831" height="791" data-path="user-guides/integrations/images/zapier/zapier-11.webp" />
</Frame>

12\. If all goes well, you should see an option asking you to **Continue with selected records**, click on it.

#### **Step 2: Set up an Action to Automate**

To set up Zapier to send your Chatbase leads to Google Docs:

1\. After clicking on **Continue with selected records**, on the previous step above, a pop up window should come up with a list of apps. Search for Google Docs on the search bar and click on it.

<Frame>
  <img src="https://mintcdn.com/chatbase/JnjROJ-aB2q57UGe/user-guides/integrations/images/zapier/zapier-12.webp?fit=max&auto=format&n=JnjROJ-aB2q57UGe&q=85&s=dbe8b8fa157f032d90e90c88938a4d6d" alt="image" width="1559" height="903" data-path="user-guides/integrations/images/zapier/zapier-12.webp" />
</Frame>

2\. On the next screen, click on the input field labeled **Event**, and select **Append Text to Document** and then click **Continue.**

<Frame>
  <img src="https://mintcdn.com/chatbase/JnjROJ-aB2q57UGe/user-guides/integrations/images/zapier/zapier-13.webp?fit=max&auto=format&n=JnjROJ-aB2q57UGe&q=85&s=f1844a32e6dc7f77ddc78a9809bebc22" alt="image" width="1835" height="797" data-path="user-guides/integrations/images/zapier/zapier-13.webp" />
</Frame>

3\. On the next page, sign into your Google account and click **Continue**.

4\. On the next page, select the document you wish to append the information to, on the filed labeled **Document Name**.

5\. On the field labeled **Text to Append**, select the leads form field you want to add to the document and click **Continue**.

<Frame>
  <img src="https://mintcdn.com/chatbase/JnjROJ-aB2q57UGe/user-guides/integrations/images/zapier/zapier-14.webp?fit=max&auto=format&n=JnjROJ-aB2q57UGe&q=85&s=454bc6249a9d87ec45ec4380ee931b1e" alt="image" width="1848" height="810" data-path="user-guides/integrations/images/zapier/zapier-14.webp" />
</Frame>

6\. On the next page, click to test the setup, and then click **Publish** to go live.

With that, any time any lead is captured by your Chatbase agent on your website, it will automatically be added to your target Google docs file.
