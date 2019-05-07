$("#submitButton").click(function() {
  if (!emailValid(emailAddress)) {
    showError();
   } 
  
    else { 
      setCookie();
      $("#banner").click(function(){
        $("#banner" ).fadeOut()
      });
      showAlert();
     };
     
  })
  


  
  function emailValid(emailAddress) {
  var mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailAddress.value.match(mailformat)){
      return true;
    } else{
     return false;
    }
  }


  function showError() {
    document.getElementById("emailAddress").style.borderColor = "red";
}

function setCookie() {
  if( document.myform.email.value == "" ) {
     alert("Enter some value!");
     return;
  }
  cookievalue = escape(document.myform.email.value) + ";";
  document.cookie = "sm_email=" + cookievalue;
  return;
}

  function showAlert(){
 var emailInput = document.getElementById("emailAddress").value;
   alert("Bendankt voor je inschrijving! Er is een bevestigingsmail gestuurd naar"   + emailInput);
  }