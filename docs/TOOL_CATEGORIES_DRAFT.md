# Invezgo MCP Tool Routing Guide

Dokumen ini digunakan sebagai referensi awal RAG/AI untuk memilih tools Invezgo MCP yang paling relevan berdasarkan maksud pertanyaan pengguna.

Prinsip utama:

1. Jika pertanyaan menyebut emiten/saham tertentu, gunakan `information` sebagai salah satu tool awal untuk mendapatkan konteks perusahaan.
2. Jika pengguna meminta rekomendasi saham/peluang pasar, gunakan kategori `Rekomendasi` terlebih dahulu.
3. Jika pengguna meminta analisis fundamental, gunakan minimal `keystat` dan `financial`.
4. Jika pengguna meminta analisis teknikal, gunakan minimal `chart`, `chart-indicator`, dan `multi-time-chart`.
5. Jika pengguna meminta analisis bandarmologi, gunakan minimal `inventory-stock`, `summary-stock`, `shareholder-ksei`, `shareholder-detail`, dan `insider`.
6. Tools `Personal` hanya digunakan jika pengguna secara eksplisit bertanya tentang data pribadi seperti watchlist, journal, portfolio, atau trade.
7. Tools `List` dan `Tools` bersifat pendukung/opsional sesuai kebutuhan.

---

## Quick Routing Matrix

| Intent Pengguna                                   | Tools Prioritas                                                                         | Catatan                                                                                                                                 |
| ------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Konteks emiten/perusahaan                         | `information`                                                                           | Gunakan di awal saat ada kode saham/emiten spesifik.                                                                                    |
| Rekomendasi saham / saham menarik / peluang pasar | `top-change`, `top-foreign`, `top-accumulation`                                         | Untuk mencari kandidat awal berdasarkan pergerakan harga, foreign flow, dan akumulasi.                                                  |
| Analisis fundamental                              | `keystat`, `financial`                                                                  | Wajib untuk data fundamental. Tambahkan `calendar` dan `news` bila perlu konteks event/berita.                                          |
| Analisis teknikal saham                           | `chart`, `chart-indicator`, `multi-time-chart`                                          | Wajib untuk membaca harga, indikator, dan multi-timeframe. Tambahkan `intraday`, `price-diary`, atau `price-seasonal` sesuai kebutuhan. |
| Analisis teknikal index                           | `index-chart`, `intraday-index`, `multi-time-chart`                                     | `multi-time-chart` bisa digunakan untuk saham maupun index.                                                                             |
| Analisis bandarmologi saham                       | `inventory-stock`, `summary-stock`, `shareholder-ksei`, `shareholder-detail`, `insider` | Kombinasi utama untuk broker flow, inventory, kepemilikan, dan insider.                                                                 |
| Analisis broker tertentu                          | `summary-broker`, `inventory-broker`, `broker-stalker`                                  | Gunakan jika pengguna menyebut kode broker atau aktivitas broker.                                                                       |
| Analisis sektor / rotasi sektor                   | `sector-stalker`, `sector-rotation`                                                     | Untuk konteks sektor/index sector.                                                                                                      |
| Mencari kode saham/broker/index                   | `list-stock`, `list-broker`, `list-index`, `search-stock`                               | Gunakan jika kode tidak jelas atau pengguna meminta daftar.                                                                             |
| Screening saham                                   | `screener`                                                                              | Gunakan jika pengguna meminta filter/screening berbasis formula.                                                                        |
| Data pribadi user                                 | `watchlist`, `journal`, `portfolio`, `trade`, dan ringkasannya                          | Hanya jika pengguna bertanya data pribadi.                                                                                              |

---

## Saran Tools Utama Berdasarkan Alur Analisis

| Alur Analisis | Tools Utama yang Disarankan                                                             | Status          | Tujuan                                                                                      |
| ------------- | --------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------- |
| Fundamental   | `keystat`, `financial`                                                                  | Wajib           | Mendapatkan data fundamental dan laporan keuangan emiten.                                   |
| Teknikal      | `chart`, `chart-indicator`, `multi-time-chart`                                          | Wajib           | Mendapatkan data harga, indikator, dan multi-timeframe.                                     |
| Bandarmologi  | `inventory-stock`, `summary-stock`, `shareholder-ksei`, `shareholder-detail`, `insider` | Disarankan kuat | Membaca broker flow, inventory, kepemilikan KSEI/detail shareholder, dan transaksi insider. |

