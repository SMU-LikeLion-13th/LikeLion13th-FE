let btn1 = document.querySelector(".item1");

function colorFunc() {
  alert("green");
}

btn1.addEventListener("click", colorFunc);

let btn2 = document.querySelector(".item2");

function color2Func() {
  alert("orange");
}

btn2.addEventListener("click", color2Func);

const btn3 = document.querySelector(".item3");

btn3.onclick = function () {
  alert("purple");
};
