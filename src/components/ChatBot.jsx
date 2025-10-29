import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showVoiceIntro, setShowVoiceIntro] = useState(false);

  // Predefined answers for common questions
  const knowledgeBase = {
  'stack': 'I primarily use Java, Spring Boot, Kafka, and AWS for backend development, and React for frontend.',
  'airlines': 'The Airlines Project is a microservices-based system using Spring Boot, Kafka, and AWS. It handles flight booking, scheduling, and payment processing.',
  'experience': 'I have experience as a Lead Developer at USAA, Backend Developer at CITI, and previous roles in software development.',
  'contact': 'You can reach me at viswanadhkakani27@gmail.com or connect on LinkedIn.',
  'skills': 'My core skills include Java, Spring Boot, Microservices, Kafka, AWS, React, and System Design.',
  'projects': 'Some of my key projects include the Airlines Booking System, Event Processing Pipeline, and this portfolio website.',
  'voice intro': 'Click the button below to listen to my voice introduction!',
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      text: input,
      sender: 'user',
      timestamp: new Date().getTime(),
    };

    // Generate bot response
    const response = generateResponse(input.toLowerCase());
    const botMessage = {
      text: response,
      sender: 'bot',
      timestamp: new Date().getTime(),
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  const generateResponse = (query) => {
    // Check knowledge base for relevant answers
    for (const [key, value] of Object.entries(knowledgeBase)) {
      if (query.includes(key)) {
        if (key === 'voice intro') {
          setShowVoiceIntro(true);
        }
        return value;
      }
    }
    return "I apologize, but I'm not sure about that. Feel free to ask about my tech stack, projects, experience, or skills!";
  };

  return (
  <>
  {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 p-4 bg-emerald-600 rounded-full shadow-lg hover:bg-emerald-500 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? '✕' : '💬'}
      </motion.button>

  {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-40 right-6 z-50 w-80 bg-gray-800 rounded-lg shadow-xl"
          >
            {/* Chat Header */}
            <div className="p-4 bg-emerald-600 rounded-t-lg">
              <h3 className="text-white font-semibold">Ask me anything!</h3>
              <p className="text-emerald-100 text-sm">I can tell you about my projects, skills, and experience</p>
              <button
                className="mt-2 px-3 py-1 bg-emerald-500 text-white rounded hover:bg-emerald-400 transition-colors text-sm"
                onClick={() => setShowVoiceIntro(true)}
              >
                Voice Assist
              </button>
            </div>

            {/* Voice Intro Audio (shown when triggered) */}
            {showVoiceIntro && (
              <div className="p-4 border-b border-gray-700 flex flex-col items-center">
                <span className="mb-2 text-emerald-300 font-semibold">My Voice Introduction</span>
                <audio controls>
                  <source src="/src/assets/Portfolio.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <button
                  className="mt-2 text-xs text-emerald-400 underline"
                  onClick={() => setShowVoiceIntro(false)}
                >
                  Hide
                </button>
              </div>
            )}

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.timestamp}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-700 text-gray-100'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about my projects, skills..."
                  className="flex-1 p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  onClick={handleSend}
                  className="p-2 bg-emerald-600 rounded hover:bg-emerald-500 transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;