import React, { useEffect} from 'react'

export default function Child({returnComment}) {

    useEffect(()=>{
      console.log("FUNC WAS CALLED")
    },[returnComment])


// here the usecallback returns a function while use memo returns valu as shown below
  return (
    <div>{returnComment("pedro")}</div>
  )
}
