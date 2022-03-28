// import Swiper, { Navigation } from 'swiper';

//     const swiper = new Swiper(".swiper", {
//         loop: true,

//         pagination: {
//           el: ".swiper-pagination",
//         },
//       });

 import Swiper, { Navigation } from 'swiper';

  const swiper = new Swiper(".swiper", {

   loop: true,


   modules: [Navigation],
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },   
  });