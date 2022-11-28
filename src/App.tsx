import React from 'react';
import logo from './logo.svg';
import './App.css';

import MainPage from "./components/MainPage";
import Header from "./components/Header";
import {Routing} from "./Routing";

function App() {
  return (
    <div className="App">
      <Header/>
        {/*<MainPage/>*/}
      <Routing />
    </div>
  );
}

export default App;
