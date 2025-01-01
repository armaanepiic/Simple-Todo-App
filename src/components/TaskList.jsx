import Task from "./Task";
import { initialTask } from "./../data/initialTask";
import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState(initialTask);

  return (
    <>
      <ul>
        <li>
          {tasks.map((task) => (
            <li key={task.id}>
              <Task task={task} />
            </li>
          ))}
        </li>
      </ul>
    </>
  );
}
