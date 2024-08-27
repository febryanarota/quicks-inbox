import { Chat, ChatData } from "@/lib/types";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function ChatArea({ chatData, setChatData }: { chatData: Chat[], setChatData: (chatData: Chat[]) => void }) {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatData]);
  
  const handleEdit = (
    chatIndex: number,
    chatSubIndex: number,
    newMessage: string
  ) => {
    // should've used API to edit the chat
    const updatedChatData = [...chatData];
    updatedChatData[chatIndex].chats[chatSubIndex].message = newMessage;
    setChatData(updatedChatData);
  };

  const handleDelete = (chatIndex: number, chatSubIndex: number) => {
    // should've used API to delete the chat
    const updatedChatData = [...chatData];
    updatedChatData[chatIndex].chats.splice(chatSubIndex, 1);
    setChatData(updatedChatData);
  };

  return (
    <div
      ref={chatContainerRef}
      className="w-full h-full px-[32px] flex flex-col py-2 overflow-y-auto gap-5 "
    >
      {chatData.map((chat, chatIndex) => (
        <div className="flex flex-col gap-2" key={chatIndex}>
          <div className="flex flex-row">
            <div className="grow border-t-[1px] translate-y-3 border-primary-darkGray"></div>
            <p className="mx-2 text-sm">{chat.date}</p>
            <div className="grow border-t-[1px] translate-y-3 border-primary-darkGray"></div>
          </div>
          {chat.chats.map((chatData, chatSubIndex) => (
            <div className="flex flex-col gap-2" key={chatSubIndex}>
              {!chatData.read && (
                <div className="flex flex-row">
                  <div className="grow border-t-[1px] translate-y-3 border-indicator-red"></div>
                  <p className="mx-2 text-sm text-indicator-red">New Message</p>
                  <div className="grow border-t-[1px] translate-y-3 border-indicator-red"></div>
                </div>
              )}
              <BubbleChat
                chatData={chatData}
                isUser={chatData.name === "You"}
                color={
                  chatData.name === "You"
                    ? "purple"
                    : chatData.name === "Five"
                    ? "green"
                    : "yellow"
                }
                onEdit={(newMessage) =>
                  handleEdit(chatIndex, chatSubIndex, newMessage)
                }
                onDelete={() => handleDelete(chatIndex, chatSubIndex)}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function BubbleChat({
  chatData,
  isUser = true,
  color = "purple",
  onEdit,
  onDelete,
}: {
  chatData: ChatData;
  isUser?: boolean;
  color?: string;
  onEdit: (newMessage: string) => void;
  onDelete: () => void;
}) {
  const [lightColor, setLightColor] = useState<string>("");
  const [darkColor, setDarkColor] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editMessage, setEditMessage] = useState<string>(chatData.message);

  useEffect(() => {
    switch (color) {
      case "purple":
        setDarkColor("text-chats-purple");
        setLightColor("bg-chats-lightBlue");
        break;
      case "yellow":
        setDarkColor("text-chats-darkPeach");
        setLightColor("bg-chats-lightPeach");
        break;
      case "green":
        setDarkColor("text-chats-teal");
        setLightColor("bg-chats-lightGreen");
        break;
      default:
        setDarkColor("text-chats-teal");
        setLightColor("bg-chats-lightGreen");
        break;
    }
  }, [color]);

  const handleSaveEdit = () => {
    onEdit(editMessage);
    setIsEditing(false);
    setIsOpen(false);
  };

  return (
    <div className={`max-w-[80%] w-fit text-sm ${isUser && "place-self-end"}`}>
      <p className={`font-bold ${darkColor} ${isUser && "text-right"}`}>{chatData?.name}</p>
      <div
        className={`flex items-start gap-2 ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className={`w-full p-2 rounded-[5px] ${lightColor}`}>
          {isEditing ? (
            <input
              className="w-full p-2 rounded-[5px] border border-gray-300"
              value={editMessage}
              onChange={(e) => setEditMessage(e.target.value)}
            />
          ) : (
            <p>{chatData.message}</p>
          )}
          <p className="text-xs mt-2">{chatData.time}</p>
        </div>
        <div className="relative">
          {isOpen && (
            <div
              className={`absolute bg-white border-[#BDBDBD] border-[1px] rounded-md text-sm translate-y-4 ${
                isUser ? "right-0" : ""
              }`}
            >
              {isEditing ? (
                <p
                  className="px-3 py-[1px] text-primary-blue hover:cursor-pointer hover:font-bold"
                  onClick={handleSaveEdit}
                >
                  Save
                </p>
              ) : (
                <p
                  className="border-[#BDBDBD] border-b-[1px] px-3 py-[1px] text-primary-blue hover:cursor-pointer hover:font-bold"
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </p>
              )}
              <p
                className="px-3 py-[1px] text-indicator-red hover:cursor-pointer hover:font-bold"
                onClick={() => {
                  setIsOpen(false);
                  onDelete();
                }}
              >
                Delete
              </p>
            </div>
          )}
          <button onClick={() => setIsOpen(!isOpen)}>
            <Image
              src={`icons/more_horizontal.svg`}
              alt="More"
              width={15}
              height={15}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
