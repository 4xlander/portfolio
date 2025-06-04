// Language system - set English as default
let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    document.getElementById('langBtn').textContent = currentLang === 'en' ? 'RU' : 'EN';

    // Update all translatable elements
    document.querySelectorAll('[data-ru][data-en]').forEach(el => {
        const text = currentLang === 'ru' ? el.getAttribute('data-ru') : el.getAttribute('data-en');
        el.textContent = text;
    });

    // Reload projects with new language
    loadProjects();

    // Update modal if it's open
    const modal = document.getElementById('modal');
    if (modal.style.display === 'block') {
        const activeProjectId = modal.getAttribute('data-active-project');
        if (activeProjectId) {
            const project = findProjectById(activeProjectId);
            if (project) {
                updateModalContent(project);
            }
        }
    }
}