let stopBtn = document.querySelector(".stop");
let permissionBtn = document.querySelector(".permission");
let className = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eight",
  "ninth",
  "tenth",
  "eleventh",
];
let color = [
  "#fdcb6e",
  "#fdcb6e85",
  "#fd79a785",
  "#fd79a750",
  "#636e72",
  "#636e72",
  "#636e7257",
  "#42795b88",
  "#f4ebc3",
  "#fffedf",
  "#2a2c31",
  "#d3643b",
];

let clrBoard = document.querySelector(".board");

///////color btn working

let colorBtn = document.querySelector(".gridColor");

colorBtn.addEventListener("click", function (e) {
  let idx = 0;
  for (let i = 0; i < color.length; i++) {
    if (e.currentTarget.classList.contains(`${className[i]}`) == true) {
      idx = i;
      clrBoard.classList.remove(`${className[i]}`);
      colorBtn.classList.remove(`${className[i]}`);
      break;
    }
  }

  idx += 1;
  idx = idx % 11;

  clrBoard.classList.add(`${className[idx]}`);
  colorBtn.classList.add(`${className[idx]}`);
});

//////permission btn working
permissionBtn.addEventListener("click", function (e) {
  grantPermission();
//   console.log("ok:");
  socket.emit("myclick");
  
});

function grantPermission() {
  let permissionBtn = document.querySelector(".permission");
  if (permissionBtn.classList.contains("selectPermissionBtn")) {
    permissionBtn.classList.remove("selectPermissionBtn");
    
  } else {
    permissionBtn.classList.add("selectPermissionBtn");
    
  }
}

////////stop btn working
stopBtn.addEventListener("click", function () {
  console.log("stop event");
  window.location.assign("endingmeeting.html");
  socket.emit("stopboard");
});
