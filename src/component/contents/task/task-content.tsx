"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { sortTask } from "@/lib/slice/taskSlice";
import { Task } from "@/lib/types";
import { useEffect, useRef, useState } from "react";
import TaskComponent from "./task-component";
import NewTask from "./new-task";

export default function TaskContent() {
  const dispatch = useAppDispatch();
  const [isAdding, setIsAdding] = useState(false);
  const taskAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(sortTask());
  }, []);

  useEffect(() => {
    if (isAdding && taskAreaRef.current) {
      taskAreaRef.current.scrollTop = taskAreaRef.current.scrollHeight;
    }
  }, [isAdding]);

  const tasks: Task[] = useAppSelector((state) => state.task);

  return (
    <div className="text-primary-darkGray px-[32px] py-[24px] max-h-full flex flex-col">
      <div className="w-full flex flex-row justify-between items-center">
        <select className="border-2 px-2 py-1 rounded-md focus:ring-0 focus:outline">
          <option value="all">My Task</option>
          <option value="completed">Personal Errands</option>
          <option value="uncompleted">Urgent To-Do</option>
        </select>
        <button
          className="rounded-md bg-primary-blue text-white px-2 py-1"
          onClick={(e) => {
            e.preventDefault();
            setIsAdding(true);
            // scroll to bottom
            const taskArea = document.getElementById("task-area");
            if (taskArea) {
              taskArea.scrollTop = taskArea.scrollHeight;
            }
          }}
        >
          New Task
        </button>
      </div>

      <div className="max-h-full overflow-auto" id="task-area" ref={taskAreaRef}>
        {tasks.map((task, index) => (
          <TaskComponent key={index} task={task} />
        ))}
        {
          isAdding &&
          <NewTask />
        }
      </div>
    </div>
  );
}
