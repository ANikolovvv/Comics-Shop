import { render, page } from "./lib.js";
import { catalogPage } from "./catalog.js";
import { detailsPage } from "./details.js";
import { homePage } from "./home.js";
import { searchPage } from "./search.js";

const root = document.querySelector("#site-content");
//document.getElementById("logoutBtn").addEventListener("click", logoutUser);

userNav()
page(decorateContex);
page("/", homePage);
page("/search",searchPage);
page("/catalog", catalogPage);
page("/details/:id", detailsPage);

page.start();

function decorateContex(ctx, next) {
  ctx.render = (content) => render(content, root);

  next();
}

export function userNav() {
  const user = JSON.parse(localStorage.getItem("user"));
  // if (user) {
  //   const welcome=document.querySelector('#user span');
  //   welcome.textContent=`Welcome, ${user.email}`
  //   document.getElementById("user").style.display = "inline-block";
  //   document.getElementById("guest").style.display = "none";
  // } else {
  //   document.getElementById("user").style.display = "none";
  //   document.getElementById("guest").style.display = "inline-block";
  // }
}

async function logoutUser() {
 // const token = JSON.parse(localStorage.getItem("user"));
  //await resLogout(token.accessToken);
  page.redirect("/");
  userNav()
}
