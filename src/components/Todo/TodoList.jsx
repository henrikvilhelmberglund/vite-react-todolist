import { useState } from "react";
import Todo from "./Todo";
import { duckTodos } from "./data";

export default function TodoList() {
  const [todos, setTodos] = useState(duckTodos);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");

  function removeTodo(i) {
    setTodos((prevState) => {
      const newState = [...prevState];
      newState.splice(i, 1);
      return newState;
    });
  }

  function toggleComplete(i) {
    // ? better way maybe
    let newTodos = [...todos];
    newTodos[i].completed = !newTodos[i].completed;
    setTodos(newTodos);
    // setTodos((prevState) => {
    //   const newState = [...prevState];
      // ! doesn't work
      // newState[i].completed = !newState[i].completed;
      // newState[i] = { ...newState[i], completed: !newState[i].completed };
    //   // console.log(newState[i].completed);
    //   // console.log(newState);
      // return newState;
    // });
  }

  return (
    <div>
      <h3 className="text-3xl">TODOs</h3>
      <label htmlFor="todoTitle">Title</label>
      <br />
      <input
        type="text"
        onChange={(e) => setTodoTitle(e.target.value)}
        id="todoTitle"
      />
      <br />
      <label htmlFor="todoDesc">Description</label>
      <br />
      <input
        onChange={(e) => setTodoDesc(e.target.value)}
        type="text"
        id="todoDesc"
      />
      <br />
      <button
        onClick={() =>
          setTodos((prevState) => {
            const newState = [
              ...prevState,
              { title: todoTitle, description: todoDesc, completed: false },
            ];
            console.log(newState);
            return newState;
          })
        }>
        Add TODO
      </button>
      {todos.map((todo, i) => (
        <Todo
          {...todo}
          removeTodo={() => removeTodo(i)}
          toggleComplete={() => toggleComplete(i)}
          key={i}
        />
      ))}
    </div>
  );
}
