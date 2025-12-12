import React from 'react'
import { useState } from 'react'

export const QueueForm = ({queue, addToQueue}) => {
    const [name, setName] = useState('')
    const [service, setService] = useState('')
    console.log(queue)
    const handleSubmit = (e) => {
        e.preventDefault();
        addToQueue({name, service})
        setName('')
        setService('')    
    }
  return (
    <div className="queueForm">
        <input className="height" placeholder='add Item'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        ></input>
        <select className="height" value={service} onChange={(e)=>setService(e.target.value)}>
            <option value=''>Select</option>
            <option value='Consultaion'>Consultaion</option>
            <option value='Payment'>Payment</option>
            <option value='Support'>Support</option>
        </select>
        <button onClick={handleSubmit}>Add Item</button>
    </div>
  )
}
