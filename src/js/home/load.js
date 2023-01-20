/*Imports*/
import {
  pageLivingRoom,
  pageStart,
  pageHall,
  pageBedroom,
  pageTrophyRoom,
  pageKitchen,
  pageBathroom,
} from "./pages.js";
import { characterLeft1, characterLeft2, characterRight1, characterRight2, characterX, characterY } from "./character.js";

/*Canvas*/
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

/*Load*/
const load = () => {

  const page = localStorage.getItem("page");
  const character = localStorage.getItem("character");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (page === "livingRoom") {
    pageLivingRoom();
  } else if (page === "start") {
    pageStart();
  } else if (page === "hall") {
    pageHall();
  } else if (page === "bedroom") {
    pageBedroom();
  } else if (page === "trophyRoom") {
    pageTrophyRoom();
  } else if (page === "kitchen") {
    pageKitchen();
  } else if (page === "bathroom") {
    pageBathroom();
  }

  if(character === "right1"){
    ctx.drawImage(characterRight1, characterX, characterY);
  }else if(character === "right2"){
    ctx.drawImage(characterRight2, characterX, characterY);
  }else if(character === "left1"){
    ctx.drawImage(characterLeft1, characterX, characterY);
  }else if(character === "left2"){
    ctx.drawImage(characterLeft2, characterX, characterY);
  }

  requestAnimationFrame(load);
};

requestAnimationFrame(load);