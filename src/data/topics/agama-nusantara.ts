import type { Topic } from '../../types';

/** Kisah kedatangan dan persebaran agama-agama di Nusantara, disusun kronologis dengan bukti. */
export const topicAgamaNusantara: Topic = {
  id: 'agama-nusantara',
  title: 'Jejak Agama-Agama di Nusantara',
  subtitle:
    'Bagaimana kepercayaan asli, Hindu, Buddha, Islam, Kristen, dan Konghucu tiba serta berlapis-lapis di kepulauan ini.',
  intro:
    'Nusantara sejak lama menjadi persimpangan jalur pelayaran antara India, Tiongkok, Arab, dan kemudian Eropa. Di atas kapal-kapal dagang itulah gagasan, kitab, dan para guru agama ikut berlayar. Sebagian besar agama tiba bukan lewat penaklukan, melainkan lewat perdagangan, perkawinan, lingkungan istana, dan jasa para pengajar serta penyiar.\n\nAgama baru jarang menghapus yang lama. Kepercayaan kepada arwah leluhur dan kekuatan alam tetap hidup di bawah lapisan Hindu-Buddha, lalu Islam atau Kristen; hasilnya adalah sinkretisme dan kekayaan tradisi lokal yang khas di setiap daerah, dari upacara Bali sampai ritual kematian di pedalaman Kalimantan.\n\nKini negara melayani enam agama, yaitu Islam, Protestan, Katolik, Hindu, Buddha, dan Konghucu, dan sejak putusan Mahkamah Konstitusi tahun 2017 penghayat kepercayaan juga dapat dicantumkan pada kartu identitas. Halaman ini menelusuri jejak masing-masing secara kronologis, dengan menyebut bukti yang ada dan hal-hal yang masih diperdebatkan.',
  relatedCivIds: [
    'kutai-tarumanagara',
    'sriwijaya',
    'mataram-kuno',
    'kediri-singasari',
    'majapahit',
    'kesultanan-awal',
    'hindia-belanda',
    'republik-indonesia',
    'austronesia-nusantara',
  ],
  note:
    'Tahun kedatangan setiap agama masih diperdebatkan. Bukti tertua (prasasti, makam, catatan asing) hanyalah batas paling awal yang kita ketahui, bukan saat sebenarnya agama itu pertama kali hadir. Semua agama dan kepercayaan diperlakukan dengan hormat setara; uraian di sini bersifat sejarah, bukan penilaian terhadap kebenaran ajaran.',
  sections: [
    {
      title: 'Kepercayaan asli',
      intro:
        'Jauh sebelum agama-agama dunia tiba, penutur bahasa Austronesia di kepulauan ini sudah memiliki pandangan dunia yang kaya tentang leluhur, alam, dan kehidupan sesudah mati.',
      entries: [
        {
          title: 'Pemuliaan leluhur dan roh alam',
          when: 'sebelum awal Masehi',
          place: { name: 'Dataran tinggi Pasemah, Sumatra Selatan', lon: 103.25, lat: -4.03 },
          text:
            'Masyarakat Austronesia awal hidup dari bertani, melaut, dan berburu, dan memandang dunia dihuni oleh roh: roh leluhur, roh gunung, sungai, pohon besar, dan laut. Leluhur dipercaya terus menjaga keturunannya, sehingga mereka dihormati lewat sesaji, tarian, dan pesta.\n\nJejak keyakinan ini terlihat pada tradisi megalitik: menhir, dolmen, punden berundak, sarkofagus batu, dan arca batu seperti di Pasemah, Lore Lindu, Nias, atau Sumba. Batu-batu itu oleh para arkeolog dipahami sebagai sarana penghormatan arwah dan penanda status. Tradisi semacam ini tidak berhenti; di beberapa tempat ia masih dipraktikkan hingga kini.',
          facts: [
            ['Bukti', 'Situs megalitik, tradisi lisan, etnografi'],
            ['Pembawa', 'Penutur bahasa Austronesia'],
          ],
          civId: 'austronesia-nusantara',
        },
        {
          title: 'Kaharingan, Sunda Wiwitan, Marapu, Parmalim, Aluk Todolo',
          when: 'tradisi yang masih hidup',
          place: { name: 'Kalimantan Tengah (Kaharingan)', lon: 113.9, lat: -2.2 },
          text:
            'Banyak kepercayaan asli bertahan sampai sekarang. Kaharingan dianut orang Dayak di Kalimantan, dengan upacara tiwah untuk mengantar arwah ke alam leluhur. Sunda Wiwitan dipelihara antara lain oleh masyarakat Kanekes (Baduy) di Banten, dengan ketaatan pada pikukuh adat. Marapu di Sumba menghormati arwah leluhur yang bersemayam di rumah adat beratap menara tinggi.\n\nParmalim berakar pada tradisi Batak dan berpusat di Huta Tinggi, Toba, dengan pemujaan kepada Debata Mulajadi Nabolon. Aluk Todolo, "jalan leluhur" orang Toraja, mengatur upacara kematian dan kesuburan. Sebagian pengikut Kaharingan sejak 1980 menyatukan diri dalam Hindu, sebuah contoh betapa batas antarkategori agama sering dipengaruhi keadaan sosial-politik.',
          facts: [
            ['Kaharingan', 'Dayak, Kalimantan'],
            ['Sunda Wiwitan', 'Banten dan Jawa Barat'],
            ['Marapu', 'Sumba, Nusa Tenggara Timur'],
            ['Parmalim', 'Batak Toba, Sumatra Utara'],
            ['Aluk Todolo', 'Toraja, Sulawesi Selatan'],
          ],
          civId: 'austronesia-nusantara',
        },
        {
          title: 'Kejawen: laku batin orang Jawa',
          when: 'berkembang berabad-abad',
          place: { name: 'Yogyakarta dan Surakarta', lon: 110.37, lat: -7.8 },
          text:
            'Kejawen biasanya dipahami sebagai tradisi spiritual dan etika Jawa, bukan satu organisasi agama tunggal. Ia memadukan penghormatan leluhur, unsur Hindu-Buddha, dan tasawuf Islam: orang melakukan tirakat, laku prihatin, selamatan, dan merawat pusaka. Para penganutnya bisa sekaligus memeluk agama resmi mana pun, namun ada pula penghayat yang menyebut kepercayaannya sendiri.\n\nIstilah ini dipakai berbeda-beda oleh peneliti maupun pelakunya, sehingga uraian tentangnya perlu hati-hati dan menghindari generalisasi.',
          facts: [['Sifat', 'Tradisi spiritual dan etika, beragam bentuknya']],
        },
      ],
    },
    {
      title: 'Hindu dan Buddha',
      intro:
        'Sejak abad-abad awal Masehi, pelaut dan pedagang India membawa gagasan Hindu dan Buddha ke pelabuhan-pelabuhan Nusantara. Para penguasa setempat mengadopsinya secara selektif, dan banyak sejarawan menekankan peran aktif orang Nusantara sendiri.',
      entries: [
        {
          title: 'Yupa Kutai: bukti tertulis tertua',
          when: '±abad ke-4 hingga 5 M',
          year: 400,
          place: { name: 'Muara Kaman, Kutai, Kalimantan Timur', lon: 116.7, lat: -0.2 },
          text:
            'Tujuh tiang batu persembahan (yupa) ditemukan di Muara Kaman. Ditulis dalam aksara Pallawa dan bahasa Sanskerta, prasasti itu menyebut raja Mulawarman, putra Aswawarman, cucu Kudungga. Ia dipuji karena mempersembahkan dana besar berupa sapi kepada para brahmana.\n\nNama Kudungga tampak lokal, sedangkan nama keturunannya berbau Sanskerta. Para ahli membaca ini sebagai tanda bahwa pemimpin setempat mengadopsi tradisi Hindu dan melibatkan brahmana dalam upacara kerajaan. Tahunnya diperkirakan dari bentuk aksara.',
          facts: [
            ['Bukti', 'Tujuh prasasti yupa, aksara Pallawa'],
            ['Pembawa', 'Brahmana dan pedagang; juga pemimpin setempat yang mengadopsinya'],
          ],
          civId: 'kutai-tarumanagara',
        },
        {
          title: 'Tarumanagara dan jejak kaki Wisnu',
          when: 'abad ke-5 M',
          year: 450,
          place: { name: 'Ciaruteun, Bogor, Jawa Barat', lon: 106.69, lat: -6.53 },
          text:
            'Prasasti Ciaruteun memuat sepasang telapak kaki dan syair Sanskerta yang menyamakan telapak kaki Raja Purnawarman dengan kaki Wisnu. Prasasti lain, seperti Tugu dan Cidanghiang, menyebut penggalian kanal serta persembahan kepada brahmana.\n\nBukti ini menunjukkan Hindu aliran Wisnu hadir di lingkungan istana Jawa bagian barat, dengan raja yang menampilkan diri sejajar dewa pelindung.',
          facts: [
            ['Bukti', 'Prasasti Ciaruteun, Tugu, Cidanghiang'],
            ['Tokoh', 'Raja Purnawarman'],
          ],
          civId: 'kutai-tarumanagara',
        },
        {
          title: 'Holing, Ratu Sima, dan biksu peziarah',
          when: 'abad ke-7 M',
          year: 650,
          place: { name: 'Kawasan pantai utara Jawa Tengah (letak Holing diperdebatkan)', lon: 110.7, lat: -6.6 },
          text:
            'Catatan Tiongkok dari masa Dinasti Tang menyebut kerajaan Holing (sering dikaitkan dengan Kalingga) yang diperintah seorang ratu bernama Sima. Ia terkenal menegakkan hukum dengan tegas. Sumber yang sama menyebut bahwa pada pertengahan abad ke-7 seorang biksu Tiongkok, Hui-ning, tinggal di sana untuk menerjemahkan kitab Buddha bersama biksu setempat bernama Jnanabhadra.\n\nPara sejarawan berbeda pendapat mengenai letak Holing, tetapi catatan ini memperlihatkan bahwa pusat-pusat keagamaan Buddha sudah aktif di Jawa pada masa itu.',
          facts: [
            ['Bukti', 'Catatan Dinasti Tang'],
            ['Tokoh', 'Ratu Sima, Hui-ning, Jnanabhadra'],
          ],
        },
        {
          title: 'Sriwijaya: pusat belajar Buddha',
          when: '671 M dan sesudahnya',
          year: 671,
          place: { name: 'Palembang, Sumatra Selatan', lon: 104.76, lat: -2.99 },
          text:
            'Biksu Tiongkok I-tsing singgah di Sriwijaya pada 671 dalam perjalanan ke India, dan kemudian kembali untuk menyalin dan menerjemahkan kitab. Ia melaporkan lebih dari seribu biksu belajar di sana dan menganjurkan para peziarah belajar dulu di Sriwijaya sebelum menuju India.\n\nPrasasti Kedukan Bukit (683) dan Talang Tuwo (684) berbahasa Melayu Kuno dan bernafas Buddha. Kemudian, guru dari Suwarnadwipa bernama Dharmakirti dihormati oleh Atisa yang belajar kepadanya. Sriwijaya menjadi simpul jaringan Buddha yang menghubungkan India, Tiongkok, dan Asia Tenggara.',
          facts: [
            ['Bukti', 'Catatan I-tsing; prasasti Kedukan Bukit dan Talang Tuwo'],
            ['Pembawa', 'Biksu, pedagang, dan penguasa Sriwijaya'],
          ],
          civId: 'sriwijaya',
        },
        {
          title: 'Sailendra dan Borobudur',
          when: 'abad ke-8 hingga 9 M',
          year: 800,
          place: { name: 'Borobudur, Magelang', lon: 110.2, lat: -7.61 },
          text:
            'Di dataran Kedu, dinasti Sailendra yang menganut Buddha Mahayana membangun Candi Kalasan (778, untuk Dewi Tara) dan kemudian Borobudur. Relief-reliefnya, sekitar dua ribu lima ratus panel, menceritakan kehidupan Buddha, kisah Jataka, dan perjalanan Sudhana mencari kebijaksanaan.\n\nBorobudur dibangun bertahap oleh banyak pekerja dan pemahat, dan umumnya diperkirakan selesai sekitar awal abad ke-9. Candi ini menjadi salah satu monumen Buddha terbesar di dunia dan tetap menjadi tempat ziarah Waisak hingga kini.',
          facts: [
            ['Bukti', 'Candi Borobudur dan Kalasan; Prasasti Kalasan (778)'],
            ['Pembawa', 'Dinasti Sailendra'],
          ],
          civId: 'mataram-kuno',
        },
        {
          title: 'Sanjaya, Prambanan, dan Siwa',
          when: 'abad ke-8 hingga 9 M',
          year: 856,
          place: { name: 'Prambanan, Klaten', lon: 110.49, lat: -7.75 },
          text:
            'Prasasti Canggal (732) menyebut Raja Sanjaya mendirikan lingga untuk Siwa. Dinasti ini beraliran Siwa, dan pada pertengahan abad ke-9 kompleks Prambanan dibangun, dengan candi Siwa yang menjulang di tengah dan candi Brahma serta Wisnu di sisinya. Prasasti Siwagrha (856) sering dikaitkan dengan pentahbisan kompleks ini.\n\nBuddha dan Siwa tidak selalu bersaing; candi-candi Buddha seperti Sewu dan Plaosan berdiri hanya beberapa kilometer dari sini, memperlihatkan hidup berdampingan dua tradisi di lingkungan istana yang sama atau berkerabat.',
          facts: [
            ['Bukti', 'Prasasti Canggal, Prasasti Siwagrha, kompleks Prambanan'],
            ['Pembawa', 'Dinasti Sanjaya'],
          ],
          civId: 'mataram-kuno',
        },
        {
          title: 'Majapahit: Siwa-Buddha dan Bhinneka Tunggal Ika',
          when: 'abad ke-14 M',
          year: 1365,
          place: { name: 'Trowulan, Mojokerto', lon: 112.38, lat: -7.56 },
          text:
            'Pada masa Majapahit, Siwa dan Buddha dipandang saling berdekatan. Kakawin Nagarakertagama (1365) menyebut pejabat urusan agama Siwa dan Buddha, dan kakawin Sutasoma karya Mpu Tantular memuat baris "bhinneka tunggal ika tan hana dharma mangrwa", yang kini menjadi semboyan negara Indonesia.\n\nPara raja dicandikan sebagai dewa dalam rupa Siwa dan Buddha sekaligus. Rakyat biasa tetap menjalankan pemujaan leluhur, dewa-dewa lokal, dan pertapaan di gunung, sehingga lapisan keyakinan makin bertumpuk.',
          facts: [
            ['Bukti', 'Nagarakertagama, Sutasoma, candi-candi Majapahit'],
            ['Ciri', 'Sinkretisme Siwa-Buddha'],
          ],
          civId: 'majapahit',
        },
        {
          title: 'Bali dan Agama Hindu Dharma',
          when: 'abad ke-15 hingga 16 M',
          place: { name: 'Pura Besakih, Karangasem, Bali', lon: 115.45, lat: -8.37 },
          text:
            'Pengaruh Hindu telah hadir di Bali sejak sebelum Majapahit, namun kedatangan bangsawan, pendeta, dan seniman dari Jawa setelah melemahnya Majapahit memperkuat tradisi itu. Menurut tradisi, pendeta Dang Hyang Nirartha termasuk tokoh yang memengaruhi ritual dan sastra Bali pada abad ke-16.\n\nDi Bali, ajaran Hindu berpadu dengan pemujaan leluhur, desa adat, dan sistem subak, menghasilkan perayaan seperti Galungan dan Nyepi serta seni upacara yang dikenal dunia. Rumpun tradisi ini kemudian dikenal sebagai Agama Hindu Dharma.',
          facts: [
            ['Pembawa', 'Pendeta dan bangsawan Jawa (Majapahit)'],
            ['Perayaan', 'Galungan, Nyepi'],
          ],
          civId: 'majapahit',
        },
        {
          title: 'Hindu dan Buddha dalam Indonesia merdeka',
          when: 'abad ke-20 M',
          year: 1962,
          place: { name: 'Jakarta', lon: 106.83, lat: -6.18 },
          text:
            'Di awal kemerdekaan, umat Hindu Bali memperjuangkan agar tradisi mereka diakui sebagai agama, dan sekitar awal 1960-an Hindu Dharma diakui dalam administrasi negara; lembaga Parisada Dharma Hindu dibentuk pada 1959. Umat Buddha menghidupkan kembali organisasi, antara lain Perbuddhi (1955) dan kemudian Walubi (1979), serta perayaan Waisak di Borobudur.\n\nAgama Hindu belakangan juga menaungi sejumlah komunitas yang dulu disebut kepercayaan lokal, seperti Kaharingan.',
          facts: [['Lembaga', 'Parisada Hindu Dharma (1959), Perbuddhi (1955), Walubi (1979)']],
          civId: 'republik-indonesia',
        },
      ],
    },
    {
      title: 'Islam',
      intro:
        'Ringkasan berikut hanya gambaran singkat; kisah lengkapnya dibahas pada topik terpisah "Islam Masuk Nusantara".',
      entries: [
        {
          title: 'Jejak paling awal dan jaringan pedagang',
          when: 'abad ke-11 hingga 13 M',
          year: 1082,
          place: { name: 'Leran, Gresik, Jawa Timur', lon: 112.62, lat: -7.15 },
          text:
            'Batu nisan Fatimah binti Maimun di Leran, Gresik, bertarikh 475 H (1082 M) dan sering disebut sebagai salah satu bukti Islam tertua di Jawa, meski sejarawan masih memperdebatkan apakah ia berasal dari komunitas pedagang asing atau penduduk setempat. Pelaut Arab dan Persia telah lama berlayar ke Nusantara, dan komunitas pedagang Muslim tumbuh di bandar-bandar pesisir.\n\nIslam bertahap menyebar lewat perdagangan, perkawinan, dan tasawuf.',
          facts: [['Bukti', 'Nisan Leran (1082), catatan pelancong']],
          civId: 'kesultanan-awal',
        },
        {
          title: 'Samudra Pasai',
          when: '1297 M',
          year: 1297,
          place: { name: 'Samudra Pasai, Aceh Utara', lon: 97.2, lat: 5.1 },
          text:
            'Nisan Sultan Malik al-Saleh yang wafat pada 1297 menjadi bukti kuat adanya kerajaan Islam di Pasai. Pelancong Ibnu Battuta, yang singgah sekitar 1345, menggambarkan Pasai sebagai kerajaan yang ramai dan penguasanya gemar berdiskusi dengan ulama.\n\nPasai menjadi pusat perdagangan sekaligus pusat pembelajaran Islam di Asia Tenggara dan memengaruhi Malaka serta bandar-bandar lain.',
          facts: [['Bukti', 'Nisan Malik al-Saleh (1297), Hikayat Raja-raja Pasai, Ibnu Battuta']],
          civId: 'kesultanan-awal',
        },
        {
          title: 'Walisongo dan Demak',
          when: 'abad ke-15 hingga 16 M',
          place: { name: 'Demak, Jawa Tengah', lon: 110.64, lat: -6.89 },
          text:
            'Menurut tradisi dan babad, sembilan wali (Walisongo) menyebarkan Islam di pesisir Jawa dengan pendekatan budaya: wayang, gamelan, dan tembang disesuaikan dengan pesan Islam. Para sejarawan mengingatkan bahwa kisah mereka bercampur legenda, tetapi peran para guru dan pesantren pesisir sangat nyata.\n\nKesultanan Demak, yang berkembang pada awal abad ke-16, menjadi kekuatan Islam pertama di Jawa.',
          facts: [['Pembawa', 'Pedagang, ulama, dan para wali']],
          civId: 'kesultanan-awal',
        },
        {
          title: 'Sultanat dan persebaran lanjut',
          when: 'abad ke-15 hingga 17 M',
          place: { name: 'Ternate, Maluku Utara', lon: 127.38, lat: 0.79 },
          text:
            'Dari Aceh, Banten, Cirebon, Ternate, Tidore, hingga Gowa-Tallo dan Banjar, para raja memeluk Islam dan mendorong persebarannya. Islam tumbuh lewat jaringan bandar rempah dan pengajaran ulama. Di berbagai tempat agama itu berpadu dengan adat setempat, misalnya dalam tradisi maulid dan sekaten.',
          civId: 'kesultanan-awal',
        },
      ],
    },
    {
      title: 'Kristen',
      intro:
        'Kekristenan hadir lewat dua gelombang utama, yaitu misi Katolik Portugis pada abad ke-16 dan misi Protestan yang meluas pada abad ke-19, dengan tokoh lokal yang sama pentingnya.',
      entries: [
        {
          title: 'Komunitas Nestorian di Barus? Sebuah kemungkinan',
          when: 'abad ke-7 hingga 10 M (tidak pasti)',
          place: { name: 'Barus (Fansur), Tapanuli Tengah', lon: 98.4, lat: 2.0 },
          text:
            'Beberapa sumber Arab yang lebih belakangan menyebut adanya gereja atau komunitas Nasrani di Fansur (Barus), pelabuhan kapur barus yang terkenal. Sebagian peneliti mengaitkannya dengan Kristen Nestorian dari Asia Barat, tetapi bukti arkeologinya sangat lemah dan banyak ahli berhati-hati.\n\nKarena itu, ini lebih tepat dianggap kemungkinan yang masih diperdebatkan, bukan fakta mapan.',
          facts: [['Status', 'Diperdebatkan; bukti terbatas']],
        },
        {
          title: 'Misi Katolik di Maluku: Fransiskus Xaverius',
          when: '1546 hingga 1547 M',
          year: 1546,
          place: { name: 'Ambon, Maluku', lon: 128.18, lat: -3.7 },
          text:
            'Setelah Portugis menetap di Maluku untuk rempah, imam Yesuit Fransiskus Xaverius tiba di Ambon pada 1546 dan melanjutkan ke Ternate serta sekitarnya pada 1546-1547. Ia membaptis penduduk dan mengajar katekismus.\n\nBeberapa komunitas, terutama di Ambon dan sekitarnya, menjadi Katolik, meski misi itu sangat terbatas oleh persaingan politik dan ketegangan dengan penguasa setempat.',
          facts: [['Pembawa', 'Yesuit dan pedagang Portugis']],
          civId: 'kolonialisme-eropa',
        },
        {
          title: 'Flores dan Timor: Larantuka',
          when: 'abad ke-16 hingga 17 M',
          place: { name: 'Larantuka, Flores Timur', lon: 122.99, lat: -8.35 },
          text:
            'Para imam Dominikan menjalankan misi di Solor, Flores, dan Timor pada abad ke-16. Di Larantuka, keturunan Portugis dan penduduk setempat (disebut Topasses) mempertahankan iman Katolik bahkan saat misi kekurangan imam. Kelompok awam, seperti Confreria Reinha Rosari, merawat devosi dan tradisi.\n\nSampai hari ini, Semana Santa (Pekan Suci) di Larantuka menarik peziarah dengan prosesi Jumat Agung yang khas, dengan patung Tuan Ma dan Tuan Ana.',
          facts: [
            ['Pembawa', 'Dominikan, Portugis, tokoh awam setempat'],
            ['Tradisi hidup', 'Semana Santa Larantuka'],
          ],
          civId: 'kolonialisme-eropa',
        },
        {
          title: 'Masa VOC: Protestan di Ambon',
          when: 'abad ke-17 M',
          year: 1605,
          place: { name: 'Ambon, Maluku', lon: 128.18, lat: -3.7 },
          text:
            'VOC merebut benteng Portugis di Ambon pada 1605 dan menetapkan Gereja Reformasi (Calvinis) sebagai gereja resmi. Pendeta VOC dan guru jemaat melayani penduduk, dan banyak orang Katolik berpindah. Dari sinilah jemaat Protestan Maluku berkembang, kelak menjadi Gereja Protestan Maluku.\n\nDi Batavia dan kota-kota lain, VOC membatasi agama lain dan menekankan gereja negara, meski pelayanan di wilayah pedalaman minim.',
          facts: [['Pembawa', 'VOC, pendeta dan guru jemaat']],
          civId: 'hindia-belanda',
        },
        {
          title: 'Minahasa dan awal zending abad ke-19',
          when: 'abad ke-19 M',
          place: { name: 'Tomohon, Minahasa, Sulawesi Utara', lon: 124.84, lat: 1.32 },
          text:
            'Pada 1820-an dan 1830-an, para utusan Lembaga Injil Belanda, termasuk Johann Riedel dan Johann Schwarz, bekerja di Minahasa. Mereka mendirikan sekolah, menerjemahkan Alkitab ke bahasa setempat, dan jemaat tumbuh cepat. Hasilnya, Minahasa kemudian menjadi salah satu daerah dengan penduduk Kristen terbanyak di Sulawesi.',
          facts: [['Pembawa', 'Lembaga zending Belanda (NZG)']],
          civId: 'hindia-belanda',
        },
        {
          title: 'Mansinam, Papua: 5 Februari 1855',
          when: '5 Februari 1855',
          year: 1855,
          place: { name: 'Pulau Mansinam, Manokwari', lon: 134.08, lat: -0.86 },
          text:
            'Dua misionaris Jerman, Carl Ottow dan Johann Geissler, mendarat di Pulau Mansinam pada 5 Februari 1855 dan berdoa memulai pekerjaan mereka. Hingga kini tanggal itu dirayakan oleh umat Kristen Papua sebagai hari masuknya Injil.\n\nMisi bergerak lambat dan penuh kesulitan, seperti penyakit dan hambatan bahasa. Peran guru-guru Injil pribumi, yang membawa ajaran ke pedalaman, sangat menentukan.',
          facts: [['Pembawa', 'Carl Ottow dan Johann Geissler']],
          civId: 'hindia-belanda',
        },
        {
          title: 'Nommensen dan orang Batak',
          when: '1862 M',
          year: 1862,
          place: { name: 'Silindung, Tarutung, Tapanuli Utara', lon: 98.97, lat: 2.02 },
          text:
            'Ludwig Ingwer Nommensen, misionaris Jerman dari Rheinische Mission, tiba di tanah Batak pada 1862 dan menetap di lembah Silindung. Ia belajar bahasa dan adat, menerjemahkan Perjanjian Baru ke bahasa Batak, dan mendirikan sekolah. Dari upaya ini tumbuh Huria Kristen Batak Protestan (HKBP), kini salah satu gereja Protestan terbesar di Indonesia.\n\nPara penginjil Batak sendiri berperan besar dalam persebaran selanjutnya, dan gereja Batak mengembangkan identitas dengan memakai adat setempat.',
          facts: [
            ['Pembawa', 'L. I. Nommensen (Rheinische Mission)'],
            ['Gereja', 'HKBP'],
          ],
          civId: 'hindia-belanda',
        },
        {
          title: 'Nias dan Toraja',
          when: 'abad ke-19 hingga 20 M',
          place: { name: 'Rantepao, Toraja Utara', lon: 119.9, lat: -2.97 },
          text:
            'Di Nias, misi Jerman dimulai pada 1860-an, dan pada awal abad ke-20 terjadi pertobatan massal yang oleh banyak orang Nias dikenang sebagai kebangunan rohani besar (sekitar 1916). Di Toraja, misionaris Gereformeerde dari Belanda, dimulai oleh A. A. van de Loosdrecht pada 1913, menghadapi ketegangan dengan Aluk Todolo, dan jemaat baru bertumbuh besar dalam dekade-dekade berikutnya.\n\nDi kedua tempat itu, orang Kristen setempat menafsirkan ajaran dalam kerangka adat, seperti rumah tongkonan dan upacara adat.',
          facts: [['Pembawa', 'Misi Jerman (Nias), zending Belanda (Toraja)']],
          civId: 'hindia-belanda',
        },
        {
          title: 'Kebangkitan Katolik: Van Lith di Muntilan',
          when: '1890-an M',
          year: 1896,
          place: { name: 'Muntilan, Magelang', lon: 110.28, lat: -7.6 },
          text:
            'Romo Franciscus van Lith, Yesuit Belanda, membuka sekolah di Muntilan pada 1890-an, kelak dikenal sebagai Kolese Xaverius. Ia memadukan pendekatan hormat terhadap budaya Jawa dengan pendidikan. Pada 1904, sekitar 170 orang Jawa dibaptis di Sendangsono, tonggak bagi Gereja Katolik di Jawa.\n\nDari sekolah ini lahir guru dan tokoh awam, dan uskup pribumi pertama, Albertus Soegijapranata, juga berasal dari lingkungan ini.',
          facts: [['Tokoh', 'F. van Lith, A. Soegijapranata']],
          civId: 'hindia-belanda',
        },
        {
          title: 'Dua agama terpisah dalam negara merdeka',
          when: 'sesudah 1945',
          place: { name: 'Jakarta', lon: 106.83, lat: -6.18 },
          text:
            'Dalam Indonesia merdeka, umat Protestan dan Katolik dilayani sebagai dua agama yang terpisah oleh pemerintah, masing-masing dengan lembaga dan bimbingan masyarakat sendiri. Gereja-gereja yang berakar dari berbagai misi bersatu dalam wadah seperti Dewan Gereja-gereja di Indonesia (1950) dan Konferensi Waligereja Indonesia.',
          facts: [['Wadah', 'PGI (1950), KWI']],
          civId: 'republik-indonesia',
        },
      ],
    },
    {
      title: 'Konghucu dan tradisi Tionghoa',
      intro:
        'Pedagang Tionghoa singgah dan menetap di bandar-bandar Nusantara selama berabad-abad, membawa serta tradisi keagamaan mereka.',
      entries: [
        {
          title: 'Klenteng pertama dan Sam Po Kong',
          when: 'abad ke-15 M dan sesudahnya',
          place: { name: 'Sam Po Kong, Semarang', lon: 110.4, lat: -6.998 },
          text:
            'Pedagang dan pelaut Tionghoa mendirikan tempat ibadah di pelabuhan-pelabuhan Nusantara. Di Semarang, klenteng Sam Po Kong dihubungkan dengan laksamana Zheng He (Cheng Ho) yang memimpin armada ke Samudra Hindia pada awal abad ke-15. Sejarawan membedakan antara kisah tradisi dan bukti, tetapi tempat itu kini menjadi ziarah lintas kepercayaan.\n\nKlenteng umumnya memuja dewa-dewi dari Tri Dharma: ajaran Konghucu, Buddha, dan Tao, ditambah leluhur serta dewa pelindung pelaut seperti Mazu.',
          facts: [['Tradisi', 'Tri Dharma (Konghucu, Buddha, Tao)']],
        },
        {
          title: 'Kim Tek Ie di Batavia',
          when: '1650 M',
          year: 1650,
          place: { name: 'Kim Tek Ie (Jin De Yuan), Glodok, Jakarta', lon: 106.81, lat: -6.135 },
          text:
            'Klenteng Kim Tek Ie (Jin De Yuan) di Glodok dibangun sekitar 1650 dan menjadi salah satu klenteng tertua di Jakarta. Komunitas Tionghoa di Batavia, di bawah pemimpin yang disebut kapiten, memeliharanya sebagai tempat ibadah, kegiatan sosial, dan upacara leluhur.\n\nKlenteng seperti ini menjadi pusat kehidupan komunitas, dengan perayaan Imlek dan Cap Go Meh.',
          facts: [['Bukti', 'Klenteng dan prasasti']],
          civId: 'hindia-belanda',
        },
        {
          title: 'Pembatasan masa Orde Baru',
          when: '1967 M',
          year: 1967,
          place: { name: 'Jakarta', lon: 106.83, lat: -6.18 },
          text:
            'Instruksi Presiden No. 14/1967 membatasi ekspresi agama, kepercayaan, dan adat Tionghoa di ruang publik, termasuk perayaan Imlek. Banyak klenteng bertahan dengan mencatatkan diri sebagai vihara Buddha, dan umat Konghucu mengalami kesulitan dalam administrasi kependudukan.',
          facts: [['Aturan', 'Inpres 14/1967']],
          civId: 'republik-indonesia',
        },
        {
          title: 'Pemulihan: Keppres 6/2000 dan Imlek',
          when: '2000 hingga 2003 M',
          year: 2000,
          place: { name: 'Jakarta', lon: 106.83, lat: -6.18 },
          text:
            'Presiden Abdurrahman Wahid (Gus Dur) mencabut Inpres 14/1967 lewat Keppres No. 6/2000, sehingga perayaan agama dan adat Tionghoa boleh dilakukan secara terbuka. Konghucu kembali diakui sebagai agama yang dilayani negara, dan Imlek ditetapkan sebagai hari libur nasional mulai 2003 pada masa Presiden Megawati.',
          facts: [['Aturan', 'Keppres 6/2000; Imlek libur nasional sejak 2003']],
          civId: 'republik-indonesia',
        },
        {
          title: 'Penghayat kepercayaan diakui di KTP',
          when: '2017 M',
          year: 2017,
          place: { name: 'Mahkamah Konstitusi, Jakarta', lon: 106.82, lat: -6.176 },
          text:
            'Pada 7 November 2017, Mahkamah Konstitusi memutuskan bahwa penghayat kepercayaan berhak dicantumkan pada kolom agama dalam kartu tanda penduduk dan data kependudukan. Putusan ini diajukan oleh sejumlah penghayat, antara lain dari Marapu, Parmalim, Ugamo Bangsa Batak, dan Sapto Darmo, dan dipandang sebagai langkah penting bagi pengakuan tradisi asli yang telah ada jauh sebelum agama-agama dunia tiba.',
          facts: [['Putusan', 'MK No. 97/PUU-XIV/2016']],
          civId: 'republik-indonesia',
        },
      ],
    },
  ],
  sources: [
    { title: 'A History of Modern Indonesia since c.1200', author: 'M. C. Ricklefs', year: 2008, kind: 'sekunder' },
    { title: 'The Indianized States of Southeast Asia', author: 'George Coedès', year: 1968, kind: 'sekunder' },
    { title: 'A History of Christianity in Indonesia', author: 'Jan S. Aritonang dan Karel Steenbrink (eds.)', year: 2008, kind: 'sekunder' },
    { title: 'Chinese Indonesians', author: 'Leo Suryadinata', kind: 'sekunder' },
    { title: 'Sejarah Nasional Indonesia, jilid II', author: 'Marwati Djoened Poesponegoro dan Nugroho Notosusanto', year: 2008, kind: 'sekunder' },
    { title: 'Prasasti Yupa Kutai, Ciaruteun, Kedukan Bukit, dan Canggal', kind: 'prasasti' },
    { title: 'Putusan Mahkamah Konstitusi No. 97/PUU-XIV/2016', author: 'Mahkamah Konstitusi RI', year: 2017, kind: 'primer' },
  ],
};
