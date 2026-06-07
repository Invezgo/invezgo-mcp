import {
  CodeOnlyArgs,
  CodeNameOptionalArgs,
  DateOnlyArgs,
  CodeFromToArgs,
  CodeRangeArgs,
  SummaryArgs,
  InventoryArgs,
  MomentumArgs,
  IntradayInventoryArgs,
  SankeyArgs,
  InsiderArgs,
  AboveFivePercentArgs,
  PriceSeasonalArgs,
  FinancialArgs,
  KeystatArgs,
  CodeIndicatorArgs,
  IntradayChartArgs,
  ScreenArgs,
  SummaryArgsBroker,
  InventoryArgsBroker,
  CalendarArgs,
  IndexChartArgs,
  MultiTimeChartArgs,
  SectorStalkerArgs,
  IntradayIndexArgs,
  SectorRotationArgs,
  BrokerStalkerArgs,
  BrokerStalkerListArgs,
  PriceTableArgs,
  TimeTableArgs,
  IntradayDataArgs,
  ShareholderDetailOneArgs,
  ShareholderRelationArgs,
  ShareholderClassificationArgs,
  ShareholderClassifyTableArgs,
  ShareholderHighArgs,
} from "@/schema/stock";
import { SessionData } from "@/server";
import { HandlerReturnType } from "@/types/common";
import { Context } from "fastmcp";
import { customFetch } from "@/utils/fetch";
import { formatResponse } from "@/utils/format-response";

export const information = async (
  args: CodeOnlyArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(`analysis/information/${args.code}`, apiKey);

  return formatResponse(data);
};

export const listStock = async (
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(`analysis/list/stock`, apiKey);

  return formatResponse(data);
};

export const listBroker = async (
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(`analysis/list/broker`, apiKey);

  return formatResponse(data);
};

export const topChange = async (
  args: DateOnlyArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(`users/top/change?date=${args.date}`, apiKey);

  return formatResponse(data);
};

export const topForeign = async (
  args: DateOnlyArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(`users/top/foreign?date=${args.date}`, apiKey);

  return formatResponse(data);
};

export const topAccumulation = async (
  args: DateOnlyArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `users/top/accumulation?date=${args.date}`,
    apiKey,
  );

  return formatResponse(data);
};

export const chart = async (
  args: CodeFromToArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `analysis/chart/stock/${args.code}?from=${args.from}&to=${args.to}`,
    apiKey,
  );

  return formatResponse(data);
};

export const chartIndicator = async (
  args: CodeIndicatorArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `analysis/chart/stock/${args.indicator}/${args.code}?from=${args.from}&to=${args.to}`,
    apiKey,
  );

  return formatResponse(data);
};

export const shareholderNumber = async (
  args: CodeFromToArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `analysis/shareholder/number/${args.code}`,
    apiKey,
  );

  return formatResponse(data);
};

export const shareholder = async (
  args: CodeOnlyArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(`analysis/shareholder/${args.code}`, apiKey);

  return formatResponse(data);
};

export const shareholderDetail = async (
  args: CodeOnlyArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `analysis/shareholder-detail/${args.code}`,
    apiKey,
  );

  return formatResponse(data);
};

export const shareholderOneDetail = async (
  args: CodeNameOptionalArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;
  const codeQuery = args.code ? `code=${encodeURIComponent(args.code)}` : "";
  const nameQuery = args.name
    ? `${codeQuery ? "&" : ""}name=${encodeURIComponent(args.name)}`
    : "";
  const query = `${codeQuery}${nameQuery}`;

  const data = await customFetch(
    `analysis/shareholder-detail-one${query ? `?${query}` : ""}`,
    apiKey,
  );

  return formatResponse(data);
};

export const shareholderKSEI = async (
  args: CodeRangeArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `analysis/shareholder/ksei/${args.code}?range=${args.range}`,
    apiKey,
  );

  return formatResponse(data);
};

export const summaryStock = async (
  args: SummaryArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `analysis/summary/stock/${args.code}?from=${args.from}&to=${args.to}&investor=${args.investor}&market=${args.market}`,
    apiKey,
  );

  return formatResponse(data);
};

export const summaryBroker = async (
  args: SummaryArgsBroker,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `analysis/summary/broker/${args.code}?from=${args.from}&to=${args.to}&investor=${args.investor}&market=${args.market}`,
    apiKey,
  );

  return formatResponse(data);
};

export const inventoryStock = async (
  args: InventoryArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  // Properly encode array parameters
  const filterParam = args.filter ? args.filter.join(",") : "";
  const filterQuery = filterParam
    ? `&filter=${encodeURIComponent(filterParam)}`
    : "";

  const data = await customFetch(
    `analysis/inventory-chart/stock/${args.code}?from=${args.from}&to=${args.to}&investor=${args.investor}&market=${args.market}&scope=${args.scope}&limit=${args.limit}${filterQuery}`,
    apiKey,
  );

  return formatResponse(data);
};

