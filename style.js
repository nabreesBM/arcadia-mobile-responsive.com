const navbar =document.querySelector(".navbar");
document.querySelector('#menu').onclick = () =>{
    navbar.classList.toggle('active');
}
var swiper = new Swiper(".tesslider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });