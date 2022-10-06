import { ADD_TASK, DEL_TASK, DEC_COUNTER, INC_COUNTER } from "./actionType";

export const initState = {
  counter: 0,
  todo: []
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case INC_COUNTER:
      return {
        ...state,
        counter: state.counter + payload
      };
    case DEC_COUNTER:
      return {
        ...state,
        counter: state.counter - payload
      };
    case ADD_TASK:
      return {
        ...state,
        todo: [...state.todo, payload]
      }
    case DEL_TASK:
      console.log(payload)
      return {
        todo: [...state.todo.filter(item => item.id !== payload.id)]
      }

    default:
      return state;
  }
};
