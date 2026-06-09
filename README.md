🚀 Smart Media Downloader Pro

Smart Media Downloader Pro adalah ekstensi Google Chrome yang ringan namun canggih untuk mendeteksi dan mengunduh berbagai jenis media (Video, Audio, HLS, dan GIF) dari halaman web secara real-time.

Ekstensi ini dilengkapi dengan teknologi Silent Auto-Bypass yang memungkinkan pengunduhan video streaming yang menggunakan format Blob atau DASH stream menjadi file MP4 utuh secara otomatis melalui integrasi API pihak ketiga.

✨ Fitur Unggulan
⚡ Silent Auto-Bypass

Mendeteksi video dengan format Blob/DASH stream dan secara otomatis memprosesnya di latar belakang menggunakan API Cobalt.tools. File MP4 akan langsung terunduh tanpa perlu membuka tab tambahan.

🧹 Smart Filter (Declutter)

Secara otomatis menyaring file yang tidak relevan seperti tracker, icon, atau media berukuran sangat kecil (di bawah 100 KB) sehingga daftar media tetap bersih dan mudah dipahami.

🔄 Real-Time Scanner

Menggabungkan Network Sniffer (background.js) dan DOM MutationObserver (content.js) untuk menangkap media yang muncul secara dinamis, termasuk video autoplay atau video yang dimuat saat pengguna melakukan scroll.

📑 HLS & M3U8 Support

Mampu mendeteksi playlist streaming berbasis HLS (.m3u8) dan menampilkannya sebagai opsi unduhan yang lebih rapi.

🎨 macOS Glassmorphism UI

Menggunakan desain antarmuka bergaya Glassmorphism ala macOS/iOS dengan tampilan modern, elegan, dan responsif.

🛠️ Instalasi (Developer Mode)

Karena ekstensi ini memerlukan akses tingkat lanjut untuk mendeteksi lalu lintas media, instalasi dilakukan melalui Chrome Developer Mode.

1. Download Repository

Clone repository:

git clone https://github.com/username/smart-media-downloader-pro.git

Atau download file ZIP dan ekstrak ke komputer Anda.

2. Buka Halaman Extensions

Masukkan alamat berikut pada browser Chrome:

chrome://extensions/
3. Aktifkan Developer Mode

Aktifkan tombol Developer mode yang berada di pojok kanan atas.

4. Load Extension

Klik tombol:

Load unpacked

Kemudian pilih folder repository yang telah diekstrak.

5. Selesai

Ekstensi berhasil terpasang.

Disarankan untuk melakukan Pin Extension agar lebih mudah diakses dari toolbar browser.

🚀 Cara Penggunaan
Langkah 1

Buka situs yang memuat media, seperti:

YouTube
Facebook
X (Twitter)
Situs video lainnya
Situs musik atau podcast
Website biasa yang menyediakan file media
Langkah 2

Putar video selama beberapa detik agar browser memuat jaringan media.

Langkah 3

Klik ikon Smart Media Downloader Pro pada toolbar browser.

Langkah 4

Daftar media yang berhasil terdeteksi akan ditampilkan.

Langkah 5

Pilih salah satu media untuk diunduh.

Video Normal

Klik tombol Download dan file akan langsung tersimpan ke komputer.

Media dengan Label Auto-Bypass

Saat tombol download ditekan:

Ikon akan berubah menjadi loading (⏳)
Ekstensi akan memproses media di latar belakang
Setelah proses selesai, file MP4 akan otomatis diunduh
📂 Struktur Repository
smart-media-downloader-pro/
│
├── manifest.json
├── background.js
├── content.js
├── popup.html
├── popup.js
└── assets/
manifest.json

Konfigurasi utama ekstensi, permission yang digunakan, serta definisi Service Worker.

background.js

Network Sniffer yang memantau lalu lintas jaringan dan mendeteksi sumber media yang tersedia.

content.js

Script yang dijalankan pada halaman web untuk memantau perubahan elemen video secara real-time.

popup.html

Struktur tampilan antarmuka pengguna (UI).

popup.js

Mengatur logika antarmuka, pengelompokan file media, serta integrasi proses Auto-Bypass.

🔒 Permissions yang Digunakan
{
  "permissions": [
    "downloads",
    "storage",
    "activeTab",
    "webRequest"
  ]
}

Permissions digunakan untuk:

Mengakses tab aktif
Mendeteksi permintaan media
Menyimpan konfigurasi pengguna
Mengelola proses pengunduhan
⚠️ Disclaimer

Ekstensi ini menggunakan layanan API pihak ketiga yang bersifat open-source dan bebas iklan untuk mendukung beberapa fitur pemrosesan media.

Pengguna bertanggung jawab penuh atas penggunaan ekstensi ini dan wajib mematuhi hukum, syarat layanan, serta ketentuan hak cipta yang berlaku pada setiap platform yang digunakan.

Pengembang tidak bertanggung jawab atas penyalahgunaan perangkat lunak ini untuk tujuan yang melanggar hukum atau ketentuan layanan pihak ketiga.

📜 License

MIT License

Copyright (c) 2026 Smart Media Downloader Pro

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.
