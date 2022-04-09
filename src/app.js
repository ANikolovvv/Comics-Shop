import { render, page } from "./lib.js";
import { catalogPage } from "./catalog.js";
import { detailsPage } from "./details.js";
import { homePage } from "./home.js";
import { searchPage } from "./search.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { resLogout } from "./requests.js";

const root = document.querySelector("#site-content");
document.getElementById("logoutBtn").addEventListener("click", logoutUser);

userNav()
page(decorateContex);
page("/", homePage);
page("/login",loginPage);
page("/register",registerPage);
page("/search",searchPage);
page("/catalog", catalogPage);
page("/details/:id", detailsPage);

page.start();

function decorateContex(ctx, next) {
  ctx.render = (content) => render(content, root);

  next();
}

export function userNav() {
  const allNavBtn=Array.from(document.querySelectorAll("nav div a"));
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(allNavBtn)
   if(user){
       allNavBtn[2].style.display='inline-block';
       allNavBtn[3].style.display='none';
       allNavBtn[4].style.display='none';
   }else{
    allNavBtn[2].style.display='none';
    allNavBtn[3].style.display='inline-block';
    allNavBtn[4].style.display='inline-block';
   }

}

async function logoutUser() {
 const token = JSON.parse(localStorage.getItem("user"));
  await resLogout(token.accessToken);
  page.redirect("/catalog");
  userNav()
}
