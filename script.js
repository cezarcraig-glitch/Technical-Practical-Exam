// Vanilla JavaScript for form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    form.addEventListener('submit', function(e) {
        // Prevent default form submission
        e.preventDefault();
        
        // Fade out form
        form.style.transition = 'opacity 0.4s ease';
        form.style.opacity = '0';
        
        setTimeout(function() {
            form.style.display = 'none';
            
            // Fade in success message
            successMessage.style.display = 'block';
            successMessage.style.opacity = '0';
            successMessage.style.transition = 'opacity 0.4s ease';
            
            setTimeout(function() {
                successMessage.style.opacity = '1';
            }, 10);
        }, 400);
    });
});

// jQuery version (can be used if jQuery is available)
/*
$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        $(this).fadeOut(400, function() {
            $('#successMessage').fadeIn(400);
        });
    });
});
*/
