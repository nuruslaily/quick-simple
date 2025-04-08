import React, { useState, useRef, useEffect, useMemo } from "react";
import detail from "../assets/detail.svg";
interface Message {
  sender: string;
  text: string;
  time: string;
}

interface ChatBubbleProps {
  message: Message;
  isYou: boolean;
  isGroup: boolean;
  getColor: (sender: string) => string;
  getColorText: (sender: string) => string;
  onEdit: (newText: string) => void;
  onDelete: () => void;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  isYou,
  isGroup,
  getColor,
  getColorText,
  onEdit,
  onDelete,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const bubbleColor = useMemo(() => {
    if (isYou) return "bg-[#EEDCFF]";
    if (isGroup) return getColor(message.sender);
    return "bg-[#F8F8F8]";
  }, [isYou, isGroup, message.sender]);

  const textColor = useMemo(() => {
    if (isYou) return "text-purple-500";
    if (isGroup) return getColorText(message.sender);
    return "text-blue-500";
  }, [isYou, isGroup, message.sender]);

  return (
    <div className={`flex flex-col ${isYou ? "items-end" : "items-start"}`}>
      <div className={`text-md font-semibold ${textColor}`}>
        {isYou ? "You" : message.sender}
      </div>

      <div
        className={`flex items-start gap-2 ${
          isYou ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div
          className={`text-md p-2 rounded max-w-[75%] ${bubbleColor} text-[#4F4F4F] ${
            isYou ? "text-right" : "text-left"
          }`}
        >
          {message.text}
        </div>

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-500 hover:text-gray-800"
          >
            <img src={detail} alt="menu" className="w-4 h-4" />
          </button>
          {menuOpen && (
            <div
              className={`absolute mt-1 w-24 bg-white border border-gray-200 rounded shadow z-10
          ${isYou ? "right-0" : "left-0"}`}
            >
              <button
                onClick={() => {
                  setMenuOpen(false);
                  const newText = prompt("Edit your message:", message.text);
                  if (newText !== null && newText.trim() !== "") {
                    onEdit(newText.trim());
                  }
                }}
                className="block w-full px-4 py-2 text-sm text-blue-500 hover:bg-gray-100 text-left"
              >
                Edit
              </button>

              <hr className="border-t border-gray-200" />
              <button
                onClick={() => {
                  setMenuOpen(false);
                  if (
                    confirm("Are you sure you want to delete this message?")
                  ) {
                    onDelete();
                  }
                }}
                className="block w-full px-4 py-2 text-sm text-red-500 hover:bg-red-100 text-left"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="text-[10px] text-[#828282] mt-1">{message.time}</div>
    </div>
  );
};

export default ChatBubble;
