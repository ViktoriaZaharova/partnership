$('.btn-burger').click(function () {
    $('.overlay').fadeIn();
    $('.mobile-menu').fadeIn();
});

$('.btn-close').click(function () {
    $('.mobile-menu').fadeOut();
    $('.overlay').fadeOut();
});

$('.attention-block .btn-close').click(function (e) {
    e.preventDefault();
    $(this).parents('.attention-block').fadeOut();
});

$('.submenu-title').click(function () {
    // $('.submenu-item').removeClass('open');
    $(this).toggleClass('open');
    $(this).siblings('.submenu-dropDown').toggleClass('active');
});

// datetimepicker
$.datetimepicker.setLocale('ru');

$('.datetimepicker').datetimepicker({
    i18n: {
        de: {
            months: [
                'Январь', 'Февраль', 'Март', 'Апрель',
                'Май', 'Июнь', 'Июль', 'Август',
                'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
            ],
            dayOfWeek: [
                "Пн", "Вт", "Ср", "Чт",
                "Пт", "Сб", "Вс",
            ]
        }
    },
    timepicker: false,
    format: 'd.m.Y',
});


$('.period-val').click(function () {
    $('.overlay').fadeIn();
    $('.sorting-mobile__period').fadeIn();
});

$('.sorting-mobile__period .btn-close').click(function () {
    $('.sorting-mobile__period').fadeOut();
    $('.overlay').fadeOut();
});

$('.filter-val').click(function () {
    $('.overlay').fadeIn();
    $('.sorting-mobile__filter').fadeIn();
});

$('.sorting-mobile__filter .btn-close').click(function () {
    $('.sorting-mobile__filter').fadeOut();
    $('.overlay').fadeOut();
});

$('.grouping-val').click(function () {
    $('.overlay').fadeIn();
    $('.sorting-mobile__grouping').fadeIn();
});

$('.sorting-mobile__grouping .btn-close').click(function () {
    $('.sorting-mobile__grouping').fadeOut();
    $('.overlay').fadeOut();
});

$('.main-slider').slick({
    dots: true,
    appendDots: '.slider-nav',
    appendArrows: '.slider-nav',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});

$('.dropItem .header-item').click(function () {
    $(this).siblings('.dropDown-menu').fadeToggle();
});

$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});
