import { userNav } from "./app.js";
import { onLogin } from "./requests.js";
import { templateLogin } from "./views/loginView.js";


export function loginPage(ctx) {
    console.log("login");
  
    ctx.render(templateLogin(onSubmit));
  
    async function onSubmit(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const email = formData.get("email").trim();
      const password = formData.get("password").trim();
      const option = { email, password };
      const ok = await onLogin(option);
  
      try {
        if (ok.status === 403|| password==='' || email==='') {
          e.target.reset();
          throw new Error("Wrong email or password");
        }
        e.target.reset();
        userNav();
        ctx.page.redirect("/catalog");
      } catch (error) {
        alert(error.message);
        e.target.reset();
       
      }
    }
  }