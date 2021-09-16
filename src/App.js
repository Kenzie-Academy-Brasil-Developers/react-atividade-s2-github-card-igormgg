import "./reset.css";
import "./App.css";
import { useState } from "react";
import SearchBox from "./Components/SearchBox";
import Card from "./Components/Card";

function App() {
  const [githubResult, setGithubResult] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Github Card</h1>
      </header>
      <body>
        <div className="searchAndRepoContainer">
          <SearchBox setGithubResult={setGithubResult} />
          {githubResult && <Card githubResult={githubResult} />}
        </div>
      </body>
    </div>
  );
}

export default App;
