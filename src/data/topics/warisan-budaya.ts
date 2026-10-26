import type { Topic } from '../../types';

/** Warisan budaya Indonesia: seni, kriya, musik, sastra, arsitektur, kuliner, bela diri, dan pelayaran. */
export const topicWarisanBudaya: Topic = {
  id: 'warisan-budaya',
  title: 'Warisan Budaya Indonesia',
  subtitle: 'Dari wayang hingga pinisi: tradisi yang diwariskan lintas zaman di Nusantara.',
  intro:
    "Kebudayaan Indonesia seperti kain yang ditenun berlapis-lapis. Lapisan tertua dibawa penutur bahasa Austronesia: tradisi menenun, membuat perahu bercadik, memuliakan leluhur, dan bersawah. Di atasnya datang pengaruh Hindu-Buddha dari India yang meninggalkan candi, aksara, dan kisah Ramayana serta Mahabharata. Kemudian datang Islam, membawa seni kaligrafi, hikayat, dan masjid beratap tumpang. Pedagang Tionghoa, lalu bangsa Eropa, menambahkan bahan, rasa, dan gaya baru. Hasilnya bukan tumpukan, melainkan campuran: wayang menceritakan epos India dengan tokoh punakawan asli Jawa, dan batik memuat motif dari berbagai penjuru dunia.\n\n" +
    "Warisan itu terbagi dua jenis. Ada warisan benda yang bisa dilihat dan dikunjungi, seperti Borobudur dan Prambanan. Ada pula warisan takbenda, yaitu tarian, musik, resep, keterampilan tangan, dan sastra lisan yang hanya hidup selama ada orang yang melakukannya. Candi bisa bertahan seribu tahun di bawah abu vulkanik, tetapi sebuah tarian bisa hilang dalam satu generasi bila tidak ada yang mengajarkannya.\n\n" +
    "Halaman ini menelusuri asal-usul tiap tradisi dan siapa yang menjaganya hari ini. Banyak tarikh dalam tema ini bersifat tradisional atau perkiraan; bila sebuah tradisi tumbuh pelan-pelan, hampir mustahil menunjuk satu tahun kelahirannya.",
  relatedCivIds: ['mataram-kuno', 'majapahit', 'mataram-islam', 'republik-indonesia', 'kesultanan-awal', 'austronesia-nusantara'],
  note: 'Asal-usul tradisi budaya umumnya diwariskan secara lisan sehingga tarikhnya sering bersifat tradisional atau perkiraan. Tahun pengakuan UNESCO adalah tahun penetapan dalam daftar warisan budaya takbenda (atau Warisan Dunia/Ingatan Dunia) dan tidak menunjukkan usia tradisinya.',
  sections: [
    {
      title: 'Seni pertunjukan',
      intro: 'Tari dan teater di Nusantara berakar pada ritus, istana, dan kehidupan desa, lalu terus berubah mengikuti zaman.',
      entries: [
        {
          title: 'Wayang kulit',
          when: 'sekurang-kurangnya sejak abad ke-10 M',
          place: { name: 'Surakarta, Jawa Tengah', lon: 110.82, lat: -7.57 },
          text: "Wayang kulit adalah pertunjukan bayangan dari boneka kulit kerbau yang dipahat halus dan disungging. Seorang dalang memainkan semua tokoh, menyuarakan puluhan karakter, dan memberi isyarat kepada para penabuh gamelan, sering semalam suntuk. Penonton dapat duduk di depan layar untuk melihat bayangan atau di belakangnya untuk melihat wayangnya langsung.\n\n" +
            "Prasasti dari masa Jawa kuno sudah menyebut pertunjukan wayang, dan lakon-lakonnya diambil dari Ramayana dan Mahabharata yang disesuaikan dengan alam pikiran Jawa. Tokoh punakawan seperti Semar, Gareng, Petruk, dan Bagong tidak ada dalam epos India; mereka tokoh Nusantara, para pelayan yang bijak sekaligus pelawak. Lewat mereka dalang menyampaikan kritik dan nasihat.\n\n" +
            "Kini wayang dimainkan di Jawa, Bali, dan daerah lain dengan gaya masing-masing, dan dalang muda memadukannya dengan bahasa serta isu masa kini.",
          facts: [['Asal daerah', 'Jawa dan Bali'], ['Pengakuan UNESCO', 'Wayang Indonesia: dinyatakan Masterpiece 2003, masuk daftar 2008'], ['Bahan/alat', 'Kulit kerbau, tanduk, gamelan, kelir (layar)'], ['Makna', 'Cermin watak manusia dan pelajaran hidup']],
          civId: 'mataram-kuno',
        },
        {
          title: 'Wayang golek',
          when: 'berkembang sekitar abad ke-17 M (perkiraan)',
          place: { name: 'Bandung, Jawa Barat', lon: 107.61, lat: -6.92 },
          text: "Wayang golek memakai boneka kayu tiga dimensi yang dimainkan dari bawah dengan tongkat. Ia terutama hidup di tanah Sunda. Kepala boneka dipahat dari kayu lame atau albasia, lalu dicat dan diberi pakaian kain. Dalang golek terkenal karena kemampuan menirukan banyak suara sekaligus dan menyelipkan humor yang tajam.\n\n" +
            "Lakonnya dapat berasal dari Mahabharata, Ramayana, atau cerita Menak, kisah Amir Hamzah yang dibawa lewat sastra Islam. Tokoh punakawan Sunda, Cepot atau Astrajingga, adalah favorit penonton karena lawakannya yang spontan. Pertunjukan sering dipentaskan pada hajatan, seperti khitanan dan pernikahan.",
          facts: [['Asal daerah', 'Jawa Barat (Sunda)'], ['Bahan/alat', 'Kayu, kain, tongkat penggerak'], ['Makna', 'Hiburan sekaligus tuntunan hidup']],
        },
        {
          title: 'Tari Saman',
          when: 'tradisi Gayo, berkembang sejak berabad-abad lalu',
          place: { name: 'Gayo Lues, Aceh', lon: 97.32, lat: 4.12 },
          text: "Tari Saman dibawakan oleh belasan penari laki-laki yang duduk berbaris rapat dan bergerak serempak: menepuk dada, paha, dan lantai, menggoyangkan badan ke kiri dan ke kanan, dengan tempo yang kian cepat. Tidak ada alat musik; ritmenya datang dari tepukan, jentikan jari, dan nyanyian syair.\n\n" +
            "Menurut tradisi, bentuk ini dikembangkan di tanah Gayo dan dikaitkan dengan syiar Islam; syairnya memuat pesan agama, adat, dan nasihat kemasyarakatan. Kekompakan adalah kuncinya: bila satu penari keliru, seluruh barisan terganggu. Latihannya menanamkan kebersamaan dan kedisiplinan.",
          facts: [['Asal daerah', 'Gayo Lues, Aceh'], ['Pengakuan UNESCO', 'Tari Saman, 2011 (daftar perlindungan mendesak)'], ['Makna', 'Kebersamaan, kekompakan, dan nilai agama']],
        },
        {
          title: 'Tari Bali: legong, kecak, dan barong',
          when: 'berkembang dari tradisi ritual dan istana',
          place: { name: 'Ubud, Gianyar, Bali', lon: 115.26, lat: -8.51 },
          text: "Di Bali, tari adalah bagian dari persembahan kepada dewa dan leluhur. Legong dibawakan penari remaja putri yang bergerak anggun dengan mata dan jari yang ekspresif, diiringi gamelan semar pegulingan atau gong kebyar. Barong, sosok makhluk pelindung bertubuh singa, bertarung melawan Rangda, simbol kekuatan gelap, tanpa ada yang benar-benar menang: keduanya dipandang perlu bagi keseimbangan.\n\n" +
            "Kecak, dengan puluhan laki-laki duduk melingkar melantunkan \"cak-cak-cak\", mengisahkan Ramayana. Bentuk kecak yang dikenal sekarang berkembang pada 1930-an, ketika seniman Bali bekerja sama dengan seniman asing, bertolak dari ritual sanghyang yang bernuansa trans. Banjar atau desa adat menjaga sanggar dan pura tempat tarian itu dipentaskan.",
          facts: [['Asal daerah', 'Bali'], ['Pengakuan UNESCO', 'Tiga genre tari tradisional Bali, 2015'], ['Makna', 'Persembahan dan keseimbangan dua kekuatan']],
        },
        {
          title: 'Reog Ponorogo',
          when: 'menurut tradisi, berkaitan dengan masa Majapahit akhir',
          place: { name: 'Ponorogo, Jawa Timur', lon: 111.46, lat: -7.87 },
          text: "Ikon reog adalah dadak merak: topeng kepala singa raksasa dengan bulu merak yang menjulang, beratnya puluhan kilogram, dan semuanya ditopang dengan gigitan gigi penarinya. Di sekitarnya menari warok yang berbadan tegap, jathil penunggang kuda anyaman, dan Bujang Anom yang lincah.\n\n" +
            "Cerita asalnya beragam. Salah satu versi populer menyebutnya sindiran seorang pujangga istana kepada raja Majapahit yang dikuasai permaisurinya; versi lain menceritakan lamaran Prabu Kelana Sewandana kepada putri Kediri. Para sejarawan menganggap kisah-kisah itu legenda. Reog tetap hidup berkat paguyuban desa yang berlatih rutin dan tampil pada festival tahunan.",
          facts: [['Asal daerah', 'Ponorogo, Jawa Timur'], ['Pengakuan UNESCO', 'Reog Ponorogo, 2024 (daftar perlindungan mendesak)'], ['Bahan/alat', 'Kulit macan tiruan, bulu merak, kayu dadap, rotan'], ['Makna', 'Keberanian dan kejantanan, dalam balutan satire']],
        },
        {
          title: 'Tari Piring',
          when: 'tradisi Minangkabau, berkembang sejak masa lampau',
          place: { name: 'Solok, Sumatra Barat', lon: 100.65, lat: -0.8 },
          text: "Para penari memegang piring di telapak tangan dan mengayunkannya cepat mengikuti ritme talempong dan saluang, lalu menari di atas pecahan kaca pada adegan puncaknya. Menurut tradisi, tarian ini semula persembahan syukur kepada dewa setelah panen, sebelum menyesuaikan diri dengan adat dan agama Islam di Minangkabau.\n\n" +
            "Kini ia dipentaskan dalam pesta pernikahan, penyambutan tamu, dan festival. Latihannya menuntut keseimbangan dan kecermatan: piring tak boleh lepas, dan gerakan tangan harus tetap luwes.",
          facts: [['Asal daerah', 'Sumatra Barat (Minangkabau)'], ['Bahan/alat', 'Piring, talempong, saluang'], ['Makna', 'Syukur atas panen dan keterampilan menjaga keseimbangan']],
        },
        {
          title: 'Randai',
          when: 'tradisi Minangkabau',
          place: { name: 'Bukittinggi, Sumatra Barat', lon: 100.37, lat: -0.31 },
          text: "Randai menggabungkan silat, tari, nyanyian, dan drama. Para pemain berdiri melingkar, bergerak dalam gerakan silat (galombang) sambil bergantian melantunkan dendang, sementara beberapa pemain memerankan kisah di tengah lingkaran. Ceritanya diambil dari kaba, kisah lisan Minangkabau seperti Cindua Mato atau Malin Kundang, yang sarat nasihat adat.\n\n" +
            "Randai biasa dipentaskan di halaman terbuka pada pesta adat dan hajatan nagari. Ia menunjukkan bagaimana silat, sastra lisan, dan kehidupan nagari menyatu dalam satu pertunjukan.",
          facts: [['Asal daerah', 'Sumatra Barat'], ['Bahan/alat', 'Galombang silat, dendang, kaba'], ['Makna', 'Pewarisan adat dan nasihat lewat cerita']],
        },
        {
          title: 'Tari Jaipong',
          when: '1970-an M',
          year: 1970,
          place: { name: 'Karawang, Jawa Barat', lon: 107.3, lat: -6.31 },
          text: "Jaipong adalah tarian yang relatif muda. Pada 1970-an seniman Sunda, terutama Gugum Gumbira, menggarap gerak dari ketuk tilu dan pencak silat menjadi tarian pergaulan yang bertenaga. Iringannya adalah gamelan Sunda dengan kendang yang menghentak.\n\n" +
            "Jaipong sempat menuai kritik karena dianggap terlalu bebas, tetapi lalu diterima luas dan menjadi salah satu ikon kesenian Jawa Barat. Ia menjadi contoh bahwa tradisi tidak berhenti: bentuk baru lahir dari bahan lama dan dirawat para seniman hingga menjadi bagian dari identitas daerah.",
          facts: [['Asal daerah', 'Jawa Barat (Karawang dan Bandung)'], ['Bahan/alat', 'Gamelan Sunda, kendang'], ['Makna', 'Kegembiraan dan daya hidup']],
        },
      ],
    },
    {
      title: 'Musik',
      intro: 'Dari gong perunggu hingga tabung bambu, bunyi di Nusantara punya ragam yang hampir tak terhitung.',
      entries: [
        {
          title: 'Gamelan',
          when: 'tradisi Jawa dan Bali; relief candi abad ke-8-9 M memperlihatkan alat musik serupa',
          place: { name: 'Yogyakarta', lon: 110.37, lat: -7.8 },
          text: "Gamelan adalah orkestra perkusi yang terdiri atas metalofon, gong, kendang, dan kadang suling, rebab, atau suara penyanyi. Dua sistem nada utamanya, slendro dan pelog, menyusun laras yang tidak sama dengan tangga nada Barat. Tiap perangkat disetel sendiri sehingga tidak ada dua gamelan yang bunyinya persis sama.\n\n" +
            "Pande gamelan menempa perunggu dengan teknik turun-temurun; beberapa perangkat keraton dianggap bertuah dan diberi nama. Gamelan mengiringi wayang, tari, upacara, dan konser. Di Bali, gaya gong kebyar terdengar cepat dan dinamis; di Jawa, gaya keraton terdengar lembut dan meditatif. Gamelan juga dipelajari di banyak universitas luar negeri.",
          facts: [['Asal daerah', 'Jawa, Bali, dan Sunda'], ['Pengakuan UNESCO', 'Gamelan, 2021'], ['Bahan/alat', 'Perunggu, kayu, kulit'], ['Makna', 'Harmoni dan kebersamaan dalam bermusik']],
        },
        {
          title: 'Angklung',
          when: 'tradisi Sunda, jauh lebih tua dari catatan tertulisnya',
          place: { name: 'Bandung, Jawa Barat', lon: 107.66, lat: -6.9 },
          text: "Angklung dibuat dari bilah bambu yang digantung dalam bingkai dan menghasilkan nada saat digoyang. Dalam tradisi masyarakat agraris Sunda, ia dimainkan untuk menghormati Dewi Sri, dewi padi, pada upacara tanam dan panen. Satu angklung hanya menyuarakan satu nada, sehingga lagu baru terdengar bila banyak orang memainkannya bersama.\n\n" +
            "Pada abad ke-20, Daeng Soetigna menyesuaikan angklung dengan tangga nada diatonis sehingga dapat memainkan lagu-lagu umum, dan angklung menjadi alat pendidikan musik serta kebersamaan. Di Baduy, angklung buhun masih dimainkan secara ritual.",
          facts: [['Asal daerah', 'Jawa Barat dan Banten'], ['Pengakuan UNESCO', 'Angklung Indonesia, 2010'], ['Bahan/alat', 'Bambu'], ['Makna', 'Syukur kepada Dewi Sri dan kerja sama']],
        },
        {
          title: 'Sasando',
          when: 'tradisi Pulau Rote',
          place: { name: 'Pulau Rote, Nusa Tenggara Timur', lon: 123.07, lat: -10.74 },
          text: "Sasando adalah alat musik dawai dari Pulau Rote. Dawainya direntang pada tabung bambu yang dikelilingi wadah setengah lingkaran dari daun lontar yang berfungsi sebagai resonator. Pemain memetik dengan kedua tangan sehingga bunyinya mirip harpa yang lembut.\n\n" +
            "Daun lontar, pohon penting bagi kehidupan Rote, menjadi bahan bunyi sasando. Legenda setempat mengisahkan seorang pemuda, Sangguana, yang mendengar bunyi indah dalam mimpinya lalu membuat alat itu. Kini ada pula sasando listrik. Para pemain muda di Kupang dan Rote menjaga tradisi ini.",
          facts: [['Asal daerah', 'Rote, Nusa Tenggara Timur'], ['Bahan/alat', 'Bambu, daun lontar, dawai'], ['Makna', 'Bunyi alam dan identitas orang Rote']],
        },
        {
          title: 'Kolintang',
          when: 'tradisi Minahasa',
          place: { name: 'Tomohon, Minahasa, Sulawesi Utara', lon: 124.84, lat: 1.32 },
          text: "Kolintang atau kulintang di Minahasa adalah deretan bilah kayu yang diletakkan pada rangka dan dipukul dengan tongkat. Orang Minahasa memakai kayu ringan namun nyaring, seperti kayu telur dan waru. Bunyinya \"tong, ting, tang\" konon menjadi asal nama itu.\n\n" +
            "Pada abad ke-20, para seniman Minahasa mengembangkannya menjadi seperangkat alat dari nada tinggi hingga bas sehingga bisa memainkan lagu secara orkestral. Kolintang kini dimainkan di gereja, pesta, dan sekolah. Pada 2024 UNESCO mencatat tradisi kolintang bersama balafon dari Afrika Barat sebagai warisan yang diajukan bersama beberapa negara.",
          facts: [['Asal daerah', 'Minahasa, Sulawesi Utara'], ['Pengakuan UNESCO', 'Dicatat 2024, bersama tradisi balafon beberapa negara Afrika Barat'], ['Bahan/alat', 'Bilah kayu telur atau waru'], ['Makna', 'Kebersamaan dan kegembiraan']],
        },
        {
          title: 'Gondang Batak',
          when: 'tradisi Batak',
          place: { name: 'Pulau Samosir, Danau Toba', lon: 98.8, lat: 2.65 },
          text: "Gondang adalah ansambel musik Batak Toba yang terdiri atas taganing (deretan gendang bernada), sarune, ogung (gong), dan hesek. Dalam upacara adat, pemain memainkan gondang dan keluarga menari tortor sambil berdoa kepada Tuhan dan leluhur. Meminta gondang tertentu kepada pemusik adalah bagian dari tata upacara.\n\n" +
            "Gondang mengiringi pesta pernikahan, pemakaman terhormat, dan pesta syukur. Ia menunjukkan bagaimana musik terikat pada adat dan hubungan kekerabatan orang Batak, dan hingga kini tetap dimainkan di kampung serta di perantauan.",
          facts: [['Asal daerah', 'Sumatra Utara (Batak Toba)'], ['Bahan/alat', 'Taganing, sarune, ogung, hesek'], ['Makna', 'Doa, syukur, dan penghormatan leluhur']],
        },
        {
          title: 'Tifa',
          when: 'tradisi Maluku dan Papua',
          place: { name: 'Ambon, Maluku', lon: 128.18, lat: -3.7 },
          text: "Tifa adalah gendang berbentuk tabung yang dibuat dari kayu berongga dengan selaput kulit di satu sisinya. Di Maluku, tifa dimainkan bersama gong dan tahuri (terompet kerang) dalam upacara adat, penyambutan tamu, dan tarian seperti cakalele. Di Papua, tifa sering diukir dan menjadi pengiring tarian dan nyanyian.\n\n" +
            "Bunyinya diatur dengan menyetel kulit dan memukul dengan telapak tangan. Tifa menandai peristiwa penting dalam hidup komunitas dan merupakan bagian dari identitas masyarakat Indonesia Timur.",
          facts: [['Asal daerah', 'Maluku dan Papua'], ['Bahan/alat', 'Kayu berongga, kulit hewan'], ['Makna', 'Penanda upacara dan kebersamaan']],
        },
      ],
    },
    {
      title: 'Kriya dan kain',
      intro: 'Kain dan logam yang dikerjakan tangan menyimpan pengetahuan, doa, dan status sosial.',
      entries: [
        {
          title: 'Batik',
          when: 'berkembang di Jawa; bentuk yang dikenal sekarang sekurang-kurangnya sejak abad ke-17-18 M',
          place: { name: 'Pekalongan, Jawa Tengah', lon: 109.68, lat: -6.89 },
          text: "Batik adalah kain yang dihias dengan teknik rintang warna: pembatik menorehkan lilin panas dengan canting atau mencapkan dengan cap tembaga, lalu mencelup kain berulang kali. Bagian berlilin menolak warna sehingga motif muncul saat lilin dilorot. Satu helai batik tulis halus bisa memerlukan berminggu-minggu.\n\n" +
            "Motif punya makna. Parang tertentu dahulu terbatas bagi bangsawan keraton Yogyakarta dan Surakarta; kawung dan truntum dipakai pada upacara tertentu. Batik pesisir seperti Pekalongan, Cirebon, dan Lasem lebih berwarna, menyerap pengaruh pedagang Tionghoa, Arab, dan Eropa. Setelah pengakuan UNESCO pada 2009, 2 Oktober diperingati sebagai Hari Batik Nasional.",
          facts: [['Asal daerah', 'Jawa dan berbagai daerah lain'], ['Pengakuan UNESCO', 'Batik Indonesia, 2009'], ['Bahan/alat', 'Kain katun atau sutra, malam (lilin), canting, cap, pewarna'], ['Makna', 'Doa, status, dan identitas lewat motif']],
        },
        {
          title: 'Kebaya',
          when: 'berkembang sejak masa kesultanan-kesultanan awal (perkiraan)',
          place: { name: 'Jakarta', lon: 106.85, lat: -6.2 },
          text: "Kebaya adalah blus berbelah depan yang dipadukan dengan kain batik atau tenun. Asal-usulnya diperdebatkan; sebagian sejarawan melihat pengaruh pakaian dari Timur Tengah atau Tiongkok yang disesuaikan di Jawa dan pesisir Melayu. Pada masa kolonial, perempuan dari berbagai kalangan mengenakannya dengan model yang berbeda-beda, seperti kebaya encim di kalangan peranakan.\n\n" +
            "Kini kebaya dipakai pada pernikahan, upacara resmi, dan semakin sering pada hari biasa. Perancang muda memperbarui potongan dan bahannya. Pada 2024 UNESCO mencatat tradisi kebaya sebagai warisan yang diajukan bersama oleh Brunei, Indonesia, Malaysia, Singapura, dan Thailand.",
          facts: [['Asal daerah', 'Jawa, Sumatra, dan wilayah Melayu'], ['Pengakuan UNESCO', 'Kebaya, 2024 (pencatatan bersama beberapa negara ASEAN)'], ['Bahan/alat', 'Katun, sutra, brokat, renda, bordir'], ['Makna', 'Keanggunan dan jati diri perempuan']],
        },
        {
          title: 'Keris',
          when: 'bentuk tertua yang dikenal dari sekitar abad ke-9-14 M',
          place: { name: 'Sumenep, Madura', lon: 113.87, lat: -7.02 },
          text: "Keris bukan sekadar senjata. Bilahnya berkelok atau lurus dengan pamor, pola serat dari lapisan besi dan nikel yang ditempa berulang-ulang oleh seorang empu. Gagang, warangka, dan mendak menjadi karya seni tersendiri. Bilah keris dianggap membawa harapan, dan banyak orang menyimpannya sebagai pusaka keluarga.\n\n" +
            "Relief dan prasasti dari masa Jawa kuno menampilkan bentuk awalnya, dan keris berkembang pada masa Singasari dan Majapahit. Sumenep di Madura dikenal sebagai pusat empu keris hingga kini. Pada upacara pernikahan Jawa, mempelai pria mengenakan keris sebagai bagian busana.",
          facts: [['Asal daerah', 'Jawa, Madura, Bali, Sumatra, Semenanjung Melayu'], ['Pengakuan UNESCO', 'Keris Indonesia: dinyatakan Masterpiece 2005, masuk daftar 2008'], ['Bahan/alat', 'Besi, nikel (pamor), kayu, logam mulia'], ['Makna', 'Pusaka, lambang kehormatan, dan harapan']],
          civId: 'kediri-singasari',
        },
        {
          title: 'Tenun ikat Sumba dan Nusa Tenggara',
          when: 'tradisi berabad-abad',
          place: { name: 'Waingapu, Sumba Timur', lon: 120.26, lat: -9.65 },
          text: "Pada tenun ikat, benang diikat dan dicelup sebelum ditenun, sehingga motif terbentuk dari benang itu sendiri. Perempuan Sumba menenun dengan alat tenun punggung, memakai pewarna alami: merah dari akar mengkudu, biru dari nila. Kain hinggi (untuk laki-laki) dan lau (untuk perempuan) menampilkan kuda, ayam jantan, udang, dan lambang leluhur.\n\n" +
            "Kain dipakai dalam upacara, dijadikan bagian belis (mas kawin), dan menyertai jenazah. Di Flores, Timor, dan Lembata, setiap daerah memiliki motif dan warna sendiri. Menenun adalah pengetahuan yang diwariskan ibu kepada anak perempuannya.",
          facts: [['Asal daerah', 'Nusa Tenggara Timur'], ['Bahan/alat', 'Kapas, pewarna alami, alat tenun punggung'], ['Makna', 'Garis keturunan, status, dan hubungan dengan leluhur']],
        },
        {
          title: 'Songket',
          when: 'tradisi Melayu dan Sumatra; usia pastinya belum disepakati',
          place: { name: 'Palembang, Sumatra Selatan', lon: 104.76, lat: -2.98 },
          text: "Songket ditenun dengan benang tambahan dari emas atau perak (kini sering benang metalik) yang disisipkan di antara benang lungsin hingga motif tampak bersinar di atas sutra atau katun. Palembang, Minangkabau, Aceh, dan Bali terkenal dengan songketnya, masing-masing dengan motif khas.\n\n" +
            "Dahulu songket dipakai bangsawan dan kini dikenakan pada pernikahan serta upacara adat. Para penenun bekerja dengan sangat teliti: sehelai kain bisa memakan waktu berminggu-minggu hingga berbulan-bulan. Sejarawan belum sepakat menentukan kapan tradisi ini bermula, dan sebagian menghubungkannya dengan masa Sriwijaya.",
          facts: [['Asal daerah', 'Sumatra, wilayah Melayu, juga Bali dan Lombok'], ['Bahan/alat', 'Sutra atau katun, benang emas atau perak'], ['Makna', 'Kemuliaan dan kemakmuran']],
        },
        {
          title: 'Ulos',
          when: 'tradisi Batak',
          place: { name: 'Balige, Toba, Sumatra Utara', lon: 99.07, lat: 2.33 },
          text: "Ulos adalah kain tenun Batak yang berfungsi sebagai pakaian, selimut, dan simbol kasih sayang. Dalam adat, ulos diberikan, bukan sekadar dijual: orang tua mengulosi pengantin, keluarga mengulosi cucu yang baru lahir, dan kerabat mengulosi yang berduka. Setiap jenis, seperti ragidup, sadum, atau mangiring, punya makna dan peruntukan yang berbeda.\n\n" +
            "Benang dahulu dicelup dengan pewarna alami, dan motifnya kerap memakai warna merah, hitam, dan putih. Pemberian ulos menyampaikan harapan agar penerima hangat, sehat, dan diberkati.",
          facts: [['Asal daerah', 'Sumatra Utara (Batak)'], ['Bahan/alat', 'Benang kapas atau sutra, alat tenun gedogan'], ['Makna', 'Kehangatan, berkat, dan ikatan kekerabatan']],
        },
        {
          title: 'Noken Papua',
          when: 'tradisi turun-temurun',
          place: { name: 'Wamena, Pegunungan Papua', lon: 138.95, lat: -4.09 },
          text: "Noken adalah tas jaring yang dirajut atau dianyam dari serat kulit kayu, anggrek, atau benang. Perempuan membawanya dengan tali melingkar di kepala dan noken menggantung di punggung; isinya bisa ubi, hasil kebun, kayu bakar, bahkan bayi atau anak babi. Pembuatannya memerlukan waktu lama dan dianggap bagian dari kedewasaan perempuan.\n\n" +
            "Bagi banyak komunitas Papua, noken adalah lambang kehidupan, kesuburan, dan kemandirian. Bentuk dan motifnya berbeda-beda di tiap suku. Pada 2012 UNESCO mencatat noken dalam daftar yang memerlukan perlindungan mendesak.",
          facts: [['Asal daerah', 'Papua'], ['Pengakuan UNESCO', 'Noken, kerajinan tangan Papua, 2012'], ['Bahan/alat', 'Serat kulit kayu, anggrek, benang'], ['Makna', 'Kehidupan, kesuburan, dan kemandirian']],
        },
        {
          title: 'Ukiran Jepara dan Asmat',
          when: 'tradisi berabad-abad',
          place: { name: 'Jepara, Jawa Tengah', lon: 110.67, lat: -6.59 },
          text: "Jepara terkenal sebagai kota ukir: pengrajinnya memahat kayu jati menjadi meja, kursi, dan hiasan dengan motif sulur-sulur yang rapat. Tradisi ini sering dikaitkan dengan masa Kesultanan Demak, dan pada awal abad ke-20 R.A. Kartini ikut memperkenalkan ukiran Jepara kepada pembeli di luar kota.\n\n" +
            "Jauh di timur, suku Asmat di pesisir selatan Papua memahat tiang bisj dan patung leluhur dari kayu bakau. Setiap figur adalah penghormatan kepada orang yang telah wafat dan dibuat untuk upacara. Dua tradisi ini berbeda corak dan makna, tetapi sama-sama menuntut ketelitian pemahat.",
          facts: [['Asal daerah', 'Jepara (Jawa Tengah) dan Asmat (Papua Selatan)'], ['Bahan/alat', 'Kayu jati, kayu bakau, pahat'], ['Makna', 'Hiasan, status, dan penghormatan leluhur']],
        },
      ],
    },
    {
      title: 'Arsitektur dan monumen',
      intro: 'Rumah adat dan candi memperlihatkan cara orang Nusantara memandang alam, keluarga, dan yang suci.',
      entries: [
        {
          title: 'Borobudur',
          when: 'sekitar abad ke-8-9 M',
          year: 800,
          place: { name: 'Magelang, Jawa Tengah', lon: 110.204, lat: -7.608 },
          text: "Borobudur adalah stupa raksasa bertingkat yang dibangun pada masa Wangsa Syailendra di Mataram Kuno. Dari kaki ke puncak, peziarah berjalan mengelilingi tingkat demi tingkat dan melihat ribuan panel relief yang menggambarkan kisah hidup Buddha, hukum karma, dan perjalanan Sudhana mencari kebijaksanaan. Tingkat atas berbentuk bundar dengan stupa berlubang berisi arca Buddha.\n\n" +
            "Candi ini lama terkubur abu vulkanik dan hutan, sebelum dibersihkan pada 1814 atas perintah Raffles dan dipugar besar-besaran pada abad ke-20. Kini peziarah Waisak dari berbagai negara berkumpul di sana setiap tahun.",
          facts: [['Asal daerah', 'Magelang, Jawa Tengah'], ['Pengakuan UNESCO', 'Warisan Dunia, 1991'], ['Bahan/alat', 'Batu andesit'], ['Makna', 'Jalan menuju pencerahan dalam Buddha Mahayana']],
          civId: 'mataram-kuno',
        },
        {
          title: 'Prambanan',
          when: 'abad ke-9 M',
          year: 850,
          place: { name: 'Prambanan, Klaten dan Sleman', lon: 110.491, lat: -7.752 },
          text: "Kompleks Prambanan (Loro Jonggrang) adalah candi Hindu terbesar di Indonesia. Tiga candi utama, untuk Siwa, Wisnu, dan Brahma, berdiri tegak dengan puncak ramping; candi Siwa setinggi sekitar 47 meter. Relief pada dindingnya mengisahkan Ramayana, dan pada malam purnama dipentaskan sendratari Ramayana di panggung terbuka.\n\n" +
            "Candi ini dikaitkan dengan masa Mataram Kuno pada abad ke-9, meskipun sejarawan masih membahas rincian pendiriannya. Legenda Roro Jonggrang yang dikutuk menjadi arca menyertai cerita rakyat setempat. Gempa 2006 merusak sebagian bangunannya, dan pemugaran berlangsung bertahun-tahun.",
          facts: [['Asal daerah', 'Perbatasan Jawa Tengah dan Yogyakarta'], ['Pengakuan UNESCO', 'Warisan Dunia, 1991'], ['Bahan/alat', 'Batu andesit'], ['Makna', 'Pemujaan Trimurti dalam Hindu Siwa']],
          civId: 'mataram-kuno',
        },
        {
          title: 'Trowulan, bekas pusat Majapahit',
          when: 'abad ke-13-15 M',
          year: 1350,
          place: { name: 'Trowulan, Mojokerto', lon: 112.38, lat: -7.56 },
          text: "Di Trowulan, para arkeolog menemukan sisa permukiman luas: gapura bata merah seperti Bajang Ratu dan Wringin Lawang, kolam Segaran, sumur, saluran air, dan ribuan keping gerabah serta celengan terakota. Bata merah dengan teknik susun yang nyaris tanpa perekat menjadi ciri arsitektur Majapahit.\n\n" +
            "Sebagian besar situs masih terkubur di bawah sawah dan permukiman. Museum Trowulan menyimpan temuannya. Para peneliti masih berdebat tentang tata ruang dan batas kota kerajaan ini.",
          facts: [['Asal daerah', 'Mojokerto, Jawa Timur'], ['Bahan/alat', 'Bata merah, terakota'], ['Makna', 'Jejak pusat kekuasaan Majapahit']],
          civId: 'majapahit',
        },
        {
          title: 'Rumah gadang Minangkabau',
          when: 'tradisi adat Minangkabau',
          place: { name: 'Pagaruyung, Tanah Datar, Sumatra Barat', lon: 100.62, lat: -0.46 },
          text: "Atap rumah gadang melengkung seperti tanduk kerbau dan menjulang di kedua ujungnya. Rumah panggung besar ini dibangun dari kayu dan beratap ijuk, dengan dinding berukir motif tumbuhan. Ia dimiliki kaum perempuan dalam sistem matrilineal Minangkabau: pewarisan menurut garis ibu, dan perempuan menjadi pemilik harta pusaka.\n\n" +
            "Di depannya berdiri rangkiang, lumbung padi. Rumah gadang dihuni sekeluarga besar, dan tiap ruangnya punya peran dalam upacara adat. Istano Basa Pagaruyung adalah rekonstruksi yang paling dikenal, setelah istana lama terbakar.",
          facts: [['Asal daerah', 'Sumatra Barat'], ['Bahan/alat', 'Kayu, ijuk'], ['Makna', 'Pusat keluarga matrilineal dan adat']],
        },
        {
          title: 'Tongkonan Toraja',
          when: 'tradisi Toraja',
          place: { name: 'Rantepao, Toraja Utara', lon: 119.9, lat: -2.97 },
          text: "Tongkonan adalah rumah adat Toraja dengan atap berbentuk perahu yang menjulang di kedua ujung. Dinding kayunya diukir dengan motif geometris berwarna merah, hitam, kuning, dan putih. Di depannya sering berdiri lumbung padi (alang) yang serupa dalam rupa tetapi lebih kecil.\n\n" +
            "Tongkonan bukan hanya tempat tinggal, melainkan pusat garis keturunan: keluarga yang berasal dari satu leluhur merujuk pada rumah yang sama. Upacara besar, termasuk pemakaman rambu solo, diselenggarakan di halamannya. Menurut sebagian penafsir, bentuk atapnya mengingatkan pada perahu leluhur.",
          facts: [['Asal daerah', 'Sulawesi Selatan (Toraja)'], ['Bahan/alat', 'Kayu, bambu, ukiran dan cat alami'], ['Makna', 'Pusat keluarga dan identitas leluhur']],
        },
        {
          title: 'Honai Papua',
          when: 'tradisi Pegunungan Tengah Papua',
          place: { name: 'Lembah Baliem, Wamena', lon: 138.95, lat: -4.09 },
          text: "Honai adalah rumah bundar beratap jerami kerucut yang khas di Lembah Baliem. Dindingnya dari kayu, nyaris tanpa jendela, dan pintunya rendah; bentuk itu menahan hawa dingin pegunungan, dan perapian di tengah menghangatkan seluruh ruangan. Honai laki-laki dan perempuan dibedakan, dan dapur biasanya dibangun terpisah.\n\n" +
            "Rumah ini menunjukkan penyesuaian cerdas terhadap iklim dataran tinggi. Di banyak kampung honai masih dipakai, walau rumah modern juga mulai menyebar.",
          facts: [['Asal daerah', 'Pegunungan Tengah, Papua'], ['Bahan/alat', 'Kayu, jerami, tali rotan'], ['Makna', 'Kehangatan dan perlindungan keluarga']],
        },
        {
          title: 'Joglo Jawa',
          when: 'tradisi arsitektur Jawa',
          place: { name: 'Surakarta, Jawa Tengah', lon: 110.82, lat: -7.57 },
          text: "Joglo adalah rumah tradisional Jawa dengan atap bertingkat berbentuk piramida tumpul. Empat tiang utama (saka guru) menopang atap tengah, sementara ruang di bawahnya menjadi pendapa tempat menerima tamu dan menggelar pertunjukan. Bagian belakang adalah dalem dan senthong, ruang keluarga yang lebih privat.\n\n" +
            "Rumah joglo dulu menjadi lambang kedudukan bangsawan dan orang berada. Kayu jati diukir dengan motif halus, dan sambungannya memakai pasak tanpa paku. Banyak joglo dibongkar dan dirakit kembali di tempat lain, praktik yang lazim dalam tradisi Jawa. Keraton Yogyakarta dan Surakarta memiliki pendapa dengan gaya serupa yang lebih megah.",
          facts: [['Asal daerah', 'Jawa Tengah dan Yogyakarta'], ['Bahan/alat', 'Kayu jati, genteng tanah liat'], ['Makna', 'Kedudukan sosial dan tata ruang keluarga']],
        },
        {
          title: 'Masjid Agung Demak dan Menara Kudus',
          when: 'abad ke-15-16 M',
          place: { name: 'Demak, Jawa Tengah', lon: 110.64, lat: -6.89 },
          text: "Masjid Agung Demak berdiri dengan atap tumpang tiga tingkat dan tiang-tiang kayu jati. Menurut tradisi, para wali ikut membangunnya pada masa Kesultanan Demak; salah satu tiangnya, saka tatal, konon disusun dari serpihan kayu. Bentuk atap bertumpang itu berkerabat dengan bentuk bangunan suci masa sebelumnya.\n\n" +
            "Di Kudus, Menara Kudus yang dikaitkan dengan Sunan Kudus tampak seperti candi bata merah, lengkap dengan gapura bentar. Perpaduan seperti ini memperlihatkan Islam yang tumbuh lewat bahasa seni setempat. Masjid-masjid lain di pesisir Jawa menunjukkan ciri yang sama.",
          facts: [['Asal daerah', 'Demak dan Kudus, Jawa Tengah'], ['Bahan/alat', 'Kayu jati, bata merah'], ['Makna', 'Perpaduan seni lokal dan Islam']],
          civId: 'kesultanan-awal',
        },
      ],
    },
    {
      title: 'Sastra dan naskah',
      intro: 'Sebelum buku cetak, pengetahuan Nusantara tersimpan di daun lontar, kertas dluwang, dan ingatan para penutur.',
      entries: [
        {
          title: 'La Galigo',
          when: 'tradisi Bugis; naskah yang ada kebanyakan disalin pada abad ke-18-19 M',
          place: { name: 'Soppeng, Sulawesi Selatan', lon: 119.88, lat: -4.35 },
          text: "La Galigo adalah epos penciptaan Bugis tentang dewa-dewa di langit dan dunia tengah, dengan tokoh Sawerigading sebagai pahlawan pelaut. Panjangnya diperkirakan puluhan ribu halaman, dan karena itu sering disebut salah satu karya sastra terpanjang di dunia. Ia ditulis dalam bahasa Bugis kuno dengan aksara Lontara.\n\n" +
            "Naskah-naskah yang masih ada kebanyakan disalin pada abad ke-18 dan ke-19, meski isinya diyakini berasal dari tradisi lisan yang jauh lebih tua. Para bissu, pendeta tradisional Bugis, dahulu melafalkan sebagian kisah dalam upacara. Naskah La Galigo tersimpan di Makassar dan di Leiden.",
          facts: [['Asal daerah', 'Sulawesi Selatan'], ['Pengakuan UNESCO', 'Ingatan Dunia (Memory of the World), 2011'], ['Bahan/alat', 'Naskah lontar dan kertas, aksara Lontara'], ['Makna', 'Kisah penciptaan dan asal manusia']],
        },
        {
          title: 'Nagarakretagama',
          when: '1365 M',
          year: 1365,
          place: { name: 'Trowulan, Mojokerto', lon: 112.38, lat: -7.56 },
          text: "Nagarakretagama (juga disebut Desawarnana) adalah kakawin atau puisi pujian untuk Raja Hayam Wuruk, ditulis pujangga Mpu Prapanca pada 1365 M. Ia melukiskan istana Majapahit, perjalanan keliling raja, wilayah-wilayah yang dianggap bagian dari kerajaan, serta upacara dan keagamaan masa itu.\n\n" +
            "Naskahnya ditemukan di Lombok pada 1894 ketika Belanda menyerbu puri Cakranegara, lalu dikaji dan diterbitkan. Dari sinilah dunia modern mengenal gambaran terinci Majapahit. Karena ditulis oleh pujangga istana, sejarawan membacanya dengan membandingkan sumber lain.",
          facts: [['Asal daerah', 'Majapahit, Jawa Timur'], ['Pengakuan UNESCO', 'Ingatan Dunia, 2013'], ['Bahan/alat', 'Naskah lontar, bahasa Jawa Kuno'], ['Makna', 'Sumber utama sejarah Majapahit']],
          civId: 'majapahit',
        },
        {
          title: 'Babad Diponegoro',
          when: '1831-1832 M',
          year: 1832,
          place: { name: 'Tegalrejo, Yogyakarta', lon: 110.35, lat: -7.78 },
          text: "Babad Diponegoro adalah otobiografi Pangeran Diponegoro, tokoh Perang Jawa (1825-1830). Ia menulisnya dalam tembang Jawa saat diasingkan di Manado, antara 1831 dan 1832. Isinya menuturkan silsilah keluarga, pengalaman spiritual, dan alasan perlawanannya.\n\n" +
            "Naskah ini unik sebagai tulisan tangan pelaku sejarah dari sisi Jawa, bukan laporan kolonial. Peter Carey adalah salah satu sejarawan yang mengkaji dan menerbitkannya. Pengakuan UNESCO menegaskan nilainya sebagai sumber sejarah dan sastra.",
          facts: [['Asal daerah', 'Yogyakarta'], ['Pengakuan UNESCO', 'Ingatan Dunia, 2013'], ['Bahan/alat', 'Naskah macapat berbahasa Jawa'], ['Makna', 'Suara langsung seorang pemimpin Perang Jawa']],
          civId: 'mataram-islam',
        },
        {
          title: 'Hikayat Melayu dan pantun',
          when: 'hikayat sejak sekitar abad ke-15-17 M; pantun jauh lebih tua dalam tradisi lisan',
          place: { name: 'Pulau Penyengat, Kepulauan Riau', lon: 104.42, lat: 0.92 },
          text: "Hikayat adalah prosa kisah dalam bahasa Melayu seperti Hikayat Raja-raja Pasai, Sejarah Melayu, dan Hikayat Hang Tuah. Naskah-naskahnya ditulis dalam aksara Jawi (huruf Arab untuk bahasa Melayu) dan memuat sejarah, legenda, serta nasihat bagi para penguasa. Pulau Penyengat di Riau pada abad ke-19 menjadi pusat penulisan dan penerbitan Melayu, dengan tokoh seperti Raja Ali Haji.\n\n" +
            "Pantun adalah puisi empat baris bersajak a-b-a-b; dua baris pertama sampiran, dua baris berikutnya isi. Orang Melayu memakainya dalam menyambut tamu, melamar, dan menasihati. Pada 2020 UNESCO mencatat pantun sebagai warisan bersama Indonesia dan Malaysia.",
          facts: [['Asal daerah', 'Wilayah Melayu (Riau, Sumatra, Semenanjung)'], ['Pengakuan UNESCO', 'Pantun, 2020 (Indonesia dan Malaysia)'], ['Bahan/alat', 'Naskah beraksara Jawi, tradisi lisan'], ['Makna', 'Sopan santun, nasihat, dan keindahan bahasa']],
          civId: 'kesultanan-awal',
        },
        {
          title: 'Aksara Nusantara',
          when: 'sejak abad ke-5 M',
          year: 450,
          place: { name: 'Makassar, Sulawesi Selatan', lon: 119.41, lat: -5.14 },
          text: "Aksara tertua yang dikenal di Nusantara berasal dari India. Prasasti Kutai dan Tarumanagara pada abad ke-5 memakai huruf Pallawa, yang kemudian berkembang menjadi aksara Kawi di Jawa. Dari rumpun ini lahir aksara Jawa (hanacaraka) dan aksara Bali. Aksara Lontara Bugis-Makassar, aksara Batak, dan aksara Rejang (Kaganga) di Sumatra bagian selatan juga berkerabat dalam keluarga aksara turunan India itu.\n\n" +
            "Aksara-aksara itu dipakai untuk menulis naskah di daun lontar, bambu, kulit kayu, dan tulang. Aksara Jawa dan Bali masih diajarkan di sekolah, sementara Lontara dan aksara lain dipelajari komunitas dan peneliti. Pemakaiannya kian jarang dalam kehidupan sehari-hari, sehingga pelestarian dilakukan lewat pelajaran, huruf digital, dan penerbitan.",
          facts: [['Asal daerah', 'Seluruh Nusantara'], ['Bahan/alat', 'Lontar, bambu, kulit kayu, kertas'], ['Makna', 'Penyimpan ilmu, hukum, dan sastra']],
          civId: 'kutai-tarumanagara',
        },
      ],
    },
    {
      title: 'Kuliner',
      intro: 'Makanan menyimpan sejarah perdagangan rempah, adat, dan kearifan menjaga kesehatan.',
      entries: [
        {
          title: 'Rendang',
          when: 'tradisi Minangkabau',
          place: { name: 'Padang, Sumatra Barat', lon: 100.35, lat: -0.95 },
          text: "Rendang adalah daging yang dimasak lama dengan santan dan rempah-rempah seperti cabai, lengkuas, jahe, serai, dan kunyit hingga santan menyusut dan bumbu menyerap sempurna. Prosesnya bisa berjam-jam sambil terus diaduk. Hasilnya berwarna gelap dan kering, serta tahan berhari-hari, sehingga cocok dibawa merantau.\n\n" +
            "Rendang menjadi hidangan penting dalam perayaan adat Minangkabau. Tafsir tradisional menyatakan bahwa daging melambangkan para ninik mamak, santan kaum cerdik pandai, cabai para alim ulama, dan bumbu seluruh masyarakat. Asal-usul pastinya tidak tercatat.",
          facts: [['Asal daerah', 'Sumatra Barat'], ['Bahan/alat', 'Daging sapi, santan kelapa, cabai, rempah'], ['Makna', 'Kebersamaan dan musyawarah dalam adat']],
        },
        {
          title: 'Tempe',
          when: 'diperkirakan berkembang di Jawa; waktu pastinya tidak diketahui',
          place: { name: 'Jawa Tengah', lon: 110.0, lat: -7.5 },
          text: "Tempe dibuat dari kedelai yang difermentasi dengan kapang Rhizopus dan dibungkus daun pisang atau plastik. Dalam satu atau dua hari, butiran kedelai menyatu menjadi kue padat putih. Bagi banyak keluarga di Jawa, tempe adalah sumber protein yang murah dan sehari-hari: digoreng, dibacem, atau dimasak sebagai sayur.\n\n" +
            "Para peneliti menduga tempe berkembang di Jawa, tetapi catatan awalnya jarang dan tidak pasti. Tempe kemudian dikenal luas di dunia karena nilai gizinya dan menjadi bahan makanan vegetarian. Pengrajin tempe di kampung-kampung menjaga pengetahuan fermentasi ini.",
          facts: [['Asal daerah', 'Jawa'], ['Bahan/alat', 'Kedelai, ragi tempe, daun pisang'], ['Makna', 'Makanan rakyat yang bergizi']],
        },
        {
          title: 'Nasi tumpeng',
          when: 'tradisi Jawa',
          place: { name: 'Yogyakarta', lon: 110.37, lat: -7.8 },
          text: "Tumpeng adalah nasi yang dibentuk kerucut seperti gunung dan dikelilingi lauk-pauk, seperti ayam, telur, sayuran, dan perkedel. Bentuk gunungnya sering dikaitkan dengan pandangan lama tentang gunung sebagai tempat para leluhur dan dewa. Dalam selamatan, tumpeng dipotong dan dibagikan kepada tetangga sebagai tanda syukur.\n\n" +
            "Tumpeng hadir pada ulang tahun, syukuran rumah baru, dan peringatan nasional. Ada tumpeng kuning, tumpeng putih, dan tumpeng robyong, masing-masing dengan maksud yang berbeda. Bentuknya sederhana, tetapi menjadi sarana mempererat kebersamaan.",
          facts: [['Asal daerah', 'Jawa'], ['Bahan/alat', 'Nasi, lauk-pauk, daun pisang'], ['Makna', 'Syukur dan permohonan berkah']],
        },
        {
          title: 'Jamu',
          when: 'tradisi lama, tercatat dalam naskah Jawa dan Bali',
          place: { name: 'Surakarta, Jawa Tengah', lon: 110.82, lat: -7.57 },
          text: "Jamu adalah ramuan tradisional dari akar, rimpang, daun, dan rempah, seperti kunyit, temulawak, jahe, dan kencur. Penjual jamu gendong, yang membawa botol-botol di punggung dan menyapa pelanggan keliling kampung, menjadi pemandangan khas di Jawa. Resep dan khasiat dahulu dicatat dalam naskah seperti Serat Centhini dan Usada Bali.\n\n" +
            "Jamu bukan sekadar obat; ia adalah cara hidup yang mengutamakan keseimbangan tubuh. Pada 2023 UNESCO mencatat budaya sehat jamu sebagai warisan takbenda Indonesia. Kini industri jamu modern berdiri berdampingan dengan para peracik rumahan.",
          facts: [['Asal daerah', 'Jawa dan daerah lain'], ['Pengakuan UNESCO', 'Budaya sehat jamu, 2023'], ['Bahan/alat', 'Rimpang, daun, akar, madu, gula aren'], ['Makna', 'Menjaga kesehatan dan keseimbangan tubuh']],
        },
        {
          title: 'Sambal dan soto',
          when: 'sambal sejak cabai dibawa ke Nusantara pada abad ke-16 M',
          place: { name: 'Surabaya, Jawa Timur', lon: 112.75, lat: -7.25 },
          text: "Cabai berasal dari Amerika dan dibawa oleh pedagang Eropa ke Asia pada abad ke-16. Dalam beberapa generasi, orang Nusantara menjadikannya bahan utama sambal: sambal terasi, sambal matah, sambal dabu-dabu, dan banyak lainnya. Cara menguleknya di cobek batu menentukan tekstur dan rasanya.\n\n" +
            "Soto adalah sup berkuah dengan daging, bumbu, dan pelengkap, dan tiap kota punya versi sendiri: soto Lamongan, soto Betawi, coto Makassar, hingga soto Banjar. Sebagian ahli menduga bentuknya dipengaruhi hidangan Tionghoa, tetapi hal itu belum pasti. Keduanya menunjukkan bagaimana bahan dari luar dapat menjadi masakan lokal.",
          facts: [['Asal daerah', 'Seluruh Nusantara'], ['Bahan/alat', 'Cabai, terasi, cobek, kaldu, rempah'], ['Makna', 'Cita rasa lokal dari bahan lintas benua']],
        },
      ],
    },
    {
      title: 'Seni bela diri dan permainan',
      intro: 'Kekuatan tubuh dan kecakapan tradisional juga ditampilkan sebagai pertunjukan dan adat.',
      entries: [
        {
          title: 'Pencak silat',
          when: 'tradisi lama di Nusantara',
          place: { name: 'Bukittinggi, Sumatra Barat', lon: 100.37, lat: -0.31 },
          text: "Pencak silat adalah seni bela diri khas Nusantara yang mengandalkan gerak elak, tangkis, kuncian, dan serangan, sering dengan senjata seperti golok, tongkat, atau kerambit. Di Minangkabau ia disebut silek; di Jawa Barat, pencak; di Betawi, maen pukulan. Perguruan atau sasaran mengajarkan jurus sekaligus budi pekerti dan kerendahan hati.\n\n" +
            "Silat sering dipertunjukkan pada pesta pernikahan atau acara adat. Ia berkembang di Indonesia, Malaysia, Brunei, Singapura, dan sekitarnya. Pada 2019 UNESCO mencatat pencak silat sebagai warisan takbenda Indonesia.",
          facts: [['Asal daerah', 'Nusantara (Minangkabau, Jawa, Betawi, dan lainnya)'], ['Pengakuan UNESCO', 'Pencak silat, 2019'], ['Bahan/alat', 'Tangan kosong, golok, tongkat, kerambit'], ['Makna', 'Bela diri, seni, dan pendidikan watak']],
        },
        {
          title: 'Karapan sapi',
          when: 'tradisi Madura',
          place: { name: 'Pamekasan, Madura', lon: 113.48, lat: -7.16 },
          text: "Dalam karapan sapi, sepasang sapi diikat pada kayu bajak (kaleles) dan dipacu sepanjang lintasan, dengan joki berdiri di atas kayu. Sapi dilatih dan dirawat khusus, sering dengan jamu dan makanan bergizi. Di Madura, pemilik sapi dengan bangga mengikutkan sapinya dalam perlombaan.\n\n" +
            "Tradisi ini dihubungkan dengan kehidupan bertani di pulau yang kering dan dengan kebanggaan para pemilik ternak. Piala bergilir tingkat Madura diperebutkan setiap tahun. Kerap muncul perdebatan tentang perlakuan terhadap sapi, dan pelaksanaannya terus dibenahi.",
          facts: [['Asal daerah', 'Madura, Jawa Timur'], ['Bahan/alat', 'Sapi, kaleles, pecut'], ['Makna', 'Kebanggaan dan semangat kompetisi']],
        },
        {
          title: 'Pasola',
          when: 'tradisi Sumba, bagian ritual Marapu',
          place: { name: 'Kodi, Sumba Barat Daya', lon: 119.0, lat: -9.65 },
          text: "Pasola adalah permainan dua kelompok penunggang kuda yang saling melempar lembing kayu. Ia diadakan setiap tahun pada sekitar Februari atau Maret setelah rato (pemuka adat) menentukan waktunya dengan membaca tanda kemunculan nyale, cacing laut di pantai. Pasola merupakan bagian dari ritual kepercayaan Marapu untuk memohon panen yang baik.\n\n" +
            "Penunggang kuda yang cekatan menjadi pusat perhatian, dan penonton memenuhi lapangan. Bila ada yang terluka, hal itu dipandang sebagai bagian dari ritual. Tradisi ini menarik wisatawan, tetapi bagi orang Sumba ia terutama adalah upacara.",
          facts: [['Asal daerah', 'Sumba, Nusa Tenggara Timur'], ['Bahan/alat', 'Kuda, lembing kayu'], ['Makna', 'Memohon kesuburan dan panen']],
        },
      ],
    },
    {
      title: 'Pelayaran',
      intro: 'Sebagai bangsa kepulauan, orang Nusantara sejak lama adalah pelaut ulung.',
      entries: [
        {
          title: 'Pinisi',
          when: 'tradisi Bugis-Makassar; layar pinisi sekitar abad ke-19 M (perkiraan)',
          place: { name: 'Tana Beru, Bulukumba, Sulawesi Selatan', lon: 120.45, lat: -5.62 },
          text: "Pinisi adalah perahu layar dengan dua tiang dan tujuh atau delapan layar, dibuat tanpa gambar rancangan oleh panrita lopi, ahli perahu yang menerima ilmunya dari orang tua. Pengerjaan dimulai dengan upacara memilih hari baik dan memotong lunas. Orang Konjo di Bulukumba, khususnya di Tana Beru, Ara, dan Lemo-lemo, terkenal sebagai pembuatnya.\n\n" +
            "Dahulu pinisi mengangkut barang antarpulau, dari kayu hingga rempah. Kini banyak pinisi dibuat sebagai kapal wisata dan kapal niaga. Pada 2017 UNESCO mencatat seni pembuatan perahu pinisi di Sulawesi Selatan sebagai warisan takbenda.",
          facts: [['Asal daerah', 'Sulawesi Selatan (Bulukumba)'], ['Pengakuan UNESCO', 'Seni pembuatan perahu pinisi, 2017'], ['Bahan/alat', 'Kayu besi, bitti, jati; layar kain'], ['Makna', 'Warisan kemaritiman Bugis-Makassar']],
        },
        {
          title: 'Perahu bercadik dan kapal Borobudur',
          when: 'relief abad ke-8-9 M; replika 2003-2004 M',
          year: 800,
          place: { name: 'Candi Borobudur, Magelang', lon: 110.204, lat: -7.608 },
          text: "Perahu bercadik memakai pelampung di satu atau kedua sisinya agar stabil di laut, dan menjadi ciri pelayaran Austronesia. Relief Borobudur memperlihatkan perahu bercadik bertiang layar besar, dan para peneliti menduga perahu semacam itu dipakai dalam pelayaran antarpulau dan antarbenua.\n\n" +
            "Pada 2003-2004, sebuah tim membangun replika, kapal Samudra Raksa, dengan teknik tradisional dan melayarkannya dari Indonesia sampai Ghana di Afrika Barat. Pelayaran itu menunjukkan bahwa perahu seperti itu mampu menyeberangi samudra, meski rute yang dahulu ditempuh belum diketahui pasti.",
          facts: [['Asal daerah', 'Nusantara'], ['Bahan/alat', 'Kayu, tali ijuk dan rotan, layar'], ['Makna', 'Jejak pelayaran Austronesia dan kemaritiman Nusantara']],
          civId: 'austronesia-nusantara',
        },
      ],
    },
  ],
  sources: [
    { title: 'Lists of Intangible Cultural Heritage (entri Indonesia)', author: 'UNESCO', year: 2024, kind: 'sekunder' },
    { title: 'Art in Indonesia: Continuities and Change', author: 'Claire Holt', year: 1967, kind: 'sekunder' },
    { title: 'Nusa Jawa: Silang Budaya', author: 'Denys Lombard', year: 1996, kind: 'sekunder' },
    { title: 'Nagarakretagama (Desawarnana)', author: 'Mpu Prapanca', year: 1365, kind: 'primer' },
    { title: 'The Power of Prophecy: Prince Dipanagara and the End of an Old Order in Java', author: 'Peter Carey', year: 2007, kind: 'sekunder' },
  ],
};
