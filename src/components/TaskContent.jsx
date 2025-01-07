import { useState } from "react";

export default function TaskContent({ task, onChange }) {
  const [isEditing, setIsEditing] = useState(false);
  return isEditing ? (
    <>
      <input
        type="text"
        value={task.text}
        onChange={(e) =>
          onChange({
            ...task,
            text: e.target.value,
          })
        }
      />
      <button onClick={() => setIsEditing(false)}>Save</button>
    </>
  ) : (
    <>
      {task.text}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );
}