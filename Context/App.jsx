import { Container } from "./Container";
import { MyAlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { HelloWorld } from "./HelloWorld";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Message } from "./Message";
import { MouseClicker } from "./MouseClicker";
import { MyForm } from "./MyForm";
import { Colors } from "./MyList";
import { MyUncontrolledForm } from "./MyUncontrolledForm";
import { TodoList } from "./TodoList";
import { Welcome } from "./Welcome";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";

export function App() {
  const [language, setLanguage] = useState("en");

  const handleSetLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <LanguageContext.Provider value={language}>
        <select value={language} onChange={handleSetLanguage}>
          <option value="en">EN</option>
          <option value="it">IT</option>
        </select>
        <Clock />
      </LanguageContext.Provider>
    </div>
  );
}
