/*Imports*/
import { characterX } from "./character.js";
import { songTv } from "./sounds.js";
import { hardSkills, projects } from "../recruiters/database.js";

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
    }else if(characterX >= 195 && characterX <= 225 && page === "bedroom"){
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
      modal = true;
    } else if (
      mousePositionX >= 310 &&
      mousePositionX <= 380 &&
      mousePositionY >= 180 &&
      mousePositionY <= 260 &&
      page === "trophyRoom"
    ) {
      modal = true;
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

export const openModalHardSkill = (dataSkill) => {
  modal = false;
  lockMouse = true;

  const skill = hardSkills.find((elem) => elem.skill === dataSkill);

  console.log("teste")

  let html = `
        <div id="modal-hard-skill">
            <div>
            <span id="close">X</span>
             <div>
              <h3>${skill.skill}</h3>
             </div>
              <p>${skill.about}</p>
            </div>
        </div>
    `;

  screen.insertAdjacentHTML("beforeend", html);

  let close = document.getElementById("close");

  close.addEventListener("click", () => {
    let modal = document.getElementById("modal-hard-skill");
    screen.removeChild(modal);
    lockMouse = false;
  });
};

export const openModalProjects = () => {
  modal = false;
  lockMouse = true;

  let html = `
        <div id="modal-projects">
            <div id="cont-projects">
            <span id="close">X</span>
            </div>
        </div>
    `;

  screen.insertAdjacentHTML("beforeend", html);

  let container = document.getElementById("cont-projects");

  projects.forEach((e) => {
    let link = `
      <a href="${e.href}" target="_blank">${e.name}</a>
    `;

    container.insertAdjacentHTML("beforeend", link);
  });

  let close = document.getElementById("close");

  close.addEventListener("click", () => {
    let modal = document.getElementById("modal-projects");
    screen.removeChild(modal);
    lockMouse = false;
  });
};

/*TurnOnTv*/

export let tv = new Image();
tv.src = "./src/imgs/objects/tv.png";
tv.setAttribute("data-tv", "off");

export let tvOn = new Image();
tvOn.src = "./src/imgs/objects/tvOn.png";

localStorage.setItem("tv", "off");

export const turnOnTv = () => {
  if (characterX >= 340 && characterX <= 360 && code === "KeyZ") {
    if (tv.dataset.tv === "off") {
      songTv.play();
      localStorage.setItem("tv", "on");
      tv.setAttribute("data-tv", "on");
    } else if (tv.dataset.tv === "on") {
      songTv.play();
      localStorage.setItem("tv", "off");
      tv.setAttribute("data-tv", "off");
    }

    code = "";
  }
};

export const turnOnComputer = () => {
  let page = localStorage.getItem("page");
  if (characterX >= 195 && characterX <= 225 && page === "bedroom" && code === "KeyZ") {
    if (characterX >= 195 && characterX <= 225 && page === "bedroom") {
      modal = true;
      openModalProjects();
    }
  }

  code = "";
};
