const deck = require('../models/deck')

class repositoryDeck {
    async createDeck(deck){
        return await deck.create(user);
    }

    async findAll(){
        return await deck.findAll();
    }

}

module.exports = new repositoryDeck();