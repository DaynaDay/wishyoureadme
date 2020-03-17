//pull in sequelize in node modules.
const { Model, DataTypes } = require('sequelize');
//encripting the password
const bcrypt = require('bcrypt');
//communicating with mySQL database
const sequelize = require('../config/connection');

// create our User model, look at sequalize documentation, builds user object in the same way to put in the database
class User extends Model {
  // set up method to run on instance data (per user) to check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// create fields/columns for User model
User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    }
  },
  {
    //an option from sequelize, NEED TO DO THIS
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newUserData) {
        //hashing the password before putting in database
        const hashedPw = await bcrypt.hash(newUserData.password, 10);
        newUserData.password = hashedPw;
        return newUserData;
      }
    },
    //boolean that makes it true.
    sequelize
  }
);

module.exports = User;
