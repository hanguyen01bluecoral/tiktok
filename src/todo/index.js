import { useRef, useState, useEffect, memo, useReducer } from "react";
import reducer, {initSate} from "./reducer";
import {addJob, setJob, xoaJob} from './action'
  //dispatch
  function App() {
    const [state, dispatch] = useReducer(reducer, initSate)
    const {job, jobs} = state
    const iputRef = useRef()
    const add = () => {
      dispatch(addJob(job))
      dispatch(setJob(''))
  
      iputRef.current.focus()
    }
    return (
      <div style={{padding: '0 20px'}}>
        <h3>To Do</h3>
        <input 
        ref={iputRef}
        value={job}
          placeholder="Enter to do ..."
          onChange={e=> {
  
            dispatch(setJob(e.target.value))
          }}
        />
        <button
          onClick={add}
        >Add</button>
        <ul>
            {jobs.map((job, index) => (
              <li key={index}>{job}
              <span onClick={() => dispatch(xoaJob(index))}>
              &times;
              </span>
              </li>
            ))}
        </ul>
      </div>
    )
}
  
  export default App;