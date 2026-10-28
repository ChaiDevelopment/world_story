import { ev, type ChronicleBook } from './chronicle';

/** Kronik periode Oseania (urutan = indeks `territories`). */
export const chroniclesOceania: ChronicleBook = {
  polinesia: [
    {
      story:
        'Kisah ini bermula sekitar 1500 SM di Kepulauan Bismarck, tempat keturunan penutur Austronesia, yang leluhurnya berlayar dari kepulauan Asia Tenggara (lihat Austronesia dan Nusantara), membuat tembikar bercap indah yang kini disebut Lapita. Dalam beberapa abad para pelaut itu mencapai Vanuatu, Kaledonia Baru, Fiji, Tonga, dan Samoa. Di sana mereka berhenti selama hampir seribu tahun, sampai budaya Polinesia leluhur terbentuk dan siap berlayar lebih jauh ke timur.',
      chronicle: [
        ev(-1500, 'Tembikar Lapita di Bismarck', 'Tembikar berhias bercap gigi muncul di Kepulauan Bismarck; pembuatnya keturunan penutur Austronesia yang berlayar dari kepulauan Asia Tenggara.', true),
        ev(-1100, 'Vanuatu dan Teouma', 'Para pelayar Lapita menetap di Vanuatu; situs pemakaman Teouma di Efate memperlihatkan salah satu permukiman tertua di Pasifik.', true),
        ev(-1000, 'Kaledonia Baru', 'Permukiman Lapita muncul di Kaledonia Baru pada sekitar masa ini.', true),
        ev(-900, 'Fiji', 'Pelaut Lapita tiba di Fiji dan menetap di pulau-pulaunya.', true),
        ev(-850, 'Tonga', 'Permukiman pertama di Tonga, misalnya di Tongatapu, berdiri pada sekitar masa ini.', true),
        ev(-800, 'Samoa', 'Pelaut tiba di Samoa, titik paling timur dari penyebaran Lapita.', true),
        ev(-500, 'Jeda panjang', 'Selama sekitar seribu tahun orang Polinesia Barat tidak berlayar lebih jauh ke timur; tembikar berhias berangsur menjadi polos dan kemudian menghilang. Para peneliti masih memperdebatkan penyebabnya.', true),
        ev(200, 'Budaya Polinesia leluhur', 'Pada masa ini budaya, bahasa, dan kepercayaan Polinesia yang khas terbentuk di Tonga, Samoa, dan sekitarnya.', true),
      ],
    },
    {
      story:
        'Berabad-abad kemudian, sekitar tahun 1000, para pelaut Polinesia berlayar lagi. Dengan perahu bercadik ganda dan pengetahuan tentang bintang, ombak, dan burung, mereka menemukan pulau-pulau yang jaraknya ribuan kilometer, dari Hawaii hingga Rapa Nui dan Aotearoa. Penanggalan radiokarbon modern menunjukkan penyebaran ini jauh lebih cepat daripada yang dikira. Pada abad ke-18 pelaut Eropa tiba, dan perubahan besar dimulai.',
      chronicle: [
        ev(1000, 'Kepulauan Society dan Cook', 'Penanggalan radiokarbon yang direvisi (Wilmshurst dkk., 2011) menunjukkan permukiman Polinesia Timur dimulai di Kepulauan Society dan Cook sekitar masa ini.', true),
        ev(1100, 'Hawaii', 'Pelaut Polinesia tiba di Hawaii; tanggalnya diperdebatkan dan mungkin sedikit lebih muda.', true),
        ev(1200, 'Rapa Nui', 'Pelaut tiba di Rapa Nui dan kemudian membangun patung moai.', true),
        ev(1200, 'Kumara dan Amerika', 'Bukti DNA (2020) menunjukkan kontak antara orang Polinesia dan penduduk Amerika Selatan; kumara (ubi jalar) yang berasal dari Amerika tiba di Polinesia.', true),
        ev(1200, "Tu'i Tonga", "Para raja Tu'i Tonga membangun jaringan maritim yang pengaruhnya mencapai Samoa dan Fiji.", true),
        ev(1250, 'Aotearoa', 'Pelaut Polinesia tiba di Selandia Baru sekitar 1250–1300 dan kemudian dikenal sebagai Māori.', true),
        ev(1500, 'Kepulauan Chatham', 'Sebagian pelaut dari Aotearoa menetap di Kepulauan Chatham, yang menjadi tanah leluhur Moriori.', true),
        ev(1722, 'Roggeveen di Rapa Nui', 'Kapten Belanda Jacob Roggeveen tiba di Rapa Nui pada hari Paskah dan menamai pulau itu.'),
        ev(1769, 'James Cook dan Tupaia', 'Cook tiba di Tahiti; navigator dan pendeta Tupaia ikut berlayar bersamanya dan membantu membuat peta Pasifik.'),
        ev(1779, 'Cook tewas di Hawaii', 'Cook terbunuh dalam bentrokan dengan orang Hawaii di Kealakekua.'),
        ev(1810, 'Kamehameha I', 'Kamehameha I menyatukan pulau-pulau Hawaii menjadi satu kerajaan.'),
        ev(1840, 'Perjanjian Waitangi', 'Banyak pemimpin Māori dan wakil Britania menandatangani perjanjian di Waitangi pada 6 Februari; versi bahasa Inggris dan Māori berbeda maknanya.'),
      ],
    },
  ],
  'aborigin-australia': [
    {
      story:
        'Kisah ini bermula jauh sebelum garis waktu atlas ini: manusia sudah tinggal di Australia sedikitnya 50.000 hingga 65.000 tahun lalu, seperti terlihat di Madjedbebe dan Danau Mungo. Sejak lama orang Aborigin dan Penduduk Selat Torres merawat tanah dengan api dan menangkap ikan, misalnya di perangkap ikan Budj Bim yang berusia sekitar 6.600 tahun. Pada periode ini muncul dingo, alat batu kecil, dan seni cadas, dan pelaut dari Makassar mulai datang ke utara.',
      chronicle: [
        ev(-2000, 'Alat batu kecil', 'Alat batu kecil (mikrolit) menyebar luas di Australia pada sekitar masa ini.', true),
        ev(-1500, 'Dingo tiba', 'Dingo tiba di Australia, kemungkinan dibawa pelaut dari Asia Tenggara; perkiraan waktunya beragam.', true),
        ev(-1000, 'Seni cadas', 'Seni cadas di Kakadu, Murujuga, dan tempat lain terus dibuat dan diperbarui; sebagian karya jauh lebih tua dari masa ini.', true),
        ev(1606, 'Willem Janszoon', 'Kapal Belanda Duyfken mendarat di Cape York, pendaratan Eropa pertama yang tercatat di Australia.'),
        ev(1623, 'Jan Carstenszoon', 'Kapal Belanda menyusuri Teluk Carpentaria dan bertemu penduduk setempat, dengan bentrokan.'),
        ev(1642, 'Abel Tasman', "Abel Tasman tiba di Tasmania (Van Diemen's Land)."),
        ev(1688, 'William Dampier', 'Penjelajah Inggris William Dampier mendarat di pantai barat laut Australia.'),
        ev(1700, "Pelaut Makassar ke Marege'", 'Para pelaut Makassar dan Bugis berlayar ke Arnhem Land mencari teripang; kata-kata Makassar masuk ke bahasa Yolngu. Waktu mulainya diperdebatkan.', true),
        ev(1770, 'Cook di Botany Bay', 'Kapal Endeavour berlabuh di Botany Bay pada 29 April; penduduk Gweagal menolak pendaratan mereka.'),
        ev(1770, 'Cook mengklaim pantai timur', 'Pada 22 Agustus Cook mengklaim pantai timur atas nama Raja Britania; wilayah itu sudah dihuni.'),
      ],
    },
    {
      story:
        'Pada 26 Januari 1788, Armada Pertama Britania mendirikan koloni penjara di Sydney Cove, di tanah bangsa Eora. Dalam beberapa tahun penyakit seperti cacar membunuh banyak orang, dan para penjajah merampas tanah serta sumber air. Perlawanan terjadi di banyak tempat, dan kekerasan terhadap orang Aborigin sering tidak dihukum. Pada 1901 koloni-koloni bersatu menjadi Persemakmuran Australia.',
      chronicle: [
        ev(1788, 'Armada Pertama', 'Armada Britania tiba di Sydney Cove pada 26 Januari dan mendirikan koloni di tanah bangsa Eora.'),
        ev(1789, 'Wabah cacar', 'Epidemi menewaskan banyak penduduk asli di sekitar Sydney.'),
        ev(1790, 'Pemulwuy', 'Pemulwuy dari bangsa Bidjigal memimpin perlawanan di sekitar Sydney selama lebih dari satu dekade; ia tewas pada 1802.', true),
        ev(1804, 'Risdon Cove', 'Bentrokan di Risdon Cove, Tasmania, menewaskan sejumlah orang Aborigin dan mengawali kekerasan di pulau itu.'),
        ev(1824, 'Darurat militer Bathurst', 'Gubernur memberlakukan darurat militer terhadap orang Wiradjuri di Bathurst, New South Wales.'),
        ev(1828, 'Perang Hitam Tasmania', 'Konflik di Tasmania memuncak sekitar 1828–1832 dan menewaskan banyak penduduk asli.', true),
        ev(1838, 'Pembantaian Myall Creek', 'Sekitar tiga puluh orang Aborigin dibunuh di Myall Creek; sebagian pelaku dihukum gantung, kasus yang langka.'),
        ev(1869, 'Undang-Undang Perlindungan Aborigin', 'Victoria memberlakukan undang-undang yang memberi pemerintah kuasa mengatur kehidupan orang Aborigin.'),
        ev(1876, 'Truganini wafat', 'Truganini, perempuan Aborigin Tasmania, wafat di Hobart; ia sering disebut sebagai yang terakhir meski keturunan orang Aborigin Tasmania hidup hingga kini.'),
        ev(1884, 'Pembatasan teripang Makassar', 'Pada 1880-an pemerintah Australia Selatan mulai membatasi kunjungan pelaut Makassar; pelayaran tahunan berakhir sekitar 1907.', true),
        ev(1901, 'Federasi Australia', 'Enam koloni bergabung menjadi Persemakmuran Australia.'),
      ],
    },
  ],
};
