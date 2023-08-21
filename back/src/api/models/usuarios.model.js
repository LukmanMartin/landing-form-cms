//---- requerimos mongoose para crear el modelo 
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//? CREACIÓN DEL ESQUEMA
//---- Creamos nuestro esquema de usuarios
const userSchema = new mongoose.Schema({
    fullname: { type: String, },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String,  },
    añoNacimiento: { type: Number, trim: true,  },
    ciudad: { type: String, trim: true },
    imagenPerfil: { type: String, trim: true },
    isAdmin: { type: Boolean, default: false },
    
}, { timestamps: true, collection: 'users' });

//---- Antes de que se guarde nuestro esquema "presave", le decimos que nos encripte la password
userSchema.pre("save", function (next) {
    //---- cogemos nuestra contraseña y le hacemos hashSync utilizando bcrypt, 10 será el número de veces que se encripta la contraseña antes de la definitiva.
    this.password = bcrypt.hashSync(this.password, 10);
    //---- next para que continue el guardado de mi esquema usuario en la base de datos y no se quede pendiente
    next();
});

//---- creamos el modelo con la colección users y el esquema userSchema
const User = mongoose.model('users', userSchema);

//* EXPORTAMOS
//---- exportamos el modelo
module.exports = User;