export const inventoryBroker = async (
  args: InventoryArgsBroker,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  // Properly encode array parameters
  const filterParam = args.filter ? args.filter.join(",") : "";
  const filterQuery = filterParam
    ? `&filter=${encodeURIComponent(filterParam)}`
    : "";

  const data = await customFetch(
    `analysis/inventory-chart/broker/${args.code}?from=${args.from}&to=${args.to}&investor=${args.investor}&market=${args.market}&scope=${args.scope}&limit=${args.limit}${filterQuery}`,
    apiKey,
  );

  return formatResponse(data);
};

export const momentum = async (
  args: MomentumArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `analysis/momentum-chart/${args.code}?date=${args.date}&range=${args.range}&scope=${args.scope}`,
    apiKey,
  );

  return formatResponse(data);
};

export const intradayInventory = async (
  args: IntradayInventoryArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  // Properly encode array parameters
  const brokerParam = args.broker ? args.broker.join(",") : "";
  const brokerQuery = brokerParam
    ? `&broker=${encodeURIComponent(brokerParam)}`
    : "";

  const data = await customFetch(
    `analysis/intraday-inventory-chart/${args.code}?date=${args.date}&range=${args.range}&type=${args.type}&total=${args.total}&buyer=${args.buyer}&seller=${args.seller}&market=${args.market}${brokerQuery}`,
    apiKey,
  );

  return formatResponse(data);
};

export const sankey = async (
  args: SankeyArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  // Properly encode array parameters
  const brokerParam = args.broker ? args.broker.join(",") : "";
  const brokerQuery = brokerParam
    ? `&broker=${encodeURIComponent(brokerParam)}`
    : "";

  const data = await customFetch(
    `analysis/sankey-chart/${args.code}?date=${args.date}&type=${args.type}&buyer=${args.buyer}&seller=${args.seller}&market=${args.market}${brokerQuery}`,
    apiKey,
  );

  return formatResponse(data);
};

export const insider = async (
  args: InsiderArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const nameQuery = args.name ? `&name=${args.name}` : "";
  const codeQuery = args.code ? `&code=${args.code}` : "";

  const data = await customFetch(
    `analysis/shareholder-insider?from=${args.from}&page=${args.page}&limit=${args.limit}${nameQuery}${codeQuery}`,
    apiKey,
  );

  return formatResponse(data.data);
};

export const aboveFivePercent = async (
  args: AboveFivePercentArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const nameQuery = args.name ? `&name=${args.name}` : "";
  const codeQuery = args.code ? `&code=${args.code}` : "";

  const data = await customFetch(
    `analysis/shareholder-above?from=${args.from}&page=${args.page}&limit=${args.limit}${nameQuery}${codeQuery}`,
    apiKey,
  );

  return formatResponse(data.data);
};

export const aboveOnePercent = async (
  args: AboveFivePercentArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const nameQuery = args.name ? `&name=${args.name}` : "";
  const codeQuery = args.code ? `&code=${args.code}` : "";

  const data = await customFetch(
    `analysis/shareholder-one?from=${args.from}&page=${args.page}&limit=${args.limit}${nameQuery}${codeQuery}`,
    apiKey,
  );

  return formatResponse(data.data);
};

export const priceDiary = async (
  args: CodeOnlyArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(`analysis/price-diary/${args.code}`, apiKey);

  return formatResponse(data);
};

export const priceSeasonal = async (
  args: PriceSeasonalArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `analysis/price-seasonality/${args.code}?range=${args.range}`,
    apiKey,
  );

  return formatResponse(data);
};

export const searchStock = async (
  args: CodeOnlyArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `search/stock?query=${args.code}&cursor=1`,
    apiKey,
  );

  return formatResponse(data);
};

export const newsStock = async (
  args: CodeOnlyArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `posts/space/category/${args.code}/NEWS?page=1&limit=10`,
    apiKey,
  );

  return formatResponse(data);
};

export const disclosureStock = async (
  args: CodeOnlyArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `posts/space/category/${args.code}/REPORT?page=1&limit=10`,
    apiKey,
  );

  return formatResponse(data);
};

export const financialStock = async (
  args: FinancialArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `analysis/financial-statement/${args.code}?statement=${args.statement}&type=${args.type}&limit=${args.limit}`,
    apiKey,
  );

  return formatResponse(data);
};

export const keystatStock = async (
  args: KeystatArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `analysis/keystat/${args.code}?type=${args.type}&limit=${args.limit}`,
    apiKey,
  );

  return formatResponse(data);
};

export const intradayChart = async (
  args: IntradayChartArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `analysis/intraday/${args.code}?market=${args.market}`,
    apiKey,
  );
  return formatResponse(data);
};

