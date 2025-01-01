import { useState } from "react";

export default function Task({ task, onChangeTask }) {
  const [isEditing, setIsEditing] = useState(false);

  const taskContent = isEditing ? (
    <>
          <input type="text" value={task.text} onChange={(e) => onChangeTask({
              ...task, text: e.target.value,
      })} />
      <button onClick={() => setIsEditing(false)}>Save</button>
    </>
  ) : (
    <>
      {task.text}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );

  return (
    <>
          <input type="checkbox" checked={task.done} onChange={(e) => onChangeTask({
          ...task, done: e.target.checked
      })} />

      {taskContent}

      <button>Delete</button>
    </>
  );
}
