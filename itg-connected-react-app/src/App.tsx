import React, { useEffect } from "react";
import cognite from "./cognite.svg";
import { gql, useQuery } from "@apollo/client";
import "./App.css";

const MY_FIRST_QUERY = gql`
  query MyQuery {
    Equipment(first: 1) {
      id
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(MY_FIRST_QUERY);

  useEffect(() => {
    if (error) {
      console.error(
        "Failed query: ",
        "Make sure you have the correct GRAPHQL_ENDPOINT, PROJECT_NAME and BEARER_TOKEN set up \n\n",
        error
      );
    } else if (data) {
      console.log("You have successfully queried ITG! \n\n", data);
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={cognite} className="App-logo" alt="logo" />
        <p>Welcome to your first ITG connected React app!</p>
        <p className="Subtitle">Open the console to see the query result</p>
        <a
          className="App-link"
          href="https://itg.cognite.ai/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn ITG
        </a>
      </header>
    </div>
  );
}

export default App;
