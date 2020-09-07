import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Head from "./components/Head";
import Button from "./components/button";
import Input from "./components/input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Head title="Hello" isActive={true} />
        <Button
          onClick={(e) => {
            e.preventDefault();
            console.log(e.target);
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Input />
      </header>
    </div>
  );
}

export default App;
