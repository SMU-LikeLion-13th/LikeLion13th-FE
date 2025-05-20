const form = document.getElementById("todolist");
const input = document.getElementById("add-text");
const button = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

button.addEventListener("click", function () {
  if (input.value.trim() === "") {
    alert("할 일을 입력해주세요!");
    return;
  }
  form.requestSubmit();
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = input.value.trim();
  if (value === "") return;

  const li = document.createElement("li");
  li.className = "todo-item";

  li.innerHTML = `
        <div class="todo-left">
          <input type="checkbox" />
          <span class="task-text">${value}</span>
        </div>
        <span class="delete-btn">&times;</span>
      `;

  list.appendChild(li);
  input.value = "";

  const deleteBtn = li.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  const checkbox = li.querySelector("input[type='checkbox']");
  const textSpan = li.querySelector(".task-text");
  checkbox.addEventListener("change", () => {
    textSpan.classList.toggle("completed");
  });
});
