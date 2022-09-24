import React from 'react';
import { useState, useCallback, useMemo, useRef, useReducer } from 'react'
import reduct, {innitState} from './reducer';
import { setJob, addJob, deleteJob } from './actions'


function App() {
  const [state, dispatch] = useReducer(reduct, innitState)
  const { job, jobs } = state
  const ref = useRef()

  const handSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    ref.current.focus()
  }

  const handleKeyPress = (e) => {
    if(e.charCode === 13) {
      handSubmit();
    }
  }

  return (
    <div style={{ padding: '0px 20px' }}>
      <h1>To do</h1>
      <input 
        ref={ref}
        value={job}
        placeholder='Enter name...'
        onKeyPress={handleKeyPress}
        onChange={(e) => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
