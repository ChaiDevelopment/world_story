import type { Civilization } from '../types';

export const asiaCivs2: Civilization[] = [
  {
    id: 'dai-viet',
    name: 'Dai Viet (Vietnam)',
    region: 'Asia Tenggara',
    start: 939,
    end: 1802,
    color: '#ff8fab',
    capital: { name: 'Thang Long (Hanoi)', lon: 105.85, lat: 21.03 },
    summary:
      'Kisah ini bermula di Delta Sungai Merah, ketika orang Viet yang sudah seribu tahun hidup di bawah kekuasaan Tiongkok akhirnya berdiri sendiri pada 939. Berabad-abad kemudian, kerajaan kecil itu menahan tiga serangan Mongol, mengusir pendudukan Ming, lalu bergerak ke selatan hingga Delta Mekong. Pada 1802 seluruh wilayah itu disatukan di bawah Dinasti Nguyen.',
    highlights: [
      'Kemenangan Ngo Quyen atas Han Selatan di Sungai Bach Dang (938) dan awal kemerdekaan (939)',
      'Thang Long menjadi ibu kota (1010) dan Van Mieu didirikan (1070)',
      'Tiga kali menahan serangan Mongol (1258, 1285, 1288) di bawah Tran Hung Dao',
      'Perlawanan Le Loi dan berdirinya Dinasti Le (1428)',
      'Kode Hong Duc dan penaklukan Vijaya milik Champa (1471)',
      'Nam tien, pemberontakan Tay Son, dan penyatuan oleh Gia Long (1802)',
    ],
    economy:
      'Ekonomi bertumpu pada sawah padi basah di Delta Sungai Merah yang dikelola dengan tanggul dan kanal. Para petani membayar pajak padi dan menjalani kerja bakti, sementara pengrajin Thang Long membuat keramik, sutra, dan perkakas. Setelah ke selatan, Delta Mekong menjadi lumbung beras baru, dan pelabuhan seperti Hoi An menghubungkan Vietnam dengan pedagang Tiongkok, Jepang, dan Eropa.',
    religionCulture:
      'Orang Viet memadukan Buddha, Konfusianisme, Taoisme, dan pemujaan leluhur serta roh desa. Ujian istana berbasis kitab Konfusian dimulai pada masa Ly dan menjadi jalan para cendekiawan masuk birokrasi. Huruf Han dan Nom (aksara Viet yang disesuaikan dari huruf Han) dipakai untuk sastra, sedangkan aksara Latin quoc ngu mulai disusun pada abad ke-17 oleh para misionaris.',
    decline:
      'Dai Viet tidak runtuh begitu saja. Perang saudara Trinh dan Nguyen membagi negeri selama berabad-abad, lalu Pemberontakan Tay Son mengguncang keduanya. Nguyen Anh, yang kembali dengan bantuan sebagian pihak asing, merebut seluruh negeri dan menjadi Kaisar Gia Long pada 1802, mengakhiri sebutan Dai Viet dan membuka era Dinasti Nguyen.',
    territories: [
      {
        from: 939,
        to: 1428,
        // Delta Sungai Merah dan Thanh Hoa–Nghe An ~1100
        polygons: [[[102.8, 22.4], [103.5, 22.7], [104.5, 23.3], [105.6, 23.2], [106.7, 22.9], [107.6, 22.4], [108.0, 21.6], [107.9, 21.0], [107.0, 20.6], [106.5, 19.8], [106.0, 19.0], [105.8, 18.4], [106.2, 17.8], [106.0, 17.5], [105.0, 17.8], [104.2, 18.6], [103.8, 19.6], [103.5, 20.6], [102.8, 21.4]]],
        note: 'Ly, Tran, dan perlawanan',
      },
      {
        from: 1428,
        to: 1802,
        // Nam tien sampai Delta Mekong ~1780
        polygons: [[[102.8, 22.4], [104.5, 23.3], [105.6, 23.2], [106.7, 22.9], [107.6, 22.4], [108.2, 21.6], [108.0, 20.5], [107.0, 19.5], [106.8, 18.5], [107.5, 17.0], [108.8, 16.3], [109.5, 15.0], [109.4, 13.5], [109.5, 12.0], [109.2, 11.2], [108.6, 10.7], [107.5, 10.2], [107.0, 9.5], [106.8, 9.0], [105.2, 8.5], [104.8, 8.6], [104.8, 9.8], [105.2, 10.5], [105.9, 11.0], [106.3, 11.8], [107.3, 12.0], [107.5, 13.5], [107.4, 15.0], [106.8, 16.0], [105.8, 17.0], [105.0, 17.8], [104.2, 18.6], [103.8, 19.6], [103.5, 20.6], [102.8, 21.4]]],
        note: 'Dinasti Le, Nam tien, dan Tay Son',
      },
    ],
    sources: [
      { title: 'Dai Viet Su Ky Toan Thu', year: 'abad ke-15–17', kind: 'primer' },
      { title: 'A History of the Vietnamese', author: 'K. W. Taylor', year: 2013, kind: 'sekunder' },
      { title: 'The Birth of Vietnam', author: 'K. W. Taylor', year: 1983, kind: 'sekunder' },
      { title: 'Vietnam: A New History', author: 'Christopher Goscha', year: 2016, kind: 'sekunder' },
    ],
  },
  {
    id: 'champa',
    name: 'Champa',
    region: 'Asia Tenggara',
    start: 192,
    end: 1832,
    color: '#a0e548',
    capital: { name: 'Vijaya (Do Ban)', lon: 109.0, lat: 13.9 },
    summary:
      'Pada mulanya, di pesisir Vietnam tengah, orang-orang penutur bahasa Austronesia mendirikan negeri-negeri pelabuhan yang oleh catatan Tiongkok disebut Lam Ap. Mereka menjadi pelaut dan pedagang yang menghubungkan Laut Cina Selatan dengan Samudra Hindia, serta meninggalkan menara bata Mỹ Sơn. Tekanan Dai Viet dari utara perlahan mempersempit Champa hingga Minh Mang menghapusnya pada 1832.',
    highlights: [
      'Prasasti Bhadravarman dan awal kompleks candi Mỹ Sơn (sekitar 400)',
      'Candi-candi Po Nagar dan Panduranga, yang menurut prasasti diserang pelaut dari Jawa (±774/787)',
      'Indrapura dan biara Buddha Mahayana Dong Duong (±875)',
      'Penjarahan Angkor oleh Champa lewat Tonle Sap (1177)',
      'Jatuhnya Vijaya (1471) dan bertahannya Panduranga hingga 1832',
      'Orang Cham, kini beragama Islam atau Hindu, hidup di Vietnam dan Kamboja',
    ],
    economy:
      'Champa hidup dari dataran sempit di antara pegunungan dan laut, dengan padi, hasil hutan, kayu gaharu, gading, dan emas. Pelabuhan-pelabuhannya, seperti Hoi An dan Thi Nai, menjadi persinggahan kapal yang berlayar antara Tiongkok dan Asia Tenggara kepulauan. Pada masa-masa tertentu para raja juga menarik upeti dan hasil jarahan dari perang dengan tetangga.',
    religionCulture:
      'Para raja Champa memuja Siwa dalam bentuk lingga dan dewi Po Nagar, sementara Buddha Mahayana berkembang di Indrapura. Masyarakatnya mengikuti garis ibu, dan perempuan memegang peran kuat dalam keluarga. Sejak abad ke-15, Islam menyebar di kalangan Cham, sehingga kini ada komunitas Cham Muslim dan Cham Hindu yang hidup berdampingan. Prasasti ditulis dalam bahasa Sanskerta dan Cham Kuno.',
    decline:
      'Champa bukan satu kerajaan terpusat, melainkan gabungan negeri-negeri pesisir yang sering berebut hegemoni. Jatuhnya Vijaya pada 1471 menghancurkan pusat politiknya, dan Panduranga yang tersisa menjadi bawahan Nguyen pada 1697. Pada 1832 Kaisar Minh Mang menghapus kerajaan itu dan memasukkannya ke dalam wilayah Vietnam.',
    territories: [
      {
        from: 192,
        to: 1000,
        // Lam Ap dan Champa awal ~800
        polygons: [[[106.5, 17.5], [107.3, 17.3], [108.0, 17.0], [108.8, 16.3], [109.3, 15.2], [109.4, 13.8], [109.3, 12.5], [109.1, 11.6], [108.6, 11.0], [108.0, 10.8], [107.5, 11.2], [107.2, 12.0], [107.3, 13.3], [107.4, 14.5], [106.9, 15.5], [106.5, 16.5]]],
        note: 'Lam Ap dan Champa awal',
      },
      {
        from: 1000,
        to: 1471,
        // Vijaya ~1150
        polygons: [[[106.9, 17.4], [107.8, 16.9], [108.6, 16.3], [109.3, 15.2], [109.4, 13.8], [109.3, 12.5], [109.1, 11.4], [108.6, 10.9], [107.9, 10.8], [107.4, 11.3], [107.1, 12.2], [107.2, 13.4], [107.3, 14.6], [106.8, 15.6], [106.6, 16.6]]],
        note: 'Vijaya',
      },
      {
        from: 1471,
        to: 1832,
        // Panduranga ~1600
        polygons: [[[108.2, 12.5], [108.6, 12.6], [109.0, 12.5], [109.3, 12.2], [109.28, 11.8], [109.2, 11.4], [108.9, 11.05], [108.5, 10.8], [108.0, 10.8], [107.7, 11.1], [107.55, 11.6], [107.8, 12.1]]],
        note: 'Panduranga',
      },
    ],
    sources: [
      { title: 'Prasasti Champa (Mỹ Sơn, Po Nagar, dan lainnya)', year: 'abad ke-4–15', kind: 'prasasti' },
      { title: 'The Art of Champa', author: 'Jean Boisselier', year: 1963, kind: 'sekunder' },
      { title: 'Champa and the Archaeology of Mỹ Sơn (Vietnam)', author: 'Andrew Hardy dkk.', year: 2009, kind: 'sekunder' },
      { title: 'The Cham of Vietnam', author: 'Po Dharma dan Momoki Shiro (ed.)', year: 2011, kind: 'sekunder' },
    ],
  },
  {
    id: 'bagan-burma',
    name: 'Bagan, Taungoo, dan Konbaung (Myanmar)',
    region: 'Asia Tenggara',
    start: 849,
    end: 1885,
    color: '#c77dff',
    capital: { name: 'Bagan', lon: 94.86, lat: 21.17 },
    summary:
      'Kisah ini bermula di dataran kering Irrawaddy tengah, tempat sebuah kota benteng bernama Bagan tumbuh menjadi pusat kerajaan besar pertama di Myanmar. Dari sinilah Theravada menyebar dan ribuan kuil dibangun, sebelum serangan Mongol meruntuhkannya. Berabad-abad kemudian Taungoo dan Konbaung menyatukan kembali negeri itu, sampai Inggris menyingkirkan Raja Thibaw pada 1885.',
    highlights: [
      'Anawrahta menaklukkan Thaton dan menjadikan Theravada agama kerajaan (1057)',
      'Ribuan kuil dibangun di dataran Bagan, termasuk Ananda (1105)',
      'Prasasti Myazedi empat bahasa (1113)',
      'Bayinnaung membangun imperium terbesar Asia Tenggara (abad ke-16)',
      'Alaungpaya dan penaklukan Ayutthaya (1767)',
      'Tiga perang Anglo-Burma dan akhir monarki (1824–1885)',
    ],
    economy:
      'Kerajaan di lembah Irrawaddy hidup dari padi yang diairi sistem irigasi, kapas, minyak wijen, dan perdagangan sungai. Raja dan bangsawan menyumbangkan tanah serta pekerja untuk kuil, sehingga lembaga keagamaan menjadi pemilik tanah besar. Pelabuhan Pegu dan Martaban pada masa Taungoo menjual beras, lak, dan batu rubi ke pedagang Samudra Hindia.',
    religionCulture:
      'Buddha Theravada menjadi agama utama sejak Anawrahta, berdampingan dengan pemujaan 37 nat (roh), yang tidak pernah hilang dari kehidupan rakyat. Para raja dan bangsawan membangun kuil sebagai tanda jasa, sedangkan para biksu menjaga naskah daun lontar. Huruf Burma berkembang dari aksara Mon, dan sastra istana ditulis dalam bahasa Burma serta Pali.',
    decline:
      'Serangan Mongol meruntuhkan Pagan pada 1287, dan perpecahan baru kembali bertahun-tahun kemudian. Konbaung melemah di bawah tekanan Inggris, yang memenangi tiga perang (1824–1826, 1852, 1885). Pada 1885 Raja Thibaw diturunkan dan dibuang ke India, dan seluruh negeri masuk dalam India Britania.',
    territories: [
      {
        from: 849,
        to: 1287,
        // Kerajaan Pagan ~1200
        polygons: [[[94.0, 24.8], [95.5, 25.0], [96.8, 24.5], [97.5, 23.5], [98.0, 22.5], [98.3, 21.0], [98.0, 19.5], [97.8, 18.0], [97.5, 16.5], [96.5, 15.8], [95.5, 15.8], [94.5, 16.0], [94.0, 17.0], [93.8, 18.5], [93.5, 20.0], [93.2, 21.5], [93.5, 23.0]]],
        note: 'Kerajaan Pagan',
      },
      {
        from: 1287,
        to: 1531,
        // Ava, Hanthawaddy, dan negara Shan ~1450
        polygons: [[[94.2, 25.8], [96.0, 26.2], [97.3, 25.0], [98.2, 23.5], [99.0, 22.0], [99.5, 20.5], [99.0, 19.0], [98.6, 17.5], [98.3, 16.0], [98.2, 14.5], [97.9, 13.8], [97.5, 15.3], [96.8, 16.0], [95.5, 15.8], [94.6, 16.2], [94.5, 17.5], [94.3, 19.0], [94.1, 20.5], [94.0, 22.0], [93.8, 23.5], [93.8, 24.5]]],
        note: 'Ava dan Hanthawaddy',
      },
      {
        from: 1531,
        to: 1752,
        // Taungoo; jangkauan puncak Bayinnaung ~1580, menyempit setelah 1599
        polygons: [[[94.2, 26.0], [96.0, 26.5], [97.5, 25.3], [98.6, 24.0], [100.0, 23.2], [101.2, 22.0], [101.8, 20.6], [101.0, 19.2], [101.3, 17.5], [100.8, 16.0], [100.3, 14.5], [99.5, 13.0], [99.2, 11.5], [98.8, 10.5], [98.6, 12.0], [98.2, 13.5], [97.8, 15.0], [97.0, 16.0], [95.5, 15.8], [94.6, 16.2], [94.5, 17.5], [94.3, 19.0], [94.1, 20.5], [94.0, 22.0], [93.8, 23.5], [93.8, 24.8]]],
        note: 'Taungoo (puncak ±1580)',
      },
      {
        from: 1752,
        to: 1885,
        // Konbaung dengan Arakan, Manipur, dan Assam sementara ~1820
        polygons: [[[93.0, 27.2], [95.5, 28.0], [97.5, 27.8], [98.7, 26.0], [98.7, 24.5], [100.0, 23.4], [101.1, 22.2], [101.6, 21.0], [100.8, 19.8], [100.0, 19.0], [99.0, 17.5], [98.6, 15.5], [98.5, 13.5], [98.5, 11.5], [98.6, 10.0], [98.2, 10.5], [97.7, 12.5], [97.5, 15.0], [96.5, 16.0], [95.0, 15.8], [94.3, 16.2], [94.3, 17.5], [93.8, 19.0], [93.2, 20.2], [92.4, 21.5], [92.3, 22.7], [92.9, 24.0], [93.5, 25.2], [93.4, 26.3]]],
        note: 'Konbaung',
      },
    ],
    sources: [
      { title: 'Hmannan Yazawin (Kronik Istana Kaca)', year: 1829, kind: 'primer' },
      { title: 'Prasasti Myazedi', year: 1113, kind: 'prasasti' },
      { title: 'The River of Lost Footsteps', author: 'Thant Myint-U', year: 2006, kind: 'sekunder' },
      { title: 'Burmese History before 1287', author: 'Michael Aung-Thwin', year: 2012, kind: 'sekunder' },
    ],
  },
  {
    id: 'ayutthaya-siam',
    name: 'Sukhothai, Ayutthaya, dan Siam',
    region: 'Asia Tenggara',
    start: 1238,
    end: 1932,
    color: '#00d1ff',
    capital: { name: 'Ayutthaya', lon: 100.57, lat: 14.36 },
    summary:
      'Pada mulanya, ketika kekuasaan Khmer mengendur, para pemimpin Tai mendirikan kerajaan kecil di Sukhothai pada 1238. Sekitar satu abad kemudian pusat kekuasaan pindah ke Ayutthaya, kota pulau di tengah dataran Chao Phraya yang menjadi salah satu pusat perdagangan terbesar di Asia. Setelah Ayutthaya dihancurkan pada 1767, Bangkok bangkit dan Siam mengatur diri menghadapi tekanan kolonial.',
    highlights: [
      'Kerajaan Sukhothai dan prasasti Ramkhamhaeng (keasliannya masih diperdebatkan)',
      'Ayutthaya didirikan Uthong (1351) dan sistem sakdina Trailokanat',
      'Kedatangan Portugis (1511) dan hubungan dengan Prancis di masa Narai',
      'Naresuan dan duel gajah di Nong Sarai (1593)',
      'Kejatuhan Ayutthaya (1767) dan berdirinya Bangkok (1782)',
      'Modernisasi Chulalongkorn dan Revolusi Siam 1932',
    ],
    economy:
      'Ayutthaya memadukan pertanian padi di dataran Chao Phraya dengan perdagangan raja. Pelabuhan di sungai mempertemukan pedagang Tiongkok, Jepang, Persia, India, Belanda, dan Prancis, dan istana menguasai ekspor beras, kayu sapan, dan kulit rusa. Rakyat dikerahkan kerja wajib dan dicatat dalam sistem sakdina, sedangkan pada abad ke-19 beras dan timah Siam masuk ke pasar dunia.',
    religionCulture:
      'Theravada dari Sri Lanka menjadi agama kerajaan, berdampingan dengan ritual Brahmana istana dan pemujaan roh. Para raja membangun wat dan mewariskan tradisi seni patung Buddha, lukisan, serta seladon Sawankhalok. Sastra seperti Ramakien menuturkan ulang Ramayana. Pada abad ke-19, Chulalongkorn memodernisasi sekolah dan hukum sambil mempertahankan peran monarki dan sangha.',
    decline:
      'Ayutthaya jatuh pada 1767 ketika pasukan Burma membakar kota setelah pengepungan panjang. Siam pulih cepat di bawah Taksin dan Dinasti Chakri, dan berhasil tetap merdeka di tengah ekspansi Inggris dan Prancis meskipun kehilangan banyak wilayah. Pada 1932, sekelompok perwira dan sipil mengakhiri monarki absolut tanpa pertumpahan darah besar.',
    territories: [
      {
        from: 1238,
        to: 1351,
        // Sukhothai ~1300
        polygons: [[[99.0, 19.2], [99.6, 19.5], [100.2, 19.4], [101.3, 18.5], [101.4, 17.2], [101.2, 16.0], [100.7, 15.2], [100.0, 15.0], [99.2, 15.3], [98.6, 16.2], [98.5, 17.5], [98.7, 18.5]]],
        note: 'Sukhothai',
      },
      {
        from: 1351,
        to: 1767,
        // Ayutthaya ~1600
        polygons: [[[98.4, 19.4], [99.5, 20.0], [100.8, 19.8], [101.8, 18.5], [102.8, 17.8], [103.8, 16.5], [104.8, 15.5], [105.4, 14.4], [104.0, 13.9], [102.8, 13.5], [102.4, 12.3], [101.4, 12.4], [100.6, 11.2], [100.3, 9.5], [101.0, 7.5], [101.3, 6.6], [100.2, 6.4], [99.6, 7.2], [99.1, 8.4], [98.6, 9.5], [98.7, 10.9], [99.2, 12.0], [99.4, 13.0], [98.9, 14.0], [98.6, 15.5], [98.4, 17.0]]],
        note: 'Ayutthaya',
      },
      {
        from: 1767,
        to: 1932,
        // Siam Rattanakosin ~1850, termasuk Laos dan Kamboja barat sebelum 1893/1907
        polygons: [[[98.4, 19.8], [99.5, 20.5], [100.5, 20.4], [101.5, 20.5], [102.5, 20.3], [103.0, 20.3], [104.0, 19.5], [105.0, 18.5], [105.8, 17.5], [106.0, 16.5], [105.5, 15.0], [105.0, 14.3], [103.8, 14.2], [102.8, 13.6], [102.4, 12.3], [101.4, 12.4], [100.6, 11.2], [100.3, 9.5], [101.0, 7.5], [102.2, 5.8], [101.0, 5.7], [100.3, 5.9], [99.8, 6.5], [99.2, 8.0], [98.6, 9.5], [98.7, 10.9], [99.2, 12.0], [99.4, 13.0], [98.9, 14.0], [98.6, 15.5], [98.4, 17.0]]],
        note: 'Thonburi dan Rattanakosin (Bangkok)',
      },
    ],
    sources: [
      { title: 'Royal Chronicles of Ayutthaya', year: 'abad ke-17–19', kind: 'primer' },
      { title: 'Prasasti Ramkhamhaeng (Sukhothai)', year: 'akhir abad ke-13 (diperdebatkan)', kind: 'prasasti' },
      { title: 'A History of Thailand', author: 'Chris Baker dan Pasuk Phongpaichit', year: 2009, kind: 'sekunder' },
      { title: 'Ayutthaya: Siam in the Early Modern World', author: 'Chris Baker dan Pasuk Phongpaichit', year: 2017, kind: 'sekunder' },
    ],
  },
  {
    id: 'safawi',
    name: 'Kekaisaran Safawi',
    region: 'Asia Barat',
    start: 1501,
    end: 1736,
    color: '#3a86ff',
    capital: { name: 'Isfahan', lon: 51.67, lat: 32.65 },
    summary:
      'Kisah ini bermula pada 1501, ketika seorang pemuda berusia 14 tahun, Ismail, dinobatkan di Tabriz dan menetapkan Syiah Dua Belas Imam sebagai agama negara. Dari sinilah Iran terbentuk menjadi satu negara yang bercorak Syiah, berbeda dari Sunni Utsmaniyah di barat. Di bawah Abbas Agung, Isfahan dibangun menjadi kota yang dijuluki separuh dunia.',
    highlights: [
      'Ismail I menetapkan Syiah Dua Belas Imam sebagai agama negara (1501)',
      'Kekalahan di Chaldiran dari Selim I (1514)',
      'Perdamaian Amasya dengan Utsmaniyah (1555)',
      'Abbas I memindahkan ibu kota ke Isfahan (1598)',
      'Lapangan Naqsh-e Jahan dan Masjid Shah',
      'Karpet, sutra, dan keramik Safawi diekspor sampai Eropa',
    ],
    economy:
      'Ekspor sutra mentah dari Gilan dan Shirvan, karpet, serta keramik menjadi sumber kekayaan utama. Abbas I menjadikan perdagangan sutra sebagai monopoli kerajaan dan memindahkan ribuan pengrajin Armenia ke Isfahan baru (Julfa baru). Pelabuhan Teluk Persia, terutama Bandar Abbas, mempertemukan pedagang Belanda, Inggris, dan India dengan pasar Iran.',
    religionCulture:
      'Safawi mengubah Iran dari mayoritas Sunni menjadi mayoritas Syiah melalui ulama yang didatangkan dari Jabal Amil dan lembaga keagamaan baru. Seni lukis miniatur, kaligrafi, karpet, dan arsitektur berubin biru berkembang di istana. Penyair dan filsuf seperti Mulla Sadra menghasilkan karya penting. Komunitas Armenia, Georgia, Yahudi, dan Zoroaster tetap hidup di bawah pemerintahan Safawi, dengan batasan berbeda dari masa ke masa.',
    decline:
      'Setelah Abbas I, para penguasa penerus semakin dikuasai istana dan harem, sementara tentara dan keuangan melemah. Pada 1722 pemberontak Afghan dari Hotaki merebut Isfahan setelah pengepungan panjang. Nader Shah, mantan panglima Safawi, mengangkat diri sendiri dan mengakhiri dinasti ini pada 1736.',
    territories: [
      {
        from: 1501,
        to: 1588,
        // Ismail dan Tahmasp ~1510 (Irak 1508–1534)
        polygons: [[[44.2, 39.8], [46.5, 40.0], [48.0, 40.0], [49.8, 40.3], [49.2, 38.5], [50.5, 37.0], [52.0, 36.7], [54.0, 37.0], [56.0, 38.0], [58.0, 37.8], [60.5, 37.5], [62.0, 37.8], [63.5, 37.0], [64.0, 35.5], [63.0, 34.0], [62.0, 32.0], [61.5, 30.8], [62.5, 29.0], [61.5, 26.0], [59.5, 25.5], [57.5, 25.7], [56.5, 26.6], [54.5, 26.5], [52.5, 27.5], [51.0, 29.0], [49.5, 30.0], [48.5, 30.0], [47.5, 31.5], [45.5, 31.7], [44.2, 32.0], [43.6, 33.5], [43.3, 34.8], [43.1, 36.3], [43.7, 37.3], [44.0, 38.5]]],
        note: 'Ismail dan Tahmasp',
      },
      {
        from: 1588,
        to: 1736,
        // Abbas I ~1620 (Kandahar 1622, Baghdad 1623–1638)
        polygons: [[[44.0, 40.5], [46.5, 40.5], [48.0, 40.5], [49.8, 40.4], [49.2, 38.5], [50.5, 37.0], [52.0, 36.7], [54.0, 37.0], [56.0, 38.0], [58.0, 37.8], [60.5, 37.6], [62.5, 37.8], [64.5, 37.0], [64.5, 35.5], [65.5, 34.0], [66.0, 32.5], [65.8, 31.2], [65.0, 29.8], [63.5, 28.8], [62.5, 27.0], [61.5, 25.8], [59.5, 25.5], [57.5, 25.7], [56.5, 26.6], [54.5, 26.5], [52.5, 27.5], [51.0, 29.0], [49.5, 30.0], [48.5, 30.0], [47.8, 31.0], [46.5, 32.5], [45.5, 33.5], [45.5, 35.0], [44.8, 36.0], [44.0, 37.5], [43.5, 38.8]]],
        note: 'Abbas Agung dan Isfahan',
      },
    ],
    sources: [
      { title: 'Tarikh-e Alam-ara-ye Abbasi', author: 'Eskandar Beg Monshi', year: 'sekitar 1630', kind: 'primer' },
      { title: 'Safavid Iran: Rebirth of a Persian Empire', author: 'Andrew J. Newman', year: 2006, kind: 'sekunder' },
      { title: 'The Persians', author: 'Touraj Daryaee (ed.)', year: 2012, kind: 'sekunder' },
      { title: 'Shah Abbas: The Ruthless King Who Became an Iranian Legend', author: 'Sussan Babaie dan Kathryn Babayan (ed.)', year: 2009, kind: 'sekunder' },
    ],
  },
  {
    id: 'timuriyah',
    name: 'Kekaisaran Timuriyah',
    region: 'Asia Barat',
    start: 1370,
    end: 1507,
    color: '#f15bb5',
    capital: { name: 'Samarkand', lon: 66.96, lat: 39.65 },
    summary:
      'Kisah ini bermula pada 1370, ketika Timur, seorang panglima Turki-Mongol dari dekat Kesh, menjadi penguasa Transoxiana dan menjadikan Samarkand sebagai ibu kota. Dalam tiga dasawarsa ia mengalahkan Tokhtamysh dan Bayezid I, tetapi juga meninggalkan kota-kota yang terbakar di Persia, India, dan Suriah. Setelah wafatnya pada 1405, para keturunannya membuat Samarkand dan Herat menjadi pusat sains, seni, dan sastra.',
    highlights: [
      'Penaklukan Persia, Irak, dan kemenangan atas Tokhtamysh (1395)',
      'Pertempuran Ankara dan penangkapan Bayezid I (1402)',
      'Duta Spanyol Clavijo di Samarkand (1404)',
      'Madrasah dan observatorium Ulugh Beg di Samarkand',
      'Herat sebagai pusat sastra Chagatai dan lukisan miniatur Behzad',
      'Jatuhnya Samarkand ke Shaybani Khan (1501) dan lahirnya Mughal lewat Babur',
    ],
    economy:
      'Kekayaan kekaisaran berasal dari jarahan, upeti, dan pengrajin yang dipindahkan ke Samarkand. Jalur Sutra tetap menjadi urat nadi, dengan kafilah membawa sutra, rempah, kuda, dan batu mulia melalui kota-kota oasis. Pada masa damai Shah Rukh, irigasi dan pertanian di Khurasan pulih, dan pasar Herat serta Samarkand ramai.',
    religionCulture:
      'Para penguasa Timuriyah adalah Muslim Sunni yang menghormati para sufi, khususnya Naqshbandiyah. Mereka membangun masjid, madrasah, dan makam berkubah biru seperti Gur-e Amir dan Registan. Ulugh Beg menyusun katalog bintang yang akurat, dan di Herat, Ali-Shir Nava’i menulis dalam bahasa Chagatai, sedangkan Behzad melukis miniatur Persia yang termasyhur.',
    decline:
      'Setelah Timur wafat pada 1405, para pangeran saling bertarung, dan wilayah Persia barat hilang dari kendali. Ulugh Beg dibunuh anaknya sendiri pada 1449, lalu kekuasaan pecah menjadi dua pusat, Samarkand dan Herat. Pada 1501 Shaybani Khan merebut Samarkand, dan Herat jatuh pada 1507. Babur, keturunan Timur, mencari tanah baru ke India dan mendirikan Mughal pada 1526.',
    territories: [
      {
        from: 1370,
        to: 1405,
        // Penaklukan Timur ~1402
        polygons: [[[41.0, 40.5], [44.8, 42.0], [48.3, 42.0], [52.0, 43.0], [56.0, 43.8], [60.5, 43.8], [64.0, 45.0], [68.5, 44.8], [72.5, 43.8], [75.5, 42.5], [77.5, 41.0], [76.0, 38.5], [72.0, 36.5], [71.0, 34.0], [69.5, 31.0], [67.0, 29.0], [63.0, 26.8], [58.5, 25.5], [56.5, 26.5], [54.5, 26.5], [52.5, 27.8], [50.5, 29.0], [48.5, 30.0], [47.5, 31.5], [46.0, 32.5], [44.0, 33.0], [42.5, 34.5], [40.5, 36.5], [40.0, 38.0]]],
        note: 'Penaklukan Timur',
      },
      {
        from: 1405,
        to: 1507,
        // Renaisans Timuriyah ~1450
        polygons: [[[54.0, 36.8], [54.5, 37.5], [57.0, 38.0], [59.0, 38.3], [61.0, 38.5], [62.0, 39.5], [61.0, 41.0], [62.0, 42.0], [64.5, 42.5], [67.0, 42.8], [69.5, 42.8], [71.5, 42.5], [73.0, 41.5], [74.5, 40.5], [74.5, 39.0], [73.0, 37.5], [71.0, 36.5], [70.0, 35.0], [69.0, 33.5], [67.0, 32.5], [65.5, 31.0], [62.5, 30.5], [60.5, 30.8], [58.5, 31.5], [57.0, 32.5], [56.0, 34.0], [55.0, 35.5]]],
        note: 'Renaisans Timuriyah',
      },
    ],
    sources: [
      { title: 'Zafarnama', author: 'Sharaf ad-Din Ali Yazdi', year: 1425, kind: 'primer' },
      { title: 'Embassy to Tamerlane 1403–1406', author: 'Ruy Gonzalez de Clavijo', year: 1406, kind: 'primer' },
      { title: 'The Rise and Rule of Tamerlane', author: 'Beatrice Forbes Manz', year: 1989, kind: 'sekunder' },
      { title: 'The Timurid Renaissance', author: 'Thomas W. Lentz dan Glenn D. Lowry', year: 1989, kind: 'sekunder' },
    ],
  },
];
