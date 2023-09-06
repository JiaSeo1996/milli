$(document).ready(() => {
    $("#index-qna .item").click((e) => {
        $(e.currentTarget).find("img").toggleClass("on");
        $(e.currentTarget).find(".answer").slideToggle(150);
    })
})
