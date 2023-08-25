import "./App.css";
import { useState } from "react";
import TodoList from "./components/Todo/TodoList";

export default function App() {
  return (
    <div className="App">
      <h1>My TODOs</h1>

      <TodoList></TodoList>
    </div>
  );
}
