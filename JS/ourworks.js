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
$(window).scroll(function () {
	var top = $(document).scrollTop();
	if (top < 55) $(".mid-header").removeClass('fixed');
	else $(".mid-header").addClass('fixed');
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
$(".menu-btn").click(function (event) {
	$('body').toggleClass('lock');
});
let inputIcon = document.querySelector('.mid-header__find-icon');
let input = document.querySelector('.mid-header__find-hiden');
inputIcon.addEventListener('click', function () {
	inputIcon.classList.toggle('active');
	input.classList.toggle('active');
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
function openCity(evt, cityName) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("ourworks__tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("ourworks__tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the link that opened the tab
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}
function openPage(evt, cityName) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("ourworks__body");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("ourworks__tablinks-body");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the link that opened the tab
	document.getElementById(cityName).style.display = "grid";
	evt.currentTarget.className += " active";
}
document.getElementById("PageOpen").click();
document.getElementById("defaultOpen").click();
let loadWorks = document.querySelector('.ourworks__body-btn');
let works = document.querySelector('.ourworks__body-hiden');
loadWorks.addEventListener('click', function () {
	loadWorks.classList.toggle('active');
	works.classList.toggle('active');
});