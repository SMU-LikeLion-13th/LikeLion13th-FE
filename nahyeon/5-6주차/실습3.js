const green = document.querySelector(".item1");
const orange = document.querySelector(".item2");
const purple = document.querySelector(".item3");
const box = document.querySelector(".box");

green.addEventListener("click", function () {
  box.style.background = "green";
});

orange.addEventListener("click", function () {
  box.style.background = "orange";
});

purple.addEventListener("click", function () {
  box.style.background = "purple";
});
