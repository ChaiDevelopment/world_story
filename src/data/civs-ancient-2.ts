import type { Civilization } from '../types';

export const ancientCivs2: Civilization[] = [
  {
    id: 'het',
    name: 'Kerajaan Het (Hittite)',
    region: 'Asia Barat',
    start: -1650,
    end: -1180,
    color: '#e8743b',
    capital: { name: 'Hattusa', lon: 34.62, lat: 40.02 },
    summary:
      'Kisah ini bermula di dataran tinggi Anatolia tengah, ketika para raja Het membangun kota benteng Hattusa di tengah lekuk Sungai Kızılırmak (Halys). Dari sana mereka menjarah Babilonia, bersaing dengan Mesir, dan menandatangani salah satu perjanjian damai tertulis tertua yang dikenal. Sekitar 1180 SM, kota itu dibakar dan ditinggalkan di tengah guncangan besar akhir Zaman Perunggu.',
    highlights: [
      'Bahasa Het adalah bahasa Indo-Eropa tertua yang tertulis, memakai aksara paku di atas lempung.',
      'Sekitar 1595 SM Mursili I menjarah Babilonia dan mengakhiri dinasti Hammurabi.',
      'Pertempuran Kadesh (1274 SM) melawan Ramses II: pertempuran kereta perang besar yang diklaim menang oleh kedua pihak.',
      'Perjanjian damai Het-Mesir (1259 SM) antara Hattusili III dan Ramses II; salinannya dipajang di markas PBB di New York.',
      'Arsip Hattusa menyimpan sekitar 30.000 tablet lempung berisi hukum, doa, surat diplomatik, dan ritual.',
      'Kuil batu Yazılıkaya dengan relief para dewa dibangun pada masa Tudhaliya IV.',
    ],
    economy:
      'Ekonomi Het bertumpu pada pertanian gandum dan jelai di dataran tinggi yang bergantung pada hujan, serta peternakan domba dan sapi. Pegunungan Taurus menyediakan perak dan tembaga, dan besi sudah dikerjakan pada masa itu, meski besi masih langka dan mahal. Anggapan lama bahwa senjata besi memberi Het keunggulan militer kini dianggap berlebihan oleh banyak peneliti. Jauh sebelum kerajaan ini, sekitar 1900 SM, pedagang Asyur sudah berniaga timah dan kain di pos dagang karum Kanesh (Kültepe) dan meninggalkan ribuan tablet.',
    religionCulture:
      'Orang Het menyebut dunia mereka sebagai negeri "seribu dewa". Dewa badai Tarhunta dan dewi matahari Arinna menjadi pasangan utama, dan para raja menyerap dewa-dewi bangsa taklukan ke dalam panteon mereka. Hukum Het lebih banyak menetapkan denda ganti rugi daripada pembalasan setimpal. Raja berperan sebagai imam kepala yang harus menjalankan ritus sepanjang tahun, dan arsip tablet Hattusa menjadi saksi kehidupan istana yang rinci.',
    decline:
      'Sekitar 1200 SM kekeringan dan kelaparan melanda Anatolia, dan tablet-tablet menyebut kiriman gandum dari Mesir. Bersamaan dengan itu datang gelombang Bangsa Laut serta tekanan dari pihak-pihak lain. Para sejarawan masih berdebat tentang sebab pastinya. Sekitar 1180 SM Hattusa dibakar dan ditinggalkan di bawah Suppiluliuma II, raja terakhir yang diketahui. Beberapa kota di Suriah, seperti Karkemis, hidup terus sebagai negara Neo-Het.',
    territories: [
      {
        from: -1650,
        to: -1400,
        // Kerajaan Lama Het: Anatolia tengah di sekitar lengkung Sungai Halys, ~1500 SM
        polygons: [[[32, 39], [32.2, 40.2], [33.2, 41.2], [34.5, 41.6], [36, 41.5], [37.2, 41], [38, 40], [38, 38.8], [37.2, 38], [35.8, 37.9], [34.3, 38], [33, 38.3]]],
        note: 'Kerajaan Lama Het',
      },
      {
        from: -1400,
        to: -1180,
        // Kekaisaran Het: Anatolia hingga Suriah utara (Karkemis, Ugarit, Kadesh), ~1300 SM
        polygons: [[[27, 38.5], [27.5, 39.8], [28.5, 40.7], [30.5, 40.9], [32.5, 41.5], [35, 41.7], [37, 41], [39, 40.5], [41, 40], [41, 38.5], [40, 37.2], [39, 36.5], [38.5, 35.5], [37, 34.6], [36, 34.6], [35.9, 36], [34, 36.3], [32.5, 36.2], [31, 36.8], [29.5, 36.6], [28, 37.2]]],
        note: 'Kekaisaran Het',
      },
    ],
    sources: [
      { title: 'Arsip tablet lempung Boğazköy (Hattusa)', year: '±1650-1180 SM', kind: 'primer' },
      { title: 'Perjanjian Het-Mesir (Hattusili III dan Ramses II)', year: '1259 SM', kind: 'prasasti' },
      { title: 'The Kingdom of the Hittites', author: 'Trevor Bryce', year: 2005, kind: 'sekunder' },
      { title: 'Penggalian Hattusa oleh Institut Arkeologi Jerman (DAI)', year: '1906-kini', kind: 'arkeologi' },
    ],
  },
  {
    id: 'fenisia-kartago',
    name: 'Fenisia dan Kartago',
    region: 'Afrika',
    start: -1200,
    end: -146,
    color: '#b061e0',
    capital: { name: 'Kartago', lon: 10.32, lat: 36.85 },
    summary:
      'Pada mulanya mereka hanyalah pelaut dan pedagang dari kota-kota kecil di pesisir Lebanon: Tirus, Sidon, dan Byblos. Dengan kapal-kapal kayu aras, mereka menjelajah Laut Tengah, menyebarkan alfabet, dan mendirikan koloni hingga Spanyol. Salah satu koloni mereka, Kartago, tumbuh menjadi kekuatan yang menantang Roma dan baru runtuh pada 146 SM setelah tiga perang panjang.',
    highlights: [
      'Alfabet Fenisia 22 huruf (konsonan saja), leluhur alfabet Yunani, Latin, dan banyak aksara lain.',
      'Pewarna ungu Tirus dari siput murex, komoditas yang begitu mahal sehingga ungu identik dengan bangsawan.',
      'Menurut tradisi, Ratu Elissa (Dido) mendirikan Kartago pada 814 SM; arkeologi menunjukkan permukiman sejak sekitar abad ke-8 SM.',
      'Hannibal menyeberangi Alpen dengan gajah (218 SM) dan menghancurkan pasukan Roma di Cannae (216 SM).',
      'Pelayaran Hanno menyusuri pantai Afrika barat, dikisahkan dalam teks Periplus.',
      'Mago dari Kartago menulis buku pertanian yang kemudian diterjemahkan ke bahasa Latin atas perintah Senat Roma.',
    ],
    economy:
      'Kekayaan Fenisia dan Kartago bersumber dari laut. Kapal-kapal mereka membawa kayu aras Lebanon, kaca, kain berwarna ungu, perak dari tambang Spanyol, timah, dan gading. Pos-pos dagang dibangun sehari pelayaran satu dari yang lain di sepanjang pantai. Di Tunisia, Kartago juga memiliki pertanian yang maju, dan karya Mago tentang pertanian dikenal luas di dunia kuno.',
    religionCulture:
      'Kota-kota Fenisia memuja Melqart di Tirus, sementara Kartago menghormati pasangan Baal Hammon dan Tanit. Di tempat suci terbuka yang disebut tofet ditemukan guci berisi abu anak kecil dan hewan. Para peneliti masih berdebat apakah itu bukti pengorbanan anak, atau pemakaman anak yang wafat muda; sumber Yunani dan Romawi yang memusuhi Kartago tidak bisa dipercaya begitu saja. Kartago diperintah oligarki saudagar dan dua sufet (hakim tahunan), dengan dewan tetua dan majelis rakyat.',
    decline:
      'Kota-kota Fenisia ditundukkan berturut-turut oleh Asyur, Babilonia, Persia, dan akhirnya Aleksander, yang menghancurkan Tirus pada 332 SM. Kartago kalah dalam Perang Punik I (264-241 SM), kehilangan Sisilia, dan kalah lagi di Zama (202 SM). Pada 146 SM, setelah pengepungan tiga tahun, Roma menghancurkan kota itu dan menjadikan wilayahnya provinsi Africa. Cerita bahwa tanahnya ditaburi garam adalah karangan penulis belakangan, tanpa bukti sezaman.',
    territories: [
      {
        from: -1200,
        to: -814,
        // Kota-kota Fenisia di pesisir Levant, ~900 SM, serta koloni awal di Siprus dan Gadir
        polygons: [
          [[34.9, 32.8], [35.3, 32.8], [35.6, 33], [35.8, 33.4], [35.9, 33.8], [36.1, 34.1], [36.2, 34.5], [36.3, 35], [36, 35.5], [35.5, 35.6], [35.1, 35], [34.9, 34.2], [34.7, 33.5]],
          // Kition, Siprus
          [[33.5, 34.9], [33.8, 35], [34, 34.95], [33.9, 34.8], [33.6, 34.75]],
          // Gadir (Cadiz)
          [[-6.4, 36.5], [-6.1, 36.6], [-6.1, 36.4]],
        ],
        note: 'Kota-kota Fenisia',
      },
      {
        from: -814,
        to: -264,
        // Wilayah Kartago ~300 SM: Tunisia, Tripolitania, Sisilia barat, Sardinia selatan, Ibiza, pesisir Spanyol selatan
        polygons: [
          [[8.2, 36.9], [9.7, 37.3], [10.9, 37.1], [11.1, 36.4], [10.6, 35.6], [11, 35], [10.3, 34.2], [10.1, 33.6], [11.1, 33.2], [12.5, 32.9], [14.2, 32.6], [14.4, 31.9], [13.2, 31], [11.5, 31.5], [10, 32], [9.3, 32.9], [8.5, 34], [8.1, 35], [8.1, 36]],
          // Sisilia barat
          [[12.4, 37.9], [12.8, 38.05], [13.3, 38.2], [13.9, 38.05], [13.6, 37.7], [13, 37.5], [12.6, 37.65]],
          // Sardinia selatan
          [[8.4, 39.1], [8.5, 39.7], [9.2, 39.8], [9.7, 39.5], [9.6, 39], [9, 38.9], [8.5, 38.9]],
          // Ibiza
          [[1.2, 38.85], [1.6, 39.1], [1.6, 38.9], [1.4, 38.8]],
          // Pesisir Spanyol selatan
          [[-6.4, 36.5], [-5.5, 36.6], [-4.5, 36.7], [-3, 36.7], [-2.2, 36.8], [-1.9, 37.2], [-3, 37.2], [-4.4, 37.2], [-5.5, 37.2], [-6.4, 37]],
        ],
        note: 'Kartago, penguasa Laut Tengah barat',
      },
      {
        from: -264,
        to: -146,
        // Kartago menyusut: inti Tunisia dan Tripolitania barat, serta Spanyol tenggara (Barkid, hingga 206 SM)
        polygons: [
          [[8.5, 36.9], [9.7, 37.3], [10.9, 37.1], [11.1, 36.4], [10.6, 35.6], [11, 35], [10.3, 34.2], [10.1, 33.6], [11.2, 33.2], [12.5, 32.9], [11, 31.8], [9.6, 33], [8.7, 34.3], [8.3, 35.5]],
          [[-5, 36.6], [-3, 36.7], [-1.9, 37.2], [-1, 38], [-0.5, 38.5], [-0.6, 39.2], [-1.8, 38.9], [-3, 38], [-4.5, 37.4]],
        ],
        note: 'Perang Punik',
      },
    ],
    sources: [
      { title: 'Histories (Sejarah)', author: 'Polybius', year: '±150 SM', kind: 'primer' },
      { title: 'Ab Urbe Condita', author: 'Livius', year: '±27 SM-17 M', kind: 'primer' },
      { title: 'Carthage Must Be Destroyed', author: 'Richard Miles', year: 2010, kind: 'sekunder' },
      { title: 'The Phoenicians', author: 'Glenn Markoe', year: 2000, kind: 'sekunder' },
      { title: 'Prasasti sarkofagus Ahiram, Byblos', year: '±1000 SM', kind: 'prasasti' },
    ],
  },
  {
    id: 'israel-kuno',
    name: 'Israel dan Yehuda Kuno',
    region: 'Asia Barat',
    start: -1000,
    end: 135,
    color: '#6ec6ff',
    capital: { name: 'Yerusalem', lon: 35.23, lat: 31.78 },
    summary:
      'Kisah ini bermula di perbukitan Kanaan, tempat suku-suku yang kelak disebut Israel menetap di antara kota-kota kuno dan jalur dagang Mesir dan Mesopotamia. Menurut tradisi Alkitab, dua kerajaan, Israel di utara dan Yehuda di selatan, lahir di sana, lalu jatuh ke tangan Asyur dan Babilonia. Selama berabad-abad umat ini hidup di bawah Persia, Yunani, dan Roma, sampai Bait Suci dihancurkan pada 70 M dan Yerusalem ditutup bagi orang Yahudi setelah 135 M.',
    highlights: [
      'Prasasti Tel Dan (±840 SM) menyebut "Bait Daud"; bukti arkeologi tentang kerajaan Daud dan Salomo yang besar masih diperdebatkan.',
      'Prasasti Asyur mencatat Ahab dari Israel dalam Pertempuran Qarqar (853 SM); Prasasti Mesha dari Moab mengisahkan konflik dengan Israel.',
      'Asyur menaklukkan Samaria pada 722 SM; Nebukadnezar menghancurkan Bait Suci Pertama pada 586 SM dan membawa banyak orang ke Babilonia.',
      'Maklumat Koresh (538 SM) membuka jalan pulang dan pembangunan Bait Suci Kedua (selesai 516 SM).',
      'Pemberontakan Makabe (167 SM) melahirkan negara Hasmonea yang merdeka pada 140 SM.',
      'Perang Yahudi-Romawi (66-73 M) dan pemberontakan Bar Kokhba (132-135 M) mengakhiri keberadaan Yudea sebagai pusat Yahudi.',
    ],
    economy:
      'Ekonomi Israel dan Yehuda bertumpu pada pertanian lahan terasering di perbukitan: gandum, anggur, dan zaitun, serta peternakan domba dan kambing. Negeri ini terletak di jalur darat yang menghubungkan Mesir, Arab, dan Mesopotamia, sehingga raja-raja memungut bea dari karavan dan bersekutu dengan Fenisia untuk dagang laut. Pada masa Romawi, Herodes membangun pelabuhan Kaisarea, dan Bait Suci Yerusalem menjadi tujuan ziarah yang menghidupkan perdagangan kota.',
    religionCulture:
      'Bangsa ini terkenal karena monoteisme yang makin tegas: pemujaan satu Tuhan, Yahweh, yang kitab-kitabnya terkumpul dalam Taurat dan tulisan para nabi seperti Yesaya dan Yeremia. Pembuangan Babilonia mendorong penyuntingan dan pembukuan banyak teks suci. Setelah Bait Suci jatuh pada 70 M, para rabi di Yavne mengembangkan Yudaisme rabinik, dan dari lingkungan Yahudi abad ke-1 lahir pula gerakan pengikut Yesus dari Nazaret, cikal bakal Kekristenan. Tulisan ini menyajikan keduanya secara netral sebagai sejarah.',
    decline:
      'Setelah Pompeius merebut Yerusalem pada 63 SM, Yudea menjadi bagian dunia Romawi. Ketegangan agama dan pajak memicu perang besar pada 66 M. Titus menghancurkan Bait Suci Kedua pada 70 M; hanya sebagian tembok penyangganya (Tembok Barat) yang tersisa. Setelah pemberontakan Bar Kokhba dipadamkan pada 135 M, Hadrianus mengubah Yerusalem menjadi Aelia Capitolina dan provinsinya dinamai Syria Palaestina. Banyak orang Yahudi menetap di diaspora di seluruh Laut Tengah dan Mesopotamia.',
    territories: [
      {
        from: -1000,
        to: -586,
        // Kerajaan Israel dan Yehuda (Kanaan), ~850 SM
        polygons: [[[34.4, 31.4], [34.7, 32], [34.9, 32.5], [35.1, 32.9], [35.3, 33.25], [35.7, 33.3], [36, 33], [35.9, 32.5], [35.6, 32], [35.6, 31.5], [35.5, 31], [35.3, 30.7], [34.9, 30.6], [34.5, 30.9]]],
        note: 'Kerajaan Israel dan Yehuda',
      },
      {
        from: -586,
        to: -63,
        // Yehud/Yudea ~400 SM; negara Hasmonea (140-63 SM) meluas ke Galilea, Idumea, dan Transyordania, tidak digambar terpisah
        polygons: [[[34.8, 31.7], [34.85, 31.9], [34.95, 32.1], [35.15, 32.2], [35.4, 32.2], [35.7, 32.1], [35.65, 31.9], [35.6, 31.7], [35.5, 31.3], [35.3, 31.2], [35.1, 31.2], [34.9, 31.4]]],
        note: 'Pembuangan, Bait Suci Kedua, dan Hasmonea',
      },
      {
        from: -63,
        to: 135,
        // Yudea Romawi (Yudea, Samaria, Galilea, Idumea), ~30 M
        polygons: [[[34.4, 31.3], [34.7, 32], [34.9, 32.5], [35.1, 32.9], [35.4, 33.2], [35.8, 33], [35.7, 32.5], [35.6, 32], [35.55, 31.5], [35.4, 31], [35.2, 30.8], [34.7, 31]]],
        note: 'Yudea Romawi',
      },
    ],
    sources: [
      { title: 'Tanakh (Alkitab Ibrani)', year: '±abad 10-2 SM', kind: 'primer' },
      { title: 'Perang Yahudi', author: 'Flavius Yosefus', year: '±75 M', kind: 'primer' },
      { title: 'Prasasti Tel Dan dan Prasasti Mesha', year: '±840 SM', kind: 'prasasti' },
      { title: 'The Bible Unearthed', author: 'Israel Finkelstein dan Neil Asher Silberman', year: 2001, kind: 'sekunder' },
    ],
  },
  {
    id: 'kush-aksum',
    name: 'Kush dan Aksum',
    region: 'Afrika',
    start: -1070,
    end: 940,
    color: '#f6bd60',
    capital: { name: 'Meroe', lon: 33.75, lat: 16.94 },
    summary:
      'Di hulu Sungai Nil, di tanah Nubia yang oleh orang Mesir disebut Kush, tumbuh kerajaan yang berani menaklukkan Mesir sendiri pada abad ke-8 SM. Pusatnya bergeser dari Napata ke Meroe, tempat para kandake (ratu) memerintah dan tukang besi bekerja. Di dataran tinggi Eritrea dan Tigray, kerajaan Aksum bangkit, mengukir obelisk raksasa, mencetak koin emas, dan menjadikan Kristen agama negara.',
    highlights: [
      'Piye dari Kush menaklukkan Mesir dan mendirikan Dinasti ke-25 (sekitar 744-656 SM), para "firaun hitam".',
      'Nubia memiliki lebih banyak piramida daripada Mesir, walaupun ukurannya jauh lebih kecil.',
      'Kandake Amanirenas melawan Roma (24 SM) dan merundingkan damai di Samos (21/20 SM); kepala perunggu patung Augustus kini di British Museum.',
      'Aksara Meroitik sudah bisa dibaca bunyinya, tetapi bahasanya sebagian besar belum dipahami.',
      'Raja Ezana (±330 M) memeluk Kristen, menjadikan Aksum salah satu negara paling awal yang beragama Kristen secara resmi.',
      'Aksum mencetak koin emas dan mendirikan stela batu raksasa di Aksum; pada 525 M Kaleb menyeberangi Laut Merah dan menaklukkan Himyar di Yaman.',
    ],
    economy:
      'Kush mengendalikan jalur emas, gading, kayu eboni, dan budak antara Afrika tengah dan Mesir. Di Meroe terdapat banyak sisa peleburan besi, sehingga kota ini dijuluki "Birmingham Afrika" (julukan lama yang kini dipakai dengan hati-hati). Aksum menguasai pelabuhan Adulis di Laut Merah dan berdagang emas, gading, dan kemenyan dengan Mesir Romawi, Arab, dan India. Panen musim hujan di dataran tinggi menopang kota-kotanya.',
    religionCulture:
      'Orang Kush memuja dewa-dewa Mesir, seperti Amun di Jebel Barkal, di samping dewa mereka sendiri, Apedemak yang berkepala singa. Kekuasaan sering diwariskan lewat garis ibu, dan para kandake tampil sebagai pemimpin perang dan pembangun kuil. Aksum mula-mula memuja dewa-dewa Semit selatan, lalu mengikuti Ezana yang memeluk Kristen setelah dibimbing Frumentius. Tradisi Ethiopia lahir dari sini. Pada 615 M sekelompok Muslim awal mengungsi ke Najasyi (Negus) Aksum dan diterima dengan baik.',
    decline:
      'Kush melemah ketika jalur dagang bergeser dan Aksum meningkat; pada sekitar 350 M Ezana menyerang Meroe, dan kerajaan itu pecah. Aksum sendiri merosot setelah sekitar abad ke-7, ketika jalur dagang Laut Merah berpindah ke tangan lain dan perubahan iklim serta tekanan lingkungan melemahkan pertanian. Tradisi menyebut Ratu Gudit menghancurkan kota itu sekitar 940, tetapi kisah ini bersifat legendaris dan para sejarawan menimbangnya dengan hati-hati.',
    territories: [
      {
        from: -1070,
        to: -300,
        // Kush Napata: lembah Nil Nubia antara katarak 1 dan 5, ~700 SM (Mesir 744-656 SM dijelaskan di catatan)
        polygons: [[[30.5, 21.8], [31.6, 22.1], [32.7, 22.1], [33.5, 21.4], [34, 20.3], [34.3, 19], [34.2, 17.8], [33.7, 16.9], [32.5, 16.7], [31.2, 17.2], [30.2, 18.2], [29.8, 19.5], [29.9, 20.8]]],
        note: 'Kush Napata (juga menguasai Mesir 744-656 SM)',
      },
      {
        from: -300,
        to: 350,
        // Kush Meroe: Pulau Meroe, Butana, Nil antara katarak 5 dan 6, ~100 SM
        polygons: [[[31, 19.8], [32.5, 20], [33.8, 19.5], [35, 18.5], [36, 17.5], [36, 15.5], [35.6, 14], [34.5, 13.2], [33, 13], [32, 13.5], [31.8, 14.8], [31, 16], [30.8, 17.5], [30.6, 18.8]]],
        note: 'Kush Meroe',
      },
      {
        from: 350,
        to: 940,
        // Aksum: dataran tinggi Eritrea-Tigray, pesisir Laut Merah (Adulis), dan Yaman barat daya (~525 M)
        polygons: [
          [[36.5, 14], [36.3, 15.5], [36.8, 16.6], [38, 17.2], [38.8, 16.8], [39.6, 15.8], [40.2, 14.9], [41, 14], [40.5, 13.2], [40, 12.6], [39, 12.4], [38, 12.4], [37, 12.8]],
          // Yaman barat daya (penaklukan Himyar)
          [[42.7, 13], [43.4, 13.4], [44, 14.5], [43.8, 15.8], [42.9, 16.2], [42.6, 15]],
        ],
        note: 'Kerajaan Aksum',
      },
    ],
    sources: [
      { title: 'Prasasti Ezana dari Aksum', year: '±350 M', kind: 'prasasti' },
      { title: 'Periplus Maris Erythraei', year: '±abad ke-1 M', kind: 'primer' },
      { title: 'Kush: The Kingdom of Kush', author: 'Derek Welsby', year: 1996, kind: 'sekunder' },
      { title: 'Aksum: An African Civilisation of Late Antiquity', author: 'Stuart Munro-Hay', year: 1991, kind: 'sekunder' },
    ],
  },
  {
    id: 'parthia-sasaniyah',
    name: 'Parthia dan Sasaniyah',
    region: 'Asia Barat',
    start: -247,
    end: 651,
    color: '#2ec4b6',
    capital: { name: 'Ctesiphon', lon: 44.58, lat: 33.09 },
    summary:
      'Kisah ini bermula ketika suku Parni dari stepa timur Laut Kaspia mengambil alih Iran timur laut dan mendirikan dinasti Arsakid pada 247 SM. Parthia menahan legiun Roma di Carrhae dan menjadi jembatan Jalur Sutra antara Tiongkok dan Mediterania. Pada 224 M, Ardashir I menggulingkan mereka dan mendirikan Kekaisaran Sasaniyah, saingan utama Roma dan Bizantium selama empat abad, sampai ditaklukkan pasukan Arab pada 651.',
    highlights: [
      'Pertempuran Carrhae (53 SM): pemanah berkuda Parthia di bawah Surena mengalahkan Crassus dan tujuh legiun Roma.',
      'Parthia menjadi perantara dagang Jalur Sutra; utusan Han mencapai wilayahnya sekitar 115 SM.',
      'Shapur I menawan Kaisar Valerianus (260 M), peristiwa yang diabadikan dalam relief batu di Naqsh-e Rustam.',
      'Khosrow I Anushirvan (531-579) memperbaiki sistem pajak, mendirikan pusat ilmu di Gundishapur, dan membawa catur serta kumpulan dongeng Kalilah wa Dimnah dari India.',
      'Perang 602-628 dengan Bizantium: Khosrow II merebut Yerusalem (614), lalu Heraklius membalas (627).',
      'Pertempuran Qadisiyyah (636) dan Nahavand (642) membuka jalan runtuhnya Sasaniyah; Yazdegerd III terbunuh di Merv pada 651.',
    ],
    economy:
      'Kekayaan dua kekaisaran ini datang dari pajak tanah di lembah subur Mesopotamia dan Iran, irigasi qanat, serta bea Jalur Sutra. Sutra Tiongkok, rempah India, dan perak serta kaca dari barat melewati kota-kota mereka. Kota perdagangan Ctesiphon-Seleukia menjadi salah satu kota terbesar dunia. Di bawah Sasaniyah, pajak tanah diukur secara teratur dan kerajinan tekstil serta kaca berkembang.',
    religionCulture:
      'Parthia relatif toleran, memadukan dewa Persia, Yunani, dan setempat. Di bawah Sasaniyah, Zoroastrianisme menjadi agama negara dengan api suci di kuil-kuilnya; pendeta Kartir memperkuat pengaruhnya pada abad ke-3. Mani, pendiri Manikeisme, dihukum mati sekitar 274. Bahasa Pahlavi dipakai di istana, dan Avesta dibukukan. Arsitektur iwan (aula berlengkung terbuka), seperti Taq Kasra di Ctesiphon, kelak ditiru di dunia Islam. Syair Shahnameh karya Firdausi mengenang masa ini.',
    decline:
      'Parthia melemah akibat perang saudara, serbuan Roma (Trajanus 116, Avidius Cassius 165), dan pemberontakan bawahan; Ardashir I mengalahkan raja terakhirnya pada 224. Sasaniyah kelelahan oleh perang panjang dengan Bizantium (602-628), pergolakan istana, dan wabah. Pasukan Arab yang baru bersatu mengalahkan mereka di Qadisiyyah (636) dan Nahavand (642). Yazdegerd III, raja terakhir, terbunuh di Merv pada 651.',
    territories: [
      {
        from: -247,
        to: 224,
        // Kekaisaran Parthia pada puncak (~abad ke-1 SM): Iran, Mesopotamia, Khorasan
        polygons: [[[43.5, 37.8], [44.5, 39.2], [47, 39.5], [49, 38.6], [51, 37], [54, 37.3], [56, 38], [58.5, 37.7], [60.5, 36.6], [61.2, 35.4], [62.5, 34], [63, 31.5], [62, 29.5], [61.5, 27.5], [58, 25.6], [56.5, 27], [54, 26.6], [51.5, 27.8], [50.2, 29.8], [48.5, 30.3], [47.5, 31.2], [46, 31], [44.5, 31.8], [43.6, 33], [43, 35.5]]],
        note: 'Kekaisaran Parthia (Arsakid)',
      },
      {
        from: 224,
        to: 651,
        // Kekaisaran Sasaniyah pada puncak (~550 M, Khosrow I): Iran, Mesopotamia, Kaukasus, Asia Tengah barat, Makran
        polygons: [[[40, 36.5], [41.5, 37.8], [43.5, 40.5], [45, 41.3], [46.5, 41.8], [48.5, 41.4], [49.3, 40.3], [49, 37.5], [51, 36.8], [53.5, 36.9], [54, 37.5], [56, 38], [58, 38.2], [60.5, 37.8], [62, 38.5], [64.5, 38.6], [66.5, 38.2], [68, 37.2], [70, 35.2], [69, 33.3], [68, 31.5], [66.5, 30], [65, 28.5], [63, 26.5], [61.5, 25.3], [58.5, 25.2], [56.5, 27], [54, 26.6], [51.5, 27.8], [50.2, 29.8], [48.5, 30.2], [47.5, 31], [46, 30.4], [44.2, 30.4], [42.8, 31.8], [41.2, 33], [40, 34.8]]],
        note: 'Kekaisaran Sasaniyah',
      },
    ],
    sources: [
      { title: 'Res Gestae Divi Saporis (prasasti Shapur I di Ka\'ba-ye Zardosht)', year: '±260 M', kind: 'prasasti' },
      { title: 'Res Gestae', author: 'Ammianus Marcellinus', year: '±390 M', kind: 'primer' },
      { title: 'Tarikh al-Rusul wa al-Muluk', author: 'al-Tabari', year: '±915 M', kind: 'primer' },
      { title: 'Sasanian Persia: The Rise and Fall of an Empire', author: 'Touraj Daryaee', year: 2009, kind: 'sekunder' },
    ],
  },
  {
    id: 'olmek',
    name: 'Olmek dan Mesoamerika Awal',
    region: 'Amerika',
    start: -1600,
    end: -350,
    color: '#8ac926',
    capital: { name: 'La Venta', lon: -94.04, lat: 18.1 },
    summary:
      'Di dataran rendah panas dan lembap Teluk Meksiko, sekitar 1400 SM, orang-orang desa mulai membangun pusat upacara San Lorenzo dan mengangkut balok-balok basal untuk dipahat menjadi kepala raksasa. Budaya yang kemudian dinamai Olmek ("orang karet" dalam bahasa Nahuatl, nama yang diberikan jauh belakangan) ini menjadi budaya induk Mesoamerika. Dari mereka bermula banyak kebiasaan yang diwarisi bangsa-bangsa sesudahnya: permainan bola, tatahan jade, dan mungkin tulisan serta kalender.',
    highlights: [
      'Kepala-kepala basal raksasa (17 sudah ditemukan, tinggi hingga sekitar 3 m) mungkin menggambarkan penguasa; batunya diangkut puluhan kilometer dari Pegunungan Tuxtla.',
      'Bola karet tertua ditemukan di rawa persembahan El Manatí (sekitar 1600 SM), bukti awal permainan bola Mesoamerika.',
      'San Lorenzo (±1400-900 SM) lalu La Venta (±900-400 SM) menjadi pusat berurutan.',
      'Piramida tanah liat setinggi sekitar 30 m di La Venta serta persembahan mosaik serpentin.',
      'Prasasti Cascajal (ditemukan 1999, ±900 SM) mungkin aksara tertua di Amerika, tetapi masih diperdebatkan.',
      'Jaringan dagang jade dan obsidian menghubungkan Teluk dengan Oaxaca dan Guerrero.',
    ],
    economy:
      'Sungai-sungai di dataran rendah memberi tanah aluvial yang subur untuk jagung, kacang, dan labu, ditambah ikan, kura-kura, dan buruan. Karet dari pohon setempat diolah menjadi bola dan barang lain. Para pemimpin mengendalikan penyaluran batu basal, jade, serpentin, dan obsidian dari tempat yang jauh, dan barang-barang itu menjadi tanda status. Para sejarawan belum yakin seberapa jauh jaringan itu terorganisasi.',
    religionCulture:
      'Seni Olmek sarat figur "were-jaguar", makhluk setengah manusia setengah jaguar, serta lambang dewa jagung. Kepala raksasa, altar batu, dan persembahan jade ditanam di pusat upacara. Permainan bola, kalender, dan mungkin tulisan yang kelak berkembang pada Maya dan Zapotek disebut berakar di sini, meski seberapa besar peran Olmek dibandingkan budaya sezaman masih diperdebatkan. Kalender Hitungan Panjang yang paling awal terbaca (Stela C, Tres Zapotes, 32 SM) berasal dari masa Epi-Olmek, setelah periode atlas ini.',
    decline:
      'San Lorenzo ditinggalkan sekitar 900 SM, mungkin karena perubahan aliran sungai dan guncangan sosial; banyak monumennya sengaja dirusak dan dikubur. La Venta ditinggalkan sekitar 400 SM. Penyebab pastinya belum jelas. Budaya Olmek tidak ditaklukkan bangsa lain, melainkan memudar seraya pusat-pusat baru seperti Monte Albán dan Tres Zapotes (Epi-Olmek) tumbuh, dan unsur-unsurnya diteruskan ke Zapotek dan Maya.',
    territories: [
      {
        from: -1600,
        to: -900,
        // San Lorenzo: pesisir Teluk Veracruz-Tabasco, ~1200 SM
        polygons: [[[-96.5, 18], [-96.3, 18.5], [-95.9, 18.75], [-95.3, 18.8], [-94.5, 18.6], [-94, 18.55], [-93.6, 18.3], [-93.5, 17.9], [-93.8, 17.5], [-94.6, 17.3], [-95.5, 17.3], [-96.2, 17.5]]],
        note: 'San Lorenzo',
      },
      {
        from: -900,
        to: -350,
        // La Venta: pusat Tabasco dan lingkup pengaruh yang lebih luas, ~600 SM (cincin kecil: situs bergaya Olmek di Morelos)
        polygons: [
          [[-97.2, 18], [-96.6, 18.8], [-95.3, 18.9], [-94, 18.7], [-92.9, 18.4], [-92.3, 17.7], [-92.8, 17], [-93.8, 16.6], [-95, 16.5], [-96.2, 16.8], [-97, 17.2], [-97.2, 17.6]],
          [[-99, 18.9], [-98.5, 18.9], [-98.5, 18.5], [-99, 18.5]],
        ],
        note: 'La Venta dan pengaruhnya',
      },
    ],
    sources: [
      { title: 'The Olmecs: America\'s First Civilization', author: 'Richard Diehl', year: 2004, kind: 'sekunder' },
      { title: 'Penggalian San Lorenzo', author: 'Ann Cyphers', year: '1990-an-kini', kind: 'arkeologi' },
      { title: 'Museum Taman La Venta (Villahermosa)', kind: 'arkeologi' },
    ],
  },
];
