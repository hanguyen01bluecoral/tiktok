import { type } from "@testing-library/user-event/dist/type";
import { ADD_TODO, SET_TODO_INPUT } from "./constant";

export const setTodoIinput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})