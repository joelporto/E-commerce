const express = require('express');
const router = express.Router();
const Controller = require('../controller/index');

router.get("/", (req,res) =>{Controller.getUser(req,res)});

router.post("/", (req,res) =>{Controller.createUser(req,res)});

module.exports = router