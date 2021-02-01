
export default function taskChecker() {
    const defaultTask = [
      {
        task: "get things done",
        isFocused: true,
        isSelected: false,
      },
      {
        task: "do not get things done",
        isFocused: true,
        isSelected: false,
      },
    ];
    if (JSON.parse(localStorage.getItem("tasks")) === null) {
    return defaultTask;
  } else {
    return JSON.parse(localStorage.getItem("tasks"));
  }
};
