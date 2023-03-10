const filterBox = document.querySelectorAll(".product__item");
document.querySelector(".kitchen__filters").addEventListener('click', event => {
    if (event.target.className !== 'kitchen__tablinks-filter') return false;
    let filterClass = event.target.dataset['f'];
    filterBox.forEach(elem => {
        elem.classList.remove('hide-filter');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide-filter');
        }
    });
});
const swiperCard = new Swiper('.product__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    spaceBetween: 0,
    grabCursor: true,
    pagination: {
        el: '.product__pagination,.product__pagination-color',
        clickable: true,
        type: 'bullets',
    },
    autoplay: {
        delay: 5000,
    },
});
const swiperDop = new Swiper('.kitchen-dop__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    spaceBetween: 20,
    grabCursor: true,
    slidesPerView: "auto",
    centeredSlides: true,
    breakpoints: {
        320: {
            spaceBetween: 10,
        },
        768: {
            spaceBetween: 20,
        },
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
$(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top < 55) $(".mid-header").removeClass('fixed');
    else $(".mid-header").addClass('fixed');
});
$(".menu-btn").click(function (event) {
    $('body').toggleClass('lock');
});
function pageKitchen(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("kitchen__items");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("kitchen__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "grid";
    evt.currentTarget.className += " active";
}
document.getElementById("MainPage").click();
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
let asideBtn = document.querySelector('.kitchen__aside-btn');
let aside = document.querySelector('.aside-kitchen');
let asideBtnClose = document.querySelector('.kitchen__aside-btn-close');
asideBtn.addEventListener('click', function () {
    asideBtn.classList.toggle('active');
    aside.classList.toggle('active');
});
asideBtnClose.addEventListener('click', function () {
    asideBtn.classList.toggle('active');
    aside.classList.toggle('active');
});
const rangeSlider = document.getElementById('range-slider');
if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [1500, 10000],
        connect: true,
        step: 100,
        range: {
            'min': [1500],
            'max': [10000]
        },

    });
    const input0 = document.getElementById('input-0');
    const input1 = document.getElementById('input-1');
    const inputs = [input0, input1];
    rangeSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = Math.round(values[handle]);
    });

    const setRange = (i, value) => {
        let arr = [null, null];
        arr[i] = value;
        rangeSlider.noUiSlider.set(arr)
    };

    inputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setRange(index, e.currentTarget.value);
        });
    });
};
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
})