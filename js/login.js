$(document).ready(function(){            
    $("#login").click(function(){ 
        function directToMainPage(){
            window.location.href = "mainpage.html";
        }                 
        function authenticate(callback){
          var uname =$("#uname").val();
          var pwd = $("#pwd").val();
          if(uname == "" || pwd == ""){
              alert("Please enter both the username and password!");
              return false;
          }
          if((uname != "admin") || (pwd != "12345")){
              alert("Invalid username or password!");
               return false;
          }
          callback();
        }
        authenticate(directToMainPage);
    });
});