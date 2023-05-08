
var myPets = [
    {
        id: 1,
        name: "dog"
    },
    {
        id: 2,
        name: "cat"
    }

];

module.exports.myPets = myPets;

module.exports.listPets = function listPets(req, res) {
    var a = JSON.stringify(myPets);
    console.log("sending " + a);
    res.send(
        myPets
        //message: 'This is the mockup controller for listPets'
    );
}

module.exports.createPets = function createPets(req, res) {
    console.log("received to add " + JSON.stringify(req.body))
    myPets.push(req.body);
    res.status(201).send({});
}

