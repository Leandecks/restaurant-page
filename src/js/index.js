import "../sass/home.sass";
import "../sass/menu.sass";
import "../sass/about.sass";

import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

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