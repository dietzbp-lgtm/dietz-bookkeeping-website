import { useEffect, useId, useState } from 'react';
import { MessageCircle, X, ExternalLink } from 'lucide-react';

// Phase 3 EXPERIMENT: lightweight first-party launcher with a genuine, public
// Jotform AI agent loaded only when the visitor taps the chat button.
// No private Jotform APIs, synthetic clicks, copied avatar assets, or preload.
// Jotform's published direct agent page powers the embedded conversation.
// This is an alternative UI prototype, NOT the production native chatbot.
const AGENT_URL = 'https://www.jotform.com/agent/019d0b8be1307d5c86b2c57a733934f3e592?skipWelcome=1';

export default function ChatbotEmbed() {
  const [open, setOpen] = useState(false);
  const [everOpened, setEverOpened] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const panelId = useId();

  function toggleChat() {
    setOpen(previous => {
      if (!previous) setEverOpened(true);
      return !previous;
    });
  }

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return (
    <aside className="fixed bottom-4 right-4 z-[70] flex flex-col items-end gap-3" aria-label="Keily bookkeeping assistance">
      {/* The iframe remains mounted after its first open, preserving the
          conversation when the visitor temporarily closes the panel. */}
      {everOpened && (
        <section
          id={panelId}
          role="dialog"
          aria-modal="false"
          aria-label="Chat with Keily"
          aria-hidden={!open}
          className={`${open ? 'flex' : 'hidden'} w-[min(385px,calc(100vw-2rem))] h-[min(680px,calc(100dvh-7rem))] min-h-[300px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_75px_rgba(15,23,42,0.24)]`}
        >
          <header className="flex h-16 shrink-0 items-center justify-between gap-3 border-b border-slate-200 bg-white px-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white" aria-hidden="true">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-base font-semibold leading-tight text-slate-900">Keily</p>
                <p className="text-xs text-slate-600">Dietz Bookkeeping AI assistant</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close Keily chat"
              className="rounded-full p-2 text-slate-600 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <X className="h-5 w-5" />
            </button>
          </header>
          <div className="relative min-h-0 flex-1">
            {!iframeLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-white px-4 text-center" role="status">
                <p className="text-sm text-slate-600">Connecting to Keily…</p>
              </div>
            )}
            <iframe
              src={AGENT_URL}
              title="Keily AI bookkeeping assistant chat"
              onLoad={() => setIframeLoaded(true)}
              allow="microphone"
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-full w-full border-0"
            />
          </div>
          <footer className="flex shrink-0 items-center justify-between gap-2 border-t border-slate-200 bg-white px-4 py-2">
            <p className="text-xs text-slate-500">Powered by Jotform</p>
            <a
              href={AGENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-blue-700 underline underline-offset-2"
            >
              Open full chat <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </footer>
        </section>
      )}

      <button
        type="button"
        onClick={toggleChat}
        aria-expanded={open}
        aria-controls={everOpened ? panelId : undefined}
        aria-label={open ? 'Close Keily chat' : 'Chat with Keily'}
        className="group flex min-h-14 items-center gap-3 rounded-full bg-blue-600 px-4 py-3 text-white shadow-[0_9px_35px_rgba(37,99,235,0.32)] transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20" aria-hidden="true">
          {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        </span>
        <span className="text-sm font-semibold">Keily <span className="font-normal text-blue-100">· Ask a question</span></span>
      </button>
    </aside>
  );
}
