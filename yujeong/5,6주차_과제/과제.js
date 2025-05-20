var text = document.querySelector("#text");
var submit = document.querySelector("#submit");
var todoList = document.querySelector("#todo-list");

submit.onclick = function (e) {
  e.preventDefault();

  var inputValue = text.value.trim();
  if (inputValue.length < 1) {
    alert("할 일을 입력해주세요!");
    text.select();
    return;
  }

  var newItem = document.createElement("li");
  newItem.className = "todo-item";

  var checkBtn = document.createElement("span");
  checkBtn.className = "check-btn";

  var todoText = document.createElement("span");
  todoText.className = "todo-text";
  todoText.textContent = inputValue;

  checkBtn.onclick = function () {
    checkBtn.classList.toggle("checked");
    todoText.classList.toggle("done");
  };

  var deleteBtn = document.createElement("span");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "×";
  deleteBtn.onclick = function (event) {
    event.stopPropagation();
    todoList.removeChild(newItem);
  };

  var contentWrapper = document.createElement("div");
  contentWrapper.className = "todo-content";
  contentWrapper.appendChild(checkBtn);
  contentWrapper.appendChild(todoText);

  newItem.appendChild(contentWrapper);
  newItem.appendChild(deleteBtn);

  todoList.appendChild(newItem);

  text.value = "";
};
