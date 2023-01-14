//Renderização das imagens por DOM.

export const pageLivingRoom = () => {
  let screen = document.getElementById("screen");
  let background = document.querySelector(".background");

  screen.removeChild(background);

  let page = `
                <div id="background-house" class="background pageTransition">
                    <img src="./src/imgs/character/characterAnimationRight.gif" id="character"/>
                    <img src="./src/imgs/objects/door.png" id="door-start-living-room"/>
                    <img src="./src/imgs/objects/window.png" id="window-living-room"/>
                    <img src="./src/imgs/objects/hack.png" id="hack-living-room"/>
                    <img src="./src/imgs/objects/tv.png" id="tv-living-room" data-status="false"/>
                    <img src="./src/imgs/objects/bookcase.png" id="bookcase-living-room">
                    <img src="./src/imgs/objects/door.png" id="door-hall-living-room"/>
                    <div class="plate" id="plate-living-room"><span>CORREDOR<span></div>
                <div/>
            `;

  screen.insertAdjacentHTML("beforeend", page);

  let tv = document.getElementById("tv-living-room");
  tv.addEventListener("click", () => {
    if (tv.dataset.status === "false") {
      tv.setAttribute("src", "./src/imgs/objects/tv.gif");
      tv.setAttribute("data-status", "true");
    } else if (tv.dataset.status === "true") {
      tv.setAttribute("src", "./src/imgs/objects/tv.png");
      tv.setAttribute("data-status", "false");
    }
  });
};

export const pageStart = () => {
  let screen = document.getElementById("screen");
  let background = document.querySelector(".background");

  screen.removeChild(background);

  let pageStart = `
        <div id="background-start" class="background pageTransition">
            <img src="./src/imgs/character/characterAnimationRight.gif" id="character"/>
        <div/>
    `;

  screen.insertAdjacentHTML("beforeend", pageStart);
};

export const pageHall = () => {
  let screen = document.getElementById("screen");
  let background = document.querySelector(".background");

  screen.removeChild(background);

  let page = `
        <div id="background-house" class="background pageTransition">
            <img src="./src/imgs/character/characterAnimationRight.gif" id="character"/>
            <img src="./src/imgs/objects/door.png" id="door-living-room-hall"/>
            <div class="plate" id="plate-living-room-hall"><span>SALA<span></div>
            <img src="./src/imgs/objects/door.png" id="door-kitchen-hall"/>
            <div class="plate" id="plate-kitchen-hall"><span>COZINHA<span></div>
            <img src="./src/imgs/objects/door.png" id="door-bedroom-hall"/>
            <div class="plate" id="plate-bedroom-hall"><span>QUARTO<span></div>
            <img src="./src/imgs/objects/door.png" id="door-bathroom-hall"/>
            <div class="plate" id="plate-bathroom-hall"><span>BANHEIRO<span></div>
            <img src="./src/imgs/objects/door.png" id="door-trophy-room-hall"/>
            <div class="plate" id="plate-trophy-room-hall"><span>TROFÉUS<span></div>
        <div/>
    `;

  screen.insertAdjacentHTML("beforeend", page);
};

export const pageBedroom = () => {
  let screen = document.getElementById("screen");
  let background = document.querySelector(".background");

  screen.removeChild(background);

  let page = `
        <div id="background-house" class="background pageTransition">
            <img src="./src/imgs/character/characterAnimationRight.gif" id="character"/>
            <img src="./src/imgs/objects/door.png" id="door-hall-bedroom"/>
            <div class="plate" id="plate-hall-bedroom"><span>CORREDOR<span></div>
            <img src="./src/imgs/objects/desk.png" id="desk-bedroom"> 
            <img src="./src/imgs/objects/computer.png" id="computer-bedroom"/>
            <img src="./src/imgs/objects/wardrobe.png" id="wardrobe-bedroom"/>
            <img src="./src/imgs/objects/bed.png" id="bed-bedroom"/>
            <img src="./src/imgs/objects/shelf.png" id="shelf-bedroom"/>
        <div/>
    `;

  screen.insertAdjacentHTML("beforeend", page);
};

export const pageTrophyRoom = () => {
  let screen = document.getElementById("screen");
  let background = document.querySelector(".background");

  screen.removeChild(background);

  let page = `
        <div id="background-house" class="background pageTransition">
            <img src="./src/imgs/character/characterAnimationRight.gif" id="character"/>
            <img src="./src/imgs/objects/door.png" id="door-hall-trophy-room"/>
            <div class="plate" id="plate-hall-trophy-room"><span>CORREDOR<span></div>
            <div class="trophy-frame" id="frame-html-trophy-room"><img src="./src/imgs/technologies/html.png" class="technologie-trophy-room"/></div>
            <div class="trophy-frame" id="frame-css-trophy-room"><img src="./src/imgs/technologies/css.png" class="technologie-trophy-room"/></div>
            <div class="trophy-frame" id="frame-js-trophy-room"><img src="./src/imgs/technologies/js.png" class="technologie-trophy-room"/></div>
            <div class="trophy-frame" id="frame-react-trophy-room"><img src="./src/imgs/technologies/react.png" class="technologie-trophy-room"/></div>
            <div class="trophy-frame" id="frame-typescript-trophy-room"><img src="./src/imgs/technologies/typescript.png" class="technologie-trophy-room"/></div>
            <div class="trophy-frame" id="frame-git-trophy-room"><img src="./src/imgs/technologies/git.png" class="technologie-trophy-room"/></div>
            <div class="certificate-frame" id="frame-certificate-one-trophy-room"><img src="./src/imgs/objects/certificatePurple.png" class="certificate-trophy-room"/></div>
            <div class="certificate-frame" id="frame-certificate-two-trophy-room"><img src="./src/imgs/objects/certificateBlue.png" class="certificate-trophy-room"/></div>  
            <img src="./src/imgs/objects/moneyBag.png" id="money-bag-trophy-room"/>
            <img src="./src/imgs/objects/gold.png" id="gold-trophy-room"/>
        <div/>
    `;

  screen.insertAdjacentHTML("beforeend", page);
};
