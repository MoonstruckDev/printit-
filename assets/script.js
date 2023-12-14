const slides = [
	{ image: "slide1.jpg", tagLine: "Impressions tous formats <span>en boutique et en ligne</span>" },
	{ image: "slide2.jpg", tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>" },
	{ image: "slide3.jpg", tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>" },
	{ image: "slide4.png", tagLine: "Autocollants <span>avec découpe laser sur mesure</span>" }
  ];

// Var Decs
const arrowLeft = document.querySelector("#banner .arrow_left")
const arrowRight = document.querySelector("#banner .arrow_right")

let currentIndex = 0;
// Test of selecting right elements
// console.log(arrowLeft)
// console.log(arrowRight)

// Direction = Forwards or backwards index
function navigateSlides(direction) {
	currentIndex = (currentIndex + direction + slides.length) % slides.length
	updateBanner()
}

function updateBanner() {
	const bannerImage = document.querySelector("#banner .banner-img")
	const tagLineElement = document.querySelector("#banner p")
	bannerImage.src = `./assets/images/slideshow/${slides[currentIndex].image}`
	tagLineElement.innerHTML = slides[currentIndex].tagLine
	focusDots()
}
function focusDots() {
	const dots = document.querySelectorAll('.dots .dot');
	dots.forEach(dot => dot.classList.remove('dot_selected'))
	dots[currentIndex].classList.add('dot_selected')
}


arrowLeft.addEventListener("click", () => navigateSlides(-1))
arrowRight.addEventListener("click", () => navigateSlides(1))
