export interface QuickButtonsContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  activeFeature: string;
  setActiveFeature: (value: string) => void;
}

export interface ChatListData {
  type : string;
  title: string;
  date : string;
  time : string;
  name : string;
  message : string;
}
  