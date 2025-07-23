import React, { useState, useRef, useEffect } from "react";

const ChatScreen = ({ onBack, lovedOneProfile, userPhoto, lovedOnePhoto }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "system",
      content: `This is the very beginning to your conversations with ${
        lovedOneProfile?.lovedOneName || "Ellie"
      }. Only the two of you are in this conversation. Make the most of it!`,
      timestamp: new Date(),
      sender: "system",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to generate AI response using OpenAI API
  const generateAIResponse = async (userMessage, conversationHistory) => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory,
          lovedOneProfile,
          userPhoto,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get AI response");
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error("Error generating AI response:", error);
      return getFallbackResponse(userMessage);
    }
  };

  // Fallback responses if API is not available
  const getFallbackResponse = (userMessage) => {
    const responses = [
      "That sounds wonderful! I'd love to hear more about it.",
      "Oh, really? That's so interesting! Tell me more.",
      "I miss those times too. What else happened?",
      "That's amazing! I'm so happy for you.",
      "I can totally relate to that feeling.",
      "That reminds me of when we used to...",
      "I'm so glad you shared that with me.",
      "That's exactly the kind of thing I would say!",
      "I love hearing about your day.",
      "That's so you! I can picture it perfectly.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: newMessage,
      timestamp: new Date(),
      sender: "Alex",
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setIsTyping(true);
    setIsLoading(true);

    try {
      // Get conversation history for context
      const conversationHistory = messages
        .filter((msg) => msg.type !== "system")
        .map((msg) => ({
          role: msg.type === "user" ? "user" : "assistant",
          content: msg.content,
        }));

      // Generate AI response
      const aiResponseContent = await generateAIResponse(
        newMessage,
        conversationHistory
      );

      const aiResponse = {
        id: Date.now() + 1,
        type: "ai",
        content: aiResponseContent,
        timestamp: new Date(),
        sender: lovedOneProfile?.lovedOneName || "Ellie",
      };

      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error("Error in handleSendMessage:", error);
      // Add error message
      const errorResponse = {
        id: Date.now() + 1,
        type: "ai",
        content: "I'm having trouble responding right now. Can you try again?",
        timestamp: new Date(),
        sender: lovedOneProfile?.lovedOneName || "Ellie",
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    const now = new Date();
    const messageDate = new Date(date);

    if (messageDate.toDateString() === now.toDateString()) {
      return `Today at ${messageDate.getHours()}:${messageDate
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
    } else {
      return `Yesterday at ${messageDate.getHours()}:${messageDate
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
    }
  };

  const renderMessage = (message) => {
    if (message.type === "system") {
      return (
        <div
          key={message.id}
          className="text-center text-sm text-gray-600 font-alumni mb-4"
        >
          {message.content}
        </div>
      );
    }

    const isUser = message.type === "user";
    const profilePic = isUser ? userPhoto?.imageUrl : lovedOnePhoto?.imageUrl;
    const senderName = message.sender;

    return (
      <div
        key={message.id}
        className={`flex mb-4 ${isUser ? "justify-end" : "justify-start"}`}
      >
        {!isUser && (
          <div className="flex-shrink-0 mr-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              {profilePic ? (
                <img
                  src={profilePic}
                  alt={senderName}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-gray-600 font-alumni text-sm">
                  {senderName.charAt(0)}
                </span>
              )}
            </div>
          </div>
        )}

        <div className={`max-w-xs ${isUser ? "order-1" : "order-2"}`}>
          <div className="flex items-center mb-1">
            <span className="text-sm font-semibold text-gray-800 font-alumni">
              {senderName}
            </span>
            <span className="text-xs text-gray-500 ml-2 font-alumni">
              {formatTime(message.timestamp)}
            </span>
          </div>
          <div
            className={`px-4 py-2 rounded-lg ${
              isUser ? "bg-gray-200 text-gray-800" : "bg-gray-100 text-gray-800"
            }`}
          >
            <p className="text-sm font-alumni">{message.content}</p>
          </div>
        </div>

        {isUser && (
          <div className="flex-shrink-0 ml-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              {profilePic ? (
                <img
                  src={profilePic}
                  alt={senderName}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-gray-600 font-alumni text-sm">
                  {senderName.charAt(0)}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-[#EAE8E3]">
      {/* Header */}
      <div className="relative w-full px-6 py-4 bg-[#EAE8E3] border-b border-gray-200">
        <button
          onClick={onBack}
          className="absolute top-4 left-6 text-gray-800 hover:text-gray-600 transition-colors"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/back-arrow.svg`}
            alt="Back arrow"
            className="w-6 h-6"
          />
        </button>
        <h1 className="text-2xl font-light text-gray-800 font-alumni text-center">
          REMINIS
        </h1>
        <img
          src={`${process.env.PUBLIC_URL}/images/light.svg`}
          alt="Dark mode icon"
          className="w-6 h-6 absolute top-4 right-6"
        />
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map(renderMessage)}

        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600 font-alumni text-sm">
                  {lovedOneProfile?.lovedOneName?.charAt(0) || "E"}
                </span>
              </div>
            </div>
            <div className="max-w-xs">
              <div className="flex items-center mb-1">
                <span className="text-sm font-semibold text-gray-800 font-alumni">
                  {lovedOneProfile?.lovedOneName || "Ellie"}
                </span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-gray-100">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="px-6 py-4 bg-[#EAE8E3] border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Message"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 font-alumni text-sm bg-white"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim() || isLoading}
            className="px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 font-alumni text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
