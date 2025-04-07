import { useState } from "react";

const ChatInput = ({ onSend }: { onSend: (message: string) => void }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim() === "") return;
    onSend(text);
    setText("");
  };

  return (
    <div className="flex items-center gap-2 mt-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        className="flex-1 border border-[#828282] block min-w-0 grow  pr-1 pl-1 placeholder:text-[#4F4F4F] sm:text-sm/6 text-[#4F4F4F] rounded px-3 py-2 text-sm focus:outline-none"
        placeholder="Type a new message"
      />
      <button
        onClick={handleSend}
        className="bg-[#2F80ED] text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
