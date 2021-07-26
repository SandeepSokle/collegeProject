

let stopBtn = document.querySelector(".stop");
// let body = document.querySelector("body");
let permissionBtn = document.querySelector(".permission");
let takePermission = document.querySelector(".takepermission");

takePermission.addEventListener("click",function(){
  if(confirm("Send request to annotation")==true){
    socket.emit("createReq");
  }
})

permissionBtn.addEventListener("click", function (e) {
    let permissionBtn = document.querySelector(".permission");
  let grantPermission = document.querySelector(".takepermission img");
  
  if (grantPermission.classList.contains("selectPermissionBtn")) {
    grantPermission.classList.remove("selectPermissionBtn");
    permissionBtn.classList.remove("selectPermissionBtn");
//     alert("Now you can not Use Annotation:")
  } else {
    grantPermission.classList.add("selectPermissionBtn");
    permissionBtn.classList.add("selectPermissionBtn");
//     alert("Now you can Use Annotation:")
  }
  socket.emit("myclick");
  
});

// function grantPermission() {
//   let permissionBtn = document.querySelector(".permission");
//   if (permissionBtn.classList.contains("selectPermissionBtn")) {
//     permissionBtn.classList.remove("selectPermissionBtn");
//   } else {
//     permissionBtn.classList.add("selectPermissionBtn");
//   }
// }

stopBtn.addEventListener("click", function () {
  // body.innerHTML = "";
  console.log("stop event");
  window.location.assign("endingmeeting.html");
socket.emit("stopboard");
  // body.innerHTML=`<div class="meetingEndContainer">
  // <div class="meetingEndPopup">
  //     <span class="endmeetingspan">Meeting Closed</span>
  // </div>
  // </div>`;
});
;
