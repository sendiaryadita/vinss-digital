# Testing Website Jualan Multilayanan

## Cara Test File HTML

### Metode 1: Buka dengan Browser langsung
1. Buka File Explorer
2. Navigasi ke: `c:\Users\Lenovo\Downloads\web-sendi\`
3. Double-click file: `website_jualan_multilayanan.html`
4. Browser akan terbuka otomatis

### Metode 2: Drag & Drop ke Browser
1. Buka browser (Chrome, Firefox, Edge, dll)
2. Drag file `website_jualan_multilayanan.html` ke browser

### Metode 3: Klik Kanan > Open With
1. Klik kanan file `website_jualan_multilayanan.html`
2. Pilih "Open With" 
3. Pilih browser pilihan Anda

## Fitur yang Bisa Ditest

### 1. Klik Tombol Layanan (Halaman Utama)
- Klik salah satu tombol layanan: CANVA, YOUTUBE, VIDIO, NETFLIX, CAPCUT, CHAT GPT, WETV
- Halaman harus berubah ke halaman detail layanan tersebut

### 2. Tombol Kembali
- Setelah masuk halaman detail, klik tombol "Kembali"
- Harus kembali ke halaman utama

### 3. Copy Format
- Di halaman detail layanan, klik tombol "Copy Format"
- Notification harus muncul: "Format disalin ke clipboard"

### 4. Order via WhatsApp
- Di halaman detail layanan, klik tombol "Order via WhatsApp"
- Harus membuka WhatsApp (web atau app) dengan format text sudah terisi

### 5. Search Layanan
- Di halaman utama, ketik di kolom pencarian
- Contoh: "canva", "netflix", dll
- Layanan yang sesuai harus ditampilkan, lainnya disembunyikan

## Jika Ada Error

### Buka Developer Console untuk Debug:
1. Tekan `F12` atau `Ctrl+Shift+I` saat browser terbuka
2. Pilih tab "Console"
3. Lihat apakah ada error messages
4. Screenshoot atau catat error tersebut

### Test Alternatif - File Simple:
Untuk memastikan JavaScript dasar berfungsi:
1. Buka file: `test-simple.html`
2. Klik tombol test
3. Halaman harus berubah dan tombol kembali berfungsi
4. Cek Developer Console untuk debug messages

## Daftar File

- `website_jualan_multilayanan.html` - Website utama (FILE UTAMA)
- `test-simple.html` - Test simpel untuk verifikasi JavaScript
- `test.html` - Test alternatif
- `README.md` - File ini (panduan testing)

## Troubleshooting

### Halaman tidak berubah saat klik tombol:
1. Buka Developer Console (F12)
2. Lihat tab "Console" untuk error messages
3. Periksa apakah ada error javascript

### WhatsApp tidak terbuka:
1. Pastikan nomor WhatsApp sudah benar di konfigurasi
2. Periksa format nomor (harus format internasional tanpa +)
3. Di mobile, pastikan WhatsApp sudah terinstall

### Tombol tidak responsif:
1. Reload halaman (Ctrl+R atau F5)
2. Clear cache browser (Ctrl+Shift+Delete)
3. Coba browser lain
4. Cek Developer Console untuk error

## Informasi Nomor WhatsApp

Nomor yang dikonfigurasi: `6285758131482`

Untuk mengubah nomor:
1. Buka file `website_jualan_multilayanan.html` dengan text editor
2. Cari baris: `const WA_NUMBER = '6285758131482';`
3. Ubah nomor dengan nomor Anda sendiri
4. Jangan lupa untuk include kode negara (62 untuk Indonesia)
5. Simpan file dan reload halaman di browser

---
**Last Updated:** 28 November 2025
