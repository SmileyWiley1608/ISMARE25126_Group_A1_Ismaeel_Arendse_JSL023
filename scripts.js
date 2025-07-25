// Ask the user for the title and description of task 1
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt(
  "Enter task 1 status (todo, doing, done):"
).toLowerCase();

// Keep asking until the user enters a valid status for task 1
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status (todo, doing, done):"
  ).toLowerCase();
}

// Repeat the same steps for task 2
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
let task2Status = prompt(
  "Enter task 2 status (todo, doing, done):"
).toLowerCase();

while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 2 status (todo, doing, done):"
  ).toLowerCase();
}

// Check if task1 is done, and log it if so
if (task1Status === "done") {
  console.log("Title: " + task1Title + ", status: " + task1Status);
}

// Check if task2 is done, and log it if so
if (task2Status === "done") {
  console.log("Title: " + task2Title + ", status: " + task2Status);
}

// If neither task1 nor task2 is done, show a motivational message
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}
///////////////////////////////////////
// Initial task array with example tasks
// 

// Initial task array with sample tasks
const tasks = [
  { id: 1, title: "Gym", description: "Work those muscles", status: "todo" },
  { id: 2, title: "Study", description: "Work those brains", status: "doing" },
  { id: 3, title: "Sleep", description: "Rest that bod", status: "done" },
  { id: 4, title: "Correct JSL02", description: "Make corrections to JSL02 before attempting JSL03", status: "done" }
];

// Maximum number of tasks that can be added
const maxNewTasks = 3;

// Function to add new tasks
function addTasks() {
  for (let i = 0; i < maxNewTasks; i++) {
    // Prompt for title
    const title = prompt("Enter task title:");
    if (!title) break;

    // Prompt for description
    const description = prompt("Enter task description:");
    if (!description) break;

    // Prompt for status with validation
    let status;
    do {
      status = prompt("Enter task status (todo, doing, done):").toLowerCase();
      if (!["todo", "doing", "done"].includes(status)) {
        alert("Invalid status. Please enter either 'todo', 'doing', or 'done'.");
      }
    } while (!["todo", "doing", "done"].includes(status));

    // Create new task with unique incremental ID
    const lastTaskId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;
    const newTask = {
      id: lastTaskId + 1,
      title,
      description,
      status
    };

    tasks.push(newTask);
  }

  // Alert user that max tasks have been added
  if (tasks.length >= 6) {
    alert("There are enough tasks on your board, please check them in the console.");
  }
}

// Filter and return completed tasks
function getCompletedTasks(taskArray) {
  return taskArray.filter(task => task.status === "done");
}

// Run program
addTasks();

// Log all tasks
console.log("All tasks:", tasks);

// Log only completed tasks
const completedTasks = getCompletedTasks(tasks);
console.log("Completed tasks:", completedTasks);
