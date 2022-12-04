/*
** login
*/
const intro = document.querySelector(".intro");
const introBg = document.querySelector(".introBg");
const nameForm = document.querySelector(".intro .nameForm");
const name = document.querySelector(".intro .name");
const username = document.querySelector(".username");
const main = document.querySelector(".main");

const getUsername = localStorage.getItem("username");

if (getUsername === null) {
  function submitLogin(event) {
      event.preventDefault();
      const nameValue = name.value;
      localStorage.setItem("username", nameValue);
      username.innerText = `Hello, ${nameValue} !`;
      nameForm.classList.add("opacity0");
      introBg.classList.add("opacity0");
      main.classList.remove("none")
      
      setTimeout(changeToBodyImg, 3000);
      setInterval(changeBgImg, 6000);
  }
  nameForm.addEventListener("submit",submitLogin);

} else {
  username.innerText = `Hello, ${getUsername} !`;
  nameForm.classList.add("opacity0");
  introBg.classList.add("opacity0");
  main.classList.remove("none")
  
  setTimeout(changeToBodyImg, 3000);
  setInterval(changeBgImg, 6000);
}


// function mouseleave(event) { 

// }
// function mousemove(event) {
// console.log(event)
// }
// nameForm.addEventListener("mouseleave",mouseleave)
// nameForm.addEventListener("mousemove",mousemove)