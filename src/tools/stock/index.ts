import {
  codeOnlySchema,
  codeNameOptionalSchema,
  dateOnlySchema,
  codeFromToSchema,
  codeRangeSchema,
  summarySchema,
  inventorySchema,
  momentumSchema,
  intradayInventorySchema,
  sankeySchema,
  insiderSchema,
  aboveFivePercentSchema,
  priceSeasonalSchema,
  financialSchema,
  keystatSchema,
  codeIndicatorSchema,
  intradayChartSchema,
  screenSchema,
  summarySchemaBroker,
  inventorySchemaBroker,
  calendarSchema,
  indexChartSchema,
  multiTimeChartSchema,
  intradayDataSchema,
  shareholderDetailOneSchema,
  shareholderRelationSchema,
  shareholderClassificationSchema,
  shareholderClassifyTableSchema,
  shareholderHighSchema,
  sectorStalkerSchema,
  intradayIndexSchema,
  sectorRotationSchema,
  brokerStalkerSchema,
  brokerStalkerListSchema,
  priceTableSchema,
  timeTableSchema,
  orderQueueSchema,
} from "@/schema/stock";
import { server } from "@/server";
import {
  information,
  listStock,
  listBroker,
  topChange,
  topForeign,
  topAccumulation,
  chart,
  chartIndicator,
  shareholder,
  shareholderDetail,
  shareholderNumber,
  summaryStock,
  summaryBroker,
  shareholderKSEI,
  inventoryStock,
  inventoryBroker,
  momentum,
  intradayInventory,
  sankey,
  insider,
  aboveFivePercent,
  priceDiary,
  priceSeasonal,
  searchStock,
  newsStock,
  disclosureStock,
  financialStock,
  keystatStock,
  intradayChart,
  orderBook,
  screen,
  calendar,
  listIndex,
  indexChart,
  multiTimeChart,
  sectorStalker,
  intradayIndex,
  sectorRotation,
  brokerStalker,
  brokerStalkerList,
  priceTable,
  timeTable,
  shareholderOneDetail,
  aboveOnePercent,
  intradayData,
  shareholderClassification,
  shareholderClassifyTable,
  shareholderHigh,
  shareholderRelation,
  shareholderDetailOne,
  orderQueue,
} from "./handler";

