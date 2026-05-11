# Chatbase Documentation Reorganization Plan

## Scope and finding

This repository currently does **not** have a populated `docs/` directory. The Chatbase documentation corpus is stored as many extensionless Markdown-like files at the repository root, together with `README.md`. For this plan, those root-level documentation files are treated as the current documentation set to be reorganized under `docs/` after review.

No source document has been moved, renamed, split, or deleted in this change. This file is only a proposed plan.

## Current problems

1. **Documentation files are mixed at the repository root**
   - API references, widget/embed notes, admin UI notes, integration guides, and implementation concepts all sit side by side.
   - This makes it hard for Codex or future developers to locate the right material when building frontend applications.

2. **No stable topic taxonomy**
   - Frontend-relevant files such as `JavaScript Embed Script`, `Widget Control`, `Event Listeners`, `Client-Side Custom Actions`, and `User Conversations` are not grouped together.
   - Backend/API reference files such as `Chat with a chatbot`, `Create a new chatbot`, and `Update chatbot settings` are mixed with low-code platform guides such as `Wix`, `Webflow`, and `WordPress`.

3. **Implementation notes and product documentation are interleaved**
   - Files about UI building blocks (`Text`, `Layout`, `Form Inputs`, `Data Display`) sit next to API endpoint references and third-party integration docs.
   - Custom Actions, client-side actions, functions, states, and tool-result APIs are related but currently scattered.

4. **Use-case guidance is missing as a first-class area**
   - The current corpus contains general Chatbase capability docs, but does not yet provide dedicated frontend use-case playbooks for tourism, municipality, news support, or voice guide apps.
   - Future use-case docs should be separated from vendor/API reference material so generated frontend code can consume them as product requirements.

5. **Filenames are readable for humans but less predictable for tooling**
   - Files have spaces, capitalization, parentheses, and no `.md` extension.
   - For future code generation, kebab-case Markdown filenames are easier to reference consistently.

## Proposed folder structure

```text
docs/
  README.md
  REORGANIZATION_PLAN.md

  00-overview/
    chatbase-overview.md
    getting-started.md
    developer-overview.md
    models-comparison.md
    response-quality.md

  01-frontend-integration/
    embed-widget/
      javascript-embed-script.md
      widget-control.md
      widgets-overview.md
      ai-widget-builder.md
      custom-initial-messages.md
      floating-initial-messages.md
      custom-button.md
      identity-verification.md
      user-conversations.md
    custom-frontend/
      client-actions.md
      client-side-custom-actions.md
      client-side-custom-forms.md
      event-listeners.md
      streaming.md
      states.md
      data-display.md
      form-inputs.md
      interactive.md
      layout.md
      media-visual.md
      text.md
      code-editor.md
    platform-embeds/
      bubble.md
      framer.md
      webflow.md
      weebly.md
      wix.md
      wordpress.md

  02-knowledge-and-rag/
    data-sources.md
    web-search.md

  03-actions-and-automation/
    custom-actions/
      README.md
      custom-action.md
      functions.md
      submit-tool-result.md
      # Cross-link, do not duplicate: client-actions, client-side-custom-actions,
      # client-side-custom-forms, and states remain canonical under custom-frontend.
    integrations/
      cal-com.md
      calendly.md
      salesforce-actions.md
      shopify-actions.md
      stripe-actions.md
      vercel.md
      viasocket.md
      zapier.md

  04-api-reference/
    overview.md
    authentication.md
    pagination.md
    error-handling.md
    health-check.md
    chatbots/
      get-all-chatbots.md
      create-a-new-chatbot.md
      update-a-chatbot.md
      delete-a-chatbot.md
      update-chatbot-settings.md
      upload-chatbot-icon.md
      upload-chatbot-profile-picture.md
    conversations/
      chat-with-a-chatbot.md
      chat-with-an-agent.md
      get-a-conversation.md
      get-conversations-for-a-chatbot.md
      list-conversations.md
      list-conversation-messages.md
      list-conversations-for-a-user.md
      retry-a-message.md
      update-message-feedback.md
    leads-and-contacts/
      contacts-overview.md
      collect-leads.md
      get-leads-for-a-chatbot.md

  05-analytics-and-operations/
    activity.md
    analytics.md
    usage.md
    settings.md
    manage.md
    two-factor-authentication.md

  06-channels/
    instagram.md
    messenger.md
    slack.md
    twilio-phone.md
    whatsapp.md
    whatsapp-templates.md
    escalate-to-human.md

  07-frontend-use-cases/
    tourism-chatbot/
      README.md
      requirements-template.md
      ui-patterns.md
    municipality-chatbot/
      README.md
      requirements-template.md
      ui-patterns.md
    news-support-app/
      README.md
      requirements-template.md
      ui-patterns.md
    voice-guide-interface/
      README.md
      requirements-template.md
      ui-patterns.md

  99-archive-or-cross-cutting/
    mixed-topic-review.md
```

