# Prototype Requirements

## Prototype goal

Create a first-pass prototype requirements document for a custom frontend web app centered on a Chatbase agent. This document is the next step after the [Google AI Studio Prototype Guide](google-ai-studio-prototype-guide.md) and should be used before drafting a Google AI Studio prompt.

The first prototype should stay intentionally small. The goal is to verify that the minimum conversation experience works end to end:

- A custom frontend web app can present a Chatbase-agent-centered experience.
- A user can enter a message.
- The app can display the conversation.
- The UI can represent loading, empty, and error states.
- Basic state management and a simple structured input pattern can be described clearly enough for a later prototype prompt.

This document does **not** include implementation code or a finished Google AI Studio prompt.

## Target users

The first prototype should be understandable and useful for these audiences:

- **internal developer**: Reviews feasibility, integration assumptions, state handling, and API boundaries.
- **product planner**: Reviews the intended user flow, MVP scope, and what is excluded from the prototype.
- **tourism chatbot operator**: Reviews whether the prototype can support tourism chatbot scenarios such as visitor questions, suggested paths, and lightweight request forms.
- **future municipal / client-facing demo viewer**: Reviews whether the same structure could later support municipal guide or client-facing demo scenarios.

## Core user flow

The MVP flow should be simple and testable:

1. User opens the web app.
2. User sees a welcome area that explains what the prototype can do.
3. User enters a message in the chat input.
4. App sends the message to the Chatbase-related backend/API layer.
5. Response is displayed in the conversation area.
6. Loading, error, and empty states are shown appropriately.

## MVP scope

The first prototype should include only the minimum product surface needed to validate a custom Chatbase frontend.

### Included

- **Chat input**: A clear text input and submit action for user messages.
- **Conversation display**: A message area that distinguishes user and assistant messages.
- **Loading state**: A visible state while a response is being requested or streamed.
- **Error state**: A visible fallback when the API/backend layer fails or returns an unusable response.
- **Basic form input**: A minimal structured form pattern for collecting simple user details or use-case-specific information.
- **Basic action/API placeholder**: A clearly labeled placeholder showing where a future action or API integration would connect.
- **Responsive layout**: A layout that remains usable on both desktop and mobile-sized screens.

### Keep intentionally simple

- Prefer one primary chat screen.
- Prefer placeholder IDs and placeholder API values.
- Prefer one simple form example rather than several specialized forms.
- Prefer one action/API placeholder rather than a full workflow implementation.

## Out of scope for this prototype

Do not include these in the first prototype requirements or first prompt:

- Production authentication.
- Production API keys.
- Payment.
- Full analytics dashboard.
- Multi-agent management.
- Advanced deployment automation.

## Required reference docs

Review these documents before writing the first Google AI Studio prompt:

| Purpose | Reference |
| --- | --- |
| Prototype planning entry point | [`google-ai-studio-prototype-guide.md`](google-ai-studio-prototype-guide.md) |
| Developer integration choices | [`../00-overview/developer-overview.md`](../00-overview/developer-overview.md) |
| Client-side form setup and schemas | [`../01-frontend-integration/custom-frontend/client-side-custom-forms.md`](../01-frontend-integration/custom-frontend/client-side-custom-forms.md) |
| Conditional UI states | [`../01-frontend-integration/custom-frontend/states.md`](../01-frontend-integration/custom-frontend/states.md) |
| Client action flow | [`../01-frontend-integration/custom-frontend/client-actions.md`](../01-frontend-integration/custom-frontend/client-actions.md) |
| Browser-side custom actions | [`../01-frontend-integration/custom-frontend/client-side-custom-actions.md`](../01-frontend-integration/custom-frontend/client-side-custom-actions.md) |
| Actions and automation overview | [`../03-actions-and-automation/actions-overview.md`](../03-actions-and-automation/actions-overview.md) |
| Streaming conversation behavior | [`../04-api-reference/conversations/streaming.md`](../04-api-reference/conversations/streaming.md) |
| API authentication | [`../04-api-reference/authentication.md`](../04-api-reference/authentication.md) |
| API error handling | [`../04-api-reference/error-handling.md`](../04-api-reference/error-handling.md) |

## Google AI Studio prompt preparation notes

### Information to include later

When creating the first Google AI Studio prompt in a later step, include:

- The prototype goal and MVP scope.
- The target user group for the first demo.
- The intended core user flow.
- The required UI areas: welcome area, chat input, conversation display, loading state, error state, and basic form input.
- Placeholder names for the Chatbase-related backend/API layer.
- A clear instruction to use placeholder secrets only.
- The expected responsive layout behavior.
- Any use-case framing, such as a tourism chatbot demo.

### Information not to include

Do not include:

- Production API keys or secrets.
- Real user personal data.
- Production webhook URLs.
- Production environment variables.
- Payment implementation details.
- Full deployment automation requirements.
- A request for production-ready security or authentication.

### Keep the first prompt small and testable

The first prompt should be narrow enough that the generated prototype can be reviewed quickly:

- Ask for one page or one main screen.
- Ask for placeholders where real API integration details are not ready.
- Ask for visible loading, empty, and error states.
- Ask for a simple form example rather than a complete workflow.
- Avoid asking for multiple use cases in the same first prompt.
- Avoid asking for a full production architecture.

## Acceptance criteria

This requirements document is ready for the next step when:

- The requirements are clear enough to create a first Google AI Studio prompt.
- No production secrets are included.
- No implementation code is generated yet.
- README links resolve.
