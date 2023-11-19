const mongoose = require('mongoose');


const toySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  category: String,
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    default: 0
  },
  
});


const Toy = mongoose.model('Toy', toySchema);

module.exports = Toy;
