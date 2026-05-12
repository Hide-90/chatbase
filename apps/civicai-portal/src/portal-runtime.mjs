const defaultMetadata = {
  topic: 'general',
  department: 'Visitor Services',
  urgency: 'normal',
  channel: 'web-prototype',
  locale: 'en-US',
};

const quickActions = [
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

const requestTypeMap = {
  'Trip planning question': { topic: 'general', department: 'Visitor Services' },
  'Cultural route': { topic: 'culture', department: 'Visitor Services' },
  'Transport question': { topic: 'transport', department: 'Mobility Desk' },
  'Food recommendation': { topic: 'food', department: 'Tourism Office' },
  'Event question': { topic: 'events', department: 'Events Desk' },
};

const state = {
  messages: [
    {
      role: 'assistant',
      content:
        'Welcome to the CivicAI Portal municipal tourism demo. Ask about cultural highlights, public transport, local food, or visitor events. Responses are mocked for safe review.',
      timestamp: timestamp(),
      metadata: defaultMetadata,
    },
  ],
  isLoading: false,
  error: null,
  metadata: defaultMetadata,
};

const conversation = document.querySelector('#conversation');
const metadataPreview = document.querySelector('#metadata-preview');
const actionResult = document.querySelector('#action-result');
const quickActionContainer = document.querySelector('#quick-actions');
const sendButton = document.querySelector('#send-button');

function timestamp() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function createElement(tagName, options = {}) {
  const element = document.createElement(tagName);
  if (options.className) {
    element.className = options.className;
  }
  if (options.textContent) {
    element.textContent = options.textContent;
  }
  return element;
}

function createMessage(role, content, metadata) {
  return {
    role,
    content,
    timestamp: timestamp(),
    metadata,
  };
}

function createMockAssistantResponse(message, metadata) {
  return {
    message: `Mock tourism response: I would route “${message}” to ${metadata.department} for visitor guidance. In a future Chatbase integration, this area can be replaced with a real assistant response, localized source references, maps, or tourism actions.`,
    metadata,
    actionSummary: `Placeholder action ready: ${metadata.department} / ${metadata.topic} / ${metadata.urgency}`,
  };
}

function renderQuickActions() {
  quickActionContainer.replaceChildren(
    ...quickActions.map((action) => {
      const button = createElement('button', { className: 'quick-action' });
      button.type = 'button';
      button.dataset.action = action.id;
      button.append(
        createElement('strong', { textContent: action.label }),
        createElement('span', { textContent: action.description }),
      );
      return button;
    }),
  );
}

function renderConversation() {
  const hasUserMessages = state.messages.some((message) => message.role === 'user');
  const children = [];

  if (!hasUserMessages) {
    children.push(createElement('div', { className: 'empty-state', textContent: 'Start with a message or choose a quick action card.' }));
  }

  for (const message of state.messages) {
    const article = createElement('article', { className: `message ${message.role}` });
    const meta = createElement('div', { className: 'message-meta' });
    meta.append(createElement('span', { textContent: message.role }), createElement('time', { textContent: message.timestamp }));
    article.append(meta, createElement('p', { textContent: message.content }));
    children.push(article);
  }

  if (state.isLoading) {
    children.push(createElement('div', { className: 'loading-state', textContent: 'Loading placeholder assistant response…' }));
  }

  if (state.error) {
    children.push(createElement('div', { className: 'error-state', textContent: state.error }));
  }

  conversation.replaceChildren(...children);
  sendButton.disabled = state.isLoading;
}

function renderMetadata() {
  metadataPreview.textContent = JSON.stringify(state.metadata, null, 2);
}

function render() {
  renderConversation();
  renderMetadata();
}

function submitMessage(text, metadata = state.metadata) {
  const trimmed = text.trim();
  if (!trimmed || state.isLoading) {
    return;
  }

  state.error = null;
  state.metadata = metadata;
  state.messages.push(createMessage('user', trimmed, metadata));
  state.isLoading = true;
  render();

  window.setTimeout(() => {
    // Future Chatbase-related backend/API integration point:
    // replace this mock timeout with a server-side API request.
    // Keep production secrets off the client.
    const result = createMockAssistantResponse(trimmed, metadata);
    state.messages.push(createMessage('assistant', result.message, result.metadata));
    actionResult.textContent = result.actionSummary;
    state.isLoading = false;
    render();
  }, 650);
}

quickActionContainer.addEventListener('click', (event) => {
  const target = event.target instanceof Element ? event.target : null;
  const button = target?.closest('button[data-action]');
  if (!button) {
    return;
  }

  const action = quickActions.find((item) => item.id === button.dataset.action);
  if (action) {
    submitMessage(action.prompt, action.metadata);
  }
});

document.querySelector('#chat-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#message-input');
  submitMessage(input.value);
  input.value = '';
});

document.querySelector('#simulate-error').addEventListener('click', () => {
  state.isLoading = false;
  state.error = 'Simulated error: the placeholder tourism information API did not respond. No real API call was made.';
  render();
});

document.querySelector('#request-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const selectedRequest = requestTypeMap[data.get('requestType')] || requestTypeMap['Trip planning question'];

  state.metadata = {
    topic: selectedRequest.topic,
    department: selectedRequest.department,
    urgency: 'normal',
    channel: 'web-prototype',
    locale: 'en-US',
  };
  actionResult.textContent = `Structured visitor context preview for ${data.get('name') || 'anonymous visitor'} in ${data.get('area') || 'an unspecified area'}. This remains mock-only.`;
  state.messages.push(
    createMessage(
      'system',
      `Structured visitor context captured: ${data.get('requestType')}. Details are shown as metadata only and are not sent to production services.`,
      state.metadata,
    ),
  );
  render();
});

renderQuickActions();
render();
