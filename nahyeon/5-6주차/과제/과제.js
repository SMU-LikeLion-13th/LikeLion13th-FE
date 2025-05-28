//js 작동 안돼서 넣어놓음
document.addEventListener("DOMContentLoaded", function () {
  const add = document.getElementById("add");
  const inputBox = document.querySelector(".box");
  const list = document.getElementById("list");
  //var는 잘 안 씀 -> const or list: const 한번 저장되면 바뀌지 않음

  add.addEventListener("click", function () {
    const text = inputBox.value; //box 안에 있는 text 선언

    if (text.trim() === "") {
      //==보단 === 많이 씀(더 엄격)
      alert("할 일을 입력해주세요!");
      return;
    }

    //텍스트 써놓고 클릭 -> 리스트에 add
    const li = document.createElement("li"); //li 태그를 새로 만들어서 ul 목록으로 집어넣음
    li.className = "todo"; //<li></li> <- 요기에 todo라는 클래스 이름을 붙여줌
    //html에 <li></li> 하나 생겼다고 생각하면 됨

    //li 안에 들어갈 내용은 HTML로 만듦
    li.innerHTML = `
        <span class="check"></span>
        <span class="todo-text">${text}</span>
        <span class="remove">×</span>
        `; //&{text} <-Add 누르기 직전 입력한 글자
    //동그란 체크버튼+text+삭제(x) 버튼
    //`` 얜 줄바꿔도 용이하게 작성하기 위해 쓰임

    list.appendChild(li); //지금까지 만든 li를 화면에 실제로 추가하는 순간
    //appendChild: HTML 요소를 다른 요소 안에 넣는 함수 eX) ul리스트에 li를 넣기
    inputBox.value = ""; //Add 누르고 나면 input 안의 글자를 자동으로 지워주는 역할
  });

  //리스트 중 어느 부분을 클릭했을 때
  list.addEventListener("click", function (e) {
    //if (e.target.classList.contains("todo-text")) {
    //  e.target.classList.toggle("done");
    //}

    //삭제(x) 버튼을 클릭했을 때
    //e.target: 지금 클릭한 정확한 요소
    //.classList.contains("~~"): 클릭한 게 class="~~" 버튼인지 확인
    if (e.target.classList.contains("remove")) {
      const li = e.target.parentElement;
      list.removeChild(li); //그 li를 ul에서 삭제
    }

    //check 버튼을 클릭했을 때
    if (e.target.classList.contains("check")) {
      e.target.classList.toggle("checked"); //체크가 되거나 없어짐

      const todoText = e.target.nextElementSibling;
      //nextElementSibling: 체크박스 오른쪽에 있는 글자(span.todo-text)를 찾는 방법
      todoText.classList.toggle("done"); //줄긋기(line-through) 추가 || 제거
    }
  });
});
