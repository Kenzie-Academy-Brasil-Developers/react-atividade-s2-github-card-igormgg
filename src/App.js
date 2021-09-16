import "./reset.css";
import "./App.css";
import { useEffect, useState } from "react";
import SearchBox from "./Components/SearchBox";
import Card from "./Components/Card";

function App() {
  const [githubResult, setGithubResult] = useState("");
  const [githubSearch, setGithubSearch] = useState("facebook/react");

  useEffect(() => {
    fetch(`https://api.github.com/repos/${githubSearch}`)
      .then((response) => response.json())
      .then((response) => setGithubResult(response))
      // .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, [githubSearch]);

  console.log(githubResult);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Github Card</h1>
      </header>
      <body>
        <div className="searchAndRepoContainer">
          <SearchBox setGithubSearch={setGithubSearch} />
          <Card githubResult={githubResult} />
        </div>
      </body>
    </div>
  );
}

export default App;
