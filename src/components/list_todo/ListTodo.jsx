import React from "react";
import "./ListTodo.scss";

export default function ListTodo() {
  return (
    <div className="ListTodo">
      <div className="ListTodo__row">
        <div className="ListTodo__item">Buy New Laptop</div>
        <div className="ListTodo__delete">Del</div>
      </div>

      <div className="ListTodo__row">
        <div className="ListTodo__item">Make Codehance Course</div>
        <div className="ListTodo__delete">Del</div>
      </div>

      <div className="ListTodo__row">
        <div className="ListTodo__item">Complete Today's Task</div>
        <div className="ListTodo__delete">Del</div>
      </div>
    </div>
  );
}
