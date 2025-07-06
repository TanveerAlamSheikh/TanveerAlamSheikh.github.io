const themeSelect = document.getElementById("themeSelect");
const savedTheme = localStorage.getItem("selectedTheme");

if (savedTheme) {
  document.body.className = `theme-${savedTheme}`;
  themeSelect.value = savedTheme.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

themeSelect.addEventListener("change", () => {
  const theme = themeSelect.value.toLowerCase().replace(/\s/g, "-");
  document.body.className = `theme-${theme}`;
  localStorage.setItem("selectedTheme", theme);
});