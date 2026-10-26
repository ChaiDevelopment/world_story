import { ev, type ChronicleBook } from './chronicle';

/** Kronik periode peradaban abad pertengahan (urutan = indeks `territories`). */
export const chroniclesMedieval: ChronicleBook = {
  gupta: [
    {
      story:
        'Dinasti Gupta menyatukan India utara dari Lembah Gangga. Masa ini sering disebut zaman klasik India: sastra Sanskerta Kalidasa, matematika Aryabhata, dan biara Nalanda berkembang di bawah perlindungan raja. Serangan bangsa Huna dari barat laut menguras kekuatannya hingga kekaisaran terpecah.',
      chronicle: [
        ev(320, 'Chandragupta I', 'Naik takhta dan memulai tarikh Gupta; menikahi putri Licchavi yang berpengaruh.', true),
        ev(335, 'Samudragupta', 'Penaklukannya dicatat pada pilar Allahabad; raja-raja dari selatan membayar upeti.', true),
        ev(375, 'Chandragupta II (Vikramaditya)', 'Menaklukkan Saka Barat dan menguasai pelabuhan pantai barat.', true),
        ev(400, 'Kalidasa', 'Penyair dan dramawan Sanskerta terbesar, pengarang Shakuntala.', true),
        ev(405, 'Faxian di India', 'Biksu Tiongkok mencatat negeri yang makmur dan damai.', true),
        ev(427, 'Nalanda didirikan', 'Biara-universitas Buddha yang kelak menarik pelajar dari seluruh Asia.', true),
        ev(455, 'Skandagupta menahan Huna', 'Kemenangan atas serangan pertama Huna, tetapi kas negara terkuras.', true),
        ev(499, 'Aryabhatiya', 'Aryabhata menulis risalah astronomi dan matematika, termasuk perhitungan pi.'),
        ev(510, 'Serangan Huna Toramana dan Mihirakula', 'India barat laut dan tengah lepas dari Gupta.', true),
        ev(550, 'Gupta runtuh', 'Kekaisaran terpecah menjadi kerajaan-kerajaan regional.', true),
      ],
    },
  ],
  bizantium: [
    {
      story:
        'Separuh timur Kekaisaran Romawi bertahan ketika barat runtuh. Konstantinopel, dengan tembok yang tak tertembus, menjadi kota terkaya di Eropa. Justinianus berusaha memulihkan kekaisaran lama: ia menaklukkan kembali Afrika, Italia, dan sebagian Spanyol, menyusun ulang hukum Romawi, dan membangun Hagia Sophia, tetapi wabah dan perang menguras kekuatannya.',
      chronicle: [
        ev(395, 'Kekaisaran terbagi', 'Arcadius memerintah separuh timur dari Konstantinopel.'),
        ev(413, 'Tembok Theodosius', 'Tembok darat berlapis yang melindungi kota selama seribu tahun.'),
        ev(451, 'Konsili Kalsedon', 'Rumusan tentang kodrat Kristus yang memecah gereja timur.'),
        ev(476, 'Romawi Barat jatuh', 'Konstantinopel menjadi satu-satunya pusat kekaisaran.'),
        ev(527, 'Justinianus naik takhta', 'Bersama permaisuri Theodora memerintah hampir 40 tahun.'),
        ev(529, 'Corpus Juris Civilis', 'Kodifikasi hukum Romawi yang menjadi dasar hukum Eropa daratan.'),
        ev(532, 'Pemberontakan Nika', 'Kerusuhan di hipodrom membakar separuh kota; puluhan ribu tewas.'),
        ev(533, 'Afrika direbut kembali', 'Belisarius mengalahkan Vandal; Perang Gotik di Italia dimulai 535.'),
        ev(537, 'Hagia Sophia', 'Katedral berkubah raksasa yang menjadi gereja terbesar dunia selama hampir seribu tahun.'),
        ev(541, 'Wabah Justinianus', 'Pandemi pes pertama yang tercatat menewaskan sebagian besar penduduk kota.'),
        ev(565, 'Justinianus wafat', 'Wilayah Romawi berada di puncak terakhirnya.'),
      ],
    },
    {
      story:
        'Selama enam abad, Bizantium bertahan sebagai benteng Kristen di antara Persia, bangsa Arab, Slavia, Bulgar, dan Turki. Kekaisaran menjadi berbahasa Yunani dan berpusat di Anatolia dan Balkan, menyebarkan Kristen Ortodoks ke dunia Slavia, sampai kekalahan di Manzikert dan Perang Salib Keempat menghancurkannya dari dalam.',
      chronicle: [
        ev(568, 'Lombard di Italia', 'Sebagian besar Italia lepas tak lama setelah Justinianus wafat.'),
        ev(626, 'Pengepungan Avar–Persia', 'Konstantinopel bertahan; Herakleios lalu mengalahkan Persia di Niniwe (627).'),
        ev(636, 'Pertempuran Yarmuk', 'Pasukan Arab Muslim merebut Suriah, lalu Mesir.'),
        ev(717, 'Pengepungan Arab kedua', 'Api Yunani dan musim dingin menghancurkan armada Umayyah.'),
        ev(726, 'Ikonoklasme', 'Kaisar Leo III melarang ikon; perdebatan berlangsung lebih dari seabad.'),
        ev(843, 'Pemulihan ikon', 'Gereja Ortodoks merayakannya sebagai Kemenangan Ortodoksi.'),
        ev(863, 'Misi Kirilus dan Metodius', 'Mengabarkan Injil ke Slavia; cikal bakal aksara Kiril.'),
        ev(1014, 'Basil II mengalahkan Bulgaria', 'Pertempuran Kleidion; Bulgaria dianeksasi pada 1018.'),
        ev(1054, 'Skisma Timur–Barat', 'Gereja Konstantinopel dan Roma saling mengucilkan.'),
        ev(1071, 'Pertempuran Manzikert', 'Seljuk mengalahkan Romanos IV; Anatolia terbuka bagi orang Turki.'),
        ev(1096, 'Perang Salib Pertama', 'Alexios I meminta bantuan Barat; pasukan Salib melewati Konstantinopel.'),
        ev(1204, 'Perang Salib Keempat', 'Pasukan Salib dan Venesia menjarah Konstantinopel.'),
      ],
    },
    {
      story:
        'Setelah 1204, Bizantium tinggal negara-negara penerus yang saling bersaing. Nikaia merebut kembali Konstantinopel, tetapi kekaisaran yang dipulihkan itu miskin, dilanda perang saudara dan wabah, dan perlahan dikepung Utsmaniyah hingga tersisa satu kota.',
      chronicle: [
        ev(1204, 'Kekaisaran Latin', 'Penguasa Salib memerintah kota; Nikaia, Epirus, dan Trebizond menjadi negara Yunani penerus.'),
        ev(1261, 'Konstantinopel direbut kembali', 'Mikhael VIII Palaiologos memulihkan kekaisaran.'),
        ev(1341, 'Perang saudara', 'Perebutan kekuasaan hingga 1347 menguras sisa kekuatan.'),
        ev(1347, 'Maut Hitam', 'Wabah pes tiba di Konstantinopel lalu menyebar ke Eropa.'),
        ev(1354, 'Utsmaniyah di Gallipoli', 'Pijakan pertama Turki di Eropa setelah gempa merusak tembok kota itu.'),
        ev(1394, 'Pengepungan Bayezid I', 'Kota dikepung delapan tahun; selamat karena Timur menyerang Utsmaniyah.'),
        ev(1439, 'Konsili Florence', 'Penyatuan gereja demi bantuan Barat ditolak rakyat.'),
        ev(1453, 'Konstantinopel jatuh', 'Mehmed II merebut kota pada 29 Mei; Konstantinus XI gugur.'),
      ],
    },
  ],
  'tang-song': [
    {
      story:
        'Tang menjadikan Tiongkok kekaisaran kosmopolit: Chang\'an adalah kota terbesar dunia, Jalur Sutra ramai, Buddhisme berkembang, dan puisi mencapai masa emas lewat Li Bai dan Du Fu. Pemberontakan An Lushan mematahkan kekuatan pusat, dan dinasti runtuh di tangan panglima daerah.',
      chronicle: [
        ev(618, 'Tang didirikan', 'Li Yuan merebut kekuasaan dari Sui.'),
        ev(626, 'Taizong naik takhta', 'Li Shimin, salah satu kaisar paling dihormati, setelah Insiden Gerbang Xuanwu.'),
        ev(629, 'Perjalanan Xuanzang', 'Biksu berangkat ke India dan kembali 645 dengan ratusan sutra.'),
        ev(690, 'Wu Zetian', 'Satu-satunya maharani yang memerintah atas nama sendiri.'),
        ev(712, 'Kaisar Xuanzong', 'Masa keemasan budaya; Li Bai dan Du Fu berkarya.'),
        ev(751, 'Pertempuran Talas', 'Tang kalah dari Abbasiyah di Asia Tengah.'),
        ev(755, 'Pemberontakan An Lushan', 'Perang delapan tahun yang menewaskan jutaan orang.'),
        ev(845, 'Penindasan Buddhisme', 'Ribuan biara ditutup dan hartanya disita.'),
        ev(868, 'Sutra Intan', 'Buku cetak bertanggal tertua yang masih ada.'),
        ev(875, 'Pemberontakan Huang Chao', 'Chang\'an dan Guangzhou dijarah.'),
        ev(907, 'Akhir Tang', 'Zhu Wen menggulingkan kaisar terakhir; masa Lima Dinasti dan Sepuluh Kerajaan.'),
      ],
    },
    {
      story:
        'Song memerintah dengan pejabat sarjana, bukan panglima. Militernya lemah melawan Liao, Jin, dan Mongol, tetapi ekonominya mengalami revolusi: uang kertas, mesiu, kompas, percetakan huruf lepas, dan kota-kota dagang yang padat. Setelah utara jatuh ke Jin, Song Selatan bertahan dari Hangzhou sampai ditaklukkan Mongol.',
      chronicle: [
        ev(960, 'Song didirikan', 'Zhao Kuangyin, panglima pengawal, diangkat menjadi kaisar oleh pasukannya.'),
        ev(1005, 'Perjanjian Chanyuan', 'Song membayar upeti tahunan kepada Liao demi perdamaian.'),
        ev(1024, 'Uang kertas negara', 'Jiaozi di Sichuan menjadi uang kertas resmi pertama di dunia.'),
        ev(1040, 'Huruf cetak lepas', 'Bi Sheng membuat huruf dari tanah liat.', true),
        ev(1069, 'Reformasi Wang Anshi', 'Kredit petani dan pajak baru, memicu pertentangan sengit di istana.'),
        ev(1088, 'Kompas magnetik dicatat', 'Shen Kuo menjelaskan jarum magnet dalam Mengxi Bitan.', true),
        ev(1127, 'Insiden Jingkang', 'Jin merebut Kaifeng dan menawan kaisar; Song Selatan beribu kota di Hangzhou.'),
        ev(1142, 'Yue Fei dihukum mati', 'Jenderal yang melawan Jin menjadi simbol kesetiaan.'),
        ev(1200, 'Zhu Xi wafat', 'Sintesis Neo-Konfusiannya menjadi ortodoksi ujian negara.'),
        ev(1279, 'Pertempuran Yamen', 'Armada Song terakhir hancur; Yuan menguasai seluruh Tiongkok.'),
      ],
    },
  ],
  khilafah: [
    {
      story:
        'Setelah wafatnya Nabi Muhammad, umat Islam dipimpin para khalifah. Dalam satu abad, pasukan Muslim menaklukkan Persia Sasaniyah, Suriah dan Mesir dari Bizantium, Afrika Utara, Spanyol, dan Sind. Perselisihan kepemimpinan memunculkan perpecahan Sunni–Syiah, dan Dinasti Umayyah memerintah dari Damaskus sampai digulingkan Abbasiyah.',
      chronicle: [
        ev(632, 'Abu Bakar khalifah pertama', 'Menyatukan kembali Arabia dalam Perang Riddah.'),
        ev(634, 'Umar bin Khattab', 'Penaklukan besar dimulai; kalender Hijriah ditetapkan.'),
        ev(636, 'Yarmuk dan Qadisiyyah', 'Kemenangan atas Bizantium di Suriah dan Persia di Irak (636–637).'),
        ev(642, 'Mesir dan Nahavand', 'Mesir ditaklukkan; kekuatan Sasaniyah dipatahkan.'),
        ev(651, 'Akhir Sasaniyah', 'Yazdegerd III, raja Persia terakhir, terbunuh di Merv.'),
        ev(656, 'Utsman terbunuh', 'Ali menjadi khalifah; perang saudara (fitnah) pertama.'),
        ev(661, 'Dinasti Umayyah', 'Muawiyah berkuasa dan menjadikan Damaskus ibu kota.'),
        ev(680, 'Karbala', 'Husain bin Ali gugur; peristiwa sentral bagi Syiah.'),
        ev(691, 'Kubah Batu', 'Abdul Malik membangun Kubah Batu di Yerusalem.'),
        ev(711, 'Spanyol dan Sind', 'Tariq bin Ziyad menyeberang ke Iberia; Muhammad bin Qasim masuk Sind.'),
        ev(732, 'Pertempuran Tours', 'Charles Martel menghentikan serbuan ke Galia.'),
        ev(750, 'Pertempuran Zab', 'Abbasiyah mengalahkan Umayyah.'),
      ],
    },
    {
      story:
        'Abbasiyah memindahkan pusat ke Irak dan membangun Baghdad, kota bundar yang menjadi pusat dagang dan ilmu dunia. Karya Yunani, Persia, dan India diterjemahkan di Bayt al-Hikmah. Namun sejak pertengahan abad ke-9, khalifah dikendalikan tentara budak Turki dan provinsi-provinsi berdiri sendiri.',
      chronicle: [
        ev(750, 'Abbasiyah berkuasa', 'As-Saffah menjadi khalifah dan keluarga Umayyah diburu.'),
        ev(756, 'Kordoba merdeka', 'Abdurrahman I, pewaris Umayyah, mendirikan emirat di Spanyol.'),
        ev(762, 'Baghdad didirikan', 'Al-Mansur membangun ibu kota baru di tepi Tigris.'),
        ev(786, 'Harun ar-Rasyid', 'Masa kemegahan yang dikenang dalam Seribu Satu Malam.'),
        ev(820, 'Al-Khawarizmi', 'Risalahnya melahirkan istilah aljabar dan algoritma.', true),
        ev(830, 'Bayt al-Hikmah', 'Al-Ma\'mun mendukung penerjemahan dan penelitian besar-besaran.', true),
        ev(836, 'Ibu kota ke Samarra', 'Khalifah pindah bersama pasukan Turkinya.'),
        ev(861, 'Anarki Samarra', 'Al-Mutawakkil dibunuh; khalifah menjadi permainan para komandan.'),
        ev(909, 'Fatimiyah', 'Khilafah Syiah Ismailiyah berdiri di Afrika Utara.'),
        ev(945, 'Buwaihi masuk Baghdad', 'Khalifah Abbasiyah tinggal pemimpin simbolis.'),
      ],
    },
    {
      story:
        'Khalifah Abbasiyah masih diakui di dunia Sunni, tetapi kekuasaan nyata dipegang Buwaihi lalu Seljuk. Di sekitarnya, Fatimiyah, Tentara Salib, Ayyubiyah, dan Khwarazm bergantian berkuasa. Ilmu pengetahuan tetap berkembang, sampai Mongol menghancurkan Baghdad.',
      chronicle: [
        ev(945, 'Masa Buwaihi', 'Emir Syiah memerintah atas nama khalifah Sunni.'),
        ev(969, 'Kairo didirikan', 'Fatimiyah menaklukkan Mesir dan membangun Kairo serta Al-Azhar.'),
        ev(1037, 'Ibnu Sina wafat', 'Al-Qanun fi at-Tibb menjadi buku kedokteran utama hingga Eropa.'),
        ev(1055, 'Seljuk di Baghdad', 'Tughril Beg bergelar sultan, pelindung khalifah.'),
        ev(1067, 'Madrasah Nizamiyah', 'Wazir Nizam al-Mulk membangun jaringan madrasah di Baghdad dan kota-kota lain.'),
        ev(1099, 'Yerusalem direbut Tentara Salib', 'Kerajaan-kerajaan Salib berdiri di Levant.'),
        ev(1111, 'Al-Ghazali wafat', 'Pemikir yang memadukan fikih, kalam, dan tasawuf.'),
        ev(1187, 'Pertempuran Hattin', 'Salahuddin al-Ayyubi merebut kembali Yerusalem.'),
        ev(1219, 'Mongol menyerbu Khwarazm', 'Kota-kota Asia Tengah seperti Bukhara dan Samarkand dihancurkan.'),
        ev(1258, 'Baghdad dijarah Mongol', 'Hulagu membunuh khalifah Al-Musta\'sim; akhir Abbasiyah di Baghdad.'),
      ],
    },
  ],
  khmer: [
    {
      story:
        'Dari dataran sekitar Danau Tonle Sap, raja-raja Khmer membangun kekaisaran terbesar di daratan Asia Tenggara. Angkor menjadi kota pra-industri terluas di dunia, ditopang jaringan waduk dan kanal. Perubahan iklim, beralihnya rakyat ke Buddhisme Theravada, dan serangan Ayutthaya mengakhiri kejayaannya.',
      chronicle: [
        ev(802, 'Jayavarman II', 'Menyatakan diri chakravartin (raja semesta) di Phnom Kulen, awal kekaisaran Khmer.'),
        ev(889, 'Yasodharapura', 'Yasovarman I membangun ibu kota di Angkor dan waduk Baray Timur.'),
        ev(1010, 'Suryavarman I', 'Memperluas wilayah ke Thailand tengah dan Laos.', true),
        ev(1113, 'Suryavarman II dan Angkor Wat', 'Candi terbesar di dunia dibangun untuk Wisnu.'),
        ev(1177, 'Cham menjarah Angkor', 'Armada Champa menyerang lewat sungai dan Tonle Sap.'),
        ev(1181, 'Jayavarman VII', 'Membangun Angkor Thom, Bayon, rumah sakit, dan rumah singgah; Buddhisme Mahayana menjadi agama negara.'),
        ev(1296, 'Zhou Daguan di Angkor', 'Utusan Yuan menulis satu-satunya catatan saksi mata kehidupan di kota itu.'),
        ev(1352, 'Serangan Ayutthaya', 'Kerajaan Siam yang baru mulai menekan Khmer.', true),
        ev(1431, 'Angkor ditinggalkan', 'Setelah direbut Ayutthaya, pusat kerajaan pindah ke wilayah Phnom Penh.'),
      ],
    },
  ],
  mongol: [
    {
      story:
        'Temujin menyatukan suku-suku stepa dan sebagai Genghis Khan membangun kekaisaran darat terbesar dalam sejarah. Para penerusnya menaklukkan Tiongkok, Persia, dan Rusia. Kekaisaran kemudian terpecah menjadi empat khanat, tetapi Pax Mongolica membuka jalur dagang dari Korea sampai Hungaria, sekaligus jalur bagi Maut Hitam.',
      chronicle: [
        ev(1206, 'Genghis Khan', 'Kurultai mengangkat Temujin sebagai penguasa semua suku Mongol.'),
        ev(1215, 'Zhongdu jatuh', 'Ibu kota Jin (kini Beijing) direbut.'),
        ev(1219, 'Khwarazm ditaklukkan', 'Balasan atas dibunuhnya utusan Mongol; Bukhara, Samarkand, dan Merv hancur.'),
        ev(1227, 'Genghis Khan wafat', 'Kekaisaran dibagi kepada putra-putranya; Ögedei menjadi khan agung.'),
        ev(1237, 'Penaklukan Rus', 'Batu menghancurkan kota-kota Rus, termasuk Kiev pada 1240.'),
        ev(1241, 'Legnica dan Mohi', 'Pasukan Eropa dikalahkan; Mongol mundur setelah Ögedei wafat.'),
        ev(1258, 'Baghdad jatuh', 'Hulagu mengakhiri Khilafah Abbasiyah.'),
        ev(1260, 'Ain Jalut dan Kubilai', 'Mamluk menghentikan Mongol di Palestina; Kubilai menjadi khan agung.'),
        ev(1271, 'Dinasti Yuan', 'Kubilai memakai nama dinasti Tiongkok dan membangun Khanbaliq.'),
        ev(1274, 'Invasi ke Jepang', 'Gagal pada 1274 dan 1281, sebagian karena badai "kamikaze".'),
        ev(1279, 'Song ditaklukkan', 'Seluruh Tiongkok di bawah Yuan.'),
        ev(1293, 'Ekspedisi ke Jawa', 'Pasukan Yuan dimanfaatkan Raden Wijaya lalu diusir; Majapahit berdiri.'),
        ev(1346, 'Pengepungan Kaffa', 'Pasukan Golden Horde dilanda pes; wabah menyebar ke Eropa sebagai Maut Hitam.'),
        ev(1368, 'Yuan terusir', 'Zhu Yuanzhang mendirikan Ming; Mongol mundur ke stepa.'),
      ],
    },
  ],
  'mali-songhai': [
    {
      story:
        'Kekaisaran Mali menguasai tambang emas Afrika Barat dan jalur karavan melintasi Sahara. Mansa Musa, mungkin orang terkaya dalam sejarah, menjadikan Timbuktu pusat ilmu Islam dan memperkenalkan Mali ke Eropa dan dunia Arab.',
      chronicle: [
        ev(1235, 'Pertempuran Kirina', 'Sundiata Keita mengalahkan Sumanguru dari Sosso dan mendirikan Mali.', true),
        ev(1312, 'Mansa Musa', 'Naik takhta setelah pendahulunya berlayar ke Atlantik dan tidak kembali.', true),
        ev(1324, 'Haji Mansa Musa', 'Emas yang dibagikannya di Kairo menurunkan harga emas di sana selama bertahun-tahun.'),
        ev(1327, 'Masjid Djinguereber', 'Dibangun di Timbuktu oleh arsitek as-Sahili.', true),
        ev(1352, 'Ibnu Battuta di Mali', 'Mencatat keamanan jalan dan ketaatan beragama penduduknya.'),
        ev(1375, 'Atlas Katalan', 'Peta Eropa menggambarkan Mansa Musa memegang bongkah emas.'),
        ev(1433, 'Tuareg merebut Timbuktu', 'Mali kehilangan wilayah utara.'),
        ev(1468, 'Timbuktu jatuh ke Songhai', 'Sunni Ali mengambil alih kota.'),
      ],
    },
    {
      story:
        'Songhai, berpusat di Gao di tepi Niger, menggantikan Mali sebagai kekaisaran terbesar Afrika Barat. Askia Muhammad memperluas wilayah dan memajukan Timbuktu sebagai kota ulama. Pasukan Maroko bersenjata api mengakhiri kekaisaran ini.',
      chronicle: [
        ev(1468, 'Sunni Ali merebut Timbuktu', 'Penakluk yang memperluas Songhai di sepanjang Niger.'),
        ev(1473, 'Djenne ditaklukkan', 'Kota dagang penting di hulu Niger.', true),
        ev(1493, 'Askia Muhammad', 'Merebut takhta dan mendirikan dinasti Askia.'),
        ev(1496, 'Haji Askia Muhammad', 'Diangkat sebagai khalifah untuk Sudan Barat oleh syarif Mekah.', true),
        ev(1510, 'Leo Africanus di Timbuktu', 'Mencatat perdagangan buku yang lebih menguntungkan daripada barang lain.', true),
        ev(1528, 'Askia Muhammad digulingkan', 'Putranya mengambil alih; perebutan takhta berulang.'),
        ev(1549, 'Askia Dawud', 'Masa stabil dan makmur terakhir.'),
        ev(1591, 'Pertempuran Tondibi', 'Pasukan Maroko dengan senapan mengalahkan Songhai.'),
      ],
    },
  ],
  ottoman: [
    {
      story:
        'Kerajaan kecil Osman di perbatasan Bizantium tumbuh menjadi kekuatan besar dengan menyerap prajurit gazi dan bangsawan Kristen setempat. Utsmaniyah menyeberang ke Balkan sebelum menguasai seluruh Anatolia, selamat dari kekalahan oleh Timur Lenk, dan akhirnya merebut Konstantinopel.',
      chronicle: [
        ev(1299, 'Osman I', 'Beylik kecil di Bitinia, Anatolia barat laut.', true),
        ev(1326, 'Bursa direbut', 'Menjadi ibu kota pertama Utsmaniyah.'),
        ev(1354, 'Gallipoli', 'Pijakan pertama di Eropa.'),
        ev(1369, 'Edirne', 'Adrianopel menjadi ibu kota baru di Balkan.', true),
        ev(1389, 'Pertempuran Kosovo', 'Serbia dikalahkan; Sultan Murad I gugur.'),
        ev(1396, 'Pertempuran Nikopolis', 'Pasukan Salib Hungaria dan Prancis dihancurkan Bayezid I.'),
        ev(1402, 'Pertempuran Ankara', 'Timur Lenk menawan Bayezid I; kekaisaran nyaris pecah.'),
        ev(1413, 'Akhir Interregnum', 'Mehmed I menyatukan kembali negara setelah perang antarsaudara.'),
        ev(1444, 'Pertempuran Varna', 'Murad II mengalahkan pasukan Salib terakhir.'),
        ev(1453, 'Konstantinopel ditaklukkan', 'Mehmed II "Sang Penakluk" menjadikannya ibu kota (Istanbul).'),
      ],
    },
    {
      story:
        'Dari Istanbul, Utsmaniyah menguasai tiga benua: Balkan dan Hungaria, Anatolia dan Timur Tengah, serta Afrika Utara. Sultan Suleiman membawa kekaisaran ke puncak hukum, arsitektur, dan militer. Armada Utsmaniyah merajai Mediterania timur dan bahkan mengirim bantuan ke Aceh.',
      chronicle: [
        ev(1453, 'Istanbul ibu kota', 'Hagia Sophia dijadikan masjid; kota dihuni kembali.'),
        ev(1517, 'Mamluk ditaklukkan', 'Selim I menguasai Mesir, Suriah, Mekah, dan Madinah; sultan memakai gelar khalifah.'),
        ev(1520, 'Suleiman Agung', 'Dikenal di negerinya sebagai Kanuni, sang pembuat hukum.'),
        ev(1526, 'Pertempuran Mohács', 'Kerajaan Hungaria runtuh.'),
        ev(1529, 'Pengepungan Wina pertama', 'Gagal; batas terjauh di Eropa tengah.'),
        ev(1538, 'Pertempuran Preveza', 'Barbarossa Hayreddin mengalahkan armada Liga Suci.'),
        ev(1557, 'Masjid Süleymaniye', 'Karya agung arsitek Sinan.'),
        ev(1566, 'Suleiman wafat', 'Wafat saat mengepung Szigetvár; bantuan meriam dikirim ke Aceh.'),
        ev(1571, 'Pertempuran Lepanto', 'Armada Utsmaniyah kalah, tetapi dibangun kembali dalam setahun.'),
        ev(1639, 'Perjanjian Qasr-e Shirin', 'Batas dengan Safawiyah yang kurang lebih menjadi batas Turki–Iran hingga kini.'),
        ev(1669, 'Kreta ditaklukkan', 'Pengepungan Kandiye selama 21 tahun berakhir.'),
        ev(1683, 'Pengepungan Wina kedua', 'Dikalahkan pasukan Jan Sobieski; awal kemunduran di Eropa.'),
      ],
    },
    {
      story:
        'Setelah gagal di Wina, Utsmaniyah perlahan kehilangan wilayah di Balkan, Laut Hitam, dan Afrika Utara kepada Austria, Rusia, dan gerakan nasionalis. Reformasi Tanzimat dan konstitusi berusaha memodernkan negara, tetapi Perang Dunia I menghancurkan kekaisaran dan melahirkan Republik Turki.',
      chronicle: [
        ev(1683, 'Kekalahan di Wina', 'Liga Suci memulai perang panjang melawan Utsmaniyah.'),
        ev(1699, 'Perjanjian Karlowitz', 'Hungaria diserahkan kepada Austria; kehilangan wilayah besar pertama.'),
        ev(1718, 'Era Tulip', 'Masa damai dan budaya ala Eropa; mesin cetak Ibrahim Müteferrika (1727).'),
        ev(1774, 'Perjanjian Küçük Kaynarca', 'Krimea lepas dan Rusia menjadi pelindung umat Ortodoks.'),
        ev(1798, 'Napoleon di Mesir', 'Kelemahan militer terungkap; Muhammad Ali kemudian berkuasa di Mesir.'),
        ev(1830, 'Yunani merdeka', 'Kemerdekaan pertama dari kekaisaran, didukung Inggris, Prancis, dan Rusia.'),
        ev(1839, 'Tanzimat', 'Reformasi hukum, pajak, dan militer; kesetaraan warga Muslim dan non-Muslim.'),
        ev(1853, 'Perang Krimea', 'Bersekutu dengan Inggris dan Prancis melawan Rusia.'),
        ev(1876, 'Konstitusi pertama', 'Ditangguhkan Abdulhamid II pada 1878.'),
        ev(1908, 'Revolusi Turki Muda', 'Konstitusi dipulihkan; Komite Persatuan dan Kemajuan berkuasa.'),
        ev(1912, 'Perang Balkan', 'Hampir seluruh wilayah Eropa hilang.'),
        ev(1914, 'Perang Dunia I', 'Bergabung dengan Jerman dan Austria-Hongaria.'),
        ev(1915, 'Gallipoli dan genosida Armenia', 'Sekutu dipukul mundur; ratusan ribu hingga lebih dari sejuta orang Armenia tewas dalam deportasi.'),
        ev(1920, 'Perjanjian Sèvres', 'Rencana pembagian Anatolia memicu Perang Kemerdekaan Turki.'),
        ev(1922, 'Kesultanan dihapus', 'Mehmed VI pergi ke pengasingan; Republik Turki diproklamasikan 1923.'),
      ],
    },
  ],
  'ming-qing': [
    {
      story:
        'Ming memulihkan pemerintahan Han setelah Mongol. Kaisar Yongle memindahkan ibu kota ke Beijing, membangun Kota Terlarang, dan mengirim armada Cheng Ho sampai Afrika. Ming kemudian menutup diri ke laut dan menghabiskan dana untuk Tembok Besar, sementara krisis keuangan dan pemberontakan petani mengantar kejatuhannya.',
      chronicle: [
        ev(1368, 'Ming didirikan', 'Zhu Yuanzhang, bekas biksu dan petani miskin, menjadi Kaisar Hongwu.'),
        ev(1402, 'Kaisar Yongle', 'Merebut takhta dari keponakannya.'),
        ev(1405, 'Pelayaran Cheng Ho', 'Tujuh ekspedisi hingga 1433 ke Asia Tenggara, India, Arabia, dan Afrika Timur.'),
        ev(1420, 'Kota Terlarang', 'Beijing menjadi ibu kota resmi.'),
        ev(1449, 'Krisis Tumu', 'Kaisar Zhengtong ditawan Mongol Oirat.'),
        ev(1557, 'Portugis di Makau', 'Pemukiman Eropa permanen pertama di Tiongkok.'),
        ev(1572, 'Reformasi Zhang Juzheng', 'Pajak disederhanakan dan dibayar dengan perak; Tembok Besar diperkuat dengan bata.'),
        ev(1592, 'Perang Imjin', 'Ming membantu Korea melawan invasi Jepang (1592–1598).'),
        ev(1601, 'Matteo Ricci di Beijing', 'Yesuit memperkenalkan sains Eropa di istana.'),
        ev(1644, 'Beijing jatuh', 'Pemberontak Li Zicheng masuk kota; Kaisar Chongzhen gantung diri.'),
      ],
    },
    {
      story:
        'Manchu dari timur laut mendirikan Qing dan memerintah Tiongkok terluas sepanjang sejarah, termasuk Mongolia, Xinjiang, Tibet, dan Taiwan. Abad ke-18 adalah masa makmur, tetapi pada abad ke-19 Qing dihantam Perang Candu, pemberontakan raksasa, dan kekalahan dari Jepang, hingga revolusi menggulingkan kaisar terakhir.',
      chronicle: [
        ev(1644, 'Manchu masuk Beijing', 'Wu Sangui membuka Celah Shanhai; Qing menguasai Tiongkok.'),
        ev(1662, 'Kaisar Kangxi', 'Memerintah 61 tahun; Taiwan direbut dari keluarga Zheng (1683).'),
        ev(1689, 'Perjanjian Nerchinsk', 'Perbatasan dengan Rusia ditetapkan.'),
        ev(1735, 'Kaisar Qianlong', 'Puncak wilayah; Xinjiang ditaklukkan (1759).'),
        ev(1793, 'Misi Macartney', 'Inggris meminta hak dagang dan ditolak.'),
        ev(1839, 'Perang Candu Pertama', 'Lin Zexu memusnahkan candu Inggris; perang pun pecah.'),
        ev(1842, 'Perjanjian Nanjing', 'Hong Kong diserahkan; awal "perjanjian tidak setara".'),
        ev(1850, 'Pemberontakan Taiping', 'Perang saudara paling berdarah abad ke-19, hingga 1864.'),
        ev(1860, 'Istana Musim Panas dibakar', 'Pasukan Inggris dan Prancis pada akhir Perang Candu Kedua.'),
        ev(1894, 'Perang Tiongkok–Jepang', 'Kekalahan; Taiwan diserahkan kepada Jepang.'),
        ev(1900, 'Pemberontakan Boxer', 'Delapan negara menduduki Beijing.'),
        ev(1911, 'Pemberontakan Wuchang', 'Awal Revolusi Xinhai.'),
        ev(1912, 'Puyi turun takhta', 'Berakhirnya dua ribu tahun kekaisaran; Republik Tiongkok berdiri.'),
      ],
    },
  ],
  'mesoamerika-andes': [
    {
      story:
        'Di hutan Yucatán dan Guatemala, desa-desa Maya tumbuh menjadi negara-kota dengan piramida, aksara hieroglif, dan kalender Hitungan Panjang. Pada masa Klasik, Tikal dan Calakmul bersaing memimpin persekutuan raja-raja. Sekitar abad ke-9 kota-kota di dataran rendah selatan ditinggalkan, sementara Chichén Itzá di utara bertahan lebih lama.',
      chronicle: [
        ev(-2000, 'Desa Maya awal', 'Permukiman pertanian jagung dengan gerabah di dataran rendah.', true),
        ev(-1200, 'Olmek', 'Peradaban di pesisir Teluk Meksiko dengan kepala batu raksasa menjadi "budaya induk" Mesoamerika.', true),
        ev(-300, 'El Mirador', 'Kota Maya praklasik dengan piramida La Danta, salah satu yang terbesar di dunia.', true),
        ev(100, 'Teotihuacan', 'Piramida Matahari dibangun di kota terbesar Amerika saat itu.', true),
        ev(250, 'Masa Klasik Maya', 'Stela bertanggal Hitungan Panjang menyebar di kota-kota Maya.', true),
        ev(378, 'Kedatangan Siyaj K\'ak\'', 'Utusan dari Teotihuacan mengubah dinasti Tikal.'),
        ev(562, 'Tikal dikalahkan', 'Caracol, sekutu Calakmul, mengalahkan Tikal.'),
        ev(615, 'Pakal Agung', 'Raja Palenque memerintah 68 tahun; makamnya di Kuil Prasasti.'),
        ev(695, 'Tikal bangkit', 'Jasaw Chan K\'awiil mengalahkan Calakmul.'),
        ev(790, 'Mural Bonampak', 'Lukisan dinding yang menggambarkan perang dan upacara istana.', true),
        ev(900, 'Keruntuhan Klasik', 'Kota-kota selatan ditinggalkan akibat kekeringan, perang, dan kelebihan penduduk.', true),
      ],
    },
    {
      story:
        'Mexica (Aztek) membangun Tenochtitlan di pulau di Danau Texcoco. Lewat Persekutuan Tiga Kota, mereka menguasai Meksiko tengah dan memungut upeti dari ratusan kota. Kedatangan Spanyol, ditambah sekutu pribumi yang membenci Aztek dan wabah cacar, menghancurkan kekaisaran ini hanya dalam dua tahun.',
      chronicle: [
        ev(1428, 'Persekutuan Tiga Kota', 'Tenochtitlan, Texcoco, dan Tlacopan mengalahkan Azcapotzalco.'),
        ev(1440, 'Moctezuma I', 'Ekspansi besar dan pembangunan Templo Mayor.'),
        ev(1487, 'Peresmian Templo Mayor', 'Upacara besar setelah perluasan piramida kembar.'),
        ev(1502, 'Moctezuma II', 'Kekaisaran di puncak luasnya.'),
        ev(1519, 'Cortés tiba', 'Bersekutu dengan Tlaxcala dan masuk Tenochtitlan.'),
        ev(1520, 'La Noche Triste dan cacar', 'Spanyol terusir dengan banyak korban; wabah cacar melanda kota.'),
        ev(1521, 'Tenochtitlan jatuh', 'Cuauhtémoc ditangkap setelah pengepungan.'),
      ],
    },
    {
      story:
        'Dari Cusco, Inka membangun kekaisaran terbesar Amerika, Tawantinsuyu, yang membentang 4.000 km di sepanjang Andes. Tanpa tulisan, mereka mengelola negeri dengan quipu (tali simpul), jaringan jalan, dan kerja bakti mit\'a. Perang saudara dan cacar melemahkan Inka tepat saat Pizarro tiba.',
      chronicle: [
        ev(1438, 'Pachacuti', 'Mengalahkan Chanka dan mengubah Cusco menjadi kekaisaran.'),
        ev(1450, 'Machu Picchu', 'Tempat peristirahatan kerajaan dibangun di pegunungan.', true),
        ev(1470, 'Chimú ditaklukkan', 'Kerajaan pesisir utara Peru dikuasai.', true),
        ev(1493, 'Huayna Capac', 'Kekaisaran meluas hingga Ekuador dan Chili tengah.'),
        ev(1527, 'Perang saudara', 'Huayna Capac wafat, mungkin karena cacar; Huáscar dan Atahualpa berebut takhta.', true),
        ev(1532, 'Cajamarca', 'Pizarro menawan Atahualpa.'),
        ev(1533, 'Atahualpa dieksekusi', 'Spanyol masuk Cusco.'),
      ],
    },
  ],
  'kolonialisme-eropa': [
    {
      story:
        'Portugal dan Spanyol membuka jalur laut ke Asia dan Amerika, disusul Belanda, Inggris, dan Prancis. Emas dan perak Amerika, rempah Asia, serta perdagangan budak Atlantik menjadi sumber kekayaan Eropa Barat. Menjelang akhir abad ke-18, koloni-koloni Amerika mulai memerdekakan diri.',
      chronicle: [
        ev(1492, 'Columbus tiba di Karibia', 'Awal penjajahan Spanyol di Amerika.'),
        ev(1494, 'Perjanjian Tordesillas', 'Dunia di luar Eropa dibagi antara Spanyol dan Portugal.'),
        ev(1498, 'Vasco da Gama di India', 'Jalur laut Eropa–Asia memutari Afrika.'),
        ev(1500, 'Cabral di Brasil', 'Portugal mengklaim Brasil.'),
        ev(1511, 'Malaka direbut Portugis', 'Pijakan di jalur rempah Nusantara.'),
        ev(1521, 'Aztek ditaklukkan', 'Spanyol mendirikan Nueva España.'),
        ev(1545, 'Perak Potosí', 'Tambang di Bolivia membanjiri dunia dengan perak.'),
        ev(1565, 'Manila dan galiung', 'Spanyol di Filipina; galiung Manila–Acapulco menghubungkan Asia dan Amerika.'),
        ev(1602, 'VOC', 'Perusahaan dagang Belanda menyusul East India Company Inggris (1600).'),
        ev(1607, 'Jamestown', 'Koloni Inggris permanen pertama di Amerika Utara.'),
        ev(1652, 'Tanjung Harapan', 'VOC mendirikan pos di Cape Town.'),
        ev(1757, 'Pertempuran Plassey', 'East India Company menguasai Bengal.'),
        ev(1776, 'Amerika Serikat merdeka', 'Koloni pertama yang lepas dari Eropa.'),
        ev(1791, 'Revolusi Haiti', 'Pemberontakan budak yang berhasil mendirikan negara (1804).'),
      ],
    },
    {
      story:
        'Pada abad ke-19, revolusi industri memberi Eropa kapal uap, senapan, dan obat kina. Kekuasaan kolonial merambah pedalaman Asia dan hampir seluruh Afrika, dibagi di meja perundingan Berlin. Dua perang dunia melemahkan negara-negara penjajah dan membuka jalan bagi dekolonisasi.',
      chronicle: [
        ev(1807, 'Perdagangan budak dilarang Inggris', 'Perbudakan dihapus di koloni Inggris pada 1833.'),
        ev(1830, 'Prancis di Aljazair', 'Awal penaklukan Afrika Utara.'),
        ev(1857, 'Pemberontakan India', 'Disusul pemerintahan langsung Mahkota Inggris (1858).'),
        ev(1869, 'Terusan Suez', 'Memperpendek jalur Eropa–Asia.'),
        ev(1884, 'Konferensi Berlin', 'Aturan pembagian Afrika di antara negara Eropa (1884–1885).'),
        ev(1885, 'Negara Bebas Kongo', 'Milik pribadi Raja Leopold II; kerja paksa karet menewaskan jutaan orang.'),
        ev(1896, 'Pertempuran Adwa', 'Ethiopia mengalahkan Italia dan tetap merdeka.'),
        ev(1899, 'Perang Boer', 'Inggris melawan republik-republik Afrikaner.'),
        ev(1904, 'Genosida Herero dan Nama', 'Pasukan Jerman di Namibia membantai penduduk pribumi.'),
        ev(1914, 'Perang Dunia I', 'Koloni-koloni ikut berperang dan mengirim pasukan.'),
        ev(1919, 'Sistem mandat', 'Koloni Jerman dan wilayah Utsmaniyah dibagi kepada pemenang.'),
        ev(1935, 'Italia menyerbu Ethiopia', 'Liga Bangsa-Bangsa gagal mencegahnya.'),
        ev(1941, 'Piagam Atlantik', 'Hak menentukan nasib sendiri menjadi seruan bangsa-bangsa terjajah.'),
        ev(1945, 'Akhir Perang Dunia II', 'Gelombang kemerdekaan Asia dan Afrika dimulai.'),
      ],
    },
  ],
};
