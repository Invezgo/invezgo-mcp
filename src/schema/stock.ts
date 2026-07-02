import { z } from "zod";

export const codeOnlySchema = z.object({
  code: z
    .string()
    .default("BBCA")
    .describe("Kode emiten berdasarkan data dari /list/stock (Cth : BBCA)"),
});

export const codeNameOptionalSchema = z.object({
  code: z
    .string()
    .describe("Kode emiten berdasarkan data dari /list/stock (Cth : BBCA)")
    .optional(),
  name: z.string().describe("Nama pemegang saham").optional(),
});

export const dateOnlySchema = z.object({
  date: z
    .string()
    .describe("Tanggal dengan format YYYY-MM-DD (Cth : 2024-12-30)"),
});

export const codeFromToSchema = z.object({
  code: z
    .string()
    .default("BBCA")
    .describe("Kode emiten berdasarkan data dari /list/stock (Cth : BBCA)"),
  from: z
    .string()
    .describe(
      "Tanggal periode awal dengan format YYYY-MM-DD (Cth : 2024-12-30)",
    ),
  to: z
    .string()
    .describe(
      "Tanggal periode akhir dengan format YYYY-MM-DD (Cth : 2024-12-30)",
    ),
});

export const codeFromToSchemaBroker = z.object({
  code: z
    .string()
    .default("XL")
    .describe(
      "Kode broker berdasarkan data dari /list/broker. Terdiri dari 2 huruf besar (Cth : XL)",
    ),
  from: z
    .string()
    .describe(
      "Tanggal periode awal dengan format YYYY-MM-DD (Cth : 2024-12-30)",
    ),
  to: z
    .string()
    .describe(
      "Tanggal periode akhir dengan format YYYY-MM-DD (Cth : 2024-12-30)",
    ),
});

export const codeIndicatorSchema = codeFromToSchema.extend({
  indicator: z
    .enum([
      "bdm",
      "ritel",
      "ratio",
      "value",
      "volume",
      "foreign",
      "accumulation",
      "freq",
    ])
    .default("bdm")
    .describe("Indikator sesuai yang tecantum (Cth : bdm)"),
});

export const codeRangeSchema = codeFromToSchema.extend({
  range: z
    .number()
    .default(6)
    .describe("Range berdasarkan jumlah bulan (Cth : 6)"),
});

export const summarySchema = codeFromToSchema.extend({
  investor: z
    .enum(["all", "f", "d"])
    .default("all")
    .describe("Jenis Investor (domisili) (Pilihan : all, f, d)"),
  market: z
    .enum(["RG", "NG", "TN"])
    .default("RG")
    .describe("Jenis Pasar (Pilihan : RG, NG, TN)"),
});

export const summarySchemaBroker = codeFromToSchemaBroker.extend({
  investor: z
    .enum(["all", "f", "d"])
    .default("all")
    .describe("Jenis Investor (domisili) (Pilihan : all, f, d)"),
  market: z
    .enum(["RG", "NG", "TN"])
    .default("RG")
    .describe("Jenis Pasar (Pilihan : RG, NG, TN)"),
});

export const inventorySchema = summarySchema.extend({
  scope: z
    .enum(["vol", "val", "freq"])
    .default("vol")
    .describe("Komponen perhitungan (scope) (Pilihan : vol, val, freq)"),
  limit: z.number().default(5).describe("Jumlah broker yang akan di tampilkan"),
  filter: z
    .array(z.string())
    .optional()
    .describe("Kode broker yang akan di filter dari list/broker"),
});

export const inventorySchemaBroker = summarySchemaBroker.extend({
  scope: z
    .enum(["vol", "val", "freq"])
    .default("vol")
    .describe("Komponen perhitungan (scope) (Pilihan : vol, val, freq)"),
  limit: z.number().default(5).describe("Jumlah broker yang akan di tampilkan"),
  filter: z
    .array(z.string())
    .optional()
    .describe("Kode broker yang akan di filter dari list/broker"),
});

