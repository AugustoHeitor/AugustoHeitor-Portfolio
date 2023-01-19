let canvas = document.querySelector("canvas");

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

window.addEventListener("keyup", (e) => {
  let page = localStorage.getItem("page");

  if (page === "start") {
    if (e.code === "Space" && characterX >= 610 && characterX <= 640) {
      localStorage.setItem("page", "livingRoom");
      characterX = 50;
    }
  } else if (page === "livingRoom") {
    if (e.code === "Space" && characterX >= 40 && characterX <= 90) {
      localStorage.setItem("page", "start");
      characterX = 600;
    } else if (e.code === "Space" && characterX >= 690 && characterX <= 740) {
      localStorage.setItem("page", "hall");
      characterX = 50;
    }
  } else if (page === "hall") {
    if (e.code === "Space" && characterX >= 40 && characterX <= 70) {
      localStorage.setItem("page", "livingRoom");
      characterX = 690;
    } else if (e.code === "Space" && characterX >= 220 && characterX <= 250) {
      localStorage.setItem("page", "bedroom");
      characterX = 50;
    } else if (e.code === "Space" && characterX >= 380 && characterX <= 410) {
      localStorage.setItem("page", "kitchen");
      characterX = 50;
    } else if (e.code === "Space" && characterX >= 530 && characterX <= 560) {
      localStorage.setItem("page", "bathroom");
      characterX = 50;
    } else if (e.code === "Space" && characterX >= 690 && characterX <= 730) {
      localStorage.setItem("page", "trophyRoom");
      characterX = 50;
    }
  } else if (page === "bedroom") {
    if (e.code === "Space" && characterX >= 40 && characterX <= 70) {
      localStorage.setItem("page", "hall");
      characterX = 230;
    }
  } else if (page === "trophyRoom") {
    if (e.code === "Space" && characterX >= 40 && characterX <= 70) {
      localStorage.setItem("page", "hall");
      characterX = 720;
    }
  } else if (page === "kitchen") {
    if (e.code === "Space" && characterX >= 40 && characterX <= 70) {
      localStorage.setItem("page", "hall");
      characterX = 390;
    }
  } else if (page === "bathroom") {
    if (e.code === "Space" && characterX >= 40 && characterX <= 70) {
      localStorage.setItem("page", "hall");
      characterX = 570;
    }
  }
});
