document.querySelector(".checkbtn").addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("show");
});

let navItems = document.querySelectorAll(".nav-menu nav > a");
  
navItems.forEach(item => {
  item.addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("show");
  });
});
