import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const inputName = document.querySelector(".input-name");

function hasValue() {
  const inputValue = inputName.value;
  if (inputValue) {
    inputName.classList.add("has-value");
  } else {
    inputName.classList.remove("has-value");
  }
}

inputName.addEventListener("blur", hasValue);

const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
