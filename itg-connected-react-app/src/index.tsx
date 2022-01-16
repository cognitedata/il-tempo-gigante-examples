import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  // This is the qraphQL endpoint. It is displayed at the top of the doc located in the "Integration Code" Tab of itg.cognite.ai
  // It should look something like this: https://itg.cognite.ai/api/v1/projects/123/graphql
  uri: `${process.env.GRAPHQL_ENDPOINT}`,
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      // This is the project that you choose when logging in with OAuth at itg.cognite.ai
      project: `${process.env.PROJECT_NAME}`,
      // You get the bearer token from logging in. To get this you will need to connect your app to your auth service
      // for testing purposes you can use the token given to the UI when you are logged in at itg.cognite.ai
      authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
