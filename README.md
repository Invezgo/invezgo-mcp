# Invezgo MCP (Model Context Protocol) Server

Invezgo MCP adalah server Model Context Protocol lokal (MCPB) yang dirancang untuk membantu pengguna Claude Desktop dalam menganalisis data pasar saham Indonesia (Bursa Efek Indonesia / BEI) serta mengelola data personal trading dari platform Invezgo secara langsung melalui percakapan AI.

---

## Deskripsi

Server ini terhubung ke API resmi Invezgo untuk menarik data finansial terstruktur, grafik harga, kepemilikan saham, aktivitas broker, serta informasi transaksi bursa secara real-time. Melalui koneksi stdio lokal yang aman, server ini juga memfasilitasi akses baca-saja (read-only) terhadap data personal pengguna (seperti portfolio, watchlist, journal, dan trade) guna membantu AI memberikan saran taktis yang disesuaikan dengan kondisi portofolio nyata pengguna.

---

## Fitur Utama

### 1. Analisis Pasar & Data Saham BEI (Stock Tools)

- **Informasi Fundamental & Profil**: Mendapatkan profil emiten, sektor, industri, deskripsi bisnis, dan tanggal IPO.
- **Grafik Harga & Indikator**: Menarik visualisasi pergerakan harga historis saham/index (time series) dan indikator teknikal bandarmologi (BDM, ritel, foreign, dll.).
- **Komposisi Pemegang Saham**: Menganalisis kepemilikan saham (>1% dan >5%), klasifikasi investor domestik vs asing, serta visualisasi graf hubungan relasi pemegang saham.
- **Aktivitas Broker (Bandarmologi)**: Broker summary harian/historis, visualisasi aliran dana (Sankey diagram), pergerakan inventory broker, serta analisis broker spesifik (_broker stalker_).
- **Data Transaksi Real-time**: Mengambil informasi intraday, order book, kalender aksi korporasi, screener, dan performa rotasi sektor bursa.

### 2. Integrasi Data Personal Invezgo (Personal Tools)

- **Portfolio & Portfolio Summary**: Mengakses daftar kepemilikan saham aktif, harga rata-rata beli, modal mengendap, dan unrealized gain/loss secara keseluruhan.
- **Watchlist & Watchlist Detail**: Melihat daftar pantauan saham beserta detail pergerakan harganya.
- **Journal & Trade Summary**: Menarik histori pencatatan jurnal trading, ringkasan transaksi, serta chart analisis performa trading historis untuk evaluasi berkala.

---

## Instalasi

### Melalui Claude Desktop Directory

Setelah ekstensi disetujui di direktori resmi, Anda dapat menginstalnya secara langsung melalui:

1. Buka **Claude Desktop Settings** → **Extensions**.
2. Cari **Invezgo MCP**.
3. Klik **Install**.

---

## Konfigurasi

Server ini berjalan secara lokal melalui stdio menggunakan Node.js dan membutuhkan API key Invezgo untuk melakukan request ke API endpoint.

### Langkah Pengaturan API Key:

