let form = document.getElementById("my-form");
let number = document.getElementById("my-form").number;

let para = document.createElement("h2");
let node = document.createTextNode(`The result is:12`);

let answer = document.getElementById("answer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  para.appendChild(node);
  answer.appendChild(para);
  console.log(number.value);
});
