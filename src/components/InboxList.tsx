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
    <div className="w-537 h-736 flex flex-col items-center justify-center p-4 md:p-4 ">
      <div className="w-[90%] fixed top-[5vh] sm:w-[80%] sm:bottom-15 sm:top-auto sm:right-20 xl:w-[50%] xl:max-w-[50%] xl:h-[70vh] xl:top-30 xl:right-10 bg-white p-4 rounded shadow overflow-hidden">
        {selectedChat ? (
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
