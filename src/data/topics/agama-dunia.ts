import type { Topic } from '../../types';

/** Agama-agama dunia: lahir, menyebar, dan bertemu, disajikan deskriptif-historis dan setara. */
export const topicAgamaDunia: Topic = {
  id: 'agama-dunia',
  title: "Agama-Agama Dunia: Lahir, Menyebar, dan Bertemu",
  subtitle: "Dari dewa-dewa sungai Nil dan lembah Gangga hingga dialog antariman masa kini, kisah bagaimana keyakinan lahir, berpindah, dan saling bertemu.",
  intro:
    "Kisah ini bermula ketika manusia pertama kali menengadah ke langit dan bertanya dari mana semua ini berasal. Jawabannya berbeda-beda: di tepi Sungai Nil orang memuja Osiris dan Ma'at, di Mesopotamia orang membangun menara bertingkat bagi para dewa, di lembah Sungai Gangga para pertapa merenungkan jiwa dan kelahiran kembali, sementara di Tiongkok para guru memikirkan bagaimana manusia hidup baik bersama orang lain.\n\n" +
    "Berabad-abad kemudian gagasan-gagasan itu berjalan bersama para pedagang, peziarah, pengungsi, dan juru dakwah. Buddha menyeberangi Jalur Sutra dan lautan, Kristen tumbuh dari kota-kota Romawi hingga dataran tinggi Etiopia, dan Islam membentang dari Andalusia sampai Nusantara. Di setiap tempat yang baru, agama bertemu dengan adat setempat, dan hasilnya sering berupa perpaduan yang tak ada di tanah asalnya.\n\n" +
    "Halaman ini menyajikan agama-agama dunia secara deskriptif dan sejajar. Penanggalan tokoh dan peristiwa mengikuti konsensus akademik, sedangkan keyakinan pemeluk disebut dengan jelas sebagai \"menurut tradisi\". Islam sudah memiliki halaman tersendiri, sehingga di sini hanya diringkas.",
  relatedCivIds: ['mesir-kuno', 'mesopotamia', 'lembah-indus', 'shang-zhou', 'israel-kuno', 'persia-akhemeniyah', 'parthia-sasaniyah', 'maurya', 'gupta', 'roma', 'bizantium', 'khilafah', 'tang-song', 'sriwijaya', 'mataram-kuno', 'majapahit', 'frank-romawi-suci', 'kievan-rus', 'etiopia'],
  note:
    "Penyajian bersifat deskriptif-historis dan menghormati semua tradisi. Tanggal tokoh pendiri mengikuti konsensus akademik, yang kerap berbeda dari penanggalan tradisional pemeluk. Hal-hal yang diimani, seperti wahyu atau mukjizat, disebut sebagai keyakinan menurut tradisi dan bukan klaim sejarah. Perkiraan tahun ditandai dengan ±.",
  sections: [
    {
      title: "Kepercayaan kuno",
      intro: "Sebelum agama-agama besar yang kini dianut miliaran orang, dunia sudah penuh dewa, ritual, dan teks suci yang membentuk peradaban pertama.",
      entries: [
        {
          title: "Ma'at dan Osiris: agama Mesir kuno",
          when: "sejak ±3000 SM",
          place: { name: "Abydos, Mesir", lon: 31.92, lat: 26.18 },
          text:
            "Orang Mesir kuno percaya bahwa dunia dijaga oleh ma'at, tatanan, kebenaran, dan keadilan yang harus dirawat oleh raja maupun rakyat. Banyak dewa dipuja, di antaranya Ra sang matahari, Isis, Horus, dan Osiris, penguasa alam kematian. Kisah Osiris yang dibunuh lalu dihidupkan kembali menjadi harapan bagi mereka yang menghadapi kematian.\n\n" +
            "Menurut teks-teks pemakaman, hati orang yang wafat ditimbang dengan bulu Ma'at. Hati yang ringan layak memasuki kehidupan sesudah mati. Kepercayaan ini melahirkan pembalseman, piramida, dan Kitab Orang Mati. Orang biasa pun menyiapkan jimat dan bekal kubur sederhana, dan Abydos menjadi tempat ziarah bagi pemuja Osiris.",
          facts: [["Konsep kunci", "Ma'at (tatanan dan kebenaran)"], ["Dewa", "Ra, Isis, Horus, Osiris"], ["Teks", "Kitab Orang Mati"]],
          civId: "mesir-kuno",
        },
        {
          title: "Akhenaten dan pemujaan Aten",
          when: "±1350 SM",
          year: -1350,
          place: { name: "Amarna (Akhetaten), Mesir", lon: 30.9, lat: 27.65 },
          text:
            "Sekitar 1350 SM Firaun Amenhotep IV mengubah namanya menjadi Akhenaten dan menjunjung Aten, cakram matahari, di atas dewa-dewa lain. Ia mendirikan ibu kota baru, Akhetaten (kini Amarna), dan menutup banyak kuil lama. Seruannya terkenal lewat Himne Besar bagi Aten.\n\n" +
            "Para sejarawan berdebat apakah ini monoteisme sejati atau pemujaan eksklusif terhadap satu dewa. Setelah wafatnya, ibu kota ditinggalkan dan pemujaan dewa-dewa lama dipulihkan, sehingga reformasi itu tidak bertahan lama. Kisahnya menunjukkan bahwa perubahan agama sering bertemu perlawanan dari imam, pegawai, dan rakyat.",
          facts: [["Raja", "Akhenaten (Amenhotep IV)"], ["Ibu kota", "Akhetaten (Amarna)"], ["Diperdebatkan", "Monoteisme atau pemujaan eksklusif"]],
          civId: "mesir-kuno",
        },
        {
          title: "Dewa-dewa Mesopotamia dan ziggurat",
          when: "±2100 SM",
          year: -2100,
          place: { name: "Ur, Mesopotamia", lon: 46.1, lat: 30.96 },
          text:
            "Di Mesopotamia setiap kota punya dewa pelindung: Enlil di Nippur, Inanna di Uruk, Nanna sang bulan di Ur. Orang percaya bahwa para dewa memerlukan rumah, makanan, dan penghormatan, dan manusia diciptakan untuk melayani mereka. Karena itu kota-kota membangun ziggurat, menara bertingkat yang menjulang di tengah kota.\n\n" +
            "Sekitar 2100 SM Raja Ur-Nammu mendirikan Ziggurat Ur untuk Nanna. Para imam menafsirkan pertanda dan merekam doa serta mitos pada lempung, termasuk Epos Gilgames. Agama Mesopotamia memengaruhi tetangganya, dan sejumlah gagasan, seperti kisah banjir besar, muncul pula dalam tradisi lain.",
          facts: [["Dewa", "Enlil, Inanna, Nanna"], ["Bangunan", "Ziggurat"], ["Teks", "Epos Gilgames"]],
          civId: "mesopotamia",
        },
        {
          title: "Rigweda: nyanyian para penutur Weda",
          when: "±1500 sampai 1200 SM",
          year: -1500,
          place: { name: "Punjab, Asia Selatan", lon: 74.3, lat: 31.5 },
          text:
            "Rigweda adalah kumpulan lebih dari seribu himne untuk dewa-dewa seperti Indra, Agni, dan Waruna. Teks ini disusun sekitar 1500 sampai 1200 SM, kemungkinan di kawasan Punjab, dan selama berabad-abad hanya diturunkan secara lisan dengan ketelitian yang luar biasa oleh para pendeta.\n\n" +
            "Upacara kurban api menjadi pusat agama Weda. Kelak kumpulan teks ini bertambah dengan Samaweda, Yajurweda, dan Atharwaweda. Para sejarawan menyebut agama Weda sebagai salah satu akar tradisi yang kini disebut Hindu, bersama unsur-unsur lain yang tumbuh di anak benua India.",
          facts: [["Teks", "Rigweda, lebih dari 1.000 himne"], ["Dewa utama", "Indra, Agni, Waruna"], ["Penurunan", "Lisan selama berabad-abad"]],
          civId: "lembah-indus",
        },
        {
          title: "Zarathustra dan Ahura Mazda",
          when: "±1500 sampai 1000 SM (diperdebatkan)",
          place: { name: "Baktria, Asia Tengah", lon: 66.9, lat: 36.76 },
          text:
            "Zarathustra (Zoroaster) adalah nabi Persia kuno yang ajarannya terkumpul dalam Gatha, bagian tertua Avesta. Para ahli masih berdebat tentang masa hidupnya, antara ±1500 dan 1000 SM, dan sebagian menempatkan ke zaman yang lebih muda. Ia memuja Ahura Mazda, Tuhan yang bijaksana, dan mengajarkan pilihan moral antara kebenaran (asha) dan kebohongan (druj).\n\n" +
            "Agama ini menjadi agama kekaisaran Akhemeniyah dan Sasaniyah, dan gagasannya tentang penghakiman dan kehidupan sesudah mati dianggap memengaruhi tradisi lain. Sepeninggal Sasaniyah, banyak pemeluknya bertahan, dan sebagian menyingkir ke India barat, tempat mereka dikenal sebagai bangsa Parsi.",
          facts: [["Teks", "Avesta, termasuk Gatha"], ["Tuhan", "Ahura Mazda"], ["Pemeluk kini", "Zoroaster, Parsi di India"]],
          civId: "persia-akhemeniyah",
        },
        {
          title: "Dewa-dewa Yunani dan Romawi",
          when: "±abad ke-8 SM sampai abad ke-4 M",
          year: -776,
          place: { name: "Olympia, Yunani", lon: 21.63, lat: 37.64 },
          text:
            "Orang Yunani menuturkan kisah para dewa Olimpus lewat Homeros dan Hesiodos: Zeus, Hera, Athena, Apollo. Agama mereka tidak berkitab suci tunggal. Yang utama adalah upacara bersama, persembahan di kuil, festival, dan ramalan di Delfi. Olimpiade yang tercatat mulai 776 SM, menurut tradisi, adalah perayaan untuk Zeus.\n\n" +
            "Bangsa Romawi mengambil banyak dewa Yunani dan memberi nama baru: Jupiter, Juno, Minerva. Di kekaisaran yang luas, kultus dewa dari Mesir, Persia, dan Anatolia, seperti Isis dan Mitra, juga hidup berdampingan. Dunia penuh dewa inilah yang kelak bertemu dengan Kristen.",
          facts: [["Dewa Yunani", "Zeus, Hera, Athena, Apollo"], ["Padanan Romawi", "Jupiter, Juno, Minerva"], ["Pusat ramalan", "Delfi"]],
          civId: "roma",
        },
      ],
    },
    {
      title: "Hindu",
      intro: "Hindu tidak berpendiri tunggal. Ia tumbuh dari berbagai aliran, teks, dan praktik di anak benua India selama ribuan tahun.",
      entries: [
        {
          title: "Upanishad, epos, dan Bhagavad Gita",
          when: "±800 SM sampai 400 M",
          year: -700,
          place: { name: "Kurukshetra, India", lon: 76.84, lat: 29.97 },
          text:
            "Antara ±800 dan 500 SM para pemikir hutan merenungkan hakikat jiwa dalam Upanishad. Mereka mengajarkan bahwa atman, diri yang terdalam, pada akhirnya sama dengan Brahman, hakikat tertinggi, serta gagasan samsara, kelahiran kembali, dan moksha, pembebasan.\n\n" +
            "Sekitar 400 SM sampai 400 M terbentuk dua epos besar, Mahabharata dan Ramayana. Di tengah Mahabharata terdapat Bhagavad Gita, percakapan Krishna dan Arjuna sebelum perang di Kurukshetra, tentang kewajiban dan tindakan tanpa pamrih. Hindu mengenal Trimurti, yaitu Brahma, Wisnu, dan Siwa, sebagai tiga rupa dalam satu kesatuan ilahi, meski banyak umat memusatkan bakti pada Wisnu, Siwa, atau Dewi.",
          facts: [["Konsep", "Atman, Brahman, samsara, moksha"], ["Epos", "Mahabharata dan Ramayana"], ["Trimurti", "Brahma, Wisnu, Siwa"]],
          civId: "gupta",
        },
        {
          title: "Bhakti dan Shankaracharya",
          when: "abad ke-6 sampai 9 M",
          year: 800,
          place: { name: "Kalady, Kerala", lon: 76.43, lat: 10.17 },
          text:
            "Pada abad ke-6 sampai 9 M di India selatan lahir gerakan bhakti. Para penyair Alvar yang memuja Wisnu dan Nayanar yang memuja Siwa menggubah lagu berbahasa Tamil dan berkeliling dari kuil ke kuil. Mereka datang dari berbagai lapisan masyarakat, dan banyak yang menekankan cinta kepada Tuhan lebih daripada upacara yang rumit.\n\n" +
            "Pada masa yang sama hidup Shankaracharya (±788-820), filsuf dari Kerala yang menafsirkan Upanishad dalam ajaran Advaita Wedanta, bahwa Brahman satu-satunya kenyataan sejati. Ia juga dikenal mendirikan pusat-pusat biara di empat penjuru India. Tahun hidupnya masih diperdebatkan sebagian ahli.",
          facts: [["Gerakan", "Bhakti (Alvar dan Nayanar)"], ["Filsuf", "Shankaracharya, ±788-820"], ["Ajaran", "Advaita Wedanta"]],
        },
        {
          title: "Hindu menyeberangi laut ke Nusantara dan Angkor",
          when: "abad ke-4 sampai 15 M",
          year: 856,
          place: { name: "Prambanan, Jawa Tengah", lon: 110.49, lat: -7.75 },
          text:
            "Hindu tiba di Nusantara lewat pelayaran dagang dan para brahmana yang diundang penguasa setempat. Prasasti Yupa dari Kutai, abad ke-4 atau ke-5 M, mencatat persembahan para brahmana. Di Jawa, kompleks Prambanan didirikan sekitar 856 M, bertepatan dengan masa Rakai Pikatan menurut perkiraan para ahli, sebagai persembahan bagi Siwa. Di Bali, Hindu berpadu dengan adat setempat dan hidup hingga kini.\n\n" +
            "Di daratan Asia Tenggara, Suryawarman II dari Khmer membangun Angkor Wat pada paruh pertama abad ke-12 sebagai kuil Wisnu, yang kelak menjadi tempat ibadah Buddha. Kedua tempat itu memperlihatkan bagaimana agama dari India dipahat ulang oleh seniman Asia Tenggara.",
          facts: [["Prasasti tertua", "Yupa, Kutai (abad ke-4/5 M)"], ["Prambanan", "±856 M"], ["Angkor Wat", "Abad ke-12 M, kuil Wisnu"]],
          civId: "mataram-kuno",
        },
      ],
    },
    {
      title: "Buddha dan agama-agama India lain",
      intro: "Dari seorang pangeran di kaki Himalaya, ajaran Buddha menyebar ke seluruh Asia, sementara Jainisme dan Sikh menempuh jalannya sendiri.",
      entries: [
        {
          title: "Siddhartha Gautama dan jalan tengah",
          when: "konsensus baru ±480 sampai ±400 SM",
          year: -480,
          place: { name: "Bodh Gaya, Bihar", lon: 84.99, lat: 24.7 },
          text:
            "Menurut tradisi, Siddhartha Gautama lahir sebagai pangeran Sakya di Lumbini dan meninggalkan istana untuk mencari jalan keluar dari penderitaan. Setelah bertahun-tahun bertapa, ia mencapai pencerahan di bawah pohon bodhi di Bodh Gaya, lalu mengajar pertama kali di Sarnath. Ia mengajarkan Empat Kebenaran Mulia dan jalan tengah antara kemewahan dan penyiksaan diri.\n\n" +
            "Dahulu masa hidupnya dihitung ±563-483 SM, tetapi kajian modern cenderung menggeser ke sekitar 480-400 SM, dan para ahli masih berdebat. Ajarannya tidak mengandalkan keturunan atau kasta, dan menarik pengikut dari berbagai lapisan masyarakat.",
          facts: [["Masa hidup", "Tradisional ±563-483 SM; kajian baru ±480-400 SM"], ["Pencerahan", "Bodh Gaya"], ["Khotbah pertama", "Sarnath"]],
        },
        {
          title: "Ashoka dan Kalinga",
          when: "±261 SM",
          year: -261,
          place: { name: "Kalinga (Odisha)", lon: 85.84, lat: 20.19 },
          text:
            "Sekitar 261 SM Kaisar Ashoka dari Maurya menaklukkan Kalinga di pesisir timur India. Prasastinya sendiri mengakui bahwa ratusan ribu orang tewas atau dibawa pergi, dan bahwa ia menyesal. Sesudah itu ia memeluk ajaran Buddha dan menekankan dhamma, etika kasih sayang, kejujuran, dan toleransi.\n\n" +
            "Ashoka mengukir pesannya di tiang dan batu di seluruh kekaisaran, termasuk dalam bahasa Yunani dan Aramea. Ia juga mendukung agama lain, dan menurut tradisi mengirim utusan ke Sri Lanka. Ukuran pengaruh Ashoka dalam penyebaran Buddha terus dibahas para sejarawan.",
          facts: [["Peristiwa", "Penaklukan Kalinga, ±261 SM"], ["Sumber", "Prasasti Ashoka"], ["Prinsip", "Dhamma"]],
          civId: "maurya",
        },
        {
          title: "Theravada dan Mahayana",
          when: "±250 SM sampai abad ke-1 M",
          year: -250,
          place: { name: "Anuradhapura, Sri Lanka", lon: 80.4, lat: 8.35 },
          text:
            "Seiring waktu ajaran Buddha terbagi menjadi beberapa aliran. Theravada, \"ajaran para sesepuh\", berakar pada tradisi yang dibawa Mahinda, yang menurut tradisi adalah putra atau kerabat Ashoka, ke Sri Lanka sekitar 250 SM. Aliran ini kemudian dominan di Sri Lanka, Myanmar, Thailand, Laos, dan Kamboja.\n\n" +
            "Mahayana, \"kendaraan besar\", muncul sekitar awal masehi dan menekankan cita-cita bodhisattwa, yang menunda pembebasannya demi menolong semua makhluk. Aliran ini menyebar ke Asia Tengah, Tiongkok, Korea, Jepang, dan Vietnam. Kemudian berkembang pula Wajrayana di Tibet.",
          facts: [["Theravada", "Sri Lanka, Asia Tenggara daratan"], ["Mahayana", "Asia Timur"], ["Cita-cita", "Arahat vs bodhisattwa"]],
        },
        {
          title: "Buddha masuk Tiongkok lewat Jalur Sutra",
          when: "abad ke-1 M",
          year: 67,
          place: { name: "Luoyang, Tiongkok", lon: 112.6, lat: 34.72 },
          text:
            "Pedagang dan biksu membawa ajaran Buddha dari Asia Tengah ke Tiongkok pada abad pertama masehi, melewati oasis-oasis Jalur Sutra. Menurut tradisi, Kaisar Ming dari Han bermimpi tentang sosok keemasan dan mengutus orang ke barat. Biara Baima (Kuda Putih) di Luoyang disebut sebagai salah satu biara tertua, dibangun sekitar 68 M, menurut kisah itu.\n\n" +
            "Para penerjemah menerjemahkan sutra dari bahasa Sanskerta ke bahasa Tionghoa, dan lama-kelamaan Buddha berpadu dengan budaya setempat. Di Dunhuang, gua-gua yang dipahat dan dilukis oleh banyak generasi menyimpan jejak penganutnya.",
          facts: [["Jalur", "Jalur Sutra"], ["Biara", "Baima, Luoyang"], ["Kerja besar", "Penerjemahan sutra"]],
          civId: "qin-han",
        },
        {
          title: "Xuanzang dan Nalanda",
          when: "629 sampai 645",
          year: 629,
          place: { name: "Nalanda, Bihar", lon: 85.44, lat: 25.14 },
          text:
            "Pada 629 biksu Tiongkok Xuanzang berangkat sendiri ke India untuk mencari naskah asli Buddha, meski belum mendapat izin resmi dari kekaisaran. Ia menempuh gurun dan pegunungan, belajar bertahun-tahun di Universitas Nalanda, dan pulang pada 645 dengan ratusan naskah, yang kemudian ia terjemahkan.\n\n" +
            "Catatan perjalanannya, Catatan Wilayah Barat dari Dinasti Tang Agung, menjadi sumber penting bagi sejarah India. Nalanda sendiri adalah salah satu pusat pendidikan terbesar di dunia pada masanya, yang menarik pelajar dari berbagai negeri hingga rusak pada abad ke-12.",
          facts: [["Perjalanan", "629-645"], ["Karya", "Catatan Wilayah Barat dari Dinasti Tang Agung"], ["Pusat belajar", "Universitas Nalanda"]],
          civId: "tang-song",
        },
        {
          title: "Sriwijaya, Atisha, dan Borobudur",
          when: "abad ke-8 sampai 11 M",
          year: 825,
          place: { name: "Borobudur, Jawa Tengah", lon: 110.2, lat: -7.61 },
          text:
            "Candi Borobudur dibangun sekitar 800 sampai 825 M pada masa Dinasti Syailendra di Jawa Tengah. Relief di dindingnya menceritakan perjalanan menuju pencerahan, dan umat Buddha Mahayana menziarahinya. Candi itu kini menjadi salah satu situs Buddha terbesar di dunia.\n\n" +
            "Di Sumatra, Sriwijaya menjadi pusat belajar agama Buddha. Biksu Tiongkok Yijing singgah di sana pada abad ke-7. Pada 1011-1012 hingga 1024, menurut tradisi Tibet, Atisha dari India belajar selama dua belas tahun pada guru Dharmakirti, yang disebut Serlingpa, di Suwarnadwipa (Sumatra). Ia kemudian membawa ajaran itu ke Tibet.",
          facts: [["Borobudur", "±800-825 M"], ["Yijing di Sriwijaya", "Abad ke-7 M"], ["Atisha", "Belajar di Sumatra, ±1012-1024"]],
          civId: "mataram-kuno",
        },
        {
          title: "Jainisme dan Sikh: dua jalan lain dari India",
          when: "±abad ke-6 SM dan 1469 M",
          year: 1469,
          place: { name: "Amritsar, Punjab", lon: 74.88, lat: 31.62 },
          text:
            "Jainisme berakar pada Mahawira (Mahavira), sezaman dengan Buddha, yang dihormati sebagai tirthankara terakhir. Ajarannya menekankan ahimsa, tanpa kekerasan terhadap makhluk apa pun, dan tapa. Para pemeluknya, yang jumlahnya relatif kecil, terkenal sebagai pedagang yang jujur serta pelindung perpustakaan.\n\n" +
            "Agama Sikh lahir di Punjab dari ajaran Guru Nanak (1469-1539), yang mengajarkan satu Tuhan, kesetaraan manusia, kerja jujur, dan berbagi. Sembilan guru berikutnya meneruskan jalan itu. Guru Granth Sahib, kitab suci yang menghimpun syair para guru dan orang suci dari berbagai latar, menjadi pusat ibadah, dan Harmandir Sahib di Amritsar adalah tempat paling suci bagi umat Sikh.",
          facts: [["Jainisme", "Mahavira, ahimsa"], ["Sikh", "Guru Nanak, 1469-1539"], ["Kitab", "Guru Granth Sahib"]],
        },
      ],
    },
    {
      title: "Tiongkok: Konfusianisme dan Tao",
      intro: "Di Tiongkok pertanyaan utamanya kerap berbeda: bukan bagaimana lepas dari dunia, melainkan bagaimana hidup selaras di dalamnya.",
      entries: [
        {
          title: "Konfusius dan etika keluarga serta negara",
          when: "551 sampai 479 SM",
          year: -551,
          place: { name: "Qufu, Shandong", lon: 117.0, lat: 35.6 },
          text:
            "Konfusius (Kong Fuzi) lahir di Negeri Lu pada masa Zhou yang sedang terpecah. Ia mengembara mencari penguasa yang mau menerapkan gagasannya, namun lebih banyak berhasil sebagai guru. Ia menekankan ren (kemanusiaan), li (tata krama dan ritual), dan bakti anak terhadap orangtua, serta pemerintahan yang menjadi teladan moral.\n\n" +
            "Ucapannya dikumpulkan murid-muridnya dalam Lunyu (Analek). Mencius (±372-289 SM) menambahkan bahwa manusia pada dasarnya baik. Pada masa Han, Konfusianisme menjadi dasar pendidikan dan ujian bagi calon pejabat, dan pengaruhnya bertahan selama dua ribu tahun di Tiongkok, Korea, Jepang, dan Vietnam.",
          facts: [["Masa hidup", "551-479 SM"], ["Kitab", "Lunyu (Analek)"], ["Penerus", "Mencius"]],
          civId: "shang-zhou",
        },
        {
          title: "Laozi dan Daodejing",
          when: "tradisi abad ke-6 SM; teks ±abad ke-4 SM",
          year: -500,
          place: { name: "Luoyang, Tiongkok", lon: 112.45, lat: 34.62 },
          text:
            "Menurut tradisi, Laozi adalah pustakawan istana Zhou yang menulis Daodejing, kitab pendek tentang dao (jalan) dan de (daya atau kebajikan), sebelum pergi ke barat. Para sejarawan meragukan apakah ia benar-benar pernah ada, dan teks yang kini kita miliki kemungkinan disusun sekitar abad ke-4 SM oleh beberapa tangan.\n\n" +
            "Ajarannya menekankan wu wei, bertindak tanpa memaksa, dan hidup selaras dengan alam. Dari filsafat ini lahir pula agama Tao dengan para pendeta, kuil, ramuan umur panjang, dan ritual. Tao dan Konfusianisme sering dilihat saling melengkapi.",
          facts: [["Teks", "Daodejing"], ["Konsep", "Dao, wu wei"], ["Status Laozi", "Diperdebatkan"]],
          civId: "shang-zhou",
        },
        {
          title: "Zhu Xi dan Neo-Konfusianisme",
          when: "1130 sampai 1200",
          year: 1175,
          place: { name: "Pegunungan Wuyi, Fujian", lon: 118.0, lat: 27.7 },
          text:
            "Pada masa Dinasti Song, Konfusianisme dihidupkan kembali sebagai Neo-Konfusianisme, yang memadukan etika klasik dengan pertanyaan metafisik tentang alam semesta, yang sebagian terbentuk dalam percakapan dengan Buddha dan Tao. Pemikir terbesarnya adalah Zhu Xi (1130-1200).\n\n" +
            "Zhu Xi memilih Empat Kitab, yaitu Daxue, Zhongyong, Lunyu, dan Mengzi, sebagai bacaan dasar. Tafsirnya menjadi bahan ujian negara sejak awal abad ke-14 hingga 1905, dan pengaruhnya meluas ke Korea, Jepang, dan Vietnam.",
          facts: [["Tokoh", "Zhu Xi, 1130-1200"], ["Empat Kitab", "Daxue, Zhongyong, Lunyu, Mengzi"], ["Pengaruh", "Ujian negara hingga 1905"]],
          civId: "tang-song",
        },
        {
          title: "Shinto dan kami di Jepang",
          when: "sejak masa kuno; Kojiki 712 M",
          year: 712,
          place: { name: "Kuil Ise, Jepang", lon: 136.72, lat: 34.46 },
          text:
            "Shinto, \"jalan para kami\", adalah kepercayaan asli Jepang yang memuja kami, roh yang mendiami gunung, pohon, air, dan leluhur. Tidak ada pendiri tunggal maupun kitab suci tunggal. Yang dipentingkan adalah kesucian, ritual, dan perayaan musiman di kuil.\n\n" +
            "Kuil Ise, yang dipersembahkan bagi dewi matahari Amaterasu, dibangun ulang secara berkala. Kisah-kisah kami dicatat dalam Kojiki (712) dan Nihon Shoki (720). Buddha dan Shinto hidup berdampingan di Jepang selama berabad-abad, dan banyak orang Jepang merayakan keduanya.",
          facts: [["Konsep", "Kami"], ["Kuil", "Ise, untuk Amaterasu"], ["Teks", "Kojiki (712), Nihon Shoki (720)"]],
          civId: "jepang-klasik",
        },
      ],
    },
    {
      title: "Yahudi dan Kristen",
      intro: "Dari tradisi satu bangsa di Timur Tengah, iman ini kemudian menjadi agama jutaan orang di semua benua.",
      entries: [
        {
          title: "Dari Abraham hingga pembuangan Babel",
          when: "tradisi; pembuangan 586 SM",
          year: -586,
          place: { name: "Babel, Mesopotamia", lon: 44.42, lat: 32.54 },
          text:
            "Menurut tradisi, Abraham menerima perjanjian dengan Tuhan Yang Esa, lalu Musa menerima Taurat di Sinai. Kisah-kisah ini terkumpul dalam Kitab Ibrani. Para sejarawan menilai bahwa bagian yang paling awal tidak dapat dipastikan tanggalnya dan bahwa teksnya terbentuk bertahap.\n\n" +
            "Pada 586 SM pasukan Babel merebut Yerusalem, menghancurkan Bait Suci pertama, dan membawa sebagian penduduk ke pembuangan. Dalam pengasingan itulah, menurut banyak ahli, tulisan-tulisan lama disusun dan dibukukan, dan ibadah berpusat pada hukum serta sinagoga. Para tawanan boleh pulang di bawah Koresh dari Persia, dan Bait Suci kedua didirikan.",
          facts: [["Tokoh tradisi", "Abraham, Musa"], ["Peristiwa", "Pembuangan Babel, 586 SM"], ["Hasil", "Pembukuan kitab dan ibadah sinagoga"]],
          civId: "israel-kuno",
        },
        {
          title: "Kehancuran Bait Suci kedua",
          when: "70 M",
          year: 70,
          place: { name: "Yerusalem", lon: 35.23, lat: 31.78 },
          text:
            "Pada 70 M, setelah pemberontakan Yahudi terhadap Roma, pasukan Titus merebut Yerusalem dan membakar Bait Suci kedua. Sebagian besar penduduk terbunuh atau tercerai-berai. Tembok Barat adalah sisa dinding penahan kompleks itu.\n\n" +
            "Sesudah peristiwa ini, Yudaisme berkembang tanpa Bait Suci. Para rabi menekankan studi Taurat, doa, dan hukum, dan karya mereka dibukukan dalam Misyna dan Talmud. Komunitas Yahudi tersebar di seluruh Laut Tengah dan jauh ke luar, diaspora yang berlangsung berabad-abad.",
          facts: [["Peristiwa", "Perebutan Yerusalem oleh Titus"], ["Peninggalan", "Tembok Barat"], ["Hasil", "Yudaisme rabinik, Misyna dan Talmud"]],
          civId: "israel-kuno",
        },
        {
          title: "Yesus dari Nazaret dan jemaat awal",
          when: "±4 SM sampai ±30 M",
          year: 30,
          place: { name: "Nazaret dan Yerusalem", lon: 35.3, lat: 32.7 },
          text:
            "Yesus dari Nazaret, seorang guru Yahudi dari Galilea, berkhotbah tentang Kerajaan Allah, kasih, dan pengampunan. Para sejarawan umumnya memperkirakan ia lahir sekitar 4 SM dan wafat disalibkan di Yerusalem sekitar 30 M pada masa Pontius Pilatus. Para pengikutnya, menurut iman mereka, meyakini ia bangkit pada hari ketiga.\n\n" +
            "Jemaat awal tumbuh di antara orang Yahudi, lalu merambah bangsa-bangsa lain, terutama berkat Paulus dari Tarsus, yang mengadakan perjalanan melintasi Asia Kecil, Yunani, dan Roma, dan surat-suratnya termasuk tulisan tertua dalam Perjanjian Baru. Kristen menyebar lewat jalan-jalan Romawi dan sering dianiaya sebelum diakui.",
          facts: [["Masa hidup", "±4 SM-±30 M"], ["Penyebar utama", "Paulus dari Tarsus"], ["Kitab", "Perjanjian Baru"]],
          civId: "roma",
        },
        {
          title: "Edik Milano, Konsili Nikea, dan agama negara Romawi",
          when: "313, 325, dan 380",
          year: 313,
          place: { name: "Nikea (Iznik), Turki", lon: 29.72, lat: 40.43 },
          text:
            "Pada 313 Konstantinus dan Licinius menerbitkan Edik Milano yang menjamin kebebasan beribadah, termasuk bagi umat Kristen, setelah penganiayaan yang berat di bawah Diokletianus. Pada 325 Konstantinus mengumpulkan para uskup di Nikea untuk menyelesaikan perselisihan tentang hakikat Kristus, dan konsili itu menghasilkan Pengakuan Iman Nikea.\n\n" +
            "Pada 380 Kaisar Theodosius I menetapkan Kristen yang ber-Pengakuan Nikea sebagai agama negara lewat Edik Tesalonika. Dari agama yang sering dicurigai, Kristen menjadi agama kekaisaran, dan dengan itu muncul pula persoalan baru tentang hubungan gereja dan penguasa.",
          facts: [["Edik Milano", "313"], ["Konsili Nikea", "325"], ["Agama negara", "380, Theodosius I"]],
          civId: "roma",
        },
        {
          title: "Aksum menjadi Kristen",
          when: "±330 M",
          year: 330,
          place: { name: "Aksum, Etiopia", lon: 38.72, lat: 14.13 },
          text:
            "Pada sekitar 330 M Raja Ezana dari Aksum memeluk Kristen. Tradisi menyebut Frumentius, pemuda Siria yang dibawa ke Aksum dan menjadi penasihat raja, kemudian ditahbiskan sebagai uskup oleh Athanasius dari Aleksandria. Koin-koin Ezana yang awalnya bersimbol bulan sabit dan cakram berganti salib.\n\n" +
            "Kristen Etiopia berkembang dengan caranya sendiri, memakai bahasa Ge'ez dan mempertahankan tradisi seperti gereja-gereja yang dipahat di batu di Lalibela. Gereja Ortodoks Tewahedo Etiopia menjadi salah satu gereja tertua di Afrika.",
          facts: [["Raja", "Ezana"], ["Bahasa liturgi", "Ge'ez"], ["Gereja", "Ortodoks Tewahedo Etiopia"]],
          civId: "kush-aksum",
        },
        {
          title: "Skisma Besar 1054 dan Rus Kyiv",
          when: "988 dan 1054",
          year: 1054,
          place: { name: "Konstantinopel", lon: 28.98, lat: 41.01 },
          text:
            "Pada 1054 utusan Paus dan Patriark Konstantinopel saling menjatuhkan pengucilan. Peristiwa ini biasa disebut Skisma Besar, yang memisahkan Gereja Katolik Roma di barat dari Gereja Ortodoks di timur. Perpecahan itu sebenarnya hasil perselisihan berabad-abad tentang kuasa Paus, bahasa liturgi, dan rumusan iman, bukan satu hari saja.\n\n" +
            "Sebelumnya, pada 988 Pangeran Vladimir dari Kyiv menerima baptisan dari Bizantium, dan Rus Kyiv menjadi dunia Ortodoks, sebuah warisan yang kelak dibawa Rusia. Pengucilan 1054 baru dicabut secara resmi pada 1965.",
          facts: [["Rus Kyiv dibaptis", "988, Vladimir"], ["Skisma", "1054"], ["Pencabutan pengucilan", "1965"]],
          civId: "bizantium",
        },
        {
          title: "Perang Salib",
          when: "1095 sampai 1291",
          year: 1095,
          place: { name: "Clermont, Prancis", lon: 3.08, lat: 45.78 },
          text:
            "Pada 1095 Paus Urbanus II menyerukan di Clermont agar para ksatria membantu Bizantium dan merebut Yerusalem. Pasukan Salib pertama merebut Yerusalem pada 1099, disertai pembantaian atas penduduk Muslim dan Yahudi, dan mendirikan negara-negara Latin di Levant.\n\n" +
            "Selama dua abad berikutnya muncul berbagai gelombang perang dan gencatan senjata. Salahuddin al-Ayyubi merebut kembali Yerusalem pada 1187, dan pada 1291 benteng terakhir, Akko, jatuh ke tangan Mamluk. Para sejarawan menekankan bahwa di samping perang ada pula perdagangan dan pertukaran ilmu antara kedua dunia, serta bahwa umat Kristen Timur dan Yahudi turut menanggung akibatnya.",
          facts: [["Seruan", "1095, Urbanus II"], ["Yerusalem direbut", "1099"], ["Akhir", "1291, jatuhnya Akko"]],
          civId: "frank-romawi-suci",
        },
        {
          title: "Reformasi Martin Luther",
          when: "1517",
          year: 1517,
          place: { name: "Wittenberg, Jerman", lon: 12.65, lat: 51.87 },
          text:
            "Pada 1517 Martin Luther, biarawan dan dosen di Wittenberg, menerbitkan Sembilan Puluh Lima Dalil yang mengkritik penjualan surat indulgensi. Berkat mesin cetak, gagasannya menyebar ke seluruh Jerman dalam hitungan pekan. Ia kemudian menerjemahkan Alkitab ke dalam bahasa Jerman, sehingga rakyat biasa dapat membacanya.\n\n" +
            "Gerakan ini melahirkan gereja-gereja Protestan, bersama gerakan Calvin di Swiss, dan memicu pula Kontra-Reformasi Katolik. Perang-perang agama mengguncang Eropa selama lebih dari satu abad, hingga Perdamaian Westfalen pada 1648.",
          facts: [["Tokoh", "Martin Luther"], ["Peristiwa", "Sembilan Puluh Lima Dalil, 1517"], ["Hasil", "Gereja Protestan"]],
          civId: "frank-romawi-suci",
        },
        {
          title: "Fransiskus Xaverius di Maluku",
          when: "1546 sampai 1547",
          year: 1546,
          place: { name: "Ambon, Maluku", lon: 128.19, lat: -3.7 },
          text:
            "Fransiskus Xaverius, misionaris Yesuit dari Spanyol yang bekerja di Asia atas nama Portugal, tiba di Maluku pada 1546 dan mengunjungi Ambon, Ternate, dan Morotai hingga 1547. Ia mengajar umat setempat dan menulis surat-surat tentang kondisi mereka.\n\n" +
            "Sebelum kedatangannya sudah ada komunitas Kristen kecil di Maluku, yang dibaptis para pelaut Portugis sejak 1520-an. Kristen kemudian berkembang di berbagai kepulauan Nusantara bersama misi Katolik dan Protestan; kisah selengkapnya ada pada halaman agama-agama di Nusantara.",
          facts: [["Misionaris", "Fransiskus Xaverius, Yesuit"], ["Tempat", "Ambon, Ternate, Morotai"], ["Tahun", "1546-1547"]],
        },
      ],
    },
    {
      title: "Islam (ringkas)",
      intro: "Islam punya halaman tersendiri dalam atlas ini (Sejarah Islam Dunia). Di sini hanya garis besarnya, supaya urutan agama-agama dunia tetap utuh.",
      entries: [
        {
          title: "Wahyu pertama dan hijrah",
          when: "610 dan 622 M",
          year: 610,
          place: { name: "Makkah dan Madinah", lon: 39.83, lat: 21.42 },
          text:
            "Menurut tradisi Islam, Nabi Muhammad saw. menerima wahyu pertama di Gua Hira dekat Makkah pada 610 M. Ajarannya tentang tauhid dan keadilan mendapat pengikut sekaligus tantangan dari kalangan elite Makkah. Pada 622 beliau dan para sahabat berhijrah ke Madinah, tahun yang kelak menjadi awal penanggalan Hijriah.\n\n" +
            "Di Madinah terbentuk komunitas dengan piagam yang mengatur hubungan berbagai kelompok. Setelah wafat Nabi pada 632, kepemimpinan umat diteruskan Khulafaur Rasyidin. Rincian lebih lanjut ada pada halaman Sejarah Islam Dunia.",
          facts: [["Wahyu pertama", "610 M"], ["Hijrah", "622 M, awal kalender Hijriah"], ["Wafat Nabi", "632 M"]],
          civId: "khilafah",
        },
        {
          title: "Dari Afrika Utara dan Spanyol hingga Asia Tengah",
          when: "abad ke-7 sampai 8 M",
          year: 711,
          place: { name: "Cordoba, Andalusia", lon: -4.78, lat: 37.88 },
          text:
            "Dalam waktu satu abad wilayah Muslim membentang dari Spanyol hingga Asia Tengah. Pada 711 pasukan Tariq bin Ziyad menyeberang ke Semenanjung Iberia, dan Cordoba kelak menjadi salah satu kota ilmu terbesar di Eropa. Di timur, Khilafah mencapai lembah Sungai Indus dan Asia Tengah.\n\n" +
            "Kerajaan yang luas ini berada dalam lingkungan yang beragam: komunitas Kristen, Yahudi, dan Zoroaster hidup di bawahnya dengan status dan hak yang berubah menurut zaman. Penyebaran agama terjadi perlahan melalui perdagangan, perkawinan, dan pergantian generasi, bukan seketika.",
          facts: [["Penyeberangan ke Iberia", "711"], ["Kota ilmu", "Cordoba"], ["Penyebaran", "Bertahap selama berabad-abad"]],
          civId: "khilafah",
        },
        {
          title: "Tasawuf dan Islam di Asia Tenggara",
          when: "abad ke-12 sampai 15 M",
          year: 1297,
          place: { name: "Samudera Pasai, Aceh", lon: 97.6, lat: 5.2 },
          text:
            "Tasawuf, jalan batin yang menekankan kedekatan kepada Tuhan, berkembang menjadi tarekat-tarekat, seperti Qadiriyah dan Naqsyabandiyah, yang mengikat guru dan murid lintas negeri. Para sufi dan pedagang berperan penting dalam penyebaran Islam ke Asia Selatan dan Asia Tenggara.\n\n" +
            "Di Nusantara bukti awal pemerintahan Muslim terdapat di Samudera Pasai, Aceh, pada akhir abad ke-13; nisan Sultan Malik al-Saleh bertarikh 1297. Islam tersebar lewat jaringan pelabuhan dan berpadu dengan budaya setempat, sebagaimana diuraikan lebih lanjut dalam halaman Islam di Nusantara.",
          facts: [["Tarekat", "Qadiriyah, Naqsyabandiyah"], ["Bukti awal", "Nisan Malik al-Saleh, 1297"], ["Jalur", "Perdagangan dan sufi"]],
        },
      ],
    },
    {
      title: "Agama di dunia modern",
      intro: "Abad ke-19 dan ke-20 mengubah hubungan antara agama, negara, dan individu, dan memunculkan upaya baru untuk hidup berdampingan.",
      entries: [
        {
          title: "Pembaruan, sekularisme, dan Baha'i",
          when: "abad ke-19 sampai 20; Baha'i 1863",
          year: 1863,
          place: { name: "Baghdad", lon: 44.4, lat: 33.3 },
          text:
            "Abad ke-19 membawa gelombang pembaruan. Ilmu pengetahuan modern, kritik atas tafsir kitab suci, dan pemisahan gereja dari negara di sejumlah negeri menimbulkan perdebatan baru. Banyak tradisi menanggapi dengan gerakan pembaruan, ada yang menekankan kembali kepada sumber awal, ada pula yang menyesuaikan diri dengan zaman. Sekularisme sendiri berarti hal yang berbeda di Prancis, Amerika Serikat, Turki, dan India.\n\n" +
            "Pada 1863 Baha'ullah di Baghdad mengumumkan misinya, yang menjadi awal agama Baha'i, berakar di Persia dari gerakan Babi. Ajarannya menekankan kesatuan umat manusia dan kesatuan agama-agama. Pemeluknya di Iran pernah mengalami penindasan.",
          facts: [["Baha'i", "Diumumkan 1863 oleh Baha'ullah"], ["Asal", "Persia, gerakan Babi"], ["Ajaran", "Kesatuan umat manusia"]],
        },
        {
          title: "Kebebasan beragama dalam Deklarasi HAM 1948",
          when: "1948",
          year: 1948,
          place: { name: "Paris", lon: 2.29, lat: 48.86 },
          text:
            "Pada 10 Desember 1948 Majelis Umum PBB di Paris menerima Deklarasi Universal Hak Asasi Manusia. Pasal 18 menyatakan bahwa setiap orang berhak atas kebebasan berpikir, berkeyakinan, dan beragama, termasuk kebebasan berpindah agama dan menjalankannya, baik sendiri maupun bersama-sama.\n\n" +
            "Deklarasi itu disusun setelah Perang Dunia II, dengan sumbangan perwakilan dari berbagai agama dan budaya. Meski bukan perjanjian yang mengikat, rumusannya menjadi acuan banyak konstitusi, namun penerapannya masih menjadi masalah di banyak tempat.",
          facts: [["Tanggal", "10 Desember 1948"], ["Pasal", "18, kebebasan beragama"], ["Sifat", "Deklarasi, tidak mengikat"]],
        },
        {
          title: "Dialog antaragama: Nostra Aetate dan Abu Dhabi",
          when: "1965 dan 2019",
          year: 1965,
          place: { name: "Vatikan", lon: 12.45, lat: 41.9 },
          text:
            "Pada 1965 Konsili Vatikan II menerbitkan Nostra Aetate, pernyataan Gereja Katolik tentang hubungan dengan agama-agama bukan Kristen. Dokumen ini mengakui hal-hal yang benar dan suci dalam agama lain serta mengimbau dialog dan penghormatan, termasuk terhadap umat Islam, Hindu, Buddha, dan Yahudi.\n\n" +
            "Pada 4 Februari 2019 di Abu Dhabi, Paus Fransiskus dan Imam Besar Al-Azhar, Ahmad al-Tayyeb, menandatangani Dokumen Persaudaraan Manusia untuk perdamaian dunia dan hidup bersama. Dialog serupa berlangsung di banyak tempat, dari forum resmi sampai kerja sama warga di lingkungan sehari-hari.",
          facts: [["Nostra Aetate", "1965, Vatikan II"], ["Dokumen Persaudaraan Manusia", "4 Februari 2019, Abu Dhabi"], ["Pesan", "Dialog dan saling menghormati"]],
        },
        {
          title: "Pancasila dan agama di Indonesia",
          when: "1945 dan 2017",
          year: 2017,
          place: { name: "Jakarta", lon: 106.85, lat: -6.21 },
          text:
            "Sila pertama Pancasila, Ketuhanan Yang Maha Esa, menjadi dasar hubungan negara dan agama di Indonesia. Negara tidak berbentuk teokrasi dan tidak pula memisahkan agama dari kehidupan publik. Enam agama dilayani secara resmi, yaitu Islam, Protestan, Katolik, Hindu, Buddha, dan Khonghucu.\n\n" +
            "Pada 2017 Mahkamah Konstitusi memutuskan bahwa penghayat kepercayaan terhadap Tuhan Yang Maha Esa berhak dicatat dalam kolom agama pada kartu identitas, sehingga pengikut kepercayaan leluhur seperti Sunda Wiwitan atau Kaharingan memperoleh pengakuan administratif. Pelaksanaannya terus berjalan, dengan pasang surut tantangan kerukunan.",
          facts: [["Sila pertama", "Ketuhanan Yang Maha Esa"], ["Agama dilayani", "Enam"], ["Putusan MK", "2017, penghayat kepercayaan"]],
          civId: "republik-indonesia",
        },
      ],
    },
  ],
  sources: [
    { title: "The World's Religions", author: "Huston Smith", kind: "sekunder" },
    { title: "A History of God", author: "Karen Armstrong", year: 1993, kind: "sekunder" },
    { title: "Encyclopaedia Britannica (entri agama dan tokoh terkait)", kind: "sekunder" },
    { title: "Theravada Buddhism: A Social History from Ancient Benares to Modern Colombo", author: "Richard Gombrich", kind: "sekunder" },
    { title: "An Introduction to Hinduism", author: "Gavin Flood", year: 1996, kind: "sekunder" },
    { title: "A History of Christianity", author: "Diarmaid MacCulloch", year: 2009, kind: "sekunder" },
    { title: "Zoroastrians: Their Religious Beliefs and Practices", author: "Mary Boyce", year: 1979, kind: "sekunder" },
    { title: "Prasasti Ashoka (Dekrit Batu)", author: "Ashoka", kind: "prasasti" },
  ],
};
