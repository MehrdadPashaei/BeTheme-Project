
function validateForm() {
    let x = document.forms["contact_form"]["name"].value;
    let y = document.forms["contact_form"]["surname"].value;
    let z = document.forms["contact_form"]["email"].value;
    let name__error = document.querySelector(".name__error");
    let surname__error=document.querySelector(".surname__error");
    let email__error=document.querySelector(".email__error");
    let errorMessage=document.querySelector(".contact_errorMessage");
    if (x == "" || y=="" ||z=="") {
        if(x==""){
            name__error.style.display = "inline";
        }else{
            name__error.style.display="none";
        }
        if(y==""){
            surname__error.style.display = "inline";
        }else{
            surname__error.style.display="none";
        }
        if(z==""){
            email__error.style.display = "inline";
        }else{
            email__error.style.display="none";
        }
    //   alert("One or more fields have an error. Please check and try again.");
    errorMessage.innerHTML="One or more fields have an error. Please check and try again.";
      return false;
    }else{
        errorMessage.innerHTML="";
    }
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!(z.match(mailformat)))
    {
        email__error.style.display = "inline";
        // alert("Your email is not valid.Please check and try again.")
        errorMessage.innerHTML="Your email is not valid.Please check and try again.";
        return false;
        
    }else{
        email__error.style.display = "none";
        errorMessage.innerHTML="";
    }
  }

  