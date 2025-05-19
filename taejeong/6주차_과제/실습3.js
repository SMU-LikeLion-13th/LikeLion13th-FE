var box = document.querySelector(".box");

// btn1.onclick() = function(){
//     alert("zf")
//     // box.style.bacgroundcolor = "green";
// }

// const btn3 = document.querySelector(".item3");

// btn3.onclick = function () {
//   alert("purple");
// };
let btn1 = document.querySelector(".item1");

function colorFunc() {
  alert = "asd";
  box.style.background = "green";
}

btn1.addEventListener("click", colorFunc);

let btn2 = document.querySelector(".item2");

btn2.addEventListener("click", color2Func);

function color2Func() {
  box.style.background = "orange";
}

let btn3 = document.querySelector(".item3");

btn3.addEventListener("click", color3Func);

function color3Func() {
  box.style.background = "purple";
}
