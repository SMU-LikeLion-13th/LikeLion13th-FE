var userId = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");

userId.onchange = checkId;
pw1.onchange = checkPw;
pw2.onchange = comparePw;

function checkId() {
  if (userId.value.length < 4 || userIdId.value.length > 15) {
    alert("4~15자리의 영문과 숫자로 입력하세요");
    userId.select(); //입력 필드의 텍스트를 자동으로 선택해서 수정하기 쉽게 함
  }
}
function checkPw() {
  if (pw1.value.length < 8) {
    alert("비밀번호를 8자리 이상 입력하세요");
    pw1.value = ""; //  잘못입력했을 때 비밀번호 창 바로 비워주는 코드
    pw1.focus(); // 커서가 비밀번호 입력창에 가도록 함
  }
}
function comparePw() {
  if (pw1.value != pw2.value) {
    alert("입력하신 비밀번호가 일치하지 않습니다");
    pw2.value = "";
    pw2.focus();
  }
}
