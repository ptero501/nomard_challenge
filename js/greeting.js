const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    greetingText(username)
}

function greetingText(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerHTML = `Hello ${username}`;
}

const savedusername = localStorage.getItem(USERNAME_KEY);

if(savedusername === null){
    loginForm.addEventListener("submit",onLoginSubmit)
}else{
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greetingText(savedusername)
}