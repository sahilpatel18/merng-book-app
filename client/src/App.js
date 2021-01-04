import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
const URI = process.env.REACT_APP_GRAPH_URI;

const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache(),
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Sahil's Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}
export default App;
