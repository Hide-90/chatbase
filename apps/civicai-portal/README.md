# CivicAI Portal Prototype

CivicAI Portal is a safe municipal tourism demo prototype for reviewing a custom visitor-facing chatbot experience before connecting to any production Chatbase API. It demonstrates a small first-view chat UI, tourism quick action cards, mock assistant responses, loading and error states, simple structured visitor-context input, and a metadata preview for future backend/API integration.

## Purpose

- Keep the generated CivicAI Portal prototype inside this repository as an app, not only as documentation.
- Validate the first custom frontend flow for a Chatbase-agent-centered municipal tourism assistant.
- Review UI behavior, mock state handling, structured visitor metadata, and future integration boundaries before any production API connection.

## Local setup

```bash
npm install
npm run dev
```

Then open the local URL printed by the development server.

## Build check

```bash
npm run build
```

## Current integration status

This prototype is **not connected to the production Chatbase API**.

- All assistant responses are mock responses.
- All action/API results are placeholder values.
- No production API keys, secrets, webhook URLs, authentication tokens, or production environment variables are included.
- The form only previews structured visitor metadata locally in the UI.

## Future Chatbase API connection point

Future Chatbase-related backend/API integration should be added behind the isolated message submission boundary in `src/App.tsx`:

- Replace `createMockAssistantResponse` with a call to a server-side backend/API layer.
- Replace the `window.setTimeout` mock in `submitMessage` with a real request flow.
- Keep Chatbase API keys and secrets on the server; never place production secrets in the browser bundle.
- Add streaming support at the same boundary if the app later needs progressive assistant responses.

## Safe review notes

Before adding real integrations, use the checklist in `../../docs/07-frontend-use-cases/google-ai-studio-output-review-checklist.md`.
