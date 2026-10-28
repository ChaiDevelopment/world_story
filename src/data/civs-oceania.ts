import type { Civilization } from '../types';

type Ring = [number, number][];

/** Cincin elips untuk pulau kecil (12 titik); `rot` dalam derajat. Peta memotongnya dengan garis pantai. */
const isle = (lon: number, lat: number, rx: number, ry: number, rot = 0, n = 12): Ring => {
  const a = (rot * Math.PI) / 180;
  const out: Ring = [];
  for (let i = 0; i < n; i++) {
    const t = (2 * Math.PI * i) / n;
    const x = rx * Math.cos(t);
    const y = ry * Math.sin(t);
    out.push([+(lon + x * Math.cos(a) - y * Math.sin(a)).toFixed(3), +(lat + x * Math.sin(a) + y * Math.cos(a)).toFixed(3)]);
  }
  return out;
};

// Daratan Australia (kasar; laut dipotong peta). Dipakai dua periode.
const AU_MAINLAND: Ring = [[142.5, -10.7], [143.8, -14.0], [145.5, -16.5], [146.5, -19.2], [149.0, -21.0], [150.8, -23.0], [153.2, -25.5], [153.7, -28.5], [152.6, -32.2], [151.3, -34.0], [150.2, -37.0], [146.4, -39.2], [143.5, -38.9], [140.5, -38.0], [138.5, -35.8], [136.5, -35.3], [135.0, -34.8], [133.5, -32.5], [129.0, -31.8], [125.0, -32.6], [122.0, -34.2], [118.0, -35.2], [115.0, -34.5], [114.9, -33.0], [115.5, -31.0], [113.8, -26.5], [113.6, -24.0], [116.0, -20.7], [121.0, -19.0], [123.0, -16.5], [126.0, -14.0], [129.5, -14.8], [130.8, -12.3], [133.0, -11.2], [136.8, -11.8], [136.0, -14.0], [137.5, -16.2], [140.5, -17.5], [141.5, -14.5], [141.8, -12.0]];
const AU_ISLANDS: Ring[] = [isle(146.5, -42.1, 1.95, 1.6), isle(142.15, -10.3, 0.4, 0.3), isle(144.0, -9.9, 0.25, 0.2)];

// Pulau Polinesia yang dipakai dua periode (semua di satu sisi garis bujur 180)
const TONGA: Ring[] = [isle(-175.2, -21.15, 0.3, 0.22), isle(-174.35, -19.85, 0.3, 0.3), isle(-174.0, -18.65, 0.3, 0.22)];
const SAMOA: Ring[] = [isle(-172.1, -13.6, 0.75, 0.25), isle(-171.75, -13.95, 0.5, 0.2)];

