import { ev, type ChronicleBook } from './chronicle';

/** Kronik periode peradaban Nusantara (urutan = indeks `territories`). */
export const chroniclesNusantara: ChronicleBook = {
  'austronesia-nusantara': [
    {
      story:
        'Sebelum ada kerajaan dan prasasti, Nusantara sudah dihuni dan dijelajahi para penutur bahasa Austronesia yang menyebar dari Taiwan lewat Filipina. Mereka membawa gerabah, beliung batu persegi, perahu bercadik, dan kemudian logam. Jaringan pelayaran ini menghubungkan Nusantara dengan daratan Asia Tenggara dan India, menjadi dasar kerajaan-kerajaan awal.',
      chronicle: [
        ev(-2500, 'Ekspansi Austronesia dimulai', 'Penutur Austronesia dari Taiwan mulai berlayar ke selatan menuju Filipina.', true),
        ev(-2000, 'Neolitik di Sulawesi dan Kalimantan', 'Situs seperti Minanga Sipakko (Sulawesi Barat) memperlihatkan gerabah slip merah dan beliung batu.', true),
        ev(-1300, 'Pelayaran ke Pasifik', 'Budaya Lapita di Melanesia menunjukkan pelaut Austronesia menjangkau pulau-pulau jauh di timur.', true),
        ev(-1000, 'Penguburan di Gua Harimau', 'Kubur-kubur di Sumatra Selatan merekam pertemuan populasi Austronesia dengan penghuni lebih tua.', true),
        ev(-500, 'Zaman Logam dan nekara Dong Son', 'Nekara perunggu dari Vietnam utara tersebar ke Nusantara; nekara Pejeng di Bali dibuat secara lokal.', true),
        ev(-200, 'Tradisi megalitik', 'Menhir, dolmen, kubur batu, dan arca megalit seperti di Pasemah (Sumatra Selatan) didirikan.', true),
        ev(-100, 'Kontak dagang dengan India', 'Tembikar berhias roda dari India ditemukan di Sembiran (Bali) dan budaya Buni (pesisir utara Jawa Barat).', true),
        ev(400, 'Awal masa sejarah', 'Prasasti Yupa di Kutai menjadi tulisan tertua yang ditemukan di Nusantara.', true),
      ],
    },
  ],
  'kutai-tarumanagara': [
    {
      story:
        'Tarumanagara di Jawa Barat dikenal dari tujuh prasasti dan catatan Tiongkok. Rajanya yang paling terkenal, Purnawarman, menyamakan diri dengan Wisnu dan membangun saluran air besar. Kerajaan ini mengirim utusan ke Tiongkok hingga 669, lalu tidak terdengar lagi; Prasasti Kota Kapur (686) mencatat ekspedisi Sriwijaya ke "bhumi jawa".',
      chronicle: [
        ev(414, 'Faxian singgah di Ye-po-ti', 'Biksu Tiongkok pulang dari India dan singgah di negeri yang mungkin terletak di Jawa bagian barat; ia mencatat banyak brahmana dan sedikit penganut Buddha.'),
        ev(450, 'Pemerintahan Purnawarman', 'Prasasti Ciaruteun di Bogor memahat telapak kaki raja yang disamakan dengan telapak kaki Wisnu.', true),
        ev(450, 'Prasasti Tugu', 'Mencatat penggalian sungai Gomati sepanjang 6.122 busur dalam 21 hari, ditutup sedekah 1.000 ekor sapi kepada brahmana.', true),
        ev(450, 'Prasasti Kebon Kopi, Jambu, dan Cidanghiang', 'Prasasti lain memuji kekuatan Purnawarman dan menunjukkan jangkauannya hingga Banten.', true),
        ev(528, 'Utusan To-lo-mo ke Tiongkok', 'Catatan Tiongkok mencatat utusan Tarumanagara pada 528 dan 535.'),
        ev(669, 'Utusan terakhir', 'Utusan dikirim pada 666 dan 669; setelah itu Tarumanagara hilang dari catatan.'),
      ],
    },
    {
      story:
        'Kutai Martadipura di tepi Sungai Mahakam adalah kerajaan tertua yang tercatat di Nusantara. Yang diketahui berasal dari tujuh tiang batu (yupa) berbahasa Sanskerta; selebihnya gelap sampai ditaklukkan Kutai Kartanegara berabad-abad kemudian.',
      chronicle: [
        ev(400, 'Kudungga dan Aswawarman', 'Yupa menyebut Kudungga, nama asli Nusantara, dan putranya Aswawarman sebagai pendiri wangsa.', true),
        ev(400, 'Yupa Mulawarman', 'Tujuh yupa beraksara Pallawa di Muara Kaman memuji Mulawarman yang menyedekahkan 20.000 ekor sapi kepada brahmana.', true),
        ev(400, 'Waprakeswara', 'Yupa menyebut tempat suci Waprakeswara, menunjukkan pemujaan Siwa di istana.', true),
      ],
    },
  ],
  sriwijaya: [
    {
      story:
        'Dari Palembang, Sriwijaya menguasai Selat Malaka dan Selat Sunda, dua jalur laut terpenting antara India dan Tiongkok. Kekuatannya bertumpu pada armada, persekutuan dengan pemimpin lokal, dan perannya sebagai pusat ajaran Buddha tempat para biksu belajar sebelum ke India.',
      chronicle: [
        ev(671, 'I-Tsing di Shih-li-fo-shih', 'Biksu Tiongkok tinggal enam bulan belajar tata bahasa Sanskerta sebelum ke India.'),
        ev(682, 'Prasasti Kedukan Bukit', 'Dapunta Hyang memimpin 20.000 tentara dalam perjalanan suci dan mendirikan wanua.'),
        ev(684, 'Prasasti Talang Tuo', 'Pembuatan taman Sriksetra untuk kesejahteraan semua makhluk.'),
        ev(686, 'Prasasti Kota Kapur', 'Kutukan bagi yang durhaka dan catatan ekspedisi ke "bhumi jawa".'),
        ev(687, 'I-Tsing kembali dan menulis', 'Ia menyalin sutra di Sriwijaya hingga 695 dan mencatat Malayu telah menjadi bagian Sriwijaya.'),
        ev(775, 'Prasasti Ligor', 'Di Semenanjung Malaya; memuji raja Sriwijaya dan menyebut nama Sailendra.'),
        ev(860, 'Prasasti Nalanda', 'Raja Pala di India memberi desa untuk biara yang didirikan Balaputradewa dari Suwarnadwipa.', true),
        ev(1006, 'Vihara di Nagapattinam', 'Raja Sriwijaya membangun vihara di pesisir Chola, tanda hubungan yang masih baik.'),
        ev(1025, 'Serangan Rajendra Chola', 'Armada Chola menjarah Kadaram dan Sriwijaya serta menawan rajanya.'),
      ],
    },
    {
      story:
        'Setelah serangan Chola, pusat kekuatan Melayu bergeser ke Jambi (Malayu). Catatan Tiongkok masih menyebut "Sanfoqi" sebagai penguasa perdagangan selat, tetapi pesaing dari Jawa dan Siam terus menggerogoti. Ekspedisi Pamalayu Singasari dan serangan Majapahit akhirnya mengakhiri kekuasaannya.',
      chronicle: [
        ev(1025, 'Pusat melemah', 'Palembang kehilangan wibawa; Jambi tampil sebagai pusat baru.'),
        ev(1079, 'Utusan dari Jambi', 'Catatan Song menyebut utusan Zhan-bei (Jambi) dari wilayah Sanfoqi.'),
        ev(1178, 'Lingwai Daida', 'Zhou Qufei menyebut Sanfoqi sebagai pelabuhan dagang terpenting di laut selatan.'),
        ev(1225, 'Zhufan zhi', 'Zhao Rugua mencatat 15 negeri bawahan Sanfoqi, dari Semenanjung Malaya sampai Sunda.'),
        ev(1275, 'Ekspedisi Pamalayu', 'Kertanagara dari Singasari mengirim pasukan ke Malayu.'),
        ev(1286, 'Arca Amoghapasa ke Dharmasraya', 'Hadiah Kertanagara untuk raja Malayu, tanda hubungan bawahan.'),
        ev(1347, 'Adityawarman di Malayupura', 'Bangsawan Majapahit berdarah Melayu memerintah dari pedalaman Minangkabau.'),
        ev(1377, 'Serangan Majapahit', 'Menurut catatan Ming, Jawa menghancurkan Sanfoqi; Palembang menjadi sarang bajak laut.'),
      ],
    },
  ],
  'mataram-kuno': [
    {
      story:
        'Di dataran subur Kedu dan Prambanan, dua wangsa (Sanjaya yang Hindu-Siwa dan Sailendra yang Buddha) memerintah berdampingan, bersaing, lalu menyatu lewat perkawinan. Hasilnya adalah masa keemasan candi: Kalasan, Sewu, Borobudur, dan Prambanan.',
      chronicle: [
        ev(732, 'Prasasti Canggal', 'Sanjaya mendirikan lingga di bukit Wukir, awal catatan Mataram Kuno.'),
        ev(778, 'Prasasti Kalasan', 'Rakai Panangkaran membangun Candi Kalasan untuk Dewi Tara atas permintaan guru Sailendra.'),
        ev(792, 'Candi Sewu selesai', 'Kompleks Buddha terbesar kedua di Jawa, disebut Manjusrigrha.'),
        ev(825, 'Borobudur rampung', 'Monumen Buddha terbesar di dunia diselesaikan pada masa Samaratungga.', true),
        ev(856, 'Prasasti Siwagrha', 'Rakai Pikatan mendirikan bangunan suci Siwa yang dikaitkan dengan Prambanan.'),
        ev(907, 'Prasasti Mantyasih', 'Raja Balitung menuliskan daftar raja-raja Mataram sejak Sanjaya.'),
        ev(929, 'Pusat pindah ke Jawa Timur', 'Mpu Sindok memindahkan istana, mungkin akibat letusan Merapi, wabah, atau ancaman Sriwijaya.'),
      ],
    },
    {
      story:
        'Wangsa Isyana memerintah dari lembah Brantas di Jawa Timur. Sastra Jawa Kuno berkembang dan Medang mulai menantang Sriwijaya di laut, sampai istananya dihancurkan dalam peristiwa yang dikenal sebagai Pralaya.',
      chronicle: [
        ev(929, 'Mpu Sindok dan wangsa Isyana', 'Istana berada di Tamwlang lalu Watugaluh, dekat Jombang.'),
        ev(947, 'Mpu Sindok wafat', 'Takhta diwarisi putrinya, Isyanatunggawijaya.', true),
        ev(990, 'Dharmawangsa menyerang Sriwijaya', 'Utusan Sriwijaya ke Tiongkok melaporkan negerinya diserang Jawa.', true),
        ev(996, 'Mahabharata dalam bahasa Jawa Kuno', 'Wirataparwa dan parwa lain disadur atas perintah Dharmawangsa Teguh.'),
        ev(1016, 'Pralaya Medang', 'Raja Wurawari menyerang saat pesta perkawinan; Dharmawangsa tewas dan Airlangga lolos ke hutan.'),
      ],
    },
  ],
  'kediri-singasari': [
    {
      story:
        'Airlangga membangun kembali kerajaan setelah Pralaya, lalu membaginya untuk dua putranya: Janggala dan Panjalu (Kediri). Kediri tampil lebih kuat dan meninggalkan karya sastra besar, sementara catatan Tiongkok menyebut Jawa sebagai negeri kaya.',
      chronicle: [
        ev(1042, 'Kerajaan dibagi dua', 'Airlangga membagi negeri menjadi Janggala dan Panjalu; batasnya menurut tradisi ditentukan Mpu Bharada.', true),
        ev(1135, 'Jayabaya naik takhta', 'Raja Kediri paling terkenal; namanya kelak dikaitkan dengan ramalan Jangka Jayabaya.', true),
        ev(1157, 'Kakawin Bharatayuddha', 'Mpu Sedah dan Mpu Panuluh menggubah kisah perang Pandawa–Kurawa.'),
        ev(1185, 'Kakawin Smaradahana', 'Mpu Dharmaja menulis kisah dewa asmara pada masa Kameswara.', true),
        ev(1194, 'Kertajaya naik takhta', 'Raja terakhir Kediri berselisih dengan kaum brahmana.', true),
        ev(1222, 'Pertempuran Ganter', 'Ken Arok dari Tumapel mengalahkan Kertajaya.'),
      ],
    },
    {
      story:
        'Singasari lahir dari kudeta Ken Arok dan diwarnai dendam turun-temurun yang dikisahkan Pararaton. Di bawah Kertanagara, raja terakhirnya, Singasari berani menolak Kubilai Khan dan memperluas pengaruh ke Sumatra dan Bali, gagasan yang kelak diteruskan Majapahit.',
      chronicle: [
        ev(1222, 'Ken Arok mendirikan Singasari', 'Bergelar Rajasa; pusatnya di Tumapel, Malang.'),
        ev(1227, 'Anusapati membunuh Ken Arok', 'Awal rantai balas dendam keris Mpu Gandring menurut Pararaton.', true),
        ev(1248, 'Wisnuwardhana', 'Ranggawuni memerintah bersama Mahisa Campaka; masa yang relatif tenang.'),
        ev(1268, 'Kertanagara naik takhta', 'Memperkenalkan cita-cita persatuan Nusantara di bawah Singasari.'),
        ev(1275, 'Ekspedisi Pamalayu', 'Pasukan dikirim ke Sumatra untuk menguasai jalur Selat Malaka.'),
        ev(1284, 'Bali ditaklukkan', 'Raja Bali dibawa ke Singasari.'),
        ev(1289, 'Utusan Kubilai dilukai', 'Kertanagara menolak tunduk dan merusak wajah utusan Mongol, Meng Qi.'),
        ev(1292, 'Jayakatwang menyerang', 'Raja Gelang-gelang keturunan Kediri membunuh Kertanagara.'),
      ],
    },
  ],
  majapahit: [
    {
      story:
        'Majapahit didirikan Raden Wijaya, menantu Kertanagara, yang memanfaatkan pasukan Mongol untuk mengalahkan Jayakatwang lalu mengusir Mongol itu sendiri. Dekade-dekade awalnya penuh pemberontakan, dan dari situ muncul Gajah Mada.',
      chronicle: [
        ev(1293, 'Majapahit berdiri', 'Raden Wijaya mengalahkan Jayakatwang bersama Mongol, lalu mengusir pasukan Mongol.'),
        ev(1295, 'Pemberontakan Ranggalawe', 'Salah satu dari serangkaian pemberontakan pengikut Raden Wijaya yang merasa tidak dihargai.', true),
        ev(1309, 'Jayanagara naik takhta', 'Putra Raden Wijaya; masa pemerintahannya penuh pemberontakan.'),
        ev(1319, 'Pemberontakan Kuti', 'Gajah Mada, kepala pasukan Bhayangkara, menyelamatkan raja ke Badander.', true),
        ev(1328, 'Tribhuwana Tunggadewi', 'Jayanagara dibunuh tabib Tanca; takhta jatuh ke putri Raden Wijaya.'),
        ev(1331, 'Sadeng dan Keta ditumpas', 'Gajah Mada naik pamor setelah memadamkan pemberontakan di Jawa Timur.'),
        ev(1336, 'Sumpah Palapa', 'Gajah Mada bersumpah tidak menikmati palapa sebelum menyatukan Nusantara.', true),
        ev(1343, 'Bali ditaklukkan', 'Pasukan Gajah Mada dan Adityawarman mengalahkan raja Bedahulu.'),
      ],
    },
    {
      story:
        'Di bawah Hayam Wuruk dan Mahapatih Gajah Mada, Majapahit mencapai puncaknya. Nagarakretagama mendaftar puluhan negeri dari Sumatra sampai Papua barat sebagai daerah yang mengakui Majapahit, meski sebagian besar hubungannya berupa upeti dan dagang, bukan pemerintahan langsung.',
      chronicle: [
        ev(1350, 'Hayam Wuruk naik takhta', 'Raja berusia 16 tahun bergelar Rajasanagara.'),
        ev(1357, 'Peristiwa Bubat', 'Rombongan Sunda yang hendak menikahkan putri Dyah Pitaloka dibantai di lapangan Bubat.'),
        ev(1364, 'Gajah Mada wafat', 'Tugasnya dibagi kepada beberapa pejabat; tidak ada pengganti setara.'),
        ev(1365, 'Nagarakretagama', 'Mpu Prapanca menulis pujian bagi raja beserta daftar negeri bawahan.'),
        ev(1377, 'Serangan ke Palembang', 'Majapahit menghukum penguasa Palembang yang mencari pengakuan Ming.'),
        ev(1389, 'Hayam Wuruk wafat', 'Perebutan takhta di antara keturunannya mulai membayangi.'),
      ],
    },
    {
      story:
        'Sepeninggal Hayam Wuruk, perang saudara dan munculnya pelabuhan-pelabuhan Islam di pesisir utara Jawa menggerus Majapahit. Pusat kekuasaan menyempit ke pedalaman Jawa Timur sampai akhirnya ditaklukkan Demak.',
      chronicle: [
        ev(1389, 'Wikramawardhana naik takhta', 'Menantu Hayam Wuruk; ditentang Bhre Wirabhumi dari Blambangan.'),
        ev(1404, 'Perang Paregreg', 'Perang saudara timur–barat berlangsung hingga 1406 dan menewaskan Bhre Wirabhumi.'),
        ev(1406, 'Insiden armada Cheng Ho', 'Sekitar 170 awak Ming terbunuh di Jawa timur; Majapahit membayar ganti rugi emas.'),
        ev(1478, 'Sirna ilang kertaning bumi', 'Candrasengkala tradisional untuk keruntuhan Majapahit, kemungkinan akibat serangan Girindrawardhana.', true),
        ev(1486, 'Prasasti Jiyu', 'Girindrawardhana Ranawijaya masih memakai gelar penguasa Wilwatikta di Daha.'),
        ev(1527, 'Daha ditaklukkan Demak', 'Sisa kekuasaan Hindu-Buddha di Jawa Timur berakhir; banyak bangsawan pindah ke Bali.', true),
      ],
    },
  ],
  'kesultanan-awal': [
    {
      story:
        'Samudra Pasai di pesisir utara Aceh adalah kerajaan Islam pertama yang tercatat di Nusantara. Pelabuhannya menjual lada dan menjadi pusat pengajaran Islam yang dikunjungi pelancong dari Maroko sampai Tiongkok.',
      chronicle: [
        ev(1267, 'Berdirinya Samudra Pasai', 'Menurut Hikayat Raja Pasai, Merah Silu memeluk Islam dan bergelar Sultan Malik as-Saleh.', true),
        ev(1292, 'Marco Polo di Perlak', 'Penjelajah Venesia mencatat penduduk kota pelabuhan Perlak telah memeluk Islam.'),
        ev(1297, 'Nisan Sultan Malik as-Saleh', 'Batu nisan bertarikh ini menjadi bukti tertua kesultanan di Nusantara.'),
        ev(1345, 'Kunjungan Ibnu Battuta', 'Pengembara Maroko dijamu Sultan Malik az-Zahir yang gemar berdiskusi fikih.'),
        ev(1350, 'Serangan Majapahit', 'Hikayat Raja Pasai mengisahkan Pasai ditundukkan Jawa.', true),
        ev(1405, 'Armada Cheng Ho singgah', 'Pasai menjadi persinggahan pelayaran Ming ke Samudra Hindia.'),
        ev(1521, 'Portugis merebut Pasai', 'Tiga tahun kemudian Pasai dikuasai Aceh.'),
      ],
    },
    {
      story:
        'Kejatuhan Malaka ke tangan Portugis memecah dunia Melayu. Keturunan sultan Malaka mendirikan Johor, sementara Aceh, Johor, dan Portugis bersaing segitiga selama seabad lebih, sampai VOC dan Johor bersama-sama merebut Malaka.',
      chronicle: [
        ev(1511, 'Malaka jatuh ke Portugis', 'Afonso de Albuquerque merebut kota; Sultan Mahmud Syah menyingkir ke Bintan.'),
        ev(1513, 'Serangan Pati Unus', 'Armada Demak gagal merebut Malaka dari Portugis.'),
        ev(1528, 'Johor didirikan', 'Alauddin Riayat Syah II, putra sultan Malaka terakhir, membangun pusat baru di Sungai Johor.', true),
        ev(1568, 'Aceh menyerang Malaka', 'Awal serangkaian serangan Aceh ke benteng Portugis.'),
        ev(1606, 'VOC dan Johor mengepung Malaka', 'Laksamana Matelief gagal merebut kota, tetapi persekutuan Belanda–Johor terbentuk.'),
        ev(1629, 'Armada Aceh hancur di Malaka', 'Kekalahan besar Iskandar Muda melawan Portugis dan Johor.'),
        ev(1641, 'VOC merebut Malaka', 'Setelah pengepungan berbulan-bulan bersama Johor, Portugis menyerah.'),
      ],
    },
    {
      story:
        'Aceh Darussalam tumbuh dari kerajaan kecil di ujung Sumatra menjadi kekuatan utama Selat Malaka setelah Portugis merebut Malaka. Pedagang Muslim berpindah ke Aceh, yang lalu bersekutu dengan Utsmaniyah. Abad ke-17 menjadi masa puncak militer dan keilmuan, diikuti empat sultanah berturut-turut.',
      chronicle: [
        ev(1514, 'Ali Mughayat Syah', 'Mendirikan Aceh Darussalam dan menyatukan kerajaan-kerajaan kecil di sekitarnya.', true),
        ev(1524, 'Pasai ditaklukkan', 'Aceh mengusir Portugis dan menguasai pelabuhan lada utara Sumatra.'),
        ev(1566, 'Surat ke Sultan Suleiman', 'Alauddin al-Kahhar meminta bantuan Utsmaniyah; meriam dan ahli senjata dikirim.'),
        ev(1607, 'Iskandar Muda naik takhta', 'Aceh menguasai pesisir Sumatra dan sebagian Semenanjung Malaya.'),
        ev(1629, 'Kekalahan di Malaka', 'Seluruh armada besar Aceh hilang.'),
        ev(1637, 'Nuruddin ar-Raniri di Aceh', 'Ulama Gujarat menjadi mufti di masa Iskandar Thani dan menulis Bustan as-Salatin.'),
        ev(1641, 'Sultanah Safiatuddin', 'Awal 59 tahun pemerintahan empat ratu berturut-turut.'),
        ev(1699, 'Akhir masa sultanah', 'Fatwa dari Mekah dipakai untuk menolak pemimpin perempuan; takhta beralih ke sultan laki-laki.'),
      ],
    },
    {
      story:
        'Demak, didirikan Raden Patah sekitar 1475, menjadi kerajaan Islam pertama di Jawa dan menaklukkan sisa Majapahit. Setelah Sultan Trenggana gugur, perebutan takhta memindahkan pusat kekuasaan ke pedalaman, ke Pajang, lalu ke Mataram.',
      chronicle: [
        ev(1527, 'Puncak Demak', 'Daha ditaklukkan; Fatahillah merebut Sunda Kelapa dan menamainya Jayakarta.'),
        ev(1546, 'Sultan Trenggana gugur', 'Tewas dalam penyerangan ke Panarukan di Jawa Timur.'),
        ev(1549, 'Arya Penangsang', 'Adipati Jipang membunuh Sunan Prawata dan Pangeran Hadiri dalam perebutan takhta.', true),
        ev(1568, 'Pajang berdiri', 'Jaka Tingkir (Sultan Hadiwijaya) mengalahkan Arya Penangsang dan memindahkan pusat ke Pajang.', true),
        ev(1582, 'Hadiwijaya wafat', 'Pajang melemah; Sutawijaya dari Mataram menolak tunduk.', true),
        ev(1587, 'Pajang tunduk pada Mataram', 'Sutawijaya (Panembahan Senopati) menjadi penguasa utama Jawa tengah.', true),
      ],
    },
    {
      story:
        'Banten tumbuh menjadi pelabuhan lada terbesar di Jawa dan bandar internasional yang didatangi pedagang Gujarat, Tiongkok, Inggris, dan Belanda. Persaingannya dengan VOC di Batavia berakhir ketika perang saudara di istana membuka pintu bagi kompeni.',
      chronicle: [
        ev(1526, 'Banten direbut', 'Maulana Hasanuddin dan Sunan Gunung Jati mengambil alih Banten dari Kerajaan Sunda.'),
        ev(1552, 'Kesultanan Banten', 'Maulana Hasanuddin memerintah sebagai sultan pertama.', true),
        ev(1579, 'Pakuan Pajajaran jatuh', 'Maulana Yusuf mengakhiri Kerajaan Sunda.'),
        ev(1596, 'Cornelis de Houtman tiba', 'Ekspedisi Belanda pertama ke Nusantara berlabuh di Banten.'),
        ev(1651, 'Sultan Ageng Tirtayasa', 'Banten mencapai puncak: irigasi, armada dagang, dan perlawanan terhadap VOC.'),
        ev(1682, 'Perang saudara', 'Sultan Haji bersekutu dengan VOC melawan ayahnya; Sultan Ageng ditangkap tahun berikutnya.'),
        ev(1684, 'Perjanjian dengan VOC', 'Banten menyerahkan monopoli lada dan mengusir pedagang Eropa lain.'),
      ],
    },
    {
      story:
        'Kerajaan kembar Gowa dan Tallo di Sulawesi Selatan menjadi bandar bebas yang menantang monopoli rempah VOC. Setelah memeluk Islam, Makassar memperluas pengaruh ke seluruh Sulawesi Selatan hingga Nusa Tenggara, sampai VOC dan Arung Palakka dari Bone mengalahkannya.',
      chronicle: [
        ev(1546, 'Karaeng Tunipalangga', 'Memperluas kekuasaan Gowa dan memperkuat persenjataan serta benteng.', true),
        ev(1605, 'Gowa dan Tallo memeluk Islam', 'Karaeng Matoaya dari Tallo dan Sultan Alauddin dari Gowa masuk Islam.'),
        ev(1611, 'Perang pengislaman', 'Bone, Soppeng, dan Wajo ditaklukkan dan memeluk Islam.'),
        ev(1653, 'Sultan Hasanuddin naik takhta', 'Dijuluki Belanda "Ayam Jantan dari Timur".'),
        ev(1666, 'Perang Makassar', 'Armada VOC di bawah Speelman bersama Arung Palakka menyerang Gowa.'),
        ev(1667, 'Perjanjian Bongaya', 'Gowa kehilangan kedaulatan dagangnya; pedagang Eropa lain diusir.'),
        ev(1669, 'Benteng Somba Opu jatuh', 'Akhir perlawanan Gowa.'),
      ],
    },
    {
      story:
        'Ternate dan Tidore, dua pulau kecil penghasil cengkih, menjadi incaran bangsa Eropa pertama yang datang ke Nusantara. Keduanya bersaing dan berganti-ganti sekutu dengan Portugis, Spanyol, dan Belanda, hingga VOC menguasai perdagangan rempah Maluku.',
      chronicle: [
        ev(1486, 'Zainal Abidin dari Ternate', 'Menurut tradisi belajar Islam di Giri dan menjadikan Ternate kesultanan.', true),
        ev(1512, 'Portugis tiba di Ternate', 'Francisco Serrão menetap; Portugis kemudian membangun benteng.'),
        ev(1521, 'Spanyol di Tidore', 'Sisa ekspedisi Magellan berlabuh dan bersekutu dengan Tidore.'),
        ev(1529, 'Perjanjian Zaragoza', 'Spanyol menjual klaimnya atas Maluku kepada Portugis.'),
        ev(1570, 'Sultan Khairun dibunuh', 'Portugis membunuh sultan Ternate di dalam benteng.'),
        ev(1575, 'Baabullah mengusir Portugis', 'Setelah pengepungan lima tahun; Ternate menguasai puluhan pulau.'),
        ev(1606, 'Spanyol merebut Ternate', 'Sultan Said ditawan ke Manila.'),
        ev(1683, 'Ternate menjadi vasal VOC', 'Monopoli cengkih Belanda di Maluku semakin kokoh.', true),
      ],
    },
  ],
  'mataram-islam': [
    {
      story:
        'Mataram tumbuh dari tanah perdikan di Kotagede menjadi penguasa sebagian besar Jawa di bawah Sultan Agung. Dua serangannya ke Batavia gagal, dan sepeninggalnya pemberontakan serta perang suksesi membuat Mataram makin bergantung pada VOC, sampai kerajaan dibagi dua dalam Perjanjian Giyanti.',
      chronicle: [
        ev(1587, 'Panembahan Senopati', 'Sutawijaya menundukkan Pajang dan menjadikan Kotagede pusat kerajaan.', true),
        ev(1613, 'Sultan Agung naik takhta', 'Raja terbesar Mataram memulai penaklukan pesisir Jawa.'),
        ev(1625, 'Surabaya ditaklukkan', 'Pesaing terkuat Mataram di Jawa Timur menyerah setelah dikepung bertahun-tahun.'),
        ev(1628, 'Serangan pertama ke Batavia', 'Gagal; serangan kedua 1629 juga gagal setelah lumbung padi dibakar VOC.'),
        ev(1633, 'Kalender Jawa', 'Sultan Agung memadukan tarikh Saka dengan kalender Hijriah.'),
        ev(1647, 'Amangkurat I di Plered', 'Raja baru memerintah dengan keras dan berdamai dengan VOC.'),
        ev(1677, 'Pemberontakan Trunajaya', 'Plered direbut; Amangkurat I wafat dalam pelarian.'),
        ev(1680, 'Kartasura', 'Amangkurat II membangun ibu kota baru dengan bantuan VOC.'),
        ev(1704, 'Perang Suksesi Jawa I', 'VOC mendukung Pakubuwana I; wilayah pesisir makin banyak diserahkan.'),
        ev(1742, 'Kartasura jatuh', 'Akibat Geger Pacinan, laskar Tionghoa dan Jawa merebut istana.'),
        ev(1745, 'Surakarta', 'Pakubuwana II memindahkan istana ke Desa Sala.'),
        ev(1755, 'Perjanjian Giyanti', 'Mataram dibagi menjadi Kasunanan Surakarta dan Kesultanan Yogyakarta.'),
      ],
    },
  ],
  'hindia-belanda': [
    {
      story:
        'VOC adalah perusahaan dagang yang punya tentara, mencetak uang, dan berperang atas nama sendiri. Dari Batavia, kompeni merebut monopoli rempah dengan kekerasan, memanfaatkan perpecahan di kerajaan-kerajaan Nusantara, dan perlahan menguasai Jawa. Korupsi dan utang akhirnya membuatnya bangkrut.',
      chronicle: [
        ev(1602, 'VOC didirikan', 'Perusahaan-perusahaan dagang Belanda digabung dan diberi hak monopoli di Asia.'),
        ev(1605, 'Ambon direbut', 'Benteng Portugis diambil alih; markas pertama VOC di Nusantara.'),
        ev(1619, 'Batavia didirikan', 'J.P. Coen membakar Jayakarta dan membangun Batavia.'),
        ev(1621, 'Pembantaian Banda', 'Penduduk Banda dibunuh, diperbudak, atau diusir demi monopoli pala.'),
        ev(1629, 'Batavia bertahan', 'Serangan kedua Mataram gagal.'),
        ev(1667, 'Perjanjian Bongaya', 'Makassar takluk; VOC menguasai jalur rempah timur.'),
        ev(1740, 'Pembantaian Tionghoa Batavia', 'Ribuan orang Tionghoa dibunuh, memicu Geger Pacinan di Jawa.'),
        ev(1755, 'Perjanjian Giyanti', 'VOC menjadi penengah pembagian Mataram.'),
        ev(1799, 'VOC dibubarkan', 'Bangkrut; asetnya diambil alih negara Belanda.'),
      ],
    },
    {
      story:
        'Setelah VOC, Nusantara dikuasai langsung oleh negara Belanda. Selama abad ke-19, Belanda memeras hasil bumi lewat Tanam Paksa dan menaklukkan daerah-daerah luar Jawa satu per satu. Abad ke-20 membawa sekolah dan pers, yang justru melahirkan pergerakan nasional.',
      chronicle: [
        ev(1800, 'Pemerintahan langsung', 'Wilayah VOC menjadi koloni negara Belanda.'),
        ev(1808, 'Daendels dan Jalan Raya Pos', 'Jalan Anyer–Panarukan dibangun dengan kerja paksa.'),
        ev(1811, 'Masa Inggris', 'Raffles memerintah Jawa hingga 1816 dan memperkenalkan pajak tanah.'),
        ev(1825, 'Perang Diponegoro', 'Perang lima tahun di Jawa; sekitar 200.000 orang Jawa tewas.'),
        ev(1830, 'Tanam Paksa', 'Petani wajib menanam tanaman ekspor; kas Belanda terisi, Jawa dilanda kelaparan.'),
        ev(1860, 'Max Havelaar', 'Novel Multatuli membongkar penindasan kolonial.'),
        ev(1873, 'Perang Aceh', 'Perang kolonial terpanjang Belanda, hingga awal abad ke-20.'),
        ev(1901, 'Politik Etis', 'Janji irigasi, edukasi, dan emigrasi bagi penduduk jajahan.'),
        ev(1908, 'Budi Utomo', 'Organisasi modern pertama kaum terpelajar bumiputra.'),
        ev(1928, 'Sumpah Pemuda', 'Satu tanah air, satu bangsa, dan bahasa persatuan Indonesia.'),
        ev(1942, 'Belanda menyerah kepada Jepang', 'Perjanjian Kalijati 8 Maret mengakhiri kekuasaan Belanda.'),
      ],
    },
  ],
  'republik-indonesia': [
    {
      story:
        'Indonesia memproklamasikan kemerdekaan dua hari setelah Jepang menyerah dan harus mempertahankannya lewat perang dan diplomasi melawan Belanda. Dua dekade berikutnya diwarnai demokrasi parlementer, Demokrasi Terpimpin Soekarno, dan peralihan berdarah ke Orde Baru.',
      chronicle: [
        ev(1945, 'Proklamasi Kemerdekaan', 'Soekarno dan Hatta memproklamasikan kemerdekaan pada 17 Agustus; UUD 1945 disahkan esok harinya.'),
        ev(1945, 'Pertempuran Surabaya', 'Pertempuran 10 November melawan pasukan Inggris, kini diperingati sebagai Hari Pahlawan.'),
        ev(1947, 'Agresi Militer Belanda I', 'Belanda menyerang wilayah Republik; disusul Perjanjian Renville 1948.'),
        ev(1948, 'Agresi Militer II', 'Yogyakarta diduduki dan para pemimpin ditawan; perang gerilya berlanjut.'),
        ev(1949, 'Pengakuan kedaulatan', 'Konferensi Meja Bundar; Belanda menyerahkan kedaulatan pada 27 Desember.'),
        ev(1950, 'Negara kesatuan', 'RIS dibubarkan dan Indonesia menjadi anggota PBB.'),
        ev(1955, 'Konferensi Asia-Afrika dan Pemilu pertama', 'Bandung menjadi tuan rumah KAA; pemilu demokratis pertama digelar.'),
        ev(1959, 'Dekret Presiden', 'Kembali ke UUD 1945, awal Demokrasi Terpimpin.'),
        ev(1963, 'Irian Barat', 'Wilayah ini diserahkan ke Indonesia melalui UNTEA.'),
        ev(1965, 'Gerakan 30 September', 'Pembunuhan para jenderal disusul pembantaian massal anggota dan simpatisan PKI.'),
        ev(1966, 'Supersemar', 'Soeharto menerima mandat yang menjadi dasar Orde Baru.'),
        ev(1967, 'ASEAN didirikan', 'Bersama Malaysia, Filipina, Singapura, dan Thailand.'),
        ev(1975, 'Invasi Timor Timur', 'Indonesia menyerbu Dili pada Desember.'),
      ],
    },
    {
      story:
        'Orde Baru membawa pertumbuhan ekonomi sekaligus pemerintahan otoriter. Krisis 1997–1998 menjatuhkan Soeharto dan membuka era Reformasi: pers bebas, otonomi daerah, pemilihan presiden langsung, dan lepasnya Timor Timur. Pada 2020-an, ibu kota mulai dipindahkan ke Ibu Kota Nusantara di Kalimantan Timur.',
      chronicle: [
        ev(1976, 'Integrasi Timor Timur', 'Dijadikan provinsi ke-27, tanpa pengakuan PBB.'),
        ev(1997, 'Krisis moneter', 'Rupiah anjlok dan perekonomian terpuruk.'),
        ev(1998, 'Soeharto mundur', 'Setelah demonstrasi mahasiswa dan kerusuhan Mei; awal Reformasi.'),
        ev(1999, 'Referendum Timor Timur', 'Mayoritas memilih merdeka; kekerasan milisi menyusul.'),
        ev(2002, 'Timor Leste merdeka', 'Pada tahun yang sama terjadi bom Bali.'),
        ev(2004, 'Pemilu presiden langsung dan tsunami Aceh', 'Pemilihan langsung pertama; tsunami 26 Desember menewaskan lebih dari 160.000 orang di Aceh.'),
        ev(2005, 'Perdamaian Helsinki', 'Mengakhiri konflik bersenjata di Aceh.'),
        ev(2022, 'Undang-Undang IKN', 'Ibu Kota Nusantara di Kalimantan Timur ditetapkan sebagai ibu kota baru.'),
        ev(2024, 'Upacara kemerdekaan di IKN', 'Peringatan 17 Agustus pertama di IKN; Prabowo Subianto dilantik sebagai presiden pada Oktober.'),
      ],
    },
  ],
};
