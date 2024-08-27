import { ChatListData } from "@/lib/types";
import Image from "next/image";

export default function ChatList({ data } : { data : ChatListData}) {
  return (
    <div className="flex flex-row py-[22px] ">

      {
        data.type === "group" ?
        <div className="relative w-[55px]">
          <div className="w-[34px] h-[34px] bg-primary-blue rounded-full flex items-center justify-center absolute ml-4">
            <Image src="/icons/person_light.svg" alt="" width={24} height={24} />
          </div>
          <div className="w-[34px] h-[34px] bg-primary-lightGray rounded-full flex items-center justify-center">
            <Image src="/icons/person_dark.svg" alt="" width={24} height={24} />
          </div>
        </div>
        :
        <div className="w-[55px] flex justify-end">
          {
            <div className="w-[34px] h-[34px] bg-primary-blue text-white rounded-full flex justify-center items-center">
              {data.title[0]}
            </div>
          }
        </div>
      }
      <div className="flex flex-col w-full pl-4 leading-5">
        <div className="flex flex-row gap-2">
          <p className="font-bold text-primary-blue max-w-full line-clamp-2">{data.title}</p>
          <div className="flex flex-row gap-2 min-w-fit">
            <p>{data.date}</p>
            <p>{data.time}</p>
          </div>
        </div>
        <p className="line-clamp-1 text-sm font-bold">{data.name}:</p>
        <p className="line-clamp-1 text-sm">{data.message}</p>
      </div>

      {
        <div className={`min-w-[10px] min-h-[10px] ${data.read ? "bg-transparent" : "bg-indicator-red"} bg-indicator-red rounded-full self-center mx-1`}></div>
      }
    </div>
  );
}