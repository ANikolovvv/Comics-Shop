import { html} from "./lib.js";
import { getData } from "./requests.js";
import { templateDetails } from "./views/detailsView.js";



export async function detailsPage(ctx) {
   const item= await getData(ctx.params.id)
   const user = JSON.parse(localStorage.getItem("user"));
  ctx.render(templateDetails(item,user));
  //console.log("details", item);
  //console.log(user._id);
 
}


