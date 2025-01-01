import { useState } from "react";

export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);

  const taskContent = isEditing ? (
    <>
      <input type="text" />
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
      <input type="checkbox" checked={task.done} />

      {taskContent}

      <button>Delete</button>
    </>
  );
}
