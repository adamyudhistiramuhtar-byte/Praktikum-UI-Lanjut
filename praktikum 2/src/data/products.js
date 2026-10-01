export const products = [
  {
    id: 1,
    name: 'Headphone Wireless Pro',
    category: 'Elektronik',
    price: 450000,
    color: '#E8EDF3',
    icon: 'headphones',
    rating: 4.5,
    reviews: 128,
    desc: 'Headphone wireless dengan kualitas suara premium dan noise cancellation aktif. Cocok untuk bekerja dan menikmati musik sepanjang hari.',
    specs: [
      ['Merek', 'AudioTech'],
      ['Tipe', 'Over-ear Wireless'],
      ['Baterai', '30 jam'],
      ['Koneksi', 'Bluetooth 5.2'],
      ['Berat', '250 gram'],
    ],
  },
  {
    id: 2,
    name: 'Kemeja Linen Premium',
    category: 'Fashion',
    price: 285000,
    color: '#F0EDE8',
    icon: 'checkroom',
    rating: 4.3,
    reviews: 85,
    desc: 'Kemeja linen premium dengan bahan adem dan nyaman dipakai sepanjang hari. Cocok untuk acara formal maupun kasual.',
    specs: [
      ['Merek', 'StyleCo'],
      ['Bahan', '100% Linen'],
      ['Ukuran', 'M, L, XL'],
      ['Warna', 'Putih, Biru, Krem'],
      ['Perawatan', 'Cuci tangan'],
    ],
  },
  {
    id: 3,
    name: 'Tas Laptop Executive',
    category: 'Aksesoris',
    price: 375000,
    color: '#E8ECF0',
    icon: 'work',
    rating: 4.7,
    reviews: 96,
    desc: 'Tas laptop dengan desain profesional dan ruang penyimpanan luas. Dilengkapi padding untuk perlindungan maksimal laptop hingga 15.6 inci.',
    specs: [
      ['Merek', 'BagPro'],
      ['Kapasitas', '15.6 inci'],
      ['Bahan', 'Polyester Premium'],
      ['Kompartemen', '3 utama'],
      ['Berat', '800 gram'],
    ],
  },
  {
    id: 4,
    name: 'Smart Watch Elite',
    category: 'Elektronik',
    price: 520000,
    color: '#EAE8F0',
    icon: 'watch',
    rating: 4.6,
    reviews: 203,
    desc: 'Smartwatch dengan fitur kesehatan lengkap dan tampilan elegan. Mendukung notifikasi, pelacakan aktivitas, dan monitor detak jantung.',
    specs: [
      ['Merek', 'TechWear'],
      ['Layar', '1.4" AMOLED'],
      ['Baterai', '7 hari'],
      ['Tahan Air', 'IP68'],
      ['Sensor', 'Heart Rate, SpO2'],
    ],
  },
  {
    id: 5,
    name: 'Jaket Bomber Classic',
    category: 'Fashion',
    price: 340000,
    color: '#E8F0EC',
    icon: 'dry_cleaning',
    rating: 4.4,
    reviews: 67,
    desc: 'Jaket bomber dengan desain timeless dan bahan berkualitas tinggi. Nyaman dipakai untuk berbagai kesempatan dan cuaca.',
    specs: [
      ['Merek', 'UrbanWear'],
      ['Bahan', 'Polyester-Cotton'],
      ['Ukuran', 'M, L, XL, XXL'],
      ['Warna', 'Hitam, Hijau Army'],
      ['Musim', 'All Season'],
    ],
  },
  {
    id: 6,
    name: 'Dompet Kulit Asli',
    category: 'Aksesoris',
    price: 195000,
    color: '#F0ECE8',
    icon: 'wallet',
    rating: 4.2,
    reviews: 54,
    desc: 'Dompet kulit asli dengan jahitan rapi dan desain minimalis. Slot kartu dan kompartemen uang terorganisir dengan baik.',
    specs: [
      ['Merek', 'LeatherCraft'],
      ['Bahan', 'Kulit Sapi Asli'],
      ['Slot Kartu', '8 slot'],
      ['Dimensi', '11 x 9 cm'],
      ['Warna', 'Coklat, Hitam'],
    ],
  },
  {
    id: 7,
    name: 'Speaker Bluetooth Mini',
    category: 'Elektronik',
    price: 275000,
    color: '#E8EEF3',
    icon: 'speaker',
    rating: 4.5,
    reviews: 142,
    desc: 'Speaker bluetooth portable dengan suara jernih dan bass yang kuat. Tahan air dan baterai tahan lama hingga 12 jam.',
    specs: [
      ['Merek', 'SoundBox'],
      ['Daya', '10W'],
      ['Baterai', '12 jam'],
      ['Tahan Air', 'IPX5'],
      ['Koneksi', 'Bluetooth 5.0'],
    ],
  },
  {
    id: 8,
    name: 'Kacamata Polarized',
    category: 'Aksesoris',
    price: 165000,
    color: '#EDF0E8',
    icon: 'sunglasses',
    rating: 4.1,
    reviews: 38,
    desc: 'Kacamata dengan lensa polarized untuk perlindungan UV maksimal. Frame ringan dan nyaman dipakai seharian.',
    specs: [
      ['Merek', 'OpticView'],
      ['Lensa', 'Polarized UV400'],
      ['Frame', 'TR90 Ringan'],
      ['Berat', '25 gram'],
      ['Termasuk', 'Hard case'],
    ],
  },
]

export const categories = [
  { name: 'Elektronik', icon: 'memory', desc: 'Gadget dan perangkat elektronik' },
  { name: 'Fashion', icon: 'checkroom', desc: 'Pakaian dan gaya terkini' },
  { name: 'Aksesoris', icon: 'diamond', desc: 'Pelengkap gaya Anda' },
]

export function formatPrice(n) {
  return 'Rp ' + n.toLocaleString('id-ID')
}

export function renderStars(rating) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5 ? 1 : 0
  const empty = 5 - full - half
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty)
}
