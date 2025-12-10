import React from 'react'
import { useState } from 'react'

export const UseStateTwo = () => {
    const [user, setUser] = useState({
        name : "Samuel jogi",
        education:"B.tech",
        CGPA : 8
    })

    const addItem = () => {
        const newObject = {
            name : "Junia",
            education : "Just born",
            CGPA : 10
        }
        setUser((item)=>({
            
            ...item,
            newObject
        }))
    }
  return (
    <div>
        <p>{user.name}</p>
        <p>{user.education}</p>
        <p>{user.CGPA}</p>
        <button onClick={addItem}>Add</button>
    </div>
  )
}
