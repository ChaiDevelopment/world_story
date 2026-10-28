import type { Civilization } from '../types';

type Ring = [number, number][];

// Pulau-pulau Jepang (nilai disalin dari civs-modern.ts)
const JP_KYUSHU: Ring = [[129.5, 33.2], [130.2, 33.9], [131.5, 33.8], [132, 33], [131.5, 31.3], [131, 31], [130.3, 31], [130, 32.5]];
const JP_SHIKOKU: Ring = [[132.3, 33.3], [133.5, 34.3], [134.7, 34.2], [134.5, 33.3], [133, 32.7]];
const JP_HONSHU: Ring = [[130.8, 33.9], [133, 35.6], [136, 36], [137, 37.5], [139, 38], [140, 40.8], [141.7, 41.4], [142, 39.5], [141, 38], [140.9, 36], [140.4, 35.1], [139.6, 35], [138, 34.6], [136.8, 34.3], [135.5, 33.5], [135, 34.3], [133, 34.2]];
// Honshu bagian tengah-barat (Kofun/Nara) dan sampai Tohoku tengah (Heian)
const JP_HONSHU_WEST: Ring = [[130.8, 33.9], [133, 35.6], [136, 36], [136.8, 36.9], [138, 36.8], [138.3, 35.4], [138, 34.6], [136.8, 34.3], [135.5, 33.5], [135, 34.3], [133, 34.2]];
const JP_HONSHU_HEIAN: Ring = [[130.8, 33.9], [133, 35.6], [136, 36], [137, 37.5], [139, 38], [140, 39.5], [141.2, 39.6], [141, 38], [140.9, 36], [140.4, 35.1], [139.6, 35], [138, 34.6], [136.8, 34.3], [135.5, 33.5], [135, 34.3], [133, 34.2]];

// Pesisir Swahili (utara: Mogadishu–Kilwa; selatan: Sofala–Cabo Delgado)
const SWAHILI_NORTH: Ring = [[45.8, 2.1], [44.5, 1], [43, -0.4], [41.5, -2.2], [40.6, -3.2], [40.2, -4.1], [39.8, -6], [39.8, -7.5], [40, -9.2], [38.9, -9.2], [38.7, -7.5], [38.7, -6], [39, -4.5], [39.5, -3.7], [40.2, -2.8], [41, -1.8], [42, -0.2], [43.5, 0.8], [44.7, 1.8]];
const SWAHILI_SOUTH: Ring = [[35.6, -20.1], [36.6, -18.6], [38.6, -16.6], [40.8, -14.6], [40.9, -12.5], [40.5, -11], [39.5, -11], [39.3, -12.5], [39.5, -14.5], [37.2, -16.7], [35.2, -18], [34, -19.6]];

