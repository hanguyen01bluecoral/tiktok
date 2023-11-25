// useState la thay doi trang thai thay the chu khong ghi d hya sua

import { useRef, useState, useEffect, memo, useReducer, createContext } from "react";
import TodoApp from './todo'
// import Content from './content'
import './App.css'

// const gitfs = [
//   'Laptop',
//   'Moblie',
//   'Tablet',
// ]

// function App() {
//   const [gitf, setGift] = useState()

//   const randomGitf = () => {
//     const index = Math.floor(Math.random() * gitfs.length)
//     // console.log(gitfs[index])
//     setGift(gitfs[index]);

//   }

//   return (
//     <div className="App" style={{ padding: 20 }}>
//       <h1>{gitf || 'chua co phan thuong'}</h1>
//       <button onClick={randomGitf}>Lay thuong</button>
//     </div>
//   );
// }


//1. call back luon duoc goi sua khi component amount
//init state
// const initSate = 0
// //action
// const UP_ACTION = 'up'
// const DOWN_ACTION = 'down'
// //reducer
// const reducer = (state, action) => {
//   switch(action) {
//     case UP_ACTION:
//       return state + 1
//     case DOWN_ACTION:
//       return state - 1
//     default:
//       throw new Error('Invalid aaction')
//   }
// }

// function App() {
//     const [count, dispatch] = useReducer(reducer, initSate)
//     // const increase = () => {
//     //   setCount(count + 1)
//     // }
//     // const ref = useRef(99)
//     // const timerId = useRef()
//     // const prev = useRef()
//     // useEffect(() => {
//     //   prev.current = count
//     // }, [count])
//     // const handleStart = () => {
//     //   // ref.current = Math.random()
//     //   timerId.current = setInterval(() => {
//     //     setCount(prev => prev - 1)
//     //   }, 500)
//     // }

//     // const handleStop = () => {
//     //   clearInterval(timerId.current)
//     // }

//       return (
//         <div style={{padding: 20}}>
//         <h1>{count}</h1>
//         {/* <button onClick={handleStart}>Start</button> */}
//         <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
//         </div>
//       )
// }
  //useEffect(callback)

//init state: kjoi tao stae

// function App() {
//   return <TodoApp />
// }


//cotext 
//1. tao ra context
// export const themeContext = createContext()
// console.log(themeContext)

//2. provider: nha cung cap
//3. consumer: nhan du lieu

// function App() {
//   const [theme, setTheme] = useState('dark')

//   const suaTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark')
//   }
//   return (
//     <themeContext.Provider value={theme}>
//       <div style={{padding: 20}}>
//         <button
//           onClick={suaTheme}
//         >Tooge Theme</button>
//         <Content />
//       </div>
//     </themeContext.Provider>
//   )
// }

import { actions, useStore } from "./store";

function App() {

  const [state, dispatch] = useStore()
  const {todos, todoInput} = state
  // console.log(todoInput)
  const add = () => {
    dispatch(actions.addTodo(todoInput))
  }

  return (
    <div style={{padding: 20}}>
     <input
      value={state.todoInput}
      placeholder="enter todo ..."
      onChange={e => {
        dispatch(actions.setTodoIinput(e.target.value))
      }}
     />
     <button onClick={add}>
      ADD
     </button>
     {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
     ))}
    </div>
  )
}

export default App