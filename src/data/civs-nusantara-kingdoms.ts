import type { Civilization } from '../types';

// Kerajaan-kerajaan Nusantara tambahan: Kalingga, Sunda–Pajajaran, Bali, Melayu–Dharmasraya/Pagaruyung,
// Banjar, Bone–Bugis, Siak, dan Bima. Poligon skematis mengikuti garis pantai pulau (dipotong peta dengan pantai).
export const nusantaraKingdoms: Civilization[] = [
  {
    id: 'kalingga',
    name: 'Kalingga (Holing)',
    region: 'Nusantara',
    start: 500,
    end: 752,
    color: '#6ec6e8',
    capital: { name: 'Pesisir utara Jawa Tengah (Jepara–Pekalongan, lokasi pasti belum diketahui)', lon: 110.67, lat: -6.59 },
    summary:
      'Kisah Kalingga bermula dari catatan para pejabat dan biksu Tiongkok tentang negeri Holing di pulau Jawa. Letaknya diperkirakan di pesisir utara Jawa Tengah, dan kisah Ratu Shima yang menegakkan hukum dengan tegas membuatnya dikenang hingga kini. Karena bukti tertulis dari dalam negeri sangat sedikit, banyak hal tentang Holing masih menjadi perdebatan sejarawan.',
    highlights: [
      'Holing disebut dalam sumber Tiongkok dan mengirim utusan ke istana Tang pada 640',
      'Biksu Hwining tinggal tiga tahun di Holing dan menerjemahkan kitab bersama Jnanabhadra (±664–665)',
      'Ratu Shima (Xi-mo) naik takhta pada 674 menurut Xin Tangshu',
      'Prasasti Tuk Mas (±650) dan Prasasti Sojomerto (±700) menjadi bukti tertulis dari dalam negeri',
      'Prasasti Sojomerto menyebut Dapunta Selendra, yang dikaitkan dengan asal-usul Syailendra',
    ],
    economy:
      'Sumber Tiongkok menyebut Holing sebagai negeri penghasil emas, perak, cula badak, gading, dan penyu. Penduduknya bertani serta berdagang lewat pelabuhan pantai utara Jawa, sehingga raja dapat mengirim utusan ke Tiongkok.',
    religionCulture:
      'Holing menerima pengaruh India: Prasasti Tuk Mas memakai aksara Pallawa dan bahasa Sanskerta dengan lambang Hindu, sedangkan kisah Hwining menunjukkan adanya kaum Buddha yang belajar kitab. Adat setempat yang dicatat Tiongkok, seperti makan dengan tangan dan minum arak dari bunga kelapa, memperlihatkan budaya Jawa awal.',
    decline:
      'Holing menghilang dari catatan Tiongkok setelah pertengahan abad ke-8. Wilayahnya kemudian menjadi bagian dari Medang (Mataram Kuno) yang bangkit di Jawa Tengah, tetapi bagaimana peralihan itu terjadi belum jelas.',
    territories: [
      {
        from: 500,
        to: 674,
        polygons: [
          // Holing awal: jalur pesisir utara Jawa Tengah ~abad ke-6–7
          [[108.9, -6.85], [109.15, -6.85], [109.45, -6.87], [109.7, -6.88], [110.0, -6.92], [110.3, -6.95], [110.5, -6.93], [110.62, -6.82], [110.62, -6.55], [110.78, -6.48], [110.95, -6.58], [111.1, -6.7], [111.0, -7.0], [110.7, -7.2], [110.3, -7.25], [109.9, -7.2], [109.5, -7.2], [109.1, -7.2], [108.9, -7.0]],
        ],
        note: 'Holing di pesisir utara Jawa Tengah',
      },
      {
        from: 674,
        to: 752,
        polygons: [
          // Masa Ratu Shima: pesisir ditambah daerah pedalaman Kedu dan Dieng ~abad ke-7–8
          [[108.8, -6.85], [109.15, -6.85], [109.45, -6.87], [109.7, -6.88], [110.0, -6.92], [110.3, -6.95], [110.5, -6.93], [110.62, -6.82], [110.62, -6.55], [110.78, -6.48], [110.95, -6.58], [111.15, -6.7], [111.3, -6.95], [111.2, -7.3], [111.0, -7.6], [110.5, -7.6], [110.0, -7.6], [109.5, -7.55], [109.1, -7.5], [108.8, -7.3]],
        ],
        note: 'Masa Ratu Shima dan sesudahnya',
      },
    ],
    sources: [
      { title: 'Xin Tangshu (Sejarah Baru Dinasti Tang), bagian Holing', kind: 'primer' },
      { title: 'A Record of the Buddhist Religion as Practised in India and the Malay Archipelago', author: 'I-Tsing', year: 691, kind: 'primer' },
      { title: 'Prasasti Tuk Mas dan Prasasti Sojomerto', kind: 'prasasti' },
      { title: 'Sejarah Nasional Indonesia Jilid II', author: 'Marwati Djoened Poesponegoro & Nugroho Notosusanto', kind: 'sekunder' },
    ],
  },
  {
    id: 'sunda-pajajaran',
    name: 'Sunda dan Pajajaran',
    region: 'Nusantara',
    start: 669,
    end: 1579,
    color: '#7ed957',
    capital: { name: 'Pakuan Pajajaran (Bogor)', lon: 106.8, lat: -6.6 },
    summary:
      'Pada mulanya Sunda adalah nama kerajaan yang menurut tradisi lahir ketika Tarumanagara surut pada 669. Berabad-abad kemudian, pusatnya berpindah dari Galuh dan Kawali ke Pakuan, hingga Banten merebut Pakuan pada 1579. Sebagian riwayat awalnya bersandar pada naskah tradisi yang diperdebatkan, sedangkan masa akhirnya terekam baik dalam prasasti dan catatan Portugis.',
    highlights: [
      'Prasasti Sanghyang Tapak (1030) melarang penangkapan ikan di sungai suci',
      'Perang Bubat (1357) dengan Majapahit dalam Kidung Sunda dan Pararaton',
      'Prasasti Kawali menjadi saksi masa Niskala Wastu Kancana',
      'Sri Baduga Maharaja bertakhta di Pakuan pada 1482; tradisi lisan menyebutnya Prabu Siliwangi',
      'Perjanjian Sunda–Portugis (1522) dan jatuhnya Pakuan ke Banten (1579)',
    ],
    economy:
      'Sunda terkenal sebagai penghasil lada, dan Tomé Pires mencatat enam pelabuhannya termasuk Kalapa dan Banten. Pedalaman hidup dari ladang dan sawah, sedangkan hasil hutan dan bahan makanan mengalir ke pelabuhan.',
    religionCulture:
      'Rakyat Sunda menganut campuran Hindu–Buddha dan kepercayaan leluhur Sunda Wiwitan yang menghormati hyang dan tempat keramat. Kesusastraan tertulis tampak dalam Carita Parahyangan dan Bujangga Manik, dan Islam mulai tersebar di pesisir sejak abad ke-15.',
    decline:
      'Pesisir Sunda lebih dulu jatuh ke tangan Cirebon dan Banten, termasuk Sunda Kalapa pada 1527. Banten di bawah Maulana Yusuf merebut Pakuan pada 1579; mahkota Binokasih diwarisi Sumedang Larang.',
    territories: [
      {
        from: 669,
        to: 1333,
        polygons: [
          // Sunda dan Galuh: Jawa bagian barat hingga Sungai Citarum/Cipamali ~669–1333
          [[105.2, -6.8], [105.35, -6.35], [105.7, -6.05], [106.1, -5.92], [106.6, -6.0], [106.95, -6.0], [107.4, -5.95], [107.9, -6.2], [108.3, -6.25], [108.6, -6.7], [109.0, -6.85], [109.0, -7.4], [108.9, -7.75], [108.2, -7.8], [107.3, -7.7], [106.6, -7.35], [106.3, -7.1], [105.7, -6.95]],
        ],
        note: 'Sunda dan Galuh',
      },
      {
        from: 1333,
        to: 1482,
        polygons: [
          // Masa Kawali: Galuh dan Sunda, pusat di Kawali (Ciamis) ~abad ke-14–15
          [[105.2, -6.8], [105.35, -6.35], [105.7, -6.05], [106.1, -5.92], [106.6, -6.0], [106.95, -6.0], [107.4, -5.95], [107.9, -6.2], [108.3, -6.25], [108.6, -6.7], [108.95, -6.9], [108.95, -7.4], [108.85, -7.75], [108.2, -7.8], [107.3, -7.7], [106.6, -7.35], [106.3, -7.1], [105.7, -6.95]],
        ],
        note: 'Masa Kawali',
      },
      {
        from: 1482,
        to: 1579,
        polygons: [
          // Pakuan Pajajaran: tanpa Cirebon, pesisir hilang bertahap ~1482–1579
          [[105.1, -6.8], [105.3, -6.35], [105.7, -6.05], [106.1, -5.92], [106.6, -6.0], [106.95, -6.0], [107.4, -5.98], [107.9, -6.2], [108.15, -6.4], [108.2, -6.9], [108.3, -7.4], [108.2, -7.8], [107.3, -7.8], [106.6, -7.4], [106.3, -7.1], [105.7, -6.95], [105.3, -7.0]],
        ],
        note: 'Pakuan Pajajaran',
      },
    ],
    sources: [
      { title: 'Carita Parahyangan', kind: 'primer' },
      { title: 'Bujangga Manik', kind: 'primer' },
      { title: 'Suma Oriental', author: 'Tomé Pires', year: 1515, kind: 'primer' },
      { title: 'Prasasti Batutulis, Kawali, dan Sanghyang Tapak', kind: 'prasasti' },
      { title: 'Sundakala', author: 'Ayatrohaedi', kind: 'sekunder' },
    ],
  },
  {
    id: 'bali',
    name: 'Kerajaan-Kerajaan Bali',
    region: 'Nusantara',
    start: 882,
    end: 1908,
    color: '#ff8fab',
    capital: { name: 'Gelgel / Klungkung (Semarapura)', lon: 115.4, lat: -8.54 },
    summary:
      'Kisah Bali tertulis dimulai dari prasasti-prasasti raja Warmadewa pada abad ke-9 hingga ke-10, lalu menyatu dengan Jawa sejak Kertanagara dan Majapahit. Setelah Majapahit surut, Bali menjadi tempat para bangsawan, pendeta, dan seniman Jawa menata kehidupan baru. Masa kerajaan berakhir ketika serangkaian puputan melawan Belanda pecah pada 1906–1908.',
    highlights: [
      'Prasasti Sukawana (882) dan Blanjong (914) adalah prasasti Bali Kuno bertanggal',
      'Udayana dan Gunapriya Dharmapatni (Mahendradatta) memerintah ±989 dan menjadi orang tua Airlangga',
      'Gajah Mada dan Arya Damar menaklukkan Bedahulu pada 1343 dan Gelgel menjadi pusat kerajaan',
      'Dang Hyang Nirartha membawa gagasan keagamaan baru dan mendirikan banyak pura pantai',
      'Puputan Badung (1906) dan Puputan Klungkung (1908) mengakhiri kerajaan-kerajaan Bali',
    ],
    economy:
      'Rakyat Bali hidup dari sawah berpengairan subak, kelapa, dan ternak, sementara beras dan kain dikirim ke pelabuhan seberang. Kerajaan-kerajaan pesisir seperti Buleleng juga memperoleh pendapatan dari pelabuhan dan perdagangan budak serta hasil bumi.',
    religionCulture:
      'Agama Hindu Bali tumbuh dari perpaduan Siwa, Buddha, dan pemujaan leluhur serta roh gunung dan laut. Pura Kahyangan Tiga, subak, dan adat banjar menyusun kehidupan desa, sedangkan pedanda dan raja menyalurkan seni pertunjukan, ukir, dan pura kerajaan.',
    decline:
      'Ekspedisi Belanda sejak 1846 menaklukkan Buleleng dan Karangasem, kemudian Lombok pada 1894. Setelah puputan di Badung, Tabanan, dan Klungkung pada 1906–1908, para raja Bali kehilangan kekuasaan politik dan Bali berada di bawah pemerintahan Hindia Belanda.',
    territories: [
      {
        from: 882,
        to: 1343,
        polygons: [
          // Pulau Bali pada masa Warmadewa dan Bedahulu ~882–1343
          [[114.43, -8.17], [114.6, -8.15], [114.85, -8.15], [115.1, -8.1], [115.35, -8.1], [115.55, -8.15], [115.7, -8.35], [115.65, -8.5], [115.5, -8.6], [115.3, -8.7], [115.27, -8.85], [115.1, -8.85], [115.05, -8.75], [114.9, -8.6], [114.65, -8.45], [114.5, -8.35], [114.42, -8.25]],
        ],
        note: 'Bali Kuno (Warmadewa)',
      },
      {
        from: 1343,
        to: 1651,
        polygons: [
          // Bali di bawah Gelgel ~1343–1651
          [[114.43, -8.17], [114.6, -8.15], [114.85, -8.15], [115.1, -8.1], [115.35, -8.1], [115.55, -8.15], [115.7, -8.35], [115.65, -8.5], [115.5, -8.6], [115.3, -8.7], [115.27, -8.85], [115.1, -8.85], [115.05, -8.75], [114.9, -8.6], [114.65, -8.45], [114.5, -8.35], [114.42, -8.25]],
          // Lombok pada masa Dalem Waturenggong ~1550
          [[116.05, -8.35], [116.4, -8.33], [116.65, -8.4], [116.72, -8.55], [116.65, -8.72], [116.6, -8.92], [116.4, -8.93], [116.2, -8.9], [116.05, -8.8], [116.03, -8.6], [116.02, -8.45], [116.2, -8.33]],
        ],
        note: 'Gelgel di bawah wangsa Majapahit',
      },
      {
        from: 1651,
        to: 1908,
        polygons: [
          // Sembilan kerajaan Bali ~1651–1908
          [[114.43, -8.17], [114.6, -8.15], [114.85, -8.15], [115.1, -8.1], [115.35, -8.1], [115.55, -8.15], [115.7, -8.35], [115.65, -8.5], [115.5, -8.6], [115.3, -8.7], [115.27, -8.85], [115.1, -8.85], [115.05, -8.75], [114.9, -8.6], [114.65, -8.45], [114.5, -8.35], [114.42, -8.25]],
          // Lombok barat di bawah Karangasem ~1740–1894
          [[116.05, -8.32], [116.2, -8.33], [116.4, -8.35], [116.5, -8.42], [116.5, -8.6], [116.45, -8.78], [116.3, -8.9], [116.1, -8.85], [116.05, -8.7], [116.04, -8.55], [116.03, -8.4], [116.04, -8.34]],
        ],
        note: 'Sembilan kerajaan dan penaklukan Belanda',
      },
    ],
    sources: [
      { title: 'Prasasti Blanjong dan Sukawana', kind: 'prasasti' },
      { title: 'Babad Dalem', kind: 'primer' },
      { title: 'The Spell of Power: A History of Balinese Politics, 1650–1940', author: 'Henk Schulte Nordholt', year: 1996, kind: 'sekunder' },
      { title: 'Negara: The Theatre State in Nineteenth-Century Bali', author: 'Clifford Geertz', year: 1980, kind: 'sekunder' },
    ],
  },
  {
    id: 'dharmasraya-pagaruyung',
    name: 'Melayu–Dharmasraya dan Pagaruyung',
    region: 'Nusantara',
    start: 1183,
    end: 1833,
    color: '#c8a2f0',
    capital: { name: 'Pagaruyung', lon: 100.62, lat: -0.47 },
    summary:
      'Kisah ini bermula di hulu Sungai Batang Hari, tempat Dharmasraya menjadi pusat orang Melayu setelah pusat lama di Jambi surut. Sejak Adityawarman pada 1347, pusat kerajaan bergeser ke dataran tinggi Minangkabau dan hidup sebagai Pagaruyung dengan tiga raja dan adat matrilineal. Kerajaan ini berakhir pada 1833, sesudah Perang Padri dan campur tangan Belanda.',
    highlights: [
      'Arca Amoghapasa dikirim Kertanagara pada 1286 dan ditempatkan di Padang Roco',
      'Dara Petak dan Dara Jingga dibawa ke Jawa dalam Pararaton',
      'Adityawarman memaklumkan diri maharajadhiraja pada 1347',
      'Rajo Tigo Selo dan Basa Ampek Balai menyusun pemerintahan Pagaruyung',
      'Perang Padri (1803–1837) dan pembuangan Sultan Bagagarsyah pada 1833',
    ],
    economy:
      'Emas dari tambang pegunungan menjadi sumber kemasyhuran Minangkabau, di samping lada, kapur barus, dan hasil hutan. Sawah di lembah dan tradisi merantau menyalurkan hasil bumi serta orang-orang Minang ke pesisir dan seberang.',
    religionCulture:
      'Dharmasraya menganut Buddha Wajrayana, dan Adityawarman dikenal sebagai raja Buddha Tantris. Islam makin kuat sejak abad ke-16, tetapi adat matrilineal, rumah gadang, dan musyawarah nagari terus bertahan, dan ketegangan antara adat dan ulama melahirkan gerakan Padri.',
    decline:
      'Pesisir barat lebih dulu dikuasai Aceh dan kemudian VOC, sementara pusat kerajaan di pedalaman terjebak dalam perang Padri. Pada 1821 keluarga raja bersekutu dengan Belanda, dan Sultan Bagagarsyah ditangkap serta dibuang ke Batavia pada 1833.',
    territories: [
      {
        from: 1183,
        to: 1347,
        polygons: [
          // Melayu–Dharmasraya: Batang Hari dan hulunya ~1183–1347
          [[99.6, -2.4], [100.3, -2.5], [101.2, -2.6], [102.3, -2.6], [103.2, -2.3], [103.9, -1.8], [104.2, -1.1], [103.8, -0.6], [103.3, -0.2], [103.0, 0.3], [102.4, 0.8], [101.5, 1.0], [100.6, 0.7], [100.0, 0.2], [99.6, -0.5], [99.4, -1.3], [99.5, -1.9]],
        ],
        note: 'Melayu–Dharmasraya',
      },
      {
        from: 1347,
        to: 1833,
        polygons: [
          // Pagaruyung: dataran tinggi Minangkabau dan rantau ~1347–1833
          [[99.2, 0.9], [99.35, 0.2], [99.8, -0.25], [100.1, -0.65], [100.35, -1.0], [100.6, -1.4], [100.9, -1.9], [101.3, -2.3], [102.0, -2.2], [102.4, -1.5], [102.5, -0.7], [102.4, 0.1], [102.0, 0.6], [101.4, 0.9], [100.6, 0.9], [99.9, 1.0]],
        ],
        note: 'Pagaruyung dan alam Minangkabau',
      },
    ],
    sources: [
      { title: 'Prasasti Amoghapasa dan Padang Roco', kind: 'prasasti' },
      { title: 'Tambo Minangkabau', kind: 'primer' },
      { title: 'Suma Oriental', author: 'Tomé Pires', year: 1515, kind: 'primer' },
      { title: 'Kitab Undang-Undang Tanjung Tanah', author: 'Uli Kozok', year: 2006, kind: 'sekunder' },
      { title: 'Muslims and Matriarchs', author: 'Jeffrey Hadler', year: 2008, kind: 'sekunder' },
    ],
  },
  {
    id: 'banjar',
    name: 'Kesultanan Banjar',
    region: 'Nusantara',
    start: 1387,
    end: 1905,
    color: '#f15bb5',
    capital: { name: 'Banjarmasin / Martapura', lon: 114.85, lat: -3.41 },
    summary:
      'Menurut Hikayat Banjar, kisah ini dimulai dari Negara Dipa dan Negara Daha di tepi sungai Kalimantan Selatan. Pada 1526 Raden Samudra yang dibantu Demak masuk Islam dan menjadi Sultan Suriansyah, lalu Banjar tumbuh sebagai pelabuhan lada. Perlawanan Pangeran Antasari dalam Perang Banjar membuat rakyat bertahan hingga 1905, lama setelah kesultanan dihapus pada 1860.',
    highlights: [
      'Hikayat Banjar menuturkan Negara Dipa, Negara Daha, dan Putri Junjung Buih',
      '24 September 1526 dikenang sebagai hari jadi Banjarmasin dan Sultan Suriansyah',
      'Sultan Mustain Billah (1595–1642) memerintah pada masa kejayaan lada',
      'Syekh Muhammad Arsyad al-Banjari menulis Sabilal Muhtadin (1779)',
      'Perang Banjar dan perlawanan Pangeran Antasari serta Muhammad Seman',
    ],
    economy:
      'Pelabuhan Banjarmasin memperdagangkan lada, emas, intan, rotan, dan hasil hutan. Rakyat di sepanjang sungai bertani dan berniaga di pasar terapung, sedangkan intan dari Martapura menjadi komoditas termasyhur.',
    religionCulture:
      'Orang Banjar menganut Islam sejak abad ke-16 dengan jejak kuat kepercayaan Kaharingan di pedalaman Dayak. Syekh Arsyad al-Banjari mengajar fiqh dan membentuk tradisi keulamaan, dan kehidupan sehari-hari berlangsung di rumah lanting dan di sepanjang sungai.',
    decline:
      'Kontrak dan campur tangan VOC melemahkan kedaulatan sejak abad ke-18, dan penobatan Tamjidillah pada 1857 ditolak rakyat. Perang Banjar pecah pada 1859 dan Belanda menghapus kesultanan pada 1860, namun perlawanan di pedalaman Barito berlangsung sampai 1905.',
    territories: [
      {
        from: 1387,
        to: 1526,
        polygons: [
          // Negara Dipa dan Daha: Kalimantan Selatan ~1387–1526
          [[114.4, -3.3], [114.45, -3.7], [114.65, -4.0], [114.9, -4.1], [115.3, -3.9], [115.6, -3.6], [116.1, -3.2], [116.4, -2.6], [116.4, -2.0], [116.2, -1.6], [115.5, -1.5], [114.9, -1.7], [114.4, -2.0], [114.0, -2.5], [114.1, -3.0]],
        ],
        note: 'Negara Dipa dan Negara Daha',
      },
      {
        from: 1526,
        to: 1860,
        polygons: [
          // Kesultanan Banjar: Kalimantan Selatan, Tengah, dan pesisir timur ~1526–1860
          [[110.6, -2.7], [111.2, -3.1], [111.9, -3.3], [112.6, -3.4], [113.4, -3.3], [114.4, -3.3], [114.45, -3.7], [114.65, -4.0], [114.9, -4.1], [115.3, -3.9], [115.6, -3.6], [116.1, -3.2], [116.3, -2.4], [116.6, -1.5], [116.9, -0.6], [117.0, 0.0], [115.5, 0.0], [114.0, -0.3], [112.5, -0.5], [111.0, -0.8], [110.5, -1.5], [110.4, -2.2]],
        ],
        note: 'Kesultanan Banjar',
      },
      {
        from: 1860,
        to: 1905,
        polygons: [
          // Pedalaman Barito, pusat perlawanan Pegustian ~1860–1905
          [[114.1, -2.8], [114.6, -2.8], [115.1, -2.5], [115.5, -2.0], [115.8, -1.4], [115.7, -0.8], [115.3, -0.5], [114.7, -0.45], [114.2, -0.5], [114.0, -1.0], [113.9, -1.8], [113.95, -2.3]],
        ],
        note: 'Perang Banjar dan pemerintahan Pegustian',
      },
    ],
    sources: [
      { title: 'Hikayat Banjar', kind: 'primer' },
      { title: 'Sabilal Muhtadin', author: 'Muhammad Arsyad al-Banjari', year: 1779, kind: 'primer' },
      { title: 'Urang Banjar dan Kebudayaannya', author: 'Ideham dkk.', kind: 'sekunder' },
      { title: 'Pegustian dan Temenggung', author: 'Helius Sjamsuddin', year: 2001, kind: 'sekunder' },
    ],
  },
  {
    id: 'bone-bugis',
    name: 'Bone, Luwu, dan Wajo (Kerajaan Bugis)',
    region: 'Nusantara',
    start: 1300,
    end: 1905,
    color: '#ff9e64',
    capital: { name: 'Watampone', lon: 120.33, lat: -4.54 },
    summary:
      'Dalam tradisi Bugis, kisah bermula dari Luwu dan epos La Galigo, lalu Bone, Wajo, dan Soppeng tumbuh sebagai kerajaan sawah dan pelayaran di Sulawesi Selatan. Pada abad ke-17 Arung Palakka bersekutu dengan VOC dan menumbangkan Gowa, sehingga Bone menjadi kekuatan utama di jazirah itu. Belanda menyingkirkan pemerintahan Bone melalui ekspedisi pada 1905.',
    highlights: [
      'Luwu dikenal sebagai tanah asal epos La Galigo, Memory of the World UNESCO (2011)',
      'Tellumpoccoe (1582) mempersatukan Bone, Wajo, dan Soppeng terhadap Gowa',
      'Perjanjian Bongaya (1667) dan jatuhnya Somba Opu (1669)',
      'Arung Palakka menjadi Raja Bone pada 1672',
      'Diaspora Bugis ke Riau, Johor, Selangor, dan Kalimantan sekitar 1700',
    ],
    economy:
      'Dataran Bone dan Wajo adalah lumbung padi, dan perahu pinisi dari Bulukumba mengangkut beras serta barang antarpulau. Pelaut Bugis berdagang hingga Malaka, Kalimantan, dan Maluku, dan hukum pelayaran Amanna Gappa mengatur perdagangan mereka.',
    religionCulture:
      'Sebelum Islam, orang Bugis memuliakan dewata dalam La Galigo dan para bissu menjaga ritual kerajaan. Islam masuk resmi sejak 1605–1611, tetapi nilai siri\' na pacce, aksara lontara, dan pengakuan lima gender (makkunrai, oroané, calabai, calalai, bissu) tetap hidup.',
    decline:
      'Perang melawan Belanda pada abad ke-19 menghabiskan kekuatan Bone. Ekspedisi 1905 menangkap La Pawawoi Karaeng Segeri dan mengasingkannya ke Bandung, dan Bone diperintah langsung Belanda sampai dipulihkan sebagai swapraja pada 1931.',
    territories: [
      {
        from: 1300,
        to: 1611,
        polygons: [
          // Luwu dan kerajaan-kerajaan Bugis awal: Sulawesi Selatan ~1300–1611
          [[119.4, -5.2], [119.5, -4.7], [119.6, -4.1], [119.65, -3.7], [119.9, -3.2], [120.1, -2.8], [120.6, -2.4], [121.1, -2.4], [121.4, -2.7], [121.3, -3.1], [120.9, -3.0], [120.6, -3.3], [120.5, -4.0], [120.5, -4.65], [120.3, -5.0], [120.25, -5.35], [120.45, -5.6], [120.1, -5.65], [119.7, -5.7], [119.5, -5.5]],
        ],
        note: 'Luwu dan berdirinya kerajaan-kerajaan Bugis',
      },
      {
        from: 1611,
        to: 1814,
        polygons: [
          // Supremasi Bone di bawah Arung Palakka ~1672–1814
          [[119.4, -5.2], [119.5, -4.7], [119.6, -4.1], [119.65, -3.7], [119.9, -3.2], [120.1, -2.8], [120.6, -2.4], [121.1, -2.4], [121.4, -2.7], [121.3, -3.1], [120.9, -3.0], [120.6, -3.3], [120.5, -4.0], [120.5, -4.65], [120.3, -5.0], [120.25, -5.35], [120.45, -5.6], [120.1, -5.65], [119.7, -5.7], [119.5, -5.5]],
        ],
        note: 'Arung Palakka dan supremasi Bone',
      },
      {
        from: 1814,
        to: 1905,
        polygons: [
          // Bone dan sekutunya melawan Belanda ~1814–1905
          [[119.6, -5.1], [119.7, -4.6], [119.8, -4.1], [120.0, -3.7], [120.3, -3.4], [120.5, -3.6], [120.5, -4.2], [120.5, -4.65], [120.3, -5.0], [120.25, -5.35], [120.45, -5.6], [120.1, -5.65], [119.8, -5.6]],
        ],
        note: 'Perlawanan terhadap Belanda',
      },
    ],
    sources: [
      { title: 'Sure\' La Galigo', kind: 'primer' },
      { title: 'Lontara Bone', kind: 'primer' },
      { title: 'The Bugis', author: 'Christian Pelras', year: 1996, kind: 'sekunder' },
      { title: 'The Heritage of Arung Palakka', author: 'Leonard Y. Andaya', year: 1981, kind: 'sekunder' },
    ],
  },
  {
    id: 'siak',
    name: 'Kesultanan Siak Sri Indrapura',
    region: 'Nusantara',
    start: 1722,
    end: 1946,
    color: '#b5e48c',
    capital: { name: 'Siak Sri Indrapura', lon: 102.05, lat: 0.8 },
    summary:
      'Kisah Siak bermula ketika Raja Kecil mendirikan kesultanan di tepi Sungai Siak pada 1722, setelah diusir dari Johor. Selama dua abad Siak mengendalikan pesisir timur Sumatra di Selat Malaka, lalu wilayahnya menyusut karena perjanjian dengan Belanda. Pada 1945 Sultan Syarif Kasim II menyatakan setia kepada Republik Indonesia dan menyerahkan hartanya.',
    highlights: [
      'Raja Kecil (Sultan Abdul Jalil Rahmat Syah) mendirikan Siak pada 1722',
      'Senapelan, cikal bakal Pekanbaru, menjadi ibu kota pada 1784',
      'Raja Ali Haji di Riau–Lingga menulis Gurindam Dua Belas (1847), tetangga Siak yang sezaman',
      'Istana Asserayah Hasyimiah dibangun mulai 1889',
      'Syarif Kasim II menyatakan setia kepada RI dan menyumbang 13 juta gulden',
    ],
    economy:
      'Siak hidup dari bea sungai dan laut, timah, lada, gambir, serta hasil hutan yang diangkut lewat Sungai Siak. Pedagang Melayu, Bugis, dan Tionghoa berniaga di pelabuhannya, dan belakangan perkebunan dan minyak mengubah ekonomi wilayah itu.',
    religionCulture:
      'Siak adalah kesultanan Melayu Islam dengan tradisi Hikayat Siak, tari zapin, dan pakaian adat Melayu. Dinasti Syarif keturunan Arab-Melayu memperkuat peran ulama di istana, sementara bahasa Melayu kesultanan menjadi bagian dari tradisi bahasa yang kelak menjadi bahasa Indonesia.',
    decline:
      'Setelah perjanjian Siak–Belanda pada 1858, sebagian wilayah utara terlepas dan Siak menjadi bagian dari Keresidenan. Kesultanan bergabung dengan Republik Indonesia pada 1946, dan Syarif Kasim II ditetapkan sebagai pahlawan nasional pada 1998.',
    territories: [
      {
        from: 1722,
        to: 1858,
        polygons: [
          // Siak di Selat Malaka: Riau daratan dan pesisir timur Sumatra ~1722–1858
          [[103.4, -0.5], [103.0, 0.4], [102.5, 1.0], [102.0, 1.55], [101.4, 1.75], [100.8, 2.2], [100.3, 2.55], [99.8, 3.0], [99.2, 3.4], [98.7, 3.8], [98.5, 4.0], [98.4, 3.2], [98.8, 2.7], [99.4, 2.0], [99.8, 1.0], [100.2, 0.2], [100.7, -0.4], [101.5, -0.6], [102.5, -0.7]],
        ],
        note: 'Siak di Selat Malaka',
      },
      {
        from: 1858,
        to: 1946,
        polygons: [
          // Siak yang menyempit di bawah Hindia Belanda ~1858–1946
          [[100.6, 0.2], [101.0, 0.1], [101.6, 0.2], [102.2, 0.3], [102.7, 0.5], [102.9, 0.9], [102.5, 1.3], [102.1, 1.5], [101.6, 1.7], [101.2, 1.6], [100.8, 1.3], [100.6, 0.9], [100.5, 0.5]],
        ],
        note: 'Di bawah Hindia Belanda hingga Republik',
      },
    ],
    sources: [
      { title: 'Hikayat Siak', kind: 'primer' },
      { title: 'Tuhfat al-Nafis', author: 'Raja Ali Haji', kind: 'primer' },
      { title: 'Multiple Centres of Authority', author: 'Timothy P. Barnard', year: 2003, kind: 'sekunder' },
    ],
  },
  {
    id: 'bima',
    name: 'Kesultanan Bima (Mbojo)',
    region: 'Nusantara',
    start: 1300,
    end: 1958,
    color: '#00f5d4',
    capital: { name: 'Bima', lon: 118.72, lat: -8.46 },
    summary:
      'Kisah Bima bermula dari kerajaan Mbojo yang menurut legenda didirikan Sang Bima, tokoh dari Jawa, di timur Pulau Sumbawa. Pada 1621 La Kai masuk Islam dan menjadi Sultan Abdul Kahir, sultan pertama Bima. Kesultanan bertahan melewati letusan Tambora 1815 dan dihapus sebagai swapraja pada 1958.',
    highlights: [
      'Nagarakretagama (1365) menyebut Bhima di antara daerah Majapahit',
      'Bo Sangaji Kai, catatan kerajaan, menyimpan tradisi sejarah Bima',
      'La Kai masuk Islam pada 1621 dan menjadi Sultan Abdul Kahir',
      'Bima tunduk kepada VOC pada 1669',
      'Letusan Tambora pada 1815 melenyapkan kerajaan Tambora dan Pekat',
    ],
    economy:
      'Pelabuhan Bima mengekspor kuda, kain, kayu sapan, dan hasil bumi, dan dahulu juga melakukan perdagangan budak. Kuda Bima yang kecil dan tangguh dihargai di Jawa dan Sulawesi, sedangkan rakyat bertani di dataran sekitar teluk.',
    religionCulture:
      'Sebelum Islam, orang Bima mengenal kepercayaan Marapu dan pengaruh Hindu–Buddha dari Jawa. Setelah 1621, Islam membentuk adat, hukum, dan pusat belajar Bima, namun rimpu, uma lengge, dan tradisi Hanta Ua Pua tetap menjadi ciri budaya setempat.',
    decline:
      'Tambora 1815 mendatangkan kelaparan dan penyakit, dan perjanjian dengan VOC serta Hindia Belanda membatasi kedaulatan. Manggarai terlepas pada 1920, Sultan Muhammad Salahuddin mendukung Republik Indonesia pada 1945, dan swapraja dihapus pada 1958.',
    territories: [
      {
        from: 1300,
        to: 1620,
        polygons: [
          // Mbojo sebelum Islam: Sumbawa timur ~1300–1620
          [[117.8, -8.45], [118.0, -8.3], [118.4, -8.3], [118.7, -8.2], [118.95, -8.25], [119.1, -8.4], [119.1, -8.6], [118.95, -8.75], [118.7, -8.8], [118.4, -8.85], [118.1, -8.9], [117.85, -8.75]],
        ],
        note: 'Kerajaan Mbojo sebelum Islam',
      },
      {
        from: 1620,
        to: 1958,
        polygons: [
          // Kesultanan Bima: Sumbawa timur ~1620–1958
          [[117.8, -8.45], [118.0, -8.3], [118.4, -8.3], [118.7, -8.2], [118.95, -8.25], [119.1, -8.4], [119.1, -8.6], [118.95, -8.75], [118.7, -8.8], [118.4, -8.85], [118.1, -8.9], [117.85, -8.75]],
          // Manggarai, Flores barat ~abad ke-17–1920
          [[119.8, -8.4], [120.1, -8.3], [120.4, -8.3], [120.6, -8.4], [120.6, -8.6], [120.5, -8.8], [120.2, -8.85], [119.95, -8.75], [119.8, -8.6]],
        ],
        note: 'Kesultanan Bima',
      },
    ],
    sources: [
      { title: 'Bo Sangaji Kai', kind: 'primer' },
      { title: 'Bo\' Sangaji Kai: Catatan Kerajaan Bima', author: 'Henri Chambert-Loir & Siti Maryam R. Salahuddin', year: 1999, kind: 'sekunder' },
      { title: 'Suma Oriental', author: 'Tomé Pires', year: 1515, kind: 'primer' },
    ],
  },
];
