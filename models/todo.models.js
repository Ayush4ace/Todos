const {DataTypes} = require("sequelize");

const sequelize = require("../config/db.js");

const Todo = sequelize.define('Todo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});


module.exports = Todo; 