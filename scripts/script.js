var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const clearPage = (idBlock) => {
    $('.container__main').hide();
    $(`#${idBlock}`).show();
    $('.btn_menu').removeClass("glitched cyberpunk");
    $(`.btn_menu[data-content='${idBlock}']`).addClass("glitched cyberpunk");
    console.log($(`.btn_menu[data-content='${idBlock}']`));
}

clearPage(`content_1`);

$('.btn_menu').click((e) => {
    const content_id = e.target.dataset.content;
    clearPage(content_id);
});