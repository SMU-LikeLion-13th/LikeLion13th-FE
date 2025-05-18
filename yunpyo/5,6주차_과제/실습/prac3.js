let item1 = document.querySelector(".item1");
let item2 = document.querySelector(".item2");
let item3 = document.querySelector(".item3");
let box = document.querySelector(".box");

function testcolor1() {
  box.style.background = "green";
}
function testcolor2() {
  box.style.background = "orange";
}
function testcolor3() {
  box.style.background = "purple";
}

item1.addEventListener("click", testcolor1);
item2.addEventListener("click", testcolor2);
item3.addEventListener("click", testcolor3);
