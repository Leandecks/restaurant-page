function menu() {

    const content = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.textContent = "Our Cool Restaurant's Menu";

    const p = document.createElement("p");
    p.textContent = "Our Cool Restaurant is really very cool Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut autem consectetur consequatur delectus dolore doloremque ducimus ea, earum eius error expedita fuga, harum, ipsum iure laborum minus molestias neque nobis nulla numquam obcaecati odio placeat praesentium quasi quidem quos repellendus rerum sit suscipit tempore ut voluptas voluptate? Animi aspernatur consequatur culpa, dignissimos expedita explicabo fugit inventore iusto, natus necessitatibus nesciunt nisi nobis quas, quibusdam quo repellendus sapiente sed. Amet commodi eius est incidunt ipsa laudantium recusandae velit voluptate voluptatum. Dolore enim hic impedit ipsam magni necessitatibus nemo non numquam pariatur perferendis quod saepe similique sint velit vitae voluptatibus, voluptatum.";

    content.appendChild(h1);
    content.appendChild(p);

}

export { menu };