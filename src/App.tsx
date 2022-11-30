import React from 'react';
import './App.css';
import Header from "./components/Header";
import {Routing} from "./Routing";
import {CircularProgress} from "@mui/material";
import {useAppSelector} from "./hooks/hooks";

function App() {

  return (
    <div className="App">
      {/*<Header/>*/}
      <Routing />
    </div>
  );
}

export default App;
