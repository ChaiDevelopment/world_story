import type { Civilization } from '../types';
import { ev } from './chronicle';

/** Batas wilayah di seluruh data bersifat skematis/perkiraan, bukan batas presisi. */
export const ancientCivs: Civilization[] = [
  {
    id: 'mesir-kuno',
    name: 'Mesir Kuno',
    region: 'Afrika',
    start: -3100,
    end: -30,
    color: '#d4a84b',
    capital: { name: 'Memphis / Thebes', lon: 31.25, lat: 29.85 },
    summary:
      'Peradaban sepanjang Sungai Nil yang dipersatukan di bawah firaun sekitar 3100 SM dan bertahan hingga penaklukan Romawi pada 30 SM.',
    highlights: [
      'Piramida Giza dibangun pada Kerajaan Lama (±2600–2500 SM)',
      'Tulisan hieroglif dan administrasi tertulis di papirus',
      'Kalender 365 hari berbasis banjir tahunan Nil',
    ],
    economy:
      'Pertanian gandum dan jelai yang dibanjiri Nil, ditambah perdagangan emas Nubia, kayu cedar Lebanon, dan dupa dari Punt.',
    religionCulture:
      'Politeisme dengan firaun sebagai penjelmaan dewa; kepercayaan kehidupan setelah mati melahirkan mumifikasi dan makam monumental.',
    decline:
      'Melemah akibat serangan Bangsa Laut, dominasi Asyur dan Persia, lalu dikuasai dinasti Ptolemeus dan akhirnya Roma (30 SM).',
    territories: [
      {
        from: -3100,
        to: -1550,
        polygons: [
          [[33.5, 24], [33.5, 25.1], [33.3, 25.8], [33.2, 26.3], [32.4, 26.8], [31.9, 27.3], [31.5, 28.1], [31.7, 29.1], [31.85, 30], [32.5, 30.5], [32.6, 31.3], [32, 31.9], [30.8, 31.9], [29.6, 31.5], [29.5, 30.8], [30.3, 30], [30.4, 29.2], [30.1, 28.1], [30.6, 27.3], [31.1, 26.5], [32.1, 26.1], [32.1, 25.5], [32.3, 24.9], [32.3, 24]],
        ],
        note: 'Lembah dan Delta Nil',
        story:
          'Mesir lahir sebagai negara tunggal di sepanjang Nil, dari katarak pertama di Aswan sampai Delta. Masa ini mencakup Periode Awal Dinasti, Kerajaan Lama sang pembangun piramida, Kerajaan Tengah yang memulihkan persatuan, dan Periode Menengah Kedua ketika orang Hyksos menguasai Delta. Kekuasaan naik-turun mengikuti kuat-lemahnya firaun dan tinggi-rendahnya banjir Nil.',
        chronicle: [
          ev(-3100, 'Penyatuan Mesir Hulu dan Hilir', 'Tradisi mengaitkan penyatuan dengan Narmer; Palet Narmer menggambarkannya memakai mahkota kedua wilayah. Memphis menjadi pusat pemerintahan.', true),
          ev(-2670, 'Piramida Bertingkat Djoser', 'Arsitek Imhotep membangun makam batu monumental pertama di Saqqara, awal Kerajaan Lama.', true),
          ev(-2560, 'Piramida Agung Khufu di Giza', 'Puncak teknik dan organisasi Kerajaan Lama; disusul piramida Khafre dan Menkaure serta Sphinx Agung.', true),
          ev(-2181, 'Periode Menengah Pertama', 'Kekuasaan pusat runtuh; para nomark (gubernur provinsi) berkuasa sendiri, diperparah banjir Nil yang rendah.', true),
          ev(-2055, 'Mentuhotep II menyatukan kembali Mesir', 'Penguasa Thebes mengalahkan Herakleopolis dan membuka Kerajaan Tengah, masa klasik sastra Mesir.', true),
          ev(-1870, 'Senusret III memperkuat perbatasan Nubia', 'Rangkaian benteng di katarak kedua mengamankan jalur emas dan perdagangan ke selatan.', true),
          ev(-1650, 'Hyksos menguasai Delta', 'Penguasa asal Levant memerintah dari Avaris dan memperkenalkan kuda, kereta perang, dan busur komposit.', true),
          ev(-1550, 'Ahmose I mengusir Hyksos', 'Penguasa Thebes merebut Avaris dan menyatukan kembali negeri, membuka Kerajaan Baru.', true),
        ],
      },
      {
        from: -1550,
        to: -1070,
        polygons: [
          [[32.3, 24], [32.1, 25.5], [32.1, 26.1], [31.1, 26.5], [30.6, 27.3], [30.1, 28.1], [29.9, 29.2], [30.3, 30], [29.6, 30.6], [27, 31], [27, 32], [29.5, 32], [32.5, 32], [34.4, 32], [34.7, 32.7], [35, 33.4], [35.5, 34.1], [35.9, 34.8], [36.7, 34.8], [36.9, 34], [36.8, 33], [36.3, 32], [35.6, 30.5], [34.9, 29.4], [34.6, 28], [33.4, 28], [32.6, 29.5], [32.3, 30.5], [31.9, 30], [31.7, 29.1], [31.5, 28.1], [31.9, 27.3], [32.4, 26.8], [33.2, 26.3], [33.3, 25.8], [33.5, 25.1], [33.5, 24]],
          [[33.7, 24.2], [32.6, 22.6], [32.2, 21.6], [31.5, 20.3], [31.5, 19.5], [32.4, 19.1], [33.4, 20.2], [34, 19.3], [33.2, 18.4], [31.8, 17.9], [30.4, 18.4], [29.8, 19.3], [29.9, 20.3], [30.6, 21.6], [31, 22.5], [32, 23.5], [32.2, 24.3]],
        ],
        note: 'Kerajaan Baru: Nubia hingga Levant selatan',
        story:
          'Setelah mengusir Hyksos, Mesir berubah menjadi kekaisaran yang menjangkau Nubia di selatan dan Levant di utara. Ini masa firaun paling terkenal: Hatshepsut, Thutmose III, Akhenaten, Tutankhamun, dan Ramses II. Lembah Para Raja di Thebes menggantikan piramida sebagai tempat pemakaman.',
        chronicle: [
          ev(-1550, 'Dinasti ke-18 berdiri', 'Ahmose I membangun negara militer; Thebes dan kuil Amun di Karnak menjadi pusat agama.', true),
          ev(-1479, 'Pemerintahan Hatshepsut', 'Firaun perempuan ini mengirim ekspedisi dagang ke Punt dan membangun kuil Deir el-Bahari.', true),
          ev(-1457, 'Pertempuran Megiddo', 'Thutmose III mengalahkan koalisi Kanaan; Mesir mencapai jangkauan terluasnya di Levant.', true),
          ev(-1353, 'Revolusi Amarna', 'Akhenaten memusatkan pemujaan pada Aten dan memindahkan ibu kota ke Amarna; surat-surat Amarna merekam diplomasi internasional.', true),
          ev(-1323, 'Wafatnya Tutankhamun', 'Raja muda yang memulihkan agama lama; makamnya ditemukan nyaris utuh pada 1922.', true),
          ev(-1274, 'Pertempuran Kadesh', 'Ramses II berhadapan dengan Hittit di Suriah; hasilnya imbang meski dipropagandakan sebagai kemenangan.', true),
          ev(-1259, 'Perjanjian damai Mesir–Hittit', 'Salah satu perjanjian damai tertulis tertua; salinannya ditemukan di kedua kerajaan.', true),
          ev(-1177, 'Ramses III menghalau Bangsa Laut', 'Mesir selamat dari gelombang serangan yang meruntuhkan banyak kerajaan Zaman Perunggu, tetapi kas negara terkuras.', true),
          ev(-1070, 'Akhir Kerajaan Baru', 'Kekuasaan firaun melemah; pendeta Amun di Thebes praktis memerintah Mesir Hulu.', true),
        ],
      },
      {
        from: -1070,
        to: -30,
        polygons: [
          [[33.5, 23.5], [33.5, 25.1], [33.3, 25.8], [33.2, 26.3], [32.4, 26.8], [31.9, 27.3], [31.5, 28.1], [31.7, 29.1], [31.9, 30], [32.6, 30.6], [34, 31], [34.3, 31.6], [32.6, 31.9], [30.8, 31.9], [29, 31.4], [28.2, 30.9], [29.6, 30.4], [30.3, 30], [30.4, 29.2], [30.1, 28.1], [30.6, 27.3], [31.1, 26.5], [32.1, 26.1], [32.1, 25.5], [32.3, 24.9], [32.4, 23.5]],
        ],
        note: 'Periode Menengah Ketiga hingga Ptolemeus',
        story:
          'Mesir kembali ke lembah Nil dan berkali-kali diperintah penguasa asing: raja Libya, firaun Kush dari Nubia, Asyur, Persia, lalu Makedonia. Dinasti Ptolemeus menjadikan Aleksandria kota ilmu terbesar dunia Helenistik, sampai Kleopatra VII kalah dari Roma.',
        chronicle: [
          ev(-1070, 'Mesir terbelah', 'Raja-raja di Tanis memerintah Delta, sementara Imam Besar Amun berkuasa di Thebes.', true),
          ev(-728, 'Piye dari Kush menaklukkan Mesir', 'Raja Nubia mendirikan Dinasti ke-25 dan menampilkan diri sebagai pemulih tradisi Mesir.', true),
          ev(-664, 'Psamtik I dan Dinasti Saite', 'Mula-mula vasal Asyur, Psamtik I menyatukan Mesir kembali dengan bantuan tentara bayaran Yunani.', true),
          ev(-663, 'Asyur menjarah Thebes', 'Pasukan Asurbanipal mengusir firaun Kush dan merampas harta kuil-kuil Thebes.', true),
          ev(-525, 'Persia menaklukkan Mesir', 'Kambyses II menang di Pelusium; Mesir menjadi satrapi Akhemeniyah.'),
          ev(-332, 'Aleksander masuk Mesir', 'Disambut sebagai pembebas dari Persia; setahun kemudian Aleksandria didirikan.'),
          ev(-305, 'Ptolemeus I menjadi raja', 'Jenderal Aleksander mendirikan dinasti Ptolemeus; Mouseion dan Perpustakaan Aleksandria dibangun.'),
          ev(-196, 'Batu Rosetta', 'Dekret Ptolemeus V ditulis dalam hieroglif, demotik, dan Yunani; kunci pemecahan hieroglif pada 1822.'),
          ev(-31, 'Pertempuran Actium', 'Armada Kleopatra VII dan Markus Antonius dikalahkan Oktavianus.'),
          ev(-30, 'Mesir menjadi provinsi Roma', 'Kleopatra VII wafat; berakhirnya tiga milenium pemerintahan firaun.'),
        ],
      },
    ],
    sources: [
      { title: 'The Oxford History of Ancient Egypt', author: 'Ian Shaw (ed.)', year: 2000, kind: 'sekunder' },
      { title: 'Palermo Stone dan daftar raja Turin', kind: 'primer' },
    ],
  },
  {
    id: 'mesopotamia',
    name: 'Mesopotamia (Sumer–Babilonia–Asyur)',
    region: 'Asia Barat',
    start: -3500,
    end: -539,
    color: '#c97b4a',
    capital: { name: 'Babilonia', lon: 44.42, lat: 32.54 },
    summary:
      'Tanah di antara Sungai Tigris dan Efrat; tempat kota pertama, tulisan paku, dan kerajaan-kerajaan besar dari Sumer hingga Babilonia Baru.',
    highlights: [
      'Tulisan paku (kuneiform) muncul di Uruk sekitar 3300 SM',
      'Kode Hammurabi (±1754 SM) sebagai salah satu hukum tertulis tertua',
      'Perpustakaan Asurbanipal di Niniwe',
    ],
    economy:
      'Irigasi sungai untuk gandum dan kurma, tekstil wol, serta perdagangan logam dan batu mulia ke Lembah Indus dan Anatolia.',
    religionCulture:
      'Politeisme dengan kuil-kuil ziggurat; epos Gilgamesh merupakan karya sastra tertua yang dikenal.',
    decline:
      'Kejatuhan Babilonia Baru ke tangan Koresh Agung dari Persia pada 539 SM.',
    territories: [
      {
        from: -3500,
        to: -2334,
        polygons: [
          [[44.2, 33], [44, 32], [44.5, 31], [45.5, 30.3], [47, 29.4], [48.3, 29.7], [48, 30.6], [47.7, 31.5], [46.7, 32.3], [45.8, 33], [44.8, 33.4]],
        ],
        note: 'Kota-negara Sumer',
        story:
          'Di dataran selatan Irak, desa-desa pertanian beririgasi tumbuh menjadi kota pertama di dunia. Tiap kota (Uruk, Ur, Lagash, Kish, Umma) punya dewa pelindung, kuil, dan raja sendiri, dan mereka kerap berperang memperebutkan air dan tanah.',
        chronicle: [
          ev(-3500, 'Uruk menjadi kota besar', 'Penduduknya mungkin mencapai puluhan ribu; kuil Eanna dan administrasi kuil mengatur pangan dan tenaga kerja.', true),
          ev(-3300, 'Tulisan paku muncul', 'Tablet tanah liat dari Uruk mencatat jatah gandum, ternak, dan pekerja; awal sejarah tertulis.', true),
          ev(-2900, 'Periode Dinasti Awal', 'Kota-negara Sumer dipimpin raja (lugal) dan bersaing; Daftar Raja Sumer kelak mengisahkan masa ini.', true),
          ev(-2600, 'Makam Kerajaan Ur', 'Harta emas, lira, dan papan permainan Ur menunjukkan kekayaan dan jaringan dagang jarak jauh.', true),
          ev(-2450, 'Stela Burung Nasar', 'Raja Eannatum dari Lagash merayakan kemenangan atas Umma dalam sengketa lahan perbatasan.', true),
          ev(-2350, 'Lugalzagesi menyatukan Sumer', 'Raja Umma menaklukkan kota-kota Sumer, tetapi tak lama kemudian dikalahkan Sargon.', true),
        ],
      },
      {
        from: -2334,
        to: -2154,
        polygons: [
          [[36, 36], [38, 37.2], [40, 37.3], [42, 37.3], [43.8, 37.1], [45, 36.3], [46, 35.5], [47, 34.3], [48.5, 33], [49.5, 32], [50, 31], [49.5, 30.2], [48.6, 29.8], [47.5, 29.2], [45.5, 29.8], [43.5, 31], [41, 32.3], [39, 33.5], [37, 34.8]],
        ],
        note: 'Kekaisaran Akkad (Sargon)',
        story:
          'Sargon dari Akkad menyatukan Sumer dan Mesopotamia utara menjadi kekaisaran pertama yang dikenal. Bahasa Akkad menjadi bahasa pemerintahan, sementara budaya Sumer tetap hidup di kuil-kuil.',
        chronicle: [
          ev(-2334, 'Sargon mendirikan Akkad', 'Dari juru minuman raja Kish menjadi penakluk Sumer; ia mengangkat pejabat setia di tiap kota.', true),
          ev(-2285, 'Enheduanna di Ur', 'Putri Sargon menjadi imam besar dewa bulan dan menulis himne; pengarang pertama yang namanya diketahui.', true),
          ev(-2254, 'Naram-Sin, "raja empat penjuru"', 'Cucu Sargon memperluas kekaisaran dan menyebut dirinya dewa; Stela Kemenangannya kini di Louvre.', true),
          ev(-2154, 'Runtuhnya Akkad', 'Pemberontakan, serangan bangsa Guti, dan kemungkinan kekeringan panjang mengakhiri kekaisaran.', true),
        ],
      },
      {
        from: -1894,
        to: -1595,
        polygons: [
          [[40.3, 34.8], [41, 35.2], [42.8, 36], [44, 36], [45.2, 35.4], [46, 34.5], [47, 33.5], [47.8, 32.6], [48.3, 31.5], [48.9, 30.5], [48.5, 29.8], [47, 29.5], [45.5, 30], [44, 31.2], [42.5, 32.4], [41.2, 33.6]],
        ],
        note: 'Babilonia Lama',
        story:
          'Setelah kebangkitan singkat Ur III, Mesopotamia terpecah di antara dinasti-dinasti Amori. Salah satunya, di kota kecil Babilonia, menjadi kekuatan utama di bawah Hammurabi dan menjadikan Babilonia pusat budaya selama lebih dari seribu tahun.',
        chronicle: [
          ev(-1894, 'Dinasti Amori di Babilonia', 'Sumu-abum mendirikan dinasti yang kelak melahirkan Hammurabi.', true),
          ev(-1792, 'Hammurabi naik takhta', 'Mula-mula hanya satu dari beberapa raja menengah di samping Larsa, Mari, dan Asyur.', true),
          ev(-1763, 'Hammurabi menaklukkan Larsa', 'Kekalahan Rim-Sin membuat seluruh Mesopotamia selatan berada di bawah Babilonia.', true),
          ev(-1761, 'Mari ditaklukkan', 'Arsip istana Mari yang berisi ribuan tablet menjadi sumber penting diplomasi zaman itu.', true),
          ev(-1754, 'Kode Hammurabi', '282 pasal hukum dipahat pada stela basal, dari perdagangan dan upah sampai keluarga dan hukuman.', true),
          ev(-1595, 'Hittit menjarah Babilonia', 'Raja Mursili I menyerbu dari Anatolia dan mengakhiri dinasti Hammurabi; kemudian Kassit berkuasa.', true),
        ],
      },
      {
        from: -911,
        to: -609,
        polygons: [
          [[33.7, 36.1], [35, 37.3], [37.5, 38], [38.5, 38.5], [40.5, 38.6], [42.2, 37.8], [43.8, 37.5], [44.8, 37], [46, 36.5], [46.8, 35.2], [47.6, 34.2], [48.5, 33.4], [49.4, 32.4], [50, 31], [49.3, 30], [48.4, 29.7], [47.4, 29.3], [45, 29.6], [43, 30.6], [41, 31.5], [39, 31.2], [36.5, 30.9], [34.4, 31], [34.5, 31.9], [34.9, 32.8], [35.4, 33.6], [35.8, 34.5], [35.7, 35.5], [35.8, 36.2]],
          [[33.5, 25], [33.5, 25.8], [33.2, 26.3], [32.4, 26.8], [31.9, 27.3], [31.5, 28.1], [31.7, 29.1], [31.9, 30], [32.6, 30.6], [34, 31], [34.3, 31.6], [32.6, 31.9], [30.8, 31.9], [29, 31.4], [29.6, 30.4], [30.3, 30], [30.4, 29.2], [30.1, 28.1], [30.6, 27.3], [31.1, 26.5], [32.1, 26.1], [32.1, 25]],
        ],
        note: 'Kekaisaran Neo-Asyur, termasuk Mesir bawah',
        story:
          'Dari jantungnya di Tigris hulu, Asyur membangun kekaisaran terbesar yang pernah ada sampai saat itu, ditopang tentara profesional, jalan, dan deportasi massal penduduk taklukan. Ibu kotanya berpindah dari Assur ke Kalhu, Dur-Sharrukin, lalu Niniwe.',
        chronicle: [
          ev(-911, 'Adad-nirari II memulai ekspansi', 'Asyur merebut kembali wilayah yang hilang sejak keruntuhan Zaman Perunggu.'),
          ev(-853, 'Pertempuran Qarqar', 'Shalmaneser III bertempur melawan koalisi raja-raja Suriah dan Israel.'),
          ev(-745, 'Reformasi Tiglath-Pileser III', 'Tentara tetap dan sistem provinsi menggantikan negara vasal; deportasi penduduk menjadi kebijakan.'),
          ev(-722, 'Kejatuhan Samaria', 'Kerajaan Israel utara ditaklukkan dan penduduknya dipindahkan.', true),
          ev(-701, 'Sennacherib mengepung Yerusalem', 'Yehuda membayar upeti; Sennacherib kemudian membangun Niniwe sebagai ibu kota megah.'),
          ev(-671, 'Esarhaddon menaklukkan Memphis', 'Asyur menguasai Mesir Hilir, jangkauan terluas kekaisaran.'),
          ev(-668, 'Asurbanipal naik takhta', 'Perpustakaannya di Niniwe menyimpan ribuan tablet, termasuk Epos Gilgamesh.'),
          ev(-612, 'Niniwe jatuh', 'Koalisi Babilonia dan Media menghancurkan ibu kota Asyur.'),
          ev(-609, 'Akhir Asyur di Harran', 'Sisa kerajaan Asyur dan sekutu Mesirnya dikalahkan.'),
        ],
      },
      {
        from: -626,
        to: -539,
        polygons: [
          [[35.8, 36.6], [38, 37], [40, 37.2], [42, 37], [43, 36.2], [44.5, 35.5], [45.7, 34.5], [47, 33.3], [47.8, 32.4], [48.3, 31.2], [48.5, 30], [47.3, 29.3], [45, 29.5], [43, 30.5], [40.5, 31.5], [38.5, 31], [36, 30.8], [34.4, 31], [34.6, 31.9], [35, 32.8], [35.5, 33.7], [35.8, 34.6], [35.8, 35.6]],
        ],
        note: 'Babilonia Baru (Nebukadnezar II)',
        story:
          'Babilonia bangkit kembali setelah lepas dari Asyur dan mewarisi sebagian besar kekaisarannya. Di bawah Nebukadnezar II, kota Babilonia dibangun ulang dengan tembok raksasa, Gerbang Ishtar, dan ziggurat Etemenanki.',
        chronicle: [
          ev(-626, 'Nabopolassar merdeka dari Asyur', 'Pemimpin Kasdim menjadi raja Babilonia dan memulai perang melawan Asyur.'),
          ev(-605, 'Pertempuran Karkemis', 'Putra mahkota Nebukadnezar mengalahkan Mesir dan tahun itu juga naik takhta.'),
          ev(-597, 'Yerusalem direbut pertama kali', 'Raja Yehuda dibawa ke Babilonia bersama kaum elitenya.'),
          ev(-587, 'Yerusalem dihancurkan', 'Bait Suci pertama dibakar; awal masa pembuangan bangsa Yahudi ke Babilonia.', true),
          ev(-575, 'Gerbang Ishtar', 'Gerbang berlapis bata glasir biru dengan relief naga dan banteng dibangun; kini direkonstruksi di Berlin.', true),
          ev(-556, 'Nabonidus naik takhta', 'Raja terakhir lama tinggal di Tayma, Arabia, sementara Belsyazar memerintah di Babilonia.'),
          ev(-539, 'Koresh merebut Babilonia', 'Setelah menang di Opis, Persia masuk kota hampir tanpa perlawanan.'),
        ],
      },
    ],
    sources: [
      { title: 'Mesopotamia: The Invention of the City', author: 'Gwendolyn Leick', year: 2001, kind: 'sekunder' },
      { title: 'Kode Hammurabi (stela di Louvre)', kind: 'prasasti' },
    ],
  },
  {
    id: 'lembah-indus',
    name: 'Peradaban Lembah Indus',
    region: 'Asia Selatan',
    start: -3300,
    end: -1300,
    color: '#7fb069',
    capital: { name: 'Mohenjo-daro', lon: 68.1, lat: 27.33 },
    summary:
      'Peradaban kota terencana di Pakistan dan India barat laut, dengan sanitasi dan standar timbangan seragam.',
    highlights: [
      'Kota Harappa dan Mohenjo-daro dengan saluran air tertutup',
      'Meterai bergambar dengan aksara yang belum terpecahkan',
      'Perdagangan maritim dengan Mesopotamia',
    ],
    economy:
      'Pertanian gandum dan kapas, kerajinan manik karnelian, serta perdagangan lewat pelabuhan Lothal.',
    religionCulture:
      'Tidak ada bukti istana atau kuil besar; kepercayaan dan struktur politiknya masih diperdebatkan.',
    decline:
      'Menurun sekitar 1900–1300 SM, diduga akibat perubahan iklim dan pergeseran aliran sungai, bukan satu invasi tunggal.',
    territories: [
      {
        from: -2600,
        to: -1900,
        polygons: [
          [[61.3, 25], [62.8, 25.4], [64.5, 25.4], [66.5, 25.2], [67.3, 24.4], [68, 23.7], [68.8, 22], [69.8, 20.8], [71.5, 20.6], [72.7, 21], [73.3, 21.7], [73.4, 22.8], [74.3, 24.2], [75, 25.8], [76, 27.2], [77, 28], [77.8, 29], [77.8, 29.8], [77, 30.6], [76.2, 31.4], [75.2, 32.6], [74.6, 33.2], [73.5, 33], [72.2, 32.8], [71.5, 33.3], [70.7, 32.2], [69.9, 31.2], [68.9, 31], [67.9, 31.5], [66.5, 30.8], [65.8, 29.8], [64.8, 28.5], [65, 27.5], [63.5, 26.8], [62.2, 26.2]],
          [[70.2, 37.1], [71.4, 37.1], [71.4, 37.9], [70.2, 37.9]],
        ],
        note: 'Fase matang',
        story:
          'Dalam beberapa generasi, permukiman di lembah Indus dan Ghaggar-Hakra berubah menjadi kota bertata grid dengan bata berukuran standar, sumur, dan saluran pembuangan tertutup. Wilayah budayanya lebih luas dari Mesir atau Mesopotamia sezaman, tetapi karena aksaranya belum terbaca, nama penguasa dan peristiwa politiknya tidak diketahui; urutan di bawah ini berasal dari arkeologi.',
        chronicle: [
          ev(-2600, 'Urbanisasi besar', 'Harappa, Mohenjo-daro, Dholavira, Ganweriwala, dan Rakhigarhi tumbuh menjadi kota besar dengan tata ruang serupa.', true),
          ev(-2500, 'Pemandian Besar Mohenjo-daro', 'Kolam bata kedap air di atas citadel, mungkin untuk ritual penyucian.', true),
          ev(-2400, 'Pelabuhan Lothal', 'Kolam besar berbata di Gujarat, sering ditafsirkan sebagai dok kapal, menjadi pusat produksi manik.', true),
          ev(-2300, '"Meluhha" dalam teks Akkad', 'Sargon menyebut kapal dari Meluhha (kemungkinan besar wilayah Indus) berlabuh di Akkad; meterai Indus ditemukan di Ur.', true),
          ev(-2000, 'Puncak sistem timbangan dan meterai', 'Timbangan batu rijang dengan rasio biner seragam dari Afghanistan sampai Gujarat menunjukkan standar dagang bersama.', true),
        ],
      },
      {
        from: -1900,
        to: -1300,
        polygons: [
          [[66.5, 25.2], [67.8, 24.3], [68.8, 23.2], [69.5, 22], [70.6, 21], [72.5, 21.3], [73.5, 22.3], [73.8, 24], [74.8, 25.6], [76.2, 27], [78, 27.5], [79.3, 28], [79.5, 29.2], [78.3, 30.2], [77.2, 31], [75.5, 32.6], [74.3, 32.9], [72.5, 32.6], [71, 31.6], [70, 30.5], [68.5, 29.5], [66.8, 28.5], [66, 27], [66, 26]],
        ],
        note: 'Fase akhir',
        story:
          'Kota-kota besar perlahan ditinggalkan dan penduduk berpindah ke desa-desa kecil di timur dan selatan. Penyebabnya kemungkinan gabungan melemahnya monsun, mengeringnya sungai Ghaggar-Hakra, dan putusnya perdagangan dengan Mesopotamia. Tradisi kerajinan tetap berlanjut dalam budaya-budaya regional.',
        chronicle: [
          ev(-1900, 'De-urbanisasi dimulai', 'Mohenjo-daro dan Harappa menyusut; pemeliharaan saluran dan standar bata menurun.', true),
          ev(-1900, 'Sungai Ghaggar-Hakra mengering', 'Situs-situs di sepanjang aliran ini ditinggalkan; permukiman bergeser ke dataran Gangga–Yamuna.', true),
          ev(-1800, 'Perdagangan Teluk melemah', 'Benda-benda Indus makin jarang di Mesopotamia; jaringan dagang laut lewat Dilmun (Bahrain) menyusut.', true),
          ev(-1700, 'Budaya regional', 'Muncul budaya Kuburan H di Punjab, Jhukar di Sindh, dan Rangpur di Gujarat yang meneruskan sebagian tradisi Harappa.', true),
          ev(-1500, 'Penutur Indo-Arya dan masa Weda awal', 'Himne Rigveda disusun di Punjab; hubungannya dengan sisa budaya Harappa masih diperdebatkan.', true),
          ev(-1300, 'Tradisi Harappa memudar', 'Aksara Indus dan meterai tidak lagi digunakan; ciri khas peradaban ini lebur ke budaya lokal.', true),
        ],
      },
    ],
    sources: [
      { title: 'The Indus Civilization', author: 'Gregory Possehl', year: 2002, kind: 'sekunder' },
      { title: 'Situs Harappa dan Mohenjo-daro', kind: 'arkeologi' },
    ],
  },
  {
    id: 'shang-zhou',
    name: 'Shang dan Zhou',
    region: 'Asia Timur',
    start: -1600,
    end: -221,
    color: '#b5483a',
    capital: { name: 'Anyang / Haojing', lon: 114.3, lat: 36.1 },
    summary:
      'Dinasti-dinasti awal Tiongkok di Lembah Sungai Kuning; Zhou memunculkan konsep Mandat Langit dan era Seratus Aliran Pemikiran.',
    highlights: [
      'Tulisan tulang ramalan Shang, nenek moyang aksara Tiongkok',
      'Kuningan perunggu ritual',
      'Konfusius, Laozi, dan Mozi hidup pada Zhou akhir',
    ],
    economy: 'Pertanian jawawut dan gandum, kerajinan perunggu, dan sistem tanah feodal.',
    religionCulture: 'Pemujaan leluhur dan ramalan; kemudian filsafat Konfusianisme dan Taoisme.',
    decline: 'Zhou terpecah menjadi Negara-Negara Berperang lalu dipersatukan Qin pada 221 SM.',
    territories: [
      {
        from: -1600,
        to: -1046,
        polygons: [
          [[110.5, 35], [111.5, 36.5], [112.5, 37.7], [114, 38.5], [115.5, 38.8], [117.5, 38.2], [118.8, 37.2], [118.8, 36], [118, 34.5], [118.5, 33.5], [117.5, 32.5], [116.5, 31.5], [115, 30.5], [113.3, 30.5], [112.5, 31.5], [111.5, 32.8], [110.3, 33.8]],
        ],
        note: 'Shang',
        story:
          'Shang adalah dinasti Tiongkok pertama yang keberadaannya dibuktikan tulisan sezaman. Raja Shang memerintah dengan bantuan ramalan kepada leluhur, yang dicatat pada tulang dan tempurung kura-kura, serta menguasai produksi perunggu ritual dan kereta perang.',
        chronicle: [
          ev(-1600, 'Tang mendirikan Shang', 'Menurut tradisi, Tang menggulingkan raja terakhir Xia; situs Erligang (Zhengzhou) mewakili Shang awal.', true),
          ev(-1300, 'Ibu kota pindah ke Yin', 'Pan Geng memindahkan pusat kerajaan ke Yin (Anyang), ibu kota hingga akhir dinasti.', true),
          ev(-1250, 'Pemerintahan Wu Ding', 'Masa terbanyak tulang ramalan; permaisuri Fu Hao memimpin pasukan dan makamnya ditemukan utuh pada 1976.', true),
          ev(-1200, 'Kereta perang di Anyang', 'Kuburan kereta beserta kudanya menandai teknologi yang datang dari stepa.', true),
          ev(-1046, 'Pertempuran Muye', 'Raja Wu dari Zhou mengalahkan Di Xin, raja terakhir Shang.', true),
        ],
      },
      {
        from: -1046,
        to: -221,
        polygons: [
          [[104, 34.5], [105.5, 36.5], [107.5, 37.5], [108.5, 39], [110, 40.5], [112, 41], [114, 41], [116, 41.3], [118, 41.2], [120, 41.5], [122, 41.2], [121.5, 38.9], [122.7, 37.4], [121.5, 36.4], [120, 35.5], [119.8, 34.5], [121, 32.5], [122, 30.5], [121.5, 29.5], [121, 28.2], [119.5, 27], [117, 26], [114.5, 25], [112, 25.3], [110.5, 25.8], [109.5, 26.8], [108.5, 28.5], [108, 29.8], [106.5, 28.5], [104.5, 28], [102.8, 28.5], [102, 30.5], [103.2, 32], [104, 33.4]],
        ],
        note: 'Zhou dan negara-negara bawahannya',
        story:
          'Zhou membenarkan kemenangannya dengan Mandat Langit dan membagi tanah kepada kerabat sebagai negara-negara bawahan. Setelah ibu kota pindah ke timur pada 771 SM, raja Zhou tinggal simbol, sementara negara-negara bawahan bersaing; kekacauan ini justru melahirkan Konfusius, Laozi, Sun Tzu, dan Seratus Aliran Pemikiran.',
        chronicle: [
          ev(-1046, 'Zhou Barat berdiri', 'Adipati Zhou merumuskan Mandat Langit dan sistem fengjian; ibu kota di Haojing dekat Xi\'an.', true),
          ev(-771, 'Haojing dijarah', 'Suku Quanrong dan bangsawan pemberontak membunuh Raja You; ibu kota pindah ke Luoyang, awal Zhou Timur.'),
          ev(-722, 'Periode Musim Semi dan Gugur', 'Dinamai dari kronik negara Lu; negara-negara besar seperti Qi, Jin, Chu, dan Qin bersaing menjadi hegemon.'),
          ev(-551, 'Kelahiran Konfusius', 'Guru dari Lu yang mengajarkan etika, bakti, dan pemerintahan dengan teladan.'),
          ev(-500, 'Seni Perang dan Daodejing', 'Karya yang dikaitkan dengan Sun Tzu dan Laozi disusun pada sekitar masa ini.', true),
          ev(-475, 'Negara-Negara Berperang', 'Tujuh negara besar bertempur dengan pasukan infanteri massal dan senjata besi.', true),
          ev(-356, 'Reformasi Shang Yang di Qin', 'Hukum keras, penghapusan hak bangsawan, dan sistem pangkat militer membuat Qin paling kuat.'),
          ev(-256, 'Akhir dinasti Zhou', 'Qin menyingkirkan raja Zhou terakhir.'),
          ev(-221, 'Qin menyatukan Tiongkok', 'Setelah menaklukkan enam negara sejak 230 SM, Raja Zheng menjadi Qin Shi Huang.'),
        ],
      },
    ],
    sources: [
      { title: 'The Cambridge History of Ancient China', author: 'Loewe & Shaughnessy (eds.)', year: 1999, kind: 'sekunder' },
      { title: 'Shiji', author: 'Sima Qian', year: '±94 SM', kind: 'primer' },
    ],
  },
  {
    id: 'persia-akhemeniyah',
    name: 'Kekaisaran Akhemeniyah',
    region: 'Asia Barat',
    start: -550,
    end: -330,
    color: '#8a6fd1',
    capital: { name: 'Persepolis', lon: 52.89, lat: 29.93 },
    summary:
      'Kekaisaran terbesar dunia pada masanya, membentang dari Mesir sampai Lembah Indus di bawah Koresh, Darius I, dan Xerxes.',
    highlights: [
      'Jalan Kerajaan sepanjang ±2.700 km dengan sistem pos',
      'Administrasi satrapi dan toleransi terhadap agama taklukan',
      'Perang Persia melawan Yunani (490–479 SM)',
    ],
    economy: 'Upeti satrapi dalam perak dan hasil bumi, koin darik emas, dan jalur karavan lintas benua.',
    religionCulture: 'Zoroastrianisme berpengaruh pada elit; budaya kosmopolit lintas bangsa.',
    decline: 'Ditaklukkan Aleksander Agung (334–330 SM).',
    territories: [
      {
        from: -550,
        to: -330,
        polygons: [
          [[29.2, 41.4], [31, 41.5], [33, 42.3], [35.5, 42.1], [38, 41.2], [40, 41.2], [41.5, 41.8], [44.5, 42.2], [46.5, 42.2], [48, 42], [49, 41.2], [51, 40.8], [53, 41.5], [55.5, 42], [58.5, 43.2], [61, 44.8], [64, 45.5], [66.5, 44.3], [68.5, 41.8], [71, 41.6], [72.5, 40.3], [72, 38.5], [72.8, 37], [72, 36], [71.5, 35.2], [71.8, 34], [73.5, 32.8], [74.3, 31.2], [73.5, 29.5], [71.5, 27.5], [70.5, 25.8], [68.2, 23.8], [66, 24.8], [63, 25], [60, 25.2], [58, 25.5], [57, 26.5], [55, 26.5], [53, 27], [51.5, 28], [50, 29.5], [48.6, 29.9], [47.5, 29.3], [44, 29.8], [42, 30.8], [39, 31], [37.5, 30.2], [36, 29.5], [35, 28.2], [34.6, 28], [33.4, 28], [32.6, 29.5], [32.3, 30.4], [31.9, 30], [31.7, 29.1], [31.5, 28.1], [31.9, 27.3], [32.4, 26.8], [33.2, 26.3], [33.3, 25.8], [33.5, 25.1], [33.5, 24], [32.3, 24], [32.1, 25.5], [32.1, 26.1], [31.1, 26.5], [30.6, 27.3], [30.1, 28.1], [29.9, 29.2], [30.3, 29.9], [28, 30.6], [25.5, 30.8], [22.5, 31], [20.5, 31], [20.5, 32.4], [21.5, 33.1], [23.5, 32.8], [25, 32], [27, 31.9], [29.5, 32], [32.3, 31.8], [34.2, 31.8], [34.8, 32.8], [35.5, 34.2], [35.9, 35.2], [35, 36.4], [33.5, 36.3], [31, 36.4], [29.5, 36.2], [27.8, 36.7], [27, 37.5], [26.5, 38.4], [26.3, 39.2], [26, 39.9], [27.3, 40.3], [29, 40.5]],
          [[21.8, 40.2], [22.6, 41], [23, 42.2], [25, 43.4], [27.5, 44], [28.9, 44.2], [28.5, 41.5], [27, 40.8], [26.2, 40.2], [24.5, 40.6], [23, 40]],
        ],
        note: 'Puncak pada masa Darius I',
        story:
          'Dalam satu generasi, Persia berubah dari kerajaan kecil di Fars menjadi kekaisaran dari Laut Aegea sampai Sungai Indus. Koresh menaklukkan, Darius I mengorganisasi: satrapi, pajak tetap, mata uang, dan Jalan Kerajaan. Upaya menaklukkan Yunani gagal, dan dua abad kemudian kekaisaran ini jatuh ke tangan Aleksander.',
        chronicle: [
          ev(-550, 'Koresh mengalahkan Media', 'Koresh II menggulingkan kakeknya, Astyages, dan mewarisi kerajaan Media.'),
          ev(-547, 'Lydia ditaklukkan', 'Raja Kroisos yang kaya raya kalah; kota-kota Yunani di Ionia jatuh ke tangan Persia.', true),
          ev(-539, 'Babilonia jatuh', 'Silinder Koresh memaklumkan pemulihan kuil; orang Yahudi diizinkan pulang ke Yerusalem.'),
          ev(-525, 'Mesir ditaklukkan', 'Kambyses II menang di Pelusium.'),
          ev(-522, 'Darius I naik takhta', 'Setelah krisis suksesi; Prasasti Behistun dalam tiga bahasa mengisahkan kemenangannya.'),
          ev(-518, 'Persepolis dibangun', 'Kompleks istana upacara dengan relief para utusan dari seluruh kekaisaran.', true),
          ev(-499, 'Pemberontakan Ionia', 'Kota-kota Yunani di Asia Kecil memberontak dengan bantuan Athena; dipadamkan pada 494 SM.'),
          ev(-490, 'Pertempuran Marathon', 'Ekspedisi hukuman Darius ke Athena dikalahkan.'),
          ev(-480, 'Invasi Xerxes', 'Persia menang di Thermopylae dan membakar Athena, tetapi armadanya hancur di Salamis.'),
          ev(-479, 'Plataea dan Mykale', 'Kekalahan di darat dan laut mengakhiri invasi Persia ke Yunani.'),
          ev(-334, 'Aleksander menyeberang ke Asia', 'Kemenangan di Granikos membuka Asia Kecil.'),
          ev(-333, 'Pertempuran Issos', 'Darius III melarikan diri dan meninggalkan keluarganya.'),
          ev(-331, 'Pertempuran Gaugamela', 'Kekalahan yang menentukan; Babilonia dan Susa menyerah.'),
          ev(-330, 'Persepolis dibakar, Darius III terbunuh', 'Dibunuh satrapnya sendiri, Bessos; berakhirnya dinasti Akhemeniyah.'),
        ],
      },
    ],
    sources: [
      { title: 'From Cyrus to Alexander', author: 'Pierre Briant', year: 2002, kind: 'sekunder' },
      { title: 'Prasasti Behistun', author: 'Darius I', year: '±520 SM', kind: 'prasasti' },
    ],
  },
  {
    id: 'yunani-klasik',
    name: 'Yunani Klasik dan Helenistik',
    region: 'Eropa',
    start: -800,
    end: -30,
    color: '#4aa3c9',
    capital: { name: 'Athena', lon: 23.73, lat: 37.98 },
    summary:
      'Kota-negara Yunani melahirkan demokrasi, filsafat, dan teater; penaklukan Aleksander menyebarkan budaya Helenistik sampai India.',
    highlights: [
      'Demokrasi Athena dan Perang Peloponnesos',
      'Sokrates, Plato, Aristoteles',
      'Kekaisaran Aleksander Agung (336–323 SM)',
    ],
    economy: 'Perdagangan laut zaitun, anggur, dan keramik; tambang perak Laurion; koloni di seluruh Mediterania.',
    religionCulture: 'Pantheon Olimpus, olimpiade, dan tradisi tragedi serta filsafat.',
    decline: 'Kerajaan-kerajaan Helenistik jatuh satu per satu ke Roma; Mesir Ptolemeus berakhir pada 30 SM.',
    territories: [
      {
        from: -800,
        to: -336,
        polygons: [
          [[19.6, 39.9], [21, 40.2], [22.4, 40.4], [23.5, 40.6], [24.2, 40.5], [24.2, 39.8], [24.3, 38.6], [24.2, 37.5], [23.6, 36.9], [23.3, 36.4], [22.5, 36.2], [21.6, 36.7], [20.9, 37.6], [20.5, 38.4], [19.8, 39.2]],
          [[24.8, 37.9], [25.5, 39.3], [26.6, 40.1], [27.1, 39.3], [27.5, 38.3], [27.9, 37.3], [28.4, 36.5], [27.9, 36], [26.3, 36.8], [25.6, 36.3], [25, 36.8]],
          [[23.4, 35.7], [24.5, 35.7], [26.4, 35.4], [26.3, 35], [24.5, 34.8], [23.5, 35.1]],
          [[13.8, 41], [14.8, 40.8], [16, 40.6], [17.6, 40.8], [17.9, 40.1], [17.6, 39.2], [16.8, 38.5], [16, 37.8], [15.5, 38.3], [15.9, 39.2], [15.6, 39.9], [14.7, 40], [14, 40.4]],
          [[15.8, 38.3], [15.7, 37.3], [15, 36.7], [14.2, 36.7], [13.2, 37], [12.6, 37.4], [12.7, 37.9], [13.5, 38.1], [14.5, 38.1]],
          [[20.8, 32.2], [22.3, 32.2], [22.5, 32.9], [21, 33.2]],
        ],
        note: 'Kota-negara Yunani',
        story:
          'Yunani tidak pernah menjadi satu negara: ratusan polis (kota-negara) seperti Athena, Sparta, Korintus, dan Thebes punya hukum dan tentara sendiri, tetapi berbagi bahasa, dewa, dan Olimpiade. Mereka mengirim koloni ke seluruh Mediterania, mengalahkan Persia, lalu saling melemahkan dalam Perang Peloponnesos hingga Makedonia mengambil alih.',
        chronicle: [
          ev(-776, 'Olimpiade pertama', 'Menurut tradisi, perlombaan di Olympia untuk Zeus mulai dicatat.'),
          ev(-750, 'Kolonisasi dan epos Homer', 'Koloni didirikan dari Italia selatan sampai Laut Hitam; Iliad dan Odisseia dituliskan.', true),
          ev(-594, 'Reformasi Solon', 'Penghapusan perbudakan karena utang dan pembagian warga Athena menurut kekayaan.'),
          ev(-508, 'Reformasi Kleisthenes', 'Dasar demokrasi Athena: warga dibagi dalam suku-suku baru dan Dewan 500.'),
          ev(-490, 'Pertempuran Marathon', 'Hoplit Athena dan Plataea mengalahkan pasukan Persia.'),
          ev(-480, 'Thermopylae dan Salamis', 'Leonidas dan 300 Sparta gugur; armada Themistokles menghancurkan armada Persia.'),
          ev(-447, 'Parthenon dibangun', 'Di bawah Perikles, Athena memakai dana Liga Delos untuk membangun Akropolis.'),
          ev(-431, 'Perang Peloponnesos', 'Athena dan Sparta bertempur 27 tahun; Athena kalah pada 404 SM.'),
          ev(-399, 'Sokrates dihukum mati', 'Didakwa merusak pemuda dan tidak menghormati dewa; Plato mencatat pembelaannya.'),
          ev(-387, 'Akademia Plato', 'Sekolah filsafat di Athena; Aristoteles belajar di sana selama 20 tahun.', true),
          ev(-338, 'Pertempuran Khaironeia', 'Filipus II dari Makedonia mengalahkan Athena dan Thebes; kota-kota Yunani tunduk pada Makedonia.'),
        ],
      },
      {
        from: -336,
        to: -323,
        polygons: [
          [[19.6, 39.8], [19.4, 41.5], [19.8, 42.4], [21, 43.2], [22.5, 43.6], [24, 43.7], [26.5, 44.1], [28.9, 44.4], [28.7, 42.5], [28.2, 41.6], [26.8, 40.8], [26.2, 40.4], [24.5, 40.7], [23.8, 40.2], [24, 38.5], [24.1, 37.6], [23.2, 36.6], [22.4, 36.2], [21.5, 36.7], [20.8, 37.7], [20.2, 38.7]],
          [[29, 40.9], [31, 41.2], [33.5, 41.8], [34.5, 41], [35, 40.5], [37.5, 39.5], [40, 39.8], [42, 40], [44.5, 41], [46, 41], [47.5, 40], [48.5, 39], [49.5, 37.3], [51, 36.8], [53.5, 36.8], [54, 37.5], [54.5, 38.2], [57, 38], [59, 38], [61.5, 38.2], [62.2, 38.8], [63.5, 40], [66, 41], [68, 41], [70.2, 41], [71.2, 40.6], [72, 39.8], [72.5, 38.8], [71, 37.5], [71.5, 36.5], [71.5, 35.5], [72, 34.5], [73.5, 33.5], [74.5, 33.3], [75.5, 32.4], [76.2, 31.3], [75.5, 30.2], [73.5, 28.5], [71.5, 26.5], [70, 25], [68, 23.8], [66, 24.8], [63, 25], [61, 25.2], [58, 25.5], [57, 26.3], [55, 26.5], [53, 27], [51.5, 28], [50, 29.5], [48.6, 29.9], [47.5, 29.3], [44, 29.8], [42, 30.8], [39, 31], [37.5, 30.2], [36, 29.5], [35, 28.2], [34.6, 28], [33.4, 28], [32.6, 29.5], [32.3, 30.4], [31.9, 30], [31.7, 29.1], [31.5, 28.1], [31.9, 27.3], [32.4, 26.8], [33.2, 26.3], [33.3, 25.8], [33.5, 25.1], [33.5, 24], [32.3, 24], [32.1, 25.5], [32.1, 26.1], [31.1, 26.5], [30.6, 27.3], [30.1, 28.1], [29.9, 29.2], [30.3, 29.9], [27, 30.5], [25, 30.8], [25, 32], [27, 32], [29.5, 32], [32.3, 31.8], [34.2, 31.8], [34.8, 32.8], [35.5, 34.2], [35.9, 35.2], [35, 36.4], [33.5, 36.3], [31, 36.4], [29.5, 36.2], [27.8, 36.7], [27, 37.5], [26.5, 38.4], [26.3, 39.2], [26, 39.9], [27.3, 40.3], [29, 40.5]],
          [[24.9, 29], [26.1, 29], [26.1, 29.6], [24.9, 29.6]],
        ],
        note: 'Kekaisaran Aleksander',
        story:
          'Dalam tiga belas tahun, Aleksander dari Makedonia menaklukkan seluruh Kekaisaran Persia hingga Punjab tanpa sekali pun kalah dalam pertempuran besar. Ia mendirikan banyak kota bernama Aleksandria. Setelah ia wafat, para jenderalnya (Diadokhoi) membagi kekaisaran menjadi kerajaan Ptolemeus, Seleukos, dan Antigonos, awal zaman Helenistik.',
        chronicle: [
          ev(-336, 'Aleksander naik takhta', 'Filipus II dibunuh; Aleksander yang berusia 20 tahun memadamkan pemberontakan Thebes.'),
          ev(-334, 'Pertempuran Granikos', 'Penyeberangan ke Asia dan kemenangan pertama atas satrap Persia.'),
          ev(-333, 'Pertempuran Issos', 'Darius III dikalahkan dan melarikan diri.'),
          ev(-332, 'Pengepungan Tirus dan masuk Mesir', 'Kota pulau Tirus jatuh setelah tujuh bulan; Mesir menyerah tanpa perlawanan.'),
          ev(-331, 'Aleksandria dan Gaugamela', 'Aleksandria didirikan di Mesir; kemenangan di Gaugamela membuka Babilonia dan Persepolis.'),
          ev(-327, 'Kampanye Baktria dan Sogdiana', 'Perlawanan gerilya di Asia Tengah; Aleksander menikahi Roxana.'),
          ev(-326, 'Pertempuran Hydaspes', 'Mengalahkan Raja Poros di Punjab; pasukannya menolak maju lebih jauh di Sungai Beas.'),
          ev(-323, 'Aleksander wafat di Babilonia', 'Meninggal pada usia 32 tahun; perang para penerusnya berlangsung puluhan tahun.'),
        ],
      },
    ],
    sources: [
      { title: 'Historiae', author: 'Herodotos', year: '±430 SM', kind: 'primer' },
      { title: 'Anabasis Alexandri', author: 'Arrianus', year: '±150 M', kind: 'primer' },
    ],
  },
  {
    id: 'maurya',
    name: 'Kekaisaran Maurya',
    region: 'Asia Selatan',
    start: -322,
    end: -185,
    color: '#e0a526',
    capital: { name: 'Pataliputra', lon: 85.14, lat: 25.6 },
    summary:
      'Kekaisaran pertama yang menyatukan hampir seluruh Asia Selatan; Ashoka menyebarkan Buddhisme melalui prasasti dan utusan.',
    highlights: [
      'Chandragupta mengalahkan satrap Aleksander dan Dinasti Nanda',
      'Prasasti dan pilar Ashoka',
      'Arthashastra sebagai teks tata negara',
    ],
    economy: 'Pajak pertanian, monopoli tambang dan garam, perdagangan jalan raya dan sungai Gangga.',
    religionCulture: 'Ashoka menganut Buddhisme setelah Perang Kalinga dan mendukung toleransi agama.',
    decline: 'Melemah setelah Ashoka dan diruntuhkan oleh Pushyamitra Shunga pada 185 SM.',
    territories: [
      {
        from: -322,
        to: -185,
        polygons: [
          [[62.5, 34.2], [65, 35.5], [67, 35.6], [69, 36.2], [70.5, 36], [72, 35.8], [73.5, 36.5], [75.5, 35.8], [76.5, 34.5], [78.5, 32.5], [79.5, 31.2], [81, 30], [83, 28.5], [85.3, 27.8], [86.5, 27.6], [88, 27.2], [89.5, 26.7], [91, 26.2], [90, 22], [88.5, 21.5], [87, 21.3], [85.5, 19.5], [84, 18], [82.5, 16.5], [81, 15.5], [80.4, 13.3], [78.5, 12.5], [77, 12], [75.5, 12.5], [74.4, 13.6], [73.3, 16], [72.5, 18.5], [72.5, 20], [71, 20.6], [69.5, 20.8], [68.8, 22.2], [68.5, 23.5], [67.5, 24.3], [66, 25], [64, 25.3], [62, 25.2], [61.5, 27], [61.8, 29], [61.5, 31], [62, 32.5]],
        ],
        note: 'Puncak pada masa Ashoka',
        story:
          'Chandragupta Maurya, dibantu penasihat Kautilya (Chanakya), merebut kerajaan Magadha lalu mengisi kekosongan yang ditinggalkan Aleksander di barat laut. Tiga generasi kemudian, Ashoka menguasai hampir seluruh anak benua. Setelah Perang Kalinga ia beralih ke dhamma dan mengukir ajarannya pada batu dan pilar di seluruh kekaisaran.',
        chronicle: [
          ev(-322, 'Chandragupta merebut Pataliputra', 'Dinasti Nanda digulingkan; Magadha menjadi inti kekaisaran baru.', true),
          ev(-305, 'Perjanjian dengan Seleukos I', 'Seleukos menyerahkan wilayah hingga Kandahar dan menerima 500 gajah perang; Megasthenes menjadi duta di Pataliputra.', true),
          ev(-297, 'Bindusara naik takhta', 'Memperluas kekuasaan ke Dekkan; Chandragupta menurut tradisi Jain menjadi biksu.', true),
          ev(-268, 'Ashoka naik takhta', 'Setelah perebutan takhta di antara para putra Bindusara.', true),
          ev(-261, 'Perang Kalinga', 'Ratusan ribu orang tewas atau dideportasi; penyesalan Ashoka tercatat dalam Edik Batu XIII.', true),
          ev(-257, 'Edik-edik Ashoka', 'Prasasti dalam aksara Brahmi dan Kharosthi menyerukan toleransi, belas kasih, dan larangan penyembelihan.', true),
          ev(-250, 'Konsili Buddha Ketiga', 'Di Pataliputra; utusan dikirim ke Sri Lanka (Mahinda), Gandhara, dan kerajaan Helenistik.', true),
          ev(-232, 'Ashoka wafat', 'Kekaisaran mulai terpecah di antara para penerusnya.', true),
          ev(-185, 'Pushyamitra Shunga merebut kekuasaan', 'Raja terakhir, Brihadratha, dibunuh panglimanya saat inspeksi pasukan.', true),
        ],
      },
    ],
    sources: [
      { title: 'Edik Ashoka', author: 'Ashoka', year: '±260 SM', kind: 'prasasti' },
      { title: 'Ashoka and the Decline of the Mauryas', author: 'Romila Thapar', year: 1961, kind: 'sekunder' },
    ],
  },
  {
    id: 'qin-han',
    name: 'Qin dan Han',
    region: 'Asia Timur',
    start: -221,
    end: 220,
    color: '#cf5b4b',
    capital: { name: "Chang'an", lon: 108.94, lat: 34.27 },
    summary:
      'Qin menyatukan Tiongkok pada 221 SM; Han memantapkan birokrasi Konfusian dan membuka Jalur Sutra.',
    highlights: [
      'Tembok Besar tahap awal dan pasukan terakota Qin Shi Huang',
      'Penemuan kertas oleh Cai Lun (105 M)',
      'Zhang Qian membuka rute ke Asia Tengah',
    ],
    economy: 'Pertanian, monopoli besi dan garam, serta ekspor sutra lewat Jalur Sutra.',
    religionCulture: 'Konfusianisme menjadi ideologi negara; Buddhisme masuk pada abad ke-1 M.',
    decline: 'Pemberontakan Sorban Kuning dan perebutan kuasa panglima mengakhiri Han pada 220 M.',
    territories: [
      {
        from: -221,
        to: -206,
        polygons: [
          [[103, 35.5], [104.5, 36.5], [106.5, 37.5], [108, 38.8], [109.5, 40], [110.5, 41], [112.5, 41], [114, 41.5], [116, 41.5], [118.5, 41.8], [120.5, 41.5], [122, 40.8], [123.5, 40.5], [122.2, 39.8], [121.5, 38.8], [122.6, 37.4], [120, 35.5], [120.8, 32.6], [122.2, 31], [121.8, 29.5], [121, 27.8], [119.5, 25], [117, 23.5], [113.5, 22], [110.5, 21], [109, 21.3], [107.5, 21], [106, 22], [105, 23], [105.5, 25], [105.5, 26.5], [103.5, 28], [102, 29.5], [102.5, 30.5], [103, 32], [104, 33], [103.2, 34.2]],
        ],
        note: 'Qin',
        story:
          'Qin hanya bertahan lima belas tahun, tetapi meletakkan dasar negara Tiongkok selama dua milenium: kaisar tunggal, komanderi yang dipimpin pejabat pusat, serta tulisan, ukuran, dan mata uang yang seragam. Kerja paksa dan hukum yang keras memicu pemberontakan segera setelah kaisar pertama wafat.',
        chronicle: [
          ev(-221, 'Qin Shi Huang, kaisar pertama', 'Raja Zheng mengambil gelar Huangdi; negeri dibagi menjadi 36 komanderi.'),
          ev(-221, 'Standardisasi', 'Aksara, satuan ukur, mata uang, dan lebar as roda kereta diseragamkan di seluruh negeri.'),
          ev(-214, 'Tembok utara dan Kanal Lingqu', 'Tembok negara-negara lama dihubungkan untuk menahan Xiongnu; kanal menghubungkan Yangtze dengan selatan.'),
          ev(-213, 'Pembakaran buku', 'Atas saran Li Si, kitab sejarah dan filsafat di luar arsip negara dimusnahkan.'),
          ev(-210, 'Qin Shi Huang wafat', 'Dimakamkan di kompleks raksasa dengan ribuan prajurit terakota, ditemukan pada 1974.'),
          ev(-209, 'Pemberontakan Chen Sheng dan Wu Guang', 'Petani wajib militer yang terlambat dan terancam hukuman mati memicu pemberontakan besar pertama.'),
          ev(-206, 'Qin menyerah', 'Ziying menyerah kepada Liu Bang; Xiang Yu membakar ibu kota Xianyang.'),
        ],
      },
      {
        from: -206,
        to: 220,
        polygons: [
          [[95.5, 39.3], [92, 39], [88, 37.8], [84, 36.8], [80, 36.2], [76, 36.8], [74.5, 37.7], [74, 38.6], [74.8, 39.8], [76, 40.7], [78.5, 42], [81.5, 43], [85, 43.2], [87.5, 43.8], [89.5, 44], [92, 43.8], [94, 43.5], [95, 42.5], [98, 42], [101.5, 42.5], [104, 41.5], [106.5, 41.3], [109, 41.8], [111.5, 41.8], [114, 41.3], [116, 41.5], [118.5, 41.8], [120.5, 41.9], [122.5, 41.8], [121.5, 40.5], [121.5, 38.9], [122.2, 37.4], [120.5, 36], [119.8, 35], [121.2, 33], [122.2, 31.2], [122, 29.8], [121.5, 28], [120.2, 26.5], [119.5, 25.4], [117.5, 23.5], [115.5, 22.4], [113.5, 21.8], [111, 20.8], [109.5, 21.5], [108, 19.5], [106.8, 17.5], [108.9, 15.8], [106.3, 16.5], [105.2, 18], [104.5, 20.5], [103, 22], [101.5, 22.2], [100, 22.6], [98.5, 23.6], [98.5, 24.8], [98.7, 26.5], [99.5, 28], [100, 29.8], [101.7, 29.5], [102, 31.5], [102, 33], [103.5, 34], [101, 36], [97.5, 37.8]],
          [[123.8, 40.6], [125.5, 41.6], [127.5, 41], [128.6, 39.8], [128.3, 38.2], [127.6, 37.2], [126.4, 36.9], [125.4, 37.4], [124.6, 38.5], [124, 39.6]],
          [[108.4, 17.9], [111.3, 17.9], [111.3, 20.4], [108.4, 20.4]],
        ],
        note: 'Han',
        story:
          'Han mempertahankan sistem Qin tetapi melunakkannya dengan Konfusianisme, sehingga orang Tiongkok mayoritas hingga kini menyebut dirinya "orang Han". Kekaisaran ini meluas ke Asia Tengah, Korea, dan Vietnam utara, membuka Jalur Sutra, dan menghasilkan kertas. Han terbagi menjadi Han Barat (ibu kota Chang\'an) dan Han Timur (Luoyang), diselingi Dinasti Xin milik Wang Mang.',
        chronicle: [
          ev(-202, 'Liu Bang mendirikan Han', 'Setelah mengalahkan Xiang Yu di Gaixia, ia menjadi Kaisar Gaozu.'),
          ev(-141, 'Kaisar Wu naik takhta', 'Memerintah 54 tahun; Konfusianisme dijadikan dasar ujian pejabat dan akademi kekaisaran.'),
          ev(-138, 'Misi Zhang Qian', 'Diutus mencari sekutu melawan Xiongnu; laporannya membuka hubungan dengan Asia Tengah dan Jalur Sutra.'),
          ev(-119, 'Monopoli garam dan besi', 'Negara mengambil alih produksi untuk membiayai perang melawan Xiongnu.', true),
          ev(-94, 'Shiji selesai', 'Sima Qian menulis sejarah Tiongkok dari masa legenda hingga zamannya.', true),
          ev(9, 'Wang Mang mendirikan Xin', 'Menteri yang merebut takhta dan mencoba reformasi tanah; jatuh pada 23 M.'),
          ev(25, 'Han Timur', 'Liu Xiu (Kaisar Guangwu) memulihkan Han dengan ibu kota di Luoyang.'),
          ev(68, 'Kuil Kuda Putih', 'Menurut tradisi, kuil Buddha pertama di Tiongkok dibangun di Luoyang.', true),
          ev(105, 'Kertas Cai Lun', 'Pejabat istana menyempurnakan pembuatan kertas dari kulit kayu, rami, dan kain bekas.'),
          ev(166, 'Utusan dari "Daqin"', 'Catatan Han menyebut utusan dari Daqin (Romawi) tiba lewat laut selatan.'),
          ev(184, 'Pemberontakan Sorban Kuning', 'Gerakan petani Taois mengguncang kekaisaran dan memperkuat panglima daerah.'),
          ev(220, 'Akhir Han', 'Cao Pi memaksa Kaisar Xian turun takhta; dimulailah Zaman Tiga Negara.'),
        ],
      },
    ],
    sources: [
      { title: 'Shiji', author: 'Sima Qian', year: '±94 SM', kind: 'primer' },
      { title: 'Book of Han', author: 'Ban Gu', year: '±111 M', kind: 'primer' },
    ],
  },
  {
    id: 'roma',
    name: 'Republik dan Kekaisaran Romawi',
    region: 'Eropa',
    start: -509,
    end: 476,
    color: '#a83a4f',
    capital: { name: 'Roma', lon: 12.5, lat: 41.9 },
    summary:
      'Dari kota di Latium menjadi penguasa Mediterania; hukum, jalan, dan bahasa Latin membentuk Eropa.',
    highlights: [
      'Perang Punik melawan Kartago (264–146 SM)',
      'Pax Romana dimulai oleh Augustus (27 SM)',
      'Edik Milan 313 dan pembagian Timur–Barat',
    ],
    economy: 'Perdagangan gandum Mesir, tambang Spanyol, jalan raya, dan pajak provinsi.',
    religionCulture: 'Politeisme, pemujaan kaisar, lalu Kristen diresmikan pada 380 M.',
    decline: 'Romawi Barat jatuh pada 476 M; Romawi Timur (Bizantium) bertahan hingga 1453.',
    territories: [
      {
        from: -509,
        to: -146,
        polygons: [
          [[7.3, 43.8], [7.3, 44.8], [7.5, 45.7], [8.5, 46.3], [10.5, 46.8], [12, 46.8], [13.6, 46.5], [13.9, 45.4], [13, 45.3], [12.5, 44.3], [14, 42.8], [16.2, 41.9], [17.5, 41], [18.6, 40.2], [18, 39.8], [17.3, 39.7], [16.8, 39], [16.7, 38.4], [16, 37.9], [15.6, 38], [15.9, 39], [15.8, 39.7], [14.8, 40.4], [13.5, 41.2], [12, 41.8], [10.6, 42.9], [10.1, 43.8], [8.7, 44.3]],
          [[12.3, 38.1], [13.5, 38.4], [15.3, 38.4], [15.7, 38.3], [15.3, 36.7], [14.3, 36.6], [12.4, 37.4]],
          [[8, 38.8], [9.8, 38.8], [9.9, 41.3], [8.1, 41.3]],
          [[8.5, 41.3], [9.6, 41.3], [9.6, 43.1], [8.5, 43.1]],
          [[3.3, 42.4], [0.5, 42.2], [-1.5, 41.6], [-2, 39.8], [-3.5, 38.8], [-5.5, 38.5], [-7, 38], [-7.2, 37.2], [-6.6, 36.7], [-6.3, 36.3], [-5.4, 36], [-4.5, 36.5], [-2, 36.7], [-0.5, 37.6], [0.3, 38.8], [0.2, 40], [1.5, 41], [3, 41.6]],
          [[8.8, 37.2], [10.2, 37.4], [11.2, 37.2], [11.2, 36.2], [10.9, 35], [10, 34.4], [9, 34.8], [8.4, 35.6], [8.3, 36.5]],
          [[19.4, 39.6], [20, 41], [20.8, 41.9], [21.5, 42], [23, 42], [24.4, 41.7], [25.5, 41], [24.5, 40.4], [23.8, 40], [24, 38.5], [24.1, 37.6], [23.2, 36.5], [22.3, 36.2], [21.5, 36.7], [20.8, 37.6], [20.2, 38.8]],
        ],
        note: 'Republik awal: Italia',
        story:
          'Setelah mengusir raja terakhirnya, Roma diperintah dua konsul yang dipilih tiap tahun dan Senat. Lewat perang dan aliansi, Roma menguasai Italia, lalu bertarung dengan Kartago untuk Mediterania barat. Pada 146 SM, Kartago dan Korintus dihancurkan dan Roma menjadi kekuatan tak tertandingi.',
        chronicle: [
          ev(-509, 'Republik berdiri', 'Tarquinius Superbus diusir; kekuasaan dibagi kepada dua konsul.'),
          ev(-494, 'Pergolakan Ordo', 'Kaum plebeian mogok dan memperoleh jabatan tribun untuk melindungi mereka.'),
          ev(-450, 'Hukum Dua Belas Loh', 'Hukum Romawi pertama yang dituliskan dan dipajang di Forum.', true),
          ev(-390, 'Galia menjarah Roma', 'Trauma yang membuat Roma membangun Tembok Servius.', true),
          ev(-312, 'Via Appia', 'Jalan militer besar pertama, menghubungkan Roma dengan Capua.'),
          ev(-275, 'Pyrrhus dikalahkan', 'Kemenangan di Beneventum membuka Italia selatan bagi Roma.'),
          ev(-264, 'Perang Punik Pertama', 'Perebutan Sisilia; Roma membangun armada dan menang pada 241 SM.'),
          ev(-218, 'Hannibal menyeberangi Alpen', 'Perang Punik Kedua; Roma kalah telak di Cannae pada 216 SM.'),
          ev(-202, 'Pertempuran Zama', 'Scipio Africanus mengalahkan Hannibal di Afrika.'),
          ev(-146, 'Kartago dan Korintus dihancurkan', 'Akhir Perang Punik Ketiga; Afrika dan Makedonia menjadi provinsi.'),
        ],
      },
      {
        from: -146,
        to: 117,
        polygons: [
          [[-6, 49.9], [1.6, 50.8], [2, 52], [1.8, 52.9], [0.5, 53.6], [-0.2, 54.1], [-1, 54.9], [-1.2, 55.1], [-3.3, 55.1], [-4.2, 54.5], [-3.2, 53.6], [-4.8, 53.3], [-5.2, 52.7], [-5.5, 51.8], [-5, 51.3], [-5.8, 50.2]],
          [[-5.9, 35.9], [-6.4, 36.3], [-7.5, 36.9], [-9.5, 37], [-9.7, 38.6], [-9.6, 40.5], [-9.3, 42], [-9.4, 43.2], [-8, 43.9], [-5.5, 43.7], [-2, 43.5], [-1.5, 44.6], [-1.4, 46], [-2.5, 47.1], [-4.8, 47.9], [-4.9, 48.5], [-3, 48.9], [-1.8, 48.8], [-1.7, 49.7], [-0.5, 49.5], [1, 50.2], [1.8, 50.9], [3.2, 51.4], [3.9, 51.9], [4.6, 52.3], [5.5, 52], [5.9, 51.9], [6.5, 51.7], [6.95, 50.95], [7.2, 50.7], [7.65, 50.35], [8.3, 50], [8.6, 50.3], [9, 50.1], [9.3, 49.6], [9.6, 49], [9.7, 48.8], [10.6, 49], [11.5, 49], [12, 48.95], [13.5, 48.6], [14.5, 48.3], [16.4, 48.2], [17.2, 48], [18, 47.8], [19.05, 47.6], [18.9, 46.7], [19, 45.9], [19.9, 45.2], [20.5, 44.8], [21.2, 45.5], [21.6, 46.5], [22, 46.8], [22.8, 47.4], [23.8, 47.7], [24.5, 47.3], [25.5, 47], [26.2, 46.3], [26.3, 45.2], [26.5, 44.5], [27, 44.1], [28, 44.3], [28.2, 45.2], [29, 45.3], [29.7, 45.3], [29.6, 44.8], [29, 43.5], [28.1, 42.2], [28.8, 41.4], [30.5, 41.3], [32.5, 42.1], [35, 42.1], [37.5, 41.3], [39.7, 41.3], [41.5, 41.7], [41.8, 42.2], [41.8, 42], [44.5, 41.2], [46.2, 40.5], [47, 39.4], [46.3, 38.2], [45.6, 37.2], [45.2, 36.4], [46, 35.4], [46.8, 34], [47.7, 32.8], [48.2, 31.8], [48.7, 31], [48.5, 30.1], [47.8, 29.5], [46, 29.3], [43.5, 30.2], [41, 31], [39, 30.3], [38, 28.5], [38.5, 27.5], [37, 26.8], [35.6, 27.5], [34.8, 28], [34, 26.8], [35, 24.6], [35.8, 23.3], [34.5, 22.3], [33, 22.2], [32.5, 22.8], [31, 23.8], [30, 24.7], [28.5, 25], [27, 25.5], [25.5, 26], [25, 28], [24.6, 30], [23, 30.6], [20.5, 30.6], [19, 30.5], [17, 30.6], [15, 30.8], [13.5, 30.8], [11.5, 30.3], [9.8, 30.1], [9.3, 31.5], [8.6, 33.3], [7.8, 34], [6, 34.7], [4, 34.9], [3, 34.8], [1, 34.8], [-1.5, 34.3], [-3.5, 34.2], [-5, 33.5], [-6.3, 33.5], [-7.2, 33.9], [-7.4, 34], [-6.5, 35], [-6, 35.7]],
        ],
        note: 'Puncak pada masa Trajanus (117 M)',
        story:
          'Kekayaan penaklukan merusak keseimbangan Republik: perang saudara antara panglima-panglima besar berakhir dengan kediktatoran Caesar dan akhirnya kekaisaran Augustus. Dua abad Pax Romana menyusul, dan di bawah Trajanus wilayah Roma mencapai luas terbesarnya, dari Britania sampai Mesopotamia.',
        chronicle: [
          ev(-133, 'Reformasi Gracchus', 'Tiberius Gracchus mengusulkan pembagian tanah dan dibunuh; awal kekerasan politik di Roma.'),
          ev(-107, 'Reformasi Marius', 'Tentara profesional yang setia pada jenderal, bukan pada negara.'),
          ev(-73, 'Pemberontakan Spartacus', 'Pemberontakan budak terbesar, dipadamkan pada 71 SM.'),
          ev(-58, 'Caesar menaklukkan Galia', 'Perang delapan tahun yang berpuncak di Alesia (52 SM).'),
          ev(-49, 'Caesar menyeberangi Rubicon', 'Perang saudara melawan Pompeius dan Senat.'),
          ev(-44, 'Caesar dibunuh', 'Ditikam di gedung Senat pada Ides Maret.'),
          ev(-27, 'Augustus kaisar pertama', 'Oktavianus menerima gelar Augustus; awal Pax Romana.'),
          ev(9, 'Hutan Teutoburg', 'Tiga legiun Varus dimusnahkan suku Jermanik; Rhein menjadi batas.'),
          ev(43, 'Penaklukan Britania', 'Kaisar Claudius mengirim invasi ke Britania selatan.'),
          ev(64, 'Kebakaran Besar Roma', 'Nero menyalahkan umat Kristen dan memulai persekusi.'),
          ev(70, 'Yerusalem dihancurkan', 'Titus mengakhiri Perang Yahudi Pertama dan menghancurkan Bait Suci Kedua.'),
          ev(79, 'Letusan Vesuvius', 'Pompeii dan Herculaneum terkubur abu.'),
          ev(117, 'Trajanus wafat', 'Setelah menaklukkan Dakia dan Mesopotamia; wilayah Roma di puncaknya.'),
        ],
      },
      {
        from: 117,
        to: 395,
        polygons: [
          [[-6, 49.9], [1.6, 50.8], [2, 52], [1.8, 52.9], [0.5, 53.6], [-0.2, 54.1], [-1, 54.9], [-1.2, 55.1], [-3.3, 55.1], [-4.2, 54.5], [-3.2, 53.6], [-4.8, 53.3], [-5.2, 52.7], [-5.5, 51.8], [-5, 51.3], [-5.8, 50.2]],
          [[-5.9, 35.9], [-6.4, 36.3], [-7.5, 36.9], [-9.5, 37], [-9.7, 38.6], [-9.6, 40.5], [-9.3, 42], [-9.4, 43.2], [-8, 43.9], [-5.5, 43.7], [-2, 43.5], [-1.5, 44.6], [-1.4, 46], [-2.5, 47.1], [-4.8, 47.9], [-4.9, 48.5], [-3, 48.9], [-1.8, 48.8], [-1.7, 49.7], [-0.5, 49.5], [1, 50.2], [1.8, 50.9], [3.2, 51.4], [3.9, 51.9], [4.6, 52.3], [5.5, 52], [5.9, 51.9], [6.5, 51.7], [6.95, 50.95], [7.2, 50.7], [7.65, 50.35], [8.3, 50], [8.6, 50.3], [9, 50.1], [9.3, 49.6], [9.6, 49], [9.7, 48.8], [10.6, 49], [11.5, 49], [12, 48.95], [13.5, 48.6], [14.5, 48.3], [16.4, 48.2], [17.2, 48], [18, 47.8], [19.05, 47.6], [18.9, 46.7], [19, 45.9], [19.9, 45.2], [20.5, 44.8], [21.2, 45.5], [21.6, 46.5], [22, 46.8], [22.8, 47.4], [23.8, 47.7], [24.5, 47.3], [25.5, 47], [26.2, 46.3], [26.3, 45.2], [26.5, 44.5], [27, 44.1], [28, 44.3], [28.2, 45.2], [29, 45.3], [29.7, 45.3], [29.6, 44.8], [29, 43.5], [28.1, 42.2], [28.8, 41.4], [30.5, 41.3], [32.5, 42.1], [35, 42.1], [37.5, 41.3], [39.7, 41.3], [41.5, 41.7], [41.8, 42.2], [41.8, 42], [41.8, 40.8], [42, 40], [42.5, 38.5], [42.2, 37.3], [42, 36.4], [41, 35.3], [40.7, 34.6], [39.5, 33.5], [38.6, 32], [38.3, 30.2], [38, 28.5], [38.5, 27.5], [37, 26.8], [35.6, 27.5], [34.8, 28], [34, 26.8], [35, 24.6], [35.8, 23.3], [34.5, 22.3], [33, 22.2], [32.5, 22.8], [31, 23.8], [30, 24.7], [28.5, 25], [27, 25.5], [25.5, 26], [25, 28], [24.6, 30], [23, 30.6], [20.5, 30.6], [19, 30.5], [17, 30.6], [15, 30.8], [13.5, 30.8], [11.5, 30.3], [9.8, 30.1], [9.3, 31.5], [8.6, 33.3], [7.8, 34], [6, 34.7], [4, 34.9], [3, 34.8], [1, 34.8], [-1.5, 34.3], [-3.5, 34.2], [-5, 33.5], [-6.3, 33.5], [-7.2, 33.9], [-7.4, 34], [-6.5, 35], [-6, 35.7]],
        ],
        note: 'Kekaisaran tengah dan akhir',
        story:
          'Hadrianus berhenti memperluas wilayah dan memperkuat perbatasan. Setelah masa makmur para kaisar Antoninus, Roma dilanda wabah, tekanan di perbatasan, dan Krisis Abad Ketiga. Diokletianus dan Konstantinus membangun ulang negara dengan birokrasi yang lebih besar, ibu kota baru di Konstantinopel, dan agama baru: Kristen.',
        chronicle: [
          ev(122, 'Tembok Hadrianus', 'Benteng melintang Britania utara menandai kebijakan bertahan.'),
          ev(165, 'Wabah Antoninus', 'Epidemi (mungkin cacar) yang dibawa pulang dari timur menewaskan jutaan orang.'),
          ev(212, 'Constitutio Antoniniana', 'Caracalla memberi kewarganegaraan Romawi kepada hampir semua penduduk bebas.'),
          ev(235, 'Krisis Abad Ketiga', 'Lima puluh tahun perang saudara, invasi, dan inflasi dengan puluhan kaisar.'),
          ev(284, 'Diokletianus', 'Membagi kekuasaan dalam Tetrarki (293) dan mereformasi pajak serta provinsi.'),
          ev(313, 'Edik Milan', 'Konstantinus dan Licinius memberi kebebasan beragama, termasuk bagi umat Kristen.'),
          ev(330, 'Konstantinopel diresmikan', 'Byzantium dibangun ulang menjadi ibu kota baru di timur.'),
          ev(378, 'Pertempuran Adrianopel', 'Goth membunuh Kaisar Valens; suku-suku Jermanik menetap di dalam kekaisaran.'),
          ev(380, 'Kristen agama negara', 'Edik Tesalonika oleh Theodosius I.'),
          ev(395, 'Kekaisaran terbagi', 'Theodosius wafat; Arcadius memerintah Timur dan Honorius Barat.'),
        ],
      },
      {
        from: 395,
        to: 476,
        polygons: [
          [[-6, 49.9], [1.6, 50.8], [2, 52], [1.8, 52.9], [0.5, 53.6], [-0.2, 54.1], [-1, 54.9], [-1.2, 55.1], [-3.3, 55.1], [-4.2, 54.5], [-3.2, 53.6], [-4.8, 53.3], [-5.2, 52.7], [-5.5, 51.8], [-5, 51.3], [-5.8, 50.2]],
          [[-6.4, 36.3], [-7.5, 36.9], [-9.5, 37], [-9.7, 38.6], [-9.6, 40.5], [-9.3, 42], [-9.4, 43.2], [-8, 43.9], [-5.5, 43.7], [-2, 43.5], [-1.5, 44.6], [-1.4, 46], [-2.5, 47.1], [-4.8, 47.9], [-4.9, 48.5], [-3, 48.9], [-1.8, 48.8], [-1.7, 49.7], [-0.5, 49.5], [1, 50.2], [1.8, 50.9], [3.2, 51.4], [3.9, 51.9], [4.6, 52.3], [5.5, 52], [5.9, 51.9], [6.5, 51.7], [6.95, 50.95], [7.2, 50.7], [7.65, 50.35], [8.5, 49.5], [8.1, 48.7], [7.8, 47.7], [9, 47.6], [10.1, 47.5], [10.1, 48.4], [11, 48.7], [12, 48.95], [13.5, 48.6], [14.5, 48.3], [16.4, 48.2], [17.2, 48], [18, 47.8], [19.05, 47.6], [18.9, 46.7], [19, 45.9], [19.9, 45.2], [19.5, 45.3], [19.6, 45], [19.2, 44.3], [19.3, 43.3], [18.7, 42.4], [18.6, 40.2], [18, 39.8], [17.3, 39.7], [16.8, 39], [16.7, 38.4], [16, 37.9], [15.6, 38], [15.9, 39], [15.8, 39.7], [14.8, 40.4], [13.5, 41.2], [12, 41.8], [10.6, 42.9], [10.1, 43.8], [9, 44.2], [7.7, 43.8], [6.5, 43.1], [5, 43.3], [3.8, 43.4], [3.3, 42.4], [3.2, 41.7], [1, 41], [0.5, 40], [-0.2, 39], [0, 38.5], [-0.7, 37.6], [-2, 36.7], [-4.5, 36.5], [-5.4, 36]],
          [[12.3, 38.1], [13.5, 38.4], [15.3, 38.4], [15.7, 38.3], [15.3, 36.7], [14.3, 36.6], [12.4, 37.4]],
          [[8, 38.8], [9.8, 38.8], [9.9, 41.3], [8.1, 41.3]],
          [[8.5, 41.3], [9.6, 41.3], [9.6, 43.1], [8.5, 43.1]],
          [[18.5, 30.9], [15.5, 32.5], [13.1, 33.4], [11, 33.8], [10.2, 34.5], [11.2, 35.8], [11.2, 37.2], [9, 37.4], [8, 36.9], [5, 36.9], [2.5, 36.6], [0, 35.9], [-2, 35.2], [-5.2, 35.9], [-6, 35.8], [-7.2, 34], [-6.7, 33.6], [-5, 33.8], [-3, 34.2], [0, 34.7], [2.5, 34.8], [5, 34.6], [6.2, 34.7], [8, 33.9], [9.2, 33.2], [9.6, 30.8], [9.5, 30.1], [11.5, 30.6], [13.5, 31], [16, 30.8]],
        ],
        note: 'Romawi Barat',
        story:
          'Separuh barat kekaisaran lebih miskin dan lebih terbuka terhadap serangan. Dalam delapan puluh tahun, suku-suku Jermanik dan Hun merebut provinsi satu per satu, Roma dijarah dua kali, dan kaisar-kaisar terakhir menjadi boneka para panglima. Separuh timur bertahan sebagai Bizantium.',
        chronicle: [
          ev(395, 'Honorius kaisar Barat', 'Kekuasaan sebenarnya dipegang panglima Stilicho.'),
          ev(402, 'Ibu kota pindah ke Ravenna', 'Kota rawa yang lebih mudah dipertahankan daripada Milan.'),
          ev(406, 'Penyeberangan Rhein', 'Vandal, Alan, dan Suebi membanjiri Galia lalu Hispania.'),
          ev(410, 'Alarik menjarah Roma', 'Pertama kali dalam 800 tahun kota Roma jatuh ke musuh asing; Britania ditinggalkan.'),
          ev(439, 'Vandal merebut Kartago', 'Lumbung gandum Afrika hilang; Vandal membangun armada.'),
          ev(451, 'Pertempuran Dataran Katalaunia', 'Aetius bersama Visigoth menahan Attila orang Hun di Galia.'),
          ev(455, 'Vandal menjarah Roma', 'Geiserik merampas kota selama dua minggu.'),
          ev(476, 'Romulus Augustulus digulingkan', 'Odoaker tidak mengangkat kaisar baru; akhir tradisional Romawi Barat.'),
        ],
      },
    ],
    sources: [
      { title: 'Res Gestae Divi Augusti', author: 'Augustus', kind: 'prasasti' },
      { title: 'The History of the Decline and Fall of the Roman Empire', author: 'Edward Gibbon', year: 1776, kind: 'sekunder' },
    ],
  },
];
