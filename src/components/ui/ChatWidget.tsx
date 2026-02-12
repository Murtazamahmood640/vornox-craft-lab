import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = {
  role: "user" | "bot";
  content: string;
};

const faqResponses: Record<string, string> = {
  services: "We offer: Web Development, Web Applications, Digital Marketing, SEO, Content Writing, Graphic Design, IT Consulting, SaaS Development, and Recruitment services.",
  pricing: "Our pricing depends on the project scope. Contact us at info@vornoxlab.com or call 03228258640 for a free quote!",
  contact: "You can reach us at:\n📧 info@vornoxlab.com\n📞 03228258640\n💬 WhatsApp: wa.me/923228258640",
  website: "We build custom websites tailored to your business needs — from landing pages to full e-commerce platforms. Visit our portfolio to see examples!",
  seo: "Our SEO services include keyword research, on-page optimization, link building, and performance tracking to boost your search rankings.",
  marketing: "We provide full digital marketing including social media management, PPC campaigns, email marketing, and content strategy.",
  portfolio: "Check out our work at the Portfolio page! We've delivered 150+ projects for clients worldwide.",
  hours: "Our business hours are Monday to Friday, 9:00 AM - 6:00 PM. But you can always reach us via WhatsApp!",
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  
  if (lower.includes("service") || lower.includes("what do you do") || lower.includes("offer")) {
    return faqResponses.services;
  }
  if (lower.includes("price") || lower.includes("cost") || lower.includes("how much") || lower.includes("quote")) {
    return faqResponses.pricing;
  }
  if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("reach") || lower.includes("call")) {
    return faqResponses.contact;
  }
  if (lower.includes("website") || lower.includes("web dev") || lower.includes("build")) {
    return faqResponses.website;
  }
  if (lower.includes("seo") || lower.includes("search engine") || lower.includes("ranking")) {
    return faqResponses.seo;
  }
  if (lower.includes("marketing") || lower.includes("social media") || lower.includes("ads")) {
    return faqResponses.marketing;
  }
  if (lower.includes("portfolio") || lower.includes("work") || lower.includes("projects")) {
    return faqResponses.portfolio;
  }
  if (lower.includes("hour") || lower.includes("open") || lower.includes("time") || lower.includes("available")) {
    return faqResponses.hours;
  }
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return "Hello! 👋 Welcome to Vornox Lab. How can I help you today? You can ask about our services, pricing, or contact info.";
  }
  
  return "Thanks for your message! For detailed inquiries, please contact us at info@vornoxlab.com or call 03228258640. You can also ask about our services, pricing, or portfolio!";
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hi! 👋 I'm Vornox Lab's assistant. Ask me about our services, pricing, or anything else!" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages((prev) => [...prev, { role: "bot", content: botResponse }]);
    }, 500);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-bg text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center"
        aria-label="Chat with us"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] h-[450px] bg-card border border-border rounded-2xl shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="gradient-bg px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary-foreground">Vornox Lab</h3>
              <p className="text-xs text-primary-foreground/70">Online • Ask us anything</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line ${
                    msg.role === "user"
                      ? "gradient-bg text-primary-foreground rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="h-10 text-sm"
            />
            <Button
              onClick={handleSend}
              size="sm"
              className="gradient-bg text-primary-foreground h-10 w-10 p-0 flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