## File move and rename proposal

| Current file | Proposed destination | Primary category | Notes |
| --- | --- | --- | --- |
| `README.md` | `docs/README.md` | Overview | Keep a short root README later that links into `docs/`. |
| `Overview` | `docs/00-overview/chatbase-overview.md` | Chatbase overview | Mixed: current content appears to describe actions more than a general overview; review whether to rename to `actions-overview.md` instead. |
| `Getting Started` | `docs/00-overview/getting-started.md` | Chatbase overview | Keep near product onboarding and security notes. |
| `Developer Overview` | `docs/00-overview/developer-overview.md` | Custom frontend integration | Also cross-link from `01-frontend-integration/README.md` after directories are created. |
| `Models Comparison` | `docs/00-overview/models-comparison.md` | Chatbase overview | Useful when choosing chatbot behavior for frontend use cases. |
| `Response Quality` | `docs/00-overview/response-quality.md` | Sources / RAG / knowledge base | Cross-link from `02-knowledge-and-rag/README.md`. |
| `JavaScript Embed Script` | `docs/01-frontend-integration/embed-widget/javascript-embed-script.md` | Embed widget | Core browser embed reference. |
| `Widget Control` | `docs/01-frontend-integration/embed-widget/widget-control.md` | Embed widget | Programmatic widget methods. |
| `Widgets Overview` | `docs/01-frontend-integration/embed-widget/widgets-overview.md` | Embed widget | Widget concepts and action connection overview. |
| `AI Widget Builder` | `docs/01-frontend-integration/embed-widget/ai-widget-builder.md` | Embed widget | Builder workflow; useful for rapid frontend prototypes. |
| `Custom Initial Messages` | `docs/01-frontend-integration/embed-widget/custom-initial-messages.md` | Suggested messages | Treat as suggested/initial message UX. |
| `Floating Initial Messages` | `docs/01-frontend-integration/embed-widget/floating-initial-messages.md` | Suggested messages | Treat as suggested/initial message UX. |
| `Custom Button` | `docs/01-frontend-integration/embed-widget/custom-button.md` | Embed widget | Widget CTA customization. |
| `Identity Verification` | `docs/01-frontend-integration/embed-widget/identity-verification.md` | Custom frontend integration | Security-sensitive frontend identity integration. |
| `User Conversations` | `docs/01-frontend-integration/embed-widget/user-conversations.md` | Conversations API | Frontend continuation/listing patterns; cross-link from API conversations. |
| `Client Actions` | `docs/01-frontend-integration/custom-frontend/client-actions.md` | Custom frontend integration | Also relevant to Custom Actions; duplicate only as a link, not as a second physical file. |
| `Client-Side Custom Actions` | `docs/01-frontend-integration/custom-frontend/client-side-custom-actions.md` | Custom Actions | Also belongs in custom actions index. |
| `Client-Side Custom Forms` | `docs/01-frontend-integration/custom-frontend/client-side-custom-forms.md` | Custom Actions | Mixed frontend forms + action flow; may later split into form UI and action orchestration. |
| `Event Listeners` | `docs/01-frontend-integration/custom-frontend/event-listeners.md` | Custom frontend integration | Frontend event hooks. |
| `Streaming` | `docs/01-frontend-integration/custom-frontend/streaming.md` | Conversations API | Frontend streaming behavior; cross-link from API conversations. |
| `States` | `docs/01-frontend-integration/custom-frontend/states.md` | Function call rules | State-driven UI/action behavior; cross-link from actions. |
| `Data Display` | `docs/01-frontend-integration/custom-frontend/data-display.md` | Custom frontend integration | UI component reference. |
| `Form Inputs` | `docs/01-frontend-integration/custom-frontend/form-inputs.md` | Custom frontend integration | UI component reference. |
| `Interactive` | `docs/01-frontend-integration/custom-frontend/interactive.md` | Custom frontend integration | UI component reference. |
| `Layout` | `docs/01-frontend-integration/custom-frontend/layout.md` | Custom frontend integration | UI component reference. |
| `Media & Visual` | `docs/01-frontend-integration/custom-frontend/media-visual.md` | Custom frontend integration | Rename `&` to `and` or omit conjunction for filename safety. |
| `Text` | `docs/01-frontend-integration/custom-frontend/text.md` | Custom frontend integration | UI component reference. |
| `Code Editor` | `docs/01-frontend-integration/custom-frontend/code-editor.md` | Custom frontend integration | Developer-facing editing/variable reference. |
| `Bubble` | `docs/01-frontend-integration/platform-embeds/bubble.md` | Embed widget | Low-code embed guide. |
| `Framer` | `docs/01-frontend-integration/platform-embeds/framer.md` | Embed widget | Low-code embed guide. |
| `Webflow` | `docs/01-frontend-integration/platform-embeds/webflow.md` | Embed widget | Low-code embed guide. |
| `Weebly` | `docs/01-frontend-integration/platform-embeds/weebly.md` | Embed widget | Low-code embed guide. |
| `Wix` | `docs/01-frontend-integration/platform-embeds/wix.md` | Embed widget | Low-code embed guide. |
| `WordPress` | `docs/01-frontend-integration/platform-embeds/wordpress.md` | Embed widget | CMS embed guide. |
| `Data sources` | `docs/02-knowledge-and-rag/data-sources.md` | Sources / RAG / knowledge base | Main knowledge-base ingestion reference. |
| `Web Search` | `docs/02-knowledge-and-rag/web-search.md` | Sources / RAG / knowledge base | Runtime web-search source behavior. |
| `Custom Action` | `docs/03-actions-and-automation/custom-actions/custom-action.md` | Custom Actions | Core server-side custom action configuration. |
| `Functions` | `docs/03-actions-and-automation/custom-actions/functions.md` | Function call rules | Function/UI flow rules. |
| `Submit a tool result` | `docs/03-actions-and-automation/custom-actions/submit-tool-result.md` | Function call rules | API companion for tool execution. |
| `Cal.com` | `docs/03-actions-and-automation/integrations/cal-com.md` | Custom Actions | Scheduling action/integration. |
| `Calendly` | `docs/03-actions-and-automation/integrations/calendly.md` | Custom Actions | Scheduling action/integration. |
| `Salesforce Actions` | `docs/03-actions-and-automation/integrations/salesforce-actions.md` | Custom Actions | CRM action integration. |
| `Shopify Actions` | `docs/03-actions-and-automation/integrations/shopify-actions.md` | Custom Actions | Commerce action integration. |
| `Stripe Actions` | `docs/03-actions-and-automation/integrations/stripe-actions.md` | Custom Actions | Billing action integration. |
| `Vercel` | `docs/03-actions-and-automation/integrations/vercel.md` | Custom Actions | Mixed deployment/integration content; review later for possible split. |
| `ViaSocket` | `docs/03-actions-and-automation/integrations/viasocket.md` | Custom Actions | Automation integration. |
| `Zapier` | `docs/03-actions-and-automation/integrations/zapier.md` | Custom Actions | Automation integration. |
| `API v2 Overview` | `docs/04-api-reference/overview.md` | Conversations API | Overall REST API reference. |
| `Authentication` | `docs/04-api-reference/authentication.md` | Conversations API | API auth. |
| `Pagination` | `docs/04-api-reference/pagination.md` | Conversations API | API pagination. |
| `Error Handling` | `docs/04-api-reference/error-handling.md` | Conversations API | API errors. |
| `Health check` | `docs/04-api-reference/health-check.md` | Conversations API | API health endpoint. |
| `Get all chatbots` | `docs/04-api-reference/chatbots/get-all-chatbots.md` | Conversations API | Chatbot management endpoint. |
| `Create a new chatbot` | `docs/04-api-reference/chatbots/create-a-new-chatbot.md` | Conversations API | Chatbot management endpoint. |
| `Update a chatbot` | `docs/04-api-reference/chatbots/update-a-chatbot.md` | Conversations API | Chatbot management endpoint. |
| `Delete a chatbot` | `docs/04-api-reference/chatbots/delete-a-chatbot.md` | Conversations API | Chatbot management endpoint. |
| `Update chatbot settings` | `docs/04-api-reference/chatbots/update-chatbot-settings.md` | Conversations API | Chatbot settings endpoint. |
| `Upload chatbot icon` | `docs/04-api-reference/chatbots/upload-chatbot-icon.md` | Conversations API | Chatbot media endpoint. |
| `Upload chatbot profile picture` | `docs/04-api-reference/chatbots/upload-chatbot-profile-picture.md` | Conversations API | Chatbot media endpoint. |
| `Chat with a chatbot` | `docs/04-api-reference/conversations/chat-with-a-chatbot.md` | Conversations API | Core app-to-chatbot API. |
| `Chat with an agent` | `docs/04-api-reference/conversations/chat-with-an-agent.md` | Conversations API | Agent conversation API. |
| `Get a conversation` | `docs/04-api-reference/conversations/get-a-conversation.md` | Conversations API | Conversation retrieval. |
| `Get conversations for a chatbot` | `docs/04-api-reference/conversations/get-conversations-for-a-chatbot.md` | Conversations API | Chatbot conversation listing. |
| `List conversations` | `docs/04-api-reference/conversations/list-conversations.md` | Conversations API | Conversation listing. |
| `List conversation messages` | `docs/04-api-reference/conversations/list-conversation-messages.md` | Conversations API | Message listing. |
| `List conversations for a user` | `docs/04-api-reference/conversations/list-conversations-for-a-user.md` | Conversations API | User conversation listing. |
| `Retry a message` | `docs/04-api-reference/conversations/retry-a-message.md` | Conversations API | Conversation retry endpoint. |
| `Update message feedback` | `docs/04-api-reference/conversations/update-message-feedback.md` | Conversations API | Feedback endpoint. |
| `Contacts Overview` | `docs/04-api-reference/leads-and-contacts/contacts-overview.md` | Conversations API | Contacts concept. |
| `Collect Leads` | `docs/04-api-reference/leads-and-contacts/collect-leads.md` | Conversations API | Lead collection. |
| `Get leads for a chatbot` | `docs/04-api-reference/leads-and-contacts/get-leads-for-a-chatbot.md` | Conversations API | Leads endpoint. |
| `Activity` | `docs/05-analytics-and-operations/activity.md` | Activity logs / analytics | Chat logs, confidence scores, leads, and export flow. |
| `Analytics` | `docs/05-analytics-and-operations/analytics.md` | Activity logs / analytics | Chat/topic/sentiment analytics. |
| `Usage` | `docs/05-analytics-and-operations/usage.md` | Activity logs / analytics | Usage reporting. |
| `Settings` | `docs/05-analytics-and-operations/settings.md` | Activity logs / analytics | Workspace settings; some auth/admin overlap. |
| `Manage` | `docs/05-analytics-and-operations/manage.md` | Activity logs / analytics | Workspace and agent management. |
| `Two-factor authentication (2FA)` | `docs/05-analytics-and-operations/two-factor-authentication.md` | Chatbase overview | Account security operations. |
| `Instagram` | `docs/06-channels/instagram.md` | Custom frontend integration | Social channel integration. |
| `Messenger` | `docs/06-channels/messenger.md` | Custom frontend integration | Social channel integration. |
| `Slack` | `docs/06-channels/slack.md` | Custom frontend integration | Team messaging integration. |
| `Twilio (Phone)` | `docs/06-channels/twilio-phone.md` | Custom frontend integration | Voice/phone channel; cross-link from voice guide use case. |
| `WhatsApp` | `docs/06-channels/whatsapp.md` | Multilingual UI | Messaging channel; cross-link from municipality/tourism use cases. |
| `WhatsApp Templates` | `docs/06-channels/whatsapp-templates.md` | Multilingual UI | Template messaging guide. |
| `Escalate to Human` | `docs/06-channels/escalate-to-human.md` | Custom frontend integration | Human handoff concept used across channels. |

