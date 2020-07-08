import React from 'react';
import './App.css';
import Firebase from "./Components/Config/firebase";
import 'rsuite/dist/styles/rsuite-default.css';
import "./bootstrap.css";

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Firebase/>
      </div>
    );
  }
}

export default App;
