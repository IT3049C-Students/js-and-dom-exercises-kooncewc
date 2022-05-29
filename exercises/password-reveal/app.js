// 🤖: create 2 constants with references to the password input and the reveal button from the DOM
var content = document.getElementById("password");
var button = document.getElementById("togglePassword");

// 🤖: Create an Event Listener on the password reveal button

button.onclick=function(){
if(password.className == 'password' ){
password.className == "text"

} else {

	password.className == 'password';
}


};
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.


// Provided for you - prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit',function(e){
	e.preventDefault();
});
