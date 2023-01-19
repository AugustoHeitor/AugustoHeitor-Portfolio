/*Imports*/
import { songDoor, songFlorest, songHouse } from "./sounds.js";

/*Canvas*/
let canvas = document.querySelector("canvas");

/*LocalStroage*/
localStorage.setItem("page", "start")

/*Songs*/
songFlorest.play();

/*Key*/
let lockKey = false;

/*Character*/
let floorRight = 1;
let floorLeft = 1;

let right;
let left;

export let character = new Image();
character.src = "./src/imgs/character/characterAnimationRight.gif";

export let characterX = 400;
export let characterY = 280;

const mousePositionRight = (mousePosition) => {
  if (floorRight === 1) {
    character.src = "./src/imgs/character/characterRight1.png";
    floorRight = 2;
    characterX = characterX + 10;
  } else if (floorRight === 2) {
    character.src = "./src/imgs/character/characterRight2.png";
    floorRight = 1;
    characterX = characterX + 10;
  }

  if (characterX >= mousePosition) {
    clearInterval(right);
  }
};

const mousePositionLeft = (mousePosition) => {
  if (floorLeft === 1) {
    character.src = "./src/imgs/character/characterLeft1.png";
    floorLeft = 2;
    characterX = characterX - 10;
  } else if (floorLeft === 2) {
    character.src = "./src/imgs/character/characterLeft2.png";
    floorLeft = 1;
    characterX = characterX - 10;
  }

  if (characterX <= mousePosition) {
    clearInterval(left);
  }
};

/*Character movement*/
canvas.addEventListener("click", (e) => {
  clearInterval(left);
  clearInterval(right);

  if (e.offsetX > characterX) {
    right = setInterval(() => {
      mousePositionRight(e.offsetX);
    }, 150);
  } else if (e.offsetX < characterX) {
    left = setInterval(() => {
      mousePositionLeft(e.offsetX);
    }, 150);
  }
});

/*Navigation*/
window.addEventListener("keyup", (e) => {
  let page = localStorage.getItem("page");

  if (lockKey === false) {
    if (e.code === "Space") {
      if (page === "start") {
        if (characterX >= 610 && characterX <= 640) {
          songFlorest.pause();
          songHouse.play();
          songDoor.play();
          localStorage.setItem("page", "livingRoom");
          characterX = 50;
        }
      } else if (page === "livingRoom") {
        if (characterX >= 40 && characterX <= 90) {
          songDoor.play();
          songHouse.pause();
          songFlorest.play();
          localStorage.setItem("page", "start");
          characterX = 600;
        } else if (characterX >= 690 && characterX <= 740) {
          songDoor.play();
          localStorage.setItem("page", "hall");
          characterX = 50;
        }
      } else if (page === "hall") {
        if (characterX >= 40 && characterX <= 70) {
          songDoor.play();
          localStorage.setItem("page", "livingRoom");
          characterX = 690;
        } else if (characterX >= 220 && characterX <= 250) {
          songDoor.play();
          localStorage.setItem("page", "bedroom");
          characterX = 50;
        } else if (characterX >= 380 && characterX <= 410) {
          songDoor.play();
          localStorage.setItem("page", "kitchen");
          characterX = 50;
        } else if (characterX >= 530 && characterX <= 560) {
          songDoor.play();
          localStorage.setItem("page", "bathroom");
          characterX = 50;
        } else if (characterX >= 690 && characterX <= 730) {
          songDoor.play();
          localStorage.setItem("page", "trophyRoom");
          characterX = 50;
        }
      } else if (page === "bedroom") {
        if (characterX >= 40 && characterX <= 70) {
          songDoor.play();
          localStorage.setItem("page", "hall");
          characterX = 230;
        }
      } else if (page === "trophyRoom") {
        if (characterX >= 40 && characterX <= 70) {
          songDoor.play();
          localStorage.setItem("page", "hall");
          characterX = 720;
        }
      } else if (page === "kitchen") {
        if (characterX >= 40 && characterX <= 70) {
          songDoor.play();
          localStorage.setItem("page", "hall");
          characterX = 390;
        }
      } else if (page === "bathroom") {
        if (characterX >= 40 && characterX <= 70) {
          songDoor.play();
          localStorage.setItem("page", "hall");
          characterX = 570;
        }
      }
    }

    lockKey = true;
    setTimeout(() => {
      lockKey = false;
    }, 1000);
  }
});
