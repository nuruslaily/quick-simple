import allButton from "../assets/all-button.svg";
import activeInboxButton from "../assets/active-inbox.svg";
import activeTaskButton from "../assets/active-task.svg";
import inboxButton from "../assets/inbox.svg";
import taskButton from "../assets/task.svg";
import searchButton from "../assets/search.svg";

import { useEffect, useState } from "react";
import dataInbox from "../api/data_inbox";
import InboxList from "../components/InboxList";

function Inbox() {
  const [activeButton, setActiveButton] = useState("default");
  const [showOptions, setShowOptions] = useState(false);
  const [isLoadingInbox, setIsLoadingInbox] = useState(true);
  const [inboxData, setInboxData] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    if (activeButton === "inbox") {
      setIsLoadingInbox(true);
      const timeout = setTimeout(() => {
        setIsLoadingInbox(false);
      }, 2000);

      dataInbox().then((data) => {
        setInboxData(data);
        setIsLoadingInbox(false);
      });

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [activeButton]);

  const handleMainButtonClick = () => {
    if (activeButton !== "default") {
      setActiveButton("default");
    } else {
      setShowOptions(!showOptions);
    }
  };

  const handleOptionClick = (type: "inbox" | "task") => {
    if (activeButton === type) {
      setActiveButton("default");
      setShowOptions(true);
    } else {
      setActiveButton(type);
      setShowOptions(true);
    }
  };

  const handleChatClick = (chat: any) => {
    const newMsgIdx = chat.msg.findIndex((m: any) => !m.isRead);
    const updatedChat = {
      ...chat,
      newMsgIdx,
      msg: chat.msg.map((m: any) => ({ ...m, isRead: true })),
    };
    setSelectedChat(updatedChat);
  };

  return (
    <>
      <div className="h-screen w-screen bg-[#333333] text-gray-200 flex">
        <aside className="w-64 bg-[#333333] p-4 border divide-x divide-white"></aside>

        <main className="flex-1 flex flex-col">
          <div className="p-2 pl-2 bg-[#4F4F4F] items-center gap-2 flex">
            <img src={searchButton} alt="search" className="w-5 h-5" />
            <input
              type="text"
              className="w-full p-2 bg-[#4F4F4F] text-gray-200 "
            />
          </div>
          <div className="flex-1 flex justify-center items-center relative">
            {activeButton === "inbox" && (
              <InboxList
                data={inboxData}
                onSelect={(chat: any) => handleChatClick(chat)}
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
                isLoadingInbox={isLoadingInbox}
              />
            )}

            {activeButton === "task" && (
              <div className="absolute top-80 right-10 bg-white p-4 rounded shadow w-[500px] h-[400px]">
                <input
                  type="text"
                  placeholder="Search Tasks"
                  className="w-full mb-2 px-2 py-1 border rounded"
                />
                <div className="text-center mt-20 text-gray-500">
                  <div className="animate-spin border-t-2 border-gray-500 rounded-full w-6 h-6 mx-auto mb-2"></div>
                  Loading Tasks...
                </div>
              </div>
            )}

            <div className="flex flex-row-reverse gap-2 fixed bottom-4 right-4">
              <button
                onClick={handleMainButtonClick}
                className="relative w-24 h-24"
              >
                {activeButton !== "default" && (
                  <div className="absolute -left-3 top-1 w-20 h-20 bg-[#4F4F4F] rounded-full z-0" />
                )}
                <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center">
                  <img
                    src={
                      activeButton === "inbox"
                        ? activeInboxButton
                        : activeButton === "task"
                        ? activeTaskButton
                        : allButton
                    }
                    alt="main button"
                    className="w-20 h-20"
                  />
                </div>
              </button>

              <div className="flex flex-row-reverse gap-2 fixed bottom-6 right-28">
                {activeButton === "default" && showOptions && (
                  <>
                    <button onClick={() => handleOptionClick("inbox")}>
                      <center>Inbox</center>
                      <img
                        src={inboxButton}
                        alt="Inbox"
                        className="w-20 h-20"
                      />
                    </button>

                    <button onClick={() => handleOptionClick("task")}>
                      <center>Task</center>
                      <img src={taskButton} alt="Task" className="w-20 h-20" />
                    </button>
                  </>
                )}
              </div>
              <div className="flex flex-row-reverse gap-2 fixed bottom-4 right-33">
                {activeButton === "inbox" && (
                  <>
                    <button onClick={() => handleOptionClick("task")}>
                      <center>Task</center>
                      <img src={taskButton} alt="Task" className="w-20 h-20" />
                    </button>
                  </>
                )}
              </div>
              {activeButton === "task" && (
                <>
                  <div className="flex flex-row-reverse gap-2 fixed bottom-4 right-33">
                    <button onClick={() => handleOptionClick("inbox")}>
                      <center>Inbox</center>
                      <img
                        src={inboxButton}
                        alt="Inbox"
                        className="w-20 h-20"
                      />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Inbox;
