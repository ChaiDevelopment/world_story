import { ev, type ChronicleBook } from './chronicle';

/** Kronik periode Asia Tenggara daratan dan Persia–Asia Tengah (urutan = indeks `territories`). */
export const chroniclesAsia2: ChronicleBook = {
  'dai-viet': [
    {
      story:
        'Kisah ini bermula pada 938, ketika Ngo Quyen menancapkan tonggak kayu di dasar Sungai Bach Dang dan menghancurkan armada Han Selatan saat air surut. Setahun kemudian ia menyatakan diri raja, mengakhiri seribu tahun pemerintahan Tiongkok atas Delta Sungai Merah. Berabad-abad kemudian, para raja Ly dan Tran membangun Thang Long, menahan Song dan Mongol, hingga Le Loi mengusir pendudukan Ming pada 1428.',
      chronicle: [
        ev(939, 'Ngo Quyen menjadi raja', 'Setelah kemenangan di Bach Dang (938), Ngo Quyen menyatakan diri raja dan memerintah dari Co Loa.'),
        ev(968, 'Dinh Bo Linh dan Dai Co Viet', 'Setelah masa kacau dua belas panglima, Dinh Bo Linh menyatukan negeri dan memakai nama Dai Co Viet.'),
        ev(1009, 'Dinasti Ly dan Thang Long', 'Ly Cong Uan naik takhta dan pada 1010 memindahkan ibu kota ke Thang Long, "naga yang naik", kini Hanoi.'),
        ev(1070, 'Van Mieu dan Quoc Tu Giam', 'Kuil Sastra didirikan untuk memuja Konfusius; pada 1076 Quoc Tu Giam dibuka sebagai sekolah tinggi.'),
        ev(1075, 'Ly Thuong Kiet melawan Song', 'Pasukan Ly menyerbu lebih dulu ke wilayah Song, lalu menahan serangan balasan pada 1076–1077.'),
        ev(1225, 'Dinasti Tran', 'Tran Thu Do mengatur peralihan kuasa dari Ly ke keluarga Tran lewat pernikahan dan tekanan politik.'),
        ev(1258, 'Serangan Mongol pertama', 'Pasukan Mongol dari Yunnan menjarah Thang Long, tetapi mundur karena iklim dan perlawanan.'),
        ev(1285, 'Serangan Mongol kedua', 'Tran Hung Dao memimpin perlawanan, dan pasukan Yuan yang dipimpin Toghan akhirnya mundur.'),
        ev(1288, 'Pertempuran Bach Dang', 'Armada Yuan dijebak dengan tonggak di sungai pada air surut, seperti taktik Ngo Quyen tiga abad sebelumnya.'),
        ev(1400, 'Ho Quy Ly mengambil takhta', 'Pejabat reformis Ho Quy Ly mengakhiri Dinasti Tran dan mendirikan Dinasti Ho, dengan kebijakan pajak dan uang kertas.'),
        ev(1407, 'Ming menduduki Dai Viet', 'Pasukan Ming menggulingkan Dinasti Ho dan memasukkan negeri itu ke dalam wilayah Tiongkok selama dua dekade.'),
        ev(1418, 'Le Loi memberontak', 'Le Loi, pemilik tanah dari Lam Son, mengangkat panji perlawanan dan memimpin sepuluh tahun gerilya sampai 1428.'),
      ],
    },
    {
      story:
        'Le Loi mengusir Ming pada 1428 dan mendirikan Dinasti Le, yang membawa Dai Viet pada puncak kebudayaan Konfusian. Kerajaan lalu bergerak ke selatan, menelan Champa sedikit demi sedikit, sementara keluarga Trinh dan Nguyen membagi negeri dalam perang panjang. Pemberontakan Tay Son mengguncang keduanya, dan Nguyen Anh akhirnya menyatukan negeri sebagai Gia Long pada 1802.',
      chronicle: [
        ev(1428, 'Le Loi menjadi raja', 'Menurut legenda, Le Loi mengembalikan pedang ajaib kepada Kura-kura Emas di danau yang kemudian disebut Hoan Kiem.'),
        ev(1471, 'Jatuhnya Vijaya', 'Le Thanh Tong menaklukkan ibu kota Champa dan memperluas Dai Viet ke wilayah Cham di selatan.'),
        ev(1483, 'Kode Hong Duc', 'Kitab hukum Dinasti Le yang terkenal karena memberi hak waris dan harta pada perempuan.'),
        ev(1527, 'Mac Dang Dung merebut takhta', 'Seorang panglima merebut takhta dari Le dan mendirikan Dinasti Mac.'),
        ev(1558, 'Nguyen Hoang ke selatan', 'Nguyen Hoang pergi ke wilayah selatan, dan negeri terbelah antara keluarga Trinh di utara dan Nguyen di selatan.'),
        ev(1627, 'Perang Trinh–Nguyen', 'Beberapa rangkaian perang berlangsung sampai gencatan senjata pada 1672, dengan sungai Gianh sebagai batas.'),
        ev(1651, 'Alexandre de Rhodes', 'Misionaris Yesuit menerbitkan kamus Annam–Portugis–Latin yang mendasari aksara Latin quoc ngu.'),
        ev(1698, 'Gia Dinh berdiri', 'Nguyen mendirikan pemerintahan di Gia Dinh, kini Kota Ho Chi Minh, di tanah bekas Khmer di Delta Mekong.'),
        ev(1771, 'Pemberontakan Tay Son', 'Tiga bersaudara dari Tay Son memimpin petani melawan keluarga Nguyen dan Trinh.'),
        ev(1789, 'Quang Trung di Dong Da', 'Nguyen Hue, bergelar Quang Trung, mengalahkan pasukan Qing dalam serangan kilat saat Tet.'),
        ev(1802, 'Gia Long dan Dinasti Nguyen', 'Nguyen Anh mengalahkan Tay Son dan menyatukan negeri dari Delta Merah sampai Mekong; nama Viet Nam dipakai resmi mulai 1804.'),
      ],
    },
  ],
  champa: [
    {
      story:
        'Pada mulanya, di pesisir tengah Vietnam, penutur bahasa Austronesia membangun negeri-negeri pantai yang oleh catatan Tiongkok disebut Lam Ap. Kerajaan ini mengambil aksara dan dewa dari India, mendirikan tempat suci Mỹ Sơn, dan menjual gaharu serta gading kepada kapal yang lewat. Beberapa kali Champa digempur dari utara dan dari laut, tetapi pusatnya tetap bertahan.',
      chronicle: [
        ev(192, 'Lam Ap berdiri', 'Menurut catatan Tiongkok, Ou Lian mendirikan negeri baru di bekas wilayah Han di Rinan, yang menjadi cikal bakal Champa.'),
        ev(400, 'Bhadravarman dan Mỹ Sơn', 'Prasasti Sanskerta menyebut raja yang memuja Siwa; situs suci Mỹ Sơn mulai dibangun sekitar masa ini.', true),
        ev(605, 'Sui menjarah ibu kota', 'Pasukan Sui menyerbu dan menjarah ibu kota Lam Ap, tetapi tidak menduduki negeri itu lama.'),
        ev(774, 'Serangan dari Jawa', 'Prasasti menyebut orang-orang dari laut yang membakar candi Po Nagar; serangan lain di Panduranga tercatat sekitar 787. Para sejarawan menghubungkannya dengan pelaut Jawa atau Melayu.', true),
        ev(875, 'Indrapura', 'Raja Indravarman II mendirikan dinasti baru di Indrapura dan biara Buddha Mahayana di Dong Duong.', true),
        ev(982, 'Dai Viet menjarah Indrapura', 'Pasukan Dinasti Le Awal dari Dai Viet menjarah ibu kota Champa di Indrapura.'),
        ev(1000, 'Ibu kota ke Vijaya', 'Setelah tekanan utara, pusat kerajaan dipindahkan ke Vijaya di selatan sekitar masa ini.', true),
      ],
    },
    {
      story:
        'Dari Vijaya di dekat Quy Nhon, para raja Cham berperang tak henti dengan Dai Viet di utara dan Khmer di barat. Pada 1177 pasukan Champa menaiki perahu menyusuri Sungai Mekong dan Tonle Sap lalu menjarah Angkor, tetapi Jayavarman VII membalas dan menguasai Champa selama beberapa dasawarsa. Di bawah tekanan Dai Viet dan Mongol, kerajaan itu terus menyempit hingga Vijaya jatuh pada 1471.',
      chronicle: [
        ev(1044, 'Dai Viet menyerang', 'Raja Ly Thai Tong menyerbu Champa dan menewaskan Raja Jaya Simhavarman II.'),
        ev(1177, 'Champa menjarah Angkor', 'Pasukan Cham berlayar lewat Tonle Sap dan menjarah ibu kota Khmer.'),
        ev(1190, 'Khmer menguasai Champa', 'Jayavarman VII merebut Vijaya dan menguasai Champa selama sekitar tiga dasawarsa hingga sekitar 1220.', true),
        ev(1283, 'Melawan Yuan', 'Pasukan Kubilai Khan di bawah Sogetu mendarat di Champa; Raja Indravarman V memilih bertahan di pegunungan.'),
        ev(1306, 'Pernikahan dengan putri Tran', 'Jaya Simhavarman III menikahi putri Tran dan menyerahkan wilayah O dan Ly kepada Dai Viet.'),
        ev(1371, 'Che Bong Nga menjarah Thang Long', 'Raja Che Bong Nga memimpin serangan ke utara pada 1370-an dan menjarah Thang Long beberapa kali; ia tewas pada 1390.', true),
        ev(1400, 'Hubungan dengan Majapahit', 'Menurut tradisi Babad Jawa, putri Campa menjadi istri raja Majapahit; para sejarawan menganggapnya tradisi yang tidak mudah dibuktikan.', true),
        ev(1471, 'Vijaya jatuh', 'Le Thanh Tong merebut Vijaya dan menawan Raja Tra Toan; ribuan orang Cham tewas atau menjadi tawanan.'),
      ],
    },
    {
      story:
        'Setelah Vijaya jatuh, Champa tinggal di sepetak tanah kering di selatan yang disebut Panduranga. Para rajanya membayar upeti kepada Nguyen, memuja leluhur, dan menjaga menara bata di Po Klong Garai. Islam menyebar di kalangan Cham, dan sebagian orang Cham mengungsi ke Kamboja serta Semenanjung Melayu. Pada 1832 Kaisar Minh Mang menghapus kerajaan itu.',
      chronicle: [
        ev(1471, 'Tersisa Panduranga dan Kauthara', 'Setelah Vijaya jatuh, kerajaan Cham yang tersisa mengerut ke wilayah selatan.'),
        ev(1500, 'Islam menyebar di kalangan Cham', 'Dalam beberapa abad berikutnya sebagian besar orang Cham di Panduranga dan Kamboja memeluk Islam, sementara yang lain bertahan dengan agama lama.', true),
        ev(1611, 'Kauthara hilang', 'Pasukan Nguyen merebut wilayah utara Panduranga (sekitar Phu Yen) dari Champa.'),
        ev(1627, 'Po Rome', 'Po Rome memerintah Panduranga sekitar 1627–1651 dan tercatat sebagai raja yang berusaha menahan Nguyen.', true),
        ev(1692, 'Nguyen menyerang Panduranga', 'Nguyen menyerbu dan menawan raja Cham, setelah pemberontakan di wilayah itu.'),
        ev(1697, 'Protektorat Thuan Thanh', 'Panduranga dijadikan wilayah bawahan Nguyen dengan nama Thuan Thanh.'),
        ev(1750, 'Hubungan dengan dunia Melayu', 'Pedagang dan pengungsi Cham menjalin hubungan dengan Kelantan dan Aceh; sebagian orang Cham menetap di sana.', true),
        ev(1832, 'Minh Mang menghapus Panduranga', 'Wilayah itu dihapus dan dijadikan provinsi Vietnam; keturunan Cham hidup di Vietnam dan Kamboja hingga kini.'),
      ],
    },
  ],
  'bagan-burma': [
    {
      story:
        'Kisah ini bermula di dataran kering Irrawaddy tengah, tempat sebuah kota bertembok bernama Bagan tumbuh pada abad ke-9. Anawrahta menyatukan lembah sungai, menaklukkan Thaton milik orang Mon pada 1057, dan menjadikan Buddha Theravada agama kerajaan. Selama dua abad raja, bangsawan, dan rakyat biasa menyumbang kuil hingga dataran itu dipenuhi stupa, sampai pasukan Mongol datang pada 1287.',
      chronicle: [
        ev(849, 'Tembok Bagan', 'Menurut tradisi kronik, tembok kota Bagan dibangun pada tahun ini; data arkeologi menyebut permukiman jauh lebih awal.', true),
        ev(1044, 'Anawrahta naik takhta', 'Anawrahta mulai menyatukan lembah Irrawaddy dan membangun irigasi.'),
        ev(1057, 'Penaklukan Thaton', 'Anawrahta menaklukkan kerajaan Mon di Thaton dan membawa naskah, biksu, serta pengrajin ke Bagan; Theravada menjadi agama kerajaan.'),
        ev(1084, 'Kyansittha', 'Kyansittha, panglima Anawrahta, naik takhta dan membangun hubungan dengan India dan Sri Lanka.'),
        ev(1100, 'Ribuan kuil', 'Lebih dari 10.000 kuil, stupa, dan biara berdiri di dataran Bagan; sekitar 2.200 masih tersisa hari ini.', true),
        ev(1105, 'Kuil Ananda', 'Kuil Ananda yang megah selesai dibangun pada masa Kyansittha.', true),
        ev(1113, 'Prasasti Myazedi', 'Prasasti dengan empat bahasa (Pyu, Mon, Burma, Pali) menjadi tulisan Burma tertua yang bertarikh.'),
        ev(1174, 'Narapatisithu', 'Narapatisithu memerintah dan memperluas hubungan dengan Sri Lanka.', true),
        ev(1277, 'Ngasaunggyan', 'Pasukan Pagan bertempur melawan pasukan Yuan (Mongol) di Ngasaunggyan; pertempuran ini dicatat Marco Polo.'),
        ev(1287, 'Mongol menyerang Bagan', 'Pasukan Yuan menyerang dan Bagan runtuh; Raja Narathihapate melarikan diri.'),
      ],
    },
    {
      story:
        'Setelah Bagan runtuh, lembah Irrawaddy terbelah menjadi negeri-negeri kecil yang saling bertarung. Tiga bersaudara Shan berkuasa di Myinsaing, lalu Ava dan Hanthawaddy (Pegu) berebut pengaruh dalam Perang Empat Puluh Tahun. Di bawah Ratu Shin Sawbu dan raja Dhammazedi, Pegu menjadi pusat Buddha Theravada. Dari Taungoo yang sepi, sebuah dinasti baru mulai bangkit.',
      chronicle: [
        ev(1299, 'Tiga bersaudara Shan', 'Para pemimpin Shan di Myinsaing menggulingkan raja yang didukung Mongol dan menjadi penguasa Burma tengah.'),
        ev(1364, 'Ava didirikan', 'Thadominbya mendirikan Ava sebagai ibu kota baru di pertemuan Irrawaddy dan Myitnge.'),
        ev(1385, 'Perang Empat Puluh Tahun', 'Ava dan Hanthawaddy mulai berperang berulang kali untuk menguasai delta; perang berlangsung sampai 1424.'),
        ev(1424, 'Perang mereda', 'Perang panjang antara Ava dan Hanthawaddy berhenti tanpa pemenang yang jelas.'),
        ev(1453, 'Shin Sawbu', 'Ratu Shin Sawbu memerintah Hanthawaddy; ia dikenal memperkuat Buddha Theravada dan Pegu.'),
        ev(1472, 'Dhammazedi di Pegu', 'Raja Dhammazedi memerintah Pegu dan memperkuat reformasi biara, serta menerbitkan prasasti Kalyani.'),
        ev(1510, 'Taungoo berdiri', 'Mingyinyo mendirikan kerajaan Taungoo di lembah Sittang, menjadi cikal bakal imperium baru.'),
        ev(1527, 'Konfederasi Shan merebut Ava', 'Pasukan Shan merebut Ava dan banyak pengungsi pindah ke Taungoo.'),
      ],
    },
    {
      story:
        'Tabinshwehti dan Bayinnaung dari Taungoo menyatukan Burma dan membangun imperium terbesar di Asia Tenggara. Pada 1560-an pasukan Bayinnaung menaklukkan Lan Na, Lan Xang, dan Ayutthaya, sehingga banyak raja bawahan harus mengirim upeti ke Pegu. Setelah wafatnya pada 1581 imperium retak, tetapi dinasti memulihkan inti kerajaan hingga Mon memberontak pada 1740.',
      chronicle: [
        ev(1531, 'Tabinshwehti naik takhta', 'Tabinshwehti menjadi raja Taungoo dan mulai menyatukan lembah Irrawaddy.'),
        ev(1539, 'Pegu jatuh', 'Tabinshwehti merebut Pegu dari Hanthawaddy dan menjadikannya ibu kota.', true),
        ev(1551, 'Bayinnaung', 'Bayinnaung naik takhta dan memulai penaklukan yang menjadikan Taungoo imperium terbesar di Asia Tenggara.'),
        ev(1564, 'Ayutthaya dikepung', 'Bayinnaung menyerbu Ayutthaya dan memaksa raja Siam tunduk; Lan Na sudah ditaklukkannya pada 1558.'),
        ev(1569, 'Ayutthaya ditaklukkan', 'Pasukan Taungoo merebut Ayutthaya setelah pengepungan panjang dan menjadikan Siam vasal.'),
        ev(1581, 'Bayinnaung wafat', 'Sepeninggal Bayinnaung, imperium cepat mengalami pemberontakan dan perpecahan.'),
        ev(1599, 'Pegu hancur', 'Pegu direbut dan dibakar oleh gabungan musuh Taungoo, mengakhiri masa kejayaan imperium.'),
        ev(1635, 'Ava kembali jadi ibu kota', 'Raja Thalun memindahkan ibu kota ke Ava, menandai kerajaan Taungoo yang dipulihkan.'),
        ev(1740, 'Pemberontakan Mon', 'Orang Mon di Pegu memberontak dan memulihkan Hanthawaddy.'),
        ev(1752, 'Taungoo jatuh', 'Pasukan Mon merebut Ava dan menawan raja terakhir Taungoo.'),
      ],
    },
    {
      story:
        'Alaungpaya, kepala desa dari Moksobo, mengusir orang Mon dan mendirikan Dinasti Konbaung pada 1752. Para penerusnya menaklukkan Ayutthaya, menahan empat invasi Qing, dan merebut Arakan, tetapi kemudian bertabrakan dengan Inggris di perbatasan Assam dan Bengal. Tiga perang Anglo-Burma menyingkirkan kerajaan, dan Raja Thibaw dibuang pada 1885.',
      chronicle: [
        ev(1752, 'Alaungpaya', 'Alaungpaya mengangkat panji perlawanan terhadap Mon dan mendirikan Dinasti Konbaung.'),
        ev(1765, 'Invasi Qing', 'Empat kali pasukan Qing menyerbu Burma antara 1765 dan 1769, dan semuanya dipukul mundur.'),
        ev(1767, 'Ayutthaya dihancurkan', 'Pasukan Konbaung merebut dan membakar Ayutthaya setelah pengepungan panjang.'),
        ev(1784, 'Arakan ditaklukkan', 'Bodawpaya merebut Arakan dan membawa arca Mahamuni ke Burma.'),
        ev(1819, 'Assam', 'Pasukan Burma menguasai Assam dan Manipur untuk sementara, sehingga berhadapan langsung dengan Inggris.', true),
        ev(1824, 'Perang Anglo-Burma I', 'Perang berakhir pada 1826 dengan Perjanjian Yandabo; Burma menyerahkan Arakan, Tenasserim, dan Assam.'),
        ev(1852, 'Perang Anglo-Burma II', 'Inggris menguasai Burma Hilir, termasuk Rangoon dan Pegu.'),
        ev(1857, 'Mandalay', 'Raja Mindon mendirikan ibu kota baru di Mandalay.'),
        ev(1871, 'Konsili Buddha Kelima', 'Mindon menyelenggarakan Konsili di Mandalay dan memahat naskah Tripitaka pada lempeng marmer.'),
        ev(1885, 'Perang Anglo-Burma III', 'Inggris menguasai Mandalay, Raja Thibaw dibuang ke India, dan monarki Burma berakhir.'),
      ],
    },
  ],
  'ayutthaya-siam': [
    {
      story:
        'Pada mulanya, di lembah Sungai Yom, dua pemimpin Tai, Si Inthrathit dan Pha Mueang, merebut Sukhothai dari kendali Khmer pada 1238. Putra Si Inthrathit, Ramkhamhaeng, memperluas kerajaan dan menurut tradisi menciptakan aksara Thai. Sukhothai menjadi pusat Buddha Theravada dari Sri Lanka dan pusat keramik seladon.',
      chronicle: [
        ev(1238, 'Si Inthrathit', 'Pemimpin Tai Si Inthrathit merebut Sukhothai dari penguasa Khmer dan mendirikan kerajaan.'),
        ev(1279, 'Ramkhamhaeng', 'Ramkhamhaeng naik takhta sekitar 1279 dan memperluas wilayah Sukhothai sampai ke pesisir.', true),
        ev(1283, 'Aksara Thai', 'Tradisi menyebut Ramkhamhaeng menciptakan aksara Thai pada tahun ini.', true),
        ev(1292, 'Prasasti Ramkhamhaeng', 'Prasasti terkenal yang menggambarkan negeri makmur; sebagian sejarawan meragukan keasliannya.', true),
        ev(1298, 'Ramkhamhaeng wafat', 'Sekitar masa ini Ramkhamhaeng wafat, dan negeri-negeri bawahan mulai melepaskan diri.', true),
        ev(1300, 'Theravada dari Sri Lanka', 'Biksu dari Sri Lanka membawa tradisi Theravada ke Sukhothai, dan raja-raja membangun wat.', true),
        ev(1345, 'Traibhumikatha', 'Raja Li Thai menulis Traibhumikatha, risalah kosmologi Buddha tertua dalam bahasa Thai.', true),
      ],
    },
    {
      story:
        'Pada 1351, Uthong mendirikan Ayutthaya di pulau sungai antara tiga aliran besar, tempat kapal laut bertemu kapal sungai. Dalam empat abad, kota ini tumbuh menjadi pelabuhan raksasa, tempat pedagang Tiongkok, Persia, Jepang, Portugis, Belanda, dan Prancis berdagang. Perang dengan Burma berulang kali mengguncang negeri sampai Burma membakarnya pada 1767.',
      chronicle: [
        ev(1351, 'Uthong mendirikan Ayutthaya', 'Raja Uthong, bergelar Ramathibodi I, mendirikan kerajaan baru di Sungai Chao Phraya.'),
        ev(1431, 'Angkor dijarah', 'Pasukan Ayutthaya merebut dan menjarah Angkor; orang Khmer memindahkan ibu kota ke selatan.'),
        ev(1448, 'Trailokanat dan sakdina', 'Raja Trailokanat (memerintah sampai 1488) menyusun hierarki sakdina yang mengatur pangkat seluruh rakyat berdasarkan tanah.', true),
        ev(1511, 'Portugis datang', 'Duarte Fernandes tiba sebagai utusan Portugis pertama di Ayutthaya, setelah penaklukan Malaka.'),
        ev(1569, 'Jatuh ke tangan Bayinnaung', 'Pasukan Burma merebut Ayutthaya setelah pengepungan dan menjadikannya vasal.'),
        ev(1593, 'Naresuan di Nong Sarai', 'Menurut kronik, Naresuan mengalahkan putra mahkota Burma dalam duel gajah dan membebaskan Siam.'),
        ev(1608, 'Utusan ke Belanda', 'Ayutthaya mengirim utusan ke Belanda; kongsi dagang VOC membuka kantor di kota itu.'),
        ev(1656, 'Narai', 'Raja Narai (memerintah sampai 1688) membuka hubungan dengan Prancis dan Persia; Constantine Phaulkon, petualang Yunani, menjadi pejabat istana.', true),
        ev(1688, 'Revolusi Siam', 'Petcharacha merebut kekuasaan setelah Narai sakit, menahan Phaulkon, dan mengusir pasukan Prancis.'),
        ev(1700, 'Kota terbesar', 'Pada sekitar masa ini Ayutthaya salah satu kota terbesar di dunia, dengan penduduk mungkin sekitar satu juta (perkiraan).', true),
        ev(1767, 'Ayutthaya dihancurkan', 'Pasukan Burma merebut dan membakar kota setelah pengepungan panjang; banyak penduduk tewas atau digiring ke Burma.'),
      ],
    },
    {
      story:
        'Dari puing Ayutthaya, panglima keturunan Tiongkok bernama Taksin mengumpulkan pasukan dan mendirikan ibu kota di Thonburi. Chakri, pendiri Dinasti Rattanakosin, memindahkan ibu kota ke seberang sungai di Bangkok pada 1782. Di bawah tekanan Inggris dan Prancis, para raja membuka perdagangan, memodernisasi negara, dan mempertahankan kemerdekaan dengan mengorbankan beberapa wilayah.',
      chronicle: [
        ev(1767, 'Taksin di Thonburi', 'Taksin mengusir pasukan Burma dan menjadikan Thonburi ibu kota baru.'),
        ev(1782, 'Rama I dan Bangkok', 'Chakri naik takhta sebagai Rama I dan memindahkan ibu kota ke Bangkok.'),
        ev(1826, 'Perjanjian Burney', 'Siam dan Inggris menyepakati perdagangan dan hubungan mengenai Kedah serta Burma.'),
        ev(1855, 'Perjanjian Bowring', 'Siam membuka perdagangan bebas dan menerima pajak rendah serta hak ekstrateritorial bagi Inggris.'),
        ev(1868, 'Chulalongkorn naik takhta', 'Raja Chulalongkorn (Rama V) mulai memodernisasi birokrasi, sekolah, dan militer.'),
        ev(1871, 'Kunjungan ke Jawa', 'Chulalongkorn mengunjungi Jawa pada 1871, lalu lagi pada 1896 dan 1901, untuk mempelajari pemerintahan kolonial; pada 1896 ia juga melihat Borobudur.', true),
        ev(1893, 'Krisis Paknam', 'Kapal perang Prancis menerobos Chao Phraya; Siam menyerahkan wilayah Laos di tepi timur Mekong.'),
        ev(1905, 'Penghapusan perbudakan', 'Siam menghapus perbudakan secara bertahap melalui undang-undang tahun ini.'),
        ev(1909, 'Perjanjian Anglo-Siam', 'Siam menyerahkan Kedah, Kelantan, Terengganu, dan Perlis kepada Inggris.'),
        ev(1917, 'Siam masuk PD I', 'Siam bergabung dengan Sekutu dan mengirim pasukan ke Prancis.'),
        ev(1932, 'Revolusi Siam', 'Para perwira dan sipil mengakhiri monarki absolut dan memperkenalkan monarki konstitusional; nama Thailand dipakai sejak 1939.'),
      ],
    },
  ],
  safawi: [
    {
      story:
        'Kisah ini bermula pada 1501, ketika Ismail, pemuda 14 tahun pemimpin tarekat Safawiyah, dinobatkan sebagai syah di Tabriz. Ia menetapkan Syiah Dua Belas Imam sebagai agama negara, dan perlahan-lahan Iran berubah dari mayoritas Sunni menjadi mayoritas Syiah. Kekalahan di Chaldiran menghentikan ekspansinya ke barat, tetapi Safawi bertahan sebagai tetangga Utsmaniyah yang tangguh.',
      chronicle: [
        ev(1501, 'Ismail I dinobatkan', 'Ismail memasuki Tabriz, menyatakan diri syah, dan menetapkan Syiah Dua Belas Imam sebagai agama negara.'),
        ev(1508, 'Baghdad direbut', 'Pasukan Ismail merebut Baghdad dan Irak dari penguasa lokal.'),
        ev(1510, 'Mengalahkan Uzbek di Merv', 'Ismail mengalahkan Muhammad Shaybani Khan dari Uzbek di Merv, dan menewaskannya.'),
        ev(1514, 'Pertempuran Chaldiran', 'Selim I dari Utsmaniyah mengalahkan Safawi dengan artileri dan senapan; Ismail kehilangan Tabriz untuk sementara.'),
        ev(1524, 'Tahmasp I', 'Tahmasp naik takhta pada usia 10 tahun dan memerintah selama lebih dari lima dekade.'),
        ev(1534, 'Baghdad hilang', 'Sultan Sulayman merebut Baghdad dari Safawi.'),
        ev(1544, 'Humayun di istana Safawi', 'Kaisar Mughal Humayun yang terusir mengungsi ke istana Tahmasp dan memperoleh bantuan militer untuk merebut kembali tahtanya.'),
        ev(1555, 'Perdamaian Amasya', 'Safawi dan Utsmaniyah mengakhiri perang dengan batas yang diakui, dan Safawi menerima hilangnya Irak.'),
        ev(1576, 'Tahmasp wafat', 'Tahmasp wafat dan kerajaan memasuki masa perebutan kuasa antar-faksi Qizilbash.'),
      ],
    },
    {
      story:
        'Abbas I naik takhta pada 1588 dan segera memulihkan kerajaan yang hampir runtuh. Ia membentuk tentara tetap dari budak istana (ghulam) yang berasal dari Georgia, Armenia, dan Sirkasia, memindahkan ibu kota ke Isfahan, dan merebut kembali Tabriz serta Baghdad. Lapangan Naqsh-e Jahan dan Masjid Shah menjadi lambang kota. Setelah wafat pada 1629, para penerusnya melemah hingga Afghan menjatuhkan Isfahan pada 1722.',
      chronicle: [
        ev(1588, 'Abbas I', 'Abbas naik takhta dan mulai membangun tentara baru yang tidak bergantung pada Qizilbash.'),
        ev(1598, 'Isfahan jadi ibu kota', 'Abbas memindahkan ibu kota dari Qazvin ke Isfahan, "Isfahan nesf-e jahan" (Isfahan separuh dunia).'),
        ev(1602, 'Naqsh-e Jahan', 'Pembangunan lapangan besar Naqsh-e Jahan dan masjid-masjid sekelilingnya berlangsung sekitar 1602–1629.', true),
        ev(1603, 'Perang melawan Utsmaniyah', 'Abbas merebut kembali Tabriz dan wilayah-wilayah di barat laut selama perang yang berlangsung sampai 1618.'),
        ev(1622, 'Hormuz direbut', 'Dengan bantuan armada Inggris, pasukan Safawi merebut Hormuz dari Portugis; Kandahar juga direbut dari Mughal.'),
        ev(1623, 'Baghdad direbut kembali', 'Safawi merebut kembali Baghdad dari Utsmaniyah dan menguasainya hingga 1638.'),
        ev(1629, 'Abbas wafat', 'Abbas wafat setelah empat dekade memerintah; kekuatan kerajaan mulai menurun.'),
        ev(1639, 'Perjanjian Zuhab', 'Safawi dan Utsmaniyah menetapkan batas, yang pada pokoknya menjadi dasar batas Iran dan Irak hingga kini.'),
        ev(1722, 'Afghan merebut Isfahan', 'Pasukan Hotaki di bawah Mahmud merebut Isfahan setelah pengepungan panjang.'),
        ev(1736, 'Nader Shah', 'Nader Shah, mantan panglima Safawi, menobatkan diri dan mengakhiri dinasti.'),
      ],
    },
  ],
  timuriyah: [
    {
      story:
        'Timur lahir sekitar 1336 di Kesh, dekat Samarkand, dan pada 1370 menjadi penguasa Transoxiana. Ia menyebut dirinya penerus Genghis Khan, meski ia sendiri bukan keturunan langsungnya. Dalam tiga puluh tahun ia memimpin pasukan ke Persia, Rusia selatan, India, dan Anatolia, meninggalkan kota-kota yang terbakar dan menara tengkorak. Namun ia juga membawa tukang, ilmuwan, dan seniman ke Samarkand.',
      chronicle: [
        ev(1370, 'Timur di Balkh', 'Timur menyingkirkan Amir Husayn di Balkh dan menjadi penguasa Transoxiana.'),
        ev(1381, 'Herat dan Persia', 'Timur memulai penaklukan Khurasan, Herat, dan Persia dalam beberapa kampanye sepanjang 1380-an.', true),
        ev(1387, 'Pembantaian Isfahan', 'Setelah pemberontakan, Timur memerintahkan pembantaian penduduk Isfahan.'),
        ev(1395, 'Mengalahkan Tokhtamysh', 'Di tepi Sungai Terek, Timur mengalahkan Khan Gerombolan Emas, Tokhtamysh.'),
        ev(1398, 'Timur menjarah Delhi', 'Timur menyerbu India dan menjarah Delhi; kesultanan di sana tidak pernah pulih sepenuhnya.'),
        ev(1400, 'Aleppo dan Damaskus', 'Timur menyerbu Suriah, menjarah Aleppo, dan mengepung Damaskus.'),
        ev(1401, 'Ibnu Khaldun bertemu Timur', 'Sejarawan Ibnu Khaldun bertemu Timur di Damaskus dan meninggalkan catatan terkenal tentang percakapan mereka.'),
        ev(1402, 'Pertempuran Ankara', 'Timur mengalahkan dan menawan Sultan Utsmaniyah Bayezid I.'),
        ev(1404, 'Clavijo di Samarkand', 'Duta Raja Kastilia, Ruy Gonzalez de Clavijo, tiba di Samarkand dan menulis catatan perjalanannya.'),
        ev(1405, 'Timur wafat di Otrar', 'Timur wafat di Otrar dalam perjalanan menuju Tiongkok.'),
      ],
    },
    {
      story:
        'Setelah Timur wafat, putranya Shah Rukh memerintah dari Herat dan memulihkan kerajaan, sementara cucunya Ulugh Beg memerintah Samarkand dan lebih menyukai bintang daripada pedang. Di Herat, permaisuri Gawhar Shad membangun madrasah dan masjid. Ini adalah masa lahirnya sastra Chagatai dan lukisan miniatur yang termasyhur, sebelum perebutan kuasa dan serangan Uzbek mengakhirinya.',
      chronicle: [
        ev(1409, 'Shah Rukh di Herat', 'Shah Rukh menguasai Transoxiana dan Khurasan serta memerintah dari Herat; Ulugh Beg menjadi gubernur Samarkand.'),
        ev(1417, 'Madrasah Ulugh Beg', 'Pembangunan madrasah di lapangan Registan, Samarkand, berlangsung sekitar 1417–1420.', true),
        ev(1428, 'Observatorium Ulugh Beg', 'Observatorium besar dibangun di Samarkand (sekitar 1428–1429), dan menghasilkan katalog 1.018 bintang.', true),
        ev(1447, 'Shah Rukh wafat', 'Wafatnya Shah Rukh memicu perebutan kuasa antar-pangeran Timuriyah.'),
        ev(1449, 'Ulugh Beg dibunuh', 'Ulugh Beg dibunuh atas perintah putranya sendiri, Abd al-Latif.'),
        ev(1469, 'Husayn Bayqara', 'Husayn Bayqara naik takhta di Herat dan memerintah hingga 1506, masa terakhir kemakmuran Timuriyah.'),
        ev(1480, 'Nava\'i dan Behzad', 'Penyair Ali-Shir Nava\'i menulis sastra dalam bahasa Chagatai, sedangkan pelukis Behzad bekerja di Herat.', true),
        ev(1501, 'Shaybani Khan merebut Samarkand', 'Pemimpin Uzbek Muhammad Shaybani Khan merebut Samarkand dari Timuriyah.'),
        ev(1507, 'Herat jatuh', 'Shaybani Khan merebut Herat; Babur, keturunan Timur, kelak mendirikan Mughal di India (1526).'),
      ],
    },
  ],
};
