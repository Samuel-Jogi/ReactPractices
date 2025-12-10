import React from 'react'

export const Products = ({price,quantity, addToCart}) => {
    const totalPrice = quantity.reactCourse * price.reactPrice
  return (
    <div className="reactDiv">
        <h2>ReactCourse</h2>
        <p>{price.reactPrice}</p>
        <p>{quantity.reactCourse}</p>
        <p>{totalPrice}</p>
        <button onClick={addToCart}>AddToCart</button>
    </div>
  )
}