export const momentumSchema = codeOnlySchema.extend({
  date: z
    .string()
    .describe("Tanggal dengan format YYYY-MM-DD (Cth : 2024-12-30)"),
  range: z
    .number()
    .default(5)
    .describe("Range berdasarkan jumlah menit (Cth : 5)"),
  scope: z
    .enum(["vol", "val", "freq"])
    .default("vol")
    .describe("Komponen perhitungan (scope) (Pilihan : vol, val, freq)"),
});

export const intradayInventorySchema = codeOnlySchema.extend({
  date: z
    .string()
    .describe("Tanggal dengan format YYYY-MM-DD (Cth : 2024-12-30)"),
  range: z
    .number()
    .default(5)
    .describe("Range berdasarkan jumlah menit (Cth : 5)"),
  type: z
    .enum(["volume", "value"])
    .default("value")
    .describe("Jenis perhitungan (type) (Pilihan : volume, value)"),
  total: z.number().default(4).describe("Jumlah broker yang akan di tampilkan"),
  buyer: z
    .enum(["ALL", "F", "D"])
    .default("ALL")
    .describe("Jenis Buyer (domisili) (Pilihan : ALL, F, D)"),
  seller: z
    .enum(["ALL", "F", "D"])
    .default("ALL")
    .describe("Jenis Seller (domisili) (Pilihan : ALL, F, D)"),
  market: z
    .enum(["ALL", "RG", "NG", "TN"])
    .default("RG")
    .describe("Jenis Pasar (Pilihan : ALL, RG, NG, TN)"),
  broker: z
    .array(z.string())
    .optional()
    .describe("Kode broker yang akan di filter dari list/broker"),
});

export const sankeySchema = codeOnlySchema.extend({
  date: z
    .string()
    .describe("Tanggal dengan format YYYY-MM-DD (Cth : 2024-12-30)"),
  type: z
    .enum(["volume", "value"])
    .default("value")
    .describe("Jenis perhitungan (type) (Pilihan : volume, value)"),
  buyer: z
    .enum(["ALL", "F", "D"])
    .default("ALL")
    .describe("Jenis Buyer (domisili) (Pilihan : ALL, F, D)"),
  seller: z
    .enum(["ALL", "F", "D"])
    .default("ALL")
    .describe("Jenis Seller (domisili) (Pilihan : ALL, F, D)"),
  market: z
    .enum(["ALL", "RG", "NG", "TN"])
    .default("RG")
    .describe("Jenis Pasar (Pilihan : ALL, RG, NG, TN)"),
  broker: z
    .array(z.string())
    .optional()
    .describe("Kode broker yang akan di filter dari list/broker"),
});

export const pageSchema = z.object({
  from: z
    .string()
    .describe(
      "Tanggal periode awal dengan format YYYY-MM-DD (Cth : 2024-12-30)",
    ),
  page: z.number().default(1).describe("Halaman yang akan di tampilkan"),
  limit: z
    .number()
    .default(10)
    .describe("Jumlah data yang akan di tampilkan per halaman"),
});

export const insiderSchema = pageSchema.extend({
  code: z
    .string()
    .describe("Kode emiten berdasarkan data dari /list/stock (Cth : BBCA)")
    .optional(),
  name: z.string().describe("Nama pemegang saham").optional(),
});

export const aboveFivePercentSchema = insiderSchema;

export const priceSeasonalSchema = codeOnlySchema.extend({
  range: z
    .number()
    .default(12)
    .describe("Range berdasarkan jumlah bulan (Cth : 12)"),
});

export const financialSchema = codeOnlySchema.extend({
  statement: z
    .enum(["BS", "IS", "CF", "EQ"])
    .default("BS")
    .describe(
      "Jenis laporan keuangan berdasarkan jenis statement. Bisa tulis: BS → balance_sheet, IS → income_statement, CF → cash_flow, EQ → equity",
    ),
  type: z
    .enum(["Q", "FY", "Q1", "Q2", "Q3", "Q4"])
    .default("Q")
    .describe(
      "Jenis laporan keuangan berdasarkan tanggal periode. Bisa tulis: Q → Quarterly, FY → Annual, Q1 → Quarter 1, Q2 → Quarter 2, Q3 → Quarter 3, Q4 → Quarter 4",
    ),
  limit: z
    .number()
    .int()
    .min(1)
    .max(100)
    .default(15)
    .describe("Jumlah data yang akan di tampilkan per laporan keuangan"),
});

