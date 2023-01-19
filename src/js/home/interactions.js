/*Imports*/
import { characterX } from "./character.js";
import { songTv } from "./sounds.js";
import { hardSkills } from "../recruiters/database.js";

/*Key*/

let code;
let lockKey = false;

window.document.addEventListener("keyup", (e) => {
  let page = localStorage.getItem("page");

  if (lockKey === false) {
    if (characterX >= 340 && characterX <= 360 && page === "livingRoom") {
      code = e.code;
      lockKey = true;
      setTimeout(() => {
        lockKey = false;
      }, 1000);
    }
  }
});

/*Mouse*/

export let mousePositionX;
export let mousePositionY;

export let lockMouse = false;

window.addEventListener("click", (e) => {
  let page = localStorage.getItem("page");

  if (modal === false && lockMouse === false) {
    if (
      mousePositionX >= 150 &&
      mousePositionX <= 250 &&
      mousePositionY >= 50 &&
      mousePositionY <= 150 &&
      page === "bedroom"
    ) {
      modal = true;
    } else if (
      mousePositionX >= 55 &&
      mousePositionX <= 130 &&
      mousePositionY >= 40 &&
      mousePositionY <= 120 &&
      page === "trophyRoom"
    ) {
      modal = true;
    } else if (
      mousePositionX >= 180 &&
      mousePositionX <= 250 &&
      mousePositionY >= 40 &&
      mousePositionY <= 120 &&
      page === "trophyRoom"
    ) {
      modal = true;
    } else if (
      mousePositionX >= 310 &&
      mousePositionX <= 380 &&
      mousePositionY >= 40 &&
      mousePositionY <= 120 &&
      page === "trophyRoom"
    ) {
      modal = true;
    } else if (
      mousePositionX >= 180 &&
      mousePositionX <= 250 &&
      mousePositionY >= 180 &&
      mousePositionY <= 260 &&
      page === "trophyRoom"
    ) {
      openModal("JavaScript");
    } else if (
      mousePositionX >= 310 &&
      mousePositionX <= 380 &&
      mousePositionY >= 180 &&
      mousePositionY <= 260 &&
      page === "trophyRoom"
    ) {
      openModal("CSS");
    }
  }
});

window.addEventListener("mousemove", (e) => {
  mousePositionX = e.offsetX;
  mousePositionY = e.offsetY;
});

/*Modal*/

let screen = document.querySelector(".screen");

export let modal = false;

export const openModal = (dataSkill) => {
  modal = false;
  lockMouse = true;

  const skill = hardSkills.find((elem) => elem.skill === dataSkill);

  let html = `
        <div id="modal">
            <div>
            <span id="close">X</span>
             <div>
              <h3>${skill.skill}</h3>
              <p>Conhecimento: ${skill.knowledge}</p>
             </div>
              <p>${skill.about}</p>
            </div>
        </div>
    `;

  screen.insertAdjacentHTML("beforeend", html);

  let close = document.getElementById("close");

  close.addEventListener("click", () => {
    let modal = document.getElementById("modal");
    screen.removeChild(modal);
    lockMouse = false;
  });
};

/*TurnOnTv*/

export let tv = new Image();
tv.src = "./src/imgs/objects/tv.png";
tv.setAttribute("data-tv", "off");

export const turnOnTv = () => {
  if (characterX >= 340 && characterX <= 360 && code === "KeyZ") {
    if (tv.dataset.tv === "off") {
      songTv.play();
      tv.src = "./src/imgs/objects/tv2.png";
      tv.setAttribute("data-tv", "on");
    } else {
      songTv.play();
      tv.src = "./src/imgs/objects/tv.png";
      tv.setAttribute("data-tv", "off");
    }

    code = "";
  }
};
