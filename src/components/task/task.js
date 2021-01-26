import '../../stylesheets/tasker.scss'

export default function Task({ task, index, removeTaskFromLocalStorage, focusTask, unFocusTask }) {
    return (
      <div className={task.isFocused ? "task invertConst" : "task borders"}>
        {task.task}
        <div>
          <button
            className={
              task.isFocused ? "taskButton invertConst" : "taskButton invert"
            }
            onClick={() => focusTask(index)}>
            focus
          </button>
          <button
            className={
              task.isFocused ? "taskButton invertConst" : "taskButton invert"
            }
            onClick={() => unFocusTask(index)}>
            unfocus
          </button>
          <button
            className={
              task.isFocused ? "taskButton invertConst" : "taskButton invert"
            }
            onClick={() => removeTaskFromLocalStorage(index)}>
            Complete
          </button>
        </div>
      </div>
    );
}