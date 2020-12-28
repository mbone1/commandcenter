import '../../stylesheets/tasker.scss'

export default function Task({ task, index, completeTask, uncompleteTask, removeTask }) {
  return (
    <div
      className="task bordersNM"
      style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
      >
      {task.text}
      <div>
        <button className="taskButton invert" onClick={() => completeTask(index)}>Complete</button>
        <button className="taskButton invert" onClick={() => uncompleteTask(index)}>unComplete</button>
        <button className="taskButton invert" onClick={() => removeTask(index)}>Delete</button>
      </div>
    </div>
  );
}
