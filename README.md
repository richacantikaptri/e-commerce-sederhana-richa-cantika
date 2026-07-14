# 🧋 Richa's Tumbler — E-Commerce Website

> Website toko online untuk **Richa's Tumbler (Richa Allshop)** — katalog produk, keranjang belanja, filter kategori, pilihan ukuran, pencarian produk, dan simulasi checkout, dibangun murni dengan **HTML, CSS, dan JavaScript (vanilla)**.

![Status](https://img.shields.io/badge/status-active--development-yellow)
![Frontend](https://img.shields.io/badge/frontend-HTML%2FCSS%2FJS-blue)
![Backend](https://img.shields.io/badge/backend-belum%20ada-lightgrey)
![License](https://img.shields.io/badge/license-private-lightgrey)

---

## 📑 Daftar Isi

1. [Tentang Proyek](#-tentang-proyek)
2. [Demo & Screenshot](#-demo--screenshot)
3. [Fitur Utama](#-fitur-utama)
4. [Struktur Folder & File](#-struktur-folder--file)
5. [Cara Menjalankan (Instalasi)](#-cara-menjalankan-instalasi)
6. [Cara Kerja Sistem (Teknis)](#-cara-kerja-sistem-teknis)
7. [Daftar Produk & Kategori](#-daftar-produk--kategori)
8. [Model Bisnis Singkat](#-model-bisnis-singkat)
9. [Target Market](#-target-market)
10. [Status Implementasi](#-status-implementasi)
11. [Roadmap Pengembangan](#-roadmap-pengembangan)
12. [Panduan Kontribusi / Pengembangan Lanjutan](#-panduan-kontribusi--pengembangan-lanjutan)
13. [Keamanan (Catatan Penting)](#-keamanan-catatan-penting)
14. [FAQ](#-faq)
15. [Kontak](#-kontak)

---

## 📖 Tentang Proyek

**Richa's Tumbler** adalah toko online yang menjual berbagai varian tumbler/botol minum dengan desain estetik, warna beragam, dan pilihan kapasitas fleksibel (300 ml – 900 ml). Proyek ini merupakan implementasi **front-end e-commerce sederhana** yang mencakup:

- Katalog 14 varian produk tumbler
- Sistem keranjang belanja interaktif (sidebar)
- Filter kategori (Tumbler Sedotan vs Tumbler Biasa)
- Kotak pencarian produk secara real-time
- Indikator stok otomatis (aman / menipis / habis)
- Pilihan ukuran dengan biaya tambahan berjenjang
- Simulasi proses checkout lengkap dengan ringkasan pesanan

Saat ini seluruh logika berjalan **100% di sisi client (browser)** menggunakan JavaScript murni — belum terhubung ke server/database maupun payment gateway sungguhan.

---

## 🖼️ Demo & Screenshot

> Tambahkan screenshot aktual di sini setelah website di-deploy, misalnya:
> `![Beranda](screenshots/beranda.png)`
> `![Keranjang](screenshots/keranjang.png)`
> `![Checkout](screenshots/checkout.png)`

---

## ✨ Fitur Utama

| Fitur | Deskripsi | Status |
|---|---|---|
| 🛍️ Katalog Produk | 14 varian tumbler dengan gambar, harga, dan deskripsi | ✅ |
| 🔎 Pencarian Produk | Cari produk berdasarkan nama, otomatis mengikuti filter kategori aktif | ✅ |
| 🏷️ Filter Kategori | Filter "Semua / Tumbler Sedotan / Tumbler Biasa" | ✅ |
| 📏 Pilihan Ukuran | 300 ml / 500 ml / 700 ml / 900 ml dengan biaya tambahan otomatis | ✅ |
| 📦 Indikator Stok | 🟢 Aman (>20), 🟠 Menipis (≤20), 🔴 Habis (tombol nonaktif otomatis) | ✅ |
| 🛒 Keranjang Belanja | Sidebar keranjang: tambah, kurangi jumlah, hapus item, hitung total otomatis | ✅ |
| 💳 Checkout | Form data pembeli (nama, alamat, no. HP, metode pembayaran) + ringkasan pesanan | ✅ (simulasi) |
| 📱 Responsive Design | Tampilan menyesuaikan di desktop, tablet, dan mobile (media query CSS) | ✅ |
| 🧾 Payment Gateway Nyata | Integrasi Midtrans/Xendit sungguhan | ⏳ Rencana |
| 🗄️ Backend & Database | Penyimpanan transaksi & stok di server | ⏳ Rencana |
| 🛠️ Panel Admin | Kelola stok & harga tanpa edit kode langsung | ⏳ Rencana |

---

## 📁 Struktur Folder & File

```
richas-tumbler/
├── index.html          # Halaman utama (struktur, style inline tambahan, script keranjang & checkout)
├── style.css           # Stylesheet utama (navbar, hero, grid produk, responsive design)
├── script.js           # Logika keranjang, checkout, filter kategori, stok (duplikat dari script inline index.html)
├── README.md           # Dokumentasi proyek (file ini)
├── /images/            # (disarankan) folder untuk semua aset gambar produk
│   ├── pink.jpeg
│   ├── black.jpeg
│   ├── white.jpeg
│   ├── red.jpeg
│   ├── Butter Bloom.jpeg
│   ├── Tumbler daily.jpeg
│   ├── Urban Bottle.jpeg
│   ├── Flow Bottle.jpeg
│   ├── Breeze Bottle.jpeg
│   ├── Motion Bottle.jpeg
│   ├── Luna Bottle.jpeg
│   ├── Pink Gradient Bottle.jpeg
│   ├── Grey Series.jpeg
│   └── Glow Bottle.jpeg
└── /docs/               # (opsional) dokumen pendukung bisnis
    └── business-overview.md
```

> ⚠️ **Catatan:** saat ini `index.html` memuat blok `<script>` dan sebagian `<style>` secara inline **sekaligus** merujuk ke `style.css` eksternal. Isi logika JavaScript di dalam `index.html` **identik** dengan `script.js`. Disarankan memilih salah satu pendekatan (idealnya pisahkan semua JS ke `script.js` dan hubungkan lewat `<script src="script.js"></script>`) agar tidak terjadi duplikasi kode yang menyulitkan maintenance.

---

## 🚀 Cara Menjalankan (Instalasi)

Karena proyek ini murni front-end (tanpa backend), cukup jalankan sebagai file statis.

### Opsi 1 — Buka langsung di browser
1. Pastikan semua file (`index.html`, `style.css`, `script.js`, dan seluruh gambar produk) berada dalam satu folder.
2. Klik dua kali `index.html`, atau klik kanan → *Open with* → browser pilihan (Chrome/Firefox/Edge).

### Opsi 2 — Menjalankan lewat local server (disarankan untuk pengembangan)
```bash
# Menggunakan Python
python -m http.server 8000

# Menggunakan Node.js (live-server)
npx live-server

# Menggunakan VS Code
# Install extension "Live Server" → klik kanan index.html → "Open with Live Server"
```
Lalu buka `http://localhost:8000` di browser.

### Opsi 3 — Hosting gratis (untuk deploy publik)
Karena tidak ada backend, proyek ini bisa langsung di-hosting di layanan static hosting seperti:
- **GitHub Pages**
- **Netlify**
- **Vercel**

---

## ⚙️ Cara Kerja Sistem (Teknis)

### 1. Data Produk
Setiap produk didefinisikan langsung sebagai elemen `<article class="product-card">` di `index.html`, dengan atribut penting:
- `data-kategori` → `"sedotan"` atau `"biasa"`, dipakai oleh sistem filter & pencarian.
- `data-stok` → jumlah stok saat ini (angka), diubah secara dinamis oleh JavaScript saat produk ditambah/dikurangi dari keranjang.

### 2. Sistem Filter Kategori (`filterKategori()`)
Menyembunyikan/menampilkan `.product-card` berdasarkan `data-kategori`, dengan menambahkan class `.hidden-item` pada produk yang tidak cocok.

### 3. Sistem Pencarian (`cariProduk()`)
Mencocokkan `keyword` pada judul produk **dan** kategori yang sedang aktif secara bersamaan (kombinasi filter + search), sehingga kedua fitur bisa dipakai berbarengan tanpa saling menimpa.

### 4. Sistem Ukuran & Harga (`tambahanUkuran`)
```js
const tambahanUkuran = {
  '300ml': 0,
  '500ml': 15000,
  '700ml': 30000,
  '900ml': 45000
};
```
Harga akhir = `hargaDasar + tambahanUkuran[ukuranDipilih]`. Setiap kombinasi produk+ukuran dianggap sebagai baris keranjang terpisah (`itemId = namaProduk + '||' + ukuran`), namun tetap mengurangi **stok fisik yang sama**.

### 5. Manajemen Stok Real-Time (`updateTampilanStok()`)
| Kondisi | Label | Class CSS |
|---|---|---|
| `stok <= 0` | "Stok Habis" + tombol nonaktif | `.stok-habis` |
| `stok <= 20` | "Stok: N" (warna oranye) | `.stok-menipis` |
| `stok > 20` | "Stok: N" (warna hijau) | `.stok-aman` |

### 6. Sistem Keranjang
Disimpan dalam variabel array `keranjang` (in-memory, **hilang saat halaman di-refresh** karena belum ada `localStorage`/database). Fungsi utama:
- `tambahKeKeranjang(nama, hargaDasar, key)` — validasi stok → hitung harga sesuai ukuran → tambah/update item.
- `ubahJumlah(itemId, perubahan)` — tambah/kurangi qty, otomatis sinkron dengan stok produk.
- `hapusItem(itemId)` — hapus item & kembalikan stok.
- `renderKeranjang()` — render ulang tampilan sidebar keranjang & total harga.

### 7. Checkout (Simulasi)
`bukaCheckout()` menghasilkan form (nama, alamat, no. HP, metode pembayaran) + ringkasan pesanan (termasuk ongkos kirim flat **Rp15.000**). Setelah `konfirmasiCheckout()` divalidasi (semua field wajib terisi), sistem menampilkan halaman sukses dan mengosongkan keranjang.

> 🔒 **Catatan penting:** karena seluruh proses ini berjalan di sisi client, data pesanan **tidak tersimpan** di mana pun — hanya simulasi visual. Untuk transaksi sungguhan, wajib ada backend untuk menyimpan order dan memverifikasi pembayaran (lihat bagian [Keamanan](#-keamanan-catatan-penting)).

---

## 🧴 Daftar Produk & Kategori

### Tumbler Sedotan
| Produk | Harga Dasar | Stok Awal |
|---|---|---|
| Minimalist Pink | Rp 240.000 | 50 |
| Classic Black | Rp 250.000 | 60 |
| Minimalis White | Rp 300.000 | 35 |
| Minimalis Red | Rp 160.000 | 20 |
| Flow Bottle | Rp 140.000 | 55 |
| Luna Bottle | Rp 200.000 | 65 |
| Pink Gradient Bottle | Rp 300.000 | 30 |
| Glow Bottle | Rp 250.000 | 0 (habis) |

### Tumbler Biasa
| Produk | Harga Dasar | Stok Awal |
|---|---|---|
| Butter Bloom | Rp 150.000 | 45 |
| Tumbler Daily | Rp 150.000 | 70 |
| Urban Bottle | Rp 250.000 | 15 |
| Breeze Bottle | Rp 180.000 | 40 |
| Motion Bottle | Rp 150.000 | 25 |
| Grey Series | Rp 280.000 | 10 |

**Biaya tambahan ukuran:** 300 ml (+Rp0) · 500 ml (+Rp15.000) · 700 ml (+Rp30.000) · 900 ml (+Rp45.000)
**Ongkos kirim:** flat Rp15.000/transaksi (saat ini)

---

## 💼 Model Bisnis Singkat

- **Model:** Direct-to-Consumer (D2C) e-commerce — jual langsung tanpa perantara marketplace besar.
- **Revenue utama:** penjualan produk, upsell ukuran, ongkos kirim.
- **Potensi tambahan:** aksesoris (pouch, sedotan pengganti), bundling, custom nama/logo, membership/loyalti.
- **Diferensiasi:** desain estetik ala brand premium dengan harga ramah kantong pelajar/pekerja muda, dikembangkan sebagai website sendiri (bukan sekadar listing marketplace).

📄 Detail lengkap strategi bisnis (target market, kompetitor, SEO, keamanan, analytics) tersedia di dokumen terpisah: **`business-overview.md`** (lihat isi lengkapnya di bagian bawah dokumentasi ini atau di folder `/docs`).

---

## 🎯 Target Market

- Remaja & dewasa muda (15–30 tahun), aktif di media sosial.
- Mahasiswa & pekerja muda yang butuh tumbler praktis harian.
- Pembeli online segmen menengah ke bawah yang mencari produk *self-reward* atau hadiah.

| Segmen | Kebutuhan Utama |
|---|---|
| Pelajar/Mahasiswa | Desain lucu, harga terjangkau, ukuran 500 ml |
| Pekerja Kantoran | Warna netral, ukuran 500–700 ml |
| Pecinta Olahraga/Outdoor | Tumbler sedotan, ukuran 700–900 ml |
| Pembeli Hadiah | Varian warna gradasi/estetik |

---

## 📊 Status Implementasi

| Fitur | Status |
|---|---|
| Katalog produk (14 varian) | ✅ Sudah berjalan |
| Filter kategori (Sedotan/Biasa) | ✅ Sudah berjalan |
| Pencarian produk | ✅ Sudah berjalan |
| Sistem keranjang & indikator stok | ✅ Sudah berjalan |
| Pilihan ukuran (300/500/700/900 ml) | ✅ Sudah berjalan |
| Checkout dengan ringkasan pesanan | ✅ Sudah berjalan (simulasi, tanpa backend) |
| Integrasi payment gateway sungguhan | ⏳ Rencana pengembangan |
| Panel admin kelola stok/harga | ⏳ Rencana pengembangan |
| Backend & database (server-side) | ⏳ Rencana pengembangan |
| SEO on-page & konten blog | ⏳ Rencana pengembangan |
| Data analytics & dashboard laporan | ⏳ Rencana pengembangan |

---

## 🗺️ Roadmap Pengembangan

- [ ] **Backend & Database** — migrasi logika stok/keranjang/checkout ke server (Node.js/Express, PHP, atau lainnya) + database (MySQL/PostgreSQL/MongoDB).
- [ ] **Payment Gateway Nyata** — integrasi Midtrans (Snap API) mode Sandbox → Production, mendukung Transfer Bank, E-Wallet (GoPay/OVO/DANA), QRIS, kartu kredit.
- [ ] **Panel Admin** — CRUD produk, update stok/harga tanpa edit kode langsung.
- [ ] **Sistem Akun Pelanggan** (opsional) — riwayat pesanan, wishlist.
- [ ] **Notifikasi Restock** — email/WhatsApp otomatis saat produk kembali tersedia.
- [ ] **Kupon & Diskon** — kode promo terintegrasi di checkout.
- [ ] **SEO & Konten** — meta tag, slug produk deskriptif, blog artikel pendukung.
- [ ] **Data Analytics** — Google Analytics 4, Meta Pixel, dashboard laporan penjualan internal.
- [ ] **Keamanan** — HTTPS penuh, validasi input sisi server, rate-limiting endpoint checkout.

---

## 🛠️ Panduan Kontribusi / Pengembangan Lanjutan

### Menambahkan produk baru
1. Tambahkan blok `<article class="product-card">` baru di `index.html` (salin dari produk yang sudah ada sebagai template).
2. Set `data-kategori` (`"sedotan"` atau `"biasa"`) dan `data-stok` sesuai kebutuhan.
3. Beri `id` unik untuk elemen stok (`stok-...`), select ukuran (`ukuran-...`), dan tombol (`btn-...`) — gunakan format *kebab-case* dari nama produk.
4. Tambahkan entri baru di object `stokElementId` pada JavaScript agar sinkron dengan sistem stok.
5. Pastikan gambar produk tersedia dan path `src` sesuai.

### Konsistensi nama elemen (penting!)
Sistem ini sangat bergantung pada **kecocokan string** antara nama produk (di `<h3>`), `key` di `stokElementId`, dan `id` elemen HTML. Kesalahan penulisan (typo/spasi berbeda) akan menyebabkan fitur stok/tombol tidak berfungsi.

### Rekomendasi refactor
Karena skala produk bisa terus bertambah, disarankan ke depannya:
- Ubah data produk dari HTML statis menjadi **array/objek JavaScript** (atau JSON), lalu render kartu produk secara dinamis via `map()`/template literal. Ini akan sangat memudahkan penambahan produk tanpa copy-paste HTML manual.

---

## 🔐 Keamanan (Catatan Penting)

Website ini **saat ini murni front-end** — semua data (stok, harga, transaksi) berada dan dapat dimanipulasi di sisi browser/client. Sebelum go-live untuk transaksi sungguhan, wajib dilakukan:

- ✅ Migrasi checkout & penyimpanan data pelanggan ke **backend server**.
- ✅ Gunakan **HTTPS** di seluruh halaman.
- ✅ **Validasi input di sisi server** (bukan hanya JavaScript client) untuk mencegah XSS/SQL Injection.
- ✅ Simpan kredensial API payment gateway di **environment variable server**, jangan pernah di kode front-end.
- ✅ Terapkan **rate-limiting** pada endpoint checkout untuk mencegah spam/abuse.

---

## ❓ FAQ

**Q: Apakah checkout ini memproses pembayaran sungguhan?**
A: Belum. Saat ini checkout hanya simulasi — tidak ada transaksi uang nyata maupun penyimpanan data ke server.

**Q: Kenapa stok kembali bertambah saat item dihapus dari keranjang?**
A: Karena stok yang "dikurangi" saat item ditambahkan ke keranjang bersifat sementara (reservasi visual) — sistem otomatis mengembalikannya jika item dihapus atau qty dikurangi, agar tampilan stok tetap akurat.

**Q: Apakah data keranjang tersimpan jika halaman di-refresh?**
A: Tidak. Karena keranjang disimpan di variabel JavaScript (memori browser), me-refresh halaman akan mengosongkan keranjang. Untuk persistensi, perlu ditambahkan `localStorage` atau database backend.

**Q: Bagaimana cara mengubah ongkos kirim?**
A: Ubah nilai variabel `ongkir` di dalam fungsi `bukaCheckout()` pada `script.js`/`index.html`.

---

## 📞 Kontak

- **Email:** richacantikap@gmail.com
- **WhatsApp:** +62 821 2059 0518
- **Pemilik/Pengembang:** Richa — Administrasi Bisnis 3

---

*README ini bersifat living document — disarankan diperbarui secara berkala seiring penambahan fitur, produk baru, dan perkembangan bisnis Richa's Tumbler.*

*© 2026 Richa Allshop*
