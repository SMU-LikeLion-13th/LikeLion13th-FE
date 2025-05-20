const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

function addTodo() {
  const text = input.value.trim();

  // 입력 값 비어있으면 경고
  if (text === "") {
    alert("할 일을 입력해주세요!");
    return;
  }

  // todo item
  const li = document.createElement("li");

  // check box + text container
  const left = document.createElement("div");
  left.className = "left";

  // check box
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  //todo text
  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = text;

  checkbox.addEventListener("change", () => {
    span.classList.toggle("completed", checkbox.checked);
  });

  // delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "x";
  delBtn.className = "delete-btn";

  delBtn.addEventListener("click", () => li.remove());

  // div = checkbox + span
  left.appendChild(checkbox);
  left.appendChild(span);

  // list = left + delBtn
  li.appendChild(left);
  li.appendChild(delBtn);

  // item insert
  list.appendChild(li);

  input.value = "";
}

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTodo();
});
