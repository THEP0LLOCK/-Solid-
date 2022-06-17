const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(Info){
    Info.preventDefault();
    console.log(Info);
}

function onClicked(){
    console.log("Clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
loginForm.addEventListener("click", onClicked)
console.log()
