> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Widget Control

> Programmatically control your chat widget with JavaScript methods to open, close, and reset conversations.

The Chatbase embed script exposes the `window.chatbase` object with methods to control your chat widget programmatically.

## Methods

### open()

Opens the chat widget.

```javascript theme={null}
window.chatbase.open();
```

### close()

Closes the chat widget.

```javascript theme={null}
window.chatbase.close();
```

### resetChat()

Clears the current conversation and starts a new session.

```javascript theme={null}
window.chatbase.resetChat();
```

<Info>
  Your widget configuration and [custom initial
  messages](/developer-guides/custom-initial-messages) are preserved after
  reset.
</Info>

## Examples

Combine these methods with [event listeners](/developer-guides/chatbot-event-listeners) to build powerful, context-aware chat experiences.

### Custom Buttons

Trigger widget actions from your own UI elements:

```javascript theme={null}
document.getElementById("help-button").addEventListener("click", () => {
  window.chatbase.open();
});

document.getElementById("close-button").addEventListener("click", () => {
  window.chatbase.close();
});

document.getElementById("new-chat-button").addEventListener("click", () => {
  window.chatbase.resetChat();
});
```

### Time-Based Reset

<Note>
  The 24-hour example uses `localStorage` to persist the last message time
  across page reloads.
</Note>

<CodeGroup>
  ```javascript Reset After 5 Minutes of Inactivity theme={null}
  let inactivityTimer;

  function startInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(
      () => window.chatbase.resetChat(),
      5 * 60 * 1000
    );
  }

  window.chatbase.addEventListener("user-message", startInactivityTimer);
  window.chatbase.addEventListener("assistant-message", startInactivityTimer);
  ```

  ```javascript Reset 24 Hours After Last Message theme={null}
  const STORAGE_KEY = "chatbase_last_message";
  const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

  function updateLastMessageTime() {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  }

  // Check on page load
  const lastMessage = localStorage.getItem(STORAGE_KEY);
  if (lastMessage && Date.now() - parseInt(lastMessage) > TWENTY_FOUR_HOURS) {
    window.chatbase.resetChat();
    updateLastMessageTime(); // Reset the timer after clearing
  }

  // Update timestamp on every message
  window.chatbase.addEventListener("user-message", updateLastMessageTime);
  window.chatbase.addEventListener("assistant-message", updateLastMessageTime);
  ```
</CodeGroup>

### Reset After Tool Completion

<CodeGroup>
  ```javascript After Transaction theme={null}
  let resetTimer;

  window.chatbase.addEventListener("tool-result", (event) => {
    const resetTools = ["complete-booking", "process-payment", "create-ticket"];

    if (resetTools.includes(event.data.name) && event.data.result?.success) {
      clearTimeout(resetTimer);
      // 2 second delay before resetting the chat
      resetTimer = setTimeout(() => window.chatbase.resetChat(), 2000);
    }
  });
  ```

  ```javascript After Support Ticket theme={null}
  let resetTimer;

  window.chatbase.addEventListener("tool-result", (event) => {
    if (event.data.name === "create-ticket") {
      clearTimeout(resetTimer);
      // 2 second delay before resetting the chat
      resetTimer = setTimeout(() => window.chatbase.resetChat(), 2000);
    }
  });
  ```
</CodeGroup>

### Reset on Keywords

<Warning>
  Always add a delay before resetting so users can read the final AI response.
</Warning>

<CodeGroup>
  ```javascript User Says Goodbye theme={null}
  let resetTimer;

  window.chatbase.addEventListener("user-message", (event) => {
    const goodbyePhrases = ["goodbye", "bye", "that's all", "start over"];
    const message = event.data.content.toLowerCase();

    // Use word boundaries to avoid matching substrings (e.g., "nearby" containing "bye")
    const matchesPhrase = goodbyePhrases.some((phrase) => {
      const regex = new RegExp(`\\b${phrase}\\b`);
      return regex.test(message);
    });

    if (matchesPhrase) {
      clearTimeout(resetTimer);
      // 2 second delay before resetting the chat
      resetTimer = setTimeout(() => window.chatbase.resetChat(), 2000);
    }
  });
  ```

  ```javascript AI Confirms Completion theme={null}
  let resetTimer;

  window.chatbase.addEventListener("assistant-message", (event) => {
    const donePhrases = ["order confirmed", "booking complete", "ticket created"];
    const message = event.data.content.toLowerCase();

    const matchesPhrase = donePhrases.some((phrase) => {
      const regex = new RegExp(`\\b${phrase}\\b`);
      return regex.test(message);
    });

    if (matchesPhrase) {
      clearTimeout(resetTimer);
      // 2 second delay before resetting the chat
      resetTimer = setTimeout(() => window.chatbase.resetChat(), 2000);
    }
  });
  ```
</CodeGroup>

### Reset on Navigation

Start fresh conversations when users enter specific sections of your site.

<CodeGroup>
  ```javascript Single-Page App theme={null}
  const resetOnRoutes = ["/checkout", "/new-project", "/support"];

  function checkRouteAndReset() {
    if (resetOnRoutes.includes(window.location.pathname)) {
      window.chatbase.resetChat();
    }
  }

  // Call this from your router's navigation callback
  // e.g., router.afterEach(checkRouteAndReset)
  checkRouteAndReset();
  ```

  ```javascript Multi-Page App theme={null}
  // Add this script to pages where you want fresh conversations
  window.chatbase.resetChat();
  ```
</CodeGroup>

## Best Practices

* **Debounce rapid calls** — Avoid calling methods in quick succession
* **Add delays before reset** — Give users time to read the final response
* **Respect dismissals** — Don't immediately reopen a closed widget
* **Use contextual triggers** — Open chat at moments when help is most relevant

## Next Steps

<CardGroup cols={2}>
  <Card title="Event Listeners" icon="ear" href="/developer-guides/chatbot-event-listeners">
    Learn to listen for and respond to chat events in real-time
  </Card>

  <Card title="Custom Initial Messages" icon="message" href="/developer-guides/custom-initial-messages">
    Create dynamic, personalized initial messages for users
  </Card>

  <Card title="Floating Initial Messages" icon="bullhorn" href="/developer-guides/floating-initial-messages">
    Display floating messages over the chat bubble
  </Card>
</CardGroup>
