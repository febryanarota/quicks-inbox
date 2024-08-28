import { Task } from "../types";

export const initialTaskState : Task[] = [
  {
    id: 1,
    title: "Meeting with John Doe",
    date: new Date().toString(),
    description: "Discuss about the project",
    status: false,
    labels: ["Offline Meeting", "Client Related"],
  },
  {
    id: 2,
    title: "Finalize the report",
    date: new Date().toString(),
    description: "Complete and submit the quarterly report.",
    status: true,
    labels: ["Important ASAP", "Self Task"],
  },
  {
    id: 3,
    title: "Doctor's appointment",
    date: new Date().toString(),
    description: "Annual health check-up.",
    status: false,
    labels: ["Appointments", "Self Task"],
  },
  {
    id: 4,
    title: "Virtual Meeting with Team",
    date: new Date().toString(),
    description: "Discuss the upcoming product launch.",
    status: false,
    labels: ["Virtual Meeting", "Client Related"],
  },
  {
    id: 5,
    title: "Court hearing",
    date: new Date().toString(),
    description: "Attend the scheduled court hearing.",
    status: false,
    labels: ["Court Related", "Appointments"],
  },
  {
    id: 6,
    title: "Client presentation",
    date: new Date().toString(),
    description: "Present the new marketing strategy.",
    status: true,
    labels: ["Client Related", "Important ASAP"],
  },
  {
    id: 7,
    title: "Team brainstorming session",
    date: new Date().toString(),
    description: "Brainstorm ideas for the new project.",
    status: false,
    labels: ["Virtual Meeting", "Self Task"],
  },
  {
    id: 8,
    title: "Legal consultation",
    date: new Date().toString(),
    description: "Consult with the legal team regarding new regulations.",
    status: false,
    labels: ["Court Related", "Client Related"],
  },
];