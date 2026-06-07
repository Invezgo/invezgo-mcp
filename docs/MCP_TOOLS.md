# Invezgo MCP Tools Documentation

Dokumentasi lengkap untuk semua tools yang tersedia pada Invezgo MCP Server.

## Overview

Invezgo MCP Server menyediakan **59 tools** untuk analisis saham Bursa Efek Indonesia (BEI) dan manajemen data trading personal.

| Kategori                          | Jumlah Tools | Deskripsi                                            |
| --------------------------------- | ------------ | ---------------------------------------------------- |
| [Personal Tools](#personal-tools) | 9            | Data watchlist, portfolio, journal, dan trading user |
| [Stock Tools](#stock-tools)       | 50           | Analisis saham, broker, index, dan data pasar BEI    |

---

## Daftar Tool Terdaftar (Source of Truth)

Daftar ini disinkronkan dari registrasi `server.addTool(...)` pada kode:

- `src/tools/personal/index.ts` (9 tools)
- `src/tools/stock/index.ts` (50 tools)

### Personal Tools (9)

`watchlist`, `journal`, `journal-summary`, `portfolio`, `portfolio-summary`, `trade`, `trade-summary`, `watchlist-detail`, `trade-summary-chart`

### Stock Tools (50)

`information`, `list-stock`, `list-broker`, `top-change`, `top-foreign`, `top-accumulation`, `chart`, `chart-indicator`, `shareholder-number`, `shareholder`, `shareholder-detail`, `shareholder-one-detail`, `shareholder-ksei`, `summary-stock`, `summary-broker`, `inventory-stock`, `inventory-broker`, `momentum`, `intraday-inventory`, `sankey`, `insider`, `above-five-percent`, `above-one-percent`, `price-diary`, `price-seasonal`, `search-stock`, `news`, `disclosure`, `financial`, `keystat`, `intraday`, `order-book`, `calendar`, `screener`, `list-index`, `index-chart`, `multi-time-chart`, `shareholder-detail-one-spec`, `shareholder-relation`, `shareholder-classification`, `shareholder-classify-table`, `sector-stalker`, `intraday-index`, `sector-rotation`, `broker-stalker`, `broker-stalker-list`, `price-table`, `time-table`, `intraday-data`, `shareholder-high`

---

## Authentication

Semua tools memerlukan autentikasi menggunakan salah satu metode:

- **Header**: `Authorization: Bearer <api_key>`
- **Header (Deprecated)**: `invezgo-api-key: <api_key>`
- **Query Parameter**: `?api=<api_key>`

---

## Personal Tools

Tools untuk mengakses data personal user (watchlist, portfolio, journal, trading).

### 1. `watchlist`

Mendapatkan daftar watchlist user.

| Properti        | Nilai         |
| --------------- | ------------- |
| **Deskripsi**   | Get watchlist |
| **Read Only**   | ✅            |
| **Destructive** | ❌            |
| **Parameters**  | _None_        |

---

### 2. `watchlist-detail`

Mendapatkan detail watchlist berdasarkan ID.

| Properti        | Nilai                               |
| --------------- | ----------------------------------- |
| **Deskripsi**   | Get detail watchlist berdasarkan ID |
| **Read Only**   | ✅                                  |
| **Destructive** | ❌                                  |

**Parameters:**
| Parameter | Type | Deskripsi |
|-----------|------|-----------|
| `id` | string | ID watchlist yang ingin ditampilkan |

---

### 3. `journal`

Mendapatkan data journal trading.

| Properti        | Nilai       |
| --------------- | ----------- |
| **Deskripsi**   | Get journal |
| **Read Only**   | ✅          |
| **Destructive** | ❌          |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `from` | string | "2025-07-01" | Tanggal periode awal (YYYY-MM-DD) |
| `to` | string | "2025-08-05" | Tanggal periode akhir (YYYY-MM-DD) |

---

### 4. `journal-summary`

Mendapatkan ringkasan journal trading.

| Properti        | Nilai               |
| --------------- | ------------------- |
| **Deskripsi**   | Get journal summary |
| **Read Only**   | ✅                  |
| **Destructive** | ❌                  |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `from` | string | "2025-07-01" | Tanggal periode awal (YYYY-MM-DD) |
| `to` | string | "2025-08-05" | Tanggal periode akhir (YYYY-MM-DD) |

---

### 5. `portfolio`

Mendapatkan data portfolio saham user.

| Properti        | Nilai         |
| --------------- | ------------- |
| **Deskripsi**   | Get portfolio |
| **Read Only**   | ✅            |
| **Destructive** | ❌            |
| **Parameters**  | _None_        |

---

### 6. `portfolio-summary`

Mendapatkan ringkasan portfolio.

| Properti        | Nilai                 |
| --------------- | --------------------- |
| **Deskripsi**   | Get portfolio summary |
| **Read Only**   | ✅                    |
| **Destructive** | ❌                    |
| **Parameters**  | _None_                |

---

### 7. `trade`

Mendapatkan data transaksi trading.

| Properti        | Nilai     |
| --------------- | --------- |
| **Deskripsi**   | Get trade |
| **Read Only**   | ✅        |
| **Destructive** | ❌        |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `from` | string | "2025-07-01" | Tanggal periode awal (YYYY-MM-DD) |
| `to` | string | "2025-08-05" | Tanggal periode akhir (YYYY-MM-DD) |

---

### 8. `trade-summary`

Mendapatkan ringkasan transaksi trading.

| Properti        | Nilai             |
| --------------- | ----------------- |
| **Deskripsi**   | Get trade summary |
| **Read Only**   | ✅                |
| **Destructive** | ❌                |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `from` | string | "2025-07-01" | Tanggal periode awal (YYYY-MM-DD) |
| `to` | string | "2025-08-05" | Tanggal periode akhir (YYYY-MM-DD) |

---

### 9. `trade-summary-chart`

Mendapatkan chart analisis performa trading.

| Properti        | Nilai                                                   |
| --------------- | ------------------------------------------------------- |
| **Deskripsi**   | Get trade summary chart untuk analisis performa trading |
| **Read Only**   | ✅                                                      |
| **Destructive** | ❌                                                      |

**Parameters:**
| Parameter | Type | Deskripsi |
|-----------|------|-----------|
| `from` | string | Tanggal periode awal (YYYY-MM-DD) |
| `to` | string | Tanggal periode akhir (YYYY-MM-DD) |

---

## Stock Tools

Tools untuk analisis saham Bursa Efek Indonesia (BEI).

### Informasi Dasar

#### 10. `information`

Informasi perusahaan berdasarkan kode emiten.

| Properti        | Nilai                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Informasi perusahaan sesuai kode emiten (code). Jenis data: Cross Section. Update sesuai laporan masing-masing perusahaan setiap bulan |
| **Read Only**   | ✅                                                                                                                                     |
| **Destructive** | ❌                                                                                                                                     |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten (contoh: BBCA, BBRI, TLKM) |

---

#### 11. `list-stock`

Daftar semua perusahaan tercatat di BEI.

| Properti        | Nilai                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Daftar perusahaan tercatat di Bursa Efek Indonesia. Tidak termasuk perusahaan yang telah delisting. Update Realtime. |
| **Read Only**   | ✅                                                                                                                   |
| **Destructive** | ❌                                                                                                                   |
| **Parameters**  | _None_                                                                                                               |

---

#### 12. `list-broker`

Daftar sekuritas/broker tercatat di BEI.

| Properti        | Nilai                                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Daftar sekuritas atau broker tercatat di Bursa Efek Indonesia. Update Realtime dan mengikuti perkembangan MKBD broker. |
| **Read Only**   | ✅                                                                                                                     |
| **Destructive** | ❌                                                                                                                     |
| **Parameters**  | _None_                                                                                                                 |

---

#### 13. `search-stock`

Mencari saham berdasarkan kata kunci.

| Properti        | Nilai                                                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Cari perusahaan berdasarkan kata kunci (query). Mendukung pencarian nama perusahaan, kode emiten, industri, atau kategori. |
| **Read Only**   | ✅                                                                                                                         |
| **Destructive** | ❌                                                                                                                         |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kata kunci pencarian |

---

### Chart & Harga

#### 14. `chart`

Grafik harga saham dengan rentang tanggal.

| Properti        | Nilai                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Grafik harga saham perusahaan dengan rentang tanggal tertentu. Jenis data: Time Series. Update Realtime. |
| **Read Only**   | ✅                                                                                                       |
| **Destructive** | ❌                                                                                                       |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |
| `from` | string | - | Tanggal periode awal (YYYY-MM-DD) |
| `to` | string | - | Tanggal periode akhir (YYYY-MM-DD) |

---

#### 15. `chart-indicator`

Grafik indikator teknikal saham.

| Properti        | Nilai                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| **Deskripsi**   | Grafik indikator saham perusahaan dengan rentang tanggal tertentu. Jenis data: Time Series. Update Realtime. |
| **Read Only**   | ✅                                                                                                           |
| **Destructive** | ❌                                                                                                           |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |
| `from` | string | - | Tanggal periode awal (YYYY-MM-DD) |
| `to` | string | - | Tanggal periode akhir (YYYY-MM-DD) |
| `indicator` | enum | "bdm" | Pilihan: `bdm`, `ritel`, `ratio`, `value`, `volume`, `foreign`, `accumulation`, `freq` |

---

#### `multi-time-chart`

Grafik multi-timeframe untuk saham atau index.

| Properti        | Nilai                                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Deskripsi**   | Grafik multi-timeframe untuk saham atau index berdasarkan rentang tanggal dan `timeframe`. Jenis data: Time Series. Update Realtime. |
| **Read Only**   | ✅                                                                                                                                   |
| **Destructive** | ❌                                                                                                                                   |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode saham atau index (contoh: BBCA, COMPOSITE) |
| `from` | string | - | Tanggal periode awal (YYYY-MM-DD) |
| `to` | string | - | Tanggal periode akhir (YYYY-MM-DD) |
| `timeframe` | enum | "D" | Timeframe: `1`, `5`, `15`, `30`, `60`, `D`, `W`, `M` |

---

#### 16. `intraday`

Grafik intraday real-time.

| Properti        | Nilai                                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Grafik intraday saham sesuai dengan kode emiten dan jenis pasar. Jenis data: Time Series. Update Realtime. |
| **Read Only**   | ✅                                                                                                         |
| **Destructive** | ❌                                                                                                         |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |
| `market` | enum | "RG" | Jenis Pasar: `RG` (Regular), `NG` (Negotiated), `TN` (Tunai) |

---

#### `intraday-data`

Data intraday saham ringkas (real-time/historical).

| Properti        | Nilai                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| **Deskripsi**   | Data intraday saham ringkas berdasarkan kode emiten, market, dan tanggal opsional untuk historical snapshot. |
| **Read Only**   | ✅                                                                                                           |
| **Destructive** | ❌                                                                                                           |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |
| `market` | enum | "RG" | Jenis Pasar: `RG`, `NG`, `TN` |
| `date` | string | - | Tanggal historical (YYYY-MM-DD), opsional |

---

#### 17. `order-book`

Data order book saham.

| Properti        | Nilai                                                                         |
| --------------- | ----------------------------------------------------------------------------- |
| **Deskripsi**   | Data order book atau harga saham. Jenis data: Cross Section. Update Realtime. |
| **Read Only**   | ✅                                                                            |
| **Destructive** | ❌                                                                            |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |
| `market` | enum | "RG" | Jenis Pasar: `RG`, `NG`, `TN` |

---

#### 18. `price-diary`

Tabel perubahan harga harian.

| Properti        | Nilai                                                                         |
| --------------- | ----------------------------------------------------------------------------- |
| **Deskripsi**   | Tabel perubahan harga saham harian. Jenis data: Time Series. Update Realtime. |
| **Read Only**   | ✅                                                                            |
| **Destructive** | ❌                                                                            |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |

---

#### 19. `price-seasonal`

Tabel perubahan harga bulanan/musiman.

| Properti        | Nilai                                                                          |
| --------------- | ------------------------------------------------------------------------------ |
| **Deskripsi**   | Tabel perubahan harga saham bulanan. Jenis data: Time Series. Update Realtime. |
| **Read Only**   | ✅                                                                             |
| **Destructive** | ❌                                                                             |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |
| `range` | number | 12 | Range berdasarkan jumlah bulan |

---

### Pemegang Saham

#### 20. `shareholder`

Komposisi kepemilikan saham.

| Properti        | Nilai                                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Deskripsi**   | Data komposisi kepemilikan saham. Jenis data: Cross Section berdasarkan data terbaru. Update sesuai laporan perusahaan setiap bulan. |
| **Read Only**   | ✅                                                                                                                                   |
| **Destructive** | ❌                                                                                                                                   |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |

---

#### 21. `shareholder-detail`

Detail komposisi pemegang saham.

| Properti        | Nilai                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Deskripsi**   | Data komposisi kepemilikan saham detail. Jenis data: Cross Section. Update sesuai laporan perusahaan setiap bulan. |
| **Read Only**   | ✅                                                                                                                 |
| **Destructive** | ❌                                                                                                                 |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |

---

#### `shareholder-one-detail`

Detail komposisi kepemilikan saham berdasarkan kode emiten dan/atau nama pemegang saham.

| Properti        | Nilai                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Data komposisi kepemilikan saham berdasarkan `code` dan/atau `name`. Semua parameter bersifat opsional, tetapi disarankan mengisi minimal salah satu agar hasil lebih spesifik. |
| **Read Only**   | ✅                                                                                                                                                                              |
| **Destructive** | ❌                                                                                                                                                                              |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | - | Kode saham (opsional) |
| `name` | string | - | Nama pemegang saham (opsional) |

---

#### `shareholder-detail-one-spec`

Data kepemilikan saham (detail) untuk pemegang saham mayor (>1%) berdasarkan `code` atau `name`.

| Properti        | Nilai                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Mendapatkan data kepemilikan >1% berdasarkan kode saham atau nama pemegang saham. Minimal isi salah satu: `code` atau `name`. |
| **Read Only**   | ✅                                                                                                                            |
| **Destructive** | ❌                                                                                                                            |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | - | Kode saham (opsional jika `name` diisi) |
| `name` | string | - | Nama pemegang saham (opsional jika `code` diisi) |

---

#### `shareholder-relation`

Graf relasi pemegang saham (graph relation) dari `code`/`name`.

| Properti        | Nilai                                                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Mendapatkan data graf relasi pemegang saham berdasarkan snapshot kepemilikan terbaru. Semua parameter bersifat opsional, dengan hasil tergantung `code` atau `name`. |
| **Read Only**   | ✅                                                                                                                                                                   |
| **Destructive** | ❌                                                                                                                                                                   |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | - | Kode saham titik awal (opsional) |
| `name` | string | - | Nama pemegang saham titik awal (opsional) |
| `depth` | number | - | Kedalaman graph dalam hop, 1-4 (opsional) |
| `max_nodes` | number | - | Batas maksimum total node graph (opsional) |
| `neighbors` | number | - | Batas maksimum relasi/tetangga per node (opsional) |
| `min_percentage` | number | - | Filter minimum persentase kepemilikan (opsional) |

---

#### `shareholder-classification`

Klasifikasi lengkap pemegang saham berdasarkan periode (range).

| Properti        | Nilai                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Mendapatkan data lengkap pemegang saham dengan seluruh klasifikasi investor berdasarkan `code` dan `range` bulan. |
| **Read Only**   | ✅                                                                                                                |
| **Destructive** | ❌                                                                                                                |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |
| `range` | number | 6 | Range bulan, 1-36 (contoh: 6) |

---

#### `shareholder-classify-table`

Tabel klasifikasi pemegang saham berdasarkan kode saham.

| Properti        | Nilai                                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Mendapatkan data terbaru pemegang saham dengan klasifikasi investor dalam bentuk tabel berdasarkan `code`. |
| **Read Only**   | ✅                                                                                                         |
| **Destructive** | ❌                                                                                                         |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |

---

#### 22. `shareholder-number`

Jumlah investor per saham.

| Properti        | Nilai                                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Deskripsi**   | Data jumlah investor pada saham. Jenis data: Cross Section / Time Series. Update sesuai laporan perusahaan setiap bulan. |
| **Read Only**   | ✅                                                                                                                       |
| **Destructive** | ❌                                                                                                                       |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |
| `from` | string | - | Tanggal periode awal (YYYY-MM-DD) |
| `to` | string | - | Tanggal periode akhir (YYYY-MM-DD) |

---

#### 23. `shareholder-ksei`

Kepemilikan berdasarkan data KSEI.

| Properti        | Nilai                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Data komposisi kepemilikan investor asing dan domestik berdasarkan data KSEI. Update tanggal 02 setiap bulan. |
| **Read Only**   | ✅                                                                                                            |
| **Destructive** | ❌                                                                                                            |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |
| `from` | string | - | Tanggal periode awal (YYYY-MM-DD) |
| `to` | string | - | Tanggal periode akhir (YYYY-MM-DD) |
| `range` | number | 6 | Range berdasarkan jumlah bulan |

---

#### 24. `insider`

Transaksi orang dalam (insider trading).

| Properti        | Nilai                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------- |
| **Deskripsi**   | Data pemegang saham atau insider. Jenis data: Cross Section. Update EOD setiap 18.00 WIB. |
| **Read Only**   | ✅                                                                                        |
| **Destructive** | ❌                                                                                        |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `from` | string | - | Tanggal periode awal (YYYY-MM-DD) |
| `page` | number | 1 | Halaman yang akan ditampilkan |
| `limit` | number | 10 | Jumlah data per halaman |
| `code` | string | - | Kode emiten (opsional) |
| `name` | string | - | Nama pemegang saham (opsional) |

---

#### 25. `above-five-percent`

Kepemilikan di atas 5%.

| Properti        | Nilai                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Data pemegang saham di atas 5% dari total saham. Jenis data: Cross Section. Update EOD setiap 18.00 WIB. |
| **Read Only**   | ✅                                                                                                       |
| **Destructive** | ❌                                                                                                       |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `from` | string | - | Tanggal periode awal (YYYY-MM-DD) |
| `page` | number | 1 | Halaman yang akan ditampilkan |
| `limit` | number | 10 | Jumlah data per halaman |
| `code` | string | - | Kode emiten (opsional) |
| `name` | string | - | Nama pemegang saham (opsional) |
| `broker` | string | - | Kode broker (opsional) |

---

#### `above-one-percent`

Kepemilikan di atas 1%.

| Properti        | Nilai                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Data pemegang saham di atas 1% dari total saham. Jenis data: Cross Section. Update EOD setiap 18.00 WIB. |
| **Read Only**   | ✅                                                                                                       |
| **Destructive** | ❌                                                                                                       |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `from` | string | - | Tanggal periode awal (YYYY-MM-DD) |
| `page` | number | 1 | Halaman yang akan ditampilkan |
| `limit` | number | 10 | Jumlah data per halaman |
| `code` | string | - | Kode emiten (opsional) |
| `name` | string | - | Nama pemegang saham (opsional) |
| `broker` | string | - | Kode broker (opsional) |

---

#### `shareholder-high`

Data konsentrasi kepemilikan saham tinggi untuk seluruh emiten.

| Properti        | Nilai                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------- |
| **Deskripsi**   | Mendapatkan data konsentrasi kepemilikan saham tinggi (cross section) untuk semua emiten. |
| **Read Only**   | ✅                                                                                        |
| **Destructive** | ❌                                                                                        |
| **Parameters**  | _None_                                                                                    |

---

### Broker & Transaksi

#### 26. `summary-stock`

Broker summary untuk saham tertentu.

| Properti        | Nilai                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Data broker summary sesuai kode emiten. Jenis data: Cross Section / Time Series. Update EOD setiap 17.30 WIB. |
| **Read Only**   | ✅                                                                                                            |
| **Destructive** | ❌                                                                                                            |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |
| `from` | string | - | Tanggal periode awal (YYYY-MM-DD) |
| `to` | string | - | Tanggal periode akhir (YYYY-MM-DD) |
| `investor` | enum | "all" | Jenis investor: `all`, `f` (foreign), `d` (domestic) |
| `market` | enum | "RG" | Jenis pasar: `RG`, `NG`, `TN` |

---

#### 27. `summary-broker`

Broker summary untuk broker tertentu.

| Properti        | Nilai                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Data broker summary sesuai kode broker. Jenis data: Cross Section / Time Series. Update EOD setiap 17.30 WIB. |
| **Read Only**   | ✅                                                                                                            |
| **Destructive** | ❌                                                                                                            |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "XL" | Kode broker (2 huruf besar, contoh: XL, ZP, AG) |
| `from` | string | - | Tanggal periode awal (YYYY-MM-DD) |
| `to` | string | - | Tanggal periode akhir (YYYY-MM-DD) |
| `investor` | enum | "all" | Jenis investor: `all`, `f`, `d` |
| `market` | enum | "RG" | Jenis pasar: `RG`, `NG`, `TN` |

---

#### 28. `inventory-stock`

Visualisasi transaksi saham.

| Properti        | Nilai                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Visualisasi inventory atau transaksi data broker summary. Jenis data: Time Series. Update EOD setiap 18.00 WIB. |
| **Read Only**   | ✅                                                                                                              |
| **Destructive** | ❌                                                                                                              |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |
| `from` | string | - | Tanggal periode awal (YYYY-MM-DD) |
| `to` | string | - | Tanggal periode akhir (YYYY-MM-DD) |
| `investor` | enum | "all" | Jenis investor: `all`, `f`, `d` |
| `market` | enum | "RG" | Jenis pasar: `RG`, `NG`, `TN` |
| `scope` | enum | "vol" | Komponen: `vol` (volume), `val` (value), `freq` (frequency) |
| `limit` | number | 5 | Jumlah broker yang ditampilkan |
| `filter` | string[] | - | Kode broker yang akan difilter (opsional) |

---

#### 29. `inventory-broker`

Visualisasi transaksi broker.

| Properti        | Nilai                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Visualisasi inventory atau transaksi data broker summary. Jenis data: Time Series. Update EOD setiap 18.00 WIB. |
| **Read Only**   | ✅                                                                                                              |
| **Destructive** | ❌                                                                                                              |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "XL" | Kode broker (2 huruf) |
| `from` | string | - | Tanggal periode awal (YYYY-MM-DD) |
| `to` | string | - | Tanggal periode akhir (YYYY-MM-DD) |
| `investor` | enum | "all" | Jenis investor: `all`, `f`, `d` |
| `market` | enum | "RG" | Jenis pasar: `RG`, `NG`, `TN` |
| `scope` | enum | "vol" | Komponen: `vol`, `val`, `freq` |
| `limit` | number | 5 | Jumlah broker yang ditampilkan |
| `filter` | string[] | - | Kode broker yang akan difilter (opsional) |

---

#### 30. `momentum`

Grafik momentum jual dan beli.

| Properti        | Nilai                                                                        |
| --------------- | ---------------------------------------------------------------------------- |
| **Deskripsi**   | Grafik momentum saham. Jenis data: Time Series. Update EOD setiap 18.00 WIB. |
| **Read Only**   | ✅                                                                           |
| **Destructive** | ❌                                                                           |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |
| `date` | string | - | Tanggal (YYYY-MM-DD) |
| `range` | number | 5 | Range dalam menit |
| `scope` | enum | "vol" | Komponen: `vol`, `val`, `freq` |

---

#### 31. `intraday-inventory`

Visualisasi transaksi saham harian.

| Properti        | Nilai                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Grafik inventory atau transaksi data broker summary harian. Jenis data: Time Series. Update EOD setiap 18.00 WIB. |
| **Read Only**   | ✅                                                                                                                |
| **Destructive** | ❌                                                                                                                |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |
| `date` | string | - | Tanggal (YYYY-MM-DD) |
| `range` | number | 5 | Range dalam menit |
| `type` | enum | "value" | Jenis: `volume`, `value` |
| `total` | number | 4 | Jumlah broker yang ditampilkan |
| `buyer` | enum | "ALL" | Jenis buyer: `ALL`, `F`, `D` |
| `seller` | enum | "ALL" | Jenis seller: `ALL`, `F`, `D` |
| `market` | enum | "RG" | Jenis pasar: `ALL`, `RG`, `NG`, `TN` |
| `broker` | string[] | - | Filter kode broker (opsional) |

---

#### 32. `sankey`

Visualisasi transaksi perpindahan saham.

| Properti        | Nilai                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Grafik sankey atau transaksi data broker summary. Jenis data: Time Series. Update EOD setiap 18.00 WIB. |
| **Read Only**   | ✅                                                                                                      |
| **Destructive** | ❌                                                                                                      |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |
| `date` | string | - | Tanggal (YYYY-MM-DD) |
| `type` | enum | "value" | Jenis: `volume`, `value` |
| `buyer` | enum | "ALL" | Jenis buyer: `ALL`, `F`, `D` |
| `seller` | enum | "ALL" | Jenis seller: `ALL`, `F`, `D` |
| `market` | enum | "RG" | Jenis pasar: `ALL`, `RG`, `NG`, `TN` |
| `broker` | string[] | - | Filter kode broker (opsional) |

---

#### 33. `broker-stalker`

Analisis aktivitas broker spesifik pada saham.

| Properti        | Nilai                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Analisis aktivitas broker tertentu pada saham specific. Menampilkan data transaksi broker untuk saham tersebut. |
| **Read Only**   | ✅                                                                                                              |
| **Destructive** | ❌                                                                                                              |

**Parameters:**
| Parameter | Type | Deskripsi |
|-----------|------|-----------|
| `broker` | string | Kode broker (contoh: AG, YP, ZP) |
| `stock` | string | Kode emiten (contoh: BBCA) |

---

#### 34. `broker-stalker-list`

Daftar broker yang aktif pada saham.

| Properti        | Nilai                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Daftar broker yang melakukan transaksi pada saham tertentu. Menampilkan semua broker yang aktif pada saham. |
| **Read Only**   | ✅                                                                                                          |
| **Destructive** | ❌                                                                                                          |

**Parameters:**
| Parameter | Type | Deskripsi |
|-----------|------|-----------|
| `code` | string | Kode emiten |

---

#### 35. `price-table`

Tabel distribusi harga saham.

| Properti        | Nilai                                                                             |
| --------------- | --------------------------------------------------------------------------------- |
| **Deskripsi**   | Tabel distribusi harga saham. Menampilkan data transaksi berdasarkan level harga. |
| **Read Only**   | ✅                                                                                |
| **Destructive** | ❌                                                                                |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |

---

#### 36. `time-table`

Tabel distribusi waktu transaksi.

| Properti        | Nilai                                                                                 |
| --------------- | ------------------------------------------------------------------------------------- |
| **Deskripsi**   | Tabel distribusi waktu transaksi saham. Menampilkan data transaksi berdasarkan waktu. |
| **Read Only**   | ✅                                                                                    |
| **Destructive** | ❌                                                                                    |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |

---

### Top Movers

#### 37. `top-change`

Daftar perubahan harga terbesar.

| Properti        | Nilai                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Daftar perusahaan yang mengalami perubahan harga terbesar pada tanggal tertentu. Update Realtime. |
| **Read Only**   | ✅                                                                                                |
| **Destructive** | ❌                                                                                                |

**Parameters:**
| Parameter | Type | Deskripsi |
|-----------|------|-----------|
| `date` | string | Tanggal (YYYY-MM-DD) |

---

#### 38. `top-foreign`

Daftar transaksi asing teratas.

| Properti        | Nilai                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Deskripsi**   | Daftar akumulasi dan distribusi pergerakan asing saham teratas. Jenis data: Cross Section. Update EOD setiap hari. |
| **Read Only**   | ✅                                                                                                                 |
| **Destructive** | ❌                                                                                                                 |

**Parameters:**
| Parameter | Type | Deskripsi |
|-----------|------|-----------|
| `date` | string | Tanggal (YYYY-MM-DD) |

---

#### 39. `top-accumulation`

Daftar akumulasi dan distribusi teratas.

| Properti        | Nilai                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| **Deskripsi**   | Daftar akumulasi dan distribusi pergerakan saham teratas. Jenis data: Cross Section. Update EOD setiap hari. |
| **Read Only**   | ✅                                                                                                           |
| **Destructive** | ❌                                                                                                           |

**Parameters:**
| Parameter | Type | Deskripsi |
|-----------|------|-----------|
| `date` | string | Tanggal (YYYY-MM-DD) |

---

### Index & Sektor

#### 40. `list-index`

Daftar index BEI.

| Properti        | Nilai                                                                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Daftar lengkap index yang tersedia di Bursa Efek Indonesia termasuk COMPOSITE/IHSG, LQ45, IDX30, sektoral, syariah, dan lainnya. Update Realtime. |
| **Read Only**   | ✅                                                                                                                                                |
| **Destructive** | ❌                                                                                                                                                |
| **Parameters**  | _None_                                                                                                                                            |

---

#### 41. `index-chart`

Chart index BEI.

| Properti        | Nilai                                                                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Deskripsi**   | Grafik harga index BEI dengan rentang tanggal tertentu. Mendukung COMPOSITE, LQ45, IDX30, dan index lainnya. Jenis data: Time Series. Update Realtime. |
| **Read Only**   | ✅                                                                                                                                                     |
| **Destructive** | ❌                                                                                                                                                     |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "COMPOSITE" | Kode index: `COMPOSITE`, `LQ45`, `IDX30`, `IDXFINANCE`, dll |
| `from` | string | - | Tanggal periode awal (YYYY-MM-DD) |
| `to` | string | - | Tanggal periode akhir (YYYY-MM-DD) |

---

#### 42. `intraday-index`

Intraday index BEI.

| Properti        | Nilai                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Data harga intraday real-time untuk index BEI seperti COMPOSITE/IHSG, LQ45, IDX30. Jenis data: Time Series. Update Realtime. |
| **Read Only**   | ✅                                                                                                                           |
| **Destructive** | ❌                                                                                                                           |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "COMPOSITE" | Kode index |
| `market` | enum | "RG" | Jenis pasar: `RG`, `NG`, `TN` |

---

#### 43. `sector-stalker`

Analisis pergerakan sektor.

| Properti        | Nilai                                                                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Analisis pergerakan harga index sektoral atau saham dalam rentang waktu tertentu. Mendukung perbandingan performa antar sektor. Update setiap hari bursa. |
| **Read Only**   | ✅                                                                                                                                                        |
| **Destructive** | ❌                                                                                                                                                        |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `from` | string | - | Tanggal periode awal (YYYY-MM-DD) |
| `to` | string | - | Tanggal periode akhir (YYYY-MM-DD) |
| `base` | enum | "COMPOSITE" | Base index: `COMPOSITE`, `IDX30`, `IDX80`, `LQ45`, `IDXFINANCE`, `IDXENERGY` |
| `limit` | number | - | Limit jumlah hasil (opsional, untuk base selain COMPOSITE) |
| `filter` | string | - | Filter pencarian kode/nama saham (opsional) |

---

#### 44. `sector-rotation`

Analisis rotasi sektor.

| Properti        | Nilai                                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Analisis rotasi sektor dalam rentang waktu tertentu. Menampilkan pergerakan dan perbandingan antar sektor. |
| **Read Only**   | ✅                                                                                                         |
| **Destructive** | ❌                                                                                                         |

**Parameters:**
| Parameter | Type | Deskripsi |
|-----------|------|-----------|
| `from` | string | Tanggal periode awal (YYYY-MM-DD) |
| `to` | string | Tanggal periode akhir (YYYY-MM-DD) |

---

### Laporan Keuangan

#### 45. `financial`

Laporan keuangan saham.

| Properti        | Nilai                                                                                  |
| --------------- | -------------------------------------------------------------------------------------- |
| **Deskripsi**   | Data laporan keuangan saham. Jenis data: Panel. Update tergantung laporan dari emiten. |
| **Read Only**   | ✅                                                                                     |
| **Destructive** | ❌                                                                                     |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |
| `statement` | enum | "BS" | Jenis laporan: `BS` (Balance Sheet), `IS` (Income Statement), `CF` (Cash Flow), `EQ` (Equity) |
| `type` | enum | "Q" | Periode: `Q` (Quarterly), `FY` (Annual), `Q1`, `Q2`, `Q3`, `Q4` |
| `limit` | number | 15 | Jumlah data (1-100) |

---

#### 46. `keystat`

Key statistics keuangan.

| Properti        | Nilai                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Data laporan keuangan key statistics saham. Jenis data: Panel. Update tergantung laporan dari emiten. |
| **Read Only**   | ✅                                                                                                    |
| **Destructive** | ❌                                                                                                    |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |
| `type` | enum | "Q" | Periode: `Q`, `FY`, `Q1`, `Q2`, `Q3`, `Q4` |
| `limit` | number | 15 | Jumlah data (1-100) |

---

### Berita & Informasi

#### 47. `news`

Berita terkait saham.

| Properti        | Nilai                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Cari berita terkait saham berdasarkan kode emiten. Maksimal 20 berita. Dapat digunakan untuk Analisa Sentimen. |
| **Read Only**   | ✅                                                                                                             |
| **Destructive** | ❌                                                                                                             |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |

---

#### 48. `disclosure`

Keterbukaan informasi saham.

| Properti        | Nilai                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Deskripsi**   | Cari keterbukaan informasi (disclosure) terkait saham. Maksimal 20 keterbukaan informasi. Dapat digunakan untuk Analisa Sentimen. |
| **Read Only**   | ✅                                                                                                                                |
| **Destructive** | ❌                                                                                                                                |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | "BBCA" | Kode emiten |

---

#### 49. `calendar`

Calendar corporate action.

| Properti        | Nilai                                                                       |
| --------------- | --------------------------------------------------------------------------- |
| **Deskripsi**   | Data calendar corporate action. Jenis data: Cross Section. Update Realtime. |
| **Read Only**   | ✅                                                                          |
| **Destructive** | ❌                                                                          |

**Parameters:**
| Parameter | Type | Default | Deskripsi |
|-----------|------|---------|-----------|
| `code` | string | - | Kode emiten (opsional) |
| `type` | enum | - | Jenis: `IPO`, `PUBLIC_EXPOSE`, `REVERSE`, `RIGHT`, `RUPS_RESULT`, `RUPS_SCHEDULE`, `SPLIT`, `WARRANT`, `BONUS`, `CONVERTION` (opsional) |
| `limit` | number | 10 | Jumlah data (1-50) |
| `page` | number | 1 | Halaman |

---

### Screener

#### 50. `screener`

Screener saham.

| Properti        | Nilai                                                            |
| --------------- | ---------------------------------------------------------------- |
| **Deskripsi**   | Data screener saham. Jenis data: Cross Section. Update Realtime. |
| **Read Only**   | ✅                                                               |
| **Destructive** | ❌                                                               |

**Parameters:**
| Parameter | Type | Deskripsi |
|-----------|------|-----------|
| `formula` | string | Formula untuk screening saham |

---

## Enum Reference

### Jenis Investor

| Value | Deskripsi           |
| ----- | ------------------- |
| `all` | Semua investor      |
| `f`   | Foreign (asing)     |
| `d`   | Domestic (domestik) |

### Jenis Pasar

| Value | Deskripsi           |
| ----- | ------------------- |
| `RG`  | Regular Market      |
| `NG`  | Negotiated Market   |
| `TN`  | Tunai (Cash) Market |
| `ALL` | Semua pasar         |

### Komponen Perhitungan (Scope)

| Value  | Deskripsi             |
| ------ | --------------------- |
| `vol`  | Volume                |
| `val`  | Value (Nilai)         |
| `freq` | Frequency (Frekuensi) |

### Jenis Indikator

| Value          | Deskripsi    |
| -------------- | ------------ |
| `bdm`          | BDM          |
| `ritel`        | Ritel        |
| `ratio`        | Ratio        |
| `value`        | Value        |
| `volume`       | Volume       |
| `foreign`      | Foreign      |
| `accumulation` | Accumulation |
| `freq`         | Frequency    |

### Jenis Laporan Keuangan (Statement)

| Value | Deskripsi                    |
| ----- | ---------------------------- |
| `BS`  | Balance Sheet (Neraca)       |
| `IS`  | Income Statement (Laba Rugi) |
| `CF`  | Cash Flow (Arus Kas)         |
| `EQ`  | Equity (Ekuitas)             |

### Jenis Periode Laporan

| Value | Deskripsi             |
| ----- | --------------------- |
| `Q`   | Quarterly (Kuartalan) |
| `FY`  | Fiscal Year (Tahunan) |
| `Q1`  | Quarter 1             |
| `Q2`  | Quarter 2             |
| `Q3`  | Quarter 3             |
| `Q4`  | Quarter 4             |

### Jenis Corporate Action

| Value           | Deskripsi               |
| --------------- | ----------------------- |
| `IPO`           | Initial Public Offering |
| `PUBLIC_EXPOSE` | Public Expose           |
| `REVERSE`       | Reverse Stock           |
| `RIGHT`         | Rights Issue            |
| `RUPS_RESULT`   | Hasil RUPS              |
| `RUPS_SCHEDULE` | Jadwal RUPS             |
| `SPLIT`         | Stock Split             |
| `WARRANT`       | Penerbitan Warrant      |
| `BONUS`         | Bonus Dividen           |
| `CONVERTION`    | Konversi                |

---

## Data Update Schedule

| Jenis Data       | Update Frequency | Waktu Update           |
| ---------------- | ---------------- | ---------------------- |
| Realtime         | Setiap detik     | Market hours           |
| EOD (End of Day) | Harian           | 17.30 - 18.00 WIB      |
| Bulanan          | Bulanan          | Tanggal 2 setiap bulan |
| Perusahaan       | Variable         | Sesuai laporan emiten  |

---

## Contoh Penggunaan

### Mendapatkan Informasi Saham

```json
{
  "tool": "information",
  "params": {
    "code": "BBCA"
  }
}
```

### Melihat Chart Saham

```json
{
  "tool": "chart",
  "params": {
    "code": "BBRI",
    "from": "2025-01-01",
    "to": "2025-02-19"
  }
}
```

### Analisis Broker

```json
{
  "tool": "summary-stock",
  "params": {
    "code": "TLKM",
    "from": "2025-02-01",
    "to": "2025-02-19",
    "investor": "all",
    "market": "RG"
  }
}
```

### Laporan Keuangan

```json
{
  "tool": "financial",
  "params": {
    "code": "ASII",
    "statement": "IS",
    "type": "Q",
    "limit": 8
  }
}
```

---

## Tips Penggunaan

1. **Gunakan `list-stock`** untuk mendapatkan daftar kode emiten yang valid
2. **Gunakan `list-broker`** untuk mendapatkan daftar kode broker yang valid
3. **Gunakan `search-stock`** untuk mencari saham berdasarkan nama perusahaan atau industri
4. **Perhatikan data update schedule** untuk mengetahui kapan data terakhir diperbarui
5. **Gunakan filter parameter** (`investor`, `market`, `scope`) untuk memperkecil hasil dan meningkatkan performa

---

_Dokumen ini dibuat secara otomatis berdasarkan implementasi Invezgo MCP Server v1.0.0_
