// nav
const burger = document.getElementById('hamburger');
burger.onclick = function (){
    let nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// login

let loginBtn = document.getElementById('login');

let signup = document.getElementById('signup');

loginBtn.addEventListener("click",()=>{
    window.location.href = 'login.html';
})
signup.addEventListener("click",()=>{
    window.location.href = 'signup.html';
})