export const keystatSchema = codeOnlySchema.extend({
  type: z
    .enum(["Q", "FY", "Q1", "Q2", "Q3", "Q4"])
    .default("Q")
    .describe(
      "Jenis laporan keuangan berdasarkan tanggal periode. Bisa tulis: Q → Quarterly, FY → Annual, Q1 → Quarter 1, Q2 → Quarter 2, Q3 → Quarter 3, Q4 → Quarter 4",
    ),
  limit: z
    .number()
    .int()
    .min(1)
    .max(100)
    .default(15)
    .describe("Jumlah data yang akan di tampilkan per laporan keuangan"),
});

export const intradayChartSchema = codeOnlySchema.extend({
  market: z
    .enum(["RG", "NG", "TN"])
    .default("RG")
    .describe("Jenis Pasar (Pilihan : RG, NG, TN)"),
});

export const intradayDataSchema = intradayChartSchema.extend({
  date: z
    .string()
    .describe("Tanggal dengan format YYYY-MM-DD (Cth : 2025-02-10)")
    .optional(),
});

export const calendarSchema = z.object({
  code: z
    .string()
    .describe("Kode emiten berdasarkan data dari /list/stock (Cth : BBCA)")
    .optional(),
  type: z
    .enum([
      "IPO",
      "PUBLIC_EXPOSE",
      "REVERSE",
      "RIGHT",
      "RUPS_RESULT",
      "RUPS_SCHEDULE",
      "SPLIT",
      "WARRANT",
      "BONUS",
      "CONVERTION",
    ])
    .describe(
      "Jenis Corporate Action (Pilihan : IPO, PUBLIC_EXPOSE, REVERSE, RIGHT, RUPS_RESULT, RUPS_SCHEDULE, SPLIT, WARRANT, BONUS, CONVERTION)",
    )
    .optional(),
  limit: z
    .number()
    .int()
    .min(1)
    .max(50)
    .default(10)
    .describe("Jumlah data yang akan di tampilkan per Corporate Action"),
  page: z
    .number()
    .int()
    .min(1)
    .default(1)
    .describe("Halaman yang akan di tampilkan"),
});

export const screenSchema = z.object({
  formula: z.string().describe("Formula untuk screening saham"),
});

export const indexChartSchema = z.object({
  code: z
    .string()
    .default("COMPOSITE")
    .describe(
      "Kode index berdasarkan data dari /list/index (Cth : COMPOSITE, LQ45, IDX30, IDXFINANCE)",
    ),
  from: z
    .string()
    .describe(
      "Tanggal periode awal dengan format YYYY-MM-DD (Cth : 2024-12-30)",
    ),
  to: z
    .string()
    .describe(
      "Tanggal periode akhir dengan format YYYY-MM-DD (Cth : 2024-12-30)",
    ),
});

export const multiTimeChartSchema = z.object({
  code: z
    .string()
    .default("BBCA")
    .describe("Kode saham atau index (Cth : BBCA, COMPOSITE)"),
  from: z
    .string()
    .describe(
      "Tanggal periode awal dengan format YYYY-MM-DD (Cth : 2024-12-30)",
    ),
  to: z
    .string()
    .describe(
      "Tanggal periode akhir dengan format YYYY-MM-DD (Cth : 2024-12-30)",
    ),
  timeframe: z
    .enum(["1", "5", "15", "30", "60", "D", "W", "M"])
    .default("D")
    .describe("Timeframe chart (Pilihan: 1, 5, 15, 30, 60, D, W, M)"),
});

