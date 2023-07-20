import React, { useState } from 'react'

const Learn = () => {
    const[add,setAdd]=useState(20)
      function age(){
        setAdd(add + 2)
      }
  return (
    <div>
        <h1>your age {add}</h1>
         <button onClick={age}>
          click
         </button>
    </div>
    
  )
}

export default Learn
