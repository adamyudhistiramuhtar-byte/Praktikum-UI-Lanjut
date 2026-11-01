# Gatherly — Praktikum 5 (User Flow & Interaction Flow)

Implementasi alur pendaftaran event end-to-end, manajemen tiket digital, validasi formulir interaktif, dan navigasi multi-step pada aplikasi Vue Gatherly sesuai dengan Modul 5.

## Fitur Utama Modul 5

1. **State Registrasi & Sinkronisasi LocalStorage (`useEvents.js`)**:
   - Penyimpanan persistent tiket pendaftaran (`gatherly_user_registrations`) via deep watcher.
   - Fungsi `registerAttendee` dengan pembuatan kode booking unik otomatis (`GTH-` + 4 digit angka).
   - Pengurangan kuota kursi event secara real-time saat registrasi berhasil.
   - Pengecekan status pendaftaran `isUserRegistered(eventId)` dan query `getRegistrationByEventId(eventId)`.
   - Fungsi `cancelRegistration(eventId)` yang mengembalikan kuota kursi dan menghapus tiket pendaftaran.
   - Penghapusan cascading registrasi saat event dihapus (`deleteEvent`).

2. **Dekomposisi & Refaktorisasi Manajemen Event**:
   - `EventManagement.vue`: Pemisahan form pembuatan event dan kartu event ke komponen modular terpisah (`EventCreateForm.vue` & `OrganizerEventCard.vue`).
   - Tab navigasi sistem (Active Events, Create New Event, Completed Events).

3. **Alur Registrasi Interaktif (`EventRegistration.vue`)**:
   - Tata letak 2 kolom (`RegistrationSummary.vue` & `RegistrationForm.vue`).
   - Formulir reaktif dengan validasi real-time untuk nama lengkap, email, nomor telepon, tanggal lahir, dan alasan hadir.
   - Deteksi dirty state form (`isFormDirty`) dan dialog konfirmasi sebelum membatalkan/meninggalkan pengisian formulir.
   - Modal tanda terima registrasi langsung (`RegistrationReceipt.vue` via `AppModal.vue`).

4. **Koleksi & Tanda Terima Tiket Digital**:
   - Halaman daftar tiket tersimpan (`YourEvents.vue`) dengan tag siklus acara (`UPCOMING` vs `CONCLUDED`) dan opsi pembatalan pendaftaran.
   - Detail tanda terima tiket digital (`TicketReceipt.vue` di rute `/browse/your-events/:id`) menampilkan ringkasan acara, profil peserta, kode booking, dan status tiket.

5. **Hierarki Tombol & Status Event (`EventDetail.vue` & `EventCard.vue`)**:
   - Prioritas aksi cerdas: `Registration Closed` (selesai) &rarr; `Already Registered` &rarr; `Sold Out` (kuota habis) &rarr; `Register Now`.
   - Badge visual `.badge-registered` pada kartu event.

## Project Setup

```sh
npm install
```

### Jalankan Development Server

```sh
npm run dev
```

### Build untuk Produksi

```sh
npm run build
```
