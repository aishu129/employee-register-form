function validatePhoneNumber(input_str: string): boolean {
    const expression: RegExp = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return expression.test(input_str);
}

const validateEmail = (email: string) => {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const result: boolean = expression.test(email);
    return result
}

function verifyPassword(password1: string, password2: string) {
    if (password1 == "") {
        return false
    }
    if (password2 == "") {
        return false
    }
    if (password1 === password2)
        return true
    else
        return false
}

function validateAge(userinput: string): boolean {
    var dob = new Date(userinput);
    if (userinput == null || userinput == '') {
        return false;
    }
    else {
        var month_diff = Date.now() - dob.getTime();
        var age_dt = new Date(month_diff);
        var year = age_dt.getUTCFullYear();
        var age = Math.abs(year - 1970);
        if (age < 18) return false
    }

    return true;
}


function validatePassword(pw: string) {

    if (pw == "") {
        return false
    }
    if (pw.length < 8) {
        return false
    }
    if (pw.length > 15) {
        return false
    }

    return true
}

function validateName(name: string): boolean {

    if (name == "") {
        return false
    }
    return true
}

function validateCheckBox(checkbox: any): boolean {
    if (checkbox?.checked) {
        return true
      } else {
        return false
      }
}


const setError = (element: any, message: string) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    errorDisplay.style.display="block"
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = (element: any) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.style.display="none"
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


var submitForm = (e: any) => {
    e.preventDefault();
    var firstName = (document.getElementById("first-name") as HTMLInputElement)
    var lastName = (document.getElementById("last-name") as HTMLInputElement)
    var password = (document.getElementById("password") as HTMLInputElement)
    var confirm_password = (document.getElementById("confirm-password") as HTMLInputElement)
    var email = (document.getElementById("email") as HTMLInputElement);
    var phone = (document.getElementById("phone") as HTMLInputElement)
    var gender = (document.getElementById("gender") as HTMLInputElement)
    var dob = (document.getElementById("birthday") as HTMLInputElement)
    const checkbox = document.getElementById('terms') as HTMLInputElement | null;

    
    
    if (validateName(firstName.value)) {
        setSuccess(firstName)
    }
    else {
        setError(firstName, "Invalid First Name")
    }

    if (validateName(lastName.value)) {
        setSuccess(lastName)
    }
    else {
        setError(lastName, "Invalid Last Name")
    }

    if (validatePassword(password.value)) {
        setSuccess(password)
        if (verifyPassword(password.value,confirm_password.value)) {
            setSuccess(password)
            setSuccess(confirm_password)
        }
        else {
            setError(password, "Mismatch Password")
            setError(confirm_password, "Mismatch Password")
        }

    }
    else {
        setError(password, "Invalid Password")
    }

    

    if (validateEmail(email.value)) {
        setSuccess(email)
    }
    else {
        setError(email, "Invalid email")
    }

    if (validatePhoneNumber(phone.value)) {
        setSuccess(phone)
    }
    else {
        setError(phone, "Invalid Phone Number")
    }

    if (validateAge(dob.value)) {
        setSuccess(dob)
    } else {
        setError(dob, "Invalid Age")
    }

    if(validateCheckBox(checkbox)) {
        setSuccess(checkbox)
    } else {
        setError(checkbox,"Please Accept Terms and Conditions")
    }

};

var submitButton = document.getElementById("submit") as HTMLButtonElement;
submitButton.addEventListener("click", submitForm);




    // if(isValid){
    //     console.log({
    //         FirstName:firstName,
    //         LastName:lastName,
    //         MailID: email,
    //         Contact: phone,
    //         Gender:gender,
    //         DateOfBirth:dob
    //     });
    // }

    // if(verifyPassword(password,reason)) {
    //     console.log("Correct Password Length"); 
    // }
    // else {
    //     console.log("Too short or too long - needs 8 to 15 characters");
    // }

    // if(validatePassword(password,confirm_password)) {
    //     console.log("Matches with Password"); 
    // }
    // else {
    //     console.log("Does not match Password");
    // }

    // if(validateEmail(email)) {
    //     console.log("Valid Email"); 
    // }
    // else {
    //     console.log("Invalid Email");
    // }

    // if(validatePhoneNumber(phone)) {
    //     console.log("Valid Phone"); 
    // }
    // else {
    //     console.log("Invalid Phone");
    // }

    // if(validateAge(dob)) {
    //     console.log("Valid Age"); 
    // }
    // else {
    //     console.log("Too young");
    // }
    // if(validateName(firstName)) {
    //     console.log("Valid First Name"); 
    // }
    // else {
    //     console.log("Invalid First Name");
    // }

    // if(validateName(lastName)) {
    //     console.log("Valid Last Name"); 
    // }
    // else {
    //     console.log("Invalid Last Name");
    // }