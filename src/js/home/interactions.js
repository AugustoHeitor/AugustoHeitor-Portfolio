import { characterX } from "./character.js"

let code 

window.document.addEventListener("keyup", (e)=>{
    code = e.code
})

export let tv = new Image();
tv.src = "./src/imgs/objects/tv.png";
tv.setAttribute("data-tv", "off")

export const turnOnTv = ()=>{
    if(characterX >= 340 && characterX <= 360 && code === "KeyZ"){
        if(tv.dataset.tv === "off"){
            tv.src = "./src/imgs/objects/tv2.png";
            tv.setAttribute("data-tv", "on")
        }else{
            tv.src = "./src/imgs/objects/tv.png";
            tv.setAttribute("data-tv", "off")
        }

        code = ""
    }
}