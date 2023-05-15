const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

// This creates our model for the Post table
class Post extends Model {}

// This will create a new model called Post, which will inherit functionality from the sequelize Model class.
Post.init(
  {
    //This will create an id for the post
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //This will create a title for the post
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // This will create the content for the post
    post_content: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // This will create a date for the post
    date_created: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    // This will create a user id for the post
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    // This will create the sequelize connection to the database
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
