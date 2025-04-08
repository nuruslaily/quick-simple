import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatBubble from "./ChatBubble";

const colorMap = ["bg-[#FCEED3]", "bg-[#D2F2EA]"];

const colorTextMap = ["text-orange-500", "text-green-500"];

interface Message {
  sender: string;
  text: string;
  time: string;
  date: string;
  isRead?: boolean;
}

interface Chat {
  subject: string;
  participant: number;
  group: boolean;
  name: string;
  msg: Message[];
  newMsgIdx?: number;
}

interface ChatDetailProps {
  chat: Chat;
  onBack: () => void;
}

const getColorForSender = (sender: string): string => {
  let hash = 0;
  for (let i = 0; i < sender.length; i++) {
    hash = sender.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colorMap[Math.abs(hash) % colorMap.length];
};

const getColorTextForSender = (sender: string): string => {
  let hash = 0;
  for (let i = 0; i < sender.length; i++) {
    hash = sender.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colorTextMap[Math.abs(hash) % colorTextMap.length];
};

const ChatDetail: React.FC<ChatDetailProps> = ({ chat, onBack }) => {
  const newMsgIdx = chat.newMsgIdx ?? -1;
  let lastDate = "";
  const [isWaiting, setIsWaiting] = useState(false);
  const [messages, setMessages] = useState<Message[]>(chat.msg);

  const handleSend = (msgText: string) => {
    const now = new Date();
    const newMessage: Message = {
      sender: "You",
      text: msgText,
      time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      date: now.toISOString().split("T")[0], // format YYYY-MM-DD
      isRead: false,
    };

    setMessages((prev) => [...prev, newMessage]);

    setIsWaiting(true);

    setTimeout(() => {
      setIsWaiting(false);

      const reply: Message = {
        sender:
          chat.name == "FastVisa Support"
            ? "FastVisa Support"
            : chat.name == "Obaidullah Amarkhil"
            ? "Obaidullah Amarkhil"
            : chat.name == "Cameron Phillips"
            ? "Cameron Phillips"
            : chat.name == "Ellen"
            ? "Ellen"
            : "Agent",
        text: "Thanks for reaching out! We'll help you shortly ✨",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        date: now.toISOString().split("T")[0],
      };

      setMessages((prev) => [...prev, reply]);
    }, 2000);
  };

  return (
    <div className=" bg-white h-[80vh] flex flex-col">
      <ChatHeader
        title={chat.subject}
        subtitle={chat.participant}
        onBack={onBack}
        group={chat.group}
      />

      <div className="max-h-[50vh] flex-1 overflow-y-auto mt-4 space-y-4 text-[#4f4f4f] pr-2">
        {messages.map((message, idx) => {
          const isYou = message.sender === "You";
          const isNewDate = message.date !== lastDate;
          lastDate = message.date;

          return (
            <React.Fragment key={idx}>
              {isNewDate && (
                <div className="flex items-center my-4">
                  <hr className="flex-grow border-gray-600" />
                  <span className="text-center p-2 text-md font-semibold text-gray-600">
                    Today{" "}
                    {new Date(message.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </span>
                  <hr className="flex-grow border-gray-600" />
                </div>
              )}
              {idx == newMsgIdx && (
                <div className="flex justify-center items-center my-4">
                  <div className="flex text-center text-md font-semibold text-blue-500 p-2 bg-[#E9F3FF]">
                    New Message
                  </div>
                </div>
              )}
              <ChatBubble
                message={message}
                isYou={isYou}
                isGroup={chat.group}
                getColor={getColorForSender}
                getColorText={getColorTextForSender}
                onEdit={(newText) => {
                  setMessages((prev) =>
                    prev.map((m, i) =>
                      i === idx ? { ...m, text: newText } : m
                    )
                  );
                }}
                onDelete={() => {
                  setMessages((prev) => prev.filter((_, i) => i !== idx));
                }}
              />
            </React.Fragment>
          );
        })}
      </div>
      {isWaiting && (
        <div className="text-sm text-[#2F80ED] bg-[#F1F8FF] px-4 py-3 rounded mt-4 flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4 text-[#2F80ED]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            ></path>
          </svg>
          Please wait while we connect you with one of our team ...
        </div>
      )}

      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatDetail;
