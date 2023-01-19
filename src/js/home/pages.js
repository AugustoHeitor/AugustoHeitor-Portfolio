import { instructionBrowse } from "./instructions.js";
import { characterX } from "./character.js";
import { turnOnTv, tv } from "./interactions.js"
 
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let background = new Image();
background.src = "./src/imgs/backgrounds/outOfHome.png";

export const pageLivingRoom = () => {
  background.src = "./src/imgs/backgrounds/livingRoom.png";
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.drawImage(tv, 315, 220, 110, 65);

  turnOnTv()
  
  if (
    (characterX >= 40 && characterX <= 90 ||
    characterX >= 690 && characterX <= 740)
  ) {
    instructionBrowse();
  }

  
};

export const pageStart = () => {
  background.src = "./src/imgs/backgrounds/outOfHome.png";
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  if (characterX >= 610 && characterX <= 640) {
    instructionBrowse();
  }
};

export const pageHall = () => {
  background.src = "./src/imgs/backgrounds/hall.png";
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  if (
    (characterX >= 40 && characterX <= 70) ||
    (characterX >= 220 && characterX <= 250) ||
    (characterX >= 380 && characterX <= 410) ||
    (characterX >= 530 && characterX <= 560) ||
    (characterX >= 690 && characterX <= 730)
  ) {
    instructionBrowse();
  }
};

export const pageBedroom = () => {
  background.src = "./src/imgs/backgrounds/bedroom.png";
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  if (characterX >= 40 && characterX <= 70) {
    instructionBrowse();
  }
};

export const pageTrophyRoom = () => {
  background.src = "./src/imgs/backgrounds/trophyRoom.png";
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  if (characterX >= 40 && characterX <= 70) {
    instructionBrowse();
  }
};

export const pageKitchen = () => {
  background.src = "./src/imgs/backgrounds/emptyRoom.png";
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  if (characterX >= 40 && characterX <= 70) {
    instructionBrowse();
  }
};

export const pageBathroom = () => {
  background.src = "./src/imgs/backgrounds/emptyRoom.png";
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  if (characterX >= 40 && characterX <= 70) {
    instructionBrowse();
  }
};



