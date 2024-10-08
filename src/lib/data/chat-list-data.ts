import { ChatListData } from "../types";

export const ListChat: ChatListData[] = [
  {
    id: 1,
    type: "group",
    title: "Project Team",
    date: "2024/08/26",
    time: "10:30",
    name: "Five",
    message: "Can you send me the files?",
    read: false,
  },
  {
    id: 2,
    type: "private",
    title: "John Doe",
    date: "2024/08/26",
    time: "11:00",
    name: "You",
    message: "Sure, I'll get on it.?",
    read: true,
  },
  {
    id: 3,
    type: "group",
    title: "Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutton Follow Up - Brief Service ]",
    date: "2024/08/25",
    time: "09:15",
    name: "Alice Johnson",
    message: "Don’t forget to review the notes before tomorrow’s exam.",
    read: true,
  },
  {
    id: 4,
    type: "private",
    title: "FastVisa Support",
    date: "2024/08/25",
    time: "08:45",
    name: "FastVisa Support",
    message: "",
    read: true,
    pending: true,
  },
];