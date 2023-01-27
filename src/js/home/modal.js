import { onSong } from "./character.js";

export let modalHelp = true;

document.addEventListener("DOMContentLoaded", () => {
  let help = document.querySelector("#open-modal");
  let body = document.querySelector("body");

  createModal();

  help.addEventListener("click", () => {
    modalHelp = true;
    onSong();
    body.style.overflowY = "auto";
    body.style.overflowX = "hidden";
    createModal();
  });
});

const createModal = () => {
  let body = document.querySelector("body");

  let modal = `
        <div id="modal-help">
            <div id="container-text-modal-help">
                <span id="close-modal-help">X</span>
                <div id="container-recruiters">
                <img src="./src/imgs/instructions/arrowRight.png" alt="arrow right" id="arrow-right">
                <a id="anchor-recruiters" href="./src/pages/recruiters/index.html">Recrutadores</a>
                </div>
                <p>Olá, seja bem-vindo ao meu portfólio interativo.</p>
                <h2>Instruções</h2>
                <div>
                <img src="./src/imgs/instructions/floor.png" alt="instructions" class="img-instructions">
                <p>Para andar basta direcionar o mouse para onde que ir e clicar com o botão "ESQUERDO" do mouse.</p>
                <img src="./src/imgs/instructions/navigation.png" alt="instructions" class="img-instructions">
                <p>Para abrir a porta basta pressionar a tecla "SPACE" do seu teclado.</p>
                <img src="./src/imgs/instructions/interaction.png" alt="instructions" class="img-instructions">
                <p>Para interagir com alguns objetos, basta pressionar a tecla "Z" do seu teclado.</p>
                <img src="./src/imgs/instructions/mouse.png" alt="instructions" class="img-instructions">
                <p>Para interagir com alguns objetos, basta clicar com o botão "ESQUERDO" do mouse.</p>
                <img src="./src/imgs/instructions/closeModal.png" alt="instructions" class="img-instructions">
                <p>Para iniciar o projeto interativo basta fechar o modal, clicando com o botão "ESQUERDO" do mouse.</p>
                </div>
            </div>
        </div>
    `;

  body.insertAdjacentHTML("beforeend", modal);

  let close = document.getElementById("close-modal-help");

  close.addEventListener("click", () => {
    let modal = document.getElementById("modal-help");
    modalHelp = false;
    onSong();
    body.removeChild(modal);
    window.scrollBy(-800, -1300);
    body.style.overflow = "hidden";
  });
};
