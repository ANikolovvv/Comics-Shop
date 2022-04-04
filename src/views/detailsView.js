import { html } from "../lib.js";

export const templateDetails = (item) => html`
  <section id="details-page" class="details">
    <div class="comic-information">
      
      <p class="type">Title: ${item.title}</p>
      <p class="img"><img src=${item.image} /></p>
     
    </div>
    <div class="comic-description">
      <h3>Description:</h3>
      <p>${item.description}</p>
      <a class="a-details" href="/edit/${item._id}">Buy</a>
    </div>
  </section>
`;
