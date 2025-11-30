import React from 'react'
import { useState } from 'react'

export const Counter = () => {
    const [number, setNumber] = useState({num:0, text:"info"});
    console.log('after rendering the value',number.num)
    const handleAddition = () => {
        /* 
        Here the values wont get updated as soon as evenHandler triggers but after rerendering only it will get updated.
        */
      setNumber((number)=>(
       {    ...number,
           num : number.num + 1,
        text : "Addition"}
      ))
    }/* 
    if you want to update a state then you need to spread it fast....
    */

    const handleSubtraction = () => {
        setNumber((number)=>({
            ...number,
            num:number.num - 1,
            text:"Subtraction"

        }))
    }

    const handleInput=(e)=>{
        setNumber((number)=>({
            ...number,
            text:e.target.value
        }))
    }
  return (
    <div>
        <input value={number.num} onChange={handleInput}></input>
        <input value={number.text} onChange={handleInput}></input>
        <button onClick={handleAddition} >Addition</button>
        <button onClick={handleSubtraction}>Subtraction</button>
    </div>
  )
}
