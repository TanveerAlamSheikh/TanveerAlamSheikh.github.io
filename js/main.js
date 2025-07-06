document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleSidebar");
  const themeSelect = document.getElementById("themeSelect");

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("selectedTheme");
  if (savedTheme) {
    body.className = `theme-${savedTheme}`;
    themeSelect.value = savedTheme
      .split("-")
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }

  // Handle theme selection
  themeSelect.addEventListener("change", () => {
    const selected = themeSelect.value.toLowerCase().replace(/\s/g, "-");
    body.className = `theme-${selected}`;
    localStorage.setItem("selectedTheme", selected);
  });

  // Handle sidebar toggle
  toggleBtn.addEventListener("click", () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      sidebar.classList.toggle("expanded");
    } else {
      sidebar.classList.toggle("collapsed");
    }
  });
});