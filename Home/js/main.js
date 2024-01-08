 
 
 document.getElementById('userName').innerHTML = localStorage.getItem('userName');


 document.getElementById('logbtn').addEventListener('click' , function(){
    localStorage.removeItem('userName')
 }) 