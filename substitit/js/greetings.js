//Catch
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//Define
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//Function
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//Catcher
loginForm.addEventListener("submit", onLoginSubmit);

//tmp
const savedUsername = localStorage.getItem("USERNAME_KEY");
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}
else {
    greeting.classList.remove(HIDDEN_CLASSNAME);
}