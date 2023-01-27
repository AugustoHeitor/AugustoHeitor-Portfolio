/*Imports*/
import { characterX, characterY } from "./character.js";
import { mousePositionX, mousePositionY } from "./interactions.js";

/*Canvas*/
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

/*Key Space*/
let space = new Image()
space.src = "./src/imgs/instructions/space.png";

let z = new Image()
z.src = "./src/imgs/instructions/z.png";

/*Interrogation*/
let interrogation = new Image()
interrogation.src = "./src/imgs/instructions/interrogation.png";

export const instructionBrowse = () => {
  ctx.drawImage(space, characterX - 15, characterY - 30);
};

export const instructionInteract = () => {
  ctx.drawImage(z, characterX, characterY - 30);
};

export const instructionMouse = () => {
  ctx.drawImage(interrogation, mousePositionX + 10, mousePositionY - 30);
};
