import { QuickButtonsContextType } from "@/lib/types";
import { createContext, ReactNode, useState } from "react";

export const QuickButtonsContext = createContext<QuickButtonsContextType | undefined>(undefined);

export const QuickButtonsProvider = ({ children } : { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState('none');

  return (
    <QuickButtonsContext.Provider value={{ isMenuOpen, setIsMenuOpen, activeFeature, setActiveFeature }}>
      {children}
    </QuickButtonsContext.Provider>
  );
};
