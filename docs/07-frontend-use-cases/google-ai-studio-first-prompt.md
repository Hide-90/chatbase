# Google AI Studio First Prompt

## Prompt purpose

This document provides the first Google AI Studio prompt draft for generating a small custom frontend web-app prototype around a Chatbase-related chat experience. It is based on the [Prototype Requirements](prototype-requirements.md) and should be read together with the [Google AI Studio Prototype Guide](google-ai-studio-prototype-guide.md).

The prompt is intentionally scoped to a small, testable prototype. It must not include production API keys, production environment settings, real user personal data, or production deployment secrets.

## App concept

Generate a single-page web app prototype that demonstrates a custom frontend for a Chatbase-agent-centered experience. The app should focus on the minimum interaction loop:

1. A user opens the prototype.
2. The app shows a welcome area.
3. The user types a message.
4. The message appears in the conversation area.
5. The app shows a loading state.
6. The app displays a placeholder assistant response.
7. The app can show an error state.
8. The app includes a simple form example and a placeholder action/API result area.

## Required UI

The generated prototype should include these visible UI areas:

- **Welcome area**: A short title and explanation of what the prototype demonstrates.
- **Chat input**: A text input and submit button for user messages.
- **Conversation display**: A readable message list showing user messages and placeholder assistant responses.
- **Loading state**: A visible indicator while the simulated response is pending.
- **Empty state**: A friendly state shown before any messages are sent.
- **Error state**: A visible fallback state that can be triggered or represented in the UI.
- **Simple form input area**: A small form example, such as name, email, or request details, using placeholder behavior only.
- **Placeholder action/API result area**: A panel or card that shows where a future Chatbase action, client action, or backend/API result would appear.

## Technical constraints

- Build a **single-page web app**.
- Do **not** use production secrets.
- Do **not** include a real production Chatbase API key.
- Use placeholder values such as `YOUR_CHATBASE_AGENT_ID`, `YOUR_BACKEND_ENDPOINT`, or `PLACEHOLDER_API_KEY_DO_NOT_USE_IN_PRODUCTION` only if a placeholder is needed.
- A placeholder API layer is acceptable for this first prototype.
- The app should use simulated or mocked responses unless an integration point is clearly marked as a placeholder.
- The layout should be responsive and usable on desktop and mobile widths.
- Keep the structure simple, readable, and easy to modify.
- Prefer clear component names and comments that identify future integration points.

## Behavior requirements

- User can type a message.
- Submitted user message appears in the conversation area.
- App shows a loading state before the assistant response appears.
- App displays a placeholder assistant response.
- App can show an error state, either through a demo button, simulated failure path, or clearly visible fallback area.
- App includes a simple form example with basic fields and a submit interaction.
- App shows a placeholder action/API result area that can later be connected to Chatbase actions or backend/API responses.

## Out of scope

Do not include these in the first generated prototype:

- Real production Chatbase API key.
- Payment.
- Authentication.
- Analytics dashboard.
- Multi-agent management.
- Production deployment automation.
- Real personal data.
- Production webhook URLs.

## Actual first prompt text for Google AI Studio

Copy the following prompt into Google AI Studio when ready to generate the first prototype:

```text
Create a small, single-page responsive web app prototype for a custom frontend chat experience centered on a Chatbase agent.

Goal:
Build the smallest useful prototype to validate the basic custom frontend flow: welcome area, user message input, conversation display, loading state, empty state, error state, simple form input, and a placeholder action/API result area.

Important constraints:
- Do not include any real production API keys, production secrets, real user personal data, production webhook URLs, or production environment settings.
- Use placeholder values only, such as YOUR_CHATBASE_AGENT_ID, YOUR_BACKEND_ENDPOINT, or PLACEHOLDER_API_KEY_DO_NOT_USE_IN_PRODUCTION.
- A mocked or placeholder API layer is acceptable for this first prototype.
- Keep the app simple, readable, and easy to modify.
- Use a single-page layout.
- Make the layout responsive for desktop and mobile widths.

App concept:
The app should demonstrate a custom UI around a Chatbase-agent-centered conversation. It should not be production-ready. It should show where Chatbase or backend/API integration would be added later, but it should use simulated responses for now.

Required UI:
1. Welcome area
   - Include a title and short description explaining that this is a Chatbase custom frontend prototype.
2. Chat input
   - Include a text input and a send button.
3. Conversation display
   - Show user messages and placeholder assistant responses in a readable message list.
4. Loading state
   - Show a visible loading indicator after the user sends a message and before the placeholder assistant response appears.
5. Empty state
   - Show a friendly empty state before the first message is sent.
6. Error state
   - Include a visible error state or a way to simulate an error.
7. Simple form input area
   - Include a small example form with basic fields such as name, email, and request details.
   - The form can use placeholder submit behavior.
8. Placeholder action/API result area
   - Include a card or panel showing where a future Chatbase action, client action, or backend/API result would appear.

Behavior requirements:
- A user can type a message.
- When the user sends the message, it appears in the conversation area.
- The app shows a loading state briefly.
- The app then displays a placeholder assistant response.
- The app can show an error state through a simulated failure path, demo button, or visible fallback example.
- The simple form can be filled in and submitted with placeholder behavior.
- The placeholder action/API result area should be visible and clearly labeled.

Out of scope:
- Do not implement real payment.
- Do not implement production authentication.
- Do not build a full analytics dashboard.
- Do not build multi-agent management.
- Do not include advanced deployment automation.
- Do not use real production Chatbase credentials.

Please generate the prototype code with a clear structure and brief comments marking future integration points for Chatbase API calls, streaming responses, client actions, and form submission.
```

## Review checklist before use

Before using or sharing the generated prototype, confirm that:

- No production secrets were added.
- Any Chatbase API key, agent ID, backend endpoint, or webhook URL is clearly a placeholder.
- The generated app remains small and testable.
- The prototype does not claim to be production-ready.
- Any future integration point is clearly labeled as a placeholder.
