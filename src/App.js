import React, { Component } from "react";

class App extends Component {
  state = {
    catUrl: "",
  };

  async fetchCat() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    this.setState({ catUrl: data[0].url });
  }

  render() {
    return (
      <div>
        <img className="cat-image" src={this.state.catUrl} alt="cat" />
        <button className="button" onClick={() => this.fetchCat()}>
          Próxima imagem
        </button>
      </div>
    );
  }
}

export default App;
