-- Migration: Initial schema for DissRent
-- Applied to Cloudflare D1

CREATE TABLE IF NOT EXISTS bookings (
  id TEXT PRIMARY KEY,
  car_name TEXT,
  car_img TEXT,
  pickup_date TEXT,
  return_date TEXT,
  days INTEGER,
  pickup_location TEXT,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  contact_preference TEXT NOT NULL,
  total_price INTEGER,
  status TEXT DEFAULT 'pending',
  confirm_token TEXT UNIQUE,
  cancel_token TEXT UNIQUE,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS car_blocked_dates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  car_img TEXT NOT NULL,
  date TEXT NOT NULL,
  UNIQUE(car_img, date)
);

CREATE INDEX IF NOT EXISTS idx_blocked_dates_car_date
ON car_blocked_dates(car_img, date);
