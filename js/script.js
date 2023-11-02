

const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


let openModal = document.querySelector(".icon-open");
let closeModalBtn = document.querySelector(".close-content");
let modal = document.querySelector(".hero");
openModal.onclick = function () {
  document.querySelector("#modal-burger").style.display = "flex";
};
closeModalBtn.onclick = function () {
  document.querySelector("#modal-burger").style.display = "none";
};
window.onclick = function (e) {
  if (e.target === modal) {
    document.querySelector("#modal-burger").style.display = "none";
  }
};
