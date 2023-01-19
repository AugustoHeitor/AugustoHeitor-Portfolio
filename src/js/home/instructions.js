import { characterX, characterY } from "./character.js";

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let space = new Image()
space.src = "./src/imgs/instructions/space.png";

export const instructionBrowse = () => {
  ctx.drawImage(space, characterX - 15, characterY - 40, 75, 30);
};
