
import {getMyPages } from "./requests.js";

import { templateCatalog } from "./views/catalogView.js";

export async function catalogPage(ctx) {
  const searchParams = new URLSearchParams(ctx.querystring);
  let page = Number(searchParams.get("page"));
  if(ctx.querystring===''){
    ctx.querystring='page1'
  }
  console.log(ctx.querystring)
  if(page===0 || page===3){
    page=1
  }
  console.log(page)
  let search = "";
  let numberOfComics = Object.values(await getMyPages(search, page));
  
  ctx.render(templateCatalog(numberOfComics, page));
}

export const minPage = (current) => Math.max(1, current - 1);
export const nextPage = (current) => current + 1;
