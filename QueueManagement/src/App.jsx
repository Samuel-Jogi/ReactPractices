
import './App.css'
import { QueueForm } from './components/QueueForm';
import { QueueDisplay } from './components/QueueDisplay';
import { useState } from 'react';

function App() {
  const [queue, setQueue] = useState([]);
  const addQueue = (customer)=> {
    setQueue([...queue, {...customer, id:Date.now(), status:'waiting'} ])
  }
  return (
    <>     
      <header>
        <h1>Queue Management application</h1>
        <p>Manage your customers efficiently</p>
      </header> 
      <main className="mainClass">
        {/* <h4>QueueForm</h4> */}
        <QueueForm queue={queue} setQueue={setQueue} addToQueue={addQueue}/>
        {/* <h4>Queue Display</h4> */}
        <QueueDisplay queue={queue} setQueue={setQueue} />
      </main>
    </>
  )
}

export default App
