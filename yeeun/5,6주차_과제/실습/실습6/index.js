var idInput = document.querySelector("#user-id");
var pw1Input = document.querySelector("#user-pw1");
var pw2Input = document.querySelector("#user-pw2");

idInput.onchange = checkId;
pw1Input.onchange = checkpw1;
pw2Input.onchange = checkpw2;

function checkId() {
  if (idInput.value.length < 4 || idInput.value.length > 15) {
    alert("4~15자리의 영문과 숫자를 사용하세요!");
    idInput.select(); //입력 택스트를 자동으로 선택해서 수정하기 쉽도록-->이상한 부분이 자동으로 선택됨
  }
}
function checkpw1() {
  if (pw1Input.value.length < 8) {
    alert("8자리 이상의 비밀번호를 사용하세요!");
    pw1Input.value = ""; // 초기화
    pw1Input.focus(); //커서가 비밀번호 입력창에 가도록
  }
}
function checkpw2() {
  if (pw2Input !== pw1Input) {
    alert("비밀번호가 일치 하지 않습니다 다시입력하세요!");
    pw2Input.value = "";
    pw2Input.focus();
  }
}
