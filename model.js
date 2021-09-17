const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: String,
    name: String,
    image: String
})

const Model = mongoose.model('Model', schema);

module.exports = Model;