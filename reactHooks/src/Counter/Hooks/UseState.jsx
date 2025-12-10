import React from 'react'
import { useState } from 'react'

export const UseState = () => {
    const [items, setItems] = useState([
        {id:1, text:"FrontEnd Engineer"},
        {id:2, text:"Backend Engineer"},
        {id:3, text:"Full Stack Engineer"}
    ])
    console.log(items)
    const addItem = () => {
     const newItem = {
        id:4,
        text:'Devops Engineer'
     }
/*  adding items dynamically  */
     setItems([...items, {id:Date.now() , text:"something added"}])

    }

    const updateItems = (id) => {
        setItems(
       /*      (prev) => 
                prev.map(item => 
                    item.id === id ? 
                        {...item, text:"modified"} : item
                ) */
             items.map((item)=>{
                console.log(item)
                if(item.id === id){
                    if(item.text === "modified"){
                        return item
                    }
                    else return{...item, text:"Modified successfully"}
                    
                }else{
                    return item
                }
            }) 
        )
    }

   const deleteItem =(id)=>{
        setItems(items.filter((item)=> item.id !== id))
    }
  return (
    <div>
        <ul>
        {
            items.map((item)=>(
                <div key={item.id}>
                    <li>{item.text}</li>
                    <button onClick={()=> deleteItem(item.id)}>Delete</button>
                    <button onClick={() => updateItems(item.id)}>Update</button>
                </div>
            ))
        }
        </ul>
        <button onClick={addItem} >AddItem</button>
    </div>
  )
}
