import { ev, type ChronicleBook } from './chronicle';

/** Kronik periode peradaban modern (urutan = indeks `territories`). */
export const chroniclesModern: ChronicleBook = {
  'mughal-india': [
    {
      story:
        'Para panglima Turki dari Afganistan mendirikan Kesultanan Delhi, yang diperintah lima dinasti berturut-turut. Kesultanan ini menahan serangan Mongol dan membawa Islam serta budaya Persia ke India utara, sementara kerajaan-kerajaan seperti Vijayanagara dan Bahmani berkembang di selatan.',
      chronicle: [
        ev(1206, 'Qutb ud-Din Aibak', 'Bekas budak Muhammad Ghuri mendirikan Dinasti Mamluk; Qutb Minar dibangun.'),
        ev(1236, 'Razia Sultana', 'Satu-satunya perempuan yang memerintah Delhi.'),
        ev(1296, 'Alauddin Khalji', 'Menahan serangan Mongol dan menaklukkan Gujarat serta Dekkan.'),
        ev(1327, 'Ibu kota ke Daulatabad', 'Muhammad bin Tughlaq memindahkan penduduk Delhi, lalu membatalkannya.'),
        ev(1336, 'Vijayanagara', 'Kerajaan Hindu besar berdiri di India selatan.'),
        ev(1347, 'Kesultanan Bahmani', 'Dekkan lepas dari Delhi.'),
        ev(1398, 'Timur menjarah Delhi', 'Kota dihancurkan dan kesultanan tak pernah pulih sepenuhnya.'),
        ev(1451, 'Dinasti Lodi', 'Dinasti Afgan terakhir Kesultanan Delhi.'),
        ev(1526, 'Pertempuran Panipat I', 'Babur mengalahkan Ibrahim Lodi dengan meriam dan senapan.'),
      ],
    },
    {
      story:
        'Babur, keturunan Timur dan Genghis Khan, mendirikan dinasti Mughal. Akbar menyatukan India utara dengan kebijakan toleransi dan administrasi yang rapi; para penerusnya membangun Taj Mahal dan Benteng Merah. India Mughal menghasilkan sekitar seperempat produksi dunia, tetapi perang panjang Aurangzeb di Dekkan menguras kekaisaran.',
      chronicle: [
        ev(1526, 'Babur di Delhi', 'Dinasti Mughal berdiri.'),
        ev(1540, 'Sher Shah Suri', 'Mengusir Humayun dan membangun jalan Grand Trunk; Humayun kembali pada 1555.'),
        ev(1556, 'Akbar dan Panipat II', 'Akbar naik takhta pada usia 13 tahun dan mengalahkan Hemu.'),
        ev(1582, 'Din-i Ilahi', 'Akbar mempromosikan jalan spiritual yang memadukan berbagai agama.', true),
        ev(1600, 'East India Company', 'Inggris mendapat piagam dagang dengan Asia.'),
        ev(1615, 'Thomas Roe di istana Jahangir', 'Duta Inggris memperoleh izin dagang.'),
        ev(1632, 'Taj Mahal', 'Shah Jahan membangun makam untuk Mumtaz Mahal (rampung ±1653).'),
        ev(1658, 'Aurangzeb', 'Merebut takhta dan memperluas kekaisaran hingga India selatan.'),
        ev(1674, 'Shivaji', 'Dinobatkan sebagai raja Maratha yang menantang Mughal.'),
        ev(1707, 'Aurangzeb wafat', 'Kekaisaran mulai terpecah.'),
      ],
    },
    {
      story:
        'Setelah Aurangzeb, para gubernur Mughal berdiri sendiri, Maratha menguasai India tengah, dan Persia serta Afgan menjarah Delhi. East India Company memanfaatkan kekacauan ini hingga kaisar Mughal tinggal raja boneka di Delhi. Pemberontakan 1857 menjadi babak terakhir dinasti.',
      chronicle: [
        ev(1707, 'Perebutan takhta', 'Banyak kaisar silih berganti dalam waktu singkat.'),
        ev(1739, 'Nadir Shah menjarah Delhi', 'Takhta Merak dan berlian Koh-i-Noor dibawa ke Persia.'),
        ev(1757, 'Pertempuran Plassey', 'Robert Clive menguasai Bengal untuk East India Company.'),
        ev(1761, 'Pertempuran Panipat III', 'Ahmad Shah Durrani mengalahkan Maratha.'),
        ev(1765, 'Hak diwani Bengal', 'Kaisar Shah Alam II memberi Company hak memungut pajak.'),
        ev(1803, 'Inggris masuk Delhi', 'Kaisar Mughal berada di bawah perlindungan Company.'),
        ev(1857, 'Pemberontakan 1857', 'Bahadur Shah II dijadikan simbol; ia dibuang ke Rangoon (1858).'),
      ],
    },
  ],
  'inggris-raya': [
    {
      story:
        'Pada era Victoria, Britania menjadi kekuatan industri dan angkatan laut terkuat dunia. Kekaisarannya meliputi India, Kanada, Australia, sebagian besar Afrika, dan banyak pelabuhan Asia, sehingga disebut "kekaisaran yang mataharinya tak pernah terbenam". Dua perang dunia menguras kekuatannya.',
      chronicle: [
        ev(1851, 'Pameran Besar', 'Crystal Palace di London memamerkan keunggulan industri Britania.'),
        ev(1857, 'Pemberontakan India', 'Tahun berikutnya Mahkota mengambil alih pemerintahan India dari East India Company.'),
        ev(1867, 'Konfederasi Kanada', 'Dominion pertama yang berpemerintahan sendiri.'),
        ev(1875, 'Saham Terusan Suez', 'Britania membeli saham Mesir di terusan.'),
        ev(1877, 'Maharani India', 'Ratu Victoria memakai gelar Empress of India.'),
        ev(1885, 'Rel Canadian Pacific', 'Menghubungkan pantai Atlantik dan Pasifik Kanada.'),
        ev(1899, 'Perang Boer', 'Perang mahal di Afrika Selatan yang memakai kamp konsentrasi.'),
        ev(1914, 'Perang Dunia I', 'Pasukan dari seluruh kekaisaran ikut bertempur.'),
        ev(1921, 'Perjanjian Anglo-Irlandia', 'Negara Bebas Irlandia berdiri.'),
        ev(1922, 'Puncak luas wilayah', 'Mencakup sekitar seperempat daratan dan penduduk dunia.'),
        ev(1931, 'Statuta Westminster', 'Dominion menjadi setara dalam Persemakmuran.'),
        ev(1940, 'Pertempuran Britania', 'Angkatan udara menahan serangan Jerman.'),
        ev(1945, 'Akhir Perang Dunia II', 'Menang tetapi bangkrut; India merdeka dua tahun kemudian.'),
      ],
    },
  ],
  'jepang-modern': [
    {
      story:
        'Restorasi Meiji mengubah Jepang feodal menjadi negara industri dalam satu generasi. Jepang meniru negara Barat dalam hal tentara, rel kereta, dan konstitusi, lalu juga dalam membangun koloni: Taiwan, Korea, dan Manchuria. Pada 1930-an militer menguasai politik dan menyeret Jepang ke perang besar di Tiongkok.',
      chronicle: [
        ev(1868, 'Restorasi Meiji', 'Keshogunan Tokugawa berakhir; Edo menjadi Tokyo.'),
        ev(1871, 'Han dihapus', 'Wilayah daimyo diganti prefektur.'),
        ev(1872, 'Rel kereta pertama', 'Jalur Tokyo–Yokohama dibuka.'),
        ev(1877, 'Pemberontakan Satsuma', 'Saigō Takamori dan kaum samurai dikalahkan tentara wajib militer.'),
        ev(1889, 'Konstitusi Meiji', 'Konstitusi modern pertama di Asia.'),
        ev(1895, 'Taiwan direbut', 'Hasil kemenangan atas Qing.'),
        ev(1905, 'Pertempuran Tsushima', 'Jepang mengalahkan Rusia, negara Asia pertama yang mengalahkan kekuatan Eropa di era modern.'),
        ev(1910, 'Korea dianeksasi', 'Pemerintahan kolonial hingga 1945.'),
        ev(1923, 'Gempa Besar Kantō', 'Lebih dari 100.000 orang tewas di Tokyo dan Yokohama.'),
        ev(1931, 'Insiden Mukden', 'Tentara Kwantung merebut Manchuria.'),
        ev(1933, 'Keluar dari Liga Bangsa-Bangsa', 'Setelah dikecam atas Manchuria.'),
        ev(1937, 'Insiden Jembatan Marco Polo', 'Awal perang penuh melawan Tiongkok.'),
      ],
    },
    {
      story:
        'Perang di Tiongkok meluas menjadi Perang Pasifik ketika Jepang mengincar minyak dan karet Asia Tenggara, termasuk Hindia Belanda. Dalam enam bulan Jepang menguasai wilayah dari Burma sampai Pasifik tengah, tetapi kekalahan di Midway berbalik menjadi mundur panjang yang berakhir dengan bom atom dan penyerahan diri.',
      chronicle: [
        ev(1937, 'Pembantaian Nanjing', 'Puluhan hingga ratusan ribu warga sipil dan tawanan dibunuh.'),
        ev(1940, 'Pakta Tripartit', 'Bersekutu dengan Jerman dan Italia; pasukan masuk Indochina utara.'),
        ev(1941, 'Pearl Harbor', 'Serangan 7 Desember memulai perang dengan Amerika Serikat dan Inggris.'),
        ev(1942, 'Asia Tenggara dikuasai', 'Singapura jatuh (Februari), Hindia Belanda menyerah (Maret); kalah di Midway (Juni).'),
        ev(1943, 'Guadalcanal', 'Jepang mundur dari Kepulauan Solomon.'),
        ev(1944, 'Saipan dan Leyte', 'Kekalahan laut terbesar; kota-kota Jepang dalam jangkauan bomber.'),
        ev(1945, 'Hiroshima, Nagasaki, dan penyerahan', 'Kaisar Hirohito mengumumkan penyerahan pada 15 Agustus.'),
      ],
    },
  ],
  'rusia-soviet': [
    {
      story:
        'Peter Agung menjadikan Rusia kekaisaran bergaya Eropa dengan ibu kota baru di Saint Petersburg. Para penerusnya meluaskan wilayah ke Laut Hitam, Polandia, Kaukasus, Asia Tengah, dan Alaska. Namun perbudakan petani dan kekuasaan tsar yang mutlak menumpuk ketegangan yang meledak dalam revolusi.',
      chronicle: [
        ev(1721, 'Peter Agung menjadi kaisar', 'Setelah menang atas Swedia dalam Perjanjian Nystad.'),
        ev(1762, 'Katarina Agung', 'Memperluas wilayah dan mendukung Pencerahan.'),
        ev(1773, 'Pemberontakan Pugachev', 'Pemberontakan petani dan Kozak terbesar.'),
        ev(1783, 'Krimea dianeksasi', 'Rusia menjadi kekuatan Laut Hitam.'),
        ev(1812, 'Invasi Napoleon', 'Moskow terbakar; Grande Armée hancur dalam perjalanan pulang.'),
        ev(1825, 'Pemberontakan Desembris', 'Perwira liberal menuntut konstitusi dan ditumpas.'),
        ev(1853, 'Perang Krimea', 'Kekalahan dari Inggris, Prancis, dan Utsmaniyah.'),
        ev(1861, 'Emansipasi petani', 'Aleksander II menghapus perhambaan.'),
        ev(1867, 'Alaska dijual', 'Kepada Amerika Serikat seharga 7,2 juta dolar.'),
        ev(1891, 'Rel Trans-Siberia', 'Pembangunan jalur Moskow–Vladivostok dimulai.'),
        ev(1905, 'Revolusi 1905', 'Kalah dari Jepang dan diguncang pemogokan; Duma dibentuk.'),
        ev(1914, 'Perang Dunia I', 'Kekalahan besar melawan Jerman.'),
        ev(1917, 'Revolusi Februari dan Oktober', 'Tsar turun takhta; Bolshevik merebut kekuasaan.'),
      ],
    },
    {
      story:
        'Bolshevik memenangi perang saudara dan mendirikan Uni Soviet. Di bawah Stalin, negara ini diindustrialisasi dengan paksa, dengan korban jutaan jiwa akibat kelaparan dan teror. Uni Soviet menanggung korban terbesar dalam mengalahkan Jerman, lalu bersaing dengan Amerika Serikat dalam Perang Dingin, sampai ekonomi yang stagnan dan reformasi Gorbachev berujung pembubaran.',
      chronicle: [
        ev(1922, 'Uni Soviet berdiri', 'Rusia, Ukraina, Belarus, dan Transkaukasia bergabung.'),
        ev(1928, 'Rencana Lima Tahun', 'Industrialisasi kilat dan kolektivisasi pertanian.'),
        ev(1932, 'Kelaparan besar', 'Jutaan orang tewas, terutama di Ukraina (Holodomor) dan Kazakhstan.'),
        ev(1937, 'Teror Besar', 'Ratusan ribu orang dieksekusi dalam pembersihan Stalin.'),
        ev(1941, 'Operasi Barbarossa', 'Jerman menyerbu Uni Soviet.'),
        ev(1943, 'Stalingrad', 'Titik balik Perang Dunia II di Eropa.'),
        ev(1945, 'Berlin direbut', 'Sekitar 27 juta warga Soviet tewas dalam perang.'),
        ev(1949, 'Bom atom Soviet', 'Perlombaan senjata nuklir dimulai.'),
        ev(1957, 'Sputnik', 'Satelit buatan pertama di orbit.'),
        ev(1961, 'Yuri Gagarin', 'Manusia pertama di luar angkasa.'),
        ev(1962, 'Krisis Rudal Kuba', 'Dunia di ambang perang nuklir.'),
        ev(1979, 'Invasi Afganistan', 'Perang sepuluh tahun yang menguras Soviet.'),
        ev(1986, 'Chernobyl', 'Bencana nuklir sipil terburuk dalam sejarah.'),
        ev(1991, 'Uni Soviet bubar', 'Lima belas republik merdeka pada 26 Desember.'),
      ],
    },
  ],
  'amerika-serikat': [
    {
      story:
        'Tiga belas koloni di pesisir Atlantik memerdekakan diri dari Britania dan menyusun konstitusi republik yang masih berlaku. Negara baru ini meluas cepat ke barat lewat pembelian, perang, dan pengusiran penduduk asli, hingga mencapai Pasifik.',
      chronicle: [
        ev(1776, 'Deklarasi Kemerdekaan', 'Diumumkan 4 Juli di Philadelphia.'),
        ev(1783, 'Perjanjian Paris', 'Britania mengakui kemerdekaan Amerika Serikat.'),
        ev(1787, 'Konstitusi', 'Dirumuskan di Philadelphia; George Washington presiden pertama (1789).'),
        ev(1803, 'Pembelian Louisiana', 'Wilayah negara berlipat dua.'),
        ev(1812, 'Perang 1812', 'Perang melawan Britania; Washington dibakar.'),
        ev(1830, 'Indian Removal Act', 'Bangsa Cherokee dan suku lain diusir ke barat (Trail of Tears).'),
        ev(1845, 'Aneksasi Texas', 'Memicu perang dengan Meksiko.'),
        ev(1848, 'Guadalupe Hidalgo dan demam emas', 'California hingga New Mexico direbut dari Meksiko; emas ditemukan di California.'),
      ],
    },
    {
      story:
        'Amerika Serikat melewati perang saudara yang menghapus perbudakan, industrialisasi cepat, dan gelombang besar imigrasi. Setelah dua perang dunia, AS menjadi adidaya yang memimpin dunia Barat dalam Perang Dingin, lalu menjadi satu-satunya adidaya setelah Uni Soviet bubar.',
      chronicle: [
        ev(1861, 'Perang Saudara', 'Negara bagian selatan memisahkan diri; perang empat tahun menewaskan ratusan ribu orang.'),
        ev(1863, 'Proklamasi Emansipasi', 'Lincoln membebaskan budak di wilayah pemberontak; Amandemen ke-13 (1865) menghapus perbudakan.'),
        ev(1869, 'Rel lintas benua', 'Pantai timur dan barat terhubung.'),
        ev(1898, 'Perang Spanyol–Amerika', 'AS memperoleh Filipina, Puerto Riko, dan Guam.'),
        ev(1917, 'Masuk Perang Dunia I', 'Pasukan AS ikut menentukan kemenangan Sekutu.'),
        ev(1929, 'Depresi Besar', 'Pasar saham runtuh; disusul New Deal Roosevelt.'),
        ev(1941, 'Pearl Harbor', 'AS masuk Perang Dunia II.'),
        ev(1945, 'Bom atom dan PBB', 'Hiroshima dan Nagasaki; AS menjadi adidaya dan PBB berdiri.'),
        ev(1964, 'Civil Rights Act', 'Diskriminasi rasial dilarang setelah perjuangan Martin Luther King Jr. dan lainnya.'),
        ev(1969, 'Apollo 11', 'Manusia pertama mendarat di Bulan.'),
        ev(1991, 'Akhir Perang Dingin', 'Uni Soviet bubar; AS satu-satunya adidaya.'),
        ev(2001, 'Serangan 11 September', 'Disusul perang di Afganistan dan Irak.'),
        ev(2008, 'Krisis keuangan global', 'Runtuhnya pasar perumahan mengguncang ekonomi dunia.'),
        ev(2020, 'Pandemi COVID-19', 'AS mencatat jumlah kematian terbanyak di dunia.'),
      ],
    },
  ],
  'tiongkok-modern': [
    {
      note: 'Republik Rakyat Tiongkok',
      story:
        'Setelah Republik Tiongkok (1912) dilanda perang panglima, invasi Jepang, dan perang saudara, Partai Komunis di bawah Mao Zedong memproklamasikan Republik Rakyat Tiongkok pada 1949, sementara pemerintah Nasionalis mundur ke Taiwan. Masa Mao penuh gejolak; reformasi Deng Xiaoping kemudian membuka ekonomi dan menjadikan Tiongkok kekuatan ekonomi terbesar kedua dunia.',
      chronicle: [
        ev(1949, 'RRT diproklamasikan', 'Mao Zedong di Tiananmen pada 1 Oktober; Nasionalis mundur ke Taiwan.'),
        ev(1950, 'Perang Korea', 'Pasukan sukarelawan Tiongkok melawan pasukan PBB.'),
        ev(1958, 'Lompatan Jauh ke Depan', 'Kolektivisasi ekstrem memicu kelaparan yang menewaskan puluhan juta orang.'),
        ev(1964, 'Bom atom Tiongkok', 'Uji coba nuklir pertama di Lop Nur.'),
        ev(1966, 'Revolusi Kebudayaan', 'Pengawal Merah menyerang "unsur borjuis" selama satu dekade.'),
        ev(1971, 'Kursi PBB', 'RRT menggantikan Republik Tiongkok (Taiwan) di PBB.'),
        ev(1976, 'Mao wafat', 'Komplotan Empat ditangkap.'),
        ev(1978, 'Reformasi dan keterbukaan', 'Deng Xiaoping membuka ekonomi pasar dan zona ekonomi khusus.'),
        ev(1989, 'Tiananmen', 'Demonstrasi pro-demokrasi ditumpas militer.'),
        ev(1997, 'Hong Kong kembali', 'Diserahkan Inggris dengan prinsip "satu negara, dua sistem".'),
        ev(2001, 'Bergabung dengan WTO', 'Tiongkok menjadi "pabrik dunia".'),
        ev(2008, 'Olimpiade Beijing', 'Simbol kebangkitan Tiongkok.'),
        ev(2013, 'Belt and Road Initiative', 'Program infrastruktur lintas Asia, Afrika, dan Eropa.'),
        ev(2020, 'Pandemi COVID-19', 'Virus yang pertama terdeteksi di Wuhan akhir 2019 menyebar ke seluruh dunia.'),
      ],
    },
  ],
  'india-modern': [
    {
      note: 'Republik India',
      story:
        'India merdeka pada 1947 bersamaan dengan pemisahan Pakistan, yang memicu migrasi dan kekerasan massal. Sebagai demokrasi terbesar di dunia, India membangun ekonomi terencana di bawah Nehru, berperang beberapa kali dengan Pakistan dan Tiongkok, lalu membuka ekonominya pada 1991 dan tumbuh menjadi negara berpenduduk terbanyak di dunia.',
      chronicle: [
        ev(1947, 'Kemerdekaan dan Partisi', 'India dan Pakistan berdiri; belasan juta orang mengungsi dan ratusan ribu tewas.'),
        ev(1948, 'Gandhi dibunuh', 'Ditembak seorang nasionalis Hindu di New Delhi.'),
        ev(1950, 'Konstitusi', 'India menjadi republik; B.R. Ambedkar memimpin penyusunannya.'),
        ev(1951, 'Pemilu pertama', 'Pemilu terbesar di dunia saat itu (1951–1952).'),
        ev(1962, 'Perang Tiongkok–India', 'Kekalahan di perbatasan Himalaya.'),
        ev(1965, 'Perang India–Pakistan kedua', 'Pertempuran memperebutkan Kashmir.'),
        ev(1971, 'Bangladesh merdeka', 'India membantu Pakistan Timur lepas dari Pakistan.'),
        ev(1974, 'Uji coba nuklir pertama', 'Operasi "Smiling Buddha" di Pokhran.'),
        ev(1975, 'Keadaan Darurat', 'Indira Gandhi menangguhkan kebebasan sipil hingga 1977.'),
        ev(1984, 'Indira Gandhi dibunuh dan tragedi Bhopal', 'Kebocoran gas pabrik pestisida menewaskan ribuan orang.'),
        ev(1991, 'Liberalisasi ekonomi', 'Reformasi Manmohan Singh membuka India pada pasar global.'),
        ev(1998, 'Uji coba nuklir Pokhran II', 'India menyatakan diri negara bersenjata nuklir.'),
        ev(2008, 'Serangan Mumbai', 'Serangan teroris terkoordinasi menewaskan lebih dari 160 orang.'),
        ev(2023, 'Chandrayaan-3 dan rekor penduduk', 'Pendaratan pertama di dekat kutub selatan Bulan; penduduk India melampaui Tiongkok.'),
      ],
    },
  ],
};
