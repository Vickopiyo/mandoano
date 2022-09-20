import axios from 'axios'
import React, { useEffect, useState} from 'react'

export default function UseEffect() {
    const [data, setData]= useState("")
    const [count , setCount]= useState(0)

   useEffect(()=>{
    console.log("API CALLED")
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((response)=>{
        setData(response.data[0].email)
        
    })
   }, [])



  return (
    <div>
     <h1>Hello world</h1>
     <h2>{data}</h2>
     <h2>{count}</h2>
     <button 
        onClick={()=>{
        setCount(count + 1)
     }}
     >Click</button>
    </div>
  )
}
