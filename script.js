document.addEventListener("DOMContentLoaded", function() {
    // Existing slider functionality...

    // Smooth scroll to main download section
    document.getElementById('quick-download').addEventListener('click', function() {
        document.getElementById('main-download').scrollIntoView({ behavior: 'smooth' });
    });
});
