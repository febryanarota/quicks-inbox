import { QuickButtonsContext } from "@/context/quick-button-context";
import { ReactNode, useContext, useEffect, useState } from "react";
import InboxContent from "./inbox-content";

export default function Contents() {
  const context = useContext(QuickButtonsContext);

  if (!context) {
    throw new Error('QuickButtons must be used within a QuickButtonsProvider');
  }
  
  const { isMenuOpen, setIsMenuOpen, activeFeature, setActiveFeature } = context;
  const [content, setContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    switch (activeFeature) {
      case 'inbox':
        setContent(
          <InboxContent/>
        );
        break;
      case 'task':
        setContent(
          <div>
            <h1>Task</h1>
          </div>
        );
        break;
      default:
        setContent(null);
    }
  }, [activeFeature]);

  return (
    <>
      {
        activeFeature !== 'none' &&
        <div className="mb-5 mr-1 w-full max-w-xl h-[65vh] bg-white rounded-[5px] border-[#BDBDBD] border-[3px]">
          {
            content
          }
        </div>
      }
    </>
  )
};
