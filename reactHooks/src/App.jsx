import { useState } from 'react'
import { Counter } from './Counter/Counter'
import './App.css'
import { EventHandler } from './PracticeEvents/EventHandler'

function App() {
  const func = () => {
    console.log('rerendering')
    return 0
  }
  const [count, setCount] = useState(func())
  const handleLikeButton = () =>{
    alert('Yes I like Cheryl')
  }

  return (
    <>
    <EventHandler text="Like" onOrder={handleLikeButton} />
      <Counter />
    </>
  )
}

export default App
