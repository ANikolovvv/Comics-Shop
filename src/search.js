import { html} from "./lib.js";
import { getMyPages } from "./requests.js";
import { templateSearch } from "./views/searchView.js";



export async function searchPage(ctx) {
  const user = JSON.parse(localStorage.getItem("user"));
  //let  items = await getAlbumSearch();
  let noData=false;
  ctx.render(templateSearch(onClick,noData));

  async function onClick(e) {
    e.preventDefault();
    const query = document.getElementById("search-input");
    const data = await getMyPages(query.value);
    query.value='';
    console.log(data)
    noData=true
    ctx.render(templateSearch(onClick,data,noData));
  }
  console.log("search");
}
