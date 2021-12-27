function pics() {
  let image = document.getElementById("image");
  let images = [
    "batman.jpg",
    "superman.jpg",
    "wolverine.jpg",
    "ironman.jpg",
    "spider-man.jpg",
  ];
  setInterval(function () {
    let random = Math.floor(Math.random() * 5);
    image.src = images[random];
  }, 800);
}
pics();
