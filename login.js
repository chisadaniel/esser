
var testRegister=0;

function myHideLogin(){
	testSignUpPressed=1;
	testRegister=1;
var x=document.getElementsByClassName("log");

var i;
for (i = 0; i < x.length; i++) {
x[i].style.display= "none";
}

var x=document.getElementById("loginDiv");
x.style.paddingTop="7.5%";

var x=document.getElementById("loginButton");
x.innerHTML="Back to login";

var x=document.getElementById("signupButton");
x.style.display="none";

var x=document.getElementById("idforgotButton");
x.style.display="none";

var x=document.getElementsByClassName("register");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.display= "block";
}

var x=document.getElementById("registerButton");
x.style.display="block";

}


var testSignUpPressed=0;

function redirectPage(){
  location.replace("Home.html")

}


function checkData(){


	var user=document.getElementById("user").value;
	var pass=document.getElementById("password").value;
  if(user=="dan" && pass=="123"){ 
  	location.replace("Home.html");
   
  }
  else if(user!="dan" || pass!="123") alert("Incorrect username or password! Try again!");
 	
 	else if(testSignUpPressed==1)myHideSignUp();
}





function myHideSignUp(){
 
 if(testSignUpPressed==1){
var x=document.getElementsByClassName("log");
var i;
for (i = 0; i < x.length; i++) {
x[i].style.display= "block";
}

var y=document.getElementById("signupButton");
y.style.display="block";

var x=document.getElementsByClassName("register");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.display= "none";
}

var x=document.getElementById("loginDiv");
x.style.paddingTop="17%";

var x=document.getElementById("loginButton");
x.innerHTML="Login";

var x=document.getElementById("registerButton");
x.style.display="none";

var x=document.getElementById("idforgotButton");
x.style.display="block";
}
}

function myForgotPassword(){

var x=document.getElementsByClassName("log");

var i;
for (i = 0; i < x.length; i++) {
x[i].style.display= "none";
}
	var x=document.getElementById("loginButton");
x.style.display="none";

	var x=document.getElementsByClassName("forgotPassword");
var i;
for (i = 0; i < x.length; i++) {
x[i].style.display= "block";
}
var y=document.getElementById("signupButton");
y.style.display="none";
var x=document.getElementById("registerButton");
x.style.display="none";

var x=document.getElementById("hideForgotButton");
x.style.display="block";

var q=document.getElementById("idforgotButton");
q.innerHTML="Send";


 }


function myHideForgot(){

	var x=document.getElementsByClassName("log");

var i;
for (i = 0; i < x.length; i++) {
x[i].style.display= "block";
x[i].style.marginLeft="15%";
}
/*
var x=document.getElementById("loginDiv");
x.style.paddingTop="7.5%";
*/

	var x=document.getElementsByClassName("forgotPassword");
var i;
for (i = 0; i < x.length; i++) {
x[i].style.display= "none";
}

var x=document.getElementById("loginButton");
x.style.display="block";

var x=document.getElementById("signupButton");
x.style.display="block";

var x=document.getElementById("idforgotButton");
x.style.display="block";

var x=document.getElementsByClassName("register");
 

var x=document.getElementById("hideForgotButton");
x.style.display="none";

var q=document.getElementById("idforgotButton");
q.innerHTML="Forgot password?";





}