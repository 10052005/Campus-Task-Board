// Task 2: reusable component. Receives one task from the parent through props.
function TaskCard({ task }) {
  const { title, category } = task;

  return (
    <article className={`task-card cat-${category.toLowerCase()}`}>
      <h3 className="task-title">{title}</h3>
      <span className="task-category">{category}</span>
    </article>
  );
}

export default TaskCard;