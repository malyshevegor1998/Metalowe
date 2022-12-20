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
}

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('type');

clearPage(myParam);

$('.btn_menu').click((e) => {
    const content_id = e.target.dataset.content;
    // clearPage(content_id);
    document.location.href = `/pages/menu.html?type=${content_id}`;
});

const workModal = (event, state) => {
    event.preventDefault();
    if (state) {
        $('#modalSection').slideDown(500);
        $('body').css("overflow", "hidden");
    } else {
        $('#modalSection').slideUp(500);
        $('body').css("overflow", "auto");
    }
};

$('.btn_closeModal').click((e) => workModal(e, false));

$('#btn_openModal').click((e) => workModal(e, true));