function validation() {
    let username = document.contact.username.value;
    let userstatus = false;
    const alphaExp = /^[a-z]+$/;

    let mobile = document.contact.mobile.value;
    let mobilestatus = false;
    const numExp = /^[0-9]+$/;

    let email = document.contact.email.value;
    let emailstatus = false;
    const emailExp = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    
    // user validation
    if (username === "") {
        document.getElementById("userNote").innerHTML = "Name is mandaotary";
    }
    else{
       if (username.match(alphaExp)) {
        document.getElementById("userNote").innerHTML = "";
        userstatus = true;
       }
       else{
        document.getElementById("userNote").innerHTML = "Only charcters";
       }
        
    }

    // mobile validation
    if (mobile === "") {
        document.getElementById("mobileNote").innerHTML = "Number is mandaotary";
    }
    else{
       if (mobile.match(numExp)) {
        if (mobile.length === 10) {
            document.getElementById("mobileNote").innerHTML = "";
            mobilestatus = true;
        }
        else{
            document.getElementById("mobileNote").innerHTML = "10 digits mobile number";
           }
       }
       else{
        document.getElementById("mobileNote").innerHTML = "Only digits";
       }
        
    }
    
    // email validation
    if (email === "") {
        document.getElementById("emailNote").innerHTML = "Email is mandaotary";
    }
    else{
       if (email.match(emailExp)) {
        document.getElementById("emailNote").innerHTML = "";
        emailstatus = true;
       }
       else{
        document.getElementById("emailNote").innerHTML = "invalid format ex: jitendrababi6@gamil.com";
       }
        
    }

    if (userstatus === true && mobilestatus === true && emailstatus === true) {
        return true; 
    } 
    else {
        return false;
    }
} 

function contact() {
    let username = document.contact.username.value;
    let userstatus = false;
    const alphaExp = /^[a-z]+$/;

    let mobile = document.contact.mobile.value;
    let mobilestatus = false;
    const numExp = /^[0-9]+$/;

    let email = document.contact.email.value;
    let emailstatus = false;
    const emailExp = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    
    // user validation
    if (username === "") {
        document.getElementById("userNote").innerHTML = "Name is mandaotary";
    }
    else{
       if (username.match(alphaExp)) {
        document.getElementById("userNote").innerHTML = "";
        userstatus = true;
       }
       else{
        document.getElementById("userNote").innerHTML = "Only charcters";
       }
        
    }

    // mobile validation
    if (mobile === "") {
        document.getElementById("mobileNote").innerHTML = "Number is mandaotary";
    }
    else{
       if (mobile.match(numExp)) {
        if (mobile.length === 10) {
            document.getElementById("mobileNote").innerHTML = "";
            mobilestatus = true;
        }
        else{
            document.getElementById("mobileNote").innerHTML = "10 digits mobile number";
           }
       }
       else{
        document.getElementById("mobileNote").innerHTML = "Only digits";
       }
        
    }
    
    // email validation
    if (email === "") {
        document.getElementById("emailNote").innerHTML = "Email is mandaotary";
    }
    else{
       if (email.match(emailExp)) {
        document.getElementById("emailNote").innerHTML = "";
        emailstatus = true;
       }
       else{
        document.getElementById("emailNote").innerHTML = "invalid format ex: jitendrababi6@gamil.com";
       }
        
    }

    if (userstatus === true && mobilestatus === true && emailstatus === true) {
        return true; 
    } 
    else {
        return false;
    }
} 
