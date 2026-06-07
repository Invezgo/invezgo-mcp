# 📊 Grand Prompt: Analisis Saham Indonesia

> **Panduan Lengkap Analisis Saham BEI dengan Invezgo MCP**  
> Versi 2.0 | 26 Desember 2025

---

## 📑 Daftar Isi

1. [Tools MCP Lengkap](#-tools-mcp-lengkap)
2. [Template Prompt](#-template-prompt)
3. [Contoh Kasus](#-contoh-kasus)
4. [Screener Variables](#-screener-variables)
5. [Formula Screener](#-formula-screener)
6. [Quick Reference](#-quick-reference)

---

## 🛠️ Tools MCP Lengkap

### A. Informasi Perusahaan

#### `information`

Profil lengkap perusahaan berdasarkan kode emiten.

```
Contoh:
- "Tampilkan informasi perusahaan BBCA"
- "Profil lengkap emiten TLKM"
- "Apa bisnis utama ASII?"
```

#### `list-stock`

Daftar semua saham tercatat di BEI.

```
Contoh:
- "Tampilkan semua saham di BEI"
- "Berapa jumlah emiten yang listing?"
```

#### `list-broker`

Daftar semua broker/sekuritas.

```
Contoh:
- "Daftar semua broker di BEI"
- "Cari kode broker Mirae Asset"
```

#### `search-stock`

Pencarian saham berdasarkan kata kunci.

```
Contoh:
- "Cari saham dengan kata kunci 'bank'"
- "Cari emiten sektor teknologi"
- "Cari saham BUMN"
```

---

### B. Pergerakan Harga & Chart

#### `chart`

Grafik harga OHLCV dengan rentang tanggal.

| Parameter | Deskripsi     | Contoh     |
| --------- | ------------- | ---------- |
| `code`    | Kode saham    | BBCA       |
| `from`    | Tanggal awal  | 2024-10-01 |
| `to`      | Tanggal akhir | 2024-12-26 |

```
Contoh:
- "Chart BBCA dari 2024-10-01 sampai 2024-12-26"
- "Grafik harga TLKM 3 bulan terakhir"
- "Pergerakan saham ASII November-Desember 2024"
```

#### `chart-indicator`

Chart dengan indikator teknikal.

| Indikator      | Deskripsi                           |
| -------------- | ----------------------------------- |
| `bdm`          | Buy Day vs Money (akumulasi bandar) |
| `ritel`        | Volume ritel                        |
| `ratio`        | Rasio bandar/ritel                  |
| `volume`       | Volume indicator                    |
| `value`        | Value indicator                     |
| `foreign`      | Foreign flow                        |
| `accumulation` | Akumulasi/distribusi                |
| `freq`         | Frekuensi trading                   |

```
Contoh:
- "Chart BBRI indikator BDM dari 2024-11-01 sampai 2024-12-26"
- "Grafik foreign flow TLKM 2 bulan"
- "Chart akumulasi ASII November 2024"
- "Lihat ratio bandar/ritel BMRI 1 bulan"
```

#### `intraday`

Grafik pergerakan harga intraday.

| Parameter | Deskripsi   | Pilihan    |
| --------- | ----------- | ---------- |
| `code`    | Kode saham  |            |
| `market`  | Jenis pasar | RG, NG, TN |

```
Contoh:
- "Grafik intraday BBCA pasar reguler"
- "Pergerakan harga GOTO hari ini"
- "Intraday chart BRIS market RG"
```

#### `order-book`

Data bid/ask (antrian beli/jual).

```
Contoh:
- "Order book BBCA"
- "Lihat antrian beli jual TLKM"
- "Bid offer ASII pasar reguler"
```

#### `price-diary`

Perubahan harga harian dalam 1 bulan.

```
Contoh:
- "Price diary BBNI bulan ini"
- "Perubahan harga harian UNVR"
- "Catatan harga HMSP Desember 2024"
```

#### `price-seasonal`

Pola musiman harga.

| Parameter | Deskripsi    | Default |
| --------- | ------------ | ------- |
| `code`    | Kode saham   |         |
| `range`   | Jumlah bulan | 12      |

```
Contoh:
- "Pola seasonal BBCA 5 tahun (range=60)"
- "Seasonality TLKM 12 bulan"
- "Pattern bulanan ASII 3 tahun"
```

---

### C. Analisis Broker

#### `summary-stock`

Broker summary per saham.

| Parameter  | Deskripsi      | Pilihan    |
| ---------- | -------------- | ---------- |
| `code`     | Kode saham     |            |
| `from`     | Tanggal awal   |            |
| `to`       | Tanggal akhir  |            |
| `investor` | Jenis investor | all, f, d  |
| `market`   | Jenis pasar    | RG, NG, TN |

```
Contoh:
- "Broker summary BBCA dari 2024-12-20 sampai 2024-12-26, investor all, market RG"
- "Summary broker ADRO 5 hari terakhir, foreign only"
- "Siapa broker yang beli MDKA minggu ini?"
- "Top buyer seller INCO hari ini"
```

#### `summary-broker`

Aktivitas transaksi per broker.

| Parameter | Deskripsi                          |
| --------- | ---------------------------------- |
| `code`    | Kode broker (2 huruf, cth: YP, XL) |

```
Contoh:
- "Summary broker YP dari 2024-12-01 sampai 2024-12-26"
- "Aktivitas broker Mirae (YP) bulan ini"
- "Saham apa yang dibeli broker XL?"
```

#### `inventory-stock`

Visualisasi inventory broker per saham.

| Parameter    | Deskripsi       | Pilihan/Default |
| ------------ | --------------- | --------------- |
| `code`       | Kode saham      |                 |
| `from`, `to` | Rentang tanggal |                 |
| `investor`   | Jenis investor  | all, f, d       |
| `market`     | Jenis pasar     | RG              |
| `scope`      | Komponen        | vol, val, freq  |
| `limit`      | Jumlah broker   | 5               |
| `filter`     | Filter broker   | optional        |

```
Contoh:
- "Inventory chart BBCA 1 bulan, top 5 broker, scope volume"
- "Visualisasi akumulasi TLKM, foreign investor, limit 10"
- "Inventory ASII dengan filter broker YP, XL, CC"
- "Pergerakan inventory BRIS scope value 2 minggu"
```

#### `inventory-broker`

Visualisasi inventory per broker.

```
Contoh:
- "Inventory broker YP 1 bulan, limit 10 saham"
- "Saham yang dikoleksi broker XL scope volume"
- "Portofolio pergerakan broker CC"
```

#### `momentum`

Grafik momentum buy/sell.

| Parameter | Deskripsi   | Default |
| --------- | ----------- | ------- |
| `code`    | Kode saham  |         |
| `date`    | Tanggal     |         |
| `range`   | Range menit | 5       |
| `scope`   | Komponen    | vol     |

```
Contoh:
- "Momentum BBCA tanggal 2024-12-26 range 5 menit"
- "Momentum buy sell TLKM hari ini scope value"
- "Grafik momentum ASII dengan interval 15 menit"
```

#### `intraday-inventory`

Inventory broker intraday.

| Parameter | Deskripsi     | Default   |
| --------- | ------------- | --------- |
| `code`    | Kode saham    |           |
| `date`    | Tanggal       |           |
| `range`   | Range menit   | 5         |
| `type`    | Tipe          | value     |
| `total`   | Jumlah broker | 4         |
| `buyer`   | Filter buyer  | ALL, F, D |
| `seller`  | Filter seller | ALL, F, D |
| `market`  | Pasar         | RG        |
| `broker`  | Filter broker | optional  |

```
Contoh:
- "Intraday inventory BBRI tanggal 2024-12-26, top 4 broker"
- "Inventory harian MDKA filter buyer foreign"
- "Pergerakan broker INCO intraday dengan filter YP, ML"
```

#### `sankey`

Visualisasi perpindahan saham antar broker.

| Parameter         | Deskripsi  | Default |
| ----------------- | ---------- | ------- |
| `code`            | Kode saham |         |
| `date`            | Tanggal    |         |
| `type`            | Tipe       | value   |
| `buyer`, `seller` | Filter     | ALL     |
| `market`          | Pasar      | RG      |

```
Contoh:
- "Sankey chart BBCA tanggal 2024-12-26 tipe value"
- "Perpindahan saham TLKM, buyer foreign, seller domestic"
- "Flow broker ASII hari ini"
- "Sankey MDKA dengan filter broker tertentu"
```

---

### D. Kepemilikan & Pemegang Saham

#### `shareholder`

Komposisi pemegang saham terbaru.

```
Contoh:
- "Komposisi pemegang saham BBCA"
- "Siapa pemilik mayoritas TLKM?"
- "Struktur kepemilikan ASII"
```

#### `shareholder-detail`

Detail pemegang saham dengan nama.

```
Contoh:
- "Detail pemegang saham BBNI"
- "Daftar nama pemilik HMSP"
- "Siapa saja investor besar UNVR?"
```

#### `shareholder-number`

Jumlah investor dari waktu ke waktu.

| Parameter    | Deskripsi       |
| ------------ | --------------- |
| `code`       | Kode saham      |
| `from`, `to` | Rentang tanggal |

```
Contoh:
- "Jumlah investor BBCA dari 2024-01-01 sampai 2024-12-26"
- "Trend jumlah pemegang saham GOTO 1 tahun"
- "Apakah investor BRIS bertambah atau berkurang?"
```

#### `shareholder-ksei`

Data KSEI: komposisi asing vs domestik per kategori.

| Parameter | Deskripsi    | Default |
| --------- | ------------ | ------- |
| `code`    | Kode saham   |         |
| `range`   | Jumlah bulan | 6       |

```
Contoh:
- "Data KSEI BBCA 6 bulan terakhir"
- "Komposisi asing domestik TLKM 12 bulan"
- "Trend kepemilikan institusi ASII"
- "Perubahan ownership GOTO dari KSEI"
```

#### `insider`

Transaksi orang dalam (direktur, komisaris).

| Parameter | Deskripsi    | Default  |
| --------- | ------------ | -------- |
| `from`    | Tanggal awal |          |
| `page`    | Halaman      | 1        |
| `limit`   | Jumlah data  | 10       |
| `code`    | Filter saham | optional |
| `name`    | Filter nama  | optional |

```
Contoh:
- "Transaksi insider 30 hari terakhir"
- "Insider trading BBCA 3 bulan"
- "Apakah ada direktur yang beli saham TLKM?"
- "Filter insider dengan nama 'Hartono'"
```

#### `above-five-percent`

Kepemilikan di atas 5% saham beredar.

```
Contoh:
- "Pemegang saham di atas 5% seluruh emiten"
- "Siapa yang punya lebih dari 5% GOTO?"
- "Major shareholder BRIS"
```

---

### E. Data Fundamental

#### `financial`

Laporan keuangan lengkap.

| Parameter   | Deskripsi     | Pilihan        |
| ----------- | ------------- | -------------- |
| `code`      | Kode saham    |                |
| `statement` | Jenis laporan | BS, IS, CF, EQ |
| `type`      | Periode       | Q, FY, Q1-Q4   |
| `limit`     | Jumlah data   | 15             |

| Statement | Keterangan                   |
| --------- | ---------------------------- |
| `BS`      | Balance Sheet (Neraca)       |
| `IS`      | Income Statement (Laba Rugi) |
| `CF`      | Cash Flow (Arus Kas)         |
| `EQ`      | Equity (Ekuitas)             |

```
Contoh:
- "Income statement BBCA 5 kuartal terakhir"
- "Balance sheet TLKM tahunan (FY) 5 tahun"
- "Cash flow ASII Q3 2024"
- "Laporan ekuitas UNTR 10 periode"
```

#### `keystat`

Statistik kunci keuangan (rasio).

| Parameter | Deskripsi   | Pilihan |
| --------- | ----------- | ------- |
| `code`    | Kode saham  |         |
| `type`    | Periode     | Q, FY   |
| `limit`   | Jumlah data | 15      |

```
Contoh:
- "Key statistics BBRI 5 kuartal"
- "Rasio keuangan TLKM tahunan"
- "PER, PBV, ROE ASII 10 periode"
- "Fundamental metrics BMRI quarterly"
```

---

### F. Data Pasar

#### `top-change`

Top gainers dan losers harian.

```
Contoh:
- "Top gainers losers tanggal 2024-12-26"
- "Saham naik turun tertinggi hari ini"
- "Top mover kemarin"
```

#### `top-foreign`

Saham dengan net foreign terbesar.

```
Contoh:
- "Top foreign buy sell tanggal 2024-12-26"
- "Saham yang dibeli asing hari ini"
- "Net foreign terbesar kemarin"
```

#### `top-accumulation`

Saham dengan akumulasi/distribusi terbesar.

```
Contoh:
- "Top akumulasi distribusi tanggal 2024-12-26"
- "Saham terakumulasi hari ini"
- "Distribusi terbesar kemarin"
```

#### `calendar`

Jadwal corporate action.

| Parameter | Deskripsi    | Pilihan                                      |
| --------- | ------------ | -------------------------------------------- |
| `code`    | Filter saham | optional                                     |
| `type`    | Jenis CA     | IPO, RIGHT, SPLIT, BONUS, RUPS_SCHEDULE, dll |
| `limit`   | Jumlah       | 10                                           |
| `page`    | Halaman      | 1                                            |

```
Contoh:
- "Jadwal corporate action bulan ini"
- "Calendar dividen Januari 2025"
- "Jadwal RUPS minggu depan"
- "IPO yang akan datang"
- "Right issue BBCA"
```

#### `news`

Berita terkait saham.

```
Contoh:
- "Berita terbaru BBCA"
- "News sentiment TLKM"
- "Kabar terkini GOTO"
- "Analisis sentimen berita ASII"
```

---

### G. Screener

#### `screener`

Filter saham dengan formula custom.

| Parameter | Deskripsi         |
| --------- | ----------------- |
| `formula` | Formula screening |

```
Contoh:
- "Screening: close > sma('close', 20) && volume > 1000000"
- "Filter: rsi(14) < 30 && foreign_flow > 0"
- "Cari: per < 10 && pbv < 1 && roe > 15"
- "Screen: change_pct > 5 && bdm_flow > 0"
```

---

## 📝 Template Prompt

### 1️⃣ Analisis Komprehensif

```
Analisis lengkap [KODE] periode [FROM] - [TO]:

1. Profil perusahaan → information
2. Chart + indikator BDM → chart, chart-indicator
3. Broker summary 7 hari → summary-stock
4. Inventory top 5 broker → inventory-stock
5. Kepemilikan KSEI 6 bulan → shareholder-ksei
6. Keystat quarterly → keystat
7. Berita terbaru → news

Output yang diharapkan:
- Rating: [Bullish/Netral/Bearish]
- Support/Resistance levels
- Broker dominan akumulasi/distribusi
- Risk factors
- Rekomendasi: Buy/Hold/Sell
```

### 2️⃣ Bandarmologi

```
Analisis bandarmologi [KODE] tanggal [DATE]:

1. Broker summary → summary-stock
2. Momentum chart → momentum
3. Intraday inventory → intraday-inventory
4. Sankey flow → sankey

Output:
- Broker yang akumulasi vs distribusi
- Net buy/sell value
- Prediksi pergerakan 1-3 hari
```

### 3️⃣ Fundamental

```
Analisis fundamental [KODE]:

1. Income Statement 5Q → financial(statement=IS)
2. Balance Sheet 5Q → financial(statement=BS)
3. Cash Flow 5Q → financial(statement=CF)
4. Key Statistics → keystat
5. Shareholder → shareholder-detail

Output:
- Kesehatan finansial
- Growth trend
- Valuasi (murah/wajar/mahal)
- Fair value estimate
```

### 4️⃣ Screening

```
Screening dengan kriteria:
→ screener: [FORMULA]

Contoh formula:
- Uptrend: close > sma("close", 20) && volume > sma("volume", 20)
- Oversold: rsi(14) < 30 && foreign_flow > 0
- Value: per < 10 && pbv < 1 && roe > 15
```

### 5️⃣ Pre-Market

```
Persiapan trading [DATE]:

1. Top gainers kemarin → top-change
2. Top foreign → top-foreign
3. Calendar → calendar

Watchlist [KODE_1, KODE_2]:
- Order book → order-book
- Broker summary → summary-stock
- News → news

Output: Trading plan (Entry/SL/TP)
```

---

## 🔍 Contoh Kasus

### Kasus 1: Swing Trade

```
Swing trading BBCA horizon 1-2 minggu:
1. Chart 2 bulan dengan indikator BDM
2. Broker summary 5 hari
3. Inventory chart top 5

Strategi: Entry, SL, TP, R:R ratio
```

### Kasus 2: Smart Money Tracking

```
Tracking smart money [DATE]:
1. top-foreign → 3 saham teratas
2. Per saham: summary-stock, sankey, momentum
3. Cross-check: top-accumulation

Insight: Saham akumulasi + konfirmasi asing
```

### Kasus 3: Insider Activity

```
Monitor insider 30 hari:
1. insider (limit=20, filter transaksi beli)
2. Per saham: information, chart, calendar

Signal: Insider buying = bullish?
```

### Kasus 4: Dividend Investing

```
Evaluasi saham dividen:
- TLKM, BBRI, ASII, HMSP

Per saham:
1. keystat (dividend yield, payout ratio)
2. financial(IS) → profit trend
3. shareholder-ksei → institutional ownership

Ranking berdasarkan yield + konsistensi
```

---

## 📊 Screener Variables

### Harga Realtime

| Variable     | Deskripsi               |
| ------------ | ----------------------- |
| `close`      | Harga terakhir          |
| `open`       | Harga pembukaan         |
| `high`       | Harga tertinggi         |
| `low`        | Harga terendah          |
| `prev`       | Harga penutupan kemarin |
| `avg`        | Harga rata-rata         |
| `volume`     | Volume (lot)            |
| `value`      | Nilai transaksi (Rp)    |
| `freq`       | Frekuensi transaksi     |
| `change`     | Perubahan harga (Rp)    |
| `change_pct` | Perubahan harga (%)     |

### Data Kemarin

| Variable      | Deskripsi      |
| ------------- | -------------- |
| `prev_open`   | Open kemarin   |
| `prev_high`   | High kemarin   |
| `prev_low`    | Low kemarin    |
| `prev_close`  | Close kemarin  |
| `prev_volume` | Volume kemarin |
| `prev_value`  | Value kemarin  |

### Order Book

| Variable/Fungsi       | Deskripsi                   |
| --------------------- | --------------------------- |
| `best_bid_price`      | Harga bid terbaik           |
| `best_bid_volume`     | Volume bid terbaik          |
| `best_offer_price`    | Harga offer terbaik         |
| `best_offer_volume`   | Volume offer terbaik        |
| `bid_volume(n)`       | Volume bid level ke-n       |
| `offer_volume(n)`     | Volume offer level ke-n     |
| `bid_freq(n)`         | Frekuensi bid level ke-n    |
| `offer_freq(n)`       | Frekuensi offer level ke-n  |
| `sum_bid_volume(n)`   | Total bid n level teratas   |
| `sum_offer_volume(n)` | Total offer n level teratas |
| `all_bid_volume`      | Total semua bid             |
| `all_offer_volume`    | Total semua offer           |

### Flow Data

| Variable        | Deskripsi                |
| --------------- | ------------------------ |
| `foreign_flow`  | Net foreign hari ini     |
| `bdm_flow`      | Net bandar hari ini      |
| `ritel_flow`    | Net ritel hari ini       |
| `bdm`           | Posisi akumulasi bandar  |
| `ritel`         | Posisi akumulasi ritel   |
| `foreign`       | Posisi akumulasi foreign |
| `ratio`         | Rasio bandar/ritel       |
| `freq_analyzer` | Volume / freq³           |

### Pivot & Fibonacci

| Variable           | Deskripsi                   |
| ------------------ | --------------------------- |
| `pivot_point`      | Pivot utama                 |
| `support_1/2/3`    | Level support S1, S2, S3    |
| `resistance_1/2/3` | Level resistance R1, R2, R3 |
| `fib_23_6_20d`     | Fib 23.6% (20 hari)         |
| `fib_38_2_20d`     | Fib 38.2% (20 hari)         |
| `fib_50_0_20d`     | Fib 50.0% (20 hari)         |
| `fib_61_8_20d`     | Fib 61.8% (20 hari)         |
| `fib_78_6_20d`     | Fib 78.6% (20 hari)         |
| `fib_*_50d`        | Fibonacci 50 hari           |

### Shareholder

| Variable                 | Deskripsi              |
| ------------------------ | ---------------------- |
| `shareholder`            | Jumlah pemegang saham  |
| `change_1m_shareholder`  | Perubahan 1 bulan (%)  |
| `change_3m_shareholder`  | Perubahan 3 bulan (%)  |
| `change_6m_shareholder`  | Perubahan 6 bulan (%)  |
| `change_12m_shareholder` | Perubahan 12 bulan (%) |

### KSEI

| Variable               | Deskripsi                            |
| ---------------------- | ------------------------------------ |
| `free_float`           | Saham free float                     |
| `free_float_pct`       | Persentase free float                |
| `local_is`             | Lokal - Asuransi                     |
| `local_cp`             | Lokal - Korporasi                    |
| `local_pf`             | Lokal - Dana Pensiun                 |
| `local_ib`             | Lokal - Investment Bank              |
| `local_id`             | Lokal - Individual                   |
| `local_mf`             | Lokal - Reksa Dana                   |
| `local_sc`             | Lokal - Sekuritas                    |
| `foreign_*`            | Same categories for foreign          |
| `change_Xm_local_id`   | Perubahan lokal individual X bulan   |
| `change_Xm_foreign_id` | Perubahan foreign individual X bulan |
| `change_Xm_local_mf`   | Perubahan reksa dana lokal X bulan   |

### Fundamental

| Variable      | Deskripsi                          |
| ------------- | ---------------------------------- |
| `per`         | Price to Earnings Ratio            |
| `pbv`         | Price to Book Value                |
| `roe`         | Return on Equity (%)               |
| `roa`         | Return on Assets (%)               |
| `eps`         | Earnings Per Share                 |
| `debt_equity` | Debt to Equity Ratio               |
| `revenue`     | Pendapatan                         |
| `netprofit`   | Laba Bersih                        |
| `ebitda`      | EBITDA                             |
| `ev_ebitda`   | EV/EBITDA                          |
| `shares`      | Saham beredar                      |
| `market_cap`  | Kapitalisasi pasar                 |
| `*_anl`       | Annualized (per_anl, roe_anl, dll) |
| `prev_*`      | Periode sebelumnya                 |

### Technical Functions

| Fungsi                      | Deskripsi                 | Contoh                       |
| --------------------------- | ------------------------- | ---------------------------- |
| `sma("f", n)`               | Simple Moving Average     | `sma("close", 20)`           |
| `ema("f", n)`               | Exponential MA            | `ema("close", 12)`           |
| `wma("f", n)`               | Weighted MA               | `wma("close", 20)`           |
| `rsi(n)`                    | Relative Strength Index   | `rsi(14)`                    |
| `macd(fast, slow)`          | MACD Line                 | `macd(12, 26)`               |
| `macd_signal(f, s, sig)`    | MACD Signal               | `macd_signal(12, 26, 9)`     |
| `macd_histogram(f, s, sig)` | MACD Histogram            | `macd_histogram(12, 26, 9)`  |
| `bollinger_top(p, m)`       | BB Upper                  | `bollinger_top(20, 2)`       |
| `bollinger_bottom(p, m)`    | BB Lower                  | `bollinger_bottom(20, 2)`    |
| `bollinger_bandwidth(p, m)` | BB Width                  | `bollinger_bandwidth(20, 2)` |
| `bollinger_percent_b(p, m)` | BB %B                     | `bollinger_percent_b(20, 2)` |
| `atr(n)`                    | Average True Range        | `atr(14)`                    |
| `adx(n)`                    | Average Directional Index | `adx(14)`                    |
| `pdx(n)`                    | Plus DI (+DI)             | `pdx(14)`                    |
| `ndx(n)`                    | Minus DI (-DI)            | `ndx(14)`                    |
| `stoch_k(l, k)`             | Stochastic %K             | `stoch_k(14, 3)`             |
| `stoch_d(l, k, d)`          | Stochastic %D             | `stoch_d(14, 3, 3)`          |
| `cci(n)`                    | Commodity Channel Index   | `cci(20)`                    |
| `mfi(n)`                    | Money Flow Index          | `mfi(14)`                    |
| `cmf(n)`                    | Chaikin Money Flow        | `cmf(20)`                    |
| `obv()`                     | On Balance Volume         | `obv()`                      |
| `roc(n)`                    | Rate of Change            | `roc(10)`                    |
| `vwap(n)`                   | VWAP                      | `vwap(20)`                   |
| `hhv("f", n)`               | Highest High Value        | `hhv("high", 20)`            |
| `llv("f", n)`               | Lowest Low Value          | `llv("low", 20)`             |
| `sum("f", n)`               | Sum                       | `sum("volume", 20)`          |
| `change("f", n)`            | Change n days             | `change("close", 7)`         |
| `change_pct("f", n)`        | Change % n days           | `change_pct("close", 30)`    |

**Field yang didukung:** `open`, `high`, `low`, `close`, `volume`, `value`, `foreign`, `freq`, `bdm`, `ritel`, `ratio`

### Ichimoku

| Fungsi                    | Deskripsi                   |
| ------------------------- | --------------------------- |
| `ichimoku_tenkan(n)`      | Tenkan-sen (default: 9)     |
| `ichimoku_kijun(n)`       | Kijun-sen (default: 26)     |
| `ichimoku_senkou_a(t, k)` | Senkou Span A               |
| `ichimoku_senkou_b(n)`    | Senkou Span B (default: 52) |
| `ichimoku_chikou()`       | Chikou Span                 |

### Stochastic RSI

| Fungsi                         | Deskripsi        |
| ------------------------------ | ---------------- |
| `stochrsi(n)`                  | Stoch RSI simple |
| `stochrsi_k(rsi, stoch, k)`    | Stoch RSI %K     |
| `stochrsi_d(rsi, stoch, k, d)` | Stoch RSI %D     |

### Math Functions

| Fungsi         | Deskripsi         |
| -------------- | ----------------- |
| `abs(x)`       | Nilai absolut     |
| `sqrt(x)`      | Akar kuadrat      |
| `log(x, base)` | Logaritma         |
| `ln(x)`        | Natural log       |
| `pow(x, n)`    | Pangkat           |
| `min(a, b)`    | Minimum           |
| `max(a, b)`    | Maximum           |
| `floor(x)`     | Bulatkan bawah    |
| `ceil(x)`      | Bulatkan atas     |
| `round(x)`     | Bulatkan terdekat |

### Operator

| Kategori     | Operator                                    |
| ------------ | ------------------------------------------- |
| Perbandingan | `>`, `<`, `>=`, `<=`, `==`, `!=`            |
| Logika       | `&&` (AND), `\|\|` (OR), `!` (NOT)          |
| Alias        | `DAN`/`AND`, `ATAU`/`OR`, `TIDAK()`/`NOT()` |
| Aritmatika   | `+`, `-`, `*`, `/`                          |
| Grouping     | `()`                                        |

---

## ⚡ Formula Screener

### Teknikal

```bash
# Uptrend + Volume
close > sma("close", 20) && volume > sma("volume", 20) * 1.5

# Golden Cross
sma("close", 50) > sma("close", 200)

# Death Cross
sma("close", 50) < sma("close", 200)

# RSI Oversold
rsi(14) < 30

# RSI Overbought
rsi(14) > 70

# RSI Bounce
rsi(14) > 30 && rsi(14) < 40

# MACD Bullish
macd(12, 26) > macd_signal(12, 26, 9)

# MACD Bearish
macd(12, 26) < macd_signal(12, 26, 9)

# Bollinger Squeeze
bollinger_bandwidth(20, 2) < 5

# Bollinger Lower Touch
close < bollinger_bottom(20, 2)

# ADX Strong Trend Bullish
adx(14) > 25 && pdx(14) > ndx(14)

# Stochastic Oversold
stoch_k(14, 3) < 20 && stoch_d(14, 3, 3) < 20

# Breakout 20-day High
close >= hhv("high", 20)

# Breakout 52-week High
close >= hhv("close", 252)

# New Low
close <= llv("low", 20)

# Above VWAP
close > vwap(20)
```

### Bandarmologi

```bash
# Foreign Buy
foreign_flow > 0

# Foreign Sell
foreign_flow < 0

# Akumulasi Bandar
bdm_flow > 0

# Distribusi Bandar
bdm_flow < 0

# Ritel Keluar Bandar Masuk
ritel_flow < 0 && bdm_flow > 0

# Foreign + Bandar Sinergi
foreign_flow > 0 && bdm_flow > 0

# Bid Dominan
sum_bid_volume(5) > sum_offer_volume(5) * 1.5

# Order Book Imbalance
bid_volume(1) > offer_volume(1) * 2

# Akumulasi Kuat
bdm > 0 && change("bdm", 5) > 0

# Foreign Konsisten
change("foreign", 5) > 0 && change("foreign", 10) > 0
```

### Fundamental

```bash
# Value Stock
per < 10 && pbv < 1 && roe > 15

# Growth Stock
change_pct("close", 30) > 20 && eps > prev_eps

# Dividend Candidate
per < 15 && debt_equity < 1 && roe > 12

# Undervalued
per < per_anl && pbv < pbv_anl

# Quality Stock
roe > 20 && debt_equity < 0.5 && roa > 10

# Blue Chip
market_cap > 10000000000000 && volume > 500000

# Small Cap Opportunity
market_cap < 1000000000000 && per < 10 && roe > 15
```

### Kombinasi

```bash
# Breakout + Foreign + Fundamental
close > hhv("high", 20) && foreign_flow > 0 && per < 20 && roe > 10

# Technical + Bandarmologi
rsi(14) > 50 && close > sma("close", 20) && bdm_flow > 0

# Support Bounce
close > fib_61_8_20d && close < fib_50_0_20d && volume > sma("volume", 20)

# Momentum Play
change_pct > 5 && volume > sma("volume", 20) * 2 && foreign_flow > 0

# Hidden Gem
per < 10 && pbv < 1 && change_1m_shareholder > 10 && volume > 100000

# Institutional Accumulation
local_mf > 5 && foreign_mf > 3 && change_pct("close", 30) > 0

# Multi-timeframe Alignment
close > sma("close", 20) && sma("close", 20) > sma("close", 50) && sma("close", 50) > sma("close", 200)
```

---

## 🎯 Quick Reference

```
┌──────────────────────────────────────────────────────────────┐
│                   INVEZGO MCP CHEATSHEET                     │
├──────────────────────────────────────────────────────────────┤
│ PROFIL      : information, search-stock, list-stock         │
│ CHART       : chart, chart-indicator, intraday              │
│ BROKER      : summary-stock, inventory-stock, sankey        │
│ MOMENTUM    : momentum, intraday-inventory                  │
│ OWNERSHIP   : shareholder, shareholder-ksei, insider        │
│ FUNDAMENTAL : financial, keystat                            │
│ MARKET      : top-change, top-foreign, top-accumulation     │
│ CALENDAR    : calendar, news                                │
│ SCREENER    : screener                                      │
├──────────────────────────────────────────────────────────────┤
│ DATE FORMAT : YYYY-MM-DD                                    │
│ INVESTOR    : all | f (foreign) | d (domestic)              │
│ MARKET      : RG | NG | TN | ALL                            │
│ SCOPE       : vol | val | freq                              │
│ STATEMENT   : BS | IS | CF | EQ                             │
│ PERIOD      : Q | FY | Q1 | Q2 | Q3 | Q4                    │
│ INDICATOR   : bdm | ritel | ratio | foreign | volume        │
├──────────────────────────────────────────────────────────────┤
│ KEY TA      : sma, ema, rsi, macd, bollinger, adx, stoch    │
│ KEY FLOW    : foreign_flow, bdm_flow, ritel_flow            │
│ KEY FUND    : per, pbv, roe, roa, eps, debt_equity          │
└──────────────────────────────────────────────────────────────┘
```

---

_Referensi lengkap variables: [FORMULA_VARIABLES.md](./FORMULA_VARIABLES.md)_  
_© 2025 Invezgo_
