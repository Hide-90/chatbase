> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Response Quality

> On this page, discover tips to improve your response quality. Learn how to refine prompts, optimize AI agent settings, and analyze behavior to deliver clearer, more effective, and engaging interactions.

## Refine the AI agent's Instructions

The instructions shapes your AI agent's behavior and responses. To ensure your bot only answers questions about the given document, specify this in the instructions. For instance, you can state, "You will only provide answers based on the information in \[document name]." The default is the following:

I want you to act as a support agent. Your name is "AI Assistant". You will provide me with answers from the given info. If the answer is not included, say exactly "Hmm, I am not sure." and stop after that. Refuse to answer any question not about the info. Never break character.

You can find more information about the instructions in the previous article, \[AI agent Settings]\([https://www.chatbase.co/guide/AI](https://www.chatbase.co/guide/AI) agent-settings)

## Ensure Readability of Uploaded Data Sources

The quality of your AI agent's responses largely depends on the quality of the data sources you provide. Chatbase uses readable text to generate responses, so ensure that the websites or PDFs you upload contain readable text. Note that Chatbase can't process images, videos, or non-textual elements in documents. Some websites are not scraper friendly, so if you see your AI agent is unable to answer questions on your website, this might be the case. You can work-around this by copy and pasting information as text into the data sources, or uploading it as a PDF instead.

## Utilize the "Revise" Feature and Q\&A Data Type

The "revise" feature is accessible from the dashboard in your conversation history. It is a tool for tweaking responses.

<Frame>
  <img height="1080" width="1920" alt="[object Object]" src="https://www.chatbase.co/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fi6kpkyc7%2Fprod-dataset%2F06ebe2568a4065eb18ad9bc261fdcb06a3f7127b-1590x534.webp&w=3840&q=75&dpl=dpl_GXfa6D8Kjn4Aa4uEdVi6Kg5JjumG" />
</Frame>

If you're not satisfied with how your AI agent answered a particular query, you can use this feature to alter the response to fix it for the future. Additionally, using the Q\&A data type can help your AI agent generate better answers by referring to pre-set questions and answers. The responses you revise will appear in the Q\&A tab under "**Manage**"

## Leverage the Power of GPT-5

If you want your AI agent to generate more nuanced and sophisticated responses, consider using the GPT-5 model. It is the most sophisticated GPT model available, producing more accurate and contextually aware responses. You can change what language model you use.

<Frame>
  <img height="1080" width="1920" alt="[object Object]" src="https://www.chatbase.co/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fi6kpkyc7%2Fprod-dataset%2F62adf4a64d125990bc3d3e4b98532a79c825ec78-1459x541.png&w=3840&q=75&dpl=dpl_GXfa6D8Kjn4Aa4uEdVi6Kg5JjumG" />
</Frame>

## Create a Document Mapping Website URLs to Page Names

If you notice your bot produces fake URLs that lead to 404 errors, try to make a PDF document that maps all of the correct URLs with the page names. This can be very helpful if your AI agent operates on a website with multiple pages. Having a document that maps URLs to page names can help your AI agent better understand user queries related to different pages. Here is an example of a mapping inputted as text in the data sources:

<Frame>
  <img src="https://mintcdn.com/chatbase/r9kYsFS98mz2uo63/user-guides/quick-start/images/response-quality/Suggested%20links.png?fit=max&auto=format&n=r9kYsFS98mz2uo63&q=85&s=353262cd59fff86129660e8007028b60" alt="Suggested links" width="1241" height="983" data-path="user-guides/quick-start/images/response-quality/Suggested links.png" />
</Frame>

Additionally, you can add these links in Q\&A format, and follow the suggestions previously mentioned.

## Next Steps

By implementing these strategies, you can significantly enhance your Chatbase AI agent's ability to provide useful responses, leading to more successful interactions.
