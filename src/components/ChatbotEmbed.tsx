import { useEffect, useState } from 'react';

// Jotform provides the native Keily avatar and opens the chat on its first tap.
// Experiment: load the exact same native widget after a short window-load
// grace period, or earlier if the visitor interacts with the page.
// Keily still opens with one tap once her native avatar is visible.
// Note: a delay may also postpone the avatar's first appearance.
// Do not invent private Jotform APIs or simulate clicks on its third-party UI.
const SCRIPT_ID = 'jotform-chatbot-script';
const DELAY_MS = 6000; // Preview experiment only; not approved for production.
const SCRIPT_URL = 'https://cdn.jotfor.ms/agent/embedjs/019d0b8be1307d5c86b2c57a733934f3e592/embed.js';

export default function ChatbotEmbed() {
  const [loadFailed, setLoadFailed] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let disposed = false;
    let timeoutId: number | null = null;
    let scheduled = false;

    const loadAgent = () => {
      // Preserve the widget across route changes and React effect reruns.
      if (disposed || document.getElementById(SCRIPT_ID)) return;

      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = SCRIPT_URL;
      script.async = true;
      script.onerror = () => {
        script.remove();
        if (!disposed) setLoadFailed(true);
      };
      document.body.appendChild(script);
    };

    const startEarly = () => {
      // Load at the first intentional click/key interaction rather than
      // making an already-engaged visitor wait for the full grace period.
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
        timeoutId = null;
      }
      loadAgent();
    };

    const scheduleAgent = () => {
      if (scheduled || disposed) return;
      scheduled = true;
      // Retry is always immediate. The delay only affects first navigation.
      if (retryCount > 0) {
        loadAgent();
      } else {
        timeoutId = window.setTimeout(loadAgent, DELAY_MS);
        window.addEventListener('pointerdown', startEarly, { once: true, passive: true });
        window.addEventListener('keydown', startEarly, { once: true });
      }
    };

    if (document.readyState === 'complete') {
      scheduleAgent();
    } else {
      window.addEventListener('load', scheduleAgent, { once: true });
    }

    return () => {
      disposed = true;
      window.removeEventListener('load', scheduleAgent);
      window.removeEventListener('pointerdown', startEarly);
      window.removeEventListener('keydown', startEarly);
      if (timeoutId !== null) window.clearTimeout(timeoutId);
      // Jotform owns its injected widget after loading; do not tear it down.
    };
  }, [retryCount]);

  // Jotform's single, branded avatar is the only normal chat launcher.
  // Show our own control exclusively as a recovery path for load failures.
  if (!loadFailed) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-2">
      <p role="alert" className="max-w-64 rounded-lg bg-white p-3 text-sm text-red-700 shadow-md">
        Keily couldn't load. Please try again.
      </p>
      <button
        type="button"
        onClick={() => {
          setLoadFailed(false);
          setRetryCount(count => count + 1);
        }}
        className="min-h-12 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Retry Keily chat
      </button>
    </div>
  );
}
