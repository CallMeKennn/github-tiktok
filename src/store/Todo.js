import { useStore, actions } from './index'
import { useRef } from 'react'


function Todo() {
    const [state, dispatch] = useStore()
  const {todos, todoInput} = state
  const inputRef = useRef()

  const handleAddTodo = () => {
    dispatch(actions.addTodoInput(todoInput))
    dispatch(actions.setTodoInput(' '))
    inputRef.current.focus();
  }

  const handleRemoveTodo = (index) => {
    dispatch(actions.removeTodoInput(index))
  }

  const handlePressKey = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo()
    }
  }

  return (
      <div style={{ padding: 20}}>
          <input 
            value={todoInput}
            placeholder="Enter todo..."
            onKeyDown={handlePressKey}
            onChange={e => {
              dispatch(actions.setTodoInput(e.target.value))
            }}
            ref={inputRef}
          />

          <button onClick={handleAddTodo}>Add</button>

          <ul>
            {todos.map((todo, index) => (
               <li key={index}>
                {todo}
                <span onClick={() => {handleRemoveTodo(index)}}>&times;</span>
              </li>
            ))}
          </ul>
      </div>
  );
}

export default Todo;