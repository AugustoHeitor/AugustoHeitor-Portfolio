import { pageLivingRoom, pageStart, pageHall, 
  pageBedroom, pageTrophyRoom, pageKitchen, pageBathroom, } from "./pages.js";
import { character, characterX, characterY } from "./character.js";

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d"); 

const game = () => {
  const page = localStorage.getItem("page");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (page === "livingRoom") {
    pageLivingRoom();
  } else if (page === "start") {
    pageStart();
  } else if (page === "hall") {
    pageHall();
  }else if (page === "bedroom") {
    pageBedroom();
  }else if (page === "trophyRoom") {
    pageTrophyRoom();
  }else if (page === "kitchen") {
    pageKitchen();
  }else if (page === "bathroom") {
    pageBathroom();
  }

  ctx.drawImage(character, characterX, characterY);

  requestAnimationFrame(game);
};

requestAnimationFrame(game);