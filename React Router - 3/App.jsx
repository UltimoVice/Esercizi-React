
import { GithubUser } from "./GithubUser";

import { Link, Route, Router, Routes } from "react-router-dom";

import ShowGithubUser from "./ShowGitHubUser";

export function App() {


  return (
    <div>
      
      
      <Routes>
        <Route path="/" element={<GithubUser username={'UltimoVice'} />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    
    </div>
  );
}

