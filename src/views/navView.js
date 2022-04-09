import { html } from "../lib.js";

export const navTemplate=(user)=>html`
<section class="navbar-dashboard">
            <a href="/">Home</a>

            <div>
              <a class="button" href="/catalog">Catalog</a>
              <a class="button" href="/search">Search</a>
              ${user ? html`  <a class="button" id="logoutBtn" href="#">Logout</a>`: html`<a class="button" href="/login">Login</a>
              <a class="button" href="/register">Register</a>`}
              
            </div>
 </section>

`