// // -----------------Login Module----------------
// let x = "Nauman"
// let y = "1960"
// function clickData() {
//     let ip1 = document.getElementById("email").value
//     let ip2 = document.getElementById("Password").value
//     if (ip1 === x && ip2 === y) {
//         window.location.href = "Home.html";
//     }
//     else {
//         let validate = document.getElementById("message1").innerHTML = "Invalid Login or Password"

//     }
// }
// ---------------Offline Status------------
function ThemeChange() {

        navbar.style.backgroundColor = "black";
        body.style.Color = "#6C757D";


}

// -----------------Contact Form--------------
function contact() {
    let name = document.getElementById("contactName").value
    let email = document.getElementById("contact_email").value
    let subject = document.getElementById("contact_subject").value
    let message = document.getElementById("contact_message").value
    
    let url="https://wa.me/923314911420?text="
    +"Client Name: "+ name +"%0a"
    +"Client Email: "+ email +"%0a"
    +"Client Subject: "+ subject +"%0a"
    +"Client Message: "+ message +"%0a"
    +"It's humble request to contact me as early as possible"

    window.open(url,'_blank').focus()

}
// For Hide the code
// document.addEventListener("contextmenu", function (e) {
//     e.preventDefault();
//   });
  
//   document.onkeydown = function (e) {
//     if (event.keyCode == 123) {
//       return false;
//     }
  
//     if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
//       return false;
//     }
  
//     if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
//       return false;
//     }
  
//     if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
//       return false;
//     }
//     if (e.ctrlKey && e.keyCode == "J".charCodeAt(0)) {
//         return false;
//       }
//   };


