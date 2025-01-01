import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTask } from "./../data/initialTask";
import { useState } from "react";
import "./App.css";
let nextId = 4;
export default function App() {
  const [tasks, setTasks] = useState(initialTask);

  const handleChangeTask = (task) => {
    const changedTask = tasks.map((t) => {
      if (t.id === task.id) {
        return {
          ...t,
          text: task.text,
          done: task.done,
        };
      } else {
        return t;
      }
    });

    setTasks(changedTask);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text,
        done: false,
      },
    ]);
  };
  return (
    <>
      <h1>Simple Todo App</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
