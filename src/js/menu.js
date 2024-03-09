import Pizza from "../assets/img/menu/pizza.jpg";
import Pasta from "../assets/img/menu/pasta.jpg";
import Meatballs from "../assets/img/menu/meatballs.jpg";
import Fish from "../assets/img/menu/fish.jpg";

function menu() {

    const content = document.querySelector("#content");

//     Head

    const h1 = document.createElement("h1");
    h1.id = "menu-h1";
    h1.textContent = "Our Cool Restaurant's Menu";

    const p = document.createElement("p");
    p.id = "menu-p"
    p.textContent = "Our Cool Restaurant is really very cool Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut autem consectetur consequatur delectus dolore doloremque ducimus ea, earum eius error expedita fuga, harum, ipsum iure laborum minus molestias neque nobis nulla numquam obcaecati odio placeat praesentium quasi quidem quos repellendus rerum sit suscipit tempore ut voluptas voluptate? Animi aspernatur consequatur culpa.";

//     Main

    // Pizza
    const pizzaImage = document.createElement("img");
    pizzaImage.src = Pizza;
    pizzaImage.classList.add("menu-img");

    const pizzaParagraph = document.createElement("p");
    pizzaParagraph.textContent = "This is our tasty pizza. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur dignissimos dolorem necessitatibus placeat! Culpa ex molestias non rem veritatis.";

    const pizzaDiv = document.createElement("div");
    pizzaDiv.appendChild(pizzaImage);
    pizzaDiv.appendChild(pizzaParagraph);

    // Pasta
    const pastaImage = document.createElement("img");
    pastaImage.src = Pasta;
    pastaImage.classList.add("menu-img");

    const pastaParagraph = document.createElement("p");
    pastaParagraph.textContent = "This is our nice pasta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur dignissimos dolorem necessitatibus placeat! Culpa ex molestias non rem veritatis.";

    const pastaDiv = document.createElement("div");
    pastaDiv.appendChild(pastaParagraph);
    pastaDiv.appendChild(pastaImage);

    // Meatballs
    const meatballsImage = document.createElement("img");
    meatballsImage.src = Meatballs;
    meatballsImage.classList.add("menu-img");

    const meatballsParagraph = document.createElement("p");
    meatballsParagraph.textContent = "These are our amazing meatballs. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur dignissimos dolorem necessitatibus placeat! Culpa ex molestias non rem veritatis."

    const meatballsDiv = document.createElement("div");
    meatballsDiv.appendChild(meatballsImage);
    meatballsDiv.appendChild(meatballsParagraph);

    // Fish
    const fishImage = document.createElement("img");
    fishImage.src = Fish;
    fishImage.classList.add("menu-img");

    const fishParagraph = document.createElement("p");
    fishParagraph.textContent = "This is our fishy fish. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur dignissimos dolorem necessitatibus placeat! Culpa ex molestias non rem veritatis.";

    const fishDiv = document.createElement("div");
    fishDiv.appendChild(fishParagraph);
    fishDiv.appendChild(fishImage);

//  Push to DOM
    content.appendChild(h1);
    content.appendChild(p);
    content.appendChild(pizzaDiv);
    content.appendChild(pastaDiv);
    content.appendChild(meatballsDiv);
    content.appendChild(fishDiv);

}

export { menu };