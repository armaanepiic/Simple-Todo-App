

import TaskList from "./TaskList";

import { useState } from "react";

export default function AddTodo({onAddTask}) {
  const [text, setText] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
          <button onClick={() => {
              setText('');
              onAddTask(text);
      }}>Add</button>
    </>
  );
}
