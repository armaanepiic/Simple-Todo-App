import Task from "./Task";
import { initialTask } from "./../data/initialTask";
import { useState } from "react";

export default function TaskList() {
    const [tasks, setTasks] = useState(initialTask);
    
    const handleChangeTask = (task) => {
        const changedTask = tasks.map((t) => {
            if (t.id === task.id) {
                return {
                    ...t,
                    text: task.text,
                    done: task.done,
                }
            } else {
                return t;
            };
        });

        setTasks(changedTask);
        
    }

  return (
    <>
      <ul>
        <li>
          {tasks.map((task) => (
            <li key={task.id}>
              <Task task={task} onChangeTask={handleChangeTask} />
            </li>
          ))}
        </li>
      </ul>
    </>
  );
}
