import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../types";
import { initialTaskState } from "../data/task";


const initialState: Task[] = initialTaskState;

export const taskSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // sort plan based on status
    sortTask: (state) => {
      state.sort((a, b) => (a.status === b.status ? 0 : a.status ? 1 : -1)); // Unchecked first, checked last
    },

    addTask: (state, action) => {
      state.push(action.payload);
      state.sort((a, b) => (a.status === b.status ? 0 : a.status ? 1 : -1)); // Sort after adding
    },

    // change status of plan
    changeStatus: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state[index].status = !state[index].status;
      }

      // Sort task based on status
      state.sort((a, b) => (a.status === b.status ? 0 : a.status ? 1 : -1));
      state.map((task) => console.log(task.id, task.status));
    },

    removePlan: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },

    updatePlan: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }

      state.sort((a, b) => (a.status === b.status ? 0 : a.status ? 1 : -1));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, changeStatus, sortTask } = taskSlice.actions;

export default taskSlice.reducer; // EXPORT Slice reducer
