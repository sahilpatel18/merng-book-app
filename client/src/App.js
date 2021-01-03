import React from "react";
import BookList from "./components/BookList";

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <h1>Sahil</h1>
        <BookList />
      </div>
    );
  }
}
export default App;