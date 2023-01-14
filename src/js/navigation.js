import {
  pageHall,
  pageLivingRoom,
  pageStart,
  pageBedroom,
  pageTrophyRoom,
} from "./pages.js";

//Verificando a posição do personagem e em qual página está localizado para iniciar a navegação.
addEventListener("keyup", (e) => {
  let page = localStorage.getItem("page");
  let positionX = parseInt(localStorage.getItem("positionX"));

  if (page === "start") {
    if (e.code === "Space" && positionX >= 610 && positionX <= 640) {
      localStorage.setItem("page", "livingRoom");
      localStorage.setItem("positionX", "60");

      pageLivingRoom();

      let character = document.getElementById("character");
      character.style.left = "60px";
    }
  } else if (page === "livingRoom") {
    if (e.code === "Space" && positionX >= 40 && positionX <= 90) {
      localStorage.setItem("page", "start");
      localStorage.setItem("positionX", "620");

      pageStart();

      let character = document.getElementById("character");
      character.style.left = "620px";
    } else if (e.code === "Space" && positionX >= 660 && positionX <= 720) {
      localStorage.setItem("page", "hall");
      localStorage.setItem("positionX", "50");

      pageHall();

      let character = document.getElementById("character");
      character.style.left = "50px";
    }
  } else if (page === "hall") {
    if (e.code === "Space" && positionX >= 40 && positionX <= 90) {
      localStorage.setItem("page", "livingRoom");
      localStorage.setItem("positionX", "690");

      pageLivingRoom();

      let character = document.getElementById("character");
      character.style.left = "690px";
    } else if (e.code === "Space" && positionX >= 360 && positionX <= 420) {
      localStorage.setItem("page", "bedroom");
      localStorage.setItem("positionX", "50");

      pageBedroom();

      let character = document.getElementById("character");
      character.style.left = "50px";
    } else if (e.code === "Space" && positionX >= 660 && positionX <= 720) {
      localStorage.setItem("page", "trophyRoom");
      localStorage.setItem("positionX", "50");

      pageTrophyRoom();

      let character = document.getElementById("character");
      character.style.left = "50px";
    }
  } else if (page === "bedroom") {
    if (e.code === "Space" && positionX >= 40 && positionX <= 90) {
      localStorage.setItem("page", "hall");
      localStorage.setItem("positionX", "360");

      pageHall();

      let character = document.getElementById("character");
      character.style.left = "360px";
    }
  } else if (page === "trophyRoom") {
    if (e.code === "Space" && positionX >= 40 && positionX <= 90) {
      localStorage.setItem("page", "hall");
      localStorage.setItem("positionX", "660");

      pageHall();

      let character = document.getElementById("character");
      character.style.left = "660px";
    }
  }
});
