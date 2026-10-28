# Atlas Sejarah Dunia

Web app React + Vite + TypeScript: atlas gelap beraksen emas dengan timeline yang bisa di-drag (3500 SM – 2026), peta wilayah kekuasaan per periode, jalur dagang, peristiwa, tokoh, sumber, dan fokus Nusantara.

## Menjalankan

Butuh Node.js 18+.

```bash
npm install
npm run dev        # http://localhost:5173
```

Perintah lain:

```bash
npm run check      # validasi data (id, rentang tahun, koordinat, sumber)
npm run typecheck  # tsc --noEmit
npm run build      # build produksi ke dist/
npm run preview    # layani hasil build di http://localhost:4173
```

## Fitur

- **Timeline**: seret handle, klik trek, tombol ▶ Putar, loncat cepat, atau keyboard (←/→, Shift untuk ±100 tahun, Home/End). Skala non-linear agar era modern lebih lega.
- **Peta**: d3 + world-atlas, zoom/geser. Lapisan Wilayah, Jalur dagang, Peristiwa, Tokoh bisa dihidupkan/dimatikan.
- **Panel peradaban**: tab Ringkasan, Perdagangan, Tokoh, Peristiwa, Sumber.
- **Drawer "Sezaman"** di dalam panel peradaban: geser slider untuk memilih tahun di dalam rentang peradaban itu, lalu lihat peristiwa, peradaban lain, dan tokoh yang sezaman. Tarik grip di tepi bawah untuk mengubah tinggi drawer. Tombol "Tampilkan di peta" menyinkronkan timeline utama.

- **Jelajah tema**: 13 halaman tema, yaitu Suku Bangsa, Warisan Budaya, Agama Nusantara, Islam Nusantara, Pergerakan Nasional, Revolusi Kemerdekaan, Prasejarah Manusia, Agama-Agama Dunia, Islam Dunia, Sains & Penemuan, Zaman Revolusi, Dua Perang Dunia, dan Perang Dingin.

## Isi data

66 peradaban (termasuk Oseania dan 18 kerajaan/negara Nusantara), masing-masing dengan kronik dan cerita per periode; 13 tema (±550 entri); ±230 peristiwa; ±150 tokoh. Narasi ditulis dengan gaya bercerita tetapi tetap mengikuti sumber. Tahun perkiraan ditandai ±, dan hal yang diperdebatkan disebut terang-terangan.

## Struktur

```
src/data/      data peradaban, peristiwa, tokoh, jalur dagang
src/components MapView, Timeline, DetailPanel, ContemporaryDrawer
src/lib/time.ts skala timeline dan format tahun
scripts/check-data.ts
```

## Catatan data

Batas wilayah adalah poligon skematis untuk visualisasi, bukan batas presisi. Tahun-tahun kuno bersifat perkiraan dan sebagian diperdebatkan sejarawan. Menambah data cukup dengan menambah entri di `src/data/` lalu menjalankan `npm run check`.
