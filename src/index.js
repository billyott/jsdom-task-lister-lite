document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const todoList = document.querySelector("#tasks")
  const submitButton = document.querySelector("[type='submit']")
  submitButton.addEventListener('click', function(event) {
    const newTask = document.createElement("li");
    newTask.innerHTML = document.querySelector("#new-task-description").value
    todoList.append(newTask)
    event.preventDefault();
  });
});
