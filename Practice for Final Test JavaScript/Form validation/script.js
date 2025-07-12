Submit=()=>{

    //Getting value entered in inputs

    let Name=document.querySelector("#name").value.trim()
    let Email=document.querySelector("#email").value.trim()
    let Age=document.querySelector("#age").value.trim()
    let Number=document.querySelector("#number").value.trim()
    let Pass=document.querySelector("#pass").value.trim()
    let Cpass=document.querySelector("#cpass").value.trim()

    //Selecting the p thags for error showcase

    let Errname=document.querySelector("#errname")
    let Erremail=document.querySelector("#erremail")
    let Errage=document.querySelector("#errage")
    let Errnum=document.querySelector("#errnum")
    let Errpass=document.querySelector("#errpass")
    let Errcpass=document.querySelector("#errcpass")




    //Error of name

    if(Name==""){
        Errname.innerHTML="please enter your name"
        return false;
        
    }


    //Error of email

    if (Email == "") {
        Erremail.innerHTML="Please enter your email"
        return false;
        
        
    }

    if (!(Email.includes('@') && Email.includes('.com'))) {
        Erremail.innerHTML="Email shoud contain @ and .com"
        return false;
        
    }

    //Error of age

    if (Age=="") {
        Errage.innerHTML="Please enter your age"
        return false;
    }

    if (Age<18) {
        Errage.innerHTML="Age should be greter than 18"
        return false;
        
    }

    // Error of Number


      if (Number=="") {
        Errnum.innerHTML="Please enter your number"
        return false;
        
    }

    if (Number.length!=10) {
        Errnum.innerHTML="number should be of 10 digits"
        return false;
        
    }

  

    if (isNaN(Number)) {
        Errnum.innerHTML="Please enter your number correctly"
        return false;
        
    }

        // Error of Password

        if (Pass=="") {
            Errpass.innerHTML="Please enter your password"
            return false;
        }


        if (!(Pass.match(/[0-9]/)
        && Pass.match(/[a-z]/) 
        && Pass.match(/[A-Z]/)
        && Pass.match(/[!@#$%^&*()_+]/))) {
            Errpass.innerHTML="Please enter Strong password"
            return false;
        }


        // Error of Password

        if (Cpass!=Pass) {
            Errcpass.innerHTML="Please match password"
            return false;
        }

        
    alert("Form submitted successfully!");
    return true;


}