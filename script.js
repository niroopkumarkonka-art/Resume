document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Print / Save as PDF Functionality ---
    const printBtn = document.getElementById("print-btn");
    if (printBtn) {
        printBtn.addEventListener("click", () => {
            window.print();
        });
    }

    // --- 2. Dark Mode Toggle ---
    const themeToggleBtn = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;

    themeToggleBtn.addEventListener("click", () => {
        htmlElement.classList.toggle("dark");
    });

    // --- 3. Subtle Reveal Animation on Load ---
    const elementsToFadeIn = document.querySelectorAll('.fade-in');
    elementsToFadeIn.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 150); // Stagger the animation sequentially
    });

    // --- 4. Interactive 3D Tilt Effect on Project Cards ---
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        const content = card.querySelector('.card-content');

        card.addEventListener('mousemove', (e) => {
            // Get dimensions and position of the card
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            // Calculate center
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate rotation amount (Smooth +/- 5 degrees)
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            // Apply transform to the inner content
            content.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        // Reset transform when mouse leaves the card smoothly
        card.addEventListener('mouseleave', () => {
            content.style.transform = `rotateX(0deg) rotateY(0deg)`;
            content.style.transition = 'transform 0.5s ease-out';
            
            // Remove the transition after it returns to normal to avoid lag on next hover
            setTimeout(() => {
                content.style.transition = 'transform 0.1s ease-out';
            }, 500);
        });
    });
});