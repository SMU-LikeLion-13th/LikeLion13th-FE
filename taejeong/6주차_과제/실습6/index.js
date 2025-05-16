const myid = document.querySelector("#user-id");
const mypw = document.querySelector("#user-pw1");
const mypw1 = document.querySelector("#user-pw2");

myid.addEventListener("change", idfunc);

function idfunc() {
  if (myid.value.length < 4 || myid.value.length > 15) {
    alert("4이상 15이하로");
  }
}

mypw.addEventListener("change", pwLimitfunc);

function pwLimitfunc() {
  if (mypw.value.length < 8) {
    alert("8자 이상으로");
    mypw.value = "";
    mypw.focus();
  }
}

mypw1.onchange = checkPwfunc;

function checkPwfunc() {
  if (mypw.value != mypw1.value) {
    alert("똑같이 하세요");
  }
}
