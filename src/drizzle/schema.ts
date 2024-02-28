import { pgTable, integer, timestamp, doublePrecision, real, date } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const crypto = pgTable("crypto", {
	id: integer("id").primaryKey().notNull(),
	date: timestamp("date", { mode: 'string' }),
	open: doublePrecision("open"),
	high: doublePrecision("high"),
	low: doublePrecision("low"),
	close: doublePrecision("close"),
	volume: doublePrecision("volume"),
	realVolume: doublePrecision("real_volume"),
});

export const etherium_data = pgTable("etherium_data", {
	idEth: integer("idEth").primaryKey().notNull(),
	open: real("open"),
	high: real("high"),
	low: real("low"),
	close: real("close"),
	vol: real("vol"),
	realVol: real("realVol"),
	ofDate: date("ofDate"),
});