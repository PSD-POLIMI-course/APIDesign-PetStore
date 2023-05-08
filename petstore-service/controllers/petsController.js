const service = require('../services/petsService.js');

module.exports.listPets = function listPets(req, res) {
    service.listPets(req, res);
}

module.exports.createPets = function createPets(req, res) {
    service.createPets(req, res);
}

