import React from 'react'

const App = () => {
  const btnClicked =()=>{
    console.log("Button clicked")
  }

  const inputChanging =(elem)=>{
    console.log(elem.target.value)
  }

  return (
    <div>
      <h1>Hello , Devika</h1>
      <input onChange={inputChanging} type="text" placeholder='Enter something'/>
      <button onClick={btnClicked}>Change color</button>
    </div>
  )
}

export default App
