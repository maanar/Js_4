var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var alertMassege = document.getElementById("alertMassege");
userlist = [];

if (localStorage.getItem("Users") != null) {
  userlist = JSON.parse(localStorage.getItem("Users"));
} else {
  userlist = [];
}

function signUp() {
  if (
    nameInput.value == "" ||
    emailInput.value == "" ||
    passwordInput.value == ""
  ) {
    message('All inputs Required', 'red')
  } else {
    var data = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
    if(checkEmail()== true){
        message('Email already Exist', 'white')
    }else{
        userlist.push(data);
        localStorage.setItem("Users", JSON.stringify(userlist));
        clrdata();
        message('Sucess', 'green')
    }
   
  }
}

function message(text , color) {
  alertMassege.classList.remove("d-none");
  alertMassege.classList.add("d-block");
  alertMassege.innerHTML = text;
  alertMassege.style.color = color;
}

function clrdata() {
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}

function checkEmail(){
    for(var i=0 ; i <userlist.length ; i++){
       if(userlist[i].email == emailInput.value){
        return true ;
       }
    }
}
