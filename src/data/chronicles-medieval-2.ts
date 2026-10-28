import { ev, type ChronicleBook } from './chronicle';

/** Kronik periode peradaban abad pertengahan tambahan (urutan = indeks `territories`). */
export const chroniclesMedieval2: ChronicleBook = {
  'frank-romawi-suci': [
    {
      story:
        'Kisah ini bermula ketika Klovis, pemimpin kecil suku Frank Salian, mempersatukan para panglima Frank dan merebut Galia utara dari sisa kekuasaan Romawi. Dengan memeluk Katolik, ia mendapat dukungan para uskup dan penduduk Galia-Romawi. Dari dinasti Merovingia kekuasaan bergeser ke para pengurus istana, lalu ke Karolingia, yang pada 800 menghidupkan kembali gelar kaisar di Barat.',
      chronicle: [
        ev(481, 'Klovis menjadi raja Frank', 'Putra Childeric ini naik takhta di Tournai pada usia sekitar 15 tahun dan mulai memperluas wilayahnya.'),
        ev(496, 'Klovis dibaptis Katolik', 'Gregorius dari Tours menceritakan pembaptisan Klovis sesudah kemenangan atas Alemanni; para sejarawan masih berdebat apakah terjadi sekitar 496 atau 508.', true),
        ev(511, 'Klovis wafat', 'Kerajaan dibagi di antara keempat putranya menurut adat Frank, kebiasaan yang berulang kali memecah kerajaan.'),
        ev(732, 'Tours/Poitiers', 'Charles Martel, pengurus istana Frank, menahan pasukan Umayyah dari Spanyol di antara Tours dan Poitiers.'),
        ev(751, 'Pippin III menjadi raja', 'Dengan restu Paus, Pippin si Pendek menyingkirkan raja Merovingia terakhir dan mendirikan dinasti Karolingia.'),
        ev(756, 'Donasi Pippin', 'Pippin menyerahkan wilayah sekitar Roma dan Ravenna kepada Paus, dasar Negara Kepausan.'),
        ev(772, 'Perang Sachsen dimulai', 'Karel Agung memulai perang panjang melawan suku Sachsen yang masih menganut kepercayaan lama; perang berlangsung hingga sekitar 804.'),
        ev(774, 'Lombardia ditaklukkan', 'Karel merebut Pavia dan memakai gelar raja Lombardia, sehingga menguasai Italia utara.'),
        ev(782, 'Alcuin di Aachen', 'Cendekiawan dari York ini memimpin sekolah istana dan menggerakkan Renaisans Karolingia; naskah disalin dengan tulisan minuskul Karolingia yang jelas.', true),
        ev(800, 'Karel dimahkotai kaisar', 'Paus Leo III memahkotai Karel di Basilika Santo Petrus pada hari Natal, menghidupkan gelar kaisar di Eropa Barat.'),
        ev(814, 'Karel Agung wafat', 'Putranya Louis si Saleh mewarisi seluruh kerajaan, yang kemudian diperebutkan oleh cucu-cucunya.'),
        ev(843, 'Perjanjian Verdun', 'Tiga cucu Karel membagi kerajaan menjadi Francia Barat, Tengah, dan Timur, cikal bakal Prancis dan Jerman.'),
      ],
    },
    {
      story:
        'Setelah Karolingia terpecah, para adipati Saksen mengambil alih mahkota Francia Timur. Otto I menjadi kaisar pada 962 dan sejak itu kekaisaran terikat dengan Italia dan kepausan. Perselisihan kaisar dan paus tentang hak mengangkat uskup mewarnai abad-abad berikutnya, sementara kota-kota dan pangeran daerah menjadi makin kuat.',
      chronicle: [
        ev(911, 'Akhir Karolingia timur', 'Louis si Anak wafat tanpa pewaris; para adipati Jerman memilih Konrad dari Franconia sebagai raja.'),
        ev(955, 'Pertempuran Lechfeld', 'Otto I mengalahkan pasukan berkuda Magyar dekat Augsburg dan mengakhiri serangan mereka ke Eropa tengah.'),
        ev(962, 'Otto I menjadi kaisar', 'Paus Yohanes XII memahkotai Otto di Roma; tahun ini lazim dipakai sebagai awal Kekaisaran Romawi Suci.'),
        ev(1077, 'Canossa', 'Raja Henry IV berdiri tiga hari di salju untuk memohon ampun kepada Paus Gregorius VII dalam Kontroversi Penobatan.'),
        ev(1122, 'Konkordat Worms', 'Kaisar dan Paus sepakat bahwa gereja memilih uskup, sedangkan kaisar menyerahkan wilayah dan hak duniawinya.'),
        ev(1155, 'Frederick I Barbarossa', 'Raja Hohenstaufen ini dimahkotai kaisar dan berkali-kali berkampanye di Italia.'),
        ev(1176, 'Legnano', 'Liga kota-kota Lombardia mengalahkan pasukan Barbarossa dan memperkuat otonomi kota Italia.'),
        ev(1190, 'Barbarossa tenggelam', 'Dalam Perang Salib Ketiga, Frederick tenggelam saat menyeberangi sungai di Anatolia.'),
        ev(1220, 'Frederick II', 'Raja Sisilia yang dimahkotai kaisar ini memerintah dari Palermo, mengundang sarjana Arab, Yahudi, dan Latin, dan dijuluki stupor mundi (kekaguman dunia).'),
        ev(1250, 'Frederick II wafat', 'Sesudah wafatnya, Jerman memasuki masa tanpa raja yang diakui luas (interregnum).'),
      ],
    },
    {
      story:
        'Kekaisaran kini menjadi himpunan ratusan wilayah, dengan tujuh pangeran pemilih menentukan siapa yang menjadi kaisar. Keluarga Habsburg memegang mahkota nyaris tanpa putus dari abad ke-15. Reformasi, perang agama, dan akhirnya Napoleon menutup riwayatnya; Voltaire menyindir bahwa kekaisaran ini "bukan suci, bukan Romawi, bukan kekaisaran".',
      chronicle: [
        ev(1273, 'Rudolf I dari Habsburg', 'Para pemilih memilih Rudolf yang bukan pangeran besar; keluarganya kelak mendominasi mahkota.'),
        ev(1356, 'Bulla Emas', 'Kaisar Karel IV menetapkan tujuh pangeran pemilih yang berhak memilih raja Jerman.'),
        ev(1415, 'Jan Hus dibakar', 'Pembaru gereja dari Bohemia dihukum mati di Konstanz dan memicu Perang Hussite.'),
        ev(1440, 'Gutenberg di Mainz', 'Johannes Gutenberg mengembangkan percetakan huruf logam bergerak, yang mempercepat penyebaran gagasan; tahun ini perkiraan.', true),
        ev(1495, 'Reichstag Worms', 'Majelis kekaisaran menyetujui perdamaian abadi dan pengadilan kekaisaran untuk menyelesaikan sengketa.'),
        ev(1519, 'Karel V', 'Raja Spanyol ini dipilih menjadi kaisar dan memerintah wilayah luas di Eropa dan Amerika.'),
        ev(1521, 'Diet Worms', 'Martin Luther menolak mencabut tulisannya di hadapan kaisar; ia lalu dilarang oleh Edik Worms.'),
        ev(1555, 'Perdamaian Augsburg', 'Prinsip cuius regio, eius religio: penguasa wilayah menentukan agama (Katolik atau Lutheran) rakyatnya.'),
        ev(1618, 'Perang Tiga Puluh Tahun', 'Konflik berawal dari pemberontakan di Praha dan menyeret banyak kekuatan Eropa; wilayah Jerman luluh lantak dan jumlah penduduk menyusut tajam.'),
        ev(1648, 'Perdamaian Westphalia', 'Mengakhiri perang dan menegaskan hak pangeran Jerman menentukan kebijakan luar negerinya sendiri.'),
        ev(1683, 'Wina dikepung', 'Pasukan Utsmaniyah mengepung Wina; sekutu Polandia-Habsburg yang dipimpin Jan Sobieski mematahkan pengepungan.'),
        ev(1806, 'Kekaisaran dibubarkan', 'Setelah Napoleon mengalahkan Austria dan membentuk Konfederasi Rhein, Kaisar Franz II meletakkan mahkota Romawi Suci.'),
      ],
    },
  ],
  viking: [
    {
      story:
        'Kisah ini bermula pada pagi Juni 793, ketika kapal-kapal dari utara mendarat di biara Lindisfarne. Selama dua setengah abad para pelaut Skandinavia menjadi penyerbu, pedagang, dan pemukim, dari Dublin dan Normandia sampai Islandia dan pantai Amerika Utara. Bagi mereka sendiri, sebagian besar hidup tetap berupa pertanian, perikanan, dan perdagangan yang berjalan damai.',
      chronicle: [
        ev(793, 'Serangan Lindisfarne', 'Penyerbu dari seberang Laut Utara menjarah biara di pulau suci Northumbria; peristiwa ini lazim dianggap awal Zaman Viking.'),
        ev(841, 'Dublin didirikan', 'Kubu pelabuhan (longphort) Norse di Sungai Liffey kelak menjadi kota dagang besar.'),
        ev(845, 'Paris dikepung', 'Pasukan di bawah pemimpin yang disebut sumber Frank sebagai Reginherus mencapai Paris dan menerima tebusan perak; tradisi lisan mengaitkannya dengan Ragnar, tetapi hubungan itu tidak pasti.'),
        ev(865, 'Tentara Agung Pagan', 'Pasukan Denmark mendarat di Anglia Timur, menaklukkan Northumbria, Mercia, dan Anglia Timur kecuali Wessex.'),
        ev(874, 'Pemukiman Islandia', 'Menurut tradisi, Ingólfr Arnarson menetap di Reykjavik; pemukim datang dari Norwegia dan Kepulauan Britania.', true),
        ev(911, 'Rollo di Normandia', 'Raja Frank Charles si Sederhana memberikan wilayah di muara Seine kepada Rollo, asal-usul Adipati Normandia.'),
        ev(930, 'Althing Islandia', 'Majelis para kepala keluarga berkumpul di Thingvellir untuk membuat hukum, salah satu parlemen tertua yang masih dikenal.', true),
        ev(965, 'Harald Gigi Biru', 'Raja Denmark ini memeluk Kristen dan mendirikan batu Jelling yang memuat nama Denmark.', true),
        ev(985, 'Erik si Merah ke Greenland', 'Setelah diasingkan dari Islandia, ia menjelajah barat dan mendirikan pemukiman Norse di Greenland.', true),
        ev(1000, 'Leif Erikson ke Vinland', 'Kisah saga dibuktikan oleh situs L\'Anse aux Meadows di Newfoundland; penanggalan kayu menunjuk tahun 1021.', true),
        ev(1016, 'Knut Agung raja Inggris', 'Raja Denmark ini menguasai Inggris, lalu Denmark dan Norwegia, membentuk "kekaisaran Laut Utara".'),
        ev(1066, 'Stamford Bridge', 'Raja Norwegia Harald Hardrada tewas dikalahkan Harold Godwinson; tiga minggu kemudian Normandia menaklukkan Inggris di Hastings.'),
      ],
    },
    {
      story:
        'Setelah 1066, Skandinavia menjadi tiga kerajaan Kristen yang diatur oleh gereja dan raja. Islandia membangun sastra saga yang luar biasa, sementara pedagang Hansa dari Jerman mulai menguasai perdagangan di Bergen. Wabah Maut Hitam memukul Norwegia dan mengubah keseimbangan hingga ketiga mahkota disatukan pada 1397.',
      chronicle: [
        ev(1066, 'Akhir zaman Viking', 'Setelah Stamford Bridge, raja-raja Skandinavia menjadi bagian dari Eropa Kristen.'),
        ev(1103, 'Keuskupan agung Lund', 'Gereja Skandinavia mendapat pusat sendiri sehingga tidak lagi bergantung pada Hamburg-Bremen.'),
        ev(1152, 'Keuskupan agung Nidaros', 'Trondheim menjadi pusat gereja Norwegia, Islandia, dan koloni Atlantik utara.', true),
        ev(1220, 'Snorri Sturluson', 'Politisi dan penyair Islandia ini menyusun Edda Prosa dan Heimskringla, sumber utama mitologi dan sejarah raja Norwegia; ia dibunuh pada 1241.', true),
        ev(1262, 'Islandia tunduk pada Norwegia', 'Setelah perang saudara antarkepala keluarga, Islandia menerima raja Norwegia.'),
        ev(1319, 'Magnus Eriksson', 'Raja muda ini mewarisi mahkota Norwegia dan Swedia sekaligus.'),
        ev(1350, 'Maut Hitam di Norwegia', 'Wabah menewaskan sebagian besar penduduk dan melemahkan bangsawan serta gereja Norwegia; tahun ini perkiraan.', true),
        ev(1360, 'Hansa di Bergen', 'Pedagang Jerman mendirikan kantor dagang di Bryggen dan menguasai ekspor ikan kering; tahun ini perkiraan.', true),
        ev(1380, 'Norwegia dan Denmark bersatu', 'Olaf Haakonsson mewarisi mahkota kedua negeri, yang kemudian berada di bawah ibunya, Margrete.'),
        ev(1397, 'Uni Kalmar', 'Margrete I menyatukan Denmark, Norwegia, dan Swedia di bawah satu raja, Erik dari Pomerania.'),
      ],
    },
  ],
  'kievan-rus': [
    {
      story:
        'Menurut Kronik Awal, pada 862 suku-suku di utara mengundang Rurik dan saudara-saudaranya dari seberang laut untuk memerintah mereka; kisah ini ditulis dua abad kemudian dan diperdebatkan. Yang lebih pasti, pada akhir abad ke-9 sebuah negara terbentuk di sepanjang Sungai Dnieper dengan Kyiv sebagai pusatnya. Pada 988 Vladimir memilih Kristen dari Bizantium, dan sejak itu Rus\' terikat pada dunia Ortodoks.',
      chronicle: [
        ev(882, 'Oleg merebut Kyiv', 'Pangeran Novgorod ini mempersatukan jalur Dnieper dan menjadikan Kyiv pusat Rus\'.'),
        ev(907, 'Perjanjian dengan Bizantium', 'Oleg dikisahkan mengepung Konstantinopel; perjanjian dagang tercatat pada 907 dan 911.', true),
        ev(945, 'Igor dibunuh', 'Suku Drevlyan membunuh Pangeran Igor karena upeti berlebihan; janda Olga menghukum mereka dengan keras.'),
        ev(957, 'Olga dibaptis', 'Sang bupati mengunjungi Konstantinopel dan menerima baptisan, meski anaknya Svyatoslav tetap berpegang pada kepercayaan lama.', true),
        ev(965, 'Svyatoslav menghancurkan Khazar', 'Kekhanan Khazar di Volga bawah runtuh dan membuka jalur dagang bagi Rus\'.'),
        ev(988, 'Vladimir dibaptis', 'Vladimir Agung menerima Kristen Bizantium, menikahi saudari kaisar, dan memerintahkan rakyat Kyiv dibaptis di Dnieper.'),
        ev(1037, 'Katedral Hagia Sophia di Kyiv', 'Yaroslav membangun katedral dengan mosaik emas, lambang kemegahan Kyiv.', true),
        ev(1054, 'Yaroslav Bijaksana wafat', 'Hukum Russkaya Pravda mulai tersusun pada masa ini; wilayahnya dibagi di antara putra-putranya.', true),
        ev(1147, 'Moskwa pertama disebut', 'Kronik menyebut sebuah desa di tepi sungai Moskwa sebagai tempat pertemuan para pangeran.'),
        ev(1169, 'Kyiv dijarah', 'Andrei Bogolyubsky dari Vladimir-Suzdal menjarah Kyiv, tanda bergesernya kekuatan ke timur laut.'),
        ev(1223, 'Pertempuran Kalka', 'Pasukan Mongol mengalahkan koalisi pangeran Rus\' dan Kipchak di dekat Laut Azov.'),
        ev(1240, 'Kyiv dihancurkan Mongol', 'Pasukan Batu Khan merebut Kyiv pada Desember; banyak penduduk tewas atau melarikan diri.'),
      ],
    },
    {
      story:
        'Selama dua abad lebih para pangeran Rus\' harus mengunjungi Sarai untuk memperoleh surat izin memerintah dari khan. Namun Novgorod tetap berdagang dengan Hansa, dan Moskwa tumbuh dari kota kecil menjadi pemungut upeti untuk khan. Kemenangan di Kulikovo tidak langsung membebaskan Rus\', tetapi menumbuhkan keyakinan bahwa Gerombolan Emas bisa dikalahkan.',
      chronicle: [
        ev(1242, 'Pertempuran Danau Peipus', 'Alexander Nevsky dari Novgorod mengalahkan Ordo Teutonik di atas es danau.'),
        ev(1263, 'Alexander Nevsky wafat', 'Pangeran yang tunduk kepada khan demi menahan Barat ini kelak dihormati sebagai santo Ortodoks.'),
        ev(1325, 'Metropolit pindah ke Moskwa', 'Kepala Gereja Rus\' menetap di Moskwa dan memperkuat kedudukan kota ini.'),
        ev(1327, 'Pemberontakan Tver', 'Rakyat Tver membunuh utusan khan; Ivan Kalita dari Moskwa membantu menghukumnya dan memperoleh gelar pangeran agung.'),
        ev(1345, 'Sergius dari Radonezh', 'Biarawan ini mendirikan biara Trinitas di hutan utara Moskwa dan menjadi tokoh spiritual Rus\'.', true),
        ev(1380, 'Pertempuran Kulikovo', 'Dmitry Donskoy memimpin koalisi pangeran dan mengalahkan panglima Mamai di tepi Sungai Don.'),
        ev(1382, 'Tokhtamysh membakar Moskwa', 'Khan Gerombolan Emas menghukum Moskwa dan memulihkan pembayaran upeti.'),
        ev(1453, 'Jatuhnya Konstantinopel', 'Setelah Utsmaniyah merebut kota itu, Moskwa kelak dipandang sebagai "Roma Ketiga"; gagasan ini baru dirumuskan biarawan Filofey sekitar 1510.'),
        ev(1478, 'Novgorod ditaklukkan', 'Ivan III menghapus kemerdekaan republik dagang Novgorod dan membawa lonceng veche ke Moskwa.'),
        ev(1480, 'Berdiri di Sungai Ugra', 'Pasukan Ivan III dan Khan Akhmat berhadapan tanpa bertempur, lalu khan mundur; tahun ini lazim dipandang akhir kuk Tatar.'),
      ],
    },
    {
      story:
        'Ivan III menyatukan wilayah sekitar Moskwa dan cucunya, Ivan IV, dinobatkan sebagai tsar pertama pada 1547. Rusia bergerak ke timur sampai Samudra Pasifik, dipandu pemburu bulu dan Cossack, sementara perang di barat terus berlangsung. Petrus I membawa Rusia lebih dekat ke Eropa Barat dan menutup masa ini dengan gelar kaisar.',
      chronicle: [
        ev(1547, 'Ivan IV dinobatkan tsar', 'Ivan "yang Mengerikan" memakai gelar tsar dan kemudian membentuk oprichnina yang menindas bangsawan.'),
        ev(1552, 'Kazan direbut', 'Penaklukan khanat Tatar di Volga membuka jalur ke Siberia dan Kaspia.'),
        ev(1582, 'Yermak ke Siberia', 'Cossack di bawah Yermak mengalahkan Khan Kuchum dan membuka Siberia barat bagi Rusia.'),
        ev(1598, 'Masa Kekacauan', 'Dinasti Rurik berakhir; kelaparan, perang saudara, dan campur tangan Polandia berlangsung hingga 1613.'),
        ev(1613, 'Mikhail Romanov', 'Dewan rakyat memilih Mikhail sebagai tsar, awal dinasti Romanov.'),
        ev(1639, 'Rusia mencapai Pasifik', 'Ivan Moskvitin dan kawan-kawan mencapai Laut Okhotsk; benteng Okhotsk berdiri pada 1647.'),
        ev(1654, 'Perjanjian Pereyaslav', 'Cossack Zaporozhia di bawah Khmelnytsky menerima perlindungan tsar; tafsiran perjanjian ini masih diperdebatkan.'),
        ev(1666, 'Skisma Raskol', 'Gereja Ortodoks Rusia memecah antara pendukung pembaruan Patriark Nikon dan Umat Percaya Lama.'),
        ev(1682, 'Petrus I naik takhta', 'Petrus memerintah bersama saudara tirinya dan kemudian sendiri, lalu memodernisasi tentara.'),
        ev(1703, 'Saint Petersburg didirikan', 'Petrus membangun ibu kota baru di rawa Sungai Neva sebagai jendela ke Eropa.'),
        ev(1709, 'Pertempuran Poltava', 'Petrus mengalahkan Karel XII dari Swedia di Ukraina, titik balik Perang Utara Besar.'),
        ev(1721, 'Perdamaian Nystad', 'Swedia menyerahkan wilayah Baltik; Petrus menerima gelar Kaisar Seluruh Rusia.'),
      ],
    },
  ],
  korea: [
    {
      story:
        'Menurut Samguk Sagi, kisah ini bermula ketika tiga kerajaan berdiri di semenanjung dan Manchuria selatan: Silla, Goguryeo, dan Baekje. Tahun-tahun pendiriannya berasal dari tradisi yang ditulis berabad-abad kemudian, sehingga angkanya perkiraan. Goguryeo, kerajaan penunggang kuda di utara, menahan kekaisaran Tiongkok; Baekje dan Silla belajar Buddhisme dan tulisan Tiongkok, sampai Silla bersekutu dengan Tang untuk menyatukan semenanjung.',
      chronicle: [
        ev(-57, 'Silla berdiri (tradisi)', 'Samguk Sagi menyebut Hyeokgeose sebagai pendiri Silla di Gyeongju; tahun ini kisah tradisi.', true),
        ev(-37, 'Goguryeo berdiri (tradisi)', 'Menurut tradisi Jumong mendirikan Goguryeo di lembah Sungai Yalu tengah.', true),
        ev(-18, 'Baekje berdiri (tradisi)', 'Onjo, putra Jumong menurut tradisi, mendirikan Baekje di sekitar Seoul sekarang.', true),
        ev(372, 'Buddhisme masuk Goguryeo', 'Seorang biarawan dari kerajaan Qin Awal membawa kitab dan arca Buddha ke istana Goguryeo.'),
        ev(384, 'Buddhisme di Baekje', 'Biarawan Marananta dari Jin Timur tiba di Baekje dan diterima raja.'),
        ev(414, 'Stela Gwanggaeto', 'Putra Raja Gwanggaeto mendirikan prasasti raksasa yang memuat riwayat penaklukan ayahnya.'),
        ev(427, 'Goguryeo pindah ke Pyongyang', 'Raja Jangsu memindahkan ibu kota ke selatan, menekan Baekje dan Silla.'),
        ev(527, 'Silla menerima Buddhisme', 'Menurut tradisi, pejabat Ichadon rela dihukum mati demi meyakinkan raja; kematiannya dianggap mukjizat.'),
        ev(612, 'Pertempuran Salsu', 'Jenderal Eulji Mundeok mengalahkan pasukan besar Sui, yang kemudian runtuh.'),
        ev(660, 'Baekje ditaklukkan', 'Pasukan Silla dan Tang merebut ibu kota Baekje, Sabi.'),
        ev(668, 'Goguryeo jatuh', 'Tang dan Silla menaklukkan Pyongyang setelah perang bertahun-tahun.'),
      ],
    },
    {
      story:
        'Silla menyatukan sebagian besar semenanjung dengan mengusir tentara Tang yang ingin menduduki wilayah Goguryeo. Di utara, bekas rakyat Goguryeo dan Mohe mendirikan Balhae. Dalam kemakmuran Gyeongju berdiri Bulguksa dan Seokguram, tetapi bangsawan bertikai dan para panglima lokal melepaskan diri hingga Silla runtuh.',
      chronicle: [
        ev(676, 'Tang diusir dari semenanjung', 'Silla mengalahkan pasukan Tang di sekitar sungai Geumgang dan menguasai wilayah selatan Taedong.'),
        ev(682, 'Gukhak didirikan', 'Akademi nasional untuk mengajarkan klasik Konfusian berdiri di Gyeongju.'),
        ev(698, 'Balhae berdiri', 'Dae Joyeong mendirikan negara di bekas wilayah Goguryeo dan Mohe, menyebut dirinya penerus Goguryeo.'),
        ev(735, 'Tang mengakui batas Silla', 'Kaisar Tang secara resmi menyerahkan wilayah selatan Sungai Taedong kepada Silla.'),
        ev(751, 'Bulguksa dan Seokguram', 'Perdana Menteri Kim Daeseong memulai pembangunan kuil dan gua Buddha yang kini situs UNESCO.', true),
        ev(828, 'Jang Bogo di Cheonghaejin', 'Laksamana asal rakyat biasa ini mendirikan pangkalan di pulau Wando dan menguasai perdagangan laut antara Korea, Tiongkok, dan Jepang.', true),
        ev(892, 'Tiga Kerajaan Akhir', 'Gyeon Hwon dan Gung Ye memberontak dan mendirikan Baekje Akhir dan Taebong, sehingga Silla menyusut menjadi sekitar Gyeongju.', true),
        ev(918, 'Wang Geon mendirikan Goryeo', 'Panglima yang disegani ini menggantikan Gung Ye dan mengambil nama Goryeo.'),
        ev(926, 'Balhae jatuh', 'Khitan menaklukkan Balhae; banyak pengungsi menyeberang ke Goryeo.'),
        ev(935, 'Silla menyerah', 'Raja Gyeongsun menyerahkan kerajaannya kepada Wang Geon tanpa pertempuran besar.'),
      ],
    },
    {
      story:
        'Wang Geon menyatukan semenanjung pada 936 dan menamai negerinya Goryeo, yang menjadi asal kata Korea. Buddhisme menjadi agama negara, ujian negara dibuka, dan seniman membuat celadon hijau kebiruan yang dikagumi Tiongkok. Negeri ini bertahan menghadapi Khitan dan Mongol, tetapi tunduk pada Yuan setelah perang yang panjang.',
      chronicle: [
        ev(936, 'Semenanjung disatukan', 'Wang Geon mengalahkan Baekje Akhir dan menyatukan seluruh semenanjung.'),
        ev(958, 'Ujian negara dibuka', 'Raja Gwangjong memperkenalkan ujian pejabat gaya Tiongkok untuk mengimbangi bangsawan.'),
        ev(993, 'Perang dengan Khitan dimulai', 'Dinasti Liao menyerbu Goryeo; diplomat Seo Hui berhasil berunding hingga Khitan mundur.'),
        ev(1019, 'Kemenangan Gwiju', 'Jenderal Gang Gam-chan menghancurkan pasukan Khitan dalam pertempuran besar terakhir perang ini.'),
        ev(1087, 'Tripitaka pertama selesai', 'Ukiran kitab suci Buddha berbalok kayu pertama rampung, namun kemudian terbakar saat invasi Mongol.'),
        ev(1170, 'Kudeta militer', 'Para jenderal menggulingkan pejabat sipil dan menguasai pemerintahan selama sekitar satu abad.'),
        ev(1231, 'Invasi Mongol', 'Pasukan Mongol menyerbu Goryeo; istana mengungsi ke Pulau Ganghwa.'),
        ev(1236, 'Tripitaka Koreana', 'Pengukiran ulang kitab Buddha pada 81.258 balok kayu dimulai di Ganghwa dan rampung pada 1251; kini disimpan di Haeinsa.'),
        ev(1270, 'Goryeo tunduk pada Yuan', 'Raja kembali ke Gaegyeong dan menjadi menantu kaisar Mongol.'),
        ev(1274, 'Invasi ke Jepang', 'Goryeo dipaksa menyediakan kapal dan prajurit untuk serangan Mongol ke Jepang pada 1274 dan 1281.'),
        ev(1377, 'Jikji dicetak', 'Biara Heungdeok di Cheongju mencetak ajaran Zen dengan huruf logam bergerak, buku cetak logam tertua yang masih ada.'),
        ev(1392, 'Yi Seong-gye mengambil takhta', 'Jenderal Yi mengakhiri Goryeo dan mendirikan dinasti baru.'),
      ],
    },
    {
      story:
        'Yi Seong-gye mendirikan Joseon dan menjadikan Hanyang (Seoul) ibu kota. Negara dibentuk berdasarkan Neo-Konfusianisme, dengan bangsawan yangban sebagai pejabat dan sarjana. Raja Sejong menciptakan alfabet Hangul, Perang Imjin hampir menghancurkan negeri, dan abad ke-19 membawa tekanan asing sampai Jepang menguasai semenanjung.',
      chronicle: [
        ev(1392, 'Taejo mendirikan Joseon', 'Yi Seong-gye menamai kerajaannya Joseon dan mendapat pengakuan dari Ming.'),
        ev(1394, 'Hanyang jadi ibu kota', 'Istana Gyeongbok dan tembok kota dibangun di lembah Sungai Han.'),
        ev(1443, 'Hangul diciptakan', 'Raja Sejong dan para sarjananya menyusun alfabet fonetik; Hunminjeongeum diumumkan pada 1446.'),
        ev(1592, 'Perang Imjin dimulai', 'Toyotomi Hideyoshi menyerbu Korea; Seoul jatuh dalam waktu singkat dan gerilyawan rakyat melawan.'),
        ev(1597, 'Pertempuran Myeongnyang', 'Laksamana Yi Sun-sin dengan armada kecil mengalahkan armada Jepang yang jauh lebih besar di selat sempit; kapal kura-kura (geobukseon) sering dikaitkan dengan pelayarannya.'),
        ev(1636, 'Invasi Qing', 'Pasukan Qing menyerbu Joseon dan Raja Injo harus bersujud di Samjeondo.'),
        ev(1776, 'Jeongjo dan Gyujanggak', 'Raja pembaru ini mendirikan perpustakaan kerajaan dan mengangkat sarjana berbakat tanpa memandang asal.'),
        ev(1876, 'Perjanjian Ganghwa', 'Jepang memaksa Joseon membuka pelabuhan melalui perjanjian yang tidak setara.'),
        ev(1894, 'Pemberontakan Donghak', 'Petani yang memberontak karena pajak dan korupsi memicu campur tangan Tiongkok dan Jepang.'),
        ev(1897, 'Kekaisaran Korea', 'Raja Gojong mengangkat dirinya kaisar untuk menegaskan kemerdekaan.'),
        ev(1910, 'Aneksasi Jepang', 'Jepang mencaplok Korea; masa penjajahan berlangsung hingga 1945.'),
      ],
    },
  ],
  'jepang-klasik': [
    {
      story:
        'Kisah ini bermula ketika para pemimpin klan di dataran Yamato dikubur dalam makam berbentuk lubang kunci dan pemimpin tertingginya kelak disebut tenno. Lewat Korea dan Tiongkok masuklah Buddhisme, aksara, dan tata negara. Pada abad ke-7 negara mulai menata tanah, pajak, dan hukum gaya Tang, dan pada 710 berdiri ibu kota tetap pertama di Nara.',
      chronicle: [
        ev(250, 'Makam kofun', 'Pemimpin Yamato mulai dikubur di bukit makam berbentuk lubang kunci; yang terbesar, makam Daisen, kini dikaitkan dengan penguasa abad ke-5.', true),
        ev(538, 'Buddhisme dari Baekje', 'Raja Baekje mengirim arca dan sutra Buddha ke istana Yamato; Nihon Shoki menyebut tahun 552, sedangkan sumber lain 538.', true),
        ev(593, 'Pangeran Shotoku menjadi bupati', 'Bupati bagi Ratu Suiko ini mendorong Buddhisme dan pemerintahan bergaya Tiongkok.'),
        ev(604, 'Konstitusi 17 Pasal', 'Teks yang dikaitkan dengan Shotoku menekankan keselarasan dan kesetiaan kepada penguasa; keasliannya dibahas sejarawan.'),
        ev(607, 'Horyu-ji', 'Kuil di Nara yang menurut tradisi didirikan Shotoku; kini bangunan kayu tertua di dunia.'),
        ev(645, 'Reformasi Taika', 'Klan Soga disingkirkan dan pemerintah pusat memulai reformasi tanah dan pajak.'),
        ev(663, 'Pertempuran Hakusukinoe', 'Pasukan Jepang dan Baekje kalah dari Silla dan Tang di muara Sungai Geum.'),
        ev(710, 'Ibu kota Nara', 'Heijo-kyo, yang dibangun mengikuti Chang\'an, menjadi ibu kota tetap pertama.'),
        ev(712, 'Kojiki', 'Kumpulan mitos dan silsilah kaisar ini disusun atas perintah istana.'),
        ev(720, 'Nihon Shoki', 'Kronik resmi sejarah Jepang dalam bahasa Tionghoa klasik selesai.'),
        ev(752, 'Daibutsu Todai-ji', 'Arca Buddha perunggu raksasa diresmikan setelah ribuan pekerja menyumbang tenaga dan bahan.'),
      ],
    },
    {
      story:
        'Kaisar Kammu memindahkan ibu kota ke Heian-kyo, yang kelak disebut Kyoto, dan negeri ini diperintah dari sana selama empat abad. Kaum bangsawan istana menciptakan kana dan sastra yang indah, sementara keluarga Fujiwara memerintah sebagai bupati. Di daerah, kelas prajurit tumbuh, hingga perang Genpei menyingkirkan Taira.',
      chronicle: [
        ev(794, 'Heian-kyo', 'Kaisar Kammu memindahkan ibu kota ke tempat yang kelak bernama Kyoto.'),
        ev(805, 'Saicho dan Kukai', 'Dua biarawan pulang dari Tiongkok dan mendirikan aliran Tendai dan Shingon pada 805 dan 806.'),
        ev(894, 'Misi ke Tang dihentikan', 'Sugawara no Michizane mengusulkan penghentian misi resmi ke Tiongkok; budaya Jepang makin mandiri.'),
        ev(900, 'Kana', 'Aksara suku kata berkembang dan memungkinkan sastra berbahasa Jepang, terutama oleh perempuan istana.', true),
        ev(1002, 'Makura no Soshi', 'Sei Shonagon menulis catatan pengamatan tajam tentang kehidupan istana.', true),
        ev(1008, 'Hikayat Genji', 'Murasaki Shikibu menulis kisah Pangeran Genji, sering disebut novel pertama dunia.', true),
        ev(1016, 'Fujiwara no Michinaga', 'Pemimpin keluarga ini menjadi bupati dan menikahkan putri-putrinya dengan kaisar.'),
        ev(1053, 'Byodo-in', 'Aula Phoenix di Uji dibangun sebagai lambang kepercayaan Tanah Murni.'),
        ev(1180, 'Perang Genpei dimulai', 'Klan Minamoto bangkit melawan Taira yang berkuasa di istana.'),
        ev(1185, 'Dan-no-ura', 'Armada Taira dikalahkan di selat Shimonoseki; kaisar kecil Antoku tenggelam.'),
      ],
    },
    {
      story:
        'Setelah kemenangan Minamoto, kekuasaan sebenarnya berada pada shogun di Kamakura dan para samurai. Jepang menolak dua invasi Mongol, tetapi pemerintah melemah, dan Perang Onin menjerumuskan negeri ke dalam seabad perang antardaimyo. Tiga pemersatu, Nobunaga, Hideyoshi, dan Ieyasu, mengakhiri kekacauan itu.',
      chronicle: [
        ev(1192, 'Yoritomo menjadi shogun', 'Minamoto no Yoritomo menerima gelar shogun dan memerintah dari Kamakura.'),
        ev(1274, 'Invasi Mongol pertama', 'Armada Mongol dan Goryeo mendarat di Hakata dan mundur setelah badai.'),
        ev(1281, 'Invasi Mongol kedua', 'Armada besar dihancurkan taifun, yang kemudian disebut kamikaze (angin ilahi).'),
        ev(1333, 'Kamakura runtuh', 'Kaisar Go-Daigo dan Ashikaga Takauji menyingkirkan Hojo; Ashikaga lalu mengangkat shogun baru pada 1338.'),
        ev(1397, 'Kinkaku-ji', 'Shogun Ashikaga Yoshimitsu membangun paviliun emas di Kyoto.'),
        ev(1467, 'Perang Onin', 'Perang sengketa suksesi menghancurkan Kyoto dan membuka zaman Sengoku.'),
        ev(1543, 'Senapan di Tanegashima', 'Pelaut Portugis tiba di pulau selatan Kyushu dan Jepang segera membuat senapan sendiri.'),
        ev(1549, 'Fransiskus Xaverius', 'Misionaris Yesuit tiba di Kagoshima dan memperkenalkan Kristen.'),
        ev(1575, 'Pertempuran Nagashino', 'Oda Nobunaga memakai penembak senapan berbaris untuk mengalahkan pasukan berkuda Takeda.'),
        ev(1590, 'Hideyoshi menyatukan Jepang', 'Toyotomi Hideyoshi menaklukkan Odawara dan menguasai seluruh negeri.'),
        ev(1592, 'Invasi ke Korea', 'Hideyoshi mengirim pasukan ke Korea; perang berakhir 1598 setelah wafatnya sang penguasa.'),
        ev(1600, 'Sekigahara', 'Tokugawa Ieyasu mengalahkan koalisi barat dan menjadi penguasa de facto Jepang.'),
      ],
    },
    {
      story:
        'Tokugawa Ieyasu mendirikan keshogunan di Edo dan keluarganya memerintah selama sekitar 265 tahun. Masyarakat dibagi menjadi samurai, petani, pengrajin, dan pedagang; perang berhenti, kota-kota tumbuh, dan seni populer berkembang. Jepang menutup hubungan dengan hampir semua bangsa Eropa, tetapi kapal Perry pada 1853 mengakhiri isolasi itu.',
      chronicle: [
        ev(1603, 'Ieyasu menjadi shogun', 'Tokugawa Ieyasu menerima gelar dari kaisar dan membangun pusat pemerintahan di Edo.'),
        ev(1635, 'Sankin-kotai', 'Para daimyo diwajibkan tinggal bergantian di Edo dan meninggalkan keluarga sebagai sandera.'),
        ev(1637, 'Pemberontakan Shimabara', 'Petani, banyak di antaranya Kristen, memberontak karena pajak berat dan ditumpas keras.'),
        ev(1639, 'Sakoku', 'Bangsa Portugis diusir; hanya Belanda (VOC) dan Tiongkok boleh berdagang di Nagasaki, orang Belanda di pulau buatan Dejima. VOC mengirim kapal dari markasnya di Batavia.'),
        ev(1688, 'Zaman Genroku', 'Pedagang kaya Osaka dan Edo menyokong kabuki, boneka bunraku, dan puisi haiku Matsuo Basho; zaman ini berlangsung hingga 1704.', true),
        ev(1774, 'Kaitai Shinsho', 'Sugita Genpaku menerjemahkan buku anatomi Belanda, tonggak rangaku (ilmu Belanda).'),
        ev(1831, 'Ombak Besar', 'Hokusai membuat cetakan Ombak Besar di Kanagawa dari seri Tiga Puluh Enam Pemandangan Gunung Fuji; tahun ini perkiraan.', true),
        ev(1853, 'Komodor Perry', 'Kapal-kapal uap Amerika tiba di Teluk Edo menuntut pembukaan pelabuhan.'),
        ev(1854, 'Perjanjian Kanagawa', 'Jepang membuka dua pelabuhan bagi kapal Amerika.'),
        ev(1867, 'Taisei Hokan', 'Shogun Yoshinobu mengembalikan kekuasaan kepada kaisar.'),
        ev(1868, 'Restorasi Meiji', 'Kekuatan pro-kaisar menang dan era Meiji dimulai; Edo menjadi Tokyo.'),
      ],
    },
  ],
  etiopia: [
    {
      story:
        'Setelah Aksum meredup, pusat kekuasaan bergeser ke pegunungan Lasta dan Tigray. Tradisi menceritakan seorang ratu bernama Gudit menghancurkan Aksum, tetapi sumber tertulis dari masa itu sedikit dan para sejarawan masih berdebat tentang peristiwa-peristiwanya. Dinasti Zagwe, penganut Kristen Ortodoks, memahat gereja-gereja dari batu hidup di Lalibela dan menjadikannya Yerusalem Baru bagi umat Etiopia.',
      chronicle: [
        ev(940, 'Aksum runtuh (legenda Gudit)', 'Tradisi menyebut ratu Gudit membakar Aksum; sebab sebenarnya mungkin campuran perubahan iklim, perdagangan, dan perang.', true),
        ev(1000, 'Pusat bergeser ke selatan', 'Kekuasaan dan penduduk berpindah dari Aksum ke dataran tinggi tengah Etiopia; tahun ini perkiraan.', true),
        ev(1137, 'Zagwe berkuasa', 'Mara Takla Haymanot mendirikan dinasti Zagwe dari wilayah Lasta; tahun ini perkiraan.', true),
        ev(1181, 'Raja Lalibela', 'Raja yang kelak dikenang namanya memerintah sekitar 1181 sampai 1221 dan membangun gereja-gereja pahatan batu di Roha, kini Lalibela.', true),
        ev(1200, 'Sebelas gereja Lalibela', 'Gereja-gereja monolit, seperti Bete Giyorgis berbentuk salib, dipahat ke bawah dari batu vulkanik; penanggalan pastinya perkiraan.', true),
        ev(1248, 'Debre Hayq', 'Biarawan Iyasus Moa mendirikan biara yang menjadi pusat bagi penerus Solomonik; penanggalan perkiraan.', true),
        ev(1270, 'Yekuno Amlak', 'Penguasa Amhara ini menggulingkan Zagwe dan mengaku keturunan Raja Salomo.'),
      ],
    },
    {
      story:
        'Yekuno Amlak mendirikan dinasti yang mengklaim keturunan Raja Salomo dan Ratu Syeba, kisah yang ditulis dalam Kebra Nagast. Raja-raja Solomonik memerintah dengan istana berpindah-pindah dan memperluas wilayah ke selatan. Mereka berperang dengan kesultanan Muslim di timur, hingga Ahmad Gragn hampir menaklukkan seluruh negeri dan dihentikan dengan bantuan Portugis.',
      chronicle: [
        ev(1270, 'Dinasti Solomonik', 'Yekuno Amlak naik takhta dan menyatakan garis keturunan dari Salomo.'),
        ev(1314, 'Amda Seyon', 'Raja ini memerangi Ifat dan Adal serta memperluas wilayah, dan kemenangannya dicatat dalam kronik kerajaan.'),
        ev(1320, 'Kebra Nagast', 'Naskah legenda asal dinasti, kisah Salomo, Syeba, dan Menelik, dikumpulkan pada masa ini; tahun ini perkiraan.', true),
        ev(1434, 'Zara Yaqob', 'Raja ini memperkuat gereja, mengatur doktrin, dan menuliskan karya teologi.'),
        ev(1520, 'Misi Portugis', 'Duta Rodrigo de Lima bersama pastor Francisco Álvares tiba di istana dan kelak menulis buku tentang Etiopia.'),
        ev(1527, 'Perang Gragn dimulai', 'Imam Ahmad ibn Ibrahim al-Ghazi, dijuluki Gragn (si Kidal), menyerbu dataran tinggi dengan pasukan dari Adal.'),
        ev(1529, 'Pertempuran Shimbra Kure', 'Pasukan Adal menang atas tentara kaisar dan membuka jalan menaklukkan sebagian besar Etiopia.'),
        ev(1541, 'Cristóvão da Gama', 'Pasukan Portugis dengan senapan mendarat di Massawa untuk membantu kaisar.'),
        ev(1543, 'Gragn tewas di Wayna Daga', 'Pasukan gabungan Etiopia dan Portugis mengalahkan Adal; Gragn tewas di medan.'),
        ev(1550, 'Migrasi Oromo', 'Orang Oromo bergerak ke utara dari selatan dan mengubah susunan penduduk dataran tinggi; penanggalan perkiraan.', true),
        ev(1622, 'Susenyos masuk Katolik', 'Raja menerima Katolik di bawah pengaruh Yesuit, yang memicu pemberontakan rakyat Ortodoks.'),
        ev(1632, 'Susenyos turun takhta', 'Setelah perang saudara, raja menyerahkan takhta kepada putranya Fasilides dan Ortodoksi dipulihkan.'),
      ],
    },
    {
      story:
        'Fasilides mengusir para Yesuit dan membangun Gondar sebagai ibu kota tetap. Istana batu bergaya campuran Etiopia, Arab, dan India menjadi pusat seni, gereja, dan perdagangan. Pada abad ke-18 kekuasaan raja merosot ke tangan para ras (panglima), dan Zemene Mesafint, Zaman Para Pangeran, berlangsung sampai Tewodros II.',
      chronicle: [
        ev(1632, 'Fasilides naik takhta', 'Raja memulihkan Ortodoksi dan mengusir para misionaris Katolik.'),
        ev(1636, 'Gondar didirikan', 'Fasilides membangun Fasil Ghebbi, kompleks benteng-istana yang kelak menjadi ibu kota selama dua abad.'),
        ev(1682, 'Iyasu I', 'Raja ini memerintah dengan adil dan membangun banyak gereja, dikenal sebagai Iyasu Agung.'),
        ev(1706, 'Iyasu I dibunuh', 'Setelah perselisihan dengan para pejabat dan rohaniwan, sang raja dibunuh atau diturunkan oleh lingkaran istananya.'),
        ev(1755, 'Iyasu II wafat', 'Ibu suri Mentewab memegang pengaruh besar atas istana sampai kematiannya pada 1773.'),
        ev(1769, 'Zemene Mesafint', 'Ras Mikael Sehul membunuh raja Iyoas dan mengangkat raja boneka; kekuasaan pusat memudar selama sekitar 80 tahun.'),
        ev(1770, 'James Bruce di Gondar', 'Penjelajah Skotlandia mengunjungi istana dan menulis catatan tentang negeri ini.'),
        ev(1855, 'Tewodros II dinobatkan', 'Kasa Hailu mengalahkan para ras dan dinobatkan kaisar, menyatukan kembali negeri.'),
      ],
    },
  ],
  'afrika-timur-selatan': [
    {
      story:
        'Pada mulanya orang Soninke di Sahel mengorganisasi dagang emas dan garam di bawah seorang raja yang disebut ghana, gelar yang kemudian dipakai orang Arab sebagai nama negeri. Kota dagang Koumbi Saleh, menurut al-Bakri, terdiri atas dua kota: satu bagi raja dan satu bagi pedagang Muslim. Ghana kuno berbeda dari negara Ghana modern, yang meminjam namanya pada 1957.',
      chronicle: [
        ev(300, 'Wagadu terbentuk', 'Menurut tradisi lisan Soninke, wangsa Wagadu mulai berdiri; tahun ini perkiraan.', true),
        ev(800, 'Al-Fazari menyebut Ghana', 'Ahli astronomi dari Baghdad ini menyebut "Ghana, negeri emas"; tahun ini perkiraan.', true),
        ev(990, 'Awdaghust direbut', 'Ghana menguasai kota dagang di Sahara selatan, jalur penting garam dan emas; tahun ini perkiraan.', true),
        ev(1000, 'Puncak kejayaan', 'Ghana mencapai wilayah terluas dengan Koumbi Saleh sebagai ibu kota; tahun ini perkiraan.', true),
        ev(1040, 'Gerakan Almoravid', 'Abdallah ibn Yasin mendirikan ribat di tepi Sahara dan menyebarkan gerakan pembaru di antara orang Sanhaja; tahun ini perkiraan.', true),
        ev(1068, 'Al-Bakri menggambarkan Ghana', 'Penulis dari Andalusia ini menceritakan kota kembar dan raja berhias emas, berdasarkan keterangan para pedagang.'),
        ev(1076, 'Koumbi Saleh direbut Almoravid', 'Menurut tradisi, Abu Bakr ibn Umar merebut ibu kota; para sejarawan masih berdebat tentang sejauh mana penaklukan ini terjadi.'),
      ],
    },
    {
      story:
        'Di timur dan selatan, emas dari plato Zimbabwe mengalir ke kota-kota pelabuhan Swahili yang menghubungkan Afrika dengan Arab, Persia, India, dan Tiongkok. Kilwa dan Mogadishu tumbuh menjadi kota batu karang yang makmur. Di pedalaman, orang Shona membangun Zimbabwe Raya, kota batu terbesar di Afrika sub-Sahara pada zamannya, dan membantah mitos kolonial yang menyangkal bahwa orang Afrika yang membangunnya.',
      chronicle: [
        ev(1100, 'Mapungubwe', 'Kerajaan di lembah Limpopo tumbuh dari perdagangan emas dan gading; tahun ini perkiraan.', true),
        ev(1200, 'Kilwa di bawah dinasti Shirazi', 'Pusat dagang di pulau ini memerintah pesisir selatan dan memonopoli emas Sofala; tahun ini perkiraan.', true),
        ev(1220, 'Mapungubwe ditinggalkan', 'Pusat kekuasaan beralih ke Zimbabwe Raya; tahun ini perkiraan.', true),
        ev(1300, 'Masjid Agung dan Husuni Kubwa', 'Masjid Agung Kilwa diperluas dan istana Husuni Kubwa dibangun di atas tebing karang; tahun ini perkiraan.', true),
        ev(1331, 'Ibnu Battuta di pesisir Swahili', 'Penjelajah dari Tangier mengunjungi Mogadishu dan Kilwa dan menggambarkan kota-kota yang makmur dan saleh.'),
        ev(1350, 'Puncak Zimbabwe Raya', 'Enklosur Agung bertembok granit tanpa adukan, setinggi sampai sekitar 11 meter, dibangun orang Shona; porselen Tiongkok dan manik kaca ditemukan di sana. Tahun ini perkiraan.', true),
        ev(1418, 'Armada Zheng He', 'Kapal-kapal Ming mengunjungi pesisir Afrika Timur termasuk Malindi pada pelayaran 1417–1419; jerapah dari Afrika sudah dipersembahkan ke istana Ming pada 1414 lewat Bengal.', true),
        ev(1450, 'Zimbabwe Raya ditinggalkan', 'Penghuninya pindah, mungkin karena menipisnya lahan dan kayu bakar serta bergesernya rute emas; tahun ini perkiraan.', true),
      ],
    },
    {
      story:
        'Dari bekas wilayah Zimbabwe, kerajaan Mutapa berdiri di lembah Zambezi dan mengendalikan emas serta gading menuju pantai. Portugis, yang tiba pada 1498, menjarah kota-kota Swahili dan berusaha menguasai perdagangan. Perlawanan Rozvi pada 1693 dan Oman pada 1698 mengusir mereka dari sebagian besar wilayah ini.',
      chronicle: [
        ev(1450, 'Mutapa berdiri', 'Nyatsimba Mutota mendirikan kerajaan di lembah Zambezi, yang dikenal orang Portugis sebagai Monomotapa; tahun ini perkiraan.', true),
        ev(1498, 'Vasco da Gama di Malindi', 'Pelaut Portugis mencapai Mozambik dan Malindi dalam perjalanan ke India; penguasa Malindi menyediakan juru mudi.'),
        ev(1505, 'Kilwa dan Mombasa dijarah', 'Armada Francisco de Almeida menjarah Kilwa dan Mombasa, lalu mendirikan benteng di Kilwa.'),
        ev(1569, 'Ekspedisi Barreto', 'Portugis mengirim ekspedisi ke kerajaan Mutapa untuk menguasai tambang emas, tetapi menderita penyakit dan kegagalan.'),
        ev(1593, 'Fort Jesus', 'Portugis memulai pembangunan benteng besar di Mombasa untuk melindungi kekuasaan mereka.'),
        ev(1629, 'Mutapa tunduk pada Portugis', 'Raja Mavura menyetujui perjanjian yang menjadikan Mutapa negara pelindung Portugis.'),
        ev(1693, 'Changamire Dombo', 'Pendiri negara Rozvi mengalahkan pasukan Portugis dan mengusir mereka dari dataran tinggi.'),
        ev(1698, 'Oman merebut Fort Jesus', 'Setelah pengepungan sekitar dua tahun, pasukan Oman menguasai Mombasa.'),
      ],
    },
  ],
};
