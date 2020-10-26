const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
const address = document.getElementById('address');
const password = document.getElementById('password');
const cPassword = document.getElementById('cpassword');

//addEvent

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})



function setErrorMsg(input, errormsg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = 'form-control-user error';
    small.innerText = errormsg;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control-user success';
}

const sendData = (usernameValue, count, successRate) => {
    if(count === successRate){
        swal("Welcome "+usernameValue,"Registration successfull", "success");
    }
}

function SuccessMsg(usernameValue){
    let formSuccess = document.getElementsByClassName('form-control-user');

    var count = formSuccess.length - 1;
    var successRate = 0;
    for(let i = 0; i < formSuccess.length; i++){
        if(formSuccess[i].className === 'form-control-user success'){
            successRate = i;
            if(successRate === count){
                sendData(usernameValue, count, successRate);
            }
        }
        else{
            return false;
        }
    }
}

//define the validate function

//email validation
// function validate() {
//     const isEmail = (emailValue) => {
//         if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value)) {
//             return (true);
//         }
//         return (false);
// }
const validate = () => {
    const usernameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const addressValue = address.value.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue = cPassword.value.trim();

    //validate username
    if (usernameValue === "") {
        setErrorMsg(userName, "Username cann't be blank !");
    }
    else if (usernameValue.length < 5) {
        setErrorMsg(userName, "Username must be more than 4 character !");
    }
    else {
        setSuccessMsg(userName);
    }

    //validate emailId
    if (emailValue === "") {
        setErrorMsg(email, "Email cann't be blank !");
    }
    else {
        setSuccessMsg(email);
    }

    //mobile validat
    if (numberValue === "") {
        setErrorMsg(number, "Mobile number cann't be blank !");
    }
    else if (numberValue.length != 10) {
        setErrorMsg(number, "Not a valid number");
    }
    else {
        setSuccessMsg(number);
    }

    //Address validation
    if (addressValue === "") {
        setErrorMsg(address, "Please enter your address !");
    }
    else {
        setSuccessMsg(address);
    }

    //Password validation
    if (passwordValue === "") {
        setErrorMsg(password, "Password cann't be blank !");
    }
    else if (passwordValue === "Password" || passwordValue === "password") {
        setErrorMsg(password, "Password cann't be 'Password")
    }
    else if (passwordValue === usernameValue) {
        setErrorMsg(password, "Username " +"'"+usernameValue+"'"+ " cann't be Password !");
    }
    else if (passwordValue.length < 8) {
        setErrorMsg(password, "Password must be more than 6 characters !");
    }
    else {
        setSuccessMsg(password);
    }

    //confirm password validation
    if (cPasswordValue === "") {
        setErrorMsg(cPassword, "Confirm Password cann't be blank !");
    }
    else if (cPasswordValue !== passwordValue) {
        setErrorMsg(cPassword, "Password don't match !");
    }
    else if (cPasswordValue === "Password" || cPasswordValue === "password") {
        setErrorMsg(cPassword, "Password cann't be 'Password'");
    }
    else if (cPasswordValue === usernameValue) {
        setErrorMsg(cPassword, "Password cann't be " + usernameValue);
    }
    else {
        setSuccessMsg(cPassword);
    }

    SuccessMsg(usernameValue);
}


const inputs = document.querySelectorAll('input');

inputs.forEach(el => {
    el.addEventListener('focus', e => {
        e.target.classList.add('dirty');
        e.target.classList.remove('clean');
    })
    el.addEventListener('blur', e => {
        if(e.target.value.length == 0){
            e.target.classList.remove('dirty');
        }
        else if(e.target.value.length > 0){
            e.target.classList.add('clean');
        }
    })
});








