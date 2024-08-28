"use client";
import { useAppDispatch } from "@/lib/hooks";
import { changeStatus } from "@/lib/slice/taskSlice";
import { Task } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TaskComponent({ task }: { task: Task }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useAppDispatch();

  const handleCheck = () => {
    dispatch(changeStatus(task.id));
    setIsExpanded(false);
  };

  return (
    <div className="flex flex-row gap-2 items-start border-b-[1px] border-primary-gray mt-[22px] pb-[22px]">
      <button onClick={handleCheck}>
        <Image
          src={`${
            task.status ? "/icons/check_box.svg" : "/icons/check_box_blank.svg"
          }`}
          alt=""
          width={18}
          height={18}
        />
      </button>
      <div className="flex flex-col grow">
        <div className="flex flex-row w-full justify-between">
          <p
            className={`text-sm font-bold ${
              task.status && "line-through text-primary-gray"
            }`}
          >
            {task.title}
          </p>
          <div className="flex flex-row gap-2 text-xs">
            {!task.status && (
              <p className="w-fit whitespace-nowrap text-indicator-red">
                2 Days Left
              </p>
            )}
            <p>12/08/2021</p>
          </div>
        </div>

        {isExpanded && (
          <motion.div
            className="text-sm mt-2 gap-3 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", stiffness: 300, damping: 20 }}
          >
            <div className="flex flex-row gap-3">
              <Image src="/icons/clock.svg" alt="" width={15} height={15} />
              <button className="text-xs flex flex-row gap-10 items-center p-2 border-[#828282] border-2 rounded-md">12/02/2024<Image src="/icons/calendar.svg" alt="" width={14} height={14}/></button>
            </div>
            <div className="flex flex-row gap-3">
              <Image src="/icons/edit.svg" alt="" width={15} height={15} />
              <input type="text" className="focus:ring-0 focus:border-none"/>
            </div>
          </motion.div>
        )}
      </div>
      <div className="flex flex-row gap-2">
        <button
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          <Image
            src={isExpanded ? "/icons/chevon_up.svg" : "/icons/chevon_down.svg"}
            alt=""
            width={20}
            height={20}
          />
        </button>
        <button>
          <Image
            src="/icons/more_horizontal.svg"
            alt=""
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}
