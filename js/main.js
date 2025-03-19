document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu functionality
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !mobileMenuButton.contains(e.target) &&
      !mobileMenu.contains(e.target)
    ) {
      mobileMenu.classList.add("hidden");
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Add scroll animations
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        element.classList.add("animate");
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Initial check
});
