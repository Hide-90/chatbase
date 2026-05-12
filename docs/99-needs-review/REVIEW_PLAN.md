# Needs-Review Documentation Review Plan

## Scope

This review covers the documents originally staged in `docs/99-needs-review/`. All originally reviewed content files have now been moved to their recommended final categories without content rewrites. Only the needs-review management files remain in this folder.

## Executive summary

| File | Current status | Recommended final location | Split later? | Priority |
| --- | --- | --- | --- | --- |
| `developer-overview.md` | Moved | `docs/00-overview/developer-overview.md` | No, but cross-link heavily | High |
| `streaming.md` | Moved | `docs/04-api-reference/conversations/streaming.md` | Optional later | High |
| `states.md` | Moved | `docs/01-frontend-integration/custom-frontend/states.md` | No | High |
| `settings.md` | Moved | `docs/05-analytics-and-operations/settings.md` | Optional later | High |
| `client-side-custom-forms.md` | Moved | `docs/01-frontend-integration/custom-frontend/client-side-custom-forms.md` | Optional later | High |
| `overview.md` | Moved | `docs/03-actions-and-automation/actions-overview.md` | Yes | Medium |
| `vercel.md` | Moved | `docs/03-actions-and-automation/integrations/vercel.md` | Optional later | Medium |
| `whatsapp.md` | Moved | `docs/06-channels/whatsapp.md` | Optional later | Medium |
| `whatsapp-templates.md` | Moved | `docs/06-channels/whatsapp-templates.md` | No | Medium |
| `README.md` | Still in needs-review as index | `docs/99-needs-review/README.md` | No | Low |

## Move status update

### Moved reviewed files

The following reviewed content files have been moved and should no longer be treated as active `99-needs-review` documents:

| Original path | New path | Content changes |
| --- | --- | --- |
| `docs/99-needs-review/developer-overview.md` | `docs/00-overview/developer-overview.md` | None |
| `docs/99-needs-review/streaming.md` | `docs/04-api-reference/conversations/streaming.md` | None |
| `docs/99-needs-review/states.md` | `docs/01-frontend-integration/custom-frontend/states.md` | None |
| `docs/99-needs-review/settings.md` | `docs/05-analytics-and-operations/settings.md` | None |
| `docs/99-needs-review/client-side-custom-forms.md` | `docs/01-frontend-integration/custom-frontend/client-side-custom-forms.md` | None |
| `docs/99-needs-review/overview.md` | `docs/03-actions-and-automation/actions-overview.md` | None |
| `docs/99-needs-review/vercel.md` | `docs/03-actions-and-automation/integrations/vercel.md` | None |
| `docs/99-needs-review/whatsapp.md` | `docs/06-channels/whatsapp.md` | None |
| `docs/99-needs-review/whatsapp-templates.md` | `docs/06-channels/whatsapp-templates.md` | None |

### Remaining files in `docs/99-needs-review/`

Only management files remain in `docs/99-needs-review/`:

- `README.md`
- `REVIEW_PLAN.md`

No reviewed content files remain in this folder.

### Link TODOs introduced or exposed by the move

All previously deferred README relative links have been resolved in the README/link-maintenance pass. No known repository-local relative Markdown links are intentionally left broken.

## Review criteria

For each file, this plan evaluates:

- Main topic.
- Why the file was ambiguous.
- Recommended final location.
- Whether it should be split later.
- Relevance to custom frontend development.
- Relevance to Google AI Studio prompt generation.

## File-by-file recommendations

### `developer-overview.md`

| Field | Review |
| --- | --- |
| Main topic | High-level developer entry point for choosing between JavaScript embed, REST API, API v2, and common integration patterns. |
| Why it was ambiguous | It spans several categories: overview, embed widget, REST/API integration, identity verification, custom actions, analytics, and use-case patterns. It is not a single implementation reference. |
| Recommended final location | `docs/00-overview/developer-overview.md`. This should be the canonical developer orientation page and should link out to frontend, API, actions, and knowledge/RAG sections. |
| Should it be split? | No. Keep it as a routing/orientation document. Do not duplicate the detailed embed/API/action content here. |
| Custom frontend relevance | Very high. It helps Codex choose whether to build with the JavaScript embed, a custom chat UI via API, or a hybrid approach with identity verification and actions. |
| Google AI Studio prompt relevance | High. Useful for generating planning prompts that ask a model to choose an integration path, identify required Chatbase capabilities, and produce architecture-level recommendations. Do not turn it into prompts yet. |
| Later cleanup notes | Add relative links to `../01-frontend-integration/`, `../04-api-reference/`, `../03-actions-and-automation/`, and `../02-knowledge-and-rag/` after moving. |

### `streaming.md`

