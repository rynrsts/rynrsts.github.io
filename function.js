
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

// Hamburger
hamburger.addEventListener('click', ()=>{

   //Animate Links
	navLinks.classList.toggle("open");
	links.forEach(link => {
		link.classList.toggle("fade");
	});

	//Hamburger Animation
	hamburger.classList.toggle("toggle");
	
});

// Navigation
navLinks.addEventListener('click', ()=>{

	//Animate Links
	 navLinks.classList.toggle("open");
	 links.forEach(link => {
		 link.classList.toggle("fade");
	 });
 
	 //Hamburger Animation
	 hamburger.classList.toggle("toggle");
	 
});