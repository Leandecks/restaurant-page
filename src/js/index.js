import "../sass/style.sass";
import { home } from "./home";
import { menu } from "./menu";
import { about } from "./about";

const clearContent = () => document.querySelector("#content").textContent = "";

function loader () {

    home();

    const homeButton = document.querySelector("#home-btn");
    const menuButton = document.querySelector("#menu-btn");
    const aboutButton = document.querySelector("#about-btn");

    homeButton.addEventListener("click", () => {
        clearContent();
        home();
    });

    menuButton.addEventListener("click", () => {
        clearContent();
        menu();
    });

    aboutButton.addEventListener("click", () => {
        clearContent();
        about();
    });

}

loader();