const mongoose = require('../config/database');

const IdiomasSchema = mongoose.Schema({
    nombreIdioma:{
        type:String,
        required:true,
        unique:true,
    }
});

const idiomas = mongoose.model('idomas', IdiomasSchema);

module.exports = idiomas;