## Category coverage for future frontend work

- **Chatbase overview:** `00-overview/`
- **Embed widget:** `01-frontend-integration/embed-widget/` and `01-frontend-integration/platform-embeds/`
- **Custom frontend integration:** `01-frontend-integration/custom-frontend/`
- **Sources / RAG / knowledge base:** `02-knowledge-and-rag/`
- **Custom Actions:** `03-actions-and-automation/custom-actions/` plus integration actions
- **Function call rules:** `Functions`, `States`, and `Submit a tool result` under `03-actions-and-automation/custom-actions/`
- **Conversations API:** `04-api-reference/conversations/`
- **Activity logs / analytics:** `05-analytics-and-operations/`
- **Suggested messages:** `Custom Initial Messages` and `Floating Initial Messages` under embed widget docs
- **Multilingual UI:** create a future guide under each use case; cross-link WhatsApp/channel docs and data-source language notes
- **Tourism chatbot use cases:** future `07-frontend-use-cases/tourism-chatbot/`
- **Municipality chatbot use cases:** future `07-frontend-use-cases/municipality-chatbot/`
- **News app use cases:** future `07-frontend-use-cases/news-support-app/`
- **Voice guide interfaces:** future `07-frontend-use-cases/voice-guide-interface/`

## Suggested filename conventions

