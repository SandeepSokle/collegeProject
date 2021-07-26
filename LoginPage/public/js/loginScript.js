let hostVarificationBtn = document.querySelector(".varify");
let keyAddIn = document.querySelector(".inputPass");
let inputContainer = document.querySelector(".inputContainer");

let body = document.querySelector("body");

hostVarificationBtn.addEventListener("click", function (e) {
  if (e.currentTarget.classList.contains("select")) {
    e.currentTarget.classList.remove("select");
    inputContainer.removeChild(document.querySelector(".hostKeys"));
  } else {
    e.currentTarget.classList.add("select");
    keyAddIn.classList.add("isActive");
    let div = document.createElement("input");
    div.type = "text";
    div.name = "passKeys";
    div.classList.add("hostKeys");
    div.placeholder = "Enter your Keys";
    keyAddIn.after(div);
  }
});


