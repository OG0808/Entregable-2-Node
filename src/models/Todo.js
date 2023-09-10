const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require ("../utils/connetion")

const Todo = sequelize.define("todo",{
   title: {
      type: DataTypes.STRING,
       allowNull: false,
   },
   description: {
    type: DataTypes.STRING,
     allowNull: false,
   },
   completed: {
    type: DataTypes.BOOLEAN,
     allowNull: false,
   },

})

module.exports = Todo;