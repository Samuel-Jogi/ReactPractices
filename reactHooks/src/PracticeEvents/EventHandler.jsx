import React from 'react'

export const EventHandler = ({text, onOrder}) => {
  return (
    <div>
        <button onClick={onOrder}>{text}</button>
    </div>
    
  )
}
