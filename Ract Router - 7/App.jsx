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
  

  return (
    <div>
      
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

