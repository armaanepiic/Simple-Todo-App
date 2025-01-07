export default function taskReducer(tasks, action) {
  switch (action.type) {
    case "added": 
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];

    case "changed":
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return {
            ...t,
            text: action.task.text,
            done: action.task.done,
          };
        } else {
          return t;
        }
      });

    case "deleted":
      return tasks.filter((t) => t.id !== action.id);
    
    default:
      throw new Error("No action matched");
  }
}