Catatan:

- `inventory-stock` adalah nama tool MCP untuk inventory chart saham.
- `multi-time-chart` dapat digunakan untuk **saham** dan **index**.

---

## 1. Information / Konteks Awal

Kategori khusus untuk mengambil konteks awal perusahaan/emiten.

| Tool          | Kapan Digunakan                                                                              | Catatan RAG                                                                                                           |
| ------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `information` | Saat pertanyaan menyebut emiten/saham tertentu atau analisis membutuhkan konteks perusahaan. | Salah satu tool awal. Membantu AI memahami profil, bisnis, sektor, dan konteks umum emiten sebelum analisis lanjutan. |

---

## 2. Rekomendasi

Kategori untuk pertanyaan seperti: rekomendasi saham, saham menarik, peluang pasar, top mover, saham yang sedang diakumulasi, atau saham dengan foreign flow besar.

| Tool               | Kapan Digunakan                                                        | Catatan RAG                                                 |
| ------------------ | ---------------------------------------------------------------------- | ----------------------------------------------------------- |
| `top-change`       | Saat pengguna meminta saham yang sedang aktif/bergerak atau top mover. | Menghasilkan kandidat berdasarkan perubahan harga terbesar. |
| `top-foreign`      | Saat pengguna meminta rekomendasi berbasis aliran dana asing.          | Menghasilkan kandidat berdasarkan foreign flow.             |
| `top-accumulation` | Saat pengguna meminta saham yang sedang diakumulasi/didistribusi.      | Menghasilkan kandidat berdasarkan akumulasi/distribusi.     |

---

## 3. Fundamental

Kategori fundamental hanya untuk data laporan keuangan, statistik keuangan, corporate action/calendar, dan berita emiten.

### 3.1 Stock / Emiten

| Tool        | Kapan Digunakan                                                                                                                    | Catatan RAG                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `financial` | Saat pengguna meminta laporan keuangan, pendapatan, laba, aset, liabilitas, cash flow, equity, atau analisis fundamental mendalam. | Tool wajib untuk fundamental.              |
| `keystat`   | Saat pengguna meminta rasio/statistik keuangan, valuasi, profitabilitas, atau ringkasan fundamental.                               | Tool wajib untuk fundamental.              |
| `calendar`  | Saat pengguna bertanya corporate action, jadwal RUPS, IPO, right issue, stock split, warrant, public expose, atau event emiten.    | Gunakan sebagai konteks event fundamental. |
| `news`      | Saat pengguna bertanya berita terbaru, sentimen berita, atau katalis emiten.                                                       | Gunakan sebagai konteks berita.            |

---

## 4. Teknikal

Kategori teknikal digunakan untuk analisis harga, chart, indikator, intraday, pola harga, multi-timeframe, dan index.

### 4.1 Stock / Emiten

| Tool               | Kapan Digunakan                                                                                                          | Catatan RAG                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| `chart`            | Saat pengguna meminta chart harga saham, tren harga, OHLC, atau analisis historis harga.                                 | Tool wajib untuk teknikal saham.                       |
| `chart-indicator`  | Saat pengguna meminta indikator, sinyal teknikal, volume/value/foreign/accumulation indicator, atau konfirmasi teknikal. | Tool wajib untuk teknikal saham.                       |
| `multi-time-chart` | Saat pengguna meminta analisis multi-timeframe saham.                                                                    | Tool wajib untuk teknikal; bisa untuk saham dan index. |
| `intraday`         | Saat pengguna meminta pergerakan intraday saham.                                                                         | Untuk chart intraday real-time.                        |
| `intraday-data`    | Saat pengguna membutuhkan data intraday ringkas atau snapshot historis intraday.                                         | Untuk detail data intraday.                            |
| `price-diary`      | Saat pengguna meminta perubahan harga harian dalam periode pendek.                                                       | Untuk pola harian.                                     |
| `price-seasonal`   | Saat pengguna meminta pola seasonal/bulanan/tahunan harga.                                                               | Untuk analisis seasonal.                               |

### 4.2 Index / Sector

