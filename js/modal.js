// Function to find project by ID
function findProjectById(projectId) {
    const allProjects = [...projectsConfig.personal, ...projectsConfig.commercial];
    return allProjects.find(project => project.id === projectId);
}

// Modal system - updated to work with config
function updateModalContent(project) {
    if (!project) return;

    const modalContent = document.querySelector('.modal-content');

    // Clear existing content (except close button)
    const closeButton = document.querySelector('.modal-close');
    modalContent.innerHTML = '';
    modalContent.appendChild(closeButton);

    // Create and append title
    const titleElement = document.createElement('h2');
    titleElement.className = 'modal-title';
    titleElement.id = 'modalTitle';
    titleElement.textContent = project.title[currentLang];
    modalContent.appendChild(titleElement);

    // Create and append media container
    const mediaContainer = document.createElement('div');
    mediaContainer.id = 'modalMedia';
    const mediaContent = renderMedia(project.media);

    if (mediaContent && mediaContent.trim() !== '') {
        mediaContainer.innerHTML = mediaContent;
        modalContent.appendChild(mediaContainer);
    }

    // Create and append links container
    const linksContainer = document.createElement('div');
    linksContainer.className = 'modal-links';
    linksContainer.id = 'modalLinks';

    project.links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = 'modal-link';
        linkElement.textContent = link.text[currentLang];
        linkElement.target = '_blank';
        linksContainer.appendChild(linkElement);
    });

    if (project.links.length > 0) {
        modalContent.appendChild(linksContainer);
    }

    // Create and append description
    const descriptionElement = document.createElement('div');
    descriptionElement.className = 'modal-description';
    descriptionElement.id = 'modalDescription';
    descriptionElement.innerHTML = project.detailedDescription[currentLang];
    modalContent.appendChild(descriptionElement);
}

function openModal(projectId) {
    const project = findProjectById(projectId);
    if (!project) return;

    const modal = document.getElementById('modal');
    modal.setAttribute('data-active-project', projectId);
    updateModalContent(project);
    modal.style.display = 'flex';
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