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


});