| Field | Review |
| --- | --- |
| Main topic | Chatbase API v2 Server-Sent Events streaming protocol, request fields, event types, metadata, code examples, and non-streaming fallback. |
| Why it was ambiguous | It is both an API transport reference and a frontend rendering concern. Frontend apps need it for token-by-token UI updates, but the canonical content is protocol/API behavior. |
| Recommended final location | `docs/04-api-reference/conversations/streaming.md`. Add a cross-link from `docs/01-frontend-integration/custom-frontend/README.md` or a future streaming UI guide. |
| Should it be split? | Optional later. Keep one canonical API reference now. Later, extract frontend rendering guidance into `docs/01-frontend-integration/custom-frontend/streaming-ui-patterns.md` only if frontend-specific examples grow. |
| Custom frontend relevance | Very high. It informs streaming chat rendering, progressive response display, handling `tool-input-available`, preserving `conversationId`, and fallbacks for non-streaming mode. |
| Google AI Studio prompt relevance | High. Useful context for prompts that ask Google AI Studio to generate custom chat UI requirements, event-handling pseudocode, or frontend state diagrams for streaming conversations. Do not generate prompts yet. |
| Later cleanup notes | Preserve API event details in API reference; add frontend-oriented examples elsewhere rather than overloading this file. |

### `states.md`

| Field | Review |
| --- | --- |
| Main topic | Conditional widget UI states for showing/hiding UI sections based on data values and condition rules. |
| Why it was ambiguous | It is related to function/action output rules, but the document is actually about widget builder/runtime UI visibility. |
| Recommended final location | `docs/01-frontend-integration/custom-frontend/states.md`. Cross-link from `docs/03-actions-and-automation/custom-actions/README.md` because action output can drive widget state. |
| Should it be split? | No. The topic is cohesive and should remain a single custom frontend/widget-state reference. |
| Custom frontend relevance | Very high. It directly supports flexible chatbot frontends with conditional UI for loading states, logged-in user states, data availability, error states, and role-based displays. |
| Google AI Studio prompt relevance | High. Useful for prompts that ask a model to design conditional UI states or generate a state matrix for tourism, municipality, news, or voice-guide chatbot widgets. Do not create those prompts yet. |
| Later cleanup notes | Add examples tied to concrete frontend use cases later, but keep the core state semantics here. |

### `settings.md`

| Field | Review |
| --- | --- |
| Main topic | Workspace settings: general workspace info, members, roles, invitations, plans, add-ons, billing, API keys, and audit logs. |
| Why it was ambiguous | It mixes admin operations, billing, security, API key management, and audit-log/analytics concerns. It is not a frontend implementation guide, but it affects operational readiness. |
| Recommended final location | `docs/05-analytics-and-operations/settings.md`. This is primarily operational/admin documentation. |
| Should it be split? | Optional later. If the operations section grows, split into `workspace-settings.md`, `billing-and-plans.md`, `api-keys.md`, and `audit-logs.md`. Do not split yet. |
| Custom frontend relevance | Medium. Frontend developers need awareness of API keys, permissions, custom domains, branding removal, and audit logs, but should not treat this as application code guidance. |
| Google AI Studio prompt relevance | Medium. Useful for prompts that generate deployment checklists, environment/access assumptions, or admin prerequisites for frontend projects. Avoid using billing or secrets details in generated prompts. |
| Later cleanup notes | Add security warnings around API key handling if this file becomes part of frontend onboarding. |

### `client-side-custom-forms.md`

| Field | Review |
| --- | --- |
| Main topic | Browser-side form registration for Chatbase client-side custom forms, including form schemas, field types, validation rules, complete examples, webhooks, and troubleshooting. |
| Why it was ambiguous | It combines frontend schema design, client action/function behavior, validation, UX patterns, webhook processing, and troubleshooting. It is both UI and action orchestration documentation. |
| Recommended final location | `docs/01-frontend-integration/custom-frontend/client-side-custom-forms.md`. Cross-link from `docs/03-actions-and-automation/custom-actions/README.md`. |
| Should it be split? | Optional later. Keep it together now. If it grows, split into `client-side-custom-forms.md` for setup/API and `form-schema-reference.md` for field/validation schema details. |
| Custom frontend relevance | Very high. It is directly relevant for flexible frontends that collect tourism inquiries, municipal service requests, news-support details, lead information, or voice-guide feedback through structured forms. |
| Google AI Studio prompt relevance | Very high. Useful context for future prompts that ask a model to design form schemas, validation rules, field labels, and submission flows for specific chatbot use cases. Do not generate prompts yet. |
| Later cleanup notes | Add explicit examples for multilingual labels and accessibility only in a future content pass. |

### `overview.md`

| Field | Review |
| --- | --- |
| Main topic | Overview of AI actions and action types, including Custom Action, Stripe, Slack, Custom Button, Calendly/Cal.com, Web Search, Collect Leads, and related action use cases. |
| Why it was ambiguous | The filename says generic `overview`, but the content is an actions overview. It also mentions several specific integrations that have separate files. |
| Recommended final location | `docs/03-actions-and-automation/actions-overview.md`. If the custom-actions directory needs a narrower overview, add a short `docs/03-actions-and-automation/custom-actions/README.md` link to it. |
| Should it be split? | Yes, later. Keep the high-level action taxonomy in `actions-overview.md`, then move integration-specific deep details to the corresponding integration files if duplicated. |
| Custom frontend relevance | High. Actions determine what a frontend must render or trigger: buttons, forms, booking flows, lead collection, billing lookups, and real-time search results. |
| Google AI Studio prompt relevance | High. Useful for future prompts that classify required Chatbase actions for a use case and ask for an action inventory. Do not create prompts yet. |
| Later cleanup notes | Rename clearly because `overview.md` is too generic and can confuse Codex retrieval. |