export const medievalCivs2: Civilization[] = [
  // ===========================================================================
  // Frank dan Kekaisaran Romawi Suci
  // ===========================================================================
  {
    id: 'frank-romawi-suci',
    name: 'Kerajaan Frank dan Kekaisaran Romawi Suci',
    region: 'Eropa',
    start: 481,
    end: 1806,
    color: '#6f8cff',
    capital: { name: 'Aachen', lon: 6.08, lat: 50.78 },
    summary:
      'Kisah ini bermula ketika Klovis mempersatukan suku-suku Frank di bekas Galia Romawi. Dari sana lahirlah kerajaan Karolingia dan kemudian Kekaisaran Romawi Suci, sebuah himpunan longgar pangeran, uskup, dan kota Jerman serta Italia utara yang bertahan lebih dari seribu tahun.',
    highlights: [
      'Klovis dibaptis secara Katolik (±496) dan menyatukan Frank',
      'Karel Agung dimahkotai kaisar oleh Paus Leo III pada Natal 800',
      'Perjanjian Verdun 843 membagi warisan Karolingia menjadi tiga',
      'Otto I menjadi kaisar pada 962 dan Kontroversi Penobatan (Canossa, 1077)',
      'Bulla Emas 1356 menetapkan tujuh pangeran pemilih',
      'Reformasi, Perdamaian Augsburg 1555, dan Perang Tiga Puluh Tahun',
    ],
    economy:
      'Ekonomi awalnya bertumpu pada pertanian manor, tempat petani terikat pada tanah milik bangsawan dan biara. Dari abad ke-11 kota-kota di sepanjang Rhein, Danube, dan pesisir Baltik tumbuh lewat kerajinan dan dagang, lalu Liga Hansa serta rumah dagang Augsburg dan Nuremberg menghubungkan Eropa utara dengan Italia. Tambang perak di Harz dan Bohemia membiayai banyak pangeran.',
    religionCulture:
      'Kekaisaran ini berdiri di atas gagasan penerus Roma Kristen, dengan paus dan kaisar saling membutuhkan sekaligus bersaing. Biara-biara menjaga naskah kuno pada masa Renaisans Karolingia, dan tulisan minuskul Karolingia menjadi dasar huruf kecil kita sekarang. Reformasi Luther pada abad ke-16 memecah kekaisaran antara Katolik dan Protestan.',
    decline:
      'Setelah Perang Tiga Puluh Tahun, kekuasaan kaisar tinggal bayangan dan wilayah-wilayah seperti Prusia dan Bavaria bertindak seperti negara merdeka. Napoleon mengalahkan Austria dan membentuk Konfederasi Rhein; pada 1806 Kaisar Franz II meletakkan mahkota kekaisaran. Voltaire pernah menyindirnya sebagai "bukan suci, bukan Romawi, bukan kekaisaran".',
    territories: [
      {
        from: 481,
        to: 843,
        // Puncak kekuasaan Karel Agung ~814 (Prancis, Benelux, Jerman barat, Swiss, Austria, Italia utara, Mark Spanyol)
        polygons: [
          [[-4.5, 48.5], [-3, 48.8], [-1.5, 48.7], [-1.5, 49.7], [0, 49.5], [1, 49.7], [1.6, 50.2], [2, 51], [3.5, 51.4], [4.3, 52.3], [5, 53], [7, 53.5], [8.5, 54], [9.5, 54.4], [10.5, 53.8], [12, 52.5], [13, 50.5], [14, 49.5], [16.5, 48.3], [16, 47.9], [14, 46.4], [13.8, 45.5], [12.5, 45], [12.3, 44.4], [11, 43.5], [9.8, 44.1], [8.9, 44.4], [7.5, 43.8], [6, 43.1], [3.2, 43.3], [3.2, 42.3], [1.5, 42.4], [2, 41.5], [0, 42.7], [-1.8, 43.3], [-1.5, 46.2], [-2.3, 47.3]],
        ],
        note: 'Kerajaan Frank (Merovingia–Karolingia)',
      },
      {
        from: 843,
        to: 1250,
        // Francia Timur lalu Kekaisaran Romawi Suci awal: Jerman, Italia utara, Burgundia, Bohemia
        polygons: [
          [[5.2, 43.6], [7.5, 43.9], [8.9, 44.4], [10.2, 44], [11.5, 43.8], [12.3, 44.4], [12.4, 45.3], [13.7, 45.6], [14, 46.3], [16, 46.7], [17, 47.8], [17.3, 48.8], [18.5, 49.7], [17, 50.3], [15.2, 50.9], [14.8, 51.7], [14.4, 52.9], [14, 54], [12, 54.2], [10.8, 54], [9.8, 54.8], [8.6, 54.9], [8.2, 53.8], [7, 53.5], [5.6, 53.3], [4.5, 52.4], [3.5, 51.4], [4.2, 50.7], [4.9, 50], [5.5, 49.3], [5.7, 48.5], [5.2, 47.5], [5.1, 46], [4.8, 45], [4.8, 44]],
        ],
        note: 'Kekaisaran Romawi Suci awal',
      },
      {
        from: 1250,
        to: 1806,
        // Jerman, Austria, Bohemia, Italia utara, Belanda dan Swiss (nominal)
        polygons: [
          [[6.1, 46.4], [7.5, 44.4], [9, 44.4], [10.5, 44.5], [12.3, 45], [13.7, 45.6], [15, 46.3], [16.2, 46.8], [17, 47.7], [17.3, 48.8], [18.3, 49.5], [17.7, 50.2], [16.5, 50.6], [15, 51], [14.8, 51.8], [14.3, 52.8], [14.3, 53.8], [12, 54.3], [10.8, 54.1], [9.8, 54.8], [8.6, 54.9], [8.2, 53.8], [7, 53.5], [5.8, 53.3], [5.2, 52.6], [4.5, 52.3], [3.5, 51.4], [4.2, 50.5], [5.5, 49.5], [6.2, 49], [6.8, 48.5], [7.5, 47.6], [6.8, 47]],
        ],
        note: 'Romawi Suci di bawah Habsburg',
      },
    ],
    sources: [
      { title: 'Vita Karoli Magni', author: 'Einhard', year: '±830', kind: 'primer' },
      { title: 'Historia Francorum', author: 'Gregorius dari Tours', year: '±594', kind: 'primer' },
      { title: 'The Holy Roman Empire: A Thousand Years of Europe\'s History', author: 'Peter H. Wilson', year: 2016, kind: 'sekunder' },
    ],
  },

  // ===========================================================================
  // Viking
  // ===========================================================================
  {
    id: 'viking',
    name: 'Viking dan Kerajaan Skandinavia',
    region: 'Eropa',
    start: 793,
    end: 1397,
    color: '#38bdf8',
    capital: { name: 'Skandinavia (Uppsala, Roskilde, Trondheim)', lon: 12.08, lat: 55.64 },
    summary:
      'Pada mulanya mereka adalah petani, nelayan, dan pedagang dari fyord dan pulau-pulau Skandinavia. Sejak serangan ke biara Lindisfarne pada 793, kapal panjang mereka menjelajah dari Greenland sampai Baghdad, lalu para raja Skandinavia berangsur memeluk Kristen dan membentuk kerajaan Denmark, Norwegia, dan Swedia.',
    highlights: [
      'Serangan Lindisfarne 793 dan pendirian Dublin 841',
      'Tentara Agung Pagan di Inggris dan pembentukan Danelaw',
      'Rollo mendapat Normandia (911)',
      'Althing Islandia 930, salah satu majelis tertua di dunia',
      'Erik si Merah di Greenland dan Leif Erikson di Vinland (L\'Anse aux Meadows)',
      'Uni Kalmar 1397 menyatukan tiga mahkota Skandinavia',
    ],
    economy:
      'Ekonomi dasar adalah pertanian, peternakan, perikanan, dan perburuan di wilayah yang sempit tanahnya. Pedagang-pelaut membawa bulu, madu, gading walrus, dan budak ke arah timur melalui sungai-sungai Rusia sampai Baghdad, dan kembali dengan perak dirham yang banyak ditemukan di tanah Skandinavia. Pada abad pertengahan akhir, ikan kering dari Norwegia menjadi komoditas utama yang dikuasai pedagang Hansa di Bergen.',
    religionCulture:
      'Sebelum Kristen, orang Skandinavia memuja Odin, Thor, dan Freyja, menuliskan pesan dengan aksara rune, dan menguburkan orang terpandang bersama kapal seperti di Oseberg dan Gokstad. Mereka mewariskan saga dan puisi skaldik, yang ditulis di Islandia pada abad ke-13, di antaranya oleh Snorri Sturluson. Perubahan agama berlangsung bertahap sejak abad ke-10 dan memperkuat kekuasaan raja.',
    decline:
      'Zaman Viking dianggap berakhir sekitar 1066, ketika Harald Hardrada tewas di Stamford Bridge. Setelah itu Skandinavia menjadi kerajaan Kristen biasa dalam peta Eropa. Wabah Maut Hitam pada abad ke-14 memukul Norwegia keras, dan pada 1397 Margrete I menyatukan ketiga mahkota dalam Uni Kalmar.',
    territories: [
      {
        from: 793,
        to: 1066,
        // Inti Skandinavia + koloni Atlantik, Danelaw, Normandia, Dublin, Orkney
        polygons: [
          // Norwegia dan Swedia selatan
          [[5, 58.8], [5.2, 60.5], [5, 62], [7, 63], [10, 64.5], [12.5, 66], [15, 68], [18, 69.8], [22, 70.5], [26, 71], [29, 70.5], [30, 69.8], [25, 68.8], [23.5, 67.8], [20, 65.5], [18, 63], [17.3, 61], [18.8, 59.8], [18.1, 59.2], [16.7, 58], [16.2, 56.6], [14.3, 55.4], [13, 55.4], [12.7, 56.4], [11.9, 57.8], [11.2, 59.1], [10.6, 59.7], [10.3, 59], [9, 58.7], [7, 58], [5.8, 58.4]],
          // Denmark
          [[8.1, 54.9], [8.1, 56.8], [8.6, 57.1], [10.3, 57.6], [10.6, 56.6], [10.9, 56.2], [12.6, 56], [12.6, 55.5], [12.2, 54.8], [10.9, 54.7], [9.8, 54.9], [9.5, 54.4]],
          // Danelaw
          [[-2.7, 54.6], [-1.4, 55], [-0.5, 54.4], [0.1, 53.6], [0.3, 53.1], [0.4, 52.9], [1.7, 52.5], [1.7, 52], [1, 51.8], [0.5, 51.6], [-0.5, 51.9], [-1, 52.3], [-1.5, 52.6], [-1.7, 53.2], [-2.3, 53.5], [-2.8, 54]],
          // Normandia
          [[-1.9, 49.7], [-1.6, 49.7], [0.2, 49.7], [1.5, 49.9], [1.5, 49], [0.8, 48.6], [-0.8, 48.5], [-1.5, 48.7], [-1.6, 49.2]],
          // Islandia
          [[-24, 65.5], [-22, 66.4], [-18, 66.2], [-14.5, 66.2], [-13.6, 65], [-15, 64.3], [-18.5, 63.4], [-22.5, 63.8], [-22.7, 64.8]],
          // Greenland (pemukiman Norse)
          [[-49, 60.8], [-47, 60.1], [-44.5, 60.4], [-45, 61.3], [-47.5, 61.7]],
          // Dublin
          [[-6.5, 53.2], [-6, 53.2], [-6, 53.6], [-6.5, 53.6]],
          // Orkney
          [[-3.4, 58.7], [-2.4, 58.7], [-2.4, 59.2], [-3.4, 59.2]],
          // Shetland
          [[-1.5, 60], [-0.8, 60], [-0.8, 60.8], [-1.5, 60.8]],
        ],
        note: 'Zaman Viking',
      },
      {
        from: 1066,
        to: 1397,
        // Kerajaan Norwegia, Swedia (termasuk Finlandia), Denmark, Islandia, Greenland
        polygons: [
          [[5, 58.8], [5.2, 60.5], [5, 62], [7, 63], [10, 64.5], [12.5, 66], [15, 68], [18, 69.8], [22, 70.5], [26, 71], [29, 70.5], [30.5, 69.5], [31, 67], [30, 63.5], [30.5, 61], [28, 60.5], [23, 59.8], [20, 59.2], [18.8, 59.8], [18.1, 59.2], [16.7, 58], [16.2, 56.6], [14.3, 55.4], [13, 55.4], [12.7, 56.4], [11.9, 57.8], [11.2, 59.1], [10.6, 59.7], [10.3, 59], [9, 58.7], [7, 58], [5.8, 58.4]],
          [[8.1, 54.9], [8.1, 56.8], [8.6, 57.1], [10.3, 57.6], [10.6, 56.6], [10.9, 56.2], [12.6, 56], [12.6, 55.5], [12.2, 54.8], [10.9, 54.7], [9.8, 54.9], [9.5, 54.4]],
          [[-24, 65.5], [-22, 66.4], [-18, 66.2], [-14.5, 66.2], [-13.6, 65], [-15, 64.3], [-18.5, 63.4], [-22.5, 63.8], [-22.7, 64.8]],
          [[-49, 60.8], [-47, 60.1], [-44.5, 60.4], [-45, 61.3], [-47.5, 61.7]],
        ],
        note: 'Kerajaan Skandinavia Kristen',
      },
    ],
    sources: [
      { title: 'Anglo-Saxon Chronicle', author: 'Para biarawan Inggris', year: 'abad ke-9–12', kind: 'primer' },
      { title: 'Heimskringla', author: 'Snorri Sturluson', year: '±1230', kind: 'primer' },
      { title: 'Risala (catatan perjalanan ke Volga)', author: 'Ahmad ibn Fadlan', year: 922, kind: 'primer' },
      { title: 'The Viking World', author: 'Stefan Brink & Neil Price (ed.)', year: 2008, kind: 'sekunder' },
    ],
  },

  // ===========================================================================
  // Kievan Rus' dan Moskwa
  // ===========================================================================
  {
    id: 'kievan-rus',
    name: "Kievan Rus' dan Moskwa",
    region: 'Eropa',
    start: 882,
    end: 1721,
    color: '#f5e663',
    capital: { name: 'Kyiv', lon: 30.52, lat: 50.45 },
    summary:
      "Menurut Kronik Awal, kisah ini bermula ketika para pemimpin Rus' dari Skandinavia menguasai Novgorod dan Kyiv. Dari jalur sungai antara Baltik dan Laut Hitam tumbuh negara Slavia Timur yang memeluk Kristen Ortodoks pada 988, lalu hancur oleh Mongol, dan bangkit kembali di bawah Moskwa sampai menjadi kekaisaran Rusia.",
    highlights: [
      "Oleg merebut Kyiv (882) dan perjanjian dagang dengan Bizantium (907/911)",
      "Vladimir Agung dibaptis dan Rus' menjadi Ortodoks (988)",
      "Yaroslav Bijaksana dan Russkaya Pravda",
      "Mongol menghancurkan Kyiv (1240)",
      "Kulikovo 1380 dan akhir kuk Tatar di Sungai Ugra 1480",
      "Ekspansi ke Siberia hingga Pasifik dan Petrus I menjadi kaisar (1721)",
    ],
    economy:
      "Rus' hidup dari perdagangan sungai: bulu, madu, lilin, dan budak dikirim ke Konstantinopel dan Baghdad, sedangkan kain mewah, anggur, dan perak datang dari selatan. Di desa-desa petani menanam gandum dan rye serta mengabdi kepada pangeran, bojar, atau biara. Pada abad ke-16 dan 17 perdagangan bulu Siberia menjadi sumber utama pendapatan kas tsar, sementara pertanian makin banyak dibebani perbudakan terikat tanah.",
    religionCulture:
      "Ortodoksi Bizantium membawa aksara Kiril, arsitektur gereja berkubah, ikon, dan hukum gereja. Biara seperti Pecherska Lavra di Kyiv dan Trinitas-Sergius menjadi pusat belajar. Pada abad ke-15 Moskwa memandang dirinya penerus Konstantinopel, dan pada 1666 Skisma Raskol memecah gereja karena perbedaan ritual.",
    decline:
      "Kyiv melemah karena perebutan takhta antarpangeran dan pindahnya jalur dagang, lalu dihancurkan Mongol pada 1240. Pusat kekuatan bergeser ke utara-timur. Rusia sebagai negara kekaisaran lahir bukan dari kehancuran Rus' melainkan dari perubahan bentuknya; pada 1721 Petrus I mengambil gelar kaisar, dan sejarah berlanjut dalam bagian Rusia dan Uni Soviet.",
    territories: [
      {
        from: 882,
        to: 1240,
        // Rus' Kyiv ~ abad ke-11
        polygons: [
          [[28, 59.4], [30.5, 60.1], [33.5, 61.2], [37, 61.5], [41, 61.3], [44, 60.2], [46, 58], [45, 56], [43.5, 54], [41.5, 52.3], [39.5, 51], [37, 50], [35, 49.5], [32.5, 48.9], [30.5, 48.6], [28.5, 48.5], [26.5, 48.4], [24.5, 48.4], [23.4, 49.3], [23.6, 51], [23.9, 52.6], [25.5, 54.2], [26.8, 55.6], [28, 57], [27.8, 58.3]],
        ],
        note: "Kievan Rus'",
      },
      {
        from: 1240,
        to: 1480,
        // Kerajaan-kerajaan Rus' di bawah Gerombolan Emas (Vladimir, Novgorod, Moskwa, Tver)
        polygons: [
          [[29, 59.5], [30, 60.2], [33, 61.5], [37, 62.2], [41, 62.2], [46, 61], [50, 60], [50, 57.5], [48, 56], [46, 55], [43, 54.5], [40, 53.7], [37.5, 53], [35, 53.3], [33, 54], [31.5, 55], [30, 56.3], [29, 57.5]],
        ],
        note: 'Di bawah Gerombolan Emas',
      },
      {
        from: 1480,
        to: 1721,
        // Ketsaran Rusia: Rusia Eropa, Siberia barat, dan pos-pos di timur
        polygons: [
          [[28, 57], [28.5, 59.5], [31, 60.2], [33, 62], [34, 64.5], [38, 66.5], [40, 66.2], [44, 66.5], [44, 68], [48, 67.5], [53, 68.5], [60, 69.5], [66, 69.5], [73, 69], [80, 68.5], [86, 67], [90, 64], [90, 58], [86, 55.5], [82, 54.5], [77, 54.5], [72, 54.5], [67, 54], [62, 53.5], [58, 52], [55, 51], [50, 50.5], [48, 47], [47.5, 45.8], [44, 47.5], [42, 47.3], [39, 47.3], [38, 48.5], [37, 49.5], [35.5, 50.5], [34, 51.5], [33, 52.3], [31.5, 53.3], [30.5, 54.5], [29.5, 55.5]],
          // Yakutsk dan pantai Okhotsk
          [[118, 62], [130, 62], [141, 59.5], [143, 59], [140, 57.5], [134, 58], [125, 59.5], [118, 60.5]],
        ],
        note: 'Ketsaran Rusia',
      },
    ],
    sources: [
      { title: "Povest' vremennykh let (Kronik Awal)", author: 'Tradisi Nestor / Biara Pecherska', year: '±1113', kind: 'primer' },
      { title: 'Russkaya Pravda', author: 'Yaroslav dan penerusnya', year: 'abad ke-11–12', kind: 'primer' },
      { title: 'The Emergence of Rus 750–1200', author: 'Simon Franklin & Jonathan Shepard', year: 1996, kind: 'sekunder' },
    ],
  },

  // ===========================================================================
  // Korea
  // ===========================================================================
  {
    id: 'korea',
    name: 'Korea: Tiga Kerajaan hingga Joseon',
    region: 'Asia Timur',
    start: -57,
    end: 1910,
    color: '#ff85b3',
    capital: { name: 'Hanseong (Seoul)', lon: 126.98, lat: 37.57 },
    summary:
      'Kisah ini bermula ketika Goguryeo, Baekje, dan Silla saling bersaing di semenanjung yang menjorok ke laut antara Tiongkok dan Jepang. Silla, dibantu Tang, menyatukan semenanjung selatan; Goryeo meneruskannya dan memberi dunia nama "Korea"; Joseon bertahan lima abad sebelum Jepang mencaploknya pada 1910.',
    highlights: [
      'Stela Gwanggaeto (414) dan kemenangan Goguryeo atas Sui di Salsu (612)',
      'Silla Bersatu dan kuil Bulguksa (751)',
      'Tripitaka Koreana: 81.258 balok kayu di Haeinsa (1236–1251)',
      'Jikji (1377), buku cetak logam bergerak tertua yang masih ada',
      'Raja Sejong menciptakan Hangul (1443/1446)',
      'Laksamana Yi Sun-sin dan kapal kura-kura dalam Perang Imjin (1592–1598)',
    ],
    economy:
      'Sawah padi di lembah-lembah selatan menopang sebagian besar penduduk, sedangkan utara lebih bergantung pada ladang kering dan peternakan. Silla dan Goryeo mengekspor ginseng, kain rami, perak, dan keramik; celadon Goryeo dikenal di seluruh Asia Timur. Pada masa Joseon sistem tanah, pajak, dan ujian negara berkembang, dan pasar-pasar lima hari tumbuh di desa.',
    religionCulture:
      'Buddhisme masuk pada abad ke-4 dan menjadi agama negara Silla dan Goryeo, sedangkan Joseon menjadikan Neo-Konfusianisme sebagai dasar negara. Bersama itu bertahan kepercayaan rakyat dan peran dukun perempuan (mudang). Hangul, aksara yang dirancang agar rakyat biasa mudah membaca, menjadi kebanggaan budaya Korea.',
    decline:
      'Pada abad ke-19 Joseon berada di antara Tiongkok, Rusia, dan Jepang yang menguat. Perjanjian Ganghwa (1876) dipaksakan Jepang, Pemberontakan Donghak (1894) memicu perang Tiongkok-Jepang, dan Kekaisaran Korea (1897) gagal mempertahankan kemerdekaan. Pada 1910 Jepang mencaplok Korea.',
    territories: [
      {
        from: -57,
        to: 668,
        // Goguryeo, Baekje, Silla ~ abad ke-5
        polygons: [
          [[121, 41], [122.5, 40.5], [124.3, 39.8], [125.3, 38.3], [125.7, 37.6], [126.4, 36.7], [126.3, 35], [126.5, 34.4], [127.6, 34.6], [128.7, 35], [129.4, 35.4], [129.4, 37], [128.4, 38.5], [127.6, 39.5], [129.7, 41], [130.6, 42.3], [131, 43.2], [130, 44], [128, 43.9], [126, 43.6], [124, 42.9], [122.6, 42.3], [121, 41.8]],
        ],
        note: 'Tiga Kerajaan',
      },
      {
        from: 668,
        to: 935,
        // Silla Bersatu di selatan; Balhae di utara
        polygons: [
          [[125.2, 38.6], [125.7, 37.6], [126.4, 36.7], [126.3, 35], [126.5, 34.4], [127.6, 34.6], [128.7, 35], [129.4, 35.4], [129.4, 37], [128.4, 38.4], [127.4, 39]],
          [[127.4, 39.1], [127.6, 39.5], [129.7, 41], [130.6, 42.4], [131.5, 43], [133, 43.5], [133, 45.2], [131, 46], [129, 45.8], [127, 45], [125, 44], [124, 42.5], [122.5, 41.5]],
        ],
        note: 'Silla Bersatu dan Balhae',
      },
      {
        from: 935,
        to: 1392,
        // Goryeo ~ abad ke-11
        polygons: [
          [[124.4, 39.8], [125.6, 40.2], [126.7, 40.6], [127.9, 41.4], [129.6, 41.8], [129.7, 41], [128.4, 38.8], [129.4, 37], [129.4, 35.4], [128.7, 35], [127.6, 34.6], [126.5, 34.4], [126.3, 35], [126.4, 36.7], [125.7, 37.6], [125.3, 38.3]],
        ],
        note: 'Goryeo',
      },
      {
        from: 1392,
        to: 1910,
        // Joseon dengan perbatasan Yalu dan Tumen
        polygons: [
          [[124.4, 40], [125.8, 40.9], [126.8, 41.7], [128, 42], [129.6, 42.4], [130.6, 42.4], [129.7, 41], [128.4, 38.8], [129.4, 37], [129.4, 35.4], [128.7, 35], [127.6, 34.6], [126.5, 34.4], [126.3, 35], [126.4, 36.7], [125.7, 37.6], [125.3, 38.3], [124.8, 39.2]],
        ],
        note: 'Joseon',
      },
    ],
    sources: [
      { title: 'Samguk Sagi', author: 'Kim Busik', year: 1145, kind: 'primer' },
      { title: 'Joseon Wangjo Sillok (Catatan Sejati Dinasti Joseon)', author: 'Kantor sejarah istana Joseon', year: '1413–1865', kind: 'primer' },
      { title: 'Korea Old and New: A History', author: 'Carter J. Eckert dkk.', year: 1990, kind: 'sekunder' },
      { title: 'Stela Gwanggaeto', author: 'Raja Jangsu dari Goguryeo', year: 414, kind: 'prasasti' },
    ],
  },

  // ===========================================================================
  // Jepang Klasik hingga Edo
  // ===========================================================================
  {
    id: 'jepang-klasik',
    name: 'Jepang Klasik hingga Edo',
    region: 'Asia Timur',
    start: 250,
    end: 1868,
    color: '#ff7043',
    capital: { name: 'Kyoto', lon: 135.77, lat: 35.01 },
    summary:
      'Pada mulanya para pemimpin klan di dataran Yamato membangun makam-makam raksasa dan menyerap agama Buddha serta tata negara dari Tiongkok dan Korea. Kaisar di Kyoto menjadi lambang budaya, tetapi kekuasaan nyata berpindah ke bupati Fujiwara, lalu shogun samurai, hingga Keshogunan Tokugawa menutup negeri dan menjaga perdamaian dua setengah abad.',
    highlights: [
      'Pangeran Shotoku dan Konstitusi 17 Pasal (604)',
      'Hikayat Genji karya Murasaki Shikibu (±1008)',
      'Minamoto no Yoritomo menjadi shogun pertama (1192)',
      'Invasi Mongol 1274 dan 1281',
      'Senapan tiba di Tanegashima (1543) dan Perang Sengoku',
      'Sakoku dan Dejima (1639), perdagangan terbatas dengan Belanda',
    ],
    economy:
      'Jepang hidup dari padi, ikan, dan kerajinan, dengan tanah dikelola lewat sistem kerajaan (shoen) dan kemudian oleh daimyo. Zaman Edo membawa pertumbuhan pesat: jalan raya Tokaido, pasar beras di Osaka, dan kota Edo yang berpenduduk sekitar satu juta pada abad ke-18. Perdagangan luar negeri dikendalikan lewat Nagasaki, tempat sutra Tiongkok dan perak Jepang berganti tangan.',
    religionCulture:
      'Shinto, Buddhisme, dan Konfusianisme berbaur dalam kehidupan sehari-hari. Istana Heian menciptakan kana dan sastra perempuan; zaman samurai melahirkan Zen, upacara teh, dan teater Noh; zaman Edo menghadirkan kabuki, haiku Basho, dan cetakan kayu ukiyo-e. Ilmu Barat masuk melalui Dejima sebagai rangaku.',
    decline:
      'Kedatangan kapal hitam Komodor Perry pada 1853 memaksa Jepang membuka pelabuhan, dan perjanjian tidak setara memicu kemarahan para samurai. Shogun Tokugawa Yoshinobu mengembalikan kekuasaan kepada kaisar pada 1867 (Taisei Hokan), dan Restorasi Meiji 1868 membuka babak Jepang modern.',
    territories: [
      {
        from: 250,
        to: 794,
        // Yamato: Kyushu, Shikoku, Honshu tengah-barat
        polygons: [JP_KYUSHU, JP_SHIKOKU, JP_HONSHU_WEST],
        note: 'Kofun, Asuka, dan Nara',
      },
      {
        from: 794,
        to: 1185,
        // Heian: Honshu sampai Tohoku tengah
        polygons: [JP_KYUSHU, JP_SHIKOKU, JP_HONSHU_HEIAN],
        note: 'Heian',
      },
      {
        from: 1185,
        to: 1603,
        // Kyushu sampai Honshu (Hokkaido belum)
        polygons: [JP_KYUSHU, JP_SHIKOKU, JP_HONSHU],
        note: 'Kamakura, Muromachi, dan Sengoku',
      },
      {
        from: 1603,
        to: 1868,
        polygons: [JP_KYUSHU, JP_SHIKOKU, JP_HONSHU],
        note: 'Keshogunan Tokugawa (Edo)',
      },
    ],
    sources: [
      { title: 'Nihon Shoki', author: 'Pangeran Toneri dkk.', year: 720, kind: 'primer' },
      { title: 'Genji Monogatari (Hikayat Genji)', author: 'Murasaki Shikibu', year: '±1008', kind: 'primer' },
      { title: 'A History of Japan', author: 'George Sansom', year: '1958–1963', kind: 'sekunder' },
      { title: 'The Making of Modern Japan', author: 'Marius B. Jansen', year: 2000, kind: 'sekunder' },
    ],
  },

  // ===========================================================================
  // Etiopia
  // ===========================================================================
  {
    id: 'etiopia',
    name: 'Etiopia Abad Pertengahan (Zagwe dan Solomonik)',
    region: 'Afrika',
    start: 940,
    end: 1855,
    color: '#9be564',
    capital: { name: 'Gondar', lon: 37.47, lat: 12.61 },
    summary:
      'Setelah Aksum meredup, dataran tinggi Etiopia tidak lenyap dari sejarah. Dinasti Zagwe memahat gereja-gereja dari batu hidup di Lalibela, dinasti Solomonik mengaku keturunan Raja Salomo dan Ratu Syeba, dan raja-raja Gondar membangun istana batu sebelum negeri pecah dalam Zaman Para Pangeran.',
    highlights: [
      'Sebelas gereja pahatan batu Lalibela (abad ke-12–13), situs UNESCO',
      'Yekuno Amlak mendirikan dinasti Solomonik (1270)',
      'Kebra Nagast menuturkan asal-usul wangsa dari Salomo dan Ratu Syeba',
      'Perang melawan Ahmad Gragn dari Adal (1529–1543) dengan bantuan Portugis',
      'Fasilides membangun Gondar dan Fasil Ghebbi (1636)',
      'Zemene Mesafint (1769–1855) dan penyatuan kembali oleh Tewodros II',
    ],
    economy:
      'Petani dataran tinggi menanam teff, jelai, dan gandum dengan bajak lembu, dan negara memungut upeti hasil panen. Kafilah membawa emas, gading, musk, dan budak ke pelabuhan Laut Merah dan menukarnya dengan kain, garam, dan senjata. Garam batu dari dataran Afar menjadi mata uang sehari-hari.',
    religionCulture:
      'Kekristenan Ortodoks Tewahedo, dengan kepala gereja (abun) dari Patriarkat Aleksandria, membentuk kalender, seni ikon, dan musik liturgi Etiopia. Bahasa Ge\'ez menjadi bahasa gereja dan sastra. Di samping itu hidup komunitas Muslim, Yahudi Beta Israel, dan penganut kepercayaan lokal.',
    decline:
      'Perang dengan Adal menguras negeri, dan migrasi Oromo ke utara mengubah susunan politik. Setelah Gondar melemah, para ras (panglima daerah) saling bersaing selama sekitar delapan dekade. Tewodros II menumpas mereka dan dinobatkan sebagai kaisar pada 1855, membuka babak Etiopia modern.',
    territories: [
      {
        from: 940,
        to: 1270,
        // Zagwe: Lasta, Tigray, Amhara
        polygons: [
          [[37, 13], [37.6, 14.3], [38.8, 14.8], [39.8, 14.6], [40.4, 13.8], [40.2, 12.3], [39.8, 11.3], [38.6, 11.2], [37.6, 11.6], [36.9, 12.2]],
        ],
        note: 'Dinasti Zagwe',
      },
      {
        from: 1270,
        to: 1632,
        // Solomonik: meluas ke Shewa dan selatan
        polygons: [
          [[36, 14.8], [37.6, 15.2], [39.5, 15.4], [40.5, 14.6], [41.8, 13.5], [42.5, 11.8], [42.5, 10], [42.5, 8.5], [41, 6.5], [39, 6], [37, 6.5], [36, 8], [35.2, 9.5], [35.2, 11.5], [35.5, 13]],
        ],
        note: 'Dinasti Solomonik',
      },
      {
        from: 1632,
        to: 1855,
        // Gondar dan Zemene Mesafint
        polygons: [
          [[36.3, 14.6], [37.6, 14.9], [39.3, 14.6], [40.2, 13.5], [40, 11.5], [39.7, 10], [38, 9.2], [36.8, 9.5], [35.8, 10.8], [35.5, 12.5]],
        ],
        note: 'Gondar dan Zemene Mesafint',
      },
    ],
    sources: [
      { title: 'Kebra Nagast', author: 'Tradisi Etiopia', year: '±1320', kind: 'primer' },
      { title: 'The Prester John of the Indies', author: 'Francisco Álvares', year: 1540, kind: 'primer' },
      { title: 'A History of Ethiopia', author: 'Harold G. Marcus', year: 1994, kind: 'sekunder' },
      { title: 'Gereja-gereja pahatan batu Lalibela', author: 'Penelitian situs UNESCO', year: 1978, kind: 'arkeologi' },
    ],
  },

  // ===========================================================================
  // Ghana, Pesisir Swahili, Zimbabwe Raya
  // ===========================================================================
  {
    id: 'afrika-timur-selatan',
    name: 'Ghana, Pesisir Swahili, dan Zimbabwe Raya',
    region: 'Afrika',
    start: 300,
    end: 1700,
    color: '#e879f9',
    capital: { name: 'Zimbabwe Raya', lon: 30.93, lat: -20.27 },
    summary:
      'Kisah Afrika dalam atlas ini dimulai di Sahel, tempat Kekaisaran Ghana (Wagadu) menguasai jalur emas menuju Afrika Utara. Berabad-abad kemudian, emas dari plato Zimbabwe mengalir lewat Sofala ke kota-kota dagang Swahili seperti Kilwa dan Mogadishu, hingga kedatangan Portugis mengubah peta Samudra Hindia. Ghana kuno tidak sama dengan negara Ghana masa kini, yang mengambil namanya pada 1957.',
    highlights: [
      'Wagadu (Ghana) dan kota kembar Koumbi Saleh yang digambarkan al-Bakri (1068)',
      'Mapungubwe dan Zimbabwe Raya, kota batu bangsa Shona',
      'Kilwa, Mogadishu, dan Mombasa sebagai kota dagang Samudra Hindia',
      'Ibnu Battuta mengunjungi Kilwa dan Mogadishu (1331)',
      'Armada Zheng He dan jerapah yang sampai ke istana Ming',
      'Portugis menjarah Kilwa dan Mombasa (1505) dan Fort Jesus (1593)',
    ],
    economy:
      'Emas Bambuk dan Bure dari hulu Senegal dan Niger ditukar dengan garam dari Sahara serta tembaga dan kain dari utara; raja Ghana memungut bea di tiap muatan. Di timur, Zimbabwe Raya menjual emas, gading, dan hasil ternak kepada pedagang di Sofala, yang mengirimkannya ke Kilwa dan lalu ke Arab, Persia, India, dan Tiongkok. Sebagai balasan datang manik kaca, kain katun, dan porselen, yang sampai kini ditemukan di reruntuhan Zimbabwe Raya.',
    religionCulture:
      'Orang Soninke di Ghana memuliakan roh leluhur dan penguasa, sementara pedagang Muslim tinggal di kota terpisah dengan masjid-masjid. Kota-kota Swahili memadukan bahasa Bantu dengan kosakata Arab, memeluk Islam, dan membangun masjid serta istana dari batu karang. Zimbabwe Raya dibangun orang Shona; mitos kolonial yang menyangkal hal ini sudah dibantah oleh arkeologi.',
    decline:
      'Ghana melemah oleh kemarau dan perang, lalu direbut Almoravid menurut tradisi pada 1076, meskipun para sejarawan masih berdebat apakah penaklukan itu benar terjadi. Zimbabwe Raya ditinggalkan sekitar 1450, mungkin karena menipisnya sumber daya dan bergesernya rute emas. Portugis menguasai pesisir Mozambik dan Kenya hingga Oman merebut Fort Jesus pada 1698.',
    territories: [
      {
        from: 300,
        to: 1076,
        // Wagadu / Ghana di Sahel (antara Senegal dan Niger atas)
        polygons: [
          [[-12, 14.2], [-11.5, 16], [-9, 17.5], [-6.5, 18], [-4.5, 17.5], [-4, 15.5], [-5.2, 14], [-7.5, 13.6], [-10, 13.8]],
        ],
        note: 'Kekaisaran Ghana (Wagadu)',
      },
      {
        from: 1076,
        to: 1450,
        // Kota Swahili (pesisir tipis) dan plato Zimbabwe
        polygons: [
          SWAHILI_NORTH,
          SWAHILI_SOUTH,
          // Plato Zimbabwe (Mapungubwe dan Zimbabwe Raya)
          [[28, -18], [30, -17.2], [32, -17.6], [33, -19], [32.8, -21.5], [31, -22], [29, -21.5], [27.8, -20]],
        ],
        note: 'Kota Swahili dan Zimbabwe Raya',
      },
      {
        from: 1450,
        to: 1700,
        // Mutapa dan pesisir Swahili di bawah Portugis
        polygons: [
          [[29, -16.5], [30.5, -15.5], [32.5, -15.6], [34, -16], [34.8, -17.8], [33.5, -18.8], [31.5, -18.2], [29.5, -17.6]],
          SWAHILI_NORTH,
          SWAHILI_SOUTH,
        ],
        note: 'Mutapa dan Swahili di bawah Portugis',
      },
    ],
    sources: [
      { title: 'Kitab al-Masalik wa al-Mamalik', author: 'Abu Ubayd al-Bakri', year: 1068, kind: 'primer' },
      { title: 'Rihla (Catatan perjalanan)', author: 'Ibnu Battuta', year: 1355, kind: 'primer' },
      { title: 'Great Zimbabwe', author: 'Peter Garlake', year: 1973, kind: 'sekunder' },
      { title: 'The Swahili: Reconstructing the History and Language of an African Society', author: 'Derek Nurse & Thomas Spear', year: 1985, kind: 'sekunder' },
      { title: 'Penggalian Koumbi Saleh dan Great Zimbabwe', author: 'Para arkeolog', year: 'abad ke-20', kind: 'arkeologi' },
    ],
  },
];
