const themeSelect = document.getElementById("themeSelect");

themeSelect.addEventListener("change", () => {
  const theme = themeSelect.value.toLowerCase().replace(/\s/g, "-");
  document.body.className = ""; // Reset all classes
  document.body.classList.add(`theme-${theme}`);
});
