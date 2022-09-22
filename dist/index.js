"use strict";
function validatePhoneNumber(input_str) {
    const expression = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return expression.test(input_str);
}
const validateEmail = (email) => {
    const expression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const result = expression.test(email);
    return result;
};
function verifyPassword(password1, password2) {
    if (password1 == "") {
        return false;
    }
    if (password2 == "") {
        return false;
    }
    if (password1 === password2)
        return true;
    else
        return false;
}
function validateAge(userinput) {
    var dob = new Date(userinput);
    if (userinput == null || userinput == '') {
        return false;
    }
    else {
        var month_diff = Date.now() - dob.getTime();
        var age_dt = new Date(month_diff);
        var year = age_dt.getUTCFullYear();
        var age = Math.abs(year - 1970);
        if (age < 18)
            return false;
    }
    return true;
}
function validatePassword(pw) {
    if (pw == "") {
        return false;
    }
    if (pw.length < 8) {
        return false;
    }
    if (pw.length > 15) {
        return false;
    }
    return true;
}
function validateName(name) {
    if (name == "") {
        return false;
    }
    return true;
}
function validateCheckBox(checkbox) {
    if (checkbox === null || checkbox === void 0 ? void 0 : checkbox.checked) {
        return true;
    }
    else {
        return false;
    }
}
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};
const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
var submitForm = (e) => {
    e.preventDefault();
    var firstName = document.getElementById("first-name");
    var lastName = document.getElementById("last-name");
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm-password");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var gender = document.getElementById("gender");
    var dob = document.getElementById("birthday");
    const checkbox = document.getElementById('terms');
    if (validateName(firstName.value)) {
        setSuccess(firstName);
    }
    else {
        setError(firstName, "Invalid First Name");
    }
    if (validateName(lastName.value)) {
        setSuccess(lastName);
    }
    else {
        setError(lastName, "Invalid Last Name");
    }
    if (validatePassword(password.value)) {
        setSuccess(password);
        if (verifyPassword(password.value, confirm_password.value)) {
            setSuccess(password);
            setSuccess(confirm_password);
        }
        else {
            setError(password, "Mismatch Password");
            setError(confirm_password, "Mismatch Password");
        }
    }
    else {
        setError(password, "Invalid Password");
    }
    if (validateEmail(email.value)) {
        setSuccess(email);
    }
    else {
        setError(email, "Invalid email");
    }
    if (validatePhoneNumber(phone.value)) {
        setSuccess(phone);
    }
    else {
        setError(phone, "Invalid Phone Number");
    }
    if (validateAge(dob.value)) {
        setSuccess(dob);
    }
    else {
        setError(dob, "Invalid Age");
    }
    if (validateCheckBox(checkbox)) {
        setSuccess(checkbox);
    }
    else {
        setError(checkbox, "Please Accept Terms and Conditions");
    }
};
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", submitForm);
//# sourceMappingURL=index.js.map