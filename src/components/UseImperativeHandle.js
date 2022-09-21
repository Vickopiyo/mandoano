import React, { useRef } from 'react'
import Button from './Button'

export default function UseImperativeHandle() {

const buttonRef = useRef(null)

  return (
    <div>
        <button
        onClick={()=>{
            buttonRef.current.alterToggle();
        }}
        >Button From Parent</button>
        <Button ref={buttonRef}/>

    </div>
  )
}
