import lowdb from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import * as fs from 'fs';
import * as path from 'path';

const databaseFilePath =
  process.env.JSON_DB_FILE_PATH || path.join(process.cwd(), './data/db.json');

// ensure existence of containing directory
if (!fs.existsSync(databaseFilePath)) {
  fs.mkdirSync(
    databaseFilePath
      .split(/\/|\\/)
      .slice(0, -1)
      .join(path.sep),
  );
}

const adapter = new FileAsync(databaseFilePath);
const db = lowdb(adapter);

export default class Storage {}
