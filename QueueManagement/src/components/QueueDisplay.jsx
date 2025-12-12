import React from 'react'

export const QueueDisplay = ({queue, setQueue}) => {
    console.log(queue)

    const removeOrder = (id) => {
     setQueue((prev)=>prev.filter(item => item.id !== id))
    }
  return (
    <div style={{textAlign:'left'}}>
        
         {
            queue.length > 0 ?
            queue.map((item)=>(
          <div key={item.id} className="QueueList" style={{display:'flex', justifyContent:'space-between',}}>
                <h3 style={{margin:0}}>{item.name}</h3>
                <button style={{margin:0,padding:'6px 14px', cursor:'pointer', fontsize:'14px', textAlign:'center'}} onClick={() => removeOrder(item.id)}>Remove</button>
          </div>      
    )):"No data"
   }
    </div>
  
  )
}
