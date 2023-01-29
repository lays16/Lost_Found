import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const items = db.define(
  "items",
  {
    item: DataTypes.STRING,
    place:  DataTypes.STRING,
    phonenumber:  DataTypes.STRING,
    description: DataTypes.STRING,
    link: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default items;

(async () => {
  await db.sync();
})();
