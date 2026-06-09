🚀 Smart Media Downloader Pro

Smart Media Downloader Pro adalah ekstensi Google Chrome super ringan dan canggih untuk mendeteksi serta mengunduh berbagai jenis media (Video, Audio, HLS, GIF) dari halaman web secara real-time. Ekstensi ini dilengkapi dengan teknologi Silent Auto-Bypass untuk mengunduh video streaming terenkripsi (seperti YouTube, X/Twitter, dan Facebook) langsung menjadi file MP4 utuh tanpa hambatan.

✨ Fitur Unggulan

⚡ Silent Auto-Bypass: Mendeteksi video dengan format Blob/DASH stream dan secara otomatis merakitnya di latar belakang menggunakan API Cobalt.tools. Unduhan MP4 utuh akan langsung berjalan tanpa harus pindah tab!

🧹 Smart Filter (Declutter): Secara otomatis mengabaikan file pelacak (tracker), ikon, atau file media berukuran sangat kecil (di bawah 100KB) agar daftar unduhan Anda tetap bersih dan tidak membingungkan.

🔄 Real-Time Scanner: Memadukan Network Sniffer (background.js) dan DOM MutationObserver (content.js) untuk menangkap video autoplay atau video yang baru di-scroll secara instan.

📑 HLS & M3U8 Support: Mampu mengenali tautan playlist dari situs streaming film dan menawarkannya sebagai file unduhan yang rapi.

🎨 macOS Glassmorphism UI: Antarmuka ekstensi didesain menggunakan gaya frosted glass khas Apple (macOS/iOS) yang sangat elegan, modern, dan responsif.

🛠️ Cara Instalasi (Developer Mode)

Karena ekstensi ini sangat canggih dan melakukan bypass jaringan, Anda perlu memasangnya melalui Mode Pengembang:

Clone repositori ini atau Download ZIP lalu ekstrak di komputer Anda.

Buka Google Chrome dan ketik chrome://extensions/ di address bar.

Aktifkan Developer mode (Mode Pengembang) di pojok kanan atas layar.

Klik tombol Load unpacked (Muat yang belum dikemas).

Pilih folder tempat Anda mengekstrak repositori ini.

🎉 Selesai! Sematkan (pin) ikon ekstensi ini di bilah atas browser Anda agar mudah diakses.

🚀 Cara Penggunaan

Buka situs web apa saja yang memuat video atau musik (misalnya YouTube, Facebook, Twitter, atau web normal).

Mainkan video tersebut selama 1-2 detik agar browser memuat jaringan medianya.

Klik ikon Smart Media Downloader di pojok kanan atas.

Anda akan melihat daftar media yang tertangkap.

Untuk Video Normal, klik unduh dan file akan langsung tersimpan.

Untuk Platform Terenkripsi (Label: Auto-Bypass), saat tombol unduh ditekan, ikon akan berubah menjadi loading (⏳). Ekstensi sedang melakukan proses perakitan rahasia di latar belakang. Dalam hitungan detik, file MP4 utuh akan otomatis terunduh ke komputer Anda!

📂 Struktur Repositori

manifest.json : Konfigurasi ekstensi, permissions (webRequest, activeTab, downloads), dan definisi Service Worker.

background.js : Network Sniffer yang mencegat lalu lintas jaringan untuk mencari file media dan mengekstrak Content-Length.

content.js : Skrip yang disuntikkan ke dalam halaman web untuk mendeteksi perubahan tag <video> secara real-time.

popup.html : Struktur antarmuka pengguna (UI) dengan desain Glassmorphism.

popup.js : Logika rendering antarmuka, pengelompokan ekstensi file, dan eksekutor Cobalt API Fetch untuk Auto-Bypass.

⚠️ Disclaimer Pihak Ketiga

Ekstensi ini menggunakan layanan API pihak ketiga yang bersifat open-source dan bebas iklan (Cobalt.tools) untuk fitur Auto-Bypass. Segala jenis pengunduhan konten yang dilindungi hak cipta adalah tanggung jawab pengguna sepenuhnya.
