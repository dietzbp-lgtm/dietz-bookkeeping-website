import { useEffect, useId, useState } from 'react';
import { MessageCircle, X, ExternalLink } from 'lucide-react';

// Phase 3 preview: show a small, always-visible Keily launcher while keeping
// the full Jotform agent unloaded until the visitor's first tap.
// The agent's own branded interface provides the greeting and conversation.
// Never rely on undocumented Jotform APIs, synthetic clicks or copied assets.
const AGENT_URL = 'https://www.jotform.com/agent/019d0b8be1307d5c86b2c57a733934f3e592?skipWelcome=1';

export default function ChatbotEmbed() {
  const [open, setOpen] = useState(false);
  const [everOpened, setEverOpened] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const panelId = useId();

  function openChat() {
    setEverOpened(true);
    setOpen(true);
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
    <aside className="fixed bottom-4 right-4 z-[70] flex flex-col items-end" aria-label="Keily bookkeeping assistance">
      {/* Preserve the iframe across close/reopen to keep the ongoing conversation.
          The section is fully hidden until the visitor opens the launcher. */}
      {everOpened && (
        <section
          id={panelId}
          role="dialog"
          aria-modal="false"
          aria-label="Chat with Keily"
          aria-hidden={!open}
          className={`${open ? 'flex' : 'hidden'} h-[min(680px,calc(100dvh-2rem))] w-[min(385px,calc(100vw-2rem))] min-h-[300px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_75px_rgba(15,23,42,0.24)]`}
        >
          {/* Only a compact action bar: Jotform's own agent already shows
              Keily's name, avatar, AI disclosure and chat navigation. */}
          <header className="flex h-11 shrink-0 items-center justify-between gap-2 border-b border-slate-200 bg-white px-3">
            <p className="text-sm font-semibold text-slate-800">Keily chat</p>
            <div className="flex items-center gap-1">
              <a
                href={AGENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Keily chat in a new tab"
                title="Open full chat"
                className="rounded-full p-2 text-blue-700 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close Keily chat"
                className="rounded-full p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </header>
          <p className="shrink-0 border-b border-blue-100 bg-blue-50 px-3 py-2 text-xs leading-relaxed text-slate-700">General questions only. Please do not share confidential financial information, files, passwords or document links in chat.</p>
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
        </section>
      )}

      {/* Mobile: 48px circular icon. Larger screens: labelled Keily pill.
          The real Jotform chat still opens on the first tap. */}
      {!open && (
        <button
          type="button"
          onClick={openChat}
          aria-expanded={false}
          aria-controls={everOpened ? panelId : undefined}
          aria-label="Chat with Keily"
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 p-0 text-white shadow-[0_9px_35px_rgba(37,99,235,0.32)] transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 sm:h-auto sm:min-h-12 sm:w-auto sm:gap-2 sm:px-3 sm:py-2"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 sm:h-7 sm:w-7" aria-hidden="true">
            <MessageCircle className="h-4 w-4" />
          </span>
          <span className="hidden text-sm font-semibold sm:inline">Keily</span>
        </button>
      )}
    </aside>
  );
}
