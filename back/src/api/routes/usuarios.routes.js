//---- Ahora, traemos nuestras rutas para gestionarlo con express
const UserRoutes = require("express").Router();

//---- Nos traemos la función upload de los middlewares
const upload = require("../../middlewares/file");

//---- Nos traemos las funciones de autenticación de nuestro middlewares auth
const { authorize } = require("../../middlewares/auth");

//---- Nos traemos todas las funciones que acabamos de crear en nuestro controlador
const {
  getAll,
  getById,
  getByUserName,
  register,
  login,

} = require("../controllers/usuarios.controller");

UserRoutes.post("/signup", upload.single("avatar"), register);
UserRoutes.post("/login", login);
UserRoutes.get("/", getAll);
UserRoutes.get("/:id", getById);
UserRoutes.get("/user/:username", getByUserName);

module.exports = UserRoutes;
