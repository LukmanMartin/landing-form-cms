/*
//---- requerimos mongoose para crear el modelo 
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//? CREACIÓN DEL ESQUEMA
//---- Creamos nuestro esquema de usuarios
const adminSchema = new mongoose.Schema({
    email: { type: String, trim: true, required: true, unique: true },
    nombreAdmin: { type: String, trim: true, required: true, unique: true },
    contraseña: { type: String, trim: true, required: true },
    añoNacimiento: { type: Number, trim: true, required: true },
    ciudad: { type: String, trim: true },
    imagenPerfil: { type: String, trim: true },
    usuarios: [{ type: mongoose.Types.ObjectId, ref: 'User' }]
    
}, { timestamps: true, collection: 'admins' });

//---- Antes de que se guarde nuestro esquema "presave", le decimos que nos encripte la contraseña
adminSchema.pre("save", function (next) {
    //---- cogemos nuestra contraseña y le hacemos hashSync utilizando bcrypt, 10 será el número de veces que se encripta la contraseña antes de la definitiva.
    this.contraseña = bcrypt.hashSync(this.contraseña, 10);
    //---- next para que continue el guardado de mi esquema usuario en la base de datos y no se quede pendiente
    next();
});

//---- creamos el modelo con la colección admins y el esquema adminSchema
const Admin = mongoose.model('admins', adminSchema);

//* EXPORTAMOS
//---- exportamos el modelo
module.exports = Admin;
*/