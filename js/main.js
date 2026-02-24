document.addEventListener("DOMContentLoaded", function() {
    // Grab everything with the class 'reveal'
    const reveals = document.querySelectorAll(".reveal");
    
    // Set up the rules for when to trigger the animation
    const revealOptions = {
        threshold: 0.15, // Triggers when 15% of the element is visible on screen
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before the very bottom hits it
    };
    
    // The "Intersection Observer" acts like a camera watching the scroll line
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When it's on screen, add the 'active' class to fade it in
                entry.target.classList.add("active");
                // Stop watching it so it doesn't animate twice
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);
    
    // Tell the observer to watch all the 'reveal' sections
    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});