import React, { useCallback, useState } from 'react'
import Child from './Child'

export default function UseCallback() {
    const [data,setData]= useState("Yo,sub to my channel!")
    const [toggle,setToggle] =useState(false)


     const returnComment =useCallback((name)=>{
        return data + name ;
     },[data]

)
  return (
    <div>
        <Child  returnComment={returnComment} />
        <button

        onClick={()=>{ setToggle(!toggle)}}
        >Click Here</button>
        {toggle && <h1>TOGGLED!</h1>}
    </div>
  )
}
