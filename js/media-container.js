// Render media content based on configuration
function renderMedia(mediaConfig) {
    if (!mediaConfig) {
        console.log('No media configuration provided');
        return ''; // Return empty string to hide container
    }

    const container = document.createElement('div');
    container.className = 'media-container';
    container.setAttribute('data-media-type', mediaConfig.type);

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
                console.error('Unsupported media type:', mediaConfig.type);
                return ''; // Return empty string to hide container
        }

    } catch (error) {
        console.error('Error rendering media:', error);
        return ''; // Return empty string to hide container
    }

    return container.outerHTML;
}

function adjustMediaLayout(media) {
    const container = media.closest('.media-container');
    if (!container) return;

    // YouTube, iframe
    if (media.tagName === 'IFRAME') {
        container.classList.add('horizontal');
        return;
    }

    // Aspect ratio for video and images
    const width = media.naturalWidth || media.videoWidth || media.offsetWidth;
    const height = media.naturalHeight || media.videoHeight || media.offsetHeight;

    if (width && height && height > 0) {
        if (height > width) {
            container.classList.add('vertical');
        } else if (height > 0) {
            container.aspectRatio = `${width}/${height}`;
        }
    }
}

function createFallbackContainer(message, icon) {
    return `
        <div class="media-fallback">
            <div class="fallback-icon">${icon}</div>
            <div class="fallback-message">${message}</div>
        </div>
    `;
}

function handleImageError(imgElement, fallbackIcon) {
    const container = imgElement.closest('.media-container');
    if (container) {
        console.error('Image failed to load:', imgElement.src);
        container.style.display = 'none'; // Hide container on image error
    }
}

function createImageContent(mediaConfig) {
    return `
        <img src="${mediaConfig.url}" 
            alt="${mediaConfig.alt || 'Project image'}" 
            class="media-content"
            loading="lazy"
            onerror="handleImageError(this, '${mediaConfig.fallback || '🖼️'}')">
    `;
}

function createYouTubeContent(mediaConfig) {
    const videoId = extractYouTubeId(mediaConfig.url);
    if (!videoId) {
        console.error('Invalid YouTube URL:', mediaConfig.url);
        return ''; // Return empty string to hide container
    }

    return `
        <iframe src="https://www.youtube.com/embed/${videoId}"
            class="media-content"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"
            onerror="handleIframeError(this)">
        </iframe>
    `;
}

function createVideoContent(mediaConfig) {
    return `
        <video class="media-content" controls playsinline onerror="handleVideoError(this)">
            <source src="${mediaConfig.url}" type="${mediaConfig.mimeType || 'video/mp4'}">
            Your browser does not support HTML5 video.
        </video>
    `;
}

function createIframeContent(mediaConfig) {
    return `
        <iframe src="${mediaConfig.url}"
            class="media-content"
            frameborder="0"
            loading="lazy"
            sandbox="${mediaConfig.sandbox || 'allow-scripts allow-same-origin'}"
            onerror="handleIframeError(this)">
        </iframe>
    `;
}

// Utility
function extractYouTubeId(url) {
    if (!url) return null;

    // Parse YouTube URL
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11) ? match[2] : null;
}

function stopAllMedia() {
    // TODO: stop youtube videos gracefully

    document.querySelectorAll('.media-container video').forEach(video => {
        video.pause();
    });

    document.querySelectorAll('.media-container iframe').forEach(iframe => {
        iframe.remove();
    });
}

// Error handlers for different media types
function handleVideoError(videoElement) {
    const container = videoElement.closest('.media-container');
    if (container) {
        console.error('Video failed to load:', videoElement.querySelector('source')?.src);
        container.style.display = 'none';
    }
}

function handleIframeError(iframeElement) {
    const container = iframeElement.closest('.media-container');
    if (container) {
        console.error('Iframe failed to load:', iframeElement.src);
        container.style.display = 'none';
    }
}

// Hide loading indicator
document.addEventListener('DOMContentLoaded', function () {
    // Handle image loading
    document.addEventListener('load', function (e) {
        adjustMediaLayout(e.target);
    }, true);

    // Handle iframe loading
    document.addEventListener('load', function (e) {
        if (e.target.tagName === 'IFRAME' && e.target.classList.contains('media-content')) {
            adjustMediaLayout(e.target);
        }
    }, true);
});