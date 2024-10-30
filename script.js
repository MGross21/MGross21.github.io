// JavaScript for scroll-triggered animations
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    // Helper function to check if an element is in view
    function isElementInView(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
    }

    // Add 'visible' class to elements in view
    function handleScroll() {
        sections.forEach(section => {
            if (isElementInView(section)) {
                section.classList.add("visible");
            }
        });
    }

    // Event listener for scroll event
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on load
});
