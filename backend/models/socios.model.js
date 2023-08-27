
const mongoose = require('../config/database');

const SociosSchema = new mongoose.Schema({
    ccSocio:{
        type:Number,
        required:[true, 'el documento debe ser obligatorio'],
        unique:true,
    },
    nombre:{
        type:String,
        maxlength:100,
        required:[true, 'Este campo es obligatorio']
    },
    telefono:{
        type:Number,
        required:true,
        unique:true,
    },
    direccion:{
        type:String,
        required:true,
    },

    reservas: [{type: Schema.Types.ObjectId, ref: 'Reserva'}],
    prestamos: [{type:Schema.Types.ObjectId, ref: 'Prestamo'}],
    multas:[{type:Schema.Types.ObjectId, ref: 'Multa'}]

});

const socios = mongoose.model('socios', SociosSchema);

module.exports = socios;