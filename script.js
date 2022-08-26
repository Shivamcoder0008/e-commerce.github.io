/*change background header*/
function scrollHeader() {
	const header = document.getElementById('header')
	if (this.scrollY >= 50) {
		header.classList.add('scroll-header');
	}

	else{
		header.classList.remove('scroll-header');
	}
}
window.addEventListener('scroll', scrollHeader);

/*SHOW CART*/
const cart = document.getElementById('cart');
const cartShop = document.getElementById('cart_shop');
const cartClose = document.getElementById('close');

if (cartShop) {
	cartShop.addEventListener("click", () => {
      cart.classList.add('show-cart')
	});
}

if (cartClose) {
	cartClose.addEventListener("click", () => {
      cart.classList.remove('show-cart')
	});
}

/*SHOW LOGIN*/
const login = document.getElementById('login');
const login_toggle = document.getElementById('login-toggle');
const loginClose = document.getElementById('login_close');

if (login_toggle) {
	login_toggle.addEventListener("click", () => {
      login.classList.add('show-login')
	});
}

if (loginClose) {
	loginClose.addEventListener("click", () => {
      login.classList.remove('show-login')
	});
}

/*swiper*/
var slideIndex = 1;
showSlides(slideIndex);



// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("swiper-slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
