export type Role = 'assistant' | 'user' | 'system';

export interface PortalMessage {
  id: string;
  role: Role;
  content: string;
  timestamp: string;
  metadata?: RequestMetadata;
}

export interface QuickAction {
  id: string;
  label: string;
  prompt: string;
  description: string;
  metadata: RequestMetadata;
}

export interface RequestMetadata {
  topic: 'culture' | 'transport' | 'food' | 'events' | 'general';
  department: string;
  urgency: 'low' | 'normal' | 'high';
  channel: 'web-prototype';
  locale: 'en-US';
}

export interface CivicRequestForm {
  name: string;
  email: string;
  neighborhood: string;
  requestType: string;
  details: string;
}

export interface MockAssistantResult {
  message: string;
  metadata: RequestMetadata;
  actionSummary: string;
}
