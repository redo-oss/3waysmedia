const express = require("express");
const route = express.Router();

const controller = require('../controllers/newsletterController')
route.get('/', controller.newsletter);

module.exports = route;
