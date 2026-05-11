> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Error Handling

> Structured error codes and troubleshooting guide for the Chatbase API v2.

## Error Response Format

All errors follow a consistent envelope format:

```json theme={null}
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable description",
    "details": {}
  }
}
```

| Field     | Type     | Description                                                                     |
| --------- | -------- | ------------------------------------------------------------------------------- |
| `code`    | `string` | Machine-readable error code. Use this for programmatic handling.                |
| `message` | `string` | Human-readable description of the error.                                        |
| `details` | `object` | Optional. Field-level validation errors (present on `VALIDATION_INVALID_BODY`). |

## Error Codes

<table>
  <thead>
    <tr>
      <th style={{ whiteSpace: 'nowrap' }}>Code</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>VALIDATION\_INVALID\_BODY</code></td><td>The request body failed schema validation. Check the <code>details</code> field for specific field errors.</td></tr>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>VALIDATION\_INVALID\_JSON</code></td><td>The request body is not valid JSON.</td></tr>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>CHAT\_RETRY\_NO\_USER\_MESSAGE</code></td><td>The retry target message has no preceding user message to re-send.</td></tr>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>AUTH\_MISSING\_API\_KEY</code></td><td>No <code>Authorization</code> header was provided.</td></tr>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>AUTH\_INVALID\_API\_KEY</code></td><td>The API key is not valid.</td></tr>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>AUTH\_EXPIRED\_API\_KEY</code></td><td>The API key has expired. Generate a new one from the dashboard.</td></tr>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>CHAT\_CREDITS\_EXHAUSTED</code></td><td>The workspace's message credit balance is zero. Upgrade the plan or wait for credits to reset.</td></tr>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>CHAT\_AGENT\_CREDITS\_EXHAUSTED</code></td><td>The specific agent's credit allocation has been used up.</td></tr>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>SUBSCRIPTION\_API\_RESTRICTED\_PLAN</code></td><td>Your current plan does not include API access. A Standard Plan or above is required.</td></tr>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>AUTH\_INSUFFICIENT\_PERMISSIONS</code></td><td>The API key does not have the required permissions for this operation.</td></tr>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>CHAT\_MODEL\_NOT\_ALLOWED</code></td><td>The agent is configured to use a model that is not available on the current plan.</td></tr>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>CHAT\_CONVERSATION\_MISMATCH</code></td><td>The conversation does not belong to the specified agent.</td></tr>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>CHAT\_CONVERSATION\_NOT\_ONGOING</code></td><td>The conversation has ended or been taken over and cannot receive new messages.</td></tr>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>RESOURCE\_NOT\_FOUND</code></td><td>The requested resource does not exist.</td></tr>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>RESOURCE\_TOOL\_CALL\_NOT\_FOUND</code></td><td>No pending client action matches the provided <code>toolCallId</code>. It may have expired or already been resolved.</td></tr>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>RESOURCE\_MESSAGE\_NOT\_FOUND</code></td><td>The specified message was not found in the conversation.</td></tr>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>RESOURCE\_MESSAGE\_NOT\_ASSISTANT</code></td><td>Only assistant messages support feedback and metadata updates.</td></tr>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>CHAT\_RETRY\_MESSAGE\_NOT\_FOUND</code></td><td>The message ID provided for retry was not found in the conversation.</td></tr>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>RATE\_LIMIT\_TOO\_MANY\_REQUESTS</code></td><td>Rate limit exceeded. Check the <code>Retry-After</code> header for how long to wait. See <a href="/api-v2/authentication#rate-limiting">Authentication</a> for details.</td></tr>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>INTERNAL\_SERVER\_ERROR</code></td><td>An unexpected error occurred. If this persists, contact support with the <code>x-request-id</code> header value.</td></tr>
    <tr><td style={{ whiteSpace: 'nowrap' }}><code>CHAT\_STREAMING\_ERROR</code></td><td>An error occurred during stream generation. The stream may have been partially delivered.</td></tr>
  </tbody>
</table>

**Example with field-level details (`VALIDATION_INVALID_BODY`):**

```json theme={null}
{
  "error": {
    "code": "VALIDATION_INVALID_BODY",
    "message": "Invalid request",
    "details": {
      "message": "Required"
    }
  }
}
```

## Handling Errors

```javascript theme={null}
const response = await fetch(
  "https://www.chatbase.co/api/v2/agents/YOUR_AGENT_ID/chat",
  {
    method: "POST",
    headers: {
      Authorization: "Bearer YOUR_API_KEY",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "Hello" }),
  }
);

if (!response.ok) {
  const { error } = await response.json();
  const requestId = response.headers.get("x-request-id");

  switch (error.code) {
    case "RATE_LIMIT_TOO_MANY_REQUESTS":
      const retryAfter = response.headers.get("Retry-After");
      // Wait and retry
      break;
    case "CHAT_CREDITS_EXHAUSTED":
      // Notify user about credit limit
      break;
    case "VALIDATION_INVALID_BODY":
      // Fix request based on error.details
      console.log("Validation errors:", error.details);
      break;
    default:
      console.error(`[${error.code}] ${error.message} (request: ${requestId})`);
  }
}
```
