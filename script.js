document.addEventListener("DOMContentLoaded", function () {
        // Smooth scrolling for navigation links
        document.querySelectorAll('.topnav a').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
            });
          });
        });

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function (e) {
          e.preventDefault();
          alert('Thank you for contacting me! I will get back to you soon.');
          this.reset();
        });

        // Scroll animations
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
            } else {
              entry.target.classList.remove('animate');
            }
          });
        }, {
          threshold: 0.1
        });

        document.querySelectorAll('section').forEach(section => {
          observer.observe(section);
        });

        // Scroll to top on page load or refresh
        window.scrollTo(0, 0);

        // Add event listener to the Contact Me button
        document.getElementById('contactMeButton').addEventListener('click', function () {
          document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
          });
        });
      });