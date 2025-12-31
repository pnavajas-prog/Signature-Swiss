import React, { useState, useRef, useEffect } from 'react';
import { Send, Minimize2, Sparkles } from 'lucide-react';
import { getGeminiConciergeResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to Signature Swiss. I am your private concierge. How may I assist you with your property search today?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await getGeminiConciergeResponse(input);
    
    const modelMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-10 right-10 z-50 p-4 rounded-full shadow-2xl transition-all duration-500 flex items-center justify-center gap-3 border border-white/10 ${
            isOpen ? 'bg-obsidian rotate-90 opacity-0 pointer-events-none' : 'bg-obsidian text-luxury-gold hover:bg-charcoal hover:scale-105 hover:border-luxury-gold/50'
        }`}
      >
        <Sparkles size={18} strokeWidth={1.5} />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-10 right-6 md:right-10 w-[90vw] md:w-[380px] bg-obsidian/95 backdrop-blur-xl shadow-2xl z-50 transition-all duration-500 transform border border-white/10 flex flex-col ${
          isOpen ? 'translate-y-0 opacity-100 scale-100 h-[600px] max-h-[85vh]' : 'translate-y-20 opacity-0 scale-95 h-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-charcoal/50 text-white p-5 flex justify-between items-center shrink-0 border-b border-white/5">
          <div className="flex items-center gap-3">
            <Sparkles size={14} className="text-luxury-gold" />
            <div>
              <h3 className="font-sans font-normal tracking-wide text-sm">Concierge</h3>
              <p className="text-[9px] text-stone-400 uppercase tracking-widest">AI Private Office</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
            <Minimize2 size={16} strokeWidth={1} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-obsidian/50">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] p-3 text-xs font-light leading-relaxed tracking-wide ${
                  msg.role === 'user' 
                    ? 'bg-charcoal text-white border border-white/10' 
                    : 'bg-transparent text-stone-300 border border-luxury-gold/20'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-transparent border border-luxury-gold/20 p-3">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-luxury-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1 h-1 bg-luxury-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1 h-1 bg-luxury-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-5 bg-charcoal/50 border-t border-white/5 shrink-0">
          <div className="flex items-center gap-3 bg-obsidian px-3 py-2 border border-white/10 focus-within:border-luxury-gold/50 transition-colors">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about properties or regions..."
              className="flex-1 bg-transparent outline-none text-xs text-white placeholder:text-stone-600 font-light"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="text-stone-500 hover:text-luxury-gold disabled:opacity-30 transition-colors"
            >
              <Send size={14} strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};