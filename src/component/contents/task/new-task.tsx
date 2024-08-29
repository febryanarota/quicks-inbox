import { useAppDispatch } from "@/lib/hooks";
import { getLocalTimeZone, today } from "@internationalized/date";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "@nextui-org/calendar";

export default function NewTask() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isMoreOptionsOpen, setIsMoreOptionsOpen] = useState(false);
  const [description, setDescription] = useState(
    "No description"
  );
  const defaultDate = today(getLocalTimeZone());
  let [focusedDate, setFocusedDate] = useState(defaultDate);
  const dispatch = useAppDispatch();

  const calendarRef = useRef<HTMLDivElement | null>(null);

  // Close calendar if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [calendarRef]);

  // const handleCheck = () => {
  //   dispatch(changeStatus(task.id));
  //   setIsExpanded(false);
  // };

  return (
    <div className="flex flex-row gap-2 items-start border-b-[1px] border-primary-gray mt-[22px] pb-[22px]">
      <button>
        <Image
          src={`${
            "/icons/check_box_blank.svg"
          }`}
          alt=""
          width={18}
          height={18}
        />
      </button>
      <div className="flex flex-col grow">
        <div className="flex flex-row w-full justify-between">
          <input type="text" className={`text-sm font-bold w-full focus:ring-0 focus:outline-primary-gray mr-5`} placeholder="Type task title"/>
          <div className="flex flex-row gap-2 text-xs">
            {/* {!task.status && (
              <p className="w-fit whitespace-nowrap text-indicator-red">
                {getRemainingDays(focusedDate.toString())} days Left
              </p>
            )} */}
            <p className="whitespace-nowrap">{focusedDate.toString()}</p>
          </div>
        </div>

        {isExpanded && (
          <motion.div
            className="text-sm mt-2 gap-3 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", stiffness: 300, damping: 20 }}
          >
            <div className="flex flex-row gap-3 ">
              <Image src="/icons/clock.svg" alt="" width={15} height={15} />
              <div className="relative w-full">
                <button
                  className="text-xs flex flex-row gap-10 items-center p-2 border-[#828282] border-2 rounded-md"
                  onClick={() => {
                    setIsCalendarOpen(true);
                  }}
                >
                  {focusedDate.toString()}
                  <Image
                    src="/icons/calendar.svg"
                    alt=""
                    width={14}
                    height={14}
                  />
                </button>
                {isCalendarOpen && (
                  <div ref={calendarRef}>
                    <Calendar
                      className="absolute translate-y-2 z-10 "
                      focusedValue={focusedDate}
                      value={defaultDate}
                      onFocusChange={(date) => {
                        setFocusedDate(date); // Update focused date
                        if (date && date.day !== focusedDate.day) {
                          setIsCalendarOpen(false); // Close calendar only if a different day is selected
                        }
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-row gap-3 items-start">
              <label
                className="mt-2 cursor-pointer"
              >
                <Image src="/icons/edit.svg" alt="" width={15} height={15} />
              </label>
              <textarea
                className="focus:ring-0 focus:outline-primary-lightGray w-full resize-none p-1 text-sm"
                value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
              />
            </div>
          </motion.div>
        )}
      </div>
      <div className="flex flex-row gap-2 items-start">
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
        <div className="relative w-fit h-">
          <button
            onClick={() => {
              setIsMoreOptionsOpen(!isMoreOptionsOpen);
            }}
          >
            <Image
              src="/icons/more_horizontal.svg"
              alt=""
              width={20}
              height={20}
            />
          </button>
          {isMoreOptionsOpen && (
            <div className="absolute right-0 bg-white border-[1px] border-primary-darkGray rounded-md text-xs pr-7 pl-1">
              <button
                className="p-1 text-indicator-red"
                onClick={() => {
                  // dispatch(removeTask(task.id));
                  setIsMoreOptionsOpen(false);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
