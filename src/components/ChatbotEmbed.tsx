import { useEffect } from 'react';

const ChatbotEmbed = () => {
  useEffect(() => {
    // Prevent duplicate script injection
    const scriptId = 'jotform-chatbot-script';
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://cdn.jotfor.ms/agent/embedjs/019d0b8be1307d5c86b2c57a733934f3e592/embed.js';
    script.async = true;
    
    document.body.appendChild(script);

    return () => {
      // We intentionally do not remove the script on unmount 
      // to ensure the chatbot persists across SPA navigation 
      // without re-initializing or losing state.
    };
  }, []);

  return null; // The Jotform script injects its own UI
};

export default ChatbotEmbed;
