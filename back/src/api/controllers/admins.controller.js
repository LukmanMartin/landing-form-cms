/*
//---- Traaemos al controlador nuestro modelo de usuario
const Admin = require('../models/admin.model');
//---- Requerimos la librería bcryp para encriptar la contraseña
const bcrypt = require('bcrypt');
const { createToken } = require('../../utils/token-action');
const { setError } = require('../../utils/errors');






  const register = async (req, res, next) => {
    try {
      const newAdmin = new Admin(req.body);
      const nombreAdminExist = await Admin.findOne({ nombreAdmin: newAdmin.nombreAdmin });
      if (nombreAdminExist) {
        return next(setError(409, "Admin already exists"));
      }
      if (req.file) {
        newAdmin.imagenPerfil = req.file.path;
      }
      const adminInDB = await newAdmin.save();
      res.status(201).json(adminInDB);
    } catch (error) {
      return next(setError(500, error.message || "Failed creating Admin"));
    }
  };
  
  const login = async (req, res, next) => {
    try {
      const adminInDb = await Admin.findOne({ nombreUsuario: req.body.nombreUsuario });
      if (!adminInDb) return next(setError(404, "Admin not found"));
  
      if (bcrypt.compareSync(req.body.contraseña, adminInDb.contraseña)) {
        const token = createToken(adminInDb._id, adminInDb.contraseña);
        return res.status(200).json({ adminInDb, token });
      } else {
        return next(setError(401, "Invalid password"));
      }
    } catch (error) {
      return next(setError(500, error.message || "Failed authenticating Admin"));
    }
  };
  
  const updateUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedUser) return next(setError(404, "User not found"));
      return res.status(201).json({
        message: "Updated User",
        updatedUser,
      });
    } catch (error) {
      return next(setError(500, error.message || "Failed to update user"));
    }
  };
  
  const removeUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedUser = await User.findByIdAndDelete(id);
      if (deletedUser.imagenPerfil) {
        deleteFile(deletedUser.imagenPerfil);
      }
      if (!deletedUser) {
        return next(setError(404, "User not found"));
      }
      return res.status(200).json({
        message: "User deleted",
        deletedUser,
      });
    } catch (error) {
      return next(setError(500, error.message || "Failed to delete user"));
    }
  };
  
  const getAllUsers = async (req, res, next) => {
    try {
      const users = await User.find().sort({ createdAt: "desc" });
      return res.status(200).json({
        message: "All Users",
        users,
      });
    } catch (error) {
      return next(
        setError(500, error.message || "Failed recovering all users")
      );
    }
  };
  
  const getUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user) return next(setError(404, "User not found"));
      return res.status(200).json(user);
    } catch (error) {
      return next(setError(500, error.message || "Failed recovering user"));
    }
  };
  
  module.exports = { register, login, updateUser, removeUser, getAllUsers, getUserById };
  */