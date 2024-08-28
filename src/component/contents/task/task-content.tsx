"use client"

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { sortTask } from "@/lib/slice/taskSlice";
import { Task } from "@/lib/types";
import { useEffect } from "react";
import TaskComponent from "./task-component";

export default function TaskContent() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(sortTask());
  }, []);

  const tasks: Task[] = useAppSelector((state) => state.task);

  return (
    <div className="text-primary-darkGray px-[32px] py-[24px] max-h-full flex flex-col">
      <div className="w-full flex flex-row justify-between items-center">
        <select className="border-2 px-2 py-1 rounded-md">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
        <div className="rounded-md bg-primary-blue text-white px-2 py-1">New Task</div>
      </div>

      <div className="max-h-full overflow-auto">
        {tasks.map((task, index) => (
          <TaskComponent key={index} task={task} />
        ))}
      </div>
    </div>
  )
};
