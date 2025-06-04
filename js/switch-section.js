// Section switching
function switchSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Update button states
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-section') === sectionName) {
            btn.classList.add('active');
        }
    });
}

// Add event listeners to navigation buttons
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const section = this.getAttribute('data-section');
            switchSection(section);
        });
    });
});