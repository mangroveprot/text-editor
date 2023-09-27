import React from "react";
import "./App.css";
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <div className="App">
        <h1>React Text Editor</h1>
      <div className="editor">
        <TextEditor />
    </div>
    </div>
  );
}

export default App;
