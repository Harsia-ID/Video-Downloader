# 🚀 Smart Media Downloader Pro

Smart Media Downloader Pro adalah ekstensi Google Chrome yang ringan dan canggih untuk mendeteksi serta mengunduh berbagai jenis media seperti Video, Audio, HLS Stream, dan GIF langsung dari halaman web secara real-time.

Ekstensi ini dilengkapi dengan fitur Auto-Bypass yang memungkinkan pemrosesan media streaming tertentu secara otomatis sehingga pengguna dapat mengunduh file dengan lebih mudah.

---

## ✨ Features

### ⚡ Silent Auto-Bypass
Mendeteksi video berbasis Blob dan DASH Stream kemudian memprosesnya secara otomatis di latar belakang.

### 🔄 Real-Time Scanner
Menggabungkan pemantauan jaringan dan pemindaian DOM untuk menangkap media yang dimuat secara dinamis.

### 📑 HLS & M3U8 Support
Mendeteksi playlist HLS (`.m3u8`) dari berbagai situs streaming.

### 🧹 Smart Filter
Menyaring file yang tidak relevan seperti:

- Tracker
- Analytics request
- Icons
- Media berukuran kecil (<100 KB)

### 🎨 Modern Glassmorphism UI
Antarmuka modern dengan desain Glassmorphism yang ringan dan responsif.

--- 

## 🛠 Installation

### Install via Developer Mode

1. Clone repository:

```bash
git clone https://github.com/Harsia-ID/Video-Downloader.git
```

2. Buka Google Chrome.

3. Masuk ke:

```
chrome://extensions/
```

4. Aktifkan **Developer Mode**.

5. Klik **Load unpacked**.

6. Pilih folder repository yang telah di-clone atau diekstrak.

7. Selesai.

---

## 🚀 Usage

1. Buka website yang berisi video atau audio.
2. Putar media selama beberapa detik.
3. Klik ikon ekstensi.
4. Tunggu proses deteksi media.
5. Pilih file yang ingin diunduh.
6. Klik tombol Download.

---

## 📂 Project Structure

```text
Video-Downloader/
│
├── manifest.json
├── background.js
├── content.js
├── popup.html
├── popup.js
├── assets/
│   ├── icons/
│   └── screenshots/
│
└── README.md
```

---

## 📄 File Description

| File | Description |
|--------|-------------|
| manifest.json | Konfigurasi utama ekstensi |
| background.js | Monitoring request jaringan |
| content.js | Scanner elemen media pada halaman |
| popup.html | Tampilan antarmuka pengguna |
| popup.js | Logika UI dan proses download |

---

## 🔒 Permissions

Ekstensi menggunakan beberapa permission berikut:

```json
{
  "permissions": [
    "activeTab",
    "downloads",
    "storage",
    "webRequest"
  ]
}
```

---

## 🎯 Supported Formats

| Format | Status |
|----------|----------|
| MP4 | ✅ |
| WEBM | ✅ |
| MP3 | ✅ |
| M4A | ✅ |
| AAC | ✅ |
| OGG | ✅ |
| GIF | ✅ |
| M3U8 | ✅ |
| HLS Stream | ✅ |

---

## 🤝 Contributing

Kontribusi selalu diterima.

1. Fork repository ini.
2. Buat branch baru.
3. Commit perubahan.
4. Push ke branch Anda.
5. Buat Pull Request.

---

## 🐛 Report Bug

Jika menemukan bug:

1. Buka tab Issues.
2. Jelaskan langkah reproduksi bug.
3. Sertakan screenshot jika memungkinkan.

---

## ⚠ Disclaimer

Project ini dibuat untuk tujuan edukasi dan penggunaan pribadi.

Pengguna bertanggung jawab penuh terhadap penggunaan software ini dan wajib mematuhi:

- Hak cipta yang berlaku
- Ketentuan layanan website terkait
- Peraturan hukum yang berlaku di wilayah masing-masing

Developer tidak bertanggung jawab atas penyalahgunaan software ini.

---

## 📜 License

MIT License

Copyright (c) 2026 Harsia-ID

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files to deal in the Software without restriction.
