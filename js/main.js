document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleSidebar");
  const themeSelect = document.getElementById("themeSelect");

  // Load theme
  const savedTheme = localStorage.getItem("selectedTheme");
  if (savedTheme) {
    body.className = `theme-${savedTheme}`;
    themeSelect.value = savedTheme
      .split("-")
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }

  // Change theme
  themeSelect.addEventListener("change", () => {
    const selected = themeSelect.value.toLowerCase().replace(/\s/g, "-");
    body.className = `theme-${selected}`;
    localStorage.setItem("selectedTheme", selected);
  });

  // Toggle sidebar
  toggleBtn.addEventListener("click", () => {
    const isSidebarExpanded = sidebar.classList.toggle("expanded");
    if (isSidebarExpanded) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  });

  // Optional: close sidebar on outside click
  document.addEventListener("click", (e) => {
    if (
      window.innerWidth <= 1024 &&
      sidebar.classList.contains("expanded") &&
      !sidebar.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      sidebar.classList.remove("expanded");
      document.body.classList.remove("sidebar-open");
    }
  });
});