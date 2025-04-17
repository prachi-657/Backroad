// ********** set date ************
// select span
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    // prevent default
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth"
    });
  });
});
// ********** Dark Mode Toggle ************
document.addEventListener('DOMContentLoaded', function() {
  // Shared function to sync both toggles
  const syncThemeToggles = (isDarkMode) => {
    // Update desktop toggle
    const desktopIcon = document.querySelector('.theme-toggle i');
    if (desktopIcon) {
      desktopIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    // Update mobile toggle
    const mobileIcon = document.querySelector('.mobile-theme-toggle i');
    if (mobileIcon) {
      mobileIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    }
  };

  // Desktop theme toggle
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    
    // Check for saved user preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
      syncThemeToggles(true);
    }

    // Theme toggle event
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDarkMode = document.body.classList.contains('dark-mode');
      
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      syncThemeToggles(isDarkMode);
    });
  }

  // Mobile theme toggle
  const mobileToggle = document.querySelector('.mobile-theme-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDarkMode = document.body.classList.contains('dark-mode');
      
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      syncThemeToggles(isDarkMode);
    });

    // Initialize mobile toggle state
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      syncThemeToggles(true);
    }
  }
});
