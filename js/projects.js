// Function to create project card HTML
function createProjectCard(project, currentFilter = 'All') {
    return `
        <div class="project-card" onclick="openModal('${project.id}')">
            <div class="project-preview">
                ${project.image ? `
                    <img 
                        class="project-image"
                        data-src="${project.image}"
                        alt="${project.title[currentLang]}"
                        loading="lazy"
                        onload="this.classList.add('loaded'); handleImageLoad(this)"
                        onerror="this.classList.add('error'); handleImageError(this)"
                    />
                    <div class="image-placeholder"></div>
                ` : `
                    <div class="image-fallback">${project.icon || '📁'}</div>
                `}
            </div>

            ${(project.tags?.length || project.genreTags?.length) ? `
                <div class="project-tags">
                    ${[
                        ...(project.tags?.filter(tag => tag !== currentFilter)
                           .map(tag => ({
                                tag,
                                type: tag === 'Try WEB' ? 'try-web-tag' : 'common-tag'
                           })) || []),
                        ...(project.genreTags?.filter(tag => tag !== currentFilter)
                           .map(tag => ({
                                tag,
                                type: 'genre-tag'
                           })) || [])
                    ].map(({tag, type}) => `
                        <span class="tag ${type}">${tag}</span>
                    `).join('')}
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

// Projects filtering and display
function displayProjects(filter = 'All') {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projectsGrid.innerHTML = projectsConfig
        .filter(project => filter === 'All' || 
               project.tags.includes(filter) || 
               project.genreTags.includes(filter))
        .map(project => createProjectCard(project, filter))
        .join('');

    initializeLazyLoading();
}

// Update active button state
function setActiveButton(filterType) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filterType) {
            btn.classList.add('active');
        }
    });
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Load all projects by default
    displayProjects('All');

    // Filter buttons event listeners
    document.querySelectorAll('.nav-btn[data-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
            const filterType = btn.dataset.filter;
            displayProjects(filterType);
            setActiveButton(filterType);
        });
    });
});