-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "crypto" (
	"id" integer PRIMARY KEY NOT NULL,
	"date" timestamp,
	"open" double precision,
	"high" double precision,
	"low" double precision,
	"close" double precision,
	"volume" double precision,
	"real_volume" double precision
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "etherium_data" (
	"idEth" integer PRIMARY KEY NOT NULL,
	"open" real,
	"high" real,
	"low" real,
	"close" real,
	"vol" real,
	"realVol" real,
	"ofDate" date
);

*/