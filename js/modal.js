// Function to find project by ID
function findProjectById(projectId) {
    const allProjects = [...projectsConfig.personal, ...projectsConfig.commercial];
    return allProjects.find(project => project.id === projectId);
}

// Modal system - updated to work with config
function updateModalContent(project) {
    if (!project) return;

    document.getElementById('modalTitle').textContent = project.title[currentLang];
    document.getElementById('modalDescription').textContent = project.detailedDescription[currentLang];
    document.getElementById('modalMedia').innerHTML = renderMedia(project.media);

    const linksContainer = document.getElementById('modalLinks');
    linksContainer.innerHTML = '';
    project.links.forEach(link => {
        const linkEl = document.createElement('a');
        linkEl.href = link.url;
        linkEl.className = 'modal-link';
        linkEl.textContent = link.text[currentLang];
        linkEl.target = '_blank';
        linksContainer.appendChild(linkEl);
    });
}

function openModal(projectId) {
    const project = findProjectById(projectId);
    if (!project) return;

    const modal = document.getElementById('modal');
    modal.setAttribute('data-active-project', projectId);
    updateModalContent(project);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (event && event.target !== event.currentTarget) return;
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    modal.removeAttribute('data-active-project');
    document.body.style.overflow = 'auto';
}

// Close modal on Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});