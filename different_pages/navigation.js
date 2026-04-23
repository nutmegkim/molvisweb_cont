//Code here is to help navigate between different pages

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const destination = button.getAttribute('data-destination');
            if (destination) {
                window.location.href = destination;
            }
        });
    });
});