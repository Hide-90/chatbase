> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Streaming

> How to use Server-Sent Events (SSE) streaming with the Chatbase API v2 for real-time responses.

## Enabling Streaming

To receive a streaming response, set `stream: true` in the request body of the chat or retry endpoints:

```bash theme={null}
curl -X POST 'https://www.chatbase.co/api/v2/agents/YOUR_AGENT_ID/chat' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "message": "Explain quantum computing",
    "stream": true,
    "conversationId": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
    "userId": "user_abc123"
  }'
```

## Request Body

<ParamField body="message" type="string">
  The user message to send to the agent. Omit to continue the conversation after submitting a client action result.
</ParamField>

<ParamField body="stream" type="boolean" default={true}>
  Stream the response as SSE. Defaults to `true`.
</ParamField>

<ParamField body="conversationId" type="string">
  Continue an existing conversation. Omit to create a new one.
</ParamField>

<ParamField body="userId" type="string">
  Associate a user with a new conversation. Max 128 chars, `[a-zA-Z0-9._-]` only. Ignored when `conversationId` is provided.
</ParamField>

<Note>
  Once set, a conversation's `userId` is immutable — it cannot be changed or removed. See [User Conversations](/api-v2/user-conversations) for details on managing per-user conversation history.
</Note>

The response uses `Content-Type: text/event-stream` and follows the **AI SDK UIMessage Stream** protocol. Events are newline-delimited JSON, where each line is a JSON object with a `type` field.

## Event Types

<Tabs>
  <Tab title="Text Events" icon="font">
    ### `message-start`

    Emitted once at the beginning of a new message. Contains the message ID.

    ```json theme={null}
    { "type": "message-start", "messageId": "msg_abc123" }
    ```

    ### `text-start`

    Emitted at the beginning of a text block.

    ```json theme={null}
    { "type": "text-start", "id": "text_001" }
    ```

    ### `text-delta`

    Emitted for each chunk of generated text. Concatenate all deltas to build the full response.

    ```json theme={null}
    { "type": "text-delta", "id": "text_001", "delta": "Quantum computing is" }
    ```

    ### `text-end`

    Emitted when a text block is complete.

    ```json theme={null}
    { "type": "text-end", "id": "text_001" }
    ```
  </Tab>

  <Tab title="Client Action Events" icon="bolt">
    These events are emitted when the agent invokes a [client action](/api-v2/client-actions). The `toolName` corresponds to the name of the configured action.

    ### `tool-input-start`

    Emitted at the start of a client action input.

    ```json theme={null}
    { "type": "tool-input-start", "toolCallId": "call_abc123", "toolName": "lookupOrder" }
    ```

    ### `tool-input-delta`

    Emitted for each chunk of the action input as it streams.

    ```json theme={null}
    { "type": "tool-input-delta", "toolCallId": "call_abc123", "inputTextDelta": "{\"order" }
    ```

    ### `tool-input-available`

    Emitted when the complete action input is ready.

    <Tip>You can read the full `input` object directly from this event without concatenating the preceding deltas.</Tip>

    ```json theme={null}
    { "type": "tool-input-available", "toolCallId": "call_abc123", "toolName": "lookupOrder", "input": { "orderId": "ORD-123" } }
    ```

    ### `tool-output-available`

    Emitted when a tool execution result is available.

    <Tip>The full `output` can be read directly from this event.</Tip>

    ```json theme={null}
    { "type": "tool-output-available", "toolCallId": "call_abc123", "output": { "status": "shipped", "eta": "2026-04-03" } }
    ```

    <Info>
      For the full client action flow — including how to submit results and continue the conversation — see [Client Actions](/api-v2/client-actions).
    </Info>
  </Tab>

  <Tab title="Step & Completion Events" icon="flag-checkered">
    ### `start-step`

    Emitted at the start of a processing step.

    ```json theme={null}
    { "type": "start-step" }
    ```

    ### `finish-step`

    Emitted at the end of a processing step.

    ```json theme={null}
    { "type": "finish-step" }
    ```

    ### `finish`

    Emitted once when generation is complete.

    ```json theme={null}
    { "type": "finish" }
    ```

    ### `error`

    Emitted if an error occurs during generation. The stream may have been partially delivered.

    ```json theme={null}
    { "type": "error", "errorText": "An error occurred during generation" }
    ```
  </Tab>
</Tabs>

## Metadata

The `finish` event is accompanied by a `message-metadata` event containing Chatbase-specific metadata:

```json theme={null}
{
  "type": "message-metadata",
  "messageId": "msg_abc123",
  "userMessageId": "msg_xyz789",
  "conversationId": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
  "userId": "user_abc123",
  "finishReason": "stop",
  "usage": { "credits": 2 }
}
```

<ResponseField name="messageId" type="string" required>
  Unique ID of the assistant message.
</ResponseField>

<ResponseField name="userMessageId" type="string" required>
  The ID of the user message that triggered this response. For continuation responses, this is the last user message in the conversation.
</ResponseField>

<ResponseField name="conversationId" type="string" required>
  The conversation ID. Use this for follow-up messages.
