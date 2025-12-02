// Get modal elements
const modal = document.getElementById('projects-modal');
const projectsBtn = document.getElementById('projects-btn');
const closeBtn = document.querySelector('.close');

// Open modal when Projects button is clicked
projectsBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'block';
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});