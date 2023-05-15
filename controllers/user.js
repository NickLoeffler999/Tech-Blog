const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/config");

// This creates our model for the User table
class User extends Model {
  // This checks the password for the user
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// This will create a new model called User, which will inherit functionality from the sequelize Model class.
User.init(
  {
    // This will create an id for the user
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // This will create a username for the user
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // This will create an email for the user
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // This will create a password for the user
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    // This will hash the password for the user
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      // This will update the password for the user
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    // This will create the sequelize connection to the database
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
