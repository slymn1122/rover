// main.js
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const page = path.split("/").pop();

  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === page) {
      link.classList.add("active");
    }
  });

  console.log("Navigasyon sistemi aktif 🚦");
});
