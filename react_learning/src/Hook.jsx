import { useState } from 'react'
import './App.css'

function Hook() {
    let [counter, setCounter] = useState(10)

    const addValue = () => {
        if(counter >=20 ){
          alert("Cannot proceed")
          return
        }
        setCounter(counter+1)
    }

    const removeValue = () => {
        if(counter <=0){
          alert("Cannot proceed")
          return
        }
        setCounter(counter-1)
    }

  return (
    <>
      <h1> Counter Tracker : {counter} </h1>
      <br />
      <button onClick={addValue}>Add Number</button>
      <br />
      <button onClick={removeValue}>Remove Number</button>
    </>
  )
}

export default Hook
