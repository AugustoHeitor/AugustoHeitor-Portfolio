/*Imports*/
import {
  instructionBrowse,
  instructionInteract,
  instructionMouse,
} from "./instructions.js";

import { characterX } from "./character.js";
import {
  turnOnTv,
  tv,
  tvOn,
  mousePositionX,
  mousePositionY,
  openModalHardSkill,
  lockMouse,
  modal,
  openModalProjects,
  turnOnComputer
} from "./interactions.js";

/*Canvas*/
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

/*Background*/
let backgroundOutOfHome = new Image();
backgroundOutOfHome.src = "./src/imgs/backgrounds/outOfHome.png";

let backgroundLivingRoom = new Image();
backgroundLivingRoom.src = "./src/imgs/backgrounds/livingRoom.png";

let backgroundBedroom = new Image();
backgroundBedroom.src = "./src/imgs/backgrounds/bedroom.png";

let backgroundTrophyRoom = new Image();
backgroundTrophyRoom.src = "./src/imgs/backgrounds/trophyRoom.png";

let backgroundHall = new Image();
backgroundHall.src = "./src/imgs/backgrounds/hall.png";

let backgroundBathroom = new Image();
backgroundBathroom.src = "./src/imgs/backgrounds/bathroom.png";

let backgroundKitchen = new Image();
backgroundKitchen.src = "./src/imgs/backgrounds/kitchen.png";

/*Pages*/

tv.addEventListener("load", () => {
  ctx.drawImage(tv, 315, 220, 110, 65);
});

export const pageLivingRoom = () => {
  ctx.drawImage(backgroundLivingRoom, 0, 0, canvas.width, canvas.height);

  let tvStatus = localStorage.getItem("tv");

  if (tvStatus === "off") {
    ctx.drawImage(tv, 315, 220, 110, 65);
  } else if (tvStatus === "on") {
    ctx.drawImage(tvOn, 315, 220, 110, 65);
  }

  turnOnTv();

  if (
    (characterX >= 40 && characterX <= 90) ||
    (characterX >= 690 && characterX <= 740)
  ) {
    instructionBrowse();
  }

  if (characterX >= 340 && characterX <= 360) {
    instructionInteract();
  }
};

export const pageStart = () => {
  ctx.drawImage(backgroundOutOfHome, 0, 0, canvas.width, canvas.height);
  if (characterX >= 610 && characterX <= 640) {
    instructionBrowse();
  }
};

export const pageHall = () => {
  ctx.drawImage(backgroundHall, 0, 0, canvas.width, canvas.height);
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
  ctx.drawImage(backgroundBedroom, 0, 0, canvas.width, canvas.height);
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
    openModalHardSkill("React");
  } else if (
    mousePositionX >= 150 &&
    mousePositionX <= 250 &&
    mousePositionY >= 50 &&
    mousePositionY <= 150 &&
    lockMouse === false &&
    modal === false
  ) {
    instructionMouse();
  }

  if (
    characterX >= 195 &&
    characterX <= 225 &&
    lockMouse === false &&
    modal === false
  ) {
    instructionInteract();
    turnOnComputer();
  } 
};

export const pageTrophyRoom = () => {
  ctx.drawImage(backgroundTrophyRoom, 0, 0, canvas.width, canvas.height);
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
    openModalHardSkill("TypeScript");
  } else if (
    mousePositionX >= 180 &&
    mousePositionX <= 250 &&
    mousePositionY >= 40 &&
    mousePositionY <= 120 &&
    lockMouse === false &&
    modal === true
  ) {
    openModalHardSkill("Git");
  } else if (
    mousePositionX >= 310 &&
    mousePositionX <= 380 &&
    mousePositionY >= 40 &&
    mousePositionY <= 120 &&
    lockMouse === false &&
    modal === true
  ) {
    openModalHardSkill("HTML");
  } else if (
    mousePositionX >= 180 &&
    mousePositionX <= 250 &&
    mousePositionY >= 180 &&
    mousePositionY <= 260 &&
    lockMouse === false &&
    modal === true
  ) {
    openModalHardSkill("JavaScript");
  } else if (
    mousePositionX >= 310 &&
    mousePositionX <= 380 &&
    mousePositionY >= 180 &&
    mousePositionY <= 260 &&
    lockMouse === false &&
    modal === true
  ) {
    openModalHardSkill("CSS");
  }

  if (
    mousePositionX >= 55 &&
    mousePositionX <= 130 &&
    mousePositionY >= 40 &&
    mousePositionY <= 120 &&
    lockMouse === false &&
    modal === false
  ) {
    instructionMouse();
  } else if (
    mousePositionX >= 180 &&
    mousePositionX <= 250 &&
    mousePositionY >= 40 &&
    mousePositionY <= 120 &&
    lockMouse === false &&
    modal === false
  ) {
    instructionMouse();
  } else if (
    mousePositionX >= 310 &&
    mousePositionX <= 380 &&
    mousePositionY >= 40 &&
    mousePositionY <= 120 &&
    lockMouse === false &&
    modal === false
  ) {
    instructionMouse();
  } else if (
    mousePositionX >= 180 &&
    mousePositionX <= 250 &&
    mousePositionY >= 180 &&
    mousePositionY <= 260 &&
    lockMouse === false &&
    modal === false
  ) {
    instructionMouse();
  } else if (
    mousePositionX >= 310 &&
    mousePositionX <= 380 &&
    mousePositionY >= 180 &&
    mousePositionY <= 260 &&
    lockMouse === false &&
    modal === false
  ) {
    instructionMouse();
  }
};

export const pageKitchen = () => {
  ctx.drawImage(backgroundKitchen, 0, 0, canvas.width, canvas.height);
  if (characterX >= 40 && characterX <= 70) {
    instructionBrowse();
  }
};

export const pageBathroom = () => {
  ctx.drawImage(backgroundBathroom, 0, 0, canvas.width, canvas.height);
  if (characterX >= 40 && characterX <= 70) {
    instructionBrowse();
  }
};
