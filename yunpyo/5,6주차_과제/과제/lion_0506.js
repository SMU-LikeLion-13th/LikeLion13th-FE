const input = document.getElementById("Input");
const list = document.getElementById("List");

function addTodo() {
  const text = input.value.trim();
  if (!text) {
    alert("할 일을 입력해주세요!");
    return;
  }

  const li = document.createElement("li");
  const check = document.createElement("div");
  check.classList.add("check-circle");

  check.addEventListener("click", () => {
    if (check.classList.contains("checked")) {
      check.classList.remove("checked");
      li.classList.remove("completed");
    } else {
      check.classList.add("checked");
      li.classList.add("completed");
    }
  });

  const span = document.createElement("span");
  span.textContent = text;
  span.classList.add("task");

  const task = document.createElement("div");
  task.classList.add("task-content");
  task.append(check, span);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "×";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => li.remove());

  li.append(task, deleteBtn);
  list.appendChild(li);

  input.value = "";
}
