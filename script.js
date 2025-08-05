let darkmode = localStorage.getItem("dark-mode"); 
const themeButton = document.getElementById("theme-switch"); 

const enabledDarkMode = () => {
  const body = document.querySelector("body");
  body.classList.add("dark-mode");
  localStorage.setItem("dark-mode", 'active');
}


const disabledDarkMode = () => {
  const body = document.querySelector("body");
  body.classList.remove("dark-mode");
  localStorage.setItem("dark-mode", null);
}
if(darkmode === "active") enabledDarkMode();

themeButton.addEventListener("click", () => {
darkmode = localStorage.getItem("dark-mode");
darkmode !== "active" ? enabledDarkMode() : disabledDarkMode(); 
});

const menuBtn = document.getElementById("menu"); 
const nav = document.querySelector("header"); 
const header = document.querySelector(".menu");
const closeMenu = (closeBtn) => {
const close = closeBtn.querySelector("#close"); 
if(close){
close.addEventListener("click", () => {
nav.classList.remove("active");
close.style.display = "none"; 
menuBtn.style.display = "block"; 
});
}
}
menuBtn.addEventListener("click", () => {
nav.classList.toggle("active"); 
nav.style.transition = "height 0.10s ease"; 
const closeBtn = document.createElement("button"); 
closeBtn.innerHTML = `<button id="close"><i class="fas fa-close"></button>`; 
header.appendChild(closeBtn); 
menuBtn.style.display = 'none';
closeMenu(closeBtn); 
});

//ready to deploy!!!!