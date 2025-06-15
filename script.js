// Initialize Lucide icons
// This function needs to be called after the DOM content is loaded
// to ensure all data-lucide attributes are processed.
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href'); // Get the href value (e.g., "#about")
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth' // Smooth scroll to the target section
            });
        });
    });

    // Scroll to Top Button functionality
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        // If user scrolls down more than 300px, show the button
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.remove('hidden'); // Make button visible
        } else {
            scrollToTopBtn.classList.add('hidden'); // Hide button
        }
    });

    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0, // Scroll to the very top of the page
            behavior: 'smooth' // Smooth scrolling effect
        });
    });
});
