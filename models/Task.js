
module.exports = class Task {
    constructor (id, tittle, description, done=false,createdAT=(new Date)) {
        this.id = id;
        this.tittle = tittle;
        this.description = description;
        this.done = done;
        this.createdAT = createdAT;
    }

    renew (newTittle, newDescription, done) {
        this.tittle = newTittle;
        this.description = newDescription;
        this.done = done;
    }
}