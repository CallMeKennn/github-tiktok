import { SET_TODO_INPUT, ADD_TODO_INPUT, REMOVE_TODO_INPUT } from "./constants"

const initState = {
    todos: [],
    todoInput: ''
}
    
const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO_INPUT:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case REMOVE_TODO_INPUT:
            let newArray = [...state.todos]
            
            let newState = newArray.splice(action.payload, 1)

            return {
                ...state,
                todos: newArray
            }
        default:
            throw new Error('Invalid action')
    }
}

export { initState }
export default reducer