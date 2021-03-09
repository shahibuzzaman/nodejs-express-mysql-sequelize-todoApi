module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("Todo", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  });
  return Todo;
};
