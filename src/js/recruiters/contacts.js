/*Imports*/
import { contacts } from "./database.js";

/*Event to add contacts on pages*/
document.addEventListener("DOMContentLoaded", () => {
  let list = document.querySelector("#list-contacts");
  console.log("s")
  contacts.map((elem) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", `${elem.href}`);
    a.setAttribute("target", "_blank");
    a.innerText = elem.name;
    li.append(a);
    list.append(li);
  });
});
