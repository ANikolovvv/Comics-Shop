import { html } from "../lib.js";

export const templateDetails = (item,user) => html`
  <section id="details-page" class="details">
    <div class="comic-information">
      
      <p class="type">Title: ${item.title}</p>
      <p class="img"><img src=${item.image} /></p>
     
    </div>
    <div class="comic-description">
      <h3>Description:</h3>
      <p>${item.description}</p>
      ${user ? html`<a class="a-details" href="/">Buy</a>`:''}
    </div>
  </section>
`;
