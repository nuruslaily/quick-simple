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
    <div className="w-537 h-736 flex flex-col items-center justify-center p-2 md:p-4 ">
      <div className="w-537 max-w-[734px] h-736 md:h-[537px] fixed top-20 md:absolute md:top-50 md:right-10 bg-white p-4 rounded shadow overflow-hidden">
        {selectedChat ? (
          // 👇 Di layar kecil, tombol "Back" akan terlihat
          <ChatDetail
            chat={selectedChat}
            onBack={() => setSelectedChat(null)}
          />
        ) : (
          <>
            <SearchInbox />
            {isLoadingInbox ? (
              <LoadingChats />
            ) : (
              <div className="space-y-2 overflow-y-auto h-[calc(100%-64px)] mt-4 text-[#4f4f4f] divide-y divide-[#E0E0E0]">
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
    </div>
  );
};

export default InboxList;
