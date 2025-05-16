const input = document.getElementById("user-name");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

addBtn.addEventListener("click", addTodo);
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTodo();
});

function addTodo() {
  const value = input.value.trim();
  if (!value) {
    alert("할 일을 입력해주세요!");
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = `
        <button class="end-btn">완료</button>
        <span class="todo-text">${value}</span>
        <button class="delete-btn">삭제</button>
    `;

  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  // li.querySelector(".end-btn").addEventListener("click", () => {
  //   li.style.textDecoration = "line-through";
  // });
  //첨에 이렇게 했더니 버튼도 효과가 적용 되더라..

  li.querySelector(".end-btn").addEventListener("click", () => {
    const text = li.querySelector(".todo-text");
    text.style.textDecoration = "line-through";
  });

  list.appendChild(li);
  input.value = "";
}
