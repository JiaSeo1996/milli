// $(document).ready(() => {

//         .done((result) => {
//             for (var i in result.documents) {
//                 let slide = `<div class="swiper-slide"><img src="${result.documents[i].thumbnail}"</div>`;
//
//                 if (i < 24) {
//                     $("#books-swiper-1 > .swiper-wrapper").append(slide);
//                 } else {
//                     $("#books-swiper-2 > .swiper-wrapper").append(slide);
//                 }
//             }
//
//             let booksSwiper1 = new Swiper("#books-swiper-1", {
//                 speed: 3000,
//                 autoplay: {
//                     delay: 0,
//                     disableOnInteraction: false
//                 },
//                 slidesPerView: 12,
//                 spaceBetween: 32,
//                 loop: true,
//                 simulateTouch: false
//             });
//
//             let booksSwiper2 = new Swiper("#books-swiper-2", {
//                 speed: 3000,
//                 autoplay: {
//                     delay: 0,
//                     disableOnInteraction: false
//                 },
//                 slidesPerView: 12,
//                 spaceBetween: 32,
//                 loop: true,
//                 simulateTouch: false
//             });
//         })
//
