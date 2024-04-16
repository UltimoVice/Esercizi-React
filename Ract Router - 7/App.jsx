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
import { GithubUser } from "./GithubUser";
import { HookCounter } from "./HookCounter";
import { CurrentLocation } from "./CurrentLocation";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import { Catalogue } from "./Catalogue";
import { Product } from "./Product";
import ShowGithubUser from "./ShowGitHubUser";
import { GithubUserList } from "./GitHubUsersList";

export function App() {
  const [language, setLanguage] = useState("en");

  const handleSetLanguage = (event) => {
    setLanguage(event);
  };

  return (
    <div>
      {/* <button onClick={() => handleSetLanguage('it')}>IT</button> */}
      {/* <button onClick={() => handleSetLanguage('en')}>EN</button> */}
      {/* <Container title="UE UE"> */}
      {/* <LanguageContext.Provider value={language}> */}
      {/* <select value={language} onChange={handleSetLanguage}>
            <option value="en">EN</option>
            <option value="it">IT</option>
          </select>
          <h1>My Awesome Application!</h1>
          <hr />
          <HelloWorld />
          <Message />
          <Welcome name="John" age={0} />

          <MyAlertClock />

          <Clock />

          <MouseClicker />

          <MyForm />

          <MyUncontrolledForm />

          <InteractiveWelcome />

          <Colors
            colors={[
              { id: 1, name: "Jane", age: 33 },
              { id: 2, name: "Marco", age: 44 },
              { id: 3, name: "Emilio", age: 23 },
              { id: 4, name: "Simone", age: 56 },
              { id: 5, name: "Claudio", age: 34 },
            ]}
          /> */}

      {/* <TodoList /> */}

      {/* <Counter /> */}

      {/* <GithubUser username={'UltimoVice'}/>
          <GithubUsers /> */}

      {/* <HookCounter /> */}

      {/* <GithubUser username={'UltimoVice'}/> */}
      {/* <CurrentLocation /> */}
      {/* <h1>My Awesome App</h1>
      <div>
        <Link to="/">Home</Link> | <Link to="products">Products</Link>
      </div>
      <Routes>
        <Route path="/" element={<CurrentLocation />} />
        <Route path="/:name" element={<CurrentLocation />} />
        <Route path="myform" element={<MyForm />} />
        <Route path="products" element={<Catalogue />}>
          <Route index element={<p>Please select a product</p>} />
          <Route path=":id" element={<Product />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <p>Not found</p>
              <Link to="/">Go Home</Link>
            </div>
          }
        />
      </Routes> */}
      {/* </LanguageContext.Provider> */}
      {/* </Container> */}

      {/* <Routes>
        <Route path="/" element={<GithubUser username={"UltimoVice"} />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<Welcome name="Jimmy" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route path="index" element={<div>Add a user and select it</div>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<div>Not Found!</div>} />
      </Routes>

      <div data-testid="links">
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/users/UltimoVice">UltimoVice User</Link>
      </div>
    </div>
  );
}

// useEffect - ci permette di reagire al rendering e viene innescato almeno una volta quando viene inizializzato
//             accetta 2 parametri: la funzione (che è la reazione che andrà ad eseguire) e l'array di dipendenze (che è la condizione)
//             se l'array delle dipendenze non è presente allora reagirà ad ogni rendering  es. useEffect(() => {})
//             se l'array delle dipendenze è [] allora reagirà solo al montaggio del componente (si usa spesso col fetch così viene chiamato una sola volta e salvato in una costante)  es. useEffect(() => {}, [])
//             se l'array delle dipendenze è collegato ad una costante allora reagirà sia al montaggio del componente sia al cambiamento della costante a cui è collegato  es. useEffect(() => {}, [costante])
// montare un componente - attaccarlo al dom (quindi lo faccio visualizzare)
// renderizzare un componente - quando un componente viene montato viene anche renderizzato per la prima volta e successivamente verrà renderizzato di nuovo ogni volta che cambia lo stato

// lo stato di un componente è l'insieme di tutte le costanti e le funzioni che ci sono in un componente

// useState - ci permette di creare e aggiornare lo stato del componente

// context - ci permette la comunicazione cross componenent, cioè che non rispetta la gerarchia del dom ma ci fa passare dei dati da un comune componente antenato (e ne esiste almeno 1 in comune a tutti che è la root)
//           tutto ciò che si trova avvolto all'interno del provider può accedere a questi dati
//           il problema è che ogni qual volta cambia lo stato del contesto ri-renderizza tutto, quindi va usato solo per valori che non cambiano molto frequentemente (es. le lingue)

// custom hooks - ci servono per 2 motivi principali: ci permettono di creare una porzione di codice riutilizzabile
//                                                    ci aiuta a tenere il codice più mantenibile e ordinato (così da avere la logica e la presentazione del componente in 2 file separati e quindi mantenerli più leggibili)
