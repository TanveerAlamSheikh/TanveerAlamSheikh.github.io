document.getElementById('themeSelect').addEventListener('change', function () {
  const theme = this.value.toLowerCase().replace(/\s/g, '-');
  document.body.setAttribute('data-theme', theme);
});
