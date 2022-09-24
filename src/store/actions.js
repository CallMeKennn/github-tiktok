import { SET_TODO_INPUT, ADD_TODO_INPUT, REMOVE_TODO_INPUT } from "./constants";


export const setTodoInput = payload => {
    return {
        type: SET_TODO_INPUT,
        payload
    };

}

export const addTodoInput = payload => {
    return {
        type: ADD_TODO_INPUT,
        payload
    };
}

export const removeTodoInput = payload => {
    return {
        type: REMOVE_TODO_INPUT,
        payload
    };
}

