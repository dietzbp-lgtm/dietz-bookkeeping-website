import assert from 'node:assert/strict';
import test from 'node:test';
import { getCalendlyScheduledEventUri } from './calendlyBooking';

const valid = {
  origin: 'https://calendly.com',
  data: {
    event: 'calendly.event_scheduled',
    payload: { event: { uri: 'https://calendly.com/api/v2/scheduled_events/ABC123' } },
  },
};

test('accepts a completed embedded Calendly booking', () => {
  assert.equal(getCalendlyScheduledEventUri(valid), 'https://calendly.com/api/v2/scheduled_events/ABC123');
});

test('accepts an API scheduled-event URI', () => {
  assert.equal(getCalendlyScheduledEventUri({
    ...valid,
    data: { ...valid.data, payload: { event: { uri: 'https://api.calendly.com/scheduled_events/ABC123' } } },
  }), 'https://api.calendly.com/scheduled_events/ABC123');
});

test('does not count a date selection as a booking', () => {
  assert.equal(getCalendlyScheduledEventUri({ ...valid, data: { ...valid.data, event: 'calendly.date_and_time_selected' } }), null);
});

test('rejects a message from another origin', () => {
  assert.equal(getCalendlyScheduledEventUri({ ...valid, origin: 'https://example.com' }), null);
});

test('rejects missing or unrelated event identifiers', () => {
  assert.equal(getCalendlyScheduledEventUri({ origin: 'https://calendly.com', data: { event: 'calendly.event_scheduled' } }), null);
  assert.equal(getCalendlyScheduledEventUri({
    ...valid,
    data: { ...valid.data, payload: { event: { uri: 'https://example.com/scheduled_events/ABC123' } } },
  }), null);
});
