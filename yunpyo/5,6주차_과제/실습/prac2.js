let item1 = document.querySelector(".item1");
let item2 = document.querySelector(".item2");
let item3 = document.querySelector(".item3");

function testcolor1() {
  alert("Green!!");
}
function testcolor2() {
  alert("Orange!!");
}
function testcolor3() {
  alert("Purple!!");
}

item1.addEventListener("click", testcolor1);
item2.addEventListener("click", testcolor2);
item3.addEventListener("click", testcolor3);
