import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import FertilizerInfo from "./components/fertilizer";
import Search from "./components/Search";
import Logo from "./components/shared/Logo";

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret":
        "4RnrajgKXZKXhtB4oy4il6jCZAXzk4z6Y5AbaRhwzxrHkKhJn4DOXiQP5C9nynoz",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(
    new HttpLink({
      uri: "https://fertilizer-info.hasura.app/v1/graphql",
    })
  ),
});

function App() {
  return (
    <div>
      <Logo />
      <Search />
      <FertilizerInfo />
    </div>
  );
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
