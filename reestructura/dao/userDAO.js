const User = require('../models/userModel');

class UserDAO {
 
  static async createUser(userData) {
    try {
      const newUser = new User(userData);
      const savedUser = await newUser.save();
      return savedUser;
    } catch (error) {
      throw new Error('Error al crear el usuario');
    }
  }

  
  static async findUserByUsername(username) {
    try {
      const user = await User.findOne({ username });
      return user;
    } catch (error) {
      throw new Error('Error al buscar el usuario por nombre de usuario');
    }
  }

  
}

module.exports = UserDAO;
