/*Imports*/
import { instructionBrowse } from "./instructions.js";
import { characterX } from "./character.js";
import {
  turnOnTv,
  tv,
  mousePositionX,
  mousePositionY,
  openModal,
  lockMouse,
  modal,
} from "./interactions.js";

/*Canvas*/
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

/*Background*/
let background = new Image();
background.src = "./src/imgs/backgrounds/outOfHome.png";

/*Pages*/
export const pageLivingRoom = () => {
  background.src = "./src/imgs/backgrounds/livingRoom.png";
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.drawImage(tv, 315, 220, 110, 65);

  turnOnTv();

  if (
    (characterX >= 40 && characterX <= 90) ||
    (characterX >= 690 && characterX <= 740)
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

  if (
    mousePositionX >= 150 &&
    mousePositionX <= 250 &&
    mousePositionY >= 50 &&
    mousePositionY <= 150 &&
    lockMouse === false &&
    modal === true
  ) {
    openModal("React");
  } else if (
    mousePositionX >= 150 &&
    mousePositionX <= 250 &&
    mousePositionY >= 50 &&
    mousePositionY <= 150 &&
    lockMouse === false &&
    modal === false
  ) {
    instructionBrowse();
  }
};

export const pageTrophyRoom = () => {
  background.src = "./src/imgs/backgrounds/trophyRoom.png";
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  if (characterX >= 40 && characterX <= 70) {
    instructionBrowse();
  }

  if (
    mousePositionX >= 55 &&
    mousePositionX <= 130 &&
    mousePositionY >= 40 &&
    mousePositionY <= 120 &&
    lockMouse === false &&
    modal === true
  ) {
    openModal("TypeScript");
  } else if (
    mousePositionX >= 180 &&
    mousePositionX <= 250 &&
    mousePositionY >= 40 &&
    mousePositionY <= 120 &&
    lockMouse === false &&
    modal === true
  ) {
    openModal("Git");
  } else if (
    mousePositionX >= 310 &&
    mousePositionX <= 380 &&
    mousePositionY >= 40 &&
    mousePositionY <= 120 &&
    lockMouse === false &&
    modal === true
  ) {
    openModal("HTML");
  } else if (
    mousePositionX >= 180 &&
    mousePositionX <= 250 &&
    mousePositionY >= 180 &&
    mousePositionY <= 260 &&
    lockMouse === false &&
    modal === true
  ) {
    openModal("JavaScript");
  } else if (
    mousePositionX >= 310 &&
    mousePositionX <= 380 &&
    mousePositionY >= 180 &&
    mousePositionY <= 260 &&
    lockMouse === false &&
    modal === true
  ) {
    openModal("CSS");
  }

  if (
    mousePositionX >= 55 &&
    mousePositionX <= 130 &&
    mousePositionY >= 40 &&
    mousePositionY <= 120 &&
    lockMouse === false &&
    modal === false
  ) {
    instructionBrowse();
  } else if (
    mousePositionX >= 180 &&
    mousePositionX <= 250 &&
    mousePositionY >= 40 &&
    mousePositionY <= 120 &&
    lockMouse === false &&
    modal === false
  ) {
    instructionBrowse();
  } else if (
    mousePositionX >= 310 &&
    mousePositionX <= 380 &&
    mousePositionY >= 40 &&
    mousePositionY <= 120 &&
    lockMouse === false &&
    modal === false
  ) {
    instructionBrowse();
  } else if (
    mousePositionX >= 180 &&
    mousePositionX <= 250 &&
    mousePositionY >= 180 &&
    mousePositionY <= 260 &&
    lockMouse === false &&
    modal === false
  ) {
    instructionBrowse();
  } else if (
    mousePositionX >= 310 &&
    mousePositionX <= 380 &&
    mousePositionY >= 180 &&
    mousePositionY <= 260 &&
    lockMouse === false &&
    modal === false
  ) {
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
