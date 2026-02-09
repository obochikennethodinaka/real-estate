document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link, .btn[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetUnclean = document.querySelector(targetId);

            if (targetUnclean) {
                // Larger offset due to fixed taller navbar in this design
                const headerOffset = 80;
                const elementPosition = targetUnclean.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Update active state
                document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                if (this.classList.contains('nav-link')) {
                    this.classList.add('active');
                }

                // Close mobile menu
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (window.getComputedStyle(navbarToggler).display !== 'none' && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow');
            navbar.style.padding = '10px 0'; // Shrink navbar slightly
        } else {
            navbar.classList.remove('shadow');
            navbar.style.padding = '15px 0';
        }
    });

    // Contact Form Handling (Simulated)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;

            btn.innerText = 'Sending Inquiry...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Inquiry Sent! Sarah will contact you shortly.');
                contactForm.reset();
                btn.innerText = 'Message Sent';
                btn.classList.replace('btn-primary', 'btn-success');

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.classList.replace('btn-success', 'btn-primary');
                }, 3000);
            }, 1500);
        });
    }
});
