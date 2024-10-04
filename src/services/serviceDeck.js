const { v4: UUIDV4 } = require('uuid');
const deckRepository = require('../repositories/repositoryDeck');

class deckService{
    async getCards(){
        return deckRepository.findAll();
    }

    async createDeck(deck){
       if(deck.nomeDoDeck.length > 60){
            throw new Error('Nome do Deck deve ser menor que 60 caracteres');
       }

       if(deck.descricao.length < 30 || deck.descricao.length > 300){
        throw new Error('Defense must be between 0 and 500');
    }


    }
}

module.exports = new deckService();