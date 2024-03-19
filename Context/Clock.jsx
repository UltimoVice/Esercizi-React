import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock(){
    const [date, setDate] = useState(new Date())

    const language = useContext(LanguageContext)

    useEffect(() => {
        console.log('Setting up clock interval');

        const intervalID = setInterval(() => {
            console.log('Updating date...');

            setDate(new Date())
        }, 1000)

        return () => {
            console.log('Clearing clock interval')

            clearInterval(intervalID)
        } // Si usa per evitare che il compopnente venga eseguito 2 volte in strict mode ed è chiamata cleanup function
    }, [])

    return <div><h2>{language === 'en' ? 'Current time:' : 'Ora corrente:'} {date.toLocaleTimeString()}</h2></div>
}



