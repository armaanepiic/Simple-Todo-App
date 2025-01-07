import Task from "./Task";

export default function TaskList({tasks, onChangeTask, onDeleteTask}) {
  return (
    <>
      <ul>
        <li>
          {tasks.map((task) => (
            <li key={task.id}>
              <Task
                task={task}
                onChange={onChangeTask} 
                onDelete={onDeleteTask}
              />
            </li>
          ))}
        </li>
      </ul>
    </>
  );
}
