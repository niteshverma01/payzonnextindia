"use client";

import React, { useState, useRef, useEffect } from "react";
import { Mic, Send, Volume2, Search, Copy, Trash2, Download, EmojiHappy, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import Image from "next/image";
import { useTheme } from "next-themes";

interface FAQItem {
  id: number;
  question: string;
  questionHindi: string;
  answer: string;
  answerHindi: string;
  keywords: string[];
  category: string;
}

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  reaction?: string; // Added for emoji reactions
}

const faqData: FAQItem[] = [
  // ... (keep the existing FAQ data, added categories if not present)
  {
    id: 1,
    question: "What services do you offer?",
    questionHindi: "आप क्या सेवाएं प्रदान करते हैं?",
    answer: "We specialize in IT services including web development and software solutions, digital marketing (SEO, paid ads, PR, influencer marketing), fintech APIs for recharge and bill payments, cyber security, broadcasting via Sadaiv Satya, and cyber awareness through Sadaiv Yuva Foundation.",
    answerHindi: "हम आईटी सेवाओं में विशेषज्ञ हैं जिसमें वेब डेवलपमेंट और सॉफ्टवेयर सॉल्यूशंस, डिजिटल मार्केटिंग (एसईओ, पेड ऐड्स, पीआर, इन्फ्लुएंसर मार्केटिंग), फिनटेक एपीआई रिचार्ज और बिल पेमेंट्स के लिए, साइबर सिक्योरिटी, सदैव सत्य के माध्यम से ब्रॉडकास्टिंग, और सदैव युवा फाउंडेशन के माध्यम से साइबर अवेयरनेस शामिल हैं।",
    keywords: ["services", "offerings", "सेवाएं"],
    category: "Services",
  },
  {
    id: 2,
    question: "Where is Payzon India located?",
    questionHindi: "पेज़ोन इंडिया कहाँ स्थित है?",
    answer: "Payzon India Pvt Ltd is located at B1, Raisen Road, Manak Vihar, Patel Nagar, Bhopal, Madhya Pradesh 462022, India.",
    answerHindi: "पेज़ोन इंडिया प्राइवेट लिमिटेड बी1, रायसेन रोड, मनक विहार, पटेल नगर, भोपाल, मध्य प्रदेश 462022, भारत में स्थित है।",
    keywords: ["location", "address", "स्थान"],
    category: "Contact",
  },
  {
    id: 3,
    question: "How can I contact Payzon India?",
    questionHindi: "पेज़ोन इंडिया से संपर्क कैसे करें?",
    answer: "You can contact us at +91 755 485 9540, +91 755 492 3296, or +91 9303430351. Email: info@payzonapi.com.",
    answerHindi: "आप हमसे +91 755 485 9540, +91 755 492 3296, या +91 9303430351 पर संपर्क कर सकते हैं। ईमेल: info@payzonapi.com।",
    keywords: ["contact", "phone", "email", "संपर्क"],
    category: "Contact",
  },
  {
    id: 4,
    question: "What digital marketing services do you provide?",
    questionHindi: "आप कौन सी डिजिटल मार्केटिंग सेवाएं प्रदान करते हैं?",
    answer: "We provide SEO optimization, paid ad campaigns, PR services, influencer marketing, brand promotion, and more to boost your business visibility and growth.",
    answerHindi: "हम एसईओ ऑप्टिमाइजेशन, पेड ऐड कैंपेन, पीआर सेवाएं, इन्फ्लुएंसर मार्केटिंग, ब्रांड प्रमोशन, और अधिक प्रदान करते हैं जो आपके व्यवसाय की दृश्यता और विकास को बढ़ावा देते हैं।",
    keywords: ["digital marketing", "SEO", "ads", "डिजिटल मार्केटिंग"],
    category: "Digital Marketing",
  },
  {
    id: 5,
    question: "What fintech solutions do you offer?",
    questionHindi: "आप कौन से फिनटेक सॉल्यूशंस प्रदान करते हैं?",
    answer: "We offer APIs for mobile recharge, DTH, bill payments, E-KYC verification, GSTN verification, and secure payment methods like UPI.",
    answerHindi: "हम मोबाइल रिचार्ज, डीटीएच, बिल पेमेंट्स, ई-केवाईसी वेरिफिकेशन, जीएसटीएन वेरिफिकेशन, और यूपीआई जैसी सुरक्षित पेमेंट मेथड्स के लिए एपीआई प्रदान करते हैं।",
    keywords: ["fintech", "API", "recharge", "फिनटेक"],
    category: "Fintech",
  },
  {
    id: 6,
    question: "Tell me about your cyber security services.",
    questionHindi: "आपकी साइबर सिक्योरिटी सेवाओं के बारे में बताएं।",
    answer: "We specialize in combating cyber fraud, providing data security, robust protection against digital crimes, and consultancy from expert advisors in the legal sector.",
    answerHindi: "हम साइबर फ्रॉड से लड़ने, डेटा सिक्योरिटी प्रदान करने, डिजिटल क्राइम्स के खिलाफ मजबूत सुरक्षा, और लीगल सेक्टर में विशेषज्ञ सलाहकारों से कंसल्टेंसी में विशेषज्ञ हैं।",
    keywords: ["cyber security", "protection", "साइबर सुरक्षा"],
    category: "Cyber Security",
  },
  {
    id: 7,
    question: "What is Sadaiv Satya?",
    questionHindi: "सदैव सत्य क्या है?",
    answer: "Sadaiv Satya is our broadcasting startup providing real-time news coverage across India with insightful analysis and reliable reporting.",
    answerHindi: "सदैव सत्य हमारा ब्रॉडकास्टिंग स्टार्टअप है जो भारत भर में रीयल-टाइम न्यूज कवरेज, इनसाइटफुल एनालिसिस और रिलायबल रिपोर्टिंग प्रदान करता है।",
    keywords: ["Sadaiv Satya", "broadcasting", "news", "सदैव सत्य"],
    category: "Broadcasting",
  },
  {
    id: 8,
    question: "What does Sadaiv Yuva Foundation do?",
    questionHindi: "सदैव युवा फाउंडेशन क्या करता है?",
    answer: "Sadaiv Yuva Foundation focuses on raising awareness about cyber threats, promoting digital safety, and providing education, resources, and training.",
    answerHindi: "सदैव युवा फाउंडेशन साइबर थ्रेट्स के बारे में जागरूकता बढ़ाने, डिजिटल सेफ्टी को प्रमोट करने, और एजुकेशन, रिसोर्सेज, और ट्रेनिंग प्रदान करने पर फोकस करता है।",
    keywords: ["Sadaiv Yuva", "foundation", "awareness", "सदैव युवा"],
    category: "Cyber Awareness",
  },
  {
    id: 9,
    question: "Do you provide web development services?",
    questionHindi: "क्या आप वेब डेवलपमेंट सेवाएं प्रदान करते हैं?",
    answer: "Yes, we offer innovative web development, project management, support, and maintenance using cutting-edge technologies for scalable solutions.",
    answerHindi: "हां, हम इनोवेटिव वेब डेवलपमेंट, प्रोजेक्ट मैनेजमेंट, सपोर्ट, और मेंटेनेंस प्रदान करते हैं जो स्केलेबल सॉल्यूशंस के लिए कटिंग-एज टेक्नोलॉजीज का उपयोग करते हैं।",
    keywords: ["web development", "websites", "वेब डेवलपमेंट"],
    category: "Web Development",
  },
  {
    id: 10,
    question: "What are your HR services?",
    questionHindi: "आपकी एचआर सेवाएं क्या हैं?",
    answer: "We provide employment services including payroll, benefits administration, HR management, and assistance for employers.",
    answerHindi: "हम एम्प्लॉयमेंट सेवाएं प्रदान करते हैं जिसमें पेरोल, बेनिफिट्स एडमिनिस्ट्रेशन, एचआर मैनेजमेंट, और एम्प्लॉयर्स के लिए असिस्टेंस शामिल हैं।",
    keywords: ["HR", "human resources", "employment", "एचआर"],
    category: "HR Services",
  },
];

