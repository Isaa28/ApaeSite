const root = document.documentElement;
const themeBtn = document.getElementById("theme");

const savedTheme = localStorage.getItem("apae-theme");

function setTheme(theme) {
  root.dataset.theme = theme;

  if (themeBtn) {
    themeBtn.innerHTML =
      theme === "dark"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
  }

  localStorage.setItem("apae-theme", theme);
}

// Define o tema inicial
setTheme(savedTheme || "light");

// Alterna entre tema claro e escuro
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const currentTheme = root.dataset.theme;

    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
}