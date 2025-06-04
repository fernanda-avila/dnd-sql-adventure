// lib/database/initDb.js
import initSqlJs from 'sql.js';
import { ITEMS, ENEMIES } from './seedData';

export async function initGameDB() {
  const SQL = await initSqlJs({
    // Isso evita erro de 'fs' no browser e carrega o wasm da CDN oficial
    locateFile: file => `https://sql.js.org/dist/${file}`,
  });

  const db = new SQL.Database();

  // Tabela de inventário
  db.exec(`
    CREATE TABLE inventory (
      id INTEGER PRIMARY KEY,
      name TEXT,
      type TEXT,
      power INTEGER,
      location_id INTEGER
    );
  `);

  const stmt = db.prepare("INSERT INTO inventory VALUES (?,?,?,?,?)");
  ITEMS.forEach(item => {
    stmt.run([item.id, item.name, item.type, item.power, item.location_id]);
  });
  stmt.free(); // libera o prepared statement

  // Tabela de inimigos
  db.exec(`
    CREATE TABLE enemies (
      id INTEGER PRIMARY KEY,
      name TEXT,
      hp INTEGER,
      weakness TEXT,
      location_id INTEGER
    );
  `);

  const enemyStmt = db.prepare("INSERT INTO enemies VALUES (?,?,?,?,?)");
  ENEMIES.forEach(enemy => {
    enemyStmt.run([enemy.id, enemy.name, enemy.hp, enemy.weakness, enemy.location_id]);
  });
  enemyStmt.free();

  return db;
}
