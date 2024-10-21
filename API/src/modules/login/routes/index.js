const express = require("express");
const router = express.Router();
const Controller = require("../controller/index");

router.get("/", (req,res) => {Controller.logar(req,res)});

router.post("/", (req,res) => {Controller.validarBD(req, res)});

module.exports = router