import type { Topic } from '../../types';

/** Prasejarah manusia: dari leluhur di Afrika, manusia purba Nusantara, hingga ambang tulisan. */
export const topicPrasejarah: Topic = {
  id: 'prasejarah-manusia',
  title: "Kisah Manusia Purba: Dari Afrika ke Nusantara",
  subtitle: "Jutaan tahun sebelum tulisan pertama, nenek moyang kita berjalan, berburu, melukis, dan akhirnya bertani, dan Nusantara menjadi salah satu panggung terpentingnya.",
  intro:
    "Kisah ini bermula jauh sebelum ada kota, raja, atau tulisan. Ketika huruf paku pertama ditoreh orang di Uruk sekitar 3200 SM, kisah manusia sudah berlangsung jutaan tahun. Sebagian besar kisah itu tidak dicatat dengan kata-kata, melainkan dengan tulang, alat batu, jejak kaki, lukisan gua, dan DNA.\n\n" +
    "Nusantara punya tempat istimewa dalam kisah ini. Di Trinil dan Sangiran di Jawa, di Liang Bua di Flores, dan di gua-gua kapur Sulawesi, para peneliti menemukan jejak manusia purba yang sebagian termasuk yang tertua dan paling tak terduga di dunia. Dari sinilah halaman ini mengajak pembaca berjalan, dari lembah-lembah Afrika Timur, menyeberangi benua dan lautan, hingga ambang sejarah bertulis.\n\n" +
    "Angka \"tahun lalu\" di halaman ini adalah perkiraan ilmiah yang terus diperbarui oleh temuan baru, dan sebagian masih diperdebatkan para ahli. Karena itu peristiwa yang lebih tua dari 3500 SM hanya diberi label waktu, tanpa tombol tahun pada peta.",
  relatedCivIds: ['austronesia-nusantara', 'mesopotamia', 'mesir-kuno', 'lembah-indus', 'polinesia', 'aborigin-australia'],
  note:
    "Penanggalan prasejarah berupa perkiraan dan sering direvisi, terutama untuk temuan yang sangat tua. Nama spesies, hubungan kekerabatan antarspesies, dan tafsir atas alat atau lukisan masih diperdebatkan, dan hal-hal itu ditandai di dalam teks. Tahun pada peta hanya diberikan untuk peristiwa sejak 3500 SM.",
  sections: [
    {
      title: "Leluhur di Afrika",
      intro: "Benua Afrika adalah tempat garis keturunan manusia bermula. Di sana nenek moyang kita mulai berjalan tegak, membuat alat, dan menjinakkan api.",
      entries: [
        {
          title: "Lucy: Australopithecus dari Hadar",
          when: "±3,2 juta tahun lalu",
          place: { name: "Hadar, Etiopia", lon: 40.58, lat: 11.1 },
          text:
            "Pada 1974 tim Donald Johanson menemukan sekitar 40 persen kerangka seorang perempuan muda di Hadar, Etiopia. Mereka menamainya Lucy, konon karena lagu The Beatles yang diputar di perkemahan. Ia berusia sekitar 3,2 juta tahun, bertubuh kecil, sekitar satu meter tingginya, dan tergolong Australopithecus afarensis.\n\n" +
            "Bentuk panggul dan tulang kakinya menunjukkan bahwa Lucy sudah berjalan tegak dengan dua kaki, tetapi lengannya yang panjang masih cocok untuk memanjat pohon. Otaknya tidak lebih besar dari otak simpanse. Temuan ini menunjukkan bahwa berjalan tegak muncul lebih dulu daripada otak besar.",
          facts: [["Spesies", "Australopithecus afarensis"], ["Ditemukan", "1974, Donald Johanson dkk."], ["Tinggi", "±1 meter"]],
        },
        {
          title: "Jejak kaki Laetoli",
          when: "±3,66 juta tahun lalu",
          place: { name: "Laetoli, Tanzania", lon: 35.17, lat: -3.23 },
          text:
            "Di Laetoli, Tanzania, sebuah gunung api pernah menyemburkan abu halus yang lalu basah oleh hujan dan mengeras. Beberapa makhluk berjalan melintasinya, dan jejak mereka terawetkan selama lebih dari tiga juta tahun. Mary Leakey dan timnya menggali jejak itu pada akhir 1970-an.\n\n" +
            "Jejak sepanjang puluhan meter itu menunjukkan makhluk berkaki dua yang berjalan tegak, kemungkinan dari spesies yang sama dengan Lucy. Jejak ini merupakan salah satu bukti paling langsung bahwa leluhur kita sudah berjalan dengan dua kaki jauh sebelum membuat alat batu.",
          facts: [["Ditemukan", "Akhir 1970-an, tim Mary Leakey"], ["Jarak jejak", "Puluhan meter"], ["Makna", "Bukti langsung berjalan tegak"]],
        },
        {
          title: "Homo habilis dan alat batu Oldowan",
          when: "±2,6 sampai 2,3 juta tahun lalu",
          place: { name: "Ngarai Olduvai, Tanzania", lon: 35.35, lat: -2.99 },
          text:
            "Alat batu tertua yang sudah dikenal secara luas disebut budaya Oldowan, sesuai nama Ngarai Olduvai di Tanzania. Alatnya sederhana: batu kali yang dipukul-pukul hingga tepinya tajam. Dengan alat itu leluhur kita dapat mengiris daging dan memecah tulang untuk mengambil sumsumnya.\n\n" +
            "Homo habilis, \"manusia terampil\", sering dikaitkan dengan alat ini, tetapi para ahli masih berdebat tentang siapa persisnya pembuat alat tertua. Temuan di Gona, Etiopia, menunjukkan alat batu berusia sekitar 2,6 juta tahun, dan sebagian peneliti menduga pembuatnya bahkan bukan dari genus Homo.",
          facts: [["Budaya", "Oldowan"], ["Bahan", "Batu kali, serpihan tajam"], ["Diperdebatkan", "Siapa pembuat alat tertua"]],
        },
        {
          title: "Homo erectus dan Anak Laki-laki Turkana",
          when: "±1,6 juta tahun lalu",
          place: { name: "Nariokotome, Danau Turkana, Kenya", lon: 36.0, lat: 3.9 },
          text:
            "Pada 1984 tim Kamoya Kimeu dan Richard Leakey menemukan hampir seluruh kerangka seorang remaja di tepi Danau Turkana, Kenya. Remaja yang disebut Anak Laki-laki Turkana itu berusia sekitar 1,6 juta tahun dan wafat pada usia sekitar delapan hingga dua belas tahun. Tubuhnya tinggi dan ramping, dengan proporsi mirip kita.\n\n" +
            "Ia tergolong Homo ergaster atau Homo erectus awal, tergantung penamaan yang dipakai para ahli. Spesies ini membuat kapak genggam yang lebih rapi, berjalan jauh, dan menjadi manusia purba pertama yang keluar dari Afrika. Fosil-fosil Homo erectus dari Dmanisi di Georgia berusia sekitar 1,8 juta tahun, dan tak lama kemudian tiba pula di Asia Timur dan Asia Tenggara.",
          facts: [["Ditemukan", "1984, Kamoya Kimeu dan Richard Leakey"], ["Perkiraan usia wafat", "±8 sampai 12 tahun"], ["Penyebaran", "Afrika, lalu Eurasia"]],
        },
        {
          title: "Menjinakkan api",
          when: "±1 juta tahun lalu (diperdebatkan)",
          place: { name: "Gua Wonderwerk, Afrika Selatan", lon: 23.55, lat: -27.85 },
          text:
            "Kapan manusia mulai menguasai api? Para ahli belum sepakat. Di Gua Wonderwerk, Afrika Selatan, peneliti melaporkan abu tulang dan sisa tumbuhan terbakar berusia sekitar satu juta tahun, yang termasuk bukti pemakaian api terkendali tertua. Temuan lain di Gesher Benot Ya'aqov, Israel, kira-kira 780.000 tahun lalu, juga sering disebut.\n\n" +
            "Api menghangatkan malam, mengusir pemangsa, dan memungkinkan makanan dimasak sehingga lebih mudah dicerna. Sebagian ahli menganggap memasak ikut memungkinkan otak manusia membesar, meskipun gagasan ini pun masih diperdebatkan.",
          facts: [["Lokasi tertua yang diajukan", "Wonderwerk"], ["Status", "Diperdebatkan"], ["Manfaat", "Hangat, aman, makanan matang"]],
        },
      ],
    },
    {
      title: "Manusia purba di Nusantara",
      intro: "Kepulauan Indonesia adalah salah satu kawasan terkaya di dunia untuk fosil manusia purba. Dari Jawa hingga Flores, kisahnya terus ditulis ulang.",
      entries: [
        {
          title: "Eugène Dubois dan Manusia Jawa di Trinil",
          when: "1891",
          year: 1891,
          place: { name: "Trinil, Ngawi, Jawa Timur", lon: 111.36, lat: -7.37 },
          text:
            "Eugène Dubois, dokter militer Belanda, sengaja datang ke Hindia Belanda untuk mencari \"mata rantai yang hilang\" antara kera dan manusia. Pada 1891 timnya menemukan atap tengkorak dan, setahun kemudian, tulang paha di tepi Bengawan Solo di Trinil. Ia menamai makhluk itu Pithecanthropus erectus, kera-manusia yang berjalan tegak.\n\n" +
            "Penemuan itu menggemparkan dunia ilmu pengetahuan. Kini spesimen tersebut digolongkan sebagai Homo erectus dan dikenal sebagai Manusia Jawa. Kerja Dubois dibantu oleh para pekerja paksa dan mandor lokal yang menggali di lapangan, tetapi nama mereka jarang dicatat dalam sejarah ilmu.",
          facts: [["Penemu", "Eugène Dubois"], ["Nama awal", "Pithecanthropus erectus"], ["Nama kini", "Homo erectus"]],
        },
        {
          title: "Sangiran: tambang fosil di Jawa Tengah",
          when: "±1,5 juta sampai ±0,7 juta tahun lalu",
          place: { name: "Sangiran, Sragen, Jawa Tengah", lon: 110.83, lat: -7.45 },
          text:
            "Sangiran adalah kubah tanah di dekat Surakarta yang terkikis sungai sehingga lapisan-lapisan purbanya tersingkap. G. H. R. von Koenigswald menemukan banyak fosil di sana pada 1936 sampai 1941, dibantu penduduk setempat yang ia beri imbalan untuk tiap pecahan tulang yang dibawa. Hingga kini ditemukan sisa lebih dari seratus individu, sebagian besar Homo erectus, dan Sangiran sering disebut menyimpan sekitar separuh fosil Homo erectus dunia.\n\n" +
            "UNESCO menetapkan Sangiran sebagai Situs Warisan Dunia pada 1996. Fosil dari jenis berahang besar yang dahulu dinamai Meganthropus juga ditemukan di sini; para ahli masih berdebat apakah itu spesies tersendiri atau hanya varian Homo erectus.",
          facts: [["Situs Warisan Dunia", "UNESCO, 1996"], ["Individu ditemukan", "Lebih dari 100"], ["Penggali awal", "G. H. R. von Koenigswald, 1936-1941"]],
        },
        {
          title: "Cangkang kerang berukir dari Trinil",
          when: "±500.000 tahun lalu",
          place: { name: "Trinil, Jawa Timur", lon: 111.36, lat: -7.37 },
          text:
            "Koleksi Dubois yang tersimpan di Belanda menyimpan kejutan. Pada 2014 Josephine Joordens dan rekan-rekannya melaporkan bahwa sebuah cangkang kerang air tawar dari Trinil memuat goresan berbentuk zigzag yang tampaknya sengaja dibuat. Kerang itu berusia sekitar 500.000 tahun.\n\n" +
            "Jika tafsir ini benar, goresan itu merupakan karya ukir buatan hominin yang tertua yang dikenal, dibuat oleh Homo erectus, bukan Homo sapiens. Makna goresan itu tidak diketahui. Kita hanya bisa mengatakan bahwa leluhur jauh kita di tepi Bengawan Solo ternyata sanggup membuat tanda dengan sengaja.",
          facts: [["Peneliti", "Joordens dkk., 2014"], ["Pembuat", "Homo erectus"], ["Makna", "Tidak diketahui"]],
        },
        {
          title: "Manusia Ngandong dan Homo erectus terakhir",
          when: "±117.000 sampai ±108.000 tahun lalu",
          place: { name: "Ngandong, Blora, Jawa Tengah", lon: 111.5, lat: -7.2 },
          text:
            "Di tepi Bengawan Solo di Ngandong, Blora, ditemukan belasan tengkorak pada 1931 sampai 1933. Mereka dikenal sebagai Manusia Solo, Homo erectus soloensis. Selama puluhan tahun penanggalannya simpang siur, sehingga ada yang mengira mereka hidup bersama manusia modern.\n\n" +
            "Pada 2020 tim Yan Rizal menerbitkan penanggalan baru di jurnal Nature yang menempatkan mereka pada sekitar 117.000 sampai 108.000 tahun lalu. Dengan angka ini, Manusia Solo dianggap sebagai kelompok Homo erectus terakhir yang diketahui, hidup di Jawa jauh setelah kerabatnya punah di tempat lain.",
          facts: [["Penanggalan baru", "Rizal dkk., Nature, 2020"], ["Ditemukan", "1931-1933"], ["Makna", "Homo erectus yang paling akhir"]],
        },
        {
          title: "Mata Menge: leluhur si kecil dari Flores",
          when: "±700.000 tahun lalu",
          place: { name: "Mata Menge, Flores, NTT", lon: 120.9, lat: -8.65 },
          text:
            "Di Cekungan So'a, Flores, tim peneliti Indonesia dan Belanda menemukan gigi dan potongan rahang berusia sekitar 700.000 tahun di Mata Menge. Ukurannya sangat kecil, sehingga mereka menduga penghuninya sudah bertubuh mungil, mungkin sebagai nenek moyang manusia Liang Bua.\n\n" +
            "Dengan alat batu yang menyertainya, temuan ini menunjukkan bahwa hominin sudah mencapai Flores, pulau yang tidak pernah tersambung ke daratan Asia, jauh lebih dini dari yang dibayangkan. Cara mereka menyeberangi laut, entah terdampar di rakit alami atau dengan cara lain, masih menjadi teka-teki.",
          facts: [["Usia", "±700.000 tahun"], ["Peneliti", "Tim Indonesia-Belanda, 2016"], ["Teka-teki", "Cara menyeberangi laut"]],
        },
        {
          title: "Homo floresiensis, si \"Hobbit\" dari Liang Bua",
          when: "ditemukan 2003; hidup ±100.000 sampai ±50.000 tahun lalu",
          year: 2003,
          place: { name: "Liang Bua, Flores, NTT", lon: 120.44, lat: -8.53 },
          text:
            "Pada 2003 tim gabungan Indonesia dan Australia yang dipimpin Mike Morwood dan Thomas Sutikna menggali Liang Bua di Flores dan menemukan kerangka perempuan dewasa setinggi sekitar satu meter, yang disebut LB1. Hasilnya diumumkan pada 2004 sebagai spesies baru, Homo floresiensis, dan segera dijuluki \"Hobbit\".\n\n" +
            "Penanggalan ulang pada 2016 (Sutikna dkk., Nature) menempatkan kerangka itu pada sekitar 100.000 sampai 60.000 tahun lalu, dan alat batunya sampai sekitar 50.000 tahun. Sebagian ahli menyebutnya contoh pengerdilan pulau, sebagian lain mengajukan penyakit pada individu tertentu. Perdebatan itu belum sepenuhnya selesai.",
          facts: [["Tinggi", "±1 meter"], ["Penemu", "Tim Morwood dan Sutikna, 2003"], ["Penanggalan ulang", "Sutikna dkk., Nature, 2016"]],
        },
        {
          title: "Homo luzonensis dari Gua Callao",
          when: "dilaporkan 2019; ±50.000 sampai 67.000 tahun lalu",
          year: 2019,
          place: { name: "Gua Callao, Luzon, Filipina", lon: 121.8, lat: 17.7 },
          text:
            "Armand Mijares dan rekan-rekannya melaporkan pada 2019 sejumlah gigi, tulang jari, dan tulang paha dari Gua Callao di pulau Luzon, Filipina. Tulang-tulang itu menunjukkan campuran ciri yang tidak lazim: gigi geraham kecil mirip manusia modern, tetapi tulang jari kaki melengkung seperti hominin yang lebih tua.\n\n" +
            "Mereka menamainya Homo luzonensis. Bersama Homo floresiensis, temuan ini memperlihatkan bahwa Asia Tenggara kepulauan menyimpan kisah evolusi manusia yang jauh lebih beragam daripada gambaran lama. Hubungan kekerabatannya dengan spesies lain belum jelas.",
          facts: [["Peneliti", "Armand Mijares dkk., 2019"], ["Usia", "±50.000-67.000 tahun"], ["Status", "Hubungan kekerabatan belum jelas"]],
        },
      ],
    },
    {
      title: "Homo sapiens menjelajah dunia",
      intro: "Manusia modern muncul di Afrika, bertemu kerabat yang lebih tua, lalu menyebar ke segala benua. Di Nusantara mereka meninggalkan lukisan tertua di dunia.",
      entries: [
        {
          title: "Jebel Irhoud: Homo sapiens paling awal",
          when: "±300.000 tahun lalu",
          place: { name: "Jebel Irhoud, Maroko", lon: -8.87, lat: 31.86 },
          text:
            "Tambang barit di Jebel Irhoud, Maroko, menyingkap tengkorak dan alat batu yang pada 2017 dinyatakan berusia sekitar 300.000 tahun. Wajahnya sudah mirip manusia modern, meski bagian belakang tengkoraknya masih memanjang seperti leluhur yang lebih tua.\n\n" +
            "Temuan ini mendorong mundur perkiraan kemunculan Homo sapiens, dan menunjukkan bahwa asal usul kita tidak terpusat di satu lembah di Afrika Timur, melainkan tersebar di seluruh benua itu. Para ahli masih berdebat apakah fosil ini sudah benar-benar Homo sapiens atau kerabat yang sangat dekat.",
          facts: [["Usia", "±300.000 tahun"], ["Diumumkan", "2017"], ["Makna", "Asal usul kita tersebar di Afrika"]],
        },
        {
          title: "Neanderthal dan Denisovan: kerabat yang menyatu",
          when: "±50.000 sampai 40.000 tahun lalu",
          place: { name: "Gua Denisova, Pegunungan Altai", lon: 84.68, lat: 51.4 },
          text:
            "Ketika Homo sapiens mencapai Eurasia, mereka bertemu kerabat yang sudah lama tinggal di sana: Neanderthal di Eropa dan Asia Barat, serta Denisovan, yang dikenal pertama kali dari sebuah tulang jari di Gua Denisova, Siberia. Analisis DNA purba oleh Svante Pääbo dan timnya membuktikan bahwa kelompok-kelompok itu pernah kawin silang.\n\n" +
            "Orang-orang di luar Afrika membawa sekitar satu hingga dua persen DNA Neanderthal. Penduduk Papua dan Melanesia membawa DNA Denisovan yang jauh lebih banyak, sekitar empat sampai enam persen menurut sebagian perkiraan. Jadi leluhur sebagian orang Nusantara bagian timur ikut berbagi gen dengan manusia purba yang kini sudah punah.",
          facts: [["Neanderthal pada non-Afrika", "±1-2%"], ["Denisovan pada orang Papua", "±4-6% (perkiraan)"], ["Peneliti DNA purba", "Svante Pääbo dkk."]],
        },
        {
          title: "Keluar dari Afrika",
          when: "±70.000 sampai 60.000 tahun lalu",
          place: { name: "Jalur Laut Merah dan Jazirah Arab", lon: 43.5, lat: 13.0 },
          text:
            "Bukti genetik menunjukkan bahwa nenek moyang sebagian besar penduduk di luar Afrika berasal dari kelompok kecil yang meninggalkan benua itu sekitar 70.000 sampai 60.000 tahun lalu. Jalannya mungkin melintasi Laut Merah bagian selatan atau Sinai, lalu menyusuri pesisir Asia Selatan.\n\n" +
            "Ada pula bukti perjalanan lebih awal, misalnya fosil Homo sapiens di Gua Misliya, Israel, berusia sekitar 180.000 tahun. Gelombang-gelombang awal itu tampaknya tidak meninggalkan banyak keturunan. Gambaran terbaru adalah kisah beberapa gelombang, bukan satu perjalanan tunggal.",
          facts: [["Perkiraan genetik", "±70.000-60.000 tahun lalu"], ["Bukti lebih awal", "Misliya, ±180.000 tahun"], ["Gambaran kini", "Beberapa gelombang"]],
        },
        {
          title: "Menyeberang ke Sahul: Madjedbebe",
          when: "≥50.000 tahun lalu",
          place: { name: "Madjedbebe, Arnhem Land, Australia", lon: 132.9, lat: -12.5 },
          text:
            "Garis Wallace memisahkan flora dan fauna Asia dari Australia, dan bahkan pada masa laut surut kedua sisinya tidak pernah tersambung. Manusia yang tiba di Sahul, benua gabungan Australia dan Papua, harus menyeberangi laut dengan alat apung yang belum kita ketahui bentuknya.\n\n" +
            "Situs Madjedbebe di Arnhem Land menghasilkan alat batu, cat oker, dan batu giling yang pada 2017 dinyatakan berusia sekitar 65.000 tahun, meski angka ini diperdebatkan. Banyak ahli lebih nyaman dengan perkiraan minimal sekitar 50.000 tahun. Leluhur bangsa Aborigin dan Papua dengan demikian termasuk pelaut tertua di dunia.",
          facts: [["Usia diajukan", "±65.000 (diperdebatkan); ≥50.000 diterima luas"], ["Rintangan", "Garis Wallace, laut dalam"], ["Keturunan", "Bangsa Aborigin dan Papua"]],
          civId: "aborigin-australia",
        },
        {
          title: "Babi rusa dan adegan berburu di gua Sulawesi",
          when: "±45.500 dan ±44.000 tahun lalu",
          place: { name: "Maros-Pangkep, Sulawesi Selatan", lon: 119.7, lat: -4.9 },
          text:
            "Di perbukitan kapur Maros-Pangkep, Sulawesi Selatan, para pelukis zaman es meninggalkan gambar di dinding gua. Pada 2021 Adam Brumm dan rekan-rekannya melaporkan lukisan babi rusa di Leang Tedongnge yang berusia sekurangnya 45.500 tahun, yaitu lukisan figuratif tertua yang diketahui pada saat itu.\n\n" +
            "Pada 2019 mereka juga melaporkan adegan berburu di Leang Bulu' Sipong 4: sosok setengah manusia dan setengah hewan yang menombak atau menjerat babi dan anoa. Usianya sekitar 44.000 tahun. Penanggalan dilakukan lewat lapisan mineral kalsit yang menutupi lukisan itu, jadi usia sebenarnya paling tidak sama atau lebih tua.",
          facts: [["Leang Tedongnge", "≥45.500 tahun (Brumm dkk., Science Advances, 2021)"], ["Leang Bulu' Sipong 4", "±44.000 tahun"], ["Metode", "Penanggalan deret uranium pada kalsit"]],
        },
        {
          title: "Leang Karampuang: lukisan bercerita tertua",
          when: "±51.200 tahun lalu",
          place: { name: "Leang Karampuang, Maros, Sulawesi Selatan", lon: 119.75, lat: -4.95 },
          text:
            "Pada 2024 Maxime Aubert, Adhi Agus Oktaviana, dan rekan-rekannya melaporkan di jurnal Nature bahwa lukisan di Leang Karampuang, Maros, berusia sekurangnya 51.200 tahun. Lukisan itu menggambarkan tiga sosok manusia yang tampak berinteraksi dengan seekor babi.\n\n" +
            "Banyak ahli menilainya sebagai lukisan figuratif tertua yang diketahui di dunia, dan mungkin salah satu karya tertua yang menceritakan sebuah kisah. Temuan ini menempatkan Sulawesi sejajar dengan Eropa dalam sejarah seni purba, bahkan lebih tua.",
          facts: [["Usia", "≥51.200 tahun"], ["Laporan", "Oktaviana dkk., Nature, 2024"], ["Isi", "Tiga sosok manusia dan seekor babi"]],
        },
        {
          title: "Gua Chauvet dan Lascaux",
          when: "±36.000 dan ±17.000 tahun lalu",
          place: { name: "Gua Chauvet, Prancis", lon: 4.4, lat: 44.39 },
          text:
            "Di Eropa, gua-gua Prancis menyimpan lukisan yang amat memukau. Gua Chauvet di lembah Ardèche, ditemukan 1994, penuh gambar singa, badak, dan beruang yang berusia sekitar 36.000 tahun. Gua Lascaux di Dordogne, ditemukan 1940, berusia sekitar 17.000 tahun dan terkenal dengan lukisan bison serta kuda.\n\n" +
            "Lukisan-lukisan ini dahulu dianggap awal mula seni. Penemuan di Sulawesi membuktikan bahwa tradisi melukis sudah berlangsung di tempat lain jauh sebelumnya, sehingga seni agaknya tumbuh sebagai kemampuan manusia di banyak tempat.",
          facts: [["Chauvet", "±36.000 tahun, ditemukan 1994"], ["Lascaux", "±17.000 tahun, ditemukan 1940"], ["Motif", "Hewan buruan dan pemangsa"]],
        },
        {
          title: "Ke Amerika lewat Beringia",
          when: "±16.000 tahun lalu atau lebih awal (diperdebatkan)",
          place: { name: "White Sands, New Mexico", lon: -106.3, lat: 32.8 },
          text:
            "Pada masa zaman es, laut yang turun membuka daratan antara Siberia dan Alaska yang disebut Beringia. Para pemburu dan pencari makanan melintasinya dan menyebar ke dua benua Amerika, mungkin juga menyusuri pantai dengan perahu. Banyak ahli menempatkan kedatangan itu sekitar 16.000 tahun lalu atau lebih awal.\n\n" +
            "Pada 2021 jejak kaki manusia di White Sands, New Mexico, dilaporkan berusia sekitar 23.000 tahun. Sebagian ahli meragukan penanggalannya, dan perdebatan itu berlanjut sampai kini. Kisah pemukiman Amerika belum final.",
          facts: [["Jalur", "Beringia dan/atau pesisir Pasifik"], ["White Sands", "±23.000 tahun (diperdebatkan)"], ["Perkiraan umum", "≥16.000 tahun lalu"]],
        },
        {
          title: "Manusia Wajak: Homo sapiens di Jawa",
          when: "±37.000 sampai 28.000 tahun lalu",
          place: { name: "Wajak, Tulungagung, Jawa Timur", lon: 111.9, lat: -8.1 },
          text:
            "Pada 1888 pekerja tambang marmer di Wajak, dekat Tulungagung, menemukan tengkorak yang kemudian dibawa ke Dubois. Ia mengenalinya sebagai manusia modern dan menamainya Homo wadjakensis. Kini fosil itu dianggap Homo sapiens awal yang hidup di Jawa pada akhir zaman es.\n\n" +
            "Mereka adalah pemburu-pengumpul di hutan dan pesisir. Para ahli masih berdebat soal usia tepat dan hubungan mereka dengan penduduk Nusantara sekarang. Wajak menjadi salah satu penghubung antara Homo erectus Jawa dan manusia modern.",
          facts: [["Ditemukan", "1888"], ["Spesies", "Homo sapiens awal"], ["Hidup", "Pemburu-pengumpul"]],
        },
        {
          title: "Gua Harimau dan penguburan Sumatra Selatan",
          when: "±3.000 tahun lalu",
          place: { name: "Gua Harimau, Padang Bindu, Sumatra Selatan", lon: 104.1, lat: -4.05 },
          text:
            "Di perbukitan Padang Bindu, Ogan Komering Ulu, Gua Harimau menyimpan puluhan kubur manusia. Penggalian Pusat Arkeologi Nasional bersama peneliti Prancis dan Australia di sana, sejak 2009, menemukan kerangka dalam posisi terlipat atau berbaring bersama bekal kubur seperti gerabah dan perhiasan.\n\n" +
            "Penghuni gua itu hidup sekitar 3.000 tahun lalu dan menunjukkan perpaduan dua leluhur, yaitu pemburu-pengumpul lama dan para penutur Austronesia yang datang kemudian. Gua ini juga memiliki lukisan dinding. Ia menjadi contoh bahwa kisah prasejarah Nusantara terus berlanjut hingga masa penuh pertukaran budaya.",
          facts: [["Penggalian", "Sejak 2009"], ["Usia kubur", "±3.000 tahun"], ["Penghuni", "Campuran penduduk lama dan Austronesia"]],
        },
      ],
    },
    {
      title: "Revolusi Neolitik dan desa pertama",
      intro: "Setelah ribuan generasi berburu dan meramu, manusia di banyak penjuru dunia mulai menanam dan menetap. Itu bukan satu revolusi di satu tempat, melainkan banyak awal yang berdiri sendiri.",
      entries: [
        {
          title: "Göbekli Tepe: kuil sebelum pertanian",
          when: "±9600 SM",
          place: { name: "Göbekli Tepe, Turki", lon: 38.92, lat: 37.22 },
          text:
            "Di sebuah bukit di tenggara Turki, Klaus Schmidt menggali sejak 1990-an lingkaran tiang batu berbentuk huruf T yang dipahat dengan gambar rubah, ular, dan burung. Tiang tertingginya sekitar lima meter. Bangunan ini berdiri sekitar 9600 SM, ribuan tahun sebelum pertanian mapan.\n\n" +
            "Penemuan ini mengejutkan karena mengisyaratkan bahwa para pemburu-pengumpul sudah mampu bekerja sama dalam proyek besar. Fungsi persis bangunan itu masih diperdebatkan, tetapi banyak ahli menganggapnya tempat berkumpul dan upacara. Tafsir bahwa kuil mendahului pertanian terus diuji dengan temuan baru.",
          facts: [["Penggali", "Klaus Schmidt, sejak 1990-an"], ["Tinggi tiang", "Hingga ±5 meter"], ["Fungsi", "Diperdebatkan; kemungkinan upacara"]],
        },
        {
          title: "Bulan Sabit Subur: gandum dan jelai",
          when: "±9500 SM",
          place: { name: "Lembah Efrat dan Levant", lon: 38.0, lat: 35.0 },
          text:
            "Di kawasan melengkung dari lembah Efrat hingga Levant yang kini disebut Bulan Sabit Subur, orang mulai membudidayakan gandum emmer, gandum einkorn, jelai, kacang lentil, dan kacang polong sekitar 9500 SM. Kambing, domba, dan kemudian sapi dan babi dijinakkan tidak lama sesudahnya.\n\n" +
            "Perubahan ini berlangsung berabad-abad, bukan satu malam. Bertani memberi panen yang bisa disimpan, tetapi juga pekerjaan yang lebih berat, penyakit akibat padat tinggal, dan ketimpangan. Dari ladang-ladang inilah kelak tumbuh kota-kota Mesopotamia.",
          facts: [["Tanaman", "Gandum emmer dan einkorn, jelai, lentil"], ["Hewan", "Kambing, domba, sapi, babi"], ["Kelanjutan", "Kota-kota Mesopotamia"]],
          civId: "mesopotamia",
        },
        {
          title: "Jericho dan tembok tertua",
          when: "±8000 SM",
          place: { name: "Tell es-Sultan, Jericho", lon: 35.44, lat: 31.87 },
          text:
            "Di Jericho, di lembah Yordan, para arkeolog menemukan menara batu bundar dan tembok yang berasal dari sekitar 8000 SM. Kathleen Kenyon menggali situs ini pada 1950-an. Penghuninya hidup dari bertani dan memelihara hewan, dan sebagian peneliti menyebut tempat ini salah satu permukiman tertua yang terus dihuni.\n\n" +
            "Fungsi tembok dan menara masih diperdebatkan, entah untuk pertahanan, menahan banjir lumpur, atau sebagai lambang kebersamaan. Yang jelas, orang sudah bersedia menanggung kerja besar bersama demi menjaga tempat tinggal.",
          facts: [["Penggali", "Kathleen Kenyon, 1950-an"], ["Struktur", "Menara batu dan tembok"], ["Fungsi", "Diperdebatkan"]],
        },
        {
          title: "Çatalhöyük: kota tanpa jalan",
          when: "±7400 SM",
          place: { name: "Çatalhöyük, Turki", lon: 32.83, lat: 37.67 },
          text:
            "Di dataran Konya, Turki, sekitar 7400 SM berdiri sebuah permukiman yang rumah-rumahnya dibangun berdempetan tanpa gang di antaranya. Penghuninya naik dan turun lewat tangga di atap. Di dalam rumah ada lantai yang diplester dan dinding yang dilukis, dan orang menguburkan kerabatnya di bawah lantai.\n\n" +
            "Penggalian oleh James Mellaart pada 1960-an dan Ian Hodder kemudian menunjukkan masyarakat petani yang relatif setara, dengan beberapa ribu penghuni. Para ahli masih berdebat tentang seberapa kuat pembedaan sosial dan makna patung-patung perempuan yang ditemukan di sana.",
          facts: [["Penggali", "James Mellaart; Ian Hodder"], ["Ciri", "Rumah berdempetan, masuk dari atap"], ["Penduduk", "Beberapa ribu (perkiraan)"]],
        },
        {
          title: "Padi di lembah Yangtze",
          when: "±7000 SM",
          place: { name: "Shangshan dan Hemudu, Zhejiang", lon: 121.3, lat: 30.0 },
          text:
            "Padi mulai dibudidayakan di lembah Sungai Yangtze sekitar 7000 SM, menurut sisa-sisa di situs Shangshan dan Hemudu di Zhejiang. Prosesnya bertahap: butir padi liar berangsur berubah menjadi padi yang tidak rontok sendiri saat masak.\n\n" +
            "Tanaman ini kelak menjadi makanan pokok sebagian besar Asia, termasuk Nusantara. Penutur bahasa Austronesia kemudian membawa pengetahuan menanam padi dari pesisir Tiongkok selatan dan Taiwan ke pulau-pulau di selatan.",
          facts: [["Situs", "Shangshan dan Hemudu"], ["Tanaman", "Padi"], ["Penyebaran", "Asia Timur dan Tenggara"]],
        },
        {
          title: "Jagung dari teosinte di Meksiko",
          when: "±7000 SM",
          place: { name: "Lembah Sungai Balsas, Meksiko", lon: -99.5, lat: 18.0 },
          text:
            "Jagung adalah buah ketekunan petani-petani purba di Meksiko selatan. Leluhurnya adalah rumput liar teosinte dengan bulir kecil keras. Penelitian genetik menunjuk lembah Sungai Balsas sebagai tempat budidaya awal, sekitar 7000 SM.\n\n" +
            "Lewat seleksi turun-temurun, tongkolnya membesar dan bijinya lunak. Jagung kemudian menjadi tulang punggung peradaban Mesoamerika dan Andes, dan sesudah 1492 menyebar ke seluruh dunia, termasuk Nusantara.",
          facts: [["Leluhur", "Teosinte"], ["Tempat awal", "Lembah Balsas"], ["Peran", "Makanan pokok Mesoamerika"]],
          civId: "mesoamerika-andes",
        },
        {
          title: "Kuk Swamp: pertanian mandiri di Papua Nugini",
          when: "±7000 sampai 5000 SM",
          place: { name: "Kuk Swamp, Lembah Wahgi, Papua Nugini", lon: 144.5, lat: -5.8 },
          text:
            "Di dataran tinggi Papua Nugini, rawa Kuk menyimpan parit-parit drainase tertua yang menunjukkan penanaman umbi-umbian dan pisang. Jack Golson dan rekan-rekannya menggali situs itu sejak 1970-an, dan UNESCO menetapkannya sebagai Situs Warisan Dunia pada 2008.\n\n" +
            "Penanggalan menunjukkan bahwa orang di sana mengolah tanah dan menanam talas dan pisang sekitar 7000 sampai 5000 SM, dan mungkin lebih dini. Para ahli menganggapnya salah satu pusat pertanian yang tumbuh secara mandiri, terpisah dari Asia dan Timur Tengah.",
          facts: [["Tanaman", "Talas, pisang (diperkirakan)"], ["Warisan Dunia", "UNESCO, 2008"], ["Makna", "Pertanian mandiri"]],
        },
      ],
    },
    {
      title: "Menjelang sejarah: logam, batu besar, dan tulisan",
      intro: "Menjelang akhir prasejarah, logam, roda, dan bangunan batu besar menandai masyarakat yang makin rumit, hingga tulisan pertama menutup tirai.",
      entries: [
        {
          title: "Ötzi, Manusia Es dan kapak tembaga",
          when: "±3300 SM",
          year: -3300,
          place: { name: "Pegunungan Ötztal, Alpen", lon: 10.85, lat: 46.78 },
          text:
            "Pada 1991 pendaki menemukan jenazah yang terawetkan alami di gletser Alpen, di perbatasan Italia dan Austria. Ia hidup sekitar 3300 SM, dan dikenal sebagai Ötzi. Ia membawa kapak bermata tembaga, busur, dan anak panah, bukti bahwa logam sudah dipakai di Eropa pada masa itu.\n\n" +
            "Penelitian menunjukkan bahwa ia terkena anak panah di bahu dan kemungkinan tewas dalam konflik. Tubuhnya memuat tato, sisa kutu, dan isi perut yang memberi gambaran langka tentang hidup seorang laki-laki di Zaman Tembaga.",
          facts: [["Ditemukan", "1991"], ["Perkakas", "Kapak tembaga, busur"], ["Penyebab wafat", "Luka panah (kemungkinan)"]],
        },
        {
          title: "Roda dan Zaman Perunggu",
          when: "±3500 SM",
          year: -3500,
          place: { name: "Rawa Ljubljana, Slovenia", lon: 14.4, lat: 45.97 },
          text:
            "Bukti roda tertua berasal dari sekitar 3500 SM, ketika roda dipakai pada kereta di berbagai tempat di Eropa dan Asia Barat. Roda kayu berporos dari rawa Ljubljana di Slovenia berusia sekitar 3150 SM, sementara gambar kereta ditemukan pada tablet Mesopotamia. Tempat penemuan pertamanya masih diperdebatkan.\n\n" +
            "Tak lama kemudian, pencampuran tembaga dengan timah menghasilkan perunggu yang lebih keras. Zaman Perunggu membawa senjata, alat pertanian, dan jaringan perdagangan logam yang menghubungkan wilayah jauh.",
          facts: [["Roda tertua", "±3500 SM (kisaran)"], ["Perunggu", "Tembaga + timah"], ["Status tempat asal", "Diperdebatkan"]],
        },
        {
          title: "Stonehenge",
          when: "±3000 sampai 2000 SM",
          year: -2500,
          place: { name: "Stonehenge, Wiltshire, Inggris", lon: -1.83, lat: 51.18 },
          text:
            "Di dataran Salisbury, Inggris, orang membangun lingkaran batu besar secara bertahap sekitar 3000 sampai 2000 SM. Batu besarnya (sarsen) diangkut dari jarak sekitar 25 kilometer, sedangkan batu biru yang lebih kecil dibawa dari Pegunungan Preseli di Wales, lebih dari 200 kilometer jauhnya.\n\n" +
            "Fungsinya masih diperdebatkan. Penyelarasan dengan matahari terbit di titik balik musim panas dan terbenam di titik balik musim dingin menunjukkan peran upacara dan kalender, dan di sekitarnya terdapat pekuburan.",
          facts: [["Batu sarsen", "Dari ±25 km"], ["Batu biru", "Dari Preseli, Wales"], ["Fungsi", "Upacara dan kalender (diperdebatkan)"]],
        },
        {
          title: "Austronesia berlayar keluar dari Taiwan",
          when: "±3000 sampai 2500 SM",
          year: -2500,
          place: { name: "Taiwan", lon: 121.0, lat: 24.0 },
          text:
            "Bahasa Austronesia, rumpun yang mencakup bahasa Melayu, Jawa, Tagalog, Malagasi, hingga Maori, tampaknya berakar di Taiwan. Sekitar 3000 sampai 2500 SM para petani dan pelaut mulai berlayar ke selatan menuju Filipina, lalu ke Kalimantan, Sulawesi, dan seluruh Nusantara.\n\n" +
            "Bersama mereka ikut padi, millet, babi, anjing, dan keahlian membuat perahu bercadik. Gelombang berikutnya mencapai Mikronesia, Polinesia, bahkan Madagaskar. Para ahli masih membahas rinci jalur dan waktu, tetapi gambaran umum ini didukung bukti bahasa, arkeologi, dan genetika.",
          facts: [["Asal", "Taiwan"], ["Pembawa", "Padi, millet, babi, perahu bercadik"], ["Jangkauan", "Madagaskar hingga Polinesia"]],
          civId: "austronesia-nusantara",
        },
        {
          title: "Megalit Pasemah dan Lembah Bada",
          when: "bervariasi; perkiraan ribuan tahun lalu",
          place: { name: "Dataran tinggi Pasemah, Sumatra Selatan", lon: 103.2, lat: -4.0 },
          text:
            "Di dataran tinggi Pasemah, Sumatra Selatan, tersebar patung batu besar yang menggambarkan manusia, gajah, dan kerbau. Di Lembah Bada, Sulawesi Tengah, ada arca-arca batu raksasa, termasuk sosok yang dijuluki Palindo. Orang setempat hingga kini mengaitkannya dengan leluhur.\n\n" +
            "Penanggalan megalit Nusantara masih dipertanyakan. Sebagian peneliti menaksirnya dari beberapa ribu tahun lalu hingga awal masehi. Tradisi mendirikan batu besar untuk leluhur ada di Nias, Sumba, Toraja, dan sebagian masih hidup.",
          facts: [["Pasemah", "Arca manusia dan hewan"], ["Lembah Bada", "Arca batu besar"], ["Penanggalan", "Masih diperdebatkan"]],
        },
        {
          title: "Nekara Dongson dan Moko Alor",
          when: "±700 SM sampai abad ke-1 M",
          year: -500,
          place: { name: "Dongson, Vietnam utara", lon: 105.8, lat: 19.8 },
          text:
            "Budaya Dongson di Vietnam utara terkenal dengan nekara perunggu, gendang besar berhiaskan perahu, burung bangau, dan penari bertopi bulu. Perdagangan membawa nekara semacam itu ke Sumatra, Jawa, Bali, dan pulau-pulau Nusa Tenggara.\n\n" +
            "Di Alor, Nusa Tenggara Timur, benda serupa yang disebut moko tidak hanya menjadi alat musik tetapi juga mas kawin dan lambang kekayaan. Nekara dan moko menunjukkan bahwa Nusantara sudah terhubung dengan jaringan perdagangan Asia Tenggara daratan jauh sebelum agama-agama besar tiba.",
          facts: [["Budaya", "Dongson, Vietnam utara"], ["Bahan", "Perunggu"], ["Moko Alor", "Mas kawin dan penanda kekayaan"]],
        },
        {
          title: "Tulisan paku di Uruk: pintu sejarah",
          when: "±3200 SM",
          year: -3200,
          place: { name: "Uruk, Mesopotamia", lon: 45.64, lat: 31.32 },
          text:
            "Di kota Uruk, Mesopotamia selatan, para juru tulis menggores tanda pada lempung basah sekitar 3200 SM. Awalnya tanda-tanda itu hanya mencatat jumlah jelai, domba, dan ransum para pekerja kuil. Seiring waktu tanda itu berkembang menjadi tulisan paku yang bisa merekam bahasa.\n\n" +
            "Dengan tulisan, hal-hal yang dahulu hanya hidup di ingatan dapat ditinggalkan untuk generasi berikutnya. Karena itulah para ahli menandai peralihan dari prasejarah ke sejarah di sini, walau di banyak tempat lain, termasuk Nusantara, masa prasejarah berlangsung jauh lebih lama.",
          facts: [["Tempat", "Uruk, Mesopotamia selatan"], ["Isi awal", "Catatan jelai, domba, ransum"], ["Makna", "Awal sejarah bertulis"]],
          civId: "mesopotamia",
        },
      ],
    },
  ],
  sources: [
    { title: "Sangiran: Menjawab Misteri Manusia Purba", author: "Harry Widianto", kind: "sekunder" },
    { title: "Homo floresiensis: temuan dan penanggalan ulang", author: "Thomas Sutikna dkk., Nature", year: 2016, kind: "sekunder" },
    { title: "Pleistocene cave art from Sulawesi (Leang Tedongnge)", author: "Adam Brumm dkk., Science Advances", year: 2021, kind: "sekunder" },
    { title: "Oldest figurative cave art, Leang Karampuang", author: "Adhi Agus Oktaviana dkk., Nature", year: 2024, kind: "sekunder" },
    { title: "Homo erectus at Ngandong, penanggalan baru", author: "Yan Rizal dkk., Nature", year: 2020, kind: "sekunder" },
    { title: "The Human Past", author: "Chris Scarre (ed.)", kind: "sekunder" },
    { title: "Prasejarah Indonesia", author: "R. P. Soejono (ed.)", kind: "sekunder" },
    { title: "Homo erectus at Trinil on Java used shells for tool production and engraving", author: "Josephine Joordens dkk., Nature", year: 2014, kind: "sekunder" },
  ],
};
