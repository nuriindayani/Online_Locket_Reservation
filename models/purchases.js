'use strict';
module.exports = (sequelize, DataTypes) => {
  const purchases = sequelize.define('purchases', {
    name: DataTypes.STRING,
    nik: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    status: DataTypes.STRING,
    ticket_id: DataTypes.INTEGER
  }, {});
  purchases.associate = function(models) {
    // associations can be defined here
  };
  return purchases;
};