| Tool               | Kapan Digunakan                                                                             | Catatan RAG                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `index-chart`      | Saat pengguna meminta chart index BEI seperti IHSG/COMPOSITE, LQ45, IDX30, atau index lain. | Tool teknikal utama untuk index.                                              |
| `intraday-index`   | Saat pengguna meminta pergerakan intraday index.                                            | Untuk intraday index.                                                         |
| `multi-time-chart` | Saat pengguna meminta multi-timeframe index.                                                | Bisa digunakan untuk index seperti `COMPOSITE`, `LQ45`, `IDX30`, dan lainnya. |

---

## 5. Bandarmologi

Kategori bandarmologi digunakan untuk membaca broker flow, transaksi broker, foreign/domestic flow, akumulasi/distribusi, inventory, perpindahan saham, order book, kepemilikan, shareholder, insider, sektor, dan distribusi transaksi.

### 5.1 Stock / Emiten

| Tool                          | Kapan Digunakan                                                                          | Catatan RAG                                                |
| ----------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `summary-stock`               | Saat pengguna meminta broker summary pada saham tertentu.                                | Tool utama bandarmologi saham.                             |
| `inventory-stock`             | Saat pengguna meminta inventory chart/transaksi broker pada saham.                       | Tool utama bandarmologi saham.                             |
| `shareholder-ksei`            | Saat pengguna meminta data KSEI, kepemilikan asing/domestik, atau perubahan kepemilikan. | Tool utama untuk kepemilikan KSEI.                         |
| `shareholder-detail`          | Saat pengguna meminta detail pemegang saham.                                             | Tool utama untuk struktur shareholder.                     |
| `insider`                     | Saat pengguna bertanya transaksi orang dalam/insider.                                    | Tool utama untuk aksi insider.                             |
| `momentum`                    | Saat pengguna meminta momentum jual/beli berbasis transaksi.                             | Untuk membaca tekanan beli/jual.                           |
| `intraday-inventory`          | Saat pengguna meminta inventory/transaksi broker intraday.                               | Untuk bandarmologi intraday.                               |
| `sankey`                      | Saat pengguna meminta perpindahan saham/transaksi antar pihak/broker.                    | Visualisasi flow transaksi.                                |
| `broker-stalker-list`         | Saat pengguna meminta daftar broker aktif pada saham tertentu.                           | Pendukung analisis broker aktif.                           |
| `above-five-percent`          | Saat pengguna meminta pemegang saham di atas 5%.                                         | Untuk tracking pemegang besar.                             |
| `above-one-percent`           | Saat pengguna meminta pemegang saham di atas 1%.                                         | Untuk tracking pemegang besar/menengah.                    |
| `shareholder`                 | Saat pengguna meminta komposisi kepemilikan saham umum.                                  | Struktur kepemilikan dasar.                                |
| `shareholder-one-detail`      | Saat pengguna meminta detail pemegang saham berdasarkan kode/nama.                       | Pencarian detail shareholder.                              |
| `shareholder-detail-one-spec` | Saat pengguna meminta kepemilikan >1% berdasarkan kode atau nama.                        | Spesifik pemegang saham mayor.                             |
| `shareholder-number`          | Saat pengguna meminta jumlah investor/pemegang saham.                                    | Untuk tren jumlah holder.                                  |
| `shareholder-relation`        | Saat pengguna meminta relasi/graf pemegang saham.                                        | Untuk melihat hubungan antar shareholder.                  |
| `shareholder-classification`  | Saat pengguna meminta klasifikasi lengkap pemegang saham.                                | Untuk klasifikasi investor/shareholder.                    |
| `shareholder-classify-table`  | Saat pengguna meminta tabel klasifikasi pemegang saham terbaru.                          | Format tabel klasifikasi.                                  |
| `shareholder-high`            | Saat pengguna meminta konsentrasi kepemilikan tinggi.                                    | Untuk mencari saham dengan ownership concentration tinggi. |
| `disclosure`                  | Saat pengguna meminta keterbukaan informasi emiten yang relevan dengan aksi pasar.       | Dapat menjadi konteks tambahan bandarmologi/event.         |
| `order-book`                  | Saat pengguna meminta bid/offer, order book, atau tekanan antrian.                       | Untuk membaca tekanan pasar jangka pendek.                 |
| `price-table`                 | Saat pengguna meminta distribusi transaksi berdasarkan level harga.                      | Untuk membaca konsentrasi transaksi harga.                 |
| `time-table`                  | Saat pengguna meminta distribusi transaksi berdasarkan waktu.                            | Untuk membaca pola transaksi intraday.                     |

