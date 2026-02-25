document.addEventListener("DOMContentLoaded", function() {
    
    // 1. MOBILE HAMBURGER MENU
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const mobileBtnIcon = document.querySelector('.mobile-menu-btn i');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                mobileBtnIcon.classList.remove('fa-bars');
                mobileBtnIcon.classList.add('fa-times');
            } else {
                mobileBtnIcon.classList.remove('fa-times');
                mobileBtnIcon.classList.add('fa-bars');
            }
        });
    }

    // 2. NAVBAR SCROLL EFFECT
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. SCROLL REVEAL ANIMATIONS
    const reveals = document.querySelectorAll(".reveal");
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px" 
    };
    
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); 
            }
        });
    }, revealOptions);
    
    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // 4. LIVE CONTACT FORM HANDLING (Connects to mailer.php)
    const contactForms = document.querySelectorAll('.contact-form-card form');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop the page refresh
            
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            btn.innerText = "Sending..."; // Let the user know it's working
            
            // Package the form data
            const formData = new FormData(form);
            
            // Send it to the PHP script secretly in the background
            fetch('mailer.php', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    // Success! Turn button green
                    btn.innerText = "Request Sent ✓";
                    btn.style.backgroundColor = "#27ae60"; 
                    btn.style.color = "#ffffff";
                    form.reset(); // Clear the form
                } else {
                    // Server Error
                    btn.innerText = "Error! Try Again.";
                    btn.style.backgroundColor = "#e74c3c"; // Red for error
                    btn.style.color = "#ffffff";
                }
                
                // Reset button after 4 seconds
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = ""; 
                }, 4000);
            })
            .catch(error => {
                // Connection Error
                btn.innerText = "Network Error.";
                setTimeout(() => {
                    btn.innerText = originalText;
                }, 4000);
            });
        });
    });
});