const PayzonIndiaFAQ: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const messageIdCounter = useRef(1);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hello! I'm Grok, your AI assistant for Payzon India. Ask me anything about our services, location, contact, or offerings.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [suggestions, setSuggestions] = useState<FAQItem[]>([]);
  const [typingMessage, setTypingMessage] = useState<string | null>(null);
  const [language, setLanguage] = useState("en-US");
  const [showConfetti, setShowConfetti] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const [avatarState, setAvatarState] = useState<"idle" | "typing" | "speaking">("idle");
  const [searchTerm, setSearchTerm] = useState("");
  const [userName, setUserName] = useState("User"); // Added for user profile
  const [userAvatar, setUserAvatar] = useState("/images/user-avatar.png"); // Added for user avatar

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("faqChatHistory");
      if (saved) {
        const parsedMessages = JSON.parse(saved);
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
        recognitionRef.current.lang = language;
        recognitionRef.current.interimResults = false;

        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
          handleSubmit(transcript);
        };

        recognitionRef.current.onend = () => setIsListening(false);
      } else {
        setSpeechSupported(false);
      }
    }
  }, [language]);

  useEffect(() => {
    if (input.trim()) {
      const filtered = faqData
        .filter(
          (faq) =>
            faq.question.toLowerCase().includes(input.toLowerCase()) ||
            faq.questionHindi.toLowerCase().includes(input.toLowerCase()) ||
            faq.keywords.some((kw) =>
              kw.toLowerCase().includes(input.toLowerCase())
            )
        )
        .slice(0, 4);
      setSuggestions(filtered);
    } else {
      setSuggestions(faqData.slice(0, 4));
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
      const questionScore = calculateSimilarity(query, language === "en-US" ? faq.question : faq.questionHindi);
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
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setAvatarState("typing");

    const match = findBestMatch(query);
    const botResponseText = match
      ? `${language === "en-US" ? match.answer : match.answerHindi}\n\n(Regarding: ${language === "en-US" ? match.question : match.questionHindi})`
      : language === "en-US"
        ? "I'm sorry, I couldn't find a specific answer. Searching on Google for more information."
        : "क्षमा करें, मुझे कोई विशिष्ट उत्तर नहीं मिला। अधिक जानकारी के लिए Google पर खोज रहा हूं।";

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
          },
        ]);
        setTypingMessage(null);
        setAvatarState("idle");
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
        if (match) {
          toggleSpeaking(language === "en-US" ? match.answer : match.answerHindi);
        } else if (typeof window !== "undefined") {
          const searchQuery = encodeURIComponent("Payzon India " + query);
          window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
        }
      }
    }, 30);
  };

  const handleSuggestionClick = (faq: FAQItem) => {
    const query = language === "en-US" ? faq.question : faq.questionHindi;
    setInput(query);
    handleSubmit(query);
  };

  const toggleListening = () => {
    if (!recognitionRef.current || !speechSupported) return;

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
        setAvatarState("speaking");
      } catch (error) {
        console.error("Speech recognition error:", error);
        setIsListening(false);
        setAvatarState("idle");
      }
    }
  };

  const toggleSpeaking = (text: string) => {
    if (!synthRef.current || !speechSupported) return;

    if (isSpeaking) {
      synthRef.current.cancel();
      setIsSpeaking(false);
      setAvatarState("idle");
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language;
      utterance.onstart = () => {
        setIsSpeaking(true);
        setAvatarState("speaking");
      };
      utterance.onend = () => {
        setIsSpeaking(false);
        setAvatarState("idle");
      };
      utterance.onerror = (error) => {
        console.error("Speech synthesis error:", error);
        setIsSpeaking(false);
        setAvatarState("idle");
      };
      synthRef.current.speak(utterance);
    }
  };

  const handleSearchMore = () => {
    if (typeof window !== "undefined") {
      const searchQuery = encodeURIComponent("Payzon India Pvt Ltd " + (input || "services location contact offerings"));
      window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
      setMessages((prev) => [
        ...prev,
        {
          id: messageIdCounter.current++,
          text: language === "en-US" ? "I've opened Google search for more information about Payzon India." : "मैंने पेज़ोन इंडिया के बारे में अधिक जानकारी के लिए Google सर्च खोला है।",
          sender: "bot",
        },
      ]);
    }
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en-US" ? "hi-IN" : "en-US"));
  };

  const clearChat = () => {
    setMessages([
      {
        id: 0,
        text: language === "en-US" ? "Hello! I'm Grok, your AI assistant for Payzon India. Ask me anything about our services, location, contact, or offerings." : "नमस्ते! मैं ग्रोक हूं, पेज़ोन इंडिया के लिए आपका एआई असिस्टेंट। हमारी सेवाओं, स्थान, संपर्क, या ऑफरिंग्स के बारे में कुछ भी पूछें।",
        sender: "bot",
      },
    ]);
    messageIdCounter.current = 1;
    localStorage.removeItem("faqChatHistory");
  };

  const copyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const addReaction = (id: number, reaction: string) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, reaction } : msg))
    );
  };

  const exportChat = () => {
    const chatText = messages.map((msg) => `${msg.sender.toUpperCase()}: ${msg.text}`).join("\n\n");
    const blob = new Blob([chatText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "payzon-chat.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const searchChat = (term: string) => {
    setSearchTerm(term);
    // Optional: Highlight or filter messages
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} />}
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 bg-clip-text text-transparent">
            Payzon India AI Assistant
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mt-3 max-w-xl mx-auto">
            {language === "en-US" ? "Ask about our innovative services, locations, or partnerships!" : "हमारी नवीन सेवाओं, स्थानों, या साझेदारियों के बारे में पूछें!"}
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <motion.button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={language === "en-US" ? "Switch to Hindi" : "Switch to English"}
            >
              {language === "en-US" ? "हिन्दी" : "English"}
            </motion.button>
            <motion.button
              onClick={clearChat}
              className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Clear chat history"
            >
              <Trash2 className="inline w-5 h-5 mr-2" /> Clear
            </motion.button>
            <motion.button
              onClick={exportChat}
              className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Export chat"
            >
              <Download className="inline w-5 h-5 mr-2" /> Export
            </motion.button>
          </div>
        </motion.div>

        {/* Chat Container */}
        <motion.div
          className="w-full max-w-4xl bg-white/95 dark:bg-white/95 backdrop-blur-md border border-blue-200 rounded-3xl shadow-lg shadow-blue-200/30 mt-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Chatbot Avatar */}
          <motion.div
            className="absolute -top-16 left-1/2 -translate-x-1/2 w-20 h-20"
            animate={{
              y: avatarState === "typing" ? [0, -10, 0] : avatarState === "speaking" ? [0, -5, 0] : 0,
              scale: avatarState === "speaking" ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: avatarState === "typing" ? 0.5 : 0.3,
              repeat: avatarState !== "idle" ? Infinity : 0,
              repeatType: "reverse",
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Grok AI Assistant"
              width={80}
              height={80}
              className="rounded-full border-2 border-blue-300 shadow-md"
              priority
            />
          </motion.div>

          {/* Messages */}
          <div className="h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-4 scrollbar-thin scrollbar-thumb-blue-200/50 scrollbar-track-transparent">
            <AnimatePresence>
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                      G
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] sm:max-w-[60%] p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:scale-105 ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                        : "bg-gray-100 text-gray-800 border border-gray-200"
                    }`}
                  >
                    <p className="text-sm sm:text-base leading-relaxed">{msg.text}</p>
                    <div className="flex gap-2 mt-2">
                      <button onClick={() => copyMessage(msg.text)} className="text-gray-500 hover:text-gray-700">
                        <Copy className="w-4 h-4" />
                      </button>
                      <button onClick={() => addReaction(msg.id, "👍")} className="text-gray-500 hover:text-blue-500">
                        👍
                      </button>
                      <button onClick={() => addReaction(msg.id, "❤️")} className="text-gray-500 hover:text-red-500">
                        ❤️
                      </button>
                    </div>
                    {msg.reaction && <span className="text-2xl mt-1">{msg.reaction}</span>}
                  </div>
                  {msg.sender === "user" && (
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                      U
                    </div>
                  )}
                </motion.div>
              ))}
              {typingMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    G
                  </div>
                  <div className="max-w-[60%] p-4 sm:p-5 rounded-2xl bg-gray-100 text-gray-800 border border-gray-200">
                    <p className="text-sm sm:text-base leading-relaxed">{typingMessage}</p>
                    <div className="flex gap-1 mt-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></span>
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          <AnimatePresence>
            {suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="px-4 sm:px-6 py-3 bg-gray-50 border-t border-gray-200"
              >
                <p className="text-xs sm:text-sm text-gray-600 mb-2">
                  {language === "en-US" ? "Suggested Questions:" : "सुझाए गए प्रश्न:"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((faq) => (
                    <motion.button
                      key={faq.id}
                      onClick={() => handleSuggestionClick(faq)}
                      className="px-3 py-1 bg-blue-100/50 rounded-full text-gray-800 text-xs sm:text-sm hover:bg-blue-200/50 transition-all flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-blue-600 text-xs">{faq.category}</span>
                      {language === "en-US" ? faq.question : faq.questionHindi}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-3 sm:p-4 flex items-center gap-2 sm:gap-3 bg-white">
            <motion.button
              onClick={toggleListening}
              disabled={!speechSupported}
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
              aria-label={isListening ? "Stop listening" : "Start listening"}
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
              className="flex-1 bg-transparent text-gray-800 border border-gray-200 rounded-lg p-2 outline-none text-sm sm:text-base placeholder-gray-400"
              aria-label="Ask a question"
            />
            <motion.button
              onClick={() => handleSubmit()}
              className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Send message"
            >
              <Send className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>
            <motion.button
              onClick={handleSearchMore}
              className="p-2 sm:p-3 bg-gray-100 rounded-xl text-gray-600 hover:bg-gray-200 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Search on Google"
            >
              <Search className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>
            <motion.button
              onClick={() => toggleSpeaking(messages[messages.length - 1]?.text || "")}
              disabled={!speechSupported || messages.length <= 1 || messages[messages.length - 1].sender !== "bot"}
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
              aria-label={isSpeaking ? "Stop speaking" : "Speak message"}
            >
              <Volume2 className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 w-full max-w-4xl"
        >
          <p className="text-sm text-gray-600 mb-2">
            {language === "en-US" ? "Quick Links:" : "त्वरित लिंक:"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {faqData.slice(0, 6).map((faq) => (
              <motion.button
                key={faq.id}
                onClick={() => handleSuggestionClick(faq)}
                className="p-2 bg-blue-100/50 rounded-lg text-gray-800 text-xs sm:text-sm hover:bg-blue-100 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === "en-US" ? faq.question : faq.questionHindi}
              </motion.button>
            ))}
          </div>
        </motion.div>

       

        {!speechSupported && (
          <p className="text-red-500 mt-4">
            {language === "en-US" ? "Speech features are not supported in this browser." : "इस ब्राउज़र में स्पीच फीचर्स समर्थित नहीं हैं।"}
          </p>
        )}
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

export default PayzonIndiaFAQ;