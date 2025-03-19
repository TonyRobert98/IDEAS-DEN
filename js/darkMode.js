document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const root = document.documentElement;
  const moonIcon = darkModeToggle.querySelector(".fa-moon");
  const sunIcon = darkModeToggle.querySelector(".fa-sun");

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Set initial theme
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    root.classList.add("dark");
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
  } else {
    root.classList.remove("dark");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  }

  // Toggle theme
  darkModeToggle.addEventListener("click", () => {
    root.classList.toggle("dark");
    moonIcon.classList.toggle("hidden");
    sunIcon.classList.toggle("hidden");

    // Save preference
    localStorage.setItem(
      "theme",
      root.classList.contains("dark") ? "dark" : "light"
    );
  });

  // Listen for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        if (e.matches) {
          root.classList.add("dark");
          moonIcon.classList.add("hidden");
          sunIcon.classList.remove("hidden");
        } else {
          root.classList.remove("dark");
          sunIcon.classList.add("hidden");
          moonIcon.classList.remove("hidden");
        }
      }
    });
});
