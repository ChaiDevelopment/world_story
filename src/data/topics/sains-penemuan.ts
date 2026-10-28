import type { Topic } from '../../types';

/** Sejarah ilmu dan penemuan: dari lempung Mesopotamia hingga era digital. */
export const topicSains: Topic = {
  id: 'sains-penemuan',
  title: "Ilmu dan Penemuan yang Mengubah Dunia",
  subtitle: "Dari angka-angka di lempung Babilonia hingga satelit Palapa dan vaksin mRNA, kisah bagaimana rasa ingin tahu manusia membentuk dunia kita.",
  intro:
    "Kisah ini bermula dari pertanyaan yang sangat sederhana. Kapan banjir sungai akan datang? Berapa banyak gandum yang harus disimpan? Bagaimana menghitung bintang agar tahu kapan menanam? Para juru tulis di Mesopotamia dan Mesir menjawabnya dengan angka dan tabel, dan dari kebutuhan sehari-hari itulah ilmu pengetahuan tumbuh.\n\n" +
    "Berabad-abad kemudian pertanyaan itu menjadi lebih berani. Para pemikir Yunani mencari bukti, para ilmuwan di Baghdad dan Kairo menguji dengan percobaan, para pengrajin Tiongkok menemukan kertas, mesiu, dan percetakan, dan para astronom Eropa menatap langit lewat teleskop. Ilmu tidak pernah milik satu bangsa; ia berpindah dari tangan ke tangan, diterjemahkan, dikritik, dan diperbaiki.\n\n" +
    "Halaman ini mengikuti jalan panjang itu, dengan perhatian khusus pada kepulauan kita. Nusantara bukan sekadar tempat para peneliti asing singgah. Dari Ambon, Ternate, dan Batavia lahir pengamatan penting tentang tumbuhan, hewan, dan penyakit, dan kemudian, dari Bandung dan Jakarta, ikhtiar bangsa sendiri untuk terbang dan bersatelit.",
  relatedCivIds: ['mesopotamia', 'mesir-kuno', 'yunani-klasik', 'gupta', 'qin-han', 'tang-song', 'khilafah', 'timuriyah', 'inggris-raya', 'amerika-serikat', 'mesoamerika-andes', 'republik-indonesia'],
  note:
    "Banyak penemuan merupakan hasil kerja banyak orang dan tidak dapat dikaitkan dengan satu nama atau satu tanggal. Tahun yang ditulis di sini umumnya tahun terbitnya karya atau pengumuman yang paling dikenal; tanggal yang kurang pasti ditandai dengan ±. Beberapa penemuan juga memiliki klaim prioritas yang diperdebatkan.",
  sections: [
    {
      title: "Ilmu di dunia kuno",
      intro: "Matematika, astronomi, dan pengobatan lahir dari kebutuhan mengelola ladang, pajak, kalender, dan bangunan.",
      entries: [
        {
          title: "Tulisan paku dan hitungan enam puluhan Babilonia",
          when: "±3200 SM; bilangan 60 ±1800 SM",
          year: -3200,
          place: { name: "Uruk dan Babilonia, Mesopotamia", lon: 44.4, lat: 32.5 },
          text:
            "Ilmu bermula dari pembukuan. Sekitar 3200 SM para juru tulis di Uruk menoreh tanda pada lempung untuk mencatat jelai, domba, dan upah pekerja. Dari catatan itu lahir tulisan paku, dan bersamanya matematika.\n\n" +
            "Orang Babilonia memakai sistem bilangan basis 60. Pada ±1800 SM mereka sudah mengenal tabel perkalian, akar kuadrat, dan sesuatu yang kini disebut teorema Pythagoras, seperti tampak pada lempeng Plimpton 322. Dari sistem itulah kita mewarisi jam yang terbagi 60 menit, menit yang terbagi 60 detik, dan lingkaran yang dibagi 360 derajat. Mereka juga mencatat gerak planet dan gerhana secara teratur.",
          facts: [["Sistem bilangan", "Basis 60 (seksagesimal)"], ["Warisan kita", "60 menit, 360 derajat"], ["Bukti", "Lempeng Plimpton 322"]],
          civId: "mesopotamia",
        },
        {
          title: "Papirus Rhind dan kalender 365 hari Mesir",
          when: "±1550 SM",
          year: -1550,
          place: { name: "Thebes, Mesir", lon: 32.64, lat: 25.7 },
          text:
            "Papirus Rhind adalah salinan buku soal matematika Mesir yang ditulis juru tulis bernama Ahmes sekitar 1550 SM, berdasarkan naskah yang lebih tua. Isinya berupa 84 soal: pecahan, pembagian roti, luas lingkaran dan segitiga, serta volume lumbung.\n\n" +
            "Orang Mesir juga menyusun kalender sipil dengan 12 bulan yang masing-masing 30 hari, ditambah 5 hari di akhir tahun, sehingga totalnya 365 hari. Kalender itu berakar pada pengamatan terbitnya bintang Sirius dan banjir tahunan Sungai Nil. Kalender ini menjadi dasar bagi kalender Julian dan, lewat Roma, kalender yang kita pakai sekarang.",
          facts: [["Sumber", "Papirus Rhind, juru tulis Ahmes"], ["Kalender", "12 x 30 hari + 5 hari"], ["Pewarisan", "Kalender Julian lalu Gregorian"]],
          civId: "mesir-kuno",
        },
        {
          title: "Euklides dan Archimedes: matematika dengan pembuktian",
          when: "±300 sampai 212 SM",
          year: -300,
          place: { name: "Aleksandria, Mesir", lon: 29.92, lat: 31.2 },
          text:
            "Sekitar 300 SM Euklides menulis Elemen di Aleksandria, buku yang menyusun geometri dari beberapa pengandaian dasar dan membuktikan setiap teorema selangkah demi selangkah. Gaya berpikir itu memengaruhi pengajaran matematika hingga berabad-abad kemudian.\n\n" +
            "Archimedes (287-212 SM) dari Syrakusa menghitung luas dan volume bangun lengkung, mengestimasi nilai pi, dan menjelaskan prinsip tuas serta daya apung. Menurut kisah yang diwariskan, ia tewas saat pasukan Romawi merebut kotanya pada 212 SM. Kisah \"Eureka\" di bak mandi adalah anekdot yang ditulis jauh sesudahnya, sehingga keasliannya diragukan.",
          facts: [["Euklides", "Elemen, ±300 SM"], ["Archimedes", "287-212 SM, Syrakusa"], ["Prinsip", "Tuas, daya apung, pi"]],
          civId: "yunani-klasik",
        },
        {
          title: "Eratosthenes mengukur bumi",
          when: "±240 SM",
          year: -240,
          place: { name: "Aleksandria dan Siene, Mesir", lon: 32.9, lat: 24.09 },
          text:
            "Eratosthenes, pustakawan Aleksandria, mendengar bahwa pada tengah hari di titik balik musim panas matahari tepat di atas kepala di Siene (Aswan), tanpa bayangan di dasar sumur. Di Aleksandria pada saat yang sama sebuah tiang tetap membuat bayangan. Dari selisih sudut bayangan itu dan jarak kedua kota, ia menghitung keliling bumi.\n\n" +
            "Hasilnya sekitar 250.000 stadia. Karena panjang stadion yang ia pakai tidak pasti, para ahli masih berdebat seberapa dekat hasil itu dengan angka sebenarnya, kira-kira 40.000 kilometer. Hal yang pasti: pada masa itu para terpelajar sudah memahami bahwa bumi bulat.",
          facts: [["Metode", "Selisih bayangan di dua kota"], ["Hasil", "±250.000 stadia"], ["Keakuratan", "Diperdebatkan (panjang stadion)"]],
          civId: "yunani-klasik",
        },
        {
          title: "Mekanisme Antikythera dan Almagest Ptolemaios",
          when: "±100 SM dan ±150 M",
          year: -100,
          place: { name: "Antikythera, Yunani", lon: 23.31, lat: 35.87 },
          text:
            "Pada 1901 penyelam pencari spons menemukan bangkai kapal Romawi di Antikythera. Di antara muatannya ada gumpalan perunggu berkarat yang ternyata berisi lebih dari 30 roda gigi. Alat ini, berusia sekitar 100 SM, tampaknya menghitung posisi matahari, bulan, dan gerhana. Ia membuktikan bahwa teknik mekanik Yunani jauh lebih maju daripada dugaan lama.\n\n" +
            "Sekitar 150 M Klaudios Ptolemaios di Aleksandria menulis Almagest, yang memaparkan gerak planet dengan bumi di pusat. Model itu bertahan lebih dari seribu tahun, dibaca dan dikoreksi oleh astronom Muslim dan Eropa, sebelum akhirnya digantikan.",
          facts: [["Antikythera", "Ditemukan 1901, >30 roda gigi"], ["Almagest", "±150 M, model bumi sebagai pusat"], ["Dipakai", "Lebih dari seribu tahun"]],
          civId: "yunani-klasik",
        },
        {
          title: "Nol dan kalender bangsa Maya",
          when: "±abad ke-4 M dan sesudahnya",
          year: 350,
          place: { name: "Tikal, Guatemala", lon: -89.62, lat: 17.22 },
          text:
            "Para pendeta-astronom Maya mengamati Venus, matahari, dan bulan dengan ketelitian tinggi tanpa teleskop. Mereka menyusun beberapa kalender yang berjalan bersamaan: tahun matahari 365 hari (Haab), hitungan suci 260 hari (Tzolkin), dan Hitungan Panjang untuk mencatat rentang waktu yang sangat besar.\n\n" +
            "Sistem bilangan mereka berbasis 20 dan memakai simbol nol berbentuk cangkang sebagai penanda tempat. Penggunaan nol di Mesoamerika terbukti pada prasasti-prasasti sekitar abad ke-4 M, dan mungkin muncul lebih awal pada budaya sebelumnya. Penemuan ini berlangsung sendiri, tanpa kontak dengan India atau Babilonia.",
          facts: [["Kalender", "Haab 365 hari, Tzolkin 260 hari"], ["Bilangan", "Basis 20, dengan simbol nol"], ["Asal", "Penemuan mandiri"]],
          civId: "mesoamerika-andes",
        },
      ],
    },
    {
      title: "Asia: kertas, mesiu, dan nol",
      intro: "Selama berabad-abad Asia menjadi sumber banyak penemuan yang kelak mengubah dunia, dari alat tulis hingga angka.",
      entries: [
        {
          title: "Kertas Cai Lun dan seismograf Zhang Heng",
          when: "105 dan 132 M",
          year: 105,
          place: { name: "Luoyang, Tiongkok", lon: 112.45, lat: 34.62 },
          text:
            "Pada 105 M Cai Lun, pejabat istana Dinasti Han Timur, melaporkan kepada kaisar cara membuat kertas dari serat kulit pohon, kain bekas, dan jala ikan yang dihaluskan. Kertas yang lebih tua sudah ada di arkeologi, tetapi Cai Lun dihormati karena menyempurnakannya dan menjadikannya murah. Rahasianya baru menyebar ke dunia Islam setelah Pertempuran Talas pada 751 dan sampai ke Eropa berabad-abad kemudian.\n\n" +
            "Pada 132 Zhang Heng membuat alat pendeteksi gempa dari perunggu. Bila tanah bergetar, bola kecil jatuh dari mulut salah satu naga ke mulut katak di bawahnya, menunjukkan arah gempa. Para ahli masih meneliti bagaimana mekanismenya bekerja.",
          facts: [["Kertas", "Cai Lun, 105 M"], ["Seismograf", "Zhang Heng, 132 M"], ["Rahasia kertas menyebar", "Setelah Talas, 751"]],
          civId: "qin-han",
        },
        {
          title: "Aryabhata, Brahmagupta, dan angka nol",
          when: "499 dan 628 M",
          year: 628,
          place: { name: "Kusumapura (Patna), India", lon: 85.14, lat: 25.6 },
          text:
            "Pada 499 Aryabhata, yang saat itu berusia 23 tahun, menulis Aryabhatiya. Ia menghitung nilai pi mendekati 3,1416 dan menjelaskan bahwa bumi berputar pada porosnya, sehingga langit tampak bergerak. Sistem bilangan puluhan dengan nilai tempat yang berkembang di India pada masanya membuat perhitungan jauh lebih mudah.\n\n" +
            "Pada 628 Brahmagupta menulis Brahmasphutasiddhanta, yang termasuk catatan tertulis awal tentang aturan hitung dengan nol dan bilangan negatif. Sistem India ini kemudian dibawa ke dunia Islam, lalu ke Eropa lewat Al-Khawarizmi dan Fibonacci, dan menjadi angka yang kita pakai sekarang.",
          facts: [["Aryabhata", "Aryabhatiya, 499"], ["Brahmagupta", "Aturan hitung dengan nol, 628"], ["Pewarisan", "Dunia Islam lalu Eropa"]],
          civId: "gupta",
        },
        {
          title: "Percetakan: Sutra Intan, Bi Sheng, dan Jikji",
          when: "868, ±1040, dan 1377",
          year: 868,
          place: { name: "Dunhuang, Tiongkok", lon: 94.66, lat: 40.14 },
          text:
            "Sutra Intan yang ditemukan di gua-gua Dunhuang bertarikh 868 M dan dianggap buku cetakan balok kayu bertarikh tertua yang terawetkan. Seorang pembuat bernama Wang Jie menyebut pembuatannya demi orangtuanya. Pada ±1040 Bi Sheng pada masa Song menciptakan huruf lepas dari tanah liat bakar, seperti dicatat Shen Kuo.\n\n" +
            "Di Korea, Jikji, kumpulan ajaran Buddha, dicetak dengan huruf logam lepas pada 1377 di Biara Heungdeok, dan merupakan buku tertua yang terawetkan yang dicetak dengan cara itu. Gutenberg di Jerman kemudian mengembangkan mesin cetaknya sekitar 1450. Penemuan-penemuan ini saling terpisah, dan para ahli masih membahas apakah ada hubungan antara tradisi Asia dan Eropa.",
          facts: [["Sutra Intan", "868, balok kayu"], ["Bi Sheng", "±1040, huruf lepas tanah liat"], ["Jikji", "1377, huruf logam lepas"]],
          civId: "tang-song",
        },
        {
          title: "Kompas dan mesiu pada masa Song",
          when: "1044 sampai 1117",
          year: 1088,
          place: { name: "Kaifeng, Tiongkok", lon: 114.35, lat: 34.8 },
          text:
            "Pada masa Dinasti Song ilmu dan teknik berkembang pesat. Pada 1044 buku militer Wujing Zongyao memuat resep tertulis mesiu yang pertama kali diketahui, untuk bom dan pembakar. Sejak itu mesiu menyebar ke dunia Islam, India, dan Eropa dan mengubah perang.\n\n" +
            "Pada 1088 Shen Kuo (1031-1095) dalam Mengxi Bitan menjelaskan jarum bermagnet yang menunjuk ke selatan dan menyebut bahwa arahnya sedikit menyimpang dari kutub sejati. Catatan pemakaian kompas untuk pelayaran muncul sekitar 1117 dalam tulisan Zhu Yu. Kompas membantu pelaut Tiongkok dan kelak pelaut lain mengarungi samudra.",
          facts: [["Mesiu", "Wujing Zongyao, 1044"], ["Kompas", "Shen Kuo, Mengxi Bitan, 1088"], ["Navigasi", "Zhu Yu, ±1117"]],
          civId: "tang-song",
        },
        {
          title: "Observatorium Ulugh Beg di Samarkand",
          when: "1428",
          year: 1428,
          place: { name: "Samarkand, Uzbekistan", lon: 66.98, lat: 39.65 },
          text:
            "Ulugh Beg, cucu Timur, memerintah Samarkand dan lebih mencintai bintang daripada perang. Sekitar 1428 ia membangun observatorium besar dengan sextan raksasa yang jari-jarinya sekitar 40 meter, sebagian ditanam di tanah. Di sana ia bekerja bersama para astronom seperti Ali Qushji.\n\n" +
            "Hasilnya adalah katalog bintang Zij-i Sultani yang memuat posisi 1.018 bintang, yang jauh lebih teliti daripada katalog Ptolemaios. Pada 1449 Ulugh Beg dibunuh dalam perebutan kekuasaan dan observatoriumnya dibiarkan rusak, tetapi karyanya terus dipelajari hingga ke Eropa.",
          facts: [["Pendiri", "Ulugh Beg"], ["Hasil", "Zij-i Sultani, 1.018 bintang"], ["Wafat", "1449, dibunuh"]],
          civId: "timuriyah",
        },
      ],
    },
    {
      title: "Zaman Keemasan Islam",
      intro: "Dari Baghdad hingga Kairo dan Cordoba, ilmuwan berbahasa Arab menerjemahkan, menguji, dan menambah warisan ilmu dari Yunani, India, dan Persia.",
      entries: [
        {
          title: "Baitul Hikmah dan al-Khawarizmi",
          when: "abad ke-9 M",
          year: 830,
          place: { name: "Baghdad", lon: 44.36, lat: 33.31 },
          text:
            "Pada abad ke-9, khususnya di bawah Khalifah al-Ma'mun, Baghdad menjadi pusat penerjemahan dan penelitian. Baitul Hikmah (Rumah Kebijaksanaan) menaungi para penerjemah dan ilmuwan yang mengalihbahasakan karya Yunani, Persia, dan India ke bahasa Arab. Para sejarawan masih membahas seberapa besar lembaga itu dan apa persisnya perannya.\n\n" +
            "Di sana bekerja Muhammad bin Musa al-Khawarizmi (±780-850), yang sekitar 820 menulis Al-Kitab al-Mukhtasar fi Hisab al-Jabr wa'l-Muqabala. Dari kata al-jabr lahir istilah aljabar, dan dari namanya muncul kata algoritma. Ia juga memperkenalkan angka India kepada pembaca berbahasa Arab.",
          facts: [["Khalifah", "al-Ma'mun"], ["Tokoh", "al-Khawarizmi, ±780-850"], ["Warisan kata", "Aljabar, algoritma"]],
          civId: "khilafah",
        },
        {
          title: "Ibnu al-Haytham dan ilmu optik",
          when: "±1011 sampai 1021",
          year: 1011,
          place: { name: "Kairo, Mesir", lon: 31.24, lat: 30.04 },
          text:
            "Ibnu al-Haytham (Alhazen, ±965-1040), kelahiran Basra yang bekerja di Kairo, menulis Kitab al-Manazir (Kitab Optik) pada 1011-1021. Ia mematahkan pandangan lama bahwa mata memancarkan sinar, dan menunjukkan bahwa kita melihat karena cahaya dari benda masuk ke mata.\n\n" +
            "Ia menguji pendapatnya dengan percobaan, misalnya memakai kamera lubang jarum, dan menekankan bahwa kesimpulan harus dibuktikan dengan pengamatan yang bisa diulang. Banyak sejarawan menyebutnya salah satu perintis metode ilmiah. Bukunya diterjemahkan ke Latin dan sangat memengaruhi para pemikir Eropa.",
          facts: [["Karya", "Kitab al-Manazir, 1011-1021"], ["Temuan", "Penglihatan karena cahaya masuk ke mata"], ["Metode", "Percobaan yang dapat diulang"]],
          civId: "khilafah",
        },
        {
          title: "Ibnu Sina dan al-Biruni",
          when: "abad ke-11 M",
          year: 1025,
          place: { name: "Bukhara dan Ghazni, Asia Tengah", lon: 64.42, lat: 39.77 },
          text:
            "Ibnu Sina (Avicenna, 980-1037) dari dekat Bukhara menulis Al-Qanun fi al-Tibb (Kanon Kedokteran), yang selesai sekitar 1025. Buku itu merangkum pengetahuan medis dari Yunani dan Timur, menguraikan penyakit menular, gizi, dan pengobatan. Ia dipakai sebagai buku rujukan di Eropa selama berabad-abad.\n\n" +
            "Sezaman dengannya, al-Biruni (973-1048) menghitung jari-jari bumi dengan trigonometri dari ketinggian sebuah gunung, dan hasilnya mendekati nilai modern. Ia juga menulis kajian terperinci tentang India setelah belajar bahasa Sanskerta. Keduanya contoh sarjana serbabisa yang bekerja di istana-istana Asia Tengah.",
          facts: [["Ibnu Sina", "Al-Qanun, ±1025"], ["Al-Biruni", "973-1048, jari-jari bumi"], ["Pengaruh", "Rujukan medis di Eropa"]],
          civId: "khilafah",
        },
        {
          title: "Al-Zahrawi dan Ibnu al-Nafis: bedah dan sirkulasi paru",
          when: "±1000 dan 1242",
          year: 1242,
          place: { name: "Damaskus, Suriah", lon: 36.29, lat: 33.51 },
          text:
            "Al-Zahrawi (Abulcasis, ±936-1013) dari Cordoba menulis Al-Tasrif sekitar tahun 1000, ensiklopedia kedokteran yang bagian bedahnya bergambar lengkap berisi alat-alat operasi. Buku itu diterjemahkan ke Latin dan lama menjadi rujukan para ahli bedah Eropa.\n\n" +
            "Ibnu al-Nafis (1213-1288), dokter di Damaskus dan Kairo, pada 1242 menulis ulasan tentang karya Ibnu Sina dan menyatakan bahwa darah mengalir dari bilik kanan jantung ke paru-paru, lalu kembali ke jantung kiri, bukan menembus sekat jantung. Para sejarawan masih membahas apakah penemu Eropa kemudian mengenal karyanya.",
          facts: [["Al-Zahrawi", "Al-Tasrif, ±1000"], ["Ibnu al-Nafis", "Sirkulasi paru, 1242"], ["Dipelajari di", "Eropa, lewat terjemahan Latin"]],
          civId: "khilafah",
        },
        {
          title: "Mesin al-Jazari dan observatorium Maragha",
          when: "1206 dan 1259",
          year: 1206,
          place: { name: "Diyarbakir dan Maragha", lon: 40.22, lat: 37.91 },
          text:
            "Ismail al-Jazari, insinyur istana di Diyarbakir, menulis pada 1206 buku tentang mesin cerdik: jam air bergambar gajah, pompa, dan mesin pengangkat air. Rancangannya memakai poros engkol dan mekanisme katup yang kelak jadi dasar mesin-mesin lain.\n\n" +
            "Pada 1259 Hulagu Khan, penakluk Baghdad, mendirikan observatorium di Maragha, Iran barat laut, atas anjuran Nasiruddin al-Tusi. Para astronomnya memperbaiki model gerak planet Ptolemaios, misalnya dengan konsep yang dikenal sebagai Tusi-couple. Sebagian ahli menduga gagasan ini sampai ke Eropa dan dikenal oleh Kopernikus, meskipun jalur persisnya diperdebatkan.",
          facts: [["Al-Jazari", "Buku mesin, 1206"], ["Maragha", "Didirikan 1259, al-Tusi"], ["Diperdebatkan", "Pengaruh pada Kopernikus"]],
          civId: "khilafah",
        },
      ],
    },
    {
      title: "Revolusi Ilmiah",
      intro: "Antara abad ke-16 dan ke-19 cara manusia memahami alam berubah: pengamatan, pengukuran, dan percobaan menjadi dasar pengetahuan.",
      entries: [
        {
          title: "Kopernikus dan Vesalius",
          when: "1543",
          year: 1543,
          place: { name: "Frombork, Polandia, dan Basel, Swiss", lon: 19.68, lat: 54.36 },
          text:
            "Pada 1543 terbit dua buku yang mengubah cara memandang alam. Nicolaus Kopernikus, kanon gereja di Frombork, menerbitkan De revolutionibus orbium coelestium, yang menempatkan matahari, bukan bumi, di pusat gerak planet. Ia menerima salinan cetakan pertama menjelang wafatnya.\n\n" +
            "Di Basel, Andreas Vesalius menerbitkan De humani corporis fabrica, atlas anatomi yang bergambar indah, berdasarkan pembedahan yang ia lakukan sendiri alih-alih mengandalkan Galenos. Ia menemukan banyak kekeliruan lama. Kedua buku tidak serta-merta diterima, tetapi menandai awal sikap baru: bukti mengalahkan otoritas.",
          facts: [["Kopernikus", "De revolutionibus, 1543"], ["Vesalius", "De humani corporis fabrica, 1543"], ["Sikap baru", "Bukti lebih utama daripada otoritas"]],
        },
        {
          title: "Galileo dan Kepler",
          when: "1609 sampai 1610",
          year: 1609,
          place: { name: "Padua dan Praha", lon: 11.88, lat: 45.41 },
          text:
            "Pada 1609 Johannes Kepler menerbitkan Astronomia Nova yang memuat dua hukumnya: planet bergerak dalam orbit elips, dan garis dari matahari ke planet menyapu luas yang sama dalam waktu yang sama. Ia bekerja dengan data pengamatan Tycho Brahe yang sangat teliti.\n\n" +
            "Pada tahun yang sama Galileo Galilei memperbaiki teleskop dan mengarahkannya ke langit. Dalam Sidereus Nuncius (1610) ia melaporkan gunung di bulan dan empat bulan mengitari Jupiter. Ia mendukung pandangan Kopernikus, yang pada 1633 membawanya ke pengadilan Inkuisisi dan tahanan rumah.",
          facts: [["Kepler", "Astronomia Nova, 1609"], ["Galileo", "Sidereus Nuncius, 1610"], ["Pengadilan", "1633, tahanan rumah"]],
        },
        {
          title: "Royal Society dan Principia Newton",
          when: "1660 dan 1687",
          year: 1687,
          place: { name: "London dan Cambridge", lon: -0.12, lat: 51.51 },
          text:
            "Pada 1660 sekelompok sarjana di London mendirikan Royal Society, yang menerbitkan jurnal Philosophical Transactions dan menekankan percobaan yang bisa disaksikan serta diulang. Tak lama kemudian lahir lembaga serupa di Prancis dan di negeri lain.\n\n" +
            "Pada 1687 Isaac Newton menerbitkan Philosophiae Naturalis Principia Mathematica atas dorongan Edmond Halley. Ia merumuskan tiga hukum gerak dan hukum gravitasi umum yang menjelaskan jatuhnya apel maupun orbit bulan dan planet dengan satu rumus. Pada waktu hampir bersamaan Gottfried Leibniz mengembangkan kalkulus secara mandiri, dan perselisihan prioritas keduanya berlangsung lama.",
          facts: [["Royal Society", "1660"], ["Principia", "1687"], ["Rumusan", "Tiga hukum gerak, gravitasi umum"]],
          civId: "inggris-raya",
        },
        {
          title: "Leeuwenhoek melihat mikroba",
          when: "1676",
          year: 1676,
          place: { name: "Delft, Belanda", lon: 4.36, lat: 52.01 },
          text:
            "Antonie van Leeuwenhoek, pedagang kain di Delft tanpa pendidikan universitas, menggosok lensa kecil yang sangat jernih dan memasangnya pada mikroskop sederhana. Pada 1676 ia melaporkan kepada Royal Society bahwa air hujan dan air kolam mengandung makhluk-makhluk kecil bergerak yang ia sebut animalcula.\n\n" +
            "Awalnya sebagian anggota Royal Society ragu, tetapi pengamatan ulang mengonfirmasinya. Ia juga melihat sel darah merah dan bakteri dari gigi. Dua abad kemudian penemuan ini menjadi dasar teori kuman penyakit.",
          facts: [["Peneliti", "Antonie van Leeuwenhoek"], ["Laporan", "1676, kepada Royal Society"], ["Temuan", "Mikroba dan sel darah"]],
        },
        {
          title: "Rumphius dan Linnaeus: mendata isi alam",
          when: "1735 dan 1741 sampai 1750",
          year: 1741,
          place: { name: "Ambon, Maluku", lon: 128.19, lat: -3.7 },
          text:
            "Georg Eberhard Rumphius (1627-1702), pegawai VOC kelahiran Jerman yang menetap di Ambon, mencatat tumbuhan Maluku selama puluhan tahun, dibantu penduduk setempat yang mengajarinya nama dan kegunaan tanaman. Ia buta sejak 1670, tetapi terus bekerja dengan bantuan juru gambar dan juru tulisnya. Karyanya, Herbarium Amboinense, terbit secara anumerta pada 1741-1750.\n\n" +
            "Pada 1735 Carl Linnaeus menerbitkan Systema Naturae, yang kemudian mengembangkan tata nama dua kata untuk setiap spesies, seperti Homo sapiens. Sistem itu hingga kini dipakai untuk memberi nama makhluk hidup, dan banyak spesies tropis Nusantara masuk ke dalam daftar berkat kerja orang seperti Rumphius.",
          facts: [["Rumphius", "Herbarium Amboinense, terbit 1741-1750"], ["Linnaeus", "Systema Naturae, 1735"], ["Sistem", "Penamaan dua kata"]],
        },
        {
          title: "Wallace di Nusantara dan teori seleksi alam",
          when: "1854 sampai 1862; surat Ternate 1858",
          year: 1858,
          place: { name: "Ternate, Maluku Utara", lon: 127.38, lat: 0.79 },
          text:
            "Alfred Russel Wallace menjelajahi Nusantara dari 1854 hingga 1862, menempuh sekitar 22.000 kilometer dan mengumpulkan lebih dari 125.000 spesimen. Ia dibantu banyak orang setempat, di antaranya Ali, pemuda Melayu yang menjadi asistennya bertahun-tahun. Ia mengamati bahwa fauna di Bali berbeda dari fauna di Lombok yang hanya dipisahkan selat sempit, garis yang kelak dikenal sebagai Garis Wallace.\n\n" +
            "Pada Februari 1858, saat demam di Ternate, ia menyusun gagasan seleksi alam dan mengirimkan naskahnya kepada Charles Darwin, yang telah lama mengerjakan gagasan serupa. Keduanya dipresentasikan bersama di Linnean Society pada Juli 1858, dan Darwin menerbitkan On the Origin of Species pada 1859. Wallace menulis kisah perjalanannya dalam The Malay Archipelago (1869).",
          facts: [["Perjalanan", "1854-1862, >125.000 spesimen"], ["Surat Ternate", "1858"], ["Darwin", "On the Origin of Species, 1859"]],
        },
      ],
    },
    {
      title: "Abad mesin dan listrik",
      intro: "Mesin uap, listrik, dan kedokteran modern mengubah cara orang bekerja, berkomunikasi, dan bertahan hidup.",
      entries: [
        {
          title: "Mesin uap James Watt",
          when: "1769",
          year: 1769,
          place: { name: "Glasgow dan Birmingham, Inggris", lon: -4.25, lat: 55.86 },
          text:
            "Mesin uap sudah dipakai untuk memompa air dari tambang sebelum Watt. James Watt, pembuat alat ilmiah di Universitas Glasgow, memperbaiki mesin Newcomen dengan kondensor terpisah dan mematenkannya pada 1769. Mesinnya jauh lebih hemat bahan bakar.\n\n" +
            "Bersama pengusaha Matthew Boulton di Birmingham, Watt memproduksi mesin untuk pabrik, tambang, dan kemudian kereta serta kapal. Mesin uap menggerakkan Revolusi Industri, mengubah kota, kerja, dan jarak. Satuan daya watt dinamai menurut namanya.",
          facts: [["Paten", "1769, kondensor terpisah"], ["Mitra", "Matthew Boulton"], ["Dampak", "Revolusi Industri"]],
          civId: "inggris-raya",
        },
        {
          title: "Dari vaksin cacar hingga penisilin",
          when: "1796 sampai 1928",
          year: 1796,
          place: { name: "Berkeley, Inggris", lon: -2.46, lat: 51.69 },
          text:
            "Pada 1796 dokter Edward Jenner menyuntikkan cairan cacar sapi kepada James Phipps, anak delapan tahun, setelah mendengar bahwa pemerah susu yang pernah terkena cacar sapi jarang tertular cacar. Percobaan itu menjadi dasar vaksinasi. Pada 1980 WHO menyatakan cacar telah dibasmi dari dunia.\n\n" +
            "Pada 1860-an Louis Pasteur menunjukkan bahwa mikroba menyebabkan pembusukan dan, bersama Robert Koch, penyakit. Pada 1928 Alexander Fleming di London melihat jamur Penicillium menghambat bakteri di cawan petrinya. Howard Florey dan Ernst Chain mengembangkan penisilin sebagai obat pada 1940-an, dan ketiganya meraih Nobel pada 1945.",
          facts: [["Vaksin cacar", "Jenner, 1796"], ["Teori kuman", "Pasteur dan Koch"], ["Penisilin", "Fleming 1928; Nobel 1945"]],
        },
        {
          title: "Telegraf, telepon, dan lampu listrik",
          when: "1844, 1876, dan 1879",
          year: 1879,
          place: { name: "Menlo Park, New Jersey", lon: -74.33, lat: 40.57 },
          text:
            "Pada 1844 Samuel Morse mengirim pesan telegraf pertama dari Washington ke Baltimore, \"What hath God wrought\". Dengan kode titik-garis, kabar yang sebelumnya berminggu-minggu kini dapat tiba dalam hitungan menit. Pada 1876 Alexander Graham Bell mematenkan telepon, meski klaim prioritas dengan penemu lain diperdebatkan.\n\n" +
            "Pada 1879 Thomas Edison dan timnya di Menlo Park menyempurnakan bola lampu pijar yang tahan menyala berjam-jam, yang pada waktu hampir bersamaan juga dikembangkan oleh Joseph Swan di Inggris. Sesudah itu listrik mulai menerangi kota dan pabrik.",
          facts: [["Telegraf", "Morse, 1844"], ["Telepon", "Bell, 1876"], ["Lampu pijar", "Edison dan Swan, 1879"]],
          civId: "amerika-serikat",
        },
        {
          title: "Mendel dan Mendeleev",
          when: "1866 dan 1869",
          year: 1866,
          place: { name: "Brno dan Sankt Peterburg", lon: 16.61, lat: 49.19 },
          text:
            "Gregor Mendel, biarawan Augustinus di Brno, menanam ribuan tanaman kacang polong selama bertahun-tahun dan pada 1866 melaporkan bahwa sifat diwariskan sebagai satuan yang terpisah. Karyanya nyaris tak diperhatikan hingga ditemukan ulang sekitar 1900, ketika ilmu genetika berkembang.\n\n" +
            "Pada 1869 Dmitri Mendeleev di Rusia menyusun unsur-unsur kimia menurut massa atomnya dan menemukan pola berkala. Ia menyisakan ruang kosong untuk unsur yang belum diketahui dan meramalkan sifatnya. Unsur-unsur itu, seperti galium dan germanium, kemudian benar-benar ditemukan.",
          facts: [["Mendel", "Percobaan kacang polong, 1866"], ["Ditemukan ulang", "±1900"], ["Mendeleev", "Tabel berkala, 1869"]],
        },
        {
          title: "Sinar-X dan radioaktivitas",
          when: "1895 sampai 1911",
          year: 1895,
          place: { name: "Wurzburg dan Paris", lon: 9.93, lat: 49.79 },
          text:
            "Pada November 1895 Wilhelm Conrad Röntgen di Würzburg memperhatikan sinar tak kasatmata yang menembus kertas dan daging tetapi tertahan tulang. Ia menamainya sinar-X dan memotret tangan istrinya. Dalam beberapa bulan rumah sakit di seluruh dunia memakainya, dan Röntgen menerima Nobel Fisika pertama pada 1901.\n\n" +
            "Marie Curie, kelahiran Polandia yang bekerja di Paris, bersama Pierre Curie menemukan unsur polonium dan radium pada 1898. Ia memperoleh Nobel Fisika 1903 bersama Pierre dan Henri Becquerel, serta Nobel Kimia 1911. Ia menjadi orang pertama yang meraih dua Nobel di bidang berbeda.",
          facts: [["Sinar-X", "Röntgen, 1895"], ["Unsur baru", "Polonium dan radium, 1898"], ["Nobel Curie", "Fisika 1903, Kimia 1911"]],
        },
        {
          title: "Eijkman di Batavia dan misteri beri-beri",
          when: "1890-an; Nobel 1929",
          year: 1897,
          place: { name: "Batavia (Jakarta)", lon: 106.82, lat: -6.17 },
          text:
            "Penyakit beri-beri melumpuhkan banyak tentara dan pekerja di Hindia Belanda. Christiaan Eijkman, dokter Belanda yang memimpin laboratorium di Batavia, mula-mula menduga penyebabnya kuman. Pada 1890-an ia memperhatikan bahwa ayam-ayam di laboratoriumnya yang diberi nasi putih (beras giling) menderita gejala serupa, sedangkan yang makan beras merah sembuh.\n\n" +
            "Rekannya Gerrit Grijns kemudian menyimpulkan bahwa beras merah mengandung zat penting yang hilang saat digiling. Zat itu kini dikenal sebagai vitamin B1 (tiamin). Eijkman meraih Nobel Kedokteran 1929 bersama Frederick Hopkins, dan lembaganya kini dikenal sebagai Lembaga Eijkman di Jakarta. Para pekerja dan hewan percobaan lokal tak banyak disebut dalam kisah ini.",
          facts: [["Peneliti", "Christiaan Eijkman; Gerrit Grijns"], ["Temuan", "Defisiensi vitamin B1 penyebab beri-beri"], ["Nobel", "1929"]],
          civId: "hindia-belanda",
        },
        {
          title: "Wright bersaudara dan relativitas Einstein",
          when: "1903, 1905, dan 1915",
          year: 1905,
          place: { name: "Kitty Hawk, Amerika Serikat", lon: -75.7, lat: 36.06 },
          text:
            "Pada 17 Desember 1903 Orville dan Wilbur Wright, pembuat sepeda dari Ohio, menerbangkan pesawat bermesin pertama di Kitty Hawk, Carolina Utara. Penerbangan pertama berlangsung 12 detik. Mereka berhasil karena menguji sayap dan kendali secara sistematis di terowongan angin buatan sendiri.\n\n" +
            "Pada 1905 Albert Einstein, pegawai kantor paten di Bern, menerbitkan beberapa makalah: teori relativitas khusus, penjelasan efek fotolistrik, dan gerak Brown. Pada 1915 ia melengkapinya dengan relativitas umum yang menjelaskan gravitasi sebagai lengkungan ruang-waktu. Prediksinya tentang pembelokan cahaya bintang terbukti pada gerhana matahari 1919.",
          facts: [["Penerbangan pertama", "1903, 12 detik"], ["Relativitas khusus", "1905"], ["Relativitas umum", "1915; dibuktikan 1919"]],
          civId: "amerika-serikat",
        },
      ],
    },
    {
      title: "Era atom, angkasa, dan digital",
      intro: "Sejak pertengahan abad ke-20 laju penemuan semakin cepat, dengan manfaat besar dan risiko yang tidak kalah besar.",
      entries: [
        {
          title: "Fisi nuklir",
          when: "1938",
          year: 1938,
          place: { name: "Berlin", lon: 13.4, lat: 52.52 },
          text:
            "Pada Desember 1938 Otto Hahn dan Fritz Strassmann di Berlin menembaki uranium dengan neutron dan menemukan unsur yang lebih ringan seperti barium. Lise Meitner, rekan Hahn yang telah mengungsi ke Swedia karena dianiaya sebagai perempuan keturunan Yahudi, bersama keponakannya Otto Frisch menjelaskan hasil itu sebagai pembelahan inti atom (fisi), yang melepaskan energi sangat besar.\n\n" +
            "Hahn menerima Nobel Kimia 1944 sendirian, sehingga peran Meitner sering diabaikan. Penemuan ini membuka jalan bagi reaktor nuklir sebagai sumber listrik, dan bagi bom atom yang dijatuhkan di Hiroshima dan Nagasaki pada 1945.",
          facts: [["Penemu", "Hahn dan Strassmann"], ["Penjelasan", "Meitner dan Frisch"], ["Dampak", "Listrik nuklir dan senjata atom"]],
        },
        {
          title: "ENIAC dan transistor",
          when: "1945 dan 1947",
          year: 1947,
          place: { name: "Murray Hill, New Jersey", lon: -74.4, lat: 40.68 },
          text:
            "ENIAC, komputer elektronik besar pertama untuk tujuan umum, dirampungkan di Universitas Pennsylvania pada 1945 dan diperkenalkan ke publik pada 1946. Ukurannya memenuhi sebuah ruangan, memakai belasan ribu tabung hampa, dan awalnya dipakai menghitung lintasan peluru artileri. Para pemrogramnya, sebagian besar perempuan, menyetel kabel dan saklar secara manual.\n\n" +
            "Pada Desember 1947 John Bardeen, Walter Brattain, dan William Shockley di Bell Labs memperagakan transistor, pengganti tabung hampa yang kecil, hemat daya, dan tahan lama. Transistor menjadi bahan dasar semua komputer, ponsel, dan alat elektronik modern.",
          facts: [["ENIAC", "1945 (diumumkan 1946)"], ["Transistor", "Bell Labs, 1947"], ["Pemrogram ENIAC", "Sebagian besar perempuan"]],
          civId: "amerika-serikat",
        },
        {
          title: "Heliks ganda DNA hingga CRISPR",
          when: "1953 sampai 2012",
          year: 1953,
          place: { name: "Cambridge, Inggris", lon: 0.12, lat: 52.2 },
          text:
            "Pada 1953 James Watson dan Francis Crick di Cambridge mengusulkan struktur DNA berupa heliks ganda. Mereka memanfaatkan data difraksi sinar-X Rosalind Franklin, termasuk Foto 51, serta pengukuran Maurice Wilkins. Peran Franklin tidak diakui secara layak pada masanya, karena ia wafat pada 1958 sebelum Nobel 1962 diberikan.\n\n" +
            "Proyek Genom Manusia, yang dinyatakan rampung pada 2003, memetakan sekitar tiga miliar pasangan basa DNA kita. Pada 2012 Jennifer Doudna dan Emmanuelle Charpentier memaparkan CRISPR-Cas9 sebagai alat penyunting gen yang presisi, dan keduanya meraih Nobel Kimia 2020. Teknologi ini membuka harapan pengobatan penyakit genetik sekaligus perdebatan etika.",
          facts: [["Heliks ganda", "Watson dan Crick, 1953"], ["Genom Manusia", "Rampung 2003"], ["CRISPR", "Doudna dan Charpentier, 2012"]],
        },
        {
          title: "Sputnik dan pendaratan di Bulan",
          when: "1957 dan 1969",
          year: 1957,
          place: { name: "Baikonur, Kazakhstan", lon: 63.3, lat: 45.96 },
          text:
            "Pada 4 Oktober 1957 Uni Soviet meluncurkan Sputnik 1, satelit buatan pertama, dari Baikonur. Bola logam kecil itu hanya memancarkan bunyi bip, tetapi mengejutkan dunia dan memulai perlombaan antariksa. Pada 1961 Yuri Gagarin menjadi manusia pertama yang mengorbit bumi.\n\n" +
            "Pada 20 Juli 1969 Neil Armstrong dan Buzz Aldrin dari misi Apollo 11 mendarat di Bulan, sementara Michael Collins menunggu di orbit. Siaran televisinya ditonton ratusan juta orang. Program ini juga mendorong banyak kemajuan di bidang material dan komputer.",
          facts: [["Sputnik 1", "4 Oktober 1957"], ["Manusia pertama di orbit", "Yuri Gagarin, 1961"], ["Apollo 11", "20 Juli 1969"]],
          civId: "rusia-soviet",
        },
        {
          title: "Palapa A1: satelit domestik pertama negara berkembang",
          when: "1976",
          year: 1976,
          place: { name: "Jakarta", lon: 106.85, lat: -6.21 },
          text:
            "Negeri kepulauan dengan ribuan pulau sulit dijangkau kabel. Karena itu pada 8 Juli 1976 Indonesia meluncurkan Palapa A1 dari Amerika Serikat, dan menjadi negara berkembang pertama yang mengoperasikan sistem satelit komunikasi domestik. Nama Palapa diambil dari sumpah Gajah Mada untuk mempersatukan Nusantara.\n\n" +
            "Satelit ini menyambungkan telepon dan siaran televisi hingga ke pulau-pulau yang jauh. Gagasannya didorong oleh para insinyur dan pemimpin masa itu, antara lain insinyur telekomunikasi Iskandar Alisjahbana, dengan dukungan pemerintah Presiden Soeharto. Generasi satelit berikutnya terus melayani seluruh nusantara hingga kini.",
          facts: [["Peluncuran", "8 Juli 1976"], ["Makna", "Negara berkembang pertama bersatelit domestik"], ["Nama", "Dari Sumpah Palapa"]],
          civId: "republik-indonesia",
        },
        {
          title: "ARPANET dan World Wide Web",
          when: "1969 sampai 1991",
          year: 1969,
          place: { name: "CERN, Jenewa", lon: 6.05, lat: 46.23 },
          text:
            "Pada Oktober 1969 pesan pertama dikirim antarkomputer lewat ARPANET, jaringan yang dibiayai Departemen Pertahanan Amerika Serikat, dari kampus UCLA ke Stanford. Selama dua dekade berikutnya jaringan-jaringan lain bergabung menjadi internet, memakai aturan bersama yang dikenal sebagai TCP/IP.\n\n" +
            "Pada 1989 Tim Berners-Lee di CERN mengusulkan sistem dokumen yang saling terhubung, dan pada 1991 situs web pertama dibuka untuk umum. Web membuat internet mudah dipakai orang awam, dan dalam waktu tiga dekade mengubah perdagangan, pendidikan, dan hubungan antarmanusia.",
          facts: [["ARPANET", "1969"], ["Usulan web", "1989, Tim Berners-Lee"], ["Situs pertama", "1991"]],
          civId: "amerika-serikat",
        },
        {
          title: "N-250 Gatotkaca terbang",
          when: "1995",
          year: 1995,
          place: { name: "Bandung", lon: 107.61, lat: -6.9 },
          text:
            "Pada 10 Agustus 1995 pesawat N-250 Gatotkaca terbang perdana di Bandung. Pesawat penumpang turboprop rancangan IPTN (kini PT Dirgantara Indonesia) itu dipimpin oleh B. J. Habibie, ahli aerodinamika lulusan Jerman yang kemudian menjadi Presiden. N-250 memakai kendali terbang elektronik (fly-by-wire), teknologi yang saat itu jarang pada pesawat sekelasnya.\n\n" +
            "Program ini terhenti setelah krisis ekonomi 1997-1998 dan kesepakatan dengan IMF, sebelum pesawat memperoleh sertifikasi penuh. Terlepas dari akhirnya, ribuan insinyur Indonesia memperoleh pengalaman merancang pesawat sendiri, dan keahlian itu masih bermanfaat bagi industri dirgantara.",
          facts: [["Terbang perdana", "10 Agustus 1995"], ["Perancang", "IPTN, dipimpin B. J. Habibie"], ["Terhenti", "Pascakrisis 1997-1998"]],
          civId: "republik-indonesia",
        },
        {
          title: "Vaksin mRNA dan kecerdasan buatan generatif",
          when: "2020-an",
          year: 2020,
          place: { name: "Mainz, Jerman", lon: 8.27, lat: 49.99 },
          text:
            "Ketika pandemi COVID-19 melanda pada 2020, para ilmuwan menyusun vaksin dalam hitungan bulan. Vaksin mRNA, yang menyuntikkan instruksi agar sel kita membuat protein lonjakan virus sehingga tubuh belajar mengenalinya, mulai dipakai pada Desember 2020. Dasarnya adalah penelitian puluhan tahun, termasuk karya Katalin Karikó dan Drew Weissman, yang meraih Nobel Kedokteran 2023.\n\n" +
            "Pada awal 2020-an pula model kecerdasan buatan generatif, yang dapat menulis teks dan membuat gambar, menjadi alat yang dipakai banyak orang. Manfaat, keterbatasan, dan risikonya masih dibahas luas. Seperti penemuan sebelumnya, dampaknya akan ditentukan oleh cara kita memakainya.",
          facts: [["Vaksin mRNA", "Dipakai sejak Desember 2020"], ["Nobel", "Karikó dan Weissman, 2023"], ["AI generatif", "Meluas awal 2020-an"]],
          civId: "amerika-serikat",
        },
      ],
    },
  ],
  sources: [
    { title: "Science and Civilisation in China", author: "Joseph Needham", kind: "sekunder" },
    { title: "The Beginnings of Western Science", author: "David C. Lindberg", year: 1992, kind: "sekunder" },
    { title: "Pathfinders: The Golden Age of Arabic Science", author: "Jim Al-Khalili", year: 2010, kind: "sekunder" },
    { title: "The Malay Archipelago", author: "Alfred Russel Wallace", year: 1869, kind: "primer" },
    { title: "Philosophiae Naturalis Principia Mathematica", author: "Isaac Newton", year: 1687, kind: "primer" },
    { title: "A Short History of Nearly Everything", author: "Bill Bryson", year: 2003, kind: "sekunder" },
    { title: "Herbarium Amboinense", author: "G. E. Rumphius", year: 1741, kind: "primer" },
  ],
};
