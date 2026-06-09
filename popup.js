// Developed by harsiadev
// Main UI logic and Auto-Bypass handler

let renderedUrls = new Set();

function loadMediaData() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (!tabs || tabs.length === 0) return;
        let tabId = tabs[0].id;
        let currentTabUrl = tabs[0].url; 

        chrome.storage.local.get(['detectedMedia'], (result) => {
            let mediaList = result.detectedMedia ? (result.detectedMedia[tabId] || []) : [];
            
            if (mediaList.length > 0) document.getElementById('status').style.display = 'none';

            const container = document.getElementById('media-container');

            mediaList.forEach((media, index) => {
                if (renderedUrls.has(media.url)) return;
                renderedUrls.add(media.url);

                let catName = 'Lainnya';
                let ekstensi = '';
                let isStreaming = false;
                let isHLS = false;
                
                if (media.url.startsWith('blob:') || media.type.includes('Chunk') || media.type.includes('Stream') || media.type.includes('YouTube') || currentTabUrl.includes('youtube.com')) {
                    catName = 'Platform Terenkripsi (YouTube/X/FB)';
                    isStreaming = true;
                } else if (media.type.includes('HLS')) {
                    catName = 'HLS / m3u8 Playlist';
                    isHLS = true;
                } else if (media.type.includes('Video')) {
                    catName = 'Video Normal (MP4/MKV)';
                    ekstensi = '.mp4';
                } else if (media.type.includes('Audio')) {
                    catName = 'Audio (MP3/WAV)';
                    ekstensi = '.mp3';
                }

                let groupId = 'cat-' + catName.replace(/[^a-zA-Z0-9]/g, '');
                let groupDiv = document.getElementById(groupId);
                
                if (!groupDiv) {
                    groupDiv = document.createElement('div');
                    groupDiv.id = groupId;
                    groupDiv.innerHTML = `<div class="category-title">${catName}</div><ul class="category-list"></ul>`;
                    container.appendChild(groupDiv);
                }

                const listDiv = groupDiv.querySelector('.category-list');
                const li = document.createElement('li');
                li.className = 'media-card';

                let fileName = `Media_File_${index + 1}`;
                try {
                    let urlObj = new URL(media.url);
                    let pathName = urlObj.pathname.split('/').pop();
                    if (pathName && pathName.length > 3) fileName = pathName;
                } catch(e) {}
                
                let badgeClass = isStreaming || isHLS ? 'badge warn' : 'badge';
                
                li.innerHTML = `
                    <div class="thumbnail-box"><div class="thumbnail-icon">${isStreaming ? '⚡' : isHLS ? '📑' : '🎥'}</div></div>
                    <div class="details">
                        <div class="title" title="${fileName}">${isStreaming ? document.title : fileName}</div>
                        <div class="meta">
                            <span class="${badgeClass}">${isStreaming ? 'Auto-Bypass' : media.type}</span>
                            ${media.size ? `<span>• ${media.size}</span>` : ''}
                        </div>
                    </div>
                    <button class="btn-download" title="Unduh">
                        <svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                    </button>
                `;

                li.querySelector('.btn-download').onclick = async (e) => {
                    let btn = e.currentTarget;
                    let originalIcon = btn.innerHTML;

                    if (isStreaming) {
                        btn.innerHTML = `<span style="font-size:12px;">⏳</span>`;
                        btn.disabled = true;

                        try {
                            let response = await fetch("[https://api.cobalt.tools/api/json](https://api.cobalt.tools/api/json)", {
                                method: "POST",
                                headers: {
                                    "Accept": "application/json",
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    url: currentTabUrl,
                                    vQuality: "720"
                                })
                            });
                            
                            let data = await response.json();
                            
                            if (data && data.url) {
                                chrome.downloads.download({
                                    url: data.url,
                                    filename: document.title.substring(0, 40).replace(/[^a-zA-Z0-9 ]/g, "") + ".mp4",
                                    saveAs: true
                                });
                                btn.innerHTML = `✅`;
                            } 
                            else if (data && data.picker) {
                                chrome.downloads.download({
                                    url: data.picker[0].url,
                                    filename: document.title.substring(0, 40).replace(/[^a-zA-Z0-9 ]/g, "") + ".mp4",
                                    saveAs: true
                                });
                                btn.innerHTML = `✅`;
                            } 
                            else {
                                throw new Error("API Fetch Failed");
                            }
                        } catch (err) {
                            btn.innerHTML = originalIcon;
                            btn.disabled = false;
                            
                            let bypassUrl = `https://ssyoutube.com/en713v/youtube-video-downloader?url=${encodeURIComponent(currentTabUrl)}`;
                            chrome.tabs.create({ url: bypassUrl });
                        }
                    } else if (isHLS) {
                        chrome.downloads.download({ url: media.url, filename: "playlist.m3u8", saveAs: true });
                    } else {
                        chrome.downloads.download({
                            url: media.url,
                            filename: fileName.substring(0, 40) + ekstensi,
                            saveAs: true
                        });
                    }
                };

                listDiv.appendChild(li);
            });
        });
    });
}

loadMediaData();
setInterval(loadMediaData, 1000);
