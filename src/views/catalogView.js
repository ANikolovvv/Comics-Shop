import { minPage, nextPage } from "../catalog.js";
import { html } from "../lib.js";
export const templateCatalog = (all, page) => html`<section>
  <h1>Catalog</h1>

  <div class="mainDiv">${all.map((x) => templateCart(x))}</div>
  <nav class="paginati" aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="/catalog?page=${minPage(page)}">Previous</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="/catalog?page=1">1</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="/catalog?page=2">2</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="/catalog?page=${nextPage(page)}">Next</a>
      </li>
    </ul>
  </nav>
</section> `;

const templateCart = (item) => html`
   <div class="card" style="width: 10rem;">
    <img src=${item.image} class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-title">${item.title}</p>
      <p class="card-text"><p>Price: ${item.price}$</p>
      Universe: ${item.universe}
      </p>
      <a href="/details/${item._id}" class="btn btn-primary">Buy!</a>
    </div>
  </div>
`;
