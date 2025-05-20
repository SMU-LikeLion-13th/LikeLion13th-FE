let input = document.querySelector(".liInput");
let Btn = document.querySelector(".btn");
let list = document.querySelector(".todoList");

function addList() {
  if (input.value === "") {
    alert("할 일일을 입력해주세요!");
  } else {
    const newList = document.createElement("li");

    // 라디오 버튼 생성
    const radio = document.createElement("input");
    radio.type = "radio";

    // 텍스트 노드 생성
    const textSpan = document.createElement("span");
    textSpan.textContent = input.value;

    //삭제 버튼 생성
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";

    // 이벤트: 라디오 버튼 클릭 시 취소선
    radio.addEventListener("click", function () {
      //newList.style.textDecoration =
      textSpan.style.textDecoration = "line-through";
    });

    //이번트: x버튼 클릭시 삭제
    delBtn.addEventListener("click", function () {
      list.removeChild(newList);
    });

    //세가지 요소 ->newList로
    newList.appendChild(radio);
    newList.appendChild(textSpan);
    newList.appendChild(delBtn);

    //newList-> list에 추가
    list.appendChild(newList);
    input.value = "";
  }
}

Btn.addEventListener("click", addList);
