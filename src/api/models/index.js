import { readdir } from "fs/promises";
import { basename, dirname } from "path";
import { Sequelize, DataTypes } from "sequelize";
import { fileURLToPath } from "url";
import config from "../../db/config/database.js";

/**
 * @typedef Database
 * @property {Sequelize} sequelize
 * @property {Sequelize} Sequelize
 * @property {ReturnType<typeof import('./note.js').default>} Note
 */

/** @typedef {keyof Omit<Database, 'sequelize' | 'Sequelize'>} ModelName */

/** @returns {Promise<Database>} */
async function initializeDatabase() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const developmentConfig = /** @type {import('sequelize').Options} */ (config);

  /** @type {Record<string,any>} */
  const db = {};

  const sequelize = new Sequelize(developmentConfig);

  const dir = await readdir(__dirname);

  const files = dir.filter((file) => {
    const isFile = file.indexOf(".") !== 0;
    const isJsFile = file.slice(-3) === ".js";
    const isNotThisFile = file !== basename(__filename);

    return isFile && isJsFile && isNotThisFile;
  });

  for (const file of files) {
    const model = await import(`./${file}`);
    const namedModel = model.default(sequelize, DataTypes);
    db[namedModel.name] = namedModel;
  }

  const modelNames = Object.keys(db);

  for (const modelName of modelNames) if (db[modelName].associate) db[modelName].associate(db);

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  return /** @type {Database} */ (/** @type {unknown} */ (db));
}

export const { sequelize, Note } = await initializeDatabase();
