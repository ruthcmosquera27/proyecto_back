const express = require("express");
const router = express.Router();
const empleadosController = require("../controllers/empleados.controller.js");

router.post("/", empleadosController.create)

module.exports = router