export const oceaniaCivs: Civilization[] = [
  {
    id: 'polinesia',
    name: 'Lapita, Polinesia, dan Māori',
    region: 'Oseania',
    start: -1500,
    end: 1840,
    color: '#00e5c0',
    capital: { name: 'Tonga – Samoa – Tahiti (Tongatapu)', lon: -175.2, lat: -21.14 },
    summary:
      'Kisah ini bermula sekitar 1500 SM, ketika para pelaut penutur Austronesia membawa tembikar berhias bergaya Lapita dari Kepulauan Bismarck ke pulau-pulau di Pasifik barat. Di Tonga dan Samoa mereka berhenti hampir seribu tahun, lalu berlayar lagi ke timur dan utara dengan perahu bercadik ganda hingga mencapai Hawaii, Rapa Nui, dan Aotearoa. Pelayaran itu menjadi salah satu perluasan manusia terbesar di bumi, dan dilakukan tanpa kompas atau peta tertulis.',
    highlights: [
      'Budaya Lapita menyebar dari Kepulauan Bismarck ke Vanuatu, Fiji, Tonga, dan Samoa (±1500–800 SM)',
      'Jeda panjang di Polinesia Barat dan terbentuknya budaya Polinesia leluhur',
      'Pelayaran ke segitiga Polinesia: Hawaii, Rapa Nui, dan Aotearoa (±1000–1300)',
      'Navigasi bintang, ombak, dan burung tanpa instrumen',
      'Moai Rapa Nui dan marae di Kepulauan Society',
      'Persatuan Hawaii oleh Kamehameha I (1810) dan Perjanjian Waitangi (1840)',
    ],
    economy:
      'Pelaut Polinesia membawa tanaman dan hewan di perahu mereka: talas, ubi jalar, keladi, sukun, pisang, kelapa, babi, ayam, dan anjing. Di pulau-pulau tinggi mereka bertani dan berkebun, di atol mereka menangkap ikan dan memanen kelapa. Pertukaran barang antarpulau, misalnya batu basal untuk kapak dari Tonga hingga Fiji, menunjukkan jaringan perdagangan jarak jauh sejak awal.',
    religionCulture:
      'Orang Polinesia mengenal konsep mana (kekuatan spiritual) dan tapu (pantangan suci), dengan dewa-dewa seperti Tangaroa, Tu, dan Lono. Tato, tarian, dan silsilah lisan menyimpan sejarah komunitas, dan tempat suci seperti marae dan heiau menjadi pusat upacara. Para navigator menguasai pengetahuan tentang bintang, arus, dan awan, yang diturunkan dari guru ke murid. Kumara atau ubi jalar, yang berasal dari Amerika Selatan, menunjukkan kontak dengan Amerika sebelum Eropa tiba.',
    decline:
      'Polinesia tidak runtuh sebagai satu bangsa, tetapi banyak komunitasnya sangat terpukul setelah kontak dengan Eropa. Penyakit baru seperti cacar dan campak membunuh banyak orang di Hawaii, Tahiti, dan Rapa Nui. Hawaii disatukan oleh Kamehameha I pada 1810, sedangkan pada 1840 sejumlah pemimpin Māori menandatangani Perjanjian Waitangi dengan Britania, yang makna dan terjemahannya masih diperdebatkan sampai sekarang.',
    territories: [
      {
        from: -1500,
        to: 1000,
        // Lapita dan Polinesia Barat: Bismarck, Vanuatu, Kaledonia Baru, Fiji, Tonga, Samoa (pulau terpisah)
        polygons: [
          isle(150.0, -5.9, 2.2, 0.8, 20),
          isle(151.9, -3.7, 1.7, 0.6, -40),
          isle(167.1, -15.3, 0.45, 0.45),
          isle(167.8, -16.3, 0.35, 0.4),
          isle(168.3, -17.7, 0.35, 0.3),
          isle(169.2, -19.1, 0.5, 0.7),
          isle(165.5, -21.2, 1.8, 0.65, -35),
          isle(177.95, -17.8, 0.75, 0.55),
          isle(179.2, -16.6, 0.7, 0.35, -10),
          ...TONGA,
          ...SAMOA,
        ],
        note: 'Lapita dan Polinesia Barat',
      },
      {
        from: 1000,
        to: 1840,
        // Pelayaran ke segitiga Polinesia: Hawaii, Society, Cook, Marquesas, Rapa Nui, Aotearoa, Chatham
        polygons: [
          // Hawaii
          isle(-155.5, 19.6, 0.7, 0.75),
          isle(-156.35, 20.8, 0.3, 0.3),
          isle(-157.0, 21.15, 0.4, 0.15),
          isle(-157.97, 21.47, 0.3, 0.22),
          isle(-159.52, 22.05, 0.28, 0.25),
          // Kepulauan Society, Tuamotu, Cook, Marquesas, Gambier
          isle(-149.45, -17.65, 0.4, 0.3),
          isle(-151.4, -16.8, 0.35, 0.25),
          isle(-147.65, -15.1, 0.4, 0.25),
          isle(-159.78, -21.23, 0.25, 0.2),
          isle(-140.1, -8.85, 0.35, 0.3),
          isle(-139.0, -9.8, 0.35, 0.3),
          isle(-134.95, -23.12, 0.25, 0.22),
          // Rapa Nui
          isle(-109.35, -27.12, 0.25, 0.2),
          // Aotearoa (Pulau Utara dan Selatan)
          [[172.7, -34.5], [173.3, -34.8], [174.2, -36.0], [174.9, -36.9], [175.5, -37.2], [176.2, -37.6], [177.2, -37.7], [178.5, -37.7], [178.0, -38.7], [177.0, -39.3], [176.8, -40.1], [175.9, -41.3], [175.0, -41.6], [174.7, -41.3], [175.2, -40.2], [174.5, -39.9], [173.8, -39.3], [174.6, -38.2], [174.6, -37.0], [174.0, -36.0], [173.2, -35.3]],
          [[172.7, -40.5], [173.4, -41.0], [174.2, -41.6], [173.7, -42.5], [172.9, -43.6], [172.0, -44.4], [171.2, -44.9], [170.7, -45.9], [169.5, -46.6], [168.3, -46.7], [167.0, -46.2], [166.4, -45.4], [167.5, -44.5], [169.0, -43.6], [170.2, -43.0], [171.3, -42.4], [172.2, -41.5]],
          // Kepulauan Chatham, Tonga, Samoa
          isle(-176.5, -44.0, 0.45, 0.3),
          ...TONGA,
          ...SAMOA,
        ],
        note: 'Pelayaran ke segitiga Polinesia',
      },
    ],
    sources: [
      { title: 'Vaka Moana: The Voyages of the Ancestors', author: 'K. R. Howe (ed.)', year: 2006, kind: 'sekunder' },
      { title: 'The Journals of Captain James Cook', author: 'James Cook (ed. J. C. Beaglehole)', year: '1955–1967', kind: 'primer' },
      { title: 'Dating the late prehistoric dispersal of Polynesians to New Zealand using the commensal Pacific rat', author: 'Wilmshurst dkk.', year: 2008, kind: 'arkeologi' },
      { title: 'High-precision radiocarbon dating shows recent and rapid initial human colonization of East Polynesia', author: 'Wilmshurst dkk., PNAS', year: 2011, kind: 'arkeologi' },
      { title: 'Native American gene flow into Polynesia predating Easter Island settlement', author: 'Ioannidis dkk., Nature', year: 2020, kind: 'sekunder' },
    ],
  },
  {
    id: 'aborigin-australia',
    name: 'Aborigin dan Penduduk Selat Torres',
    region: 'Oseania',
    start: -3500,
    end: 1901,
    color: '#ff6b35',
    capital: { name: 'Uluru (situs suci)', lon: 131.04, lat: -25.34 },
    summary:
      'Kisah ini bermula jauh sebelum penanggalan yang dipakai atlas ini: bukti arkeologi menunjukkan manusia tinggal di Australia sedikitnya 50.000 hingga 65.000 tahun lalu. Orang Aborigin dan Penduduk Selat Torres membangun ratusan bangsa dengan bahasa, hukum, dan wilayah masing-masing, dan merawat tanah dengan api dan pengetahuan lingkungan yang dalam. Pada 1788 koloni Britania didirikan di Sydney Cove, dan sejak itu wilayah mereka terus menyusut.',
    highlights: [
      'Bukti manusia di Madjedbebe (Arnhem Land) dan Danau Mungo (±42.000 tahun lalu)',
      'Perangkap ikan Budj Bim yang berusia sekitar 6.600 tahun',
      'Seni cadas di Kakadu dan Murujuga, tradisi tertua yang masih hidup',
      'Lebih dari 250 bahasa, Tjukurpa (Dreaming), songlines, dan sistem kekerabatan',
      'Kontak dengan pelaut Makassar dan Bugis di Arnhem Land (marege\')',
      'Perlawanan terhadap koloni Britania, dari Pemulwuy hingga Tasmania',
    ],
    economy:
      'Setiap bangsa mengelola wilayahnya sebagai sumber makanan lintas musim: berburu kanguru dan emu, memancing, mengumpulkan tumbuhan, dan memanen biji rumput. Pembakaran terkendali membuka padang rumput, memunculkan tumbuhan muda, dan mengurangi risiko kebakaran besar. Pertukaran lintas wilayah, misalnya batu kapak dari tambang dan pigmen oker, menghubungkan komunitas yang jauh.',
    religionCulture:
      'Tjukurpa atau Dreaming menuturkan bagaimana makhluk leluhur membentuk tanah, air, dan hukum manusia. Songlines, jalur lagu yang melintasi benua, berfungsi sebagai peta, kalender, dan hukum sekaligus. Sistem kekerabatan dan totem mengatur pernikahan, kewajiban, dan hak atas tanah. Peringatan: sebagian komunitas melarang menyebut atau menampilkan gambar orang yang telah wafat.',
    decline:
      'Setelah 1788, wabah cacar, perampasan tanah, kekerasan, dan hukum diskriminatif menghancurkan banyak komunitas, terutama di pesisir tenggara dan Tasmania. Perlawanan terjadi di banyak tempat, dan sebagian peristiwa kekerasan dicatat resmi, seperti pembantaian Myall Creek. Pada 1901 Australia membentuk federasi, tetapi orang Aborigin dan Penduduk Selat Torres tidak dihitung dalam sensus dan dikecualikan dari banyak hak. Mereka tetap hidup, menjaga bahasa dan hukumnya, dan memperjuangkan hak-haknya sampai kini.',
    territories: [
      {
        from: -3500,
        to: 1788,
        // Australia sebelum kolonisasi (seluruh benua, Tasmania, Selat Torres)
        polygons: [AU_MAINLAND, ...AU_ISLANDS],
        note: 'Australia sebelum penjajahan',
      },
      {
        from: 1788,
        to: 1901,
        // Wilayah penduduk asli yang terus menyusut (digambar sama; lihat catatan di kronik)
        polygons: [AU_MAINLAND, ...AU_ISLANDS],
        note: 'Kolonisasi Britania (wilayah penduduk asli terus menyusut)',
      },
    ],
    sources: [
      { title: 'The Biggest Estate on Earth', author: 'Bill Gammage', year: 2011, kind: 'sekunder' },
      { title: 'A Voyage to Marege\': Macassan Trepangers in Northern Australia', author: 'C. C. Macknight', year: 1976, kind: 'sekunder' },
      { title: 'AIATSIS: Australian Institute of Aboriginal and Torres Strait Islander Studies', year: 'daring', kind: 'sekunder' },
      { title: 'Human occupation of northern Australia by 65,000 years ago', author: 'Clarkson dkk., Nature', year: 2017, kind: 'arkeologi' },
      { title: 'The Journals of Captain James Cook', author: 'James Cook (ed. J. C. Beaglehole)', year: '1955–1967', kind: 'primer' },
    ],
  },
];
