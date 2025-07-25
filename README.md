# JSL02 Challenge

## Overview

This project is my implementation of a simple task management board designed to practice JavaScript fundamentals like **user input validation**, **conditional logic**, and **basic console output**.

Through this, I aimed to:

- Prompt users to enter task **titles**, **descriptions**, and **statuses**
- Validate inputs so only allowed statuses (`todo`, `doing`, `done`) are accepted
- Display summaries of completed tasks in the console
- Provide motivational feedback if no tasks are marked as done

## Features Covered

I built functionality to:

- Prompt the user for two tasks with all relevant details
- Validate the status input via loops that re-prompt on invalid entries
- Log completed tasks’ titles and statuses to the console
- Log a motivational message if neither task is completed
- Manage a pre-existing task array and add up to three new tasks dynamically, with unique incremental IDs
- Filter tasks by status to display completed tasks separately

## Structure

The project consists of:

- ✅ An **HTML layout** representing a Kanban-style board with columns for TODO, DOING, and DONE tasks
- 🎨 A **CSS stylesheet** that styles the board with responsive design, color-coded status dots, and a clean, modern UI
- ⚙️ **JavaScript code** that interacts with the user, validates inputs, manages the tasks array, and outputs task statuses in the console

---

### HTML

In the HTML, I structured the page to display a Kanban board with three columns, each representing a task status.

Here’s a snippet showing how I created the **TODO** column with example tasks:

```html
<div class="column-div" data-status="todo">
  <div id="todo-head-div" class="column-head-div">
    <span class="dot" id="todo-dot"></span>
    <h4 id="toDoText" class="columnHeader">TODO (4)</h4>
  </div>
  <div class="tasks-container">
    <div class="task-div">Launch Epic Career 🚀</div>
    <div class="task-div">Conquer React⚛️</div>
    <div class="task-div">Understand Databases⚙️</div>
    <div class="task-div">Crush Frameworks🖼️</div>
  </div>
</div>
```

- The `.dot` spans are colored circles indicating the status visually.
- Task items inside `.task-div` are simple divs for now but could be enhanced later.
- The structure repeats similarly for the **DOING** and **DONE** columns.

I also included a sidebar for navigation and a header for the board title to organize the layout clearly.

---

### CSS

To style the board, I declared CSS variables for colors and used flexbox and grid for layout:

```css
:root {
  --primary-color: #ffffff;
  --secondary-color: #f4f7fd;
  --primary-font-color: #000000;
  --secondary-font-color: #828fa3;
  --primary-box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.1015);
  --sidebar-width: 300px;
}

.side-bar {
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color);
  border-right: 1px solid #e4ebfa;
  width: var(--sidebar-width);
  height: 100vh;
}

.card-column-main {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 304px));
  gap: 8px;
}
```

- I used a grid with three equal columns for the task sections.
- The sidebar is fixed width and full height, separated by a subtle border.
- Task cards have shadows and rounded corners to make them stand out:

```css
.task-div {
  background-color: var(--primary-color);
  border-radius: 12px;
  box-shadow: var(--primary-box-shadow);
  padding-left: 15px;
  height: 60px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
```

- Responsive media queries hide the sidebar and stack columns on smaller screens for usability.

---

### JavaScript

The JavaScript focuses on getting user input, validating it, and managing tasks dynamically:

```js
// Prompt for task 1 details
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

let task1Status = prompt(
  "Enter task 1 status (todo, doing, done):"
).toLowerCase();

// Validate status input for task 1
while (!["todo", "doing", "done"].includes(task1Status)) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status (todo, doing, done):"
  ).toLowerCase();
}
```

- I repeat this process for task 2.
- If a task’s status is `"done"`, I log it to the console:

```js
if (task1Status === "done") {
  console.log("Title: " + task1Title + ", status: " + task1Status);
}
if (task2Status === "done") {
  console.log("Title: " + task2Title + ", status: " + task2Status);
}
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}
```

I also created an array with sample tasks and a function to add up to three new tasks:

```js
const tasks = [
  { id: 1, title: "Gym", description: "Work those muscles", status: "todo" },
  { id: 2, title: "Study", description: "Work those brains", status: "doing" },
  { id: 3, title: "Sleep", description: "Rest that bod", status: "done" },
  {
    id: 4,
    title: "Correct JSL02",
    description: "Make corrections to JSL02 before attempting JSL03",
    status: "done",
  },
];

function addTasks() {
  for (let i = 0; i < 3; i++) {
    const title = prompt("Enter task title:");
    if (!title) break;

    const description = prompt("Enter task description:");
    if (!description) break;

    let status;
    do {
      status = prompt("Enter task status (todo, doing, done):").toLowerCase();
      if (!["todo", "doing", "done"].includes(status)) {
        alert(
          "Invalid status. Please enter either 'todo', 'doing', or 'done'."
        );
      }
    } while (!["todo", "doing", "done"].includes(status));

    const lastTaskId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;
    tasks.push({ id: lastTaskId + 1, title, description, status });
  }

  if (tasks.length >= 6) {
    alert(
      "There are enough tasks on your board, please check them in the console."
    );
  }
}

addTasks();

console.log("All tasks:", tasks);
console.log(
  "Completed tasks:",
  tasks.filter((t) => t.status === "done")
);
```

- This lets me dynamically add tasks while keeping data valid and consistent.
- Finally, I log all tasks and separately the completed ones so I can review progress easily.

---

## How to Use This Project

1. Open the project folder in VS Code and launch it using **Live Server**.
2. The page shows a static Kanban board with sample tasks.
3. You will be prompted to enter details for two tasks, then up to three more tasks.
4. Watch the developer console to see logs of completed tasks and motivational messages.
5. Experiment with entering different statuses and observe validation alerts if invalid.

---

## License

This project is provided for **educational use only**.
