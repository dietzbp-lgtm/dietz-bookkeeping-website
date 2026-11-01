/**
 * Validate Calendly's inline booking-completion message.
 * The scheduled event URI is kept in memory for deduplication, never sent to GA4.
 */
export type CalendlyScheduledMessage = {
  origin: string;
  data?: {
    event?: string;
    payload?: { event?: { uri?: string } };
  };
};

export function getCalendlyScheduledEventUri(message: CalendlyScheduledMessage): string | null {
  if (message.origin !== 'https://calendly.com') return null;
  if (message.data?.event !== 'calendly.event_scheduled') return null;

  const uri = message.data.payload?.event?.uri;
  if (typeof uri !== 'string') return null;

  try {
    const parsed = new URL(uri);
    if (parsed.protocol !== 'https:') return null;
    if (parsed.hostname !== 'api.calendly.com' && parsed.hostname !== 'calendly.com') return null;
    if (!/^\/(?:api\/v2\/)?scheduled_events\/[A-Za-z0-9-]+\/?$/.test(parsed.pathname)) return null;
    return parsed.href;
  } catch {
    return null;
  }
}
