const { DataTypes, UUIDV4 } = require("sequelize");
const db = require("../db");

const Task = db.sequelize.define("Task", {
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  validityDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  state: {
    type: DataTypes.ENUM(
      "pendding",
      "programed",
      "complete",
      "canceled",
      "defeated"
    ),
    allowNull: false,
  },
  priority: {
    type: DataTypes.ENUM("low", "medium", "high"),
    allowNull: false,
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});

module.exports = Task;

const TaskType = require("./TaskType");
const User = require("./User");

User.belongsToMany(Task, {
  through: "AsignedTask",
  as: "AssignedTasks",
  foreignKey: "assigneeId",
});
User.belongsToMany(Task, {
  through: "CreatedTask",
  as: "CreatedTasks",
  foreignKey: "creatorId",
});
Task.belongsToMany(User, {
  through: "AsignedTask",
  as: "AssignedUsers",
  foreignKey: "taskId",
});
Task.belongsToMany(User, {
  through: "CreatedTask",
  as: "Creators",
  foreignKey: "taskId",
});

Task.hasOne(TaskType, { foreignKey: "taskTypeId", sourceKey: "id" });
TaskType.hasMany(Task, { foreignKey: "Task", sourceKey: "id" });