const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");

function onLoginBtnClick(){
    const username = loginInput.value;
    console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);