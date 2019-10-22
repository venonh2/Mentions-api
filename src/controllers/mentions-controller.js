//const mongoose = require('mongoose');
//const Mentions = mongoose.model('Mentions');
const repository = require('../repositories/mentions-repository');

//list
exports.listMentions = async (req, res) => {
    try {const data = await repository.listMentions(); // veja agora só chama a fução de listar que foi movida
        
        res.status(200).send(data); // veja o '-_id' diz, cara não traga ele, serve para outras tbm
    } catch (e) {
        res.status(500).send({message: 'Falha ao carregar as menções' });
    }

};

// create
exports.createMention = async(req, res) => {
    try {
        const mention = new Mentions({
            friend: req.body.friend, // atenção, estava errado
            mention: req.body.mention
        });

        console.log(mention);

        await mention.save();

        res.status(201).send({ message: 'Menção cadastrada com sucesso' });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao cadastrar a menção' });
    };

};