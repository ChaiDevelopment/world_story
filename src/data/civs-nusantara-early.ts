import type { Civilization } from '../types';

export const nusantaraEarly: Civilization[] = [
  {
    id: 'austronesia-nusantara',
    name: 'Budaya Austronesia dan Prasejarah Nusantara',
    region: 'Nusantara',
    start: -2500,
    end: 400,
    color: '#3fb8a0',
    capital: { name: 'Gua Harimau / pesisir Sumatra–Jawa', lon: 104.0, lat: -3.8 },
    summary:
      'Penutur Austronesia menyebar dari Taiwan ke kepulauan Asia Tenggara, membawa pertanian, perahu bercadik, dan tradisi megalitik serta perunggu.',
    highlights: [
      'Penyebaran penutur Austronesia ±2500–1500 SM',
      'Tradisi megalitik di Sumatra Selatan dan Jawa',
      'Budaya perunggu: nekara Dongson dan Pejeng',
    ],
    economy: 'Pertanian ladang dan sawah awal, pelayaran antarpulau, serta perdagangan rempah dan manik.',
    religionCulture: 'Pemujaan leluhur dan roh alam, tradisi megalitik, dan pembuatan nekara perunggu.',
    decline: 'Berlanjut menjadi kerajaan-kerajaan awal ketika kontak dagang dengan India makin intensif sejak abad ke-1–4 M.',
    territories: [
      { from: -2500, to: 400, polygons: [
        [[95, 5.8], [96.5, 5.6], [97.8, 5.2], [98.8, 4.2], [99.8, 3.3], [100.8, 2.6], [101.7, 2], [102.8, 1.3], [103.7, 0.5], [104.4, -0.4], [104.6, -1], [105.6, -1.6], [106.9, -1.8], [108.5, -2.2], [108.5, -3.4], [106.8, -3.4], [105.9, -4.5], [106, -5.9], [105.3, -6.1], [104.4, -5.8], [103.3, -4.9], [102.1, -4], [101.1, -3], [100.3, -1.6], [99.5, -0.2], [98.6, 1.6], [97.5, 2.8], [96.4, 3.8], [95.5, 4.9]],
        [[105.2, -6.9], [105.8, -6], [106.7, -5.9], [107.8, -6.1], [108.5, -6.5], [109.6, -6.8], [110.5, -6.7], [111.4, -6.5], [112.4, -6.8], [113.2, -6.8], [114.2, -6.9], [114.6, -7.6], [115.2, -7.9], [115.8, -8], [115.8, -8.9], [115, -9], [114.4, -8.9], [113, -8.4], [111.8, -8.4], [110.5, -8.3], [109, -8], [107.8, -8], [106.5, -7.5], [105.5, -7.1]],
        [[115.9, -8], [117.5, -8], [119, -8], [120.5, -8.1], [122, -8], [123.2, -8], [123.3, -8.9], [122, -9], [120, -9], [118.5, -9.2], [116.5, -9.2], [115.9, -8.9]],
        [[118.9, -9.4], [119.8, -9.2], [120.9, -9.7], [120.8, -10.4], [119.6, -10.4], [118.9, -9.9]],
        [[123.4, -9.6], [124.5, -9], [125.6, -8.4], [127, -8.3], [127.4, -8.5], [126.4, -9.3], [125, -10.3], [123.8, -10.5]],
        [[109, 2.2], [110.5, 1.9], [111.8, 2.6], [113.2, 3.4], [114.2, 4.6], [115.3, 5.3], [116, 6.3], [117, 7.1], [117.8, 6.5], [118.2, 5.8], [118.2, 4.3], [117.9, 3], [118.3, 1.8], [118.3, 0.5], [117.7, -1], [117, -1.5], [116.4, -2.2], [116.5, -3.3], [116.2, -4.1], [115, -4.1], [114.2, -3.7], [113, -3.4], [111.9, -3.6], [110.6, -3.3], [110, -2.5], [109.7, -1.2], [108.9, -0.2], [108.9, 0.8]],
        [[119.8, 0.2], [119.6, 0.9], [121, 1.2], [123, 1.2], [124.6, 1.9], [125.3, 1.9], [125.3, 1.3], [124, 0.5], [122.5, 0.3], [121.4, 0.4], [121.5, -0.9], [123.5, -1.1], [123.6, -1.7], [122, -2], [121.8, -3], [122.8, -3.8], [123.1, -4.8], [123.2, -5.6], [122.6, -5.7], [121.9, -4.9], [121.2, -4], [120.6, -4], [120.5, -5], [120.5, -5.8], [120.6, -6.5], [119.8, -6], [119.3, -5.5], [119.3, -4], [118.9, -3], [118.8, -2.3], [119.5, -0.8]],
        [[127.2, 1.4], [127.5, 2.3], [128.2, 2.3], [128.7, 1.6], [128.6, 0.8], [129, 0], [128.9, -0.8], [128.2, -0.9], [127.9, -0.2], [127.6, 0.4], [127.2, 0.4]],
        [[127.8, -3], [128.8, -2.7], [130.6, -2.9], [130.9, -3.4], [129.5, -3.9], [128.2, -4], [127.8, -3.6]],
        [[126.4, -3.2], [127.3, -3.2], [127.2, -3.9], [126.5, -3.9]],
      ], note: 'Sebaran budaya Austronesia di Nusantara (skematis)' },
    ],
    sources: [
      { title: 'Prasejarah Indonesia', author: 'R. P. Soejono (ed.)', year: 2008, kind: 'sekunder' },
      { title: 'Penelitian arkeologi Gua Harimau (Puslit Arkenas)', kind: 'arkeologi' },
    ],
  },
  {
    id: 'kutai-tarumanagara',
    name: 'Kutai dan Tarumanagara',
    region: 'Nusantara',
    start: 400,
    end: 669,
    color: '#e2b04a',
    capital: { name: 'Muara Kaman / Bekasi', lon: 107.0, lat: -6.3 },
    summary:
      'Dua kerajaan Hindu tertua yang meninggalkan prasasti berbahasa Sanskerta: Kutai di Kalimantan Timur dan Tarumanagara di Jawa Barat.',
    highlights: [
      'Prasasti Yupa Kutai (±400 M) mencatat Mulawarman',
      'Prasasti Ciaruteun dan Tugu mencatat Purnawarman',
      'Pembangunan saluran irigasi dan sungai Gomati',
    ],
    economy: 'Pertanian, pelayaran sungai dan laut, serta persembahan sapi dan hasil bumi.',
    religionCulture: 'Hindu Siwa dan Waisnawa dengan peran Brahmana; aksara Pallawa.',
    decline: 'Tarumanagara mengalami penurunan sekitar abad ke-7 dan wilayahnya terbagi menjadi Sunda dan Galuh.',
    territories: [
      { from: 400, to: 669, polygons: [
        [[105.4, -6.8], [105.7, -6], [106.6, -5.9], [107.5, -6], [108.4, -6.4], [108.6, -7], [108.3, -7.7], [107, -7.6], [106.3, -7.2]],
      ], note: 'Tarumanagara (Jawa Barat)' },
      { from: 400, to: 669, polygons: [
        [[115.7, 0.2], [116.1, 0.8], [116.9, 1], [117.6, 0.8], [118, 0.2], [117.7, -0.4], [117.4, -1], [116.6, -1], [115.9, -0.7], [115.5, -0.2]],
      ], note: 'Kutai (Kalimantan Timur)' },
    ],
    sources: [
      { title: 'Prasasti Yupa Kutai', kind: 'prasasti' },
      { title: 'Prasasti Ciaruteun dan Tugu', kind: 'prasasti' },
      { title: 'Sejarah Nasional Indonesia Jilid II', author: 'Marwati Djoened P. & Nugroho N.', kind: 'sekunder' },
    ],
  },
  {
    id: 'sriwijaya',
    name: 'Sriwijaya',
    region: 'Nusantara',
    start: 650,
    end: 1377,
    color: '#f0c36a',
    capital: { name: 'Palembang', lon: 104.76, lat: -2.98 },
    summary:
      'Thalassokrasi Buddhis yang menguasai Selat Malaka dan menjadi pusat belajar agama Buddha di Asia Tenggara.',
    highlights: [
      'Prasasti Kedukan Bukit (682 M) menandai pendirian',
      'Catatan I-Tsing tentang pusat studi Buddha',
      'Ekspedisi Chola menyerang pada 1025',
    ],
    economy: 'Penguasaan pelabuhan dan bea dagang Selat Malaka; ekspor kapur barus, kemenyan, emas, dan rempah.',
    religionCulture: 'Buddha Mahayana dan Wajrayana; kerajaan terhubung dengan Nalanda.',
    decline: 'Serangan Chola, bergesernya jalur dagang, dan kebangkitan Singasari/Majapahit serta Malaka.',
    territories: [
      { from: 650, to: 1025, polygons: [
        [[95, 5.8], [96.5, 5.6], [97.8, 5.2], [98.8, 4.2], [99.8, 3.3], [100.8, 2.6], [101.7, 2], [102.8, 1.3], [103.7, 0.5], [104.4, -0.4], [104.6, -1], [105.6, -1.6], [106.9, -1.8], [108.5, -2.2], [108.5, -3.4], [106.8, -3.4], [105.9, -4.5], [106, -5.9], [105.3, -6.1], [104.4, -5.8], [103.3, -4.9], [102.1, -4], [101.1, -3], [100.3, -1.6], [99.5, -0.2], [98.6, 1.6], [97.5, 2.8], [96.4, 3.8], [95.5, 4.9]],
        [[98.8, 9.5], [98.3, 8.2], [99, 7.4], [99.7, 6.3], [100.2, 5.4], [100.4, 4.3], [101, 3.2], [101.8, 2.6], [102.5, 2], [103.2, 1.3], [104.1, 1.3], [104.4, 2.2], [103.8, 3.2], [103.6, 4.5], [102.8, 5.8], [101.5, 6.8], [100.7, 7.2], [100.3, 8.5], [99.8, 9.5]],
        [[105.4, -6.8], [105.7, -6], [106.6, -5.9], [107.5, -6], [108.4, -6.4], [108.6, -7], [108.3, -7.7], [107, -7.6], [106.3, -7.2]],
      ], note: 'Wilayah pengaruh Sumatra hingga Selat Malaka' },
      { from: 1025, to: 1377, polygons: [
        [[98.5, 2], [99.6, 2.4], [100.9, 2.4], [101.7, 2], [102.8, 1.3], [103.7, 0.5], [104.4, -0.4], [104.6, -1], [105.6, -1.6], [106.9, -1.8], [108.5, -2.2], [108.5, -3.4], [106.8, -3.4], [105.9, -4.5], [106, -5.9], [105.3, -6.1], [104.4, -5.8], [103.3, -4.9], [102.1, -4], [101.1, -3], [100.3, -1.6], [99.5, -0.2], [98.6, 1.4]],
      ], note: 'Pusat bergeser ke Jambi' },
    ],
    sources: [
      { title: 'Prasasti Kedukan Bukit', year: 682, kind: 'prasasti' },
      { title: 'A Record of the Buddhistic Religion', author: 'I-Tsing', year: 691, kind: 'primer' },
      { title: 'The Indianized States of Southeast Asia', author: 'George Cœdès', year: 1968, kind: 'sekunder' },
    ],
  },
  {
    id: 'mataram-kuno',
    name: 'Mataram Kuno (Medang)',
    region: 'Nusantara',
    start: 717,
    end: 1016,
    color: '#b88a3b',
    capital: { name: 'Medang (Jawa Tengah)', lon: 110.4, lat: -7.7 },
    summary:
      'Kerajaan agraris di Jawa Tengah dan kemudian Jawa Timur, pendirinya dikaitkan dengan Sanjaya; dinasti Sailendra dan Sanjaya membangun candi-candi.',
    highlights: [
      'Borobudur (±800-an M) oleh dinasti Sailendra',
      'Prambanan (±850 M) oleh dinasti Sanjaya',
      'Perpindahan pusat ke Jawa Timur oleh Mpu Sindok (±929 M)',
    ],
    economy: 'Pertanian padi basah dan perdagangan hasil bumi ke pesisir utara.',
    religionCulture: 'Hindu Siwa dan Buddha Mahayana hidup berdampingan.',
    decline: 'Serangan dari Sriwijaya (Wurawari) pada 1016 meruntuhkan istana Dharmawangsa Teguh.',
    territories: [
      { from: 717, to: 929, polygons: [
        [[109.2, -7], [110, -6.6], [110.8, -6.7], [111.3, -6.9], [111.6, -7.4], [111.6, -8.2], [110.6, -8.2], [109.6, -8], [109, -7.8], [109.1, -7.4]],
      ], note: 'Jawa Tengah' },
      { from: 929, to: 1016, polygons: [
        [[111.5, -7.4], [111.8, -6.7], [112.5, -6.8], [113, -6.9], [114.1, -7.4], [114.5, -8], [114.5, -8.5], [113.5, -8.5], [112.5, -8.4], [111.6, -8.3]],
      ], note: 'Jawa Timur' },
    ],
    sources: [
      { title: 'Prasasti Canggal', year: 732, kind: 'prasasti' },
      { title: 'Prasasti Kalasan', year: 778, kind: 'prasasti' },
    ],
  },
  {
    id: 'kediri-singasari',
    name: 'Kediri dan Singasari',
    region: 'Nusantara',
    start: 1042,
    end: 1292,
    color: '#cf8a4a',
    capital: { name: 'Daha / Tumapel', lon: 112.0, lat: -7.9 },
    summary:
      'Dua kerajaan Jawa Timur yang berurutan; Singasari di bawah Kertanagara memperluas pengaruh ke Sumatra dan Bali.',
    highlights: [
      'Pembagian Mataram oleh Airlangga menjadi Janggala dan Panjalu (1042)',
      'Ken Arok mendirikan Singasari (1222)',
      'Ekspedisi Pamalayu (1275)',
    ],
    economy: 'Pertanian beras, perdagangan rempah dan beras ke pelabuhan Bandar Gresik/Tuban.',
    religionCulture: 'Sinkretisme Siwa–Buddha; sastra Kakawin seperti Arjunawiwaha.',
    decline: 'Kertanagara dibunuh Jayakatwang (1292); Raden Wijaya kemudian mendirikan Majapahit.',
    territories: [
      { from: 1042, to: 1222, polygons: [
        [[111.2, -7.3], [111.5, -6.8], [112.3, -6.8], [113, -6.9], [114.2, -7.2], [114.6, -8], [114.5, -8.6], [113.4, -8.5], [112.3, -8.4], [111.4, -8.2], [111.1, -7.8]],
      ], note: 'Kediri (Jawa Timur)' },
      { from: 1222, to: 1292, polygons: [
        [[110.5, -7], [111.4, -6.6], [112.3, -6.8], [113, -6.9], [114.2, -7], [114.6, -7.7], [114.6, -8.6], [113.4, -8.5], [112.3, -8.4], [111.4, -8.3], [110.6, -8.1], [110.3, -7.6]],
        [[114.4, -8], [115, -8], [115.8, -8.1], [115.8, -8.9], [115, -9], [114.4, -8.8]],
        [[101.2, -0.8], [102.5, -0.8], [103.6, -0.8], [104.4, -1], [104.5, -1.8], [104, -2.2], [102.8, -2.7], [101.6, -2.2], [101, -1.5]],
      ], note: 'Pengaruh Singasari pada puncak Kertanagara' },
    ],
    sources: [
      { title: 'Pararaton', kind: 'primer' },
      { title: 'Nagarakretagama', author: 'Mpu Prapanca', year: 1365, kind: 'primer' },
    ],
  },
];
