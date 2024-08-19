let card = document.getElementById("card");

document.querySelector("#no").addEventListener("mouseover", function () {
    let width = window.innerWidth - 50;
    let height = window.innerHeight - 50;
  
    this.style.position = "absolute";
    this.style.top = Math.random() * width + "px";
    this.style.left = Math.random() * height + "px";
  });