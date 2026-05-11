> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# API v2 Overview

> Introduction to the Chatbase API v2 — a structured, modern REST API for chatting with agents and managing conversations.

<Info>
  **Standard Plan required.** The Chatbase API v2 is available starting from the Standard Plan. [View pricing →](https://www.chatbase.co/pricing)
</Info>

<Warning>
  Conversation API endpoints apply exclusively to conversations created programmatically via the Chatbase API. Conversations generated through the widget or external integrations cannot be accessed using these endpoints.
</Warning>

## What is the Chatbase API v2?

The Chatbase API v2 is a redesigned REST API that provides a clean, consistent interface for interacting with your AI agents. It features structured error codes, cursor-based pagination, streaming support via Server-Sent Events, and a predictable response format.

**Base URL:**

```
https://www.chatbase.co/api/v2
```

## Quick Start

<Steps>
  <Step title="Get your API key">
    1. Go to the [Chatbase Dashboard](https://www.chatbase.co/dashboard)
    2. Navigate to **Workspace Settings** → **API Keys**
    3. Click **Create API Key** and copy the generated key

    <Warning>Store your API key securely. Never expose it in client-side code.</Warning>
  </Step>

  <Step title="Get your Agent ID">
    1. Select your AI Agent in the dashboard
    2. Go to **Settings** → **General**
    3. Copy the **Agent ID**
  </Step>

  <Step title="Send your first message">
    ```bash theme={null}
    curl -X POST 'https://www.chatbase.co/api/v2/agents/YOUR_AGENT_ID/chat' \
      -H 'Authorization: Bearer YOUR_API_KEY' \
      -H 'Content-Type: application/json' \
      -d '{
        "message": "Hello! How can you help me?"
      }'
    ```

    **Response:**

    ```json theme={null}
    {
      "data": {
        "id": "msg_abc123",
        "role": "assistant",
        "parts": [
          { "type": "text", "text": "Hello! I'm here to help. What can I assist you with today?" }
        ],
        "metadata": {
          "userMessageId": "msg_xyz789",
          "conversationId": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
          "userId": null,
          "finishReason": "stop",
          "usage": { "credits": 2 }
        }
      }
    }
    ```
  </Step>
</Steps>

## Endpoints

| Method  | Endpoint                                                                                |
| ------- | --------------------------------------------------------------------------------------- |
| `GET`   | `/api/v2/health`                                                                        |
| `POST`  | `/api/v2/agents/{agentId}/chat`                                                         |
| `POST`  | `/api/v2/agents/{agentId}/conversations/{conversationId}/retry`                         |
| `GET`   | `/api/v2/agents/{agentId}/conversations`                                                |
| `GET`   | `/api/v2/agents/{agentId}/conversations/{conversationId}`                               |
| `GET`   | `/api/v2/agents/{agentId}/conversations/{conversationId}/messages`                      |
| `GET`   | `/api/v2/agents/{agentId}/users/{userId}/conversations`                                 |
| `POST`  | `/api/v2/agents/{agentId}/conversations/{conversationId}/tool-result`                   |
| `PATCH` | `/api/v2/agents/{agentId}/conversations/{conversationId}/messages/{messageId}/feedback` |

## Response Headers

Every response includes these headers:

| Header                  | Description                                                      |
| ----------------------- | ---------------------------------------------------------------- |
| `x-request-id`          | Unique request identifier. Include this when contacting support. |
| `X-RateLimit-Limit`     | Maximum requests allowed in the current window.                  |
| `X-RateLimit-Remaining` | Requests remaining in the current window.                        |
| `X-RateLimit-Reset`     | Unix timestamp (ms) when the rate limit window resets.           |

## Next Steps

<CardGroup cols={2}>
  <Card title="Authentication" icon="key" href="/api-v2/authentication">
    API keys, Bearer tokens, and rate limiting
  </Card>

  <Card title="Streaming" icon="wave-pulse" href="/api-v2/streaming">
    Real-time SSE streaming responses
  </Card>

  <Card title="Error Handling" icon="triangle-exclamation" href="/api-v2/error-handling">
    Structured error codes and troubleshooting
  </Card>

  <Card title="Pagination" icon="arrow-right" href="/api-v2/pagination">
    Cursor-based pagination for list endpoints
  </Card>
</CardGroup>
