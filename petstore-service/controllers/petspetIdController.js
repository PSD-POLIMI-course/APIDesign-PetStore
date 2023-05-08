const service = require('../services/petspetIdService.js');

module.exports.showPetById = function showPetById(req, res) {
    service.showPetById(req, res);
}