1. Masuk ke akun Invezgo Anda di [invezgo.com](https://invezgo.com).
2. Buka halaman pengaturan API di [invezgo.com/setting/api](https://invezgo.com/setting/api) untuk membuat API Key baru.
3. Simpan API Key Anda.

### Konfigurasi Manual (Claude Desktop):

Jika Anda mengonfigurasi Claude Desktop secara manual, tambahkan baris berikut pada file konfigurasi Anda (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "invezgo-mcp": {
      "command": "node",
      "args": ["C:\\Path\\To\\invezgo-mcp\\dist\\server.js", "--stdio"],
      "env": {
        "INVEZGO_API_KEY": "ISI_DENGAN_API_KEY_ANDA",
        "MCP_TRANSPORT": "stdio"
      }
    }
  }
}
```

---

## Contoh Penggunaan (Examples)

Berikut adalah 3 contoh skenario nyata bagaimana Anda dapat menggunakan Invezgo MCP di Claude Desktop:

### Contoh 1: Mendapatkan Informasi & Profil Emiten

- **User Prompt:** "Tampilkan informasi dasar tentang saham Bank Central Asia (BBCA)"
- **Expected Behavior:**
  - Claude mendeteksi kebutuhan data emiten dan memanggil tool `information` dengan argument `{"code": "BBCA"}`.
  - Server mengembalikan data profil PT Bank Central Asia Tbk, termasuk sektor perbankan, sub-industri bank konvensional, deskripsi perusahaan, dan tanggal IPO.
  - Claude menyajikan profil tersebut dengan rapi kepada pengguna.

### Contoh 2: Menganalisis Kepemilikan Pemegang Saham Terbesar

- **User Prompt:** "Siapa saja pemegang saham terbesar dari Bank Rakyat Indonesia (BBRI)?"
- **Expected Behavior:**
  - Claude mendeteksi kebutuhan analisis kepemilikan dan memanggil tool `shareholder-detail` dengan argument `{"code": "BBRI"}`.
  - Server mengembalikan daftar pemegang saham mayoritas BBRI, seperti Negara Republik Indonesia beserta persentase kepemilikannya.
  - Claude menampilkan struktur pemegang saham pengendali dan masyarakat secara terstruktur.

### Contoh 3: Memeriksa Ringkasan Portfolio Pengguna

- **User Prompt:** "Tampilkan ringkasan portfolio saham saya saat ini"
- **Expected Behavior:**
  - Claude mendeteksi permintaan data pribadi dan memanggil tool `portfolio-summary`.
  - Server mengambil data portfolio user secara aman dari API Invezgo menggunakan API Key yang dikonfigurasi, lalu mengembalikan ringkasan total nilai investasi, buying power (cash), market value, serta unrealized profit/loss.
  - Claude menampilkan evaluasi ringkasan portfolio investasi pengguna saat ini.

---

## Kebijakan Privasi (Privacy Policy)

Ekstensi Invezgo MCP mengumpulkan dan mengirimkan data tertentu untuk menyediakan layanannya. Untuk membaca kebijakan privasi lengkap kami, silakan kunjungi: [invezgo.com/privacy](https://invezgo.com/privacy).

### Data Collection & Usage (Pengumpulan & Penggunaan Data):

- **API Key Pengguna**: Membutuhkan `INVEZGO_API_KEY` yang disimpan secara aman di perangkat lokal Anda oleh Claude Desktop. API key ini hanya dikirimkan sebagai header otorisasi ke API resmi Invezgo (`invezgo.com`) untuk mengambil data saham dan data trading personal Anda.
- **Parameter Kueri**: Parameter pencarian seperti kode saham (emiten), tanggal periode awal/akhir, dan kode broker dikirimkan ke API Invezgo untuk menarik data pasar yang relevan.
- **Data Pribadi (Watchlist, Portfolio, Journal, Trade)**: Data pribadi ditarik langsung secara realtime dari server Invezgo untuk ditampilkan kepada model AI di perangkat lokal Anda. Data ini bersifat **read-only** (baca-saja) dan tidak dimodifikasi oleh ekstensi ini.

### Data Sharing (Pembagian Data):

- Semua data yang ditarik oleh ekstensi ini hanya dikirimkan antara Claude Desktop lokal Anda dan server resmi Invezgo (`invezgo.com`). Kami **TIDAK** membagikan atau menjual data Anda kepada pihak ketiga mana pun.

### Data Retention (Retensi Data):

- Ekstensi lokal ini berjalan sepenuhnya di memori (memory-only) melalui stdio. Ekstensi ini **TIDAK** menyimpan atau melakukan caching terhadap data pasar maupun data personal Anda secara permanen pada penyimpanan lokal Anda. Seluruh data ditarik secara langsung (_realtime_).

---

## Support

Jika Anda menemukan bug, memiliki pertanyaan, atau ingin memberikan masukan:

- **GitHub Issues**: [github.com/invezgo/invezgo-mcp/issues](https://github.com/invezgo/invezgo-mcp/issues)
- **Layanan Bantuan / Email**: [support@invezgo.com](mailto:support@invezgo.com)
- **Situs Resmi**: [invezgo.com](https://invezgo.com)
