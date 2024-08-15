import { Model } from "sequelize";
/**
 * @typedef NoteAttributes
 * @property {string} id
 * @property {string} title
 * @property {string} body
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */
export const Models = {};
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
export default (sequelize, DataTypes) => {
  /** @extends {Model<NoteAttributes>} */
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Note.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Note",
      tableName: "Notes",
    }
  );
  return Note;
};
