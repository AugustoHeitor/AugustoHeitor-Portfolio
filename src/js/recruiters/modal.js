document.addEventListener("DOMContentLoaded", () => {
  let help = document.querySelector("#help");

  createModal();

  help.addEventListener("click", () => {
    createModal();
  });
});

const createModal = () => {
  let body = document.querySelector("body");

  let modal = `
        <div id="modal-help">
            <span id="close-modal-help">X</span>
            <div id="container-text-modal-help">
                <div id="container-recruiters">
                <img src="./src/imgs/objects/arrowRight.png" alt="arrow right" id="arrow-right">
                <a id="anchor-recruiters" href="./src/pages/recruiters/index.html">Recrutadores</a>
                </div>
                <p>Olá, seja bem vindo ao meu portfólio</p>
                <p>O porfólio se encontra em construção nesse momento.</p>
                <p>Esse porfólio tem como objetivo criar uma interatividade entre o usuário e o projeto e ao mesmo tempo apresentar um pouco do meu trabalho de forma mais animada.</p>
                <p>Para andar com o personagem utilize as teclas seta para esquerda e seta para direita.</p>
                <p>Para navegar entre as páginas utilize a tecla espaço do seu teclado e fique na posição da porta.</p>
                <p>Para interagir com alguns objetos da casa utilize o mouse e clique com o clique esquerdo.</p>
            </div>
        </div>
    `;

  body.insertAdjacentHTML("beforeend", modal);

  let close = document.getElementById("close-modal-help");

  close.addEventListener("click", () => {
    let modal = document.getElementById("modal-help");
    body.removeChild(modal);
  });
};
