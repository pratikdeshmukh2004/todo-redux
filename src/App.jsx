import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <h1 className="font-bold text-xl text-rose-500">React Redux Todo</h1>
      <AddTodo />
      <Todo />
    </div>
  );
}

export default App;
