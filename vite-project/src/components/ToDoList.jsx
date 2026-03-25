import React from "react";

const TodoList = () => {
  const todos = [
    { id: 1, task: "Learn React" },
    { id: 2, task: "Build Project" },
    { id: 3, task: "Practice DSA" },
    { id: 4, task: "Prepare Interview" },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Todo List</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              margin: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "300px",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <span>{todo.task}</span>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;