When the plan is approved, rename files during the move using these rules:

1. Add `.md` extension to every documentation file.
2. Use lowercase kebab-case.
3. Replace spaces with hyphens.
4. Remove or normalize punctuation:
   - `Media & Visual` -> `media-visual.md`
   - `Twilio (Phone)` -> `twilio-phone.md`
   - `Two-factor authentication (2FA)` -> `two-factor-authentication.md`
   - `Cal.com` -> `cal-com.md`
5. Prefer endpoint-oriented filenames for API docs, e.g. `chat-with-a-chatbot.md`.

## Mixed-topic files to review later, without splitting now

| File | Why it may be mixed | Suggested later split |
| --- | --- | --- |
| `Overview` | Appears to be more about AI actions than a general product overview. | Split into `00-overview/chatbase-overview.md` and `03-actions-and-automation/custom-actions/overview.md` if the content supports both. |
| `Developer Overview` | Covers embed, REST API, and common integration patterns. | Keep as overview, but add cross-links into embed, custom frontend, and API sections. |
| `Client-Side Custom Forms` | Combines form UI, validation, and custom action execution. | Split into frontend form components vs. action orchestration if future implementation needs finer references. |
| `Streaming` | API transport details and frontend rendering behavior are both relevant. | Keep one file initially; later split API protocol from UI streaming patterns if needed. |
| `States` | Useful for frontend conditional UI and for function/action rules. | Keep one source of truth and cross-link from both frontend and actions indexes. |
| `Vercel` | Contains deployment, marketplace, and integration material. | Split deployment notes from action/integration notes if frontend app deployment docs grow. |
| `Settings` | Workspace settings, member settings, and operational settings may not all belong together. | Split account/workspace/admin subsections if operations docs expand. |
| `WhatsApp` / `WhatsApp Templates` | Channel setup plus lead collection/template messaging. | Keep under channels, then cross-link from multilingual/tourism/municipality use-case docs. |