export const registerStockTools = (): void => {
  server.addTool({
    name: "information",
    description:
      "Informasi perusahaan sesuai kode emiten (code). Jenis data: Cross Section. Update sesuai laporan masing-masing perusahaan setiap bulan",
    parameters: codeOnlySchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Informasi perusahaan",
    },
    execute: async (args, context) => await information(args, context),
  });

  server.addTool({
    name: "list-stock",
    description:
      "Daftar perusahaan tercatat di Bursa Efek Indonesia. Tidak termasuk perusahaan yang telah delisting dari Bursa Efek Indonesia. Update Realtime dan mengikuti perkembangan perusahaan IPO.",
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Daftar perusahaan tercatat di Bursa Efek Indonesia",
    },
    execute: async (args, context) => await listStock(context),
  });

  server.addTool({
    name: "list-broker",
    description:
      "Daftar sekuritas atau broker tercatat di Bursa Efek Indonesia. Update Realtime dan mengikuti perkembangan MKBD broker.",
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Daftar broker atau sekuritas tercatat di Bursa Efek Indonesia",
    },
    execute: async (args, context) => await listBroker(context),
  });

  server.addTool({
    name: "top-change",
    description:
      "Daftar perusahaan yang mengalami perubahan harga terbesar pada tanggal tertentu. Update Realtime dan mengikuti perkembangan perusahaan IPO.",
    parameters: dateOnlySchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Daftar teratas harian berdasarkan perubahan harga",
    },
    execute: async (args, context) => await topChange(args, context),
  });

  server.addTool({
    name: "top-foreign",
    description:
      "Daftar akumulasi dan distribusi pergerakan asing saham teratas pada tanggal (date) tertentu. Jenis data: Cross Section. Update EOD setiap hari.",
    parameters: dateOnlySchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Daftar teratas harian berdasarkan transaksi asing",
    },
    execute: async (args, context) => await topForeign(args, context),
  });

  server.addTool({
    name: "top-accumulation",
    description:
      "Daftar akumulasi dan distribusi pergerakan asing saham teratas pada tanggal (date) tertentu. Jenis data: Cross Section. Update EOD setiap hari.",
    parameters: dateOnlySchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Daftar teratas harian berdasarkan akumulasi dan distribusi",
    },
    execute: async (args, context) => await topAccumulation(args, context),
  });

  server.addTool({
    name: "chart",
    description:
      "Grafik harga saham perusahaan dengan rentang tanggal tertentu. Jenis data: Time Series. Update Realtime dan mengikuti perkembangan perusahaan IPO.",
    parameters: codeFromToSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Chart Saham",
    },
    execute: async (args, context) => await chart(args, context),
  });

  server.addTool({
    name: "chart-indicator",
    description:
      "Grafik indikator saham perusahaan dengan rentang tanggal tertentu. Jenis data: Time Series. Update Realtime dan mengikuti perkembangan perusahaan IPO.",
    parameters: codeIndicatorSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Chart Indikator Saham",
    },
    execute: async (args, context) => await chartIndicator(args, context),
  });

  server.addTool({
    name: "shareholder-number",
    description:
      "Data jumlah investor pada saham sesuai kode emiten (code). Jenis data: Cross Section / Time Series. Update sesuai laporan masing-masing perusahaan setiap bulan",
    parameters: codeFromToSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Jumlah Pemegang Saham",
    },
    execute: async (args, context) => await shareholderNumber(args, context),
  });

  server.addTool({
    name: "shareholder",
    description:
      "Data komposisi kepemilikan saham sesuai kode emiten (code). Jenis data: Cross Section berdasarkan data terbaru. Update sesuai laporan masing-masing perusahaan setiap bulan",
    parameters: codeOnlySchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Komposisi Pemegang Saham",
    },
    execute: async (args, context) => await shareholder(args, context),
  });

  server.addTool({
    name: "shareholder-detail",
    description:
      "Data komposisi kepemilikan saham sesuai kode emiten (code). Jenis data: Cross Section berdasarkan data terbaru. Update sesuai laporan masing-masing perusahaan setiap bulan",
    parameters: codeOnlySchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Komposisi Pemegang Saham Detail",
    },
    execute: async (args, context) => await shareholderDetail(args, context),
  });

  server.addTool({
    name: "shareholder-one-detail",
    description:
      "Data komposisi kepemilikan saham sesuai kode emiten (code). Jenis data: Cross Section berdasarkan data terbaru. Update sesuai laporan masing-masing perusahaan setiap bulan",
    parameters: codeNameOptionalSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Komposisi Pemegang Saham Detail",
    },
    execute: async (args, context) => await shareholderOneDetail(args, context),
  });

  server.addTool({
    name: "shareholder-ksei",
    description:
      "Data komposisi kepemilikan investor asing dan domestik dalam beberapa grup pada saham berdasarkan data KSEI sesuai kode emiten (code) dan jumlah bulan (range). Jenis data: Cross Section / Time Series. Update tanggal 02 setiap bulan.",
    parameters: codeRangeSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Komposisi Pemegang Saham Berdasarkan KSEI",
    },
    execute: async (args, context) => await shareholderKSEI(args, context),
  });

  server.addTool({
    name: "summary-stock",
    description:
      "Data broker summary sesuai dengan kode emiten (code) dan tanggal awal (from) dan akhir (to). Jenis data: Cross Section / Time Series. Update EOD setiap 17.30 WIB",
    parameters: summarySchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Broker Summary Saham",
    },
    execute: async (args, context) => await summaryStock(args, context),
  });

  server.addTool({
    name: "summary-broker",
    description:
      "Data broker summary sesuai dengan kode broker (code) dan tanggal awal (from) dan akhir (to). Jenis data: Cross Section / Time Series. Update EOD setiap 17.30 WIB",
    parameters: summarySchemaBroker,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Broker Summary Broker",
    },
    execute: async (args, context) => await summaryBroker(args, context),
  });

  server.addTool({
    name: "inventory-stock",
    description:
      "Visualisasi inventory atau transaksi data broker summary sesuai dengan kode emiten (code) dan tanggal awal (from) dan akhir (to). Jenis data: Time Series. Update EOD setiap 18.00 WIB",
    parameters: inventorySchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Visualisasi Transaksi Saham",
    },
    execute: async (args, context) => await inventoryStock(args, context),
  });

  server.addTool({
    name: "inventory-broker",
    description:
      "Visualisasi inventory atau transaksi data broker summary sesuai dengan kode broker (code) dan tanggal awal (from) dan akhir (to). Jenis data: Time Series. Update EOD setiap 18.00 WIB",
    parameters: inventorySchemaBroker,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Visualisasi Transaksi Broker",
    },
    execute: async (args, context) => await inventoryBroker(args, context),
  });

  server.addTool({
    name: "momentum",
    description:
      "Grafik momentum saham sesuai dengan kode emiten (code) dan tanggal (date) dan range (range). Jenis data: Time Series. Update EOD setiap 18.00 WIB",
    parameters: momentumSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Visualisasi Momentum Jual dan Beli Saham",
    },
    execute: async (args, context) => await momentum(args, context),
  });

  server.addTool({
    name: "intraday-inventory",
    description:
      "Grafik inventory atau transaksi data broker summary sesuai dengan kode emiten (code) dan tanggal awal (from) dan akhir (to). Jenis data: Time Series. Update EOD setiap 18.00 WIB",
    parameters: intradayInventorySchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Visualisasi Transaksi Saham Harian",
    },
    execute: async (args, context) => await intradayInventory(args, context),
  });

  server.addTool({
    name: "sankey",
    description:
      "Grafik sankey atau transaksi data broker summary sesuai dengan kode emiten (code) dan tanggal awal (from) dan akhir (to). Jenis data: Time Series. Update EOD setiap 18.00 WIB",
    parameters: sankeySchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Visualisasi Transaksi Perpindahan Saham",
    },
    execute: async (args, context) => await sankey(args, context),
  });

  server.addTool({
    name: "insider",
    description:
      "Data pemegang saham atau insider sesuai dengan kode emiten (code) dan tanggal awal (from) dan akhir (to). Jenis data: Cross Section. Update EOD setiap 18.00 WIB",
    parameters: insiderSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Transaksi Orang Dalam",
    },
    execute: async (args, context) => await insider(args, context),
  });

  server.addTool({
    name: "above-five-percent",
    description:
      "Data pemegang saham atau insider sesuai dengan kode emiten (code) dan tanggal awal (from) dan akhir (to). Jenis data: Cross Section. Update EOD setiap 18.00 WIB",
    parameters: aboveFivePercentSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Kepemilikan Diatas 5% dari Total Saham",
    },
    execute: async (args, context) => await aboveFivePercent(args, context),
  });

  server.addTool({
    name: "above-one-percent",
    description:
      "Data pemegang saham atau insider sesuai dengan kode emiten (code) dan tanggal awal (from) dan akhir (to). Jenis data: Cross Section. Update EOD setiap 18.00 WIB",
    parameters: aboveFivePercentSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Kepemilikan Diatas 1% dari Total Saham",
    },
    execute: async (args, context) => await aboveOnePercent(args, context),
  });

  server.addTool({
    name: "price-diary",
    description:
      "Tabel perubahan harga saham harian dengan kode emiten (code). Jenis data: Time Series. Update Realtime",
    parameters: codeOnlySchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Perubahan Harga Saham Harian Dalam 1 Bulan Tertentu",
    },
    execute: async (args, context) => await priceDiary(args, context),
  });

  server.addTool({
    name: "price-seasonal",
    description:
      "Tabel perubahan harga saham bulanan dengan kode emiten (code). Jenis data: Time Series. Update Realtime",
    parameters: priceSeasonalSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Perubahan Harga Saham Bulanan Dalam Beberapa Tahun",
    },
    execute: async (args, context) => await priceSeasonal(args, context),
  });

  server.addTool({
    name: "search-stock",
    description:
      "Cari perusahaan berdasarkan kata kunci (query). Mendukung pencarian dengan kata kunci (query). Query dapat berupa nama perusahaan, kode emiten, industri, atau kategori.",
    parameters: codeOnlySchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Cari Saham Berdasarkan Kata Kunci",
    },
    execute: async (args, context) => await searchStock(args, context),
  });

  server.addTool({
    name: "news",
    description:
      "Cari berita terkait saham berdasarkan kode emiten (code). Maksimal 20 berita terkait saham berdasarkan kode emiten (code). Dapat digunakan untuk Analisa Sentimen.",
    parameters: codeOnlySchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Berita Saham",
    },
    execute: async (args, context) => await newsStock(args, context),
  });

  server.addTool({
    name: "disclosure",
    description:
      "Cari keterbukaan informasi (disclosure) terkait saham berdasarkan kode emiten (code). Maksimal 20 keterbukaan informasi terkait saham berdasarkan kode emiten (code). Dapat digunakan untuk Analisa Sentimen.",
    parameters: codeOnlySchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Keterbukaan Informasi Saham",
    },
    execute: async (args, context) => await disclosureStock(args, context),
  });

  server.addTool({
    name: "financial",
    description:
      "Data laporan keuangan saham sesuai dengan kode emiten (code) dan jenis statement (statement) dan jenis tanggal periode (type) dan jumlah data (limit). Jenis data: Panel. Update tergantung laporan dari emiten",
    parameters: financialSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Laporan Keuangan Saham",
    },
    execute: async (args, context) => await financialStock(args, context),
  });

  server.addTool({
    name: "keystat",
    description:
      "Data laporan keuangan saham sesuai dengan kode emiten (code) dan jenis tanggal periode (type) dan jumlah data (limit). Jenis data: Panel. Update tergantung laporan dari emiten",
    parameters: keystatSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Laporan Keuangan Saham",
    },
    execute: async (args, context) => await keystatStock(args, context),
  });

  server.addTool({
    name: "intraday",
    description:
      "Grafik intraday saham sesuai dengan kode emiten (code) dan jenis pasar (market). Jenis data: Time Series. Update Realtime",
    parameters: intradayChartSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Grafik Intraday Saham",
    },
    execute: async (args, context) => await intradayChart(args, context),
  });

  server.addTool({
    name: "order-book",
    description:
      "Data order book atau harga saham sesuai dengan kode emiten (code). Jenis data: Cross Section. Update Realtime",
    parameters: intradayChartSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Order Book Harga Saham",
    },
    execute: async (args, context) => await orderBook(args, context),
  });

  server.addTool({
    name: "calendar",
    description:
      "Data calendar atau harga saham sesuai dengan kode emiten (code) dan tanggal (date) dan jenis corporate action (type). Jenis data: Cross Section. Update Realtime",
    parameters: calendarSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Calendar Saham",
    },
    execute: async (args, context) => await calendar(args, context),
  });

  server.addTool({
    name: "screener",
    description:
      "Data screener atau harga saham sesuai dengan kode emiten (code). Jenis data: Cross Section. Update Realtime",
    parameters: screenSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Screener Saham",
    },
    execute: async (args, context) => await screen(args, context),
  });

  server.addTool({
    name: "list-index",
    description:
      "Daftar lengkap index yang tersedia di Bursa Efek Indonesia (BEI) termasuk COMPOSITE/IHSG, LQ45, IDX30, sektoral, syariah, dan lainnya. Update Realtime.",
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Daftar Index BEI",
    },
    execute: async (args, context) => await listIndex(context),
  });

  server.addTool({
    name: "index-chart",
    description:
      "Grafik harga index BEI dengan rentang tanggal tertentu. Mendukung COMPOSITE, LQ45, IDX30, dan index lainnya. Jenis data: Time Series. Update Realtime.",
    parameters: indexChartSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Chart Index BEI",
    },
    execute: async (args, context) => await indexChart(args, context),
  });

  server.addTool({
    name: "multi-time-chart",
    description:
      "Grafik multi-timeframe untuk saham atau index berdasarkan rentang tanggal dan timeframe.",
    parameters: multiTimeChartSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Multi Timeframe Chart",
    },
    execute: async (args, context) => await multiTimeChart(args, context),
  });

  server.addTool({
    name: "shareholder-detail-one-spec",
    description:
      "Data kepemilikan saham >1% berdasarkan kode saham atau nama pemegang saham.",
    parameters: shareholderDetailOneSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Stock Shareholder 1%",
    },
    execute: async (args, context) => await shareholderDetailOne(args, context),
  });

  server.addTool({
    name: "shareholder-relation",
    description:
      "Graf relasi pemegang saham berdasarkan code/name dengan parameter graph opsional.",
    parameters: shareholderRelationSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Shareholder Relation",
    },
    execute: async (args, context) => await shareholderRelation(args, context),
  });

  server.addTool({
    name: "shareholder-classification",
    description:
      "Data lengkap klasifikasi pemegang saham berdasarkan kode saham dan range bulan.",
    parameters: shareholderClassificationSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Stock Shareholder Full Classification",
    },
    execute: async (args, context) =>
      await shareholderClassification(args, context),
  });

  server.addTool({
    name: "shareholder-classify-table",
    description:
      "Tabel klasifikasi pemegang saham terbaru berdasarkan kode saham.",
    parameters: codeOnlySchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Stock Shareholder Classification Table",
    },
    execute: async (args, context) =>
      await shareholderClassifyTable(args, context),
  });

  server.addTool({
    name: "sector-stalker",
    description:
      "Analisis pergerakan harga index sektoral atau saham dalam rentang waktu tertentu. Mendukung perbandingan performa antar sektor. Jenis data: Time Series. Update setiap hari bursa.",
    parameters: sectorStalkerSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Analisis Pergerakan Sektor",
    },
    execute: async (args, context) => await sectorStalker(args, context),
  });

  server.addTool({
    name: "intraday-index",
    description:
      "Data harga intraday real-time untuk index BEI seperti COMPOSITE/IHSG, LQ45, IDX30. Jenis data: Time Series. Update Realtime.",
    parameters: intradayIndexSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Intraday Index BEI",
    },
    execute: async (args, context) => await intradayIndex(args, context),
  });

  server.addTool({
    name: "sector-rotation",
    description:
      "Analisis rotasi sektor dalam rentang waktu tertentu. Menampilkan pergerakan dan perbandingan antar sektor. Jenis data: Time Series.",
    parameters: sectorRotationSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Rotasi Sektor",
    },
    execute: async (args, context) => await sectorRotation(args, context),
  });

  server.addTool({
    name: "broker-stalker",
    description:
      "Analisis aktivitas broker tertentu pada saham specific. Menampilkan data transaksi broker untuk saham tersebut.",
    parameters: brokerStalkerSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Analisis Broker Spesifik",
    },
    execute: async (args, context) => await brokerStalker(args, context),
  });

  server.addTool({
    name: "broker-stalker-list",
    description:
      "Daftar broker yang melakukan transaksi pada saham tertentu. Menampilkan semua broker yang aktif pada saham.",
    parameters: brokerStalkerListSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Daftar Broker Aktif",
    },
    execute: async (args, context) => await brokerStalkerList(args, context),
  });

  server.addTool({
    name: "price-table",
    description:
      "Tabel distribusi harga saham. Menampilkan data transaksi berdasarkan level harga.",
    parameters: priceTableSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Tabel Distribusi Harga",
    },
    execute: async (args, context) => await priceTable(args, context),
  });

  server.addTool({
    name: "time-table",
    description:
      "Tabel distribusi waktu transaksi saham. Menampilkan data transaksi berdasarkan waktu.",
    parameters: timeTableSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Tabel Distribusi Waktu",
    },
    execute: async (args, context) => await timeTable(args, context),
  });

  server.addTool({
    name: "intraday-data",
    description:
      "Data intraday saham ringkas berdasarkan kode emiten, market, dan optional tanggal historis.",
    parameters: intradayDataSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Data Intraday Saham Ringkas",
    },
    execute: async (args, context) => await intradayData(args, context),
  });

  server.addTool({
    name: "shareholder-high",
    description:
      "Data konsentrasi kepemilikan saham tinggi untuk semua emiten.",
    parameters: shareholderHighSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Konsentrasi Kepemilikan Tinggi",
    },
    execute: async (args, context) => await shareholderHigh(args, context),
  });

  server.addTool({
    name: "order-queue",
    description:
      "Mendapatkan antrian order (order tracking) untuk saham pada harga, sisi, halaman, dan limit tertentu.",
    parameters: orderQueueSchema,
    annotations: {
      openWorldHint: true,
      readOnlyHint: true,
      idempotentHint: true,
      title: "Antrian Order Saham (Order Queue Tracking)",
    },
    execute: async (args, context) => await orderQueue(args, context),
  });
};
