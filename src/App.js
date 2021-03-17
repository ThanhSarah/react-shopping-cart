//feature 1
import React from "react";
import data from "./data.json";

class App extends React.Componenet {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size:"",
      sort:"",
    };
  }
  render() {
    return (
      <div className="grid-container">
      <header>
      <a href="/"> React Shopping Card</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            Products
          </div>
          <div className="sidebar">
            Cart items
          </div>
        </div>
        Product List
      </main>
      <footer>
        All right is reseved
      </footer>
    </div>
    );
  }
}

export default App;
