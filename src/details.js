import { html} from "./lib.js";
import { getData } from "./requests.js";
import { templateDetails } from "./views/detailsView.js";



export async function detailsPage(ctx) {
   const item= await getData(ctx.params.id)
  
  ctx.render(templateDetails(item));
  //console.log("details", item);
  //console.log(user._id);
 
}


