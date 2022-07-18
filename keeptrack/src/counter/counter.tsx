import React, {useState}from 'react'


 const CounterPage = () => {
    const[counter, setCounter] = useState(0);
   const increment = ()=> setCounter(counter + 1);
   const decrement  = () => setCounter(counter - 1)
  return (
      <>
      <h1>counter</h1>
      <button data-testid = "increment "onClick={increment}> +</button>
      <button data-testid="decrement" onClick={decrement}> -</button>
      <div><span>counter Value: </span><span data-testid="counter">{counter}</span></div>
      </>
  
  )
}

export default CounterPage