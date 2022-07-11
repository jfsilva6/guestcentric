$(document).ready(function () {
  console.log("Estou aqui");
  $("i").click(function () {
    $("ul").toggleClass("open");
  });

  const carouselSlide = document.querySelector(".carousel-slide");
  const carouselImages = document.querySelectorAll(".carousel-slide img");

  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");

  let counter = 1;
  const size = carouselImages[0].clientWidth;
  const size2 = 500;

  carouselSlide.style.transform = "translateX(" + -size2 * counter + "px)";
  const activeSlide = carouselSlide.querySelector("[data-active]");
  console.log("Primeiro contador: " + counter);
  /*Funcionameto dos botões*/
  nextBtn.addEventListener("click", () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";

    carouselImages[counter].dataset.active = false;
    counter = counter + 1;
    carouselImages[counter].dataset.active = true;

    carouselSlide.style.transform = "translateX(" + counter * -size2 + "px)";
  });
  prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselImages[counter].dataset.active = false;
    counter = counter - 1;
    carouselImages[counter].dataset.active = true;
    carouselSlide.style.transform = "translateX(" + counter * -size2 + "px)";
    console.log(counter * -size);
  });

  carouselSlide.addEventListener("transitionend", () => {
    if (carouselImages[counter].id === "lastFoto") {
      carouselSlide.style.transition = "none";
      counter = carouselImages.length - 2;
      carouselImages[1].dataset.active = false;
      carouselImages[0].dataset.active = false;
      carouselImages[carouselImages.length - 2].dataset.active = true;
      carouselSlide.style.transform = "translateX(" + counter * -size2 + "px)";
    }

    if (carouselImages[counter].id === "firstFoto") {
      carouselSlide.style.transition = "none";
      counter = carouselImages.length - counter;
      carouselImages[carouselImages.length - 2].dataset.active = false;
      carouselImages[carouselImages.length - 1].dataset.active = false;
      carouselImages[counter].dataset.active = true;
      carouselSlide.style.transform = "translateX(" + counter * -size2 + "px)";
    }
  });

  console.log("ultimo contador: " + counter);
  /*
  const buttons = document.querySelectorAll("[data-carrousel-button]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      /*Se carregar next , +1, se carregar prev, -1 
      const offset = button.dataset.carrouselButton === "next" ? 1 : -1;
      const slides = button
        .closest("[data-carrousel]")
        .querySelector("[data-slides]");

      /*Vê qual é o slide que está com active
      const activeSlide = slides.querySelector("[data-active]");

      /*dependendo se se carregar no next (+1) ou no prev (-1) atualiza o novo indice para ser mostrado no meio
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;

      /*Para o slide ser em loop, se está no 1º slide e retroceder passa para o ultimo. Quando estiver no ultimo e avançar, avança para o 1º
      if (newIndex < 0) {
        newIndex = slides.children.length - 1;
      }

      if (newIndex >= slides.children.length) newIndex = 0;

      /*diz que o slide atual é o novo índice (para mostrar no meio)
      slides.children[newIndex].dataset.active = true;

      /*elimina o 'active' do slide anterior que estava no meio
      delete activeSlide.dataset.active;
    });
  });*/
});
/*});*/