export const shareholderDetailOneSchema = z
  .object({
    code: z
      .string()
      .describe("Kode saham (opsional jika name diisi)")
      .optional(),
    name: z
      .string()
      .describe("Nama pemegang saham (opsional jika code diisi)")
      .optional(),
  })
  .refine((val) => Boolean(val.code || val.name), {
    message: "Minimal salah satu dari code atau name harus diisi",
  });

export const sectorStalkerSchema = z.object({
  from: z
    .string()
    .describe(
      "Tanggal periode awal dengan format YYYY-MM-DD (Cth : 2024-12-30)",
    ),
  to: z
    .string()
    .describe(
      "Tanggal periode akhir dengan format YYYY-MM-DD (Cth : 2024-12-30)",
    ),
  base: z
    .enum(["COMPOSITE", "IDX30", "IDX80", "LQ45", "IDXFINANCE", "IDXENERGY"])
    .default("COMPOSITE")
    .describe(
      "Base index untuk filter (Pilihan: COMPOSITE, IDX30, IDX80, LQ45, IDXFINANCE, IDXENERGY)",
    ),
  limit: z
    .number()
    .optional()
    .describe("Limit jumlah hasil (hanya untuk base selain COMPOSITE)"),
  filter: z
    .string()
    .optional()
    .describe("Filter tambahan untuk pencarian kode/nama saham"),
});

export const intradayIndexSchema = z.object({
  code: z
    .string()
    .default("COMPOSITE")
    .describe(
      "Kode index berdasarkan data dari /list/index (Cth : COMPOSITE, LQ45, IDX30)",
    ),
  market: z
    .enum(["RG", "NG", "TN"])
    .default("RG")
    .describe("Jenis Pasar (Pilihan : RG, NG, TN)"),
});

export const sectorRotationSchema = z.object({
  from: z
    .string()
    .describe(
      "Tanggal periode awal dengan format YYYY-MM-DD (Cth : 2024-12-30)",
    ),
  to: z
    .string()
    .describe(
      "Tanggal periode akhir dengan format YYYY-MM-DD (Cth : 2024-12-30)",
    ),
});

export const brokerStalkerSchema = z.object({
  broker: z
    .string()
    .describe(
      "Kode broker berdasarkan data dari /list/broker (Cth : AG, YP, ZP)",
    ),
  stock: z
    .string()
    .describe("Kode emiten berdasarkan data dari /list/stock (Cth : BBCA)"),
});

export const brokerStalkerListSchema = z.object({
  code: z
    .string()
    .describe("Kode emiten berdasarkan data dari /list/stock (Cth : BBCA)"),
});

export const shareholderClassificationSchema = z.object({
  code: z
    .string()
    .default("BBCA")
    .describe("Kode emiten berdasarkan data dari /list/stock (Cth : BBCA)"),
  range: z
    .number()
    .int()
    .min(1)
    .max(36)
    .default(6)
    .describe("Periode jumlah data (1-36 bulan)"),
});

export const shareholderClassifyTableSchema = z.object({
  code: z
    .string()
    .default("BBCA")
    .describe("Kode emiten berdasarkan data dari /list/stock (Cth : BBCA)"),
});

export const shareholderHighSchema = z.object({});

export const shareholderRelationSchema = z.object({
  code: z
    .string()
    .describe("Kode emiten berdasarkan data dari /list/stock (Cth : BBCA)")
    .optional(),
  name: z.string().describe("Nama shareholder/investor").optional(),
  depth: z
    .number()
    .int()
    .min(1)
    .max(4)
    .describe("Kedalaman graph dalam hop (1-4)")
    .optional(),
  max_nodes: z
    .number()
    .int()
    .min(1)
    .describe("Batas maksimum total node graph")
    .optional(),
  neighbors: z
    .number()
    .int()
    .min(1)
    .describe("Batas maksimum relasi per node")
    .optional(),
  min_percentage: z
    .number()
    .min(0)
    .describe("Filter minimum persentase kepemilikan")
    .optional(),
});

export const priceTableSchema = z.object({
  code: z
    .string()
    .default("BBCA")
    .describe("Kode emiten berdasarkan data dari /list/stock (Cth : BBCA)"),
});

