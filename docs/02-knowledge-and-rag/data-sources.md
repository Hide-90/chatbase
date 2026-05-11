> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Data sources

The Data sources tab in the Chatbase dashboard is where you manage all the content that powers your AI agent. It allows you to upload documents, add structured text snippets, crawl websites or sitemaps, create custom Q\&As, integrate with Notion, and import support tickets (requires Salesforce or Zendesk integration via OAuth). These options give you full control over the information your agent is trained on, helping ensure accurate, relevant, and up-to-date responses for your users.

<Tip>
  **Standard** and **Pro** plans include [Auto Retrain](#auto-retrain), which automatically updates your agent's knowledge base every 24 hours.
</Tip>

## Files

The Files tab within the Data sources section of Chatbase allows you to upload and manage various document types to train your AI agent.

### Supported File Types

Chatbase supports the following file formats:

* .pdf (PDF Documents)
* .txt (Plain Text Files)
* .doc / .docx (Microsoft Word Documents)

### Uploading Files

1. Click the Upload Files button.
2. Select one or multiple documents from your device.
3. The files will enter a queue and be uploaded one by one.
   Each file remains in the queue until it has been successfully processed. You can monitor the status of each upload in real time.

<Frame>
  <img src="https://mintcdn.com/chatbase/Zkg12EbnhYTJTGwv/user-guides/chatbot/images/sources/sources-files-1.png?fit=max&auto=format&n=Zkg12EbnhYTJTGwv&q=85&s=788400aca687a2aca3bd6ceeaa6eb1ac" alt="Uploading Files" width="3234" height="2190" data-path="user-guides/chatbot/images/sources/sources-files-1.png" />
</Frame>

### Preview and Metadata

After upload:

* Click on any document to preview its contents directly within the dashboard.
* You can view timestamps indicating exactly when each file was added and last updated.
  This allows you to easily track and verify your training sources over time.

  <Frame>
    <img src="https://mintcdn.com/chatbase/Zkg12EbnhYTJTGwv/user-guides/chatbot/images/sources/sources-files-2.png?fit=max&auto=format&n=Zkg12EbnhYTJTGwv&q=85&s=9f017286af7ad50c69c1f3d912c8c72d" alt="Preview Files" width="3234" height="2190" data-path="user-guides/chatbot/images/sources/sources-files-2.png" />
  </Frame>

### File Deletion

* Delete files individually by pressing on the three dots then clicking ‘delete’.
* To delete all files at once, first select the checkbox next to ‘File sources’ to select all documents. Once selected, a Delete button will appear—click this to remove all selected files in one action.

<Frame>
  <img src="https://mintcdn.com/chatbase/Zkg12EbnhYTJTGwv/user-guides/chatbot/images/sources/sources-files-3.gif?s=dd71e1f80ac336b324f58be02f1f11f1" alt="Deleting Files" width="800" height="542" data-path="user-guides/chatbot/images/sources/sources-files-3.gif" />
</Frame>

## Text Snippets

The Data sources tab also allows you to add and manage text snippets, providing a flexible way to organize custom content for your AI agent's training. This feature is ideal for maintaining smaller, structured pieces of information separate from document uploads.

### Adding Text Snippets

You can create and store multiple text snippets, each with a unique title to help you easily identify the content at a glance. This is particularly useful for segmenting information by topic, department, or use case.

Text Editing Features
Each snippet can be fully customized using rich text formatting:

* Add headings for clarity
* Format with bold, italic, or strikethrough
* Create ordered or bullet lists
* Insert hyperlinks to external sources
* Include emojis to enhance tone and readability

You can also expand the text input area for better visibility and ease of editing long-form content.

<Frame>
  <img src="https://mintcdn.com/chatbase/Zkg12EbnhYTJTGwv/user-guides/chatbot/images/sources/sources-text-1.png?fit=max&auto=format&n=Zkg12EbnhYTJTGwv&q=85&s=3f10c47610b69afe97efc529caea79c5" alt="Edit Text" width="3234" height="2190" data-path="user-guides/chatbot/images/sources/sources-text-1.png" />
</Frame>

### Preview and Metadata

After creating a snippet:

* Click on it to preview or edit the content at any time.
* View precise timestamps showing when the snippet was added and last updated.

### Snippet Deletion

* Delete snippets individually by pressing on the three dots then clicking ‘delete’.
* To delete all snippets at once, first select the checkbox next to 'Text snippets' list to select all snippets. Once selected, a Delete button will appear—click this to remove all selected snippets in one action.

## Website Crawling

The Website Crawling feature in the Data sources tab enables you to train your AI agent using content directly from websites. Whether you're working with a full site, a sitemap, or individual URLs, this tool gives you flexible control over what gets included in your agent's knowledge base.

<Info>
  If you're using Shopify, it’s recommended to add your sitemap (/sitemap.xml) instead of crawling the entire website. This reduces total MB usage and avoids duplicate product and collection pages, since Shopify’s sitemap already provides a clean, structured source of your content.
</Info>

### Crawling Options

You have three ways to fetch content from the web:

1. Crawl a full website – Provide the homepage URL and let Chatbase discover all public pages.
2. Submit a sitemap – Point to an XML sitemap to fetch a structured list of URLs.
3. Add individual links – Manually input specific URLs you want to include.

For website crawling and sitemap submission, you can refine your crawl using:

* Include Paths – Only URLs matching these paths will be fetched.
* Exclude Paths – URLs matching these paths will be skipped.

You can specify multiple paths in both fields, make sure to press the space bar after each one.

Multiple websites or links can be crawled in parallel for efficiency.

<Frame>
  <img src="https://mintcdn.com/chatbase/Zkg12EbnhYTJTGwv/user-guides/chatbot/images/sources/sources-website-1.png?fit=max&auto=format&n=Zkg12EbnhYTJTGwv&q=85&s=197dc9b5d25a5cdc729057bc5c7a93e3" alt="Crawl Website" width="3234" height="2190" data-path="user-guides/chatbot/images/sources/sources-website-1.png" />
</Frame>

### Grouping and Link Management

Once crawling is complete:

* All links from a single domain are grouped under the homepage URL for easy management.
* Click on a homepage group to view all fetched links.
* You can preview the content of each link by clicking on it.

### Editing and Excluding Links

After crawling:

* You can edit the URL of any fetched link.
* You can also exclude specific links from a group if you don't want them used in training.

- You can edit include/exclude paths anytime, recrawl the website, and update your AI agent accordingly.

<img src="https://mintcdn.com/chatbase/Zkg12EbnhYTJTGwv/user-guides/chatbot/images/sources/sources-website-2.png?fit=max&auto=format&n=Zkg12EbnhYTJTGwv&q=85&s=29809e9c04c6f98ce070629e259dfaae" alt="Edit Website" width="1738" height="1416" data-path="user-guides/chatbot/images/sources/sources-website-2.png" />

### Link and Group Deletion

You have full control over link cleanup:

* Delete individual links from a group by excluding it.
* Deleting an entire group of links (i.e., all pages fetched from a domain).
* Deleting all the groups at once by selecting the checkbox next to 'Link sources'.

## Custom Q\&A Training

The Q\&A feature in Chatbase lets you train your AI agent with custom question-and-answer pairs, enabling it to respond precisely to frequently asked or business-specific queries.

### Creating Q\&As

* Each Q\&A entry begins with a title, this helps you quickly locate and organize questions.
* You can associate multiple variations of a question with a single answer, improving recognition and response accuracy.
* You can bulk upload Q\&As up to 100 rows per file in .xlsx format, with a maximum file size of 1MB.

### Editing Answers

Answers are fully customizable with rich text formatting tools. You can:

* Add headings for clarity
* Format with bold, italic, or strikethrough
* Create ordered or bullet lists
* Insert hyperlinks to external sources
* Include emojis to enhance tone and readability

  <Frame>
    <img src="https://mintcdn.com/chatbase/8h_zMy-5a1WSIXT6/user-guides/chatbot/images/sources/sources-qna-1.png?fit=max&auto=format&n=8h_zMy-5a1WSIXT6&q=85&s=1ba95d63147f03218aa233a7316ca06e" alt="Adding Q&A" width="2940" height="1346" data-path="user-guides/chatbot/images/sources/sources-qna-1.png" />
  </Frame>

### Usage Insights

Click on any Q\&A to open its detail view, where you'll find real-time usage metrics:

* number of times the question has been asked by users (updated instantly)
* Last time the question was asked
* Date the Q\&A was added
* A visual chart showing the frequency of the question over time

These insights help you identify which topics matter most to your users and prioritize updates accordingly.

<img src="https://mintcdn.com/chatbase/Zkg12EbnhYTJTGwv/user-guides/chatbot/images/sources/sources-qna-2.png?fit=max&auto=format&n=Zkg12EbnhYTJTGwv&q=85&s=c304a20479593076cf3b99f54d909640" alt="Adding Q&A" width="2880" height="1453" data-path="user-guides/chatbot/images/sources/sources-qna-2.png" />

### Management & Deletion

* Delete any Q\&A individually.
* To delete all at once, check the box next to "Q\&A sources" and click the delete button that appears.

## Notion

This integration enables your AI agent to access and utilize information stored in your Notion databases.

## Auto Retrain

Auto Retrain automatically keeps your AI agent up-to-date by pulling the latest content from your data sources every 24 hours. This ensures your agent always has access to the most current information without requiring manual intervention.

<Info>
  Auto Retrain is available on **Standard** and **Pro** plans only. Hobby plan users will need to manually retrain their agent after updating sources.
</Info>

### Supported data sources

Auto Retrain works with the following source types:

* **Website** - Discovers newly added links and updates existing page content
* **Notion** - Syncs changes from your connected Notion workspace
* **Remote storage** - Google Drive, Dropbox, and other remote sources (when available)

### How It Works

* Your agent automatically fetches new content from all connected data sources once every 24 hours
* Newly added pages or links on your website are automatically discovered and included
* No manual action is required—updates happen in the background

## Tickets

The Tickets feature in the Data sources tab enables you to train your AI agent using support tickets from integrated platforms. This requires an active Salesforce or Zendesk integration to be set up first. If no integrations are configured, you'll be prompted to set one up via OAuth.

### Integration Selection

You can import tickets from Salesforce or Zendesk. Select the platform to train on tickets from—you can switch between integrations as needed,
but training occurs from only one at a time.

* **Import from Salesforce**: Requires Salesforce integration. Link to [/user-guides/integrations/salesforce](/user-guides/integrations/salesforce) for OAuth setup details.
* **Import from Zendesk**: Requires Zendesk integration. Link to [/user-guides/integrations/zendesk](/user-guides/integrations/zendesk) for OAuth setup details.

After selecting the integration, click "Save" to confirm. Multiple integrations cannot be active for training simultaneously. Switch integrations by updating your selection and re-importing tickets.

<Frame>
  <img src="https://mintcdn.com/chatbase/MHOCfGqrKPqrNICZ/user-guides/chatbot/images/sources/sources-tickets-1.png?fit=max&auto=format&n=MHOCfGqrKPqrNICZ&q=85&s=b0f6923a27a642f4df0a153cf69dc919" alt="Integration Prompt for Zendesk/Salesforce" width="2940" height="1912" data-path="user-guides/chatbot/images/sources/sources-tickets-1.png" />
</Frame>

### Importing Tickets

1. Ensure the desired integration is selected.
2. Ensure training on tickets is enabled.
3. Click the save button.
4. Click Retrain Chatbot.

Now the next training will fetch your tickets from the selected integration and train on them.

<Frame>
  <img src="https://mintcdn.com/chatbase/MHOCfGqrKPqrNICZ/user-guides/chatbot/images/sources/sources-tickets-2.png?fit=max&auto=format&n=MHOCfGqrKPqrNICZ&q=85&s=e165b79c7ce3e504e568dbb1298e05a3" alt="Select Integration Options" width="2940" height="1912" data-path="user-guides/chatbot/images/sources/sources-tickets-2.png" />
</Frame>

### Limitations

Currently, tickets cannot be filtered (e.g., by status or date), and ticket sources cannot be previewed, edited, or deleted individually.
All eligible tickets from the active integration are imported.

Ensure your integration has the necessary permissions to access ticket data. Press the "Retrain agent" button after enabling or disabling training on tickets.

## General Notes

* When uploading files, make sure they contain selectable text.
* All data should be in plain text, using mark-down language is preferred.
* When integrating with a Notion account that's on a paid plan, make sure you have admin access to provide all necessary permissions for the integration to be successful.
* Make sure to press on the "Retrain agent" button after you're done adding/deleting/updating your sources.
