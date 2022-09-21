import React, { useEffect, useLayoutEffect,useRef } from 'react'

// The main diff btw UseEffect and UseLayout is useEffect is called after rendering dom while UseLayout is called before rendering 
export default function UseLayoutEffect() {
const inputRef = useRef(null)

useLayoutEffect(()=>{
    console.log(inputRef.current.value)
},[])

useEffect(()=>{
    inputRef.current.value = "hello"
},[])
  return (
    <div>
     <input ref={inputRef}  type = "text" value = "PEDRO"   />
    </div>
  )
}
