import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Dashboard App</h1>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
