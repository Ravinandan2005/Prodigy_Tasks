// Add scroll event listener
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  
  // Add or remove the 'scrolled' class based on scroll position
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
