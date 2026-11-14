import { useRef } from 'react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
import { getCalendlyScheduledEventUri } from '../lib/calendlyBooking';

const calendarUrl = 'https://calendly.com/dietzbookkeeping/30min';

/**
 * Kept in a separate dynamically imported module so that Calendly's React
 * integration is loaded only on /schedule/, not on every other site page.
 * The verified GA4 completion event and deduplication behavior stay intact.
 */
export default function CalendlyBookingWidget() {
  const recordedBookings = useRef(new Set<string>());

  useCalendlyEventListener({
    onEventScheduled: message => {
      const bookingUri = getCalendlyScheduledEventUri(message);
      if (!bookingUri || recordedBookings.current.has(bookingUri)) return;

      const gtag = (window as Window & {
        gtag?: (command: 'event', eventName: string, params: Record<string, string>) => void;
      }).gtag;
      if (!gtag) return;

      recordedBookings.current.add(bookingUri);
      // Never send invitee information or the event URI to Google Analytics.
      gtag('event', 'consultation_booked', { booking_source: 'calendly_inline' });
    },
  });

  return <InlineWidget url={calendarUrl} styles={{ height: '780px', width: '100%', minWidth: '0' }} />;
}
