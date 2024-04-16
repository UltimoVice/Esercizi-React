import { useEffect, useRef, useState } from "react"



export function Counter({ initialValue = 0, decrementValue = 1 }) {
    const [ counter, setCounter ] = useState(initialValue) // possiamo destrutturare l'array prendendo tutti i suoi valori e dicendogli di posizionarli all'interno di counter(il primo parametro passato) 
    
    const newRef = useRef(null)
    const prevRef = useRef(null)

    useEffect(() => {
        if(counter > (initialValue)){
            newRef.current = 'up' 
        } else {
            newRef.current = 'down'
        }

        if(newRef.current !== prevRef.current) {
            console.log(newRef.current); 
            prevRef.current = newRef.current
        }
            
    })

    useEffect(() => {
        console.log(`The value of the counter is ${counter}`);

        return () => {
            console.log(`The value of the counter was ${counter}`);
        }
    }, [counter])

    function handleCounterIncrement(){
        setCounter((c) => c + 1) // meglio farlo con le callback per essere sicuri di avere il valore più aggiornato possibile
    }

    function handleCounterDecrement(){
        setCounter(counter - decrementValue)
    }

    function handleCounterReset(){
        setCounter(initialValue)
    }

    return (
        <div>
            <p>I have counted to {counter}</p>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    )
}








// import React, { useState } from 'react';

// const CounterDisplay = ({ count }) => {
//   return <h2>Count: {count}</h2>;
// };

// const Counter = ({ initialValue = 0, decrementValue = 1 }) => {
//   const [count, setCount] = useState(initialValue);

//   const handleCounterDecrement = () => {
//     setCount(prevCount => prevCount - decrementValue);
//   };

//   const handleCounterReset = () => {
//     setCount(initialValue);
//   };

//   return (
//     <div>
//       <CounterDisplay count={count} />
//       <button onClick={handleCounterDecrement}>Decrement</button>
//       <button onClick={handleCounterReset}>Reset</button>
//     </div>
//   );
// };





// Create a Counter function component and create a new state variable called counter initialized to 0. The Counter component should render the counter value within an h2 tag, 
// and the counter value should be incremented every time the user clicks on a button.
// Tip: use the useState hook. Make it so that the initial value of the counter and the increment amount are passed as props to the component. When calling "setter" function to 
// increment the counter, should the parameter be a function or an immediate value? Why?
// import { useState } from "react"

// export const Counter = (initialValue = 0, incrementValue = 1) => {
   
//     const [counter, setCounter] = useState(initialValue)

//     const handleIncrement = () => {
        
//         setCounter((c) => c + incrementValue)
//     }
   
//     return (
//         <div>
//             <h2>Il mio conto! {counter}</h2>
//             <button onClick={handleIncrement}>Click me!</button>
//         </div>
//     )
// }