document.getElementById("add-task-btn").addEventListener("click", function() 
{
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") 
        {
      alert("Please enter a task.");
      return;
        }
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;
    span.addEventListener("click", function() 
    {
      li.classList.toggle("completed");
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function() 
    {
      li.remove();
    });
    li.appendChild(span);
    li.appendChild(deleteBtn);
    document.getElementById("task-list").appendChild(li);
    taskInput.value = "";
});
