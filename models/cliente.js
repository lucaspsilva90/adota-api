'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cliente.init({
    nome: DataTypes.STRING,
    cpf: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    email: { 
      type: DataTypes.STRING,
      isEmail: true,
      allowNull: false,
      unique: true      
     },
    senha:{
      type: DataTypes.STRING,
      allowNull:false
    },
    cep: DataTypes.STRING,
    numero: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};