/*Imports*/
import { characterX, characterY } from "./character.js";
import { mousePositionX, mousePositionY } from "./interactions.js";

/*Canvas*/
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

/*Key Space*/
let space = new Image()
space.src = "./src/imgs/instructions/space.png";

/*Interrogation*/
let interrogation = new Image()
interrogation.src = "./src/imgs/instructions/interrogation.png";

export const instructionBrowse = () => {
  ctx.drawImage(space, characterX - 15, characterY - 30);
};

export const instructionMouse = () => {
  ctx.drawImage(interrogation, mousePositionX + 50, mousePositionY - 50);
};