## Proposed use-case documentation templates to add later

The current corpus does not include dedicated documents for the requested use cases. After the move is approved, add lightweight frontend planning documents under `07-frontend-use-cases/`:

### Tourism chatbot

- Visitor intent examples: attractions, restaurants, routes, opening hours, ticketing, accessibility.
- Frontend patterns: map cards, itinerary cards, multilingual suggested prompts, location-aware quick actions.
- Chatbase docs to reference: embed widget, suggested messages, data sources, web search, custom actions, WhatsApp, Twilio/voice.

### Municipality chatbot

- Resident intent examples: trash collection, forms, permits, emergency notices, public facilities, multilingual support.
- Frontend patterns: service category buttons, office/contact cards, escalation to human, confidence/error fallback.
- Chatbase docs to reference: data sources, conversations API, analytics/activity, human handoff, WhatsApp, suggested messages.

### News support app

- User intent examples: article Q&A, subscription support, archive search, breaking-news explainers.
- Frontend patterns: article context injection, source citations, topic chips, feedback controls, streaming responses.
- Chatbase docs to reference: conversations API, streaming, message feedback, data sources, web search, analytics.

### Voice guide interface

- User intent examples: hands-free tour guide, phone guide, kiosk voice UI, accessibility companion.
- Frontend patterns: push-to-talk, transcript panel, audio state indicators, fallback text chat, call handoff.
- Chatbase docs to reference: Twilio phone, conversations API, streaming, custom actions, human escalation.

## Recommended next steps after review

1. Confirm whether the root-level files should be treated as the source `docs` corpus.
2. Approve or adjust the proposed folder taxonomy.
3. Move files into the approved directories without changing document bodies except for filenames and path references.
4. Add `docs/README.md` as a navigation index for Codex and human developers.
5. Add use-case template files under `07-frontend-use-cases/`.
6. Optionally add a migration script or checklist to verify that every original root doc has exactly one new canonical location.
