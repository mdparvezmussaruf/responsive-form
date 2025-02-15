// Get the elements
const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");
const showLoginBtn = document.getElementById("showLogin");
const showRegisterBtn = document.getElementById("showRegister");
const formContainer = document.querySelector(".form-container");

// Toggle to Login Form
showLoginBtn.addEventListener("click", () => {
    formContainer.style.transform = "translateX(0%)";
    loginForm.style.opacity = "1";
    registerForm.style.opacity = "0";
    registerForm.style.pointerEvents = "none";
});

// Toggle to Register Form
showRegisterBtn.addEventListener("click", () => {
    formContainer.style.transform = "translateX(-50%)";
    loginForm.style.opacity = "0";
    registerForm.style.opacity = "1";
    registerForm.style.pointerEvents = "auto";
});
