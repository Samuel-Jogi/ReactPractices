import React from 'react'

export const UserCard = ({objects}) => {
  return (
    <div className="cardsMainDiv"> {
        objects.map((item)=>(           
            <>
            <div className="cardDiv" key={Date.now}>
                <img className="cardImage" src={item.image} alt="yoga"></img>
                <h4>{item.title}</h4>
            </div>
            </>
        ))   
    } 
    </div>
  )
}
