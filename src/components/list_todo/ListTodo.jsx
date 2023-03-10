import React from "react";
import "./ListTodo.scss";

export default function ListTodo() {
  return (
    <div className="ListTodo">
      <div className="ListTodo__row">
        <div className="ListTodo__item">Buy New Laptop</div>
        <div className="ListTodo__delete">Del</div>
      </div>
    </div>
  );
}
