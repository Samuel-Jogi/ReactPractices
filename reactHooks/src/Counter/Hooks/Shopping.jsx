import React from 'react'

export const Shopping = ({price, quantity, addToCart}) => {
      const totlaPrice = quantity.vueCourse * price.vuePrice
  return (
  
    <div className="VueDiv">

        <h2> Vue Course</h2>
        <p>${price.vuePrice}</p>
        <p>totl items {quantity.vueCourse}</p>
        <p>Total Price ${totlaPrice}</p>
        <button onClick={addToCart}>addtoCart</button>
    </div>
  )
}




