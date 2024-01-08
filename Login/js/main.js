
var emaillogInput =document.getElementById("emaillogInput"); 
var passwordlogInput =document.getElementById("passwordlogInput");
var alertMassege = document.getElementById("alertMassege");
var userlist = [];

if (localStorage.getItem("Users") != null) {
  userlist = JSON.parse(localStorage.getItem("Users"));
} else {
  userlist = [];
}

function login(){
  if (
 
    emaillogInput.value == "" ||
    passwordlogInput.value == ""
  ) {
    message('All inputs Required', 'red')
  } else {
    if(checkUser() == true){
      window.location.href="../Home/index.html"
     }else{
       message('Email or Password not found' , 'red')
     }
  }
 
}


function checkUser(){
    for( var i=0 ; i<userlist.length ; i++){
     if( emaillogInput.value ==  userlist[i].email && passwordlogInput.value == userlist[i].password){
      localStorage.setItem('userName',userlist[i].name )  
      return true ;
        
     }
    }
}

function message(text , color) {
  alertMassege.classList.remove("d-none");
  alertMassege.classList.add("d-block");
  alertMassege.innerHTML = text;
  alertMassege.style.color = color;
}
 