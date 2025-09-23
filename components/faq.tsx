"use client";

import React, { useState, useRef, useEffect } from "react";
import { Mic, Send, Volume2, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  keywords: string[];
}

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const PayZoneGroupFAQ: React.FC = () => {
  const messageIdCounter = useRef(1);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hello! I'm Grok, your AI assistant for Payzon India. Ask me anything about our services, location, contact, or offerings.",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [suggestions, setSuggestions] = useState<FAQItem[]>([]);
  const [typingMessage, setTypingMessage] = useState<string | null>(null);
  const [language, setLanguage] = useState("en-US"); // Language state for speech recognition and synthesis

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What is Payzon India Pvt. Ltd.?",
      answer:
        "Payzon India Pvt. Ltd. is a technology-driven company based in Bhopal, specializing in IT services, web development, digital marketing, SEO, and e-commerce solutions.",
      keywords: ["company", "about", "Payzon India", "पेज़ोन इंडिया", "कंपनी"],
    },
    {
      id: 2,
      question: "Where is Payzon India located?",
      answer:
        "Payzon India Pvt. Ltd. is located at B1, Patel Nagar, Raisen Road, Bhopal, Madhya Pradesh, India.",
      keywords: ["location", "address", "Bhopal", "स्थान", "पता"],
    },
    {
      id: 3,
      question: "What services does Payzon India provide?",
      answer:
        "We provide custom software development, web and mobile app development, digital marketing, SEO, social media marketing, IT consulting, and e-commerce solutions.",
      keywords: ["services", "software", "development", "digital marketing", "SEO", "सेवाएँ", "सॉफ्टवेयर"],
    },
    {
      id: 4,
      question: "How long has Payzon India been in business?",
      answer:
        "Payzon India Pvt. Ltd. has over 10 years of experience delivering IT and digital solutions with a focus on innovation and customer satisfaction.",
      keywords: ["experience", "years", "business", "history", "अनुभव", "वर्ष"],
    },
    {
      id: 5,
      question: "How can I contact Payzon India?",
      answer:
        "You can contact Payzon India via their website at payzonindia.com, or reach out through their social media profiles on LinkedIn and Facebook.",
      keywords: ["contact", "email", "phone", "website", "social media", "संपर्क", "वेबसाइट"],
    },
    {
      id: 6,
      question: "Does Payzon India offer digital marketing services?",
      answer:
        "Yes, Payzon India provides digital marketing services including SEO, social media campaigns, content marketing, and strategic online growth solutions.",
      keywords: ["digital marketing", "SEO", "social media", "campaigns", "डिजिटल मार्केटिंग", "एसईओ"],
    },
    {
      id: 7,
      question: "What technologies does Payzon India use?",
      answer:
        "Payzon India uses modern web and mobile technologies, including React.js, Node.js, MongoDB, Express.js, Tailwind CSS, and cloud solutions for scalable applications.",
      keywords: ["technologies", "tech stack", "development", "टेक्नोलॉजी", "डेवलपमेंट"],
    },
    {
      id: 8,
      question: "How fast are Payzon India's services?",
      answer:
        "Payzon India ensures fast and reliable service delivery, with most IT solutions and digital marketing campaigns being executed efficiently within agreed timelines.",
      keywords: ["speed", "fast", "delivery", "services", "गति", "सेवाएँ"],
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("faqChatHistory");
      if (saved) {
        const parsedMessages = JSON.parse(saved, (key, value) =>
          key === "timestamp" ? new Date(value) : value
        );
        setMessages(parsedMessages);
        const maxId = Math.max(
          ...parsedMessages.map((msg: Message) => msg.id),
          1
        );
        messageIdCounter.current = maxId + 1;
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("faqChatHistory", JSON.stringify(messages));
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      synthRef.current = window.speechSynthesis;
      if (
        "SpeechRecognition" in window ||
        "webkitSpeechRecognition" in window
      ) {
        const SpeechRecognition =
          (window as any).SpeechRecognition ||
          (window as any).webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.lang = language; // Use dynamic language
        recognitionRef.current.interimResults = false;

        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
          handleSubmit(transcript);
        };

        recognitionRef.current.onend = () => setIsListening(false);
      }
    }
  }, [language]); // Re-run when language changes

  useEffect(() => {
    if (input.trim()) {
      const filtered = faqData
        .filter(
          (faq) =>
            faq.question.toLowerCase().includes(input.toLowerCase()) ||
            faq.keywords.some((kw) =>
              kw.toLowerCase().includes(input.toLowerCase())
            )
        )
        .slice(0, 3);
      setSuggestions(filtered);
    } else {
      setSuggestions(faqData.slice(0, 3));
    }
  }, [input]);

  const calculateSimilarity = (str1: string, str2: string): number => {
    const set1 = new Set(str1.toLowerCase().split(" ").filter(Boolean));
    const set2 = new Set(str2.toLowerCase().split(" ").filter(Boolean));
    const intersection = new Set([...set1].filter((x) => set2.has(x)));
    return intersection.size / Math.max(set1.size, set2.size);
  };

  const findBestMatch = (query: string): FAQItem | null => {
    let bestMatch: FAQItem | null = null;
    let highestScore = 0;

    faqData.forEach((faq) => {
      const questionScore = calculateSimilarity(query, faq.question);
      const keywordScore =
        faq.keywords.reduce(
          (acc, kw) =>
            acc + (query.toLowerCase().includes(kw.toLowerCase()) ? 1 : 0),
          0
        ) / faq.keywords.length;
      const totalScore = (questionScore + keywordScore) / 2;

      if (totalScore > highestScore) {
        highestScore = totalScore;
        bestMatch = faq;
      }
    });

    return highestScore > 0.3 ? bestMatch : null;
  };

  const handleSubmit = (query: string = input) => {
    if (!query.trim()) return;

    const newUserMessage: Message = {
      id: messageIdCounter.current++,
      text: query,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");

    const match = findBestMatch(query);
    const botResponseText = match
      ? `${match.answer}\n\n(Regarding: ${match.question})`
      : "I'm sorry, I couldn't find a specific answer. Searching on Google for more information.";

    setTypingMessage("");
    let currentText = "";
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < botResponseText.length) {
        currentText += botResponseText[index];
        setTypingMessage(currentText);
        index++;
      } else {
        clearInterval(typingInterval);
        setMessages((prev) => [
          ...prev,
          {
            id: messageIdCounter.current++,
            text: botResponseText,
            sender: "bot",
            timestamp: new Date(),
          },
        ]);
        setTypingMessage(null);
        if (match) {
          toggleSpeaking(match.answer);
        } else if (typeof window !== "undefined") {
          const searchQuery = encodeURIComponent("Payzon India " + query);
          window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
        }
      }
    }, 30);
  };

  const handleSuggestionClick = (faq: FAQItem) => {
    setInput(faq.question);
    handleSubmit(faq.question);
  };

  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const toggleSpeaking = (text: string) => {
    if (!synthRef.current) return;

    if (isSpeaking) {
      synthRef.current.cancel(); // Stop ongoing speech
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language; // Use dynamic language
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      synthRef.current.speak(utterance);
    }
  };

  const handleSearchMore = () => {
    if (typeof window !== "undefined") {
      const query = encodeURIComponent(
        "Tell me about Payzon India Pvt. Ltd., their services, location, and offerings."
      );
      window.open(`https://chat.openai.com/?prompt=${query}`, "_blank");
      setMessages((prev) => [
        ...prev,
        {
          id: messageIdCounter.current++,
          text: "I've opened ChatGPT for you with a pre-filled query about Payzon India.",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }
  };

  // Language toggle handler
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en-US" ? "hi-IN" : "en-US"));
  };

  return (
    <div className="bg-white relative overflow-hidden border-t">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-black via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Payzon India AI Assistant
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mt-3 max-w-xl mx-auto">
            Ask me about Payzon India Pvt. Ltd., our services, location, or offerings.
          </p>
          <button
            onClick={toggleLanguage}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Switch to {language === "en-US" ? "Hindi" : "English"}
          </button>
        </motion.div>

        <motion.div
          className="w-full max-w-4xl bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl overflow-hidden shadow-lg shadow-gray-300/30"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-[50vh] sm:h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-4 scrollbar-thin scrollbar-thumb-blue-300/50 scrollbar-track-transparent">
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] sm:max-w-[60%] p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:scale-105 ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                        : "bg-gray-100 text-gray-800 border border-gray-200"
                    }`}
                  >
                    <p className="text-sm sm:text-base leading-relaxed">
                      {msg.text}
                    </p>
                    <span className="text-xs text-gray-500 mt-2 block">
                      {msg.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </motion.div>
              ))}
              {typingMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[60%] p-4 sm:p-5 rounded-2xl bg-gray-100 text-gray-800 border border-gray-200">
                    <p className="text-sm sm:text-base leading-relaxed">
                      {typingMessage}
                    </p>
                    <span className="text-xs text-gray-500 mt-2 block">
                      {new Date().toLocaleTimeString()}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          <AnimatePresence>
            {suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="px-4 sm:px-6 py-3 bg-gray-50 border-t border-gray-200"
              >
                <p className="text-xs sm:text-sm text-gray-600 mb-2">
                  Suggested Questions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((faq) => (
                    <button
                      key={faq.id}
                      onClick={() => handleSuggestionClick(faq)}
                      className="px-3 py-1 bg-blue-100/50 rounded-full text-gray-800 text-xs sm:text-sm hover:bg-blue-200/50 transition-all"
                    >
                      {faq.question}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="border-t border-gray-200 p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
            <motion.button
              onClick={toggleListening}
              className={`p-2 sm:p-3 rounded-xl transition-colors ${
                isListening
                  ? "bg-red-500/30 text-red-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              animate={isListening ? { scale: [1, 1.1, 1] } : { scale: 1 }}
              transition={{
                duration: 0.3,
                repeat: isListening ? Infinity : 0,
                repeatType: "reverse",
              }}
            >
              <Mic className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
              placeholder={language === "en-US" ? "Ask about Payzon India..." : "पेज़ोन इंडिया के बारे में पूछें..."}
              className="flex-1 bg-transparent text-gray-800 outline-none text-sm sm:text-base placeholder-gray-400"
            />
            <motion.button
              onClick={() => handleSubmit()}
              className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>
            <motion.button
              onClick={handleSearchMore}
              className="p-2 sm:p-3 bg-gray-100 rounded-xl text-gray-600 hover:bg-gray-200 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Search More with Grok"
            >
              <Search className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>
            <motion.button
              onClick={() => toggleSpeaking(messages[messages.length - 1]?.text || "")}
              className={`p-2 sm:p-3 rounded-xl transition-colors ${
                isSpeaking
                  ? "bg-green-500/30 text-green-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              animate={isSpeaking ? { scale: [1, 1.1, 1] } : { scale: 1 }}
              transition={{
                duration: 0.3,
                repeat: isSpeaking ? Infinity : 0,
                repeatType: "reverse",
              }}
            >
              <Volume2 className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.3);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default PayZoneGroupFAQ;