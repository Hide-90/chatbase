import { FormEvent, useMemo, useState } from 'react';
import type { CivicRequestForm, MockAssistantResult, PortalMessage, QuickAction, RequestMetadata } from './types';

const defaultMetadata: RequestMetadata = {
  topic: 'general',
  department: 'Visitor Services',
  urgency: 'normal',
  channel: 'web-prototype',
  locale: 'en-US',
};

const quickActions: QuickAction[] = [
  {
    id: 'culture',
    label: 'Cultural highlights',
    prompt: 'Suggest cultural highlights for a first-time visitor who has two hours downtown.',
    description: 'Preview museums, heritage sites, public art, and walking routes.',
    metadata: {
      topic: 'culture',
      department: 'Visitor Services',
      urgency: 'low',
      channel: 'web-prototype',
      locale: 'en-US',
    },
  },
  {
    id: 'transport',
    label: 'Public transport info',
    prompt: 'How can visitors get from the central station to the waterfront without a car?',
    description: 'Demo transit, walking, accessibility, and visitor mobility guidance.',
    metadata: {
      topic: 'transport',
      department: 'Mobility Desk',
      urgency: 'normal',
      channel: 'web-prototype',
      locale: 'en-US',
    },
  },
  {
    id: 'food',
    label: 'Local food guide',
    prompt: 'Recommend local food areas for visitors who want casual lunch options.',
    description: 'Preview neighborhood food suggestions and visitor-friendly filtering.',
    metadata: {
      topic: 'food',
      department: 'Tourism Office',
      urgency: 'low',
      channel: 'web-prototype',
      locale: 'en-US',
    },
  },
  {
    id: 'events',
    label: 'Events calendar',
    prompt: 'Show me visitor-friendly events happening this weekend.',
    description: 'Demo municipal event discovery and calendar-style guidance.',
    metadata: {
      topic: 'events',
      department: 'Events Desk',
      urgency: 'low',
      channel: 'web-prototype',
      locale: 'en-US',
    },
  },
];

const initialMessages: PortalMessage[] = [
  {
    id: 'welcome-message',
    role: 'assistant',
    content:
      'Welcome to the CivicAI Portal municipal tourism demo. Ask about cultural highlights, public transport, local food, or visitor events. Responses are mocked for safe review.',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    metadata: defaultMetadata,
  },
];

const emptyForm: CivicRequestForm = {
  name: '',
  email: '',
  neighborhood: '',
  requestType: 'Trip planning question',
  details: '',
};

function createMessage(role: PortalMessage['role'], content: string, metadata?: RequestMetadata): PortalMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    role,
    content,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    metadata,
  };
}

function createMockAssistantResponse(message: string, metadata: RequestMetadata): MockAssistantResult {
  return {
    message: `Mock tourism response: I would route “${message}” to ${metadata.department} for visitor guidance. In a future Chatbase integration, this area can be replaced with a real assistant response, localized source references, maps, or tourism actions.`,
    metadata,
    actionSummary: `Placeholder action ready: ${metadata.department} / ${metadata.topic} / ${metadata.urgency}`,
  };
}

