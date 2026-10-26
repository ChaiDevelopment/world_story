import type { Topic } from '../../types';

/** Sejarah Islam dunia: kisah para nabi menurut Al-Qur'an, sirah Nabi Muhammad saw., hingga peradaban Muslim modern. */
export const topicIslamDunia: Topic = {
  id: 'islam-dunia',
  title: "Sejarah Islam Dunia: Dari Nabi Adam hingga Kini",
  subtitle: "Dari rantai para nabi pembawa tauhid, kehidupan Nabi Muhammad saw., hingga peradaban Muslim yang membentang dari Andalusia sampai Nusantara.",
  intro:
    "Dalam pelajaran Sejarah Kebudayaan Islam di madrasah dan sekolah Indonesia, kisah Islam dimulai jauh sebelum Makkah abad ke-7. Islam memandang dirinya sebagai kelanjutan pesan tauhid, yakni penghambaan hanya kepada Allah, yang dibawa oleh rangkaian nabi dan rasul sejak Nabi Adam a.s. hingga Nabi Muhammad saw. Dua puluh lima di antaranya wajib dikenal oleh setiap Muslim karena namanya disebut dalam Al-Qur'an.\n\n" +
    "Halaman ini mengikuti urutan pelajaran itu. Pertama, kisah para nabi sebagaimana disampaikan Al-Qur'an, hadis, dan tradisi qishashul anbiya. Kedua, kehidupan Nabi Muhammad saw. (sirah) dari kelahiran hingga wafatnya. Ketiga, perjalanan sejarah umat dan peradaban Muslim: Khulafaur Rasyidin, dinasti-dinasti besar, ilmu pengetahuan, tiga kerajaan besar, masa kolonial, hingga dunia Muslim sekarang.\n\n" +
    "Kisah para nabi bersifat keimanan, sedangkan sejarah peradaban Muslim dapat ditelusuri dengan sumber dan tahun. Keduanya disajikan di sini dengan hormat. Pada hal yang ditafsirkan berbeda oleh mazhab Sunni dan Syiah, kedua pandangan dicatat secara netral.",
  relatedCivIds: ['khilafah', 'ottoman', 'mughal-india', 'mali-songhai', 'kesultanan-awal', 'mongol'],
  note:
    "Kisah para nabi sebelum Nabi Muhammad saw. bersumber dari Al-Qur'an, hadis, dan tradisi Islam (qishashul anbiya). Kisah-kisah itu tidak dapat ditanggali secara historis, dan sebagian lokasinya bersifat tradisional, sehingga tidak diberi tahun. Mulai dari Nabi Muhammad saw., peristiwa-peristiwa bersifat historis dan diberi tahun; sebagian tahun masih berupa perkiraan dan ditandai dengan tanda ±. Para nabi dihormati dan tidak digambarkan wujud fisiknya.",
  sections: [
    {
      title: "Dari Adam hingga Ibrahim",
      intro: "Para nabi awal yang menurut tradisi menyeru umatnya kembali kepada tauhid. Semua kisah di bagian ini menurut tradisi, tanpa tahun.",
      entries: [
        {
          title: "Nabi Adam a.s.: manusia pertama dan khalifah di bumi",
          when: "menurut tradisi",
          text:
            "Al-Qur'an menyebut Nabi Adam a.s. sebagai manusia pertama yang Allah ciptakan dan jadikan khalifah di bumi. Para malaikat diperintahkan bersujud sebagai penghormatan, dan Adam diajari nama-nama segala sesuatu sehingga ia memiliki ilmu.\n\n" +
            "Adam dan istrinya, Hawa, ditempatkan di surga dan dilarang mendekati satu pohon. Keduanya tergelincir, lalu bertobat, dan Allah menerima tobat mereka sebelum mereka turun ke bumi. Hikmah utamanya: manusia bisa salah, tetapi pintu tobat selalu terbuka. Tradisi Islam juga menuturkan kisah kedua putra Adam, Habil dan Qabil, sebagai pelajaran tentang akibat iri hati.",
          facts: [["Kaum/umat", "Keturunan pertama manusia"], ["Mukjizat/peristiwa", "Diajari nama-nama; sujud para malaikat"], ["Disebut dalam", "QS. Al-Baqarah (2): 30-39; QS. Al-A'raf (7): 11-25"]],
        },
        {
          title: "Nabi Idris a.s.: ketekunan dan ilmu",
          when: "menurut tradisi",
          text:
            "Al-Qur'an menyebut Nabi Idris a.s. sebagai orang yang sangat jujur (siddiq) dan nabi yang ditinggikan derajatnya. Keterangan tentang kehidupannya dalam Al-Qur'an sangat ringkas, sehingga rincian dalam kitab-kitab qishashul anbiya berasal dari riwayat dan tradisi yang tidak seragam.\n\n" +
            "Dalam tradisi, Idris dikenal rajin menuntut dan mengajarkan ilmu serta bersabar dalam ibadah. Hikmahnya: kesabaran dan kejujuran adalah jalan menuju kedudukan yang tinggi di sisi Allah.",
          facts: [["Kaum/umat", "Tidak dirinci dalam Al-Qur'an"], ["Mukjizat/peristiwa", "Disebut sebagai siddiq dan nabi yang ditinggikan derajatnya"], ["Disebut dalam", "QS. Maryam (19): 56-57; QS. Al-Anbiya' (21): 85"]],
        },
        {
          title: "Nabi Nuh a.s.: kapal di tengah banjir besar",
          when: "menurut tradisi",
          text:
            "Nabi Nuh a.s. menyeru kaumnya selama waktu yang sangat panjang agar menyembah Allah semata dan meninggalkan berhala. Hanya sedikit yang beriman, sementara para pembesar kaum mengejeknya.\n\n" +
            "Atas wahyu Allah, Nuh membangun sebuah kapal. Ketika banjir besar datang, orang-orang beriman dan pasangan makhluk hidup diselamatkan di dalamnya. Putra Nuh yang menolak naik ikut tenggelam, sebuah pengingat bahwa keselamatan bergantung pada iman, bukan hubungan darah. Nuh termasuk lima nabi ulul azmi, yaitu rasul yang paling teguh bersabar: Nuh, Ibrahim, Musa, Isa, dan Muhammad.",
          facts: [["Kaum/umat", "Kaum Nuh"], ["Mukjizat/peristiwa", "Kapal dan banjir besar"], ["Kedudukan", "Ulul azmi"], ["Disebut dalam", "QS. Nuh (71); QS. Hud (11): 25-48"]],
        },
        {
          title: "Nabi Hud a.s. dan kaum 'Ad",
          when: "menurut tradisi",
          place: { name: "Ahqaf, Yaman (menurut tradisi)", lon: 49.0, lat: 17.0 },
          text:
            "Kaum 'Ad dikenal Al-Qur'an sebagai bangsa yang kuat, membangun bangunan menjulang, dan tinggal di al-Ahqaf, kawasan perbukitan pasir. Nabi Hud a.s., yang berasal dari kaum itu sendiri, mengingatkan mereka agar bersyukur dan tidak sombong atas kekuatan mereka.\n\n" +
            "Mereka menolak, dan azab berupa angin yang sangat dahsyat menimpa mereka, sementara Hud dan pengikutnya selamat. Lokasi al-Ahqaf lazim dikaitkan dengan wilayah selatan Jazirah Arab, tetapi letak persisnya tidak pasti. Hikmahnya: kekuasaan dan kemegahan tidak berarti bila disertai kesombongan.",
          facts: [["Kaum/umat", "Kaum 'Ad"], ["Mukjizat/peristiwa", "Azab angin dahsyat"], ["Disebut dalam", "QS. Hud (11): 50-60; QS. Al-A'raf (7): 65-72; QS. Al-Ahqaf (46): 21"]],
        },
        {
          title: "Nabi Saleh a.s. dan unta betina kaum Tsamud",
          when: "menurut tradisi",
          place: { name: "Hijr / Mada'in Salih (menurut tradisi)", lon: 37.95, lat: 26.79 },
          text:
            "Kaum Tsamud memahat rumah-rumah di gunung batu dan hidup makmur. Nabi Saleh a.s. mengajak mereka menyembah Allah. Sebagai tanda kebenaran, datanglah seekor unta betina yang berbagi sumber air dengan mereka secara bergiliran, dan mereka dilarang mengganggunya.\n\n" +
            "Sebagian pembesar kaum tetap melanggar dan menyembelih unta itu, sehingga azab menimpa mereka. Situs Hijr (Mada'in Salih) di Arab Saudi bagian barat laut, yang memiliki makam-makam pahatan, sering dikaitkan dengan Tsamud dalam tradisi; kaitan itu bersifat tradisional. Hikmahnya: menghormati tanda-tanda Allah dan hak makhluk lain atas air dan alam.",
          facts: [["Kaum/umat", "Kaum Tsamud"], ["Mukjizat/peristiwa", "Unta betina sebagai tanda"], ["Disebut dalam", "QS. Al-A'raf (7): 73-79; QS. Hud (11): 61-68; QS. Asy-Syu'ara' (26): 141-159"]],
        },
        {
          title: "Nabi Ibrahim a.s.: bapak para nabi dan kekasih Allah",
          when: "menurut tradisi",
          place: { name: "Makkah (menurut tradisi)", lon: 39.83, lat: 21.42 },
          text:
            "Nabi Ibrahim a.s. dikenal sebagai khalilullah (kekasih Allah) dan hanif, pencari tauhid yang lurus. Ia menolak berhala-berhala kaumnya dengan hujah dan keberanian, hingga dilemparkan ke dalam api, tetapi Allah menjadikan api itu dingin dan menyelamatkannya.\n\n" +
            "Menurut tradisi ia meninggalkan putranya Ismail dan istrinya Hajar di lembah Makkah, dan kemudian bersama Ismail meninggikan fondasi Kaabah. Ujian terbesarnya adalah perintah menyembelih putranya, yang menjadi dasar ibadah kurban dan hari raya Idul Adha. Ibrahim adalah nabi ulul azmi, dan dari keturunannya lahir banyak nabi, termasuk Ishaq, Ya'qub, dan Nabi Muhammad saw. lewat jalur Ismail.",
          facts: [["Kaum/umat", "Kaum Ibrahim dan penguasa zamannya"], ["Mukjizat/peristiwa", "Selamat dari api; pembangunan Kaabah; ujian kurban"], ["Kedudukan", "Ulul azmi"], ["Disebut dalam", "QS. Al-Anbiya' (21): 51-70; QS. Ibrahim (14); QS. Ash-Shaffat (37): 99-113"]],
        },
        {
          title: "Nabi Luth a.s. dan kaumnya",
          when: "menurut tradisi",
          text:
            "Nabi Luth a.s. adalah kerabat Nabi Ibrahim a.s. yang diutus kepada penduduk beberapa kota di sekitar Laut Mati menurut tradisi. Ia mengingatkan mereka agar meninggalkan perbuatan keji dan pelanggaran terhadap tamu serta sesama.\n\n" +
            "Seruannya ditolak, dan para utusan malaikat membawa azab kepada kaum itu sementara Luth dan keluarganya yang beriman diselamatkan. Hikmahnya: menjaga kehormatan, keadilan, dan perlakuan baik kepada tamu serta pentingnya tetap teguh meski seorang diri di tengah masyarakat.",
          facts: [["Kaum/umat", "Penduduk kota-kota kaum Luth"], ["Mukjizat/peristiwa", "Keselamatan keluarga beriman; azab atas kaum yang ingkar"], ["Disebut dalam", "QS. Al-A'raf (7): 80-84; QS. Hud (11): 77-83"]],
        },
      ],
    },
    {
      title: "Keturunan Ibrahim",
      intro: "Anak, cucu, dan keturunan Nabi Ibrahim a.s. yang menurut tradisi meneruskan risalah tauhid, serta para nabi yang diutus kepada kaum lain.",
      entries: [
        {
          title: "Nabi Ismail a.s.: anak yang sabar dan Kaabah",
          when: "menurut tradisi",
          place: { name: "Makkah (menurut tradisi)", lon: 39.83, lat: 21.42 },
          text:
            "Nabi Ismail a.s. adalah putra Nabi Ibrahim a.s. dari Hajar. Tradisi Islam menuturkan bahwa Hajar berlari tujuh kali antara bukit Safa dan Marwah mencari air untuk bayinya, lalu air Zamzam memancar. Peristiwa itu menjadi dasar sai dalam ibadah haji dan umrah.\n\n" +
            "Ismail dikenang sebagai anak yang sabar dan patuh ketika ayahnya menerima perintah untuk menyembelihnya, dan Allah menggantinya dengan seekor sembelihan besar. Menurut tradisi ia membantu ayahnya meninggikan Kaabah dan menjadi leluhur bangsa Arab keturunan Adnan.",
          facts: [["Kaum/umat", "Penduduk sekitar Makkah, termasuk suku Jurhum menurut tradisi"], ["Mukjizat/peristiwa", "Air Zamzam; kesabaran dalam ujian kurban"], ["Disebut dalam", "QS. Al-Baqarah (2): 125-127; QS. Maryam (19): 54-55"]],
        },
        {
          title: "Nabi Ishaq a.s.: kabar gembira bagi Ibrahim",
          when: "menurut tradisi",
          text:
            "Nabi Ishaq a.s. adalah putra Nabi Ibrahim a.s. dari Sarah. Al-Qur'an menyebut kelahirannya sebagai kabar gembira yang disampaikan para malaikat ketika Ibrahim dan istrinya telah lanjut usia.\n\n" +
            "Ishaq menjadi nabi dan ayah Nabi Ya'qub a.s., sehingga dari garis keturunannya kelak muncul para nabi Bani Israil. Hikmahnya: karunia Allah dapat datang di luar perkiraan manusia, dan iman diwariskan dari generasi ke generasi.",
          facts: [["Kaum/umat", "Keluarga Ibrahim"], ["Mukjizat/peristiwa", "Kelahiran sebagai kabar gembira"], ["Disebut dalam", "QS. Hud (11): 69-73; QS. Ash-Shaffat (37): 112"]],
        },
        {
          title: "Nabi Ya'qub a.s.: kesabaran seorang ayah",
          when: "menurut tradisi",
          text:
            "Nabi Ya'qub a.s., juga dikenal dengan nama Israil, adalah putra Ishaq a.s. dan cucu Ibrahim a.s. Dari dua belas putranya berasal kelompok yang kemudian dikenal sebagai Bani Israil.\n\n" +
            "Kisah hidupnya yang paling terkenal adalah kesedihan atas hilangnya putranya Yusuf, yang ia hadapi dengan sabar yang indah (sabrun jamil) dan tidak putus berharap pada Allah. Hikmahnya: kesabaran dan tawakal membawa pertemuan kembali dan kelapangan.",
          facts: [["Kaum/umat", "Keluarga Ibrahim dan Ishaq; leluhur Bani Israil"], ["Mukjizat/peristiwa", "Kesabaran atas kehilangan Yusuf"], ["Disebut dalam", "QS. Yusuf (12); QS. Al-Baqarah (2): 132-133"]],
        },
        {
          title: "Nabi Yusuf a.s.: dari sumur ke istana Mesir",
          when: "menurut tradisi",
          place: { name: "Mesir", lon: 31.24, lat: 30.04 },
          text:
            "Al-Qur'an menyebut kisah Nabi Yusuf a.s. sebagai ahsanul qashash, kisah terbaik, dalam satu surah penuh. Yusuf muda bermimpi sebelas bintang, matahari, dan bulan bersujud kepadanya. Saudara-saudaranya yang iri melemparkannya ke dalam sumur, lalu ia dijual sebagai budak di Mesir.\n\n" +
            "Di sana ia diuji oleh godaan dan dipenjarakan, tetapi tetap menjaga kehormatan dan kejujurannya. Karena kemampuannya menakwilkan mimpi, ia diangkat mengelola lumbung negeri menghadapi tahun-tahun paceklik, dan akhirnya bertemu kembali dengan ayah dan saudara-saudaranya dengan memaafkan mereka. Hikmahnya: sabar, jujur, dan pemaaf membuahkan kemuliaan.",
          facts: [["Kaum/umat", "Keluarga Ya'qub; kemudian penguasa dan rakyat Mesir"], ["Mukjizat/peristiwa", "Takwil mimpi; pengelolaan lumbung saat paceklik"], ["Disebut dalam", "QS. Yusuf (12)"]],
        },
        {
          title: "Nabi Ayyub a.s.: teladan kesabaran dalam sakit",
          when: "menurut tradisi",
          text:
            "Nabi Ayyub a.s. diuji dengan hilangnya harta, keluarga, dan kesehatannya dalam waktu lama. Al-Qur'an memujinya sebagai hamba yang sangat sabar dan selalu kembali kepada Allah.\n\n" +
            "Ia berdoa dengan penuh kerendahan hati, lalu Allah menyembuhkannya dan mengembalikan keluarganya. Kisahnya mengajarkan bahwa ujian bukan tanda ditinggalkan, dan bahwa doa yang disertai kesabaran tidak sia-sia.",
          facts: [["Kaum/umat", "Tidak dirinci dalam Al-Qur'an"], ["Mukjizat/peristiwa", "Kesembuhan dan pemulihan setelah ujian panjang"], ["Disebut dalam", "QS. Al-Anbiya' (21): 83-84; QS. Shad (38): 41-44"]],
        },
        {
          title: "Nabi Syu'aib a.s. dan penduduk Madyan",
          when: "menurut tradisi",
          place: { name: "Madyan (menurut tradisi)", lon: 35.2, lat: 28.4 },
          text:
            "Nabi Syu'aib a.s. diutus kepada penduduk Madyan, yang dikenal sebagai pedagang. Ia menyeru mereka agar menyembah Allah dan berhenti mengurangi takaran serta timbangan, karena itu adalah bentuk kecurangan dalam perdagangan.\n\n" +
            "Sebagian besar kaumnya menolak dan mengancam mengusirnya, hingga azab menimpa mereka. Dalam tradisi Syu'aib sering dikaitkan sebagai mertua Nabi Musa a.s., meski Al-Qur'an tidak menyebut namanya secara eksplisit dalam kisah itu. Letak Madyan dikaitkan dengan kawasan barat laut Jazirah Arab, bersifat tradisional. Hikmahnya: kejujuran dalam jual beli adalah bagian dari iman.",
          facts: [["Kaum/umat", "Penduduk Madyan"], ["Mukjizat/peristiwa", "Seruan keadilan dalam takaran dan timbangan"], ["Disebut dalam", "QS. Al-A'raf (7): 85-93; QS. Hud (11): 84-95"]],
        },
        {
          title: "Nabi Zulkifli a.s.",
          when: "menurut tradisi",
          text:
            "Nabi Zulkifli a.s. disebut Al-Qur'an dua kali dalam daftar hamba-hamba pilihan yang sabar dan saleh. Keterangan tentang kisahnya sangat ringkas, sehingga para ulama dan penulis qishashul anbiya menuturkannya dengan rincian yang berbeda-beda.\n\n" +
            "Sebagian tradisi menafsirkan julukan Zulkifli, yang berarti pemegang jaminan, sebagai orang yang menepati janji dan tanggung jawabnya. Yang dinyatakan pasti oleh Al-Qur'an hanyalah bahwa ia termasuk orang-orang yang sabar dan terpilih.",
          facts: [["Kaum/umat", "Tidak dirinci dalam Al-Qur'an"], ["Mukjizat/peristiwa", "Disebut sebagai hamba yang sabar dan terpilih"], ["Disebut dalam", "QS. Al-Anbiya' (21): 85; QS. Shad (38): 48"]],
        },
      ],
    },
    {
      title: "Bani Israil hingga Isa",
      intro: "Para nabi yang diutus kepada Bani Israil dan sekitarnya, dari Musa a.s. hingga Isa a.s.",
      entries: [
        {
          title: "Nabi Musa a.s.: dari Sungai Nil ke Gunung Sinai",
          when: "menurut tradisi",
          place: { name: "Mesir", lon: 31.24, lat: 30.04 },
          text:
            "Nabi Musa a.s. adalah nabi yang namanya paling banyak disebut dalam Al-Qur'an. Sebagai bayi ia dihanyutkan ibunya di sungai dan dipungut keluarga istana Firaun. Dewasa, ia meninggalkan Mesir, menetap di Madyan, lalu menerima wahyu pertama di lembah Thuwa dekat Gunung Thur.\n\n" +
            "Bersama saudaranya Harun, ia kembali kepada Firaun menyerukan keadilan dan agar Bani Israil dibebaskan dari penindasan. Tongkatnya berubah menjadi ular dan Allah membelah laut agar Bani Israil dapat menyeberang. Kepadanya diturunkan Taurat. Musa adalah nabi ulul azmi.",
          facts: [["Kaum/umat", "Bani Israil dan Firaun"], ["Mukjizat/peristiwa", "Tongkat; terbelahnya laut; Taurat"], ["Kedudukan", "Ulul azmi"], ["Disebut dalam", "QS. Taha (20); QS. Al-Qasas (28)"]],
        },
        {
          title: "Nabi Harun a.s.: pendamping dan juru bicara Musa",
          when: "menurut tradisi",
          place: { name: "Mesir", lon: 31.24, lat: 30.04 },
          text:
            "Nabi Harun a.s. adalah saudara Nabi Musa a.s. Musa memohon kepada Allah agar Harun dijadikan pembantu karena ia lebih fasih berbicara, dan permohonan itu dikabulkan.\n\n" +
            "Ketika Musa pergi menerima Taurat, Harun tinggal bersama Bani Israil dan berusaha mencegah mereka menyembah patung anak sapi. Hikmahnya: dakwah sering membutuhkan kerja sama, dan setiap orang memiliki peran yang saling melengkapi.",
          facts: [["Kaum/umat", "Bani Israil"], ["Mukjizat/peristiwa", "Mendampingi Musa; menegur penyembahan patung anak sapi"], ["Disebut dalam", "QS. Taha (20): 29-36 dan 90-94; QS. Al-Qasas (28): 34-35"]],
        },
        {
          title: "Nabi Daud a.s.: raja, nabi, dan penerima Zabur",
          when: "menurut tradisi",
          place: { name: "Baitulmaqdis", lon: 35.23, lat: 31.78 },
          text:
            "Nabi Daud a.s. dikenal sebagai pemuda yang pemberani. Menurut Al-Qur'an ia mengalahkan Jalut (Goliat) dalam pertempuran, kemudian dianugerahi kerajaan dan hikmah. Kepadanya diturunkan Zabur.\n\n" +
            "Allah menundukkan gunung dan burung untuk bertasbih bersamanya, dan melunakkan besi untuknya sehingga ia dapat membuat baju besi. Suaranya merdu dalam bertasbih. Ia dikenal adil dalam memutus perkara. Hikmahnya: kekuasaan adalah amanah dan kekuatan harus disertai rasa syukur.",
          facts: [["Kaum/umat", "Bani Israil"], ["Mukjizat/peristiwa", "Zabur; mengalahkan Jalut; melunakkan besi"], ["Disebut dalam", "QS. Shad (38): 17-26; QS. Saba' (34): 10-11"]],
        },
        {
          title: "Nabi Sulaiman a.s.: kerajaan, hikmah, dan Ratu Saba'",
          when: "menurut tradisi",
          place: { name: "Baitulmaqdis", lon: 35.23, lat: 31.78 },
          text:
            "Nabi Sulaiman a.s. mewarisi kenabian dan kerajaan dari ayahnya, Daud a.s. Al-Qur'an menyebut ia mengerti bahasa burung dan dikaruniai kekuasaan atas angin, jin, dan banyak makhluk. Kisah semut yang memperingatkan kaumnya dan burung hudhud yang membawa kabar tentang kerajaan Saba' menjadi cerita yang sangat dikenal.\n\n" +
            "Ratu Saba' akhirnya datang dan beriman. Sulaiman tidak menyombongkan kekuasaannya, melainkan berkata bahwa semua itu adalah karunia Tuhannya untuk menguji rasa syukurnya. Hikmahnya: kekayaan dan kekuasaan paling bernilai bila dipakai bersyukur dan menegakkan keadilan.",
          facts: [["Kaum/umat", "Bani Israil dan kerajaan Saba'"], ["Mukjizat/peristiwa", "Mengerti bahasa burung; kekuasaan atas angin dan jin"], ["Disebut dalam", "QS. An-Naml (27): 15-44; QS. Shad (38): 30-40"]],
        },
        {
          title: "Nabi Ilyas a.s.",
          when: "menurut tradisi",
          text:
            "Nabi Ilyas a.s. diutus kepada suatu kaum yang menyembah berhala bernama Ba'l. Ia mengingatkan mereka agar menyembah Allah, Tuhan yang menciptakan yang terbaik, tetapi mayoritas mendustakannya.\n\n" +
            "Al-Qur'an mencatat bahwa hamba-hamba Allah yang tulus di antara mereka diselamatkan dan Ilyas mendapat salam kehormatan dari Allah. Lokasi tepatnya tidak ditentukan Al-Qur'an dan tidak dicantumkan di sini.",
          facts: [["Kaum/umat", "Kaum penyembah Ba'l"], ["Mukjizat/peristiwa", "Seruan kembali kepada tauhid"], ["Disebut dalam", "QS. Ash-Shaffat (37): 123-132; QS. Al-An'am (6): 85"]],
        },
        {
          title: "Nabi Ilyasa' a.s.",
          when: "menurut tradisi",
          text:
            "Nabi Ilyasa' a.s. disebut Al-Qur'an dalam daftar para nabi yang dilebihkan derajatnya atas seluruh alam. Dalam tradisi ia dikenal sebagai pengganti dan murid Nabi Ilyas a.s.\n\n" +
            "Rincian kisahnya dalam Al-Qur'an sangat ringkas. Namanya mengingatkan bahwa risalah tauhid diteruskan dari satu nabi kepada pengganti berikutnya.",
          facts: [["Kaum/umat", "Bani Israil menurut tradisi"], ["Mukjizat/peristiwa", "Kelanjutan dakwah Ilyas"], ["Disebut dalam", "QS. Al-An'am (6): 86; QS. Shad (38): 48"]],
        },
        {
          title: "Nabi Yunus a.s.: doa di perut ikan",
          when: "menurut tradisi",
          place: { name: "Ninawa (menurut tradisi)", lon: 43.15, lat: 36.36 },
          text:
            "Nabi Yunus a.s. diutus kepada kaum yang menurut tradisi tinggal di Ninawa. Karena kecewa atas penolakan kaumnya, ia pergi sebelum mendapat izin. Dalam pelayaran ia tertelan seekor ikan besar.\n\n" +
            "Di dalam kegelapan itu ia berdoa: tidak ada Tuhan selain Engkau, Mahasuci Engkau, sungguh aku termasuk orang yang zalim. Allah menyelamatkannya. Sementara itu kaumnya beriman, dan Al-Qur'an menyebut kaum Yunus sebagai kaum yang imannya diterima dan diberi kesempatan hidup lebih lama. Hikmahnya: tobat dan doa yang tulus membawa pertolongan.",
          facts: [["Kaum/umat", "Kaum Yunus"], ["Mukjizat/peristiwa", "Selamat dari perut ikan; tobat kaumnya diterima"], ["Disebut dalam", "QS. Yunus (10): 98; QS. Al-Anbiya' (21): 87-88; QS. Ash-Shaffat (37): 139-148"]],
        },
        {
          title: "Nabi Zakaria a.s.: doa seorang yang lanjut usia",
          when: "menurut tradisi",
          place: { name: "Baitulmaqdis", lon: 35.23, lat: 31.78 },
          text:
            "Nabi Zakaria a.s. adalah pengasuh Maryam di mihrab. Ketika melihat Maryam selalu mendapat rezeki dari sisi Allah, ia berdoa dengan lirih memohon keturunan, padahal ia sudah lanjut usia dan istrinya dikenal tidak dapat melahirkan.\n\n" +
            "Doanya dikabulkan dengan kabar kelahiran Yahya. Sebagai tanda, ia tidak berbicara kepada orang selama tiga hari kecuali dengan isyarat. Hikmahnya: tidak ada kata terlambat untuk berdoa dan berharap kepada Allah.",
          facts: [["Kaum/umat", "Bani Israil"], ["Mukjizat/peristiwa", "Kelahiran Yahya di usia lanjut"], ["Disebut dalam", "QS. Maryam (19): 1-11; QS. Ali 'Imran (3): 37-41"]],
        },
        {
          title: "Nabi Yahya a.s.: nabi yang saleh sejak muda",
          when: "menurut tradisi",
          text:
            "Nabi Yahya a.s. adalah putra Nabi Zakaria a.s. Al-Qur'an menyebutnya diberi hikmah sejak kanak-kanak, penuh kasih sayang, bersih, dan bertakwa, serta berbakti kepada kedua orang tuanya.\n\n" +
            "Ia disebutkan membenarkan kalimat dari Allah, yakni Nabi Isa a.s. Dalam salam Al-Qur'an, keselamatan dilimpahkan kepadanya pada hari kelahirannya, hari wafatnya, dan hari ia dibangkitkan.",
          facts: [["Kaum/umat", "Bani Israil"], ["Mukjizat/peristiwa", "Diberi hikmah sejak kanak-kanak"], ["Disebut dalam", "QS. Maryam (19): 12-15; QS. Ali 'Imran (3): 39"]],
        },
        {
          title: "Nabi Isa a.s.: putra Maryam dan nabi bagi Bani Israil",
          when: "menurut tradisi",
          place: { name: "Baitulmaqdis", lon: 35.23, lat: 31.78 },
          text:
            "Dalam Al-Qur'an, Nabi Isa a.s. (Isa al-Masih, putra Maryam) lahir dari Maryam dengan kuasa Allah tanpa seorang ayah. Ia berbicara sejak bayi untuk membela kehormatan ibunya. Maryam dimuliakan Al-Qur'an dengan satu surah yang memakai namanya.\n\n" +
            "Isa diutus kepada Bani Israil dengan Injil. Dengan izin Allah ia menyembuhkan orang sakit dan menghidupkan yang mati, tetapi Islam menegaskan bahwa ia adalah hamba dan rasul Allah, bukan Tuhan atau anak Tuhan. Islam juga mengajarkan bahwa Allah mengangkatnya dan bahwa ia tidak disalib. Isa adalah nabi ulul azmi. Ia diimani sebagai salah seorang nabi besar sebelum Nabi Muhammad saw., yang membenarkan risalah para nabi dan menjadi penutup (khatamun nabiyyin).",
          facts: [["Kaum/umat", "Bani Israil"], ["Mukjizat/peristiwa", "Lahir tanpa ayah; menyembuhkan atas izin Allah; Injil"], ["Kedudukan", "Ulul azmi"], ["Disebut dalam", "QS. Ali 'Imran (3): 45-59; QS. Maryam (19): 16-36; QS. Al-Ma'idah (5): 110-118"]],
        },
      ],
    },
    {
      title: "Kehidupan Nabi Muhammad saw.",
      intro: "Sirah Nabi Muhammad saw. adalah bagian awal sejarah Islam yang dapat ditelusuri lewat sumber-sumber tertulis. Tahun di bawah ini adalah tahun Masehi; beberapa di antaranya perkiraan.",
      entries: [
        {
          title: "Kelahiran di Makkah dan Tahun Gajah",
          when: "±570 M",
          year: 570,
          place: { name: "Makkah", lon: 39.83, lat: 21.42 },
          text:
            "Nabi Muhammad saw. lahir di Makkah dari suku Quraisy, kabilah yang mengurus Kaabah dan melayani para peziarah. Ayahnya, Abdullah, wafat sebelum beliau lahir, dan ibunya bernama Aminah. Tahun kelahirannya dikenal sebagai Tahun Gajah, ketika pasukan Abrahah dari Yaman dengan gajahnya datang hendak menyerang Kaabah, peristiwa yang diabadikan dalam QS. Al-Fil (105).\n\n" +
            "Para sejarawan umumnya menempatkannya sekitar tahun 570 M. Tradisi umat Islam memperingati tanggal 12 Rabiulawal sebagai Maulid, sedangkan ketepatan hari dan tahun dalam kalender Masehi tetap diperkirakan.",
          facts: [["Suku", "Quraisy, Bani Hasyim"], ["Orang tua", "Abdullah dan Aminah"], ["Peristiwa", "Tahun Gajah"]],
          civId: "khilafah",
        },
        {
          title: "Masa kanak-kanak: Halimah, Abdul Muthalib, dan Abu Thalib",
          when: "±570-595 M",
          year: 575,
          place: { name: "Makkah", lon: 39.83, lat: 21.42 },
          text:
            "Sesuai kebiasaan bangsawan Makkah, bayi Muhammad diserahkan kepada ibu susu dari pedalaman, yaitu Halimah as-Sa'diyah dari Bani Sa'd, agar tumbuh di udara gurun yang bersih dan belajar bahasa Arab yang fasih. Setelah ibunya Aminah wafat, beliau diasuh kakeknya, Abdul Muthalib, pemuka Quraisy, lalu pamannya Abu Thalib setelah kakeknya meninggal.\n\n" +
            "Di bawah asuhan Abu Thalib, beliau ikut dalam kafilah dagang dan bekerja menggembala. Dalam masyarakatnya beliau dikenal jujur sehingga dijuluki al-Amin, orang yang dapat dipercaya.",
          facts: [["Ibu susu", "Halimah as-Sa'diyah"], ["Pengasuh", "Abdul Muthalib, kemudian Abu Thalib"], ["Julukan", "Al-Amin"]],
          civId: "khilafah",
        },
        {
          title: "Menikah dengan Khadijah",
          when: "±595 M",
          year: 595,
          place: { name: "Makkah", lon: 39.83, lat: 21.42 },
          text:
            "Khadijah binti Khuwailid adalah saudagar wanita terpandang di Makkah. Ia mempercayakan perdagangannya kepada Muhammad muda yang kemudian memimpin kafilahnya ke Syam. Terkesan oleh kejujuran dan akhlaknya, Khadijah menyampaikan keinginan untuk menikah dengannya.\n\n" +
            "Mereka menikah sekitar tahun 595 M, dan rumah tangga mereka dikenang sebagai penuh kasih dan saling mendukung. Khadijah adalah orang pertama yang membenarkan beliau saat wahyu turun. Dari pernikahan ini lahir antara lain Fatimah az-Zahra.",
          facts: [["Pasangan", "Khadijah binti Khuwailid"], ["Putri", "Antara lain Fatimah az-Zahra"]],
          civId: "khilafah",
        },
        {
          title: "Wahyu pertama di Gua Hira",
          when: "610 M",
          year: 610,
          place: { name: "Gua Hira, Jabal Nur, dekat Makkah", lon: 39.86, lat: 21.46 },
          text:
            "Sebelum diangkat sebagai nabi, Muhammad sering menyendiri untuk merenung di Gua Hira di Jabal Nur, di luar Makkah. Pada bulan Ramadan tahun 610 M, tradisi Islam menyebut Malaikat Jibril datang membawa wahyu pertama: iqra', bacalah, yakni lima ayat pertama QS. Al-'Alaq (96).\n\n" +
            "Beliau pulang dengan gemetar dan ditenangkan Khadijah. Wahyu Al-Qur'an kemudian turun secara bertahap selama sekitar 23 tahun. Peringatan Nuzulul Qur'an dilakukan umat Islam setiap Ramadan.",
          facts: [["Tempat", "Gua Hira"], ["Ayat pertama", "QS. Al-'Alaq (96): 1-5"], ["Orang pertama beriman", "Khadijah"]],
          civId: "khilafah",
        },
        {
          title: "Dakwah terbuka dan tekanan Quraisy",
          when: "±613 M",
          year: 613,
          place: { name: "Makkah", lon: 39.83, lat: 21.42 },
          text:
            "Selama beberapa tahun dakwah dilakukan diam-diam kepada keluarga dan sahabat dekat, antara lain Ali, Abu Bakar, dan Zaid bin Haritsah. Sekitar tahun 613 M beliau mulai berdakwah terbuka dengan memanggil kaum Quraisy di Bukit Safa untuk menyembah Allah semata.\n\n" +
            "Seruan tauhid dan keadilan sosial menarik kaum lemah dan pemuda, tetapi menimbulkan penolakan sebagian pembesar Quraisy yang khawatir kehilangan kedudukan dan penghasilan dari peziarah berhala. Muslim awal mengalami ejekan, boikot, dan penyiksaan.",
          facts: [["Pengikut awal", "Khadijah, Ali, Abu Bakar, Zaid bin Haritsah, dll."], ["Tantangan", "Penolakan, boikot, dan tekanan"]],
          civId: "khilafah",
        },
        {
          title: "Hijrah pertama ke Habasyah",
          when: "615 M",
          year: 615,
          place: { name: "Aksum, Habasyah (Ethiopia)", lon: 38.72, lat: 14.12 },
          text:
            "Karena tekanan makin berat, Nabi saw. menganjurkan sebagian pengikutnya mengungsi ke Habasyah (Ethiopia sekarang), yang menurut beliau dipimpin raja yang adil. Rombongan kecil, termasuk Utsman bin Affan dan istrinya Ruqayyah, berangkat tahun 615 M.\n\n" +
            "Di sana mereka diterima baik oleh sang raja, Najasyi. Peristiwa ini sering dikenang sebagai awal hubungan Islam dengan Afrika dan contoh perlindungan terhadap kelompok yang tertindas karena keyakinannya.",
          facts: [["Pemimpin setempat", "Raja Najasyi"], ["Rombongan", "Antara lain Utsman bin Affan dan Ruqayyah"]],
          civId: "khilafah",
        },
        {
          title: "Amul Huzni: tahun kesedihan",
          when: "619 M",
          year: 619,
          place: { name: "Makkah", lon: 39.83, lat: 21.42 },
          text:
            "Tahun 619 M dikenal sebagai Amul Huzni, tahun duka. Dalam waktu berdekatan, Khadijah, istri tercinta yang menjadi sandaran beliau, dan Abu Thalib, paman yang melindunginya, wafat. Setelah itu tekanan Quraisy terhadap Nabi saw. makin berat.\n\n" +
            "Beliau pergi berdakwah ke Thaif, tetapi ditolak dan diusir. Dalam kesedihan itu beliau berdoa dengan merendahkan diri kepada Allah. Tradisi mencatat bahwa tidak lama kemudian terjadi peristiwa Isra Mi'raj sebagai penghibur dan peneguhan bagi beliau.",
          facts: [["Wafat", "Khadijah dan Abu Thalib"], ["Dakwah ke", "Thaif"]],
          civId: "khilafah",
        },
        {
          title: "Isra Mi'raj dan kewajiban shalat",
          when: "±620-621 M",
          year: 620,
          place: { name: "Makkah - Baitulmaqdis", lon: 39.83, lat: 21.42 },
          text:
            "Menurut Al-Qur'an dan hadis, dalam satu malam Nabi Muhammad saw. diperjalankan dari Masjidil Haram di Makkah ke Masjidil Aqsa di Baitulmaqdis (Isra), lalu dinaikkan ke langit (Mi'raj). Dalam peristiwa ini, kewajiban shalat lima waktu disampaikan kepada umat.\n\n" +
            "Para ulama berbeda pendapat mengenai tanggal dan rincian peristiwanya, dan umat Islam memperingatinya setiap 27 Rajab. Banyak sejarawan menempatkannya sekitar tahun 620 atau 621 M, sebelum hijrah. Bagi umat Islam, peristiwa ini menjadi dasar ikatan spiritual dengan Masjidil Aqsa.",
          facts: [["Rute", "Masjidil Haram ke Masjidil Aqsa; naik ke langit"], ["Perintah", "Shalat lima waktu"], ["Disebut dalam", "QS. Al-Isra' (17): 1; QS. An-Najm (53)"]],
          civId: "khilafah",
        },
        {
          title: "Bai'at Aqabah dan persiapan hijrah",
          when: "621-622 M",
          year: 621,
          place: { name: "Aqabah, Mina, dekat Makkah", lon: 39.89, lat: 21.42 },
          text:
            "Pada musim haji, Nabi saw. bertemu orang-orang dari Yatsrib (kemudian Madinah), yang masyarakatnya saat itu dilanda konflik antarsuku. Pada tahun 621 M sejumlah orang Yatsrib berjanji setia dalam bai'at Aqabah pertama, dan pada tahun berikutnya lebih dari tujuh puluh orang mengulang bai'at pada Aqabah kedua, yang disertai janji melindungi Nabi saw.\n\n" +
            "Mush'ab bin Umair diutus mengajarkan Islam di Yatsrib. Setelah bai'at ini, kaum Muslim Makkah mulai berhijrah secara diam-diam ke Yatsrib.",
          facts: [["Pihak", "Utusan suku Aus dan Khazraj"], ["Guru yang diutus", "Mush'ab bin Umair"]],
          civId: "khilafah",
        },
        {
          title: "Hijrah ke Madinah: awal kalender Hijriah",
          when: "622 M / 1 H",
          year: 622,
          place: { name: "Madinah", lon: 39.61, lat: 24.47 },
          text:
            "Ketika Quraisy merencanakan menghalangi Nabi saw., beliau berhijrah ke Yatsrib ditemani Abu Bakar. Keduanya bersembunyi beberapa hari di Gua Tsur, lalu menempuh jalan memutar. Penduduk Yatsrib menyambut dengan hangat dan kota itu kemudian dikenal sebagai Madinatun Nabi atau Madinah.\n\n" +
            "Di sana beliau membangun Masjid Nabawi, dan mempersaudarakan kaum Muhajirin dengan kaum Anshar. Peristiwa hijrah tahun 622 M kemudian dijadikan permulaan kalender Hijriah pada masa Khalifah Umar. Ali bin Abi Thalib tinggal sementara di Makkah mengurus titipan Nabi sebelum menyusul.",
          facts: [["Pendamping", "Abu Bakar"], ["Penanda", "Awal kalender Hijriah (1 H)"], ["Dibangun", "Masjid Nabawi"]],
          civId: "khilafah",
        },
        {
          title: "Piagam Madinah",
          when: "±622-623 M",
          year: 623,
          place: { name: "Madinah", lon: 39.61, lat: 24.47 },
          text:
            "Di Madinah hidup berbagai kelompok: kaum Muhajirin, suku Anshar (Aus dan Khazraj), dan beberapa kelompok Yahudi. Nabi saw. menyusun kesepakatan tertulis yang dikenal sebagai Piagam Madinah (Shahifah Madinah). Dokumen ini mengatur hak dan kewajiban, kebebasan beragama, serta kerja sama pertahanan bersama.\n\n" +
            "Para sejarawan memandangnya sebagai salah satu dokumen politik awal yang mengatur masyarakat majemuk. Isi dan penanggalan rincinya dibahas para sarjana dan teksnya dicatat antara lain oleh Ibnu Ishaq dan Ibnu Hisyam.",
          facts: [["Pihak", "Muhajirin, Anshar, dan kelompok Yahudi Madinah"], ["Isi pokok", "Kesepakatan bersama dan kebebasan beragama"]],
          civId: "khilafah",
        },
        {
          title: "Perang Badar",
          when: "624 M / 2 H",
          year: 624,
          place: { name: "Badar", lon: 38.77, lat: 23.78 },
          text:
            "Pada bulan Ramadan tahun kedua Hijriah, sekitar 300-an orang Muslim berhadapan dengan pasukan Quraisy yang jauh lebih besar di sumur Badar, barat daya Madinah. Pertempuran ini dipicu konflik panjang antara Muslim yang telah kehilangan harta di Makkah dan kafilah dagang Quraisy.\n\n" +
            "Kaum Muslim memperoleh kemenangan penting. Tawanan diperlakukan dengan tebusan dan sebagian dibebaskan dengan syarat mengajar baca tulis kepada anak-anak Madinah, menurut riwayat. Al-Qur'an menyebutnya yaumul furqan, hari pembeda.",
          facts: [["Pasukan Muslim", "Sekitar 300-an orang"], ["Hasil", "Kemenangan kaum Muslim"]],
          civId: "khilafah",
        },
        {
          title: "Perang Uhud",
          when: "625 M / 3 H",
          year: 625,
          place: { name: "Uhud, Madinah", lon: 39.61, lat: 24.5 },
          text:
            "Quraisy ingin membalas kekalahan di Badar dan menyerang Madinah tahun 625 M. Pertempuran terjadi di kaki Gunung Uhud. Pada awalnya kaum Muslim unggul, tetapi sebagian pemanah meninggalkan posisi di bukit sehingga pasukan berkuda Quraisy menyerang dari belakang.\n\n" +
            "Banyak sahabat gugur, termasuk Hamzah, paman Nabi saw. Peristiwa ini menjadi pelajaran tentang disiplin dan ketaatan pada perintah pemimpin. Pasukan Quraisy kemudian kembali ke Makkah tanpa menguasai Madinah.",
          facts: [["Gugur", "Antara lain Hamzah bin Abdul Muthalib"], ["Pelajaran", "Disiplin dan ketaatan"]],
          civId: "khilafah",
        },
        {
          title: "Perang Khandaq (Ahzab)",
          when: "627 M / 5 H",
          year: 627,
          place: { name: "Madinah", lon: 39.61, lat: 24.47 },
          text:
            "Pada tahun 627 M sekutu suku-suku Arab dipimpin Quraisy mengepung Madinah. Atas usul Salman al-Farisi, kaum Muslim menggali parit (khandaq) di sisi utara kota yang terbuka, sebuah siasat pertahanan yang belum dikenal bangsa Arab.\n\n" +
            "Pengepungan berminggu-minggu itu gagal karena parit menghalangi pasukan berkuda, ditambah cuaca buruk dan perpecahan di kalangan sekutu. Pasukan itu akhirnya mundur. Peristiwa ini juga dikenal sebagai Perang Ahzab (sekutu).",
          facts: [["Siasat", "Penggalian parit atas usul Salman al-Farisi"], ["Hasil", "Pengepungan gagal"]],
          civId: "khilafah",
        },
        {
          title: "Perjanjian Hudaibiyah",
          when: "628 M / 6 H",
          year: 628,
          place: { name: "Hudaibiyah, dekat Makkah", lon: 39.67, lat: 21.43 },
          text:
            "Pada tahun 628 M Nabi saw. bersama sekitar seribu empat ratus pengikut berangkat menuju Makkah untuk umrah tanpa senjata perang. Quraisy menghalangi mereka di Hudaibiyah, di perbatasan tanah suci.\n\n" +
            "Setelah negosiasi, disepakati gencatan senjata sekitar sepuluh tahun dan kaum Muslim kembali ke Madinah dulu untuk umrah tahun berikutnya. Sebagian sahabat kecewa pada syarat-syaratnya, tetapi Al-Qur'an menyebutnya kemenangan nyata. Dalam masa damai itu Islam menyebar luas.",
          facts: [["Isi pokok", "Gencatan senjata sekitar sepuluh tahun"], ["Sebutan Al-Qur'an", "Fathan mubina (QS. Al-Fath)"]],
          civId: "khilafah",
        },
        {
          title: "Fathu Makkah",
          when: "630 M / 8 H",
          year: 630,
          place: { name: "Makkah", lon: 39.83, lat: 21.42 },
          text:
            "Ketika sekutu Quraisy melanggar Hudaibiyah, Nabi saw. memimpin sekitar sepuluh ribu orang menuju Makkah pada Ramadan 8 H (630 M). Kota itu dimasuki hampir tanpa perlawanan.\n\n" +
            "Nabi saw. memberi pengampunan umum kepada penduduk yang dahulu memusuhinya. Berhala-berhala di sekitar Kaabah disingkirkan dan Kaabah dikembalikan sebagai pusat ibadah kepada Allah semata. Suku-suku Arab lalu banyak yang memeluk Islam, dan tahun-tahun berikutnya disebut tahun delegasi.",
          facts: [["Pasukan", "Sekitar sepuluh ribu orang"], ["Sikap", "Pengampunan umum"]],
          civId: "khilafah",
        },
        {
          title: "Haji Wada' dan khutbah terakhir",
          when: "632 M / 10 H",
          year: 632,
          place: { name: "Arafah, dekat Makkah", lon: 39.98, lat: 21.35 },
          text:
            "Pada tahun 10 H (632 M) Nabi saw. memimpin haji besar yang dikenal sebagai Haji Wada' (haji perpisahan). Di Arafah beliau menyampaikan khutbah kepada puluhan ribu jamaah yang berisi penghormatan terhadap jiwa, harta, dan kehormatan; persamaan manusia tanpa membedakan ras; dan hak-hak perempuan.\n\n" +
            "Beliau menegaskan bahwa bangsa Arab tidak lebih utama atas non-Arab kecuali dengan takwa. Sunni dan Syiah juga meriwayatkan peristiwa Ghadir Khum dalam perjalanan pulang, dengan penafsiran yang berbeda; Syiah memahaminya sebagai penunjukan Ali, sedangkan Sunni memahaminya sebagai penegasan kedudukan dan kecintaan kepada Ali.",
          facts: [["Pesan", "Hak asasi, persamaan, dan takwa"], ["Disebut juga", "Haji Perpisahan"]],
          civId: "khilafah",
        },
        {
          title: "Wafatnya Nabi Muhammad saw.",
          when: "632 M / 11 H",
          year: 632,
          place: { name: "Madinah", lon: 39.61, lat: 24.47 },
          text:
            "Beberapa bulan setelah Haji Wada', Nabi saw. jatuh sakit dan wafat di Madinah pada tahun 11 H (632 M) di rumah istrinya, Aisyah, dan dimakamkan di sana. Umat Islam sangat berduka. Abu Bakar menenangkan mereka dengan mengingatkan bahwa siapa yang menyembah Muhammad, maka ia telah wafat, dan siapa yang menyembah Allah, maka Allah Maha Hidup dan tidak mati.\n\n" +
            "Pada saat yang sama muncul persoalan kepemimpinan. Dalam pandangan Sunni, para sahabat bermusyawarah di Saqifah Bani Sa'idah dan memilih Abu Bakar sebagai khalifah. Dalam pandangan Syiah, Nabi saw. telah menunjuk Ali, dan pemilihan di Saqifah tidak sah. Perbedaan ini menjadi akar dua tradisi besar dalam Islam.",
          facts: [["Dimakamkan di", "Madinah"], ["Pandangan Sunni", "Khalifah dipilih lewat musyawarah"], ["Pandangan Syiah", "Kepemimpinan Ali berdasar penunjukan Nabi saw."]],
          civId: "khilafah",
        },
      ],
    },
    {
      title: "Khulafaur Rasyidin",
      intro: "Empat khalifah pertama (632-661 M) yang dalam pandangan Sunni disebut Khulafaur Rasyidin, para pemimpin yang mendapat petunjuk. Syiah menghormati Ali dan Ahlulbait sebagai imam.",
      entries: [
        {
          title: "Abu Bakar as-Siddiq: perang Riddah dan pengumpulan Al-Qur'an",
          when: "632-634 M",
          year: 632,
          place: { name: "Madinah", lon: 39.61, lat: 24.47 },
          text:
            "Abu Bakar, sahabat terdekat Nabi saw., menjadi khalifah pertama. Pada awal masa pemerintahannya, sejumlah suku Arab menolak membayar zakat atau mengikuti nabi palsu. Abu Bakar menumpas gerakan ini dalam apa yang dikenal sebagai Perang Riddah.\n\n" +
            "Setelah banyak penghafal Al-Qur'an gugur di Perang Yamamah, atas usul Umar bin Khattab, ia memerintahkan Zaid bin Tsabit mengumpulkan wahyu menjadi satu mushaf. Naskah itu disimpan, kemudian berpindah ke Umar dan putrinya Hafshah.",
          facts: [["Masa", "632-634 M"], ["Peristiwa", "Perang Riddah; pengumpulan mushaf"], ["Penghimpun", "Zaid bin Tsabit"]],
          civId: "khilafah",
        },
        {
          title: "Umar bin Khattab: ekspansi, kalender Hijriah, dan administrasi",
          when: "634-644 M",
          year: 636,
          place: { name: "Yarmuk, Syam", lon: 35.95, lat: 32.7 },
          text:
            "Di bawah Khalifah Umar bin Khattab, pasukan Muslim mengalahkan Bizantium di Yarmuk (636 M) dan Persia Sasaniyah di Qadisiyah (sekitar 636-637 M). Syam, Mesir, Irak, dan sebagian Persia masuk wilayah kekhalifahan. Ketika Baitulmaqdis menyerah, Umar sendiri menerimanya dan memberi jaminan keselamatan bagi penduduknya.\n\n" +
            "Untuk mengelola wilayah yang luas, Umar membangun diwan (kantor pembukuan), tunjangan bagi pasukan, dan gubernur-gubernur. Ia dikenal sederhana dan keras menjaga keadilan. Sekitar tahun 638 M (17 H) kalender Hijriah ditetapkan dengan hijrah sebagai tahun pertama. Umar wafat dibunuh pada 644 M.",
          facts: [["Masa", "634-644 M"], ["Penaklukan", "Syam, Mesir, Irak, sebagian Persia"], ["Kebijakan", "Kalender Hijriah, diwan"]],
          civId: "khilafah",
        },
        {
          title: "Utsman bin Affan: mushaf Utsmani",
          when: "644-656 M",
          year: 650,
          place: { name: "Madinah", lon: 39.61, lat: 24.47 },
          text:
            "Khalifah Utsman bin Affan melanjutkan perluasan wilayah hingga Armenia, Afrika Utara, dan Siprus, serta membentuk armada laut pertama kaum Muslim. Karena kaum Muslim di berbagai wilayah mulai berbeda dialek bacaan, ia memerintahkan Zaid bin Tsabit dan para penulis menyalin mushaf Abu Bakar menjadi beberapa salinan baku.\n\n" +
            "Salinan itu dikirim ke kota-kota utama, dan naskah yang berbeda dibakar demi menyatukan umat. Inilah mushaf Utsmani yang menjadi dasar Al-Qur'an sampai sekarang. Pada akhir pemerintahannya muncul ketidakpuasan dan Utsman dibunuh oleh pemberontak pada 656 M.",
          facts: [["Masa", "644-656 M"], ["Karya", "Penyalinan baku mushaf Utsmani"]],
          civId: "khilafah",
        },
        {
          title: "Ali bin Abi Thalib: fitnah, Perang Jamal, dan Siffin",
          when: "656-661 M",
          year: 656,
          place: { name: "Kufah, Irak", lon: 44.4, lat: 32.03 },
          text:
            "Setelah Utsman wafat, Ali bin Abi Thalib dibaiat sebagai khalifah, dan memindahkan pusat pemerintahan ke Kufah di Irak. Masa pemerintahannya dikenal sebagai masa fitnah, ketika terjadi perpecahan di kalangan umat. Dalam Perang Jamal (656 M) pasukan Ali berhadapan dengan sekelompok sahabat termasuk Aisyah, Thalhah, dan Zubair yang menuntut penegakan hukum atas pembunuh Utsman.\n\n" +
            "Pada Perang Siffin (657 M) Ali berhadapan dengan Mu'awiyah, gubernur Syam. Peristiwa tahkim (arbitrase) setelah Siffin melahirkan kelompok Khawarij. Ali wafat dibunuh pada 661 M. Bagi Sunni ia adalah khalifah keempat; bagi Syiah ia adalah imam pertama dan pewaris yang ditunjuk Nabi saw.",
          facts: [["Masa", "656-661 M"], ["Peristiwa", "Perang Jamal, Siffin, tahkim"], ["Pandangan", "Sunni: khalifah keempat; Syiah: imam pertama"]],
          civId: "khilafah",
        },
      ],
    },
    {
      title: "Dinasti-dinasti dan peradaban",
      intro: "Dari Damaskus hingga Kordoba dan Kairo, peradaban Islam berkembang dalam banyak dinasti, bahasa, dan budaya, dari ilmu pengetahuan hingga perdagangan.",
      entries: [
        {
          title: "Dinasti Umayyah di Damaskus",
          when: "661-750 M",
          year: 661,
          place: { name: "Damaskus", lon: 36.29, lat: 33.51 },
          text:
            "Mu'awiyah bin Abi Sufyan mendirikan dinasti Umayyah pada 661 M dengan Damaskus sebagai pusat pemerintahan. Kekuasaan kini diwariskan dalam satu keluarga. Wilayahnya meluas dari Spanyol di barat sampai Sind di timur. Bahasa Arab menjadi bahasa administrasi, mata uang dinar dan dirham dicetak, dan Kubah Shakhrah dibangun di Yerusalem (691 M).\n\n" +
            "Masjid Agung Damaskus (Masjid Umawi) yang megah mulai dibangun pada masa Al-Walid. Di mata banyak sejarawan, masa Umayyah adalah masa ekspansi dan penataan negara besar, sedangkan sebagian kelompok mengkritik gaya pemerintahannya.",
          facts: [["Pendiri", "Mu'awiyah bin Abi Sufyan"], ["Ibu kota", "Damaskus"], ["Bangunan terkenal", "Kubah Shakhrah, Masjid Umawi"]],
          civId: "khilafah",
        },
        {
          title: "Peristiwa Karbala dan wafatnya Husain",
          when: "680 M / 61 H",
          year: 680,
          place: { name: "Karbala, Irak", lon: 44.03, lat: 32.62 },
          text:
            "Setelah Mu'awiyah wafat pada 680 M, putranya Yazid mengambil alih. Husain bin Ali, cucu Nabi saw., menolak berbaiat dan berangkat dari Makkah ke Kufah setelah mendapat undangan dari penduduk di sana. Ia dihadang pasukan Umayyah di Karbala, Irak, dan gugur bersama keluarga serta pengikutnya pada 10 Muharram.\n\n" +
            "Bagi umat Islam, peristiwa ini adalah duka mendalam. Syiah memperingatinya setiap Asyura dengan ratapan dan upacara duka, serta menjadikannya simbol perlawanan terhadap ketidakadilan. Banyak umat Sunni juga mengenangnya dengan duka dan memuliakan Husain sebagai cucu Rasulullah saw., meski berbeda dalam cara memperingati dan menilai peristiwa itu secara politik.",
          facts: [["Tokoh", "Husain bin Ali"], ["Tanggal", "10 Muharram 61 H"], ["Peringatan", "Asyura"]],
          civId: "khilafah",
        },
        {
          title: "Dinasti Abbasiyah dan pendirian Baghdad",
          when: "750-1258 M",
          year: 762,
          place: { name: "Baghdad", lon: 44.36, lat: 33.31 },
          text:
            "Pada 750 M dinasti Abbasiyah, yang mengaku keturunan paman Nabi saw., Abbas, menggulingkan Umayyah dengan dukungan banyak kelompok, termasuk Muslim non-Arab di Persia. Khalifah al-Mansur mendirikan Baghdad pada 762 M di tepi Sungai Tigris sebagai ibu kota baru berbentuk lingkaran, dekat jalur dagang.\n\n" +
            "Baghdad tumbuh menjadi salah satu kota terbesar di dunia dengan pasar, perpustakaan, pemandian, dan penerjemah dari berbagai bangsa. Kota ini menjadi pusat kekhalifahan selama sekitar lima abad dan simbol masa keemasan Islam.",
          facts: [["Pendiri Baghdad", "Khalifah al-Mansur"], ["Masa", "750-1258 M"], ["Sungai", "Tigris"]],
          civId: "khilafah",
        },
        {
          title: "Bayt al-Hikmah dan para ilmuwan Muslim",
          when: "abad ke-9-11 M",
          year: 830,
          place: { name: "Baghdad", lon: 44.36, lat: 33.31 },
          text:
            "Pada masa Harun ar-Rasyid dan terutama al-Ma'mun, Baghdad menjadi pusat penerjemahan karya Yunani, Persia, dan India ke bahasa Arab. Lembaga yang terkenal adalah Bayt al-Hikmah (Rumah Kebijaksanaan). Dari tradisi keilmuan ini ilmuwan-ilmuwan Muslim terkemuka tumbuh. Al-Khawarizmi memperkenalkan aljabar dan namanya melahirkan istilah algoritma; al-Razi menulis tentang kedokteran dan membedakan campak dengan cacar.\n\n" +
            "Ibnu al-Haitham dikenal melalui penelitian optik dan metode eksperimen, al-Biruni dalam astronomi dan geografi, dan Ibnu Sina menyusun al-Qanun fi ath-Thibb, ensiklopedia kedokteran yang diajarkan berabad-abad di Timur maupun Eropa. Sejarawan masih membahas seberapa besar peran lembaga tertentu, tetapi tradisi keilmuan di Baghdad dan sekitarnya jelas besar.",
          facts: [["Tokoh", "Al-Khawarizmi, al-Razi, Ibnu al-Haitham, al-Biruni, Ibnu Sina"], ["Bidang", "Matematika, kedokteran, optik, astronomi"]],
          civId: "khilafah",
        },
        {
          title: "Umayyah di Andalusia dan Masjid Kordoba",
          when: "756-1031 M",
          year: 756,
          place: { name: "Kordoba, Spanyol", lon: -4.78, lat: 37.88 },
          text:
            "Ketika dinasti Umayyah di Damaskus runtuh, Abdurrahman I, anggota keluarga yang selamat, melarikan diri hingga ke Spanyol dan mendirikan pemerintahan di Kordoba pada 756 M. Pada 929 M Abdurrahman III memakai gelar khalifah. Kordoba menjadi kota besar dengan jalan berpenerangan, perpustakaan, dan sekolah-sekolah.\n\n" +
            "Masjid Agung Kordoba dengan hutan pilar dan lengkung belang merah putihnya adalah salah satu bangunan paling terkenal dari masa itu. Muslim, Kristen, dan Yahudi hidup berdampingan dengan dinamika sosial yang kompleks, dan banyak ilmu dari dunia Muslim sampai ke Eropa lewat Andalusia. Kekhalifahan Kordoba berakhir pada 1031 M dan pecah menjadi kerajaan-kerajaan kecil.",
          facts: [["Pendiri", "Abdurrahman I"], ["Kekhalifahan", "929-1031 M"], ["Monumen", "Masjid Agung Kordoba"]],
          civId: "khilafah",
        },
        {
          title: "Fatimiyah, Kairo, dan Al-Azhar",
          when: "969-972 M",
          year: 970,
          place: { name: "Kairo", lon: 31.24, lat: 30.04 },
          text:
            "Dinasti Fatimiyah, yang menganut Syiah Ismailiyah dan mengaku keturunan Fatimah putri Nabi saw., berdiri di Afrika Utara pada 909 M dan merebut Mesir pada 969 M. Panglima mereka, Jauhar, membangun kota Kairo (al-Qahirah) sebagai ibu kota baru.\n\n" +
            "Sekitar 970-972 M didirikan Masjid Al-Azhar, yang berkembang menjadi lembaga pendidikan dan kini salah satu universitas tertua yang masih berjalan. Setelah Fatimiyah, Al-Azhar bergeser ke tradisi Sunni dan hingga kini menarik pelajar dari berbagai negara, termasuk Indonesia.",
          facts: [["Dinasti", "Fatimiyah"], ["Pendiri Kairo", "Jauhar as-Siqilli"], ["Lembaga", "Al-Azhar"]],
          civId: "khilafah",
        },
        {
          title: "Seljuk dan Madrasah Nizamiyah",
          when: "1055-1092 M",
          year: 1065,
          place: { name: "Baghdad", lon: 44.36, lat: 33.31 },
          text:
            "Orang Turki Seljuk memasuki Baghdad pada 1055 M dan menjadi pelindung khalifah Abbasiyah dengan gelar sultan. Wazir mereka, Nizam al-Mulk, mendirikan jaringan madrasah yang dikenal sebagai Nizamiyah, antara lain di Baghdad (sekitar 1065 M) dan Nisabur.\n\n" +
            "Di madrasah ini belajar dan mengajar ulama seperti al-Ghazali, yang karyanya Ihya' Ulumuddin sangat berpengaruh di dunia Sunni, termasuk di Nusantara. Madrasah menjadi model pendidikan formal yang menyebar luas di dunia Islam.",
          facts: [["Tokoh", "Nizam al-Mulk, al-Ghazali"], ["Lembaga", "Madrasah Nizamiyah"]],
          civId: "khilafah",
        },
        {
          title: "Perang Salib dan Salahuddin al-Ayyubi",
          when: "1096-1291 M",
          year: 1187,
          place: { name: "Hattin / Baitulmaqdis", lon: 35.45, lat: 32.8 },
          text:
            "Pada 1096-1099 M tentara Salib dari Eropa Barat datang ke Timur dan merebut Baitulmaqdis, mendirikan negara-negara Latin di pesisir Syam. Selama lebih dari satu abad, Muslim dan Kristen berperang, tetapi juga berdagang dan bertukar ilmu.\n\n" +
            "Salahuddin al-Ayyubi, penguasa Mesir dan Syam berdarah Kurdi, mempersatukan wilayah-wilayah Muslim dan mengalahkan pasukan Salib di Hattin pada 1187 M. Ia merebut Yerusalem pada tahun yang sama dan dikenang karena kemurahan hati kepada penduduk. Perang berlanjut hingga jatuhnya Akka pada 1291 M.",
          facts: [["Tokoh", "Salahuddin al-Ayyubi"], ["Peristiwa", "Pertempuran Hattin, 1187 M"]],
          civId: "khilafah",
        },
        {
          title: "Mongol merebut Baghdad",
          when: "1258 M",
          year: 1258,
          place: { name: "Baghdad", lon: 44.36, lat: 33.31 },
          text:
            "Pada 1258 M pasukan Mongol di bawah Hulagu Khan mengepung dan merebut Baghdad. Kota itu dijarah, banyak penduduk tewas, dan khalifah Abbasiyah terakhir di Baghdad, al-Musta'shim, dieksekusi. Sumber-sumber lama menyebut korban dalam jumlah sangat besar, tetapi angka pastinya diperdebatkan sejarawan.\n\n" +
            "Perpustakaan dan pusat-pusat ilmu mengalami kerusakan besar. Peristiwa ini dianggap titik balik: Baghdad tidak lagi menjadi pusat politik dunia Islam, meski kebudayaan Muslim tetap hidup di tempat lain, dan banyak penguasa Mongol kemudian memeluk Islam.",
          facts: [["Penakluk", "Hulagu Khan"], ["Khalifah", "Al-Musta'shim"]],
          civId: "mongol",
        },
        {
          title: "Mamluk dan kemenangan di Ain Jalut",
          when: "1260 M",
          year: 1260,
          place: { name: "Ain Jalut, Palestina", lon: 35.36, lat: 32.55 },
          text:
            "Para mamluk adalah tentara budak yang terlatih dan kemudian menjadi penguasa Mesir. Pada 1260 M, pasukan Mamluk di bawah Qutuz dan Baibars menghentikan pasukan Mongol di Ain Jalut. Kemenangan ini menahan laju Mongol ke arah Mesir.\n\n" +
            "Sultan Mamluk berkuasa di Kairo hingga 1517 M, melindungi seorang khalifah Abbasiyah simbolis di Kairo, dan menjadikan kota itu pusat ilmu, perdagangan, dan arsitektur selama berabad-abad.",
          facts: [["Tokoh", "Qutuz dan Baibars"], ["Penguasa", "Kesultanan Mamluk (hingga 1517 M)"]],
          civId: "khilafah",
        },
        {
          title: "Ibnu Khaldun dan Muqaddimah",
          when: "1332-1406 M",
          year: 1377,
          place: { name: "Tunis", lon: 10.18, lat: 36.8 },
          text:
            "Ibnu Khaldun lahir di Tunis dan hidup di Afrika Utara, Andalusia, dan Mesir. Ia menulis Muqaddimah (1377 M), pengantar untuk sejarah dunianya, yang berisi analisis tentang bangkitnya dan runtuhnya masyarakat, solidaritas kelompok (asabiyah), ekonomi, dan kebudayaan.\n\n" +
            "Banyak sarjana modern menganggapnya pelopor ilmu sejarah dan sosiologi. Karyanya masih dibaca dan dibahas di seluruh dunia, termasuk di Indonesia.",
          facts: [["Karya utama", "Muqaddimah (1377 M)"], ["Konsep", "Asabiyah"]],
          civId: "khilafah",
        },
        {
          title: "Islam di Afrika Barat: Mansa Musa dan Timbuktu",
          when: "abad ke-11-16 M",
          year: 1324,
          place: { name: "Timbuktu, Mali", lon: -3.0, lat: 16.77 },
          text:
            "Islam masuk Afrika Barat lewat pedagang dan ulama yang melintasi Sahara. Pada abad ke-14 Kekaisaran Mali yang makmur karena emas dipimpin Mansa Musa. Pada 1324 M ia menunaikan haji ke Makkah dengan rombongan besar dan membagi-bagikan emas di Kairo, yang menurut para penulis sezaman sampai memengaruhi nilai emas.\n\n" +
            "Sepulang haji ia membawa ulama dan arsitek. Timbuktu tumbuh menjadi kota ilmu, dengan masjid Djinguereber dan Sankore serta ribuan manuskrip yang masih dilestarikan. Kekaisaran Songhai kemudian meneruskan tradisi ini.",
          facts: [["Tokoh", "Mansa Musa"], ["Pusat ilmu", "Timbuktu"], ["Haji", "1324 M"]],
          civId: "mali-songhai",
        },
        {
          title: "Islam di Asia Selatan: Kesultanan Delhi",
          when: "1206-1526 M",
          year: 1206,
          place: { name: "Delhi", lon: 77.21, lat: 28.61 },
          text:
            "Islam telah hadir di pesisir India lewat para pedagang Arab dan di Sind sejak abad ke-8. Pada 1206 M berdiri Kesultanan Delhi, yang diperintah beberapa dinasti secara berurutan, termasuk Khalji dan Tughlaq. Masa ini melahirkan bangunan seperti Qutb Minar, bahasa Urdu secara bertahap, dan tradisi sufi yang meluas lewat tarekat seperti Chishtiyah.\n\n" +
            "Masyarakat India yang majemuk, dengan banyak penduduk Hindu, membentuk budaya baru yang mencampur unsur Persia, Arab, dan India dalam musik, bahasa, dan arsitektur.",
          facts: [["Dinasti", "Mamluk, Khalji, Tughlaq, dll."], ["Peninggalan", "Qutb Minar"]],
          civId: "mughal-india",
        },
        {
          title: "Islam masuk ke Asia Tenggara",
          when: "abad ke-13 M dan sesudahnya",
          year: 1297,
          place: { name: "Samudra Pasai, Aceh Utara", lon: 97.2, lat: 5.1 },
          text:
            "Islam datang ke Asia Tenggara terutama lewat jalur dagang laut yang menghubungkan Arab, Persia, India, dan Nusantara. Bukti nisan dan catatan pelancong menunjukkan hadirnya komunitas dan kesultanan Muslim di pesisir utara Sumatra pada abad ke-13, antara lain Samudra Pasai.\n\n" +
            "Dari sana Islam menyebar ke Melaka, pesisir Jawa, Sulawesi, dan Maluku, sering dengan jalan damai melalui perdagangan, perkawinan, dan dakwah para sufi. Tahun di sini merujuk salah satu penanda awal, bukan satu-satunya titik mula. Kisah lebih lengkapnya ada di topik Islam di Nusantara.",
          facts: [["Jalur", "Perdagangan laut dan tarekat"], ["Pusat awal", "Samudra Pasai"]],
          civId: "kesultanan-awal",
        },
        {
          title: "Jatuhnya Granada",
          when: "1492 M",
          year: 1492,
          place: { name: "Granada, Spanyol", lon: -3.6, lat: 37.18 },
          text:
            "Setelah berabad-abad, wilayah Muslim di Spanyol menyusut karena Reconquista. Granada, kerajaan Nasrid dengan istana Alhambra yang indah, menjadi benteng terakhir. Pada Januari 1492 M penguasa terakhirnya, Muhammad XII (Boabdil), menyerahkan kota kepada Raja Ferdinand dan Ratu Isabella.\n\n" +
            "Perjanjian awal menjanjikan kebebasan beragama, tetapi janji itu tidak lama bertahan. Kaum Muslim dan Yahudi kemudian dipaksa masuk Kristen atau meninggalkan Spanyol. Berakhirlah sekitar delapan abad kehadiran politik Muslim di Semenanjung Iberia.",
          facts: [["Dinasti", "Nasrid"], ["Monumen", "Istana Alhambra"]],
          civId: "khilafah",
        },
      ],
    },
    {
      title: "Tiga kerajaan besar",
      intro: "Pada abad ke-16 dan ke-17, tiga kerajaan besar menguasai sebagian besar dunia Muslim: Utsmaniyah, Safawiyah, dan Mughal.",
      entries: [
        {
          title: "Utsmaniyah dan jatuhnya Konstantinopel",
          when: "1453 M",
          year: 1453,
          place: { name: "Istanbul (Konstantinopel)", lon: 28.98, lat: 41.01 },
          text:
            "Dinasti Utsmaniyah (Ottoman) bermula sebagai kerajaan kecil Turki di Anatolia sekitar 1300 M dan terus berkembang. Pada 1453 M Sultan Mehmed II menaklukkan Konstantinopel, ibu kota Kekaisaran Bizantium, setelah pengepungan sekitar enam minggu dengan meriam besar. Kota itu menjadi Istanbul, dan Hagia Sophia dijadikan masjid.\n\n" +
            "Sultan Sulaiman al-Qanuni (Suleiman, memerintah 1520-1566 M) membawa kerajaan ke puncaknya, mencakup Balkan, Timur Tengah, dan Afrika Utara. Arsitek Sinan membangun masjid-masjid megah, dan sistem hukum diatur dengan kanun. Kerajaan ini bertahan hingga awal abad ke-20.",
          facts: [["Penakluk", "Sultan Mehmed II"], ["Puncak", "Sulaiman al-Qanuni, 1520-1566 M"], ["Arsitek", "Mimar Sinan"]],
          civId: "ottoman",
        },
        {
          title: "Safawiyah dan Isfahan",
          when: "1501-1736 M",
          year: 1501,
          place: { name: "Isfahan, Iran", lon: 51.67, lat: 32.65 },
          text:
            "Pada 1501 M Syah Ismail mendirikan dinasti Safawiyah di Tabriz dan menetapkan Syiah Itsna Asyariyah sebagai mazhab negara Persia. Kebijakan ini membentuk identitas keagamaan Iran sampai sekarang.\n\n" +
            "Syah Abbas I memindahkan ibu kota ke Isfahan sekitar 1598 M dan membangunnya menjadi kota yang indah, dengan lapangan Naqsh-e Jahan, Masjid Imam, dan jembatan-jembatan. Ada pepatah Persia: Isfahan nesf-e jahan, Isfahan adalah setengah dunia. Perdagangan sutra dan seni karpet, keramik, dan lukisan miniatur berkembang.",
          facts: [["Pendiri", "Syah Ismail"], ["Ibu kota", "Isfahan (sekitar 1598 M)"], ["Mazhab negara", "Syiah Itsna Asyariyah"]],
                  },
        {
          title: "Mughal: Akbar dan Taj Mahal",
          when: "1526-1857 M",
          year: 1526,
          place: { name: "Agra, India", lon: 78.04, lat: 27.18 },
          text:
            "Babur mendirikan kerajaan Mughal pada 1526 M setelah menang di Panipat. Cucunya, Akbar (memerintah 1556-1605 M), memperluas wilayah dan menata administrasi. Ia dikenal membuka dialog antaragama dan melibatkan banyak golongan dalam pemerintahan.\n\n" +
            "Pada masa Syah Jahan dibangun Taj Mahal di Agra (sekitar 1632-1653 M) sebagai makam untuk istrinya Mumtaz Mahal. Arsitektur, miniatur, dan kuliner Mughal menyatukan unsur Persia dan India. Kekuasaan kerajaan menurun pada abad ke-18 dan secara resmi berakhir setelah pemberontakan 1857 di bawah Inggris.",
          facts: [["Pendiri", "Babur"], ["Puncak", "Akbar, 1556-1605 M"], ["Monumen", "Taj Mahal, Agra"]],
          civId: "mughal-india",
        },
      ],
    },
    {
      title: "Kolonialisme, pembaruan, dan zaman modern",
      intro: "Sejak abad ke-18, kekuatan Eropa menguasai sebagian besar dunia Muslim. Dari tantangan itu lahir gerakan pembaruan dan negara-negara baru.",
      entries: [
        {
          title: "Era kolonial di dunia Muslim",
          when: "abad ke-18-20 M",
          year: 1798,
          place: { name: "Kairo", lon: 31.24, lat: 30.04 },
          text:
            "Ekspedisi Napoleon ke Mesir pada 1798 M sering dijadikan penanda awal pertemuan kuat antara Eropa modern dan dunia Muslim. Dalam dua abad berikutnya, Inggris, Prancis, Belanda, Rusia, dan Italia menguasai atau memengaruhi wilayah dari Maroko hingga Indonesia.\n\n" +
            "Banyak Muslim melawan penjajahan, dari Pangeran Diponegoro di Jawa, Abdelkader di Aljazair, hingga Imam Syamil di Kaukasus. Pada saat yang sama, para ulama dan cendekiawan bertanya bagaimana menjawab tantangan teknologi, pendidikan, dan politik modern.",
          facts: [["Peristiwa", "Ekspedisi Napoleon ke Mesir, 1798 M"], ["Penguasa kolonial", "Inggris, Prancis, Belanda, Rusia, Italia"]],
          civId: "kolonialisme-eropa",
        },
        {
          title: "Pembaruan: Muhammad bin Abdul Wahhab",
          when: "abad ke-18 M",
          year: 1744,
          place: { name: "Diriyah, Najd (Arab Saudi)", lon: 46.57, lat: 24.73 },
          text:
            "Muhammad bin Abdul Wahhab (1703-1792 M) adalah ulama dari Najd yang menyerukan pemurnian tauhid dan kritik terhadap praktik yang ia anggap menyimpang. Pada 1744 M ia bersekutu dengan penguasa Diriyah, Muhammad bin Saud, yang menjadi cikal bakal negara Saudi pertama.\n\n" +
            "Gerakan ini, yang dikenal para pengikutnya sebagai dakwah tauhid dan oleh pengritiknya disebut Wahhabiyah, dinilai berbeda-beda: sebagian memandangnya sebagai usaha pemurnian, sebagian lain mengkritik sikapnya yang keras terhadap tradisi lain. Pengaruhnya terasa luas, termasuk lewat ulama yang belajar di Haramain.",
          facts: [["Tokoh", "Muhammad bin Abdul Wahhab"], ["Sekutu", "Muhammad bin Saud"]],
          civId: "khilafah",
        },
        {
          title: "Jamaluddin al-Afghani, Muhammad Abduh, dan Rasyid Ridha",
          when: "akhir abad ke-19 M",
          year: 1898,
          place: { name: "Kairo", lon: 31.24, lat: 30.04 },
          text:
            "Jamaluddin al-Afghani (1838-1897 M) berkeliling dunia Muslim menyerukan persatuan dan menanggapi dominasi Eropa. Muridnya, Muhammad Abduh (1849-1905 M), menjadi ulama dan mufti Mesir yang menekankan pendidikan, rasionalitas, dan penafsiran Al-Qur'an yang sesuai zaman. Murid Abduh, Rasyid Ridha (1865-1935 M), menerbitkan majalah al-Manar sejak 1898 M.\n\n" +
            "Gagasan ketiganya, yang disebut pembaruan (islah atau tajdid), dibaca luas, dan menjangkau Asia Tenggara lewat majalah dan pelajar. Penilaian atas pemikiran mereka beragam, tetapi mereka dianggap tokoh penting Islam modern.",
          facts: [["Tokoh", "Al-Afghani, Abduh, Ridha"], ["Media", "Majalah al-Manar (sejak 1898 M)"]],
          civId: "khilafah",
        },
        {
          title: "Pengaruh pembaruan Islam di Indonesia",
          when: "awal abad ke-20 M",
          year: 1912,
          place: { name: "Yogyakarta", lon: 110.37, lat: -7.8 },
          text:
            "Gagasan pembaruan sampai ke Hindia Belanda lewat majalah, jemaah haji, dan pelajar di Makkah serta Kairo. Pada 1912 M, K.H. Ahmad Dahlan mendirikan Muhammadiyah di Yogyakarta yang menekankan pendidikan modern, kesehatan, dan pemurnian ibadah. Pada tahun yang sama berdiri Sarekat Islam, dan pada 1926 M Nahdlatul Ulama didirikan oleh para kiai pesantren di Surabaya untuk menjaga tradisi mazhab.\n\n" +
            "Organisasi-organisasi ini, bersama banyak lainnya, membangun sekolah, rumah sakit, dan jaringan pesantren, serta berperan dalam pergerakan kebangsaan.",
          facts: [["Organisasi", "Muhammadiyah (1912), Sarekat Islam (1912), NU (1926)"], ["Tokoh", "K.H. Ahmad Dahlan, K.H. Hasyim Asy'ari"]],
          civId: "hindia-belanda",
        },
        {
          title: "Berakhirnya kekhalifahan Utsmaniyah",
          when: "1924 M",
          year: 1924,
          place: { name: "Ankara, Turki", lon: 32.85, lat: 39.93 },
          text:
            "Setelah Perang Dunia I, Kesultanan Utsmaniyah yang kalah perang dibubarkan; sultan dimakzulkan pada 1922 M. Pada 3 Maret 1924 M Majelis Nasional Turki di bawah Mustafa Kemal Ataturk menghapus lembaga kekhalifahan dan Turki menjadi republik sekuler.\n\n" +
            "Peristiwa ini mengguncang dunia Muslim. Di berbagai negeri, termasuk Hindia Belanda, para tokoh menggelar pertemuan untuk membahas nasib khilafah. Penilaian atas peristiwa itu hingga kini beragam.",
          facts: [["Tanggal", "3 Maret 1924 M"], ["Tokoh", "Mustafa Kemal Ataturk"]],
          civId: "ottoman",
        },
        {
          title: "Kemerdekaan negara-negara Muslim",
          when: "abad ke-20 M",
          year: 1945,
          place: { name: "Jakarta", lon: 106.85, lat: -6.21 },
          text:
            "Setelah Perang Dunia II gelombang kemerdekaan melanda dunia. Indonesia memproklamasikan kemerdekaan pada 17 Agustus 1945 dan kemudian menjadi negara dengan penduduk Muslim terbanyak. Pakistan merdeka pada 1947 M, disusul banyak negara lain di Timur Tengah dan Afrika, misalnya Suriah, Yordania, Maroko, Tunisia, dan Aljazair pada 1962 M.\n\n" +
            "Negara-negara baru itu memilih beragam sistem: republik, monarki, atau negara dengan peran agama yang berbeda-beda, dan menghadapi tantangan pembangunan, perbatasan, serta konflik.",
          facts: [["Contoh", "Indonesia 1945, Pakistan 1947, Aljazair 1962"], ["Sistem", "Beragam"]],
          civId: "republik-indonesia",
        },
        {
          title: "Organisasi Kerja Sama Islam (OKI)",
          when: "1969 M",
          year: 1969,
          place: { name: "Rabat, Maroko", lon: -6.84, lat: 34.02 },
          text:
            "Pada September 1969 M para kepala negara dan pemerintahan negeri-negeri Muslim berkumpul di Rabat, Maroko, setelah kebakaran di Masjidil Aqsa di Yerusalem pada Agustus tahun itu. Dari pertemuan itu lahir Organisasi Konferensi Islam, kemudian diganti namanya menjadi Organisasi Kerja Sama Islam (OKI/OIC).\n\n" +
            "Organisasi ini bermarkas di Jeddah dan kini beranggotakan lebih dari lima puluh negara. Ia menjadi wadah koordinasi kerja sama politik, ekonomi, dan kemanusiaan negara-negara anggotanya.",
          facts: [["Pendirian", "1969 M, Rabat"], ["Markas", "Jeddah"]],
        },
        {
          title: "Dunia Muslim hari ini",
          when: "abad ke-21 M",
          year: 2000,
          place: { name: "Jakarta", lon: 106.85, lat: -6.21 },
          text:
            "Saat ini jumlah umat Islam diperkirakan sekitar 1,9 hingga 2 miliar jiwa, atau sekitar seperempat penduduk dunia, tersebar dari Afrika, Timur Tengah, dan Asia hingga Eropa dan Amerika. Sebagian besar Muslim tinggal di Asia, bukan di dunia Arab. Mayoritas adalah Sunni, sedangkan Syiah merupakan minoritas yang signifikan; angka pastinya diperkirakan berbeda-beda.\n\n" +
            "Indonesia adalah negara dengan penduduk Muslim terbanyak di dunia, dengan jumlah sekitar 230 juta jiwa menurut perkiraan. Umat Islam hidup dengan sangat beragam bahasa, adat, dan mazhab, dan pada saat bersamaan terus berbicara tentang pendidikan, ilmu, ekonomi, dan perdamaian.",
          facts: [["Jumlah umat", "Sekitar 1,9-2 miliar (perkiraan)"], ["Terbanyak", "Indonesia"]],
          civId: "republik-indonesia",
        },
      ],
    },
  ],
  sources: [
    { title: "Al-Qur'an al-Karim", kind: "primer" },
    { title: "Qashash al-Anbiya'", author: "Ibnu Katsir", kind: "primer" },
    { title: "As-Sirah an-Nabawiyah", author: "Ibnu Hisyam", kind: "primer" },
    { title: "History of the Arabs", author: "Philip K. Hitti", year: 1937, kind: "sekunder" },
    { title: "A History of Islamic Societies", author: "Ira M. Lapidus", year: 1988, kind: "sekunder" },
    { title: "The Venture of Islam", author: "Marshall G. S. Hodgson", year: 1974, kind: "sekunder" },
    { title: "Sejarah Peradaban Islam", author: "Badri Yatim", kind: "sekunder" },
  ],
};
