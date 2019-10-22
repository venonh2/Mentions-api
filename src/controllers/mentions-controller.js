const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');


//list
exports.listMentions = async (req, res) => {
    try {
        const data = await Mentions.find({}, `friend mention -_id`); // antes estava só find({}), ou seja traga tudo agor estamos dizendo traga só esses dois
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