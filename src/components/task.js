export default function Task({ task, index, completeTask, removeTask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.isCompleted ? "line-through" : "" }}>
      {task.text}
      <div>
        <button onClick={() => completeTask(index)}>Complete</button>\
        <button onClick={() => removeTask(index)}>X</button>
      </div>
    </div>
  );
}
