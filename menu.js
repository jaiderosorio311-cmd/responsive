const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Abrir / cerrar con hamburguesa
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Cerrar al hacer clic en cualquier opción
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});