
// Function to create project card HTML
function createProjectCard(project) {
    return `
                <div class="project-card" onclick="openModal('${project.id}')">
                    <div class="project-preview">
                        <img 
                            class="project-image" 
                            data-src="${project.image || ''}" 
                            alt="${project.title[currentLang]}"
                            loading="lazy"
                            onload="this.classList.add('loaded'); handleImageLoad(this)"
                            onerror="this.classList.add('error'); handleImageError(this)"
                        />
                        <div class="image-fallback">${project.icon}</div>
                        <div class="image-loading">Loading...</div>
                    </div>
                    <h3 class="project-title">${project.title[currentLang]}</h3>

                    ${project.tags?.length ? `
                        <div class="project-tags common-tags">
                            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    ` : ''}

                    ${project.genreTags?.length ? `
                        <div class="project-tags genre-tags">
                            ${project.genreTags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
            `;
}

// Handle image load/error events
function handleImageLoad(img) {
    const preview = img.closest('.project-preview');
    if (preview) {
        const fallback = preview.querySelector('.image-fallback');
        const loading = preview.querySelector('.image-loading');
        if (fallback) fallback.style.opacity = '0';
        if (loading) loading.style.opacity = '0';
    }
}

function handleImageError(img) {
    const preview = img.closest('.project-preview');
    if (preview) {
        const loading = preview.querySelector('.image-loading');
        if (loading) loading.style.opacity = '0';
    }
}

// Function to load projects from config
function loadProjects() {
    // Load personal projects
    const personalContainer = document.getElementById('personalProjects');
    personalContainer.innerHTML = projectsConfig.personal
        .map(project => createProjectCard(project))
        .join('');

    // Load commercial projects
    const commercialContainer = document.getElementById('commercialProjects');
    commercialContainer.innerHTML = projectsConfig.commercial
        .map(project => createProjectCard(project))
        .join('');

    // Initialize lazy loading for images
    initializeLazyLoading();
}

// Lazy loading implementation
function initializeLazyLoading() {
    const images = document.querySelectorAll('.project-image[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src;

                if (src) {
                    img.src = src;
                    img.removeAttribute('data-src');
                }

                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Load projects on page load
document.addEventListener('DOMContentLoaded', function () {
    loadProjects();
});