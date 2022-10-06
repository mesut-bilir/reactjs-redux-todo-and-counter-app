import { ADD_TASK, DEL_TASK, DEC_COUNTER, INC_COUNTER } from "./actionType";
import { v4 as uuidv4 } from "uuid";

export const incCounter = (payload) => ({
  type: INC_COUNTER,
  payload
});

export const decCounter = (payload) => ({
  type: DEC_COUNTER,
  payload
});

export const addTask = (payload) => ({
  type: ADD_TASK,
  payload: {
    id: uuidv4(),
    title: payload,
    status: false
  }
});

export const delTask = (id) => ({
  type: DEL_TASK,
  payload: {
    id: id
  }
});

