let greenBtn = document.querySelector(".item1");
let orangeBtn = document.querySelector(".item2");
let purpleBtn = document.querySelector(".item3");
let testBox = document.querySelector(".box");
greenBtn.onclick = function () {
  testBox.style.backgroundColor = "green";
};
orangeBtn.onclick = function () {
  testBox.style.backgroundColor = "orange";
};
purpleBtn.onclick = function () {
  testBox.style.backgroundColor = "purple";
};
