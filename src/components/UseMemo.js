import axios from 'axios'
import React, { useEffect,useState,useMemo } from 'react'


export default function UseMemo() {

const [data, setData] = useState(null)
const [toggle, setToggle]=useState(false)

useEffect(()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then(response => {
        setData(response.data)
    })
},[])

    const findLongestName = (comments) =>  {
        if (!comments) return null;
        let longestName = '';
        for (let i = 0;i < comments.length ; i++ ){
            let currentName = comments[i].name

            if (currentName.length > longestName.length){
                longestName = currentName ;
            }
        }
        console.log("THIS IS COMPUTED")
      return longestName;

    }
// creation of memoised function to avoid recomputation of findlongestname each time toggle is clicked
const getLongestName = useMemo(()=> findLongestName(data),[data]) 
    // by clicking the toogle button the function findlongest time gets recomputed which we dont want.It should recompute only when the data changes.

  return (
    <div>
        {/* original func that causes recomputation */}
        {/* <div>{findLongestName(data)}</div> */}

      {/* memoised func */}

        <div>{getLongestName}</div>
        
        <button onClick={()=>{setToggle(!toggle)}}>
            Toggle
        </button>
        {toggle && <h2>i AM TOGGLED</h2>}

    </div>
  )
} 
