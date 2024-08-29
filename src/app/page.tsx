"use client"
import QuickButtons from "@/component/buttons/quick-buttons";
import Contents from "@/component/contents/contents";
import { QuickButtonsProvider } from "@/context/quick-button-context";
import Image from "next/image";

export default function Home() {

  return (
    <QuickButtonsProvider>
      <div className="w-full h-screen relative">
        <div className="absolute bottom-0 right-0 w-full items-end flex flex-col justify-end">
          <Contents/>
          <QuickButtons/>
          
        </div>
      </div>
    </QuickButtonsProvider>
  ); 
}