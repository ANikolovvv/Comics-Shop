
import { templateHome } from "./views/homeView.js";

export async function homePage(ctx) {

    const user = JSON.parse(localStorage.getItem("user"));
    ctx.render(templateHome());
    function pics() {
        let image = document.getElementById("image");
        console.log(image)
        let images = [
          "/images/batman.jpg",
          "/images/superman.jpg",
          "/images/wolverine.jpg",
          "/images/ironman.jpg",
          "/images/spider-man.jpg",
        ];
        //image.src = images["./images/spider-man.jpg"];
        setInterval(function () {
          let random = Math.floor(Math.random() * 5);
          image.src = images[random];
        }, 800);
      }
      pics();
    console.log("home");
   
  }
  