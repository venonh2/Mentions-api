const express = require('express');
const router = express.Router();
const {check} = require('express-validator'); // adicioando para realizar valida que os dados estão no modelo json
const mentionsController = require('../controllers/mentions-controller');



router.get('/', mentionsController.listMentions); // veja são os dois metodos que tem no fcontroller

router.post('/', [
    check('friend').isLength({min:7}).withMessage("O nome precisa ter no minimo 7 caractres"),
    check('mention').isLength({min:20, max:280}).withMessage("A menção deve ter min 20 e max 280 caracters")
], mentionsController.createMention)// aqui esta com validação, que tera validação no controller agr


//router.post('/', mentionsController.createMention); // veja como é o post sem nenhuma validação 


module.exports = router;