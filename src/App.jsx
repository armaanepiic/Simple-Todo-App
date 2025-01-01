import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./App.css";

export default function App() {
  return (
    <>
      <h1>Simple Todo App</h1>
      <AddTask />
      <TaskList />
    </>
  );
}
