> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Getting Started

> Learn how to get started with the Contacts API

### Prerequisites

* An active Chatbase subscription
* End user data ready for upload
* Access to implement end user identification on your website

<Frame>
  <img src="https://mintcdn.com/chatbase/fuaTVXjARv0sH-Me/user-guides/chatbot/images/contacts/contacts-1.png?fit=max&auto=format&n=fuaTVXjARv0sH-Me&q=85&s=772016294f92ee8748a46d066a3d6bf1" alt="Chatbase Embed Code Example" width="2640" height="1560" data-path="user-guides/chatbot/images/contacts/contacts-1.png" />
</Frame>

<Steps>
  <Step title="Upload End User Data">
    Use the [Contacts API](/developer-guides/api/contacts/add-contacts-to-chatbase) endpoint to upload your end user data,
    and assign an `external_id` to each contact. This `external_id` should be used
    to identify the end user in future conversations.

    <Note>
      This `external_id` should match the `user_id`
      you use in your end user identification step. Also,
      the data associated with the `external_id` will not
      be used if the user\_hash verification fails. So you don't
      need to worry about data privacy.
    </Note>
  </Step>

  <Step title="Create Custom Actions">
    Create custom actions from the dashboard that utilize contact data by referencing fields under the `contact.` key:
  </Step>

  <Step title="Implement End User Identification">
    Add the identification script to your website and use one of our end user identification methods.

    For end user verification implementation details, see our [Identity Verification Guide](/developer-guides/identity-verification).
  </Step>
</Steps>

## Security Considerations

* End user data is only accessible through custom actions that explicitly reference contact fields
* End user verification is required to access contact data

## Best Practices

1. **Data Minimization:** Only upload necessary end user data that will be used in AI Agent interactions

2. **Regular Updates:** Keep contact data current by updating it when end user information changes

3. **Error Handling:** Implement proper error handling for cases where contact data might be unavailable

4. **Testing:** Thoroughly test custom actions that use contact data before deploying to production

## Implementation Details

For more details on the Contacts API, see the [Contacts API](/api-reference/contacts/create-contacts-for-a-chatbot) guide.
