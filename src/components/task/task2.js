import '../../stylesheets/tasker.scss'

export default function Task({ task, index, removeTaskFromLocalStorage, focusTask, unFocusTask }) {
    return (
        <div
            className={task.isFocused ? "task bordersNMF" : "task borders"}
            >
            {task.task}
            <div>
                <button className="taskButton invert" onClick={() => focusTask(index)}>
                    focus
        </button>
                <button
                    className="taskButton invert"
                    onClick={() => unFocusTask(index)}>
                    unfocus
        </button>
                <button className="taskButton invert" onClick={() => removeTaskFromLocalStorage(index)}>
                    Delete
        </button>
            </div>
        </div>
    )
}