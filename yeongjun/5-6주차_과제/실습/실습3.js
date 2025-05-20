let item1 = document.querySelector(".item1");
let item2 = document.querySelector(".item2");
let item3 = document.querySelector(".item3");
let box = document.querySelector(".box");

item1.addEventListener("click", () => (box.style.backgroundColor = "green"));
item2.addEventListener("click", () => (box.style.backgroundColor = "orange"));
item3.addEventListener("click", () => (box.style.backgroundColor = "purple"));
