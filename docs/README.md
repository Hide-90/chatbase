# Chatbase Documentation Index

This directory contains the reorganized Chatbase documentation for future frontend development. The source documents were moved from the repository root into topic-based directories and renamed to lowercase kebab-case Markdown filenames.

The root `README.md` was intentionally left at the repository root because it is repository-level metadata. No application code, configuration, package, license, GitHub, or repository-management files were moved.

## Structure

| Directory | Purpose |
| --- | --- |
| [`00-overview/`](00-overview/) | General Chatbase onboarding, model choice, and response quality references. |
| [`01-frontend-integration/`](01-frontend-integration/) | Embed widget, custom frontend integration, UI building blocks, and platform embed guides. |
| [`02-knowledge-and-rag/`](02-knowledge-and-rag/) | Data sources, knowledge base, and web search/RAG-related references. |
| [`03-actions-and-automation/`](03-actions-and-automation/) | Custom Actions, function/tool result behavior, and automation or commerce integrations. |
| [`04-api-reference/`](04-api-reference/) | API authentication, pagination, chatbot endpoints, conversation endpoints, and leads/contact endpoints. |
| [`05-analytics-and-operations/`](05-analytics-and-operations/) | Activity logs, analytics, usage, workspace management, and account operations. |
| [`06-channels/`](06-channels/) | Messaging, social, phone, Slack, and human handoff channel references. |
| [`07-frontend-use-cases/`](07-frontend-use-cases/) | Reserved for future tourism, municipality, news support, and voice guide frontend use-case notes. |
| [`99-needs-review/`](99-needs-review/) | Mixed-topic documents that should be reviewed before splitting or assigning a final canonical location. |

## High-value paths for frontend work

- Embed widget integration: [`01-frontend-integration/embed-widget/`](01-frontend-integration/embed-widget/)
- Custom frontend integration: [`01-frontend-integration/custom-frontend/`](01-frontend-integration/custom-frontend/)
- Platform-specific embeds: [`01-frontend-integration/platform-embeds/`](01-frontend-integration/platform-embeds/)
- Knowledge/RAG: [`02-knowledge-and-rag/`](02-knowledge-and-rag/)
- Custom Actions and integrations: [`03-actions-and-automation/`](03-actions-and-automation/)
- Conversations API: [`04-api-reference/conversations/`](04-api-reference/conversations/)
- Analytics and activity logs: [`05-analytics-and-operations/`](05-analytics-and-operations/)

## Reorganization notes

- The approved plan is preserved in [`REORGANIZATION_PLAN.md`](REORGANIZATION_PLAN.md).
- Mixed-topic files were moved to [`99-needs-review/`](99-needs-review/) instead of being split.
- Original document bodies were preserved. Existing absolute links to Chatbase documentation paths were left unchanged unless a link was clearly local to this repository.
