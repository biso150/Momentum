/*
** clock
*/
const dateTitle = document.querySelector(".date .dateTitle");
const clock = document.querySelector(".date .clock");

function setClock () {
  const nowClock = new Date();
  const setDay =  new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(nowClock);
  
  dateTitle.innerText = `${nowClock.getFullYear()}. ${String(nowClock.getMonth()).padStart(2, "0")}. ${String(nowClock.getDate()).padStart(2, "0")}. ${setDay}`;
  clock.innerText = `${String(nowClock.getHours()).padStart(2, "0")} : ${String(nowClock.getMinutes()).padStart(2, "0")} : ${String(nowClock.getSeconds()).padStart(2, "0")}`;
}

setClock ();

setInterval(setClock, 1000);