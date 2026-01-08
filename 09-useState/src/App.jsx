import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0);

  const increaseNum= ()=>{
    setNum(num+1)
  }
  const decreaseNum =()=>{
    setNum(num-1)
  }
  const jumBy5= ()=>{
    setNum(num+5)
  }

  return (
    <div>
     <h1>{num}</h1>
      <button onClick={increaseNum}>increaseNumber</button>
       <button onClick={decreaseNum}>decreaseNumber</button>
        <button onClick={jumBy5}>increase by 5</button>
    </div>
  )
}

export default App
