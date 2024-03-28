document.getElementById('darkmode').addEventListener("click", () => {
    document.documentElement.style.setProperty('--body-background-color', '#1f1f1f');
    document.documentElement.style.setProperty('--button-bg-color', 'rgb(20, 20, 96)');
    document.documentElement.style.setProperty('--form-bg-color', '#d0cccc');
    document.getElementById('acc').style.color="white";
    document.getElementById('loginLink').style.color="#2677bd";
});

document.getElementById('lightmode').addEventListener("click", () => {
    // Reset to original values
    document.documentElement.style.removeProperty('--body-background-color');
    document.documentElement.style.removeProperty('--text-color');
    document.documentElement.style.removeProperty('--button-bg-color');
    document.documentElement.style.removeProperty('--form-bg-color');
    document.getElementById('acc').style.color="black";
    
});

// back to home
const home = document.getElementById('home');
home.addEventListener("click",()=>{
window.location.href = 'index.html';
});

// Form Validation
// Form Validation
const emailElem = document.getElementById('email');
const passwordElem = document.getElementById('password');
const form = document.getElementById('form');
const msgErr = document.getElementById('emailErr');
const passErr = document.getElementById('errorPass');

emailElem.addEventListener('input', () => {
if (emailElem.value.trim() === '') {
msgErr.innerHTML = '*Email is required';
} else {
msgErr.innerHTML = '';
}
});

passwordElem.addEventListener('input', () => {
if (passwordElem.value.trim() === '') {
passErr.innerHTML = '*Password is required';
} else {
passErr.innerHTML = ''; // Clear error message if password is provided
if (passwordElem.value.length <= 6) {
passErr.innerHTML = 'Password must be longer than 6 characters';
} else if (passwordElem.value.length >= 20) {
passErr.innerHTML = '*Password must be less than 20 characters';
} else {
passErr.innerHTML = ''; // Clear additional length error message
}
}
});

const email = 'juan@gmail.com';
const password = 'juan12345';
form.addEventListener('submit', (e) => {
console.log("Form submitted");
if (emailElem.value.trim() === '') {
msgErr.innerHTML = '*Email is required';
console.log("Email is required");
e.preventDefault();
}

if (passwordElem.value.trim() === '') {
passErr.innerHTML = '*Password is required';
console.log("Password is required");
e.preventDefault();
}

if (emailElem.value.trim() === email && passwordElem.value.trim() === password) {
console.log("Login successful");
window.location.href = 'about.html';
} else {
console.log("Login failed");
msgErr.innerHTML = '*Incorrect email';
e.preventDefault();
}
});