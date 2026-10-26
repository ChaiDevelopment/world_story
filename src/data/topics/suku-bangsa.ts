import type { Topic } from '../../types';

/** Tema: suku bangsa Indonesia — siapa mereka, di mana tinggal, bagaimana hidup dan adat mereka. */
export const topicSukuBangsa: Topic = {
  id: 'suku-bangsa',
  title: 'Suku Bangsa Indonesia',
  subtitle: 'Dari Aceh sampai Papua: ragam bangsa, bahasa, rumah, dan adat yang membentuk satu negeri kepulauan.',
  intro:
    "Sensus Penduduk 2010 yang dilakukan Badan Pusat Statistik (BPS) mencatat lebih dari seribu tiga ratus kelompok suku bangsa di Indonesia, sekitar 1.340 menurut pengolahan yang lazim dikutip. Angka ini bukan hitungan mutlak: batas antarsuku cair, sebagian kelompok mengaku dengan nama berbeda, dan banyak orang memiliki leluhur campuran. Para ahli bahasa mencatat tujuh ratusan bahasa daerah yang masih dituturkan, sebagian besar tergolong rumpun Austronesia, sedangkan ratusan bahasa di Papua dan sekitarnya tergolong rumpun-rumpun yang disebut bahasa Papua.\n\n" +
    "Keragaman ini adalah buah dari perjalanan panjang. Penutur Austronesia berlayar dari arah utara ke Nusantara dalam gelombang yang berlangsung ribuan tahun, bertemu dan bercampur dengan penghuni lebih awal, terutama di timur. Kemudian jalur dagang rempah, penyebaran Hindu-Buddha, Islam, Kristen, serta perantauan antarpulau menambah lapisan baru: ada suku pegunungan yang berladang, pelaut yang hidup di perahu, bangsawan pesisir yang berdagang, hingga komunitas peranakan yang hadir sejak berabad-abad lalu.\n\n" +
    "Halaman ini menyajikan potret singkat sekitar empat puluh kelompok, disusun menurut wilayah. Semboyan negara, Bhinneka Tunggal Ika, \"berbeda-beda tetapi tetap satu\", diambil dari kakawin Jawa Kuno Sutasoma karya Mpu Tantular, dan kini menjadi cara bangsa ini memandang dirinya sendiri.",
  relatedCivIds: ['austronesia-nusantara', 'republik-indonesia', 'kesultanan-awal', 'majapahit'],
  note:
    "Batas antarsuku bersifat cair dan banyak orang memiliki identitas campuran atau berlapis. Pengelompokan di sini disederhanakan: satu entri dapat mencakup beberapa subkelompok dengan bahasa dan adat yang berbeda, dan tidak semua suku Indonesia tercantum. Ciri adat yang disebut adalah gambaran umum, bukan aturan yang berlaku bagi setiap orang; praktik berubah mengikuti zaman, agama, dan tempat tinggal.",
  sections: [
    {
      title: 'Sumatra',
      intro: 'Pulau di jalur pelayaran Selat Malaka ini menampung pesisir yang kosmopolitan dan dataran tinggi yang kuat dengan adat.',
      entries: [
        {
          title: 'Aceh',
          when: 'sejak kesultanan-kesultanan awal',
          place: { name: 'Banda Aceh', lon: 95.32, lat: 5.55 },
          text:
            "Orang Aceh mendiami ujung utara Sumatra, pintu pertama Islam dan perdagangan lada ke Nusantara. Pesisirnya dahulu memunculkan Samudra Pasai dan kemudian Kesultanan Aceh Darussalam, sehingga Aceh dikenal dengan julukan \"Serambi Mekkah\". Kehidupan tradisional bertumpu pada sawah, kebun lada dan pinang, serta nelayan, dengan permukiman kecil bernama gampong yang dipimpin keuchik dan ulama (teungku) yang sangat dihormati.\n\n" +
            "Seni Aceh terkenal lewat tari Saman dan Seudati yang menuntut kekompakan gerak dan syair berbahasa Aceh. Dalam kehidupan sehari-hari, kopi dan warung kopi menjadi tempat berkumpul dan berbincang, sedangkan peumulia jamee, memuliakan tamu, adalah nilai adat yang dijunjung.",
          facts: [
            ['Wilayah', 'Aceh, terutama pesisir utara dan timur'],
            ['Bahasa', 'Aceh (rumpun Austronesia, kerabat Cham)'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Rumoh Aceh (rumah panggung)'],
            ['Pakaian adat', 'Ulee balang, dengan kopiah meukeutop dan sarung songket'],
            ['Kesenian', 'Saman, Seudati, hikayat'],
            ['Upacara/tradisi', 'Kenduri Maulid, peusijuek (tepung tawar)'],
          ],
          civId: 'kesultanan-awal',
        },
        {
          title: 'Gayo',
          place: { name: 'Takengon, Aceh Tengah', lon: 96.85, lat: 4.63 },
          text:
            "Orang Gayo hidup di dataran tinggi sekitar Danau Laut Tawar, di tengah Aceh. Udara sejuk dan tanah vulkanik membuat kebun kopi arabika menjadi sumber penghidupan utama sejak masa kolonial, selain sawah dan sayur. Masyarakatnya terbagi dalam belah (klan) dan satuan permukiman yang dikenal sebagai kampung.\n\n" +
            "Tari Saman yang kini dikenal dunia berakar dari tradisi Gayo, dibawakan banyak penari duduk berbaris sambil bertepuk dada dan paha dalam irama yang kian cepat. Kerawang Gayo, motif ukiran dan sulaman yang terinspirasi alam, menghiasi kain dan rumah.",
          facts: [
            ['Wilayah', 'Dataran tinggi Aceh Tengah, Bener Meriah, Gayo Lues'],
            ['Bahasa', 'Gayo'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Umah Pitu Ruang (rumah panggung bersekat tujuh)'],
            ['Pakaian adat', 'Kain berhiaskan sulaman kerawang Gayo'],
            ['Kesenian', 'Saman, didong'],
            ['Upacara/tradisi', 'Didong sebagai adu syair, pesta adat pernikahan'],
          ],
        },
        {
          title: 'Batak',
          place: { name: 'Danau Toba, Samosir', lon: 98.85, lat: 2.65 },
          text:
            "\"Batak\" adalah sebutan payung untuk beberapa kelompok kerabat dekat: Toba di sekitar Danau Toba, Karo di dataran tinggi utara, serta Simalungun, Pakpak, Angkola, dan Mandailing di selatan dan barat. Identitas sosialnya diikat oleh marga yang diwariskan lewat garis ayah, sehingga perkenalan dua orang Batak biasanya dimulai dengan menanyakan marga. Hubungan antarmarga diatur oleh Dalihan Na Tolu pada orang Toba, tiga unsur kerabat yang saling menghormati, dengan padanan serupa pada orang Karo dan lainnya.\n\n" +
            "Mereka bertani padi, menanam kopi dan kemenyan, serta beternak. Kain ulos ditenun dan diberikan dalam peristiwa penting, dari kelahiran hingga pernikahan dan kematian. Orang Batak memiliki aksara sendiri yang dipakai untuk pustaha, kitab ramuan dan ritual. Pada awal abad ke-19 hingga ke-20, banyak orang Toba dan Karo memeluk Kristen setelah kegiatan misi, sementara Mandailing umumnya memeluk Islam; sebagian masih menjaga adat lama.",
          facts: [
            ['Wilayah', 'Sumatra Utara (sekitar Danau Toba, Tanah Karo, Tapanuli, Mandailing)'],
            ['Bahasa', 'Batak Toba, Karo, Simalungun, Pakpak, Angkola-Mandailing'],
            ['Agama mayoritas', 'Kristen (Toba, Karo), Islam (Mandailing); sebagian beradat lama'],
            ['Rumah adat', 'Rumah bolon (Toba), rumah siwaluh jabu (Karo)'],
            ['Pakaian adat', 'Ulos, dan uis pada orang Karo'],
            ['Kesenian', 'Gondang sabangunan, tari tor-tor, pustaha'],
            ['Upacara/tradisi', 'Mangongkal holi (pemindahan tulang leluhur), pesta adat pernikahan'],
          ],
        },
        {
          title: 'Nias',
          place: { name: 'Gunungsitoli, Pulau Nias', lon: 97.62, lat: 1.29 },
          text:
            "Orang Nias (Ono Niha, \"anak-anak manusia\") tinggal di pulau di lepas pantai barat Sumatra. Desa-desa di selatan pulau terkenal dengan rumah-rumah kayu besar berkolong dan batu-batu megalit yang disusun di pelataran. Kekayaan keluarga dan kedudukan dahulu dibuktikan melalui pesta jasa (owasa) yang menyembelih banyak babi.\n\n" +
            "Lompat batu (fahombo) adalah tradisi paling dikenal: pemuda berlari lalu melompati tumpukan batu setinggi sekitar dua meter sebagai tanda kedewasaan, dan konon dahulu terkait latihan perang. Mayoritas penduduk kini beragama Kristen, dengan adat leluhur yang masih dikenang dalam tarian, ukiran, dan perhiasan logam.",
          facts: [
            ['Wilayah', 'Pulau Nias dan pulau sekitarnya, Sumatra Utara'],
            ['Bahasa', 'Nias'],
            ['Agama mayoritas', 'Kristen'],
            ['Rumah adat', 'Omo Sebua (kepala desa) dan Omo Hada'],
            ['Pakaian adat', 'Baju adat berhias emas dan kalung kalabubu'],
            ['Kesenian', 'Tari perang (baluse), maena, tari moyo'],
            ['Upacara/tradisi', 'Fahombo (lompat batu), owasa (pesta jasa)'],
          ],
        },
        {
          title: 'Minangkabau',
          place: { name: 'Pagaruyung, Tanah Datar', lon: 100.62, lat: -0.47 },
          text:
            "Orang Minangkabau, yang berasal dari dataran tinggi Sumatra Barat, menganut sistem matrilineal yang kerap disebut sebagai salah satu yang terbesar di dunia: suku diwariskan dari ibu, harta pusaka tinggi seperti sawah dan rumah gadang diturunkan melalui perempuan, sedangkan laki-laki dari pihak ibu (mamak) berperan membimbing kemenakan. Nagari adalah satuan pemerintahan adat, dengan prinsip \"adat basandi syarak, syarak basandi Kitabullah\".\n\n" +
            "Merantau, pergi mencari ilmu dan rezeki ke negeri lain, menjadi tradisi bagi pemuda, sehingga rumah makan Padang dan pedagang Minang dijumpai di banyak kota. Makanan khasnya, rendang, dimasak berjam-jam dengan santan dan rempah. Rumah gadang beratap melengkung seperti tanduk kerbau, simbol yang sama dengan nama \"Minangkabau\" menurut tambo.",
          facts: [
            ['Wilayah', 'Sumatra Barat, serta perantau di seluruh Nusantara'],
            ['Bahasa', 'Minangkabau'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Rumah gadang'],
            ['Pakaian adat', 'Baju bundo kanduang, suntiang, dan deta (tengkuluk)'],
            ['Kesenian', 'Randai, tari piring, silat Minang, talempong'],
            ['Upacara/tradisi', 'Merantau, batagak penghulu, Tabuik (Pariaman)'],
          ],
        },
        {
          title: 'Melayu',
          place: { name: 'Pekanbaru, Riau', lon: 101.45, lat: 0.53 },
          text:
            "Orang Melayu mendiami pesisir timur Sumatra, kepulauan Riau, Jambi, Bangka-Belitung, pesisir Kalimantan, serta Semenanjung Malaya. Sejak masa Sriwijaya dan kemudian Kesultanan Melaka dan Siak, bahasa Melayu menjadi bahasa pergaulan dan dagang di seluruh kepulauan; dari sanalah bahasa Indonesia tumbuh. Banyak orang Melayu hidup di tepi sungai dan laut sebagai nelayan, pedagang, dan petani.\n\n" +
            "Adat Melayu menempatkan Islam sebagai bagian identitas, dengan rumah panggung berukir, pantun, syair, dan gurindam. Tradisi lisan seperti berbalas pantun masih hadir dalam pernikahan dan upacara adat.",
          facts: [
            ['Wilayah', 'Pesisir timur Sumatra, Riau, Kepulauan Riau, Jambi, Bangka-Belitung, pesisir Kalimantan'],
            ['Bahasa', 'Melayu dengan banyak ragam'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Rumah lontik, rumah selaso jatuh kembar'],
            ['Pakaian adat', 'Baju kurung dan baju teluk belanga, songket'],
            ['Kesenian', 'Zapin, makyong, pantun, syair'],
            ['Upacara/tradisi', 'Berbalas pantun, pacu jalur (tradisi Kuantan Singingi)'],
          ],
          civId: 'sriwijaya',
        },
        {
          title: 'Mentawai',
          place: { name: 'Siberut, Kepulauan Mentawai', lon: 98.8, lat: -1.4 },
          text:
            "Pulau-pulau Mentawai di lepas pantai Sumatra Barat dihuni masyarakat yang menjaga adat unik. Keluarga besar tinggal di uma, rumah panjang komunal, dan menanam sagu, talas, dan pisang, serta memelihara babi dan ayam. Kepercayaan lama, arat sabulungan, memandang segala hal, dari pohon hingga batu, memiliki roh yang harus dihormati.\n\n" +
            "Sikerei, tokoh penyembuh dan perantara roh, memimpin upacara. Banyak orang Mentawai bertato (titi) sebagai tanda jati diri dan keseimbangan dengan roh. Sebagian besar kini memeluk Kristen atau Islam, sedangkan tradisi tato dan ritual adat dipertahankan sebagian kelompok.",
          facts: [
            ['Wilayah', 'Kepulauan Mentawai, Sumatra Barat'],
            ['Bahasa', 'Mentawai'],
            ['Agama mayoritas', 'Kristen; sebagian menganut Islam dan arat sabulungan'],
            ['Rumah adat', 'Uma (rumah panjang)'],
            ['Pakaian adat', 'Kabit (cawat kulit kayu) dan hiasan manik-manik'],
            ['Kesenian', 'Turuk laggai (tari), tato titi'],
            ['Upacara/tradisi', 'Punen (pesta adat), pengobatan oleh sikerei'],
          ],
        },
        {
          title: 'Lampung dan Komering',
          place: { name: 'Bandar Lampung', lon: 105.26, lat: -5.43 },
          text:
            "Ujung selatan Sumatra didiami orang Lampung, yang terbagi dalam dua adat besar: Saibatin (peminggir) di pesisir dan Pepadun di pedalaman. Aksara Lampung, \"kaganga\", ditulis dengan huruf yang berurutan seperti ka-ga-nga. Masyarakat Pepadun menganut gelar adat (adok) yang diperoleh lewat upacara cakak pepadun.\n\n" +
            "Di sebelah barat laut, orang Komering mendiami lembah Sungai Komering di Sumatra Selatan; mereka berkerabat dekat dengan Lampung dan bertani padi serta karet. Kain tapis bersulam benang emas dan perak menjadi busana upacara perempuan Lampung.",
          facts: [
            ['Wilayah', 'Lampung; Komering di Sumatra Selatan'],
            ['Bahasa', 'Lampung (dialek Api dan Nyo), Komering'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Nuwo sesat (balai adat), lamban pesagi'],
            ['Pakaian adat', 'Kain tapis, siger (mahkota)'],
            ['Kesenian', 'Tari melinting, tari sigeh pengunten'],
            ['Upacara/tradisi', 'Cakak pepadun, pemberian adok (gelar)'],
          ],
        },
        {
          title: 'Rejang',
          place: { name: 'Curup, Rejang Lebong', lon: 102.52, lat: -3.47 },
          text:
            "Orang Rejang bermukim di dataran tinggi Bukit Barisan antara Bengkulu dan Sumatra Selatan. Mereka memiliki aksara kuno ka-ga-nga yang ditulis pada bambu dan kulit kayu, dan dahulu hidup dalam satuan permukiman yang disebut petulai, kelompok kerabat dengan asal-usul bersama.\n\n" +
            "Sawah, kopi, dan sayuran menjadi mata pencaharian. Upacara adat kejai, tarian pemuda-pemudi yang dibawakan dalam pesta panen dan pernikahan, mencerminkan kehidupan gotong royong masyarakat pegunungan.",
          facts: [
            ['Wilayah', 'Bengkulu (Rejang Lebong, Lebong, Kepahiang)'],
            ['Bahasa', 'Rejang'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Umeak potong jang (rumah panggung)'],
            ['Pakaian adat', 'Baju adat dengan kain songket'],
            ['Kesenian', 'Tari kejai, syair adat'],
            ['Upacara/tradisi', 'Kejai (pesta panen dan pernikahan)'],
          ],
        },
      ],
    },
    {
      title: 'Jawa',
      intro: 'Pulau terpadat dengan tradisi keraton, desa sawah, dan beberapa kelompok yang bertahan dengan adat khasnya.',
      entries: [
        {
          title: 'Jawa',
          place: { name: 'Yogyakarta', lon: 110.37, lat: -7.8 },
          text:
            "Orang Jawa merupakan kelompok terbesar Indonesia, sekitar 40% penduduk menurut sensus BPS 2010. Pusat budayanya berada di Jawa Tengah dan Yogyakarta, dengan keraton Yogyakarta dan Surakarta sebagai penjaga tata krama dan seni halus. Masyarakat tradisional bertani padi dalam desa-desa yang terikat gotong royong; tingkat tutur bahasa Jawa (ngoko, krama) menunjukkan penghormatan kepada lawan bicara.\n\n" +
            "Wayang kulit, gamelan, batik, dan keris merupakan warisan yang diakui dunia. Orang Jawa merayakan upacara daur hidup seperti tingkeban, mitoni, dan slametan, serta Grebeg di keraton. Dalam beragama, mayoritas memeluk Islam dengan ragam penghayatan dari yang lebih ketat hingga yang berpadu tradisi Jawa, dan sebagian beragama lain.",
          facts: [
            ['Wilayah', 'Jawa Tengah, DI Yogyakarta, Jawa Timur; tersebar ke berbagai pulau'],
            ['Bahasa', 'Jawa'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Joglo'],
            ['Pakaian adat', 'Surjan, beskap, kebaya, kain batik, blangkon'],
            ['Kesenian', 'Wayang kulit, gamelan, batik, tari klasik'],
            ['Upacara/tradisi', 'Slametan, Grebeg, Sekaten, mitoni'],
          ],
          civId: 'mataram-islam',
        },
        {
          title: 'Sunda',
          place: { name: 'Bandung', lon: 107.61, lat: -6.91 },
          text:
            "Orang Sunda mendiami bagian barat Pulau Jawa, tanah pegunungan dan lembah subur yang disebut Parahyangan. Masyarakat tradisional bertani padi di sawah dan huma (ladang), dan menjunjung kesantunan lewat ungkapan \"silih asah, silih asih, silih asuh\". Hubungan dengan padi sangat penting, seperti dalam upacara seren taun.\n\n" +
            "Angklung dari bambu, kacapi suling, dan tari jaipongan menjadi warisan seni; angklung diakui UNESCO sebagai warisan budaya takbenda. Kerajaan Sunda dan Pajajaran dahulu berpusat di wilayah ini, sebelum pengaruh Islam dan Banten serta Cirebon menguat.",
          facts: [
            ['Wilayah', 'Jawa Barat dan Banten'],
            ['Bahasa', 'Sunda (dengan tingkatan lemes dan loma)'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Imah panggung, rumah jolopong'],
            ['Pakaian adat', 'Kebaya, pangsi, iket (ikat kepala)'],
            ['Kesenian', 'Angklung, kacapi suling, jaipongan, wayang golek'],
            ['Upacara/tradisi', 'Seren taun, ruwatan bumi'],
          ],
          civId: 'kutai-tarumanagara',
        },
        {
          title: 'Betawi',
          place: { name: 'Jakarta (Condet dan Kampung Betawi)', lon: 106.83, lat: -6.2 },
          text:
            "Orang Betawi adalah masyarakat Jakarta yang terbentuk sebagai kelompok campuran sejak abad ke-18 hingga ke-19 di Batavia. Leluhurnya antara lain orang Melayu, Sunda, Jawa, Bali, Bugis, Ambon, serta pendatang Tionghoa dan Arab; mereka berbaur dan menjadi satu kelompok berbahasa Melayu dialek Betawi.\n\n" +
            "Kebudayaan Betawi riang dan terbuka: musik gambang kromong dan tanjidor, teater lenong, ondel-ondel yang diarak di jalan, serta masakan seperti kerak telor dan soto Betawi. Pengantin Betawi mengenakan pakaian yang memadukan unsur Arab, Tionghoa, dan Melayu.",
          facts: [
            ['Wilayah', 'Jakarta dan sekitarnya'],
            ['Bahasa', 'Melayu dialek Betawi'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Rumah kebaya, rumah gudang'],
            ['Pakaian adat', 'Baju sadariah dan kebaya encim'],
            ['Kesenian', 'Lenong, gambang kromong, tanjidor, ondel-ondel'],
            ['Upacara/tradisi', 'Palang pintu (pernikahan), Lebaran Betawi'],
          ],
          civId: 'hindia-belanda',
        },
        {
          title: 'Madura',
          place: { name: 'Pamekasan, Pulau Madura', lon: 113.48, lat: -7.16 },
          text:
            "Orang Madura berasal dari Pulau Madura di utara Jawa Timur, tanah yang kering sehingga ladang tegal dan garam menjadi kekayaan alamnya. Banyak orang Madura bermukim di Jawa Timur bagian timur (daerah Tapal Kuda) dan menjadi pelaut, pedagang, dan petani. Mereka dikenal tegas dan teguh dalam memegang kehormatan.\n\n" +
            "Karapan sapi, adu cepat sepasang sapi yang menarik kereta kayu, adalah pesta rakyat sesudah panen, dengan iringan musik saronen. Rumah dalam permukiman tanean lanjang tersusun memanjang menurut garis keluarga, dan batik Madura berwarna cerah menjadi kerajinan khas.",
          facts: [
            ['Wilayah', 'Pulau Madura dan Tapal Kuda Jawa Timur'],
            ['Bahasa', 'Madura'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Tanean lanjang'],
            ['Pakaian adat', 'Pesaan (baju hitam bergaris) dengan sarung batik'],
            ['Kesenian', 'Saronen, topeng dalang, batik Madura'],
            ['Upacara/tradisi', 'Karapan sapi, rokat (selamatan)'],
          ],
        },
        {
          title: 'Tengger',
          place: { name: 'Gunung Bromo, Probolinggo', lon: 112.95, lat: -7.94 },
          text:
            "Orang Tengger tinggal di lereng Gunung Bromo dan Semeru, di ketinggian dengan udara dingin. Mereka bertani sayur dan kentang di ladang berundak. Menurut tradisi, mereka adalah keturunan rakyat Majapahit yang bertahan di pegunungan; mayoritas menganut Hindu dengan kekhasan adat sendiri, dipimpin dukun adat yang mengatur upacara.\n\n" +
            "Yadnya Kasada adalah upacara tahunan pada bulan Kasada: warga naik ke kawah Bromo untuk melemparkan hasil bumi dan ternak sebagai persembahan, sebagai bentuk syukur dan permohonan. Menurut legenda Roro Anteng dan Joko Seger, upacara ini bermula dari janji mengorbankan putra mereka.",
          facts: [
            ['Wilayah', 'Pegunungan Tengger, Jawa Timur'],
            ['Bahasa', 'Jawa dialek Tengger'],
            ['Agama mayoritas', 'Hindu'],
            ['Rumah adat', 'Rumah sederhana dengan perapian (pawon) sebagai pusat'],
            ['Pakaian adat', 'Sarung yang diselempangkan sebagai penahan dingin'],
            ['Kesenian', 'Sodoran, ujung-ujungan'],
            ['Upacara/tradisi', 'Yadnya Kasada, Karo, Unan-Unan'],
          ],
          civId: 'majapahit',
        },
        {
          title: 'Baduy',
          place: { name: 'Kanekes, Lebak, Banten', lon: 106.22, lat: -6.6 },
          text:
            "Orang Baduy (Kanekes) menghuni pegunungan Kendeng di Banten selatan, dalam dua kelompok: Baduy Dalam (Tangtu) yang sangat ketat menjaga pikukuh adat, dan Baduy Luar yang lebih terbuka. Mereka berladang padi huma tanpa mengolah tanah dengan alat berat, berjalan kaki, dan membangun rumah dari bambu dan kayu tanpa paku.\n\n" +
            "Kepercayaan mereka, Sunda Wiwitan, mengajarkan hidup selaras dengan alam. Setiap tahun, rombongan membawa hasil bumi ke pemerintah daerah dalam tradisi Seba Baduy, sebagai tanda silaturahmi dan pengakuan. Pimpinan adat tertinggi disebut pu'un.",
          facts: [
            ['Wilayah', 'Desa Kanekes, Kabupaten Lebak, Banten'],
            ['Bahasa', 'Sunda dialek Baduy'],
            ['Agama mayoritas', 'Sunda Wiwitan (kepercayaan leluhur)'],
            ['Rumah adat', 'Rumah panggung bambu dan ijuk tanpa paku'],
            ['Pakaian adat', 'Baju dan ikat kepala putih (Baduy Dalam), hitam atau biru (Baduy Luar)'],
            ['Kesenian', 'Angklung buhun, tenun'],
            ['Upacara/tradisi', 'Seba Baduy, Kawalu, Ngalaksa'],
          ],
        },
        {
          title: 'Osing',
          place: { name: 'Banyuwangi, Jawa Timur', lon: 114.37, lat: -8.22 },
          text:
            "Orang Osing (Using) tinggal di Banyuwangi, di ujung timur Jawa, bekas wilayah kerajaan Blambangan. Bahasanya merupakan rumpun Jawa yang berbeda, dengan banyak kosakata kuno. Mereka mempertahankan identitas tersendiri di antara Jawa dan Bali.\n\n" +
            "Tarian gandrung, penari perempuan yang mengajak penonton menari, dan seblang, ritual bersih desa dengan penari yang kerasukan, menjadi kesenian khasnya. Upacara kebo-keboan di desa Alasmalang memohon kesuburan sawah dengan manusia berdandan seperti kerbau.",
          facts: [
            ['Wilayah', 'Banyuwangi, Jawa Timur'],
            ['Bahasa', 'Osing'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Rumah cerocogan, baresan, tikel balung'],
            ['Pakaian adat', 'Pakaian gandrung berhias mahkota omprok'],
            ['Kesenian', 'Gandrung, angklung paglak'],
            ['Upacara/tradisi', 'Seblang, kebo-keboan'],
          ],
        },
      ],
    },
    {
      title: 'Bali dan Nusa Tenggara',
      intro: 'Dari pulau dewata hingga kepulauan kering di timur, masing-masing menjaga sistem adat yang kuat.',
      entries: [
        {
          title: 'Bali',
          place: { name: 'Ubud, Gianyar, Bali', lon: 115.26, lat: -8.5 },
          text:
            "Orang Bali mayoritas memeluk Hindu Dharma, agama yang menyatu dengan seni dan kehidupan sehari-hari. Masyarakat tradisional dikelompokkan dalam banjar, perkumpulan warga yang mengurus upacara dan kerja bakti, dan subak, perkumpulan irigasi sawah yang diakui UNESCO. Dikenal pula empat golongan sosial (catur warna: Brahmana, Ksatria, Waisya, Sudra) yang dalam praktik adat berpengaruh pada gelar dan tata bahasa.\n\n" +
            "Persembahan canang diletakkan setiap hari. Ngaben, upacara pembakaran jenazah, dimaknai sebagai pelepasan roh menuju alam berikutnya, kadang berupa arak-arakan besar dengan menara bade. Nyepi, Hari Raya Tahun Baru Saka, dirayakan dengan sehari hening setelah malam pawai ogoh-ogoh.",
          facts: [
            ['Wilayah', 'Pulau Bali'],
            ['Bahasa', 'Bali (dengan tingkat tutur halus dan kasar)'],
            ['Agama mayoritas', 'Hindu'],
            ['Rumah adat', 'Rumah dalam pekarangan bertembok dengan sanggah (pura keluarga)'],
            ['Pakaian adat', 'Kamen, udeng, kebaya, selendang'],
            ['Kesenian', 'Gamelan, tari Legong, Barong, wayang kulit, ukir'],
            ['Upacara/tradisi', 'Ngaben, Nyepi, Galungan dan Kuningan, odalan'],
          ],
        },
        {
          title: 'Sasak',
          place: { name: 'Lombok Tengah (Desa Sade)', lon: 116.29, lat: -8.84 },
          text:
            "Orang Sasak mendiami Pulau Lombok dan menjadi kelompok terbesar di Nusa Tenggara Barat. Mayoritas beragama Islam, dengan tradisi Wetu Telu yang mengatur ibadah secara khas di sebagian komunitas. Desa-desa adat seperti Sade dan Ende dipertahankan dengan rumah beratap alang-alang dan lantai yang dioles tanah.\n\n" +
            "Mereka dikenal dengan kain tenun songket, anyaman, dan tembikar. Tradisi merariq (kawin lari) mengatur pernikahan, sedangkan presean, duel dua laki-laki dengan tongkat rotan dan perisai kulit, dipentaskan untuk memohon hujan.",
          facts: [
            ['Wilayah', 'Pulau Lombok, Nusa Tenggara Barat'],
            ['Bahasa', 'Sasak'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Bale tani, lumbung (alang)'],
            ['Pakaian adat', 'Lambung, sapuk, kain songket'],
            ['Kesenian', 'Gendang beleq, tari Oncer, tembang'],
            ['Upacara/tradisi', 'Merariq, Bau Nyale, presean'],
          ],
        },
        {
          title: 'Samawa dan Mbojo (Bima)',
          place: { name: 'Bima, Pulau Sumbawa', lon: 118.72, lat: -8.46 },
          text:
            "Pulau Sumbawa dihuni dua kelompok besar: orang Samawa (Sumbawa) di bagian barat dan orang Mbojo (Bima) di bagian timur. Wilayah ini dahulu berupa kesultanan Sumbawa dan Bima, simpul pelayaran antara Jawa dan Maluku yang mengekspor kuda, madu, dan kayu cendana.\n\n" +
            "Kuda Sumbawa tangguh dipakai dalam pacuan tradisional (main jaran). Rumah panggung seperti Uma Lengge di Bima, dengan atap kerucut yang menjulang, digunakan sebagai lumbung. Mayoritas beragama Islam, dengan tradisi syair dan tarian istana yang diteruskan sampai kini.",
          facts: [
            ['Wilayah', 'Pulau Sumbawa, Nusa Tenggara Barat'],
            ['Bahasa', 'Samawa dan Mbojo (Bima)'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Dalam Loka (Sumbawa), Uma Lengge (Bima)'],
            ['Pakaian adat', 'Tembe nggoli (sarung tenun Bima)'],
            ['Kesenian', 'Barapan kebo, tari Lenggo, rebana'],
            ['Upacara/tradisi', 'Barapan kebo (pacuan kerbau), Hanta Ua Pua'],
          ],
          civId: 'kesultanan-awal',
        },
        {
          title: 'Sumba',
          place: { name: 'Waikabubak, Sumba Barat', lon: 119.42, lat: -9.65 },
          text:
            "Orang Sumba tinggal di pulau berpadang savana di Nusa Tenggara Timur. Banyak yang masih memeluk kepercayaan leluhur Marapu, selain Kristen dan Katolik. Kampung-kampung adat terbangun di atas bukit dengan rumah beratap menjulang tinggi dan kubur batu megalit yang besar, tempat dikuburkan para bangsawan.\n\n" +
            "Pasola, perang-perangan dua kelompok penunggang kuda yang saling melempar lembing kayu, diadakan setiap tahun di bulan-bulan tertentu sesudah munculnya cacing laut (nyale), sebagai ritus kesuburan dan penghormatan leluhur. Kain tenun ikat Sumba berhias kuda, ayam, dan udang menjadi busana dan mas kawin.",
          facts: [
            ['Wilayah', 'Pulau Sumba, Nusa Tenggara Timur'],
            ['Bahasa', 'Kambera, Wewewa, dan bahasa Sumba lain'],
            ['Agama mayoritas', 'Kristen; sebagian menganut Marapu'],
            ['Rumah adat', 'Uma bokulu (rumah beratap menara)'],
            ['Pakaian adat', 'Hinggi dan lau (kain tenun ikat)'],
            ['Kesenian', 'Tenun ikat, tari kataga'],
            ['Upacara/tradisi', 'Pasola, pemakaman bangsawan dengan kubur batu'],
          ],
        },
        {
          title: 'Manggarai dan Ngada (Flores)',
          place: { name: 'Ruteng, Manggarai, Flores', lon: 120.46, lat: -8.61 },
          text:
            "Flores menyimpan banyak kelompok, di antaranya Manggarai di barat dan Ngada di tengah. Orang Manggarai berladang dan membuat sawah berbentuk jaring laba-laba (lingko) yang dibagi oleh tua adat; kampung berpusat pada rumah gendang berbentuk kerucut. Orang Ngada tinggal di kampung memanjang dengan bangunan ngadhu dan bhaga, tiang dan rumah mini sebagai simbol leluhur.\n\n" +
            "Mayoritas penduduk Flores beragama Katolik sejak pengaruh Portugis dan misi berikutnya, tetapi adat leluhur tetap hidup. Caci, tarian pertarungan dua laki-laki dengan cambuk dan perisai di Manggarai, dipentaskan dalam pesta syukur dan menjadi lambang kejantanan dan sportivitas.",
          facts: [
            ['Wilayah', 'Flores bagian barat dan tengah, Nusa Tenggara Timur'],
            ['Bahasa', 'Manggarai, Ngada'],
            ['Agama mayoritas', 'Katolik'],
            ['Rumah adat', 'Mbaru niang (Wae Rebo), Mbaru gendang (Manggarai), sa\'o (Ngada)'],
            ['Pakaian adat', 'Songke (kain tenun Manggarai), kain ikat Ngada'],
            ['Kesenian', 'Caci, tenun, tari Ja\'i (Ngada)'],
            ['Upacara/tradisi', 'Penti (syukur panen, Manggarai), Reba (Ngada)'],
          ],
        },
        {
          title: 'Atoni dan Tetun (Timor)',
          place: { name: 'Soe, Timor Tengah Selatan', lon: 124.28, lat: -9.86 },
          text:
            "Orang Atoni (Dawan) mendiami Timor Barat, sementara orang Tetun tinggal di bagian tengah dan timur pulau, termasuk perbatasan dengan Timor Leste. Masyarakat berladang jagung, umbi, dan padi, beternak sapi dan kerbau, serta memanfaatkan pohon lontar. Kerajaan-kerajaan kecil dahulu memerintah, dengan raja (usif) dan keluarga bangsawan.\n\n" +
            "Tenun ikat, selimut, dan kain sotis adalah kerajinan perempuan yang rumit. Rumah bundar beratap rendah, ume kbubu, menahan dingin dan menyimpan asap hangat di dalamnya. Penduduknya kini mayoritas Kristen dan Katolik.",
          facts: [
            ['Wilayah', 'Timor Barat, Nusa Tenggara Timur'],
            ['Bahasa', 'Dawan (Uab Meto), Tetun'],
            ['Agama mayoritas', 'Kristen dan Katolik'],
            ['Rumah adat', 'Ume kbubu (rumah bundar beratap kerucut)'],
            ['Pakaian adat', 'Tais atau kain tenun ikat, selimut tenun'],
            ['Kesenian', 'Tenun, bonet (tari lingkar)'],
            ['Upacara/tradisi', 'Natoni (pidato adat), pesta panen'],
          ],
        },
      ],
    },
    {
      title: 'Kalimantan',
      intro: 'Hutan, sungai besar, dan rumah panjang membentuk dunia orang-orang di pulau terbesar Indonesia.',
      entries: [
        {
          title: 'Dayak',
          place: { name: 'Palangka Raya, Kalimantan Tengah', lon: 113.9, lat: -2.2 },
          text:
            "\"Dayak\" adalah sebutan umum untuk ratusan kelompok pribumi Kalimantan, antara lain Ngaju, Kenyah, Kayan, Iban, Ot Danum, Benuaq, Bidayuh, dan Maanyan. Mereka hidup di tepi sungai atau pedalaman, berladang dengan sistem berpindah, berburu, dan memungut hasil hutan. Banyak kelompok mendirikan rumah panjang, tempat puluhan keluarga bernaung di bawah satu atap.\n\n" +
            "Kaharingan adalah agama asli orang Dayak, terutama Ngaju di Kalimantan Tengah, yang sejak 1980 secara administratif dikelompokkan di bawah Hindu sebagai \"Hindu Kaharingan\". Kini banyak pula orang Dayak memeluk Kristen, Katolik, atau Islam. Tiwah, upacara penghantaran tulang leluhur ke sandung, dilakukan oleh penganut Kaharingan Ngaju. Ukiran, manik-manik, dan tato Dayak penuh makna; sapek dimainkan di antara orang Kenyah dan Kayan.",
          facts: [
            ['Wilayah', 'Pedalaman Kalimantan'],
            ['Bahasa', 'Banyak bahasa: Ngaju, Kenyah, Kayan, Iban, dan lainnya'],
            ['Agama mayoritas', 'Kristen dan Katolik; sebagian Kaharingan dan Islam'],
            ['Rumah adat', 'Rumah betang (rumah panjang), rumah lamin'],
            ['Pakaian adat', 'Baju burik, manik-manik, hiasan bulu enggang'],
            ['Kesenian', 'Sapek, tari Enggang, ukir dan tato'],
            ['Upacara/tradisi', 'Tiwah (Ngaju), Gawai (Iban), Dange (Benuaq)'],
          ],
        },
        {
          title: 'Banjar',
          place: { name: 'Banjarmasin, Kalimantan Selatan', lon: 114.59, lat: -3.32 },
          text:
            "Orang Banjar mendiami dataran rendah Kalimantan Selatan, di tepi Sungai Barito dan Martapura. Mereka terbentuk dari percampuran Melayu, penduduk Dayak yang memeluk Islam, dan pendatang Jawa, dan berhubungan dengan Kesultanan Banjar. Kota Banjarmasin dikenal dengan kehidupan sungai dan pasar terapung, tempat pedagang menjual hasil kebun dari jukung (perahu).\n\n" +
            "Banyak orang Banjar berdagang dan merantau ke Sumatra dan Malaysia. Rumah Banjar bubungan tinggi dan seni madihin, syair yang dibawakan dengan gaya jenaka, menggambarkan budaya sungai yang kaya.",
          facts: [
            ['Wilayah', 'Kalimantan Selatan; tersebar ke Sumatra dan Kalimantan lain'],
            ['Bahasa', 'Banjar'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Rumah Bubungan Tinggi'],
            ['Pakaian adat', 'Baju bagajah gamuling baular lulut'],
            ['Kesenian', 'Madihin, mamanda, tari Baksa Kembang'],
            ['Upacara/tradisi', 'Pasar terapung, Maulid dan baayun maulid, aruh baharin'],
          ],
          civId: 'kesultanan-awal',
        },
        {
          title: 'Kutai',
          place: { name: 'Tenggarong, Kutai Kartanegara', lon: 116.99, lat: -0.42 },
          text:
            "Orang Kutai tinggal di tepi Sungai Mahakam di Kalimantan Timur, kawasan yang lebih dari seribu tahun lalu melahirkan prasasti Yupa Kerajaan Kutai Martadipura. Pada abad-abad kemudian, Kesultanan Kutai Kartanegara berpusat di Tenggarong. Kutai sekarang adalah bagian dari kelompok yang beragama Islam dan berbahasa Melayu Kutai.\n\n" +
            "Erau, pesta adat kesultanan, menghadirkan upacara, tari, dan belimbur, saling menyiram air sebagai pembersihan. Sungai Mahakam menjadi jalur kehidupan, tempat orang berdagang, mencari ikan, dan bepergian.",
          facts: [
            ['Wilayah', 'Tepi Sungai Mahakam, Kalimantan Timur'],
            ['Bahasa', 'Kutai (Melayu Kutai)'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Rumah lamin (pengaruh Dayak), rumah panggung Melayu'],
            ['Pakaian adat', 'Baju kebesaran sultan, songket'],
            ['Kesenian', 'Tari jepen, tingkilan'],
            ['Upacara/tradisi', 'Erau dan belimbur'],
          ],
          civId: 'kutai-tarumanagara',
        },
      ],
    },
    {
      title: 'Sulawesi',
      intro: 'Pulau berbentuk huruf K ini menyimpan pelaut, petani dataran tinggi, dan masyarakat pesisir yang kosmopolitan.',
      entries: [
        {
          title: 'Bugis',
          place: { name: 'Watampone, Bone', lon: 120.33, lat: -4.54 },
          text:
            "Orang Bugis berasal dari Sulawesi Selatan bagian tengah dan dikenal sebagai pelaut, pedagang, dan pembuat kapal pinisi serta perantau yang menyebar sampai Kalimantan, Sumatra, dan Semenanjung Malaya. Kerajaan-kerajaan Bone, Wajo, dan Soppeng dahulu memegang peranan penting, dan Islam masuk dengan kuat pada abad ke-17.\n\n" +
            "Prinsip siri' na pesse, harga diri dan solidaritas, menjadi dasar etika Bugis. Naskah panjang La Galigo, kisah epik dewa dan manusia dalam bahasa Bugis kuno, ditulis dalam aksara lontara dan dimasukkan UNESCO dalam Ingatan Dunia. Dalam tradisi Bugis, dikenal pula lima gender (termasuk bissu) yang pada masa lalu berperan dalam upacara kerajaan.",
          facts: [
            ['Wilayah', 'Sulawesi Selatan; perantau di seluruh Nusantara dan Malaysia'],
            ['Bahasa', 'Bugis'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Bola (rumah panggung), saoraja untuk bangsawan'],
            ['Pakaian adat', 'Baju bodo dan sarung sutra'],
            ['Kesenian', 'La Galigo, tari pakarena (Makassar), lontara'],
            ['Upacara/tradisi', 'Mappalili, mabbaca doa, pelayaran pinisi'],
          ],
          civId: 'kesultanan-awal',
        },
        {
          title: 'Makassar',
          place: { name: 'Gowa, Sulawesi Selatan', lon: 119.45, lat: -5.2 },
          text:
            "Orang Makassar tinggal di pesisir selatan Sulawesi Selatan. Kesultanan Gowa-Tallo pada abad ke-16 hingga ke-17 menjadikan Makassar pelabuhan dagang yang ramai dan terbuka bagi bangsa-bangsa asing, sampai kekuatannya ditundukkan VOC lewat Perang Makassar dan Perjanjian Bongaya (1667). Sultan Hasanuddin dikenang sebagai pahlawan nasional.\n\n" +
            "Mereka berlayar, berdagang, dan menangkap ikan. Kerabat dekatnya adalah Bugis, dengan adat siri' serupa. Tari pakarena, gerak lembut penari perempuan dengan kipas, dan hidangan coto Makassar memberi warna khas kota.",
          facts: [
            ['Wilayah', 'Makassar, Gowa, Takalar, Jeneponto, Bantaeng'],
            ['Bahasa', 'Makassar'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Balla lompoa (istana Gowa)'],
            ['Pakaian adat', 'Baju bodo dan sarung lipa\' sabbe'],
            ['Kesenian', 'Pakarena, gandrang bulo'],
            ['Upacara/tradisi', 'Accera kalompoang (pencucian pusaka), pesta panen'],
          ],
          civId: 'kesultanan-awal',
          year: 1667,
        },
        {
          title: 'Toraja',
          place: { name: 'Rantepao, Toraja Utara', lon: 119.9, lat: -2.97 },
          text:
            "Orang Toraja mendiami pegunungan di utara Sulawesi Selatan dan terkenal dengan rumah tongkonan beratap melengkung seperti perahu dan menjulang. Masyarakat berladang padi, kopi, dan memelihara kerbau, yang dianggap sangat bernilai. Tatanan sosialnya mengenal lapisan bangsawan, rakyat biasa, dan hamba pada masa lalu.\n\n" +
            "Aluk Todolo, kepercayaan leluhur Toraja, menghormati kematian sebagai tahap. Rambu Solo', upacara pemakaman yang megah, bisa berlangsung berhari-hari dengan penyembelihan kerbau dan babi. Jenazah dikuburkan di liang batu dan patung tau-tau menjaganya. Kini mayoritas Toraja beragama Kristen, namun adat pemakaman tetap kuat.",
          facts: [
            ['Wilayah', 'Tana Toraja dan Toraja Utara, Sulawesi Selatan'],
            ['Bahasa', 'Toraja (Sa\'dan)'],
            ['Agama mayoritas', 'Kristen'],
            ['Rumah adat', 'Tongkonan'],
            ['Pakaian adat', 'Baju pokko\' dan manik-manik'],
            ['Kesenian', 'Ukiran Toraja, tari Pa\'gellu\', Ma\'badong'],
            ['Upacara/tradisi', 'Rambu Solo\', Rambu Tuka\', Ma\'nene\''],
          ],
        },
        {
          title: 'Mandar',
          place: { name: 'Majene, Sulawesi Barat', lon: 118.95, lat: -3.54 },
          text:
            "Orang Mandar mendiami pesisir Sulawesi Barat. Mereka terkenal sebagai pelaut ulung yang berlayar dengan perahu sandeq, perahu bercadik bersayap layar segitiga yang termasuk perahu layar tercepat di Nusantara. Dahulu tujuh kerajaan pantai bersekutu dalam Pitu Baqba'na Binanga.\n\n" +
            "Perempuan menenun sutra Mandar, sedangkan laki-laki melaut menangkap ikan terbang dan mengambil telurnya. Mayoritas beragama Islam. Tradisi Sayyang Pattuqduq, kuda yang menari sambil dinaiki orang yang menamatkan Al-Qur'an, dirayakan pada Maulid.",
          facts: [
            ['Wilayah', 'Sulawesi Barat (Majene, Polewali Mandar, Mamuju)'],
            ['Bahasa', 'Mandar'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Boyang (rumah panggung)'],
            ['Pakaian adat', 'Pattuqduq towaine, sarung sutra Mandar'],
            ['Kesenian', 'Kalindaqdaq (puisi), rebana'],
            ['Upacara/tradisi', 'Sayyang Pattuqduq, Mappande Sasi (syukur laut)'],
          ],
        },
        {
          title: 'Minahasa',
          place: { name: 'Tomohon, Sulawesi Utara', lon: 124.84, lat: 1.32 },
          text:
            "Orang Minahasa tinggal di ujung utara Sulawesi, dengan dataran tinggi subur di sekitar Danau Tondano. Mereka terbagi dalam beberapa subetnis (Tombulu, Tonsea, Tondano, Tontemboan, Tonsawang, Ratahan), dan pada abad ke-17 hingga ke-19 bersahabat dengan VOC dan misi Kristen. Pendidikan dan penginjilan membuat banyak orang Minahasa menjadi guru, pegawai, dan prajurit.\n\n" +
            "Masyarakat menjunjung semangat mapalus, gotong royong, dan ungkapan Sitou Timou Tumou Tou, \"manusia hidup untuk menghidupkan manusia lain\". Rumah panggung kayu dan tari Kabasaran dengan pakaian merah dan senjata menandai kebudayaannya. Makanan seperti tinutuan (bubur Manado) dan cakalang fufu terkenal.",
          facts: [
            ['Wilayah', 'Minahasa, Sulawesi Utara'],
            ['Bahasa', 'Tombulu, Tontemboan, Tondano, dan lain-lain'],
            ['Agama mayoritas', 'Kristen'],
            ['Rumah adat', 'Bolaang (rumah panggung kayu)'],
            ['Pakaian adat', 'Pakaian Kabasaran, baju ikat Minahasa'],
            ['Kesenian', 'Kabasaran, maengket, musik bambu'],
            ['Upacara/tradisi', 'Mapalus, Pengucapan Syukur, Tulude (Sangihe)'],
          ],
        },
        {
          title: 'Gorontalo',
          place: { name: 'Kota Gorontalo', lon: 123.06, lat: 0.54 },
          text:
            "Orang Gorontalo menetap di leher utara Sulawesi, di sekitar teluk Tomini. Gorontalo adalah salah satu pusat Islam awal di Sulawesi, dan adatnya terkenal dengan pepatah \"adat bersendikan syara, syara bersendikan Kitabullah\". Kerajaan Limboto dan Gorontalo bersatu dalam ikatan Pohala'a.\n\n" +
            "Kesenian dan upacara berpadu dengan Islam, seperti tuja'i, syair pujian, dan perayaan Maulid dengan walima (kue-kue adat). Pakaian bili'u pengantin berwarna cerah dengan hiasan emas.",
          facts: [
            ['Wilayah', 'Provinsi Gorontalo'],
            ['Bahasa', 'Gorontalo'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Dulohupa'],
            ['Pakaian adat', 'Bili\'u (perempuan), paluwala (laki-laki)'],
            ['Kesenian', 'Tari Saronde, polopalo'],
            ['Upacara/tradisi', 'Molonthalo (tujuh bulanan), Maulid dengan walima'],
          ],
        },
        {
          title: 'Bajau (Sama-Bajau)',
          place: { name: 'Wangi-Wangi, Wakatobi', lon: 123.53, lat: -5.32 },
          text:
            "Orang Bajau, atau Sama-Bajau, dikenal sebagai \"pengembara laut\". Secara tradisional mereka tinggal di perahu atau rumah di atas terumbu karang dan menyebar di perairan Sulawesi, Nusa Tenggara, Maluku, Kalimantan, hingga Filipina dan Malaysia. Mereka menangkap ikan, teripang, dan kerang, serta menyelam dengan kemampuan menahan napas yang luar biasa.\n\n" +
            "Banyak kelompok kini menetap di desa pantai bertiang. Mereka mayoritas memeluk Islam, dengan tradisi laut yang kaya akan roh penjaga. Sebagian kelompok masih berlayar musiman, sedangkan yang lain mulai berdagang dan bertani di darat. Identitas mereka menantang batas negara yang ditarik di darat.",
          facts: [
            ['Wilayah', 'Perairan Sulawesi, Nusa Tenggara, Maluku, Kalimantan'],
            ['Bahasa', 'Bajau (Sama)'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Perahu lepa-lepa; rumah panggung di atas laut'],
            ['Pakaian adat', 'Sarung dan hiasan kepala sederhana'],
            ['Kesenian', 'Lagu dan tarian laut, igal-igal'],
            ['Upacara/tradisi', 'Hidup di laut (sea nomadism), ritual syukur laut'],
          ],
        },
      ],
    },
    {
      title: 'Maluku',
      intro: 'Kepulauan rempah yang menarik pedagang dunia sejak zaman kuno melahirkan masyarakat pesisir yang kosmopolitan.',
      entries: [
        {
          title: 'Ambon',
          place: { name: 'Kota Ambon', lon: 128.18, lat: -3.7 },
          text:
            "Orang Ambon mendiami Pulau Ambon dan Lease di Maluku Tengah, pusat perdagangan cengkih dan pala sejak berabad lalu. Desa-desa dikenal sebagai negeri, dipimpin raja dan dewan adat, dengan kewajiban bersama yang disebut pela, ikatan persaudaraan antardesa yang melintasi perbedaan agama. Penduduknya memeluk Islam dan Kristen, dan kedua komunitas hidup berdampingan dalam sejarah panjang.\n\n" +
            "Musik, nyanyian, dan tarian menjadi perekat sosial. Lagu \"Ayo Mama\" dan alat tifa totobuang mewakili suara Maluku. Makanan pokok tradisional ialah sagu, sering dibuat papeda yang disantap bersama ikan kuah kuning.",
          facts: [
            ['Wilayah', 'Pulau Ambon dan Kepulauan Lease, Maluku'],
            ['Bahasa', 'Melayu Ambon dan bahasa daerah setempat'],
            ['Agama mayoritas', 'Islam dan Kristen'],
            ['Rumah adat', 'Baileo (balai adat)'],
            ['Pakaian adat', 'Baju cele dan kain pele'],
            ['Kesenian', 'Tifa totobuang, tari Lenso, cakalele'],
            ['Upacara/tradisi', 'Pela gandong, Panas Pela, cuci negeri'],
          ],
        },
        {
          title: 'Ternate dan Tidore',
          place: { name: 'Ternate, Maluku Utara', lon: 127.38, lat: 0.79 },
          text:
            "Pulau-pulau gunung api kecil Ternate dan Tidore di Maluku Utara adalah sumber cengkih dunia. Dua kesultanan bersaing dan bermitra mengendalikan perdagangan, bersama Bacan dan Jailolo, dalam konsep Moloku Kie Raha, \"empat gunung Maluku\". Para sultan menjalin hubungan dengan bangsa Portugis, Spanyol, dan Belanda yang datang mencari rempah.\n\n" +
            "Islam telah mendalam dalam budaya mereka, dengan pesta Kolano Uci Sabea dan upacara kesultanan. Orang Ternate berbicara bahasa Ternate, yang berbeda dari rumpun Austronesia, dan Tidore berbicara bahasa Tidore, keduanya tergolong bahasa Papua Barat Utara.",
          facts: [
            ['Wilayah', 'Pulau Ternate dan Tidore, Maluku Utara'],
            ['Bahasa', 'Ternate, Tidore (rumpun Halmahera Utara), Melayu Ternate'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Keraton Ternate dan Tidore, rumah panggung kayu'],
            ['Pakaian adat', 'Pakaian kebesaran sultan dan kolano'],
            ['Kesenian', 'Tari soya-soya, dola bololo, tari cakalele'],
            ['Upacara/tradisi', 'Legu Gam (pesta adat), Kolano Uci Sabea'],
          ],
          civId: 'kesultanan-awal',
        },
        {
          title: 'Kei',
          place: { name: 'Tual, Kepulauan Kei', lon: 132.75, lat: -5.64 },
          text:
            "Orang Kei menghuni gugusan pulau di Maluku Tenggara, sebuah kepulauan berpasir putih. Mereka hidup sebagai nelayan, petani singkong, dan pembuat perahu kayu yang terkenal; perahu belang Kei dahulu menjadi sarana dagang antarpulau. Hukum adat Larvul Ngabal mengatur kehidupan bermasyarakat dengan tujuh pasal larangan yang diteguhkan oleh tetua adat.\n\n" +
            "Sistem sosialnya dibagi dalam Ursiu dan Lorlim, dua persekutuan desa. Hawear, hukum laut dan darat, mengatur perlindungan sumber alam. Penduduknya beragama Katolik, Protestan, dan Islam, dengan adat sebagai pengikat bersama.",
          facts: [
            ['Wilayah', 'Kepulauan Kei, Maluku Tenggara'],
            ['Bahasa', 'Kei'],
            ['Agama mayoritas', 'Katolik, Protestan, dan Islam'],
            ['Kesenian', 'Tari Sosoi, Hawear'],
            ['Upacara/tradisi', 'Larvul Ngabal (hukum adat), sasi dan hawear'],
          ],
        },
      ],
    },
    {
      title: 'Papua',
      intro: 'Ratusan bahasa tumbuh di pegunungan, rawa, dan pantai Papua; satu kelompok sering memiliki bahasa sendiri.',
      entries: [
        {
          title: 'Asmat',
          place: { name: 'Agats, Asmat', lon: 138.0, lat: -5.55 },
          text:
            "Orang Asmat hidup di rawa pesisir selatan Papua, di tanah berlumpur yang dilalui sungai pasang surut. Mereka hidup dari sagu, ikan, dan udang, dan membangun rumah panggung. Kemahiran memahat kayu membuat Asmat terkenal di dunia seni: pahatan tiang bis dan patung leluhur dibuat dari kayu mangrove dan dikaitkan dengan penghormatan arwah.\n\n" +
            "Masyarakat memiliki rumah panjang (jew) khusus laki-laki untuk upacara. Pesta ukir dan pesta topeng diadakan untuk menyelesaikan hubungan dengan leluhur. Asmat juga dikenal memakai tifa dan pakaian dari serat sagu.",
          facts: [
            ['Wilayah', 'Rawa pesisir selatan Papua (Kabupaten Asmat)'],
            ['Bahasa', 'Asmat (bahasa Papua)'],
            ['Agama mayoritas', 'Kristen dan Katolik; sebagian kepercayaan leluhur'],
            ['Rumah adat', 'Jew (rumah bujang/rumah panjang)'],
            ['Pakaian adat', 'Rok serat sagu dan hiasan bulu'],
            ['Kesenian', 'Ukiran bis, topeng, tifa'],
            ['Upacara/tradisi', 'Pesta bis, Festival Budaya Asmat'],
          ],
        },
        {
          title: 'Dani',
          place: { name: 'Lembah Baliem, Wamena', lon: 138.93, lat: -4.09 },
          text:
            "Orang Dani tinggal di Lembah Baliem, dataran tinggi di jantung Papua, yang baru dikenal dunia luar dalam penerbangan ekspedisi 1938. Mereka bertani ubi jalar, dengan sistem parit dan kebun yang rapi, serta memelihara babi yang sangat bernilai dalam adat. Dahulu mereka tinggal di perkampungan honai, rumah bundar beratap jerami.\n\n" +
            "Koteka (penutup tubuh laki-laki) dan noken, tas rajut dari serat kayu, dipakai sehari-hari; noken diakui UNESCO. Festival Budaya Lembah Baliem menampilkan perang-perangan tradisional dan pesta bakar batu, tempat makanan dimasak di atas batu panas sebagai wujud kebersamaan.",
          facts: [
            ['Wilayah', 'Lembah Baliem, Pegunungan Tengah Papua'],
            ['Bahasa', 'Dani (Lani) dan bahasa Papua lain'],
            ['Agama mayoritas', 'Kristen'],
            ['Rumah adat', 'Honai'],
            ['Pakaian adat', 'Koteka, noken, sali (rok perempuan)'],
            ['Kesenian', 'Tari perang, pikon (alat musik)'],
            ['Upacara/tradisi', 'Bakar batu, Festival Lembah Baliem'],
          ],
        },
        {
          title: 'Biak',
          place: { name: 'Pulau Biak, Teluk Cenderawasih', lon: 136.1, lat: -1.18 },
          text:
            "Orang Biak mendiami Pulau Biak dan pulau-pulau di Teluk Cenderawasih, di pesisir utara Papua. Mereka adalah pelaut dan pedagang yang berlayar jauh dengan perahu wairon, berdagang dengan Tidore dan pantai-pantai Papua. Bahasa Biak termasuk rumpun Austronesia, berbeda dengan banyak bahasa Papua di pedalaman.\n\n" +
            "Mitologi Manarmakeri, tokoh yang dikaitkan dengan gerakan Koreri, adalah kisah tentang zaman kejayaan yang akan kembali. Wor, nyanyian dan tarian adat, mengiringi tahap kehidupan seperti kelahiran dan pernikahan. Banyak orang Biak kini merantau menjadi guru, pendeta, dan pegawai di seluruh Papua.",
          facts: [
            ['Wilayah', 'Kepulauan Biak, Papua'],
            ['Bahasa', 'Biak (rumpun Austronesia)'],
            ['Agama mayoritas', 'Kristen'],
            ['Rumah adat', 'Rumsram (rumah adat bujang)'],
            ['Kesenian', 'Wor, tari Yospan'],
            ['Upacara/tradisi', 'Wor, gerakan Koreri'],
          ],
        },
        {
          title: 'Kamoro',
          place: { name: 'Pesisir Mimika (Kokonao dan Timika)', lon: 136.6, lat: -4.7 },
          text:
            "Orang Kamoro tinggal di pesisir selatan Papua sekitar Mimika, di tanah berawa yang dialiri banyak sungai. Mereka hidup dari sagu, ikan, udang, dan kepiting, dan sangat mengenal pasang surut serta hutan bakau di sekitarnya.\n\n" +
            "Kamoro dikenal lewat ukiran kayu dan tarian bersama. Upacara karapao menandai peristiwa penting dalam kehidupan masyarakat, dengan patung, tarian, dan nyanyian yang dapat berlangsung sepanjang malam.",
          facts: [
            ['Wilayah', 'Pesisir Mimika, Papua Tengah'],
            ['Bahasa', 'Kamoro (bahasa Papua)'],
            ['Kesenian', 'Ukiran kayu Kamoro, tari adat'],
            ['Upacara/tradisi', 'Karapao'],
          ],
        },
        {
          title: 'Marind (Marind-anim)',
          place: { name: 'Merauke, Papua Selatan', lon: 140.4, lat: -8.5 },
          text:
            "Orang Marind-anim mendiami dataran rawa dan savana di sekitar Merauke, di pesisir tenggara Papua. Lanskapnya luas dan datar, dengan padang rumput dan hutan rawa; kehidupan tradisional bertumpu pada sagu, berburu, dan menangkap ikan.\n\n" +
            "Kepercayaan Marind berpusat pada dema, makhluk leluhur yang dipercaya membentuk dunia dan menurunkan adat. Upacara dan cerita tentang dema mengikat marga dan wilayah adat mereka.",
          facts: [
            ['Wilayah', 'Sekitar Merauke, Papua Selatan'],
            ['Bahasa', 'Marind (bahasa Papua)'],
            ['Upacara/tradisi', 'Upacara dan mitos dema'],
          ],
        },
      ],
    },
    {
      title: 'Kelompok peranakan dan diaspora',
      intro: 'Pelayaran dagang berabad-abad menanamkan komunitas pendatang yang kini menjadi bagian tak terpisahkan dari Indonesia.',
      entries: [
        {
          title: 'Tionghoa-Indonesia',
          place: { name: 'Glodok, Jakarta', lon: 106.81, lat: -6.14 },
          text:
            "Orang Tionghoa telah berdagang di Nusantara sejak berabad lalu, dan banyak yang menetap di kota pelabuhan Jawa, Sumatra, dan Kalimantan. Dari perkawinan dengan penduduk setempat tumbuh komunitas peranakan dengan budaya campuran: bahasa Melayu Tionghoa, batik pesisir, masakan, serta klenteng. Di Kalimantan Barat, kelompok seperti Hakka membentuk komunitas penambang dan petani, dan di Singkawang perayaan Cap Go Meh menjadi pesta besar.\n\n" +
            "Sepanjang sejarah, komunitas ini menghadapi masa damai dan masa sulit, termasuk pembatasan kebudayaan pada era Orde Baru. Sejak awal 2000-an, kebebasan menjalankan budaya dan agama dipulihkan, dan Imlek ditetapkan sebagai hari libur nasional pada 2003. Mereka memeluk Buddha, Konghucu, Kristen, Katolik, Islam, dan lainnya.",
          facts: [
            ['Wilayah', 'Kota-kota di seluruh Indonesia; Kalimantan Barat, Bangka-Belitung, Sumatra Utara'],
            ['Bahasa', 'Indonesia; Hokkien, Hakka, Teochew, Mandarin sebagai bahasa leluhur'],
            ['Agama mayoritas', 'Buddha, Kristen, Katolik, Konghucu, dan lainnya (beragam)'],
            ['Rumah adat', 'Rumah toko (ruko) dan klenteng'],
            ['Pakaian adat', 'Kebaya encim, cheongsam'],
            ['Kesenian', 'Barongsai, liong, gambang kromong, batik pesisir'],
            ['Upacara/tradisi', 'Imlek, Cap Go Meh, Cheng Beng, Peh Cun'],
          ],
          civId: 'hindia-belanda',
        },
        {
          title: 'Arab-Indonesia (Hadhrami)',
          place: { name: 'Ampel, Surabaya', lon: 112.74, lat: -7.23 },
          text:
            "Banyak orang Arab-Indonesia berasal dari Hadramaut di Yaman selatan. Mereka datang sebagai pedagang dan penyebar agama lewat jalur dagang Samudra Hindia, dan menetap di kota pelabuhan seperti Surabaya, Jakarta, Pekalongan, Palembang, dan Pontianak. Kampung-kampung Arab di sekitar masjid, seperti Ampel di Surabaya, menjadi pusat perdagangan dan ilmu.\n\n" +
            "Sebagian membawa gelar sayyid atau habib, dan banyak yang berdagang tekstil, minyak wangi, dan rempah. Seiring waktu, mereka berbaur dengan masyarakat setempat melalui pernikahan dan memakai bahasa Indonesia atau Melayu. Peranakan Arab turut ambil bagian dalam pergerakan nasional, sebagaimana tampak pada Sumpah Pemuda Keturunan Arab tahun 1934.",
          facts: [
            ['Wilayah', 'Kota pesisir Jawa, Sumatra, Kalimantan'],
            ['Bahasa', 'Indonesia, Arab sebagai bahasa leluhur dan agama'],
            ['Agama mayoritas', 'Islam'],
            ['Rumah adat', 'Rumah di kampung Arab dekat masjid'],
            ['Pakaian adat', 'Gamis dan sorban, jubah'],
            ['Kesenian', 'Gambus, zapin, hadrah'],
            ['Upacara/tradisi', 'Haul, Maulid, rebana'],
          ],
          civId: 'kesultanan-awal',
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Kewarganegaraan, Suku Bangsa, Agama, dan Bahasa Sehari-hari Penduduk Indonesia: Hasil Sensus Penduduk 2010',
      author: 'Badan Pusat Statistik',
      year: 2011,
      kind: 'sekunder',
    },
    { title: 'Manusia dan Kebudayaan di Indonesia', author: 'Koentjaraningrat (ed.)', year: 1971, kind: 'sekunder' },
    { title: 'Indonesian Cultures and Communities', author: 'Hildred Geertz', year: 1963, kind: 'sekunder' },
    { title: 'Ethnologue: Languages of the World (entri Indonesia)', author: 'SIL International', kind: 'sekunder' },
    { title: 'Demography of Indonesia\'s Ethnicity', author: 'Aris Ananta, Evi Nurvidya Arifin, M. Sairi Hasbullah, Nur Budi Handayani, Agus Pramono', year: 2015, kind: 'sekunder' },
  ],
};
