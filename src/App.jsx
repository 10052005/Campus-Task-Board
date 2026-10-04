import { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard.jsx";

const CATEGORIES = ["Study", "Assignment", "Lab", "Event"];

function App() {
  // Task 1: tasks stored with useState (id, title, category)
  const [tasks, setTasks] = useState([
    { id: 1, title: "Revise Chapter 4 of Data Structures", category: "Study" },
    { id: 2, title: "Submit React mini project on GitHub", category: "Assignment" },
    { id: 3, title: "Finish circuit analysis lab report", category: "Lab" },
    { id: 4, title: "Attend the career fair in the main hall", category: "Event" },
  ]);

  // Task 3: controlled form inputs
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState(CATEGORIES[0]);

  // Task 4: runs on first render and every time the task list changes
  useEffect(() => {
    console.log("Task list updated!");
    console.log("Total number of tasks:", tasks.length);
  }, [tasks]);

  // Task 3: add a task (onSubmit handler)
  const handleAddTask = (event) => {
    event.preventDefault();
    const title = newTitle.trim();
    if (title === "") return;

    const task = { id: Date.now(), title, category: newCategory };
    setTasks([...tasks, task]);
    setNewTitle("");
  };

  return (
    <main className="board">
      <header className="board-header">
        <h1>Campus Task Board</h1>
        <p className="board-count">
          {tasks.length} {tasks.length === 1 ? "task" : "tasks"} on the board
        </p>
      </header>

      <form className="task-form" onSubmit={handleAddTask}>
        <input
          type="text"
          className="task-input"
          placeholder="What needs doing?"
          aria-label="Task title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <select
          className="task-select"
          aria-label="Task category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button type="submit" className="add-btn">
          Add Task
        </button>
      </form>

      {tasks.length === 0 && (
        <p className="empty">No tasks yet. Add your first one above.</p>
      )}

      {/* Task 1: display with .map() and a unique key */}
      <section className="task-grid">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </section>
    </main>
  );
}

export default App;