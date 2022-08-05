// Slider
let slider = document.querySelector(".slide-img"),
	slidePrev = document.querySelector("#slide-prev"),
	slideNext = document.querySelector("#slide-next"),
	slides = ["img/banner-01.png", "img/banner-02.png"],
	activeSlide = 0;

let barBtn = document.querySelector("a.bar"),
	closeNav = document.querySelector("nav ul .closeNav");
	navList = document.querySelector("nav ul");

barBtn.addEventListener('click', () => {
	navList.classList.add('active');
});
closeNav.addEventListener('click', () => {
	navList.classList.remove('active');
});

document.addEventListener("scroll", () => {
	if (scrollY > 100) {
		document.querySelector("nav").classList.add("static");
	} else {
		document.querySelector("nav").classList.remove("static");
	}
})

function checkActiveSlide() {
	if (activeSlide == slides.length - 1) {
		activeSlide = 0;
	}
	if (activeSlide == -1) {
		activeSlide = slides.length - 1;
	}
}

function goSlide(number = 0) {
	activeSlide += number;
	checkActiveSlide();
	slider.style.backgroundImage = `url(${slides[activeSlide]})`;
	console.log(activeSlide);
}

setInterval(() => {
	goSlide(1);
}, 3000);

slidePrev.onclick = () => {
	goSlide(-1);
};
slideNext.onclick = () => {
	goSlide(1);
};

let d = new Date();

document.getElementById("thisYear").textContent = d.getFullYear();