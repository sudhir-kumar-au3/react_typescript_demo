import React from 'react';
import './App.css';
import Component from './Comp';
import logo from './logo.svg';
const Cont = () => <h1>This is me!</h1>
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Cont />
        <Component/>
      </header>
    </div>
  );
}

export default App;
