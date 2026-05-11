> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Cal.com

All you need to do to connect your Cal account is to add your Event URL under 'Cal.com Event URL'. You **do not** need an integration for Cal.com.

First of all go to Actions, then Select "Calcom Get Slots"

<Frame>
  <img src="https://mintcdn.com/chatbase/DIWSTyTSabxfVW3B/user-guides/chatbot/images/actions/actions-43.gif?s=2c305640ec99dc28d63b422f254159b5" alt="Chatbase Embed Code Example" width="800" height="460" data-path="user-guides/chatbot/images/actions/actions-43.gif" />
</Frame>

**When to use**

This is where you specify when exactly this action should be triggered or what type of customer queries would trigger it.

You also need to give your Action (make sure it's descriptive as this helps the AI understand when to use it).

Finally add your Cal Event URL into the correct field. This tells which Event to making bookings into.

<Frame>
  <img src="https://mintcdn.com/chatbase/DIWSTyTSabxfVW3B/user-guides/chatbot/images/actions/actions-46.png?fit=max&auto=format&n=DIWSTyTSabxfVW3B&q=85&s=9de305d3ae8a35b51e08f69990aa72d2" alt="Chatbase Embed Code Example" width="2930" height="1846" data-path="user-guides/chatbot/images/actions/actions-46.png" />
</Frame>

### Examples: 

"Call this action when the user mentions that he/she wants to book an appointment."

"Check if the user booked an appointment or not from the tool result." 

<Frame>
  <img src="https://mintcdn.com/chatbase/DIWSTyTSabxfVW3B/user-guides/chatbot/images/actions/actions-47.gif?s=a20f577135e6ec0f83396f0deab9de9d" alt="Chatbase Embed Code Example" width="800" height="504" data-path="user-guides/chatbot/images/actions/actions-47.gif" />
</Frame>
