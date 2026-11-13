import { useEffect, useState } from 'react';

// Jotform provides the native Keily avatar and opens the chat on its first tap.
// Load its existing embed after the initial page has finished loading and the
// browser has idle time, so the agent doesn't block the homepage's first paint.
// Do not invent private Jotform APIs or simulate clicks on its third-party UI.
const SCRIPT_ID = 'jotform-chatbot-script';
const SCRIPT_URL = 'https://cdn.jotfor.ms/agent/embedjs/019d0b8be1307d5c86b2c57a733934f3e592/embed.js';

export default function ChatbotEmbed() {
  const [loadFailed, setLoadFailed] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let disposed = false;
    let idleId: number | null = null;
    let timeoutId: number | null = null;

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

    const scheduleAgent = () => {
      // A deliberate retry should happen right away.
      if (retryCount > 0) {
        loadAgent();
      } else if (typeof window.requestIdleCallback === 'function') {
        // The timeout bounds the wait if the browser stays busy.
        idleId = window.requestIdleCallback(loadAgent, { timeout: 2000 });
      } else {
        // Safari and older browsers without requestIdleCallback.
        timeoutId = window.setTimeout(loadAgent, 800);
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
      if (idleId !== null) window.cancelIdleCallback(idleId);
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
