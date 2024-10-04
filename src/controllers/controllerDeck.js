const express = require('express');
const serciceDeck = require('../services/serviceDeck');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.post('/register', authenticateToken, async(req, res) =>{
    try{
        const { idUsuario, nomeDoDeck, descricao } = req.body;
        const deck = deckService.createDeck({ idUsuario, nomeDoDeck, descricao });
        res.json(deck);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

router.get('/deck', authenticateToken, async(req, res) =>{
    try{
        const deck = await deckService.getDards();
        res.json(deck);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

module.exports = router;