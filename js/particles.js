// Create animated particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.opacity = '0';

        // Random size between 1px and 4px
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random movement direction
        const randomX = (Math.random() - 0.5) * 200 + 'px';
        const randomY = (Math.random() - 0.5) * 200 + 'px';
        particle.style.setProperty('--random-x', randomX);
        particle.style.setProperty('--random-y', randomY);

        // Random animation timing
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (6 + Math.random() * 6) + 's';

        // Random opacity variation
        const baseOpacity = Math.random() * 0.4 + 0.2;
        particle.style.setProperty('--base-opacity', baseOpacity);

        particlesContainer.appendChild(particle);
    }
}

// Initialize particles on page load
document.addEventListener('DOMContentLoaded', function () {
    createParticles();
});