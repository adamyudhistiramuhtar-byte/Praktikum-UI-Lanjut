# Gatherly — Praktikum 6

Project ini adalah salinan independen Praktikum 5 yang mengintegrasikan event dengan REST API. Node.js yang didukung mengikuti `package.json` (22.18+ pada major 22, atau 24.12+).

## Menjalankan

```sh
npm install
cp .env.example .env
# Isi VITE_API_URL pada .env dengan Base URL MockAPI milik Anda
npm run dev
```

Untuk build produksi jalankan `npm run build`. Perubahan `.env` memerlukan restart Vite. `.env` tidak disertakan dalam repository; `VITE_` tersedia di browser dan tidak boleh berisi rahasia.

## MockAPI dan data awal

1. Buat project di https://mockapi.io/ dengan prefix `/api/v1` dan resource `events`.
2. Gunakan field `title`, `cat`, `date`, `loc`, `desc` (string), `quota` (number), dan `done` (boolean); `id` dibuat MockAPI.
3. Buka **Data** resource `events`, salin seluruh isi `data/events-seed.json` (lima event dari Modul 6), lalu **Update**.
4. Isi `.env` dengan `VITE_API_URL=https://<kode-project>.mockapi.io/api/v1` memakai URL asli project. Jangan menambahkan `/events` di akhir; kode menambahkan resource tersebut sendiri.

Aplikasi menampilkan pesan konfigurasi bila URL belum diisi. Event menggunakan GET `/events` dan `/events/:id`, POST `/events`, PUT `/events/:id`, serta DELETE `/events/:id`; tidak ada fallback sukses palsu.

## Perubahan dan batasan

Katalog memiliki state loading/skeleton, error/retry, kosong, dan berhasil. Detail dan pendaftaran mengambil event berdasarkan ID saat diakses langsung. Dashboard memuat data server; pembuatan, penyelesaian, dan penghapusan diproses secara asinkron. Form memiliki validasi per field dan tombol loading; penghapusan memerlukan konfirmasi dan membersihkan tiket lokal setelah DELETE sukses.

Pendaftaran dan tiket tetap di `localStorage` sesuai modul. Pengurangan kuota saat pendaftaran hanya ada di memori browser, tidak disinkronkan ke server dan akan kembali ke kuota server setelah pemuatan ulang; fitur ini bukan sistem reservasi bersama dan tidak menjamin kuota lintas pengguna. Event lama dari `gatherly_events` tidak otomatis diunggah ke MockAPI. Tiket lokal hanya dibersihkan otomatis ketika event dihapus dari browser ini melalui dashboard; penghapusan di perangkat lain tidak menghapus data lokalnya.

## Pengujian

- `npm install --no-audit --no-fund` dan `npm run build`: berhasil.
- `node tests/api.test.mjs`: lulus menggunakan `fetch` mock terpisah, mencakup GET tertunda/loading, data dan array kosong, offline dan retry, detail dan 404, POST, registrasi lokal, PUT, DELETE gagal dan sukses, serta pembersihan tiket.
- Belum dilakukan: uji interaksi UI, console browser, responsive, double submit dan dialog secara langsung, DevTools throttling/offline, serta integrasi MockAPI nyata. Endpoint belum diberikan; mock tidak membuktikan layanan nyata berfungsi.
- Project tidak menyediakan script lint.
