
import AddTask from './components/AddTask'
import TaskList from "./components/TaskList";
import {initialTask} from './data/initialTask'
import { useReducer, useState } from "react";
import "./App.css";
import taskReducer from './reducers/taskReducer';



let nextId = 4;
export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTask);

  // const [count, setCount] = useState(0);

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: 'deleted',
      id: taskId,
    })
  };

  const handleAddTask = (text) => {
    dispatch({
      type: 'added',
      text,
      id: nextId++,
    });
  };

  return (
    <>
      <h1>Simple Todo App</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
