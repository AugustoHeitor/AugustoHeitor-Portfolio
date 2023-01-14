//Andar do personagem

let floorRight = 1;
let floorLeft = 1;

addEventListener("keydown", (e) => {
  let positionX = parseInt(localStorage.getItem("positionX"));
  let character = document.getElementById("character");

  if (e.key === "ArrowLeft" && positionX > 10) {
    let x = positionX - 10;
    positionX = x;
    localStorage.setItem("positionX", positionX);

    character.style.left = `${x}px`;

    if (floorLeft === 1) {
      character.setAttribute("src", "./src/imgs/character/characterLeft1.png");
      floorLeft = 2;
    } else if (floorLeft === 2) {
      character.setAttribute("src", "./src/imgs/character/characterLeft2.png");
      floorLeft = 1;
    }
  }
  if (e.key === "ArrowRight" && positionX < 750) {
    let x = positionX + 10;
    positionX = x;
    localStorage.setItem("positionX", positionX);

    character.style.left = `${x}px`;

    if (floorRight === 1) {
      character.setAttribute("src", "./src/imgs/character/characterRight1.png");
      floorRight = 2;
    } else if (floorRight === 2) {
      character.setAttribute("src", "./src/imgs/character/characterRight2.png");
      floorRight = 1;
    }
  }
});

addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft") {
    character.setAttribute(
      "src",
      "./src/imgs/character/characterAnimationLeft.gif"
    );
  }

  if (e.key === "ArrowRight") {
    character.setAttribute(
      "src",
      "./src/imgs/character/characterAnimationRight.gif"
    );
  }
});
