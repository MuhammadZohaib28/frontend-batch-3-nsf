import React, { useState } from 'react'

const App = () => {

  const [age, setAge] = useState(0)


  function handleIncrement() {
    setAge(age + 1)
  }

  function handleDecrease() {
    setAge(age - 1)
  }








  return (

    <div>
      <h1>USE STATE HOOK</h1>

      <button onClick={handleDecrease}>-</button>


      <h1>  {age}    </h1>




      <button onClick={handleIncrement}>+</button>

    </div>
  )
}

export default App
