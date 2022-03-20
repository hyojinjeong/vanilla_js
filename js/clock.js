// const clock = document.querySelector("h2#clock");

// function getClock(){
//     const date = new Date();
//     const hours = String(date.getHours()).padStart(2,"0");
//     const minutes = String(date.getMinutes()).padStart(2,"0");
//     const secondes = String(date.getSeconds()).padStart(2,"0");

//     clock.innerText = `${hours}:${minutes}:${secondes}`;
// }
// // setInterval(sayHello, 2000);
// getClock();     // 시간을 바로 볼 수 있어서
// setInterval(getClock, 1000);

const clockTitle = document.querySelector(".js-clock");

function getChristmasDate(){
    const christmasDate = new Date("December 25, 2022, 0:00:00").getTime();
    const now = new Date().getTime();
    const dday = christmasDate - now;

    const day = Math.ceil(dday / (1000*60*60*24));
    const hour = Math.ceil(dday % (1000*60*60*24)/(1000*60*60));
    const min = Math.ceil(dday % (1000*60*60)/(1000*60));
    const sec = Math.ceil(dday % (1000*60)/1000);    

    clockTitle.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
}

getChristmasDate();
setInterval(getChristmasDate, 1000);