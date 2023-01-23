const productSwiperMini = new Swiper('.product-card__slider-mini', {
    // Optional parameters
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 5,
    slidesPerView: 5,
    loopedSlides: 5,
    navigation: {
        nextEl: '.product-card__next-mini',
        prevEl: '.product-card__prev-mini',
    },
});
const productSwiper = new Swiper('.product-card__slider-main', {
    // Optional parameters
    direction: 'horizontal',
    speed: 500,
    spaceBetween: 30,
    grabCursor: true,
    loopedSlides: 5,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    thumbs: {
        swiper: productSwiperMini,
    },
});
const productSwiperMini1 = new Swiper('.product-card__slider-mini-1', {
    // Optional parameters
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 5,
    slidesPerView: 5,
    loopedSlides: 5,
    navigation: {
        nextEl: '.product-card__next-mini',
        prevEl: '.product-card__prev-mini',
    },
});
const productSwiper1 = new Swiper('.product-card__slider-main-1', {
    // Optional parameters
    direction: 'horizontal',
    speed: 500,
    spaceBetween: 30,
    grabCursor: true,
    loopedSlides: 5,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    thumbs: {
        swiper: productSwiperMini1,
    },
});
const productSwiperMini2 = new Swiper('.product-card__slider-mini-2', {
    // Optional parameters
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 5,
    slidesPerView: 5,
    loopedSlides: 5,
    navigation: {
        nextEl: '.product-card__next-mini',
        prevEl: '.product-card__prev-mini',
    },
});
const productSwiper2 = new Swiper('.product-card__slider-main-2', {
    // Optional parameters
    direction: 'horizontal',
    speed: 500,
    spaceBetween: 30,
    grabCursor: true,
    loopedSlides: 5,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    thumbs: {
        swiper: productSwiperMini2,
    },
});
const productSwiperMini3 = new Swiper('.product-card__slider-mini-3', {
    // Optional parameters
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 5,
    slidesPerView: 5,
    loopedSlides: 5,
    navigation: {
        nextEl: '.product-card__next-mini',
        prevEl: '.product-card__prev-mini',
    },
});
const productSwiper3 = new Swiper('.product-card__slider-main-3', {
    // Optional parameters
    direction: 'horizontal',
    speed: 500,
    spaceBetween: 30,
    grabCursor: true,
    loopedSlides: 5,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    thumbs: {
        swiper: productSwiperMini3,
    },
});
const productSwiperMini4 = new Swiper('.product-card__slider-mini-4', {
    // Optional parameters
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 5,
    slidesPerView: 5,
    loopedSlides: 5,
    navigation: {
        nextEl: '.product-card__next-mini',
        prevEl: '.product-card__prev-mini',
    },
});
const productSwiper4 = new Swiper('.product-card__slider-main-4', {
    // Optional parameters
    direction: 'horizontal',
    speed: 500,
    spaceBetween: 30,
    grabCursor: true,
    loopedSlides: 5,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    thumbs: {
        swiper: productSwiperMini4,
    },
});
const productSwiperMini5 = new Swiper('.product-card__slider-mini-5', {
    // Optional parameters
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 5,
    slidesPerView: 5,
    loopedSlides: 5,
    navigation: {
        nextEl: '.product-card__next-mini',
        prevEl: '.product-card__prev-mini',
    },
});
const productSwiper5 = new Swiper('.product-card__slider-main-5', {
    // Optional parameters
    direction: 'horizontal',
    speed: 500,
    spaceBetween: 30,
    grabCursor: true,
    loopedSlides: 5,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    thumbs: {
        swiper: productSwiperMini5,
    },
});
const productSwiperMini6 = new Swiper('.product-card__slider-mini-6', {
    // Optional parameters
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 5,
    slidesPerView: 5,
    loopedSlides: 5,
    navigation: {
        nextEl: '.product-card__next-mini',
        prevEl: '.product-card__prev-mini',
    },
});
const productSwiper6 = new Swiper('.product-card__slider-main-6', {
    // Optional parameters
    direction: 'horizontal',
    speed: 500,
    spaceBetween: 30,
    grabCursor: true,
    loopedSlides: 5,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    thumbs: {
        swiper: productSwiperMini6,
    },
});
const swiperAction = new Swiper('.action__slider', {
    // Optional parameters
    direction: 'horizontal',
    speed: 500,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 3,

});
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("product-card__content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("product-card-body__colors-color-box");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
function openExtra(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("extra__content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("filters-extra__btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
document.getElementById("defaultOpens").click();
const images = document.querySelectorAll('img');
const options = {
    root: null,
    threshold: 0.1,
};
function handleImg(myImg, observer) {
    myImg.forEach(myImgSingle => {
        if (myImgSingle.intersectionRatio > 0) {
            loadImage(myImgSingle.target);
        }
    })
}
function loadImage(image) {
    image.src = image.getAttribute('data');
}
const observer = new IntersectionObserver(handleImg, options);
images.forEach(img => {
    observer.observe(img);
});

// const swiperCard = new Swiper('.product__slider', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     speed: 500,
//     spaceBetween: 0,
//     grabCursor: true,
//     pagination: {
//         el: '.product__pagination,.product__pagination-color',
//         clickable: true,
//         type: 'bullets',
//     },
//     autoplay: {
//         delay: 5000,
//     },
// });
$(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top < 55) $(".mid-header").removeClass('fixed');
    else $(".mid-header").addClass('fixed');
});
$(".menu-btn").click(function (event) {
    $('body').toggleClass('lock');
});
let menuBtn = document.querySelector('.menu-btn');
let menus = document.querySelector('.menus-btn');
let menu = document.querySelector('.top-header__menu');
let menuSecond = document.querySelector('.top-header__info');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    menuSecond.classList.toggle('active');
});
menus.addEventListener('click', function () {
    menus.classList.toggle('active');
    menu.classList.toggle('active');
    menuSecond.classList.toggle('active');
});
let inputIcon = document.querySelector('.mid-header__find-icon');
let input = document.querySelector('.mid-header__find-hiden');
inputIcon.addEventListener('click', function () {
    inputIcon.classList.toggle('active');
    input.classList.toggle('active');
});
let showMoreBtn = document.querySelector('.product-card-body__features-btn');
let showMore = document.querySelector('.product-card-body__item-hiden');
showMoreBtn.addEventListener('click', function () {
    showMoreBtn.classList.toggle('active');
    showMore.classList.toggle('active');
});
$(document).ready(function () {
    $.each($('.question__form-accept'), function (index, val) {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('active');
        }
    });
    $(document).on('click', '.question__form-accept', function (event) {
        if ($(this).hasClass('active')) {
            $(this).find('input').prop('checked', false);
        } else {
            $(this).find('input').prop('checked', true);
        }
        $(this).toggleClass('active');

        return false;
    });
});
$(".bott-header__title").on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {
        $(this).next().slideUp("easeOutExpo");
        $(this).removeClass("active");
    } else {
        $(".bott-header__title").removeClass('active');
        $('.bott-header__list').slideUp("easeOutExpo");
        $(this).next(".bott-header__list");
        $(this).addClass("active");
        $(this).next().slideDown("easeOutExpo");
    }
    $(document).on('click', function (e) {
        if (!$(e.target).closest(".bott-header__title").length) {
            $('.bott-header__title').removeClass('active');
            $('.bott-header__list').slideUp("easeOutExpo");
        }
        e.stopPropagation();
    });
});
$(".top-header__element-kitchen,.top-header__element-livingroom,.top-header__element-bedroom,.top-header__element-triplewaredrope,.top-header__element-doublewaredrope,.top-header__element-bunkbed,.top-header__element-diningroom,.top-header__element-doublesofa").on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {
        $(this).next().slideUp("easeOutExpo");
        $(this).removeClass("active");
    } else {
        $(".top-header__element-kitchen,.top-header__element-livingroom,.top-header__element-bedroom,.top-header__element-triplewaredrope,.top-header__element-doublewaredrope,.top-header__element-bunkbed,.top-header__element-diningroom,.top-header__element-doublesofa").removeClass('active');
        $('.top-header__content-kitchen,.top-header__content-livingroom,.top-header__content-bedroom,.top-header__content-triplewaredrope,.top-header__content-doublewaredrope,.top-header__content-bunkbed,.top-header__content-diningroom,.top-header__content-doublesofa').slideUp("easeOutExpo");
        $(this).next(".top-header__content-kitchen,.top-header__content-livingroom,.top-header__content-bedroom,.top-header__content-triplewaredrope,.top-header__content-doublewaredrope,.top-header__content-bunkbed,.top-header__content-diningroom,.top-header__content-doublesofa");
        $(this).addClass("active");
        $(this).next().slideDown("easeOutExpo");
    }
    $(document).on('click', function (e) {
        if (!$(e.target).closest(".top-header__element-kitchen,.top-header__element-livingroom,.top-header__element-bedroom,.top-header__element-triplewaredrope,.top-header__element-doublewaredrope,.top-header__element-bunkbed,.top-header__element-diningroom,.top-header__element-doublesofa").length) {
            $('.top-header__element-kitchen,.top-header__element-livingroom,.top-header__element-bedroom,.top-header__element-triplewaredrope,.top-header__element-doublewaredrope,.top-header__element-bunkbed,.top-header__element-diningroom,.top-header__element-doublesofa').removeClass('active');
            $('.top-header__content-kitchen,.top-header__content-livingroom,.top-header__content-bedroom,.top-header__content-triplewaredrope,.top-header__content-doublewaredrope,.top-header__content-bunkbed,.top-header__content-diningroom,.top-header__content-doublesofa').slideUp("easeOutExpo");
        }
        e.stopPropagation();
    });
});
$(".menu-btn").click(function (event) {
    $('body').toggleClass('lock');
});
