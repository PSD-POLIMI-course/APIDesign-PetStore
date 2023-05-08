class Pets {

    constructor() {
        console.log("create pet lists");
        this.list = [];
    }

    addPet(pet) {
        this.list.push(pet);
    } 

    removePet(id) {
        var index = this.list.indexOf(id);
        if (index >-1) {
            this.list.splice(index, 1);
        }
    }
}