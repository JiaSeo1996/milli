$(document).ready(() => {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        headers: {
            Authorization: "KakaoAK a3a1490ac19313cf79a482f4d55eb9d1"
        },
        data: {
            query: "동화",
            sort: "latest",
            size: 48
        }
    })
        .done((result) => {
            for (let i in result.documents) {
                let slide = `<div class="swiper-slide"><img src="${result.documents[i].thumbnail}"</div>`;

                if (i < 24) {
                    $("#index-books-swiper-1 > .swiper-wrapper").append(slide);
                } else {
                    $("#index-books-swiper-2 > .swiper-wrapper").append(slide);
                }
            }

            let booksSwiper1 = new Swiper("#index-books-swiper-1", {
                speed: 5000,
                slidesPerView: 12,
                spaceBetween: 24,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false
                },
                loop: true,
                simulateTouch: false
            })

            let booksSwiper2 = new Swiper("#index-books-swiper-2", {
                speed: 5000,
                slidesPerView: 12,
                spaceBetween: 24,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false
                },
                loop: true,
                simulateTouch: false
            })
        })
})


