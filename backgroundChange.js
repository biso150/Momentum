/*
** backgroundChange
*/
const bgImgList = ["bgImg01.jpg", "bgImg02.jpg", "bgImg03.jpg", "bgImg04.jpg", "bgImg05.jpg", "bgImg06.jpg",
  "bgImg07.jpg", "bgImg08.jpg", "bgImg09.jpg", "bgImg10.jpg", "bgImg11.jpg"];

const body = document.body;
const bg = document.querySelector(".bg");

bg.style.backgroundImage = `url("/img/${bgImgList[0]}")`;
body.style.backgroundImage = `url("/img/${bgImgList[1]}")`;

let bgImg, preBgImg;

function getRandomImg () {
  bgImg = bgImgList[Math.floor(Math.random() * bgImgList.length)];

  if (`url("/img/${bgImg}")` === preBgImg) {
    getRandomImg();
  }
}

function changeToBodyImg () {
  bg.classList.toggle("opacity0");

  setTimeout(function() {
    preBgImg = body.style.backgroundImage;
    getRandomImg ();
    bg.style.backgroundImage = `url("/img/${bgImg}")`;
  }, 1000);
}

function changeToBgImg () {
  bg.classList.toggle("opacity0");
  
  setTimeout(function() {
    preBgImg = bg.style.backgroundImage;
    getRandomImg ();
    body.style.backgroundImage = `url("/img/${bgImg}")`;
  }, 1000);
}

function changeBgImg() {
  changeToBgImg();

  setTimeout(function() {
    changeToBodyImg();
  }, 3000);
}
