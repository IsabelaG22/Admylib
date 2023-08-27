const mongoose = require('../config/database');

const AutoresSchema = new mongoose.Schema({
    nombreCompleto:{
        type:String,
        maxlength:100,
        required:[true, 'Este campo es obligatorio']
    },
    fechaNacimiento:{
        typo:Date,
        required:true,
    },
    fechaDeceso:{
        typo:Date,
    },

});

const autores = mongoose.model('autores', AutoresSchema);

module.exports = autores;