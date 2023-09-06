$(document).ready(() => {
    //섹션 불러오기
    const intro = $("#index-intro"),
        books = $("#index-books"),
        objectbook = $("#index-objectbook"),
        unlimited = $("#index-unlimited"),
        bestseller = $("#index-bestseller"),
        reading = $("#index-reading"),
        price = $("#index-price"),
        content = $("#index-content"),
        review = $("#index-review"),
        qna = $("#index-qna");

    //intro는 최상단에 위치해 문서 로드 시 바로 이벤트 실행되야 함.
    intro.addClass("on");

    if (books.offset().top < $(window).height()) {
        books.addClass("on");
    }

    if (objectbook.offset().top < $(window).height()) {
        objectbook.addClass("on");
    }

    let last_scrollTop = 0;
    $(window).scroll((e) => {
        let now_scrollTop = $(e.currentTarget).scrollTop(),
            windowHeight = $(e.currentTarget).height();

        if (now_scrollTop > last_scrollTop) {

            if (now_scrollTop > intro.offset().top + intro.outerHeight()) {
                intro.removeClass("on");
            }

            if (now_scrollTop >= books.offset().top - windowHeight && now_scrollTop <= books.offset().top + books.outerHeight()) {
                books.addClass("on");
            } else {
                books.removeClass("on");
            }

            if (now_scrollTop >= objectbook.offset().top - windowHeight && now_scrollTop <= objectbook.offset().top + objectbook.outerHeight()) {
                objectbook.addClass("on");
            } else {
                objectbook.removeClass("on");
            }

            if (now_scrollTop >= unlimited.offset().top - windowHeight && now_scrollTop <= unlimited.offset().top + unlimited.outerHeight()) {
                unlimited.addClass("on");
            } else {
                unlimited.removeClass("on");
            }

            if (now_scrollTop >= $("#index-unlimited .item-wrap:nth-of-type(1) > .list").offset().top - windowHeight) {
                $("#index-unlimited .item-wrap:nth-of-type(1) > .list").stop().animate({opacity: 1}, 150, "linear");
            }

            if (now_scrollTop >= $("#index-unlimited .item-wrap:nth-of-type(2) > .list").offset().top - windowHeight) {
                $("#index-unlimited .item-wrap:nth-of-type(2) > .list").stop().animate({opacity: 1}, 150, "linear");
            }

            if (now_scrollTop >= $("#index-unlimited .item-wrap:nth-of-type(3) > .list").offset().top - windowHeight) {
                $("#index-unlimited .item-wrap:nth-of-type(3) > .list").stop().animate({opacity: 1}, 150, "linear");
            }

            if (now_scrollTop >= bestseller.offset().top - windowHeight && now_scrollTop <= bestseller.offset().top + bestseller.outerHeight()) {
                bestseller.addClass("on");
            } else {
                bestseller.removeClass("on");
            }

            if (now_scrollTop >= $("#index-bestseller .item-wrap:first-of-type").offset().top - windowHeight) {
                $("#index-bestseller .item-wrap:first-of-type").stop().animate({opacity: 1}, 150, "linear");
            }

            if (now_scrollTop >= reading.offset().top - windowHeight && now_scrollTop <= reading.offset().top + reading.outerHeight()) {
                reading.addClass("on");
            } else {
                reading.removeClass("on");
            }

            if (now_scrollTop >= price.offset().top - windowHeight && now_scrollTop <= price.offset().top + price.outerHeight()) {
                price.addClass("on");
            } else {
                price.removeClass("on");
            }

            if (now_scrollTop >= content.offset().top - windowHeight && now_scrollTop <= content.offset().top + content.outerHeight()) {
                content.addClass("on");
            } else {
                content.removeClass("on");
            }

            if (now_scrollTop >= review.offset().top - windowHeight && now_scrollTop <= review.offset().top + review.outerHeight()) {
                review.addClass("on");
            } else {
                review.removeClass("on");
            }

        } else {

            if (now_scrollTop <= intro.offset().top + intro.outerHeight() && now_scrollTop >= intro.offset().top) {
                intro.addClass("on");
            }

            if (now_scrollTop <= books.offset().top + books.outerHeight() && now_scrollTop <= books.offset().top) {
                books.addClass("on");
            } else {
                books.removeClass("on");
            }

            if (now_scrollTop <= objectbook.offset().top + objectbook.outerHeight() && now_scrollTop <= objectbook.offset().top) {
                objectbook.addClass("on");
            } else {
                objectbook.removeClass("on");
            }

            if (now_scrollTop <= unlimited.offset().top + unlimited.outerHeight() && now_scrollTop <= unlimited.offset().top) {
                unlimited.addClass("on");
            } else {
                unlimited.removeClass("on");
            }

            if (now_scrollTop <= bestseller.offset().top + bestseller.outerHeight() && now_scrollTop <= bestseller.offset().top) {
                bestseller.addClass("on");
            } else {
                bestseller.removeClass("on");
            }

            if (now_scrollTop <= reading.offset().top + reading.outerHeight() && now_scrollTop <= reading.offset().top) {
                reading.addClass("on");
            } else {
                reading.removeClass("on");
            }

            if (now_scrollTop <= price.offset().top + price.outerHeight() && now_scrollTop <= price.offset().top) {
                price.addClass("on");
            } else {
                price.removeClass("on");
            }

            if (now_scrollTop <= content.offset().top + content.outerHeight() && now_scrollTop <= content.offset().top) {
                content.addClass("on");
            } else {
                content.removeClass("on");
            }

            if (now_scrollTop <= review.offset().top + review.outerHeight() && now_scrollTop <= review.offset().top) {
                review.addClass("on");
            } else {
                review.removeClass("on");
            }
        }
        last_scrollTop = now_scrollTop;
    })
})
