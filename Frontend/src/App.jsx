import { useState } from "react";
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
import "./App.css";
import FetchData from "./components/FetchData";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <FetchData />
      </ApolloProvider>
    </>
  );
}

export default App;
