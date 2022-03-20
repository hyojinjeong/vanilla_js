const clockDate = document.querySelector(".js-date");
const clockTime = document.querySelector(".js-clock"); 

function getTime(){
    const today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = String(today.getDate()).padStart(2, '0');

    let hours = today.getHours();
    let minutes = String(today.getMinutes()).padStart(2, '0');
    let seconds = String(today.getSeconds()).padStart(2, '0');

    clockDate.innerText = `${year}.${month}.${day}`;    
    clockTime.innerText = `${hours}:${minutes}:${seconds}`;     
}

getTime();
setInterval(getTime, 1000);