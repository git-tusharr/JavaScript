Submit=()=>{
    let Name=document.querySelector("#name").value.trim();
    let errname=document.querySelector("#errname");

    let Number =document.querySelector("#number").value.trim();
    let errnumber=document.querySelector("#errnumber");

    let Email=document.querySelector("#email").value.trim();
    let erremail=document.querySelector("#erremail");

    let Pass=document.querySelector("#pass").value.trim();
    let errpass=document.querySelector("#errpass");

    let Cpass=document.querySelector("#cpass").value.trim();
    let errcpass=document.querySelector("#errcpass");


    errname.innerHTML = "";
    errnumber.innerHTML = "";
    erremail.innerHTML = "";
    errpass.innerHTML = "";
    errcpass.innerHTML = "";




    // Errors of Name
    if (Name=="") {
        errname.innerHTML="*Please enter your name";
        return false;
    }

    // Errors of Number
    else if(Number==""){
        errnumber.innerHTML="*Please enter you number";
        return false;
    }

    else if(Number.length!=10){
        errnumber.innerHTML="*Please enter 10 digits"
        return false;
    }

    else if(isNaN(Number)){
        errnumber.innerHTML="*Please enter numbers only";
        return false;
    }


    // Errors of Email
    else if(Email==""){
        erremail.innerHTML="*please enter you email";
        return false;
    }

    else if(!(Email.includes('@') && Email.includes('.com'))){

        erremail.innerHTML="*please enter valid email";
        return false;

    }


    // Errors of Password

    else if(Pass==""){
        errpass.innerHTML="*please enter you password";
        return false;
    }


    else if(!( Pass.match(/[0-9]/) && Pass.match(/[!@#$%^&*]/) && Pass.match(/[a-z]/) && Pass.match(/[A-Z]/))){
         errpass.innerHTML="*Create a strong password";
        return false;

    }

    else if(Pass.length<8){
        errpass.innerHTML="*Your password must contain 8 character";
        return false;
    }

    // Errors of Confirm password
    else if(Cpass==""){
        errcpass.innerHTML="*please confirm your password";
        return false;
    }

    else if(Pass!=Cpass){
        errcpass.innerHTML="*Password did not matched";
        document.querySelector("#cpass").value="";
        document.querySelector("#cpass").focus();
        return false;
    }




}