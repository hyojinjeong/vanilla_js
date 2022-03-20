const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;

  if(username === null || username === ""){
    alert('공백이 입력되었습니다.');
  }
  else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);    
  }
}

function paintGreetings(username) {
  if(username !== null || username !== ''){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}!`;    
  }
}

loginForm.addEventListener("submit",onLoginSubmit); 
// const savedUsername = localStorage.getItem(USERNAME_KEY);