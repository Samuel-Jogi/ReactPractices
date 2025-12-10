import { useState } from 'react'
import { Counter } from './Counter/Counter'
import './App.css'
import { EventHandler } from './PracticeEvents/EventHandler'
import { EffectHook } from './Counter/EffectHook'
import { UseState } from './Counter/Hooks/UseState'
import { UseStateTwo } from './Counter/Hooks/UseStateTwo'
import { UserCard } from './Counter/Hooks/UserCard'
import { CartItem } from './Counter/Hooks/CartItem'
function App() {

  const func = () => {
    console.log('rerendering')
    return 0
  }
  const [count, setCount] = useState(func())
  const handleLikeButton = () =>{
    alert('Yes I like Cheryl')
  }

  const objects = [
    {title : "yoga", image : "https://res.cloudinary.com/hydrow/image/upload/f_auto/q_auto/v1719502398/Blog/yoga-button.jpg"},
    {title : "cricket", image : "2wCEAAkGBxMTEhUTExMWFhUXFR0YFxgXGBoXGhgXFxcYGBcaGBgdHSggGBolHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0fHyYtLS0rLS0tLS0tLy0tLS0tLS0tLS0tLS0tLy0tLy0tLS0tLS0tLTUtLS0tLS0tLS0tLf"},
    {title : "football", image : "2wCEAAkGBxMTEhUSEhMWFhUVFRgYGBcYGB0XGhgXFxgXFxUeFhYYHSkgGBslHRgXITIhJSkrMC4uGB8zODMsNygtLisBCgoKDg0OGxAQGi0jICYtLS8tMi41LS0tLS8tLS0tLS0tLzUtNS0vNS0tLS0tLS0vLi0tLS0tLS0vLS0tLS0tLf"},
    {title : "volleyball", image : "2wCEAAkGBxMTEhUSExMVFhUXGB0YGBcYGB8YGhcVFxcXFxgdHRoYHSggGBolHRcaITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyYtLS01LS0tLS0tLS0tLS0tLS4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf"},
    {title : "tennis", image : "https://www.shutterstock.com/image-photo/court-racket-tennis-hands-game-260nw-2490740053.jpg"},
  ]

  

  return (
    <>
    <CartItem />
    <UserCard objects={objects}/>
   {/*  <UseState />
    <UseStateTwo />
    <EventHandler text="Like" onOrder={handleLikeButton} />
      <Counter />
      <EffectHook /> */}
    </>
  )
}

export default App
