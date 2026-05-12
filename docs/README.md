# Chatbase Documentation Index

This directory contains the reorganized Chatbase documentation for future frontend development. The source documents were moved from the repository root into topic-based directories and renamed to lowercase kebab-case Markdown filenames.

The root `README.md` was intentionally left at the repository root because it is repository-level metadata. No application code, configuration, package, license, GitHub, or repository-management files were moved.

## Structure

| Directory | Purpose |
| --- | --- |
| [`00-overview/`](00-overview/) | General Chatbase onboarding, developer orientation, model choice, and response quality references. |
| [`01-frontend-integration/`](01-frontend-integration/) | Embed widget, custom frontend integration, UI building blocks, and platform embed guides. |
| [`02-knowledge-and-rag/`](02-knowledge-and-rag/) | Data sources, knowledge base, and web search/RAG-related references. |
| [`03-actions-and-automation/`](03-actions-and-automation/) | Actions overview, Custom Actions, function/tool result behavior, and automation or commerce integrations. |
| [`04-api-reference/`](04-api-reference/) | API authentication, pagination, chatbot endpoints, conversation endpoints, streaming, and leads/contact endpoints. |
| [`05-analytics-and-operations/`](05-analytics-and-operations/) | Activity logs, analytics, usage, workspace management, settings, and account operations. |
| [`06-channels/`](06-channels/) | Messaging, social, phone, WhatsApp, Slack, and human handoff channel references. |
| [`07-frontend-use-cases/`](07-frontend-use-cases/) | Reserved for future tourism, municipality, news support, and voice guide frontend use-case notes. |
| [`99-needs-review/`](99-needs-review/) | Historical review and management notes from the documentation reorganization. |

## High-value paths for frontend work

- Developer orientation: [`00-overview/developer-overview.md`](00-overview/developer-overview.md)
- Embed widget integration: [`01-frontend-integration/embed-widget/`](01-frontend-integration/embed-widget/)
- Custom frontend integration: [`01-frontend-integration/custom-frontend/`](01-frontend-integration/custom-frontend/)
- Client-side custom forms: [`01-frontend-integration/custom-frontend/client-side-custom-forms.md`](01-frontend-integration/custom-frontend/client-side-custom-forms.md)
- Widget states: [`01-frontend-integration/custom-frontend/states.md`](01-frontend-integration/custom-frontend/states.md)
- Platform-specific embeds: [`01-frontend-integration/platform-embeds/`](01-frontend-integration/platform-embeds/)
- Knowledge/RAG: [`02-knowledge-and-rag/`](02-knowledge-and-rag/)
- Actions overview: [`03-actions-and-automation/actions-overview.md`](03-actions-and-automation/actions-overview.md)
- Custom Actions and integrations: [`03-actions-and-automation/`](03-actions-and-automation/)
- Conversations API and streaming: [`04-api-reference/conversations/`](04-api-reference/conversations/)
- Analytics, operations, and settings: [`05-analytics-and-operations/`](05-analytics-and-operations/)
- Channels and WhatsApp: [`06-channels/`](06-channels/)

## Reorganization notes

- The approved plan is preserved in [`REORGANIZATION_PLAN.md`](REORGANIZATION_PLAN.md).
- The needs-review cleanup history is preserved in [`99-needs-review/REVIEW_PLAN.md`](99-needs-review/REVIEW_PLAN.md).
- Original document bodies were preserved. Existing absolute links to Chatbase documentation paths were left unchanged unless a link was clearly local to this repository.
