import user from "../assets/user.svg";

const ChatItem = ({ chat, onClick }: any) => (
  <div
    onClick={onClick}
    className="cursor-pointer flex items-start gap-2 p-2 hover:bg-gray-100 rounded"
  >
    {chat.name ? (
      <img src={user} alt="icon" />
    ) : (
      <div className="w-8 h-8 bg-[#2F80ED] rounded-full text-white flex items-center justify-center text-sm font-bold">
        {chat.subject.charAt(0)}
      </div>
    )}

    <div className="flex-1">
      <div className="text-sm font-semibold text-[#2F80ED] truncate">
        {chat.subject} {chat.group ? `[${chat.group}]` : ""}
      </div>
      <div className="text-sm font-semibold text-[#4f4f4f]">
        {chat.name ? `${chat.name} :` : ""}
      </div>
      <div className="text-xs text-[#4f4f4f] truncate">
        {" "}
        {chat.msg[chat.msg.length - 1]?.text}
      </div>
    </div>
    <div className="text-xs text-[#4f4f4f] whitespace-nowrap">{chat.time}</div>
    {chat.msg.some((m: any) => !m.isRead) && (
      <div className="w-2 h-2 bg-red-500 rounded-full ml-2 mt-1" />
    )}
  </div>
);

export default ChatItem;
