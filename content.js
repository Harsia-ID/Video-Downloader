// Developed by harsiadev
// Content script for real-time DOM media extraction

const observer = new MutationObserver((mutations) => {
    let mediaFound = [];
    
    document.querySelectorAll('video').forEach(video => {
        if (video.src && (video.src.startsWith('http') || video.src.startsWith('blob:'))) {
            mediaFound.push({
                url: video.src,
                type: 'Video (DOM)',
                thumbnail: video.poster || null
            });
        }
    });

    if (mediaFound.length > 0) {
        try {
            chrome.runtime.sendMessage({ action: "mediaDitemukan", media: mediaFound });
        } catch (error) {
            if (error.message.includes("Extension context invalidated")) {
                observer.disconnect(); 
            }
        }
    }
});

observer.observe(document.documentElement, { childList: true, subtree: true });
