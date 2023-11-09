const { DataTypes, UUIDV4 } = require("sequelize");
const db = require("../db");

const TaskType = db.sequelize.define("TaskType", {
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});

module.exports = TaskType;

const Task = require('./Task')

Task.hasOne(TaskType, { foreignKey: "taskTypeId", sourceKey: "id" });
TaskType.hasMany(Task, { foreignKey: "Task", sourceKey: "id" });
