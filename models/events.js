'use strict';
module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define('events', {
    title: DataTypes.STRING,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    id_loc: DataTypes.INTEGER,
    detail_loc: DataTypes.STRING
  }, {});
  events.associate = function (models) {
    // associations can be defined here
    events.hasMany(models.tickets, {
      as: "event",
      foreignKey: "id_event"
    });

    events.belongsTo(models.locations, {
      as: "location",
      foreignKey: "id_loc"
    });


  };
  return events;
};