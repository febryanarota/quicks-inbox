"use clint";
import { ChatListData } from "@/lib/types";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ChatList from "./chat-list";
import ChatRoom from "./chat-room";
import { ListChat } from "@/lib/data/chat-list-data";

export default function InboxContent() {

  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedChat, setSelectedChat] = useState<ChatListData | null>(null);

  const data: ChatListData[] = ListChat;
    

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after 3 seconds
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleSearchDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleChatClick = (chat: ChatListData) => {
    setSelectedChat(chat);
  };

  const handleBackClick = () => {
    setSelectedChat(null);
  };

  return (
    <div className="w-full h-full flex flex-col py-[24px]  text-primary-darkGray">
      { selectedChat === null &&
        <div
          className="border-[1.5px] border-[#828282] mx-[32px] rounded-[5px] py-1 px-5 flex flex-row justify-between"
          onClick={handleSearchDivClick}
        >
          <input
            type="text"
            ref={inputRef}
            className="grow focus:ring-0 focus:outline-none"
            placeholder="Search"
          />
          <Image
            src="/icons/search.svg"
            width={12}
            height={12}
            alt="search-icon"
          />
        </div>
      }
      {isLoading ? (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="border-[#F8F8F8] h-10 w-10 animate-spin rounded-full border-4 border-t-[#C4C4C4]" />
          <p className="text-sm font-bold mt-5">Loading Chats ...</p>
        </div>
      ) : selectedChat === null ? (
        <div className="max-h-full overflow-auto mx-[32px]">
          {
            data.map((chat, index) => (
              <div key={index} onClick={() => handleChatClick(chat)} className="hover:cursor-pointer hover:bg-primary-lightGray hover:bg-opacity-50 rounded-md">
                <ChatList data={chat} />
                {
                  index !== (data.length - 1) &&
                  <div className="border-t-[1px] border-primary-gray"></div>
                }
              </div>
            ))
          }
        </div>
      ) : (
        <ChatRoom chat={selectedChat} handleBack={handleBackClick}/>
      )
    }
    </div>
  );
}

// Notes:
// - fetching chats dapat diimplementasi lebih lanjut menjadi fetching on scroll

