window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.pageYOffset > 0) {
        navbar.style.backgroundColor = '#222'; // Darker shade when scrolled
    } else {
        navbar.style.backgroundColor = '#333'; // Original color when not scrolled
    }
});
