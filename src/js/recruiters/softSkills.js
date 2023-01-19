import { softSkills } from "./database.js";

document.addEventListener("DOMContentLoaded", () => {
  let list = document.querySelector("#list-soft-skills");
  let body = document.querySelector("body");

  softSkills.map((elem) => {
    const li = document.createElement("li");
    li.setAttribute("class", "skill");
    li.innerText = elem.skill;

    li.addEventListener("click", (e) => {
      const skill = softSkills.find(
        (elem) => elem.skill === e.target.innerText
      );

      let modal = `
        <div id="modal-screen">
            <div class="modal-skills">
            <span id="close">X</span>
             <div>
              <h3>${skill.skill}</h3>
             </div>
              <p>${skill.about}</p>
            </div>
        </div>
    `;

      body.insertAdjacentHTML("beforeend", modal);

      let close = document.getElementById("close");

      close.addEventListener("click", () => {
        let modal = document.getElementById("modal-screen");
        body.removeChild(modal);
      });
    });

    list.append(li);
  });
});
