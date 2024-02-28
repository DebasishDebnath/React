import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTodo, removeTodo } from "../featues/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div></div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          <button onClick={() => dispatch(editTodo(todo.id))}>Y</button>
        </li>
      ))}
    </>
  );
}

export default Todos;
