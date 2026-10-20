import { useState } from 'react';
import { LoaderCircle, MessageCircle } from 'lucide-react';

// Loading this embed on initial page load used several seconds of mobile CPU
// time and downloaded resources a visitor may never need. Only load it after
// the visitor explicitly asks to chat.
const SCRIPT_ID = 'jotform-chatbot-script';
const SCRIPT_URL = 'https://cdn.jotfor.ms/agent/embedjs/019d0b8be1307d5c86b2c57a733934f3e592/embed.js';

type ChatState = 'idle' | 'loading' | 'initializing' | 'ready' | 'error';

export default function ChatbotEmbed() {
  const [status, setStatus] = useState<ChatState>('idle');

  const startChat = () => {
    if (status === 'loading' || status === 'initializing' || status === 'ready') return;

    // Don't insert duplicate Jotform embeds if the visitor navigates around
    // the SPA, or another script has already initialized the agent.
    if (document.getElementById(SCRIPT_ID)) {
      setStatus('ready');
      return;
    }

    setStatus('loading');
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = SCRIPT_URL;
    script.async = true;

    script.onload = () => {
      // This event confirms the embed loader arrived, not that its own
      // additional scripts and Jotform bubble are finished initializing.
      setStatus('initializing');
      window.setTimeout(() => setStatus('ready'), 6000);
    };
    script.onerror = () => {
      script.remove();
      setStatus('error');
    };

    document.body.appendChild(script);
  };

  // The official embed takes over the chat UI once its loader initializes.
  if (status === 'ready') return null;

  if (status === 'initializing') {
    return (
      <div role="status" aria-live="polite" className="fixed bottom-24 right-4 z-[60] max-w-[min(18rem,calc(100vw-2rem))] rounded-xl border border-blue-100 bg-white p-3 text-sm text-slate-700 shadow-lg">
        Opening Keily. Tap the chat bubble when it appears.
      </div>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-2">
      {status === 'error' && (
        <p role="alert" className="max-w-64 rounded-lg bg-white p-3 text-sm text-red-700 shadow-md">
          Chat couldn't load. Please try again.
        </p>
      )}
      <button
        type="button"
        onClick={startChat}
        disabled={status === 'loading'}
        aria-label="Chat with Keily, our virtual bookkeeping assistant"
        className="flex min-h-12 items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-wait disabled:opacity-80"
      >
        {status === 'loading' ? <LoaderCircle size={20} aria-hidden="true" className="animate-spin" /> : <MessageCircle size={20} aria-hidden="true" />}
        <span>{status === 'loading' ? 'Opening Keily…' : 'Chat with Keily'}</span>
      </button>
    </div>
  );
}
