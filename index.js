const form = document.getElementById('form');
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    // Validate username
    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    // Validate email
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    // Validate phone number (optional)
    // For simplicity, assuming phone number is not required

    // Validate password
    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    // Validate confirm password
    if (cpasswordValue === '') {
        setErrorFor(cpassword, 'Confirm Password cannot be blank');
    } else if (passwordValue !== cpasswordValue) {
        setErrorFor(cpassword, 'Passwords do not match');
    } else {
        setSuccessFor(cpassword);
    }

    // If all inputs are valid, submit the form
    if (usernameValue !== '' && emailValue !== '' && isEmail(emailValue) && passwordValue !== '' && passwordValue === cpasswordValue) {
        // Replace with your custom action
        alert('Registration Successful!');
        form.reset(); // Reset form after successful submission
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // Display error message
    small.innerText = message;

    // Add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; // .form-control
    formControl.className = 'form-control success';
}

function isEmail(email) {
    // Basic email validation
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}
