let email=document.getElementById("validationDefaultEmail");
let error=document.getElementById("error");
let phone=document.getElementById("validationphone");
let error1=document.getElementById("error1");
let password=document.getElementById("validationDefault05");
let strength=document.getElementById("strength");
let strongpass = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
let mediumpass = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');


function validate()
{
    let regexp=/^([A-Za-z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value))
    {
        error.innerHTML="Valid format";
        error.style.color="green";

    }
    else
    {
        error.innerHTML="Invalid format";
        error.style.color="red";
        return false;
    }
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phone.value.match(phoneno))
    {
      return true;
     }
    else
    {
        alert("Invalid phone number");
        return false;
    }

     if(strongpass.test(password.value))
        {
            strength.style.color= "green";
            strength.textContent= "strong";
    
        }
        else if(mediumpass.test(password.value))
        {
            strength.style.color= "blue";
            strength.textContent= "medium";
    
        }
        else{
            strength.style.color= "red";
            strength.textContent= "weak";
    
        }
    
}