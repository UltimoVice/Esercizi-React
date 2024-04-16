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








