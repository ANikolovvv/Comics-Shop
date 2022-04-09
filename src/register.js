import { userNav } from "./app.js";
import { regUsers } from "./requests.js";
import { templateReg } from "./views/registerView.js";

export function registerPage(ctx) {
  console.log("reg");

  ctx.render(templateReg(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email").trim();
    const password = formData.get("password").trim();
    const rePass = formData.get("conf-pass").trim();
    const option = { email, password };

    try {
      if (email === "" || password !== rePass || password === "") {
        e.target.reset();
        throw new Error("Password dont match or wrong email!");
      }
      const ok = await regUsers(option);
      e.target.reset();
      userNav();
      ctx.page.redirect("/catalog");
    } catch (error) {
      e.target.reset();
      alert(error.message);
      console.log(error.message);
    }
  }
}
