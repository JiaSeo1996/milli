$(document).ready(() => {
    const buttonPlay = $("#index-objectbook > .section-inner > .poster > .button-play"),
        video = $("#index-objectbook > .section-inner > .poster > video");

    buttonPlay.click((e) => {
        $(e.currentTarget).hide(150);
        video.get(0).play();
        console.log(1)
    })

    video.on({
        ended: () => {
            buttonPlay.show(150);
        }
    })
})
