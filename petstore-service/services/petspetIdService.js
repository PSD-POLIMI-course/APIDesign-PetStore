var myPets = require("./petsService").myPets;

module.exports.showPetById = function showPetById(req, res) {

    var result = myPets.find(o => o.id === JSON.parse(req.params.petId));
    console.log("found " + result + JSON.stringify(req.params.petId));

    res.send(result);
}