export default function App() {
  const [messages, setMessages] = useState<PortalMessage[]>(initialMessages);
  const [input, setInput] = useState('');
  const [form, setForm] = useState<CivicRequestForm>(emptyForm);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<RequestMetadata>(defaultMetadata);
  const [actionResult, setActionResult] = useState('No action/API placeholder has been triggered yet.');

  const hasUserMessages = useMemo(() => messages.some((message) => message.role === 'user'), [messages]);

  const submitMessage = (messageText: string, nextMetadata = metadata) => {
    const trimmed = messageText.trim();
    if (!trimmed || isLoading) {
      return;
    }

    setError(null);
    setInput('');
    setMetadata(nextMetadata);
    setMessages((current) => [...current, createMessage('user', trimmed, nextMetadata)]);
    setIsLoading(true);

    window.setTimeout(() => {
      const result = createMockAssistantResponse(trimmed, nextMetadata);
      setMessages((current) => [...current, createMessage('assistant', result.message, result.metadata)]);
      setActionResult(result.actionSummary);
      setIsLoading(false);
    }, 650);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitMessage(input);
  };

  const handleQuickAction = (action: QuickAction) => {
    submitMessage(action.prompt, action.metadata);
  };

  const simulateError = () => {
    setIsLoading(false);
    setError('Simulated error: the placeholder tourism information API did not respond. No real API call was made.');
  };

  const submitStructuredRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const requestTypeMap: Record<string, Pick<RequestMetadata, 'topic' | 'department'>> = {
      'Trip planning question': { topic: 'general', department: 'Visitor Services' },
      'Cultural route': { topic: 'culture', department: 'Visitor Services' },
      'Transport question': { topic: 'transport', department: 'Mobility Desk' },
      'Food recommendation': { topic: 'food', department: 'Tourism Office' },
      'Event question': { topic: 'events', department: 'Events Desk' },
    };
    const selectedRequest = requestTypeMap[form.requestType] ?? requestTypeMap['Trip planning question'];
    const nextMetadata: RequestMetadata = {
      topic: selectedRequest.topic,
      department: selectedRequest.department,
      urgency: 'normal',
      channel: 'web-prototype',
      locale: 'en-US',
    };

    setMetadata(nextMetadata);
    setActionResult(`Structured visitor context preview for ${form.name || 'anonymous visitor'} in ${form.neighborhood || 'an unspecified area'}. This remains mock-only.`);
    setMessages((current) => [
      ...current,
      createMessage(
        'system',
        `Structured visitor context captured: ${form.requestType}. Details are shown as metadata only and are not sent to production services.`,
        nextMetadata,
      ),
    ]);
  };

  return (
    <main className="app-shell">
      <section className="hero" aria-labelledby="portal-title">
        <div>
          <p className="eyebrow">Mock mode · No production Chatbase connection</p>
          <h1 id="portal-title">CivicAI Portal</h1>
          <p>
            A safe prototype for reviewing a municipal tourism chat UI, visitor quick actions, structured request metadata,
            and future Chatbase-related backend/API integration points.
          </p>
        </div>
        <div className="status-card">
          <span className="status-dot" aria-hidden="true" />
          Placeholder API layer active
        </div>
      </section>

      <section className="quick-actions" aria-label="Quick actions">
        {quickActions.map((action) => (
          <button key={action.id} className="quick-action" type="button" onClick={() => handleQuickAction(action)}>
            <strong>{action.label}</strong>
            <span>{action.description}</span>
          </button>
        ))}
      </section>

      <div className="portal-grid">
        <section className="panel chat-panel" aria-labelledby="chat-heading">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Conversation</p>
              <h2 id="chat-heading">Ask a visitor question</h2>
            </div>
            <button className="ghost-button" type="button" onClick={simulateError}>
              Simulate error
            </button>
          </div>

          <div className="conversation" aria-live="polite">
            {!hasUserMessages && <div className="empty-state">Start with a message or choose a quick action card.</div>}
            {messages.map((message) => (
              <article key={message.id} className={`message ${message.role}`}>
                <div className="message-meta">
                  <span>{message.role}</span>
                  <time>{message.timestamp}</time>
                </div>
                <p>{message.content}</p>
              </article>
            ))}
            {isLoading && <div className="loading-state">Loading placeholder assistant response…</div>}
            {error && <div className="error-state">{error}</div>}
          </div>

          <form className="chat-input" onSubmit={handleSubmit}>
            <label htmlFor="message-input">Message</label>
            <div>
              <input
                id="message-input"
                type="text"
                placeholder="Ask about highlights, transit, food, events, or visitor routes…"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <button type="submit" disabled={isLoading}>
                Send
              </button>
            </div>
          </form>
        </section>

        <aside className="side-column">
          <section className="panel" aria-labelledby="form-heading">
            <p className="eyebrow">Visitor context</p>
            <h2 id="form-heading">Request metadata preview</h2>
            <form className="request-form" onSubmit={submitStructuredRequest}>
              <label>
                Visitor name
                <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Alex Resident" />
              </label>
              <label>
                Email
                <input value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="alex@example.test" />
              </label>
              <label>
                Area or hotel district
                <input value={form.neighborhood} onChange={(event) => setForm({ ...form, neighborhood: event.target.value })} placeholder="Central district" />
              </label>
              <label>
                Request type
                <select value={form.requestType} onChange={(event) => setForm({ ...form, requestType: event.target.value })}>
                  <option>Trip planning question</option>
                  <option>Cultural route</option>
                  <option>Transport question</option>
                  <option>Food recommendation</option>
                  <option>Event question</option>
                </select>
              </label>
              <label>
                Details
                <textarea value={form.details} onChange={(event) => setForm({ ...form, details: event.target.value })} placeholder="Describe the visitor need…" />
              </label>
              <button type="submit">Preview metadata</button>
            </form>
          </section>

          <section className="panel" aria-labelledby="metadata-heading">
            <p className="eyebrow">Future integration boundary</p>
            <h2 id="metadata-heading">Action/API placeholder</h2>
            <p className="action-result">{actionResult}</p>
            <pre>{JSON.stringify(metadata, null, 2)}</pre>
            {/* Future Chatbase-related backend/API integration point:
                Replace createMockAssistantResponse and submitMessage timeout with a server-side API call.
                Keep production keys and secrets on the server, never in this browser bundle. */}
          </section>
        </aside>
      </div>
    </main>
  );
}
