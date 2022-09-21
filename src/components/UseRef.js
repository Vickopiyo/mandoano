import React,{ useRef} from 'react'

export default function UseRef() {
    const inputRef = useRef(null)

// button clicked creates focus on the input
    const onclick = ()=> {inputRef.current.focus() }
    // other uses cases of use ref where button clicked clears every input
    // inputRef.current.value = ""
    
  return (
    <div>
    <h1>Pedro</h1>
    <input type="text" placeholder='name' ref={inputRef}/>
      <button onClick={onclick}>Change Name</button>

    </div>
  )
}
