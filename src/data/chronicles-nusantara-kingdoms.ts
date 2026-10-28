import { ev, type ChronicleBook } from './chronicle';

/** Kronik periode kerajaan Nusantara tambahan (urutan = indeks `territories`). */
export const chroniclesNusantaraKingdoms: ChronicleBook = {
  kalingga: [
    {
      story:
        'Kisah ini bermula dari para pejabat Tiongkok yang mencatat adanya negeri Holing di pulau Jawa. Mereka menulis bahwa rajanya tinggal di kota berpagar kayu, dan istananya beratap palma. Dari dalam negeri hanya tersisa sedikit prasasti, jadi para sejarawan masih berdebat soal letak pasti ibu kotanya. Yang jelas, Holing sudah berhubungan dengan Tiongkok dan India pada abad ke-7.',
      chronicle: [
        ev(500, 'Holing mulai dikenal', 'Sumber-sumber Tiongkok menyebut kerajaan Holing (Kalingga) di Jawa; tahun pastinya tidak diketahui.', true),
        ev(640, 'Utusan Holing ke istana Tang', 'Xin Tangshu mencatat Holing mengirim utusan ke Tiongkok pada masa Kaisar Taizong.'),
        ev(640, 'Catatan Tang tentang adat Holing', 'Catatan Tiongkok menggambarkan rumah beratap palma, dipan gading, dan kebiasaan makan dengan tangan.', true),
        ev(650, 'Prasasti Tuk Mas', 'Prasasti di lereng Gunung Merbabu dekat Magelang berhuruf Pallawa dan bergambar trisula, kendi, serta kelopak teratai; para ahli mendatanginya sekitar abad ke-7.', true),
        ev(664, 'Biksu Hwining tiba di Holing', 'Catatan I-Tsing menyebut biksu Hwining tinggal tiga tahun di Holing dan belajar bersama biksu setempat.', true),
        ev(665, 'Terjemahan bersama Jnanabhadra', 'Hwining dan biksu Jnanabhadra menerjemahkan bagian kitab Buddha ke dalam bahasa Tionghoa.', true),
      ],
    },
    {
      story:
        'Pada 674 sumber Tiongkok menulis tentang Ratu Xi-mo, yang dalam tradisi Jawa dikenal sebagai Ratu Shima. Ia terkenal karena menegakkan hukum tanpa pandang bulu, sampai sebuah kantong emas di jalan tidak ada yang berani menyentuhnya. Sesudahnya, wilayah Holing bersentuhan dengan Medang yang bangkit di pedalaman Jawa Tengah, dan nama Holing hilang dari catatan Tang.',
      chronicle: [
        ev(674, 'Ratu Shima naik takhta', 'Xin Tangshu menyebut Holing diperintah seorang ratu bernama Xi-mo, yang dikenal adil dan tegas.'),
        ev(674, 'Kisah kantong emas', 'Menurut cerita, kantong emas yang ditaruh di tengah jalan tidak disentuh siapa pun selama tiga tahun, sampai putra mahkota menyentuhnya dengan kaki.', true),
        ev(674, 'Hukuman bagi putra mahkota', 'Para pejabat memohon pengampunan, dan hukuman dikurangi menjadi pemotongan jari kaki; kisah ini bagian tradisi yang dicatat dalam sumber Tiongkok.', true),
        ev(700, 'Prasasti Sojomerto', 'Prasasti di Batang menyebut Dapunta Selendra, tokoh yang dikaitkan para ahli dengan asal-usul wangsa Syailendra.', true),
        ev(732, 'Prasasti Canggal dan Sanjaya', 'Di tetangga selatan Holing, Raja Sanjaya mendirikan lingga di Gunung Wukir, penanda berdirinya Medang.'),
        ev(742, 'Utusan Holing terakhir', 'Sumber Tang masih mencatat utusan Holing pada pertengahan abad ke-8.', true),
        ev(752, 'Batas periode', 'Sekitar masa ini Holing menghilang dari catatan dan wilayahnya masuk dalam lingkup Medang.', true),
      ],
    },
  ],
  'sunda-pajajaran': [
    {
      story:
        'Pada mulanya, di Jawa bagian barat berdiri Tarumanagara. Sesudah 669, menurut tradisi Carita Parahyangan dan naskah Wangsakerta, yang kebenarannya diperdebatkan, kekuasaannya terbagi menjadi Sunda dan Galuh. Selama berabad-abad, rakyat Sunda berladang dan berdagang lada, sedangkan para raja meninggalkan prasasti seperti Sanghyang Tapak. Sumber Tiongkok juga mencatat Sunda sebagai penghasil lada.',
      chronicle: [
        ev(669, 'Tarumanagara mengirim utusan terakhir', 'Catatan Tiongkok menyebut utusan terakhir dari To-lo-mo pada 666 dan 669; sesudahnya Tarumanagara hilang dari catatan.'),
        ev(669, 'Tarusbawa dan awal Sunda', 'Menurut tradisi Carita Parahyangan dan naskah Wangsakerta (sumber yang diperdebatkan), Tarusbawa mengganti nama kerajaan menjadi Sunda.'),
        ev(723, 'Sanjaya dalam tradisi Sunda', 'Carita Parahyangan menghubungkan Sanjaya dengan Galuh dan Medang di Jawa Tengah.', true),
        ev(932, 'Prasasti Kebon Kopi II', 'Prasasti dari Bogor menyebut "raja Sunda" dan menjadi bukti tertulis tertua tentang nama Sunda.'),
        ev(1030, 'Prasasti Sanghyang Tapak', 'Sri Jayabhupati melarang orang menangkap ikan di sungai suci dekat Cibadak, Sukabumi.'),
        ev(1225, 'Zhao Rugua menyebut Sin-to', 'Dalam Zhufan Zhi, Zhao Rugua menyebut negeri Sin-to (Sunda) sebagai penghasil lada yang baik.', true),
        ev(1333, 'Kawali menjadi pusat', 'Kerajaan Sunda dan Galuh bergeser ke Kawali, Ciamis, menjelang masa Majapahit.', true),
      ],
    },
    {
      story:
        'Pusat Sunda berpindah ke Kawali di Galuh, tempat para raja mengukir prasasti di batu. Peristiwa paling terkenal terjadi pada 1357, ketika rombongan raja Sunda tewas di Bubat setelah rencana pernikahan dengan Majapahit berubah menjadi pertempuran. Niskala Wastu Kancana kemudian memerintah lama dan dikenang dalam prasasti sebagai raja yang menghendaki kemakmuran bagi dunia.',
      chronicle: [
        ev(1340, 'Prabu Ajiguna Linggawisesa', 'Tradisi Sunda mencatat Ajiguna sebagai salah satu raja pada masa menjelang Bubat.', true),
        ev(1357, 'Perang Bubat', 'Linggabuana dan putrinya Dyah Pitaloka gugur di Bubat; Kidung Sunda dan Pararaton menuturkannya dengan sudut pandang berbeda.'),
        ev(1371, 'Niskala Wastu Kancana naik takhta', 'Menurut tradisi, ia memerintah lama, sampai sekitar 1475.', true),
        ev(1400, 'Prasasti Kawali', 'Prasasti di Astana Gede, Kawali, memuat doa agar pekerjaan baik memberi kejayaan lama di dunia.', true),
        ev(1430, 'Kawali sebagai pusat kerajaan', 'Istana Surawisesa di Kawali menjadi tempat raja memutuskan urusan Galuh dan Sunda.', true),
        ev(1475, 'Dewa Niskala', 'Pergantian takhta dari Niskala Wastu Kancana kepada Dewa Niskala dalam tradisi Carita Parahyangan.', true),
        ev(1479, 'Cirebon lepas', 'Menurut tradisi, Cirebon di bawah Sunan Gunung Jati mulai berdiri sendiri; tahun ini diperdebatkan.', true),
        ev(1481, 'Perpecahan istana', 'Ketegangan antara Dewa Niskala dan Susuktunggal berujung pada penyatuan kembali di bawah Sri Baduga.', true),
      ],
    },
    {
      story:
        'Pakuan, dekat Bogor, menjadi pusat ketika Sri Baduga Maharaja naik takhta pada 1482. Tradisi lisan menyebutnya Prabu Siliwangi. Di pesisir, Portugis, Cirebon, dan Banten bergantian berebut pengaruh atas pelabuhan lada. Pada 1579 pasukan Maulana Yusuf dari Banten merebut Pakuan, dan batu singgasana Palangka dibawa ke Banten.',
      chronicle: [
        ev(1482, 'Sri Baduga Maharaja bertakhta', 'Sri Baduga, dalam tradisi lisan Prabu Siliwangi, memerintah dari Pakuan dan dikenal membangun parit serta jalan.'),
        ev(1511, 'Bujangga Manik berkeliling Jawa dan Bali', 'Pendeta Sunda ini menulis perjalanannya; naskahnya kini tersimpan di Perpustakaan Bodleian, Oxford.', true),
        ev(1513, 'Tomé Pires mengunjungi Sunda', 'Dalam Suma Oriental ia menyebut enam pelabuhan Sunda, termasuk Kalapa dan Banten, serta perdagangan lada.'),
        ev(1522, 'Perjanjian Sunda–Portugis', 'Raja Surawisesa dan utusan Portugis menyepakati benteng dan dagang lada; Padrão Luso-Sunda menandainya.'),
        ev(1527, 'Fatahillah merebut Sunda Kalapa', 'Pasukan Cirebon dan Demak merebut Sunda Kalapa dan menamainya Jayakarta, asal 22 Juni sebagai hari jadi Jakarta.'),
        ev(1533, 'Prasasti Batutulis (menurut pembacaan umum)', 'Prasasti di Bogor ini dibuat Surawisesa untuk mengenang Sri Baduga; angka tahunnya dibaca berbeda-beda.'),
        ev(1567, 'Raga Mulya (Prabu Suryakancana)', 'Raja terakhir Pakuan naik takhta pada masa terdesaknya kerajaan.', true),
        ev(1579, 'Banten merebut Pakuan', 'Maulana Yusuf menguasai Pakuan; batu Palangka dibawa ke Banten dan mahkota Binokasih diwarisi Sumedang Larang.'),
      ],
    },
  ],
  bali: [
    {
      story:
        'Kisah Bali tertulis bermula dari prasasti-prasasti raja Warmadewa pada abad ke-9 dan ke-10. Bahasanya Bali Kuno, dan isinya urusan sawah, pajak, dan pertapaan. Lalu hubungan dengan Jawa Timur makin erat lewat pernikahan Udayana dengan putri Jawa. Pada 1284 Kertanagara dari Singasari menaklukkan Bali, tetapi Bedahulu berdiri lagi sebelum Majapahit datang.',
      chronicle: [
        ev(882, 'Prasasti Sukawana', 'Prasasti bertanggal tertua di Bali, berbahasa Bali Kuno, memuat urusan pertapaan dan desa.'),
        ev(914, 'Prasasti Blanjong', 'Prasasti di Sanur menyebut Sri Kesari Warmadewa dan memakai dua aksara.'),
        ev(989, 'Udayana dan Gunapriya Dharmapatni', 'Raja Udayana memerintah bersama permaisuri Mahendradatta dari Jawa Timur.', true),
        ev(991, 'Kelahiran Airlangga', 'Airlangga, anak Udayana dan Mahendradatta, lahir; kelak menjadi raja di Jawa Timur.', true),
        ev(1001, 'Mpu Kuturan dan Kahyangan Tiga', 'Tradisi menyebut Mpu Kuturan menata desa pakraman dan konsep Kahyangan Tiga.', true),
        ev(1077, 'Anak Wungsu dan Gunung Kawi', 'Anak Wungsu, adik Airlangga, memerintah; kompleks candi Gunung Kawi di Tampaksiring dikaitkan dengannya.', true),
        ev(1284, 'Kertanagara menaklukkan Bali', 'Nagarakretagama menyebut Bali diserang Kertanagara dari Singasari.'),
        ev(1324, 'Sri Asta Asura Ratna Bhumi Banten', 'Raja Bedahulu dengan patih Kebo Iwa menurut tradisi; kisah Kebo Iwa dituturkan dalam babad.', true),
      ],
    },
    {
      story:
        'Pada 1343 pasukan Majapahit dipimpin Gajah Mada dan Arya Damar menaklukkan Bedahulu. Sri Aji Kresna Kepakisan lalu ditugaskan memerintah, mula-mula di Samprangan dan kemudian di Gelgel. Ketika Majapahit surut, bangsawan dan brahmana mengungsi ke Bali, membawa naskah, kidung, dan adat istana. Di masa Dalem Waturenggong, Gelgel mencapai puncak dan berpengaruh sampai Lombok dan Sumbawa.',
      chronicle: [
        ev(1343, 'Bedahulu takluk', 'Gajah Mada dan Arya Damar menaklukkan Bedahulu menurut Babad dan Nagarakretagama.'),
        ev(1352, 'Kresna Kepakisan di Samprangan', 'Sri Aji Kresna Kepakisan ditugaskan Majapahit memerintah Bali dari Samprangan.', true),
        ev(1380, 'Pusat pindah ke Gelgel', 'Dalem Ketut Ngulesir memindahkan istana ke Gelgel.', true),
        ev(1500, 'Pengungsi dari Majapahit', 'Bangsawan, pendeta, dan seniman Jawa mengungsi ke Bali selama keruntuhan Majapahit.', true),
        ev(1540, 'Dang Hyang Nirartha', 'Pendeta Pedanda Sakti Wawu Rauh dikaitkan dengan padmasana dan pura seperti Tanah Lot dan Uluwatu.', true),
        ev(1550, 'Dalem Waturenggong', 'Waturenggong memimpin Gelgel pada puncaknya, dengan pengaruh sampai Lombok, Sumbawa, dan Blambangan.', true),
        ev(1597, 'Cornelis de Houtman singgah', 'Pelaut Belanda ini tiba di Bali, dan dua awaknya memilih menetap.'),
        ev(1651, 'Pemberontakan Gusti Agung Maruti', 'Gusti Agung Maruti merebut kekuasaan dan Gelgel terpecah.'),
      ],
    },
    {
      story:
        'Setelah Gelgel runtuh, Bali terbagi menjadi sembilan kerajaan kecil, dengan Dewa Agung di Klungkung dihormati sebagai pusat adat. Karangasem meluas ke Lombok, dan kerajaan-kerajaan pesisir seperti Buleleng berdagang. Belanda datang dengan dalih hak tawan karang, lalu menyerang berkali-kali. Rangkaian puputan 1906–1908 mengakhiri kerajaan-kerajaan Bali.',
      chronicle: [
        ev(1686, 'Istana pindah ke Klungkung', 'Dewa Agung memindahkan istana ke Semarapura, Klungkung, yang dihormati sebagai pusat adat.'),
        ev(1740, 'Karangasem menguasai Lombok', 'Raja Karangasem mulai mengendalikan Lombok barat.', true),
        ev(1846, 'Ekspedisi Belanda pertama ke Buleleng', 'Belanda menyerbu Buleleng dengan dalih hak tawan karang.'),
        ev(1849, 'Jagaraga jatuh', 'I Gusti Ketut Jelantik gugur setelah Jagaraga direbut Belanda.'),
        ev(1849, 'Puputan Buleleng–Karangasem', 'Pasukan Bali memilih bertempur sampai mati dalam perlawanan terakhir pada 1849.'),
        ev(1894, 'Perang Lombok dan Cakranegara', 'Belanda menyerang istana Cakranegara dan mengakhiri kekuasaan Karangasem di Lombok.'),
        ev(1904, 'Kapal Sri Komala karam di Sanur', 'Belanda memakai peristiwa ini sebagai dalih menekan Badung.'),
        ev(1906, 'Puputan Badung', 'Pada 20 September 1906 raja dan keluarga Badung berjalan menghadapi pasukan Belanda.'),
        ev(1906, 'Puputan Tabanan', 'Raja Tabanan menyerah, lalu wafat dalam tahanan; kerajaannya runtuh.'),
        ev(1908, 'Puputan Klungkung', 'Pada 28 April 1908 Dewa Agung Jambe gugur bersama keluarganya.'),
      ],
    },
  ],
  'dharmasraya-pagaruyung': [
    {
      story:
        'Kisah ini bermula di hulu Sungai Batang Hari, tempat Dharmasraya menggantikan Jambi sebagai pusat kerajaan Melayu. Pada 1275 Kertanagara mengirim ekspedisi Pamalayu, dan pada 1286 arca Amoghapasa dikirim ke Dharmasraya sebagai tanda persahabatan. Dua putri Melayu, Dara Petak dan Dara Jingga, dibawa ke Jawa dan menurunkan raja-raja. Pada 1347 Adityawarman menjadikan pusat kerajaan bergeser ke dataran tinggi Minangkabau.',
      chronicle: [
        ev(1183, 'Dharmasraya menggantikan Jambi', 'Pusat Melayu bergeser dari Jambi ke Dharmasraya di Batang Hari; tahunnya perkiraan.', true),
        ev(1275, 'Ekspedisi Pamalayu', 'Kertanagara mengirim pasukan ke Sumatra (lihat juga Kediri dan Singasari).'),
        ev(1286, 'Prasasti Padang Roco', 'Arca Amoghapasa dikirim Kertanagara kepada rakyat Melayu; Srimat Tribhuwanaraja Mauliwarmadewa disebut sebagai rajanya.'),
        ev(1293, 'Dara Petak dan Dara Jingga di Jawa', 'Menurut Pararaton, dua putri Melayu dibawa ke Jawa; Dara Petak menikah dengan Raden Wijaya dan menjadi ibu Jayanagara.', true),
        ev(1300, 'Candi Muara Jambi dan Padang Roco', 'Kompleks candi di sekitar Batang Hari sudah ramai pada masa ini.', true),
        ev(1347, 'Adityawarman memaklumkan diri', 'Prasasti di punggung arca Amoghapasa mencatat Adityawarman sebagai maharajadhiraja.'),
      ],
    },
    {
      story:
        'Sesudah 1347 pusat kerajaan berpindah ke Pagaruyung di dataran tinggi, dekat tambang emas. Adityawarman mengirim utusan ke Tiongkok dan meninggalkan prasasti, kemudian Islam masuk perlahan. Pagaruyung dipimpin Rajo Tigo Selo dan Basa Ampek Balai, sementara adat matrilineal menjaga warisan lewat garis ibu. Perang Padri pecah pada awal abad ke-19 dan menghancurkan istana serta membawa Belanda ke pedalaman.',
      chronicle: [
        ev(1371, 'Utusan Adityawarman ke Tiongkok', 'Sumber Tiongkok mencatat enam utusan dari Sumatra antara 1371 dan 1377.'),
        ev(1375, 'Prasasti Adityawarman terakhir', 'Prasasti terakhir yang diketahui dari masa Adityawarman dibuat pada 1375.'),
        ev(1409, 'Pertempuran Padang Sibusuk', 'Tradisi mengisahkan pertempuran di Padang Sibusuk; tahunnya hanya perkiraan.', true),
        ev(1500, 'Islam masuk ke Minangkabau', 'Tomé Pires mencatat salah satu raja Minangkabau sudah masuk Islam.', true),
        ev(1600, 'Aceh menguasai pesisir barat', 'Aceh Darussalam menguasai pelabuhan-pelabuhan pesisir barat Sumatra.', true),
        ev(1663, 'VOC di Padang', 'VOC mendirikan pos dagang di Padang dan bersaing dengan Aceh.'),
        ev(1803, 'Tiga haji pulang dari Mekkah', 'Haji Miskin, Haji Sumanik, dan Haji Piobang membawa gagasan pemurnian agama dan memulai gerakan Padri.'),
        ev(1815, 'Peristiwa Koto Tangah', 'Keluarga raja Pagaruyung dilaporkan dibunuh oleh kaum Padri; rincian dan tahunnya masih diperdebatkan.', true),
        ev(1821, 'Perjanjian Bagagarsyah dengan Belanda', 'Sultan Bagagarsyah dan kaum adat bersekutu dengan Belanda melawan Padri.'),
        ev(1833, 'Bagagarsyah dibuang ke Batavia', 'Sultan Bagagarsyah ditangkap dan dibuang; kerajaan Pagaruyung berakhir.'),
      ],
    },
  ],
  banjar: [
    {
      story:
        'Hikayat Banjar menuturkan kisah dari Negara Dipa, kerajaan yang menurut tradisi didirikan Ampu Jatmika di Amuntai. Legenda Putri Junjung Buih dan Pangeran Suryanata dari Majapahit menjadi penyambung antara kisah lokal dan Jawa. Setelah itu pusat bergeser ke Negara Daha, tetapi perang saudara pada awal abad ke-16 menghancurkannya. Tanggal-tanggal dalam masa ini adalah perkiraan dari tradisi hikayat.',
      chronicle: [
        ev(1387, 'Ampu Jatmika mendirikan Negara Dipa', 'Menurut Hikayat Banjar, Ampu Jatmika membangun Candi Agung di Amuntai; tahunnya perkiraan.', true),
        ev(1400, 'Putri Junjung Buih dan Suryanata', 'Legenda menuturkan Putri Junjung Buih menikah dengan Pangeran Suryanata dari Majapahit.', true),
        ev(1448, 'Negara Daha', 'Menurut hikayat, ibu kota bergeser ke Negara Daha.', true),
        ev(1500, 'Daha sebagai pusat perdagangan', 'Pelabuhan sungai di Daha ramai dengan hasil hutan dan emas.', true),
        ev(1510, 'Raden Samudra tersisih', 'Menurut hikayat, Raden Samudra tersisih dari istana Daha setelah wafatnya Raja Sukarama.', true),
        ev(1520, 'Perang saudara', 'Pangeran Tumenggung dan Raden Samudra berebut takhta Daha.', true),
        ev(1525, 'Bantuan Demak', 'Raden Samudra meminta bantuan Demak dengan syarat masuk Islam.', true),
      ],
    },
    {
      story:
        'Kesultanan Banjar lahir pada 24 September 1526, ketika Raden Samudra yang dibantu Demak masuk Islam dan menjadi Sultan Suriansyah. Banjarmasin tumbuh sebagai pelabuhan lada, tetapi ancaman Belanda memaksa istana pindah ke Martapura. Pada abad ke-18 VOC mengikat Banjar dengan kontrak dagang, sementara ulama Syekh Arsyad al-Banjari mengajarkan fiqh. Konflik takhta pada 1857 mendorong Perang Banjar.',
      chronicle: [
        ev(1526, 'Sultan Suriansyah', 'Raden Samudra masuk Islam dan menjadi Sultan Suriansyah pada 24 September 1526, hari jadi Banjarmasin.'),
        ev(1595, 'Sultan Mustain Billah', 'Sultan Mustain Billah memerintah hingga 1642 pada puncak perdagangan lada.'),
        ev(1612, 'Istana pindah ke Martapura', 'Setelah serangan Belanda, istana dipindahkan ke Martapura (Kayu Tangi).', true),
        ev(1633, 'Banjar menolak VOC', 'Banjar menolak tuntutan monopoli VOC.'),
        ev(1663, 'Perang saudara', 'Perang saudara berkecamuk antar-pangeran sampai 1679.'),
        ev(1747, 'Kontrak lada dengan VOC', 'VOC memperoleh kontrak penjualan lada dari Banjar.'),
        ev(1772, 'Arsyad al-Banjari pulang dari Mekkah', 'Muhammad Arsyad al-Banjari kembali dan mengajar di Dalam Pagar.'),
        ev(1779, 'Sabilal Muhtadin', 'Ia menulis kitab fiqh Sabilal Muhtadin dalam bahasa Melayu.'),
        ev(1787, 'Penyerahan kedaulatan kepada VOC', 'Banjar menyerahkan sebagian kedaulatan kepada VOC.'),
        ev(1857, 'Tamjidillah diangkat Belanda', 'Belanda mengangkat Tamjidillah; rakyat dan Pangeran Hidayatullah menolak.'),
        ev(1859, 'Perang Banjar meletus', 'Pada 28 April 1859 pasukan Antasari menyerang tambang batu bara Oranje Nassau di Pengaron.'),
        ev(1860, 'Belanda menghapus kesultanan', 'Belanda menghapus Kesultanan Banjar dan perang berlanjut di pedalaman.'),
      ],
    },
    {
      story:
        'Setelah kesultanan dihapus, perlawanan pindah ke pedalaman sungai Barito. Pangeran Antasari diangkat sebagai pemimpin tertinggi, tetapi wafat karena cacar pada 1862. Penerusnya, Sultan Muhammad Seman, melanjutkan perlawanan hingga gugur pada 1905 di Puruk Cahu.',
      chronicle: [
        ev(1862, 'Antasari diangkat panembahan', 'Pangeran Antasari diangkat sebagai Panembahan Amiruddin Khalifatul Mukminin.'),
        ev(1862, 'Antasari wafat', 'Pada 11 Oktober 1862 Antasari wafat karena cacar.'),
        ev(1864, 'Demang Lehman dihukum gantung', 'Pemimpin perang Demang Lehman dihukum gantung oleh Belanda.'),
        ev(1880, 'Muhammad Seman memimpin perlawanan', 'Sultan Muhammad Seman meneruskan perlawanan dari pedalaman Barito.', true),
        ev(1905, 'Muhammad Seman gugur', 'Muhammad Seman gugur di Puruk Cahu, menandai akhir perlawanan.'),
      ],
    },
  ],
  'bone-bugis': [
    {
      story:
        'Dalam tradisi Bugis, Luwu adalah kerajaan tertua dan tanah asal epos La Galigo, salah satu karya sastra terpanjang di dunia. Sesudahnya Bone, Wajo, dan Soppeng tumbuh sebagai kerajaan sawah di tepi Danau Tempe. Pada abad ke-16 mereka bersatu dalam Tellumpoccoe untuk menghadapi Gowa. Banyak tahun pada masa awal ini hanya perkiraan dari lontara.',
      chronicle: [
        ev(1300, 'Luwu dan La Galigo', 'Luwu dikenal sebagai kerajaan Bugis tertua dan tanah asal epos La Galigo, Memory of the World UNESCO 2011.', true),
        ev(1330, 'Manurunge ri Matajang', 'Tradisi Bone menceritakan Manurunge ri Matajang sebagai raja pertama Bone.', true),
        ev(1399, 'Wajo', 'Menurut tradisi, Wajo berdiri di sekitar Danau Tempe.', true),
        ev(1500, 'Bone di bawah La Umasa', 'Bone makin kuat pada masa La Umasa.', true),
        ev(1582, 'Tellumpoccoe', 'Bone, Wajo, dan Soppeng bersekutu menghadapi Gowa.'),
        ev(1605, 'Raja Luwu masuk Islam', 'Menurut tradisi, Raja Luwu masuk Islam pada 4 Februari 1605.', true),
        ev(1611, 'Gowa menaklukkan Bone', 'Gowa menaklukkan Bone dan mengislamkannya.'),
      ],
    },
    {
      story:
        'Abad ke-17 diwarnai pergulatan antara Gowa dan Bone. Gowa menaklukkan Bone lagi pada 1643, dan Arung Palakka memimpin pemberontakan sekitar 1660 lalu mengungsi ke Buton dan Batavia. Bersama VOC di bawah Speelman, ia mengalahkan Gowa dalam Perang Makassar (1666–1669). Setelah itu Bone menjadi kekuatan utama di Sulawesi Selatan dan para pelaut Bugis menyebar ke seluruh Nusantara.',
      chronicle: [
        ev(1611, 'Bone masuk Islam', 'Bone menerima Islam bersamaan dengan takluknya kepada Gowa.'),
        ev(1643, 'Gowa menaklukkan Bone lagi', 'Gowa kembali menaklukkan Bone pada 1643 atau 1644.'),
        ev(1660, 'Pemberontakan Arung Palakka', 'Arung Palakka memimpin pemberontakan dan melarikan diri ke Buton lalu Batavia.', true),
        ev(1666, 'Perang Makassar', 'Arung Palakka bersekutu dengan Speelman dan VOC melawan Gowa.'),
        ev(1667, 'Perjanjian Bongaya', 'Gowa menyerah kepada VOC dan sekutunya.'),
        ev(1669, 'Somba Opu jatuh', 'Benteng Somba Opu direbut VOC.'),
        ev(1672, 'Arung Palakka menjadi Raja Bone', 'Ia menjadi Mangkau Bone.'),
        ev(1676, 'Amanna Gappa', 'Hukum pelayaran Bugis yang disusun pada abad ke-17.', true),
        ev(1696, 'Arung Palakka wafat', 'Arung Palakka wafat setelah memerintah Bone sekitar dua dekade.'),
        ev(1700, 'Diaspora Bugis', 'Orang Bugis seperti Daeng Parani menetap di Riau, Johor, Selangor, dan Kalimantan.', true),
        ev(1739, 'La Maddukelleng melawan VOC', 'La Maddukelleng dari Wajo melawan VOC.'),
      ],
    },
    {
      story:
        'Abad ke-19 membawa Belanda kembali ke Sulawesi Selatan. Setelah 1816, ekspedisi demi ekspedisi menekan Bone. Ketika ekspedisi terakhir pada 1905 menangkap La Pawawoi Karaeng Segeri, Bone resmi berada di bawah pemerintahan langsung. Kerajaan dipulihkan pada 1931 dengan Andi Mappanyukki sebagai raja.',
      chronicle: [
        ev(1816, 'Belanda kembali', 'Belanda kembali ke Sulawesi Selatan setelah masa Inggris.'),
        ev(1824, 'Ekspedisi Belanda pertama', 'Belanda mengirim ekspedisi pertama ke Bone.'),
        ev(1825, 'Bone menyerang benteng Belanda', 'Pasukan Bone menyerang benteng Belanda.'),
        ev(1859, 'Ekspedisi Belanda kedua', 'Ekspedisi kedua Belanda terhadap Bone berlangsung pada 1859–1860.'),
        ev(1905, 'Ekspedisi terakhir', 'Belanda menangkap La Pawawoi Karaeng Segeri dan mengasingkannya ke Bandung.'),
      ],
    },
  ],
  siak: [
    {
      story:
        'Kisah Siak bermula setelah Raja Kecil, yang pada 1718 merebut Johor lalu diusir kaum Bugis, mendirikan kesultanan di Buantan pada 1722. Siak lalu menguasai pelabuhan-pelabuhan di pesisir timur Sumatra dan menyaingi VOC di Selat Malaka. Pada abad ke-19, Perjanjian London dan traktat dengan Belanda memangkas wilayahnya.',
      chronicle: [
        ev(1722, 'Raja Kecil mendirikan Siak', 'Raja Kecil (Sultan Abdul Jalil Rahmat Syah) mendirikan Siak di Buantan setelah diusir Bugis dari Johor.'),
        ev(1746, 'Sultan Muzaffar Syah', 'Sultan Muzaffar Syah naik takhta.'),
        ev(1759, 'Serangan ke pos VOC di Guntung', 'Siak menyerang pos VOC di Guntung.'),
        ev(1784, 'Ibu kota di Senapelan', 'Pasar Senapelan didirikan pada 23 Juni 1784, cikal bakal Pekanbaru.'),
        ev(1791, 'Sayyid Ali', 'Dinasti Arab-Melayu Syarif berkuasa di Siak.', true),
        ev(1800, 'Puncak kekuasaan Siak', 'Siak menguasai pesisir timur hingga Deli, Langkat, dan Asahan.', true),
        ev(1824, 'Traktat London', 'Inggris dan Belanda membagi wilayah pengaruh di Selat Malaka.'),
        ev(1847, 'Gurindam Dua Belas', 'Di Riau–Lingga, tetangga Siak, Raja Ali Haji menulis Gurindam Dua Belas.'),
        ev(1858, 'Traktat Siak–Belanda', 'Siak menyerahkan wilayah utara kepada Belanda.'),
      ],
    },
    {
      story:
        'Setelah 1858 Siak menyempit dan berada di bawah Keresidenan. Sultan Syarif Hasyim membangun Istana Asserayah Hasyimiah mulai 1889. Pada 1915 Sultan Syarif Kasim II naik takhta, dan pada November 1945 ia menyatakan setia kepada Republik Indonesia. Siak bergabung dengan RI pada 1946.',
      chronicle: [
        ev(1858, 'Siak kehilangan wilayah utara', 'Setelah traktat, wilayah utara Siak hilang.'),
        ev(1873, 'Keresidenan', 'Siak dimasukkan ke Keresidenan Belanda.'),
        ev(1889, 'Pembangunan Istana Siak', 'Sultan Syarif Hasyim membangun Istana Asserayah Hasyimiah, selesai sekitar 1893.', true),
        ev(1915, 'Syarif Kasim II naik takhta', 'Sultan Syarif Kasim II naik takhta.'),
        ev(1945, 'Siak setia kepada RI', 'Pada November 1945 Syarif Kasim II menyatakan setia kepada RI dan menyumbang 13 juta gulden.'),
        ev(1946, 'Siak bergabung dengan RI', 'Siak resmi bergabung dengan Republik Indonesia.'),
      ],
    },
  ],
  bima: [
    {
      story:
        'Kisah Bima bermula dari Mbojo, kerajaan di timur Pulau Sumbawa. Legenda dalam Bo Sangaji Kai menuturkan Sang Bima, tokoh dari Jawa, sebagai leluhur raja-raja. Nagarakretagama (1365) menyebut Bhima di antara daerah Majapahit. Tomé Pires mencatat ekspor kain, kuda, budak, dan kayu sapan, dan ekspedisi Makassar mulai datang pada 1618–1619.',
      chronicle: [
        ev(1365, 'Nagarakretagama menyebut Bhima', 'Bhima disebut di antara daerah Majapahit.'),
        ev(1400, 'Sang Bima', 'Bo Sangaji Kai menuturkan Sang Bima, tokoh legenda dari Jawa.', true),
        ev(1515, 'Tomé Pires mencatat Bima', 'Pires mencatat ekspor kain, kuda, budak, dan kayu sapan.', true),
        ev(1618, 'Ekspedisi Makassar ke Sumbawa', 'Gowa menyerang Sumbawa.'),
        ev(1619, 'Ekspedisi Makassar kedua', 'Ekspedisi kedua Gowa tiba di Sumbawa.'),
      ],
    },
    {
      story:
        'Pada 7 Februari 1621 La Kai masuk Islam dengan bantuan mubalig Makassar dan menjadi Sultan Abdul Kahir, sultan pertama Bima. Bima tunduk pada VOC pada 1669, dan letusan Tambora 1815 menghancurkan kerajaan di sekitarnya. Pada 1945 Sultan Muhammad Salahuddin mendukung Republik Indonesia, dan swapraja Bima dihapus pada 1958.',
      chronicle: [
        ev(1621, 'La Kai masuk Islam', 'La Kai masuk Islam pada 7 Februari 1621 dan menjadi Sultan Abdul Kahir.'),
        ev(1633, 'Pemberontakan ditumpas', 'Pasukan Sulawesi menumpas pemberontakan pada 1632–1633.'),
        ev(1640, 'Sirajuddin naik takhta', 'Sultan Abdul Kahir wafat dan Sirajuddin naik takhta.'),
        ev(1669, 'Bima tunduk pada VOC', 'Perjanjian 8 Desember 1669 mengikat Bima pada VOC.'),
        ev(1815, 'Letusan Tambora', 'Letusan Tambora pada 10 April menyebabkan kelaparan dan melenyapkan Tambora dan Pekat.'),
        ev(1905, 'Belanda memperketat kendali', 'Belanda memperketat kendali atas Bima.'),
        ev(1920, 'Manggarai lepas', 'Manggarai terlepas dari Bima.'),
        ev(1942, 'Pendudukan Jepang', 'Jepang menduduki Bima.'),
        ev(1945, 'Dukungan kepada RI', 'Sultan Muhammad Salahuddin mendukung Republik Indonesia.'),
        ev(1958, 'Swapraja dihapus', 'Swapraja Bima dihapus.'),
      ],
    },
  ],
};
