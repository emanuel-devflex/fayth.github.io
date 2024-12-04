// Referencias a los elementos
const loginForm = document.getElementById("login-container");
const signupForm = document.getElementById("signup-container");
const signupToggler = document.getElementById("signup-form-toggler");
const loginToggler = document.getElementById("login-form-toggler");

// Mostrar registro y ocultar login
signupToggler.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    signupForm.style.display = "block";
});

// Mostrar login y ocultar registro
loginToggler.addEventListener("click", (e) => {
    e.preventDefault();
    signupForm.style.display = "none";
    loginForm.style.display = "block";
});
