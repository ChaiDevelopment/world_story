import { ev, type ChronicleBook } from './chronicle';

/** Kronik periode peradaban kuno tambahan (urutan = indeks `territories`). */
export const chroniclesAncient2: ChronicleBook = {
  het: [
    {
      story:
        'Kisah ini bermula di dataran tinggi Anatolia tengah. Para raja yang berbicara bahasa Indo-Eropa memilih Hattusa, kota di atas tebing batu, sebagai pusat, lalu mengirim pasukan sampai ke Babilonia. Namun kerajaan muda ini lama diganggu perebutan takhta dan serangan Kaska dari pegunungan utara. Dekret Telipinu berusaha menertibkan pewarisan takhta agar darah tidak terus tumpah di istana.',
      chronicle: [
        ev(-1650, 'Hattusili I memilih Hattusa', 'Raja yang memakai nama "orang Hattusa" memindahkan pusat kerajaan ke kota di lengkung Sungai Kızılırmak dan mulai berperang ke Suriah utara.', true),
        ev(-1620, 'Wasiat Hattusili I', 'Raja tua menunjuk pewaris dalam sebuah teks yang memperlihatkan pergulatan istana, dan menasihati para pembesar agar bersatu.', true),
        ev(-1595, 'Mursili I menjarah Babilonia', 'Pasukan Het menyerbu Babilonia dan mengakhiri dinasti Hammurabi; para sejarawan masih berdebat tentang tahun tepatnya.', true),
        ev(-1590, 'Mursili I dibunuh', 'Setelah kembali ke tanah air, raja dibunuh oleh ipar dan pembesarnya sendiri; kerajaan masuk masa perebutan takhta.', true),
        ev(-1525, 'Dekret Telipinu', 'Telipinu menetapkan aturan pewarisan dan menyusun sejarah singkat kerajaan, sebagai usaha menghentikan pembunuhan di antara kerabat.', true),
        ev(-1500, 'Masa lemah dan serangan Kaska', 'Kerajaan menyusut ke wilayah inti, sementara suku-suku Kaska dari pegunungan Laut Hitam berulang kali menyerang dan membakar kota-kota perbatasan.', true),
        ev(-1450, 'Tudhaliya I melawan Assuwa', 'Kerajaan bangkit lagi dan mengalahkan persekutuan negara-negara barat Anatolia yang disebut Assuwa.', true),
        ev(-1430, 'Perjanjian dengan Kizzuwatna', 'Het dan Kizzuwatna di Kilikia menandatangani perjanjian yang mengikat dua raja; ini bentuk awal perjanjian Het yang kelak makin tertata.', true),
      ],
    },
    {
      story:
        'Berabad-abad kemudian, Het menjadi salah satu dari beberapa kekuatan besar Timur Dekat. Suppiluliuma I menundukkan Mitanni dan merebut Suriah, dan kerajaan ini berhadapan langsung dengan Mesir di Kadesh. Perang itu berakhir bukan dengan kemenangan jelas, melainkan dengan perjanjian damai tertulis dan pernikahan antardinasti. Setelah itu datang kekeringan, kelaparan, dan guncangan besar yang menutup Zaman Perunggu.',
      chronicle: [
        ev(-1344, 'Suppiluliuma I menundukkan Mitanni', 'Raja Het menyerbu Suriah, menaklukkan Mitanni, dan menempatkan putra-putranya di Karkemis dan Aleppo.', true),
        ev(-1325, 'Surat janda firaun', 'Seorang ratu Mesir yang disebut Dakhamunzu meminta salah satu putra Suppiluliuma untuk menjadi suaminya; pangeran itu tewas dalam perjalanan.', true),
        ev(-1322, 'Wabah di istana', 'Wabah yang dibawa tawanan perang merenggut nyawa Suppiluliuma I dan penggantinya, menurut doa-doa Mursili II.', true),
        ev(-1290, 'Muwatalli II memindahkan ibu kota', 'Raja memindahkan istana sementara ke Tarhuntassa di selatan, lalu kembali ke Hattusa pada masa penggantinya.', true),
        ev(-1274, 'Pertempuran Kadesh', 'Muwatalli II melawan Ramses II dengan ribuan kereta perang di Suriah; kedua pihak mengklaim menang.'),
        ev(-1259, 'Perjanjian Het-Mesir', 'Hattusili III dan Ramses II menandatangani perjanjian damai tertulis tertua yang dikenal; salinannya kini terpajang di markas PBB.'),
        ev(-1245, 'Ramses II menikahi putri Het', 'Putri sulung Hattusili III dikirim ke Mesir sebagai pengantin, memperkuat persekutuan.'),
        ev(-1237, 'Tudhaliya IV dan Yazılıkaya', 'Raja memperluas Hattusa dan memerintahkan relief batu para dewa di kuil terbuka Yazılıkaya.', true),
        ev(-1200, 'Kekeringan dan Bangsa Laut', 'Panen gagal, kapal gandum dikirim dari Mesir, dan Bangsa Laut mengguncang pesisir; para sejarawan masih berdebat tentang sebab utamanya.', true),
        ev(-1180, 'Hattusa dibakar dan ditinggalkan', 'Kota ibu kota terbakar dan sepi di masa Suppiluliuma II, raja terakhir yang diketahui; negara-negara Neo-Het bertahan di Suriah.', true),
      ],
    },
  ],
  'fenisia-kartago': [
    {
      story:
        'Pada mulanya, ketika kerajaan-kerajaan besar Zaman Perunggu runtuh, kota-kota kecil di pesisir Lebanon justru bangkit. Pelaut Tirus, Sidon, dan Byblos berlayar membawa kayu aras dan kain ungu, lalu menyebarkan sistem tulisan yang hanya memerlukan dua puluh dua huruf. Di sepanjang rute mereka berdiri pos-pos dagang, dan di antaranya kelak lahir Kartago.',
      chronicle: [
        ev(-1200, 'Kota-kota Fenisia bangkit', 'Setelah runtuhnya Zaman Perunggu, kota-kota pesisir Levant bertahan dan menjadi pusat dagang laut yang mandiri.', true),
        ev(-1100, 'Tiglat-Pileser I menerima upeti', 'Raja Asyur menerima hadiah dari Byblos, Sidon, dan Arvad, dan berlayar dengan kapal Arvad; ini kontak awal Asyur dengan pelaut Fenisia.', true),
        ev(-1050, 'Alfabet 22 huruf di Byblos', 'Prasasti pada sarkofagus Raja Ahiram dari Byblos memakai alfabet Fenisia, leluhur alfabet Yunani dan Latin.', true),
        ev(-970, 'Hiram I dari Tirus', 'Menurut Alkitab, Raja Hiram bersekutu dengan Salomo dan mengirim kayu aras serta tukang untuk Bait Suci di Yerusalem.', true),
        ev(-900, 'Koloni Kition di Siprus', 'Pedagang Tirus mendirikan permukiman di Kition, titik singgah menuju barat.', true),
        ev(-870, 'Asyur memungut upeti', 'Raja-raja Asyur mulai memungut upeti dari kota-kota Fenisia, yang membayar demi menjaga perdagangannya.', true),
        ev(-840, 'Utica dan Gadir', 'Tradisi Yunani dan Romawi menyebut Utica dan Gadir (Cadiz) jauh lebih tua, tetapi hasil arkeologi menunjukkan permukiman pada sekitar abad ke-9 hingga ke-8 SM.', true),
      ],
    },
    {
      story:
        'Menurut tradisi, Ratu Elissa dari Tirus melarikan diri dari saudaranya dan mendirikan Kartago di pantai Tunisia. Dari kota pelabuhan itu lahir kekuatan baru ketika induknya, Tirus, jatuh ke tangan Asyur, Babilonia, dan Persia. Kartago memimpin koloni-koloni barat, bersaing dengan Yunani di Sisilia, dan berdagang dengan Roma lewat perjanjian tertulis.',
      chronicle: [
        ev(-814, 'Elissa mendirikan Kartago', 'Menurut tradisi, Elissa (Dido), putri Tirus, mendirikan kota baru; arkeologi menunjukkan permukiman sejak sekitar abad ke-8 SM.', true),
        ev(-701, 'Sanherib menyerang Tirus', 'Raja Asyur menyerbu pesisir Fenisia dan memaksa raja Sidon melarikan diri.'),
        ev(-600, 'Kartago memimpin koloni barat', 'Kartago mulai menggantikan Tirus sebagai pemimpin permukiman Fenisia di Afrika utara, Sardinia, Sisilia, dan Spanyol.', true),
        ev(-573, 'Tirus menyerah ke Nebukadnezar', 'Setelah pengepungan sekitar tiga belas tahun, Tirus mengakui kekuasaan Babilonia.'),
        ev(-535, 'Pertempuran Alalia', 'Armada Kartago dan Etruria menghadapi pelaut Yunani Phokaia di dekat Korsika; Yunani menang secara taktis tetapi terpaksa meninggalkan pulau.', true),
        ev(-509, 'Perjanjian Kartago-Roma pertama', 'Menurut Polybius, Roma dan Kartago mengatur pelayaran dan dagang di wilayah masing-masing.', true),
        ev(-500, 'Pelayaran Hanno', 'Hanno menyusuri pantai Afrika barat dengan puluhan kapal untuk mendirikan koloni; tahunnya diperkirakan sekitar 500 hingga 425 SM.', true),
        ev(-480, 'Pertempuran Himera', 'Pasukan Kartago kalah dari penguasa Yunani di Sisilia, Gelon dari Syracusa dan Theron dari Akragas.'),
        ev(-409, 'Selinus jatuh', 'Kartago menyerang dan menghancurkan Selinus, membuka perang panjang untuk menguasai Sisilia.'),
        ev(-348, 'Perjanjian kedua dengan Roma', 'Kartago dan Roma memperbarui perjanjian dagang dan membatasi pelayaran Romawi di pantai Afrika.'),
        ev(-332, 'Aleksander menghancurkan Tirus', 'Setelah pengepungan tujuh bulan, Aleksander Agung merebut Tirus, dan banyak penduduknya dijual atau mengungsi.'),
        ev(-310, 'Agathokles menyerbu Afrika', 'Penguasa Syracusa itu mendarat dekat Kartago dan bertahan sampai 307, tanda bahwa kota ini tidak kebal.'),
      ],
    },
    {
      story:
        'Perang Punik terbentang selama lebih dari satu abad. Kartago kehilangan Sisilia, lalu membangun kerajaan baru di Spanyol, yang menjadi pangkalan Hannibal untuk menyerbu Italia lewat Alpen. Setelah Cannae dan Zama, Kartago kehilangan segalanya kecuali kota. Pada 146 SM, Roma menghancurkannya dan menjadikan wilayahnya provinsi.',
      chronicle: [
        ev(-264, 'Perang Punik I dimulai', 'Sengketa atas Messana di Sisilia menyeret Roma dan Kartago ke perang laut dan darat.'),
        ev(-241, 'Kartago kalah di Kepulauan Aegates', 'Armada Kartago kalah dan Sisilia diserahkan kepada Roma; perang berakhir.'),
        ev(-241, 'Perang Tentara Bayaran', 'Pasukan sewaan yang tak dibayar memberontak, dan Kartago baru memadamkannya pada 237 SM dengan susah payah.'),
        ev(-238, 'Sardinia direbut Roma', 'Di tengah kekacauan Kartago, Roma menduduki Sardinia dan Korsika.'),
        ev(-237, 'Hamilkar Barka ke Spanyol', 'Hamilkar membangun basis di semenanjung itu untuk mengganti kerugian Sisilia.'),
        ev(-228, 'Kartago Baru', 'Hasdrubal mendirikan Qart Hadasht, kini Cartagena, sebagai ibu kota Kartago di Spanyol.', true),
        ev(-218, 'Hannibal menyeberangi Alpen', 'Hannibal membawa pasukan dan gajah menembus Alpen dan masuk Italia.'),
        ev(-216, 'Pertempuran Cannae', 'Hannibal mengepung dan menghancurkan pasukan Romawi dalam salah satu kekalahan terburuk Roma.'),
        ev(-209, 'Scipio merebut Kartago Baru', 'Panglima Romawi Scipio mengambil basis utama Kartago di Spanyol.'),
        ev(-202, 'Pertempuran Zama', 'Scipio Africanus mengalahkan Hannibal di Afrika dan mengakhiri Perang Punik II.'),
        ev(-149, 'Perang Punik III dimulai', 'Roma menuntut agar Kartago meninggalkan kota; ketika menolak, pengepungan dimulai.'),
        ev(-146, 'Kartago dihancurkan', 'Setelah pengepungan, kota dibakar dan wilayahnya menjadi provinsi Africa; kisah tanah ditaburi garam adalah karangan penulis belakangan.'),
      ],
    },
  ],
  'israel-kuno': [
    {
      story:
        'Kisah tentang Israel purba ditulis lebih dari sekali: sekali dalam kitab-kitab suci, dan sekali lagi dalam batu dan tanah. Menurut Alkitab, Daud dan Salomo memerintah kerajaan yang bersatu dari Yerusalem, lalu negeri itu terbelah menjadi Israel di utara dan Yehuda di selatan. Prasasti Asyur dan Moab memastikan keberadaan sebagian rajanya, tetapi para arkeolog masih berdebat tentang ukuran kerajaan Daud dan Salomo. Pada akhirnya, Asyur dan Babilonia menyudahi kedua kerajaan itu.',
      chronicle: [
        ev(-1000, 'Daud menurut Alkitab', 'Alkitab menyebut Daud merebut Yerusalem dan menjadikannya ibu kota; Prasasti Tel Dan dari sekitar 840 SM menyebut "Bait Daud", tetapi ukuran kerajaannya masih diperdebatkan.', true),
        ev(-960, 'Salomo dan Bait Suci Pertama', 'Menurut tradisi, Salomo membangun Bait Suci di Yerusalem dengan bantuan kayu dan tukang dari Tirus; tidak ada sisa bangunan itu yang ditemukan.', true),
        ev(-930, 'Kerajaan terbelah', 'Menurut Alkitab, kerajaan terpecah menjadi Israel di utara (ibu kota Samaria) dan Yehuda di selatan (Yerusalem).', true),
        ev(-853, 'Ahab di Qarqar', 'Raja Salmaneser III dari Asyur mencatat Ahab dari Israel mengirim sekitar 2.000 kereta perang dalam persekutuan melawan Asyur.'),
        ev(-840, 'Prasasti Tel Dan', 'Sebuah prasasti Aram di Tel Dan menyebut "Bait Daud" dan raja Israel, bukti tertulis tertua yang menyebut dinasti Daud.', true),
        ev(-840, 'Prasasti Mesha', 'Raja Mesha dari Moab mengisahkan pembebasan negerinya dari Israel dan menyebut nama Yahweh.', true),
        ev(-722, 'Samaria jatuh', 'Asyur menaklukkan kerajaan utara dan memindahkan banyak penduduknya; kisah "sepuluh suku yang hilang" lahir dari peristiwa ini.'),
        ev(-701, 'Sanherib mengepung Yerusalem', 'Hizkia menggali terowongan air untuk menyediakan air bagi kota; kota bertahan, tetapi Yehuda dikenai upeti berat.'),
        ev(-622, 'Reformasi Yosia', 'Raja Yosia memusatkan ibadah di Bait Suci Yerusalem setelah menemukan sebuah kitab hukum.', true),
        ev(-609, 'Yosia tewas di Megiddo', 'Raja Yosia gugur ketika menghadang pasukan Firaun Neko II yang bergerak ke utara.', true),
        ev(-597, 'Pembuangan pertama', 'Nebukadnezar merebut Yerusalem dan membawa raja Yoyakhin serta ribuan orang pilihan ke Babilonia.'),
        ev(-586, 'Bait Suci Pertama dihancurkan', 'Setelah pengepungan, Nebukadnezar membakar Bait Suci dan kota, dan banyak orang dibuang ke Babilonia.'),
      ],
    },
    {
      story:
        'Di tanah pembuangan, orang-orang Yehuda mengumpulkan dan menulis ulang tradisi mereka. Setelah Koresh dari Persia menaklukkan Babilonia, sebagian pulang dan membangun kembali Bait Suci. Di bawah Persia, Yunani, dan Seleukia, Yehuda hidup sebagai wilayah kecil di sekitar Yerusalem, sampai pemberontakan keluarga Makabe membuka jalan bagi kemerdekaan sementara di bawah dinasti Hasmonea.',
      chronicle: [
        ev(-539, 'Koresh menaklukkan Babilonia', 'Raja Persia merebut Babilonia dan mulai memperbolehkan bangsa-bangsa buangan kembali.'),
        ev(-538, 'Maklumat kepulangan', 'Menurut kitab Ezra, Koresh mengizinkan orang Yahudi pulang dan membangun kembali Bait Suci.', true),
        ev(-516, 'Bait Suci Kedua selesai', 'Bait Suci di Yerusalem didedikasikan kembali, sederhana dibandingkan yang pertama.', true),
        ev(-445, 'Nehemia membangun tembok', 'Nehemia, pejabat Persia keturunan Yehuda, memimpin pembangunan kembali tembok Yerusalem.', true),
        ev(-332, 'Aleksander Agung', 'Yudea masuk dunia Yunani; banyak orang Yahudi tinggal di Aleksandria dan kota lain.'),
        ev(-198, 'Seleukia menguasai Yudea', 'Antiokhus III mengalahkan Mesir Ptolemeus dan mengambil Yudea.'),
        ev(-167, 'Antiokhus IV menajiskan Bait Suci', 'Raja Seleukia melarang praktik Yahudi dan menempatkan altar dewa Yunani di Bait Suci; pemberontakan keluarga Makabe pun pecah.'),
        ev(-164, 'Penyucian Bait Suci', 'Yudas Makabe merebut Yerusalem dan menyucikan Bait Suci; peristiwa ini dikenang dalam perayaan Hanukkah.'),
        ev(-140, 'Dinasti Hasmonea', 'Simon Makabe diakui sebagai pemimpin dan imam besar, awal kemerdekaan Yudea.'),
        ev(-104, 'Aristobulus I menjadi raja', 'Penguasa Hasmonea mulai memakai gelar raja dan memperluas wilayah ke Galilea.', true),
        ev(-63, 'Pompeius merebut Yerusalem', 'Perang saudara antara dua saudara Hasmonea mengundang Roma, dan Pompeius menguasai Yerusalem.'),
      ],
    },
    {
      story:
        'Di bawah Roma, Yudea diperintah raja klien lalu prokurator. Herodes Agung membangun besar-besaran, termasuk perluasan Bait Suci. Pajak, perbedaan agama, dan pertentangan golongan memicu pemberontakan pada 66 M, yang berakhir dengan kehancuran Bait Suci pada 70 M. Setelah pemberontakan Bar Kokhba, orang Yahudi dilarang memasuki Yerusalem, dan sejarah mereka bergulir lebih banyak di diaspora.',
      chronicle: [
        ev(-37, 'Herodes menjadi raja', 'Dengan dukungan Roma, Herodes merebut Yerusalem dan memerintah sebagai raja klien.'),
        ev(-20, 'Perluasan Bait Suci', 'Herodes memulai pembangunan besar Bait Suci; pekerjaan berlanjut hingga lama sesudah ia wafat.', true),
        ev(-4, 'Herodes wafat', 'Wilayahnya dibagi di antara putra-putranya.', true),
        ev(6, 'Yudea menjadi provinsi', 'Setelah Arkhelaos disingkirkan, Yudea dipimpin langsung oleh prokurator Romawi.'),
        ev(26, 'Pontius Pilatus', 'Pilatus menjadi prefek Yudea dan memerintah hingga sekitar 36.', true),
        ev(30, 'Yesus dari Nazaret disalibkan', 'Menurut tradisi Kristen dan catatan Romawi, Yesus dihukum mati di masa Pilatus; para sejarawan menempatkannya sekitar tahun 30.', true),
        ev(66, 'Perang Yahudi-Romawi I', 'Pemberontakan meletus, dipicu pajak dan perselisihan agama di Kaisarea dan Yerusalem.'),
        ev(70, 'Bait Suci Kedua dihancurkan', 'Titus merebut Yerusalem dan membakar Bait Suci; hanya sebagian tembok penyangganya (Tembok Barat) yang tersisa.'),
        ev(73, 'Masada', 'Benteng terakhir pemberontak di Masada jatuh ke tangan Romawi, menurut Yosefus; sebagian rincian kisahnya diperdebatkan.', true),
        ev(132, 'Pemberontakan Bar Kokhba', 'Simon bar Kokhba memimpin pemberontakan kedua setelah rencana kota Romawi di Yerusalem.'),
        ev(135, 'Aelia Capitolina', 'Hadrianus memadamkan pemberontakan, mendirikan Aelia Capitolina, dan menamai provinsi Syria Palaestina; banyak orang Yahudi hidup di diaspora.'),
      ],
    },
  ],
  'kush-aksum': [
    {
      story:
        'Di hulu Nil, bangsa Kush belajar banyak dari Mesir, tetapi tidak pernah menjadi bawahan yang patuh. Ketika Mesir terpecah, raja-raja Napata turun ke utara, menaklukkan negeri itu, dan memerintah sebagai firaun Dinasti ke-25. Asyur mengusir mereka, namun kerajaan itu tetap hidup, dan pusatnya perlahan bergeser ke selatan menuju Meroe.',
      chronicle: [
        ev(-1070, 'Kush lepas dari Mesir', 'Dengan runtuhnya Kerajaan Baru Mesir, Nubia mulai membentuk kerajaannya sendiri.', true),
        ev(-750, 'Kashta', 'Raja Kush Kashta memperluas pengaruh ke Mesir Hulu hingga Thebes.', true),
        ev(-727, 'Piye menaklukkan Mesir', 'Piye berlayar ke utara, menundukkan para penguasa Delta, dan mendirikan Dinasti ke-25; tahun pastinya diperdebatkan (sekitar 744 hingga 727 SM).', true),
        ev(-690, 'Taharqa dinobatkan', 'Firaun Kush yang membangun besar-besaran di Karnak dan Jebel Barkal, serta menahan Asyur beberapa tahun.'),
        ev(-671, 'Asyur mengusir Kush dari Mesir', 'Esarhaddon menyerbu Mesir dan merebut Memphis; Taharqa mundur ke selatan.'),
        ev(-663, 'Tanutamani kalah', 'Asyur menjarah Thebes dan mengakhiri kekuasaan Kush atas Mesir.'),
        ev(-656, 'Psamtik I menyatukan Mesir', 'Dinasti ke-26 memulihkan kekuasaan Mesir, dan Kush kembali ke Nubia.'),
        ev(-591, 'Psamtik II menjarah Napata', 'Pasukan Mesir menyerang jauh ke selatan, dan raja-raja Kush mulai menggeser pusat ke Meroe.'),
        ev(-525, 'Kambisus ke selatan', 'Menurut Herodotus, raja Persia mengirim pasukan ke Nubia, tetapi gagal karena kekurangan makanan; kisahnya sulit dipastikan.', true),
        ev(-400, 'Pusat bergeser ke Meroe', 'Pemukiman kerajaan bergeser ke selatan; para sejarawan menyebut abad ke-6 hingga ke-4 SM bagi perpindahan ini.', true),
      ],
    },
    {
      story:
        'Di Meroe, kerajaan Kush menjadi kerajaan Afrika yang berbeda dari Mesir. Hujan musim panas menumbuhkan padi-padian dan ternak di sekitar Pulau Meroe, dan bengkel besi mengepul. Aksara mereka sendiri dipakai di kuil dan makam. Kandake, ratu atau ibu ratu, berperan besar, dan Amanirenas menantang Roma sampai Roma sendiri memilih damai.',
      chronicle: [
        ev(-280, 'Arkamani memindahkan pemakaman', 'Raja Arkamani (Ergamenes) mulai dimakamkan di Meroe, bukan di Napata.', true),
        ev(-200, 'Aksara Meroitik', 'Kerajaan memakai aksara sendiri untuk menulis bahasa Meroitik; bunyinya dapat dibaca, tetapi maknanya sebagian besar belum terpecahkan.', true),
        ev(-170, 'Kandake pertama', 'Perempuan penguasa bergelar kandake (ratu) mulai memerintah.', true),
        ev(-100, 'Peleburan besi meluas', 'Meroe memiliki tumpukan terak besi yang besar, tanda produksi logam yang luas.', true),
        ev(-24, 'Amanirenas melawan Roma', 'Pasukan Kush menyerbu Aswan dan Philae, dan membawa pulang kepala perunggu patung Augustus, yang kini di British Museum.'),
        ev(-21, 'Perdamaian Samos', 'Setelah Roma membalas dengan serbuan ke Napata, Kush dan Augustus berdamai di Samos; Roma membatalkan upeti.', true),
        ev(25, 'Natakamani dan Amanitore', 'Raja dan kandake ini membangun kuil di Naqa dan Meroe; masa pemerintahan keduanya sering dianggap puncak Meroe.', true),
        ev(350, 'Ezana menyerang Meroe', 'Raja Ezana dari Aksum mengirim pasukan ke Nil dan merebut wilayah Meroe; kerajaan Kush pun bubar.', true),
      ],
    },
    {
      story:
        'Aksum telah menjadi kerajaan dagang sejak sekitar abad ke-1 M; Periplus Laut Erythrea menyebut pelabuhannya, Adulis. Atlas ini memulai periode Aksum pada 350 agar tidak tumpang tindih dengan Kush Meroe. Di dataran tinggi, raja-raja mendirikan obelisk raksasa dan mencetak koin emas, dan Ezana memeluk Kristen. Setelah berabad-abad berjaya, Aksum merosot dan pusat kerajaan bergeser ke pedalaman.',
      chronicle: [
        ev(350, 'Prasasti Ezana', 'Prasasti dalam bahasa Ge-ez, Yunani, dan Sabea mencatat kemenangan Ezana atas Kush dan Noba; ia sudah bersyukur kepada Tuhan umat Kristen.', true),
        ev(400, 'Stela raksasa', 'Aksum mendirikan stela batu tinggi sebagai penanda makam bangsawan; stela terbesar diperkirakan roboh saat didirikan.', true),
        ev(480, 'Sembilan Orang Suci', 'Menurut tradisi gereja Ethiopia, biarawan dari Suriah datang dan menyebarkan Kristen serta menerjemahkan Alkitab ke Ge-ez.', true),
        ev(520, 'Kosmas di Adulis', 'Pelaut Kosmas Indikopleustes mengunjungi Adulis dan menyalin sebuah prasasti Yunani yang kuno; ia menggambarkan perdagangan emas Aksum.', true),
        ev(525, 'Kaleb menaklukkan Himyar', 'Kaleb menyeberangi Laut Merah untuk melawan raja Himyar di Yaman dan memasang penguasa yang bersekutu dengan Aksum.', true),
        ev(570, 'Abraha dan Tahun Gajah', 'Abraha, gubernur Aksum di Yaman, menurut tradisi Islam bergerak ke Mekah dengan gajah pada tahun kelahiran Nabi Muhammad; tahun pastinya ditaksir sekitar 570.', true),
        ev(615, 'Hijrah pertama ke Aksum', 'Sekelompok Muslim awal mengungsi dari Mekah ke Aksum dan diterima oleh Najasyi (Negus).'),
        ev(700, 'Aksum merosot', 'Jalur dagang Laut Merah bergeser, dan Aksum menjadi lebih terisolasi; para sejarawan masih berdebat tentang sebab utamanya.', true),
        ev(940, 'Gudit menurut tradisi', 'Tradisi menyebut Ratu Gudit menghancurkan Aksum; kisah ini bersifat legendaris dan tahunnya hanya perkiraan.', true),
      ],
    },
  ],
  'parthia-sasaniyah': [
    {
      story:
        'Kisah ini bermula ketika kaum penunggang kuda Parni dari stepa timur Kaspia merebut sebuah provinsi Seleukia dan mendirikan dinasti Arsakid. Dalam dua abad mereka menguasai Iran dan Mesopotamia, dan memiliki pasukan berkuda dan pemanah yang membuat legiun Roma menderita. Parthia hidup dari Jalur Sutra dan berdamai dengan Roma setelah beberapa kali perang, sampai bangsawan Persis dari selatan menggulingkan mereka.',
      chronicle: [
        ev(-247, 'Arsakes I', 'Pemimpin suku Parni, Arsakes, memulai pemerintahan di Parthia; tahun pastinya diperdebatkan, dan tarikh Arsakid dihitung dari sini.', true),
        ev(-171, 'Mithridates I naik takhta', 'Raja yang akan memperluas Parthia jauh ke barat dan timur mulai memerintah.', true),
        ev(-141, 'Mithridates I merebut Mesopotamia', 'Setelah Media, Mithridates merebut Seleukia di Tigris dan mengambil Mesopotamia dari Seleukia.', true),
        ev(-129, 'Antiokhus VII tewas', 'Raja Seleukia Antiokhus VII gugur melawan Parthia, mengakhiri harapan Seleukia di Iran.'),
        ev(-115, 'Kontak dengan Han', 'Utusan Han dari Tiongkok mencapai wilayah Parthia sekitar tahun ini; Jalur Sutra mulai menghubungkan kedua kekaisaran.', true),
        ev(-53, 'Pertempuran Carrhae', 'Pemanah berkuda di bawah Surena mengalahkan Crassus dan pasukan Romawi, dan Crassus tewas.'),
        ev(-36, 'Antonius gagal', 'Marcus Antonius menyerbu Media Atropatene, tetapi mundur dengan kerugian besar.'),
        ev(-20, 'Panji legiun dikembalikan', 'Phraates IV mengembalikan panji-panji yang direbut di Carrhae kepada Augustus sebagai tanda damai.', true),
        ev(116, 'Trajanus merebut Ctesiphon', 'Kaisar Romawi itu mencapai Teluk Persia, tetapi mundur ketika wilayah-wilayah itu memberontak.'),
        ev(165, 'Ctesiphon dibakar', 'Pasukan Romawi di bawah Avidius Cassius membakar Ctesiphon, dan wabah menjalar ke barat bersama pasukan yang pulang.', true),
        ev(224, 'Ardashir I menang di Hormozgan', 'Ardashir dari Persis mengalahkan Artabanus IV dan mengakhiri kekuasaan Arsakid.'),
      ],
    },
    {
      story:
        'Ardashir mendirikan dinasti yang lebih terpusat, bertumpu pada pendeta Zoroaster dan bangsawan yang setia. Sasaniyah dan Roma-Bizantium bersaing berabad-abad, kadang saling menawan raja dan merebut kota suci. Perang terakhir dan terbesar, 602-628, menguras kedua kekaisaran, sehingga pasukan Arab dari gurun mengalahkan Persia dalam waktu kurang dari dua puluh tahun.',
      chronicle: [
        ev(226, 'Ardashir I dinobatkan', 'Ardashir menjadi "Raja segala Raja" di Ctesiphon dan memerintah dengan Zoroastrianisme sebagai landasan.'),
        ev(260, 'Shapur I menawan Valerianus', 'Kaisar Romawi itu tertawan di Edessa; peristiwa itu diabadikan dalam relief batu di Naqsh-e Rustam.'),
        ev(274, 'Mani dihukum mati', 'Pendiri Manikeisme meninggal di penjara atau dihukum di bawah pendeta Kartir; waktu pastinya sekitar 274 hingga 277.', true),
        ev(363, 'Julianus tewas', 'Kaisar Romawi Julianus gugur dalam serbuan ke Persia, dan penggantinya menyerahkan sejumlah wilayah.'),
        ev(484, 'Peroz gugur melawan Heftalit', 'Raja Peroz tewas dalam pertempuran di timur melawan Heftalit, dan Persia membayar upeti.'),
        ev(531, 'Khosrow I Anushirvan', 'Raja ini mengatur ulang pajak tanah, memperkuat pasukan, mendirikan pusat ilmu Gundishapur, dan membawa catur serta Kalilah wa Dimnah dari India.'),
        ev(562, 'Perdamaian lima puluh tahun', 'Sasaniyah dan Bizantium berdamai dan Bizantium membayar upeti tahunan.'),
        ev(614, 'Khosrow II merebut Yerusalem', 'Dalam perang 602 hingga 628, Persia merebut Yerusalem dan membawa pergi relikui salib.'),
        ev(627, 'Heraklius mengalahkan Persia', 'Kaisar Heraklius menang di Niniwe, memaksa Khosrow II mundur; tahun berikutnya Khosrow digulingkan dan dibunuh.'),
        ev(636, 'Pertempuran Qadisiyyah', 'Pasukan Arab muslim mengalahkan tentara Sasaniyah dan membuka jalan menuju Ctesiphon.'),
        ev(642, 'Pertempuran Nahavand', 'Kemenangan Arab di dataran tinggi Iran memecah pertahanan terakhir yang terorganisasi.'),
        ev(651, 'Yazdegerd III terbunuh', 'Raja terakhir Sasaniyah dibunuh di Merv saat melarikan diri, dan dinasti berakhir.'),
      ],
    },
  ],
  olmek: [
    {
      story:
        'Pada mulanya hanya ada kampung-kampung petani di dataran rendah Teluk Meksiko, antara sungai dan rawa. Lalu di San Lorenzo, penduduk meratakan bukit dan mengangkut balok basal dari pegunungan berjarak puluhan kilometer untuk dipahat menjadi kepala raksasa. Siapa yang memerintah masih belum jelas, tetapi tampaknya para pemimpin memiliki wibawa untuk menggerakkan ratusan orang. Sekitar 900 SM, pusat itu ditinggalkan.',
      chronicle: [
        ev(-1600, 'Kampung-kampung dataran rendah', 'Petani menanam jagung dan memelihara kampung di tepi sungai Teluk Meksiko.', true),
        ev(-1600, 'Bola karet El Manatí', 'Di rawa persembahan El Manatí ditemukan bola karet tertua Mesoamerika, tanda awal permainan bola.', true),
        ev(-1400, 'San Lorenzo tumbuh', 'Bukit buatan dan lapangan upacara mulai dibangun di San Lorenzo.', true),
        ev(-1250, 'Saluran air batu', 'San Lorenzo memiliki saluran batu yang rumit untuk mengalirkan air, tanda perencanaan yang sungguh-sungguh.', true),
        ev(-1200, 'Puncak San Lorenzo', 'Pusat ini mencapai masa jayanya, dengan monumen batu dan penduduk yang sebagian besar tinggal di sekitarnya.', true),
        ev(-1200, 'Kepala raksasa', 'Sejumlah kepala basal raksasa dipahat dan diangkut, sebagian mungkin menggambarkan penguasa; batunya dibawa puluhan kilometer.', true),
        ev(-1000, 'Jaringan jade dan obsidian', 'Barang mewah seperti jade dan obsidian beredar antara Teluk, Oaxaca, dan Guerrero.', true),
        ev(-950, 'Monumen dirusak', 'Banyak monumen San Lorenzo dirusak dan dikubur; tidak jelas apakah ini perusakan ritual atau akibat pergolakan.', true),
        ev(-900, 'San Lorenzo ditinggalkan', 'Pusat ini sepi sementara La Venta mulai bangkit.', true),
      ],
    },
    {
      story:
        'Setelah San Lorenzo sepi, pusat kekuasaan berpindah ke pulau tanah tinggi di rawa pesisir Tabasco, yaitu La Venta. Di sana berdiri piramida tanah liat yang menjulang, dan di bawah lapangan upacara terkubur persembahan jade dan serpentin. Seni, gagasan, dan barang-barang Olmek menyebar jauh ke Oaxaca dan lembah Meksiko. Setelah sekitar 400 SM La Venta ditinggalkan, dan warisannya meneruskan hidup pada Zapotek dan Maya.',
      chronicle: [
        ev(-900, 'La Venta menjadi pusat', 'La Venta di pulau rawa Tabasco berkembang menjadi pusat upacara Olmek yang baru.', true),
        ev(-900, 'Prasasti Cascajal', 'Blok serpentin dengan 62 tanda ditemukan pada 1999 dan mungkin aksara tertua di Amerika; para ahli masih berdebat tentang tahun dan keasliannya.', true),
        ev(-800, 'Piramida tanah liat', 'Bukit tanah liat setinggi sekitar 30 m dibangun dan dikelilingi lapangan upacara.', true),
        ev(-700, 'Chalcatzingo', 'Di Morelos, relief batu bergaya Olmek dipahat, tanda hubungan Teluk dengan dataran tinggi.', true),
        ev(-600, 'Mosaik serpentin', 'Persembahan besar berupa mosaik serpentin dan balok-balok jade dikubur di bawah lapangan La Venta.', true),
        ev(-500, 'Monte Albán bangkit', 'Di lembah Oaxaca, orang Zapotek mulai membangun kota di atas bukit.', true),
        ev(-400, 'La Venta ditinggalkan', 'Pusat ini mulai kosong dan monumen-monumennya ditinggalkan.', true),
        ev(-350, 'Peralihan ke Epi-Olmek', 'Pusat baru seperti Tres Zapotes meneruskan tradisi Olmek dalam bentuk Epi-Olmek.', true),
      ],
    },
  ],
};
