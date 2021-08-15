var plusbtn = document.querySelector(".plus");
var todoUls = document.querySelector(".uls");
var textbox = document.querySelector("input");
var trash = document.querySelector(".trash");
var tic = document.querySelector(".tic");
plusbtn.addEventListener("click", adder);

function adder() {
  var todos = document.createElement("div");
  todos.classList.add("todos");

  var list = document.createElement("li");
  list.classList.add("li");

  todos.appendChild(list);

  var ticbutton = document.createElement("button");
  ticbutton.innerHTML = '<i class="tic fas fa-check"></i>';
  todos.appendChild(ticbutton);

  var trashbutton = document.createElement("button");

  var ticbutton = document.createElement("button");
  trashbutton.innerHTML = ' <i class="trash fas fa-trash"></i>';
  todos.appendChild(trashbutton);

  if (textbox.value != "") {
    todoUls.appendChild(todos);
  }

  list.innerHTML = textbox.value;
  textbox.value = "";
}

//  trash and tic
todoUls.addEventListener("click", clickchecker);
function clickchecker(e) {
  if (e.target.classList[0] === "trash") {
    e.target.parentElement.parentElement.remove();
  }
  if (e.target.classList[0] === "tic") {
    e.target.parentElement.parentElement.classList.toggle("ticstrike");
  }
}

window.onload = putter;
function putter(){
    console.log("r")
}
