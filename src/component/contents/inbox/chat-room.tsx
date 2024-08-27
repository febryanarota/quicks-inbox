import { QuickButtonsContext } from "@/context/quick-button-context";
import { Chat, ChatListData, ChatRoomData } from "@/lib/types";
import Image from "next/image";
import { useContext, useState } from "react";
import { ChatArea } from "./chat-area";
import { chatRoomData } from "@/lib/data/chat-room-data";

export default function ChatRoom({
  chat,
  handleBack,
}: {
  chat: ChatListData;
  handleBack: () => void;
}) {
  const context = useContext(QuickButtonsContext);
  const [chatData, setChatData] = useState<Chat[]>(
    (chatRoomData.find((chatData) => chatData.id === chat.id) as ChatRoomData)
      .chat
  );
  const [newMessage, setNewMessage] = useState<string>("");

  if (!context) {
    throw new Error("QuickButtons must be used within a QuickButtonsProvider");
  }

  const pending = chat.pending || false;
  const { setIsMenuOpen, setActiveFeature } = context;

  const handleClose = () => {
    setActiveFeature("none");
    setIsMenuOpen(false);
  };

  const handleSend = () => {
    if (newMessage.trim()) {
      const currentDate = new Date().toISOString().split("T")[0];
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const newChat = {
        id: chatData.length + 100,
        name: "You",
        message: newMessage,
        time: currentTime,
        date: currentDate,
        read: true,
      };

      setChatData((prevChatData) => {
        const updatedChatData = [...prevChatData];
        const latestChatDay = updatedChatData[updatedChatData.length - 1];
        const updatedChatsForDay = [...latestChatDay.chats, newChat];
        updatedChatData[updatedChatData.length - 1] = {
          ...latestChatDay,
          chats: updatedChatsForDay,
        };

        return updatedChatData;
      });

      setNewMessage("");
    }
  };

  var input = document.getElementById("newMessage");
  if (input) {
    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("sendButton")?.click();
      }
    });
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-row justify-between px-[32px] pb-[22px] border-b-[1px] border-primary-darkGray">
        <div className="flex flex-row leading-5 items-center">
          <button onClick={handleBack}>
            <Image
              src="/icons/arrow_left.svg"
              alt="Back"
              width={20}
              height={20}
              className="w-full h-full"
            />
          </button>

          <div className="ml-5">
            <p className="text-primary-blue font-bold line-clamp-1">
              {chat.title}
            </p>
            {chat.type === "group" && <p className="text-xs">3 Participants</p>}
          </div>
        </div>

        <button onClick={handleClose}>
          <Image src="/icons/close.svg" alt="Phone" width={15} height={15} />
        </button>
      </div>
      <ChatArea chatData={chatData} setChatData={setChatData} />

      {
        pending &&
        <div className="mx-[32px] flex flex-row bg-[#E9F3FF] py-1 px-2 text-xs mb-2 items-center gap-2 rounded-md">
          <div className="border-[#F8F8F8] h-5 w-5 animate-spin rounded-full border-[3px] border-t-primary-blue" />
          <p className="grow">
            Please wait while we connect you with one of our team ...
          </p>
        </div>
      }

      <div className="px-[32px] h-fit flex flex-row items-center">
        <input
          type="text"
          value={newMessage}
          id="newMessage"
          onChange={(e) => setNewMessage(e.target.value)}
          className="grow border-[1px] border-primary-gray rounded-[5px] text-sm py-1 px-2"
          placeholder="Type a new message"
        />
        <button
          onClick={handleSend}
          id="sendButton"
          className="text-center w-[76px] p-1 bg-primary-blue rounded-[5px] ml-3 text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}
