const Toy = require('../models/toyModel'); // Importa el modelo de juguete

// Métodos del DAO para interactuar con la base de datos de juguetes
const ToyDAO = {
  async getAllToys() {
    try {
      const toys = await Toy.find(); // Obtiene todos los juguetes
      return toys;
    } catch (error) {
      throw new Error('Error al obtener los juguetes: ' + error);
    }
  },

  async getToyById(id) {
    try {
      const toy = await Toy.findById(id); // Obtiene un juguete por su ID
      return toy;
    } catch (error) {
      throw new Error('Error al obtener el juguete por ID: ' + error);
    }
  },

  async createToy(toyData) {
    try {
      const newToy = await Toy.create(toyData); // Crea un nuevo juguete
      return newToy;
    } catch (error) {
      throw new Error('Error al crear un nuevo juguete: ' + error);
    }
  },

  async updateToy(id, toyData) {
    try {
      const updatedToy = await Toy.findByIdAndUpdate(id, toyData, { new: true }); // Actualiza un juguete por su ID
      return updatedToy;
    } catch (error) {
      throw new Error('Error al actualizar el juguete: ' + error);
    }
  },

  async deleteToy(id) {
    try {
      await Toy.findByIdAndDelete(id); // Elimina un juguete por su ID
    } catch (error) {
      throw new Error('Error al eliminar el juguete: ' + error);
    }
  }
};

module.exports = ToyDAO;
