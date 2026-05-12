# Google AI Studio Prototype Guide

## Purpose

This document is an entry point for preparing a Google AI Studio web-app prototype around a Chatbase-powered custom frontend. It helps collect requirements and identify which existing Chatbase docs should be read before drafting a prototype prompt.

This document does **not** include implementation code or a finished Google AI Studio prompt.

## Expected web app role

The prototype web app should act as a custom UI centered on a Chatbase agent. Depending on the target use case, the app may include:

- **Custom UI around a Chatbase agent**: A web interface that presents the chatbot experience in a use-case-specific layout rather than relying only on a generic widget.
- **User input**: Text input, quick-reply controls, category selectors, or guided entry points for the user’s question or task.
- **Conversation display**: A message timeline that shows user messages, Chatbase responses, loading/progress states, and possibly streamed response updates.
- **State display**: Visible UI states such as loading, waiting for user input, action required, form open, error, fallback, or handoff available.
- **Form input**: Structured forms for lead capture, requests, reservations, reports, feedback, or other use-case-specific data collection.
- **Actions/API integration when needed**: Client actions, client-side custom actions, server/API calls, streaming conversation APIs, authentication, and error handling where the prototype requires them.

## Existing documents to review first

Read these documents before preparing requirements or a Google AI Studio prompt:

| Topic | Document |
| --- | --- |
| Developer orientation and integration choices | [`../00-overview/developer-overview.md`](../00-overview/developer-overview.md) |
| Client-side form schemas and validation | [`../01-frontend-integration/custom-frontend/client-side-custom-forms.md`](../01-frontend-integration/custom-frontend/client-side-custom-forms.md) |
| Conditional UI state behavior | [`../01-frontend-integration/custom-frontend/states.md`](../01-frontend-integration/custom-frontend/states.md) |
| Client action flow | [`../01-frontend-integration/custom-frontend/client-actions.md`](../01-frontend-integration/custom-frontend/client-actions.md) |
| Browser-side custom actions | [`../01-frontend-integration/custom-frontend/client-side-custom-actions.md`](../01-frontend-integration/custom-frontend/client-side-custom-actions.md) |
| Action capabilities and use cases | [`../03-actions-and-automation/actions-overview.md`](../03-actions-and-automation/actions-overview.md) |
| Streaming conversation behavior | [`../04-api-reference/conversations/streaming.md`](../04-api-reference/conversations/streaming.md) |
| API authentication | [`../04-api-reference/authentication.md`](../04-api-reference/authentication.md) |
| API error handling | [`../04-api-reference/error-handling.md`](../04-api-reference/error-handling.md) |

## Requirements to organize before using Google AI Studio

Before asking Google AI Studio to generate a web-app prototype, prepare the following requirements in a separate prototype requirements document.

### UI requirements

- Target use case, such as tourism, municipality guide, news support, or voice guide companion.
- Main screen layout and navigation model.
- Chat input style and quick actions.
- Message display requirements, including assistant, user, system, loading, and error messages.
- State indicators for loading, streaming, action pending, form open, handoff, or offline/error states.
- Accessibility and multilingual UI requirements.
- Mobile and desktop layout expectations.

### Conversation flow

- First user entry points and suggested starting messages.
- Expected user intents and the assistant’s ideal response style.
- Whether responses should stream progressively or appear after completion.
- When forms should appear in the flow.
- When actions or API calls should be triggered.
- Fallback behavior when the agent cannot answer confidently.
- Human handoff or escalation expectations, if any.

### API integration requirements

- Whether the prototype uses the Chatbase embed/widget model, a custom API-driven chat UI, or a hybrid approach.
- Required Chatbase agent ID or placeholder naming convention for the prototype.
- Conversation API endpoints needed for the prototype.
- Streaming vs. non-streaming response handling.
- Client action and client-side custom action requirements.
- Form submission and webhook requirements, if any.
- Whether user identity, conversation history, leads, or feedback must be included.

### Error handling

- API authentication failures.
- Rate limit or quota errors.
- Network failures and retry behavior.
- Streaming interruptions.
- Form validation errors.
- Action execution failures.
- Safe fallback messages for users.

### Security notes

- Do not put production API keys into Google AI Studio prompts, generated frontend code, screenshots, or public repositories.
- Use placeholder values for secrets, agent IDs, tokens, webhook URLs, and deployment URLs during prototyping.
- Keep server-side secrets out of browser-only code.
- Decide whether identity verification or authenticated user context is required before designing user-specific features.
- Avoid including sensitive personal data in prototype prompts or sample conversations.

### Deployment candidates

- Local prototype only.
- Static web hosting for a design/demo build.
- Vercel or another frontend hosting platform.
- A backend-capable deployment target if server-side API proxying, secret handling, webhooks, or authenticated calls are required.

## Not created yet

Do not create the following at this stage:

- Implementation code.
- Finished Google AI Studio prompt text.
- Production API keys.
- Production environment settings.

## Next steps

1. Create a separate prototype requirements document for the specific use case.
2. Use that requirements document and the references above to draft a Google AI Studio prompt in a later step.
3. Review the generated prompt for security, scope, and feasibility before using it to generate prototype code.
