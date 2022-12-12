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
  paintGreetings(username);
}
function changeText(username) {
  let greetingWord = "Hello";
  if ((hours) => 6 && 10 > hours) {
    greetingWord = "Good Evening";
  } else if ((hours) => 10 && 12 > hours) {
    greetingWord = "Good Night";
  } else if ((hours) => 01 && 08 > hours) {
    greetingWord = "Good morning";
  } else if ((hours) => 11 && 14 > hours) {
    greetingWord = "Good Afternoon";
  }
  greeting.innerText = `${greetingWord}, ${username}`;
}
function paintGreetings(username) {
  changeText(username);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  setInterval(changeText(username), 6000);
}
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
}
getClock();
setInterval(getClock, 600000);

//Catcher
loginForm.addEventListener("submit", onLoginSubmit);

//tmp
const savedUsername = localStorage.getItem("USERNAME_KEY");
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUsername);
}
