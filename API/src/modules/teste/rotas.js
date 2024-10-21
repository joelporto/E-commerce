const express = require('express');
const router = express.Router();
const Controller = require('./controler');

router.get("/", (req,res) =>{Controller.getTeste(req,res)});

router.post("/", (req,res) =>{Controller.createTeste(req,res)});

module.exports = router