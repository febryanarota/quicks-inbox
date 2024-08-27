import { ChatRoomData } from "../types";

export const chatRoomData: ChatRoomData[] = [
  {
    id: 1,
    chat: [
      {
        id: 1,
        date: "2024-08-26",
        chats: [
          {
            id: 1,
            name: "John Doe",
            message: "Hey, are you coming to the meeting?",
            time: "10:30",
            date: "2024-08-26",
            read: true,
          },
          {
            id: 1,
            name: "Five",
            message:
              "We are in the meeting room now. Please come as soon as possible. Thank you.",
            time: "10:30",
            date: "2024-08-26",
            read: true,
          },
          {
            id: 2,
            name: "You",
            message: "Yes, I'll be there in 5 minutes.",
            time: "10:32",
            date: "2024-08-26",
            read: true,
          },
        ],
      },
      {
        id: 2,
        date: "2024-08-25",
        chats: [
          {
            id: 3,
            name: "John Doe",
            message: "Please review the document I sent.",
            time: "08:00",
            date: "2024-08-25",
            read: true,
          },
          {
            id: 4,
            name: "You",
            message: "Got it, I'll check it out tonight.",
            time: "08:15",
            date: "2024-08-25",
            read: true,
          },
          {
            id: 5,
            name: "Five",
            message: "Can you send me the files?",
            time: "02:30",
            date: "2024-08-24",
            read: false,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    chat: [
      {
        id: 1,
        date: "2024-08-26",
        chats: [
          {
            id: 1,
            name: "John Doe",
            message: "Did you finish the report?",
            time: "09:00",
            date: "2024-08-26",
            read: true,
          },
          {
            id: 2,
            name: "You",
            message: "Yes, I just sent it over.",
            time: "09:05",
            date: "2024-08-26",
            read: true,
          },
        ],
      },
      {
        id: 2,
        date: "2024-08-24",
        chats: [
          {
            id: 3,
            name: "John Doe",
            message: "Could you review the slides for tomorrow?",
            time: "05:45",
            date: "2024-08-24",
            read: true,
          },
          {
            id: 4,
            name: "You",
            message: "Sure, I'll get on it.",
            time: "06:00",
            date: "2024-08-24",
            read: true,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    chat: [
      {
        id: 1,
        date: "2024-08-26",
        chats: [
          {
            id: 1,
            name: "Alice Johnson",
            message:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue nisl, ornare sit amet mi ac, auctor accumsan lorem. Mauris vel odio accumsan lacus malesuada lobortis. In dolor massa, porttitor dapibus nunc ut, iaculis dictum enim. Duis vel magna et elit vestibulum bibendum",
            time: "09:00",
            date: "2024-08-26",
            read: true,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    chat: [
      {
        id: 1,
        date: "2024-08-26",
        chats: [
          {
            id: 1,
            name: "Alice Johnson",
            message:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue nisl, ornare sit amet mi ac, auctor accumsan lorem. Mauris vel odio accumsan lacus malesuada lobortis. In dolor massa, porttitor dapibus nunc ut, iaculis dictum enim. Duis vel magna et elit vestibulum bibendum",
            time: "09:00",
            date: "2024-08-26",
            read: true,
          },
        ],
      },
    ],
  },
];
