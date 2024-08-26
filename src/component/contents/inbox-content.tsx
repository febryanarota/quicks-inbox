"use clint";
import { ChatListData } from "@/lib/types";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function InboxContent() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const data: ChatListData[] = [
    {
      type: "group",
      title: "Project Team",
      date: "2024/08/26",
      time: "10:30",
      name: "John Doe",
      message: "Hey everyone, let’s meet at 3 PM for the project discussion.",
    },
    {
      type: "private",
      title: "John Doe",
      date: "2024/08/26",
      time: "11:00",
      name: "Jane Smith",
      message: "Can you send me the latest report?",
    },
    {
      type: "group",
      title: "Study Group",
      date: "2024/08/25",
      time: "09:15",
      name: "Alice Johnson",
      message: "Don’t forget to review the notes before tomorrow’s exam.",
    },
    {
      type: "private",
      title: "Alice Johnson",
      date: "2024/08/25",
      time: "08:45",
      name: "John Doe",
      message: "I finished the assignment, should I email it to you?",
    },
    {
      type: "group",
      title: "Family Chat",
      date: "2024/08/24",
      time: "07:30",
      name: "Mom",
      message: "Dinner is ready, everyone come to the table!",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after 3 seconds
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="w-full h-full flex flex-col py-[24px] px-[32px] text-primary-darkGray">
      <div
        className="border-[1.5px] border-[#828282] rounded-[5px] py-1 px-5 flex flex-row justify-between"
        onClick={handleDivClick}
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
      {isLoading ? (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="border-[#F8F8F8] h-10 w-10 animate-spin rounded-full border-4 border-t-[#C4C4C4]" />
          <p className="text-sm font-bold mt-5">Loading Chats ...</p>
        </div>
      ) : (
        <div className="mt-[22px] max-h-full overflow-auto">
          {
            data.map((chat, index) => (
              <div key={index}>
                <ChatList data={chat}/>
                {
                  index !== (data.length - 1) &&
                  <div className="border-t-[1px] border-primary-gray my-[22px]"></div>
                }
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
}

// Notes:
// - fetching chats dapat diimplementasi lebih lanjut menjadi fetching on scroll
function ChatList({ data } : { data : ChatListData}) {
  return (
    <div className="flex flex-row ">
      <div className="relative ">
        <div className="w-[34px] h-[34px] bg-primary-blue rounded-full flex items-center justify-center absolute ml-4">
          <Image src="/icons/person_light.svg" alt="" width={24} height={24} />
        </div>
        <div className="w-[34px] h-[34px] bg-primary-lightGray rounded-full flex items-center justify-center">
          <Image src="/icons/person_dark.svg" alt="" width={24} height={24} />
        </div>
      </div>
      <div className="flex flex-col w-full ml-4 pl-4">
        <div className="flex flex-row gap-2">
          <p className="font-bold text-primary-blue max-w-full line-clamp-2">{data.title}</p>
          <div className="flex flex-row gap-2 min-w-fit text-sm self-end">
            <p>{data.date}</p>
            <p>{data.time}</p>
          </div>
        </div>
        <p className="line-clamp-1">{data.name}:</p>
        <p className="line-clamp-1">{data.message}</p>
      </div>
    </div>
  );
}
