
//CREATE NEW USER
var signupName = $("#signupName");
var signupPassword = $("#signupPassword");
var signupEmail = $("#signupEmail");
var signupButton = document.getElementById("signupButton");
signupButton.addEventListener("click",function(e){
  e.preventDefault()
  

var uName = signupName.val().trim()
var eName = signupEmail.val().trim()
var pName = signupPassword.val().trim()
alert("Info: " + uName + " " + eName + " has been submitted")

var settings = {
  
  "async": true,
  "crossDomain": true,
  "url": "/api/users",
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "processData": false,
  "data":JSON.stringify({name: uName, email: eName, password: pName}) 
}
console.log(settings);
$.ajax(settings).done(function (response) {
  console.log(response);

}).fail(function(xhr, status, error) {
  //Ajax request failed.
  var errorMessage = xhr.status + ': ' + xhr.statusText
  alert('Error - ' + errorMessage);
});

});
//LOG USER IN
var loginName = $("#loginName");
var loginPassword = $("#loginPassword");
var loginEmail = $("#loginEmail");
var loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click",function(e){
  e.preventDefault()
 
var eName = loginEmail.val().trim()
var pName = loginPassword.val().trim()
alert("Info: " +  " " + eName + " has been submitted")

  
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "/api/auth",
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "processData": false,
  "data": JSON.stringify({email: eName, password: pName})
}
$.ajax(settings).done(function (response) {
  console.log(response);
  window.localStorage.setItem("jwt",response)
  location.replace("")
});
});