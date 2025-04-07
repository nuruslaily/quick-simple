import ChatDetail from "./ChatDetail";
import ChatItem from "./ChatItem";
import LoadingChats from "./LoadingChats";
import SearchInbox from "./SearchInbox";

const InboxList = ({
  data,
  onSelect,
  selectedChat,
  setSelectedChat,
  isLoadingInbox,
}: any) => {
  return (
    <div className="absolute top-50 right-10 bg-white p-4 rounded shadow w-[734px] h-[537px]">
      {selectedChat ? (
        <ChatDetail chat={selectedChat} onBack={() => setSelectedChat(null)} />
      ) : (
        <>
          <SearchInbox />
          {isLoadingInbox ? (
            <LoadingChats />
          ) : (
            <div className="space-y-2 overflow-y-auto h-[470px] mt-4 text-[#4f4f4f] divide-y divide-[#E0E0E0]">
              {data.map((chat: any, idx: number) => (
                <ChatItem
                  key={idx}
                  chat={chat}
                  onClick={() => onSelect(chat)}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default InboxList;
