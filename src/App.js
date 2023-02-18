import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import { useDoc } from "@syncstate/react";

function App() {
  const todoPath = "/todos";
  const [todos, setTodos] = useDoc(todoPath);

  const todoList = todos.map((todoItem, index) => {
    return (
      <li key={todoItem.index} className="list-group-item">
        <TodoItem todo={todoItem} todoItemPath={todoPath + "/" + index} />
      </li>
    );
  });
  const keyGenerator = () => "_" + Math.random().toString(36).substr(2, 9);
  const addTodo = (todoItem) => {
    setTodos((todos) => {
      let id = keyGenerator();
      todos.push({
        id: id,
        caption: todoItem,
        completed: false,
      });
      document.getElementsByClassName("input-todo")[0].value = "";
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-white">
        Multi User Todo Using SyncState
      </h2>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card-hover-shadow-2x mb-3 card">
            <div className="card-header-tab card-header">
              <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                <i className="fa fa-tasks"></i>&nbsp;Task Lists
              </div>
            </div>
            <div
              className="overflow-auto"
              style={{ height: "auto", maxHeight: "300px" }}
            >
              <div className="position-static">
                <ul className=" list-group list-group-flush">{todoList}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
