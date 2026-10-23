document.addEventListener('DOMContentLoaded', () => {
    // 1. Select the elements we want to animate
    const elementsToAnimate = document.querySelectorAll(`
        .main-header > *,
        .about-grid,
        .skills-pills-container,
        .skills-text-content,
        .category-title,
        .work-card,
        .logos-container,
        .why-choose-me
    `);

    // 2. Add the initial 'fade-up' class to all selected elements
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-up');
    });

    // 3. Set up the Intersection Observer to trigger the animation on scroll
    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before it comes into view
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is in view
            if (entry.isIntersecting) {
                // Add the 'visible' class to animate it in
                entry.target.classList.add('visible');
                
                // Unobserve the element so it only animates once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 4. Start observing the elements
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});
