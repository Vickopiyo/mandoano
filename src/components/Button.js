import React, { forwardRef, useImperativeHandle,useState } from 'react'
// this is the child button which ref is to..forward transforms func component ot be able to receive refs
const Button = forwardRef((props,ref) => {
    const [toggle, setToggle]= useState(false)
  useImperativeHandle(ref, ()=>({
    alterToggle(){
        setToggle(!toggle)
    } 
  }))
  return (
    <div>
        <button>
    {/* // onClick={()=>{setToggle(!toggle)}} */}

    
        Button From Child</button>
    {toggle && <span>Toggle</span>}
    </div>
  )
})

export default Button