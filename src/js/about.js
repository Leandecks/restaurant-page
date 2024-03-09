import Chef from "./../assets/img/about/chef.jpg";
import OldRestaurant from "./../assets/img/about/old-restaurant.jpg";

function about() {

    const content = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.textContent = "About Our Cool Restaurant";
    h1.id = "about-h1";

    const wrapper = document.createElement("div");

    const img = document.createElement("img");
    img.src = Chef;
    wrapper.appendChild(img);

    const p = document.createElement("p");
    p.textContent = "Our Cool Restaurant is really very cool Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut autem consectetur consequatur delectus dolore doloremque ducimus ea, earum eius error expedita fuga, harum, ipsum iure laborum minus molestias neque nobis nulla numquam obcaecati odio placeat praesentium quasi quidem quos repellendus rerum sit suscipit tempore ut voluptas voluptate? Animi aspernatur consequatur culpa, dignissimos expedita explicabo fugit inventore iusto, natus necessitatibus nesciunt nisi nobis quas, quibusdam quo repellendus sapiente sed. Amet commodi eius est incidunt ipsa laudantium recusandae velit voluptate voluptatum. Dolore enim hic impedit ipsam magni necessitatibus nemo non numquam pariatur perferendis quod saepe similique sint velit vitae voluptatibus, voluptatum.";
    wrapper.appendChild(p);

    content.appendChild(h1);
    content.appendChild(wrapper);

    const wrapper2 = document.createElement("div");

    const p2 = document.createElement("p");
    p2.textContent = "Our Cool Restaurant is really very cool Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut autem consectetur consequatur delectus dolore doloremque ducimus ea, earum eius error expedita fuga, harum, ipsum iure laborum minus molestias neque nobis nulla numquam obcaecati odio placeat praesentium quasi quidem quos repellendus rerum sit suscipit tempore ut voluptas voluptate? Animi aspernatur consequatur culpa, dignissimos expedita explicabo fugit inventore iusto, natus necessitatibus nesciunt nisi nobis quas, quibusdam quo repellendus sapiente sed. Amet commodi eius est incidunt ipsa laudantium recusandae velit voluptate voluptatum. Dolore enim hic impedit ipsam magni necessitatibus nemo non numquam pariatur perferendis quod saepe similique sint velit vitae voluptatibus, voluptatum.";
    wrapper2.appendChild(p2);

    const img2 = document.createElement("img");
    img2.src = OldRestaurant;
    wrapper2.appendChild(img2);

    content.appendChild(h1);
    content.appendChild(wrapper);
    content.appendChild(wrapper2);

}

export { about };