const themeSelect = document.getElementById("themeSelect");
const savedTheme = localStorage.getItem("selectedTheme");

// Apply saved theme on load
if (savedTheme) {
  document.body.className = "";
  document.body.classList.add(`theme-${savedTheme}`);
  themeSelect.value = savedTheme.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

// Handle theme change
themeSelect.addEventListener("change", () => {
  const theme = themeSelect.value.toLowerCase().replace(/\s/g, "-");
  document.body.className = "";
  document.body.classList.add(`theme-${theme}`);
  localStorage.setItem("selectedTheme", theme);
});
