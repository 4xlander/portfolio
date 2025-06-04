// Render media content based on configuration
function renderMedia(mediaConfig) {
    if (!mediaConfig) {
        return createFallbackContainer('No media available', '🎮');
    }

    const container = document.createElement('div');
    container.className = 'media-container';

    try {
        switch (mediaConfig.type) {
            case 'image':
                container.innerHTML = createImageContent(mediaConfig);
                break;

            case 'youtube':
                container.innerHTML = createYouTubeContent(mediaConfig);
                break;

            case 'video':
                container.innerHTML = createVideoContent(mediaConfig);
                break;

            case 'iframe':
                container.innerHTML = createIframeContent(mediaConfig);
                break;

            default:
                container.innerHTML = createFallbackContainer(
                    'Unsupported media type',
                    mediaConfig.fallback || '🎮'
                );
        }
    } catch (error) {
        console.error('Error rendering media:', error);
        container.innerHTML = createFallbackContainer(
            'Media loading failed',
            mediaConfig.fallback || '❌'
        );
    }

    return container.outerHTML;
}

function createFallbackContainer(message, icon) {
    return `
        <div class="media-fallback">
            <div class="fallback-icon">${icon}</div>
            <div class="fallback-message">${message}</div>
        </div>
    `;
}

function createImageContent(mediaConfig) {
    return `
        <img src="${mediaConfig.url}" 
             alt="${mediaConfig.alt || 'Project image'}" 
             class="media-content"
             loading="lazy"
             onerror="handleImageError(this, '${mediaConfig.fallback || '🖼️'}')">
        <div class="media-loading">Loading image...</div>
    `;
}

function createYouTubeContent(mediaConfig) {
    const videoId = extractYouTubeId(mediaConfig.url);
    if (!videoId) {
        return createFallbackContainer('Invalid YouTube URL', '📺');
    }

    return `
        <iframe src="https://www.youtube.com/embed/${videoId}"
                class="media-content"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="lazy"></iframe>
        <div class="media-loading">Loading YouTube video...</div>
    `;
}

function createVideoContent(mediaConfig) {
    return `
        <video class="media-content" controls playsinline>
            <source src="${mediaConfig.url}" type="${mediaConfig.mimeType || 'video/mp4'}">
            Your browser does not support HTML5 video.
        </video>
        <div class="media-loading">Loading video...</div>
    `;
}

function createIframeContent(mediaConfig) {
    return `
        <iframe src="${mediaConfig.url}"
                class="media-content"
                frameborder="0"
                loading="lazy"
                sandbox="${mediaConfig.sandbox || 'allow-scripts allow-same-origin'}"></iframe>
        <div class="media-loading">Loading content...</div>
    `;
}

// Utility
function extractYouTubeId(url) {
    if (!url) return null;

    // Parse YouTube URL
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11) ? match[2] : null;
}

function handleImageError(imgElement, fallbackIcon) {
    const container = imgElement.parentElement;
    if (container) {
        container.innerHTML = createFallbackContainer('Image failed to load', fallbackIcon);
    }
}