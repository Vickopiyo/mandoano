import React,{ useReducer} from 'react'

export default function Usereducer() {

    //  reducer func that updates state
    const reducer = (state,action)=>{
        switch (action.type){
            case "increment":
                return {count : state.count + 1, showText : state.showText}
            case "toggleShowText":
                 return {count : state.count, showText : !state.showText}
            default:
                return state 
    }

    }

    //  use reducer declaration and initial states like count and showtext
    const [state, dispatch]= useReducer(reducer,{count : 0, showText : true})
  return (
    <div>

        <h2>{state.count}</h2>
        <button
        onClick={()=>{
            dispatch({type : "increment"})
            dispatch({type : "toggleShowText" })
        }}
        >Click reducer!</button>
        {state.showText && <p>This is a text</p>}
        
    </div>
  )
}