export const intradayData = async (
  args: IntradayDataArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;
  const dateQuery = args.date ? `&date=${args.date}` : "";

  const data = await customFetch(
    `analysis/intraday-data/${args.code}?market=${args.market}${dateQuery}`,
    apiKey,
  );
  return formatResponse(data);
};

export const orderBook = async (
  args: IntradayChartArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `analysis/order-book/${args.code}?market=${args.market}`,
    apiKey,
  );
  return formatResponse(data);
};

export const calendar = async (
  args: CalendarArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const codeQuery = args.code ? `&code=${args.code}` : "";
  const typeQuery = args.type ? `&type=${args.type}` : "";

  const data = await customFetch(
    `analysis/calendar?limit=${args.limit}&page=${args.page}${codeQuery}${typeQuery}`,
    apiKey,
  );
  return formatResponse(data.data);
};

export const screen = async (
  args: ScreenArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(`screener/screen`, apiKey, "POST", args);
  return formatResponse(data);
};

export const listIndex = async (
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(`analysis/list/index`, apiKey);

  return formatResponse(data);
};

export const indexChart = async (
  args: IndexChartArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `analysis/chart/index/${args.code}?from=${args.from}&to=${args.to}`,
    apiKey,
  );

  return formatResponse(data);
};

export const multiTimeChart = async (
  args: MultiTimeChartArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `analysis/chart/multi-time/${args.code}?from=${args.from}&to=${args.to}&timeframe=${args.timeframe}`,
    apiKey,
  );

  return formatResponse(data);
};

export const shareholderDetailOne = async (
  args: ShareholderDetailOneArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const codeQuery = args.code ? `code=${encodeURIComponent(args.code)}` : "";
  const nameQuery = args.name ? `name=${encodeURIComponent(args.name)}` : "";
  const query = [codeQuery, nameQuery].filter(Boolean).join("&");

  const data = await customFetch(
    `analysis/shareholder-detail-one?${query}`,
    apiKey,
  );

  return formatResponse(data);
};

export const sectorStalker = async (
  args: SectorStalkerArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const baseQuery = `&base=${args.base}`;
  const limitQuery = args.limit ? `&limit=${args.limit}` : "";
  const filterQuery = args.filter
    ? `&filter=${encodeURIComponent(args.filter)}`
    : "";

  const data = await customFetch(
    `analysis/stalker/sector?from=${args.from}&to=${args.to}${baseQuery}${limitQuery}${filterQuery}`,
    apiKey,
  );

  return formatResponse(data);
};

export const intradayIndex = async (
  args: IntradayIndexArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `analysis/intraday-index/${args.code}?market=${args.market}`,
    apiKey,
  );

  return formatResponse(data);
};

export const sectorRotation = async (
  args: SectorRotationArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `analysis/sector/rotation?from=${args.from}&to=${args.to}`,
    apiKey,
  );

  return formatResponse(data);
};

export const brokerStalker = async (
  args: BrokerStalkerArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `analysis/stalker/broker/${args.broker}/${args.stock}`,
    apiKey,
  );

  return formatResponse(data);
};

export const brokerStalkerList = async (
  args: BrokerStalkerListArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(`analysis/stalker/list/${args.code}`, apiKey);

  return formatResponse(data);
};

export const shareholderClassification = async (
  args: ShareholderClassificationArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `analysis/shareholder/classification/${args.code}?range=${args.range}`,
    apiKey,
  );

  return formatResponse(data);
};

export const shareholderClassifyTable = async (
  args: ShareholderClassifyTableArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(
    `analysis/shareholder/classify-table/${args.code}`,
    apiKey,
  );

  return formatResponse(data);
};

export const shareholderHigh = async (
  args: ShareholderHighArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;
  void args;

  const data = await customFetch(`analysis/shareholder/high`, apiKey);

  return formatResponse(data);
};

export const shareholderRelation = async (
  args: ShareholderRelationArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;
  const query = new URLSearchParams();

  if (args.code) query.set("code", args.code);
  if (args.name) query.set("name", args.name);
  if (args.depth !== undefined) query.set("depth", String(args.depth));
  if (args.max_nodes !== undefined)
    query.set("max_nodes", String(args.max_nodes));
  if (args.neighbors !== undefined)
    query.set("neighbors", String(args.neighbors));
  if (args.min_percentage !== undefined)
    query.set("min_percentage", String(args.min_percentage));

  const queryString = query.toString();
  const data = await customFetch(
    `analysis/shareholder/relation${queryString ? `?${queryString}` : ""}`,
    apiKey,
  );

  return formatResponse(data);
};

export const priceTable = async (
  args: PriceTableArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(`analysis/price-table/${args.code}`, apiKey);

  return formatResponse(data);
};

export const timeTable = async (
  args: TimeTableArgs,
  context: Context<SessionData>,
): Promise<HandlerReturnType> => {
  const apiKey = context.session?.apiKey as string;

  const data = await customFetch(`analysis/time-table/${args.code}`, apiKey);

  return formatResponse(data);
};
