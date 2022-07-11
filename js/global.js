$(document).ready(function () {
  $("#toggle").click(function () {
    $("ul").toggleClass("open");
  });

  const carouselSlide = document.querySelector(".carousel-slide");
  const carouselImages = document.querySelectorAll(".carousel-slide img");

  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");

  let counter = 1;

  var size = 500;

  if (window.screen.width * window.devicePixelRatio < 768) {
    size = 40;
  }

  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  const activeSlide = carouselSlide.querySelector("[data-active]");
  console.log("Primeiro contador: " + counter);
  /*Funcionameto dos botões*/
  nextBtn.addEventListener("click", () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";

    carouselImages[counter].dataset.active = false;
    counter = counter + 1;
    carouselImages[counter].dataset.active = true;

    carouselSlide.style.transform = "translateX(" + counter * -size + "px)";
  });
  prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselImages[counter].dataset.active = false;
    counter = counter - 1;
    carouselImages[counter].dataset.active = true;
    carouselSlide.style.transform = "translateX(" + counter * -size + "px)";
  });

  carouselSlide.addEventListener("transitionend", () => {
    if (carouselImages[counter].id === "lastFoto") {
      carouselSlide.style.transition = "none";
      counter = carouselImages.length - 2;
      carouselImages[1].dataset.active = false;
      carouselImages[0].dataset.active = false;
      carouselImages[carouselImages.length - 2].dataset.active = true;
      carouselSlide.style.transform = "translateX(" + counter * -size + "px)";
    }

    if (carouselImages[counter].id === "firstFoto") {
      carouselSlide.style.transition = "none";
      counter = carouselImages.length - counter;
      carouselImages[carouselImages.length - 2].dataset.active = false;
      carouselImages[carouselImages.length - 1].dataset.active = false;
      carouselImages[counter].dataset.active = true;
      carouselSlide.style.transform = "translateX(" + counter * -size + "px)";
    }
  });
});
