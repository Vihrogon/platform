import { DB } from "https://deno.land/x/sqlite/mod.ts";
const db = new DB("platform.db");

db.query(`DROP TABLE IF EXISTS accounts`);

db.query(`
  CREATE TABLE IF NOT EXISTS accounts (
  email TEXT PRIMARY KEY,
  name TEXT)
`);

db.query(`CREATE UNIQUE INDEX IF NOT EXISTS id ON accounts (email)`);

db.query(`
  INSERT INTO accounts
  VALUES ('email1','name1')
`);

for (const email of db.query(`SELECT email FROM accounts`)) {
  console.log(email);
}

console.log(db.query(`SELECT email, name FROM accounts`));

db.close();
