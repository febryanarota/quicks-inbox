export interface QuickButtonsContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  activeFeature: string;
  setActiveFeature: (value: string) => void;
}

export interface ChatListData {
  id : number;
  type : string;
  title: string;
  date : string;
  time : string;
  name : string;
  message : string;
  read: boolean;
  pending?: boolean;
}
  
export interface ChatData {
  id : number;
  name : string;
  message : string;
  time : string;
  date : string;
  read: boolean;
}

export interface Chat {
  id : number;
  date : string;
  chats : ChatData[];
}

export interface ChatRoomData {
  id : number;
  chat : Chat[];
}

type Label = "Important ASAP" | "Offline Meeting" | "Virtual Meeting" | "ASEP" | "Client Related" | "Self Task" | "Appointments" | "Court Related";

export interface Task {
  id: number;
  title: string;
  date: string;
  description: string;
  status: boolean;
  labels: Label[];
}

