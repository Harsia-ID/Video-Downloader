// Developed by harsiadev
// Service worker for network request interception & data handling

let tabMediaData = {};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "mediaDitemukan" && sender.tab) {
        let tabId = sender.tab.id;
        if (!tabMediaData[tabId]) tabMediaData[tabId] = [];
        
        request.media.forEach(m => {
            if (!tabMediaData[tabId].find(item => item.url === m.url)) {
                tabMediaData[tabId].push(m);
            }
        });
        saveToStorage();
    }
});

chrome.webRequest.onResponseStarted.addListener(
  (details) => {
    if (details.tabId === -1) return;
    
    let isMedia = false;
    let type = "Lainnya";
    let size = "Unknown Size";
    let bytes = 0;
    const url = details.url.toLowerCase();
    
    if (details.responseHeaders) {
        let lengthHeader = details.responseHeaders.find(h => h.name.toLowerCase() === 'content-length');
        if (lengthHeader && lengthHeader.value) {
            bytes = parseInt(lengthHeader.value);
            if (bytes > 1048576) size = (bytes / 1048576).toFixed(1) + " MB";
            else size = (bytes / 1024).toFixed(1) + " KB";
        }
        
        let typeHeader = details.responseHeaders.find(h => h.name.toLowerCase() === 'content-type');
        if (typeHeader) {
            let val = typeHeader.value.toLowerCase();
            if (val.startsWith('video/')) { isMedia = true; type = "Video"; }
            else if (val.startsWith('audio/')) { isMedia = true; type = "Audio"; }
            else if (val === 'image/gif') { isMedia = true; type = "GIF"; }
            else if (val === 'application/vnd.apple.mpegurl') { isMedia = true; type = "HLS Playlist"; }
        }
    }

    if (url.match(/\.(mp4|mkv|webm)(\?.*)?$/)) { isMedia = true; type = "Video"; }
    else if (url.match(/\.(m3u8)(\?.*)?$/)) { isMedia = true; type = "HLS Playlist"; }
    else if (url.includes('[googlevideo.com/videoplayback](https://googlevideo.com/videoplayback)')) { isMedia = true; type = "YouTube Stream"; }
    else if (url.includes('twimg.com') && url.includes('video')) { isMedia = true; type = "X/Twitter Video"; }
    else if (url.includes('fbcdn.net') && url.includes('video')) { isMedia = true; type = "Facebook Video"; }

    // Filter out files smaller than 100KB (excluding HLS playlists)
    if (isMedia && bytes > 0 && bytes < 102400 && !type.includes('HLS')) {
        return; 
    }

    if (isMedia && size !== "0.0 KB") {
        if (!tabMediaData[details.tabId]) tabMediaData[details.tabId] = [];
        if (!tabMediaData[details.tabId].find(m => m.url === details.url)) {
            tabMediaData[details.tabId].push({ url: details.url, type: type, size: size, thumbnail: null });
            saveToStorage();
        }
    }
  },
  { urls: ["<all_urls>"] },
  ["responseHeaders"]
);

function saveToStorage() { chrome.storage.local.set({ detectedMedia: tabMediaData }); }

chrome.tabs.onRemoved.addListener((tabId) => { delete tabMediaData[tabId]; saveToStorage(); });
chrome.tabs.onUpdated.addListener((tabId, changeInfo) => { 
    if (changeInfo.status === 'loading') { delete tabMediaData[tabId]; saveToStorage(); }
});
