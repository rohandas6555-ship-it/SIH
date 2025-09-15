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

    // === 4. Cultural Calendar Functionality ===
    const dateElement = document.getElementById('currentMonthYear');
    const datesContainer = document.getElementById('calendar-dates');
    const prevButton = document.getElementById('prevMonth');
    const nextButton = document.getElementById('nextMonth');

    let currentDate = new Date();

    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        dateElement.textContent = new Date(year, month).toLocaleString('en-us', {
            month: 'long',
            year: 'numeric'
        });

        // Clear previous dates
        datesContainer.innerHTML = '';

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
        const today = new Date();

        // Add empty cells for preceding days
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.classList.add('date-cell', 'empty');
            datesContainer.appendChild(emptyCell);
        }

        // Add date cells
        for (let i = 1; i <= lastDateOfMonth; i++) {
            const dateCell = document.createElement('div');
            dateCell.classList.add('date-cell');
            dateCell.textContent = i;
            if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dateCell.classList.add('today');
            }

            // You can add event handling here for specific dates
            // Example: if (i === 15) { dateCell.classList.add('event'); }

            datesContainer.appendChild(dateCell);
        }
    };

    prevButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    // Initial render
    renderCalendar();

    console.log("Monastery360 Final JavaScript file loaded.");
});