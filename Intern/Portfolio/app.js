document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        // Smooth scroll to the section
        targetSection.scrollIntoView({
            behavior: 'smooth',
        });

        // Close the navbar if it's open (small screens)
        if (window.innerWidth <= 768) { // Adjust breakpoint if needed
            document.getElementById('navbar').classList.remove('active');
        }
    });
});

var bar = document.getElementById("bar");
var close = document.getElementById("close");
var nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}





    function sendMessage() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Correcting the template literal syntax
        var whatsappUrl = `https://wa.me/923181255430?text=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        )}`;
        
        window.location.href = whatsappUrl;
    }

