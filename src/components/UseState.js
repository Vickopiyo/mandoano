import React,{ useState} from 'react'

export default function UseState() {
    // how to usestate for counting
    const [count, setCount] = useState(0)
    const increment = () => { setCount(count + 1)}
    const decrement = () => { setCount(count - 1)}
    const reset = () => { setCount(0)}
    // use state for input 
    const [input,setInput] = useState("Vick")


    const onChange = (e)=>{
        const newInput = e.target.value
        setInput(newInput)
    }
  return (
    <>
     <div>
        <h2>Button clicked  {count}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
    <div>
        <input type ="text" onChange={onChange}/>{input}
    </div>



    </>
   
  )
} 