export const timeTableSchema = z.object({
  code: z
    .string()
    .default("BBCA")
    .describe("Kode emiten berdasarkan data dari /list/stock (Cth : BBCA)"),
});

export const orderQueueSchema = z.object({
  code: z
    .string()
    .default("BBCA")
    .describe("Kode emiten berdasarkan data dari /list/stock (Cth : BBCA)"),
  price: z
    .number()
    .describe("Tingkat harga saham yang ingin ditelusuri (Cth : 935)"),
  side: z
    .enum(["BUY", "SELL"])
    .describe("Sisi order (BUY atau SELL)"),
  page: z
    .number()
    .int()
    .min(0)
    .default(0)
    .describe("Halaman data antrian (default: 0)"),
  limit: z
    .number()
    .int()
    .min(1)
    .max(50)
    .default(50)
    .describe("Batas jumlah antrian yang ditampilkan (maksimal 50, default: 50)"),
});

export type CodeIndicatorArgs = z.infer<typeof codeIndicatorSchema>;

export type CodeOnlyArgs = z.infer<typeof codeOnlySchema>;

export type DateOnlyArgs = z.infer<typeof dateOnlySchema>;

export type CodeFromToArgs = z.infer<typeof codeFromToSchema>;

export type CodeRangeArgs = z.infer<typeof codeRangeSchema>;

export type SummaryArgs = z.infer<typeof summarySchema>;

export type SummaryArgsBroker = z.infer<typeof summarySchemaBroker>;

export type InventoryArgs = z.infer<typeof inventorySchema>;

export type InventoryArgsBroker = z.infer<typeof inventorySchemaBroker>;

export type MomentumArgs = z.infer<typeof momentumSchema>;

export type IntradayInventoryArgs = z.infer<typeof intradayInventorySchema>;

export type SankeyArgs = z.infer<typeof sankeySchema>;

export type InsiderArgs = z.infer<typeof insiderSchema>;

export type AboveFivePercentArgs = z.infer<typeof aboveFivePercentSchema>;

export type PriceSeasonalArgs = z.infer<typeof priceSeasonalSchema>;

export type FinancialArgs = z.infer<typeof financialSchema>;

export type KeystatArgs = z.infer<typeof keystatSchema>;

export type IntradayChartArgs = z.infer<typeof intradayChartSchema>;

export type IntradayDataArgs = z.infer<typeof intradayDataSchema>;

export type CalendarArgs = z.infer<typeof calendarSchema>;

export type ScreenArgs = z.infer<typeof screenSchema>;

export type IndexChartArgs = z.infer<typeof indexChartSchema>;

export type MultiTimeChartArgs = z.infer<typeof multiTimeChartSchema>;

export type ShareholderDetailOneArgs = z.infer<
  typeof shareholderDetailOneSchema
>;

export type ShareholderRelationArgs = z.infer<typeof shareholderRelationSchema>;

export type ShareholderClassificationArgs = z.infer<
  typeof shareholderClassificationSchema
>;

export type SectorStalkerArgs = z.infer<typeof sectorStalkerSchema>;

export type IntradayIndexArgs = z.infer<typeof intradayIndexSchema>;

export type SectorRotationArgs = z.infer<typeof sectorRotationSchema>;

export type BrokerStalkerArgs = z.infer<typeof brokerStalkerSchema>;

export type BrokerStalkerListArgs = z.infer<typeof brokerStalkerListSchema>;

export type ShareholderClassifyTableArgs = z.infer<
  typeof shareholderClassifyTableSchema
>;

export type ShareholderHighArgs = z.infer<typeof shareholderHighSchema>;

export type CodeNameOptionalArgs = z.infer<typeof codeNameOptionalSchema>;

export type PriceTableArgs = z.infer<typeof priceTableSchema>;

export type TimeTableArgs = z.infer<typeof timeTableSchema>;

export type OrderQueueArgs = z.infer<typeof orderQueueSchema>;