### 5.2 Broker

| Tool               | Kapan Digunakan                                                  | Catatan RAG                                            |
| ------------------ | ---------------------------------------------------------------- | ------------------------------------------------------ |
| `summary-broker`   | Saat pengguna meminta broker summary untuk broker tertentu.      | Analisis aktivitas broker.                             |
| `inventory-broker` | Saat pengguna meminta inventory/transaksi untuk broker tertentu. | Analisis inventory broker.                             |
| `broker-stalker`   | Saat pengguna menyebut broker dan saham tertentu.                | Melihat aktivitas broker spesifik pada saham spesifik. |

### 5.3 Index / Sector

| Tool              | Kapan Digunakan                                                  | Catatan RAG                                      |
| ----------------- | ---------------------------------------------------------------- | ------------------------------------------------ |
| `sector-stalker`  | Saat pengguna meminta analisis pergerakan sektor/index sektoral. | Untuk melihat sektor yang bergerak/menonjol.     |
| `sector-rotation` | Saat pengguna meminta rotasi sektor.                             | Untuk membaca perpindahan kekuatan antar sektor. |

---

## 6. List

Kategori master data. Gunakan jika AI perlu daftar referensi sebelum memilih tool lanjutan atau jika pengguna meminta daftar.

| Tool          | Kapan Digunakan                                                               | Catatan RAG                     |
| ------------- | ----------------------------------------------------------------------------- | ------------------------------- |
| `list-stock`  | Saat pengguna meminta daftar saham/emiten atau AI perlu validasi kode emiten. | Master daftar emiten/saham BEI. |
| `list-broker` | Saat pengguna meminta daftar broker atau AI perlu validasi kode broker.       | Master daftar broker/sekuritas. |
| `list-index`  | Saat pengguna meminta daftar index atau AI perlu validasi kode index.         | Master daftar index BEI.        |

---

## 7. Tools

Kategori tools opsional. Gunakan hanya jika diperlukan untuk menemukan saham atau melakukan screening.

| Tool           | Kapan Digunakan                                                                                           | Catatan RAG                                                   |
| -------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `search-stock` | Saat pengguna tidak memberikan kode saham yang jelas, hanya menyebut nama perusahaan/industri/kata kunci. | Membantu menemukan emiten yang dimaksud.                      |
| `screener`     | Saat pengguna meminta screening/filter saham berbasis formula/kriteria.                                   | Formula dapat bersifat fundamental, teknikal, atau kombinasi. |

---

## 8. Personal

Kategori data pribadi user. Tools ini hanya digunakan jika pengguna secara eksplisit bertanya tentang watchlist, journal, portfolio, trade, performa trading pribadi, atau ringkasan data pribadinya.

| Tool                  | Kapan Digunakan                                            | Catatan RAG    |
| --------------------- | ---------------------------------------------------------- | -------------- |
| `watchlist`           | Saat pengguna meminta daftar watchlist pribadi.            | Data personal. |
| `watchlist-detail`    | Saat pengguna meminta detail watchlist berdasarkan ID.     | Data personal. |
| `journal`             | Saat pengguna meminta jurnal trading pribadi.              | Data personal. |
| `journal-summary`     | Saat pengguna meminta ringkasan jurnal trading pribadi.    | Data personal. |
| `portfolio`           | Saat pengguna meminta portfolio saham pribadi.             | Data personal. |
| `portfolio-summary`   | Saat pengguna meminta ringkasan portfolio pribadi.         | Data personal. |
| `trade`               | Saat pengguna meminta data transaksi trading pribadi.      | Data personal. |
| `trade-summary`       | Saat pengguna meminta ringkasan transaksi trading pribadi. | Data personal. |
| `trade-summary-chart` | Saat pengguna meminta chart performa trading pribadi.      | Data personal. |

---

## Tool Coverage Check

Dokumen ini mencakup seluruh **59 tools MCP** yang terdaftar:

- Information / Konteks Awal: 1 tool
- Rekomendasi: 3 tools
- Fundamental: 4 tools
- Teknikal: 9 tools, dengan `multi-time-chart` muncul di stock dan index karena memang mendukung keduanya
- Bandarmologi: 28 tools
- List: 3 tools
- Tools: 2 tools
- Personal: 9 tools
