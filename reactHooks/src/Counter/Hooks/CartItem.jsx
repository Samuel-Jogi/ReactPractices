import React, { useState } from 'react'
import { Products } from './Products'
import { Shopping } from './shopping'
import '../../App.css'

export const CartItem = () => {
   const [quantity, setQuantity] = useState({
        reactCourse : 0,
        vueCourse : 0
    })

    const prices = {
        reactPrice : 49.99,
        vuePrice : 59.99,
    }

    const addReactToCart = () => {
        setQuantity({
            ...quantity,
            reactCourse : quantity.reactCourse + 1
        })
    }

    const addVueToCart = () => {
        setQuantity({
            ...quantity,
            vueCourse : quantity.vueCourse + 1
        })
    }
  return (
    <div className="cartItem">
        <Products   quantity={quantity} price={prices} addToCart={addReactToCart} />
        <Shopping  quantity={quantity} price={prices} addToCart={addVueToCart}  />
        <Summary quantity={quantity} price={prices} />
    </div>
  )
}

export const Summary = ({quantity, price}) =>{
    const totalItems = quantity.reactCourse + quantity.vueCourse;
    const totalPrice = (quantity.reactCourse * price.reactPrice) + (quantity.vueCourse * price.vuePrice)
    return(
        <>
        <p>totalItems {totalItems} </p>
        <p>totalPrice {totalPrice} </p>
        </>
    )
}
