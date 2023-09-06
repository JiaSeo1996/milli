window.addEventListener("load", () => {
    let audiobookSwiperImages = new Swiper("#index-content-audiobook > .image-wrap .swiper", {})

    let audiobookSwiperTexts = new Swiper("#index-content-audiobook > .text-wrap .swiper", {
        effect: "fade",
        simulateTouch: false,
        thumbs: {
            swiper: audiobookSwiperImages
        },
        pagination: {
            el: "#index-content-audiobook .pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            }
        }
    })

    let viewerSwiperImages = new Swiper("#index-content-viewer > .image-wrap .swiper", {})

    let viewerSwiperTexts = new Swiper("#index-content-viewer > .text-wrap .swiper", {
        effect: "fade",
        simulateTouch: false,
        thumbs: {
            swiper: viewerSwiperImages
        },
        pagination: {
            el: "#index-content-viewer .pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            }
        }
    })

})
