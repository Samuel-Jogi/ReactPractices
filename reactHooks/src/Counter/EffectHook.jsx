import React from 'react'
import { useState, useEffect } from 'react'

export const EffectHook = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title= `you clicked ${count} times`
    })
  return (
    <div>
        <button onClick={()=> setCount(count+1)}>{count}</button>
    </div>
  )
}
