const express = require('express');
const router = express.Router();
const mentionsController = require('../controllers/mentions-controller');

router.get('/', mentionsController.listMentions); // veja são os dois metodos que tem no fcontroller
router.post('/', mentionsController.createMention);


module.exports = router;