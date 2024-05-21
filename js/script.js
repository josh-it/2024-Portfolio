const themeToggleBtn = document.getElementById('themeToggleBtn');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// Apply saved theme on load 
if (currentTheme) {
    document.body.classList.toggle('dark-mode', currentTheme === 'dark');
    toggleButtonIcon(); 
}

function toggleButtonIcon() {
    const icon = themeToggleBtn.querySelector('i');
    icon.classList.toggle('fa-sun', document.body.classList.contains('dark-mode'));
    icon.classList.toggle('fa-moon', !document.body.classList.contains('dark-mode'));
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); 
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light'); 
    toggleButtonIcon();
});

  // Get the button element
        const scrollToTopBtn = document.getElementById('scrollToTop');

        // Show the button when user scrolls down
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });




 // Scroll to the top with slower animation
 scrollToTopBtn.addEventListener('click', () => {
     const scrollOptions = {
         top: 0,
         behavior: 'smooth', // Use smooth scrolling
         duration: 1000 // Set the duration (in milliseconds)
     };
     window.scrollTo(scrollOptions);
 });


        // Display current year
        const currentYearElement = document.getElementById('currentYear');
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;