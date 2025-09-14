document.addEventListener('DOMContentLoaded', () => {
    // === 1. Smooth Scrolling for Navigation ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // === 2. Optimized Parallax Background Effect ===
    const parallaxBg = document.body;
    let lastScrollY = 0;
    let ticking = false;

    function updateParallax() {
        const scrollPosition = window.pageYOffset;
        parallaxBg.style.backgroundPositionY = -scrollPosition * 0.05 + 'px';
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        lastScrollY = window.pageYOffset;
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // === 3. Dynamic Content Loading (Placeholder) ===
    function loadMonasteries() {
        console.log("Fetching monastery data from an API...");
    }
    loadMonasteries();

    console.log("Monastery360 Final JavaScript file loaded.");
});