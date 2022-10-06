import React from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <br />
      <Todo />
    </div>
  );
}
