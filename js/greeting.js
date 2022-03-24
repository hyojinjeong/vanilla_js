const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting h3");

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
    let time = Number(new Date().getHours());
    let greetingWord = '';
    greeting.classList.remove(HIDDEN_CLASSNAME);

    if(time >= 0 && time <= 11){
      greetingWord = 'Good morning,';
    } else if(time >= 12 && time <= 19){
      greetingWord = 'Good afternoon,';
    } else if(time >= 20 && time <= 24){
      greetingWord = 'Good night,'
    }
    greeting.innerText = `${greetingWord} ${username}!`;    
  }
}

loginForm.addEventListener("submit",onLoginSubmit); 
// const savedUsername = localStorage.getItem(USERNAME_KEY);