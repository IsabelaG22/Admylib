const mongoose = require('../config/database')

const BibliotecologoSchema = new mongoose.Schema({
    ccBibliotecologo: {
        require:[true, 'Debe ingresar la cedula'],
        unique: [true, 'Este documento ya se encuentra registrado'],
        type: Number,
        
    },
    nombre: {
        require:[true, 'Ingrese el nombre completo'],
        type: String,
        maxLength: 100,
    },
    correo:{
        require:[true, 'Ingresa un correo electronico'],
        unique:[true, 'Este correo ya existe'],
        type:String

    },

    contraseña:{
        require:[true, 'Bebes ingresar una contraseña segura'],
        type: String

    },

    horarioEntrada: {
        require:[true, 'Ingresa la hora de entrada del empleado'],
        type: Date,
        
    },
    horarioSalida: {
        require:[true, 'Ingresa la hora de salida del empleado'],
        type: Date,
    }
});

const Bibliotecologo = mongoose.model('bibliotecologos', BibliotecologoSchema)
module.exports= Bibliotecologo