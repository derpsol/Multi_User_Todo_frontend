import React from "react";
import { useDoc } from "@syncstate/react";

function TodoItem({ todoItem }) {

  return (
    <div>
      <div className="d-flex align-content-center">
        <div
          className="d-flex align-items-center todoTitle"
        >
          <div style={{ width: "100%" }}>{todoItem.caption} </div>
        </div> 
      </div>
    </div>
  );
}

export default TodoItem;
