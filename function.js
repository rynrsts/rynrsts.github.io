const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("nav ul");
const links = document.querySelectorAll("nav ul li");

hamburger.addEventListener('click', ()=>{
	navLinks.classList.toggle("nav-open");

	links.forEach(link => {
		link.classList.toggle("nav-fade");
	});

	hamburger.classList.toggle("nav-toggle");
	
});

navLinks.addEventListener('click', ()=>{
	navLinks.classList.toggle("nav-open");

	links.forEach(link => {
		link.classList.toggle("nav-fade");
	});

	hamburger.classList.toggle("nav-toggle");
});