</ResponseField>

<ResponseField name="userId" type="string | null" required>
  The user ID associated with this conversation, or `null` if none.
</ResponseField>

<ResponseField name="finishReason" type="string" required>
  Why the model stopped generating:

  * `"stop"` — normal completion
  * `"error"` — an error occurred
  * `"tool-calls"` — the agent invoked a client action — submit the result and continue
</ResponseField>

<ResponseField name="usage" type="object" required>
  <Expandable title="properties">
    <ResponseField name="credits" type="number" required>
      Credits consumed by this request.
    </ResponseField>
  </Expandable>
</ResponseField>

The stream terminates with `data: [DONE]`.

## Code Examples

<CodeGroup>
  ```javascript Node.js theme={null}
  const response = await fetch(
    "https://www.chatbase.co/api/v2/agents/YOUR_AGENT_ID/chat",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer YOUR_API_KEY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Explain quantum computing",
        stream: true,
        // conversationId: "a1b2c3d4-...", // omit to start a new conversation
        // userId: "user_abc123",          // associate a user with the conversation
      }),
    }
  );

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let conversationId;
  let userId;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const lines = decoder.decode(value, { stream: true }).split("\n");
    for (const line of lines) {
      if (!line.trim()) continue;
      const event = JSON.parse(line);

      switch (event.type) {
        case "message-start":
          console.log("Message ID:", event.messageId);
          break;
        case "text-delta":
          process.stdout.write(event.delta);
          break;
        case "tool-input-available":
          console.log("\nClient action requested:", event.toolName, event.input);
          // Handle client action — see Client Actions guide
          break;
        case "message-metadata":
          conversationId = event.conversationId;
          userId = event.userId;
          console.log("\nFinish reason:", event.finishReason);
          console.log("Credits used:", event.usage.credits);
          break;
        case "error":
          console.error("Stream error:", event.errorText);
          break;
      }
    }
  }
  ```

  ```python Python theme={null}
  import requests
  import json

  response = requests.post(
      "https://www.chatbase.co/api/v2/agents/YOUR_AGENT_ID/chat",
      headers={
          "Authorization": "Bearer YOUR_API_KEY",
          "Content-Type": "application/json",
      },
      json={
          "message": "Explain quantum computing",
          "stream": True,
          # "conversationId": "a1b2c3d4-...",  # omit to start a new conversation
          # "userId": "user_abc123",            # associate a user with the conversation
      },
      stream=True,
  )

  conversation_id = None
  user_id = None

  for line in response.iter_lines():
      if not line:
          continue
      event = json.loads(line)

      if event["type"] == "message-start":
          print(f"Message ID: {event['messageId']}")
      elif event["type"] == "text-delta":
          print(event["delta"], end="", flush=True)
      elif event["type"] == "tool-input-available":
          print(f"\nClient action requested: {event['toolName']}", event["input"])
          # Handle client action — see Client Actions guide
      elif event["type"] == "message-metadata":
          conversation_id = event["conversationId"]
          user_id = event["userId"]
          print(f"\nFinish reason: {event['finishReason']}")
          print(f"Credits used: {event['usage']['credits']}")
      elif event["type"] == "error":
          print(f"Stream error: {event['errorText']}")
  ```

  ```bash curl theme={null}
  curl -N -X POST 'https://www.chatbase.co/api/v2/agents/YOUR_AGENT_ID/chat' \
    -H 'Authorization: Bearer YOUR_API_KEY' \
    -H 'Content-Type: application/json' \
    -d '{
      "message": "Explain quantum computing",
      "stream": true,
      "conversationId": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
      "userId": "user_abc123"
    }'
  ```
</CodeGroup>

## Non-Streaming Mode

When `stream` is set to `false`, the API returns a standard JSON response with the complete message:

<Tabs>
  <Tab title="Text Response">
    ```json theme={null}
    {
      "data": {
        "id": "msg_abc123",
        "role": "assistant",
        "parts": [
          { "type": "text", "text": "Quantum computing is a type of computation..." }
        ],
        "metadata": {
          "userMessageId": "msg_xyz789",
          "conversationId": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
          "userId": "user_abc123",
          "finishReason": "stop",
          "usage": { "credits": 2 }
        }
      }
    }
    ```
  </Tab>

  <Tab title="Client Action Response">
    When a client action is invoked, the response includes `tool-call` parts and `finishReason: "tool-calls"`:

    ```json theme={null}
    {
      "data": {
        "id": "msg_abc123",
        "role": "assistant",
        "parts": [
          { "type": "text", "text": "Let me look up that order for you." },
          { "type": "tool-call", "toolCallId": "call_abc123", "toolName": "lookupOrder", "input": { "orderId": "ORD-123" } }
        ],
        "metadata": {
          "userMessageId": "msg_xyz789",
          "conversationId": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
          "userId": "user_abc123",
          "finishReason": "tool-calls",
          "usage": { "credits": 2 }
        }
      }
    }
    ```

    See [Client Actions](/api-v2/client-actions) for how to submit the result and continue the conversation.
  </Tab>
</Tabs>