### `vercel.md`

| Field | Review |
| --- | --- |
| Main topic | Installing and managing Chatbase through Vercel Marketplace, configuring a chatbot, connecting it to Vercel projects, redeploying, subscriptions, troubleshooting, and response-quality optimization. |
| Why it was ambiguous | It combines platform integration, deployment flow, subscription management, environment-specific chatbot setup, and response quality guidance. |
| Recommended final location | `docs/03-actions-and-automation/integrations/vercel.md` for now, because it is primarily a third-party platform integration/deployment guide. Cross-link from future deployment docs if created. |
| Should it be split? | Optional later. If deployment documentation grows, split deployment details into a future `docs/08-deployment/vercel.md` and keep marketplace integration details under integrations. |
| Custom frontend relevance | Medium-high. Useful when deploying Chatbase-enabled frontend apps on Vercel or binding different chatbots to different environments. |
| Google AI Studio prompt relevance | Medium. Useful for prompts that generate deployment checklists or environment setup steps, but less useful for UI generation. Do not create prompts yet. |
| Later cleanup notes | Avoid mixing subscription-plan instructions with frontend deployment guidance in future generated docs. |

### `whatsapp.md`

| Field | Review |
| --- | --- |
| Main topic | WhatsApp integration setup, prerequisites, connecting Meta/Facebook assets, selecting phone numbers, and automatic lead collection. |
| Why it was ambiguous | It combines channel setup, permissions, lead collection, and operational configuration. It also intersects with multilingual and municipality/tourism use cases. |
| Recommended final location | `docs/06-channels/whatsapp.md`. Cross-link from future tourism and municipality use-case docs. |
| Should it be split? | Optional later. Keep one file now. If channel docs grow, split into `whatsapp-setup.md` and `whatsapp-lead-collection.md`. |
| Custom frontend relevance | Medium. It is not web frontend code, but it affects omnichannel chatbot frontend strategy and handoff between web and WhatsApp. |
| Google AI Studio prompt relevance | Medium-high. Useful for future prompts that design multilingual or channel-specific conversation flows for tourism and municipality chatbots. Do not create prompts yet. |
| Later cleanup notes | Add cross-links to leads/contact docs and multilingual use-case docs when those docs exist. |

### `whatsapp-templates.md`

| Field | Review |
| --- | --- |
| Main topic | Creating WhatsApp templates in Meta, submitting them for review, and sending approved templates from Chatbase Helpdesk after the 24-hour window. |
| Why it was ambiguous | It is both channel operations and Helpdesk messaging policy guidance. However, the content is cohesive around WhatsApp templates. |
| Recommended final location | `docs/06-channels/whatsapp-templates.md`. |
| Should it be split? | No. Keep it as a single operational channel guide. |
| Custom frontend relevance | Low-medium. It does not guide web UI implementation, but it informs notification, re-engagement, and channel fallback requirements that a frontend may need to surface. |
| Google AI Studio prompt relevance | Medium. Useful for future prompts that ask for WhatsApp message-template requirements, re-engagement flows, or multilingual template planning. Do not create prompts yet. |
| Later cleanup notes | Keep Meta policy and pricing warnings as operational constraints, not frontend implementation details. |

### `README.md`

| Field | Review |
| --- | --- |
| Main topic | Index of mixed-topic files currently held for review. |
| Why it was ambiguous | It is not ambiguous content; it exists only because the needs-review folder exists. |
| Recommended final location | Keep at `docs/99-needs-review/README.md` until the folder is emptied. Remove or shrink it after all files are reassigned. |
| Should it be split? | No. |
| Custom frontend relevance | Low. It is navigational only. |
| Google AI Studio prompt relevance | Low. It can help tooling discover what is pending, but should not be used as prompt content. |
| Later cleanup notes | Update the file whenever documents move out of `99-needs-review/`. |

## Recommended next steps

1. Keep `docs/99-needs-review/` as a management and history folder only.
2. Add any new Chatbase body documentation to the appropriate topic directory under `docs/`, not to `99-needs-review/`.
3. Defer any content splitting until a dedicated content-editing pass.
4. Continue to avoid frontend code and Google AI Studio prompt generation during documentation maintenance passes.

## Notes for future Google AI Studio prompt generation

These files should be used as source context only after the documentation hierarchy is stable. Recommended usage later:

- Use `developer-overview.md` to choose an integration path.
- Use `streaming.md` to define streaming response and event-handling requirements.
- Use `states.md` to define conditional UI behavior and state matrices.
- Use `client-side-custom-forms.md` to derive structured form schemas and validation rules.
- Use `settings.md` only for prerequisites, permissions, and operational constraints.
- Use `whatsapp.md` and `whatsapp-templates.md` for channel-specific and multilingual messaging constraints.
- Use `overview.md` for action inventory and automation capability selection.
- Use `vercel.md` for deployment/environment setup constraints.

No prompts are created in this plan.
