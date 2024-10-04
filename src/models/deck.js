const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const deck = sequelize.define('Deck', {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nomeDoDeck: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
});

module.exports = deck;