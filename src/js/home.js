import Icon from "../assets/img/home/restaurant.jpg";

function home() {

    const content = document.querySelector("#content");

    const img = new Image();
    img.src = Icon;

    const h1 = document.createElement("h1");
    h1.textContent = "Our Cool Restaurant";

    const h1Description = document.createElement("p");
    h1Description.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing.";

    const headings = document.createElement("div");
    headings.id = "headings";
    headings.appendChild(h1);
    headings.appendChild(h1Description);

    const hero = document.createElement("div");
    hero.id = "hero";
    hero.appendChild(headings);
    hero.appendChild(img);

    content.appendChild(hero);

}

export { home };