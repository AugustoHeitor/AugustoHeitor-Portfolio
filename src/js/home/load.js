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
import { character, characterX, characterY, imgCharacterY1, imgCharacterY2 } from "./character.js";

/*Canvas*/
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);

/*Load*/

const load = () => {

  const page = localStorage.getItem("page");

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

  ctx.drawImage(character, imgCharacterY1, imgCharacterY2, 102, 129, characterX, characterY, 102, 129,);

  requestAnimationFrame(load, canvas);
};

requestAnimationFrame(load, canvas)


