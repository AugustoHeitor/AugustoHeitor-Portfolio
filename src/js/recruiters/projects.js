/*Imports*/
import { projects } from "./database.js";

/*Event to add projects on pages*/
document.addEventListener("DOMContentLoaded", () => {
  let list = document.querySelector("#list-projects");

  projects.map((elem) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", `${elem.href}`);
    a.setAttribute("target", "_blank");
    a.innerText = elem.name;
    li.append(a);
    list.append(li);
  });
});
