import { html} from "../lib.js";

export const templateSearch = (onClick,data,noData) => html`
<section id="searchPage">
  <h1>Search by Name</h1>

  <div class="search">
    <input
      id="search-input"
      type="text"
      name="search"
      placeholder="Enter desired comics's name"
    />
    <button @click=${onClick} class="button-list">Search</button>
  </div>

  <h2 id="h2-search">Results:</h2>
   ${noData? html` <div>
   ${data.length > 0 ? data.map(x=>templateCart(x)): html`<p id="no">No result</p>`}  
   </div>`:''}
  
   
</section>
`;
const templateCart = (item) => html`
   <div class="card-search" style="width: 10rem;">
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