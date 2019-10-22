//const mongoose = require('mongoose'); // caiu em desuso pq o mention-repository tem eles e estamos importando ele
//const Mentions = mongoose.model('Mentions');
const { validationResult } = require('express-validator'); // importando o express-validator, para valdiar dados inseridos da maneira correta ou retornar msg de erro
const repository = require('../repositories/mentions-repository');

//list
exports.listMentions = async (req, res) => {
    try {
        const data = await repository.listMentions(); // veja agora só chama a fução de listar que foi movida

        res.status(200).send(data); // veja o '-_id' diz, cara não traga ele, serve para outras tbm
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar as menções' });
    }

};

// create
exports.createMention = async (req, res) => {
    const { errors } = validationResult(req); // para realizar a validação
    if (errors.length > 0) { // talvez de rro
        return res.status(400).send({ message: errors })
    };
        try {
            await repository.createMention({ // veja o repository só chama a criação mas ele aidna passo os parametros
                friend: req.body.friend, // atenção, estava errado
                mention: req.body.mention
            });

            //  console.log(mention);

            // await mention.save();

            res.status(201).send({ message: 'Menção cadastrada com sucesso' });
        } catch (e) {
            res.status(500).send({ message: 'Falha ao cadastrar a menção' });
        };
    

};