'use strict';
module.exports = (sequelize, DataTypes) => {
  const tickets = sequelize.define('tickets', {
    type: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quota: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    id_event: DataTypes.INTEGER
  }, {});
  tickets.associate = function (models) {
    // associations can be defined here

    tickets.hasMany(models.purchases, {
      as: "purchase",
      foreignKey: "ticket_id"
    });

    tickets.belongsTo(models.events, {
      as: "event",
      foreignKey: "id_event"
    });

  };
  return tickets;
};